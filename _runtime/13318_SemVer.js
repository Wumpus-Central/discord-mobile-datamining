// === Module 13318: SemVer ===

// Module 13318 (SemVer)
import _createClass from "_createClass" /* 42 */;
import closure_2 from "_classCallCheck" /* 41 */;

const SemVer = require;
class SemVer {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_2(this, SemVer);
    tmp2 = SemVer;
    tmp3 = closure_1;
    tmp4 = require("module_13319")(require);
    if (global instanceof SemVer) {
      if (global.loose === tmp4.loose) {
        if (global.includePrerelease === tmp4.includePrerelease) {
          return global;
        }
      }
      version = global.version;
    } else {
      version = global;
      if (typeof global !== "string") {
        tmp33 = globalThis;
        _TypeError6 = TypeError;
        _HermesInternal3 = HermesInternal;
        str11 = "\".";
        str12 = "Invalid version. Must be a string. Got type \"";
        tmp34 = new.target;
        tmp35 = new.target;
        typeError = new TypeError("Invalid version. Must be a string. Got type \"" + typeof global + "\".");
        tmp37 = typeError;
        throw typeError;
      }
    }
    if (version.length > require("module_13320").MAX_LENGTH) {
      tmp28 = globalThis;
      _TypeError5 = TypeError;
      _HermesInternal2 = HermesInternal;
      str9 = " characters";
      str10 = "version is longer than ";
      tmp29 = new.target;
      tmp30 = new.target;
      typeError1 = new TypeError("version is longer than " + require("module_13320").MAX_LENGTH + " characters");
      tmp32 = typeError1;
      throw typeError1;
    } else {
      str13 = "SemVer";
      tmp38 = require("module_13321")("SemVer", version, tmp4);
      self.options = tmp4;
      self.loose = tmp4.loose;
      self.includePrerelease = tmp4.includePrerelease;
      str14 = version.trim();
      safeRe = require("items").safeRe;
      t = require("items").t;
      if (tmp4.loose) {
        tmp5 = safeRe[t.LOOSE];
      } else {
        tmp5 = safeRe[t.FULL];
      }
      match = str14.match(tmp5);
      if (match) {
        self.raw = version;
        self.major = +match[1];
        self.minor = +match[2];
        self.patch = +match[3];
        if (self.major <= require("module_13320").MAX_SAFE_INTEGER) {
          num = 0;
          if (self.major >= 0) {
            if (self.minor <= require("module_13320").MAX_SAFE_INTEGER) {
              if (self.minor >= 0) {
                if (self.patch <= require("module_13320").MAX_SAFE_INTEGER) {
                  if (self.patch >= 0) {
                    if (match[4]) {
                      str2 = match[4];
                      str3 = ".";
                      parts = str2.split(".");
                      self.prerelease = parts.map((arg0) => {
                        if (obj.test(arg0)) {
                          if (0 <= +arg0) {
                            if (tmp < callback(table[3]).MAX_SAFE_INTEGER) {
                              return tmp;
                            }
                          }
                        }
                        return arg0;
                      });
                    } else {
                      self.prerelease = [];
                    }
                    if (match[5]) {
                      str4 = match[5];
                      str5 = ".";
                      parts1 = str4.split(".");
                    } else {
                      parts1 = [];
                    }
                    self.build = parts1;
                    formatResult = self.format();
                    return;
                  }
                }
                tmp13 = globalThis;
                _TypeError2 = TypeError;
                tmp14 = new.target;
                str6 = "Invalid patch version";
                tmp15 = new.target;
                typeError2 = new TypeError("Invalid patch version");
                tmp17 = typeError2;
                throw typeError2;
              }
            }
            tmp18 = globalThis;
            _TypeError3 = TypeError;
            tmp19 = new.target;
            str7 = "Invalid minor version";
            tmp20 = new.target;
            typeError3 = new TypeError("Invalid minor version");
            tmp22 = typeError3;
            throw typeError3;
          }
        }
        tmp23 = globalThis;
        _TypeError4 = TypeError;
        tmp24 = new.target;
        str8 = "Invalid major version";
        tmp25 = new.target;
        typeError4 = new TypeError("Invalid major version");
        tmp27 = typeError4;
        throw typeError4;
      } else {
        tmp7 = globalThis;
        _TypeError = TypeError;
        _HermesInternal = HermesInternal;
        str = "Invalid Version: ";
        tmp8 = new.target;
        tmp9 = new.target;
        typeError5 = new TypeError("Invalid Version: " + version);
        tmp11 = typeError5;
        throw typeError5;
      }
    }
  }
}
let items = [
  {
    key: "format",
    value: function format() {
      const self = this;
      this.version = "" + this.major + "." + this.minor + "." + this.patch;
      if (this.prerelease.length) {
        ({ prerelease, version } = self);
        const _HermesInternal = HermesInternal;
        self.version = version + "-" + prerelease.join(".");
      }
      return self.version;
    }
  },
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
      SemVer(13321)("SemVer.compare", this.version, this.options, tmp2Result);
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
        const tmp4 = self.compareMain(tmp2Result) || self.comparePre(tmp2Result);
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
      let compareIdentifiersResult = SemVer(13323).compareIdentifiers(self.major, tmpResult.major);
      if (!compareIdentifiersResult) {
        let tmp3Result = tmp3(13323);
        compareIdentifiersResult = tmp3Result.compareIdentifiers(self.minor, tmpResult.minor);
      }
      if (!compareIdentifiersResult) {
        tmp3Result = tmp3(13323);
        compareIdentifiersResult = tmp3Result.compareIdentifiers(self.patch, tmpResult.patch);
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
        let tmp5 = SemVer;
        let tmp6 = dependencyMap;
        let str = "prerelease compare";
        let tmp7 = num3;
        let tmp8 = tmp3;
        let tmp9 = tmp4;
        let tmp10 = SemVer(13321)("prerelease compare", num3, tmp3, tmp4);
        let tmp11 = undefined === tmp3;
        let tmp12 = num3;
        if (tmp11) {
          if (undefined === tmp4) {
            break;
          }
        }
        if (undefined === tmp4) {
          let num6 = 1;
          return 1;
        } else if (tmp11) {
          let num5 = -1;
          return -1;
        } else if (tmp3 !== tmp4) {
          let tmp5Result = tmp5(13323);
          return tmp5Result.compareIdentifiers(tmp3, tmp4);
        } else {
          let num4 = 1;
          num3 = num3 + 1;
        }
      }
      return 0;
    }
  },
  {
    key: "compareBuild",
    value: function compareBuild(arg0) {
      const self = this;
      let tmpResult = arg0;
      if (!(arg0 instanceof SemVer)) {
        tmpResult = SemVer(arg0, self.options);
      }
      let num = 0;
      while (true) {
        let tmp3 = self.build[num];
        let tmp4 = tmpResult.build[num];
        let tmp5 = SemVer;
        let tmp6 = dependencyMap;
        let str = "build compare";
        let tmp7 = num;
        let tmp8 = tmp3;
        let tmp9 = tmp4;
        let tmp10 = SemVer(13321)("build compare", num, tmp3, tmp4);
        let tmp11 = undefined === tmp3;
        let tmp12 = num;
        if (tmp11) {
          if (undefined === tmp4) {
            break;
          }
        }
        if (undefined === tmp4) {
          return 1;
        } else if (tmp11) {
          let num2 = -1;
          return -1;
        } else if (tmp3 !== tmp4) {
          let tmp5Result = tmp5(13323);
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
    value: function inc(pre, major2, arg2) {
      const self = this;
      if ("premajor" === pre) {
        self.prerelease.length = 0;
        self.patch = 0;
        self.minor = 0;
        self.major = self.major + 1;
        self.inc("pre", major2, arg2);
      } else if ("preminor" === pre) {
        self.prerelease.length = 0;
        self.patch = 0;
        self.minor = self.minor + 1;
        self.inc("pre", major2, arg2);
      } else if ("prepatch" === pre) {
        self.prerelease.length = 0;
        self.inc("patch", major2, arg2);
        self.inc("pre", major2, arg2);
      } else if ("prerelease" === pre) {
        if (0 === self.prerelease.length) {
          self.inc("patch", major2, arg2);
        }
        self.inc("pre", major2, arg2);
      } else if ("major" === pre) {
        if (!tmp22) {
          self.major = self.major + 1;
        }
        self.minor = 0;
        self.patch = 0;
        self.prerelease = [];
        tmp22 = 0 === self.minor && 0 === self.patch && 0 !== self.prerelease.length;
      } else if ("minor" === pre) {
        if (!tmp21) {
          self.minor = self.minor + 1;
        }
        self.patch = 0;
        self.prerelease = [];
        tmp21 = 0 === self.patch && 0 !== self.prerelease.length;
      } else if ("patch" === pre) {
        if (0 === self.prerelease.length) {
          self.patch = self.patch + 1;
        }
        self.prerelease = [];
      } else if ("pre" === pre) {
        const _Number = Number;
        let num2 = 0;
        if (Number(arg2)) {
          num2 = 1;
        }
        if (!major2) {
          if (false === arg2) {
            const _Error2 = Error;
            error = new Error("invalid increment argument: identifier is empty");
            throw error;
          }
        }
        if (0 === self.prerelease.length) {
          const items = [num2];
          self.prerelease = items;
        } else {
          let diff = self.prerelease.length - 1;
          let tmp13 = diff;
          if (diff >= 0) {
            do {
              let tmp11 = diff;
              let num3 = diff;
              if (typeof self.prerelease[diff] === "number") {
                let prerelease2 = self.prerelease;
                prerelease2[diff] = prerelease2[diff] + 1;
                num3 = -2;
              }
              diff = num3 - 1;
              tmp13 = diff;
            } while (diff >= 0);
          }
          if (-1 === tmp13) {
            let prerelease = self.prerelease;
            if (major2 === prerelease.join(".")) {
              if (false === arg2) {
                const _Error3 = Error;
                const error1 = new Error("invalid increment argument: identifier already exists");
                throw error1;
              }
            }
            prerelease = self.prerelease;
            prerelease.push(num2);
          }
        }
        if (major2) {
          let items1 = [major2, num2];
          if (false === arg2) {
            const items2 = [major2];
            items1 = items2;
          }
          if (0 === obj.compareIdentifiers(self.prerelease[0], major2)) {
            const _isNaN = isNaN;
            if (isNaN(self.prerelease[1])) {
              self.prerelease = items1;
            }
          } else {
            self.prerelease = items1;
          }
          obj = SemVer(13323);
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
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