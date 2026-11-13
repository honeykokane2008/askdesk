const sources = [
  { id: "REF-01", title: "Employee Handbook 2024.pdf", page: "P. 18", excerpt: "Employees may carry over up to five unused vacation days into the following calendar year.", match: "99.4%", color: "lime" },
  { id: "REF-02", title: "Paid Time Off Policy.docx", page: "§ 3.2", excerpt: "Any accrued vacation above five days will be forfeited at year end unless otherwise required by local law.", match: "97.8%", color: "paper" },
]

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="AskDesk home"><Mark /><span>askdesk</span></a>
      <nav aria-label="Main navigation" className="main-nav">
        <a href="#how-it-works">How it works</a><a href="#security">Security</a><a href="#stories">Customers</a>
      </nav>
      <div className="header-actions"><a className="login-link" href="#contact">Log in <span aria-hidden="true">↗</span></a><a className="button button-dark" href="#contact">Book a demo <span aria-hidden="true">↗</span></a></div>
    </header>
  )
}

function EvidencePanel() {
  return (
    <div className="evidence-shell" aria-label="AskDesk answer with linked source evidence">
      <div className="evidence-top"><span className="mono">ASKDESK / ANSWER PREVIEW</span><span className="live-status"><i /> GROUNDED IN YOUR DOCS</span></div>
      <div className="evidence-body">
        <section className="answer-pane">
          <div className="question-label mono">QUESTION_014 <span>·</span> PEOPLE OPERATIONS</div>
          <h2>Can I carry unused vacation days into next year?</h2>
          <div className="answer-copy"><p>Yes. You can carry over <mark>up to five unused vacation days</mark> into the next calendar year.</p><p>Any accrued vacation beyond that is forfeited at year end, unless local law says otherwise.</p></div>
          <div className="answer-footer"><span className="verified-tag"><b>+</b> VERIFIED ANSWER</span><span className="mono">GENERATED JUST NOW</span></div>
        </section>
        <aside className="sources-pane">
          <div className="sources-heading"><span className="mono">SUPPORTING SOURCES</span><span className="source-count">02</span></div>
          {sources.map((source) => <article className="source-card" key={source.id}>
            <div className="source-meta mono"><span>[{source.id}]</span><span>{source.page}</span></div>
            <h3>{source.title}</h3><p>{source.excerpt}</p>
            <div className="source-confidence mono"><span className={source.color === "lime" ? "confidence-dot" : "confidence-dot muted-dot"} /> MATCH {source.match}</div>
          </article>)}
          <div className="source-foot mono">2 SOURCES · 2 DIRECT MATCHES</div>
        </aside>
      </div>
      <div className="evidence-bottom"><span className="mono">ANSWER TRACE</span><span className="trace-line" /><span className="mono">POLICY LIBRARY / 148 DOCUMENTS</span><span className="trace-check">✓</span></div>
    </div>
  )
}

function LandingPage() {
  return (
    <main id="top">
      <Header />
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow mono"><span className="eyebrow-square" /> KNOWLEDGE, WITH RECEIPTS <span className="eyebrow-index">[01 / 03]</span></div>
          <h1>Your company<br />knows the answer.<br /><span>Now everyone can.</span></h1>
          <p className="hero-description">AskDesk turns your internal knowledge into clear, trustworthy answers—with every claim linked back to its source.</p>
          <div className="hero-actions"><a className="button button-lime" href="#contact">See AskDesk in action <span aria-hidden="true">↗</span></a><a className="text-link" href="#how-it-works">Explore the platform <span aria-hidden="true">↓</span></a></div>
          <div className="hero-proof"><span className="proof-mark">✓</span><span>Every answer backed by a source.<br /><strong>Nothing made up. Nothing lost.</strong></span></div>
        </div>
        <div className="hero-visual"><EvidencePanel /></div>
        <div className="hero-index mono"><span>01</span><span className="index-rule" /> BUILT FOR THE QUESTIONS THAT MATTER</div>
      </section>
      <section className="trust-strip" id="stories"><span className="mono trust-label">TRUSTED KNOWLEDGE, ACROSS YOUR ORGANIZATION</span><div className="trust-logos"><span>northstar<span className="logo-dot">.</span></span><span className="serif-logo">Meridian</span><span className="wide-logo">A C M E <b>GROUP</b></span><span className="serif-logo italic-logo">fieldnotes</span><span className="mono-logo">/orbit</span></div></section>
      <section className="how-section" id="how-it-works"><div className="section-intro"><span className="mono section-kicker">[02] / THE ASKDESK DIFFERENCE</span><h2>Answers you can<br /><em>actually</em> stand behind.</h2><p>Knowledge only works when people can find it, trust it, and act on it. AskDesk makes all three second nature.</p></div><div className="feature-list"><article className="feature-row"><span className="mono feature-num">01</span><div><h3>Ask in plain language.</h3><p>No keywords, folders, or knowing where to look. Just ask the question on your mind.</p></div><span className="feature-symbol" aria-hidden="true">↗</span></article><article className="feature-row"><span className="mono feature-num">02</span><div><h3>Get answers from your sources.</h3><p>AskDesk searches across your approved company knowledge—not the open internet.</p></div><span className="feature-symbol" aria-hidden="true">⌕</span></article><article className="feature-row"><span className="mono feature-num">03</span><div><h3>See exactly where they came from.</h3><p>Every answer comes with clear citations, so your team can verify before they rely.</p></div><span className="feature-symbol" aria-hidden="true">[✓]</span></article></div></section>
      <section className="security-band" id="security"><div className="security-stamp mono">[ BUILT FOR THE WAY WORK WORKS ]</div><div className="security-content"><h2>Your knowledge.<br /><span>Your rules.</span></h2><p>Your documents stay yours. AskDesk respects your permissions, keeps answers grounded in approved sources, and makes it easy to see what informed every response.</p><a href="#contact" className="security-link">A closer look at security <span aria-hidden="true">↗</span></a></div><div className="security-grid"><div><span className="security-icon">01</span><b>Permission-aware</b><small>People see only what they can access.</small></div><div><span className="security-icon">02</span><b>Source-grounded</b><small>Answers stay tied to your documents.</small></div><div><span className="security-icon">03</span><b>Always traceable</b><small>Follow every answer back to its origin.</small></div></div></section>
      <section className="closing-cta" id="contact"><span className="mono section-kicker">[03] / MAKE KNOWLEDGE WORK</span><h2>Give good questions<br />better answers.</h2><a className="button button-lime" href="mailto:hello@askdesk.com">Let&apos;s talk <span aria-hidden="true">↗</span></a></section>
      <footer className="site-footer"><a className="brand footer-brand" href="#top"><Mark /><span>askdesk</span></a><span className="mono footer-note">KNOWLEDGE, WITH RECEIPTS.</span><span className="mono footer-copy">© 2025 ASKDESK, INC.</span></footer>
    </main>
  )
}

export default LandingPage
