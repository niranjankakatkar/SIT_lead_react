import { Button, FormControlLabel, Switch } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import Navbar from "../Navbar";

export default function UpdateBanner() {
  const navigate = useNavigate();
  const { id } = useParams(); // Fetch the banner ID from the route params

  const [title, setTitle] = useState("");
  const [zone, setZone] = useState("");
  const [type, setType] = useState("");
  const [seller, setSeller] = useState("");
  const [activeFlag, setActiveFlag] = useState(true);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    // Fetch the banner data based on the ID to populate the form for updating
    axios
      .get(`http://localhost:5000/banner/${id}`)
      .then((response) => {
        const banner = response.data;
        setTitle(banner.title);
        setZone(banner.zone);
        setType(banner.type);
        setSeller(banner.seller);
        setActiveFlag(banner.activeFlag);
        setImagePreview(banner.imageUrl); // Assuming the existing image URL is in imageUrl
      })
      .catch((err) => console.error("Error fetching banner:", err));
  }, [id]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("zone", zone);
    formData.append("type", type);
    formData.append("seller", seller);
    formData.append("activeFlag", activeFlag);
    if (file) formData.append("file", file);

    axios
      .put(`http://localhost:5000/banner/updateSingleBanner/${id}`, formData)
      .then(() => {
        toast.success("Banner Updated Successfully", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Slide,
        });
        navigate("/banner");
      })
      .catch(() => {
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Slide,
        });
      });
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <div
        className="page-wrapper"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f4f4f4",
          padding: "20px",
          paddingTop: "0px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="modal-body"
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "30px",
            width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="form-field-item">
                <div className="profile-picture">
                  <div className="upload-profile">
                    <div className="profile-img company-profile-img">
                      <img
                        id="company-img"
                        className="img-fluid me-0"
                        src={
                          imagePreview ||
                          "assets/img/companies/company-add-img.svg"
                        }
                        alt="profile-img"
                      />
                    </div>
                    <div className="add-profile">
                      <h5>Upload a New Photo</h5>
                      <span>Profile-pic.jpg</span>
                    </div>
                  </div>
                  <div className="img-upload">
                    <label className="btn btn-upload">
                      Upload{" "}
                      <input
                        type="file"
                        accept="image/png,image/jpg,image/jpeg"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Title Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Zone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Zone"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Type</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Seller</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Seller"
                  value={seller}
                  onChange={(e) => setSeller(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="input-block mb-3">
                <FormControlLabel
                  control={
                    <Switch
                      checked={activeFlag}
                      onChange={() => setActiveFlag(!activeFlag)}
                    />
                  }
                  label="Active"
                />
              </div>
            </div>

            <div
              className="col-md-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="input-block">
                <Button type="submit" variant="contained" color="primary">
                  Update Banner
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
