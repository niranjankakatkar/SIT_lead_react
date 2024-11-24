import React from "react";
import { Typography, Box, Button, Container, Paper } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Stepper, Step, StepLabel } from "@mui/material";

const CongratulationsPage = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Box>
        <h2 className="text-center mb-4 font-weight-bold">
          Store <span style={{ color: "#00be65" }}>Application</span>
        </h2>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <CheckCircleOutlineIcon
              style={{
                fontSize: 80,
                color: "green",
                animation: "bounce 1s infinite",
              }}
            />
          </Box>

          <Typography
            variant="h4"
            gutterBottom
            style={{ fontSize: "17px", fontWeight: "bold" }}
          >
            Congratulations!
          </Typography>

          <Typography variant="body1" gutterBottom>
            You've opted for our commission-based plan. Admin will review the
            details and activate your account shortly.
          </Typography>

          <Button
            variant="contained"
            style={{
              backgroundColor: "green",
              color: "white",
              "&:hover": { backgroundColor: "#45a049" },
            }}
            href="#"
          >
            Visit here
          </Button>
        </Paper>

        <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
      </Box>
    </Container>
  );
};

export default CongratulationsPage;
