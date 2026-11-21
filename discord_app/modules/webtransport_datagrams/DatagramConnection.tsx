// discord_app/modules/webtransport_datagrams/DatagramConnection.tsx
import RTCConnectionEvent from "../../lib/RTCConnectionEvent.tsx";
import DatagramEvent from "DatagramEvent.tsx";
import TypedEventEmitter from "../../../discord_common/js/shared/utils/TypedEventEmitter.tsx";

require = fn;
const React2 = { Closed: 0, [0]: "Closed", Connecting: 1, [1]: "Connecting", Connected: 2, [2]: "Connected" };
class DatagramConnection extends tmp2 {
  constructor(arg0, arg1) {
    closure_0 = undefined;
    obj = new DatagramConnection(tmp4, tmp3, tmp2, tmp, new.target, new.target);
    closure_0 = obj;
    obj.started = false;
    obj.connectTimeout = null;
    obj.closed = false;
    obj.state = closure_2.Closed;
    obj.userId = fn;
    obj.rtc = global;
    onWebTransportAck = obj.onWebTransportAck;
    obj.webTransportAck = onWebTransportAck.bind(obj);
    onResult = obj.on(closure_0(closure_1[1]).DatagramEvent.Connect, () => {
      obj.state = Connected.Connected;
      obj.clearConnectTimeout();
    });
    ({ on, onDisconnect } = obj);
    onResult1 = on(closure_0(closure_1[1]).DatagramEvent.Disconnect, onDisconnect.bind(obj));
    obj2 = closure_0(closure_1[2]);
    obj.worker = obj2.createDatagramWorker();
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
const prototype = DatagramConnection.prototype;
Object.defineProperty(prototype, "isConnected", {
  get: function isConnected() {
    return this.state === closure_2.Connected;
  },
  set: undefined,
});
prototype["connect"] = function connect() {
  const self = this;
  if (!tmp) {
    self.started = true;
    self.state = Connecting.Connecting;
    let rtc = self.rtc;
    rtc.on(self(5773).RTCConnectionEvent.WebTransportAck, self.webTransportAck);
    const _setTimeout = setTimeout;
    self.connectTimeout = setTimeout(() => {
      if (self.state === Connecting.Connecting) {
        self.emit(DatagramEvent.DatagramEvent.Timeout);
        const rtc = self.rtc;
        rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, self.webTransportAck);
        self.emit(DatagramEvent.DatagramEvent.Disconnect);
      }
    }, 10000);
    const rtc2 = self.rtc;
    rtc2.startWebTransport();
  }
  tmp = this.started || self.closed;
};
prototype["onWebTransportAck"] = function onWebTransportAck(arg0, arg1) {
  const self = this;
  const rtc = this.rtc;
  rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, this.webTransportAck);
  const rtc2 = this.rtc;
  const voiceAddress = rtc2.getVoiceAddress();
  if (null == voiceAddress) {
    self.emit(DatagramEvent.DatagramEvent.MissingAddress);
    self.emit(DatagramEvent.DatagramEvent.Disconnect);
  } else {
    self.emit(DatagramEvent.DatagramEvent.Starting, voiceAddress.address, voiceAddress.port);
    const _HermesInternal = HermesInternal;
    const worker = self.worker;
    if (worker != null) {
      items = [DatagramEvent.DatagramCommand.Connect, tmp12, arg1, self.userId];
      worker.postMessage(items);
    }
  }
};
prototype["clearConnectTimeout"] = function clearConnectTimeout() {
  const self = this;
  if (null != this.connectTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.connectTimeout);
    self.connectTimeout = null;
  }
};
prototype["onDisconnect"] = function onDisconnect() {
  this.clearConnectTimeout();
  this.state = closure_2.Closed;
  this.closed = true;
  const rtc = this.rtc;
  rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, this.webTransportAck);
  const worker = this.worker;
  if (worker != null) {
    worker.terminate();
  }
};
prototype["send"] = function send(arg0) {
  const substr = [...arguments].slice();
  const worker = this.worker;
  if (worker != null) {
    items = [arg0];
    HermesBuiltin.arraySpread(substr, 1);
    worker.postMessage(items);
  }
};
prototype["close"] = function close() {
  const self = this;
  if (!this.closed) {
    self.closed = true;
    self.clearConnectTimeout();
    self.state = closure_2.Closed;
    const rtc = self.rtc;
    rtc.off(RTCConnectionEvent.RTCConnectionEvent.WebTransportAck, self.webTransportAck);
    const worker = self.worker;
    if (self.isConnected) {
      if (worker != null) {
        items = [DatagramEvent.DatagramCommand.Close];
        worker.postMessage(items);
      }
    } else if (worker != null) {
      worker.terminate();
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/webtransport_datagrams/DatagramConnection.tsx");

export { DatagramConnection };
