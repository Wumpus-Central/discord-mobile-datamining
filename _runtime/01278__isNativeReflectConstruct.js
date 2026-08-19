// _runtime/01278__isNativeReflectConstruct.js
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import _wrapNativeSuper from "metro/00158__wrapNativeSuper.js";
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const MissingValueError = require;
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
function isRichTextTag(arg0) {
  return "$" === arg0[0];
}
function bindFormatValuesWithBuilder(builder) {
  let length;
  let sum;
  builder = builder.builder;
  ({ originalMessage: dependencyMap, nodes } = builder);
  ({ locales: _getPrototypeOf, values: _classCallCheck, dataFormatters: _isNativeReflectConstruct, formatConfig: isRichTextTag, currentPluralValue: closure_7, keyPrefix: bindFormatValuesWithBuilder } = builder);
  if (1 === nodes.length) {
    if (typeof nodes[0] === "string") {
      builder.pushLiteralText(nodes[0]);
    }
  }
  c9 = 0;
  let num = 0;
  if (0 < nodes.length) {
    do {
      let tmp = (function _loop() {
        if (typeof nodes[v0] === "string") {
          builder.pushLiteralText(tmp2);
          return 0;
        } else {
          const first = tmp2[0];
          if (first === builder(originalMessage[6]).FormatJsNodeType.Pound) {
            if (typeof currentPluralValue === "number") {
              builder.pushLiteralText(dataFormatters.formatNumber(tmp93));
            }
            return 0;
          } else {
            if (!(tmp2[1] in values)) {
              if (!formatConfig(tmp100)) {
                const tmp10 = new currentPluralValue(tmp100, closure_1, first);
                throw tmp10;
              }
            }
            builder = tmp12;
            if (tmp98(originalMessage[6]).FormatJsNodeType.Argument === first) {
              if (typeof tmp12 !== "object") {
                if (typeof tmp12 !== "function") {
                  const _String = String;
                  builder.pushLiteralText(String(tmp12));
                }
              }
              builder.pushObject(tmp12);
            } else if (tmp98(originalMessage[6]).FormatJsNodeType.Date === first) {
              if (tmp2[2] in formatConfig.date) {
                let result = formatConfig.date[tmp83];
              } else if (null != tmp83) {
                result = tmp98(originalMessage[7]).parseDateTimeSkeleton(tmp83);
              }
              builder.pushLiteralText(dataFormatters.formatDate(tmp12, result));
            } else if (tmp98(originalMessage[6]).FormatJsNodeType.Time === first) {
              if (tmp2[2] in formatConfig.time) {
                let result1 = formatConfig.time[tmp76];
              } else if (null != tmp76) {
                result1 = tmp98(originalMessage[7]).parseDateTimeSkeleton(tmp76);
              }
              builder.pushLiteralText(dataFormatters.formatTime(tmp12, result1));
            } else if (tmp98(originalMessage[6]).FormatJsNodeType.Number === first) {
              if (tmp2[2] in formatConfig.number) {
                let parseNumberSkeletonResult = formatConfig.number[tmp67];
              } else if (null != tmp67) {
                parseNumberSkeletonResult = tmp98(originalMessage[7]).parseNumberSkeleton(tmp98(originalMessage[7]).parseNumberSkeletonFromString(tmp67));
              }
              let result2 = tmp12;
              if (typeof tmp12 === "number") {
                let scale;
                if (null != parseNumberSkeletonResult) {
                  scale = parseNumberSkeletonResult.scale;
                }
                let num5 = 1;
                if (null !== scale) {
                  num5 = 1;
                  if (undefined !== scale) {
                    num5 = scale;
                  }
                }
                result2 = tmp12 * num5;
              }
              builder.pushLiteralText(dataFormatters.formatNumber(result2, parseNumberSkeletonResult));
            } else if (tmp98(originalMessage[6]).FormatJsNodeType.Tag === first) {
              let obj = { Builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
              obj[0] = builder.constructor;
              obj[1] = tmp2[2];
              obj[2] = closure_3;
              obj[3] = dataFormatters;
              obj[4] = formatConfig;
              obj[5] = values;
              obj[6] = currentPluralValue;
              const _HermesInternal5 = HermesInternal;
              obj[7] = "" + keyPrefix + "." + v0;
              const tmp49 = v0(obj);
              if (null != tmp2[3]) {
                obj = { Builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                obj[0] = obj6.constructor;
                obj[1] = tmp40;
                obj[2] = tmp43;
                obj[3] = dataFormatters;
                obj[4] = formatConfig;
                obj[5] = values;
                obj[6] = currentPluralValue;
                const _HermesInternal6 = HermesInternal;
                obj[7] = "" + keyPrefix + "." + v0 + "-control";
                let items = v0(obj);
              } else {
                items = [];
              }
              if (formatConfig(tmp100)) {
                obj6.pushRichTextTag(tmp100, tmp49, items);
              } else if (typeof tmp12 !== "function") {
                const _HermesInternal7 = HermesInternal;
                throw "expected a function type for a Tag formatting value, " + tmp100 + ". got " + typeof tmp12 + ": " + tmp12;
              } else {
                const _HermesInternal8 = HermesInternal;
                const tmp12Result = tmp12(tmp49, "" + keyPrefix + "." + v0);
                const _Array = Array;
                let tmp55 = tmp12Result;
                if (!Array.isArray(tmp12Result)) {
                  items = [tmp12Result];
                  tmp55 = items;
                }
                for (const item10128 of tmp55) {
                  if (typeof item10128 === "string") {
                    let pushLiteralTextResult6 = builder.pushLiteralText(item10128);
                  } else {
                    let pushObjectResult1 = builder.pushObject(item10128);
                  }
                  continue;
                }
              }
              tmp43 = closure_3;
            } else if (tmp98(originalMessage[6]).FormatJsNodeType.Select === first) {
              const tmp26 = tmp12 in tmp2[2] ? tmp2[2][tmp12] : tmp2[2].other;
              if (null == tmp26) {
                const _Object2 = Object;
                const keys = Object.keys(tmp25);
                const _HermesInternal4 = HermesInternal;
                throw "" + tmp12 + " is not a known option for select value " + tmp100 + ". Valid options are " + keys.join(", ");
              } else {
                obj1 = { builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, keyPrefix: null };
                obj1[0] = builder;
                obj1[1] = tmp26;
                obj1[2] = closure_3;
                obj1[3] = dataFormatters;
                obj1[4] = formatConfig;
                obj1[5] = values;
                const _HermesInternal3 = HermesInternal;
                obj1[6] = "" + keyPrefix + "." + v0;
                keyPrefix(obj1);
              }
            } else if (tmp98(originalMessage[6]).FormatJsNodeType.Plural === first) {
              closure_1 = tmp102;
              nodes = tmp103;
              closure_3 = tmp2[4];
              const tmp104 = (() => {
                const combined = "=" + closure_0;
                if (combined in other) {
                  return other[combined];
                } else {
                  const obj = { type: null };
                  obj[0] = closure_3;
                  const pluralRules = dataFormatters.getPluralRules(obj);
                  let num = 0;
                  if (null != closure_2) {
                    num = closure_2;
                  }
                  other = other[pluralRules.select(pluralRules, closure_0 - num)];
                  if (null === other) {
                    other = other.other;
                  }
                  return other;
                }
              })();
              if (null == tmp104) {
                const _Object = Object;
                const keys1 = Object.keys(tmp102);
                const _HermesInternal2 = HermesInternal;
                throw "" + tmp12 + " is not a known option for plural value " + tmp100 + ". Valid options are " + keys1.join(", ");
              } else {
                obj = { builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                obj[0] = builder;
                obj[1] = tmp104;
                obj[2] = closure_3;
                obj[3] = dataFormatters;
                obj[4] = formatConfig;
                obj[5] = values;
                let num2 = 0;
                if (null != tmp103) {
                  num2 = tmp103;
                }
                obj[6] = tmp12 - num2;
                const _HermesInternal = HermesInternal;
                obj[7] = "" + keyPrefix + "." + v0;
                keyPrefix(obj);
              }
            }
          }
        }
      })();
      sum = num + 1;
      c9 = sum;
      num = sum;
      length = nodes.length;
    } while (sum < length);
  }
}
function bindFormatValues(Builder) {
  let length;
  let sum;
  ({ nodes, keyPrefix } = Builder);
  ({ originalMessage, locales, dataFormatters, formatConfig, values, currentPluralValue } = Builder);
  let builder = new Builder.Builder({ keyPrefix });
  if (typeof nodes === "string") {
    builder.pushLiteralText(nodes);
    let finishResult = builder.finish();
  } else {
    if (1 === nodes.length) {
      if (typeof nodes[0] === "string") {
        builder.pushLiteralText(nodes[0]);
      }
      finishResult = builder.finish();
    }
    c9 = 0;
    let num2 = 0;
    if (0 < nodes.length) {
      do {
        let tmp = (function _loop() {
          if (typeof nodes[v0] === "string") {
            builder.pushLiteralText(tmp2);
            return 0;
          } else {
            const first = tmp2[0];
            if (first === builder(originalMessage[6]).FormatJsNodeType.Pound) {
              if (typeof currentPluralValue === "number") {
                builder.pushLiteralText(dataFormatters.formatNumber(tmp93));
              }
              return 0;
            } else {
              if (!(tmp2[1] in values)) {
                if (!formatConfig(tmp100)) {
                  const tmp10 = new currentPluralValue(tmp100, closure_1, first);
                  throw tmp10;
                }
              }
              builder = tmp12;
              if (tmp98(originalMessage[6]).FormatJsNodeType.Argument === first) {
                if (typeof tmp12 !== "object") {
                  if (typeof tmp12 !== "function") {
                    const _String = String;
                    builder.pushLiteralText(String(tmp12));
                  }
                }
                builder.pushObject(tmp12);
              } else if (tmp98(originalMessage[6]).FormatJsNodeType.Date === first) {
                if (tmp2[2] in formatConfig.date) {
                  let result = formatConfig.date[tmp83];
                } else if (null != tmp83) {
                  result = tmp98(originalMessage[7]).parseDateTimeSkeleton(tmp83);
                }
                builder.pushLiteralText(dataFormatters.formatDate(tmp12, result));
              } else if (tmp98(originalMessage[6]).FormatJsNodeType.Time === first) {
                if (tmp2[2] in formatConfig.time) {
                  let result1 = formatConfig.time[tmp76];
                } else if (null != tmp76) {
                  result1 = tmp98(originalMessage[7]).parseDateTimeSkeleton(tmp76);
                }
                builder.pushLiteralText(dataFormatters.formatTime(tmp12, result1));
              } else if (tmp98(originalMessage[6]).FormatJsNodeType.Number === first) {
                if (tmp2[2] in formatConfig.number) {
                  let parseNumberSkeletonResult = formatConfig.number[tmp67];
                } else if (null != tmp67) {
                  parseNumberSkeletonResult = tmp98(originalMessage[7]).parseNumberSkeleton(tmp98(originalMessage[7]).parseNumberSkeletonFromString(tmp67));
                }
                let result2 = tmp12;
                if (typeof tmp12 === "number") {
                  let scale;
                  if (null != parseNumberSkeletonResult) {
                    scale = parseNumberSkeletonResult.scale;
                  }
                  let num5 = 1;
                  if (null !== scale) {
                    num5 = 1;
                    if (undefined !== scale) {
                      num5 = scale;
                    }
                  }
                  result2 = tmp12 * num5;
                }
                builder.pushLiteralText(dataFormatters.formatNumber(result2, parseNumberSkeletonResult));
              } else if (tmp98(originalMessage[6]).FormatJsNodeType.Tag === first) {
                let obj = { Builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                obj[0] = builder.constructor;
                obj[1] = tmp2[2];
                obj[2] = closure_3;
                obj[3] = dataFormatters;
                obj[4] = formatConfig;
                obj[5] = values;
                obj[6] = currentPluralValue;
                const _HermesInternal5 = HermesInternal;
                obj[7] = "" + keyPrefix + "." + v0;
                const tmp49 = v0(obj);
                if (null != tmp2[3]) {
                  obj = { Builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                  obj[0] = obj6.constructor;
                  obj[1] = tmp40;
                  obj[2] = tmp43;
                  obj[3] = dataFormatters;
                  obj[4] = formatConfig;
                  obj[5] = values;
                  obj[6] = currentPluralValue;
                  const _HermesInternal6 = HermesInternal;
                  obj[7] = "" + keyPrefix + "." + v0 + "-control";
                  let items = v0(obj);
                } else {
                  items = [];
                }
                if (formatConfig(tmp100)) {
                  obj6.pushRichTextTag(tmp100, tmp49, items);
                } else if (typeof tmp12 !== "function") {
                  const _HermesInternal7 = HermesInternal;
                  throw "expected a function type for a Tag formatting value, " + tmp100 + ". got " + typeof tmp12 + ": " + tmp12;
                } else {
                  const _HermesInternal8 = HermesInternal;
                  const tmp12Result = tmp12(tmp49, "" + keyPrefix + "." + v0);
                  const _Array = Array;
                  let tmp55 = tmp12Result;
                  if (!Array.isArray(tmp12Result)) {
                    items = [tmp12Result];
                    tmp55 = items;
                  }
                  for (const item10128 of tmp55) {
                    if (typeof item10128 === "string") {
                      let pushLiteralTextResult6 = builder.pushLiteralText(item10128);
                    } else {
                      let pushObjectResult1 = builder.pushObject(item10128);
                    }
                    continue;
                  }
                }
                tmp43 = closure_3;
              } else if (tmp98(originalMessage[6]).FormatJsNodeType.Select === first) {
                const tmp26 = tmp12 in tmp2[2] ? tmp2[2][tmp12] : tmp2[2].other;
                if (null == tmp26) {
                  const _Object2 = Object;
                  const keys = Object.keys(tmp25);
                  const _HermesInternal4 = HermesInternal;
                  throw "" + tmp12 + " is not a known option for select value " + tmp100 + ". Valid options are " + keys.join(", ");
                } else {
                  obj1 = { builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, keyPrefix: null };
                  obj1[0] = builder;
                  obj1[1] = tmp26;
                  obj1[2] = closure_3;
                  obj1[3] = dataFormatters;
                  obj1[4] = formatConfig;
                  obj1[5] = values;
                  const _HermesInternal3 = HermesInternal;
                  obj1[6] = "" + keyPrefix + "." + v0;
                  keyPrefix(obj1);
                }
              } else if (tmp98(originalMessage[6]).FormatJsNodeType.Plural === first) {
                closure_1 = tmp102;
                nodes = tmp103;
                closure_3 = tmp2[4];
                const tmp104 = (() => {
                  const combined = "=" + closure_0;
                  if (combined in other) {
                    return other[combined];
                  } else {
                    const obj = { type: null };
                    obj[0] = closure_3;
                    const pluralRules = dataFormatters.getPluralRules(obj);
                    let num = 0;
                    if (null != closure_2) {
                      num = closure_2;
                    }
                    other = other[pluralRules.select(pluralRules, closure_0 - num)];
                    if (null === other) {
                      other = other.other;
                    }
                    return other;
                  }
                })();
                if (null == tmp104) {
                  const _Object = Object;
                  const keys1 = Object.keys(tmp102);
                  const _HermesInternal2 = HermesInternal;
                  throw "" + tmp12 + " is not a known option for plural value " + tmp100 + ". Valid options are " + keys1.join(", ");
                } else {
                  obj = { builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                  obj[0] = builder;
                  obj[1] = tmp104;
                  obj[2] = closure_3;
                  obj[3] = dataFormatters;
                  obj[4] = formatConfig;
                  obj[5] = values;
                  let num2 = 0;
                  if (null != tmp103) {
                    num2 = tmp103;
                  }
                  obj[6] = tmp12 - num2;
                  const _HermesInternal = HermesInternal;
                  obj[7] = "" + keyPrefix + "." + v0;
                  keyPrefix(obj);
                }
              }
            }
          }
        })();
        sum = num2 + 1;
        c9 = sum;
        num2 = sum;
        length = nodes.length;
      } while (sum < length);
    }
  }
  return finishResult;
}
_possibleConstructorReturn;
class FormatBuilder {
  constructor(arg0) {
    tmp = closure_4(this, FormatBuilder);
    this.context = global;
    return;
  }
}
class MissingValueError {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = closure_4(this, MissingValueError);
    items = [];
    items[0] = "No value for variable '" + global + "' was provided for the localized message '" + require + "'";
    tmp2 = closure_3;
    obj = closure_3(MissingValueError);
    tmp3 = closure_2;
    if (_isNativeReflectConstruct()) {
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.variableName = global;
    tmp3Result.originalMessage = require;
    tmp3Result.nodeType = importDefault;
    return tmp3Result;
  }
}
_inherits(MissingValueError, _wrapNativeSuper(Error));
let closure_7 = _createClass(MissingValueError);

export { bindFormatValuesWithBuilder };
export { bindFormatValues };
export const FormatBuilder = _createClass(FormatBuilder);