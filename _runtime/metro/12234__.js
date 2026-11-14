// === Module 12234: ? ===

// Module 12234
import _mod12160 from "module_12160" /* 12160 */;
import _mod12165 from "module_12165" /* 12165 */;
import _slicedToArray from "module_32" /* 32 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;

let self = this;
let ZodCompileUnsupportedError = require;
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
function withParser(_zod, validator) {
  ZodCompileUnsupportedError = validator;
  if (ZodCompileUnsupportedError(12168).isRecursiveSchema(_zod)) {
    const tmp7 = new _moduleResult1("a schema whose subtree contains a reference cycle");
    throw tmp7;
  } else {
    const cloneResult = closure_11.clone(_zod);
    const run = _zod._zod.run;
    let __originalRun = run.__originalRun;
    if (__originalRun == null) {
      __originalRun = run;
    }
    function wrapped(value, arg1) {
      let async;
      if (arg1 != null) {
        async = arg1.async;
      }
      if (!async) {
        let direction;
        if (arg1 != null) {
          direction = arg1.direction;
        }
        if ("backward" !== direction) {
          let skipChecks;
          if (arg1 != null) {
            skipChecks = arg1.skipChecks;
          }
          if (!skipChecks) {
            let tmp4;
            if (arg1 != null) {
              tmp4 = arg1[closure_12];
            }
            if (!tmp4) {
              if (arg1) {
                if (ZodCompileUnsupportedError(12168).isBackEdge(arg1, value.value)) {
                  return __originalRun(value, arg1);
                }
              }
              const tmp9 = validator(value.value);
              if (tmp9 !== exports.INVALID) {
                value.value = tmp9;
                let tmp13 = value;
              } else {
                if (arg1) {
                  arg1[closure_12] = true;
                }
                tmp13 = __originalRun(value, arg1);
              }
              return tmp13;
            }
          }
        }
      }
      return __originalRun(value, arg1);
    }
    wrapped.__originalRun = __originalRun;
    cloneResult._zod.bag.fallbackRun = __originalRun;
    cloneResult._zod.bag.validator = validator;
    cloneResult._zod.run = wrapped;
    if (!run.__originalRun) {
      closure_129_0 = validator;
      if (typeof _zod.safeParse === "function") {
        const safeParse = _zod.safeParse;
        cloneResult.safeParse = (arg0, arg1) => {
          const tmp = validator(arg0);
          if (tmp !== exports.INVALID) {
            const obj = { success: true, data: tmp };
            let tmp4 = obj;
          } else {
            tmp4 = __originalRun(arg0, arg1);
          }
          return tmp4;
        };
      }
      if (typeof _zod.parse === "function") {
        const parse = _zod.parse;
        cloneResult.parse = (arg0, arg1) => {
          let tmp = validator(arg0);
          if (tmp === exports.INVALID) {
            tmp = dependencyMap(arg0, arg1);
          }
          return tmp;
        };
      }
    }
    return cloneResult;
  }
}
function compileFn(_zod, assertOnly) {
  try {
    if (ZodCompileUnsupportedError(12168).isRecursiveSchema(_zod)) {
      const tmp54 = new _moduleResult1("a schema whose subtree contains a reference cycle");
      throw tmp54;
    } else {
      const obj = { constants: null, constantCounter: 0, varCounter: 0, definite: true };
      const _Map = Map;
      const map = new Map();
      obj.constants = map;
      const doc = new ZodCompileUnsupportedError(12167).Doc(["input"]);
      assertOnly = undefined;
      if (assertOnly != null) {
        assertOnly = assertOnly.assertOnly;
      }
      const tmp14Result = generateCheck(doc, obj, _zod, "input", !assertOnly);
      let str2 = "return true;";
      if (null !== tmp14Result) {
        const _HermesInternal = HermesInternal;
        str2 = "return " + tmp14Result + ";";
      }
      doc.write(str2);
      constants = obj.constants;
      items = ["INVALID"];
      HermesBuiltin.arraySpread(constants.keys(), 1);
      const items1 = [exports.INVALID];
      const constants2 = obj.constants;
      HermesBuiltin.arraySpread(constants2.values(), 1);
      const content = doc.content;
      const joined = content.join("\n");
      let debug;
      if (assertOnly != null) {
        debug = assertOnly.debug;
      }
      let str6 = "";
      if (debug) {
        let combined = joined;
        if (items.length > 0) {
          const _HermesInternal2 = HermesInternal;
          combined = "// Constants: " + items.join(", ") + "\n" + joined;
        }
        str6 = combined;
      }
      const _Function = Function;
      const _HermesInternal3 = HermesInternal;
      try {
        const items2 = [];
        items2[HermesBuiltin.arraySpread(items, 0)] = tmp31;
        const items3 = [];
        HermesBuiltin.arraySpread(items1, 0);
        const applyResult1 = HermesBuiltin.apply(items3, undefined);
        let debug1;
        if (assertOnly != null) {
          debug1 = assertOnly.debug;
        }
        if (debug1) {
          applyResult1.code = str6;
        }
        applyResult1.definite = obj.definite;
        return applyResult1;
      } catch (tmp45) {
        const tmp49 = new _moduleResult1("this schema (generated code failed to evaluate: " + tmp45.message + ")");
        throw tmp49;
      }
    }
  } catch (err) {
  }
}
function addConstant(constantCounter, fn2) {
  const obj = constantCounter.constants[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = _slicedToArray(tmp, 2);
    if (tmp3[1] === fn2) {
      obj.return();
      return tmp4;
    }
  }
  constantCounter.constantCounter = +constantCounter.constantCounter + 1;
  constants = constantCounter.constants;
  const result = constants.set(`c${tmp6}`, fn2);
  return `c${+constantCounter.constantCounter}`;
}
function newVar(varCounter) {
  varCounter.varCounter = +varCounter.varCounter + 1;
  return "v" + +varCounter.varCounter;
}
function runtimeRun(_zod, value) {
  _zod = _zod._zod;
  const runResult = _zod.run({ value, issues: [] }, {});
  if (runResult) {
    if (typeof runResult.then === "function") {
      return exports.INVALID;
    }
  }
  if (0 === runResult.issues.length) {
    let INVALID = runResult.value;
  } else {
    INVALID = exports.INVALID;
  }
  return INVALID;
}
function compileChild(write, varCounter, def2, def2) {
  let flag = def22;
  if (def22 === undefined) {
    flag = true;
  }
  ({ constantCounter, varCounter } = varCounter);
  try {
    return generateCheck(write, varCounter, def2, def2, flag);
  } catch (tmp15) {
    if (tmp15 instanceof _moduleResult1) {
      if (tmp15.islandable) {
        tmp5.content.length = tmp7;
        if (tmp4.constants.size > tmp8) {
          const _Array = Array;
          constants = tmp4.constants;
          const substr = Array.from(constants.keys()).slice(tmp8);
          for (const item10039 of substr) {
            let constants2 = tmp4.constants;
            let deleteResult = constants2.delete(item10039);
            continue;
          }
          const arr = Array.from(constants.keys());
        }
        tmp4.constantCounter = tmp6;
        tmp4.varCounter = tmp;
        return (function emitRuntimeIsland(write, varCounter, fn2, arg3) {
          varCounter.definite = false;
          varCounter.varCounter = +varCounter.varCounter + 1;
          const text = `v${tmp2}`;
          write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, runtimeRun) + "(" + addConstant(varCounter, fn2) + ", " + arg3 + ");");
          write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) return INVALID;");
          return `v${+varCounter.varCounter}`;
        })(tmp5, tmp4, tmp3, tmp2);
      }
    }
    throw tmp15;
  }
}
function codePointLengthVar(write, varCounter, def2, arg3) {
  varCounter.varCounter = +varCounter.varCounter + 1;
  const text = `v${tmp}`;
  write.write("const " + `v${+varCounter.varCounter}` + " = typeof " + def2 + " === \"string\" && " + arg3 + " ? " + addConstant(varCounter, closure_11.codePointLength) + "(" + def2 + ") : " + def2 + ".length;");
  return `v${+varCounter.varCounter}`;
}
function numericOperand(scrollLength, check) {
  if (typeof scrollLength === "number") {
    const _Number = Number;
    if (Number.isFinite(scrollLength)) {
      const _HermesInternal = HermesInternal;
      return "" + scrollLength;
    }
  }
  throw new _moduleResult1("" + check + " bound of type " + typeof scrollLength);
}
function generateGreaterThanCheck(write, constantCounter, inclusive, def2) {
  let str = "<=";
  if (inclusive.inclusive) {
    str = "<";
  }
  value = inclusive.value;
  if (typeof value === "bigint") {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + value + "n";
  } else if (typeof value === "number") {
    const _Number2 = Number;
    if (Number.isNaN(value)) {
      const tmp18 = new _moduleResult1("comparison check with NaN bound");
      throw tmp18;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + value;
    }
  } else {
    const _Date = Date;
    if (value instanceof Date) {
      const _Number = Number;
      if (Number.isNaN(value.getTime())) {
        const tmp12 = new _moduleResult1("comparison check with Invalid Date bound");
        throw tmp12;
      } else {
        combined = addConstant(constantCounter, value);
      }
    } else {
      const tmp4 = new _moduleResult1("comparison check bound of type " + typeof value);
      throw tmp4;
    }
  }
  write.write("if (" + def2 + " " + str + " " + combined + ") return INVALID;");
}
function generateLessThanCheck(write, constantCounter, inclusive, def2) {
  let str = ">=";
  if (inclusive.inclusive) {
    str = ">";
  }
  value = inclusive.value;
  if (typeof value === "bigint") {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + value + "n";
  } else if (typeof value === "number") {
    const _Number2 = Number;
    if (Number.isNaN(value)) {
      const tmp18 = new _moduleResult1("comparison check with NaN bound");
      throw tmp18;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + value;
    }
  } else {
    const _Date = Date;
    if (value instanceof Date) {
      const _Number = Number;
      if (Number.isNaN(value.getTime())) {
        const tmp12 = new _moduleResult1("comparison check with Invalid Date bound");
        throw tmp12;
      } else {
        combined = addConstant(constantCounter, value);
      }
    } else {
      const tmp4 = new _moduleResult1("comparison check bound of type " + typeof value);
      throw tmp4;
    }
  }
  write.write("if (" + def2 + " " + str + " " + combined + ") return INVALID;");
}
function generateMultipleOfCheck(write, constantCounter, value, def2) {
  if (typeof value.value === "bigint") {
    const _BigInt = BigInt;
    if (value.value === BigInt(0)) {
      const tmp16 = new _moduleResult1("multiple_of check with a zero divisor");
      throw tmp16;
    } else {
      const _HermesInternal4 = HermesInternal;
      write.write("if (" + def2 + " % " + value.value + "n !== 0n) return INVALID;");
    }
  } else {
    const tmp21 = addConstant(constantCounter, closure_11.floatSafeRemainder);
    value = value.value;
    if (typeof value === "number") {
      const _Number = Number;
      if (Number.isFinite(value)) {
        const _HermesInternal = HermesInternal;
        const _HermesInternal2 = HermesInternal;
        tmp22("if (" + tmp21 + "(" + def2 + ", " + "" + value + ") !== 0) return INVALID;");
      }
    }
    const _HermesInternal3 = HermesInternal;
    const tmp8 = new _moduleResult1("" + "multiple_of" + " bound of type " + typeof value);
    throw tmp8;
  }
}
function generateNumberFormatCheck(write, format, def2) {
  format = format.format;
  if ("safeint" === format) {
    const _HermesInternal6 = HermesInternal;
    write.write("if (!Number.isSafeInteger(" + def2 + ")) return INVALID;");
  } else if ("int32" === format) {
    const _HermesInternal5 = HermesInternal;
    write.write("if (!Number.isInteger(" + def2 + ") || " + def2 + " < -2147483648 || " + def2 + " > 2147483647) return INVALID;");
  } else if ("uint32" === format) {
    const _HermesInternal4 = HermesInternal;
    write.write("if (!Number.isInteger(" + def2 + ") || " + def2 + " < 0 || " + def2 + " > 4294967295) return INVALID;");
  } else if ("float32" === format) {
    const _HermesInternal3 = HermesInternal;
    write.write("if (!Number.isFinite(" + def2 + ") || " + def2 + " < -3.4028234663852886e38 || " + def2 + " > 3.4028234663852886e38) return INVALID;");
  } else if ("float64" === format) {
    const _HermesInternal2 = HermesInternal;
    write.write("if (!Number.isFinite(" + def2 + ")) return INVALID;");
  } else {
    const _HermesInternal = HermesInternal;
    const tmp5 = new _moduleResult1("number format " + format);
    throw tmp5;
  }
}
function generateBigIntFormatCheck(write, format, def2) {
  format = format.format;
  if (format) {
    if ("int64" === format) {
      const _HermesInternal3 = HermesInternal;
      write.write("if (" + def2 + " < -9223372036854775808n || " + def2 + " > 9223372036854775807n) return INVALID;");
    } else if ("uint64" === format) {
      const _HermesInternal2 = HermesInternal;
      write.write("if (" + def2 + " < 0n || " + def2 + " > 18446744073709551615n) return INVALID;");
    } else {
      const _HermesInternal = HermesInternal;
      const tmp7 = new _moduleResult1("bigint format " + format);
      throw tmp7;
    }
  }
}
function generateMimeTypeCheck(write, constantCounter, mime, def2) {
  mime = mime.mime;
  if (mime) {
    if (mime.length > 0) {
      const _Set = Set;
      set = new Set(mime);
      const _HermesInternal = HermesInternal;
      write.write("if (!" + addConstant(constantCounter, set) + ".has(" + def2 + ".type)) return INVALID;");
    }
  }
}
function generatePropertiesChecks(write, constantCounter, when, def2) {
  if (when.when) {
    const tmp29 = new _moduleResult1("check with a custom \"when\" condition");
    throw tmp29;
  } else {
    const _HermesInternal = HermesInternal;
    write.write("if (" + def2 + " == null) return INVALID;");
    const shape = when.shape;
    const _Reflect = Reflect;
    const ownKeysResult = Reflect.ownKeys(shape);
    const iter = ownKeysResult[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp10 = nextResult;
      if (typeof nextResult === "symbol") {
        let escResult = addConstant(constantCounter, tmp10);
      } else {
        escResult = closure_11.esc(tmp10);
      }
      let tmp15 = newVar(constantCounter);
      let _HermesInternal2 = HermesInternal;
      let str7 = "const ";
      let str8 = " = ";
      let str9 = "[";
      let str10 = "];";
      let writeResult1 = write.write("const " + tmp15 + " = " + def2 + "[" + escResult + "];");
      let flag = false;
      let tmp25 = compileChild(write, constantCounter, shape[tmp10], tmp15, false);
      continue;
    }
  }
}
function generatePropertyCheck(write, varCounter, schema, def2) {
  generateCheck(write, varCounter, schema.schema, "" + def2 + "[" + JSON.stringify(schema.property) + "]");
}
function generateOverwriteCheck(write, constantCounter, _zod, def2, arg4) {
  const tx = _zod._zod.def.tx;
  if (tx) {
    let tmp6 = typeof tx === "function";
    if (typeof tx === "function") {
      let tmp8 = "AsyncFunction" === tx.constructor.name;
      if (!tmp8) {
        const _Symbol = Symbol;
        tmp8 = "AsyncFunction" === tx[Symbol.toStringTag];
      }
      tmp6 = tmp8;
    }
    if (tmp6) {
      const tmp20 = new _moduleResult("z.compile: async overwrite transforms are not supported");
      throw tmp20;
    } else {
      const _HermesInternal = HermesInternal;
      write.write("const " + arg4 + " = " + addConstant(constantCounter, tx) + "(" + def2 + ");");
    }
  } else {
    const tmp4 = new _moduleResult1("overwrite check without a transform function");
    throw tmp4;
  }
}
function throwAsync() {
  const ZodAsyncError = new ZodCompileUnsupportedError(12159).$ZodAsyncError();
  throw ZodAsyncError;
}
function pushIssue(arg0) {
  const issues = this.issues;
  issues.push(arg0);
}
function generateCustomRefineCheck(write, varCounter, _zod, def2) {
  const def = _zod._zod.def;
  if (def.fn) {
    let tmp22 = typeof fn === "function";
    if (typeof def.fn === "function") {
      let tmp24 = "AsyncFunction" === fn.constructor.name;
      if (!tmp24) {
        const _Symbol2 = Symbol;
        tmp24 = "AsyncFunction" === fn[Symbol.toStringTag];
      }
      tmp22 = tmp24;
    }
    if (tmp22) {
      const tmp42 = new closure_13("z.compile: async .refine() predicates are not supported");
      throw tmp42;
    } else {
      varCounter.definite = false;
      const tmp28 = addConstant(varCounter, throwAsync);
      varCounter.varCounter = +varCounter.varCounter + 1;
      const text = `v${tmp29}`;
      const _HermesInternal3 = HermesInternal;
      write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, def.fn) + "(" + def2 + ");");
      const _HermesInternal4 = HermesInternal;
      write.write("if (" + `v${+varCounter.varCounter}` + " instanceof Promise) " + tmp28 + "();");
      const _HermesInternal5 = HermesInternal;
      write.write("if (!" + `v${+varCounter.varCounter}` + ") return INVALID;");
      return def2;
    }
  } else if (_zod._zod.check) {
    let check = _zod._zod.check;
    let tmp6 = typeof check === "function";
    if (typeof check === "function") {
      let tmp8 = "AsyncFunction" === check.constructor.name;
      if (!tmp8) {
        const _Symbol = Symbol;
        tmp8 = "AsyncFunction" === check[Symbol.toStringTag];
      }
      tmp6 = tmp8;
    }
    if (tmp6) {
      const tmp20 = new closure_13("z.compile: async .superRefine() / check functions are not supported");
      throw tmp20;
    } else {
      check = _zod._zod.check;
      varCounter.definite = false;
      varCounter.varCounter = +varCounter.varCounter + 1;
      const text1 = `v${tmp10}`;
      const _HermesInternal = HermesInternal;
      write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, (value) => {
        const obj = { value, issues: [], addIssue: pushIssue };
        if (check(obj) instanceof Promise) {
          const ZodAsyncError = new ZodCompileUnsupportedError(12159).$ZodAsyncError();
          throw ZodAsyncError;
        } else {
          if (0 === obj.issues.length) {
            let INVALID = obj.value;
          } else {
            INVALID = exports.INVALID;
          }
          return INVALID;
        }
      }) + "(" + def2 + ");");
      const _HermesInternal2 = HermesInternal;
      write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) return INVALID;");
      return `v${+varCounter.varCounter}`;
    }
  } else {
    const tmp4 = new _moduleResult1("custom check without a predicate or check function");
    throw tmp4;
  }
}
function generateStringFormatCheck(write, varCounter, def12, def2) {
  if (flag === undefined) {
    flag = true;
  }
  const format = def12.format;
  if ("base64" === format) {
    const _HermesInternal25 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, ZodCompileUnsupportedError(12163).isValidBase64) + "(" + def2 + ")) return INVALID;");
    return def2;
  } else if ("base64url" === format) {
    const _HermesInternal24 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, ZodCompileUnsupportedError(12163).isValidBase64URL) + "(" + def2 + ")) return INVALID;");
    return def2;
  } else if ("jwt" === format) {
    const tmp113 = addConstant(varCounter, ZodCompileUnsupportedError(12163).isValidJWT);
    let alg = def12.alg;
    if (alg == null) {
      alg = null;
    }
    const _HermesInternal23 = HermesInternal;
    write.write("if (!" + tmp113 + "(" + def2 + ", " + addConstant(varCounter, alg) + ")) return INVALID;");
    return def2;
  } else if ("ipv6" === format) {
    const _HermesInternal22 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, ZodCompileUnsupportedError(12163).isValidIPv6) + "(" + def2 + ")) return INVALID;");
    return def2;
  } else if ("cidrv6" === format) {
    const _HermesInternal21 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, ZodCompileUnsupportedError(12163).isValidCIDRv6) + "(" + def2 + ")) return INVALID;");
    return def2;
  } else if ("credit_card" === format) {
    const _HermesInternal20 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, ZodCompileUnsupportedError(12163).isValidCreditCard) + "(" + def2 + ")) return INVALID;");
    return def2;
  } else if ("iban" === format) {
    const _HermesInternal19 = HermesInternal;
    write.write("if (!" + addConstant(varCounter, ZodCompileUnsupportedError(12163).isValidIBAN) + "(" + def2 + ")) return INVALID;");
    return def2;
  } else {
    if ("url" !== format) {
      if ("httpurl" !== format) {
        if (!def12.normalize) {
          if (undefined === def12.hostname) {
            if (undefined === def12.protocol) {
              if (def12.fn) {
                let tmp40 = typeof fn === "function";
                if (typeof fn === "function") {
                  let tmp42 = "AsyncFunction" === fn.constructor.name;
                  if (!tmp42) {
                    const _Symbol = Symbol;
                    tmp42 = "AsyncFunction" === fn[Symbol.toStringTag];
                  }
                  tmp40 = tmp42;
                }
                if (tmp40) {
                  const _HermesInternal10 = HermesInternal;
                  const tmp51 = new _moduleResult1("async string format " + format);
                  throw tmp51;
                } else {
                  const _HermesInternal9 = HermesInternal;
                  write.write("if (!" + addConstant(varCounter, fn) + "(" + def2 + ")) return INVALID;");
                  return def2;
                }
              } else {
                if (set1.has(format)) {
                  if (def12.pattern) {
                    const tmp34 = addConstant(varCounter, def12.pattern);
                    const _HermesInternal7 = HermesInternal;
                    write.write("" + tmp34 + ".lastIndex = 0;");
                    const _HermesInternal8 = HermesInternal;
                    write.write("if (!" + tmp34 + ".test(" + def2 + ")) return INVALID;");
                    return def2;
                  }
                }
                const format2 = def12.format;
                if ("regex" === format2) {
                  const tmp31 = new _moduleResult1("regex format without a pattern");
                  throw tmp31;
                } else {
                  if ("lowercase" === format2) {
                    const _HermesInternal6 = HermesInternal;
                    write.write("if (" + def2 + " !== " + def2 + ".toLowerCase()) return INVALID;");
                  } else if ("uppercase" === format2) {
                    const _HermesInternal5 = HermesInternal;
                    write.write("if (" + def2 + " !== " + def2 + ".toUpperCase()) return INVALID;");
                  } else if ("includes" === format2) {
                    const _HermesInternal4 = HermesInternal;
                    write.write("if (!" + def2 + ".includes(" + closure_11.esc(def12.includes) + ")) return INVALID;");
                  } else if ("starts_with" === format2) {
                    const prefix = def12.prefix;
                    const _HermesInternal3 = HermesInternal;
                    write.write("if (" + def2 + ".slice(0, " + prefix.length + ") !== " + closure_11.esc(prefix) + ") return INVALID;");
                  } else if ("ends_with" === format2) {
                    const suffix = def12.suffix;
                    const _HermesInternal2 = HermesInternal;
                    write.write("if (" + def2 + ".slice(-" + suffix.length + ") !== " + closure_11.esc(suffix) + ") return INVALID;");
                  } else {
                    const _HermesInternal = HermesInternal;
                    const tmp6 = new _moduleResult1("string format " + format2);
                    throw tmp6;
                  }
                  return def2;
                }
              }
            }
          }
        }
      }
    }
    const tmp56 = addConstant(varCounter, ZodCompileUnsupportedError(12163).validateURL);
    const tmp57 = addConstant(varCounter, def12);
    varCounter.varCounter = +varCounter.varCounter + 1;
    const text = `v${tmp58}`;
    varCounter.varCounter = +varCounter.varCounter + 1;
    const text1 = `v${tmp60}`;
    const _HermesInternal11 = HermesInternal;
    write.write("const " + `v${+varCounter.varCounter}` + " = " + def2 + ".trim();");
    const _HermesInternal12 = HermesInternal;
    write.write("const " + `v${+varCounter.varCounter}` + " = " + tmp56 + "(" + `v${+varCounter.varCounter}` + ", " + tmp57 + ");");
    const _HermesInternal13 = HermesInternal;
    write.write("if (typeof " + `v${+varCounter.varCounter}` + " === \"number\") return INVALID;");
    if (undefined !== def12.hostname) {
      const _HermesInternal14 = HermesInternal;
      write.write("if (!" + addConstant(varCounter, ZodCompileUnsupportedError(12163).urlHostnameOk) + "(" + `v${tmp60}` + ", " + tmp57 + ".hostname)) return INVALID;");
    }
    if (undefined !== def12.protocol) {
      const _HermesInternal15 = HermesInternal;
      write.write("if (!" + addConstant(varCounter, ZodCompileUnsupportedError(12163).urlProtocolOk) + "(" + text1 + ", " + tmp57 + ".protocol)) return INVALID;");
    }
    if (flag) {
      varCounter.varCounter = +varCounter.varCounter + 1;
      if (def12.normalize) {
        const _HermesInternal17 = HermesInternal;
        let combined = "" + text1 + ".href";
      } else {
        const _HermesInternal16 = HermesInternal;
        combined = "" + addConstant(varCounter, ZodCompileUnsupportedError(12163).stripTabAndNewline) + "(" + text + ")";
      }
      const text2 = `v${tmp79}`;
      const _HermesInternal18 = HermesInternal;
      write.write("const " + `v${+varCounter.varCounter}` + " = " + combined + ";");
      return `v${+varCounter.varCounter}`;
    } else {
      return null;
    }
  }
}
function generateCheck(write, varCounter, innerType, def2) {
  let flag = def22;
  if (def22 === undefined) {
    flag = true;
  }
  let def = innerType._zod.def;
  let type = def.type;
  if (def.coerce) {
    const _HermesInternal83 = HermesInternal;
    const tmp476 = new _moduleResult1("coercion (z.coerce." + type + "())");
    throw tmp476;
  } else {
    if (!flag) {
      let checks = def.checks;
      length = undefined;
      if (checks != null) {
        length = checks.length;
      }
      flag = length;
    }
    let str = def2;
    switch (type) {
      case "string":
        if (flag === undefined) {
          flag = true;
        }
        const _HermesInternal81 = HermesInternal;
        write.write("if (typeof " + def2 + " !== \"string\") return INVALID;");
        const def12 = innerType._zod.def;
        let tmp454 = def2;
        if (undefined !== def12.format) {
          tmp454 = generateStringFormatCheck(write, varCounter, def12, def2, flag);
        }
        str = tmp454;
        let tmp461 = null;
        if (null !== str) {
          tmp461 = (function generateChecks(write, varCounter, _zod, def2) {
            const checks = _zod._zod.def.checks;
            if (checks) {
              if (0 !== checks.length) {
                let tmp22 = def2;
                const iter = checks[Symbol.iterator]();
                const nextResult = iter.next();
                while (iter !== undefined) {
                  let tmp4 = nextResult;
                  let def = nextResult._zod.def;
                  let arr2 = def;
                  if (def.when) {
                    if (!set.has(arr2.check)) {
                      let tmp8 = new.target;
                      let str = "check with a custom \"when\" condition";
                      let tmp9 = new.target;
                      let tmp10 = new _moduleResult1("check with a custom \"when\" condition");
                      throw tmp10;
                    }
                  }
                  switch (arr2.check) {
                    case "greater_than":
                      let tmp127 = generateGreaterThanCheck(write, varCounter, arr2, tmp22);
                      continue;
                    break;
                    case "less_than":
                      let tmp121 = generateLessThanCheck(write, varCounter, arr2, tmp22);
                    break;
                    case "multiple_of":
                      let tmp115 = generateMultipleOfCheck(write, varCounter, arr2, tmp22);
                    break;
                    case "number_format":
                      let tmp109 = generateNumberFormatCheck(write, arr2, tmp22);
                    break;
                    case "min_length":
                      let tmp95 = numericOperand(arr2.minimum, "min_length");
                      let _HermesInternal8 = HermesInternal;
                      let str21 = "";
                      let str22 = ".length >= ";
                      let str23 = " && ";
                      let str24 = ".length < ";
                      let _HermesInternal9 = HermesInternal;
                      let str25 = "if (";
                      let str26 = " < ";
                      let str27 = ") return INVALID;";
                      let writeResult = write.write("if (" + codePointLengthVar(write, varCounter, tmp22, "" + tmp22 + ".length >= " + tmp95 + " && " + tmp22 + ".length < " + 2 * arr2.minimum) + " < " + tmp95 + ") return INVALID;");
                    break;
                    case "max_length":
                      let tmp85 = numericOperand(arr2.maximum, "max_length");
                      let _HermesInternal6 = HermesInternal;
                      let _HermesInternal7 = HermesInternal;
                      let str18 = "if (";
                      let str19 = " > ";
                      let str20 = ") return INVALID;";
                      let writeResult1 = write.write("if (" + codePointLengthVar(write, varCounter, tmp22, "" + tmp22 + ".length > " + tmp85) + " > " + tmp85 + ") return INVALID;");
                    break;
                    case "length_equals":
                      let tmp72 = numericOperand(arr2.length, "length_equals");
                      let _HermesInternal4 = HermesInternal;
                      let str11 = "";
                      let str12 = ".length >= ";
                      let str13 = " && ";
                      let str14 = ".length <= ";
                      let _HermesInternal5 = HermesInternal;
                      let str15 = "if (";
                      let str16 = " !== ";
                      let str17 = ") return INVALID;";
                      let writeResult2 = write.write("if (" + codePointLengthVar(write, varCounter, tmp22, "" + tmp22 + ".length >= " + tmp72 + " && " + tmp22 + ".length <= " + 2 * arr2.length) + " !== " + tmp72 + ") return INVALID;");
                    break;
                    case "min_size":
                      let _HermesInternal3 = HermesInternal;
                      let str8 = "if (";
                      let str9 = ".size < ";
                      let str10 = ") return INVALID;";
                      let writeResult3 = write.write("if (" + tmp22 + ".size < " + numericOperand(arr2.minimum, "min_size") + ") return INVALID;");
                    break;
                    case "max_size":
                      let _HermesInternal2 = HermesInternal;
                      let str5 = "if (";
                      let str6 = ".size > ";
                      let str7 = ") return INVALID;";
                      let writeResult4 = write.write("if (" + tmp22 + ".size > " + numericOperand(arr2.maximum, "max_size") + ") return INVALID;");
                    break;
                    case "size_equals":
                      let _HermesInternal = HermesInternal;
                      let str2 = "if (";
                      let str3 = ".size !== ";
                      let str4 = ") return INVALID;";
                      let writeResult5 = write.write("if (" + tmp22 + ".size !== " + numericOperand(arr2.size, "size_equals") + ") return INVALID;");
                    break;
                    case "string_format":
                      tmp22 = generateStringFormatCheck(write, varCounter, arr2, tmp22);
                    break;
                    case "custom":
                      tmp22 = generateCustomRefineCheck(write, varCounter, tmp4, tmp22);
                    break;
                    case "bigint_format":
                      let tmp44 = generateBigIntFormatCheck(write, arr2, tmp22);
                    break;
                    case "mime_type":
                      let tmp40 = generateMimeTypeCheck(write, varCounter, arr2, tmp22);
                    break;
                    case "property":
                      let tmp34 = generatePropertyCheck(write, varCounter, arr2, tmp22);
                    break;
                    case "properties":
                      let tmp28 = generatePropertiesChecks(write, varCounter, arr2, tmp22);
                    break;
                    case "overwrite":
                      let tmp14 = newVar(varCounter);
                      let tmp21 = generateOverwriteCheck(write, varCounter, tmp4, tmp22, tmp14);
                      tmp22 = tmp14;
                    break;
                    default:
                      let _HermesInternal10 = HermesInternal;
                      let str28 = "check type ";
                      let tmp129 = new.target;
                      let tmp130 = new.target;
                      let tmp131 = new _moduleResult1("check type " + def.check);
                      throw tmp131;
                  }
                }
                return tmp22;
              }
            }
            return def2;
          })(write, varCounter, innerType, str);
        }
        return tmp461;
      case "number":
        const _HermesInternal74 = HermesInternal;
        write.write("if (typeof " + def2 + " !== \"number\" || !Number.isFinite(" + def2 + ")) return INVALID;");
        const def11 = innerType._zod.def;
        let format2 = "number_format" === def11.check;
        if (format2) {
          format2 = def11.format;
        }
        str = def2;
        if (format2) {
          const format3 = def11.format;
          if ("safeint" === format3) {
            const _HermesInternal80 = HermesInternal;
            write.write("if (!Number.isSafeInteger(" + def2 + ")) return INVALID;");
            str = def2;
          } else if ("int32" === format3) {
            const _HermesInternal79 = HermesInternal;
            write.write("if (!Number.isInteger(" + def2 + ") || " + def2 + " < -2147483648 || " + def2 + " > 2147483647) return INVALID;");
            str = def2;
          } else if ("uint32" === format3) {
            const _HermesInternal78 = HermesInternal;
            write.write("if (!Number.isInteger(" + def2 + ") || " + def2 + " < 0 || " + def2 + " > 4294967295) return INVALID;");
            str = def2;
          } else if ("float32" === format3) {
            const _HermesInternal77 = HermesInternal;
            write.write("if (!Number.isFinite(" + def2 + ") || " + def2 + " < -3.4028234663852886e38 || " + def2 + " > 3.4028234663852886e38) return INVALID;");
            str = def2;
          } else if ("float64" === format3) {
            const _HermesInternal76 = HermesInternal;
            write.write("if (!Number.isFinite(" + def2 + ")) return INVALID;");
            str = def2;
          } else {
            const _HermesInternal75 = HermesInternal;
            const tmp436 = new _moduleResult1("number format " + format3);
            throw tmp436;
          }
        }
      break;
      case "boolean":
        const _HermesInternal73 = HermesInternal;
        write.write("if (typeof " + def2 + " !== \"boolean\") return INVALID;");
        str = def2;
      break;
      case "bigint":
        const _HermesInternal71 = HermesInternal;
        write.write("if (typeof " + def2 + " !== \"bigint\") return INVALID;");
        const def10 = innerType._zod.def;
        str = def2;
        if (def10.format) {
          const format = def10.format;
          if ("int64" === format) {
            const _HermesInternal72 = HermesInternal;
            write.write("if (" + def2 + " < -9223372036854775808n || " + def2 + " > 9223372036854775807n) return INVALID;");
            str = def2;
          } else {
            str = def2;
            if ("uint64" === format) {
              const _HermesInternal87 = HermesInternal;
              write.write("if (" + def2 + " < 0n || " + def2 + " > 18446744073709551615n) return INVALID;");
              str = def2;
            }
          }
        }
      break;
      case "symbol":
        const _HermesInternal70 = HermesInternal;
        write.write("if (typeof " + def2 + " !== \"symbol\") return INVALID;");
        str = def2;
      break;
      case "undefined":
        const _HermesInternal69 = HermesInternal;
        write.write("if (" + def2 + " !== undefined) return INVALID;");
        str = def2;
      break;
      case "null":
        const _HermesInternal68 = HermesInternal;
        write.write("if (" + def2 + " !== null) return INVALID;");
        str = def2;
      break;
      case "any":
      break;
      case "unknown":
      break;
      case "never":
        write.write("return INVALID;");
        str = def2;
      break;
      case "void":
        const _HermesInternal67 = HermesInternal;
        write.write("if (" + def2 + " !== undefined) return INVALID;");
        str = def2;
      break;
      case "nan":
        const _HermesInternal66 = HermesInternal;
        write.write("if (typeof " + def2 + " !== \"number\" || !Number.isNaN(" + def2 + ")) return INVALID;");
        str = def2;
      break;
      case "date":
        const _HermesInternal65 = HermesInternal;
        write.write("if (!(" + def2 + " instanceof Date) || Number.isNaN(" + def2 + ".getTime())) return INVALID;");
        str = def2;
      break;
      case "object":
        str = (function generateObjectCheck(write, varCounter, _zod, def2) {
          closure_2 = def2;
          if (flag === undefined) {
            flag = true;
          }
          let keyExpr;
          let propKey;
          let map;
          closure_8 = undefined;
          let catchall;
          let str6;
          closure_11 = undefined;
          closure_12 = undefined;
          closure_13 = undefined;
          closure_14 = undefined;
          const def = _zod._zod.def;
          write.write("if (typeof " + def2 + " !== \"object\" || " + def2 + " === null || Array.isArray(" + def2 + ")) return INVALID;");
          const shape = def.shape;
          const keys = Object.keys(shape);
          const ownPropertySymbols = Object.getOwnPropertySymbols(shape);
          let arr3 = keys;
          if (ownPropertySymbols.length) {
            items = [];
            HermesBuiltin.arraySpread(ownPropertySymbols, HermesBuiltin.arraySpread(keys, 0));
            arr3 = items;
          }
          keyExpr = function keyExpr(nextResult) {
            if (typeof nextResult === "symbol") {
              let escResult = addConstant(closure_1, nextResult);
            } else {
              escResult = closure_2_11.esc(nextResult);
            }
            return escResult;
          };
          propKey = function propKey(arg0) {

          };
          if (keys.includes("__proto__")) {
            const tmp79 = new closure_14("object shape key \"__proto__\"");
            throw tmp79;
          } else {
            const _Map = Map;
            map = new Map();
            function _loop() {
              write = tmp2;
              if (typeof keyExpr === "function") {
                if (typeof closure_8 === "symbol") {
                  let escResult = closure_1_17(varCounter, closure_8);
                } else {
                  escResult = closure_11.esc(closure_8);
                }
                varCounter = escResult;
                varCounter.varCounter = +varCounter.varCounter + 1;
                const text = `v${tmp7}`;
                closure_2 = text;
                write = globalThis;
                const _HermesInternal = HermesInternal;
                write.write("const " + `v${+varCounter.varCounter}` + " = " + closure_2 + "[" + escResult + "];");
                if (undefined !== tmp2._zod.optin) {
                  tmp6.varCounter = +tmp6.varCounter + 1;
                  const text1 = `v${tmp28}`;
                  const _HermesInternal3 = HermesInternal;
                  obj.write("let " + `v${+tmp6.varCounter}` + " = (() => {");
                  obj.indented((write) => {
                    write.write("return " + compileChild(write, closure_1, closure_0, text) + ";");
                  });
                  obj.write("})();");
                  if ("optional" === tmp2._zod.optout) {
                    obj.write("if (" + `v${tmp28}` + " === INVALID) {");
                    obj.indented((write) => {
                      write.write("if (" + escResult + " in " + closure_2 + ") return INVALID;");
                      write.write("" + text1 + " = undefined;");
                    });
                    write = obj.write;
                    write("}");
                  } else {
                    const _HermesInternal4 = HermesInternal;
                    obj.write("if (" + `v${tmp28}` + " === INVALID) return INVALID;");
                  }
                  const result = map.set(closure_8, text1);
                } else {
                  let tmp16 = undefined === tmp2._zod.optin;
                  if (tmp16) {
                    tmp16 = closure_1_39(tmp2);
                  }
                  if (tmp16) {
                    const _HermesInternal2 = HermesInternal;
                    obj.write("if (!(" + tmp14 + " in " + tmp9 + ")) return INVALID;");
                  }
                  const tmp26 = closure_1_20(obj, tmp6, tmp2, text, text1);
                  if (null !== tmp26) {
                    const result1 = map.set(closure_8, tmp26);
                  }
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            const iter = arr3[Symbol.iterator]();
            while (iter !== undefined) {
              closure_8 = iter.next();
              let _loopResult = _loop();
              continue;
            }
            catchall = def.catchall;
            str6 = "none";
            let str2 = "none";
            if (catchall) {
              const type = catchall._zod.def.type;
              if ("never" === type) {
                const mapped = keys.map((item) => "k !== " + closure_11.esc(item));
                closure_11 = mapped.join(" && ") || "true";
                let _HermesInternal = HermesInternal;
                write.write("for (const k in " + def2 + ") {");
                write.indented((write) => {
                  write.write("if (" + closure_11 + ") return INVALID;");
                });
                write.write("}");
                str2 = "none";
                let tmp16 = mapped.join(" && ") || "true";
              } else {
                if ("unknown" === type) {
                  const checks = catchall._zod.def.checks;
                  str6 = "passthrough";
                  str2 = str6;
                }
                str6 = "schema";
              }
            }
            const tmp21 = closure_18(varCounter);
            closure_12 = tmp21;
            if (flag) {
              if (arr3.some((item) => {
                let tmp3 = "defaulted" !== tmp2._zod.optin;
                if (!tmp3) {
                  tmp3 = "optional" === tmp2._zod.optout;
                }
                if (tmp3) {
                  tmp3 = mayOutputUndefined(tmp2);
                }
                if (!tmp3) {
                  tmp3 = "optional" === shape[item]._zod.optin && "optional" === shape[item]._zod.optout;
                  const tmp6 = "optional" === shape[item]._zod.optin && "optional" === shape[item]._zod.optout;
                }
                return tmp3;
              })) {
                let _HermesInternal4 = HermesInternal;
                write.write("const " + tmp21 + " = {};");
                const iter2 = arr3[Symbol.iterator]();
                const nextResult = iter2.next();
                while (iter2 !== undefined) {
                  let tmp40 = nextResult;
                  let keyExprResult = keyExpr(nextResult);
                  value = map.get(nextResult);
                  if (closure_40(shape[nextResult])) {
                    let _HermesInternal7 = HermesInternal;
                    let str40 = "if (";
                    let str41 = " in ";
                    let str42 = ") ";
                    let str43 = "[";
                    let str44 = "] = ";
                    let str45 = ";";
                    let writeResult4 = write.write("if (" + keyExprResult + " in " + def2 + ") " + tmp21 + "[" + keyExprResult + "] = " + value + ";");
                  } else {
                    write = write.write;
                    if (closure_41(shape[tmp40])) {
                      let _HermesInternal6 = HermesInternal;
                      let str33 = "if (";
                      let str34 = " !== undefined || ";
                      let str35 = " in ";
                      let str36 = ") ";
                      let str37 = "[";
                      let str38 = "] = ";
                      let str39 = ";";
                      let writeResult5 = write("if (" + value + " !== undefined || " + keyExprResult + " in " + def2 + ") " + tmp21 + "[" + keyExprResult + "] = " + value + ";");
                    } else {
                      let _HermesInternal5 = HermesInternal;
                      let str29 = "";
                      let str30 = "[";
                      let str31 = "] = ";
                      let str32 = ";";
                      let writeResult6 = write("" + tmp21 + "[" + keyExprResult + "] = " + value + ";");
                    }
                  }
                  continue;
                }
              } else {
                const mapped1 = arr3.map((item) => {
                  if (typeof propKey === "function") {
                    if (typeof item === "symbol") {
                      if (typeof keyExpr === "function") {
                        if (typeof item === "symbol") {
                          let escResult = addConstant(closure_1, item);
                        } else {
                          escResult = closure_2_11.esc(item);
                        }
                        const _HermesInternal = HermesInternal;
                        const combined = "[" + escResult + "]";
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      const _HermesInternal2 = HermesInternal;
                      return "" + closure_2_11.esc(item) + ": " + map.get(item);
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                });
                let _HermesInternal3 = HermesInternal;
                write.write("const " + tmp21 + " = { " + mapped1.join(", ") + " };");
              }
              if ("none" !== str2) {
                let tmp72 = null;
                if (keys.length > 0) {
                  const _Set2 = Set;
                  set = new Set(keys);
                  tmp72 = closure_17(varCounter, set);
                }
                closure_14 = tmp72;
                const _HermesInternal8 = HermesInternal;
                write.write("for (const k in " + def2 + ") {");
                write.indented((write) => {
                  write.write("if (k === \"__proto__\") continue;");
                  if (closure_14) {
                    const _HermesInternal = HermesInternal;
                    write.write("if (" + tmp2 + ".has(k)) continue;");
                  }
                  if ("passthrough" === str6) {
                    const _HermesInternal2 = HermesInternal;
                    write.write("" + closure_12 + "[k] = " + closure_2 + "[k];");
                  } else {
                    varCounter.varCounter = +varCounter.varCounter + 1;
                    const text = `v${tmp10}`;
                    const _HermesInternal3 = HermesInternal;
                    write.write("const " + `v${+varCounter.varCounter}` + " = " + closure_2 + "[k];");
                    const _HermesInternal4 = HermesInternal;
                    write.write("" + closure_12 + "[k] = " + compileChild(write, varCounter, catchall, `v${+varCounter.varCounter}`) + ";");
                  }
                });
                write.write("}");
              }
              return tmp21;
            } else {
              if ("schema" === str2) {
                let tmp28 = null;
                if (keys.length > 0) {
                  const _Set = Set;
                  set1 = new Set(keys);
                  tmp28 = closure_17(varCounter, set1);
                }
                closure_13 = tmp28;
                let _HermesInternal2 = HermesInternal;
                write.write("for (const k in " + def2 + ") {");
                write.indented((write) => {
                  write.write("if (k === \"__proto__\") continue;");
                  if (closure_13) {
                    const _HermesInternal = HermesInternal;
                    write.write("if (" + tmp2 + ".has(k)) continue;");
                  }
                  varCounter.varCounter = +varCounter.varCounter + 1;
                  const text = `v${tmp5}`;
                  write.write("const " + `v${+varCounter.varCounter}` + " = " + closure_2 + "[k];");
                  compileChild(write, varCounter, catchall, `v${+varCounter.varCounter}`, false);
                });
                write.write("}");
              }
              return null;
            }
          }
        })(write, varCounter, innerType, def2, flag);
      break;
      case "optional":
        closure_138_0 = varCounter;
        closure_138_1 = def2;
        let flag12 = flag;
        if (flag === undefined) {
          flag12 = true;
        }
        closure_138_2 = flag12;
        closure_138_3 = undefined;
        closure_138_4 = undefined;
        closure_138_5 = undefined;
        closure_138_6 = undefined;
        const def9 = innerType._zod.def;
        closure_138_3 = def9;
        const traits = innerType._zod.traits;
        let hasItem;
        if (traits != null) {
          hasItem = traits.has("$ZodExactOptional");
        }
        if (true === hasItem) {
          let text1 = generateCheck(write, varCounter, def9.innerType, def2, flag12);
        } else if ("defaulted" === def9.innerType._zod.optin) {
          varCounter.varCounter = +varCounter.varCounter + 1;
          let text = `v${tmp385}`;
          closure_138_4 = text;
          varCounter.varCounter = +varCounter.varCounter + 1;
          closure_138_5 = "v" + tmp387;
          const _HermesInternal63 = HermesInternal;
          write.write("let " + `v${+varCounter.varCounter}` + ";");
          const _HermesInternal64 = HermesInternal;
          write.write("if (" + def2 + " === undefined) {");
          write.indented((write) => {
            write.write("const " + closure_5 + " = (() => {");
            write.indented((write) => {
              write.write("return " + generateCheck(write, varCounter, innerType.innerType, def2) + ";");
            });
            write.write("})();");
            write.write("if (" + closure_5 + " !== INVALID) " + closure_4 + " = " + closure_5 + ";");
          });
          write.write("} else {");
          write.indented((write) => {
            write.write("" + closure_4 + " = " + generateCheck(write, closure_0, text23.innerType, closure_1) + ";");
          });
          write.write("}");
          text1 = text;
        } else {
          text1 = null;
          if (flag12) {
            varCounter.varCounter = +varCounter.varCounter + 1;
            text1 = `v${tmp377}`;
          }
          closure_138_6 = text1;
          if (text1) {
            const _HermesInternal61 = HermesInternal;
            write.write("let " + text1 + ";");
          }
          const _HermesInternal62 = HermesInternal;
          write.write("if (" + def2 + " !== undefined) {");
          write.indented((write) => {
            const tmp = generateCheck(write, closure_0, text23.innerType, closure_1, def2);
            let tmp3 = closure_6;
            if (closure_6) {
              tmp3 = null !== tmp;
            }
            if (tmp3) {
              const _HermesInternal = HermesInternal;
              write.write("" + closure_6 + " = " + tmp + ";");
            }
          });
          write.write("}");
        }
        str = text1;
      break;
      case "nullable":
        closure_137_0 = varCounter;
        closure_137_1 = def2;
        let flag11 = flag;
        if (flag === undefined) {
          flag11 = true;
        }
        closure_137_2 = flag11;
        let def13;
        closure_137_4 = undefined;
        def13 = innerType._zod.def;
        let text2 = null;
        if (flag11) {
          varCounter.varCounter = +varCounter.varCounter + 1;
          text2 = `v${tmp368}`;
        }
        closure_137_4 = text2;
        if (text2) {
          const _HermesInternal59 = HermesInternal;
          write.write("let " + text2 + " = null;");
        }
        const _HermesInternal60 = HermesInternal;
        write.write("if (" + def2 + " !== null) {");
        write.indented((write) => {
          const tmp = generateCheck(write, closure_0, text23.innerType, closure_1, def2);
          let tmp3 = closure_4;
          if (closure_4) {
            tmp3 = null !== tmp;
          }
          if (tmp3) {
            const _HermesInternal = HermesInternal;
            write.write("" + closure_4 + " = " + tmp + ";");
          }
        });
        write.write("}");
        str = text2;
      break;
      case "array":
        closure_136_0 = varCounter;
        closure_136_1 = def2;
        let flag10 = flag;
        if (flag === undefined) {
          flag10 = true;
        }
        closure_136_2 = flag10;
        let def14;
        closure_136_4 = undefined;
        closure_136_5 = undefined;
        closure_136_6 = undefined;
        def14 = innerType._zod.def;
        const _HermesInternal55 = HermesInternal;
        write.write("if (!Array.isArray(" + def2 + ")) return INVALID;");
        const _HermesInternal56 = HermesInternal;
        generateSizeGate(write, innerType, "" + def2 + ".length");
        let text3 = null;
        if (flag10) {
          varCounter.varCounter = +varCounter.varCounter + 1;
          text3 = `v${tmp353}`;
        }
        closure_136_4 = text3;
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text4 = `v${tmp354}`;
        closure_136_5 = text4;
        varCounter.varCounter = +varCounter.varCounter + 1;
        closure_136_6 = "v" + tmp356;
        if (text3) {
          const _HermesInternal57 = HermesInternal;
          write.write("const " + text3 + " = new Array(" + def2 + ".length);");
        }
        const _HermesInternal58 = HermesInternal;
        write.write("for (let " + text4 + " = 0; " + text4 + " < " + def2 + ".length; " + text4 + "++) {");
        write.indented((write) => {
          write.write("const " + closure_6 + " = " + closure_1 + "[" + closure_5 + "];");
          const tmp3 = compileChild(write, closure_0, text23.element, closure_6, def2);
          let tmp5 = closure_4;
          if (closure_4) {
            tmp5 = null !== tmp3;
          }
          if (tmp5) {
            const _HermesInternal = HermesInternal;
            write.write("" + closure_4 + "[" + closure_5 + "] = " + tmp3 + ";");
          }
        });
        write.write("}");
        str = text3;
      break;
      case "literal":
        const values2 = innerType._zod.def.values;
        if (1 !== values2.length) {
          const _Set3 = Set;
          set = new Set(values2);
          const _HermesInternal54 = HermesInternal;
          write.write("if (!" + addConstant(varCounter, set) + ".has(" + def2 + ")) return INVALID;");
          str = def2;
        } else {
          const first = values2[0];
          if (typeof first === "number") {
            let _Number = Number;
            if (Number.isNaN(first)) {
              let _Set2 = Set;
              set1 = new Set(values2);
              const _HermesInternal53 = HermesInternal;
              write.write("if (!" + addConstant(varCounter, set1) + ".has(" + def2 + ")) return INVALID;");
              str = def2;
            }
          }
          if (typeof first === "string") {
            const _HermesInternal52 = HermesInternal;
            write.write("if (" + def2 + " !== " + closure_11.esc(first) + ") return INVALID;");
            str = def2;
          } else {
            if (typeof first !== "number") {
              if (typeof first !== "boolean") {
                if (null === first) {
                  const _HermesInternal50 = HermesInternal;
                  write.write("if (" + def2 + " !== null) return INVALID;");
                  str = def2;
                } else if (undefined === first) {
                  const _HermesInternal49 = HermesInternal;
                  write.write("if (" + def2 + " !== undefined) return INVALID;");
                  str = def2;
                } else if (typeof first !== "bigint") {
                  const tmp317 = new _moduleResult1("literal type " + typeof first);
                  throw tmp317;
                } else {
                  const _HermesInternal86 = HermesInternal;
                  write.write("if (" + def2 + " !== " + first + "n) return INVALID;");
                  str = def2;
                }
              }
            }
            const _HermesInternal51 = HermesInternal;
            write.write("if (" + def2 + " !== " + first + ") return INVALID;");
            str = def2;
          }
        }
      break;
      case "enum":
        let values = innerType._zod.values;
        if (values) {
          const _HermesInternal48 = HermesInternal;
          write.write("if (!" + addConstant(varCounter, values) + ".has(" + def2 + ")) return INVALID;");
          str = def2;
        } else {
          const tmp308 = new _moduleResult1("enum schema without enumerated values");
          throw tmp308;
        }
      break;
      case "readonly":
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text5 = `v${tmp300}`;
        const _HermesInternal47 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = Object.freeze(" + generateCheck(write, varCounter, innerType._zod.def.innerType, def2) + ");");
        str = text5;
      break;
      case "success":
        generateCheck(write, varCounter, innerType._zod.def.innerType, def2);
        str = "true";
      break;
      case "default":
        closure_135_0 = varCounter;
        closure_135_1 = innerType;
        closure_135_2 = def2;
        let def8 = innerType._zod.def;
        closure_135_3 = def8;
        let _Object = Object;
        let ownPropertyDescriptor = Object.getOwnPropertyDescriptor(innerType._zod.def, "defaultValue");
        if (ownPropertyDescriptor) {
          let fn2 = () => def2._zod.def.defaultValue;
        }
        if ("prefault" === innerType._zod.def.type) {
          if (fn2) {
            let tmp275 = addConstant(varCounter, fn2);
            let tmp276 = +varCounter.varCounter;
            let sum = tmp276 + 1;
            varCounter.varCounter = sum;
            let text6 = `v${tmp276}`;
            let _HermesInternal45 = HermesInternal;
            let combined = "let " + `v${tmp276}` + " = " + def2 + ";";
            write.write(combined);
            let _HermesInternal46 = HermesInternal;
            let combined1 = "if (" + def2 + " === undefined) " + `v${tmp276}` + " = " + tmp275 + "();";
            write.write(combined1);
            let tmp257 = generateCheck(write, varCounter, def8.innerType, `v${tmp276}`);
          } else {
            tmp257 = generateCheck(write, varCounter, def8.innerType, def2);
          }
        } else {
          let tmp492 = +varCounter.varCounter;
          let sum1 = tmp492 + 1;
          varCounter.varCounter = sum1;
          let text7 = `v${tmp492}`;
          closure_135_4 = text7;
          if (fn2) {
            let tmp259 = addConstant(varCounter, fn2);
            closure_135_5 = tmp259;
            let tmp261 = addConstant(varCounter, closure_11.shallowClone);
            closure_135_6 = tmp261;
            let _HermesInternal43 = HermesInternal;
            let combined2 = "let " + `v${tmp492}` + ";";
            write.write(combined2);
            let _HermesInternal44 = HermesInternal;
            let combined3 = "if (" + def2 + " === undefined) {";
            write.write(combined3);
            let fn4 = (write) => {
              write.write("" + closure_4 + " = " + closure_6 + "(" + closure_5 + "());");
            };
            write.indented(fn4);
            write.write("} else {");
            let fn5 = (write) => {
              const tmp = generateCheck(write, closure_0, text23.innerType, def2);
              write.write("" + closure_4 + " = " + tmp + " === undefined ? " + closure_6 + "(" + closure_5 + "()) : " + tmp + ";");
            };
            write.indented(fn5);
            write.write("}");
            tmp257 = text7;
          } else {
            let _HermesInternal41 = HermesInternal;
            let combined4 = "let " + `v${tmp492}` + ";";
            write.write(combined4);
            let _HermesInternal42 = HermesInternal;
            let combined5 = "if (" + def2 + " !== undefined) {";
            write.write(combined5);
            let fn3 = (write) => {
              write.write("" + closure_4 + " = " + generateCheck(write, closure_0, text23.innerType, def2) + ";");
            };
            write.indented(fn3);
            write.write("}");
            tmp257 = text7;
          }
        }
        str = tmp257;
      break;
      case "prefault":
        closure_135_0 = varCounter;
        closure_135_1 = innerType;
        closure_135_2 = def2;
        def8 = innerType._zod.def;
        closure_135_3 = def8;
        _Object = Object;
        ownPropertyDescriptor = Object.getOwnPropertyDescriptor(innerType._zod.def, "defaultValue");
        if (ownPropertyDescriptor) {
          fn2 = () => def2._zod.def.defaultValue;
        }
        if ("prefault" === innerType._zod.def.type) {
          if (fn2) {
            tmp275 = addConstant(varCounter, fn2);
            tmp276 = +varCounter.varCounter;
            sum = tmp276 + 1;
            varCounter.varCounter = sum;
            text6 = `v${tmp276}`;
            _HermesInternal45 = HermesInternal;
            combined = "let " + `v${tmp276}` + " = " + def2 + ";";
            write.write(combined);
            _HermesInternal46 = HermesInternal;
            combined1 = "if (" + def2 + " === undefined) " + `v${tmp276}` + " = " + tmp275 + "();";
            write.write(combined1);
            tmp257 = generateCheck(write, varCounter, def8.innerType, `v${tmp276}`);
          } else {
            tmp257 = generateCheck(write, varCounter, def8.innerType, def2);
          }
        } else {
          tmp492 = +varCounter.varCounter;
          sum1 = tmp492 + 1;
          varCounter.varCounter = sum1;
          text7 = `v${tmp492}`;
          closure_135_4 = text7;
          if (fn2) {
            tmp259 = addConstant(varCounter, fn2);
            closure_135_5 = tmp259;
            tmp261 = addConstant(varCounter, closure_11.shallowClone);
            closure_135_6 = tmp261;
            _HermesInternal43 = HermesInternal;
            combined2 = "let " + `v${tmp492}` + ";";
            write.write(combined2);
            _HermesInternal44 = HermesInternal;
            combined3 = "if (" + def2 + " === undefined) {";
            write.write(combined3);
            fn4 = (write) => {
              write.write("" + closure_4 + " = " + closure_6 + "(" + closure_5 + "());");
            };
            write.indented(fn4);
            write.write("} else {");
            fn5 = (write) => {
              const tmp = generateCheck(write, closure_0, text23.innerType, def2);
              write.write("" + closure_4 + " = " + tmp + " === undefined ? " + closure_6 + "(" + closure_5 + "()) : " + tmp + ";");
            };
            write.indented(fn5);
            write.write("}");
            tmp257 = text7;
          } else {
            _HermesInternal41 = HermesInternal;
            combined4 = "let " + `v${tmp492}` + ";";
            write.write(combined4);
            _HermesInternal42 = HermesInternal;
            combined5 = "if (" + def2 + " !== undefined) {";
            write.write(combined5);
            fn3 = (write) => {
              write.write("" + closure_4 + " = " + generateCheck(write, closure_0, text23.innerType, def2) + ";");
            };
            write.indented(fn3);
            write.write("}");
            tmp257 = text7;
          }
        }
        str = tmp257;
      break;
      case "nonoptional":
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text8 = `v${tmp243}`;
        const _HermesInternal39 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = " + generateCheck(write, varCounter, innerType._zod.def.innerType, def2) + ";");
        const _HermesInternal40 = HermesInternal;
        write.write("if (" + `v${+varCounter.varCounter}` + " === undefined) return INVALID;");
        str = text8;
      break;
      case "tuple":
        closure_134_0 = varCounter;
        closure_134_1 = def2;
        ({ items, rest } = innerType._zod.def);
        closure_134_2 = rest;
        const _HermesInternal33 = HermesInternal;
        write.write("if (!Array.isArray(" + def2 + ")) return INVALID;");
        let diff = items.length - 1;
        let num14 = 0;
        if (0 <= diff) {
          while (undefined !== items[diff]._zod.optin) {
            diff = diff - 1;
            num14 = 0;
          }
          num14 = diff + 1;
        }
        let diff1 = items.length - 1;
        let num15 = 0;
        if (0 <= diff1) {
          while ("optional" === items[diff1]._zod.optout) {
            diff1 = diff1 - 1;
            num15 = 0;
          }
          num15 = diff1 + 1;
        }
        write = write.write;
        if (rest) {
          const _HermesInternal35 = HermesInternal;
          write("if (" + def2 + ".length < " + num14 + ") return INVALID;");
        } else {
          const _HermesInternal34 = HermesInternal;
          write("if (" + def2 + ".length < " + num14 + " || " + def2 + ".length > " + items.length + ") return INVALID;");
        }
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text9 = `v${tmp219}`;
        closure_134_3 = text9;
        const _HermesInternal36 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = [];");
        for (let num16 = 0; num16 < items.length; num16 = num16 + 1) {
          ZodCompileUnsupportedError = num16;
          let tmp222 = items[num16];
          def2 = tmp222;
          let tmp223 = num16;
          if (num15 <= num16) {
            let _HermesInternal37 = HermesInternal;
            let str131 = "if (";
            let str132 = ".length === ";
            let str133 = ") {";
            let writeResult56 = write.write("if (" + `v${tmp219}` + ".length === " + tmp223 + ") {");
            let indentedResult8 = write.indented((write) => {
              write.write("if (" + varCounter + " < " + exports + ".length) {");
              write.indented((write) => {
                varCounter.varCounter = +varCounter.varCounter + 1;
                const text = `v${tmp}`;
                write.write("const " + `v${+varCounter.varCounter}` + " = " + closure_1 + "[" + varCounter + "];");
                write.write("" + text23 + "[" + varCounter + "] = " + compileChild(write, varCounter, def2, `v${+varCounter.varCounter}`) + ";");
              });
              write.write("} else {");
              write.indented((write) => {
                if (tmp) {
                  const _HermesInternal5 = HermesInternal;
                  write.write("" + text23 + ".length = " + closure_0 + ";");
                } else {
                  varCounter.varCounter = +varCounter.varCounter + 1;
                  closure_0 = `v${tmp3}`;
                  varCounter.varCounter = +varCounter.varCounter + 1;
                  const text = `v${tmp4}`;
                  const _HermesInternal = HermesInternal;
                  write.write("const " + `v${+varCounter.varCounter}` + " = undefined;");
                  const _HermesInternal2 = HermesInternal;
                  write.write("const " + `v${+varCounter.varCounter}` + " = (() => {");
                  write.indented((write) => {
                    write.write("return " + compileChild(write, closure_0, def2, closure_0) + ";");
                  });
                  write.write("})();");
                  const _HermesInternal3 = HermesInternal;
                  write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID || " + `v${+varCounter.varCounter}` + " === undefined) " + text23 + ".length = " + closure_0 + ";");
                  const _HermesInternal4 = HermesInternal;
                  write.write("else " + text23 + "[" + closure_0 + "] = " + `v${+varCounter.varCounter}` + ";");
                }
                tmp = "optional" === closure_1._zod.optin && "optional" === closure_1._zod.optout;
              });
              write.write("}");
            });
            let writeResult57 = write.write("}");
          } else {
            let tmp478 = +varCounter.varCounter;
            varCounter.varCounter = tmp478 + 1;
            let text10 = `v${tmp478}`;
            let _HermesInternal84 = HermesInternal;
            let str282 = "const ";
            let str283 = " = ";
            let str284 = "[";
            let str285 = "];";
            let writeResult58 = write.write("const " + `v${tmp478}` + " = " + def2 + "[" + tmp223 + "];");
            let _HermesInternal85 = HermesInternal;
            let str286 = "";
            let str287 = "[";
            let str288 = "] = ";
            let str289 = ";";
            let writeResult59 = write.write("" + `v${tmp219}` + "[" + tmp223 + "] = " + compileChild(write, varCounter, tmp222, `v${tmp478}`) + ";");
          }
        }
        str = text9;
        if (rest) {
          varCounter.varCounter = +varCounter.varCounter + 1;
          const text11 = `v${tmp229}`;
          closure_134_4 = text11;
          varCounter.varCounter = +varCounter.varCounter + 1;
          closure_134_5 = "v" + tmp231;
          const _HermesInternal38 = HermesInternal;
          write.write("for (let " + `v${+varCounter.varCounter}` + " = " + items.length + "; " + `v${+varCounter.varCounter}` + " < " + def2 + ".length; " + `v${+varCounter.varCounter}` + "++) {");
          write.indented((write) => {
            write.write("const " + closure_5 + " = " + closure_1 + "[" + closure_4 + "];");
            write.write("" + text23 + "[" + closure_4 + "] = " + compileChild(write, closure_0, def2, closure_5) + ";");
          });
          write.write("}");
          str = text9;
        }
      break;
      case "union":
        closure_133_0 = varCounter;
        closure_133_1 = def2;
        const def7 = innerType._zod.def;
        let options = def7.options;
        if (def7.discriminator) {
          let text12 = (function generateDiscriminatedUnionCheck(write, varCounter, def7, def2) {
            closure_1 = varCounter;
            closure_3 = def2;
            if (def7.unionFallback) {
              let tmp8 = new closure_14("discriminated union with unionFallback");
              throw tmp8;
            } else if (0 === def7.options.length) {
              write.write("return INVALID;");
              return def2;
            } else {
              let tmp11 = closure_18(varCounter);
              closure_4 = tmp11;
              let tmp12 = closure_18(varCounter);
              closure_5 = tmp12;
              let _HermesInternal = HermesInternal;
              write.write("const " + tmp11 + " = " + def2 + "?.[" + closure_11.esc(def7.discriminator) + "];");
              let _HermesInternal2 = HermesInternal;
              write.write("let " + tmp12 + ";");
              c6 = true;
              const _Set = Set;
              const options = def7.options;
              for (const item10009 of options) {
                let tmp2 = (function _loop4(item10009) {
                  write = item10009;
                  const propValues = item10009._zod.propValues;
                  let tmp;
                  if (propValues != null) {
                    tmp = propValues[def7.discriminator];
                  }
                  if (tmp) {
                    if (0 !== tmp.size) {
                      for (const item10013 of tmp) {
                        if (set.has(item10013)) {
                          let tmp8 = globalThis;
                          let _String = String;
                          let _HermesInternal = HermesInternal;
                          let str = "duplicate discriminator value ";
                          let tmp9 = new.target;
                          let tmp10 = new.target;
                          let tmp11 = new closure_1_14("duplicate discriminator value " + String(item10013));
                          throw tmp11;
                        } else {
                          let addResult = set.add(item10013);
                          continue;
                        }
                      }
                      const _Array = Array;
                      let str2 = "else if";
                      if (c6) {
                        str2 = "if";
                      }
                      let _HermesInternal2 = HermesInternal;
                      write.write("" + str2 + " (" + Array.from(tmp, (discriminator) => {
                        if (typeof discriminator === "string") {
                          const _HermesInternal7 = HermesInternal;
                          let combined = "" + closure_1_4 + " === " + closure_2_11.esc(discriminator);
                        } else if (typeof discriminator === "number") {
                          const _Number = Number;
                          const _HermesInternal6 = HermesInternal;
                          if (Number.isNaN(discriminator)) {
                            let combined1 = concat(closure_1_4, ")");
                          } else {
                            combined1 = concat(closure_1_4, " === ", discriminator);
                          }
                          combined = combined1;
                        } else if (typeof discriminator === "boolean") {
                          const _HermesInternal5 = HermesInternal;
                          combined = "" + closure_1_4 + " === " + discriminator;
                        } else if (null === discriminator) {
                          const _HermesInternal4 = HermesInternal;
                          combined = "" + closure_1_4 + " === null";
                        } else if (undefined === discriminator) {
                          const _HermesInternal3 = HermesInternal;
                          combined = "" + closure_1_4 + " === undefined";
                        } else if (typeof discriminator === "bigint") {
                          const _HermesInternal2 = HermesInternal;
                          combined = "" + closure_1_4 + " === " + discriminator + "n";
                        } else if (typeof discriminator === "symbol") {
                          const _HermesInternal = HermesInternal;
                          combined = "" + closure_1_4 + " === " + closure_2_17(tmp, discriminator);
                        } else {
                          const _String = String;
                          const _HermesInternal8 = HermesInternal;
                          const tmp21 = new closure_2_14("literal discriminator value " + String(discriminator));
                          throw tmp21;
                        }
                        return combined;
                      }).join(" || ") + ") {");
                      write.indented((write) => {
                        write.write("" + closure_5 + " = " + generateCheck(write, closure_1, closure_0, closure_3) + ";");
                      });
                      write.write("}");
                      c6 = false;
                      const arr = Array.from(tmp, (discriminator) => {
                        if (typeof discriminator === "string") {
                          const _HermesInternal7 = HermesInternal;
                          let combined = "" + closure_1_4 + " === " + closure_2_11.esc(discriminator);
                        } else if (typeof discriminator === "number") {
                          const _Number = Number;
                          const _HermesInternal6 = HermesInternal;
                          if (Number.isNaN(discriminator)) {
                            let combined1 = concat(closure_1_4, ")");
                          } else {
                            combined1 = concat(closure_1_4, " === ", discriminator);
                          }
                          combined = combined1;
                        } else if (typeof discriminator === "boolean") {
                          const _HermesInternal5 = HermesInternal;
                          combined = "" + closure_1_4 + " === " + discriminator;
                        } else if (null === discriminator) {
                          const _HermesInternal4 = HermesInternal;
                          combined = "" + closure_1_4 + " === null";
                        } else if (undefined === discriminator) {
                          const _HermesInternal3 = HermesInternal;
                          combined = "" + closure_1_4 + " === undefined";
                        } else if (typeof discriminator === "bigint") {
                          const _HermesInternal2 = HermesInternal;
                          combined = "" + closure_1_4 + " === " + discriminator + "n";
                        } else if (typeof discriminator === "symbol") {
                          const _HermesInternal = HermesInternal;
                          combined = "" + closure_1_4 + " === " + closure_2_17(tmp, discriminator);
                        } else {
                          const _String = String;
                          const _HermesInternal8 = HermesInternal;
                          const tmp21 = new closure_2_14("literal discriminator value " + String(discriminator));
                          throw tmp21;
                        }
                        return combined;
                      });
                    }
                  }
                  throw new closure_1_14("discriminated union option without static discriminator values");
                })(item10009);
                continue;
              }
              write.write("else { return INVALID; }");
              return tmp12;
            }
          })(write, varCounter, def7, def2);
        } else if (false === def7.inclusive) {
          const tmp200 = new _moduleResult1("exclusive unions (z.xor)");
          throw tmp200;
        } else if (0 === options.length) {
          write.write("return INVALID;");
          text12 = def2;
        } else if (1 === options.length) {
          text12 = generateCheck(write, varCounter, options[0], def2);
        } else if (options.every((_zod) => {
          let tmp = "literal" === _zod._zod.def.type;
          if (tmp) {
            const checks = _zod._zod.def.checks;
            length = undefined;
            if (checks != null) {
              length = checks.length;
            }
            tmp = !length;
          }
          return tmp;
        })) {
          let _Set = Set;
          const set2 = new Set(options.flatMap((_zod) => _zod._zod.def.values));
          const _HermesInternal32 = HermesInternal;
          write.write("if (!" + addConstant(varCounter, set2) + ".has(" + def2 + ")) return INVALID;");
          text12 = def2;
        } else {
          varCounter.varCounter = +varCounter.varCounter + 1;
          text12 = `v${tmp171}`;
          const _HermesInternal28 = HermesInternal;
          write.write("let " + `v${+varCounter.varCounter}` + ";");
          let num8 = 0;
          let num9 = 0;
          if (0 < options.length) {
            do {
              ZodCompileUnsupportedError = options[num8];
              if (0 === num8) {
                let _HermesInternal30 = HermesInternal;
                let writeResult65 = write.write("" + `v${tmp171}` + " = (() => {");
              } else {
                let _HermesInternal29 = HermesInternal;
                let str98 = "if (";
                let str99 = " === INVALID) ";
                let str100 = " = (() => {";
                let writeResult66 = write.write("if (" + `v${tmp171}` + " === INVALID) " + `v${tmp171}` + " = (() => {");
              }
              let indentedResult10 = write.indented((write) => {
                write.write("return " + regex(write, ZodCompileUnsupportedError, closure_0, exports) + ";");
              });
              let writeResult67 = write.write("})();");
              num8 = num9 + 1;
              num9 = num8;
            } while (num8 < options.length);
          }
          const _HermesInternal31 = HermesInternal;
          write.write("if (" + text12 + " === INVALID) return INVALID;");
        }
        str = text12;
      break;
      case "intersection":
        const def6 = innerType._zod.def;
        varCounter.definite = false;
        const tmp157 = compileChild(write, varCounter, def6.left, def2);
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text13 = `v${tmp165}`;
        const _HermesInternal25 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, ZodCompileUnsupportedError(def2[12]).mergeValues) + "(" + tmp157 + ", " + compileChild(write, varCounter, def6.right, def2) + ");");
        const _HermesInternal26 = HermesInternal;
        write.write("if (!" + `v${+varCounter.varCounter}` + ".valid) return INVALID;");
        const _HermesInternal27 = HermesInternal;
        str = "" + `v${tmp165}` + ".data";
        const tmp161 = compileChild(write, varCounter, def6.right, def2);
      break;
      case "record":
        str = (function generateRecordCheck(write, varCounter, _zod, def2) {
          closure_1 = def2;
          const def = _zod._zod.def;
          write.write("if (!" + closure_17(varCounter, closure_11.isPlainObject) + "(" + def2 + ")) return INVALID;");
          const tmp6 = closure_18(varCounter);
          closure_3 = tmp6;
          const tmp7 = closure_18(varCounter);
          closure_4 = tmp7;
          closure_5 = closure_18(varCounter);
          write.write("const " + tmp6 + " = {};");
          let values;
          if (!def.partial) {
            values = def.keyType._zod.values;
          }
          if (values) {
            items = [];
            const iter = values[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let str11 = nextResult;
              if (typeof nextResult !== "string") {
                if (typeof str11 !== "number") {
                  if (typeof str11 !== "symbol") {
                    let _String = String;
                    let _HermesInternal = HermesInternal;
                    let str13 = "record key value ";
                    let tmp42 = new.target;
                    let tmp43 = new.target;
                    let tmp44 = new closure_14("record key value " + String(nextResult));
                    throw tmp44;
                  }
                }
              }
              if (typeof str11 === "number") {
                let str1 = str11.toString();
              } else {
                str1 = nextResult;
              }
              let tmp35 = str1;
              if ("__proto__" === str1) {
                let tmp37 = new.target;
                let str12 = "record key \"__proto__\"";
                let tmp38 = new.target;
                let tmp39 = new closure_14("record key \"__proto__\"");
                throw tmp39;
              } else {
                let arr = items.push(tmp35);
                let tmp68 = closure_38(write, varCounter, def.keyType, closure_17(varCounter, str11));
                let tmp71 = closure_18(varCounter);
                let _HermesInternal3 = HermesInternal;
                let str18 = "const ";
                let str19 = " = ";
                let str20 = "[";
                let str21 = "];";
                let writeResult2 = write.write("const " + tmp71 + " = " + def2 + "[" + closure_45(varCounter, tmp35) + "];");
                let _HermesInternal4 = HermesInternal;
                let str22 = "";
                let str23 = "[";
                let str24 = "] = ";
                let str25 = ";";
                let writeResult3 = write.write("" + tmp6 + "[" + tmp68 + "] = " + closure_20(write, varCounter, def.valueType, tmp71) + ";");
                continue;
              }
            }
            const _Set = Set;
            set = new Set(items);
            closure_7 = closure_17(varCounter, set);
            let _HermesInternal2 = HermesInternal;
            write.write("for (const " + tmp7 + " in " + def2 + ") {");
            write.indented((write) => {
              write.write("if (" + closure_7 + ".has(" + closure_4 + ")) continue;");
              if ("loose" === def.mode) {
                const _HermesInternal = HermesInternal;
                write.write("if (" + closure_4 + " !== \"__proto__\") " + closure_3 + "[" + closure_4 + "] = " + closure_1 + "[" + closure_4 + "];");
              } else {
                write.write("return INVALID;");
              }
            });
            write.write("}");
            return tmp6;
          } else {
            def2 = def.keyType._zod.def;
            if ("string" === def2.type) {
              if (undefined === def2.format) {
                if (!def2.coerce) {
                  const checks = def2.checks;
                  let num;
                  if (checks != null) {
                    num = checks.length;
                  }
                  if (num == null) {
                    num = 0;
                  }
                  if (0 === num) {
                    closure_44(write, varCounter, def2, tmp7, (write) => {
                      write.write("const " + closure_5 + " = " + closure_1 + "[" + closure_4 + "];");
                      write.write("" + closure_3 + "[" + closure_4 + "] = " + compileChild(write, closure_0, def.valueType, closure_5) + ";");
                    }, "return INVALID;");
                    return tmp6;
                  }
                }
              }
            }
            closure_8 = "loose" === def.mode;
            const tmp18 = closure_16(def.keyType);
            if (false === tmp18.definite) {
              varCounter.definite = false;
            }
            closure_9 = closure_17(varCounter, tmp18);
            number = closure_17(varCounter, number.number);
            closure_11 = closure_18(varCounter);
            closure_44(write, varCounter, def2, tmp7, (write) => {
              write.write("let " + closure_11 + " = " + closure_9 + "(" + closure_4 + ");");
              write.write("if (" + closure_11 + " === INVALID && typeof " + closure_4 + " === \"string\" && " + closure_10 + ".test(" + closure_4 + ")) " + closure_11 + " = " + closure_9 + "(Number(" + closure_4 + "));");
              write = write.write;
              if (closure_8) {
                const _HermesInternal2 = HermesInternal;
                write("if (" + closure_11 + " === INVALID) { " + closure_3 + "[" + closure_4 + "] = " + closure_1 + "[" + closure_4 + "]; continue; }");
              } else {
                const _HermesInternal = HermesInternal;
                write("if (" + closure_11 + " === INVALID) return INVALID;");
              }
              write.write("if (" + closure_11 + " === \"__proto__\") continue;");
              varCounter.varCounter = +varCounter.varCounter + 1;
              const text = `v${tmp13}`;
              write.write("const " + `v${+varCounter.varCounter}` + " = " + closure_1 + "[" + closure_4 + "];");
              write.write("" + closure_3 + "[" + closure_11 + "] = " + compileChild(write, varCounter, def.valueType, `v${+varCounter.varCounter}`) + ";");
            });
            return tmp6;
          }
        })(write, varCounter, innerType, def2);
      break;
      case "map":
        closure_132_0 = varCounter;
        const def15 = innerType._zod.def;
        const _HermesInternal21 = HermesInternal;
        write.write("if (!(" + def2 + " instanceof Map)) return INVALID;");
        const _HermesInternal22 = HermesInternal;
        generateSizeGate(write, innerType, "" + def2 + ".size");
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text14 = `v${tmp136}`;
        closure_132_2 = text14;
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text15 = `v${tmp138}`;
        closure_132_3 = text15;
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text16 = `v${tmp140}`;
        closure_132_4 = text16;
        const _HermesInternal23 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = new Map();");
        const _HermesInternal24 = HermesInternal;
        write.write("for (const [" + `v${+varCounter.varCounter}` + ", " + `v${+varCounter.varCounter}` + "] of " + def2 + ") {");
        write.indented((write) => {
          write.write("" + def2 + ".set(" + generateCheck(write, closure_0, def2.keyType, text23) + ", " + generateCheck(write, closure_0, def2.valueType, closure_4) + ");");
        });
        write.write("}");
        str = text14;
      break;
      case "set":
        closure_131_0 = varCounter;
        const def16 = innerType._zod.def;
        const _HermesInternal17 = HermesInternal;
        write.write("if (!(" + def2 + " instanceof Set)) return INVALID;");
        const _HermesInternal18 = HermesInternal;
        generateSizeGate(write, innerType, "" + def2 + ".size");
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text17 = `v${tmp122}`;
        closure_131_2 = text17;
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text18 = `v${tmp124}`;
        closure_131_3 = text18;
        const _HermesInternal19 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = new Set();");
        const _HermesInternal20 = HermesInternal;
        write.write("for (const " + `v${+varCounter.varCounter}` + " of " + def2 + ") {");
        write.indented((write) => {
          write.write("" + def2 + ".add(" + generateCheck(write, closure_0, def2.valueType, text23) + ");");
        });
        write.write("}");
        str = text17;
      break;
      case "file":
        const _HermesInternal16 = HermesInternal;
        write.write("if (!(" + def2 + " instanceof File)) return INVALID;");
        str = def2;
      break;
      case "template_literal":
        const _HermesInternal13 = HermesInternal;
        write.write("if (typeof " + def2 + " !== \"string\") return INVALID;");
        const pattern = innerType._zod.pattern;
        str = def2;
        if (pattern) {
          let tmp111 = addConstant(varCounter, pattern);
          const _HermesInternal14 = HermesInternal;
          write.write("" + tmp111 + ".lastIndex = 0;");
          const _HermesInternal15 = HermesInternal;
          write.write("if (!" + tmp111 + ".test(" + def2 + ")) return INVALID;");
          str = def2;
        }
      break;
      case "lazy":
        varCounter.definite = false;
        ZodCompileUnsupportedError = addConstant(varCounter, innerType._zod.def.getter);
        const tmp96 = addConstant(varCounter, { parser: null });
        def2 = tmp96;
        let _HermesInternal10 = HermesInternal;
        write.write("if (!" + tmp96 + ".parser) {");
        write.indented((write) => {
          write.write("const inner = " + closure_0 + "();");
          write.write("" + closure_1 + ".parser = function(input) {");
          write.indented((write) => {
            write.write("const result = inner._zod.run({ value: input, issues: [] }, {});");
            write.write("return result.issues.length === 0 ? result.value : INVALID;");
          });
          write.write("};");
        });
        write.write("}");
        varCounter.varCounter = +varCounter.varCounter + 1;
        const text19 = `v${tmp101}`;
        const _HermesInternal11 = HermesInternal;
        write.write("const " + `v${+varCounter.varCounter}` + " = " + tmp96 + ".parser(" + def2 + ");");
        const _HermesInternal12 = HermesInternal;
        write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) return INVALID;");
        str = text19;
      break;
      case "pipe":
        const def5 = innerType._zod.def;
        let tmp71 = generateCheck(write, varCounter, def5.in, def2);
        if (def5.transform) {
          const transform2 = def5.transform;
          let tmp76 = typeof transform2 === "function";
          if (typeof transform2 === "function") {
            let tmp78 = "AsyncFunction" === transform2.constructor.name;
            if (!tmp78) {
              const _Symbol3 = Symbol;
              tmp78 = "AsyncFunction" === transform2[Symbol.toStringTag];
            }
            tmp76 = tmp78;
          }
          if (tmp76) {
            const tmp93 = new closure_13("z.compile: async transforms in pipes are not supported");
            throw tmp93;
          } else {
            const transform3 = def5.transform;
            varCounter.definite = false;
            varCounter.varCounter = +varCounter.varCounter + 1;
            const text20 = `v${tmp80}`;
            let _HermesInternal8 = HermesInternal;
            write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, (value) => {
              const obj = { value, issues: [], addIssue: pushIssue };
              let INVALID = varCounter(value, obj);
              if (INVALID instanceof Promise) {
                INVALID = exports.INVALID;
              } else if (0 !== obj.issues.length) {
                INVALID = exports.INVALID;
              }
              return INVALID;
            }) + "(" + tmp71 + ");");
            let _HermesInternal9 = HermesInternal;
            write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) return INVALID;");
            let tmp67Result = generateCheck(write, varCounter, def5.out, `v${tmp80}`);
          }
        } else {
          tmp67Result = generateCheck(write, varCounter, def5.out, tmp71);
        }
        str = tmp67Result;
      break;
      case "custom":
        const def4 = innerType._zod.def;
        if (def4.fn) {
          let tmp45 = typeof fn === "function";
          if (typeof def4.fn === "function") {
            let tmp47 = "AsyncFunction" === fn.constructor.name;
            if (!tmp47) {
              const _Symbol2 = Symbol;
              tmp47 = "AsyncFunction" === fn[Symbol.toStringTag];
            }
            tmp45 = tmp47;
          }
          if (tmp45) {
            let tmp65 = new closure_13("z.compile: async custom predicates are not supported");
            throw tmp65;
          } else {
            varCounter.definite = false;
            let tmp51 = addConstant(varCounter, throwAsync);
            varCounter.varCounter = +varCounter.varCounter + 1;
            const text21 = `v${tmp52}`;
            let _HermesInternal5 = HermesInternal;
            write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, def4.fn) + "(" + def2 + ");");
            let _HermesInternal6 = HermesInternal;
            write.write("if (" + `v${+varCounter.varCounter}` + " instanceof Promise) " + tmp51 + "();");
            let _HermesInternal7 = HermesInternal;
            write.write("if (!" + `v${+varCounter.varCounter}` + ") return INVALID;");
            str = def2;
            let tmp49 = addConstant(varCounter, def4.fn);
          }
        } else {
          let tmp43 = new _moduleResult1("custom schema without a predicate function");
          throw tmp43;
        }
      break;
      case "transform":
        const def3 = innerType._zod.def;
        let tmp23 = def2;
        if (def3.transform) {
          const transform = def3.transform;
          let tmp24 = typeof transform === "function";
          if (typeof transform === "function") {
            let tmp26 = "AsyncFunction" === transform.constructor.name;
            if (!tmp26) {
              const _Symbol = Symbol;
              tmp26 = "AsyncFunction" === transform[Symbol.toStringTag];
            }
            tmp24 = tmp26;
          }
          if (tmp24) {
            let tmp38 = new closure_13("z.compile: async transforms are not supported");
            throw tmp38;
          } else {
            const transform4 = def3.transform;
            varCounter.definite = false;
            varCounter.varCounter = +varCounter.varCounter + 1;
            const text22 = `v${tmp28}`;
            let _HermesInternal3 = HermesInternal;
            write.write("const " + `v${+varCounter.varCounter}` + " = " + addConstant(varCounter, (value) => {
              const obj = { value, issues: [], addIssue: pushIssue };
              let INVALID = varCounter(value, obj);
              if (INVALID instanceof Promise) {
                INVALID = exports.INVALID;
              } else if (0 !== obj.issues.length) {
                INVALID = exports.INVALID;
              }
              return INVALID;
            }) + "(" + def2 + ");");
            let _HermesInternal4 = HermesInternal;
            write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) return INVALID;");
            tmp23 = text22;
          }
        }
        str = tmp23;
      break;
      case "catch":
        ZodCompileUnsupportedError = varCounter;
        def2 = innerType._zod.def;
        if (def2.catchValue[closure_11.CONSTANT_CATCH]) {
          varCounter.varCounter = +varCounter.varCounter + 1;
          const text23 = `v${tmp12}`;
          let _HermesInternal = HermesInternal;
          write.write("let " + `v${+varCounter.varCounter}` + " = (() => {");
          write.indented((write) => {
            write.write("return " + compileChild(write, closure_0, def2.innerType, closure_1) + ";");
          });
          write.write("})();");
          closure_4 = addConstant(varCounter, def2.innerType);
          varCounter.definite = false;
          closure_5 = addConstant(varCounter, def2.catchValue);
          closure_6 = addConstant(varCounter, runtimeCatch);
          let _HermesInternal2 = HermesInternal;
          write.write("if (" + `v${+varCounter.varCounter}` + " === INVALID) {");
          write.indented((write) => {
            write.write("" + text23 + " = " + closure_6 + "(" + closure_4 + ", " + closure_5 + ", " + closure_1 + ");");
            write.write("if (" + text23 + " === INVALID) return INVALID;");
          });
          write.write("}");
          str = text23;
        } else {
          let tmp10 = new _moduleResult1("catch with a callback (only a constant catch value compiles)", false);
          throw tmp10;
        }
      break;
      default:
        const _HermesInternal82 = HermesInternal;
        const tmp470 = new _moduleResult1("schema type " + type);
        throw tmp470;
    }
  }
}
function fastPathAcceptsAbsence(innerType) {
  if (innerType._zod.def.coerce) {
    return true;
  } else {
    const def = innerType._zod.def;
    switch (def.type) {
      case "any":
        return true;
      case "unknown":
        return true;
      case "undefined":
        return true;
      case "void":
        return true;
      case "default":
        return true;
      case "prefault":
        return true;
      case "transform":
        return true;
      case "custom":
        return true;
      case "lazy":
        return true;
      case "catch":
        return true;
      case "string":
        return false;
      case "number":
        return false;
      case "boolean":
        return false;
      case "bigint":
        return false;
      case "symbol":
        return false;
      case "null":
        return false;
      case "never":
        return false;
      case "nan":
        return false;
      case "date":
        return false;
      case "object":
        return false;
      case "array":
        return false;
      case "tuple":
        return false;
      case "record":
        return false;
      case "map":
        return false;
      case "set":
        return false;
      case "file":
        return false;
      case "template_literal":
        return false;
      case "nonoptional":
        let innerType1 = def.innerType;
        if (innerType1) {
          innerType1 = fastPathAcceptsAbsence(def.innerType);
        }
        return innerType1;
      case "literal":
        const values2 = def.values;
        let hasItem;
        if (values2 != null) {
          hasItem = values2.includes(undefined);
        }
        return hasItem;
      case "enum":
        const values = innerType._zod.values;
        let hasItem1;
        if (values != null) {
          hasItem1 = values.has(undefined);
        }
        return hasItem1;
      case "optional":
        innerType = def.innerType;
        let tmp8 = !innerType;
        if (innerType) {
          tmp8 = fastPathAcceptsAbsence(def.innerType);
        }
        return tmp8;
      case "nullable":
        innerType = def.innerType;
        tmp8 = !innerType;
        if (innerType) {
          tmp8 = fastPathAcceptsAbsence(def.innerType);
        }
        return tmp8;
      case "readonly":
        innerType = def.innerType;
        tmp8 = !innerType;
        if (innerType) {
          tmp8 = fastPathAcceptsAbsence(def.innerType);
        }
        return tmp8;
      case "success":
        innerType = def.innerType;
        tmp8 = !innerType;
        if (innerType) {
          tmp8 = fastPathAcceptsAbsence(def.innerType);
        }
        return tmp8;
      case "union":
        const options = def.options;
        let someResult = !options;
        if (options) {
          const options2 = def.options;
          someResult = options2.some(fastPathAcceptsAbsence);
        }
        return someResult;
      case "intersection":
        const left = def.left;
        let tmp3 = !left;
        if (left) {
          tmp3 = !def.right;
        }
        if (!tmp3) {
          let tmp4Result = fastPathAcceptsAbsence(def.left);
          if (tmp4Result) {
            tmp4Result = fastPathAcceptsAbsence(def.right);
          }
          tmp3 = tmp4Result;
        }
        return tmp3;
      case "pipe":
        const _in = def.in;
        let tmp = !_in;
        if (_in) {
          tmp = fastPathAcceptsAbsence(def.in);
        }
        return tmp;
      default:
        return true;
    }
  }
}
function dropsWhenAbsent(_zod) {
  return "optional" === _zod._zod.optin && "optional" === _zod._zod.optout;
}
function mayOmitUndefined(_zod) {
  let tmp = "defaulted" !== _zod._zod.optin;
  if (!tmp) {
    tmp = "optional" === _zod._zod.optout;
  }
  if (tmp) {
    tmp = mayOutputUndefined(_zod);
  }
  return tmp;
}
function mayOutputUndefined(innerType) {
  const def = innerType._zod.def;
  switch (def.type) {
    case "string":
      return false;
    case "number":
      return false;
    case "boolean":
      return false;
    case "bigint":
      return false;
    case "symbol":
      return false;
    case "null":
      return false;
    case "nan":
      return false;
    case "date":
      return false;
    case "object":
      return false;
    case "array":
      return false;
    case "tuple":
      return false;
    case "record":
      return false;
    case "map":
      return false;
    case "set":
      return false;
    case "file":
      return false;
    case "template_literal":
      return false;
    case "never":
      return false;
    case "success":
      return false;
    case "literal":
      const values2 = def.values;
      let hasItem;
      if (values2 != null) {
        hasItem = values2.includes(undefined);
      }
      return hasItem;
    case "enum":
      const values = innerType._zod.values;
      let hasItem1;
      if (values != null) {
        hasItem1 = values.has(undefined);
      }
      return hasItem1;
    case "optional":
      return true;
    case "nullable":
      innerType = def.innerType;
      let tmp8 = !innerType;
      if (innerType) {
        tmp8 = mayOutputUndefined(def.innerType);
      }
      return tmp8;
    case "readonly":
      innerType = def.innerType;
      tmp8 = !innerType;
      if (innerType) {
        tmp8 = mayOutputUndefined(def.innerType);
      }
      return tmp8;
    case "nonoptional":
      innerType = def.innerType;
      tmp8 = !innerType;
      if (innerType) {
        tmp8 = mayOutputUndefined(def.innerType);
      }
      return tmp8;
    case "union":
      const options = def.options;
      let someResult = !options;
      if (options) {
        const options2 = def.options;
        someResult = options2.some(mayOutputUndefined);
      }
      return someResult;
    case "intersection":
      const left = def.left;
      let tmp3 = !left;
      if (left) {
        tmp3 = !def.right;
      }
      if (!tmp3) {
        tmp3 = mayOutputUndefined(def.left);
      }
      if (!tmp3) {
        tmp3 = mayOutputUndefined(def.right);
      }
      return tmp3;
    case "pipe":
      const out = def.out;
      let tmp = !out;
      if (out) {
        tmp = mayOutputUndefined(def.out);
      }
      return tmp;
    default:
      return true;
  }
}
function generateSizeGate(write, _zod, arg2) {
  const sizeCapsResult = closure_11.sizeCaps(_zod._zod.def.checks);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let _HermesInternal = HermesInternal;
    let str = "if (";
    let str2 = " > ";
    let str3 = ") return INVALID;";
    let writeResult = write.write("if (" + arg2 + " > " + numericOperand(tmp5[0], tmp5[1]._zod.def.check) + ") return INVALID;");
    continue;
  }
  tmp2 = closure_11.sizeCaps(_zod._zod.def.checks)[Symbol.iterator]();
}
function emitOwnKeys(write, varCounter, arg2, arg3, arg4, arg5) {
  closure_0 = arg2;
  closure_1 = arg3;
  closure_2 = arg4;
  closure_3 = arg5;
  closure_4 = addConstant(varCounter, Object.prototype.propertyIsEnumerable);
  varCounter.varCounter = +varCounter.varCounter + 1;
  const text = `v${tmp}`;
  closure_5 = text;
  varCounter.varCounter = +varCounter.varCounter + 1;
  const text1 = `v${tmp3}`;
  varCounter.varCounter = +varCounter.varCounter + 1;
  const text2 = `v${tmp5}`;
  write.write("const " + `v${+varCounter.varCounter}` + " = Object.getOwnPropertySymbols(" + arg2 + ");");
  write.write("const " + `v${+varCounter.varCounter}` + " = Object.getOwnPropertyNames(" + arg2 + ");");
  write.write("for (let " + `v${+varCounter.varCounter}` + " = 0; " + `v${+varCounter.varCounter}` + " < " + `v${+varCounter.varCounter}` + ".length; " + `v${+varCounter.varCounter}` + "++) {");
  write.indented((write) => {
    write.write("const " + closure_1 + " = " + text1 + "[" + text2 + "];");
    write.write("if (" + closure_1 + " === \"__proto__\" || !" + closure_4 + ".call(" + closure_0 + ", " + closure_1 + ")) continue;");
    closure_2(write);
  });
  write.write("}");
  write.write("for (let " + `v${+varCounter.varCounter}` + " = 0; " + `v${+varCounter.varCounter}` + " < " + `v${+varCounter.varCounter}` + ".length; " + `v${+varCounter.varCounter}` + "++) {");
  write.indented((write) => {
    write.write("const " + closure_1 + " = " + text + "[" + text2 + "];");
    write.write("if (!" + closure_4 + ".call(" + closure_0 + ", " + closure_1 + ")) continue;");
    if (closure_3) {
      write.write(tmp3);
    } else {
      closure_2(write);
    }
  });
  write.write("}");
}
function literalPropertyKey(constantCounter, discriminator) {
  if (typeof discriminator === "string") {
    let escResult = closure_11.esc(discriminator);
  } else {
    escResult = addConstant(constantCounter, discriminator);
  }
  return escResult;
}
function runtimeCatch(_zod, fn, value) {
  _zod = _zod._zod;
  const runResult = _zod.run({ value, issues: [] }, {});
  if (runResult) {
    if (typeof runResult.then === "function") {
      return exports.INVALID;
    }
  }
  if (0 === runResult.issues.length) {
    value = runResult.value;
  } else {
    value = fn();
  }
  return value;
}
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.INVALID = undefined;
    exports.ZodCompileAsyncError = undefined;
    exports.ZodCompileUnsupportedError = undefined;
    exports.compile = function compile(_zod, strict) {
      try {
        const tmp3 = compileFn(_zod);
        const tmp5 = withParser(_zod, tmp3);
        tmp5._zod.bag.validator = (function compileValidator(_zod, arg1) {
          try {
            return compileFn(_zod, { assertOnly: true });
          } catch (err) {
            return arg1;
          }
        })(_zod, tmp3);
        return tmp5;
      } catch (tmp6) {
        strict = undefined;
        if (strict != null) {
          strict = strict.strict;
        }
        if (strict) {
          throw tmp6;
        } else {
          return tmp;
        }
      }
    };
    exports.withParser = withParser;
    exports.compileFn = compileFn;
    let closure_10 = fn(_mod12165);
    let closure_11 = fn(_mod12160);
    let _Symbol = Symbol;
    exports.INVALID = Symbol.for("zod.compile.invalid");
    let _Symbol2 = Symbol;
    let closure_12 = Symbol.for("zod.compile.fallback");
    const _Error = Error;
    class ZodCompileAsyncError {
      constructor() {
        str = global;
        if (global === undefined) {
          str = "z.compile does not support async refinements, transforms, or checks";
        }
        self = this;
        tmp = closure_4(this, ZodCompileUnsupportedError);
        items = [];
        items[0] = str;
        tmp2 = closure_6;
        obj = closure_6(ZodCompileUnsupportedError);
        tmp3 = hasOwnProperty;
        if (metroImportDefault()) {
          tmp5 = globalThis;
          _Reflect = Reflect;
          constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        tmp3Result = tmp3(self, constructResult);
        tmp3Result.name = "ZodCompileAsyncError";
        return tmp3Result;
      }
    }
    ZodCompileUnsupportedError = ZodCompileAsyncError;
    _inherits(ZodCompileAsyncError, _wrapNativeSuper(Error));
    const _moduleResult = _createClass(ZodCompileAsyncError);
    exports.ZodCompileAsyncError = _moduleResult;
    const _Error2 = Error;
    class ZodCompileUnsupportedError {
      constructor(arg0) {
        flag = require;
        if (require === undefined) {
          flag = true;
        }
        self = this;
        tmp = closure_4(this, ZodCompileUnsupportedError);
        items = [];
        items[0] = "z.compile does not support " + global + "; this schema must use the runtime parser";
        tmp2 = closure_6;
        obj = closure_6(ZodCompileUnsupportedError);
        tmp3 = hasOwnProperty;
        if (metroImportDefault()) {
          _Reflect = Reflect;
          constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        tmp3Result = tmp3(self, constructResult);
        tmp3Result.name = "ZodCompileUnsupportedError";
        tmp3Result.islandable = flag;
        return tmp3Result;
      }
    }
    _inherits(ZodCompileUnsupportedError, _wrapNativeSuper(Error));
    const _moduleResult1 = _createClass(ZodCompileUnsupportedError);
    exports.ZodCompileUnsupportedError = _moduleResult1;
    let _Set = Set;
    let set = new Set(["max_size", "min_size", "size_equals", "max_length", "min_length", "length_equals"]);
    let _Set2 = Set;
    let set1 = new Set(["cidrv4", "cuid", "cuid2", "date", "datetime", "duration", "e164", "email", "emoji", "ends_with", "guid", "includes", "ipv4", "ksuid", "lowercase", "mac", "nanoid", "regex", "starts_with", "time", "ulid", "uppercase", "uuid", "xid"]);
    (() => {
      let tmp = exports;
      const ownPropertyNames = Object.getOwnPropertyNames(exports);
      let num = 0;
      if (0 < ownPropertyNames.length) {
        const _Object = Object;
        const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(exports, ownPropertyNames[num]);
        if (ownPropertyDescriptor) {
          if (ownPropertyDescriptor.get) {
            if (ownPropertyDescriptor.configurable) {
              try {
                value = ownPropertyDescriptor.get();
                if (undefined !== value) {
                  const _Object2 = Object;
                  const obj = { value, writable: false, enumerable: ownPropertyDescriptor.enumerable, configurable: false };
                  Object.defineProperty(exports, ownPropertyNames[num], obj);
                }
              } catch (err) {
              }
            }
          }
        }
        num = num + 1;
        tmp = exports;
      }
      const frozen = Object.freeze(tmp);
    })();
  } else {
    let _Object2 = Object;
  }
} else {
  let _Object = Object;
}