'use client';

import Spline from '@splinetool/react-spline';

export default function SplineViewer() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Spline scene="/spline/scene.splinecode" />
    </div>
  );
}
