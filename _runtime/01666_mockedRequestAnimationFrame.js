// _runtime/01666_mockedRequestAnimationFrame.js

export function mockedRequestAnimationFrame(arg0) {
  closure_0 = arg0;
  return setTimeout(() => closure_0(performance.now()), 0);
}
