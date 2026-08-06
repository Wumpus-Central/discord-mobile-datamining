// _runtime/01838_useAnimatedKeyboard.js
const require = arg1;
const dependencyMap = arg6;
let obj = { UNKNOWN: 0, OPENING: 1, OPEN: 2, CLOSING: 3, CLOSED: 4 };
let closure_3 = { code: "function pnpm_compatTs1(e){const{state,KeyboardState}=this.__closure;state.set(e.height>0?KeyboardState.OPENING:KeyboardState.CLOSING);}" };
let closure_4 = { code: "function pnpm_compatTs2(e){const{height}=this.__closure;height.set(e.height);}" };
let closure_5 = { code: "function pnpm_compatTs3(e){const{height}=this.__closure;height.set(e.height);}" };
let closure_6 = { code: "function pnpm_compatTs4(e){const{state,KeyboardState,height}=this.__closure;state.set(e.height>0?KeyboardState.OPEN:KeyboardState.CLOSED);height.set(e.height);}" };
arg5.KeyboardState = obj;
arg5.useAnimatedKeyboard = () => {
  const obj = height(state[0]);
  height = obj.useSharedValue(0);
  state = height(state[0]).useSharedValue(obj.UNKNOWN);
  const obj2 = height(state[0]);
  const fn = function u(height) {
    if (height.height > 0) {
      let CLOSING = outer1_2.OPENING;
    } else {
      CLOSING = outer1_2.CLOSING;
    }
    const result = state.set(CLOSING);
  };
  fn.__closure = { state, KeyboardState: obj };
  fn.__workletHash = 14565322463725;
  fn.__initData = closure_3;
  const fn2 = function c(height) {
    const result = height.set(height.height);
  };
  fn2.__closure = { height };
  fn2.__workletHash = 10176723030164;
  fn2.__initData = closure_4;
  const fn3 = function _(height) {
    const result = height.set(height.height);
  };
  fn3.__closure = { height };
  fn3.__workletHash = 5410731249621;
  fn3.__initData = closure_5;
  const fn4 = function n(height) {
    if (height.height > 0) {
      let CLOSED = outer1_2.OPEN;
    } else {
      CLOSED = outer1_2.CLOSED;
    }
    const result = state.set(CLOSED);
    const result1 = height.set(height.height);
  };
  fn4.__closure = { state, KeyboardState: obj, height };
  fn4.__workletHash = 1401367954247;
  fn4.__initData = closure_6;
  height(state[1]).useKeyboardHandler({ onStart: fn, onMove: fn2, onInteractive: fn3, onEnd: fn4 }, []);
  return { height, state };
};