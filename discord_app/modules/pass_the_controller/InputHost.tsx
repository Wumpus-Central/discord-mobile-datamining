// === Module 14888: InputHost ===

// Module 14888 (InputHost)
import LoggerDefault from "Logger" /* 3 */;
import RTCConnection from "RTCConnection" /* 5660 */;
import InputEvent from "InputEvent" /* 14887 */;
import PassTheControllerExperimentDefault from "PassTheControllerExperiment" /* 14890 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pass_the_controller/InputHost.tsx");
class InputHost {
  constructor(arg0, arg1, arg2, arg3, arg4) {
    merged = Object.assign({ holderSessionId: null, holderUserId: null });
    merged.pid = fn;
    merged.connection = global;
    merged.guildId = importDefault;
    merged.onGrab = importAll;
    merged.onDrop = module;
    merged.hook = null;
    _connectHookResult = merged._connectHook(fn);
    _handleKey = merged._handleKey;
    merged.keyHandler = _handleKey.bind(merged);
    _handleMouseButton = merged._handleMouseButton;
    merged.mouseButtonHandler = _handleMouseButton.bind(merged);
    _handleMouseMove = merged._handleMouseMove;
    merged.mouseMoveHandler = _handleMouseMove.bind(merged);
    _handleMouseWheel = merged._handleMouseWheel;
    merged.mouseWheelHandler = _handleMouseWheel.bind(merged);
    _handleGamepadPlug = merged._handleGamepadPlug;
    merged.gamepadPlugHandler = _handleGamepadPlug.bind(merged);
    _handleGamepadButton = merged._handleGamepadButton;
    merged.gamepadButtonHandler = _handleGamepadButton.bind(merged);
    _handleGamepadStick = merged._handleGamepadStick;
    merged.gamepadStickHandler = _handleGamepadStick.bind(merged);
    _handleGamepadTrigger = merged._handleGamepadTrigger;
    merged.gamepadTriggerHandler = _handleGamepadTrigger.bind(merged);
    _handleGrab = merged._handleGrab;
    merged.grabHandler = _handleGrab.bind(merged);
    _handleDrop = merged._handleDrop;
    merged.dropHandler = _handleDrop.bind(merged);
    tmp2 = new closure_1(closure_2[1])("InputHost");
    merged.logger = tmp2;
    onResult = global.on(closure_0(closure_2[2]).InputEvent.Key, merged.keyHandler);
    onResult1 = global.on(closure_0(closure_2[2]).InputEvent.MouseButton, merged.mouseButtonHandler);
    onResult2 = global.on(closure_0(closure_2[2]).InputEvent.MouseMove, merged.mouseMoveHandler);
    onResult3 = global.on(closure_0(closure_2[2]).InputEvent.MouseWheel, merged.mouseWheelHandler);
    onResult4 = global.on(closure_0(closure_2[2]).InputEvent.ControllerPlug, merged.gamepadPlugHandler);
    onResult5 = global.on(closure_0(closure_2[2]).InputEvent.ControllerButton, merged.gamepadButtonHandler);
    onResult6 = global.on(closure_0(closure_2[2]).InputEvent.ControllerStick, merged.gamepadStickHandler);
    onResult7 = global.on(closure_0(closure_2[2]).InputEvent.ControllerTrigger, merged.gamepadTriggerHandler);
    onResult8 = global.on(closure_0(closure_2[2]).InputEvent.Grab, merged.grabHandler);
    onResult9 = global.on(closure_0(closure_2[2]).InputEvent.Drop, merged.dropHandler);
    setHostingResult = global.setHosting(true);
    return merged;
  }
}
const prototype = InputHost.prototype;
prototype["_connectHook"] = function _connectHook(pid) {
  const self = this;
  return (async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            pid = self;
            const _handleHookConnect = self._handleHookConnect;
            c1 = 1;
            c2 = 1;
            const obj5 = {
              value: pid(c2[3]).connectToHook(pid, _handleHookConnect.bind(self), () => {

                      }),
              done: false
            };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          pid.hook = value;
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c2 = tmp;
        throw tmp10;
      }
    }
  })();
};
prototype["_handleHookConnect"] = function _handleHookConnect() {
  if (null != this.hook) {
    const hook = this.hook;
    const _JSON = JSON;
    hook.sendCommand(JSON.stringify({ message: "inject_input", inject: true }));
  }
};
prototype["_handleGrab"] = function _handleGrab(holderUserId, holderSessionId) {
  const self = this;
  if (tmp) {
    const connection = self.connection;
    connection.sendDrop(self.holderSessionId);
    self.holderSessionId = null;
  }
  if (null != self.holderSessionId) {
    if (null != self.guildId) {
      const obj2 = { guildId: self.guildId, location: "_handleGrab" };
      if (obj.getConfig(obj2).allowWrestling) {
        self._handleGamepadPlug(self.holderSessionId, false);
        const connection3 = self.connection;
        connection3.sendDrop(self.holderSessionId);
      }
      obj = PassTheControllerExperimentDefault;
    }
    const connection2 = self.connection;
    connection2.sendDrop(holderSessionId);
  }
  self.holderSessionId = holderSessionId;
  self.holderUserId = holderUserId;
  const connection4 = self.connection;
  connection4.sendGrabAllow(holderSessionId);
  self.onGrab(RTCConnection.castUserId(holderUserId.toString()));
  tmp = null != this.holderSessionId && holderUserId === self.holderUserId;
};
prototype["_handleDrop"] = function _handleDrop(arg0) {
  const self = this;
  const logger = this.logger;
  logger.log("Received drop for session " + arg0);
  if (arg0 === this.holderSessionId) {
    self._handleGamepadPlug(self.holderSessionId, false);
    self.holderSessionId = null;
    self.holderUserId = null;
    self.onDrop();
  }
};
prototype["takeBackController"] = function takeBackController() {
  const self = this;
  if (null != this.holderSessionId) {
    const connection = self.connection;
    connection.sendDrop(self.holderSessionId);
    self._handleGamepadPlug(self.holderSessionId, false);
    self.holderSessionId = null;
    self.holderUserId = null;
    self.onDrop();
  }
};
prototype["_handleKey"] = function _handleKey(arg0, keycode, down) {
  const self = this;
  let tmp = null != this.hook;
  if (tmp) {
    tmp = arg0 === self.holderSessionId;
  }
  if (tmp) {
    const hook = self.hook;
    const _JSON = JSON;
    const obj = { message: "inject_key_event", keycode, down };
    hook.sendCommand(JSON.stringify(obj));
  }
};
prototype["_handleMouseButton"] = function _handleMouseButton(arg0, which, down) {
  const self = this;
  let tmp = null != this.hook;
  if (tmp) {
    tmp = arg0 === self.holderSessionId;
  }
  if (tmp) {
    const hook = self.hook;
    const _JSON = JSON;
    const obj = { message: "inject_mousebutton_event", which, down };
    hook.sendCommand(JSON.stringify(obj));
  }
};
prototype["_handleMouseMove"] = function _handleMouseMove(arg0, x, y) {
  const self = this;
  let tmp = null != this.hook;
  if (tmp) {
    tmp = arg0 === self.holderSessionId;
  }
  if (tmp) {
    const hook = self.hook;
    const _JSON = JSON;
    const point = { message: "inject_mousemove_event", x, y };
    hook.sendCommand(JSON.stringify(point));
  }
};
prototype["_handleMouseWheel"] = function _handleMouseWheel(arg0, delta) {
  const self = this;
  let tmp = null != this.hook;
  if (tmp) {
    tmp = arg0 === self.holderSessionId;
  }
  if (tmp) {
    const hook = self.hook;
    const _JSON = JSON;
    const obj = { message: "inject_mousewheel_event", delta };
    hook.sendCommand(JSON.stringify(obj));
  }
};
prototype["_handleGamepadPlug"] = function _handleGamepadPlug(holderSessionId, arg1) {
  const self = this;
  let tmp = null != this.hook;
  if (tmp) {
    tmp = holderSessionId === self.holderSessionId;
  }
  if (tmp) {
    const hook = self.hook;
    let str = "release_gamepad";
    if (arg1) {
      str = "inject_gamepad";
    }
    const obj = { message: str, index: 0 };
    hook.sendCommand(JSON.stringify(obj));
  }
};
prototype["_handleGamepadButton"] = function _handleGamepadButton(arg0, button, down) {
  const self = this;
  let tmp = null != this.hook;
  if (tmp) {
    tmp = arg0 === self.holderSessionId;
  }
  if (tmp) {
    const hook = self.hook;
    const _JSON = JSON;
    const obj = { message: "inject_gamepad_button", index: 0, button, down };
    hook.sendCommand(JSON.stringify(obj));
  }
};
prototype["_handleGamepadStick"] = function _handleGamepadStick(arg0, isLeft, x, y) {
  const self = this;
  let tmp = null != this.hook;
  if (tmp) {
    tmp = arg0 === self.holderSessionId;
  }
  if (tmp) {
    const hook = self.hook;
    const _JSON = JSON;
    const point = { message: "inject_gamepad_stick", index: 0, x, y, isLeft };
    hook.sendCommand(JSON.stringify(point));
  }
};
prototype["_handleGamepadTrigger"] = function _handleGamepadTrigger(arg0, isLeft, arg2) {
  const self = this;
  let tmp = null != this.hook;
  if (tmp) {
    tmp = arg0 === self.holderSessionId;
  }
  if (tmp) {
    const hook = self.hook;
    const _JSON = JSON;
    const obj = { message: "inject_gamepad_trigger", index: 0, val: arg2, isLeft };
    hook.sendCommand(JSON.stringify(obj));
  }
};
prototype["shutdown"] = function shutdown() {
  const self = this;
  if (null != this.holderSessionId) {
    const connection = self.connection;
    connection.sendDrop(self.holderSessionId);
  }
  const connection2 = self.connection;
  connection2.setHosting(false);
  const connection3 = self.connection;
  connection3.off(InputEvent.InputEvent.Key, self.keyHandler);
  const connection4 = self.connection;
  connection4.off(InputEvent.InputEvent.MouseButton, self.mouseButtonHandler);
  const connection5 = self.connection;
  connection5.off(InputEvent.InputEvent.MouseMove, self.mouseMoveHandler);
  const connection6 = self.connection;
  connection6.off(InputEvent.InputEvent.MouseWheel, self.mouseWheelHandler);
  const connection7 = self.connection;
  connection7.off(InputEvent.InputEvent.ControllerPlug, self.gamepadPlugHandler);
  const connection8 = self.connection;
  connection8.off(InputEvent.InputEvent.ControllerButton, self.gamepadButtonHandler);
  const connection9 = self.connection;
  connection9.off(InputEvent.InputEvent.ControllerStick, self.gamepadStickHandler);
  const connection10 = self.connection;
  connection10.off(InputEvent.InputEvent.ControllerTrigger, self.gamepadTriggerHandler);
  const connection11 = self.connection;
  connection11.off(InputEvent.InputEvent.Grab, self.grabHandler);
  const connection12 = self.connection;
  connection12.off(InputEvent.InputEvent.Drop, self.dropHandler);
  if (null != self.hook) {
    const hook = self.hook;
    const _JSON = JSON;
    hook.sendCommand(JSON.stringify({ message: "inject_input", inject: false }));
    const hook2 = self.hook;
    hook2.destroy();
    self.hook = null;
  }
};

export default InputHost;