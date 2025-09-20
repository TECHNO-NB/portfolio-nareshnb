import * as React from "react";

interface EmailTemplateProps {
  name: string | null;
  email: string | null;
  subject: string | null;
  message: string | null;
}

export const EmailTemplate = ({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) => (
  <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
    <h2 style={{ color: "#2563eb" }}>{subject}</h2>

    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>

    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        background: "#f9fafb",
      }}
    >
      <p>{message}</p>
    </div>

    <footer style={{ marginTop: "30px", fontSize: "12px", color: "#6b7280" }}>
      <p>📩 This message was sent from your portfolio contact form.</p>
    </footer>
  </div>
);
