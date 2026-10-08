import { useState } from 'react'
import './App.css'

const metrics = [
  { label: 'Total revenue', value: '$48,290', change: '+12.8%', tone: 'positive', icon: '$' },
  { label: 'Active users', value: '12,840', change: '+8.2%', tone: 'positive', icon: 'U' },
  { label: 'Conversion rate', value: '6.24%', change: '+2.4%', tone: 'positive', icon: '%' },
  { label: 'Avg. response time', value: '184ms', change: '-14.6%', tone: 'positive', icon: '↯' },
]

const jobs = [
  { name: 'Daily data sync', status: 'Completed', time: '2 min ago', duration: '01:24' },
  { name: 'Customer segmentation', status: 'Running', time: '12 min ago', duration: '04:18' },
  { name: 'Revenue forecast', status: 'Completed', time: '1 hour ago', duration: '02:52' },
  { name: 'Weekly report export', status: 'Scheduled', time: 'Tomorrow, 9:00 AM', duration: '—' },
]

function Icon({ name }) {
  const paths = {
    grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
    chart: 'M4 19V5m0 14h16M8 16v-4m4 4V8m4 8V5',
    users: 'M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 3a4 4 0 0 0-1-7.87',
    settings: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.4-3.5a7.4 7.4 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7.5 7.5 0 0 0-2.1-1.2L14.5 3h-5l-.3 2.6a7.5 7.5 0 0 0-2.1 1.2l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-1a7.5 7.5 0 0 0 2.1 1.2l.3 2.6h5l.3-2.6a7.5 7.5 0 0 0 2.1-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z',
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}

function App() {
  const [range, setRange] = useState('Last 7 days')
  const [activePage, setActivePage] = useState('Overview')

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">P</div>
          <span>Pulseboard</span>
        </div>

        <div className="workspace-switcher">
          <span className="workspace-avatar">AC</span>
          <span>
            <strong>Acme Corp</strong>
            <small>Analytics workspace</small>
          </span>
          <span className="chevron">⌄</span>
        </div>

        <nav aria-label="Main navigation">
          <p className="nav-label">Workspace</p>
          {[
            ['Overview', 'grid'],
            ['Analytics', 'chart'],
            ['Customers', 'users'],
          ].map(([label, icon]) => (
            <button
              className={activePage === label ? 'nav-item active' : 'nav-item'}
              key={label}
              onClick={() => setActivePage(label)}
              type="button"
            >
              <Icon name={icon} />
              {label}
            </button>
          ))}
          <p className="nav-label nav-label-spaced">Manage</p>
          <button className="nav-item" type="button">
            <Icon name="settings" />
            Settings
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="help-card">
            <span className="help-icon">?</span>
            <div>
              <strong>Need a hand?</strong>
              <small>Visit the help center</small>
            </div>
          </div>
          <div className="user-profile">
            <span className="profile-avatar">JD</span>
            <span><strong>Jordan Davis</strong><small>Admin</small></span>
            <span className="more">•••</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Thursday, October 8, 2026</p>
            <h1>{activePage}</h1>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" type="button" aria-label="Notifications">♢</button>
            <button className="avatar-button" type="button" aria-label="Open profile">JD</button>
          </div>
        </header>

        <section className="welcome-row">
          <div>
            <h2>Good morning, Jordan <span aria-hidden="true">✦</span></h2>
            <p>Here&apos;s what&apos;s happening with your business today.</p>
          </div>
          <div className="toolbar">
            <select value={range} onChange={(event) => setRange(event.target.value)} aria-label="Date range">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This year</option>
            </select>
            <button className="primary-button" type="button">＋ New report</button>
          </div>
        </section>

        <section className="metrics-grid" aria-label="Key metrics">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <div className="metric-heading">
                <span>{metric.label}</span>
                <span className="metric-icon">{metric.icon}</span>
              </div>
              <strong>{metric.value}</strong>
              <p><span className={`trend ${metric.tone}`}>↗ {metric.change}</span> <span>vs. previous period</span></p>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel activity-panel">
            <div className="panel-header">
              <div>
                <h3>Performance overview</h3>
                <p>Revenue and active users over time</p>
              </div>
              <button className="text-button" type="button">View report →</button>
            </div>
            <div className="chart">
              <div className="chart-y-axis"><span>$60k</span><span>$40k</span><span>$20k</span><span>$0</span></div>
              <div className="chart-area">
                <div className="grid-line" /><div className="grid-line" /><div className="grid-line" /><div className="grid-line" />
                <svg className="chart-line" viewBox="0 0 700 220" preserveAspectRatio="none" role="img" aria-label="Revenue trend rising over the last seven days">
                  <defs><linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#6d5dfc" stopOpacity=".22" /><stop offset="100%" stopColor="#6d5dfc" stopOpacity="0" /></linearGradient></defs>
                  <path className="area" d="M0 184 C50 170 58 145 110 154 S175 118 220 132 S285 90 330 110 S390 76 440 91 S510 54 550 70 S620 28 700 38 V220 H0 Z" />
                  <path className="line" d="M0 184 C50 170 58 145 110 154 S175 118 220 132 S285 90 330 110 S390 76 440 91 S510 54 550 70 S620 28 700 38" />
                  <circle cx="700" cy="38" r="5" />
                </svg>
                <div className="chart-x-axis"><span>Oct 2</span><span>Oct 3</span><span>Oct 4</span><span>Oct 5</span><span>Oct 6</span><span>Oct 7</span><span>Oct 8</span></div>
              </div>
            </div>
            <div className="chart-legend"><span><i className="legend-dot purple" />Revenue</span><span><i className="legend-dot blue" />Active users</span></div>
          </article>

          <article className="panel health-panel">
            <div className="panel-header"><div><h3>Service health</h3><p>Live system status</p></div><span className="live-badge"><i /> All systems normal</span></div>
            <div className="health-list">
              {[['API services', '99.99%', 'Healthy'], ['Data pipeline', '98.42%', 'Healthy'], ['Background workers', '96.18%', 'Degraded']].map(([name, uptime, status]) => (
                <div className="health-item" key={name}><div className="health-label"><span className={`status-dot ${status === 'Degraded' ? 'warning' : ''}`} /><strong>{name}</strong><span className="health-status">{status}</span></div><div className="health-bar"><span className={status === 'Degraded' ? 'warning' : ''} /></div><small>{uptime} uptime</small></div>
              ))}
            </div>
            <button className="outline-button" type="button">Open status page</button>
          </article>
        </section>

        <section className="panel jobs-panel">
          <div className="panel-header"><div><h3>Recent jobs</h3><p>Monitor your latest automated workflows</p></div><button className="text-button" type="button">View all jobs →</button></div>
          <div className="jobs-table">
            <div className="job-row table-heading"><span>Job name</span><span>Status</span><span>Started</span><span>Duration</span></div>
            {jobs.map((job) => <div className="job-row" key={job.name}><strong>{job.name}</strong><span className={`job-status ${job.status.toLowerCase()}`}>{job.status}</span><span>{job.time}</span><span>{job.duration}</span></div>)}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
