import React, { useState } from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { toast, Slide } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import Navbar from "../Navbar";

export default function AddSeller() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [tax, setTax] = useState("");
  const [time, setTime] = useState(dayjs()); // Initialize with current time
  const [zone, setZone] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [ofname, setofName] = useState("");
  const [olname, setolName] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeFlag, setActiveFlag] = useState(true);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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
    formData.append("name", name);
    formData.append("address", address);
    formData.append("tax", tax);
    formData.append("time", time.format("HH:mm")); // Send the time in HH:mm format
    formData.append("zone", zone);
    formData.append("lat", lat);
    formData.append("long", long);
    formData.append("ofname", ofname);
    formData.append("olname", olname);
    formData.append("mobileno", mobileno);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", file);

    axios
      .post("http://localhost:5000/seller/createSellerImg", formData)
      .then(() => {
        toast.success("Record Added Successfully", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Slide,
        });
        navigate("/seller");
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
          paddingTop: "100px",
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

            {/* Seller Name */}
            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Seller Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Seller Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Tax */}
            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Tax</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Tax"
                  name="tax"
                  value={tax}
                  onChange={(e) => setTax(e.target.value)}
                />
              </div>
            </div>

            {/* Address */}
            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  placeholder="Enter Address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows="6"
                />
              </div>
            </div>

            {/* Zone */}
            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Zone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Zone"
                  name="zone"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                />
              </div>

              {/* Time Picker */}
              <div className="input-block mb-3">
                <label className="form-label">Time</label>
                <br></br>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    value={time}
                    onChange={(newTime) => setTime(newTime)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>

            {/* Latitude */}
            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Latitude"
                  name="lat"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                />
              </div>
            </div>

            {/* Longitude */}
            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Longitude"
                  name="long"
                  value={long}
                  onChange={(e) => setLong(e.target.value)}
                />
              </div>
            </div>

            {/* Owner First Name */}
            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Owner First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter First Name"
                  name="ofname"
                  value={ofname}
                  onChange={(e) => setofName(e.target.value)}
                />
              </div>
            </div>

            {/* Owner Last Name */}
            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Owner Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  name="olname"
                  value={olname}
                  onChange={(e) => setolName(e.target.value)}
                />
              </div>
            </div>

            {/* Mobile No */}
            <div className="col-md-4">
              <div className="input-block mb-3">
                <label className="form-label">Mobile No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile No"
                  name="mobileno"
                  value={mobileno}
                  onChange={(e) => setMobileno(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="col-md-4">
              <div className="input-block mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="col-md-4">
              <div className="input-block mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Active Flag */}
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

            {/* Submit Button */}
            <div
              className="col-md-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="input-block">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
