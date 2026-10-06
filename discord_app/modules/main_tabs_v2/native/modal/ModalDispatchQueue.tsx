// === Module 5102: ModalDispatchQueue ===

// Module 5102 (ModalDispatchQueue)
import size from "module_2" /* 2 */;

class ModalDispatchQueue {
  constructor() {
    const merged = Object.assign({ queue: null });
    merged[0] = [];
    return merged;
  }
  enqueue(arg0) {
    const queue = this.queue;
    queue.push(arg0);
  }
  flush() {
    const self = this;
    if (this.queue.length > 0) {
      do {
        let queue = self.queue;
        let arr = queue.shift();
        if (arr != null) {
          let arr1Result = arr();
        }
      } while (self.queue.length > 0);
    }
  }
}
const prototype = ModalDispatchQueue.prototype;
let merged = Object.assign({ queue: null });
merged[0] = [];
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx");

export default merged;