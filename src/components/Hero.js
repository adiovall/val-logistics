import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero() {
  const navigate = useNavigate();
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    if (!trackingId) return;
    navigate(`/track?id=${trackingId}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b1e33",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {/* FLOATING CONTAINER */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          borderRadius: "30px",
          padding: "150px 40px",
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          boxShadow: "0 0 40px rgba(79,70,229,0.5)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,37,64,0.85)",
          }}
        />

        {/* GLOW EFFECT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "30px",
            boxShadow: "0 0 60px rgba(79,70,229,0.4)",
            pointerEvents: "none",
          }}
        />

        {/* HERO CONTENT */}
        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "white",
            maxWidth: "700px",
            margin: "0 auto",
            transform: "translateY(-60px)",
          }}
        >
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
            Courier Made Simple
          </h1>

          <p style={{ opacity: 0.85, marginTop: "10px" }}>
            Send and track deliveries across Nigeria with speed and reliability.
          </p>

          {/* TRACK BOX */}
          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              borderRadius: "50px",
              padding: "8px",
              gap: "10px",
              border: "1px solid rgba(255,255,255,0.2)",
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
                minWidth: "200px",
                padding: "12px 16px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                background: "white",
                color: "#333",
              }}
            />

            <button
              onClick={handleTrack}
              style={{
                padding: "12px 20px",
                borderRadius: "50px",
                border: "none",
                background: "linear-gradient(135deg, #4F46E5, #6366F1)",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 5px 20px rgba(79,70,229,0.5)",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.opacity = 0.85)}
              onMouseOut={(e) => (e.target.style.opacity = 1)}
            >
              Track Parcel →
            </button>
          </div>
        </div>

        {/* FLOATING CARD LEFT */}
        <div
          style={{
            position: "absolute",
            bottom: "35px",
            left: "35px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "18px",
            borderRadius: "18px",
            color: "white",
            width: "240px",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              opacity: 0.7,
              marginBottom: "12px",
              lineHeight: "1.5",
            }}
          >
            We deliver all kinds of goods across Nigeria
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                margin: 0,
              }}
            >
              Fast & Reliable
            </p>

            <div
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: "rgba(99,102,241,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              🚚
            </div>
          </div>
        </div>

        {/* FLOATING CARD RIGHT */}
        <div
          style={{
            position: "absolute",
            bottom: "35px",
            right: "35px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "18px",
            borderRadius: "18px",
            color: "white",
            width: "240px",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: "rgba(255,215,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              ⭐
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                4.8
              </p>

              <p
                style={{
                  margin: 0,
                  opacity: 0.7,
                  fontSize: "13px",
                }}
              >
                Client Rating
              </p>
            </div>
          </div>

          <p
            style={{
              fontSize: "13px",
              opacity: 0.75,
              lineHeight: "1.5",
              margin: 0,
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