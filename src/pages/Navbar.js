import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);

  let history = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:5000/module/getAllModule")
      .then((res) => {
        // setName(res.data.name);
        //  setEmail(res.data.email);
        //setMobileno(res.data.mobileno);
        setModules(res.data);
        ////console.log("---------A"+res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!token) {
    navigate("/");
  } else {
    // getUserData(token);
  }

  const handleLogout = () => {
    // localStorage.removeItem("token");
    localStorage.removeItem("token");
  };
  return (
    <>
      <div className="header header-one">
        <Link
          to="/dashboard"
          className="d-inline-flex d-sm-inline-flex align-items-center d-md-inline-flex d-lg-none align-items-center device-logo "
        >
          <img
            src="assets/img/logo.png"
            className="img-fluid logo2 mt-0 h-100 w-80"
            alt="Logo"
          />
        </Link>
        <div className="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
          <div className="logo-white">
            <Link to="/dashboard">
              <img
                src="assets/img/logo-full-white.png"
                className="img-fluid logo-blue"
                alt="Logo"
              />
            </Link>
            <Link to="/dashboard">
              <img
                src="assets/img/logo-small-white.png"
                className="img-fluid logo-small"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="logo-color">
            <Link to="/dashboard">
              <img
                src="assets/img/logo.png"
                className="img-fluid logo-blue"
                alt="Logo"
              />
            </Link>
            <Link to="/dashboard">
              <img
                src="assets/img/logo-small.png"
                className="img-fluid logo-small"
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        <a href="#" id="toggle_btn">
          <span className="toggle-bars">
            <span className="bar-icons"></span>
            <span className="bar-icons"></span>
            <span className="bar-icons"></span>
            <span className="bar-icons"></span>
          </span>
        </a>

        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <img src="assets/img/icons/search.svg" alt="img" />
            </button>
          </form>
        </div>

        <a className="mobile_btn" id="mobile_btn">
          <i className="fas fa-bars"></i>
        </a>

        <ul className="nav nav-tabs user-menu">
          <li className="nav-item dropdown has-arrow flag-nav">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              <img src="assets/img/flags/us1.png" alt="flag" />
              <span>Main</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              {modules.map((list, index) => {
                return (
                  <a
                    key={index}
                    href="#"
                    className="dropdown-item"
                  >
                    <img
                      src={`http://43.205.22.150:5000/users/${list.filename}`}
                      alt="Module Image"
                    />
                    <span>
                      <b>{list.module}</b>
                    </span>
                  </a>
                );
              })}
            </div>
          </li>

          <li className="nav-item dropdown  flag-nav dropdown-heads">
            <a
              className="nav-link"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              <i className="fe fe-bell"></i>{" "}
              <span className="badge rounded-pill"></span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <div className="notification-title">
                  Notifications <a href="notifications.html">View all</a>
                </div>
                <a
                  href="javascript:void(0)"
                  className="clear-noti d-flex align-items-center"
                >
                  Mark all as read
                  <i className="fe fe-check-circle"></i>
                </a>
              </div>
              <div className="noti-content"></div>
              <div className="topnav-dropdown-footer">
                <a href="#">Clear All</a>
              </div>
            </div>
          </li>
          <li className="nav-item  has-arrow dropdown-heads ">
            <a href="#" className="win-maximize">
              <i className="fe fe-maximize"></i>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              href="javascript:void(0)"
              className="user-link  nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  src="assets/img/profiles/avatar-07.jpg"
                  alt="img"
                  className="profilesidebar"
                />
                <span className="animate-circle"></span>
              </span>
              <span className="user-content">
                <span className="user-details">Admin</span>
                <span className="user-name">ABC</span>
              </span>
            </a>
            <div className="dropdown-menu menu-drop-user">
              <div className="profilemenu">
                <div className="subscription-menu">
                  <ul>
                    <li>
                      <a className="dropdown-item" href="profile.html">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="settings.html">
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="subscription-logout">
                  <ul>
                    <li className="pb-0">
                      <Link className="dropdown-item" onClick={handleLogout}>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <nav className="greedys sidebar-horizantal">
              <ul className="list-inline-item list-unstyled links">
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <a href="#">
                  <i className="fe fe-users"></i>
                  <span>Customers</span> <span className="menu-arrow"></span>
                </a>
              </ul>
              <button className="viewmoremenu">More Menu</button>
            </nav>
            <ul className="sidebar-vertical">
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li>
                <Link to="/dashboard">
                <i className="fa-solid fa-house"></i> <span>Dashboard</span>
                </Link>
              </li>

              <li className="menu-title">
                <span>User Management</span>
              </li>
              <li>
                <Link to="/user">
                <i className="fa-solid fa-user"></i> <span>Users</span>
                </Link>
              </li>
              <li className="menu-title">
                <span>Seller Onboarding</span>
              </li>
              <li>
                <Link to="/seller">
                <i className="fa-solid fa-business-time"></i>
                  <span>Seller</span>
                </Link>
              </li>

              {/* <li>
                <a href="#">
                  <i className="fe fe-clipboard"></i>{" "}
                  <span>Roles & Permission</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fe fe-trash-2"></i>{" "}
                  <span>Delete Account Request</span>
                </a>
              </li> */}

              <li className="menu-title">
                <span>Franchisee Management</span>
              </li>
              <li>
                <Link to="/franchisee">
                <i className="fa-solid fa-layer-group"></i>
                  <span>Franchisee</span>
                </Link>
              </li>

              <li className="menu-title">
                <span>Pramotion Management </span>
              </li>

              <li className="submenu">
                <Link to="/banner">
                <i className="fa-solid fa-tablet-screen-button"></i>
                <span>Banner</span>
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/banner">
                      <img src="/assets/icons/franchise.png" />{" "}
                      <span>Banner List</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/addbanner">
                      <img src="/assets/icons/franchise.png" />{" "}
                      <span>Add Banner</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <Link to="/coupon">
                <i className="fa-solid fa-ticket"></i> 
                <span>Coupons</span>
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/coupon">
                      <img src="/assets/icons/franchise.png" />{" "}
                      <span>Coupon List</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/addcoupon">
                      <img src="/assets/icons/franchise.png" />{" "}
                      <span>Add Coupon</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <Link to="/cashback">
                <i className="fa-solid fa-sack-dollar"></i>
                 <span>Cashback</span>
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/cashback">
                    <i className="fa-solid fa-wallet"></i>
                      <span>Cashback List</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/addcashback">
                    <i className="fa-solid fa-clipboard-list"></i>
                      <span>Add Cashback</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <Link to="/pushnotification">
                <i className="fa-solid fa-bell"></i><span>Push Notification</span>
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/pushnotification">
                      <img src="/assets/icons/franchise.png" />{" "}
                      <span>Notification List</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/addpushnotification">
                    <i className="fa-regular fa-circle-dot"></i>
                      <span>Add Notification</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="submenu">
                <Link to="/advertisement">
                <i className="fa-solid fa-video-slash"></i>
                  <span>Advertisement</span>
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link to="/advertisement">
                    <i className="fa-solid fa-video-slash"></i>
                      <span>Advertise List</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/addadvertisement">
                    <i className="fa-solid fa-video-slash"></i>
                      <span>New Advertisement</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/requestadvertisement">
                    <i className="fa-solid fa-person-circle-question"></i>
                      <span>Advertise Request</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-title">
                <span>Module</span>
              </li>
              <li>
                <Link to="/module">
                <i className="fa-solid fa-table"></i>
                  <span>Module</span>
                </Link>
              </li>
              <li>
                <Link to="/category">
                <i className="fa-solid fa-list"></i>
                  <span>Category</span>
                </Link>
              </li>
              <li>
                <Link to="/subcategory">
                <i className="fa-solid fa-list"></i>
                  <span>Sub-category</span>
                </Link>
              </li>
              <li>
                <Link to="/servicetab">
                <i className="fa-solid fa-server"></i>
                  <span>Services</span>
                </Link>
              </li>

              <li className="menu-title">
                <span>Onboarding</span>
              </li>
              {/* <li>
                <Link to="/seller">
                  <i className="fe fe-user"></i> <span>Seller Onboarding</span>
                </Link>
              </li> */}

              <li>
                <Link to="/merchant">
                <i className="fa-solid fa-clapperboard"></i>
                  <span>Merchant Onboarding</span>
                </Link>
              </li>

              <li className="menu-title">
                <span>Employee Management</span>
              </li>
              <li>
                <Link to="/employee">
                <i className="fa-solid fa-user"></i> <span>Employee</span>
                </Link>
              </li>
              <li>
                <Link to="/demo">
                  <img src="/assets/icons/demonstration.png" />{" "}
                  <span>Demo</span>
                </Link>
              </li>

              <li className="menu-title">
                <span>Membership</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-book"></i> <span> Membership</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="membership-plans.html">Membership Plans</a>
                  </li>
                  <li>
                    <a href="membership-addons.html">Membership Addons</a>
                  </li>
                  <li>
                    <a href="subscribers.html">Subscribers</a>
                  </li>
                  <li>
                    <a href="transactions.html">Transactions</a>
                  </li>
                </ul>
              </li>

              <li className="menu-title">
                <span>Support</span>
              </li>
              <li>
                <a href="contact-messages.html">
                <i className="fa-solid fa-message"></i>
                  <span>Contact Messages</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                <i className="fa-solid fa-file-invoice"></i> <span> Tickets</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="tickets.html">Tickets</a>
                  </li>
                  <li>
                    <a href="tickets-list.html">Tickets List</a>
                  </li>
                  <li>
                    <a href="tickets-kanban.html">Tickets Kanban</a>
                  </li>
                  <li>
                    <a href="ticket-details.html">Ticket Overview</a>
                  </li>
                </ul>
              </li>

              <li className="menu-title">
                <span>Settings</span>
              </li>
              <li>
                <a href="settings.html">
                <i className="fa-solid fa-gear"></i><span>Settings</span>
                </a>
              </li>
              <li>
                <Link onClick={handleLogout}>
                  <i className="fe fe-power"></i> <span>Logout</span>
                </Link>
              </li>

              <li className="menu-title">
                <span>Extras</span>
              </li>
              <li>
                <a href="#">
                <i className="fa-solid fa-file"></i> <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#">
                <i className="fa-solid fa-lock"></i> <span>Change Log</span>{" "}
                  <span className="badge badge-primary ms-auto">v2.0.4</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
