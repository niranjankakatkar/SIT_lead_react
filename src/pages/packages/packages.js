import React from 'react'
import Navbar from '../Navbar'

import { Autocomplete, TextField } from "@mui/material";

export default function packages() {

    const planTypeOptions = [
        { title: "Monthly" },
        { title: "Yearly" },
        { title: "Lifetime" },
    ];
   

    const discountOptions = [
        { title: "Fixed" },
        { title: "Percentage" },
        
    ];

  return (
    <>
    <div className="main-wrapper">
        
        <Navbar></Navbar>
        
        <div className="page-wrapper">
    <div className="content container-fluid pb-0">
        <div className="subscription-plane-head">
            <ul>
                <li>
                    <a href="packages.html" className="active">Subscription Plans</a>
                </li>
                <li>
                    <a href="subscription.html">Subscribers List</a>
                </li>
            </ul>
        </div>

        <div className="page-header">
            <div className="content-page-header">
                <h5>Plans List</h5>
                <div className="page-content">
                    <div className="list-btn">
                        <ul className="filter-list">
                            <li>
                                <a className="btn-filters active" href="packages.html" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom" title="Grid-View"><span><i
                                            className="fe fe-grid"></i></span></a>
                            </li>
                            <li>
                                <a className="btn-filters" href="plans-list.html" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom" title="List-View"><span><i
                                            className="fe fe-list"></i></span></a>
                            </li>
                            <li>
                                <a className="btn-filters" href="#top" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom" title="Refresh"><span><i
                                            className="fe fe-refresh-ccw"></i></span></a>
                            </li>
                            <li>
                                <a className="btn btn-filters w-auto popup-toggle" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom" title="Filter"><span className="me-2"><img
                                            src="assets/img/icons/filter-icon.svg" alt="filter"/></span>Filter
                                </a>
                            </li>
                            <li>
                                <div className="dropdown dropdown-action" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom" title="Download">
                                    <a href="#" className="btn btn-filters" data-bs-toggle="dropdown"
                                        aria-expanded="false"><span className="me-2"><i
                                                className="fe fe-download"></i></span>Export</a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <ul className="d-block">
                                            <li>
                                                <a className="d-flex align-items-center download-item"
                                                    href="#top" download><i
                                                        className="far fa-file-pdf me-2"></i>Export as PDF</a>
                                            </li>
                                            <li>
                                                <a className="d-flex align-items-center download-item"
                                                    href="#top" download><i
                                                        className="far fa-file-text me-2"></i>Export as Excel</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="btn btn-filters" href="#top" data-bs-toggle="tooltip"
                                    data-bs-placement="bottom" title="Print"><span className="me-2"><i
                                            className="fe fe-printer"></i></span> Print
                                </a>
                            </li>
                            <li>
                                <a className="btn btn-primary" href="#" data-bs-toggle="modal"
                                    data-bs-target="#add_newpackage"><i className="fa fa-plus-circle me-2"
                                        aria-hidden="true"></i>Add Plan</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="super-admin-list-head">
            <div className="row">
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="grid-info-item total-plane">
                                <div className="grid-info">
                                    <span>Total Plan</span>
                                    <h4>07</h4>
                                </div>
                                <div className="grid-head-icon">
                                    <i className="fe fe-package"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="grid-info-item active-plane">
                                <div className="grid-info">
                                    <span>Active Plans</span>
                                    <h4>07</h4>
                                </div>
                                <div className="grid-head-icon">
                                    <i className="fe fe-list"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="grid-info-item inactive-plane">
                                <div className="grid-info">
                                    <span>Inactive Plans</span>
                                    <h4>0</h4>
                                </div>
                                <div className="grid-head-icon">
                                    <i className="fe fe-pause-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="grid-info-item total-type">
                                <div className="grid-info">
                                    <span>No of Plan Types</span>
                                    <h4>04</h4>
                                </div>
                                <div className="grid-head-icon">
                                    <i className="fe fe-pocket"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="packages card">
                    <div className="package-header d-flex justify-content-between">
                        <div className="d-flex justify-content-between w-100">
                            <div className>
                                <h6>Monthly</h6>
                                <h4>Free</h4>
                            </div>
                            <span className="icon-frame d-flex align-items-center justify-content-center"><img
                                    src="assets/img/icons/price-01.svg" alt="img"/></span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur </p>
                    <h2>$0.00</h2>
                    <h6>What’s included</h6>
                    <ul>
                        <li><i className="fa-solid fa-circle-check"></i>2 Users</li>
                        <li><i className="fa-solid fa-circle-check"></i>1 Suppliers</li>
                        <li><i className="fa-solid fa-circle-check"></i>10 Products</li>
                        <li><i className="fa-solid fa-circle-check"></i>1 Invoice</li>
                    </ul>
                    <div className="d-flex justify-content-center package-edit">
                        <a className="btn-action-icon me-2" href="#top" data-bs-toggle="modal"
                            data-bs-target="#edit_package"><i className="fe fe-edit"></i></a>
                        <a className="btn-action-icon" href="#top" data-bs-toggle="modal"
                            data-bs-target="#delete_modal"><i className="fe fe-trash-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="packages card">
                    <div className="package-header d-flex justify-content-between">
                        <div className="d-flex justify-content-between w-100">
                            <div className>
                                <h6>Yearly</h6>
                                <h4>Basic</h4>
                            </div>
                            <span className="icon-frame d-flex align-items-center justify-content-center"><img
                                    src="assets/img/icons/price-02.svg" alt="img"/></span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur </p>
                    <h2>$19.99</h2>
                    <h6>What’s included</h6>
                    <ul>
                        <li><i className="fa-solid fa-circle-check"></i>5 Users</li>
                        <li><i className="fa-solid fa-circle-check"></i>5 Suppliers</li>
                        <li><i className="fa-solid fa-circle-check"></i>100 Products</li>
                        <li><i className="fa-solid fa-circle-check"></i>10 Invoice</li>
                    </ul>
                    <div className="d-flex justify-content-center package-edit">
                        <a className="btn-action-icon me-2" href="#top" data-bs-toggle="modal"
                            data-bs-target="#edit_package"><i className="fe fe-edit"></i></a>
                        <a className="btn-action-icon" href="#top" data-bs-toggle="modal"
                            data-bs-target="#delete_modal"><i className="fe fe-trash-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="packages card">
                    <div className="package-header d-flex justify-content-between">
                        <div className="d-flex justify-content-between w-100">
                            <div className>
                                <h6>Lifetime</h6>
                                <h4>Premium</h4>
                            </div>
                            <span className="icon-frame d-flex align-items-center justify-content-center"><img
                                    src="assets/img/icons/price-03.svg" alt="img"/></span>
                        </div>
                    </div>
                    <span className="recommend-text">Recommended</span>
                    <p>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur </p>
                    <h2>$6549.99</h2>
                    <h6>What’s included</h6>
                    <ul>
                        <li><i className="fa-solid fa-circle-check"></i>50 Users</li>
                        <li><i className="fa-solid fa-circle-check"></i>10 Suppliers</li>
                        <li><i className="fa-solid fa-circle-check"></i>1000 Products</li>
                        <li><i className="fa-solid fa-circle-check"></i>1000 Invoice</li>
                    </ul>
                    <div className="d-flex justify-content-center package-edit">
                        <a className="btn-action-icon me-2" href="#top" data-bs-toggle="modal"
                            data-bs-target="#edit_package"><i className="fe fe-edit"></i></a>
                        <a className="btn-action-icon" href="#top" data-bs-toggle="modal"
                            data-bs-target="#delete_modal"><i className="fe fe-trash-2"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <div className="packages card">
                    <div className="package-header d-flex justify-content-between">
                        <div className="d-flex justify-content-between w-100">
                            <div className>
                                <h6>Yearly</h6>
                                <h4>Enterprise</h4>
                            </div>
                            <span className="icon-frame d-flex align-items-center justify-content-center"><img
                                    src="assets/img/icons/price-04.svg" alt="img"/></span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur </p>
                    <h2>$99.99</h2>
                    <h6>What’s included</h6>
                    <ul>
                        <li><i className="fa-solid fa-circle-check"></i>1000 Users</li>
                        <li><i className="fa-solid fa-circle-check"></i>Unlimited Suppliers</li>
                        <li><i className="fa-solid fa-circle-check"></i>Unlimited Products</li>
                        <li><i className="fa-solid fa-circle-check"></i>Unlimited Invoice</li>
                    </ul>
                    <div className="d-flex justify-content-center package-edit">
                        <a className="btn-action-icon me-2" href="#top" data-bs-toggle="modal"
                            data-bs-target="#edit_package"><i className="fe fe-edit"></i></a>
                        <a className="btn-action-icon" href="#top" data-bs-toggle="modal"
                            data-bs-target="#delete_modal"><i className="fe fe-trash-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="modal custom-modal fade p-20" id="add_newpackage" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <div className="form-header modal-header-title text-start mb-0">
                            <h4 className="mb-0">Add New</h4>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <form action="#">
                        <div className="modal-body">
                            <h5 className="form-title">Plan Image</h5>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="profile-picture">
                                        <div className="upload-profile">
                                            <div className="profile-img company-profile-img">
                                                <img id="company-img" className="img-fluid me-0"
                                                    src="assets/img/companies/company-add-img.svg" alt="profile-img"/>
                                            </div>
                                            <div className="add-profile">
                                                <h5>Upload a New Photo</h5>
                                                <span>Profile-pic.jpg</span>
                                            </div>
                                        </div>
                                        <div className="img-upload">
                                            <label className="btn btn-upload">
                                                Upload <input type="file"/>
                                            </label>
                                            <a className="btn btn-remove">Remove</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h5 className="form-title mb-3">Plan Info</h5>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label>Plan Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Plan Name" value/>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label>Plan Type</label>
                                                <Autocomplete
                                                    options={planTypeOptions}
                                                    getOptionLabel={(option) => option.title}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            variant="outlined"
                                                            placeholder="Select Plan Type"
                                                            InputProps={{
                                                                ...params.InputProps,
                                                                style: { height: "35px" },
                                                            }}
                                                        />
                                                    )}
                                                    style={{ width: "100%" }}
                                                />
                                    </div>
                                </div>
                               
                                <div className="col-sm-12 col-md-6">
                                    <div className="input-block mb-3">
                                        <label className="d-flex justify-content-between">
                                            <span>Price</span>
                                            <span className="text-primary"><i
                                                    className="fa-solid fa-circle-exclamation me-2"></i>Set 0 for
                                                free</span>
                                        </label>
                                        <input type="text" className="form-control" placeholder="Enter Package Price"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <div className="input-block mb-3">
                                        <label>Discount Type</label>
                                        <Autocomplete
                                                    options={discountOptions}
                                                    getOptionLabel={(option) => option.title}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            variant="outlined"
                                                            placeholder="Select "
                                                            InputProps={{
                                                                ...params.InputProps,
                                                                style: { height: "35px" },
                                                            }}
                                                        />
                                                    )}
                                                    style={{ width: "100%" }}
                                                />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                    <div className="input-block mb-3">
                                        <label>Discount</label>
                                        <input type="text" className="form-control" placeholder="Enter Discount"/>
                                    </div>
                                </div>
                               
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="input-block mb-3">
                                        <label>Max Customers</label>
                                        <input type="number" className="form-control" placeholder="0"/>
                                    </div>
                                </div>
                                
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="input-block mb-3">
                                        <label>Service Provider</label>
                                        <input type="number" className="form-control" placeholder="0"/>
                                    </div>
                                </div>
                            </div>
                            <h6>Plan Modules</h6>
                            <div className="input-block mb-3">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox"  /> Select All
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox"  /> Invoices
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox"  /> Payments
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox"  /> Payment Summary
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox"  />Vendors
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" /> Estimates
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" /> Quotations
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" /> Memberships
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" />Customers
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" /> Recurring Invoices
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" /> Delivery Challans
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" /> Products
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" />Vendors
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" /> Expenses
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" /> Reports
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" /> Inventory
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="checkboxes">
                                            <label>
                                                <input type="checkbox" name="checkbox" />Signature
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="input-block mb-3">
                                        <label>Description</label>
                                        <textarea rows="3" cols="5" className="form-control"
                                            placeholder="Enter Description"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <h6 className="mb-0">Status</h6>
                                <div className="status-toggle">
                                    <input id="status" className="check" type="checkbox"/>
                                    <label for="status" className="checktoggle checkbox-bg">checkbox</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal"
                                className="btn btn-back cancel-btn me-2">Cancel</button>
                            <button type="submit" data-bs-dismiss="modal" className="btn btn-primary paid-continue-btn">Save
                                Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


</div>
</>
  )
}
