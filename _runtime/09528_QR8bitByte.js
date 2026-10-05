// === Module 9528: QR8bitByte ===

// Module 9528 (QR8bitByte)
import _mod9529 from "module_9529" /* 9529 */;

class QR8bitByte {
  constructor(data) {
    ({ mode: _mod9529.MODE_8BIT_BYTE, data });
  }
}
const obj = {
  getLength(arg0) {
    return this.data.length;
  },
  write(put) {
    let length;
    const self = this;
    let num = 0;
    if (0 < this.data.length) {
      do {
        let data = self.data;
        let putResult = put.put(data.charCodeAt(num), 8);
        num = num + 1;
        length = self.data.length;
      } while (num < length);
    }
  }
};
QR8bitByte.prototype = obj;

export default QR8bitByte;