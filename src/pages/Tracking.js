import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Tracking.css";

import {
  FaTruck,
  FaHome,
  FaBox,
  FaChartBar,
  FaMapMarkedAlt,
  FaCog,
} from "react-icons/fa";

const shipments = [
  {
    id: "VAL123",
    status: "Delivered",
    color: "#22c55e",
    steps: [
      "Package received",
      "In transit",
      "Delivered successfully",
    ],
  },

  {
    id: "VAL456",
    status: "In Transit",
    color: "#3b82f6",
    steps: [
      "Package received",
      "Sorting facility",
      "On delivery route",
    ],
  },

  {
    id: "VAL789",
    status: "Pending",
    color: "#f59e0b",
    steps: [
      "Awaiting pickup",
      "Waiting confirmation",
      "Preparing dispatch",
    ],
  },
];

function Tracking() {

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const idFromURL = queryParams.get("id");

  const [trackingId, setTrackingId] = useState("");
  const [, setActiveShipment] = useState(null);

  useEffect(() => {

    if (idFromURL) {

      setTrackingId(idFromURL);

      const found = shipments.find(
        (item) => item.id === idFromURL.toUpperCase()
      );

      if (found) {
        setActiveShipment(found);
      }

    }

  }, [idFromURL]);

  const handleTrack = () => {

    const found = shipments.find(
      (item) => item.id === trackingId.toUpperCase()
    );

    if (found) {
      setActiveShipment(found);
    } else {
      alert("Tracking ID not found");
    }

  };

  return (

    <div className="tracking-page">

      {/* SIDEBAR */}
      <div className="sidebar">

        <div className="logo">
          <FaTruck />
        </div>

        <div className="sidebar-icons">

          <div className="sidebar-icon active-icon">

            <FaHome />

            <span className="tooltip">
              Dashboard
            </span>

          </div>

          <div className="sidebar-icon">

            <FaBox />

            <span className="tooltip">
              Packages
            </span>

          </div>

          <div className="sidebar-icon">

            <FaChartBar />

            <span className="tooltip">
              Analytics
            </span>

          </div>

          <div className="sidebar-icon">

            <FaMapMarkedAlt />

            <span className="tooltip">
              Locations
            </span>

          </div>

        </div>

        <div className="sidebar-icon settings">

          <FaCog />

          <span className="tooltip">
            Settings
          </span>

        </div>

      </div>

      {/* LEFT PANEL */}
      <div className="left-panel">

        <h2>Track your package</h2>

        {/* SEARCH */}
        <div className="search-box">

          <input
            type="text"
            className="search-input"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter receipt number"
          />

          <button
            className="track-btn"
            onClick={handleTrack}
          >
            Track
          </button>

        </div>

        {/* HISTORY */}
        <div className="history-section">

          <div className="history-header">

            <h3>History</h3>

            <button>
              Clear
            </button>

          </div>

          <div className="history-list">

            {shipments.map((item, index) => (

              <div key={index} className="history-card">

                <p className="shipment-id">
                  {item.id}
                </p>

                <div className="history-bottom">

                  <span>
                    25 Jan 2026
                  </span>

                  <span
                    className="status-badge"
                    style={{ background: item.color }}
                  >
                    {item.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* HEADER */}
        <div className="top-header">

          <h2>Your saved packages</h2>

          <p>80 Parcels</p>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          {[
            ["80", "Tracked Packages"],
            ["43", "Delivered"],
            ["22", "En Route"],
            ["15", "Failed"],
          ].map((item, index) => (

            <div key={index} className="stat-card">

              <h3>{item[0]}</h3>

              <p>{item[1]}</p>

            </div>

          ))}

        </div>

        {/* FILTERS */}
        <div className="filter-row">

          <button>
            Sort by
          </button>

          <button>
            Parcel Status
          </button>

        </div>

        {/* SHIPMENT GRID */}
        <div className="shipment-grid">

          {shipments.map((item, index) => (

            <div key={index} className="shipment-card">

              <div className="shipment-top">

                <div>

                  <p className="shipment-label">
                    Shipment Number
                  </p>

                  <h3>{item.id}</h3>

                </div>

                <div
                  className="status-dot"
                  style={{ background: item.color }}
                />

              </div>

              {/* TIMELINE */}
              <div className="timeline">

                {item.steps.map((step, i) => (

                  <div key={i} className="timeline-item">

                    <div className="timeline-time">
                      11:0{i}
                    </div>

                    <div className="timeline-left">

                      <div
                        className="timeline-dot"
                        style={{ background: item.color }}
                      />

                      {i !== item.steps.length - 1 && (
                        <div className="timeline-line"></div>
                      )}

                    </div>

                    <div className="timeline-content">

                      <p>{step}</p>

                    </div>

                  </div>

                ))}

              </div>

              <button className="detail-btn">
                View Detail
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Tracking;