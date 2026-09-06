// === Module 6799: ? ===

// Module 6799
const fn = function t(arg0, velocityY, substr) {
  closure_0 = arg0 + 0.2 * velocityY;
  closure_1 = min.apply(null, substr.map((item) => Math.abs(closure_0 - item)));
  return substr.filter((item) => Math.abs(closure_0 - item) === closure_1)[0];
};
fn.__closure = {};
fn.__workletHash = 8913698095371;
fn.__initData = { code: "function pnpm_snapPointTs1(value,velocity,points){const point=value+0.2*velocity;const deltas=points.map(function(p){return Math.abs(point-p);});const minDelta=Math.min.apply(null,deltas);return points.filter(function(p){return Math.abs(point-p)===minDelta;})[0];}" };

export const snapPoint = fn;