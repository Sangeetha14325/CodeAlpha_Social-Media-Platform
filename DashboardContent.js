import React from 'react';
import './DashboardContent.css';
import SocialCard from './SocialCard';

function DashboardContent() {
  return (
    <main className="dashboard-content">
      <SocialCard platform="Facebook" followers="5,000" growth="2%" />
      <SocialCard platform="Twitter" followers="8,000" growth="3%" />
      <SocialCard platform="Instagram" followers="10,000" growth="5%" />
      <SocialCard platform="LinkedIn" followers="4,000" growth="1.5%" />
      <SocialCard platform="YouTube" followers="12,000" growth="4%" />
      <SocialCard platform="TikTok" followers="20,000" growth="6%" />
    </main>
  );
}

export default DashboardContent;
