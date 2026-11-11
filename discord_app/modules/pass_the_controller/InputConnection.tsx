// === Module 15994: InputConnection ===

// Module 15994 (InputConnection)
import LoggerDefault from "Logger" /* 3 */;
import RTCConnectionEvent from "RTCConnectionEvent" /* 6126 */;
import InputEvent from "InputEvent" /* 15995 */;
import TypedEventEmitter from "TypedEventEmitter" /* 6036 */;

require = fn;
const React3 = { Closed: 0, [0]: "Closed", Connecting: 1, [1]: "Connecting", Connected: 2, [2]: "Connected" };
class InputConnection extends tmp2 {
  constructor(arg0, arg1) {
    closure_0 = undefined;
    obj = new InputConnection(tmp4, tmp3, tmp2, tmp, new.target);
    closure_0 = obj;
    obj.state = closure_3.Closed;
    obj.userId = fn;
    tmp5 = new closure_1(closure_2[1])("InputConnection");
    obj.logger = tmp5;
    obj.rtc = global;
    onWebTransportAck = obj.onWebTransportAck;
    obj.webTransportAck = onWebTransportAck.bind(obj);
    onResult = obj.on(closure_0(closure_2[2]).InputEvent.Connect, () => {
      obj.state = Connected.Connected;
    });
    ({ on, onDisconnect } = obj);
    onResult1 = on(closure_0(closure_2[2]).InputEvent.Disconnect, onDisconnect.bind(obj));
    ({ on: on2, onLogMessage } = obj);
    on2Result = on2(closure_0(closure_2[2]).InputEvent.Log, onLogMessage.bind(obj));
    obj2 = closure_0(closure_2[3]);
    obj.worker = obj2.createInputWorker();
    if (null != obj.worker) {
      obj.worker.onmessage = (data) => {
        items = [data.data[0], ...data.slice(1)];
        data = data.data;
        obj.emit.apply(items);
      };
    }
    return obj;
  }
}
const prototype = InputConnection.prototype;
Object.defineProperty(prototype, "isConnected", {
  get: function isConnected() {
    return this.state === closure_3.Connected;
  },
  set: undefined
});
prototype["connect"] = function connect() {
  const self = this;
  this.state = Connecting.Connecting;
  let rtc = this.rtc;
  rtc.on(self(6126).RTCConnectionEvent.WebTransportAck, this.webTransportAck);
  const rtc2 = this.rtc;
  rtc2.startWebTransport();
  const timerId = setTimeout(() => {
    if (self.state === Connecting.Connecting) {
      const logger = self.logger;
      logger.info("Timed out connecting");
      const rtc = self.rtc;
      rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, self.webTransportAck);
      self.emit(InputEvent.InputEvent.Disconnect);
    }
  }, 10000);
};
prototype["onWebTransportAck"] = function onWebTransportAck(arg0, arg1) {
  const self = this;
  const rtc = this.rtc;
  rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, this.webTransportAck);
  const rtc2 = this.rtc;
  const voiceAddress = rtc2.getVoiceAddress();
  if (null == voiceAddress) {
    const logger = self.logger;
    logger.info("Failed to get SFU address");
    self.emit(InputEvent.InputEvent.Disconnect);
  } else {
    const _HermesInternal = HermesInternal;
    const logger2 = self.logger;
    const _HermesInternal2 = HermesInternal;
    const combined = "https://" + voiceAddress.address + ":" + voiceAddress.port + "/?token=" + arg0;
    logger2.info("Starting WebTransport connection to " + voiceAddress.address + ":" + voiceAddress.port);
    const worker = self.worker;
    if (worker != null) {
      items = [InputEvent.InputCommand.Connect, combined, arg1, self.userId];
      worker.postMessage(items);
    }
  }
};
prototype["onLogMessage"] = function onLogMessage(arg0) {
  const logger = this.logger;
  logger.log(arg0);
};
prototype["onDisconnect"] = function onDisconnect() {
  this.state = closure_3.Closed;
  const worker = this.worker;
  if (worker != null) {
    worker.terminate();
  }
};
prototype["setHosting"] = function setHosting(arg0) {
  const worker = this.worker;
  if (worker != null) {
    items = [InputEvent.InputCommand.SetHosting, arg0];
    worker.postMessage(items);
  }
};
prototype["sendKey"] = function sendKey(sessionId, arg1, arg2) {
  const worker = this.worker;
  if (worker != null) {
    items = [InputEvent.InputCommand.SendKey, sessionId, arg1, arg2];
    worker.postMessage(items);
  }
};
prototype["sendMouseMove"] = function sendMouseMove(sessionId, movementX, movementY) {
  const worker = this.worker;
  if (worker != null) {
    items = [InputEvent.InputCommand.SendMouseMove, sessionId, movementX, movementY];
    worker.postMessage(items);
  }
};
prototype["sendMouseButton"] = function sendMouseButton(sessionId, button, arg2) {
  const worker = this.worker;
  if (worker != null) {
    items = [InputEvent.InputCommand.SendMouseButton, sessionId, button, arg2];
    worker.postMessage(items);
  }
};
prototype["sendGrab"] = function sendGrab(hostAsBigInt, sessionId) {
  const worker = this.worker;
  if (worker != null) {
    items = [InputEvent.InputCommand.SendGrab, hostAsBigInt, sessionId];
    worker.postMessage(items);
  }
};
prototype["sendGrabAllow"] = function sendGrabAllow(holderSessionId) {
  const worker = this.worker;
  if (worker != null) {
    items = [InputEvent.InputCommand.SendGrabAllow, holderSessionId];
    worker.postMessage(items);
  }
};
prototype["sendDrop"] = function sendDrop(holderSessionId) {
  const worker = this.worker;
  if (worker != null) {
    items = [InputEvent.InputCommand.SendDrop, holderSessionId];
    worker.postMessage(items);
  }
};
prototype["close"] = function close() {
  const worker = this.worker;
  if (worker != null) {
    items = [InputEvent.InputCommand.Close];
    worker.postMessage(items);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/pass_the_controller/InputConnection.tsx");

export { InputConnection };