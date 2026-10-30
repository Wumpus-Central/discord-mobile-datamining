// === Module 1666: mockedRequestAnimationFrame ===

// Module 1666 (mockedRequestAnimationFrame)

export function mockedRequestAnimationFrame(arg0) {
  closure_0 = arg0;
  return setTimeout(() => closure_0(performance.now()), 0);
}