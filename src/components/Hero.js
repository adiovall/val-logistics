import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState("");

  const isMobile = window.innerWidth < 768;

  const handleTrack = () => {
    if (!trackingId) return;
    navigate(`/track?id=${trackingId}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#071426",
        padding: isMobile ? "12px" : "30px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: isMobile ? "860px" : "900px",
          overflow: "hidden",
          borderRadius: isMobile ? "24px" : "36px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 0 80px rgba(79,70,229,0.18), 0 0 120px rgba(59,130,246,0.12)",
        }}
      >
        {/* overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(6,16,30,0.82)",
          }}
        />

        {/* navbar */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: isMobile ? "24px 20px" : "32px 42px",
          }}
        >
          <h2
            style={{
              color: "white",
              margin: 0,
              fontWeight: "800",
              fontSize: isMobile ? "22px" : "34px",
            }}
          >
            Val Logistics
          </h2>

          <div
            style={{
              display: "flex",
              gap: isMobile ? "18px" : "30px",
            }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: isMobile ? "16px" : "18px",
              }}
            >
              Home
            </Link>

            <Link
              to="/track"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: isMobile ? "16px" : "18px",
              }}
            >
              Track
            </Link>
          </div>
        </div>

        {/* center content */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            color: "white",
            padding: isMobile
            ? "40px 16px 230px"
            : "80px 40px 220px",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "38px" : "96px",
              lineHeight: isMobile ? "1.02" : "1",
              fontWeight: "900",
              marginBottom: "24px",
              letterSpacing: "-2px",
            }}
          >
            Courier Made Simple
          </h1>

          <p
            style={{
              fontSize: isMobile ? "17px" : "24px",
              opacity: 0.85,
              lineHeight: "1.7",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Send and track deliveries across Nigeria with speed and reliability.
          </p>

          {/* search */}
            <div
              style={{
                marginTop: isMobile ? "24px" : "45px",
                display: "flex",
                flexDirection: "row",
                gap: isMobile ? "12px" : "14px",
                padding: isMobile ? "8px" : "14px",
                borderRadius: "40px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.08)",
                maxWidth: isMobile ? "100%" : "980px",
                width: "100%",
                marginInline: "auto",
                boxSizing: "border-box",
              }}
            >
              <input
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleTrack();
                  }
                }}
                placeholder="Enter tracking ID (e.g VAL123)"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  borderRadius: "40px",
                  background: "white",
                  color: "#111827",
                  fontSize: isMobile ? "15px" : "18px",
                  padding: isMobile
                    ? "14px 16px"
                    : "20px 26px",
                  width: "100%",
                  
                  boxSizing: "border-box",
                }}
              />

              <button
                onClick={handleTrack}
                style={{
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "40px",
                  color: "white",
                  fontWeight: "700",
                  background:
                    "linear-gradient(135deg, #5B4DFF 0%, #7C6CFF 100%)",
                  boxShadow: "0 10px 30px rgba(91,77,255,0.35)",
                  padding: isMobile
                ? "14px 10px"
                : "18px 34px",
                  fontSize: isMobile ? "15px" : "18px",
                  width: isMobile ? "32%" : "260px",
                  minHeight: isMobile ? "52px" : "unset",
                }}
              >
                Track Parcel →
              </button>
            </div>
        </div>

        {/* left card */}
        <div
          style={{
            position: "absolute",
            left: isMobile ? "18px" : "38px",
            right: isMobile ? "18px" : "unset",
            bottom: isMobile ? "320px" : "38px",
            width: isMobile ? "auto" : "320px",
            padding: isMobile ? "12px" : "24px",
            borderRadius: isMobile ? "18px" : "24px",
            background: "rgba(15,23,42,0.58)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.06)",
            color: "white",
            zIndex: 5,
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              margin: 0,
              opacity: 0.8,
              lineHeight: "1.6",
              fontSize: isMobile ? "16px" : "24px",
            }}
          >
            We deliver all kinds of goods across Nigeria
          </p>

          <div
            style={{
              marginTop: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: isMobile ? "18px" : "24px",
                fontWeight: "800",
              }}
            >
              Fast & Reliable
            </h3>

            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(99,102,241,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              🚚
            </div>
          </div>
        </div>

        {/* right card */}
        <div
            style={{
              position: "absolute",
              right: isMobile ? "18px" : "45px",
              left: isMobile ? "18px" : "unset",
              bottom: isMobile ? "160px" : "45px",
              width: isMobile ? "auto" : "360px",
              padding: isMobile ? "14px" : "28px",
              borderRadius: isMobile ? "18px" : "28px",
              background: "rgba(18,30,50,0.72)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "white",
              zIndex: 5,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "50%",
                  background: "rgba(255,215,0,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isMobile ? "28px" : "42px",
                }}
              >
                ⭐
              </div>

              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "42px",
                    fontWeight: "800",
                  }}
                >
                  4.8
                </h2>

                <p
                  style={{
                    margin: 0,
                    opacity: 0.75,
                  }}
                >
                  Client Rating
                </p>
              </div>
            </div>
            

            <p
              style={{
                margin: 0,
                opacity: 0.82,
                lineHeight: isMobile ? "1.5" : "1.8",
              }}
            >
              Trusted by 120+ businesses and customers nationwide.
            </p>
          </div>
      </div>
    </div>
  );
}

export default Hero;