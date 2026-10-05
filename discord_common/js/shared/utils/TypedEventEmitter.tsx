// === Module 4948: TypedEventEmitter ===

// Module 4948 (TypedEventEmitter)
import _mod580 from "module_580" /* 580 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/TypedEventEmitter.tsx");
class TypedEventEmitter {
  constructor() {
    const merged = Object.assign({ emitter: null });
    const eventEmitter = new _mod580.EventEmitter();
    merged[0] = eventEmitter;
    return merged;
  }
  on(arg0, arg1) {
    const emitter = this.emitter;
    emitter.on(arg0, arg1);
  }
  off(arg0, arg1) {
    const emitter = this.emitter;
    emitter.off(arg0, arg1);
  }
  once(arg0, arg1) {
    const emitter = this.emitter;
    emitter.once(arg0, arg1);
  }
  addListener(arg0, arg1) {
    const emitter = this.emitter;
    emitter.addListener(arg0, arg1);
  }
  removeListener(arg0, arg1) {
    const emitter = this.emitter;
    emitter.removeListener(arg0, arg1);
  }
  removeAllListeners() {
    const emitter = this.emitter;
    emitter.removeAllListeners();
  }
  emit(arg0) {
    const emitter = this.emitter;
    const items = [arg0, ...HermesBuiltin.copyRestArgs()];
    emitter.emit.apply(items);
  }
  listenerCount(arg0) {
    const emitter = this.emitter;
    return emitter.listenerCount(arg0);
  }
}
const prototype = TypedEventEmitter.prototype;

export default TypedEventEmitter;