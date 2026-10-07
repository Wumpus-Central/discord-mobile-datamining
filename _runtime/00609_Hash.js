// _runtime/00609_Hash.js
import hashClear from "00610_hashClear.js";
import hashDelete from "00618_hashDelete.js";
import hashGet from "00619_hashGet.js";
import hashHas from "00620_hashHas.js";
import hashSet from "00621_hashSet.js";

class Hash {
  constructor(arg0) {
    num = 0;
    if (null != global) {
      num = global.length;
    }
    self = this;
    clearResult = this.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      tmp2 = global[num2];
      result = self.set(tmp2[0], tmp2[1]);
    }
    return;
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

export default Hash;
