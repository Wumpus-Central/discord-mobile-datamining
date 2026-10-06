// === Module 14209: start ===

// Module 14209 (start)
let _window = typeof window !== "undefined";
if (typeof window !== "undefined") {
  _window = window;
}
if (_window) {
  const _window2 = window;
  let webkitPerformance = window.performance;
  if (!webkitPerformance) {
    const _window3 = window;
    webkitPerformance = window.msPerformance;
  }
  if (!webkitPerformance) {
    const _window4 = window;
    webkitPerformance = window.webkitPerformance;
  }
  _window = webkitPerformance;
}
function performanceNow(arg0) {
  return Date.now();
}
if (global.nativePerformanceNow) {
  performanceNow = global.nativePerformanceNow;
} else if (_window) {
  performanceNow = function performanceNow() {
    const tmp = _window.now && _window.now();
    return tmp;
  };
}

export const start = () => {
  let closure_0 = performanceNow();
  return () => performanceNow() - closure_0;
};