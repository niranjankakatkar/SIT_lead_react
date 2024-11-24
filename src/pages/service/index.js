import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import Services from "./Service";
import ServiceLeadDetails from "./ServiceLeadDetails";
import Navbar from "../Navbar";

const Service = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="main-wrapper">
    <Navbar></Navbar>
    <div className="page-wrapper">
    <Box sx={{ typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Services" value="1" />
            <Tab label="Product Details" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Services />
        </TabPanel>
        <TabPanel value="2">
          <ServiceLeadDetails />
        </TabPanel>
      </TabContext>
    </Box>
    </div>
    </div>
  );
};

export default Service;
