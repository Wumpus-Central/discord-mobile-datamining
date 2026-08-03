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
Hash.prototype.clear = require("hashClear");
Hash.prototype.delete = require("hashDelete");
Hash.prototype.get = require("hashGet");
Hash.prototype.has = require("hashHas");
Hash.prototype.set = require("hashSet");

export default Hash;