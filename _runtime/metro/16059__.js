// === Module 16059: ? ===

// Module 16059
import DIRTY from "DIRTY" /* 16057 */;
import c2_mod from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let self = this;
let ZodReadonly = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function processCreateParams(required_error) {
  closure_0 = required_error;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj = { errorMap: null, description: null };
    if (errorMap) {
      obj.errorMap = errorMap;
      obj.description = description;
      return obj;
    } else {
      obj.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj.description = description;
      return obj;
    }
  } else {
    return {};
  }
}
function timeRegexSource(iter) {
  const precision = iter.precision;
  if (iter.precision) {
    const _HermesInternal2 = HermesInternal;
    let str2 = "" + "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" + "\\.\\d{" + precision + "}";
  } else {
    str2 = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    if (null == precision) {
      const _HermesInternal = HermesInternal;
      str2 = "" + "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" + "(\\.\\d+)?";
    }
  }
  return str2;
}
function datetimeRegex(iter) {
  const precision = iter.precision;
  if (iter.precision) {
    const _HermesInternal2 = HermesInternal;
    let str2 = "" + "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" + "\\.\\d{" + precision + "}";
  } else {
    str2 = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    if (null == precision) {
      const _HermesInternal = HermesInternal;
      str2 = "" + "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" + "(\\.\\d+)?";
    }
  }
  const combined = "" + c31 + "T" + str2;
  items = [];
  let str9 = "Z";
  if (iter.local) {
    str9 = "Z?";
  }
  items.push(str9);
  if (iter.offset) {
    items.push("([+-]\\d{2}:?\\d{2})");
  }
  regExp = new RegExp("^" + "" + combined + "(" + items.join("|") + ")" + "$");
  return regExp;
}
function isValidJWT(arg0, arg1) {
  if (re22.test(arg0)) {
    try {
      const str2 = _slicedToArray(arg0.split("."), 1)[0];
      const replaced = str2.replace(/-/g, "+").replace(/_/g, "/");
      const _JSON = JSON;
      const _atob = atob;
      const parsed = JSON.parse(atob(replaced.padEnd(str2.length + (4 - str2.length % 4) % 4, "=")));
      let tmp5 = typeof parsed === "object";
      if (typeof parsed === "object") {
        tmp5 = null !== tmp4;
      }
      if (tmp5) {
        const typ = tmp4.typ;
        let tmp7 = !typ;
        if (typ) {
          tmp7 = !tmp4.alg;
        }
        let tmp9 = !tmp7;
        if (!tmp7) {
          let tmp11 = !arg1;
          if (arg1) {
            tmp11 = parsed.alg === arg1;
          }
          tmp9 = tmp11;
        }
        tmp5 = tmp9;
      }
      return tmp5;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}
function isValidCidr(data, version) {
  let tmp = "v4" !== version && version;
  if (!tmp) {
    tmp = !re26.test(data);
  }
  let tmp3 = !tmp;
  if (tmp) {
    let tmp4 = "v6" !== version && version;
    if (!tmp4) {
      tmp4 = !re28.test(data);
    }
    tmp3 = !tmp4;
  }
  return tmp3;
}
function deepPartialify(element) {
  if (element instanceof _module2Result14) {
    for (const key10045 in arg0.shape) {
      obj4[key10045] = _module2Result29.create(deepPartialify(arg0.shape[key10045]));
      continue;
    }
    const obj5 = {};
    const merged = Object.assign(element._def);
    obj5.shape = function shape() {
      return obj4;
    };
    const tmp17 = new _module2Result14(obj5);
    return tmp17;
  } else {
    if (element instanceof _module2Result13) {
      obj6 = {};
      const merged1 = Object.assign(element._def);
      obj6.type = deepPartialify(element.element);
      let tmp2 = new tmp(obj6);
    } else if (element instanceof _module2Result29) {
      tmp2 = _module2Result29.create(deepPartialify(element.unwrap()));
    } else if (element instanceof _module2Result30) {
      tmp2 = _module2Result30.create(deepPartialify(element.unwrap()));
    } else {
      tmp2 = element;
      if (element instanceof _module2Result18) {
        items = element.items;
        tmp2 = _module2Result18.create(items.map((item) => deepPartialify(item)));
      }
    }
    return tmp2;
  }
}
function mergeValues(data, arg1) {
  const parsedType = ZodReadonly(16056).getParsedType(data);
  const parsedType1 = ZodReadonly(16056).getParsedType(arg1);
  if (data === arg1) {
    const obj2 = { valid: true, data };
    return obj2;
  } else {
    if (parsedType === ZodReadonly(16056).ZodParsedType.object) {
      if (parsedType1 === ZodReadonly(16056).ZodParsedType.object) {
        const util = ZodReadonly(16056).util;
        closure_0 = util.objectKeys(arg1);
        const util2 = ZodReadonly(16056).util;
        const found = util2.objectKeys(data).filter((item) => -1 !== closure_0.indexOf(item));
        const obj3 = {};
        const merged = Object.assign(data);
        const merged1 = Object.assign(arg1);
        const iter = found[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp20 = nextResult;
          let tmp22 = mergeValues(data[nextResult], arg1[nextResult]);
          if (tmp22.valid) {
            obj3[tmp20] = tmp23.data;
            continue;
          } else {
            let obj4 = { valid: false };
            iter.return();
            return obj4;
          }
        }
        const obj5 = { valid: true, data: obj3 };
        return obj5;
      }
    }
    if (parsedType === ZodReadonly(16056).ZodParsedType.array) {
      if (parsedType1 === ZodReadonly(16056).ZodParsedType.array) {
        if (data.length !== arg1.length) {
          return { valid: false };
        } else {
          items = [];
          let num3 = 0;
          if (0 < data.length) {
            const tmp6 = mergeValues(data[num3], arg1[num3]);
            while (tmp6.valid) {
              let arr = items.push(tmp6.data);
              num3 = num3 + 1;
            }
            return { valid: false };
          }
          obj6 = { valid: true, data: items };
          return obj6;
        }
      }
    }
    if (parsedType === ZodReadonly(16056).ZodParsedType.date) {
      if (parsedType1 === ZodReadonly(16056).ZodParsedType.date) {
        if (+data === +arg1) {
          const obj7 = { valid: true, data };
          let obj = obj7;
        }
        return obj;
      }
    }
    obj = { valid: false };
  }
}
let c2 = c2_mod;
let fn = this;
if (this) {
  fn = self.__classPrivateFieldGet;
}
if (!fn) {
  fn = (arg0, has, arg2, value) => {
    if ("a" === arg2) {
      if (!value) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Private accessor was defined without a getter");
        throw typeError;
      }
    }
    if (typeof has === "function") {
      let tmp8 = arg0 !== has || !value;
      const tmp7 = arg0 !== has || !value;
    } else {
      tmp8 = !has.has(arg0);
    }
    if (tmp8) {
      const _TypeError2 = TypeError;
      const typeError1 = new TypeError("Cannot read private member from an object whose class did not declare it");
      throw typeError1;
    } else if ("m" === arg2) {
      return value;
    } else {
      if (!tmp) {
        if (value) {
          value = value.value;
        } else {
          value = has.get(arg0);
        }
      }
      const call = value.call;
      typeof call === "unknown" ? value() : call(arg0);
    }
  };
}
let fn2 = self;
if (self) {
  fn2 = self.__classPrivateFieldSet;
}
if (!fn2) {
  fn2 = (arg0, has, value, arg3, call) => {
    if ("m" === arg3) {
      const _TypeError3 = TypeError;
      const typeError = new TypeError("Private method is not writable");
      throw typeError;
    } else {
      if ("a" === arg3) {
        if (!call) {
          const _TypeError = TypeError;
          const typeError1 = new TypeError("Private accessor was defined without a setter");
          throw typeError1;
        }
      }
      if (typeof has === "function") {
        let tmp9 = arg0 !== has || !call;
        const tmp8 = arg0 !== has || !call;
      } else {
        tmp9 = !has.has(arg0);
      }
      if (tmp9) {
        const _TypeError2 = TypeError;
        const typeError2 = new TypeError("Cannot write private member to an object whose class did not declare it");
        throw typeError2;
      } else {
        if (tmp24) {
          call = call.call;
          if (typeof call === "unknown") {
            call(value);
          } else {
            call(arg0, value);
          }
        } else if (call) {
          call.value = value;
        } else {
          const result = has.set(arg0, value);
        }
        return value;
      }
    }
  };
}
function createZodEnum(values, required_error) {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result25({ values, typeName: obj6.ZodEnum });
}
function custom(arg0) {
  closure_0 = arg0;
  if (arg1 === undefined) {
    const obj = {};
  }
  closure_2 = arg2;
  const obj2 = _module2Result9.create();
  if (arg0) {
    let superRefineResult = obj2.superRefine((arg0, addIssue) => {
      closure_0 = arg0;
      const promise = closure_0(arg0);
      if (promise instanceof Promise) {
        return promise.then((result) => {
          if (!result) {
            if (typeof obj === "function") {
              let tmpResult = tmp(tmp2);
            } else {
              tmpResult = tmp;
              if (typeof tmp === "string") {
                const obj2 = { message: tmp };
                tmpResult = obj2;
              }
            }
            let tmp4 = tmpResult;
            if (typeof tmpResult === "string") {
              const obj3 = { message: tmpResult };
              tmp4 = obj3;
            }
            let fatal = tmp4.fatal;
            if (null === fatal) {
              fatal = c2;
            }
            let tmp6 = null === fatal;
            if (!tmp6) {
              tmp6 = undefined === fatal;
            }
            if (!tmp6) {
              tmp6 = fatal;
            }
            obj = { code: "custom" };
            const merged = Object.assign(tmp4);
            obj.fatal = tmp6;
            addIssue.addIssue(obj);
          }
        });
      } else if (!promise) {
        if (typeof addIssue === "function") {
          let tmpResult = tmp(arg0);
        } else {
          tmpResult = tmp;
          if (typeof tmp === "string") {
            let obj2 = { message: tmp };
            tmpResult = obj2;
          }
        }
        let tmp3 = tmpResult;
        if (typeof tmpResult === "string") {
          let obj3 = { message: tmpResult };
          tmp3 = obj3;
        }
        let fatal = tmp3.fatal;
        if (null === fatal) {
          fatal = c2;
        }
        obj = { code: "custom" };
        let merged = Object.assign(tmp3);
        obj.fatal = null === fatal || undefined === fatal || fatal;
        addIssue.addIssue(obj);
        const tmp5 = null === fatal || undefined === fatal || fatal;
      }
    });
  } else {
    superRefineResult = obj2;
  }
  return superRefineResult;
}
class ParseInputLazyPath {
  constructor(arg0, arg1, arg2, arg3) {
    tmp = closure_6(this, ZodReadonly);
    this._cachedPath = [];
    this.parent = global;
    this.data = require;
    this._path = importDefault;
    this._key = importAll;
    return;
  }
}
let items = [
  {
    key: "path",
    get() {
      const self = this;
      if (!this._cachedPath.length) {
        const _Array = Array;
        const _cachedPath = self._cachedPath;
        const push = _cachedPath.push;
        const _path = self._path;
        if (self._key instanceof Array) {
          items = [];
          HermesBuiltin.arraySpread(self._key, HermesBuiltin.arraySpread(_path, 0));
          HermesBuiltin.apply(items, _cachedPath);
        } else {
          const items1 = [];
          items1[HermesBuiltin.arraySpread(_path, 0)] = self._key;
          HermesBuiltin.apply(items1, _cachedPath);
        }
      }
      return self._cachedPath;
    }
  }
];
let closure_12 = _createClass(ParseInputLazyPath, items);
function handleResult(common, value) {
  ZodReadonly = common;
  if (ZodReadonly(16057).isValid(value)) {
    const obj2 = { success: true, data: value.value };
    return obj2;
  } else if (common.common.issues.length) {
    const obj = { success: false };
    Object.defineProperty(obj, "error", {
      get: function() {
          const self = this;
          if (this._error) {
            return self._error;
          } else {
            const zodError = new ZodReadonly(closure_1[8]).ZodError(obj2.common.issues);
            self._error = zodError;
            return self._error;
          }
        },
      set: undefined
    });
    return obj;
  } else {
    const _Error = Error;
    const error = new Error("Validation failed but no issues detected.");
    throw error;
  }
}
ZodReadonly = undefined;
let dependencyMap;
class ZodType {
  constructor(arg0) {
    self = this;
    tmp = closure_6(this, ZodType);
    this.spa = this.safeParseAsync;
    this._def = global;
    parse = this.parse;
    this.parse = parse.bind(this);
    safeParse = this.safeParse;
    this.safeParse = safeParse.bind(this);
    parseAsync = this.parseAsync;
    this.parseAsync = parseAsync.bind(this);
    safeParseAsync = this.safeParseAsync;
    this.safeParseAsync = safeParseAsync.bind(this);
    spa = this.spa;
    this.spa = spa.bind(this);
    refine = this.refine;
    this.refine = refine.bind(this);
    refinement = this.refinement;
    this.refinement = refinement.bind(this);
    superRefine = this.superRefine;
    this.superRefine = superRefine.bind(this);
    optional = this.optional;
    this.optional = optional.bind(this);
    nullable = this.nullable;
    this.nullable = nullable.bind(this);
    nullish = this.nullish;
    this.nullish = nullish.bind(this);
    array = this.array;
    this.array = array.bind(this);
    promise = this.promise;
    this.promise = promise.bind(this);
    or = this.or;
    this.or = or.bind(this);
    and = this.and;
    this.and = and.bind(this);
    transform = this.transform;
    this.transform = transform.bind(this);
    brand = this.brand;
    this.brand = brand.bind(this);
    _default = this.default;
    this.default = _default.bind(this);
    _catch = this.catch;
    this.catch = _catch.bind(this);
    describe = this.describe;
    this.describe = describe.bind(this);
    pipe = this.pipe;
    this.pipe = pipe.bind(this);
    readonly = this.readonly;
    this.readonly = readonly.bind(this);
    isNullable = this.isNullable;
    this.isNullable = isNullable.bind(this);
    isOptional = this.isOptional;
    this.isOptional = isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate(arg0) {
            return self["~validate"](arg0);
          }
    };
    return;
  }
}
c2 = ZodType;
let items1 = [
  {
    key: "description",
    get() {
      return this._def.description;
    }
  },
  {
    key: "_getType",
    value: function _getType(data) {
      return ZodReadonly(16056).getParsedType(data.data);
    }
  },
  {
    key: "_getOrReturnCtx",
    value: function _getOrReturnCtx(parent, _getOrReturnCtxResult3) {
      let tmp = _getOrReturnCtxResult3;
      if (!_getOrReturnCtxResult3) {
        const self = this;
        const obj = { common: parent.parent.common, data: parent.data, parsedType: ZodReadonly(16056).getParsedType(parent.data), schemaErrorMap: this._def.errorMap, path: null, parent: null };
        ({ path: obj.path, parent: obj.parent } = parent);
        tmp = obj;
      }
      return tmp;
    }
  },
  {
    key: "_processInputParams",
    value: function _processInputParams(common) {
      const obj = { status: null, ctx: null };
      const parseStatus = new ZodReadonly(16057).ParseStatus();
      obj.status = parseStatus;
      obj.ctx = { common: common.parent.common, data: common.data, parsedType: ZodReadonly(16056).getParsedType(common.data), schemaErrorMap: this._def.errorMap, path: common.path, parent: common.parent };
      return obj;
    }
  },
  {
    key: "_parseSync",
    value: function _parseSync(arg0) {
      const _parseResult = this._parse(arg0);
      if (ZodReadonly(16057).isAsync(_parseResult)) {
        const _Error = Error;
        const error = new Error("Synchronous parse encountered promise.");
        throw error;
      } else {
        return _parseResult;
      }
    }
  },
  {
    key: "_parseAsync",
    value: function _parseAsync($ZodRealError) {
      return Promise.resolve(this._parse($ZodRealError));
    }
  },
  {
    key: "parse",
    value: function parse(arg0, arg1) {
      const safeParseResult = this.safeParse(arg0, arg1);
      if (safeParseResult.success) {
        return safeParseResult.data;
      } else {
        throw safeParseResult.error;
      }
    }
  },
  {
    key: "safeParse",
    value: function safeParse(data, arg1) {
      const obj = { issues: [], async: null, contextualErrorMap: null };
      let async;
      if (null != arg1) {
        async = arg1.async;
      }
      obj.async = null !== async && undefined !== async && async;
      let errorMap;
      if (null != arg1) {
        errorMap = arg1.errorMap;
      }
      const obj2 = { common: obj, path: null, schemaErrorMap: null, parent: null, data: null, parsedType: null };
      obj.contextualErrorMap = errorMap;
      let path;
      if (null != arg1) {
        path = arg1.path;
      }
      if (!path) {
        path = [];
      }
      obj2.path = path;
      obj2.schemaErrorMap = this._def.errorMap;
      obj2.data = data;
      obj2.parsedType = obj2(16056).getParsedType(data);
      const iter = this._parseSync({ data, path: obj2.path, parent: obj2 });
      if (typeof handleResult === "function") {
        if (tmp3(16057).isValid(iter)) {
          const obj4 = { success: true, data: iter.value };
          let obj5 = obj4;
        } else if (obj2.common.issues.length) {
          obj5 = { success: false };
          Object.defineProperty(obj5, "error", {
            get: function() {
                  const self = this;
                  if (this._error) {
                    return self._error;
                  } else {
                    const zodError = new ZodReadonly(closure_1[8]).ZodError(obj2.common.issues);
                    self._error = zodError;
                    return self._error;
                  }
                },
            set: undefined
          });
        } else {
          const _Error = Error;
          const error = new Error("Validation failed but no issues detected.");
          throw error;
        }
        return obj5;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const obj3 = { data, path: obj2.path, parent: obj2 };
      tmp3 = obj2;
    }
  },
  {
    key: "~validate",
    value: function validate(data) {
      const self = this;
      parent = { common: { issues: [], async: this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data, parsedType: parent(16056).getParsedType(data) };
      if (this["~standard"].async) {
        let obj2 = { data, path: [], parent };
        return self._parseAsync(obj2).then((value) => {
          if (ZodReadonly(closure_1[7]).isValid(value)) {
            const obj2 = { value: value.value };
            let obj = obj2;
          } else {
            obj = { issues: null };
            obj.issues = obj.common.issues;
          }
          return obj;
        });
      } else {
        try {
          const obj3 = { data, path: [], parent };
          const iter = self._parseSync(obj3);
          if (tmp4(16057).isValid(iter)) {
            const obj4 = { value: iter.value };
            let obj5 = obj4;
          } else {
            obj5 = { issues: parent.common.issues };
          }
          return obj5;
        } catch (tmp7) {
          let message;
          if (null != tmp7) {
            message = tmp7.message;
          }
          let formatted;
          if (null !== message) {
            if (tmp !== message) {
              formatted = message.toLowerCase();
            }
          }
          let hasItem;
          if (null !== formatted) {
            if (undefined !== formatted) {
              hasItem = formatted.includes("encountered");
            }
          }
          if (hasItem) {
            tmp2["~standard"].async = true;
          }
          obj6 = { issues: [], async: true };
          tmp3.common = obj6;
        }
      }
      tmp4 = parent;
    }
  },
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,
,

];
let entry = { key: "parseAsync", value: null };
dependencyMap = asyncGeneratorStep(async function(arg0, arg1) {
  const self = this;
  closure_1 = arg0;
  closure_2 = arg1;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
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
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp2;
            closure_131_0 = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: self.safeParseAsync(closure_1, closure_2), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_131_0 = value;
          if (closure_131_0.success) {
            c5 = 3;
            const obj = { value: tmp9.data, done: true };
            return obj;
          } else {
            throw tmp9.error;
          }
        }
      } catch (tmp13) {
        c5 = tmp;
        throw tmp13;
      }
    }
  })();
});
entry.value = function parseAsync(input, parseAsync) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items1[9] = entry;
let entry1 = { key: "safeParseAsync", value: null };
ZodReadonly = asyncGeneratorStep(async function(arg0, arg1) {
  const self = this;
  dependencyMap = arg0;
  closure_2 = arg1;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    closure_4 = tmp2;
    closure_3 = tmp3;
    const obj4 = { issues: [], contextualErrorMap: null, async: true };
    if (null != closure_2) {
      const errorMap = closure_2.errorMap;
    }
    const obj5 = { common: obj4, path: null, schemaErrorMap: null, parent: null, data: null, parsedType: null };
    obj4.contextualErrorMap = errorMap;
    if (null != closure_2) {
      let path = closure_2.path;
    }
    if (!path) {
      path = [];
    }
    obj5.path = path;
    obj5.schemaErrorMap = self._def.errorMap;
    obj5.data = dependencyMap;
    obj5.parsedType = self(16056).getParsedType(dependencyMap);
    closure_131_0 = obj5;
    const _parseResult = self._parse({ data: dependencyMap, path: obj5.path, parent: obj5 });
    let resolved = _parseResult;
    if (!self(16057).isAsync(_parseResult)) {
      resolved = Promise.resolve(_parseResult);
    }
    await resolved;
    closure_131_1 = value;
    return handleResult(closure_131_0, closure_131_1);
  })();
});
entry1.value = function safeParseAsync(arg0, arg1) {
  const self = this;
  const apply = ZodReadonly.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items1[10] = entry1;
items1[11] = {
  key: "refine",
  value: function refine(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return this._refinement((arg0, addIssue) => {
      closure_0 = arg0;
      const promise = closure_0(arg0);
      function setError() {

      }
      if (typeof Promise !== "undefined") {
        if (promise instanceof Promise) {
          let nextPromise = promise.then((result) => {
            if (result) {
              return tmp;
            } else if (typeof setError === "function") {
              let addIssueResult = { code: ZodReadonly(addIssue[8]).ZodIssueCode.custom };
              if (typeof addIssue !== "string") {
                if (undefined !== addIssue) {
                  let tmp7Result = addIssue;
                  if (typeof addIssue === "function") {
                    tmp7Result = addIssue(tmp6);
                  }
                }
                const merged = Object.assign(tmp7Result);
                addIssueResult = addIssue.addIssue(addIssueResult);
              }
              const obj = { message: addIssue };
              tmp7Result = obj;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        }
        return nextPromise;
      }
      nextPromise = promise;
      if (!nextPromise) {
        let addIssueResult = { code: closure_0(addIssue[8]).ZodIssueCode.custom };
        if (typeof addIssue !== "string") {
          if (undefined !== tmp4) {
            let tmp4Result = tmp4;
            if (typeof tmp4 === "function") {
              tmp4Result = tmp4(arg0);
            }
          }
          let merged = Object.assign(tmp4Result);
          addIssueResult = addIssue.addIssue(addIssueResult);
        }
        let obj = { message: addIssue };
        tmp4Result = obj;
      }
    });
  }
};
items1[12] = {
  key: "refinement",
  value: function refinement(resolveResult, arg1) {
    closure_0 = resolveResult;
    closure_1 = arg1;
    return this._refinement((arg0, addIssue) => {
      let flag = closure_0(arg0);
      if (!flag) {
        let tmp2 = closure_1;
        if (typeof closure_1 === "function") {
          tmp2 = closure_1(arg0, addIssue);
        }
        addIssue.addIssue(tmp2);
        flag = false;
      }
      return flag;
    });
  }
};
items1[13] = {
  key: "_refinement",
  value: function _refinement(refinement) {
    const obj = { schema: this, typeName: obj6.ZodEffects, effect: { type: "refinement", refinement } };
    return new _module2Result28(obj);
  }
};
items1[14] = {
  key: "superRefine",
  value: function superRefine(refinement) {
    return this._refinement(refinement);
  }
};
items1[15] = {
  key: "optional",
  value: function optional() {
    return _module2Result29.create(this, this._def);
  }
};
items1[16] = {
  key: "nullable",
  value: function nullable() {
    return _module2Result30.create(this, this._def);
  }
};
items1[17] = {
  key: "nullish",
  value: function nullish() {
    return this.nullable().optional();
  }
};
items1[18] = {
  key: "array",
  value: function array() {
    return _module2Result13.create(this);
  }
};
items1[19] = {
  key: "promise",
  value: function promise() {
    return _module2Result27.create(this, this._def);
  }
};
items1[20] = {
  key: "or",
  value: function or(arg0) {
    items = [this, arg0];
    return _module2Result15.create(items, this._def);
  }
};
items1[21] = {
  key: "and",
  value: function and(arg0) {
    return _module2Result17.create(this, arg0, this._def);
  }
};
items1[22] = {
  key: "transform",
  value: function transform(transform) {
    const _def = this._def;
    invalid_type_error = undefined;
    let required_error;
    if (_def) {
      ({ errorMap, invalid_type_error } = _def);
      required_error = _def.required_error;
      const description = _def.description;
      if (errorMap) {
        const _Error = Error;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        let obj = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            const obj2 = { message: defaultError };
            let obj = obj2;
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            const obj3 = { message: defaultError3 };
            obj = obj3;
          } else if ("invalid_type" !== code.code) {
            const obj4 = { message: defaultError.defaultError };
            obj = obj4;
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj = obj2;
      }
    } else {
      obj = {};
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3.schema = this;
    obj3.typeName = obj6.ZodEffects;
    obj3.effect = { type: "transform", transform };
    return new _module2Result28(obj3);
  }
};
items1[23] = {
  key: "default",
  value: function _default(fn) {
    let defaultValue = fn;
    let _def = fn;
    if (typeof fn !== "function") {
      defaultValue = () => _def;
    }
    _def = this._def;
    invalid_type_error = undefined;
    let required_error;
    if (_def) {
      ({ errorMap, invalid_type_error } = _def);
      required_error = _def.required_error;
      const description = _def.description;
      if (errorMap) {
        const _Error = Error;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        let obj = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            const obj2 = { message: defaultError };
            let obj = obj2;
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            const obj3 = { message: defaultError3 };
            obj = obj3;
          } else if ("invalid_type" !== code.code) {
            const obj4 = { message: defaultError.defaultError };
            obj = obj4;
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj = obj2;
      }
    } else {
      obj = {};
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3.innerType = this;
    obj3.defaultValue = defaultValue;
    obj3.typeName = obj6.ZodDefault;
    return new _module2Result31(obj3);
  }
};
items1[24] = {
  key: "brand",
  value: function brand() {
    const _def = this._def;
    invalid_type_error = undefined;
    let required_error;
    if (_def) {
      ({ errorMap, invalid_type_error } = _def);
      required_error = _def.required_error;
      const description = _def.description;
      if (errorMap) {
        const _Error = Error;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        let obj3 = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            const obj2 = { message: defaultError };
            let obj = obj2;
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            const obj3 = { message: defaultError3 };
            obj = obj3;
          } else if ("invalid_type" !== code.code) {
            const obj4 = { message: defaultError.defaultError };
            obj = obj4;
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj3 = obj2;
      }
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    return new _module2Result34({ typeName: obj6.ZodBranded, type: this });
  }
};
items1[25] = {
  key: "catch",
  value: function _catch(fn) {
    let catchValue = fn;
    let _def = fn;
    if (typeof fn !== "function") {
      catchValue = () => _def;
    }
    _def = this._def;
    invalid_type_error = undefined;
    let required_error;
    if (_def) {
      ({ errorMap, invalid_type_error } = _def);
      required_error = _def.required_error;
      const description = _def.description;
      if (errorMap) {
        const _Error = Error;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        let obj = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            const obj2 = { message: defaultError };
            let obj = obj2;
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            const obj3 = { message: defaultError3 };
            obj = obj3;
          } else if ("invalid_type" !== code.code) {
            const obj4 = { message: defaultError.defaultError };
            obj = obj4;
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj = obj2;
      }
    } else {
      obj = {};
    }
    const obj3 = {};
    const merged = Object.assign(obj);
    obj3.innerType = this;
    obj3.catchValue = catchValue;
    obj3.typeName = obj6.ZodCatch;
    return new _module2Result32(obj3);
  }
};
items1[26] = {
  key: "describe",
  value: function describe(description) {
    const obj = {};
    const merged = Object.assign(this._def);
    obj.description = description;
    const constructor = new this.constructor(obj);
    return constructor;
  }
};
items1[27] = {
  key: "pipe",
  value: function pipe(arg0) {
    return _module2Result35.create(this, arg0);
  }
};
items1[28] = {
  key: "readonly",
  value: function readonly() {
    return _module2Result36.create(this);
  }
};
items1[29] = {
  key: "isOptional",
  value: function isOptional() {
    return this.safeParse(undefined).success;
  }
};
items1[30] = {
  key: "isNullable",
  value: function isNullable() {
    return this.safeParse(null).success;
  }
};
const _module2Result = _createClass(ZodType, items1);
const re17 = /^c[^\s-]{8,}$/i;
const re18 = /^[0-9a-z]+$/;
const re19 = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
const re20 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const re21 = /^[a-z0-9_-]{21}$/i;
const re22 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const re23 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const re24 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const re25 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const re26 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
const re27 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const re28 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const re29 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const re30 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
let c31 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
let regExp = new RegExp("^" + "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))" + "$");
class ZodString {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodString;
_inherits(ZodString, _module2Result);
let entry2 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (this._def.coerce) {
      const _String = String;
      data.data = String(data.data);
    }
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.string) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj3 = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.string, received: _getOrReturnCtxResult.parsedType };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj3);
      return ZodReadonly(16057).INVALID;
    } else {
      const iter2 = new ZodReadonly(16057).ParseStatus();
      const checks = self._def.checks;
      const iter3 = checks[Symbol.iterator]();
      const nextResult = iter3.next();
      if (iter3 === undefined) {
        const obj4 = { status: iter2.value, value: data.data };
        return obj4;
      } else {
        const iter = nextResult;
        if ("min" === nextResult.kind) {
          if (data.data.length < iter.value) {
            const _getOrReturnCtxResult1 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult1;
            const obj5 = { code: ZodReadonly(16055).ZodIssueCode.too_small, minimum: null, type: "string", inclusive: true, exact: false, message: null };
            ({ value: obj32.minimum, message: obj32.message } = iter);
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult1, obj5);
            iter2.dirty();
          }
        } else if ("max" === iter.kind) {
          if (data.data.length > iter.value) {
            const _getOrReturnCtxResult2 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult2;
            obj6 = { code: ZodReadonly(16055).ZodIssueCode.too_big, maximum: null, type: "string", inclusive: true, exact: false, message: null };
            ({ value: obj35.maximum, message: obj35.message } = iter);
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult2, obj6);
            iter2.dirty();
          }
        } else if ("length" === iter.kind) {
          let tmp251 = data.data.length > iter.value;
          if (!tmp251) {
            tmp251 = tmp253;
          }
          if (tmp251) {
            _getOrReturnCtxResult3 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            if (tmp252) {
              const obj7 = { code: ZodReadonly(16055).ZodIssueCode.too_big, maximum: null, type: "string", inclusive: true, exact: true, message: null };
              ({ value: obj31.maximum, message: obj31.message } = iter);
              ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult3, obj7);
            } else if (tmp253) {
              const obj8 = { code: ZodReadonly(16055).ZodIssueCode.too_small, minimum: null, type: "string", inclusive: true, exact: true, message: null };
              ({ value: obj30.minimum, message: obj30.message } = iter);
              ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult3, obj8);
            }
            iter2.dirty();
          }
        } else if ("email" === iter.kind) {
          if (!re24.test(data.data)) {
            const _getOrReturnCtxResult4 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult4;
            const obj9 = { validation: "email", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult4, obj9);
            iter2.dirty();
          }
        } else if ("emoji" === iter.kind) {
          let obj27 = regExp;
          if (!regExp) {
            const _RegExp2 = RegExp;
            regExp = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
            obj27 = regExp;
          }
          if (!obj27.test(data.data)) {
            const _getOrReturnCtxResult5 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult5;
            const obj10 = { validation: "emoji", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult5, obj10);
            iter2.dirty();
          }
        } else if ("uuid" === iter.kind) {
          if (!re20.test(data.data)) {
            const _getOrReturnCtxResult6 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult6;
            const obj11 = { validation: "uuid", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult6, obj11);
            iter2.dirty();
          }
        } else if ("nanoid" === iter.kind) {
          if (!re21.test(data.data)) {
            const _getOrReturnCtxResult7 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult7;
            const obj13 = { validation: "nanoid", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult7, obj13);
            iter2.dirty();
          }
        } else if ("cuid" === iter.kind) {
          if (!re17.test(data.data)) {
            const _getOrReturnCtxResult8 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult8;
            const obj14 = { validation: "cuid", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult8, obj14);
            iter2.dirty();
          }
        } else if ("cuid2" === iter.kind) {
          if (!re18.test(data.data)) {
            const _getOrReturnCtxResult9 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult9;
            const obj15 = { validation: "cuid2", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult9, obj15);
            iter2.dirty();
          }
        } else if ("ulid" === iter.kind) {
          if (!re19.test(data.data)) {
            const _getOrReturnCtxResult10 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult10;
            const obj16 = { validation: "ulid", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult10, obj16);
            iter2.dirty();
          }
        } else if ("url" === iter.kind) {
          try {
            const _URL = URL;
            const uRL = new URL(data.data);
          } catch (err) {
            const _getOrReturnCtxResult11 = obj._getOrReturnCtx(tmp2, tmp4);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult11;
            const obj17 = { validation: "url", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: tmp3.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult11, obj17);
            obj2.dirty();
          }
        } else if ("regex" === iter.kind) {
          iter.regex.lastIndex = 0;
          regex = iter.regex;
          if (!regex.test(data.data)) {
            const _getOrReturnCtxResult12 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult12;
            const obj18 = { validation: "regex", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult12, obj18);
            iter2.dirty();
          }
        } else if ("trim" === iter.kind) {
          data.data = data.data.trim();
        } else if ("includes" === iter.kind) {
          const data4 = data.data;
          if (!data4.includes(iter.value, iter.position)) {
            const _getOrReturnCtxResult13 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult13;
            const obj20 = { code: ZodReadonly(16055).ZodIssueCode.invalid_string, validation: null, message: null };
            ({ value: obj19.includes, position: obj19.position } = iter);
            obj20.validation = { includes: null, position: null };
            obj20.message = iter.message;
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult13, obj20);
            iter2.dirty();
            const obj21 = { includes: null, position: null };
          }
        } else if ("toLowerCase" === iter.kind) {
          data.data = data.data.toLowerCase();
        } else if ("toUpperCase" === iter.kind) {
          data.data = data.data.toUpperCase();
        } else if ("startsWith" === iter.kind) {
          const data3 = data.data;
          if (!data3.startsWith(iter.value)) {
            const _getOrReturnCtxResult14 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult14;
            const obj22 = { code: ZodReadonly(16055).ZodIssueCode.invalid_string, validation: null, message: null };
            const obj23 = { startsWith: iter.value };
            obj22.validation = obj23;
            obj22.message = iter.message;
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult14, obj22);
            iter2.dirty();
          }
        } else if ("endsWith" === iter.kind) {
          const data2 = data.data;
          if (!data2.endsWith(iter.value)) {
            const _getOrReturnCtxResult15 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult15;
            const obj24 = { code: ZodReadonly(16055).ZodIssueCode.invalid_string, validation: null, message: null };
            const obj25 = { endsWith: iter.value };
            obj24.validation = obj25;
            obj24.message = iter.message;
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult15, obj24);
            iter2.dirty();
          }
        } else if ("datetime" === iter.kind) {
          if (!obj12.test(data.data)) {
            const _getOrReturnCtxResult16 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult16;
            const obj26 = { code: ZodReadonly(16055).ZodIssueCode.invalid_string, validation: "datetime", message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult16, obj26);
            iter2.dirty();
          }
          obj12 = datetimeRegex(iter);
        } else if ("date" === iter.kind) {
          if (!regExp.test(data.data)) {
            const _getOrReturnCtxResult17 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult17;
            const obj28 = { code: ZodReadonly(16055).ZodIssueCode.invalid_string, validation: "date", message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult17, obj28);
            iter2.dirty();
          }
        } else if ("time" === iter.kind) {
          const _RegExp = RegExp;
          const _HermesInternal = HermesInternal;
          const regExp1 = new RegExp("^" + timeRegexSource(iter) + "$");
          if (!regExp1.test(data.data)) {
            const _getOrReturnCtxResult18 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult18;
            const obj29 = { code: ZodReadonly(16055).ZodIssueCode.invalid_string, validation: "time", message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult18, obj29);
            iter2.dirty();
          }
        } else if ("duration" === iter.kind) {
          if (!re23.test(data.data)) {
            const _getOrReturnCtxResult19 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult19;
            const obj33 = { validation: "duration", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult19, obj33);
            iter2.dirty();
          }
        } else if ("ip" === iter.kind) {
          data = data.data;
          const version = iter.version;
          let tmp65 = "v4" !== version;
          if (tmp65) {
            tmp65 = version;
          }
          if (!tmp65) {
            tmp65 = !re25.test(data);
          }
          if (tmp65) {
            let tmp69 = "v6" !== tmp64 && version;
            if (!tmp69) {
              tmp69 = !re27.test(data);
            }
            tmp65 = tmp69;
          }
          if (tmp65) {
            const _getOrReturnCtxResult20 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult20;
            const obj34 = { validation: "ip", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult20, obj34);
            iter2.dirty();
          }
          tmp64 = version;
        } else if ("jwt" === iter.kind) {
          if (!isValidJWT(data.data, iter.alg)) {
            const _getOrReturnCtxResult21 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult21;
            const obj65 = { validation: "jwt", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult21, obj65);
            iter2.dirty();
          }
        } else if ("cidr" === iter.kind) {
          if (!isValidCidr(data.data, iter.version)) {
            const _getOrReturnCtxResult22 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult22;
            const obj66 = { validation: "cidr", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult22, obj66);
            iter2.dirty();
          }
        } else if ("base64" === iter.kind) {
          if (!re29.test(data.data)) {
            const _getOrReturnCtxResult23 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult23;
            const obj67 = { validation: "base64", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult23, obj67);
            iter2.dirty();
          }
        } else if ("base64url" === iter.kind) {
          if (!re30.test(data.data)) {
            const _getOrReturnCtxResult24 = self._getOrReturnCtx(data, _getOrReturnCtxResult3);
            _getOrReturnCtxResult3 = _getOrReturnCtxResult24;
            const obj68 = { validation: "base64url", code: ZodReadonly(16055).ZodIssueCode.invalid_string, message: iter.message };
            ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult24, obj68);
            iter2.dirty();
          }
        } else {
          const util = ZodReadonly(16056).util;
          util.assertNever(iter);
        }
      }
    }
    _getTypeResult = self._getType(data);
  }
};
let items2 = [
  entry2,
  {
    key: "_regex",
    value: function _regex(arg0, validation, arg2) {
      regex = arg0;
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg2));
      return this.refinement((arg0) => regex.test(arg0), { validation, code: ZodReadonly(16055).ZodIssueCode.invalid_string });
    }
  },
  {
    key: "_addCheck",
    value: function _addCheck(arg0) {
      const obj = {};
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(this._def.checks, 0)] = arg0;
      obj.checks = items;
      return ZodReadonly(obj);
    }
  },
  {
    key: "email",
    value: function email(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "email" });
    }
  },
  {
    key: "url",
    value: function url(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "url" });
    }
  },
  {
    key: "emoji",
    value: function emoji(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "emoji" });
    }
  },
  {
    key: "uuid",
    value: function uuid(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "uuid" });
    }
  },
  {
    key: "nanoid",
    value: function nanoid(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "nanoid" });
    }
  },
  {
    key: "cuid",
    value: function cuid(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "cuid" });
    }
  },
  {
    key: "cuid2",
    value: function cuid2(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "cuid2" });
    }
  },
  {
    key: "ulid",
    value: function ulid(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "ulid" });
    }
  },
  {
    key: "base64",
    value: function base64(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "base64" });
    }
  },
  {
    key: "base64url",
    value: function base64url(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "base64url" });
    }
  },
  {
    key: "jwt",
    value: function jwt(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "jwt" });
    }
  },
  {
    key: "ip",
    value: function ip(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "ip" });
    }
  },
  {
    key: "cidr",
    value: function cidr(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "cidr" });
    }
  },
  {
    key: "datetime",
    value: function datetime(message) {
      const self = this;
      if (typeof message === "string") {
        const obj2 = { kind: "datetime", precision: null, offset: false, local: false, message };
        let _addCheckResult = self._addCheck(obj2);
      } else {
        let precision;
        if (null != message) {
          precision = message.precision;
        }
        let tmp2 = null;
        if (undefined !== precision) {
          let precision1;
          if (null != message) {
            precision1 = message.precision;
          }
          tmp2 = precision1;
        }
        const obj = { kind: "datetime", precision: tmp2, offset: null, local: null };
        let offset;
        if (null != message) {
          offset = message.offset;
        }
        obj.offset = null !== offset && undefined !== offset && offset;
        let local;
        if (null != message) {
          local = message.local;
        }
        obj.local = null !== local && undefined !== local && local;
        const errorUtil = ZodReadonly(16060).errorUtil;
        message = undefined;
        if (null != message) {
          message = message.message;
        }
        const merged = Object.assign(errorUtil.errToObj(message));
        _addCheckResult = self._addCheck(obj);
      }
      return _addCheckResult;
    }
  },
  {
    key: "date",
    value: function date(message) {
      return this._addCheck({ kind: "date", message });
    }
  },
  {
    key: "time",
    value: function time(message) {
      const self = this;
      if (typeof message === "string") {
        const obj2 = { kind: "time", precision: null, message };
        let _addCheckResult = self._addCheck(obj2);
      } else {
        let precision;
        if (null != message) {
          precision = message.precision;
        }
        let tmp2 = null;
        if (undefined !== precision) {
          let precision1;
          if (null != message) {
            precision1 = message.precision;
          }
          tmp2 = precision1;
        }
        const obj = { kind: "time", precision: tmp2 };
        const errorUtil = ZodReadonly(16060).errorUtil;
        message = undefined;
        if (null != message) {
          message = message.message;
        }
        const merged = Object.assign(errorUtil.errToObj(message));
        _addCheckResult = self._addCheck(obj);
      }
      return _addCheckResult;
    }
  },
  {
    key: "duration",
    value: function duration(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg0));
      return this._addCheck({ kind: "duration" });
    }
  },
  {
    key: "regex",
    value: function regex(regex, arg1) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return this._addCheck({ kind: "regex", regex });
    }
  },
  {
    key: "includes",
    value: function includes(value, position) {
      const obj = { kind: "includes", value, position: null };
      position = undefined;
      if (null != position) {
        position = position.position;
      }
      obj.position = position;
      const errorUtil = ZodReadonly(16060).errorUtil;
      let message;
      if (null != position) {
        message = position.message;
      }
      const merged = Object.assign(errorUtil.errToObj(message));
      return this._addCheck(obj);
    }
  },
  {
    key: "startsWith",
    value: function startsWith(value, arg1) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return this._addCheck({ kind: "startsWith", value });
    }
  },
  {
    key: "endsWith",
    value: function endsWith(value, arg1) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return this._addCheck({ kind: "endsWith", value });
    }
  },
  {
    key: "min",
    value: function min(value, arg1) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return this._addCheck({ kind: "min", value });
    }
  },
  {
    key: "max",
    value: function max(value, arg1) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return this._addCheck({ kind: "max", value });
    }
  },
  {
    key: "length",
    value: function length(value, arg1) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      const merged = Object.assign(errorUtil.errToObj(arg1));
      return this._addCheck({ kind: "length", value });
    }
  },
  {
    key: "nonempty",
    value: function nonempty(arg0) {
      const errorUtil = ZodReadonly(16060).errorUtil;
      return this.min(1, errorUtil.errToObj(arg0));
    }
  },
  {
    key: "trim",
    value: function trim() {
      const obj = {};
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(this._def.checks, 0)] = { kind: "trim" };
      obj.checks = items;
      return ZodReadonly(obj);
    }
  },
  {
    key: "toLowerCase",
    value: function toLowerCase() {
      const obj = {};
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(this._def.checks, 0)] = { kind: "toLowerCase" };
      obj.checks = items;
      return ZodReadonly(obj);
    }
  },
  {
    key: "toUpperCase",
    value: function toUpperCase() {
      const obj = {};
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(this._def.checks, 0)] = { kind: "toUpperCase" };
      obj.checks = items;
      return ZodReadonly(obj);
    }
  },
  {
    key: "isDatetime",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "datetime" === kind.kind);
    }
  },
  {
    key: "isDate",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "date" === kind.kind);
    }
  },
  {
    key: "isTime",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "time" === kind.kind);
    }
  },
  {
    key: "isDuration",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "duration" === kind.kind);
    }
  },
  {
    key: "isEmail",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "email" === kind.kind);
    }
  },
  {
    key: "isURL",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "url" === kind.kind);
    }
  },
  {
    key: "isEmoji",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "emoji" === kind.kind);
    }
  },
  {
    key: "isUUID",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "uuid" === kind.kind);
    }
  },
  {
    key: "isNANOID",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "nanoid" === kind.kind);
    }
  },
  {
    key: "isCUID",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "cuid" === kind.kind);
    }
  },
  {
    key: "isCUID2",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "cuid2" === kind.kind);
    }
  },
  {
    key: "isULID",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "ulid" === kind.kind);
    }
  },
  {
    key: "isIP",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "ip" === kind.kind);
    }
  },
  {
    key: "isCIDR",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "cidr" === kind.kind);
    }
  },
  {
    key: "isBase64",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "base64" === kind.kind);
    }
  },
  {
    key: "isBase64url",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => "base64url" === kind.kind);
    }
  },
  {
    key: "minLength",
    get() {
      value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "min" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value > value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  },
  {
    key: "maxLength",
    get() {
      value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "max" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value < value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  }
];
const _module2Result1 = _createClass(ZodString, items2);
_module2Result1.create = (coerce) => {
  const obj = { checks: [], typeName: obj6.ZodString, coerce: null };
  coerce = undefined;
  if (null != coerce) {
    coerce = coerce.coerce;
  }
  obj.coerce = null !== coerce && undefined !== coerce && coerce;
  closure_0 = coerce;
  if (coerce) {
    ({ errorMap, invalid_type_error } = coerce);
    const required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result1(obj);
};
class ZodNumber {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    tmp3Result = tmp3(self, constructResult);
    ({ gte: tmp9.min, lte: tmp9.max, multipleOf: tmp9.step } = tmp3Result);
    return tmp3Result;
  }
}
ZodReadonly = ZodNumber;
_inherits(ZodNumber, _module2Result);
const entry3 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (this._def.coerce) {
      const _Number = Number;
      data.data = Number(data.data);
    }
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.number) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj5 = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.number, received: _getOrReturnCtxResult.parsedType };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj5);
      return ZodReadonly(16057).INVALID;
    } else {
      const iter2 = new ZodReadonly(16057).ParseStatus();
      const checks = self._def.checks;
      const iter3 = checks[Symbol.iterator]();
      const nextResult = iter3.next();
      while (iter3 !== undefined) {
        let iter = nextResult;
        if ("int" === nextResult.kind) {
          let util2 = ZodReadonly(16056).util;
          if (!util2.isInteger(data.data)) {
            let _getOrReturnCtxResult1 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult1;
            obj6 = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: "integer", received: "float", message: null };
            obj6.message = iter.message;
            let addIssueToContextResult1 = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult1, obj6);
            let dirtyResult = iter2.dirty();
          }
        } else if ("min" === iter.kind) {
          let data2 = data.data;
          let value2 = iter.value;
          if (iter.inclusive ? data2 < value2 : data2 <= value2) {
            let _getOrReturnCtxResult2 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult2;
            let obj7 = { code: ZodReadonly(16055).ZodIssueCode.too_small, minimum: null, type: "number", inclusive: null, exact: false, message: null };
            ({ value: obj4.minimum, inclusive: obj4.inclusive, message: obj4.message } = iter);
            let addIssueToContextResult2 = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult2, obj7);
            let dirtyResult1 = iter2.dirty();
          }
        } else if ("max" === iter.kind) {
          data = data.data;
          value = iter.value;
          if (iter.inclusive ? data > value : data >= value) {
            let _getOrReturnCtxResult3 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult3;
            let obj14 = { code: ZodReadonly(16055).ZodIssueCode.too_big, maximum: null, type: "number", inclusive: null, exact: false, message: null };
            ({ value: obj3.maximum, inclusive: obj3.inclusive, message: obj3.message } = iter);
            let addIssueToContextResult3 = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult3, obj14);
            let dirtyResult2 = iter2.dirty();
          }
        } else if ("multipleOf" === iter.kind) {
          let str = data.data;
          let obj2 = str;
          let str2 = iter.value;
          let str3 = str.toString();
          let arr = str3.split(".")[1] || "";
          length = arr.length;
          let str4 = str2.toString();
          let arr2 = str4.split(".")[1] || "";
          let length2 = arr2.length;
          let tmp30 = length > length2 ? length : length2;
          let _parseInt = parseInt;
          let str5 = obj2.toFixed(tmp30);
          let _parseInt2 = parseInt;
          let parsed = parseInt(str5.replace(".", ""));
          let str6 = str2.toFixed(tmp30);
          let _Math = Math;
          let result = parsed % parseInt(str6.replace(".", ""));
          if (0 != result / Math.pow(10, tmp30)) {
            let _getOrReturnCtxResult4 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult4;
            let obj15 = { code: ZodReadonly(16055).ZodIssueCode.not_multiple_of, multipleOf: null, message: null };
            ({ value: obj8.multipleOf, message: obj8.message } = iter);
            let addIssueToContextResult4 = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult4, obj15);
            let dirtyResult3 = iter2.dirty();
          }
        } else if ("finite" === iter.kind) {
          let _Number2 = Number;
          if (!Number.isFinite(data.data)) {
            let _getOrReturnCtxResult5 = self._getOrReturnCtx(data, tmp18);
            tmp18 = _getOrReturnCtxResult5;
            let obj = { code: ZodReadonly(16055).ZodIssueCode.not_finite, message: null };
            obj.message = iter.message;
            let addIssueToContextResult5 = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult5, obj);
            let dirtyResult4 = iter2.dirty();
          }
        } else {
          let util = ZodReadonly(16056).util;
          let assertNeverResult = util.assertNever(iter);
        }
        continue;
      }
      const obj16 = { status: iter2.value, value: data.data };
      return obj16;
    }
    _getTypeResult = self._getType(data);
  }
};
let items3 = [
  entry3,
  {
    key: "gte",
    value: function gte(arg0, arg1) {
      return this.setLimit("min", arg0, true, ZodReadonly(16060).errorUtil.toString(arg1));
    }
  },
  {
    key: "gt",
    value: function gt(arg0, arg1) {
      return this.setLimit("min", arg0, false, ZodReadonly(16060).errorUtil.toString(arg1));
    }
  },
  {
    key: "lte",
    value: function lte(arg0, arg1) {
      return this.setLimit("max", arg0, true, ZodReadonly(16060).errorUtil.toString(arg1));
    }
  },
  {
    key: "lt",
    value: function lt(arg0, arg1) {
      return this.setLimit("max", arg0, false, ZodReadonly(16060).errorUtil.toString(arg1));
    }
  },
  {
    key: "setLimit",
    value: function setLimit(kind, value, inclusive, arg3) {
      const obj = {};
      const merged = Object.assign(this._def);
      items = [...this._def.checks];
      const obj2 = { kind, value, inclusive, message: ZodReadonly(16060).errorUtil.toString(arg3) };
      items[tmp2] = obj2;
      obj.checks = items;
      const str = ZodReadonly(16060).errorUtil;
      return ZodReadonly(obj);
    }
  },
  {
    key: "_addCheck",
    value: function _addCheck(arg0) {
      const obj = {};
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(this._def.checks, 0)] = arg0;
      obj.checks = items;
      return ZodReadonly(obj);
    }
  },
  {
    key: "int",
    value: function int(arg0) {
      const obj = { kind: "int", message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "positive",
    value: function positive(arg0) {
      const obj = { kind: "min", value: 0, inclusive: false, message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "negative",
    value: function negative(arg0) {
      const obj = { kind: "max", value: 0, inclusive: false, message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "nonpositive",
    value: function nonpositive(arg0) {
      const obj = { kind: "max", value: 0, inclusive: true, message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "nonnegative",
    value: function nonnegative(arg0) {
      const obj = { kind: "min", value: 0, inclusive: true, message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "multipleOf",
    value: function multipleOf(value, arg1) {
      const obj = { kind: "multipleOf", value, message: ZodReadonly(16060).errorUtil.toString(arg1) };
      return this._addCheck(obj);
    }
  },
  {
    key: "finite",
    value: function finite(arg0) {
      const obj = { kind: "finite", message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "safe",
    value: function safe(arg0) {
      const obj = { kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: ZodReadonly(16060).errorUtil.toString(arg0) };
      const str = ZodReadonly(16060).errorUtil;
      const obj2 = { kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: null };
      const _addCheckResult = this._addCheck(obj);
      obj2.message = ZodReadonly(16060).errorUtil.toString(arg0);
      return _addCheckResult._addCheck(obj2);
    }
  },
  {
    key: "minValue",
    get() {
      value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "min" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value > value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  },
  {
    key: "maxValue",
    get() {
      value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "max" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value < value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  },
  {
    key: "isInt",
    get() {
      const checks = this._def.checks;
      return checks.find((kind) => {
        let tmp = "int" === kind.kind;
        if (!tmp) {
          let isIntegerResult = "multipleOf" === kind.kind;
          if (isIntegerResult) {
            const util = ZodReadonly(dependencyMap[9]).util;
            isIntegerResult = util.isInteger(kind.value);
          }
          tmp = isIntegerResult;
        }
        return tmp;
      });
    }
  },
  {
    key: "isFinite",
    get() {
      let value2 = null;
      value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        if ("finite" !== nextResult.kind) {
          if ("int" !== iter2.kind) {
            if ("multipleOf" !== iter2.kind) {
              if ("min" === iter2.kind) {
                let tmp13 = null === value;
                if (!tmp13) {
                  tmp13 = iter2.value > value;
                }
                if (tmp13) {
                  value = iter2.value;
                }
              } else {
                let tmp6 = "max" === iter2.kind;
                if (tmp6) {
                  let tmp8 = null === value2;
                  if (!tmp8) {
                    tmp8 = iter2.value < value2;
                  }
                  tmp6 = tmp8;
                }
                if (tmp6) {
                  value2 = iter2.value;
                }
              }
              continue;
            }
          }
        }
        iter.return();
        let flag = true;
        return true;
      }
      let isFiniteResult = Number.isFinite(value);
      if (isFiniteResult) {
        const _Number = Number;
        isFiniteResult = Number.isFinite(value2);
      }
      return isFiniteResult;
    }
  }
];
const _module2Result2 = _createClass(ZodNumber, items3);
_module2Result2.create = (coerce) => {
  const obj = { checks: [], typeName: obj6.ZodNumber, coerce: null };
  let flag;
  if (null != coerce) {
    flag = coerce.coerce;
  }
  if (!flag) {
    flag = false;
  }
  obj.coerce = flag;
  closure_0 = coerce;
  if (coerce) {
    ({ errorMap, invalid_type_error } = coerce);
    const required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result2(obj);
};
class ZodBigInt {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    tmp3Result = tmp3(self, constructResult);
    ({ gte: tmp9.min, lte: tmp9.max } = tmp3Result);
    return tmp3Result;
  }
}
ZodReadonly = ZodBigInt;
_inherits(ZodBigInt, _module2Result);
const entry4 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (this._def.coerce) {
      try {
        const _BigInt = BigInt;
        data.data = BigInt(data.data);
      } catch (err) {
        return obj._getInvalidInput(tmp);
      }
    }
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.bigint) {
      return self._getInvalidInput(data);
    } else {
      const iter2 = new ZodReadonly(16057).ParseStatus();
      const checks = self._def.checks;
      const iter3 = checks[Symbol.iterator]();
      const nextResult = iter3.next();
      while (iter3 !== undefined) {
        let iter = nextResult;
        if ("min" === nextResult.kind) {
          let data2 = data.data;
          let value2 = iter.value;
          if (iter.inclusive ? data2 < value2 : data2 <= value2) {
            let _getOrReturnCtxResult = self._getOrReturnCtx(data, tmp23);
            tmp23 = _getOrReturnCtxResult;
            let obj4 = { code: ZodReadonly(16055).ZodIssueCode.too_small, type: "bigint", minimum: null, inclusive: null, message: null };
            ({ value: obj3.minimum, inclusive: obj3.inclusive, message: obj3.message } = iter);
            let addIssueToContextResult = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj4);
            let dirtyResult = iter2.dirty();
          }
        } else if ("max" === iter.kind) {
          data = data.data;
          value = iter.value;
          if (iter.inclusive ? data > value : data >= value) {
            let _getOrReturnCtxResult1 = self._getOrReturnCtx(data, tmp23);
            tmp23 = _getOrReturnCtxResult1;
            let obj9 = { code: ZodReadonly(16055).ZodIssueCode.too_big, type: "bigint", maximum: null, inclusive: null, message: null };
            ({ value: obj2.maximum, inclusive: obj2.inclusive, message: obj2.message } = iter);
            let addIssueToContextResult1 = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult1, obj9);
            let dirtyResult1 = iter2.dirty();
          }
        } else if ("multipleOf" === iter.kind) {
          let _BigInt2 = BigInt;
          let result = data.data % iter.value;
          if (result !== BigInt(0)) {
            let _getOrReturnCtxResult2 = self._getOrReturnCtx(data, tmp23);
            tmp23 = _getOrReturnCtxResult2;
            let obj10 = { code: ZodReadonly(16055).ZodIssueCode.not_multiple_of, multipleOf: null, message: null };
            ({ value: obj5.multipleOf, message: obj5.message } = iter);
            let addIssueToContextResult2 = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult2, obj10);
            let dirtyResult2 = iter2.dirty();
          }
        } else {
          let util = ZodReadonly(16056).util;
          let assertNeverResult = util.assertNever(iter);
        }
        continue;
      }
      const obj11 = { status: iter2.value, value: data.data };
      return obj11;
    }
    _getTypeResult = self._getType(data);
  }
};
let items4 = [
  entry4,
  {
    key: "_getInvalidInput",
    value: function _getInvalidInput(data) {
      const _getOrReturnCtxResult = this._getOrReturnCtx(data);
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.bigint, received: _getOrReturnCtxResult.parsedType });
      return ZodReadonly(16057).INVALID;
    }
  },
  {
    key: "gte",
    value: function gte(arg0, arg1) {
      return this.setLimit("min", arg0, true, ZodReadonly(16060).errorUtil.toString(arg1));
    }
  },
  {
    key: "gt",
    value: function gt(arg0, arg1) {
      return this.setLimit("min", arg0, false, ZodReadonly(16060).errorUtil.toString(arg1));
    }
  },
  {
    key: "lte",
    value: function lte(arg0, arg1) {
      return this.setLimit("max", arg0, true, ZodReadonly(16060).errorUtil.toString(arg1));
    }
  },
  {
    key: "lt",
    value: function lt(arg0, arg1) {
      return this.setLimit("max", arg0, false, ZodReadonly(16060).errorUtil.toString(arg1));
    }
  },
  {
    key: "setLimit",
    value: function setLimit(kind, value, inclusive, arg3) {
      const obj = {};
      const merged = Object.assign(this._def);
      items = [...this._def.checks];
      const obj2 = { kind, value, inclusive, message: ZodReadonly(16060).errorUtil.toString(arg3) };
      items[tmp2] = obj2;
      obj.checks = items;
      const str = ZodReadonly(16060).errorUtil;
      return ZodReadonly(obj);
    }
  },
  {
    key: "_addCheck",
    value: function _addCheck(arg0) {
      const obj = {};
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(this._def.checks, 0)] = arg0;
      obj.checks = items;
      return ZodReadonly(obj);
    }
  },
  {
    key: "positive",
    value: function positive(arg0) {
      const obj = { kind: "min", value: BigInt(0), inclusive: false, message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "negative",
    value: function negative(arg0) {
      const obj = { kind: "max", value: BigInt(0), inclusive: false, message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "nonpositive",
    value: function nonpositive(arg0) {
      const obj = { kind: "max", value: BigInt(0), inclusive: true, message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "nonnegative",
    value: function nonnegative(arg0) {
      const obj = { kind: "min", value: BigInt(0), inclusive: true, message: ZodReadonly(16060).errorUtil.toString(arg0) };
      return this._addCheck(obj);
    }
  },
  {
    key: "multipleOf",
    value: function multipleOf(value, arg1) {
      const obj = { kind: "multipleOf", value, message: ZodReadonly(16060).errorUtil.toString(arg1) };
      return this._addCheck(obj);
    }
  },
  {
    key: "minValue",
    get() {
      value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "min" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value > value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  },
  {
    key: "maxValue",
    get() {
      value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "max" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value < value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      return value;
    }
  }
];
const _module2Result3 = _createClass(ZodBigInt, items4);
_module2Result3.create = (coerce) => {
  const obj = { checks: [], typeName: obj6.ZodBigInt, coerce: null };
  coerce = undefined;
  if (null != coerce) {
    coerce = coerce.coerce;
  }
  obj.coerce = null !== coerce && undefined !== coerce && coerce;
  closure_0 = coerce;
  if (coerce) {
    ({ errorMap, invalid_type_error } = coerce);
    const required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result3(obj);
};
class ZodBoolean {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodBoolean;
_inherits(ZodBoolean, _module2Result);
const entry5 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (this._def.coerce) {
      const _Boolean = Boolean;
      data.data = Boolean(data.data);
    }
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.boolean) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.boolean, received: _getOrReturnCtxResult.parsedType };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj);
      return ZodReadonly(16057).INVALID;
    } else {
      return ZodReadonly(16057).OK(data.data);
    }
    _getTypeResult = self._getType(data);
  }
};
const items5 = [entry5];
const _module2Result4 = _createClass(ZodBoolean, items5);
_module2Result4.create = (coerce) => {
  const obj = { typeName: obj6.ZodBoolean, coerce: null };
  let flag;
  if (null != coerce) {
    flag = coerce.coerce;
  }
  if (!flag) {
    flag = false;
  }
  obj.coerce = flag;
  closure_0 = coerce;
  if (coerce) {
    ({ errorMap, invalid_type_error } = coerce);
    const required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result4(obj);
};
class ZodDate {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodDate;
_inherits(ZodDate, _module2Result);
const entry6 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (this._def.coerce) {
      const _Date = Date;
      const date = new Date(data.data);
      data.data = date;
    }
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.date) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj2 = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.date, received: _getOrReturnCtxResult.parsedType };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj2);
      return ZodReadonly(16057).INVALID;
    } else {
      const _isNaN = isNaN;
      const data4 = data.data;
      if (isNaN(data4.getTime())) {
        const obj3 = { code: ZodReadonly(16055).ZodIssueCode.invalid_date };
        ZodReadonly(16057).addIssueToContext(self._getOrReturnCtx(data), obj3);
        return ZodReadonly(16057).INVALID;
      } else {
        const iter = new ZodReadonly(16057).ParseStatus();
        const checks = self._def.checks;
        const iter2 = checks[Symbol.iterator]();
        const nextResult = iter2.next();
        while (iter2 !== undefined) {
          let iter3 = nextResult;
          if ("min" === nextResult.kind) {
            let data2 = data.data;
            if (data2.getTime() < iter3.value) {
              let _getOrReturnCtxResult2 = self._getOrReturnCtx(data, tmp16);
              tmp16 = _getOrReturnCtxResult2;
              let obj = { code: ZodReadonly(16055).ZodIssueCode.too_small, message: null, inclusive: true, exact: false, minimum: null, type: "date" };
              ({ message: obj.message, value: obj.minimum } = iter3);
              let addIssueToContextResult2 = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult2, obj);
              let dirtyResult = iter.dirty();
            }
          } else if ("max" === iter3.kind) {
            data = data.data;
            if (data.getTime() > iter3.value) {
              let _getOrReturnCtxResult3 = self._getOrReturnCtx(data, tmp16);
              tmp16 = _getOrReturnCtxResult3;
              let obj4 = { code: ZodReadonly(16055).ZodIssueCode.too_big, message: null, inclusive: true, exact: false, maximum: null, type: "date" };
              ({ message: obj5.message, value: obj5.maximum } = iter3);
              let addIssueToContextResult3 = ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult3, obj4);
              let dirtyResult1 = iter.dirty();
            }
          } else {
            let util = ZodReadonly(16056).util;
            let assertNeverResult = util.assertNever(iter3);
          }
          continue;
        }
        const obj9 = { status: iter.value, value: null };
        const _Date2 = Date;
        const data3 = data.data;
        const date1 = new Date(data3.getTime());
        obj9.value = date1;
        return obj9;
      }
    }
    _getTypeResult = self._getType(data);
  }
};
const items6 = [
  entry6,
  {
    key: "_addCheck",
    value: function _addCheck(arg0) {
      const obj = {};
      const merged = Object.assign(this._def);
      items = [];
      items[HermesBuiltin.arraySpread(this._def.checks, 0)] = arg0;
      obj.checks = items;
      return ZodReadonly(obj);
    }
  },
  {
    key: "min",
    value: function min(getTime, arg1) {
      const obj = { kind: "min", value: getTime.getTime(), message: ZodReadonly(16060).errorUtil.toString(arg1) };
      return this._addCheck(obj);
    }
  },
  {
    key: "max",
    value: function max(getTime, arg1) {
      const obj = { kind: "max", value: getTime.getTime(), message: ZodReadonly(16060).errorUtil.toString(arg1) };
      return this._addCheck(obj);
    }
  },
  {
    key: "minDate",
    get() {
      value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "min" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value > value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      let date = null;
      if (null != value) {
        const _Date = Date;
        date = new Date(value);
      }
      return date;
    }
  },
  {
    key: "maxDate",
    get() {
      value = null;
      const iter = this._def.checks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        let tmp3 = "max" === nextResult.kind;
        if (tmp3) {
          let tmp5 = null === value;
          if (!tmp5) {
            tmp5 = iter2.value < value;
          }
          tmp3 = tmp5;
        }
        if (tmp3) {
          value = iter2.value;
        }
        continue;
      }
      let date = null;
      if (null != value) {
        const _Date = Date;
        date = new Date(value);
      }
      return date;
    }
  }
];
const _module2Result5 = _createClass(ZodDate, items6);
_module2Result5.create = (coerce) => {
  const obj = { checks: [], coerce: null, typeName: null };
  let flag;
  if (null != coerce) {
    flag = coerce.coerce;
  }
  if (!flag) {
    flag = false;
  }
  obj.coerce = flag;
  obj.typeName = obj6.ZodDate;
  closure_0 = coerce;
  invalid_type_error = undefined;
  let required_error;
  if (coerce) {
    ({ errorMap, invalid_type_error } = coerce);
    required_error = coerce.required_error;
    const description = coerce.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result5(obj);
};
class ZodSymbol {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodSymbol;
_inherits(ZodSymbol, _module2Result);
const entry7 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.symbol) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.symbol, received: _getOrReturnCtxResult.parsedType };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj);
      return ZodReadonly(16057).INVALID;
    } else {
      return ZodReadonly(16057).OK(data.data);
    }
    _getTypeResult = this._getType(data);
  }
};
const items7 = [entry7];
const _module2Result6 = _createClass(ZodSymbol, items7);
_module2Result6.create = (required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result6({ typeName: obj6.ZodSymbol });
};
class ZodUndefined {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodUndefined;
_inherits(ZodUndefined, _module2Result);
const entry8 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.undefined) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.undefined, received: _getOrReturnCtxResult.parsedType };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj);
      return ZodReadonly(16057).INVALID;
    } else {
      return ZodReadonly(16057).OK(data.data);
    }
    _getTypeResult = this._getType(data);
  }
};
const items8 = [entry8];
const _module2Result7 = _createClass(ZodUndefined, items8);
_module2Result7.create = (required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result7({ typeName: obj6.ZodUndefined });
};
class ZodNull {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodNull;
_inherits(ZodNull, _module2Result);
const entry9 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.null) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.null, received: _getOrReturnCtxResult.parsedType };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj);
      return ZodReadonly(16057).INVALID;
    } else {
      return ZodReadonly(16057).OK(data.data);
    }
    _getTypeResult = this._getType(data);
  }
};
const items9 = [entry9];
const _module2Result8 = _createClass(ZodNull, items9);
_module2Result8.create = (required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result8({ typeName: obj6.ZodNull });
};
class ZodAny {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._any = true;
    return tmp3Result;
  }
}
ZodReadonly = ZodAny;
_inherits(ZodAny, _module2Result);
const entry10 = {
  key: "_parse",
  value: function _parse(data) {
    return ZodReadonly(16057).OK(data.data);
  }
};
const items10 = [entry10];
const _module2Result9 = _createClass(ZodAny, items10);
_module2Result9.create = (required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result9({ typeName: obj6.ZodAny });
};
class ZodUnknown {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._unknown = true;
    return tmp3Result;
  }
}
ZodReadonly = ZodUnknown;
_inherits(ZodUnknown, _module2Result);
const entry11 = {
  key: "_parse",
  value: function _parse(data) {
    return ZodReadonly(16057).OK(data.data);
  }
};
const items11 = [entry11];
const _module2Result10 = _createClass(ZodUnknown, items11);
_module2Result10.create = (required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result10({ typeName: obj6.ZodUnknown });
};
class ZodNever {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodNever;
_inherits(ZodNever, _module2Result);
const entry12 = {
  key: "_parse",
  value: function _parse(parent) {
    const _getOrReturnCtxResult = this._getOrReturnCtx(parent);
    ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.never, received: _getOrReturnCtxResult.parsedType });
    return ZodReadonly(16057).INVALID;
  }
};
const items12 = [entry12];
const _module2Result11 = _createClass(ZodNever, items12);
_module2Result11.create = (required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result11({ typeName: obj6.ZodNever });
};
class ZodVoid {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodVoid;
_inherits(ZodVoid, _module2Result);
const entry13 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.undefined) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.void, received: _getOrReturnCtxResult.parsedType };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj);
      return ZodReadonly(16057).INVALID;
    } else {
      return ZodReadonly(16057).OK(data.data);
    }
    _getTypeResult = this._getType(data);
  }
};
const items13 = [entry13];
const _module2Result12 = _createClass(ZodVoid, items13);
_module2Result12.create = (required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result12({ typeName: obj6.ZodVoid });
};
class ZodArray {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodArray;
_inherits(ZodArray, _module2Result);
const entry14 = {
  key: "_parse",
  value: function _parse(common) {
    const _processInputParamsResult = this._processInputParams(common);
    const ctx = _processInputParamsResult.ctx;
    const status = _processInputParamsResult.status;
    const _def = this._def;
    if (ctx.parsedType !== ctx(status[9]).ZodParsedType.array) {
      const obj2 = { code: tmp2(tmp3[8]).ZodIssueCode.invalid_type, expected: tmp2(tmp3[9]).ZodParsedType.array, received: ctx.parsedType };
      tmp2(tmp3[7]).addIssueToContext(ctx, obj2);
      return tmp2(tmp3[7]).INVALID;
    } else {
      if (null !== _def.exactLength) {
        let tmp4 = tmp23;
        if (ctx.data.length <= _def.exactLength.value) {
          tmp4 = tmp24;
        }
        if (tmp4) {
          const ZodIssueCode = tmp2(tmp3[8]).ZodIssueCode;
          const obj = { code: tmp23 ? ZodIssueCode.too_big : ZodIssueCode.too_small, minimum: null, maximum: null, type: "array", inclusive: true, exact: true, message: null };
          value = undefined;
          if (tmp24) {
            value = _def.exactLength.value;
          }
          obj.minimum = value;
          let value2;
          if (tmp23) {
            value2 = _def.exactLength.value;
          }
          obj.maximum = value2;
          obj.message = _def.exactLength.message;
          tmp2(tmp3[7]).addIssueToContext(ctx, obj);
          status.dirty();
        }
      }
      if (tmp9) {
        const obj3 = { code: tmp2(tmp3[8]).ZodIssueCode.too_small, minimum: _def.minLength.value, type: "array", inclusive: true, exact: false, message: _def.minLength.message };
        tmp2(tmp3[7]).addIssueToContext(ctx, obj3);
        status.dirty();
      }
      if (tmp12) {
        const obj4 = { code: tmp2(tmp3[8]).ZodIssueCode.too_big, maximum: _def.maxLength.value, type: "array", inclusive: true, exact: false, message: _def.maxLength.message };
        tmp2(tmp3[7]).addIssueToContext(ctx, obj4);
        status.dirty();
      }
      if (ctx.common.async) {
        items = [];
        HermesBuiltin.arraySpread(ctx.data, 0);
        return Promise.all(items.map((item, index) => {
          const type = _def.type;
          return type._parseAsync(new closure_12(ctx, item, ctx.path, index));
        })).then((result) => {
          const ParseStatus = ZodReadonly(status[7]).ParseStatus;
          return ParseStatus.mergeArray(status, result);
        });
      } else {
        const items1 = [];
        HermesBuiltin.arraySpread(ctx.data, 0);
        const mapped = items1.map((item, index) => {
          const type = _def.type;
          return type._parseSync(new closure_12(ctx, item, ctx.path, index));
        });
        let ParseStatus = tmp2(tmp3[7]).ParseStatus;
        return ParseStatus.mergeArray(status, mapped);
      }
      tmp12 = null !== _def.maxLength && ctx.data.length > _def.maxLength.value;
      tmp9 = null !== _def.minLength && ctx.data.length < _def.minLength.value;
    }
  }
};
const items14 = [
  entry14,
  {
    key: "element",
    get() {
      return this._def.type;
    }
  },
  {
    key: "min",
    value: function min(value, arg1) {
      const obj = {};
      const merged = Object.assign(this._def);
      const obj2 = { value, message: ZodReadonly(16060).errorUtil.toString(arg1) };
      obj.minLength = obj2;
      const str = ZodReadonly(16060).errorUtil;
      return ZodReadonly(obj);
    }
  },
  {
    key: "max",
    value: function max(value, arg1) {
      const obj = {};
      const merged = Object.assign(this._def);
      const obj2 = { value, message: ZodReadonly(16060).errorUtil.toString(arg1) };
      obj.maxLength = obj2;
      const str = ZodReadonly(16060).errorUtil;
      return ZodReadonly(obj);
    }
  },
  {
    key: "length",
    value: function length(value, arg1) {
      const obj = {};
      const merged = Object.assign(this._def);
      const obj2 = { value, message: ZodReadonly(16060).errorUtil.toString(arg1) };
      obj.exactLength = obj2;
      const str = ZodReadonly(16060).errorUtil;
      return ZodReadonly(obj);
    }
  },
  {
    key: "nonempty",
    value: function nonempty(arg0) {
      return this.min(1, arg0);
    }
  }
];
const _module2Result13 = _createClass(ZodArray, items14);
_module2Result13.create = (type, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result13({ type, minLength: null, maxLength: null, exactLength: null, typeName: obj6.ZodArray });
};
class ZodObject {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._cached = null;
    ({ passthrough: tmp9.nonstrict, extend: tmp9.augment } = tmp3Result);
    return tmp3Result;
  }
}
ZodReadonly = ZodObject;
_inherits(ZodObject, _module2Result);
const entry15 = {
  key: "_getCached",
  value: function _getCached() {
    const self = this;
    if (null !== this._cached) {
      return self._cached;
    } else {
      const _def = self._def;
      const shapeResult = _def.shape();
      const util = ZodReadonly(16056).util;
      const obj = { shape: shapeResult, keys: util.objectKeys(shapeResult) };
      self._cached = obj;
      return obj;
    }
  }
};
const items15 = [
  entry15,
  {
    key: "_parse",
    value: function _parse(data) {
      const self = this;
      if (_getTypeResult !== status(items1[9]).ZodParsedType.object) {
        const _getOrReturnCtxResult = self._getOrReturnCtx(data);
        let obj2 = { code: tmp2(tmp3[8]).ZodIssueCode.invalid_type, expected: tmp2(tmp3[9]).ZodParsedType.object, received: _getOrReturnCtxResult.parsedType };
        tmp2(tmp3[7]).addIssueToContext(_getOrReturnCtxResult, obj2);
        return tmp2(tmp3[7]).INVALID;
      } else {
        const _processInputParamsResult = self._processInputParams(data);
        status = _processInputParamsResult.status;
        const ctx = _processInputParamsResult.ctx;
        const keys = self._getCached().keys;
        items = [];
        if (!(self._def.catchall instanceof _module2Result11)) {
          for (const key10016 in ctx.data) {
            if (keys.includes(key10016)) {
              continue;
            } else {
              let arr = items.push(key10016);
              continue;
            }
            continue;
          }
        }
        items1 = [];
        for (const item10023 of keys) {
          let obj = tmp38[item10023];
          let entry = { key: null, value: null, alwaysSet: null };
          let obj3 = { status: "valid", value: item10023 };
          entry.key = obj3;
          let tmp8 = new.target;
          let tmp9 = new.target;
          let tmp12 = new closure_12(ctx, ctx.data[item10023], ctx.path, item10023);
          entry.value = obj._parse(tmp12);
          entry.alwaysSet = item10023 in ctx.data;
          let arr2 = items1.push(entry);
          continue;
        }
        const _def = self._def;
        if (self._def.catchall instanceof _module2Result11) {
          const unknownKeys = _def.unknownKeys;
          if ("passthrough" === unknownKeys) {
            for (const item10083 of items) {
              let entry1 = { key: null, value: null };
              let obj4 = { status: "valid", value: item10083 };
              entry1.key = obj4;
              let obj5 = { status: "valid", value: ctx.data[item10083] };
              entry1.value = obj5;
              let arr6 = items1.push(entry1);
              continue;
            }
          } else if ("strict" === unknownKeys) {
            if (items.length > 0) {
              obj6 = { code: status(items1[8]).ZodIssueCode.unrecognized_keys, keys: items };
              status(items1[7]).addIssueToContext(ctx, obj6);
              status.dirty();
            }
          } else if ("strip" !== unknownKeys) {
            const _Error = Error;
            const error = new Error("Internal ZodObject error: invalid unknownKeys value.");
            throw error;
          }
        } else {
          const catchall = _def.catchall;
          for (const item10054 of items) {
            let entry2 = { key: null, value: null, alwaysSet: null };
            let obj7 = { status: "valid", value: item10054 };
            entry2.key = obj7;
            let tmp19 = new.target;
            let tmp20 = new.target;
            let tmp23 = new closure_12(ctx, ctx.data[item10054], ctx.path, item10054);
            entry2.value = catchall._parse(tmp23);
            entry2.alwaysSet = item10054 in ctx.data;
            let arr7 = items1.push(entry2);
            continue;
          }
        }
        if (ctx.common.async) {
          const resolved = Promise.resolve();
          let nextPromise1 = resolved.then(asyncGeneratorStep(async () => {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj = { value, done: true };
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              while (true) {
                c6 = 2;
                let tmp4 = c3;
                if (0 === c3) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    let obj2 = { value, done: true };
                    return obj2;
                  } else {
                    closure_2 = tmp;
                    closure_130_1 = undefined;
                    closure_130_2 = undefined;
                    closure_130_3 = undefined;
                    closure_130_0 = [];
                    closure_1 = items1;
                    status = items1[Symbol.iterator]();
                  }
                } else if (1 === tmp4) {
                  c5 = 0;
                  status.return();
                  throw _slicedToArray;
                } else if (2 === tmp4) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 0;
                    status.return();
                    c6 = 3;
                    let obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_130_2 = value;
                    c3 = 3;
                    c6 = 1;
                    let obj4 = { value: closure_130_1.value, done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  status.return();
                  c6 = 3;
                  let obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_130_3 = value;
                  let entry = { key: null, value: null, alwaysSet: null };
                  entry.key = closure_130_2;
                  entry.value = closure_130_3;
                  entry.alwaysSet = closure_130_1.alwaysSet;
                  let arr = closure_130_0.push(entry);
                  c5 = 0;
                }
                if (status === undefined) {
                  c6 = 3;
                  obj6 = { value: closure_130_0, done: true };
                  return obj6;
                } else {
                  c5 = 1;
                  closure_130_1 = tmp20;
                  c3 = 2;
                  c6 = 1;
                  let obj7 = { value: closure_130_1.key, done: false };
                  return obj7;
                }
              }
            }
          })).then((result) => {
            const ParseStatus = ZodReadonly(items1[7]).ParseStatus;
            return ParseStatus.mergeObjectSync(status, result);
          });
          const nextPromise = resolved.then(asyncGeneratorStep(async () => {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj = { value, done: true };
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              while (true) {
                c6 = 2;
                let tmp4 = c3;
                if (0 === c3) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    let obj2 = { value, done: true };
                    return obj2;
                  } else {
                    closure_2 = tmp;
                    closure_130_1 = undefined;
                    closure_130_2 = undefined;
                    closure_130_3 = undefined;
                    closure_130_0 = [];
                    closure_1 = items1;
                    status = items1[Symbol.iterator]();
                  }
                } else if (1 === tmp4) {
                  c5 = 0;
                  status.return();
                  throw _slicedToArray;
                } else if (2 === tmp4) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 0;
                    status.return();
                    c6 = 3;
                    let obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_130_2 = value;
                    c3 = 3;
                    c6 = 1;
                    let obj4 = { value: closure_130_1.value, done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  status.return();
                  c6 = 3;
                  let obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_130_3 = value;
                  let entry = { key: null, value: null, alwaysSet: null };
                  entry.key = closure_130_2;
                  entry.value = closure_130_3;
                  entry.alwaysSet = closure_130_1.alwaysSet;
                  let arr = closure_130_0.push(entry);
                  c5 = 0;
                }
                if (status === undefined) {
                  c6 = 3;
                  obj6 = { value: closure_130_0, done: true };
                  return obj6;
                } else {
                  c5 = 1;
                  closure_130_1 = tmp20;
                  c3 = 2;
                  c6 = 1;
                  let obj7 = { value: closure_130_1.key, done: false };
                  return obj7;
                }
              }
            }
          }));
        } else {
          let ParseStatus = status(items1[7]).ParseStatus;
          nextPromise1 = ParseStatus.mergeObjectSync(status, items1);
        }
        return nextPromise1;
      }
      _getTypeResult = this._getType(data);
    }
  },
  {
    key: "shape",
    get() {
      const _def = this._def;
      return _def.shape();
    }
  },
  {
    key: "strict",
    value: function strict(arg0) {
      const self = this;
      ZodReadonly = arg0;
      const errToObj = ZodReadonly(16060).errorUtil.errToObj;
      let obj = {};
      const merged = Object.assign(this._def);
      obj.unknownKeys = "strict";
      if (undefined !== arg0) {
        let obj2 = {
          errorMap(code, defaultError) {
              const _def = self._def;
              const errorMap = _def.errorMap;
              defaultError = undefined;
              if (null !== errorMap) {
                if (undefined !== errorMap) {
                  const call = errorMap.call;
                  const message = typeof call === "unknown" ? errorMap(code, defaultError) : call(_def, code, defaultError).message;
                }
              }
              if (null === defaultError) {
                defaultError = defaultError.defaultError;
              }
              if ("unrecognized_keys" === code.code) {
                const errorUtil = ZodReadonly(_self[10]).errorUtil;
                const message2 = errorUtil.errToObj(closure_0).message;
                let tmp5 = defaultError;
                if (null !== message2) {
                  tmp5 = defaultError;
                  if (undefined !== message2) {
                    tmp5 = message2;
                  }
                }
                const obj2 = { message: tmp5 };
                let obj = obj2;
              } else {
                obj = { message: defaultError };
              }
              return obj;
            }
        };
        let obj3 = obj2;
      } else {
        obj3 = {};
      }
      const merged1 = Object.assign(obj3);
      return ZodReadonly(obj);
    }
  },
  {
    key: "strip",
    value: function strip() {
      const obj = {};
      const merged = Object.assign(this._def);
      obj.unknownKeys = "strip";
      return ZodReadonly(obj);
    }
  },
  {
    key: "passthrough",
    value: function passthrough() {
      const obj = {};
      const merged = Object.assign(this._def);
      obj.unknownKeys = "passthrough";
      return ZodReadonly(obj);
    }
  },
  {
    key: "extend",
    value: function extend(arg0) {
      const self = this;
      closure_0 = arg0;
      const obj = {};
      let merged = Object.assign(this._def);
      obj.shape = function shape() {
        const _def = self._def;
        const merged = Object.assign(_def.shape());
        const merged1 = Object.assign(closure_0);
        return {};
      };
      return ZodReadonly(obj);
    }
  },
  {
    key: "merge",
    value: function merge(_def) {
      const self = this;
      return ZodReadonly({
        unknownKeys: _def._def.unknownKeys,
        catchall: _def._def.catchall,
        shape() {
          _def = self._def;
          const merged = Object.assign(_def.shape());
          const _def2 = _def._def;
          const merged1 = Object.assign(_def2.shape());
          return {};
        },
        typeName: closure_2_72.ZodObject
      });
    }
  },
  {
    key: "setKey",
    value: function setKey(arg0, arg1) {
      return this.augment({ [arg0]: arg1 });
    }
  },
  {
    key: "catchall",
    value: function catchall(catchall) {
      const obj = {};
      const merged = Object.assign(this._def);
      obj.catchall = catchall;
      return ZodReadonly(obj);
    }
  },
  {
    key: "pick",
    value: function pick(arg0) {
      const self = this;
      dependencyMap = arg0;
      ZodReadonly = {};
      const util = ZodReadonly(16056).util;
      const item = util.objectKeys(arg0).forEach((item) => {
        let tmp = closure_1[item];
        if (tmp) {
          tmp = self.shape[item];
        }
        if (tmp) {
          closure_0[item] = self.shape[item];
        }
      });
      const obj = {};
      const merged = Object.assign(this._def);
      obj.shape = function shape() {
        return closure_0;
      };
      const objectKeysResult = util.objectKeys(arg0);
      return ZodReadonly(obj);
    }
  },
  {
    key: "omit",
    value: function omit(arg0) {
      const self = this;
      dependencyMap = arg0;
      ZodReadonly = {};
      const util = ZodReadonly(16056).util;
      const item = util.objectKeys(this.shape).forEach((item) => {
        if (!closure_1[item]) {
          closure_0[item] = self.shape[item];
        }
      });
      const obj = {};
      const merged = Object.assign(this._def);
      obj.shape = function shape() {
        return closure_0;
      };
      const objectKeysResult = util.objectKeys(this.shape);
      return ZodReadonly(obj);
    }
  },
  {
    key: "deepPartial",
    value: function deepPartial() {
      return deepPartialify(this);
    }
  },
  {
    key: "partial",
    value: function partial(arg0) {
      const self = this;
      dependencyMap = arg0;
      ZodReadonly = {};
      const util = ZodReadonly(16056).util;
      const item = util.objectKeys(this.shape).forEach((item) => {
        if (closure_1) {
          if (!closure_1[item]) {
            closure_0[item] = obj;
          }
        }
        closure_0[item] = self.shape[item].optional();
      });
      const obj = {};
      const merged = Object.assign(this._def);
      obj.shape = function shape() {
        return closure_0;
      };
      const objectKeysResult = util.objectKeys(this.shape);
      return ZodReadonly(obj);
    }
  },
  {
    key: "required",
    value: function required(arg0) {
      const self = this;
      dependencyMap = arg0;
      ZodReadonly = {};
      const util = ZodReadonly(16056).util;
      const item = util.objectKeys(this.shape).forEach((item) => {
        let tmp7;
        if (closure_1) {
          if (!closure_1[item]) {
            closure_0[item] = self.shape[item];
          }
        }
        let tmp4 = tmp3;
        let tmp5 = tmp3;
        if (self.shape[item] instanceof _module2Result29) {
          do {
            let innerType = tmp4._def.innerType;
            tmp4 = innerType;
            tmp5 = innerType;
            tmp7 = innerType instanceof _module2Result29;
          } while (tmp7);
        }
        closure_0[item] = tmp5;
      });
      const obj = {};
      const merged = Object.assign(this._def);
      obj.shape = function shape() {
        return closure_0;
      };
      const objectKeysResult = util.objectKeys(this.shape);
      return ZodReadonly(obj);
    }
  },
  {
    key: "keyof",
    value: function keyof() {
      const util = ZodReadonly(16056).util;
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      const merged = Object.assign({});
      const obj = { values: util.objectKeys(this.shape), typeName: obj6.ZodEnum };
      return new _module2Result25({ values: util.objectKeys(this.shape), typeName: obj6.ZodEnum });
    }
  }
];
const _module2Result14 = _createClass(ZodObject, items15);
_module2Result14.create = (arg0, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const obj = {
    shape() {
      return closure_0;
    },
    unknownKeys: "strip",
    catchall: _module2Result11.create(),
    typeName: obj6.ZodObject
  };
  return new _module2Result14({
    shape() {
      return closure_0;
    },
    unknownKeys: "strip",
    catchall: _module2Result11.create(),
    typeName: obj6.ZodObject
  });
};
_module2Result14.strictCreate = (arg0, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const obj = {
    shape() {
      return closure_0;
    },
    unknownKeys: "strict",
    catchall: _module2Result11.create(),
    typeName: obj6.ZodObject
  };
  return new _module2Result14({
    shape() {
      return closure_0;
    },
    unknownKeys: "strict",
    catchall: _module2Result11.create(),
    typeName: obj6.ZodObject
  });
};
_module2Result14.lazycreate = (shape, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  const obj = { shape, unknownKeys: "strip", catchall: _module2Result11.create(), typeName: obj6.ZodObject };
  return new _module2Result14({ shape, unknownKeys: "strip", catchall: _module2Result11.create(), typeName: obj6.ZodObject });
};
class ZodUnion {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodUnion;
_inherits(ZodUnion, _module2Result);
const entry16 = {
  key: "_parse",
  value: function _parse(common) {
    const ctx = this._processInputParams(common).ctx;
    const options = this._def.options;
    if (ctx.common.async) {
      return Promise.all(options.map((() => {
        closure_0 = asyncGeneratorStep(async (arg0) => {
          closure_2 = tmp4;
          const obj4 = {};
          const merged = Object.assign(closure_0);
          const obj5 = {};
          const merged1 = Object.assign(closure_0.common);
          obj5.issues = [];
          obj4.common = obj5;
          obj4.parent = null;
          closure_130_0 = obj4;
          value = {};
          ({ data: obj8.data, path: obj8.path } = closure_0);
          await closure_0._parseAsync({ data: null, path: null, parent: obj4 });
          value.result = value;
          value.ctx = closure_130_0;
          return value;
        });
        return function(arg0) {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
      })())).then(function handleResults(arr) {
        const iter = arr[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if ("valid" === nextResult.result.status) {
            iter.return();
            return nextResult.result;
          }
        }
        const iter2 = arr[Symbol.iterator]();
        const nextResult1 = iter2.next();
        while (iter2 !== undefined) {
          if ("dirty" === nextResult1.result.status) {
            let issues = ctx.common.issues;
            let push = issues.push;
            items = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(nextResult1.ctx.common.issues, 0);
            let applyResult = HermesBuiltin.apply(items, issues);
            iter2.return();
            return nextResult1.result;
          }
        }
        const mapped = arr.map((ctx) => {
          const zodError = new ctx(dependencyMap[8]).ZodError(ctx.ctx.common.issues);
          return zodError;
        });
        ZodReadonly(16057).addIssueToContext(ctx, { code: ZodReadonly(16055).ZodIssueCode.invalid_union, unionErrors: mapped });
        return ZodReadonly(16057).INVALID;
      });
    } else {
      let tmp;
      items = [];
      let iter = options[Symbol.iterator]();
      while (iter !== undefined) {
        let obj = {};
        let merged = Object.assign(ctx);
        let obj2 = {};
        let merged1 = Object.assign(ctx.common);
        obj2.issues = [];
        obj.common = obj2;
        obj.parent = null;
        let tmp11 = obj;
        let obj3 = { data: null, path: null, parent: null };
        ({ data: obj4.data, path: obj4.path } = ctx);
        obj3.parent = obj;
        let _parseSyncResult = nextResult._parseSync(obj3);
        let tmp13 = _parseSyncResult;
        if ("valid" === _parseSyncResult.status) {
          iter.return();
          return _parseSyncResult;
        } else {
          let tmp15 = "dirty" !== tmp13.status || tmp;
          if (!tmp15) {
            let obj5 = { result: null, ctx: null };
            obj5.result = tmp13;
            obj5.ctx = tmp11;
            tmp = obj5;
          }
          if (tmp11.common.issues.length) {
            let arr = items.push(tmp11.common.issues);
          }
          continue;
        }
      }
      if (tmp) {
        let issues = ctx.common.issues;
        let push = issues.push;
        const items1 = [];
        HermesBuiltin.arraySpread(tmp.ctx.common.issues, 0);
        HermesBuiltin.apply(items1, issues);
        return tmp.result;
      } else {
        let mapped = items.map((item) => {
          const zodError = new ctx(16055).ZodError(item);
          return zodError;
        });
        obj6 = { code: ctx(16055).ZodIssueCode.invalid_union, unionErrors: mapped };
        ctx(16057).addIssueToContext(ctx, obj6);
        return ctx(16057).INVALID;
      }
      nextResult = iter.next();
    }
  }
};
const items16 = [
  entry16,
  {
    key: "options",
    get() {
      return this._def.options;
    }
  }
];
const _module2Result15 = _createClass(ZodUnion, items16);
_module2Result15.create = (options, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result15({ options, typeName: obj6.ZodUnion });
};
function getDiscriminator(innerType) {
  if (innerType instanceof _module2Result23) {
    let options = getDiscriminator(innerType.schema);
  } else if (innerType instanceof _module2Result28) {
    options = getDiscriminator(innerType.innerType());
  } else if (innerType instanceof _module2Result24) {
    items = [innerType.value];
    options = items;
  } else if (innerType instanceof _module2Result25) {
    options = innerType.options;
  } else if (innerType instanceof _module2Result26) {
    const util = ZodReadonly(16056).util;
    options = util.objectValues(innerType.enum);
  } else if (innerType instanceof _module2Result31) {
    options = getDiscriminator(innerType._def.innerType);
  } else if (innerType instanceof _module2Result7) {
    const items1 = [undefined];
    options = items1;
  } else if (innerType instanceof _module2Result8) {
    options = [null];
  } else if (innerType instanceof _module2Result29) {
    const items2 = [undefined];
    HermesBuiltin.arraySpread(getDiscriminator(innerType.unwrap()), 1);
    options = items2;
  } else if (innerType instanceof _module2Result30) {
    const items3 = [null];
    HermesBuiltin.arraySpread(getDiscriminator(innerType.unwrap()), 1);
    options = items3;
  } else {
    if (!(innerType instanceof _module2Result34)) {
      if (!(innerType instanceof _module2Result36)) {
        if (innerType instanceof _module2Result32) {
          options = getDiscriminator(innerType._def.innerType);
        } else {
          options = [];
        }
      }
    }
    options = getDiscriminator(innerType.unwrap());
  }
  return options;
}
class ZodDiscriminatedUnion {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodDiscriminatedUnion;
_inherits(ZodDiscriminatedUnion, _module2Result);
const entry17 = {
  key: "_parse",
  value: function _parse(common) {
    const self = this;
    const ctx = this._processInputParams(common).ctx;
    if (ctx.parsedType !== ZodReadonly(16056).ZodParsedType.object) {
      const obj4 = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.object, received: ctx.parsedType };
      ZodReadonly(16057).addIssueToContext(ctx, obj4);
      return ZodReadonly(16057).INVALID;
    } else {
      ({ discriminator, optionsMap: optionsMap2 } = self);
      value = optionsMap2.get(ctx.data[discriminator]);
      if (value) {
        if (ctx.common.async) {
          const obj5 = { data: null, path: null, parent: null };
          ({ data: obj3.data, path: obj3.path } = ctx);
          obj5.parent = ctx;
          let _parseAsyncResult = value._parseAsync(obj5);
        } else {
          const obj8 = { data: null, path: null, parent: null };
          ({ data: obj2.data, path: obj2.path } = ctx);
          obj8.parent = ctx;
          _parseAsyncResult = value._parseSync(obj8);
        }
      } else {
        const obj = { code: ZodReadonly(16055).ZodIssueCode.invalid_union_discriminator, options: null, path: null };
        const _Array = Array;
        const optionsMap = self.optionsMap;
        obj.options = Array.from(optionsMap.keys());
        items = [discriminator];
        obj.path = items;
        ZodReadonly(16057).addIssueToContext(ctx, obj);
        return ZodReadonly(16057).INVALID;
      }
    }
  }
};
const items17 = [
  entry17,
  {
    key: "discriminator",
    get() {
      return this._def.discriminator;
    }
  },
  {
    key: "options",
    get() {
      return this._def.options;
    }
  },
  {
    key: "optionsMap",
    get() {
      return this._def.optionsMap;
    }
  }
];
const entry18 = {
  key: "create",
  value: function create(discriminator, options, arg2) {
    const map = new Map();
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let arr = closure_2_53(nextResult.shape[discriminator]);
      if (arr.length) {
        for (const item10039 of arr) {
          if (map.has(item10039)) {
            let _Error2 = Error;
            let _String = String;
            let _String2 = String;
            let StringResult = String(arg0);
            let _HermesInternal2 = HermesInternal;
            let str3 = " has duplicate value ";
            let str4 = "Discriminator property ";
            let tmp17 = new.target;
            let tmp18 = new.target;
            let error = new Error("Discriminator property " + StringResult + " has duplicate value " + String(item10039));
            throw error;
          } else {
            let result = map.set(item10039, tmp2);
            continue;
          }
        }
        continue;
      } else {
        let _Error = Error;
        let _HermesInternal = HermesInternal;
        let str = "` could not be extracted from all schema options";
        let str2 = "A discriminator value for key `";
        let tmp5 = new.target;
        let tmp6 = new.target;
        let error1 = new Error("A discriminator value for key `" + discriminator + "` could not be extracted from all schema options");
        throw error1;
      }
    }
    const merged = Object.assign(value(arg2));
    return ZodReadonly({ typeName: closure_2_72.ZodDiscriminatedUnion, discriminator, options, optionsMap: map });
  }
};
const items18 = [entry18];
const _module2Result16 = _createClass(ZodDiscriminatedUnion, items17, items18);
class ZodIntersection {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodIntersection;
_inherits(ZodIntersection, _module2Result);
const entry19 = {
  key: "_parse",
  value: function _parse(common) {
    const self = this;
    ({ status: ZodReadonly, ctx } = this._processInputParams(common));
    function handleParsed(_parseSyncResult, right) {
      if (!ZodReadonly(dependencyMap[7]).isAborted(_parseSyncResult)) {
        if (!ZodReadonly(dependencyMap[7]).isAborted(right)) {
          const tmp5 = mergeValues(_parseSyncResult.value, right.value);
          const tmpResult = ZodReadonly(dependencyMap[7]);
          if (tmp5.valid) {
            if (tmp8) {
              closure_1_0.dirty();
            }
            const obj = { status: closure_1_0.value, value: tmp5.data };
            let INVALID = obj;
            tmp8 = tmpResult.isDirty(_parseSyncResult) || ZodReadonly(dependencyMap[7]).isDirty(right);
          } else {
            const obj2 = { code: ZodReadonly(dependencyMap[8]).ZodIssueCode.invalid_intersection_types };
            tmpResult.addIssueToContext(ctx, obj2);
            INVALID = ZodReadonly(dependencyMap[7]).INVALID;
          }
          return INVALID;
        }
      }
      return ZodReadonly(dependencyMap[7]).INVALID;
    }
    if (ctx.common.async) {
      const left2 = self._def.left;
      const obj7 = { data: null, path: null, parent: null };
      ({ data: obj3.data, path: obj3.path } = ctx);
      obj7.parent = ctx;
      items = [left2._parseAsync(obj7), ];
      const right2 = self._def.right;
      const obj8 = { data: null, path: null, parent: null };
      ({ data: obj4.data, path: obj4.path } = ctx);
      obj8.parent = ctx;
      items[1] = right2._parseAsync(obj8);
      let nextPromise = Promise.all(items).then((result) => {
        [tmp, tmp2] = result;
        return handleParsed(tmp, tmp2);
      });
      const allPromises = Promise.all(items);
    } else {
      const left = self._def.left;
      let obj = { data: null, path: null, parent: null };
      ({ data: obj.data, path: obj.path } = ctx);
      obj.parent = ctx;
      const right = self._def.right;
      const obj9 = { data: null, path: null, parent: null };
      ({ data: obj2.data, path: obj2.path } = ctx);
      obj9.parent = ctx;
      nextPromise = handleParsed(left._parseSync(obj), right._parseSync(obj9));
      const _parseSyncResult = left._parseSync(obj);
    }
    return nextPromise;
  }
};
const items19 = [entry19];
const _module2Result17 = _createClass(ZodIntersection, items19);
_module2Result17.create = (left, right, required_error) => {
  const rect = { left, right, typeName: obj6.ZodIntersection };
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj = { errorMap: null, description: null };
    if (errorMap) {
      obj.errorMap = errorMap;
      obj.description = description;
      let obj2 = obj;
    } else {
      obj.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj.description = description;
      obj2 = obj;
    }
  } else {
    obj2 = {};
  }
  const merged = Object.assign(obj2);
  return new _module2Result17(rect);
};
class ZodTuple {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodTuple;
_inherits(ZodTuple, _module2Result);
const entry20 = {
  key: "_parse",
  value: function _parse(common) {
    const self = this;
    const _processInputParamsResult = this._processInputParams(common);
    const status = _processInputParamsResult.status;
    const ctx = _processInputParamsResult.ctx;
    if (ctx.parsedType !== ctx(status[9]).ZodParsedType.array) {
      const obj2 = { code: tmp2(tmp3[8]).ZodIssueCode.invalid_type, expected: tmp2(tmp3[9]).ZodParsedType.array, received: ctx.parsedType };
      tmp2(tmp3[7]).addIssueToContext(ctx, obj2);
      return tmp2(tmp3[7]).INVALID;
    } else if (ctx.data.length < self._def.items.length) {
      const obj3 = { code: tmp2(tmp3[8]).ZodIssueCode.too_small, minimum: self._def.items.length, inclusive: true, exact: false, type: "array" };
      tmp2(tmp3[7]).addIssueToContext(ctx, obj3);
      return tmp2(tmp3[7]).INVALID;
    } else {
      const rest = self._def.rest;
      let tmp4 = !rest;
      if (!rest) {
        tmp4 = ctx.data.length > self._def.items.length;
      }
      if (tmp4) {
        const obj = { code: tmp2(tmp3[8]).ZodIssueCode.too_big, maximum: self._def.items.length, inclusive: true, exact: false, type: "array" };
        tmp2(tmp3[7]).addIssueToContext(ctx, obj);
        status.dirty();
      }
      items = [];
      HermesBuiltin.arraySpread(ctx.data, 0);
      const mapped = items.map((item, index) => {
        let _parseResult = null;
        if (self._def.items[index] || self._def.rest) {
          const tmp9 = new closure_12(ctx, item, ctx.path, index);
          _parseResult = obj._parse(tmp9);
        }
        return _parseResult;
      });
      const found = mapped.filter((item) => item);
      if (ctx.common.async) {
        let nextPromise = Promise.all(found).then((result) => {
          const ParseStatus = ZodReadonly(status[7]).ParseStatus;
          return ParseStatus.mergeArray(status, result);
        });
        const allPromises = Promise.all(found);
      } else {
        let ParseStatus = tmp2(tmp3[7]).ParseStatus;
        nextPromise = ParseStatus.mergeArray(status, found);
      }
      return nextPromise;
    }
  }
};
const items20 = [
  entry20,
  {
    key: "items",
    get() {
      return this._def.items;
    }
  },
  {
    key: "rest",
    value: function rest(rest) {
      const obj = {};
      const merged = Object.assign(this._def);
      obj.rest = rest;
      return ZodReadonly(obj);
    }
  }
];
const _module2Result18 = _createClass(ZodTuple, items20);
_module2Result18.create = (items, required_error) => {
  if (Array.isArray(items)) {
    const obj = { items, typeName: obj6.ZodTuple, rest: null };
    closure_0 = required_error;
    invalid_type_error = undefined;
    required_error = undefined;
    if (required_error) {
      ({ errorMap, invalid_type_error } = required_error);
      required_error = required_error.required_error;
      const description = required_error.description;
      if (errorMap) {
        const _Error2 = Error;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      const obj2 = { errorMap: null, description: null };
      if (errorMap) {
        obj2.errorMap = errorMap;
        obj2.description = description;
        let obj3 = obj2;
      } else {
        obj2.errorMap = function errorMap(code, defaultError) {
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            const obj2 = { message: defaultError };
            let obj = obj2;
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            const obj3 = { message: defaultError3 };
            obj = obj3;
          } else if ("invalid_type" !== code.code) {
            const obj4 = { message: defaultError.defaultError };
            obj = obj4;
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj2.description = description;
        obj3 = obj2;
      }
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    const tmp62 = new _module2Result18(obj);
    return tmp62;
  } else {
    const _Error = Error;
    const error1 = new Error("You must pass an array of schemas to z.tuple([ ... ])");
    throw error1;
  }
};
class ZodRecord {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodRecord;
_inherits(ZodRecord, _module2Result);
const items21 = [
  {
    key: "keySchema",
    get() {
      return this._def.keyType;
    }
  },
  {
    key: "valueSchema",
    get() {
      return this._def.valueType;
    }
  },
  {
    key: "_parse",
    value: function _parse(common) {
      const self = this;
      ({ status, ctx } = this._processInputParams(common));
      if (ctx.parsedType !== ZodReadonly(16056).ZodParsedType.object) {
        const obj = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.object, received: ctx.parsedType };
        ZodReadonly(16057).addIssueToContext(ctx, obj);
        return ZodReadonly(16057).INVALID;
      } else {
        items = [];
        const keyType = self._def.keyType;
        const valueType = self._def.valueType;
        for (const key10014 in ctx.data) {
          let entry = { key: null, value: null, alwaysSet: null };
          let tmp10 = new.target;
          let tmp11 = new.target;
          let tmp15 = new closure_12(ctx, key10014, ctx.path, key10014);
          entry.key = keyType._parse(tmp15);
          let tmp17 = new.target;
          let tmp18 = new.target;
          let tmp21 = new closure_12(ctx, ctx.data[key10014], ctx.path, key10014);
          entry.value = valueType._parse(tmp21);
          entry.alwaysSet = key10014 in ctx.data;
          let arr = items.push(entry);
          continue;
        }
        const ParseStatus = ZodReadonly(16057).ParseStatus;
        if (ctx.common.async) {
          let mergeObjectAsyncResult = ParseStatus.mergeObjectAsync(status, items);
        } else {
          mergeObjectAsyncResult = ParseStatus.mergeObjectSync(status, items);
        }
        return mergeObjectAsyncResult;
      }
      const _processInputParamsResult = this._processInputParams(common);
    }
  },
  {
    key: "element",
    get() {
      return this._def.valueType;
    }
  }
];
const entry21 = {
  key: "create",
  value: function create(keyType, valueType, arg2) {
    const obj = { keyType: null, valueType: null, typeName: null };
    if (valueType instanceof value) {
      let description2 = arg2;
      obj.keyType = keyType;
      obj.valueType = valueType;
      obj.typeName = closure_2_72.ZodRecord;
      closure_0 = arg2;
      invalid_type_error = undefined;
      let required_error;
      if (arg2) {
        ({ errorMap: errorMap2, invalid_type_error: invalid_type_error2 } = description2);
        invalid_type_error = invalid_type_error2;
        const required_error2 = description2.required_error;
        required_error = required_error2;
        description2 = description2.description;
        if (errorMap2) {
          const _Error2 = Error;
          const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
          throw error;
        }
        const obj2 = { errorMap: null, description: null };
        if (errorMap2) {
          obj2.errorMap = errorMap2;
          obj2.description = description2;
          let obj3 = obj2;
        } else {
          obj2.errorMap = function errorMap(code, defaultError) {
            defaultError = message.message;
            if ("invalid_enum_value" === code.code) {
              if (null == defaultError) {
                defaultError = defaultError.defaultError;
              }
              const obj2 = { message: defaultError };
              let obj = obj2;
            } else if (undefined === defaultError.data) {
              let defaultError3 = defaultError;
              if (null == defaultError) {
                defaultError3 = required_error;
              }
              if (null === defaultError3) {
                defaultError3 = defaultError.defaultError;
              }
              const obj3 = { message: defaultError3 };
              obj = obj3;
            } else if ("invalid_type" !== code.code) {
              const obj4 = { message: defaultError.defaultError };
              obj = obj4;
            } else {
              let defaultError2 = defaultError;
              if (null == defaultError) {
                defaultError2 = invalid_type_error;
              }
              if (null === defaultError2) {
                defaultError2 = defaultError.defaultError;
              }
              obj = { message: defaultError2 };
            }
            return obj;
          };
          obj2.description = description2;
          obj3 = obj2;
        }
      } else {
        obj3 = {};
      }
      const merged = Object.assign(obj3);
    } else {
      obj.keyType = closure_2_37.create();
      obj.valueType = keyType;
      obj.typeName = closure_2_72.ZodRecord;
      closure_0 = valueType;
      invalid_type_error = undefined;
      required_error = undefined;
      if (valueType) {
        ({ errorMap, invalid_type_error } = valueType);
        required_error = valueType.required_error;
        const description = valueType.description;
        if (errorMap) {
          const _Error = Error;
          const error1 = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
          throw error1;
        }
        const obj4 = { errorMap: null, description: null };
        if (errorMap) {
          obj4.errorMap = errorMap;
          obj4.description = description;
          let obj5 = obj4;
        } else {
          obj4.errorMap = function errorMap(code, defaultError) {
            defaultError = message.message;
            if ("invalid_enum_value" === code.code) {
              if (null == defaultError) {
                defaultError = defaultError.defaultError;
              }
              const obj2 = { message: defaultError };
              let obj = obj2;
            } else if (undefined === defaultError.data) {
              let defaultError3 = defaultError;
              if (null == defaultError) {
                defaultError3 = required_error;
              }
              if (null === defaultError3) {
                defaultError3 = defaultError.defaultError;
              }
              const obj3 = { message: defaultError3 };
              obj = obj3;
            } else if ("invalid_type" !== code.code) {
              const obj4 = { message: defaultError.defaultError };
              obj = obj4;
            } else {
              let defaultError2 = defaultError;
              if (null == defaultError) {
                defaultError2 = invalid_type_error;
              }
              if (null === defaultError2) {
                defaultError2 = defaultError.defaultError;
              }
              obj = { message: defaultError2 };
            }
            return obj;
          };
          obj4.description = description;
          obj5 = obj4;
        }
      } else {
        obj5 = {};
      }
      const merged1 = Object.assign(obj5);
      const tmpResult = ZodReadonly(obj);
      return tmpResult;
    }
  }
};
const items22 = [entry21];
const _module2Result19 = _createClass(ZodRecord, items21, items22);
class ZodMap {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodMap;
_inherits(ZodMap, _module2Result);
const items23 = [
  {
    key: "keySchema",
    get() {
      return this._def.keyType;
    }
  },
  {
    key: "valueSchema",
    get() {
      return this._def.valueType;
    }
  },
  {
    key: "_parse",
    value: function _parse(common) {
      const self = this;
      const _processInputParamsResult = this._processInputParams(common);
      let iter = _processInputParamsResult.status;
      const ctx = _processInputParamsResult.ctx;
      if (ctx.parsedType !== iter(ctx[9]).ZodParsedType.map) {
        let obj2 = { code: tmp2(tmp3[8]).ZodIssueCode.invalid_type, expected: tmp2(tmp3[9]).ZodParsedType.map, received: ctx.parsedType };
        tmp2(tmp3[7]).addIssueToContext(ctx, obj2);
        return tmp2(tmp3[7]).INVALID;
      } else {
        const keyType = self._def.keyType;
        const valueType = self._def.valueType;
        const data = ctx.data;
        items = [];
        HermesBuiltin.arraySpread(data.entries(), 0);
        const mapped = items.map((item, index) => {
          [tmp, tmp2] = item;
          const entry = { key: null, value: null };
          items = [index, "key"];
          entry.key = keyType._parse(new closure_12(ctx, tmp, ctx.path, items));
          const items1 = [index, "value"];
          const tmp3 = new closure_12(ctx, tmp, ctx.path, items);
          entry.value = valueType._parse(new closure_12(ctx, tmp2, ctx.path, items1));
          return entry;
        });
        const _Map = Map;
        const map = new Map();
        if (ctx.common.async) {
          const resolved = Promise.resolve();
          return resolved.then(map(function*() {
            if (c7 === 2) {
              c7 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                c7 = 2;
                let tmp4 = c6;
                if (0 === c6) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c7 = 3;
                    let obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_3 = tmp;
                    closure_2 = tmp4;
                    closure_130_0 = undefined;
                    closure_130_1 = undefined;
                    closure_130_2 = undefined;
                    closure_1 = mapped;
                    iter = mapped[Symbol.iterator]();
                  }
                } else if (1 === tmp4) {
                  c5 = 0;
                  iter.return();
                  throw closure_1_4;
                } else if (2 === tmp4) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 0;
                    iter.return();
                    c7 = 3;
                    let obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_130_1 = value;
                    c6 = 3;
                    c7 = 1;
                    let obj5 = { value: closure_130_0.value, done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  iter.return();
                  c7 = 3;
                  obj6 = { value, done: true };
                  return obj6;
                } else {
                  closure_130_2 = value;
                  if ("aborted" !== closure_130_1.status) {
                    if ("aborted" !== closure_130_2.status) {
                      let tmp7 = "dirty" !== closure_130_1.status;
                      if (tmp7) {
                        tmp7 = "dirty" !== closure_130_2.status;
                      }
                      if (!tmp7) {
                        let dirtyResult = closure_131_0.dirty();
                      }
                      let result = closure_131_5.set(closure_130_1.value, closure_130_2.value);
                      c5 = 0;
                    }
                  }
                  c5 = 0;
                  iter.return();
                  c7 = 3;
                  let obj = { value: iter(closure_1[7]).INVALID, done: true };
                  return obj;
                }
                if (iter === undefined) {
                  let obj7 = { status: closure_131_0.value, value: closure_131_5 };
                  c7 = 3;
                  let obj8 = { value: obj7, done: true };
                  return obj8;
                } else {
                  c5 = 1;
                  closure_130_0 = tmp32;
                  c6 = 2;
                  c7 = 1;
                  let obj9 = { value: closure_130_0.key, done: false };
                  return obj9;
                }
              }
            }
          }));
        } else {
          const iter2 = mapped[Symbol.iterator]();
          const iter3 = iter2.next();
          while (iter2 !== undefined) {
            let key = iter3.key;
            let iter4 = key;
            let iter5 = iter3.value;
            if ("aborted" !== key.status) {
              if ("aborted" !== iter5.status) {
                let tmp9 = "dirty" !== iter4.status;
                if (tmp9) {
                  tmp9 = "dirty" !== iter5.status;
                }
                if (!tmp9) {
                  let dirtyResult = iter.dirty();
                }
                let result = map.set(iter4.value, iter5.value);
                continue;
              }
            }
            iter2.return();
            return iter(ctx[7]).INVALID;
          }
          let obj = { status: iter.value, value: map };
          return obj;
        }
      }
    }
  }
];
const _module2Result20 = _createClass(ZodMap, items23);
_module2Result20.create = (keyType, valueType, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result20({ valueType, keyType, typeName: obj6.ZodMap });
};
class ZodSet {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodSet;
_inherits(ZodSet, _module2Result);
const entry22 = {
  key: "_parse",
  value: function _parse(common) {
    const self = this;
    function finalizeSet(mapped) {
      const set = new Set();
      const iter = mapped[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let iter2 = nextResult;
        if ("aborted" === nextResult.status) {
          iter.return();
          return ZodReadonly(closure_1[7]).INVALID;
        } else {
          if ("dirty" === iter2.status) {
            let dirtyResult = status.dirty();
          }
          let addResult = set.add(iter2.value);
          continue;
        }
      }
      return { status: status.value, value: set };
    }
    const _processInputParamsResult = this._processInputParams(common);
    const status = _processInputParamsResult.status;
    const ctx = _processInputParamsResult.ctx;
    if (ctx.parsedType !== status(ctx[9]).ZodParsedType.set) {
      const obj2 = { code: tmp2(tmp3[8]).ZodIssueCode.invalid_type, expected: tmp2(tmp3[9]).ZodParsedType.set, received: ctx.parsedType };
      tmp2(tmp3[7]).addIssueToContext(ctx, obj2);
      return tmp2(tmp3[7]).INVALID;
    } else {
      const _def = self._def;
      if (tmp4) {
        const obj = { code: tmp2(tmp3[8]).ZodIssueCode.too_small, minimum: _def.minSize.value, type: "set", inclusive: true, exact: false, message: _def.minSize.message };
        tmp2(tmp3[7]).addIssueToContext(ctx, obj);
        status.dirty();
      }
      if (tmp7) {
        const obj3 = { code: tmp2(tmp3[8]).ZodIssueCode.too_big, maximum: _def.maxSize.value, type: "set", inclusive: true, exact: false, message: _def.maxSize.message };
        tmp2(tmp3[7]).addIssueToContext(ctx, obj3);
        status.dirty();
      }
      const valueType = self._def.valueType;
      const data = ctx.data;
      items = [];
      HermesBuiltin.arraySpread(data.values(), 0);
      const mapped = items.map((item, index) => valueType._parse(new closure_12(ctx, item, ctx.path, index)));
      if (ctx.common.async) {
        let nextPromise = Promise.all(mapped).then((result) => finalizeSet(result));
        const allPromises = Promise.all(mapped);
      } else {
        nextPromise = finalizeSet(mapped);
      }
      return nextPromise;
    }
  }
};
const items24 = [
  entry22,
  {
    key: "min",
    value: function min(value, arg1) {
      const obj = {};
      const merged = Object.assign(this._def);
      const obj2 = { value, message: ZodReadonly(16060).errorUtil.toString(arg1) };
      obj.minSize = obj2;
      const str = ZodReadonly(16060).errorUtil;
      return ZodReadonly(obj);
    }
  },
  {
    key: "max",
    value: function max(value, arg1) {
      const obj = {};
      const merged = Object.assign(this._def);
      const obj2 = { value, message: ZodReadonly(16060).errorUtil.toString(arg1) };
      obj.maxSize = obj2;
      const str = ZodReadonly(16060).errorUtil;
      return ZodReadonly(obj);
    }
  },
  {
    key: "size",
    value: function size(arg0, arg1) {
      return this.min(arg0, arg1).max(arg0, arg1);
    }
  },
  {
    key: "nonempty",
    value: function nonempty(arg0) {
      return this.min(1, arg0);
    }
  }
];
const _module2Result21 = _createClass(ZodSet, items24);
_module2Result21.create = (valueType, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result21({ valueType, minSize: null, maxSize: null, typeName: obj6.ZodSet });
};
class ZodFunction {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.validate = tmp3Result.implement;
    return tmp3Result;
  }
}
ZodReadonly = ZodFunction;
_inherits(ZodFunction, _module2Result);
const entry23 = {
  key: "_parse",
  value: function _parse(common) {
    let self = this;
    const ctx = this._processInputParams(common).ctx;
    if (ctx.parsedType !== ctx(obj2[9]).ZodParsedType.function) {
      let obj = { code: tmp(tmp2[8]).ZodIssueCode.invalid_type, expected: tmp(tmp2[9]).ZodParsedType.function, received: ctx.parsedType };
      tmp(tmp2[7]).addIssueToContext(ctx, obj);
      return tmp(tmp2[7]).INVALID;
    } else {
      obj2 = { errorMap: ctx.common.contextualErrorMap };
      const data = ctx.data;
      if (self._def.returns instanceof _module2Result27) {
        return tmp(tmp2[7]).OK(asyncGeneratorStep(async function() {
          self = this;
          closure_1 = [...arguments];
          c5 = 0;
          c6 = 0;
          const iter = (async (arg0) => {
            if (c6 === 2) {
              c6 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c6 = 2;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_4 = self;
                    const data2 = self;
                    closure_2 = tmp2;
                    closure_130_0 = closure_1;
                    closure_130_1 = undefined;
                    closure_130_2 = undefined;
                    closure_130_3 = undefined;
                    c5 = 1;
                    c6 = 1;
                    return { value: "flexDirection", done: true };
                  }
                } else if (1 === tmp5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    const zodError = new self(closure_1[8]).ZodError([]);
                    closure_130_1 = zodError;
                    const args = closure_131_3._def.args;
                    c5 = 2;
                    c6 = 1;
                    const obj5 = {
                      value: args.parseAsync(closure_130_0, closure_131_1).catch((error) => {
                                const obj = { data, path: self.path, errorMaps: null, issueData: null };
                                items = [self.common.contextualErrorMap, self.schemaErrorMap, data(closure_1_1[11]).getErrorMap(), data(closure_1_1[11]).defaultErrorMap];
                                obj.errorMaps = items.filter((item) => item);
                                obj.issueData = { code: data(closure_1_1[8]).ZodIssueCode.invalid_arguments, argumentsError: error };
                                closure_1_1.addIssue(data(closure_1_1[7]).makeIssue(obj));
                                throw closure_1_1;
                              }),
                      done: false
                    };
                    return obj5;
                  }
                } else if (2 === tmp5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    obj6 = { value, done: true };
                    return obj6;
                  } else {
                    closure_130_2 = value;
                    const _Reflect = Reflect;
                    c5 = 3;
                    c6 = 1;
                    const obj7 = { value: Reflect.apply(closure_131_2, closure_4, closure_130_2), done: false };
                    return obj7;
                  }
                } else if (3 === tmp5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  } else {
                    closure_130_3 = value;
                    const type = closure_131_3._def.returns._def.type;
                    c5 = 4;
                    c6 = 1;
                    const obj9 = {
                      value: type.parseAsync(closure_130_3, closure_131_1).catch((error) => {
                                const obj = { data: data2, path: self.path, errorMaps: null, issueData: null };
                                items = [self.common.contextualErrorMap, self.schemaErrorMap, data(closure_1_1[11]).getErrorMap(), data(closure_1_1[11]).defaultErrorMap];
                                obj.errorMaps = items.filter((item) => item);
                                obj.issueData = { code: data(closure_1_1[8]).ZodIssueCode.invalid_return_type, returnTypeError: error };
                                closure_1_1.addIssue(data(closure_1_1[7]).makeIssue(obj));
                                throw closure_1_1;
                              }),
                      done: false
                    };
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  c6 = 3;
                  let obj = { value, done: true };
                  return obj;
                }
              } catch (tmp19) {
                c6 = tmp;
                throw tmp19;
              }
            }
          })();
          iter.next();
          return iter;
        }));
      } else {
        return tmp(tmp2[7]).OK(function() {
          items = [...arguments];
          const args = self._def.args;
          const safeParseResult = args.safeParse(items, obj2);
          if (safeParseResult.success) {
            self = this;
            const _Reflect = Reflect;
            const applyResult = Reflect.apply(data, this, safeParseResult.data);
            const returns = tmp._def.returns;
            const safeParseResult1 = returns.safeParse(applyResult, tmp2);
            if (safeParseResult1.success) {
              return safeParseResult1.data;
            } else {
              obj2 = { data: applyResult, path: ctx.path, errorMaps: null, issueData: null };
              const items1 = [ctx.common.contextualErrorMap, ctx.schemaErrorMap, ZodReadonly(obj2[11]).getErrorMap(), ZodReadonly(obj2[11]).defaultErrorMap];
              obj2.errorMaps = items1.filter((item) => item);
              const obj3 = { code: ZodReadonly(obj2[8]).ZodIssueCode.invalid_return_type, returnTypeError: safeParseResult1.error };
              obj2.issueData = obj3;
              const items2 = [ZodReadonly(obj2[7]).makeIssue(obj2)];
              const zodError = new ZodReadonly(obj2[8]).ZodError(items2);
              throw zodError;
            }
          } else {
            const obj = { data: items, path: ctx.path, errorMaps: null, issueData: null };
            const items3 = [ctx.common.contextualErrorMap, ctx.schemaErrorMap, ZodReadonly(obj2[11]).getErrorMap(), ZodReadonly(obj2[11]).defaultErrorMap];
            obj.errorMaps = items3.filter((item) => item);
            const obj4 = { code: ZodReadonly(obj2[8]).ZodIssueCode.invalid_arguments, argumentsError: safeParseResult.error };
            obj.issueData = obj4;
            const items4 = [ZodReadonly(obj2[7]).makeIssue(obj)];
            const zodError1 = new ZodReadonly(obj2[8]).ZodError(items4);
            throw zodError1;
          }
          tmp = self;
          tmp2 = obj2;
        });
      }
    }
  }
};
const items25 = [
  entry23,
  {
    key: "parameters",
    value: function parameters() {
      return this._def.args;
    }
  },
  {
    key: "returnType",
    value: function returnType() {
      return this._def.returns;
    }
  },
  {
    key: "args",
    value: function args() {
      const obj = {};
      items = [...arguments];
      const merged = Object.assign(this._def);
      obj.args = closure_2_56.create(items).rest(closure_2_46.create());
      const obj2 = closure_2_56.create(items);
      return ZodReadonly(obj);
    }
  },
  {
    key: "returns",
    value: function returns(returns) {
      const obj = {};
      const merged = Object.assign(this._def);
      obj.returns = returns;
      return ZodReadonly(obj);
    }
  },
  {
    key: "implement",
    value: function implement(value) {
      return this.parse(value);
    }
  },
  {
    key: "strictImplement",
    value: function strictImplement(arg0) {
      return this.parse(arg0);
    }
  }
];
const entry24 = {
  key: "create",
  value: function create(arg0, arg1, required_error) {
    let restResult = arg0;
    if (!arg0) {
      restResult = closure_2_56.create([]).rest(closure_2_46.create());
      let obj = closure_2_56.create([]);
    }
    let obj3 = arg1;
    let obj2 = { args: restResult, returns: null, typeName: null };
    if (!arg1) {
      obj3 = closure_2_46.create();
    }
    obj2.returns = obj3;
    obj2.typeName = closure_2_72.ZodFunction;
    const message = required_error;
    invalid_type_error = undefined;
    required_error = undefined;
    if (required_error) {
      ({ errorMap, invalid_type_error } = required_error);
      required_error = required_error.required_error;
      const description = required_error.description;
      if (errorMap) {
        const _Error = Error;
        const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
        throw error;
      }
      let obj4 = { errorMap: null, description: null };
      if (errorMap) {
        obj4.errorMap = errorMap;
        obj4.description = description;
        let obj8 = obj4;
      } else {
        obj4.errorMap = function errorMap(code, defaultError) {
          defaultError = message.message;
          if ("invalid_enum_value" === code.code) {
            if (null == defaultError) {
              defaultError = defaultError.defaultError;
            }
            const obj2 = { message: defaultError };
            let obj = obj2;
          } else if (undefined === defaultError.data) {
            let defaultError3 = defaultError;
            if (null == defaultError) {
              defaultError3 = required_error;
            }
            if (null === defaultError3) {
              defaultError3 = defaultError.defaultError;
            }
            const obj3 = { message: defaultError3 };
            obj = obj3;
          } else if ("invalid_type" !== code.code) {
            const obj4 = { message: defaultError.defaultError };
            obj = obj4;
          } else {
            let defaultError2 = defaultError;
            if (null == defaultError) {
              defaultError2 = invalid_type_error;
            }
            if (null === defaultError2) {
              defaultError2 = defaultError.defaultError;
            }
            obj = { message: defaultError2 };
          }
          return obj;
        };
        obj4.description = description;
        obj8 = obj4;
      }
    } else {
      obj8 = {};
    }
    const merged = Object.assign(obj8);
    return ZodReadonly(obj2);
  }
};
const items26 = [entry24];
const _module2Result22 = _createClass(ZodFunction, items25, items26);
class ZodLazy {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodLazy;
_inherits(ZodLazy, _module2Result);
const items27 = [
  {
    key: "schema",
    get() {
      const _def = this._def;
      return _def.getter();
    }
  },
  {
    key: "_parse",
    value: function _parse(common) {
      const ctx = this._processInputParams(common).ctx;
      const _def = this._def;
      return _def.getter()._parse({ data: ctx.data, path: ctx.path, parent: ctx });
    }
  }
];
const _module2Result23 = _createClass(ZodLazy, items27);
_module2Result23.create = (getter, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result23({ getter, typeName: obj6.ZodLazy });
};
class ZodLiteral {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodLiteral;
_inherits(ZodLiteral, _module2Result);
const entry25 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (data.data !== this._def.value) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj2 = { received: _getOrReturnCtxResult.data, code: ZodReadonly(16055).ZodIssueCode.invalid_literal, expected: self._def.value };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj2);
      return ZodReadonly(16057).INVALID;
    } else {
      const obj = { status: "valid", value: data.data };
      return obj;
    }
  }
};
const items28 = [
  entry25,
  {
    key: "value",
    get() {
      return this._def.value;
    }
  }
];
const _module2Result24 = _createClass(ZodLiteral, items28);
_module2Result24.create = (value, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result24({ value, typeName: obj6.ZodLiteral });
};
class ZodEnum {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    tmp3Result = tmp3(self, constructResult);
    result = closure_8.set(tmp3Result, undefined);
    return tmp3Result;
  }
}
ZodReadonly = ZodEnum;
_inherits(ZodEnum, _module2Result);
const entry26 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (typeof data.data !== "string") {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj = { expected: null, received: null, code: null };
      const util = ZodReadonly(16056).util;
      obj.expected = util.joinValues(self._def.values);
      obj.received = _getOrReturnCtxResult.parsedType;
      obj.code = ZodReadonly(16055).ZodIssueCode.invalid_type;
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj);
      return ZodReadonly(16057).INVALID;
    } else {
      if (!fn(self, weakMap, "f")) {
        const _Set = Set;
        const set = new Set(self._def.values);
        fn2(self, weakMap, set, "f");
      }
      if (tmp20Result.has(data.data)) {
        return ZodReadonly(16057).OK(data.data);
      } else {
        const _getOrReturnCtxResult1 = self._getOrReturnCtx(data);
        const obj2 = { received: _getOrReturnCtxResult1.data, code: ZodReadonly(16055).ZodIssueCode.invalid_enum_value, options: self._def.values };
        ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult1, obj2);
        return ZodReadonly(16057).INVALID;
      }
      tmp20Result = fn(self, weakMap, "f");
    }
  }
};
const items29 = [
  entry26,
  {
    key: "options",
    get() {
      return this._def.values;
    }
  },
  {
    key: "enum",
    get() {
      const obj = {};
      for (const item10008 of tmp) {
        obj[item10008] = item10008;
        continue;
      }
      return obj;
    }
  },
  {
    key: "Values",
    get() {
      const obj = {};
      for (const item10008 of tmp) {
        obj[item10008] = item10008;
        continue;
      }
      return obj;
    }
  },
  {
    key: "Enum",
    get() {
      const obj = {};
      for (const item10008 of tmp) {
        obj[item10008] = item10008;
        continue;
      }
      return obj;
    }
  },
  {
    key: "extract",
    value: function extract(arg0) {
      const self = this;
      let _def = arg1;
      if (arg1 === undefined) {
        _def = self._def;
      }
      const merged = Object.assign(self._def);
      const merged1 = Object.assign(_def);
      return ZodReadonly.create(arg0, {});
    }
  },
  {
    key: "exclude",
    value: function exclude(arg0) {
      const self = this;
      closure_0 = arg0;
      let _def = arg1;
      if (arg1 === undefined) {
        _def = self._def;
      }
      const options = self.options;
      const found = options.filter((item) => !closure_0.includes(item));
      const merged = Object.assign(self._def);
      const merged1 = Object.assign(_def);
      return ZodReadonly.create(found, {});
    }
  }
];
const _module2Result25 = _createClass(ZodEnum, items29);
const weakMap = new WeakMap();
_module2Result25.create = createZodEnum;
class ZodNativeEnum {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    tmp3Result = tmp3(self, constructResult);
    result = closure_9.set(tmp3Result, undefined);
    return tmp3Result;
  }
}
ZodReadonly = ZodNativeEnum;
_inherits(ZodNativeEnum, _module2Result);
const entry27 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    const util = ZodReadonly(16056).util;
    const validEnumValues = util.getValidEnumValues(this._def.values);
    const _getOrReturnCtxResult = this._getOrReturnCtx(data);
    if (_getOrReturnCtxResult.parsedType !== ZodReadonly(16056).ZodParsedType.string) {
      if (_getOrReturnCtxResult.parsedType !== ZodReadonly(16056).ZodParsedType.number) {
        const util4 = ZodReadonly(16056).util;
        const obj = { expected: null, received: null, code: null };
        const util5 = ZodReadonly(16056).util;
        obj.expected = util5.joinValues(util4.objectValues(validEnumValues));
        obj.received = _getOrReturnCtxResult.parsedType;
        obj.code = ZodReadonly(16055).ZodIssueCode.invalid_type;
        ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj);
        return ZodReadonly(16057).INVALID;
      }
    }
    if (!fn(self, weakMap1, "f")) {
      const _Set = Set;
      const util2 = ZodReadonly(16056).util;
      const set = new Set(util2.getValidEnumValues(self._def.values));
      fn2(self, weakMap1, set, "f");
    }
    if (tmp5Result.has(data.data)) {
      return ZodReadonly(16057).OK(data.data);
    } else {
      const util3 = ZodReadonly(16056).util;
      const obj2 = { received: _getOrReturnCtxResult.data, code: ZodReadonly(16055).ZodIssueCode.invalid_enum_value, options: util3.objectValues(validEnumValues) };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj2);
      return ZodReadonly(16057).INVALID;
    }
    tmp5Result = fn(self, weakMap1, "f");
  }
};
const items30 = [
  entry27,
  {
    key: "enum",
    get() {
      return this._def.values;
    }
  }
];
const _module2Result26 = _createClass(ZodNativeEnum, items30);
const weakMap1 = new WeakMap();
_module2Result26.create = (values, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result26({ values, typeName: obj6.ZodNativeEnum });
};
class ZodPromise {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodPromise;
_inherits(ZodPromise, _module2Result);
const entry28 = {
  key: "unwrap",
  value: function unwrap() {
    return this._def.type;
  }
};
const items31 = [
  entry28,
  {
    key: "_parse",
    value: function _parse(common) {
      const self = this;
      const ctx = this._processInputParams(common).ctx;
      if (ctx.parsedType !== ZodReadonly(16056).ZodParsedType.promise) {
        if (false === ctx.common.async) {
          const obj = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.promise, received: ctx.parsedType };
          ZodReadonly(16057).addIssueToContext(ctx, obj);
          return ZodReadonly(16057).INVALID;
        }
      }
      if (ctx.parsedType === ZodReadonly(16056).ZodParsedType.promise) {
        let data = ctx.data;
      } else {
        data = Promise.resolve(ctx.data);
      }
      return ZodReadonly(16057).OK(data.then((result) => {
        const type = self._def.type;
        return type.parseAsync(result, { path: ctx.path, errorMap: ctx.common.contextualErrorMap });
      }));
    }
  }
];
const _module2Result27 = _createClass(ZodPromise, items31);
_module2Result27.create = (type, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result27({ type, typeName: obj6.ZodPromise });
};
class ZodEffects {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodEffects;
_inherits(ZodEffects, _module2Result);
const entry29 = {
  key: "innerType",
  value: function innerType() {
    return this._def.schema;
  }
};
const items32 = [
  entry29,
  {
    key: "sourceType",
    value: function sourceType() {
      const self = this;
      if (this._def.schema._def.typeName === obj6.ZodEffects) {
        const schema2 = self._def.schema;
        let schema = schema2.sourceType();
      } else {
        schema = self._def.schema;
      }
      return schema;
    }
  },
  {
    key: "_parse",
    value: function _parse(common) {
      let self = this;
      ZodReadonly = this;
      const _processInputParamsResult = this._processInputParams(common);
      const iter = _processInputParamsResult.status;
      const ctx = _processInputParamsResult.ctx;
      let obj = this._def.effect || null;
      let obj2 = {
        addIssue(addIssueResult) {
          ZodReadonly(iter[7]).addIssueToContext(ctx, addIssueResult);
          if (addIssueResult.fatal) {
            iter.abort();
          } else {
            iter.dirty();
          }
        }
      };
      Object.defineProperty(obj2, "path", { get: () => ctx.path, set: undefined });
      const addIssue = obj2.addIssue;
      obj2.addIssue = addIssue.bind(obj2);
      if ("preprocess" === obj.type) {
        const transformResult = obj.transform(ctx.data, obj2);
        if (ctx.common.async) {
          let resolved = Promise.resolve(transformResult);
          ZodReadonly = executeRefinement(function*(arg0) {
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c4 = 2;
                if (0 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const parent = 0;
                    closure_129_0 = undefined;
                    if ("aborted" === tmp2.value) {
                      c4 = 3;
                      const obj4 = { value: closure_0(iter[7]).INVALID, done: true };
                      return obj4;
                    } else {
                      const schema = closure_0._def.schema;
                      const obj5 = { data: tmp32, path: parent.path, parent };
                      c3 = 1;
                      c4 = 1;
                      obj6 = { value: schema._parseAsync(obj5), done: false };
                      return obj6;
                    }
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_129_0 = value;
                  if ("aborted" === closure_129_0.status) {
                    const INVALID = closure_0(iter[7]).INVALID;
                  } else {
                    closure_0(iter[7]).DIRTY(closure_129_0.value);
                  }
                  c4 = 3;
                }
              } catch (tmp25) {
                c4 = tmp;
                throw tmp25;
              }
            }
          });
          return resolved.then(function(result) {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          });
        } else if ("aborted" === iter.value) {
          return ZodReadonly(iter[7]).INVALID;
        } else {
          const schema5 = self._def.schema;
          let obj5 = { data: transformResult, path: ctx.path, parent: ctx };
          const iter4 = schema5._parseSync(obj5);
          if ("aborted" === iter4.status) {
            let INVALID = ZodReadonly(iter[7]).INVALID;
          } else if ("dirty" === iter4.status) {
            INVALID = ZodReadonly(iter[7]).DIRTY(iter4.value);
          } else {
            INVALID = iter4;
          }
          return INVALID;
        }
      } else if ("refinement" === obj.type) {
        executeRefinement = function executeRefinement(arg0) {

        };
        if (false === ctx.common.async) {
          const schema4 = self._def.schema;
          const obj8 = { data: null, path: null, parent: null };
          ({ data: obj7.data, path: obj7.path } = ctx);
          obj8.parent = ctx;
          const iter3 = schema4._parseSync(obj8);
          if ("aborted" === iter3.status) {
            let INVALID1 = ZodReadonly(iter[7]).INVALID;
          } else {
            if ("dirty" === iter3.status) {
              iter.dirty();
            }
            let refinementResult = obj.refinement(iter3.value, obj2);
            if (ctx.common.async) {
              _Promise2.resolve(refinementResult);
            } else if (refinementResult instanceof _Promise2) {
              const _Error2 = Error;
              let error = new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
              throw error;
            }
            INVALID1 = { status: iter.value, value: iter3.value };
          }
          return INVALID1;
        } else {
          const schema3 = self._def.schema;
          const obj9 = { data: null, path: null, parent: null };
          ({ data: obj6.data, path: obj6.path } = ctx);
          obj9.parent = ctx;
          return schema3._parseAsync(obj9).then((status) => {
            if ("aborted" === status.status) {
              let INVALID = status(iter[7]).INVALID;
            } else {
              if ("dirty" === status.status) {
                iter.dirty();
              }
              let resolveResult = status.value;
              if (typeof executeRefinement === "function") {
                const refinementResult = obj.refinement(resolveResult, obj2);
                if (ctx.common.async) {
                  resolveResult = _Promise.resolve(refinementResult);
                } else if (refinementResult instanceof _Promise) {
                  const _Error = Error;
                  const error = new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                  throw error;
                }
                INVALID = resolveResult.then(() => ({ status: iter.value, value: status.value }));
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            return INVALID;
          });
        }
      } else if ("transform" === obj.type) {
        if (false === ctx.common.async) {
          const schema2 = self._def.schema;
          const obj16 = { data: null, path: null, parent: null };
          ({ data: obj4.data, path: obj4.path } = ctx);
          obj16.parent = ctx;
          const iter2 = schema2._parseSync(obj16);
          if (ZodReadonly(iter[7]).isValid(iter2)) {
            const transformResult1 = obj.transform(iter2.value, obj2);
            if (transformResult1 instanceof Promise) {
              let _Error = Error;
              const error1 = new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
              throw error1;
            } else {
              const obj17 = { status: iter.value, value: transformResult1 };
              return obj17;
            }
          } else {
            return iter2;
          }
        } else {
          let schema = self._def.schema;
          const obj18 = { data: null, path: null, parent: null };
          ({ data: obj3.data, path: obj3.path } = ctx);
          obj18.parent = ctx;
          return schema._parseAsync(obj18).then((value) => {
            let nextPromise = value;
            if (ZodReadonly(iter[7]).isValid(value)) {
              const resolved = Promise.resolve(obj.transform(value.value, obj2));
              nextPromise = resolved.then((value) => ({ status: value.value, value }));
            }
            return nextPromise;
          });
        }
      } else {
        const util = ZodReadonly(iter[9]).util;
        util.assertNever(obj);
      }
    }
  }
];
const _module2Result28 = _createClass(ZodEffects, items32);
_module2Result28.create = (schema, effect, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result28({ schema, typeName: obj6.ZodEffects, effect });
};
_module2Result28.createWithPreprocess = (transform, schema, required_error) => {
  const obj = { schema, effect: { type: "preprocess", transform }, typeName: obj6.ZodEffects };
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj3 = { errorMap: null, description: null };
    if (errorMap) {
      obj3.errorMap = errorMap;
      obj3.description = description;
      let obj4 = obj3;
    } else {
      obj3.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj3.description = description;
      obj4 = obj3;
    }
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  return new _module2Result28(obj);
};
class ZodOptional {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodOptional;
_inherits(ZodOptional, _module2Result);
const entry30 = {
  key: "_parse",
  value: function _parse(data) {
    if (_getTypeResult === ZodReadonly(16056).ZodParsedType.undefined) {
      let OKResult = ZodReadonly(16057).OK(undefined);
    } else {
      const innerType = this._def.innerType;
      OKResult = innerType._parse(data);
    }
    return OKResult;
  }
};
const items33 = [
  entry30,
  {
    key: "unwrap",
    value: function unwrap() {
      return this._def.innerType;
    }
  }
];
const _module2Result29 = _createClass(ZodOptional, items33);
_module2Result29.create = (innerType, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result29({ innerType, typeName: obj6.ZodOptional });
};
class ZodNullable {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodNullable;
_inherits(ZodNullable, _module2Result);
const entry31 = {
  key: "_parse",
  value: function _parse(data) {
    if (_getTypeResult === ZodReadonly(16056).ZodParsedType.null) {
      let OKResult = ZodReadonly(16057).OK(null);
    } else {
      const innerType = this._def.innerType;
      OKResult = innerType._parse(data);
    }
    return OKResult;
  }
};
const items34 = [
  entry31,
  {
    key: "unwrap",
    value: function unwrap() {
      return this._def.innerType;
    }
  }
];
const _module2Result30 = _createClass(ZodNullable, items34);
_module2Result30.create = (innerType, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result30({ innerType, typeName: obj6.ZodNullable });
};
class ZodDefault {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodDefault;
_inherits(ZodDefault, _module2Result);
const entry32 = {
  key: "_parse",
  value: function _parse(common) {
    const self = this;
    const ctx = this._processInputParams(common).ctx;
    let data = ctx.data;
    if (ctx.parsedType === ZodReadonly(16056).ZodParsedType.undefined) {
      const _def = self._def;
      data = _def.defaultValue();
    }
    const innerType = self._def.innerType;
    return innerType._parse({ data, path: ctx.path, parent: ctx });
  }
};
const items35 = [
  entry32,
  {
    key: "removeDefault",
    value: function removeDefault() {
      return this._def.innerType;
    }
  }
];
const _module2Result31 = _createClass(ZodDefault, items35);
_module2Result31.create = (innerType, defaultValue) => {
  if (defaultValue) {
    ({ errorMap, invalid_type_error } = defaultValue);
    const required_error = defaultValue.required_error;
    const description = defaultValue.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result31({ innerType, typeName: obj6.ZodDefault, defaultValue: typeof defaultValue.default === "function" ? defaultValue.default : (() => defaultValue.default) });
};
class ZodCatch {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodCatch;
_inherits(ZodCatch, _module2Result);
const entry33 = {
  key: "_parse",
  value: function _parse(common) {
    const self = this;
    const ctx = this._processInputParams(common).ctx;
    let obj = {};
    const merged = Object.assign(ctx);
    const obj2 = {};
    const merged1 = Object.assign(ctx.common);
    obj2.issues = [];
    obj.common = obj2;
    const innerType = this._def.innerType;
    const obj3 = { data: obj.data, path: obj.path, parent: null };
    const merged2 = Object.assign(obj);
    obj3.parent = {};
    const _parseResult = innerType._parse(obj3);
    if (obj(self[7]).isAsync(_parseResult)) {
      let nextPromise = _parseResult.then((status) => {
        if ("valid" === status.status) {
          value = status.value;
        } else {
          const _def = self._def;
          obj = {};
          Object.defineProperty(obj, "error", {
            get: () => {
                const zodError = new obj(self[8]).ZodError(common.common.issues);
                return zodError;
              },
            set: undefined
          });
          obj.input = obj.data;
          value = _def.catchValue(obj);
        }
        return { status: "valid", value };
      });
    } else {
      if ("valid" === _parseResult.status) {
        let catchValueResult = _parseResult.value;
      } else {
        let _def = this._def;
        const obj5 = {};
        Object.defineProperty(obj5, "error", {
          get: () => {
                const zodError = new ZodReadonly(_self[8]).ZodError(obj.common.issues);
                return zodError;
              },
          set: undefined
        });
        obj5.input = obj.data;
        catchValueResult = _def.catchValue(obj5);
      }
      nextPromise = { status: "valid", value: catchValueResult };
    }
    return nextPromise;
  }
};
const items36 = [
  entry33,
  {
    key: "removeCatch",
    value: function removeCatch() {
      return this._def.innerType;
    }
  }
];
const _module2Result32 = _createClass(ZodCatch, items36);
_module2Result32.create = (innerType, catchValue) => {
  const _catch = catchValue;
  if (catchValue) {
    ({ errorMap, invalid_type_error } = catchValue);
    const required_error = catchValue.required_error;
    const description = catchValue.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result32({ innerType, typeName: obj6.ZodCatch, catchValue: typeof catchValue.catch === "function" ? catchValue.catch : (() => _catch.catch) });
};
class ZodNaN {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodNaN;
_inherits(ZodNaN, _module2Result);
const entry34 = {
  key: "_parse",
  value: function _parse(data) {
    const self = this;
    if (_getTypeResult !== ZodReadonly(16056).ZodParsedType.nan) {
      const _getOrReturnCtxResult = self._getOrReturnCtx(data);
      const obj2 = { code: ZodReadonly(16055).ZodIssueCode.invalid_type, expected: ZodReadonly(16056).ZodParsedType.nan, received: _getOrReturnCtxResult.parsedType };
      ZodReadonly(16057).addIssueToContext(_getOrReturnCtxResult, obj2);
      return ZodReadonly(16057).INVALID;
    } else {
      const obj = { status: "valid", value: data.data };
      return obj;
    }
    _getTypeResult = this._getType(data);
  }
};
const items37 = [entry34];
const _module2Result33 = _createClass(ZodNaN, items37);
_module2Result33.create = (required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result33({ typeName: obj6.ZodNaN });
};
class ZodBranded {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodBranded;
_inherits(ZodBranded, _module2Result);
const entry35 = {
  key: "_parse",
  value: function _parse(common) {
    const ctx = this._processInputParams(common).ctx;
    const type = this._def.type;
    return type._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
const items38 = [
  entry35,
  {
    key: "unwrap",
    value: function unwrap() {
      return this._def.type;
    }
  }
];
const _module2Result34 = _createClass(ZodBranded, items38);
class ZodPipeline {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ZodReadonly = ZodPipeline;
_inherits(ZodPipeline, _module2Result);
const entry36 = {
  key: "_parse",
  value: function _parse(common) {
    let self = this;
    ZodReadonly = this;
    const _processInputParamsResult = this._processInputParams(common);
    const status = _processInputParamsResult.status;
    const ctx = _processInputParamsResult.ctx;
    if (ctx.common.async) {
      ZodReadonly = asyncGeneratorStep(async () => {
        if (c3 === 2) {
          c3 = 3;
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
          try {
            c3 = 2;
            if (0 === parent) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_0 = undefined;
                const _in = tmp2._def.in;
                const obj4 = { data: parent.data, path: parent.path, parent };
                parent = 1;
                c3 = 1;
                const obj5 = { value: _in._parseAsync(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_0 = value;
              if ("aborted" === closure_128_0.status) {
                const INVALID = tmp2(status[7]).INVALID;
              } else if ("dirty" === closure_128_0.status) {
                tmp5.dirty();
                tmp2(status[7]).DIRTY(closure_128_0.value);
              } else {
                const out = tmp2._def.out;
                const obj = { data: closure_128_0.value, path: parent.path, parent };
                out._parseAsync(obj);
              }
              c3 = 3;
            }
          } catch (tmp24) {
            c3 = tmp;
            throw tmp24;
          }
        }
      });
      return (function handleAsync() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    } else {
      let _in = self._def.in;
      let obj = { data: null, path: null, parent: null };
      ({ data: obj.data, path: obj.path } = ctx);
      obj.parent = ctx;
      const iter = _in._parseSync(obj);
      if ("aborted" === iter.status) {
        let INVALID = ZodReadonly(status[7]).INVALID;
      } else if ("dirty" === iter.status) {
        status.dirty();
        let obj2 = { status: "dirty", value: iter.value };
        INVALID = obj2;
      } else {
        let out = self._def.out;
        let obj3 = { data: iter.value, path: ctx.path, parent: ctx };
        INVALID = out._parseSync(obj3);
      }
      return INVALID;
    }
  }
};
const items39 = [entry36];
const entry37 = {
  key: "create",
  value: function create(in, out) {
    return ZodReadonly({ in: _in, out, typeName: closure_2_72.ZodPipeline });
  }
};
const items40 = [entry37];
const _module2Result35 = _createClass(ZodPipeline, items39, items40);
class ZodReadonly {
  constructor() {
    self = this;
    tmp = closure_6(this, ZodReadonly);
    tmp2 = closure_3;
    obj = closure_3(ZodReadonly);
    tmp3 = c2;
    if (metroImportDefault()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZodReadonly, _module2Result);
const entry38 = {
  key: "_parse",
  value: function _parse(arg0) {
    const innerType = this._def.innerType;
    const _parseResult = innerType._parse(arg0);
    function freeze(arg0) {

    }
    if (freeze(16057).isAsync(_parseResult)) {
      let nextPromise = _parseResult.then((value) => {
        if (typeof freeze === "function") {
          if (ZodReadonly(closure_1[7]).isValid(value)) {
            const _Object = Object;
            value.value = Object.freeze(value.value);
          }
          return value;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    } else {
      nextPromise = _parseResult;
      if (freeze(16057).isValid(_parseResult)) {
        let _Object = Object;
        _parseResult.value = Object.freeze(_parseResult.value);
        nextPromise = _parseResult;
      }
    }
    return nextPromise;
  }
};
const items41 = [
  entry38,
  {
    key: "unwrap",
    value: function unwrap() {
      return this._def.innerType;
    }
  }
];
const _module2Result36 = _createClass(ZodReadonly, items41);
_module2Result36.create = (innerType, required_error) => {
  closure_0 = required_error;
  invalid_type_error = undefined;
  required_error = undefined;
  if (required_error) {
    ({ errorMap, invalid_type_error } = required_error);
    required_error = required_error.required_error;
    const description = required_error.description;
    if (errorMap) {
      const _Error = Error;
      const error = new Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
      throw error;
    }
    const obj2 = { errorMap: null, description: null };
    if (errorMap) {
      obj2.errorMap = errorMap;
      obj2.description = description;
      let obj3 = obj2;
    } else {
      obj2.errorMap = function errorMap(code, defaultError) {
        defaultError = message.message;
        if ("invalid_enum_value" === code.code) {
          if (null == defaultError) {
            defaultError = defaultError.defaultError;
          }
          const obj2 = { message: defaultError };
          let obj = obj2;
        } else if (undefined === defaultError.data) {
          let defaultError3 = defaultError;
          if (null == defaultError) {
            defaultError3 = required_error;
          }
          if (null === defaultError3) {
            defaultError3 = defaultError.defaultError;
          }
          const obj3 = { message: defaultError3 };
          obj = obj3;
        } else if ("invalid_type" !== code.code) {
          const obj4 = { message: defaultError.defaultError };
          obj = obj4;
        } else {
          let defaultError2 = defaultError;
          if (null == defaultError) {
            defaultError2 = invalid_type_error;
          }
          if (null === defaultError2) {
            defaultError2 = defaultError.defaultError;
          }
          obj = { message: defaultError2 };
        }
        return obj;
      };
      obj2.description = description;
      obj3 = obj2;
    }
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  return new _module2Result36({ innerType, typeName: obj6.ZodReadonly });
};
let obj6 = {};
obj6.ZodString = "ZodString";
obj6.ZodNumber = "ZodNumber";
obj6.ZodNaN = "ZodNaN";
obj6.ZodBigInt = "ZodBigInt";
obj6.ZodBoolean = "ZodBoolean";
obj6.ZodDate = "ZodDate";
obj6.ZodSymbol = "ZodSymbol";
obj6.ZodUndefined = "ZodUndefined";
obj6.ZodNull = "ZodNull";
obj6.ZodAny = "ZodAny";
obj6.ZodUnknown = "ZodUnknown";
obj6.ZodNever = "ZodNever";
obj6.ZodVoid = "ZodVoid";
obj6.ZodArray = "ZodArray";
obj6.ZodObject = "ZodObject";
obj6.ZodUnion = "ZodUnion";
obj6.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
obj6.ZodIntersection = "ZodIntersection";
obj6.ZodTuple = "ZodTuple";
obj6.ZodRecord = "ZodRecord";
obj6.ZodMap = "ZodMap";
obj6.ZodSet = "ZodSet";
obj6.ZodFunction = "ZodFunction";
obj6.ZodLazy = "ZodLazy";
obj6.ZodLiteral = "ZodLiteral";
obj6.ZodEnum = "ZodEnum";
obj6.ZodEffects = "ZodEffects";
obj6.ZodNativeEnum = "ZodNativeEnum";
obj6.ZodOptional = "ZodOptional";
obj6.ZodNullable = "ZodNullable";
obj6.ZodDefault = "ZodDefault";
obj6.ZodCatch = "ZodCatch";
obj6.ZodPromise = "ZodPromise";
obj6.ZodBranded = "ZodBranded";
obj6.ZodPipeline = "ZodPipeline";
obj6.ZodReadonly = "ZodReadonly";
const create = _module2Result1.create;
const create2 = _module2Result2.create;
const create3 = _module2Result4.create;
({ create: exports.object, strictCreate: exports.strictObject } = _module2Result14);
const create4 = _module2Result28.create;

export const ZodType = _module2Result;
export const Schema = _module2Result;
export const ZodSchema = _module2Result;
export { datetimeRegex };
export const ZodString = _module2Result1;
export const ZodNumber = _module2Result2;
export const ZodBigInt = _module2Result3;
export const ZodBoolean = _module2Result4;
export const ZodDate = _module2Result5;
export const ZodSymbol = _module2Result6;
export const ZodUndefined = _module2Result7;
export const ZodNull = _module2Result8;
export const ZodAny = _module2Result9;
export const ZodUnknown = _module2Result10;
export const ZodNever = _module2Result11;
export const ZodVoid = _module2Result12;
export const ZodArray = _module2Result13;
export const ZodObject = _module2Result14;
export const ZodUnion = _module2Result15;
export const ZodDiscriminatedUnion = _module2Result16;
export const ZodIntersection = _module2Result17;
export const ZodTuple = _module2Result18;
export const ZodRecord = _module2Result19;
export const ZodMap = _module2Result20;
export const ZodSet = _module2Result21;
export const ZodFunction = _module2Result22;
export const ZodLazy = _module2Result23;
export const ZodLiteral = _module2Result24;
export const ZodEnum = _module2Result25;
export const ZodNativeEnum = _module2Result26;
export const ZodPromise = _module2Result27;
export const ZodEffects = _module2Result28;
export const ZodTransformer = _module2Result28;
export const ZodOptional = _module2Result29;
export const ZodNullable = _module2Result30;
export const ZodDefault = _module2Result31;
export const ZodCatch = _module2Result32;
export const ZodNaN = _module2Result33;
export const BRAND = Symbol("zod_brand");
export const ZodBranded = _module2Result34;
export const ZodPipeline = _module2Result35;
export const ZodReadonly = _module2Result36;
export { custom };
export const late = { object: _module2Result14.lazycreate };
export const ZodFirstPartyTypeKind = obj6;
export (name) => {
  let f111915 = name;
  let obj = arg1;
  if (arg1 === undefined) {
    let obj2 = { message: null };
    const _HermesInternal = HermesInternal;
    obj2.message = "Input not instance of " + name.name;
    obj = obj2;
  }
  f111915 = (arg0) => arg0 instanceof f111915;
  if (obj === undefined) {
    obj = {};
  }
  c2 = undefined;
  return _module2Result9.create().superRefine((arg0, addIssue) => {
    closure_0 = arg0;
    const promise = closure_0(arg0);
    if (promise instanceof Promise) {
      return promise.then((result) => {
        if (!result) {
          if (typeof obj === "function") {
            let tmpResult = tmp(tmp2);
          } else {
            tmpResult = tmp;
            if (typeof tmp === "string") {
              const obj2 = { message: tmp };
              tmpResult = obj2;
            }
          }
          let tmp4 = tmpResult;
          if (typeof tmpResult === "string") {
            const obj3 = { message: tmpResult };
            tmp4 = obj3;
          }
          let fatal = tmp4.fatal;
          if (null === fatal) {
            fatal = c2;
          }
          let tmp6 = null === fatal;
          if (!tmp6) {
            tmp6 = undefined === fatal;
          }
          if (!tmp6) {
            tmp6 = fatal;
          }
          obj = { code: "custom" };
          const merged = Object.assign(tmp4);
          obj.fatal = tmp6;
          addIssue.addIssue(obj);
        }
      });
    } else if (!promise) {
      if (typeof addIssue === "function") {
        let tmpResult = tmp(arg0);
      } else {
        tmpResult = tmp;
        if (typeof tmp === "string") {
          let obj2 = { message: tmp };
          tmpResult = obj2;
        }
      }
      let tmp3 = tmpResult;
      if (typeof tmpResult === "string") {
        let obj3 = { message: tmpResult };
        tmp3 = obj3;
      }
      let fatal = tmp3.fatal;
      if (null === fatal) {
        fatal = c2;
      }
      obj = { code: "custom" };
      let merged = Object.assign(tmp3);
      obj.fatal = null === fatal || undefined === fatal || fatal;
      addIssue.addIssue(obj);
      const tmp5 = null === fatal || undefined === fatal || fatal;
    }
  });
}
export const string = create;
export const number = create2;
export const nan = _module2Result33.create;
export const bigint = _module2Result3.create;
export const boolean = create3;
export const date = _module2Result5.create;
export const symbol = _module2Result6.create;
export const undefined = _module2Result7.create;
export const null = _module2Result8.create;
export const any = _module2Result9.create;
export const unknown = _module2Result10.create;
export const never = _module2Result11.create;
export const void = _module2Result12.create;
export const array = _module2Result13.create;
export const union = _module2Result15.create;
export const discriminatedUnion = _module2Result16.create;
export const intersection = _module2Result17.create;
export const tuple = _module2Result18.create;
export const record = _module2Result19.create;
export const map = _module2Result20.create;
export const set = _module2Result21.create;
export const function = _module2Result22.create;
export const lazy = _module2Result23.create;
export const literal = _module2Result24.create;
export const enum = _module2Result25.create;
export const nativeEnum = _module2Result26.create;
export const promise = _module2Result27.create;
export const effect = create4;
export const transformer = create4;
export const optional = _module2Result29.create;
export const nullable = _module2Result30.create;
export const preprocess = _module2Result28.createWithPreprocess;
export const pipeline = _module2Result35.create;
export () => create().optional()
export () => create2().optional()
export () => create3().optional()
export const coerce = {
  string(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.coerce = true;
    return _module2Result1.create(obj);
  },
  number(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.coerce = true;
    return _module2Result2.create(obj);
  },
  boolean(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.coerce = true;
    return _module2Result4.create(obj);
  },
  bigint(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.coerce = true;
    return _module2Result3.create(obj);
  },
  date(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.coerce = true;
    return _module2Result5.create(obj);
  }
};
export const NEVER = DIRTY.INVALID;