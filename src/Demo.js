import React from "react";
import {
  Box,
  Typography,
  Badge,
  Card,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import Navbar from "./pages/Navbar";


const Demo = () => {
  return (
    <div className="main-wrapper">

         <Navbar></Navbar>
         <div className="page-wrapper">
      <Box sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <img
            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report.png"
            alt="icon"
            className="w--22"
          />
          <Box ml={2}>
            <Typography variant="h4" component="span">
              Transaction Report
            </Typography>
           
          </Box>
        </Box>

        <Card className="card-body" sx={{ mb: 3, p: 3 }}>
          <Typography variant="h5">Search Data</Typography>
          <form
            action="https://6ammart-admin.6amtech.com/admin/transactions/report/set-date"
            method="post"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  {/* <InputLabel>Modules</InputLabel> */}
                  <Select defaultValue={1} name="module_id">
                    <MenuItem value={1}>Grocery</MenuItem>
                    <MenuItem value={2}>Pharmacy</MenuItem>
                    <MenuItem value={3}>Shop</MenuItem>
                    <MenuItem value={4}>Food</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  {/* <InputLabel>Zones</InputLabel> */}
                  <Select defaultValue="all" name="zone_id">
                    <MenuItem value="all">All Zones</MenuItem>
                    <MenuItem value={1}>Main Demo Zone</MenuItem>
                    <MenuItem value={2}>سوبر ماركت</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  {/* <InputLabel>Stores</InputLabel> */}
                  <Select defaultValue="all" name="store_id">
                    <MenuItem value="all">All Stores</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  {/* <InputLabel>Filter</InputLabel> */}
                  <Select defaultValue="this_year" name="filter">
                    <MenuItem value="all_time">All Time</MenuItem>
                    <MenuItem value="this_year">This Year</MenuItem>
                    <MenuItem value="previous_year">Previous Year</MenuItem>
                    <MenuItem value="this_month">This Month</MenuItem>
                    <MenuItem value="this_week">This Week</MenuItem>
                    <MenuItem value="custom">Custom</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3} sx={{ ml: "auto" }}>
                <Button type="submit" variant="contained" fullWidth>
                  Filter
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/trx1.png"
                    alt="icon"
                    style={{ marginBottom: "1rem" }}
                  />
                  <Typography variant="h4" color="text.primary">
                    $858.40
                  </Typography>
                  <Typography variant="subtitle1">
                    Completed Transaction
                  </Typography>
                  <Tooltip
                    title="When the order is successfully delivered, full order amount goes to this section."
                    placement="top"
                  >
                    <IconButton>
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info1.png"
                        alt="info"
                      />
                    </IconButton>
                  </Tooltip>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/trx3.png"
                    alt="icon"
                    style={{ marginBottom: "1rem" }}
                  />
                  <Typography variant="h4" color="text.secondary">
                    $0.00
                  </Typography>
                  <Typography variant="subtitle1">
                    Refunded Transaction
                  </Typography>
                  <Tooltip
                    title="If the order is successfully refunded, the full order amount goes to this section without delivery fees."
                    placement="top"
                  >
                    <IconButton>
                      <img
                        src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info1.png"
                        alt="info"
                      />
                    </IconButton>
                  </Tooltip>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card sx={{ p: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/admin-earning.png"
                      alt="icon"
                      style={{ marginRight: "1rem" }}
                    />
                    <Box>
                      <Typography variant="h6">Admin Earning</Typography>
                      <Tooltip
                        title="Deducting the admin discount from the admin earning amount."
                        placement="right"
                      >
                        <IconButton>
                          <img
                            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info1.png"
                            alt="info"
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                  <Typography variant="h4" color="primary">
                    $62.58
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ p: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/store-earning.png"
                      alt="icon"
                      style={{ marginRight: "1rem" }}
                    />
                    <Box>
                      <Typography variant="h6">Store Earning</Typography>
                      <Tooltip
                        title="Adding store earning amount with vat/tax amount."
                        placement="right"
                      >
                        <IconButton>
                          <img
                            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info1.png"
                            alt="info"
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                  <Typography variant="h4" color="secondary">
                    $225.82
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ p: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/deliveryman-earning.png"
                      alt="icon"
                      style={{ marginRight: "1rem" }}
                    />
                    <Box>
                      <Typography variant="h6">Deliveryman Earning</Typography>
                      <Tooltip
                        title="Deducting admin commission on the delivery fee, the delivery fee & tips amount goes to this section."
                        placement="right"
                      >
                        <IconButton>
                          <img
                            src="https://6ammart-admin.6amtech.com/public/assets/admin/img/report/new/info1.png"
                            alt="info"
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                  <Typography variant="h4" color="warning">
                    $570.00
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      </div>
    </div>
  );
};

export default Demo;
