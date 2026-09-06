// === Module 1651: mockedRequestAnimationFrame ===

// Module 1651 (mockedRequestAnimationFrame)
arg5.mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  closure_0 = arg0;
  return setTimeout(() => callback(performance.now()), 0);
};