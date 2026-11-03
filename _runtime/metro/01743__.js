// === Module 1743: ? ===

// Module 1743
import _createClassDefault from "_createClass" /* 42 */;
import _slicedToArray from "module_32" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const FormData = arg1;
class FormData {
  constructor() {
    tmp = closure_3(this, FormData);
    this.formEntries = [];
    return;
  }
}
let items = [
  {
    key: Symbol.toStringTag,
    get() {
      return "FormData";
    }
  },
  {
    key: "append",
    value: function append(arg0, obj) {
      if (null !== obj) {
        if (typeof obj === "object") {
          const _TypeError = TypeError;
          const typeError = new TypeError("[Worklets] Failed to execute 'append' on 'FormData': only string values are supported.");
          throw typeError;
        }
      }
      const formEntries = this.formEntries;
      items = [String(arg0), String(obj)];
      formEntries.push(items);
    }
  },
  {
    key: "set",
    value: function set(arg0, arg1) {
      this.delete(arg0);
      this.append(arg0, arg1);
    }
  },
  {
    key: "get",
    value: function get(arg0) {
      closure_0 = arg0;
      const formEntries = this.formEntries;
      const found = formEntries.find((item) => {
        [tmp] = item;
        return tmp === String(closure_0);
      });
      let tmp2 = null;
      if (undefined !== found) {
        tmp2 = found[1];
      }
      return tmp2;
    }
  },
  {
    key: "getAll",
    value: function getAll(arg0) {
      closure_0 = arg0;
      const formEntries = this.formEntries;
      const found = formEntries.filter((item) => {
        [tmp] = item;
        return tmp === String(closure_0);
      });
      return found.map((item) => {
        [, tmp] = item;
        return tmp;
      });
    }
  },
  {
    key: "has",
    value: function has(arg0) {
      closure_0 = arg0;
      const formEntries = this.formEntries;
      return formEntries.some((item) => {
        [tmp] = item;
        return tmp === String(closure_0);
      });
    }
  },
  {
    key: "delete",
    value: function _delete(arg0) {
      closure_0 = arg0;
      const formEntries = this.formEntries;
      this.formEntries = formEntries.filter((item) => {
        [tmp] = item;
        return tmp !== String(closure_0);
      });
    }
  },
  {
    key: "forEach",
    value: function forEach(fn) {
      while (tmp !== undefined) {
        let tmp4 = _slicedToArray(tmp2, 2);
        let tmp5 = fn(tmp4[1], tmp4[0], this);
        continue;
      }
      tmp = this.formEntries[Symbol.iterator]();
    }
  },
  {
    key: "entries",
    value: function entries() {
      const self = this;
      c7 = 0;
      c8 = 0;
      c6 = 0;
      return (function* entries(arg0) {
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_4 = tmp;
                closure_3 = tmp2;
                closure_131_0 = undefined;
                closure_131_1 = undefined;
                closure_131_2 = undefined;
                closure_131_3 = undefined;
                formEntries = self.formEntries;
                closure_1 = formEntries[Symbol.iterator]();
              }
            } else if (1 === tmp5) {
              c6 = 0;
              closure_1.return();
              throw closure_1_5;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_1.return();
              c8 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
            if (closure_1 === undefined) {
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c6 = 1;
              closure_131_0 = tmp12;
              closure_131_1 = formEntries(closure_131_0, 2);
              closure_131_2 = closure_131_1[0];
              closure_131_3 = closure_131_1[1];
              items = [closure_131_2, ];
              items[1] = closure_131_3;
              c7 = 2;
              c8 = 1;
              let obj4 = { value: items, done: false };
              return obj4;
            }
          }
        }
      })();
    }
  },
  {
    key: "keys",
    value: function keys() {
      const self = this;
      c7 = 0;
      c8 = 0;
      c6 = 0;
      return (function* keys(arg0) {
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_4 = tmp;
                closure_3 = tmp2;
                closure_131_0 = undefined;
                closure_131_1 = undefined;
                formEntries = self.formEntries;
                closure_1 = formEntries[Symbol.iterator]();
              }
            } else if (1 === tmp5) {
              c6 = 0;
              closure_1.return();
              throw closure_1_5;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_1.return();
              c8 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
            if (closure_1 === undefined) {
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c6 = 1;
              closure_131_0 = tmp12;
              closure_131_1 = formEntries(closure_131_0, 1)[0];
              c7 = 2;
              c8 = 1;
              let obj4 = { value: closure_131_1, done: false };
              return obj4;
            }
          }
        }
      })();
    }
  },
  {
    key: "values",
    value: function values() {
      const self = this;
      c7 = 0;
      c8 = 0;
      c6 = 0;
      return (function* values(arg0) {
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_4 = tmp;
                closure_3 = tmp2;
                closure_131_0 = undefined;
                closure_131_1 = undefined;
                formEntries = self.formEntries;
                closure_1 = formEntries[Symbol.iterator]();
              }
            } else if (1 === tmp5) {
              c6 = 0;
              closure_1.return();
              throw closure_1_5;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_1.return();
              c8 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
            if (closure_1 === undefined) {
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c6 = 1;
              closure_131_0 = tmp12;
              closure_131_1 = formEntries(closure_131_0, 2)[1];
              c7 = 2;
              c8 = 1;
              let obj4 = { value: closure_131_1, done: false };
              return obj4;
            }
          }
        }
      })();
    }
  },
,
,

];
const entry = {
  key: Symbol.iterator,
  value() {
    return this.entries();
  }
};
items[11] = entry;
items[12] = {
  key: "getParts",
  value: function getParts() {
    const formEntries = this.formEntries;
    return formEntries.map((item) => {
      [str, tmp] = item;
      const obj = { string: tmp, fieldName: str, headers: null };
      const obj2 = { "content-disposition": null };
      const str2 = str.replace(/\r/g, "%0D");
      obj2["content-disposition"] = "form-data; name=\"" + str.replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/"/g, "%22") + "\"";
      obj.headers = obj2;
      return obj;
    });
  }
};
items[13] = {
  key: "__encodeMultipart",
  value: function __encodeMultipart() {
    const formEntries = this.formEntries;
    const mapped = formEntries.map((item) => {
      [str, tmp] = item;
      const str2 = str.replace(/\r/g, "%0D");
      return "content-disposition: form-data; name=\"" + str.replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/"/g, "%22") + "\"\r\n\r\n" + tmp;
    });
    const tmp2 = (function pickBoundary(mapped) {
      let tmp3;
      do {
        let _Math = Math;
        let str = Math.random();
        let str1 = str.toString(36);
        let substr = str1.slice(2);
        let _Math2 = Math;
        let padEndResult = substr.padEnd(11, "0");
        let str2 = Math.random();
        let str3 = str2.toString(36);
        let substr1 = str3.slice(2);
        let _HermesInternal = HermesInternal;
        let combined = "----WorkletsFormDataBoundary" + padEndResult + substr1.padEnd(11, "0");
        tmp3 = undefined;
        if (!mapped.some((arr) => arr.includes(combined))) {
          let obj = { v: combined };
          tmp3 = obj;
        }
      } while (!tmp3);
      return tmp3.v;
    })(mapped);
    let str = "";
    const iter = mapped[Symbol.iterator]();
    while (iter !== undefined) {
      let _HermesInternal = HermesInternal;
      let str2 = "--";
      let str3 = "\r\n";
      let str4 = "\r\n";
      str = `${"--" + tmp2 + "\r\n" + tmp3 + "\r\n"}`;
      continue;
    }
    const sum = str + "--" + tmp2 + "--\r\n";
    let obj = { body: null, contentType: null };
    const nextResult = iter.next();
    const obj2 = FormData(1740);
    obj.body = obj2.toArrayBuffer(FormData(1741).utf8Encode(sum));
    obj.contentType = "multipart/form-data; boundary=" + tmp2;
    return obj;
  }
};

export const FormData = _createClassDefault(FormData, items);