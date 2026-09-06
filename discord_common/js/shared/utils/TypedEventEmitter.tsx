// === Module 4618: TypedEventEmitter ===

// Module 4618 (TypedEventEmitter)
import _mod568 from "module_568" /* 568 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/TypedEventEmitter.tsx");
class TypedEventEmitter {
  constructor() {
    merged = Object.assign({ emitter: null });
    eventEmitter = new closure_0(closure_1[0]).EventEmitter();
    merged[0] = eventEmitter;
    return merged;
  }
}
const prototype = TypedEventEmitter.prototype;
prototype["on"] = function on(arg0, arg1) {
  const emitter = this.emitter;
  emitter.on(arg0, arg1);
};
prototype["off"] = function off(arg0, arg1) {
  const emitter = this.emitter;
  emitter.off(arg0, arg1);
};
prototype["once"] = function once(arg0, arg1) {
  const emitter = this.emitter;
  emitter.once(arg0, arg1);
};
prototype["addListener"] = function addListener(arg0, arg1) {
  const emitter = this.emitter;
  emitter.addListener(arg0, arg1);
};
prototype["removeListener"] = function removeListener(arg0, arg1) {
  const emitter = this.emitter;
  emitter.removeListener(arg0, arg1);
};
prototype["removeAllListeners"] = function removeAllListeners() {
  const emitter = this.emitter;
  emitter.removeAllListeners();
};
prototype["emit"] = function emit(arg0) {
  const emitter = this.emitter;
  const items = [arg0, ...HermesBuiltin.copyRestArgs()];
  emitter.emit.apply(items);
};
prototype["listenerCount"] = function listenerCount(arg0) {
  const emitter = this.emitter;
  return emitter.listenerCount(arg0);
};

export default TypedEventEmitter;