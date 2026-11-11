// discord_app/modules/pass_the_controller/InputGuest.tsx
import LoggerDefault from "../debug/Logger.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import InputEvent from "InputEvent.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = {
  Escape: 27,
  Digit0: 48,
  Digit1: 49,
  Digit2: 50,
  Digit3: 51,
  Digit4: 52,
  Digit5: 53,
  Digit6: 54,
  Digit7: 55,
  Digit8: 56,
  Digit9: 57,
  Minus: 189,
  Equal: 187,
  Backspace: 8,
  Tab: 9,
  KeyA: 65,
  KeyB: 66,
  KeyC: 67,
  KeyD: 68,
  KeyE: 69,
  KeyF: 70,
  KeyG: 71,
  KeyH: 72,
  KeyI: 73,
  KeyJ: 74,
  KeyK: 75,
  KeyL: 76,
  KeyM: 77,
  KeyN: 78,
  KeyO: 79,
  KeyP: 80,
  KeyQ: 81,
  KeyR: 82,
  KeyS: 83,
  KeyT: 84,
  KeyU: 85,
  KeyV: 86,
  KeyW: 87,
  KeyX: 88,
  KeyY: 89,
  KeyZ: 90,
  BracketLeft: 219,
  BracketRight: 221,
  Enter: 13,
  ControlLeft: 162,
  ControlRight: 163,
  Semicolon: 186,
  Quote: 222,
  Backquote: 192,
  ShiftLeft: 160,
  ShiftRight: 161,
  Backslash: 220,
  Comma: 188,
  Period: 190,
  Slash: 191,
  AltLeft: 164,
  AltRight: 165,
  Space: 32,
  CapsLock: 20,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  ArrowUp: 38,
  ArrowDown: 40,
  ArrowLeft: 37,
  ArrowRight: 39,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/pass_the_controller/InputGuest.tsx");
class InputGuest {
  constructor(arg0, arg1, arg2) {
    merged = Object.assign({ sessionId: null, isMouseCaptured: false, isShutdown: false });
    uint32Array = new Uint32Array(1);
    merged[0] = crypto.getRandomValues(uint32Array)[0];
    merged.connection = global;
    merged._host = fn;
    merged._streamKey = importDefault;
    merged.hostAsBigInt = BigInt(fn);
    _handleKeyEvent = merged._handleKeyEvent;
    merged.keyHandler = _handleKeyEvent.bind(merged);
    _handleMouseEvent = merged._handleMouseEvent;
    merged.mouseHandler = _handleMouseEvent.bind(merged);
    _handleConnect = merged._handleConnect;
    merged.connectHandler = _handleConnect.bind(merged);
    _handleGrabAllow = merged._handleGrabAllow;
    merged.grabAllowHandler = _handleGrabAllow.bind(merged);
    _handleRelease = merged._handleRelease;
    merged.releaseHandler = _handleRelease.bind(merged);
    _dropController = merged._dropController;
    merged.disconnectHandler = _dropController.bind(merged);
    _handlePointerLockChange = merged._handlePointerLockChange;
    merged.pointerLockChangeHandler = _handlePointerLockChange.bind(merged);
    tmp2 = closure_1(closure_2[1]);
    tmp21 = new tmp2("InputGuest(" + fn + ")");
    merged.logger = tmp21;
    onResult = global.on(closure_0(closure_2[2]).InputEvent.Connect, merged.connectHandler);
    onResult1 = global.on(closure_0(closure_2[2]).InputEvent.GrabAllow, merged.grabAllowHandler);
    onResult2 = global.on(closure_0(closure_2[2]).InputEvent.Drop, merged.releaseHandler);
    onResult3 = global.on(closure_0(closure_2[2]).InputEvent.Disconnect, merged.disconnectHandler);
    if (global.isConnected) {
      _handleConnectResult = merged._handleConnect();
    }
    return merged;
  }
}
const prototype = InputGuest.prototype;
Object.defineProperty(prototype, "host", {
  get: function host() {
    return this._host;
  },
  set: undefined,
});
prototype["_handleConnect"] = function _handleConnect() {
  const connection = this.connection;
  connection.sendGrab(this.hostAsBigInt, this.sessionId);
};
prototype["_handleGrabAllow"] = function _handleGrabAllow(arg0) {
  const self = this;
  if (arg0 === this.sessionId) {
    const _document = document;
    const listener = document.addEventListener("keydown", self.keyHandler, true);
    const _document2 = document;
    const listener1 = document.addEventListener("keyup", self.keyHandler, true);
    self._captureMouse();
  }
};
prototype["_handleKeyEvent"] = function _handleKeyEvent(preventDefault) {
  const self = this;
  preventDefault.preventDefault();
  if (this.isMouseCaptured) {
    if ("Escape" === preventDefault.code) {
      self._dropController();
    }
  }
  if (null != closure_4[preventDefault.code]) {
    const connection = self.connection;
    connection.sendKey(self.sessionId, tmp2[preventDefault.code], "keydown" === preventDefault.type);
  } else {
    const logger = self.logger;
    const _HermesInternal = HermesInternal;
    logger.log("Unhandled key code " + preventDefault.code);
  }
};
prototype["_handleMouseEvent"] = function _handleMouseEvent(preventDefault) {
  const self = this;
  preventDefault.preventDefault();
  if ("mousemove" === preventDefault.type) {
    const connection2 = self.connection;
    connection2.sendMouseMove(self.sessionId, preventDefault.movementX, preventDefault.movementY);
  } else {
    const connection = self.connection;
    connection.sendMouseButton(self.sessionId, preventDefault.button, "mousedown" === preventDefault.type);
  }
};
prototype["_handlePointerLockChange"] = function _handlePointerLockChange() {
  if (null == document.pointerLockElement) {
    const self = this;
    this._dropController();
  }
};
prototype["_captureMouse"] = function _captureMouse() {
  const self = this;
  return (async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp3;
            c3 = 1;
            const _document7 = document;
            c1 = 3;
            c4 = 1;
            const obj4 = { value: body5.requestPointerLock({ unadjustedMovement: true }), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          const _document6 = document;
          c1 = 2;
          c4 = 1;
          const obj5 = { value: body4.requestPointerLock(), done: false };
          return obj5;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          if (closure_128_0.isShutdown) {
            const _document5 = document;
            document.exitPointerLock();
          } else {
            const _document = document;
            const listener = body.addEventListener("mousedown", closure_128_0.mouseHandler, true);
            const _document2 = document;
            const listener1 = body2.addEventListener("mouseup", closure_128_0.mouseHandler, true);
            const _document3 = document;
            const listener2 = body3.addEventListener("mousemove", closure_128_0.mouseHandler, true);
            const _document4 = document;
            const listener3 = document.addEventListener("pointerlockchange", closure_128_0.pointerLockChangeHandler);
            closure_128_0.isMouseCaptured = true;
          }
          c4 = 3;
        }
      } catch (tmp22) {
        closure_2 = tmp22;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp22;
        } else {
          c1 = tmp;
        }
      }
    }
  })();
};
prototype["_dropController"] = function _dropController() {
  const self = this;
  if (this.isMouseCaptured) {
    self._releaseController();
  }
};
prototype["_handleRelease"] = function _handleRelease(arg0) {
  const self = this;
  if (arg0 === this.sessionId) {
    self._releaseController();
  }
};
prototype["_releaseController"] = function _releaseController() {
  DispatcherDefault.dispatch({
    type: "PASS_THE_CONTROLLER_UPDATE",
    streamKey: this._streamKey,
    isHost: false,
    host: this._host,
    active: false,
  });
};
prototype["_releaseMouse"] = function _releaseMouse() {
  const self = this;
  if (this.isMouseCaptured) {
    const _document = document;
    const removed = document.removeEventListener("pointerlockchange", self.pointerLockChangeHandler);
    const _document2 = document;
    const removed1 = body.removeEventListener("mousedown", self.mouseHandler, true);
    const _document3 = document;
    const removed2 = body2.removeEventListener("mouseup", self.mouseHandler, true);
    const _document4 = document;
    const removed3 = body3.removeEventListener("mousemove", self.mouseHandler, true);
    const _document5 = document;
    document.exitPointerLock();
    self.isMouseCaptured = false;
  }
};
prototype["shutdown"] = function shutdown() {
  this.isShutdown = true;
  const connection = this.connection;
  connection.sendDrop(this.sessionId);
  this._releaseMouse();
  const removed = document.removeEventListener("keydown", this.keyHandler, true);
  const removed1 = document.removeEventListener("keyup", this.keyHandler, true);
  const connection2 = this.connection;
  connection2.off(InputEvent.InputEvent.Connect, this.connectHandler);
  const connection3 = this.connection;
  connection3.off(InputEvent.InputEvent.GrabAllow, this.grabAllowHandler);
  const connection4 = this.connection;
  connection4.off(InputEvent.InputEvent.Drop, this.releaseHandler);
  const connection5 = this.connection;
  connection5.off(InputEvent.InputEvent.Disconnect, this.disconnectHandler);
};

export default InputGuest;
