// === Module 9867: QR8bitByte ===

// Module 9867 (QR8bitByte)
import _mod9868 from "module_9868" /* 9868 */;

class QR8bitByte {
  constructor(arg0) {
    obj = { mode: closure_0(closure_1[0]).MODE_8BIT_BYTE, data: global };
    return;
  }
}
QR8bitByte.prototype = {
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

export default QR8bitByte;