// === Module 4766: ModalDispatchQueue ===

// Module 4766 (ModalDispatchQueue)
import size from "module_2" /* 2 */;

class ModalDispatchQueue {
  constructor() {
    merged = Object.assign({ queue: null });
    merged[0] = [];
    return merged;
  }
}
const prototype = ModalDispatchQueue.prototype;
prototype["enqueue"] = function enqueue(arg0) {
  const queue = this.queue;
  queue.push(arg0);
};
prototype["flush"] = function flush() {
  const self = this;
  if (this.queue.length > 0) {
    do {
      let queue = self.queue;
      let arr = queue.shift();
      if (arr != null) {
        let arrResult = arr();
      }
    } while (self.queue.length > 0);
  }
};
let merged = Object.assign({ queue: null });
merged[0] = [];
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx");

export default merged;