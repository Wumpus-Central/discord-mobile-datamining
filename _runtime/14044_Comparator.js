// === Module 14044: Comparator ===

// Module 14044 (Comparator)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const Comparator = require;
const semver = Symbol("SemVer ANY");
class Comparator {
  constructor(arg0, arg1) {
    self = this;
    tmp = c2(this, Comparator);
    tmp2 = closure_0;
    tmp3 = closure_1;
    tmp4 = closure_0(closure_1[2])(require);
    str = global;
    if (global instanceof Comparator) {
      if (global.loose === tmp4.loose) {
        return global;
      } else {
        str = global.value;
      }
    }
    str2 = str.trim();
    parts = str2.split(/\s+/);
    joined = parts.join(" ");
    tmp6 = tmp2(tmp3[3])("comparator", joined, tmp4);
    self.options = tmp4;
    self.loose = tmp4.loose;
    parsed = self.parse(joined);
    if (self.semver === closure_3) {
      str3 = "";
      self.value = "";
    } else {
      self.value = self.operator + self.semver.version;
    }
    tmp8 = tmp2(tmp3[3])("comp", self);
    return;
  }
}
const entry = {
  key: "parse",
  value: function parse(str) {
    const self = this;
    const safeRe = Comparator(14020).safeRe;
    const t = Comparator(14020).t;
    if (this.options.loose) {
      let tmp3 = safeRe[t.COMPARATORLOOSE];
      let tmp5 = tmp;
    } else {
      tmp3 = safeRe[t.COMPARATOR];
      tmp5 = tmp;
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
        const tmp15 = new tmp5(14016)(match[2], self.options.loose);
        self.semver = tmp15;
      } else {
        self.semver = semver;
      }
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const typeError = new TypeError("Invalid comparator: " + str);
      throw typeError;
    }
  }
};
const items = [
  entry,
  {
    key: "toString",
    value: function toString() {
      return this.value;
    }
  },
  {
    key: "test",
    value: function test(arg0) {
      const self = this;
      let tmp = arg0;
      Comparator(14019)("Comparator.test", arg0, this.options.loose);
      if (this.semver !== closure_3) {
        if (tmp !== tmp5) {
          if (typeof tmp === "string") {
            try {
              tmp = new tmp2(14016)(tmp, self.options);
            } catch (err) {
              return false;
            }
          }
          return tmp2(14042)(tmp, self.operator, self.semver, self.options);
        }
      }
      return true;
    }
  },
  {
    key: "intersects",
    value: function intersects(value, arg1) {
      if (value instanceof Comparator) {
        const self = this;
        if ("" === this.operator) {
          let isMatch = "" === self.value;
          if (!isMatch) {
            const obj2 = new Comparator(14045)(value.value, arg1);
            isMatch = obj2.test(self.value);
          }
          let tmp8 = isMatch;
        } else if ("" === value.operator) {
          let isMatch1 = "" === value.value;
          if (!isMatch1) {
            const obj = new Comparator(14045)(self.value, arg1);
            isMatch1 = obj.test(value.semver);
          }
          tmp8 = isMatch1;
        } else {
          const tmp45 = Comparator(14017)(arg1);
          const includePrerelease2 = tmp45.includePrerelease;
          tmp8 = !includePrerelease2;
          if (includePrerelease2) {
            tmp8 = "<0.0.0-0" !== self.value && "<0.0.0-0" !== value.value;
            const tmp7 = "<0.0.0-0" !== self.value && "<0.0.0-0" !== value.value;
          }
          if (tmp8) {
            const includePrerelease = tmp45.includePrerelease;
            let tmp9 = !includePrerelease;
            if (!includePrerelease) {
              value = self.value;
              let startsWithResult = value.startsWith("<0.0.0");
              if (!startsWithResult) {
                value = value.value;
                startsWithResult = value.startsWith("<0.0.0");
              }
              tmp9 = startsWithResult;
            }
            let tmp11 = !tmp9;
            if (!tmp9) {
              const operator = self.operator;
              const startsWithResult1 = operator.startsWith(">");
              let tmp13 = !startsWithResult1;
              if (startsWithResult1) {
                const operator2 = value.operator;
                tmp13 = !operator2.startsWith(">");
              }
              let tmp14 = !tmp13;
              if (tmp13) {
                const operator3 = self.operator;
                const startsWithResult2 = operator3.startsWith("<");
                let tmp16 = !startsWithResult2;
                if (startsWithResult2) {
                  const operator4 = value.operator;
                  tmp16 = !operator4.startsWith("<");
                }
                let tmp17 = !tmp16;
                if (tmp16) {
                  let tmp18 = self.semver.version !== value.semver.version;
                  if (!tmp18) {
                    const operator5 = self.operator;
                    tmp18 = !operator5.includes("=");
                  }
                  if (!tmp18) {
                    const operator6 = value.operator;
                    tmp18 = !operator6.includes("=");
                  }
                  let tmp19 = !tmp18;
                  if (tmp18) {
                    let startsWithResult3 = Comparator(14042)(self.semver, "<", value.semver, tmp45);
                    if (startsWithResult3) {
                      const operator7 = self.operator;
                      startsWithResult3 = operator7.startsWith(">");
                    }
                    if (startsWithResult3) {
                      const operator8 = value.operator;
                      startsWithResult3 = operator8.startsWith("<");
                    }
                    let tmp24 = startsWithResult3;
                    if (!tmp24) {
                      let startsWithResult4 = Comparator(14042)(self.semver, ">", value.semver, tmp45);
                      if (startsWithResult4) {
                        const operator9 = self.operator;
                        startsWithResult4 = operator9.startsWith("<");
                      }
                      if (startsWithResult4) {
                        const operator10 = value.operator;
                        startsWithResult4 = operator10.startsWith(">");
                      }
                      tmp24 = startsWithResult4;
                    }
                    tmp19 = tmp24;
                  }
                  tmp17 = tmp19;
                }
                tmp14 = tmp17;
              }
              tmp11 = tmp14;
            }
            tmp8 = tmp11;
          }
        }
        return tmp8;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("a Comparator is required");
        throw typeError;
      }
    }
  }
];
const items1 = [
  {
    key: "ANY",
    get() {
      return closure_3;
    }
  }
];

export default _createClass(Comparator, items, items1);