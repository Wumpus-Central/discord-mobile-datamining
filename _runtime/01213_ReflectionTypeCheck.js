// _runtime/01213_ReflectionTypeCheck.js
import ScalarType from "01211_ScalarType.js";
import _mod1214 from "metro/01214__.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

class ReflectionTypeCheck {
  constructor(self) {
    _classCallCheck(this, ReflectionTypeCheck);
    const fields = self.fields ?? [];
    this.fields = fields;
  }
}
const entry = {
  key: "prepare",
  value: function prepare() {
    const self = this;
    if (!this.data) {
      const items = [];
      const items1 = [];
      const items2 = [];
      const fields = self.fields;
      const iter = fields[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        if (nextResult.oneof) {
          if (!items2.includes(tmp5.oneof)) {
            let arr = items2.push(tmp5.oneof);
            let arr2 = items.push(tmp5.oneof);
            let arr3 = items1.push(tmp5.oneof);
          }
        } else {
          let arr10 = items1.push(tmp5.localName);
          let kind = tmp5.kind;
          if ("scalar" !== kind) {
            if ("enum" !== kind) {
              if ("message" === kind) {
                if (tmp5.repeat) {
                  let arr11 = items.push(tmp5.localName);
                }
              } else if ("map" === kind) {
                let arr12 = items.push(tmp5.localName);
              }
            }
          }
          let opt = tmp5.opt;
          if (opt) {
            opt = !tmp5.repeat;
          }
          if (!opt) {
            let arr13 = items.push(tmp5.localName);
          }
        }
        continue;
      }
      const _Object = Object;
      self.data = { req: items, known: items1, oneofs: Object.values(items2) };
      const obj = { req: items, known: items1, oneofs: Object.values(items2) };
    }
  },
};
let items = [
  entry,
  {
    key: "is",
    value: function is(obj, arg1) {
      let closure_0 = obj;
      let closure_1 = arg1;
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      let keys;
      let data;
      let item10014;
      const self = this;
      if (arg1 < 0) {
        return true;
      } else {
        if (null != obj) {
          if (typeof obj === "object") {
            self.prepare();
            const _Object = Object;
            keys = Object.keys(obj);
            data = self.data;
            if (keys.length >= data.req.length) {
              const req = data.req;
              if (!req.some((item) => !keys.includes(item))) {
                if (!flag) {
                  if (
                    keys.some((item) => {
                      const known = data.known;
                      return !known.includes(item);
                    })
                  ) {
                    return false;
                  }
                }
                if (arg1 < 1) {
                  return true;
                } else {
                  const oneofs = data.oneofs;
                  const tmp = oneofs;
                  for (const item10014 of oneofs) {
                    let tmp18Result = tmp18();
                    if (0 !== tmp18Result) {
                      if (tmp3) {
                        let v = tmp18Result.v;
                        obj2.return();
                        return v;
                      }
                    }
                    continue;
                  }
                  let fields = self.fields;
                  for (const item10026 of fields) {
                    if (undefined === item10026.oneof) {
                      if (!self.field(obj[item10026.localName], item10026, flag, arg1)) {
                        obj.return();
                        let flag3 = false;
                        return false;
                      }
                    }
                    continue;
                  }
                  return true;
                }
              }
            }
            return false;
          }
        }
        return false;
      }
    },
  },
  {
    key: "field",
    value: function field(keys, opt, arg2, arg3) {
      let kind;
      let repeat;
      ({ repeat, kind } = opt);
      const self = this;
      if ("scalar" === kind) {
        let opt2;
        if (undefined === keys) {
          opt2 = opt.opt;
        } else if (repeat) {
          opt2 = self.scalars(keys, opt.T, arg3, opt.L);
        } else {
          opt2 = self.scalar(keys, opt.T, opt.L);
        }
        return opt2;
      } else if ("enum" === kind) {
        if (undefined === keys) {
          opt = opt.opt;
        } else if (repeat) {
          opt = self.scalars(keys, ScalarType.ScalarType.INT32, arg3);
        } else {
          opt = self.scalar(keys, ScalarType.ScalarType.INT32);
        }
        return opt;
      } else if ("message" === kind) {
        let tmp13 = undefined === keys;
        if (!tmp13) {
          let messagesResult;
          if (repeat) {
            messagesResult = self.messages(keys, opt.T(), arg2, arg3);
          } else {
            messagesResult = self.message(keys, opt.T(), arg2, arg3);
          }
          tmp13 = messagesResult;
        }
        return tmp13;
      } else {
        if ("map" === kind) {
          if (typeof keys === "object") {
            if (null !== keys) {
              if (arg3 < 2) {
                return true;
              } else if (self.mapKeys(keys, opt.K, arg3)) {
                const kind2 = opt.V.kind;
                if ("scalar" === kind2) {
                  const _Object3 = Object;
                  return self.scalars(Object.values(keys), opt.V.T, arg3, opt.V.L);
                } else if ("enum" === kind2) {
                  const _Object2 = Object;
                  const scalars = self.scalars;
                  const values = Object.values(keys);
                  return scalars(values, ScalarType.ScalarType.INT32, arg3);
                } else if ("message" === kind2) {
                  const _Object = Object;
                  const messages = self.messages;
                  const V = opt.V;
                  const values2 = Object.values(keys);
                  return messages(values2, V.T(), arg2, arg3);
                }
              } else {
                return false;
              }
            }
          }
          return false;
        }
        return true;
      }
    },
  },
  {
    key: "message",
    value: function message(arg0, isAssignable, arg2, arg3) {
      let isAssignableResult;
      const tmp = arg2;
      if (tmp) {
        isAssignableResult = isAssignable.isAssignable(arg0, arg3);
      } else {
        isAssignableResult = isAssignable.is(arg0, arg3);
      }
      return isAssignableResult;
    },
  },
  {
    key: "messages",
    value: function messages(arg0, isAssignable, arg2, arg3) {
      if (Array.isArray(arg0)) {
        if (arg3 < 2) {
          return true;
        } else {
          if (arg2) {
            if (0 < arg0.length) {
              let num4 = 0;
              if (0 < arg3) {
                while (isAssignable.isAssignable(arg0[num4], arg3 - 1)) {
                  let sum = num4 + 1;
                  if (sum < arg0.length) {
                    num4 = sum;
                  }
                }
                return false;
              }
            }
          } else if (0 < arg0.length) {
            let num2 = 0;
            if (0 < arg3) {
              while (isAssignable.is(arg0[num2], arg3 - 1)) {
                let sum1 = num2 + 1;
                if (sum1 < arg0.length) {
                  num2 = sum1;
                }
              }
              return false;
            }
          }
          return true;
        }
      } else {
        return false;
      }
    },
  },
  {
    key: "scalar",
    value: function scalar(flag, arg1, arg2) {
      if (ScalarType.ScalarType.UINT64 !== arg1) {
        if (ScalarType.ScalarType.FIXED64 !== arg1) {
          if (ScalarType.ScalarType.INT64 !== arg1) {
            if (ScalarType.ScalarType.SFIXED64 !== arg1) {
              if (ScalarType.ScalarType.SINT64 !== arg1) {
                if (ScalarType.ScalarType.BOOL === arg1) {
                  return typeof flag === "boolean";
                } else if (ScalarType.ScalarType.STRING === arg1) {
                  return typeof flag === "string";
                } else if (ScalarType.ScalarType.BYTES === arg1) {
                  const _Uint8Array = Uint8Array;
                  return flag instanceof Uint8Array;
                } else {
                  if (ScalarType.ScalarType.DOUBLE !== arg1) {
                    if (ScalarType.ScalarType.FLOAT !== arg1) {
                      let isIntegerResult = typeof flag === "number";
                      if (typeof flag === "number") {
                        const _Number = Number;
                        isIntegerResult = Number.isInteger(flag);
                      }
                      return isIntegerResult;
                    }
                  }
                  let tmp4 = typeof flag === "number";
                  if (typeof flag === "number") {
                    const _isNaN = isNaN;
                    tmp4 = !isNaN(flag);
                  }
                  return tmp4;
                }
              }
            }
          }
        }
      }
      if (ScalarType.LongType.BIGINT === arg2) {
        return typeof flag === "bigint";
      } else if (ScalarType.LongType.NUMBER === arg2) {
        let tmp6 = typeof flag === "number";
        if (typeof flag === "number") {
          const _isNaN2 = isNaN;
          tmp6 = !isNaN(flag);
        }
        return tmp6;
      } else {
        return typeof flag === "string";
      }
    },
  },
  {
    key: "scalars",
    value: function scalars(keys, INT32, arg2, L) {
      const self = this;
      if (Array.isArray(keys)) {
        if (arg2 < 2) {
          return true;
        } else {
          const _Array = Array;
          if (Array.isArray(keys)) {
            if (0 < keys.length) {
              let num4 = 0;
              if (0 < arg2) {
                while (self.scalar(keys[num4], INT32, L)) {
                  let sum = num4 + 1;
                  if (sum < keys.length) {
                    num4 = sum;
                  }
                }
                return false;
              }
            }
          }
          return true;
        }
      } else {
        return false;
      }
    },
  },
  {
    key: "mapKeys",
    value: function mapKeys(arg0, INT32, arg2) {
      const self = this;
      const keys = Object.keys(arg0);
      if (ScalarType.ScalarType.INT32 !== INT32) {
        if (ScalarType.ScalarType.FIXED32 !== INT32) {
          if (ScalarType.ScalarType.SFIXED32 !== INT32) {
            if (ScalarType.ScalarType.SINT32 !== INT32) {
              if (ScalarType.ScalarType.UINT32 !== INT32) {
                if (ScalarType.ScalarType.BOOL === INT32) {
                  const scalars = self.scalars;
                  const substr = keys.slice(0, arg2);
                  return scalars(
                    substr.map((item) => {
                      let tmp = "true" == item;
                      if (!tmp) {
                        tmp = "false" != item && item;
                      }
                      return tmp;
                    }),
                    INT32,
                    arg2,
                  );
                } else {
                  return self.scalars(keys, INT32, arg2, ScalarType.LongType.STRING);
                }
              }
            }
          }
        }
      }
      const scalars2 = self.scalars;
      const substr1 = keys.slice(0, arg2);
      return scalars2(
        substr1.map((item) => parseInt(item)),
        INT32,
        arg2,
      );
    },
  },
];
const ReflectionTypeCheck_export = _createClass(ReflectionTypeCheck, items);

export { ReflectionTypeCheck_export as ReflectionTypeCheck };
