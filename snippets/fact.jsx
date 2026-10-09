export const Fact = ({ score, title, source, flag, children }) => {
  const s = Number(score);
  const lv = s >= 1 ? "constitution" : s >= 0.85 ? "verified" : s >= 0.5 ? "extracted" : s >= 0.3 ? "inferred" : "pending";
  const label = { constitution: "CONSTITUTION", verified: "VERIFIED", extracted: "EXTRACTED", inferred: "INFERRED", pending: "PENDING" }[lv];
  return (
    <div className="sp-fact not-prose" data-lv={lv}>
      <div className="sp-fact-score">
        <b>{s.toFixed(2)}</b>
        <i>{label}</i>
        <div className="sp-bar"><u style={{ width: `${Math.round(s * 100)}%` }} /></div>
      </div>
      <div className="sp-fact-body">
        {title && <div className="sp-fact-title">{title}</div>}
        {children && <div className="sp-fact-text">{children}</div>}
        {source && <div className="sp-fact-src">{source}</div>}
        {flag && <div className="sp-fact-flag">◉ {flag}</div>}
      </div>
    </div>
  );
};

export const Gap = ({ title, children }) => (
  <div className="sp-gap not-prose">
    <div className="sp-gap-tag">GAP<i>open</i></div>
    <div className="sp-fact-body">
      <div className="sp-fact-title">{title}</div>
      {children && <div className="sp-fact-text">{children}</div>}
    </div>
  </div>
);
