// === Module 1665: mockedRequestAnimationFrame ===

// Module 1665 (mockedRequestAnimationFrame)

export function mockedRequestAnimationFrame(arg0) {
  closure_0 = arg0;
  return setTimeout(() => closure_0(performance.now()), 0);
}