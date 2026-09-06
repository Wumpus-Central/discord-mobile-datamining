// === Module 1840: KeyboardState ===

// Module 1840 (KeyboardState)
const require = arg1;
const dependencyMap = arg6;
let KeyboardState = { UNKNOWN: 0, OPENING: 1, OPEN: 2, CLOSING: 3, CLOSED: 4 };
const __initData = { code: "function pnpm_compatTs1(e){const{state,KeyboardState}=this.__closure;state.set(e.height>0?KeyboardState.OPENING:KeyboardState.CLOSING);}" };
const __initData2 = { code: "function pnpm_compatTs2(e){const{height}=this.__closure;height.set(e.height);}" };
const __initData3 = { code: "function pnpm_compatTs3(e){const{height}=this.__closure;height.set(e.height);}" };
const __initData4 = { code: "function pnpm_compatTs4(e){const{state,KeyboardState,height}=this.__closure;state.set(e.height>0?KeyboardState.OPEN:KeyboardState.CLOSED);height.set(e.height);}" };

export { KeyboardState };
export const useAnimatedKeyboard = () => {
  KeyboardState = height(state[0]);
  height = KeyboardState.useSharedValue(0);
  state = height(state[0]).useSharedValue(KeyboardState.UNKNOWN);
  const obj2 = height(state[0]);
  KeyboardState = { onStart: null, onMove: null, onInteractive: null, onEnd: null };
  const fn = function u(height) {
    if (height.height > 0) {
      let CLOSING = obj.OPENING;
    } else {
      CLOSING = obj.CLOSING;
    }
    const result = state.set(CLOSING);
  };
  fn.__closure = { state, KeyboardState };
  fn.__workletHash = 14565322463725;
  fn.__initData = __initData;
  KeyboardState.onStart = fn;
  const fn2 = function c(height) {
    const result = height.set(height.height);
  };
  fn2.__closure = { height };
  fn2.__workletHash = 10176723030164;
  fn2.__initData = __initData2;
  KeyboardState.onMove = fn2;
  const fn3 = function _(height) {
    const result = height.set(height.height);
  };
  fn3.__closure = { height };
  fn3.__workletHash = 5410731249621;
  fn3.__initData = __initData3;
  KeyboardState.onInteractive = fn3;
  const fn4 = function n(height) {
    if (height.height > 0) {
      let CLOSED = obj.OPEN;
    } else {
      CLOSED = obj.CLOSED;
    }
    const result = state.set(CLOSED);
    const result1 = height.set(height.height);
  };
  fn4.__closure = { state, KeyboardState, height };
  fn4.__workletHash = 1401367954247;
  fn4.__initData = __initData4;
  KeyboardState.onEnd = fn4;
  height(state[1]).useKeyboardHandler(KeyboardState, []);
  return { height, state };
};