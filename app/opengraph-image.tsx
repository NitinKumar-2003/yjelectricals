import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Y. J. Electricals — Coming Soon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        {/* grid */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(198,40,40,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(198,40,40,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* center glow */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(198,40,40,0.14) 0%, transparent 70%)",
          }}
        />

        {/* inner ring */}
        <div
          style={{
            display: "flex",
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

        {/* outer ring */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 740,
            height: 740,
            borderRadius: "50%",
            border: "1px solid rgba(198,40,40,0.07)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* content column */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* logo */}
          <div
            style={{
              display: "flex",
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(135deg, #c62828 0%, #7f0000 100%)",
              boxShadow:
                "0 0 48px rgba(198,40,40,0.55), 0 0 100px rgba(198,40,40,0.2)",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 28,
            }}
          >
            <img src={faviconSrc} width={56} height={56} />
          </div>

          {/* brand label */}
          <div
            style={{
              display: "flex",
              fontSize: 15,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#ef5350",
              fontWeight: 600,
              marginBottom: 18,
            }}
          >
            Y. J. Electricals
          </div>

          {/* headline row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
              marginBottom: 22,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 68,
                fontWeight: 800,
                color: "#f5f5f2",
                lineHeight: 1.1,
              }}
            >
              Something
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 68,
                fontWeight: 800,
                color: "#c62828",
                lineHeight: 1.1,
              }}
            >
              Powerful
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 68,
                fontWeight: 800,
                color: "#f5f5f2",
                lineHeight: 1.1,
              }}
            >
              is Coming
            </div>
          </div>

          {/* tagline */}
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#9ba3af",
              textAlign: "center",
            }}
          >
            Electrical contracting · DB panel work · Fire safety solutions
          </div>

          {/* red divider */}
          <div
            style={{
              display: "flex",
              marginTop: 32,
              width: 80,
              height: 3,
              borderRadius: 2,
              background: "linear-gradient(90deg, #c62828, #ef5350)",
            }}
          />

          {/* domain */}
          <div
            style={{
              display: "flex",
              marginTop: 18,
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
