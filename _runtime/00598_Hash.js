// _runtime/00598_Hash.js
import hashClear from "00599_hashClear.js";
import hashDelete from "00607_hashDelete.js";
import hashGet from "00608_hashGet.js";
import hashHas from "00609_hashHas.js";
import hashSet from "00610_hashSet.js";

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
      result = require("hashClear");
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
