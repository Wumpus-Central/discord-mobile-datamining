// === Module 1658: mockedRequestAnimationFrame ===

// Module 1658 (mockedRequestAnimationFrame)

export const mockedRequestAnimationFrame = function mockedRequestAnimationFrame(arg0) {
  closure_0 = arg0;
  return setTimeout(() => closure_0(performance.now()), 0);
};