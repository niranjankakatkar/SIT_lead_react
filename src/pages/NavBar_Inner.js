import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

export default function NavBar_Inner() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }
    return (
        <>
            <div className="header header-one">
                <a href="index.html"
                    className="d-inline-flex d-sm-inline-flex align-items-center d-md-inline-flex d-lg-none align-items-center device-logo">
                    <img src="../assets/img/logo.png" className="img-fluid logo2" alt="Logo" />
                </a>
                <div className="main-logo d-inline float-start d-lg-flex align-items-center d-none d-sm-none d-md-none">
                    <div className="logo-white">
                        <a href="index.html">
                            <img src="../assets/img/logo-full-white.png" className="img-fluid logo-blue" alt="Logo" />
                        </a>
                        <a href="index.html">
                            <img src="../assets/img/logo-small-white.png" className="img-fluid logo-small" alt="Logo" />
                        </a>
                    </div>
                    <div className="logo-color">
                        <a href="index.html">
                            <img src="../assets/img/logo.png" className="img-fluid logo-blue" alt="Logo" />
                        </a>
                        <a href="index.html">
                            <img src="../assets/img/logo-small.png" className="img-fluid logo-small" alt="Logo" />
                        </a>
                    </div>
                </div>

                <a href="javascript:void(0);" id="toggle_btn">
                    <span className="toggle-bars">
                        <span className="bar-icons"></span>
                        <span className="bar-icons"></span>
                        <span className="bar-icons"></span>
                        <span className="bar-icons"></span>
                    </span>
                </a>


                <div className="top-nav-search">
                    <form>
                        <input type="text" className="form-control" placeholder="Search here" />
                        <button className="btn" type="submit"><img src="../assets/img/icons/search.svg" alt="img" /></button>
                    </form>
                </div>


                <a className="mobile_btn" id="mobile_btn">
                    <i className="fas fa-bars"></i>
                </a>


                <ul className="nav nav-tabs user-menu">

                    <li className="nav-item dropdown has-arrow flag-nav">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
                            <img src="../assets/img/flags/us1.png" alt="flag" /><span>English</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="../assets/img/flags/us.png" alt="flag" /><span>English</span>
                            </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="../assets/img/flags/fr.png" alt="flag" /><span>French</span>
                            </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="../assets/img/flags/es.png" alt="flag" /><span>Spanish</span>
                            </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="../assets/img/flags/de.png" alt="flag" /><span>German</span>
                            </a>
                        </div>
                    </li>

                    <li className="nav-item dropdown  flag-nav dropdown-heads">
                        <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button">
                            <i className="fe fe-bell"></i> <span className="badge rounded-pill"></span>
                        </a>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <div className="notification-title">Notifications <a href="notifications.html">View all</a>
                                </div>
                                <a href="javascript:void(0)" className="clear-noti d-flex align-items-center">Mark all as read
                                    <i className="fe fe-check-circle"></i></a>
                            </div>
                            <div className="noti-content">

                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="#">Clear All</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item  has-arrow dropdown-heads ">
                        <a href="javascript:void(0);" className="win-maximize">
                            <i className="fe fe-maximize"></i>
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a href="javascript:void(0)" className="user-link  nav-link" data-bs-toggle="dropdown">
                            <span className="user-img">
                                <img src="../assets/img/profiles/avatar-07.jpg" alt="img" className="profilesidebar" />
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
                                            <a className="dropdown-item" href="profile.html">Profile</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="settings.html">Settings</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="subscription-logout">
                                    <ul>
                                        <li className="pb-0">
                                            <Link className="dropdown-item" onClick={handleLogout}>Log Out</Link>
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
                                <li className="menu-title"><span>Main</span></li>
                                <a href="#"><i className="fe fe-users"></i><span>Customers</span> <span
                                    className="menu-arrow"></span></a>



                            </ul>
                            <button className="viewmoremenu">More Menu</button>

                        </nav>
                        <ul className="sidebar-vertical">

                            <li className="menu-title"><span>Main</span></li>
                            <li>
                                <Link to="/dashboard"><i className="fe fe-home"></i> <span>Dashboard</span></Link>
                            </li>







                            <li className="menu-title"><span>User Management</span></li>
                            <li>
                                <Link to="/user"><i className="fe fe-user"></i> <span>Users</span></Link>
                            </li>
                            <li>
                                <a href="#"><i className="fe fe-clipboard"></i> <span>Roles &
                                    Permission</span></a>
                            </li>
                            <li>
                                <a href="#"><i className="fe fe-trash-2"></i> <span>Delete Account
                                    Request</span></a>
                            </li>

                            <li className="menu-title"><span>Franchisee Management</span></li>
                            <li>
                                <Link to="/franchisee"><i className="fe fe-user"></i> <span>Franchisee</span></Link>
                            </li>



                            <li className="menu-title"><span>Membership</span></li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-book"></i> <span> Membership</span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: 'none' }}>
                                    <li><a href="membership-plans.html">Membership Plans</a></li>
                                    <li><a href="membership-addons.html">Membership Addons</a></li>
                                    <li><a href="subscribers.html">Subscribers</a></li>
                                    <li><a href="transactions.html">Transactions</a></li>
                                </ul>
                            </li>



                            <li className="menu-title"><span>Support</span></li>
                            <li>
                                <a href="contact-messages.html"><i className="fe fe-printer"></i> <span>Contact
                                    Messages</span></a>
                            </li>
                            <li className="submenu">
                                <a href="#"><i className="fe fe-save"></i> <span> Tickets</span> <span
                                    className="menu-arrow"></span></a>
                                <ul style={{ display: 'none' }}>
                                    <li><a href="tickets.html">Tickets</a></li>
                                    <li><a href="tickets-list.html">Tickets List</a></li>
                                    <li><a href="tickets-kanban.html">Tickets Kanban</a></li>
                                    <li><a href="ticket-details.html">Ticket Overview</a></li>
                                </ul>
                            </li>







                            <li className="menu-title"><span>Settings</span></li>
                            <li>
                                <a href="settings.html"><i className="fe fe-settings"></i> <span>Settings</span></a>
                            </li>
                            <li>
                                <Link onClick={handleLogout}><i className="fe fe-power"></i> <span>Logout</span></Link>
                            </li>

                            <li className="menu-title">
                                <span>Extras</span>
                            </li>
                            <li>
                                <a href="#"><i className="fe fe-file-text"></i> <span>Documentation</span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><i className="fe fe-lock"></i> <span>Change Log</span> <span
                                    className="badge badge-primary ms-auto">v2.0.4</span></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}
