// _runtime/09528_QR8bitByte.js
import _mod9529 from "metro/09529__.js";

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
  },
};
QR8bitByte.prototype = obj;

export default QR8bitByte;
