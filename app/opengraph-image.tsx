import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Axel Wolfs - Full-Stack Developer | Backend & Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#F7F5F2",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 50% 60% at 20% 30%, rgba(251, 191, 36, 0.08), transparent), radial-gradient(ellipse 40% 50% at 75% 20%, rgba(225, 29, 72, 0.06), transparent)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "24px",
              color: "#78716C",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#1C1917",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Axel Wolfs
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#1C1917",
              display: "flex",
              alignItems: "center",
            }}
          >
            Backend & Infrastructure
            <span style={{ color: "#E11D48" }}>.</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontSize: "20px", color: "#78716C" }}>
            axelw.vercel.app
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "16px",
              color: "#78716C",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            <span>Node.js</span>
            <span>Python</span>
            <span>AWS</span>
            <span>Docker</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
