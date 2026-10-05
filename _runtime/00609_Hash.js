// _runtime/00609_Hash.js
import hashClear from "00610_hashClear.js";
import hashDelete from "00618_hashDelete.js";
import hashGet from "00619_hashGet.js";
import hashHas from "00620_hashHas.js";
import hashSet from "00621_hashSet.js";

class Hash {
  constructor(arg0) {
    let num2;
    let num = 0;
    if (null != arg0) {
      num = arg0.length;
    }
    const self = this;
    this.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      let tmp2 = arg0[num2];
      let result = self.set(tmp2[0], tmp2[1]);
    }
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

export default Hash;
