// === Module 14882: InputConnection ===

// Module 14882 (InputConnection)
import LoggerDefault from "Logger" /* 3 */;
import DatagramEvent from "DatagramEvent" /* 14885 */;
import InputEvent from "InputEvent" /* 14889 */;
import TypedEventEmitter from "TypedEventEmitter" /* 5682 */;

require = fn;
_instance_members_initializer_InputConnection_ = function() {
  this.detach = [];
  this.logger = new LoggerDefault("InputConnection");
  this.hosting = false;
  this.closed = false;
};
class InputConnection extends tmp2 {
  constructor(arg0, arg1) {
    closure_6 = undefined;
    obj = new failure(tmp4, tmp3, tmp2, tmp);
    closure_6 = obj;
    tmp5 = timeout();
    obj2 = connected(starting[2]);
    obj.lease = obj2.acquireDatagramConnection(global, fn);
    obj.transport = obj.lease.connection;
    connected = function connected() {
      return obj.setHosting(obj.hosting);
    };
    transport = obj.transport;
    onResult = transport.on(connected(starting[3]).DatagramEvent.Connect, connected);
    detach = obj.detach;
    arr1 = detach.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.Connect, connected);
    });
    onResult1 = obj.on(connected(starting[4]).InputEvent.Log, (arg0) => {
      const logger = obj.logger;
      return logger.log(arg0);
    });
    values = Object.values(connected(starting[4]).InputEvent);
    for (const item10049 of values) {
      forwardResult = obj.forward(item10049);
      continue;
    }
    missingAddress = function missingAddress() {
      const logger = obj.logger;
      return logger.info("Failed to get SFU address");
    };
    starting = function starting(arg0, arg1) {
      const logger = obj.logger;
      return logger.info("Starting WebTransport connection to " + arg0 + ":" + arg1);
    };
    failure = function failure(arg0, arg1) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = arg0;
      }
      const logger = obj.logger;
      return logger.log(tmp);
    };
    timeout = function timeout() {
      const logger = obj.logger;
      return logger.info("Timed out connecting");
    };
    readStarted = function readStarted(arg0) {
      return obj.emit(InputEvent.InputEvent.Log, "awaiting read with size " + arg0);
    };
    transport2 = obj.transport;
    onResult2 = transport2.on(connected(starting[3]).DatagramEvent.Failure, failure);
    transport3 = obj.transport;
    onResult3 = transport3.on(connected(starting[3]).DatagramEvent.Timeout, timeout);
    transport4 = obj.transport;
    onResult4 = transport4.on(connected(starting[3]).DatagramEvent.ReadStarted, readStarted);
    detach1 = obj.detach;
    arr7 = detach1.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.Failure, failure);
    });
    detach2 = obj.detach;
    arr8 = detach2.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.Timeout, timeout);
    });
    detach3 = obj.detach;
    arr9 = detach3.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.ReadStarted, readStarted);
    });
    transport5 = obj.transport;
    onResult5 = transport5.on(connected(starting[3]).DatagramEvent.MissingAddress, missingAddress);
    transport6 = obj.transport;
    onResult6 = transport6.on(connected(starting[3]).DatagramEvent.Starting, starting);
    detach4 = obj.detach;
    arr10 = detach4.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.MissingAddress, missingAddress);
    });
    detach5 = obj.detach;
    arr11 = detach5.push(() => {
      const transport = obj.transport;
      return transport.off(DatagramEvent.DatagramEvent.Starting, starting);
    });
    return obj;
  }
}
const prototype = InputConnection.prototype;
prototype["forward"] = function forward(arg0) {
  const self = this;
  closure_1 = arg0;
  function listener() {
    items = [closure_1, ...HermesBuiltin.copyRestArgs()];
    return self.emit.apply(items);
  }
  let transport = this.transport;
  transport.on(arg0, listener);
  const detach = this.detach;
  detach.push(() => {
    const transport = self.transport;
    return transport.off(closure_1, listener);
  });
};
Object.defineProperty(prototype, "isConnected", {
  get: function isConnected() {
    return this.transport.isConnected;
  },
  set: undefined
});
prototype["connect"] = function connect() {
  const transport = this.transport;
  transport.connect();
};
prototype["setHosting"] = function setHosting(hosting) {
  const self = this;
  if (!this.closed) {
    self.hosting = hosting;
    const transport = self.transport;
    transport.send(InputEvent.InputCommand.SetHosting, hosting);
  }
};
prototype["sendKey"] = function sendKey(sessionId, arg1, arg2) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendKey, sessionId, arg1, arg2);
};
prototype["sendMouseWheel"] = function sendMouseWheel(sessionId, arg1) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendMouseWheel, sessionId, arg1);
};
prototype["sendMouseMove"] = function sendMouseMove(sessionId, movementX, movementY) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendMouseMove, sessionId, movementX, movementY);
};
prototype["sendMouseButton"] = function sendMouseButton(sessionId, button, arg2) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendMouseButton, sessionId, button, arg2);
};
prototype["sendControllerButton"] = function sendControllerButton(sessionId, item, flag) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendControllerButton, sessionId, item, flag);
};
prototype["sendControllerStick"] = function sendControllerStick(sessionId, arg1, bound2, bound3) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendControllerStick, sessionId, arg1, bound2, bound3);
};
prototype["sendControllerTrigger"] = function sendControllerTrigger(sessionId, arg1, bound) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendControllerTrigger, sessionId, arg1, bound);
};
prototype["sendControllerPlug"] = function sendControllerPlug(sessionId, arg1) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendControllerPlug, sessionId, arg1);
};
prototype["sendGrab"] = function sendGrab(hostAsBigInt, sessionId) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendGrab, hostAsBigInt, sessionId);
};
prototype["sendGrabAllow"] = function sendGrabAllow(holderSessionId) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendGrabAllow, holderSessionId);
};
prototype["sendDrop"] = function sendDrop(holderSessionId) {
  const transport = this.transport;
  transport.send(InputEvent.InputCommand.SendDrop, holderSessionId);
};
prototype["close"] = function close() {
  this.closed = true;
  const detach = this.detach;
  for (const item10010 of spliceResult) {
    let item10010Result = item10010();
    continue;
  }
  const lease = this.lease;
  lease.release();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/pass_the_controller/InputConnection.tsx");

export { InputConnection };