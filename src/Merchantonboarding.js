import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import axios from "axios";
import { toast, Slide } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Merchantonboarding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    bname: "",
    btype: "",
    baddress: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let formErrors = {};
    const { name, email, mobileno, bname, btype, baddress, pincode } = formData;

    if (!name) {
      formErrors.name = "Name is required";
    }

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }

    if (!mobileno) {
      formErrors.mobileno = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobileno)) {
      formErrors.mobileno = "Mobile number must be 10 digits";
    }

    if (!bname) {
      formErrors.bname = "Business name is required";
    }

    if (!btype) {
      formErrors.btype = "Business type is required";
    }

    if (!baddress) {
      formErrors.baddress = "Business address is required";
    }

    if (!pincode) {
      formErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(pincode)) {
      formErrors.pincode = "Pincode must be 6 digits";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const { name, email, mobileno, bname, btype, baddress, pincode } = formData;

    try {
      const response = await axios.post(
        "http://43.205.22.150:5000/merchantonboarding/createMerchant",
        {
          name,
          email,
          mobileno,
          bname,
          btype,
          baddress,
          pincode,
        }
      );
      console.log(response);
      toast.success("Record Added Successfully", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Slide,
      });
      navigate("/nextPage");
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Slide,
      });
      console.log(error);
    }
  };

  return (
    <Container>
      <Box my={5} display="flex" justifyContent="center">
        <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 600 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
            color="primary"
          >
            Merchant <span style={{ color: "#00BFFF" }}>Onboarding</span>
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box mt={4}>
              <Typography variant="h5" gutterBottom color="textSecondary">
                Personal Info
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                    name="mobileno"
                    type="tel"
                    value={formData.mobileno}
                    onChange={handleChange}
                    error={!!errors.mobileno}
                    helperText={errors.mobileno}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box mt={4}>
              <Typography variant="h5" gutterBottom color="textSecondary">
                Business Info
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Business Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="bname"
                    value={formData.bname}
                    onChange={handleChange}
                    error={!!errors.bname}
                    helperText={errors.bname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Business Type"
                    variant="outlined"
                    fullWidth
                    required
                    name="btype"
                    value={formData.btype}
                    onChange={handleChange}
                    error={!!errors.btype}
                    helperText={errors.btype}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Business Address"
                    variant="outlined"
                    fullWidth
                    required
                    name="baddress"
                    value={formData.baddress}
                    onChange={handleChange}
                    error={!!errors.baddress}
                    helperText={errors.baddress}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Pincode"
                    variant="outlined"
                    fullWidth
                    required
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    error={!!errors.pincode}
                    helperText={errors.pincode}
                  />
                </Grid>
              </Grid>
            </Box>

            <Box display="flex" justifyContent="center" mt={4}>
              <Button variant="contained" color="primary" type="submit">
                Next
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default Merchantonboarding;
