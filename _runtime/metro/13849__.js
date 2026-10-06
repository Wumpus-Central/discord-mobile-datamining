// === Module 13849: ? ===

// Module 13849
import _createClass from "_createClass" /* 42 */;
import _mod13850 from "module_13850" /* 13850 */;
import _mod13851 from "module_13851" /* 13851 */;
import _mod13852 from "module_13852" /* 13852 */;
import _mod13853 from "module_13853" /* 13853 */;
import _mod13854 from "module_13854" /* 13854 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class SemVer {
  constructor(loose, options) {
    let version;
    const self = this;
    _classCallCheck(this, SemVer);
    const tmp4 = _mod13850(options);
    if (loose instanceof SemVer) {
      if (loose.loose === tmp4.loose) {
        if (loose.includePrerelease === tmp4.includePrerelease) {
          return loose;
        }
      }
      version = loose.version;
    } else {
      version = loose;
      if (typeof loose !== "string") {
        const _TypeError6 = TypeError;
        const _HermesInternal3 = HermesInternal;
        const self12 = this;
        const self13 = this;
        const typeError = new TypeError("Invalid version. Must be a string. Got type \"" + typeof loose + "\".");
        throw typeError;
      }
    }
    if (version.length > _mod13851.MAX_LENGTH) {
      const _TypeError5 = TypeError;
      const _HermesInternal2 = HermesInternal;
      const self10 = this;
      const self11 = this;
      const typeError1 = new TypeError("version is longer than " + _mod13851.MAX_LENGTH + " characters");
      throw typeError1;
    } else {
      let tmp5;
      _mod13852("SemVer", version, tmp4);
      self.options = tmp4;
      self.loose = tmp4.loose;
      self.includePrerelease = tmp4.includePrerelease;
      const match = version.trim().match;
      loose = tmp4.loose;
      version.trim();
      const safeRe = _mod13853.safeRe;
      const t = _mod13853.t;
      if (loose) {
        tmp5 = safeRe[t.LOOSE];
      } else {
        tmp5 = safeRe[t.FULL];
      }
      const match1 = match(tmp5);
      if (match1) {
        self.raw = version;
        self.major = +match1[1];
        self.minor = +match1[2];
        self.patch = +match1[3];
        if (self.major <= _mod13851.MAX_SAFE_INTEGER) {
          if (self.major >= 0) {
            if (self.minor <= _mod13851.MAX_SAFE_INTEGER) {
              if (self.minor >= 0) {
                if (self.patch <= _mod13851.MAX_SAFE_INTEGER) {
                  if (self.patch >= 0) {
                    let parts1;
                    if (match1[4]) {
                      const str2 = match1[4];
                      const parts = str2.split(".");
                      self.prerelease = parts.map((item) => {
                        const obj = /^[0-9]+$/;
                        if (obj.test(item)) {
                          if (0 <= +item) {
                            if (+item < SemVer(closure_1_1[3]).MAX_SAFE_INTEGER) {
                              return +item;
                            }
                          }
                        }
                        return item;
                      });
                    } else {
                      self.prerelease = [];
                    }
                    if (match1[5]) {
                      const str4 = match1[5];
                      parts1 = str4.split(".");
                    } else {
                      parts1 = [];
                    }
                    self.build = parts1;
                    self.format();
                  }
                }
                const _TypeError2 = TypeError;
                const self4 = this;
                const self5 = this;
                const typeError2 = new TypeError("Invalid patch version");
                throw typeError2;
              }
            }
            const _TypeError3 = TypeError;
            const self6 = this;
            const self7 = this;
            const typeError3 = new TypeError("Invalid minor version");
            throw typeError3;
          }
        }
        const _TypeError4 = TypeError;
        const self8 = this;
        const self9 = this;
        const typeError4 = new TypeError("Invalid major version");
        throw typeError4;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError5 = new TypeError("Invalid Version: " + version);
        throw typeError5;
      }
    }
  }
}
const entry = {
  key: "format",
  value: function format() {
    let prerelease;
    let version;
    const self = this;
    this.version = "" + this.major + "." + this.minor + "." + this.patch;
    if (this.prerelease.length) {
      ({ prerelease, version } = self);
      const _HermesInternal = HermesInternal;
      self.version = version + "-" + prerelease.join(".");
    }
    return self.version;
  }
};
let items = [
  entry,
  {
    key: "toString",
    value: function toString() {
      return this.version;
    }
  },
  {
    key: "compare",
    value: function compare(tmp2Result) {
      const self = this;
      _mod13852("SemVer.compare", this.version, this.options, tmp2Result);
      if (!(tmp2Result instanceof SemVer)) {
        if (typeof tmp2Result === "string") {
          if (tmp2Result === self.version) {
            return 0;
          }
        }
        tmp2Result = SemVer(tmp2Result, self.options);
      }
      let num2 = 0;
      if (tmp2Result.version !== self.version) {
        num2 = self.compareMain(tmp2Result) || self.comparePre(tmp2Result);
        self.compareMain(tmp2Result) || self.comparePre(tmp2Result);
      }
      return num2;
    }
  },
  {
    key: "compareMain",
    value: function compareMain(tmp2Result) {
      const self = this;
      let tmpResult = tmp2Result;
      if (!(tmp2Result instanceof SemVer)) {
        tmpResult = SemVer(tmp2Result, self.options);
      }
      const obj = _mod13854;
      let compareIdentifiersResult = obj.compareIdentifiers(self.major, tmpResult.major);
      if (!compareIdentifiersResult) {
        const tmp3Result = _mod13854;
        compareIdentifiersResult = tmp3Result.compareIdentifiers(self.minor, tmpResult.minor);
      }
      if (!compareIdentifiersResult) {
        const tmp3Result2 = _mod13854;
        compareIdentifiersResult = tmp3Result2.compareIdentifiers(self.patch, tmpResult.patch);
      }
      return compareIdentifiersResult;
    }
  },
  {
    key: "comparePre",
    value: function comparePre(tmp2Result) {
      const self = this;
      let tmpResult = tmp2Result;
      if (!(tmp2Result instanceof SemVer)) {
        tmpResult = SemVer(tmp2Result, self.options);
      }
      if (self.prerelease.length) {
        if (!tmpResult.prerelease.length) {
          return -1;
        }
      }
      if (!self.prerelease.length) {
        if (tmpResult.prerelease.length) {
          return 1;
        }
      }
      let num3 = 0;
      if (!self.prerelease.length) {
        num3 = 0;
        if (!tmpResult.prerelease.length) {
          return 0;
        }
      }
      while (true) {
        let tmp3 = self.prerelease[num3];
        let tmp4 = tmpResult.prerelease[num3];
        let str = "prerelease compare";
        let tmp10 = _mod13852("prerelease compare", num3, tmp3, tmp4);
        let tmp11 = undefined === tmp3;
        if (tmp11) {
          if (undefined === tmp4) {
            break;
          }
        }
        if (undefined === tmp4) {
          return 1;
        } else if (tmp11) {
          return -1;
        } else if (tmp3 !== tmp4) {
          let tmp5Result = _mod13854;
          return tmp5Result.compareIdentifiers(tmp3, tmp4);
        } else {
          num3 = num3 + 1;
        }
      }
      return 0;
    }
  },
  {
    key: "compareBuild",
    value: function compareBuild(loose) {
      const self = this;
      let tmpResult = loose;
      if (!(loose instanceof SemVer)) {
        tmpResult = SemVer(loose, self.options);
      }
      let num = 0;
      while (true) {
        let tmp3 = self.build[num];
        let tmp4 = tmpResult.build[num];
        let str = "build compare";
        let tmp10 = _mod13852("build compare", num, tmp3, tmp4);
        let tmp11 = undefined === tmp3;
        if (tmp11) {
          if (undefined === tmp4) {
            break;
          }
        }
        if (undefined === tmp4) {
          return 1;
        } else if (tmp11) {
          return -1;
        } else if (tmp3 !== tmp4) {
          let tmp5Result = _mod13854;
          return tmp5Result.compareIdentifiers(tmp3, tmp4);
        } else {
          num = num + 1;
        }
      }
      return 0;
    }
  },
  {
    key: "inc",
    value: function inc(pre, major2, major22) {
      const self = this;
      if ("premajor" === pre) {
        self.prerelease.length = 0;
        self.patch = 0;
        self.minor = 0;
        self.major = self.major + 1;
        self.inc("pre", major2, major2);
      } else if ("preminor" === pre) {
        self.prerelease.length = 0;
        self.patch = 0;
        self.minor = self.minor + 1;
        self.inc("pre", major2, major2);
      } else if ("prepatch" === pre) {
        self.prerelease.length = 0;
        self.inc("patch", major2, major2);
        self.inc("pre", major2, major2);
      } else if ("prerelease" === pre) {
        if (0 === self.prerelease.length) {
          self.inc("patch", major2, major2);
        }
        self.inc("pre", major2, major2);
      } else if ("major" === pre) {
        const tmp16 = 0 === self.minor && 0 === self.patch && 0 !== self.prerelease.length;
        if (!tmp16) {
          self.major = self.major + 1;
        }
        self.minor = 0;
        self.patch = 0;
        self.prerelease = [];
      } else if ("minor" === pre) {
        const tmp15 = 0 === self.patch && 0 !== self.prerelease.length;
        if (!tmp15) {
          self.minor = self.minor + 1;
        }
        self.patch = 0;
        self.prerelease = [];
      } else if ("patch" === pre) {
        if (0 === self.prerelease.length) {
          self.patch = self.patch + 1;
        }
        self.prerelease = [];
      } else if ("pre" === pre) {
        const _Number = Number;
        let num2 = 0;
        if (Number(major2)) {
          num2 = 1;
        }
        if (!major2) {
          if (false === major2) {
            const _Error2 = Error;
            const self4 = this;
            const self5 = this;
            const error = new Error("invalid increment argument: identifier is empty");
            throw error;
          }
        }
        if (0 === self.prerelease.length) {
          const items = [num2];
          self.prerelease = items;
        } else {
          let diff = self.prerelease.length - 1;
          let tmp9 = diff;
          if (diff >= 0) {
            do {
              let num3 = diff;
              if (typeof self.prerelease[diff] === "number") {
                let prerelease2 = self.prerelease;
                prerelease2[diff] = prerelease2[diff] + 1;
                num3 = -2;
              }
              diff = num3 - 1;
              tmp9 = diff;
            } while (diff >= 0);
          }
          if (-1 === tmp9) {
            const prerelease = self.prerelease;
            if (major2 === prerelease.join(".")) {
              if (false === major2) {
                const _Error3 = Error;
                const self6 = this;
                const self7 = this;
                const error1 = new Error("invalid increment argument: identifier already exists");
                throw error1;
              }
            }
            const prerelease1 = self.prerelease;
            prerelease1.push(num2);
          }
        }
        if (major2) {
          let items1 = [major2, num2];
          if (false === major2) {
            const items2 = [major2];
            items1 = items2;
          }
          const obj = _mod13854;
          if (0 === obj.compareIdentifiers(self.prerelease[0], major2)) {
            const _isNaN = isNaN;
            if (isNaN(self.prerelease[1])) {
              self.prerelease = items1;
            }
          } else {
            self.prerelease = items1;
          }
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const error2 = new Error("invalid increment argument: " + pre);
        throw error2;
      }
      self.raw = self.format();
      if (self.build.length) {
        const build = self.build;
        const _HermesInternal2 = HermesInternal;
        self.raw = self.raw + "+" + build.join(".");
      }
      return self;
    }
  }
];

export default _createClass(SemVer, items);