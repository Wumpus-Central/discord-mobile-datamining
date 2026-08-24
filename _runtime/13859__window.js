// === Module 13859: _window ===

// Module 13859 (_window)
arg5.start = undefined;
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
if (nativePerformanceNow.nativePerformanceNow) {
  performanceNow = nativePerformanceNow.nativePerformanceNow;
} else if (_window) {
  performanceNow = function performanceNow() {
    return _window.now && _window.now();
  };
}
arg5.start = () => {
  closure_0 = performanceNow();
  return () => closure_1_1() - closure_0;
};