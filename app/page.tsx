"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Zap } from "lucide-react";

/* ─────────────────────────────────────────
   Floating particles
───────────────────────────────────────── */
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: (i * 17 + 7) % 100,
  y: (i * 23 + 11) % 100,
  size: (i % 4) + 2,
  duration: (i % 3) + 3,
  delay: (i * 0.4) % 3,
}));

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0d0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-inter, system-ui, sans-serif)",
      }}
    >
      {/* ── grid background ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(198,40,40,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(198,40,40,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          pointerEvents: "none",
        }}
      />

      {/* ── center glow ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(198,40,40,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── orbit rings ── */}
      {[300, 460, 620].map((size, i) => (
        <motion.div
          key={size}
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            border: "1px solid rgba(198,40,40,0.12)",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            pointerEvents: "none",
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 30 + i * 15, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* orbit dot */}
      <motion.div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          pointerEvents: "none",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#c62828",
            boxShadow: "0 0 10px #c62828, 0 0 20px #c62828",
          }}
        />
      </motion.div>

      {/* ── particles ── */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(198,40,40,0.4)",
            pointerEvents: "none",
          }}
          animate={{ y: [0, -24, 0], opacity: [0, 0.8, 0], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ══ CONTENT ══ */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: 640,
          width: "100%",
          gap: 0,
        }}
      >
        {/* icon */}
        <motion.div
          style={{ marginBottom: 28, position: "relative" }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: "linear-gradient(135deg,#c62828 0%,#7f0000 100%)",
              boxShadow: "0 0 40px rgba(198,40,40,0.45), 0 0 80px rgba(198,40,40,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Zap style={{ width: 40, height: 40, color: "#fff" }} strokeWidth={2.5} />
          </div>
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 20,
              border: "2px solid #c62828",
            }}
            animate={{ scale: [1, 1.55, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>

        {/* brand */}
        <motion.p
          style={{
            fontSize: 12,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#ef5350",
            fontWeight: 600,
            marginBottom: 14,
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Y J Electricals.
        </motion.p>

        {/* headline */}
        <motion.h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#f5f5f2",
            marginBottom: 20,
            fontFamily: "var(--font-outfit, system-ui, sans-serif)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Something{" "}
          <span
            style={{
              position: "relative",
              display: "inline-block",
              background: "linear-gradient(90deg,#c62828,#ef5350)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Powerful
            <motion.span
              style={{
                position: "absolute",
                bottom: 2,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg,#c62828,#ef5350)",
                borderRadius: 2,
                transformOrigin: "left",
              }}
              animate={{ scaleX: [0, 1, 0.85, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>{" "}
          is Coming
        </motion.h1>

        {/* sub */}
        <motion.p
          style={{
            fontSize: 16,
            color: "#9ba3af",
            marginBottom: 48,
            lineHeight: 1.7,
            maxWidth: 480,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          We&apos;re wiring up something great. Our new website is under
          construction — stay tuned for electrical &amp; fire safety solutions
          you can trust.
        </motion.p>

        {/* notify form */}
        <motion.div
          style={{ width: "100%", maxWidth: 460, marginBottom: 52 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="done"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "14px 24px",
                  borderRadius: 12,
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.25)",
                  color: "#4ade80",
                  fontWeight: 500,
                  fontSize: 15,
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <Zap style={{ width: 18, height: 18 }} />
                You&apos;re on the list! We&apos;ll notify you when we launch.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                style={{ display: "flex", gap: 8 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "#161a1d",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "#f5f5f2",
                    fontSize: 14,
                    outline: "none",
                    minWidth: 0,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(198,40,40,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                />
                <motion.button
                  type="submit"
                  style={{
                    padding: "12px 20px",
                    borderRadius: 10,
                    background: "linear-gradient(135deg,#c62828 0%,#b71c1c 100%)",
                    boxShadow: "0 0 20px rgba(198,40,40,0.3)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 14,
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(198,40,40,0.55)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Notify Me
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* contact */}
        <motion.div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            fontSize: 14,
            color: "#6b7280",
            marginBottom: 40,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
        >
          <a
            href="tel:+918802358559"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              color: "inherit",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ef5350")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
          >
            <Phone style={{ width: 15, height: 15 }} />
            +91 8802358559
          </a>
          <span style={{ color: "#2d2d2d" }}>|</span>
          <a
            href="mailto:yjelectricals20@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              color: "inherit",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ef5350")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
          >
            <Mail style={{ width: 15, height: 15 }} />
            yjelectricals20@gmail.com
          </a>
        </motion.div>

        {/* tagline */}
        <motion.p
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#374151",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Electrical &amp; Fire Safety Solutions You Can Trust
        </motion.p>
      </div>
    </main>
  );
}
