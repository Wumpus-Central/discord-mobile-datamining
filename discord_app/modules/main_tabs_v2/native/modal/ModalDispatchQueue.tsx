// discord_app/modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";

class ModalDispatchQueue {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    return obj;
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
let obj = Object.create(ModalDispatchQueue.prototype);
obj[0] = [];
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx");

export default obj;