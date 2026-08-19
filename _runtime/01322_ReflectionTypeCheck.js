// === Module 1322: ReflectionTypeCheck ===

// Module 1322 (ReflectionTypeCheck)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const ReflectionTypeCheck = require;
class ReflectionTypeCheck {
  constructor(arg0) {
    tmp = closure_2(this, ReflectionTypeCheck);
    fields = global.fields;
    if (null === fields) {
      fields = [];
    }
    this.fields = fields;
    return;
  }
}
let items = [
  {
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
              items2.push(tmp5.oneof);
              let arr = items.push(tmp5.oneof);
              let arr1 = items1.push(tmp5.oneof);
            }
          } else {
            let arr2 = items1.push(tmp5.localName);
            let kind = tmp5.kind;
            if ("scalar" !== kind) {
              if ("enum" !== kind) {
                if ("message" === kind) {
                  if (tmp5.repeat) {
                    let arr3 = items.push(tmp5.localName);
                  }
                } else if ("map" === kind) {
                  let arr4 = items.push(tmp5.localName);
                }
              }
            }
            let opt = tmp5.opt;
            if (opt) {
              opt = !tmp5.repeat;
            }
            if (!opt) {
              let arr5 = items.push(tmp5.localName);
            }
          }
          continue;
        }
        const obj = { req: null, known: null, oneofs: null };
        obj[0] = items;
        obj[1] = items1;
        const _Object = Object;
        obj[2] = Object.values(items2);
        self.data = obj;
      }
    }
  },
  {
    key: "is",
    value: function is(obj) {
      closure_0 = obj;
      closure_1 = arg1;
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
              if (!req.some((item, index) => !keys.includes(item))) {
                if (!flag) {
                  if (keys.some((item, index) => {
                    const known = data.known;
                    return !known.includes(item);
                  })) {
                    return false;
                  }
                }
                if (arg1 < 1) {
                  return true;
                } else {
                  const oneofs = data.oneofs;
                  for (const item10014 of oneofs) {
                    let tmp18Result = tmp18();
                    if (0 !== tmp18Result) {
                      if (tmp3) {
                        obj2.return();
                        return tmp18Result.v;
                      }
                    }
                    continue;
                  }
                  let fields = self.fields;
                  for (const item10026 of fields) {
                    if (undefined === item10026.oneof) {
                      if (!self.field(arg0[item10026.localName], item10026, flag, arg1)) {
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
    }
  },
  {
    key: "field",
    value: function field(keys, opt) {
      ({ repeat, kind } = opt);
      const self = this;
      if ("scalar" === kind) {
        if (undefined === keys) {
          let opt2 = opt.opt;
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
          opt = self.scalars(keys, ReflectionTypeCheck(1320).ScalarType.INT32, arg3);
        } else {
          opt = self.scalar(keys, ReflectionTypeCheck(1320).ScalarType.INT32);
        }
        return opt;
      } else if ("message" === kind) {
        if (undefined === keys) {
          return tmp13;
        } else if (repeat) {
          let messagesResult = self.messages(keys, opt.T(), arg2, arg3);
        } else {
          messagesResult = self.message(keys, opt.T(), arg2, arg3);
        }
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
                  let values = Object.values(keys);
                  return self.scalars(values, ReflectionTypeCheck(1320).ScalarType.INT32, arg3);
                } else if ("message" === kind2) {
                  const _Object = Object;
                  const V = opt.V;
                  values = Object.values(keys);
                  return self.messages(values, V.T(), arg2, arg3);
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
    }
  },
  {
    key: "message",
    value: function message(arg0, isAssignable) {
      if (arg2) {
        let isAssignableResult = isAssignable.isAssignable(arg0, arg3);
      } else {
        isAssignableResult = isAssignable.is(arg0, arg3);
      }
      return isAssignableResult;
    }
  },
  {
    key: "messages",
    value: function messages(arg0, isAssignable) {
      if (Array.isArray(arg0)) {
        if (arg3 < 2) {
          return true;
        } else {
          if (arg2) {
            if (0 < length) {
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
          } else if (0 < length) {
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
    }
  },
  {
    key: "scalar",
    value: function scalar(flag) {
      if (ReflectionTypeCheck(1320).ScalarType.UINT64 !== arg1) {
        if (ReflectionTypeCheck(1320).ScalarType.FIXED64 !== arg1) {
          if (ReflectionTypeCheck(1320).ScalarType.INT64 !== arg1) {
            if (ReflectionTypeCheck(1320).ScalarType.SFIXED64 !== arg1) {
              if (ReflectionTypeCheck(1320).ScalarType.SINT64 !== arg1) {
                if (ReflectionTypeCheck(1320).ScalarType.BOOL === arg1) {
                  return typeof flag === "boolean";
                } else if (ReflectionTypeCheck(1320).ScalarType.STRING === arg1) {
                  return typeof flag === "string";
                } else if (ReflectionTypeCheck(1320).ScalarType.BYTES === arg1) {
                  const _Uint8Array = Uint8Array;
                  return flag instanceof Uint8Array;
                } else {
                  if (ReflectionTypeCheck(1320).ScalarType.DOUBLE !== arg1) {
                    if (ReflectionTypeCheck(1320).ScalarType.FLOAT !== arg1) {
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
      if (ReflectionTypeCheck(1320).LongType.BIGINT === arg2) {
        return typeof flag === "bigint";
      } else if (ReflectionTypeCheck(1320).LongType.NUMBER === arg2) {
        let tmp6 = typeof flag === "number";
        if (typeof flag === "number") {
          const _isNaN2 = isNaN;
          tmp6 = !isNaN(flag);
        }
        return tmp6;
      } else {
        return typeof flag === "string";
      }
    }
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
    }
  },
  {
    key: "mapKeys",
    value: function mapKeys(arg0, INT32) {
      const self = this;
      const keys = Object.keys(arg0);
      if (ReflectionTypeCheck(1320).ScalarType.INT32 !== INT32) {
        if (ReflectionTypeCheck(1320).ScalarType.FIXED32 !== INT32) {
          if (ReflectionTypeCheck(1320).ScalarType.SFIXED32 !== INT32) {
            if (ReflectionTypeCheck(1320).ScalarType.SINT32 !== INT32) {
              if (ReflectionTypeCheck(1320).ScalarType.UINT32 !== INT32) {
                if (ReflectionTypeCheck(1320).ScalarType.BOOL === INT32) {
                  const substr = keys.slice(0, arg2);
                  return self.scalars(substr.map((item, index) => {
                    let tmp = "true" == item;
                    if (!tmp) {
                      tmp = "false" != item && item;
                    }
                    return tmp;
                  }), INT32, arg2);
                } else {
                  return self.scalars(keys, INT32, arg2, ReflectionTypeCheck(1320).LongType.STRING);
                }
              }
            }
          }
        }
      }
      const substr1 = keys.slice(0, arg2);
      return self.scalars(substr1.map((item, index) => parseInt(item)), INT32, arg2);
    }
  }
];

export const ReflectionTypeCheck = _createClass(ReflectionTypeCheck, items);