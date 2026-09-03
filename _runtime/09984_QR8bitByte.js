// _runtime/09984_QR8bitByte.js
import _mod9985 from "metro/09985__.js";

class QR8bitByte {
  constructor(arg0) {
    obj = { mode: require("metro/09985__.js").MODE_8BIT_BYTE, data: global };
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
  },
};

export default QR8bitByte;
