import { AttachFile } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ServiceLeadDetails() {
  const navigate = useNavigate();
  const [serviceId, setServiceId] = useState("");
  const [imagetitle, setImageTitle] = useState("");
  const [imagedescription, setImageDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [documentFile, setDocumentFile] = useState(null);
  const [videotitle, setVideoTitle] = useState("");
  const [videodescription, setVideoDescription] = useState("");
  const [documenttitle, setDocumentTitle] = useState("");
  const [documentdescription, setDocumentDescription] = useState("");
  const [howitworks, setHowItWorks] = useState("");
  const [tandc, setTandC] = useState("");
  const [faqs, setFaqs] = useState("");
  const [activeFlag, setActiveFlag] = useState(false);

  const handleFileUpload = (event, setFile) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("serviceId", serviceId);
    formData.append("imagetitle", imagetitle);
    formData.append("imagedescription", imagedescription);
    if (imageFile) formData.append("imageFile", imageFile);
    formData.append("videotitle", videotitle);
    formData.append("videodescription", videodescription);
    if (videoFile) formData.append("videoFile", videoFile);
    formData.append("documenttitle", documenttitle);
    formData.append("documentdescription", documentdescription);
    if (documentFile) formData.append("documentFile", documentFile);
    formData.append("howitworks", howitworks);
    formData.append("tandc", tandc);
    formData.append("faqs", faqs);
    formData.append("activeFlag", activeFlag ? "1" : "0");

    axios
      .post(
        "http://localhost:5000/serviceleaddetails/createServiceLead",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        //console.log(res);
        toast.success("Record Added Successfully", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Slide,
        });
        // Reset form fields
        setServiceId("");
        setImageTitle("");
        setImageDescription("");
        setImageFile(null);
        setVideoTitle("");
        setVideoDescription("");
        setVideoFile(null);
        setDocumentTitle("");
        setDocumentDescription("");
        setDocumentFile(null);
        setHowItWorks("");
        setTandC("");
        setFaqs("");
        setActiveFlag(false);

        navigate("/servicetab");
      })
      .catch((err) => {
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Slide,
        });
        //console.log(err);
      });
  };

  return (
    <Container
      maxWidth="md"
      sx={{ bgcolor: "#f9f9f9", padding: 4, borderRadius: 2 }}
    >
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          border: "1px solid #ccc",
          padding: 3,
          margin: "auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Service Information
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Service ID
              </Typography>
              <TextField
                fullWidth
                label="Service ID"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
              />
            </Grid>

            {/* Image Title, Description, and File Upload */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Image Title
              </Typography>
              <TextField
                fullWidth
                label="Image Title"
                value={imagetitle}
                onChange={(e) => setImageTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Image Description
              </Typography>
              <TextField
                fullWidth
                label="Image Description"
                value={imagedescription}
                onChange={(e) => setImageDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Upload Image File
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                border="1px dashed #ccc"
                padding={2}
                borderRadius={1}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, setImageFile)}
                  style={{ display: "none" }}
                  id="image-upload"
                />
                <label htmlFor="image-upload">
                  <IconButton color="primary" component="span">
                    <AttachFile />
                  </IconButton>
                </label>
                <Typography variant="body2">
                  {imageFile ? imageFile.name : "Upload Image File"}
                </Typography>
              </Box>
            </Grid>

            {/* Video Title, Description, and File Upload */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Video Title
              </Typography>
              <TextField
                fullWidth
                label="Video Title"
                value={videotitle}
                onChange={(e) => setVideoTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Video Description
              </Typography>
              <TextField
                fullWidth
                label="Video Description"
                value={videodescription}
                onChange={(e) => setVideoDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Upload Video File
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                border="1px dashed #ccc"
                padding={2}
                borderRadius={1}
              >
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileUpload(e, setVideoFile)}
                  style={{ display: "none" }}
                  id="video-upload"
                />
                <label htmlFor="video-upload">
                  <IconButton color="primary" component="span">
                    <AttachFile />
                  </IconButton>
                </label>
                <Typography variant="body2">
                  {videoFile ? videoFile.name : "Upload Video File"}
                </Typography>
              </Box>
            </Grid>

            {/* Document Title, Description, and File Upload */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Document Title
              </Typography>
              <TextField
                fullWidth
                label="Document Title"
                value={documenttitle}
                onChange={(e) => setDocumentTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Document Description
              </Typography>
              <TextField
                fullWidth
                label="Document Description"
                value={documentdescription}
                onChange={(e) => setDocumentDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                Upload Document File
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                border="1px dashed #ccc"
                padding={2}
                borderRadius={1}
              >
                <input
                  type="file"
                  accept="application/*"
                  onChange={(e) => handleFileUpload(e, setDocumentFile)}
                  style={{ display: "none" }}
                  id="document-upload"
                />
                <label htmlFor="document-upload">
                  <IconButton color="primary" component="span">
                    <AttachFile />
                  </IconButton>
                </label>
                <Typography variant="body2">
                  {documentFile ? documentFile.name : "Upload Document File"}
                </Typography>
              </Box>
            </Grid>

            {/* Other Form Fields */}
            <Grid item xs={12}>
              <TextField
                label="How It Works"
                multiline
                rows={4}
                fullWidth
                value={howitworks}
                onChange={(e) => setHowItWorks(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Terms and Conditions"
                multiline
                rows={4}
                fullWidth
                value={tandc}
                onChange={(e) => setTandC(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="FAQs"
                multiline
                rows={4}
                fullWidth
                value={faqs}
                onChange={(e) => setFaqs(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default ServiceLeadDetails;
