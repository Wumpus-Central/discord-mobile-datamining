// === Module 1668: mockedRequestAnimationFrame ===

// Module 1668 (mockedRequestAnimationFrame)
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  closure_0 = arg0;
  return setTimeout(() => callback(performance.now()), 0);
};