// === Module 609: Hash ===

// Module 609 (Hash)
import hashClear from "hashClear" /* 610 */;
import hashDelete from "hashDelete" /* 618 */;
import hashGet from "hashGet" /* 619 */;
import hashHas from "hashHas" /* 620 */;
import hashSet from "hashSet" /* 621 */;

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