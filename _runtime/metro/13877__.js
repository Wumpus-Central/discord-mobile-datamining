// _runtime/metro/13877__.js
import _mod13849 from "13849__.js";
import _mod13850 from "13850__.js";
import _mod13852 from "13852__.js";
import _mod13853 from "13853__.js";
import _mod13875 from "13875__.js";
import _mod13878 from "13878__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

const semver = Symbol("SemVer ANY");
class Comparator {
  constructor(loose, arg1) {
    const self = this;
    _classCallCheck(this, Comparator);
    const tmp4 = _mod13850(arg1);
    let str = loose;
    if (loose instanceof Comparator) {
      if (loose.loose === tmp4.loose) {
        return loose;
      } else {
        str = loose.value;
      }
    }
    const str2 = str.trim();
    const parts = str2.split(/\s+/);
    const joined = parts.join(" ");
    _mod13852("comparator", joined, tmp4);
    self.options = tmp4;
    self.loose = tmp4.loose;
    const parsed = self.parse(joined);
    if (self.semver === semver) {
      self.value = "";
    } else {
      self.value = self.operator + self.semver.version;
    }
    _mod13852("comp", self);
  }
}
const entry = {
  key: "parse",
  value: function parse(str) {
    let tmp3;
    let tmp5;
    const self = this;
    const loose = this.options.loose;
    const safeRe = _mod13853.safeRe;
    const t = _mod13853.t;
    if (loose) {
      tmp3 = safeRe[t.COMPARATORLOOSE];
      tmp5 = require;
    } else {
      tmp3 = safeRe[t.COMPARATOR];
      tmp5 = require;
    }
    const match = str.match(tmp3);
    if (match) {
      let str3 = "";
      if (undefined !== match[1]) {
        str3 = match[1];
      }
      self.operator = str3;
      if ("=" === self.operator) {
        self.operator = "";
      }
      if (match[2]) {
        const self4 = this;
        const self5 = this;
        self.semver = new tmp5(13849)(match[2], self.options.loose);
        const tmp11 = new tmp5(13849)(match[2], self.options.loose);
      } else {
        self.semver = semver;
      }
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("Invalid comparator: " + str);
      throw typeError;
    }
  },
};
const items = [
  entry,
  {
    key: "toString",
    value: function toString() {
      return this.value;
    },
  },
  {
    key: "test",
    value: function test(arg0) {
      const self = this;
      let tmp = arg0;
      _mod13852("Comparator.test", arg0, this.options.loose);
      if (this.semver !== semver) {
        if (tmp !== tmp5) {
          if (typeof tmp === "string") {
            try {
              const self2 = this;
              const self3 = this;
              tmp = new _mod13849(tmp, self.options);
            } catch (err) {
              return false;
            }
          }
          return _mod13875(tmp, self.operator, self.semver, self.options);
        }
      }
      return true;
    },
  },
  {
    key: "intersects",
    value: function intersects(value, arg1) {
      if (value instanceof Comparator) {
        let tmp6;
        const self3 = this;
        if ("" === this.operator) {
          let isMatch = "" === self3.value;
          if (!isMatch) {
            const self6 = this;
            const self7 = this;
            const obj2 = new _mod13878(value.value, arg1);
            isMatch = obj2.test(self3.value);
          }
          tmp6 = isMatch;
        } else if ("" === value.operator) {
          let isMatch1 = "" === value.value;
          if (!isMatch1) {
            const self4 = this;
            const self5 = this;
            const obj = new _mod13878(self3.value, arg1);
            isMatch1 = obj.test(value.semver);
          }
          tmp6 = isMatch1;
        } else {
          const tmp39 = _mod13850(arg1);
          const includePrerelease = tmp39.includePrerelease;
          tmp6 = !includePrerelease;
          if (includePrerelease) {
            tmp6 = "<0.0.0-0" !== self3.value && "<0.0.0-0" !== value.value;
          }
          if (tmp6) {
            let tmp7 = !tmp39.includePrerelease;
            if (tmp7) {
              value = self3.value;
              let startsWithResult = value.startsWith("<0.0.0");
              if (!startsWithResult) {
                const value2 = value.value;
                startsWithResult = value2.startsWith("<0.0.0");
              }
              tmp7 = startsWithResult;
            }
            let tmp9 = !tmp7;
            if (tmp9) {
              const operator = self3.operator;
              const startsWithResult1 = operator.startsWith(">");
              let tmp11 = !startsWithResult1;
              if (startsWithResult1) {
                const operator2 = value.operator;
                tmp11 = !operator2.startsWith(">");
              }
              let tmp12 = !tmp11;
              if (tmp11) {
                const operator3 = self3.operator;
                const startsWithResult2 = operator3.startsWith("<");
                let tmp14 = !startsWithResult2;
                if (startsWithResult2) {
                  const operator4 = value.operator;
                  tmp14 = !operator4.startsWith("<");
                }
                let tmp15 = !tmp14;
                if (tmp14) {
                  let tmp16 = self3.semver.version !== value.semver.version;
                  if (!tmp16) {
                    const operator5 = self3.operator;
                    tmp16 = !operator5.includes("=");
                  }
                  if (!tmp16) {
                    const operator6 = value.operator;
                    tmp16 = !operator6.includes("=");
                  }
                  let tmp17 = !tmp16;
                  if (tmp16) {
                    let startsWithResult3 = _mod13875(self3.semver, "<", value.semver, tmp39);
                    if (startsWithResult3) {
                      const operator7 = self3.operator;
                      startsWithResult3 = operator7.startsWith(">");
                    }
                    if (startsWithResult3) {
                      const operator8 = value.operator;
                      startsWithResult3 = operator8.startsWith("<");
                    }
                    let tmp22 = startsWithResult3;
                    if (!tmp22) {
                      let startsWithResult4 = _mod13875(self3.semver, ">", value.semver, tmp39);
                      if (startsWithResult4) {
                        const operator9 = self3.operator;
                        startsWithResult4 = operator9.startsWith("<");
                      }
                      if (startsWithResult4) {
                        const operator10 = value.operator;
                        startsWithResult4 = operator10.startsWith(">");
                      }
                      tmp22 = startsWithResult4;
                    }
                    tmp17 = tmp22;
                  }
                  tmp15 = tmp17;
                }
                tmp12 = tmp15;
              }
              tmp9 = tmp12;
            }
            tmp6 = tmp9;
          }
        }
        return tmp6;
      } else {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("a Comparator is required");
        throw typeError;
      }
    },
  },
];
let obj = {
  key: "ANY",
  get() {
    return semver;
  },
};
const items1 = [obj];

export default _createClass(Comparator, items, items1);
