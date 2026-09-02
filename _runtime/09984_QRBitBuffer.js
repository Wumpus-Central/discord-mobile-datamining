// _runtime/09984_QRBitBuffer.js
class QRBitBuffer {
  constructor() {
    obj = {};
    array = new Array();
    obj.buffer = array;
    obj.length = 0;
    return;
  }
}
QRBitBuffer.prototype = {
  get(arg0) {
    return 1 === ((this.buffer[Math.floor(Math, arg0 / 8)] >>> (7 - (arg0 % 8))) & 1);
  },
  put(arg0, arg1) {
    const self = this;
    for (let num = 0; num < arg1; num = num + 1) {
      let putBitResult = self.putBit(1 === ((arg0 >>> (arg1 - num - 1)) & 1));
    }
  },
  getLengthInBits() {
    return this.length;
  },
  putBit(arg0) {
    const self = this;
    const rounded = Math.floor(this.length / 8);
    if (this.buffer.length <= rounded) {
      let buffer = self.buffer;
      buffer.push(0);
    }
    if (arg0) {
      buffer = self.buffer;
      buffer[rounded] = buffer[rounded] | (128 >>> (self.length % 8));
    }
    self.length = self.length + 1;
  },
};

export default QRBitBuffer;
