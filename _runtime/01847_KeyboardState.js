// === Module 1847: KeyboardState ===

// Module 1847 (KeyboardState)
let set;

let KeyboardState = { UNKNOWN: 0, OPENING: 1, OPEN: 2, CLOSING: 3, CLOSED: 4 };
const __initData = { code: "function pnpm_compatTs1(e){const{state,KeyboardState}=this.__closure;state.set(e.height>0?KeyboardState.OPENING:KeyboardState.CLOSING);}" };
const __initData2 = { code: "function pnpm_compatTs2(e){const{height}=this.__closure;height.set(e.height);}" };
const __initData3 = { code: "function pnpm_compatTs3(e){const{height}=this.__closure;height.set(e.height);}" };
const __initData4 = { code: "function pnpm_compatTs4(e){const{state,KeyboardState,height}=this.__closure;state.set(e.height>0?KeyboardState.OPEN:KeyboardState.CLOSED);height.set(e.height);}" };

export { KeyboardState };
export const useAnimatedKeyboard = () => {
  let fn;
  let fn2;
  let fn3;
  let fn4;
  let height;
  let state;
  KeyboardState = height(state[0]);
  height = KeyboardState.useSharedValue(0);
  const obj2 = height(state[0]);
  state = obj2.useSharedValue(KeyboardState.UNKNOWN);
  const obj4 = { onStart: fn, onMove: fn2, onInteractive: fn3, onEnd: fn4 };
  fn = function u(height) {
    let CLOSING;
    set = state.set;
    if (height.height > 0) {
      CLOSING = obj.OPENING;
    } else {
      CLOSING = obj.CLOSING;
    }
    const result = set(CLOSING);
  };
  fn.__closure = { state, KeyboardState };
  fn.__workletHash = 14565322463725;
  fn.__initData = __initData;
  fn2 = function c(height) {
    const result = height.set(height.height);
  };
  fn2.__closure = { height };
  fn2.__workletHash = 10176723030164;
  fn2.__initData = __initData2;
  fn3 = function _(height) {
    const result = height.set(height.height);
  };
  fn3.__closure = { height };
  fn3.__workletHash = 5410731249621;
  fn3.__initData = __initData3;
  fn4 = function n(height) {
    let CLOSED;
    set = state.set;
    if (height.height > 0) {
      CLOSED = obj.OPEN;
    } else {
      CLOSED = obj.CLOSED;
    }
    const result = set(CLOSED);
    const result1 = height.set(height.height);
  };
  fn4.__closure = { state, KeyboardState, height };
  fn4.__workletHash = 1401367954247;
  fn4.__initData = __initData4;
  const obj3 = height(state[1]);
  obj3.useKeyboardHandler(obj4, []);
  return { height, state };
};