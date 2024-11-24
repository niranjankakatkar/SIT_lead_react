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

const SellerOnboarding = () => {
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
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Check for empty fields
    if (!formData.name) {
      isValid = false;
      tempErrors.name = "Name is required";
    }
    if (!formData.email) {
      isValid = false;
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      tempErrors.email = "Email is invalid";
    }
    if (!formData.mobileno) {
      isValid = false;
      tempErrors.mobileno = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.mobileno)) {
      isValid = false;
      tempErrors.mobileno = "Phone number should be 10 digits";
    }
    if (!formData.bname) {
      isValid = false;
      tempErrors.bname = "Business name is required";
    }
    if (!formData.btype) {
      isValid = false;
      tempErrors.btype = "Business type is required";
    }
    if (!formData.baddress) {
      isValid = false;
      tempErrors.baddress = "Business address is required";
    }
    if (!formData.pincode) {
      isValid = false;
      tempErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      isValid = false;
      tempErrors.pincode = "Pincode should be 6 digits";
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const { name, email, mobileno, bname, btype, baddress, pincode } =
        formData;

      try {
        const response = await axios.post(
          "http://43.205.22.150:5000/selleronboarding/createSeller",
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
    } else {
      toast.error("Please fix the errors", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Slide,
      });
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
            Seller <span style={{ color: "#00BFFF" }}>Onboarding</span>
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Personal Info */}
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

            {/* Business Info */}
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

            {/* Submit Button */}
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

export default SellerOnboarding;
