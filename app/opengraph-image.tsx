import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Y. J. Electricals — Coming Soon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read the favicon once at module scope (statically optimised at build time)
const faviconData = await readFile(
  join(process.cwd(), "public", "favicon.png"),
  "base64"
);
const faviconSrc = `data:image/png;base64,${faviconData}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d0f",
          position: "relative",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* ── grid lines ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(198,40,40,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(198,40,40,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── center radial glow ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(198,40,40,0.14) 0%, transparent 70%)",
          }}
        />

        {/* ── decorative ring ── */}
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "1px solid rgba(198,40,40,0.15)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 720,
            height: 720,
            borderRadius: "50%",
            border: "1px solid rgba(198,40,40,0.08)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* ── content ── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* logo icon */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(135deg, #c62828 0%, #7f0000 100%)",
              boxShadow:
                "0 0 48px rgba(198,40,40,0.55), 0 0 100px rgba(198,40,40,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            <img src={faviconSrc} width={56} height={56} />
          </div>

          {/* brand label */}
          <div
            style={{
              fontSize: 16,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#ef5350",
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Y. J. Electricals
          </div>

          {/* headline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#f5f5f2",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Something{" "}
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#c62828",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Powerful
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#f5f5f2",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {" "}is Coming
            </div>
          </div>

          {/* sub */}
          <div
            style={{
              fontSize: 22,
              color: "#9ba3af",
              textAlign: "center",
              maxWidth: 680,
              lineHeight: 1.6,
            }}
          >
            Electrical contracting · DB panel work · Fire safety solutions
          </div>

          {/* divider */}
          <div
            style={{
              marginTop: 36,
              width: 80,
              height: 3,
              borderRadius: 2,
              background: "linear-gradient(90deg, #c62828, #ef5350)",
            }}
          />

          {/* domain */}
          <div
            style={{
              marginTop: 20,
              fontSize: 18,
              color: "#4b5563",
              letterSpacing: "0.08em",
            }}
          >
            yjelectricals.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
