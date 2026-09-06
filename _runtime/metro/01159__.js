// === Module 1159: ? ===

// Module 1159
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

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
            if (tmp98(tmp99[6]).FormatJsNodeType.Argument === first) {
              if (typeof tmp12 !== "object") {
                if (typeof tmp12 !== "function") {
                  const _String = String;
                  builder.pushLiteralText(String(tmp12));
                }
              }
              builder.pushObject(tmp12);
            } else if (tmp98(tmp99[6]).FormatJsNodeType.Date === first) {
              if (tmp2[2] in formatConfig.date) {
                let result = formatConfig.date[tmp83];
              } else if (null != tmp83) {
                result = tmp98(tmp99[7]).parseDateTimeSkeleton(tmp83);
              }
              builder.pushLiteralText(dataFormatters.formatDate(tmp12, result));
            } else if (tmp98(tmp99[6]).FormatJsNodeType.Time === first) {
              if (tmp2[2] in formatConfig.time) {
                let result1 = formatConfig.time[tmp76];
              } else if (null != tmp76) {
                result1 = tmp98(tmp99[7]).parseDateTimeSkeleton(tmp76);
              }
              builder.pushLiteralText(dataFormatters.formatTime(tmp12, result1));
            } else if (tmp98(tmp99[6]).FormatJsNodeType.Number === first) {
              if (tmp2[2] in formatConfig.number) {
                let parseNumberSkeletonResult = formatConfig.number[tmp67];
              } else if (null != tmp67) {
                parseNumberSkeletonResult = tmp98(tmp99[7]).parseNumberSkeleton(tmp98(tmp99[7]).parseNumberSkeletonFromString(tmp67));
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
            } else if (tmp98(tmp99[6]).FormatJsNodeType.Tag === first) {
              let obj = { Builder: builder.constructor, nodes: tmp2[2], locales, dataFormatters, formatConfig, values: tmp101, currentPluralValue, keyPrefix: null };
              const _HermesInternal5 = HermesInternal;
              obj.keyPrefix = "" + keyPrefix + "." + tmp;
              const tmp49 = v0(obj);
              if (null != tmp2[3]) {
                obj = { Builder: obj6.constructor, nodes: tmp40, locales: tmp43, dataFormatters: tmp44, formatConfig: tmp45, values: tmp101, currentPluralValue: tmp46, keyPrefix: null };
                const _HermesInternal6 = HermesInternal;
                obj.keyPrefix = "" + tmp47 + "." + tmp + "-control";
                let items = tmp41(obj);
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
                const tmp12Result = tmp12(tmp49, "" + tmp47 + "." + tmp);
                const _Array = Array;
                let tmp55 = tmp12Result;
                if (!Array.isArray(tmp12Result)) {
                  items = [tmp12Result];
                  tmp55 = items;
                }
                for (const item10128 of tmp55) {
                  let tmp58 = item10128;
                  if (typeof item10128 === "string") {
                    let pushLiteralTextResult6 = builder.pushLiteralText(tmp58);
                  } else {
                    let pushObjectResult1 = builder.pushObject(tmp58);
                  }
                  continue;
                }
              }
              tmp41 = v0;
              tmp43 = locales;
              tmp44 = dataFormatters;
              tmp45 = formatConfig;
              tmp46 = currentPluralValue;
            } else if (tmp98(tmp99[6]).FormatJsNodeType.Select === first) {
              const tmp26 = tmp12 in tmp2[2] ? tmp2[2][tmp12] : tmp2[2].other;
              if (null == tmp26) {
                const _Object2 = Object;
                const keys = Object.keys(tmp25);
                const _HermesInternal4 = HermesInternal;
                throw "" + tmp12 + " is not a known option for select value " + tmp100 + ". Valid options are " + keys.join(", ");
              } else {
                const obj1 = { builder, nodes: tmp26, locales, dataFormatters, formatConfig, values: tmp101, keyPrefix: null };
                const _HermesInternal3 = HermesInternal;
                obj1.keyPrefix = "" + keyPrefix + "." + tmp;
                keyPrefix(obj1);
              }
            } else if (tmp98(tmp99[6]).FormatJsNodeType.Plural === first) {
              closure_1 = tmp102;
              nodes = tmp103;
              locales = tmp2[4];
              const tmp104 = (() => {
                const combined = "=" + closure_0;
                if (combined in closure_1) {
                  return tmp3[combined];
                } else {
                  const obj = { type };
                  const pluralRules = dataFormatters.getPluralRules(obj);
                  let num = 0;
                  if (null != closure_2) {
                    num = closure_2;
                  }
                  let other = tmp3[pluralRules.select(pluralRules, tmp - num)];
                  if (null === other) {
                    other = tmp3.other;
                  }
                  return other;
                }
                tmp = closure_0;
              })();
              if (null == tmp104) {
                const _Object = Object;
                const keys1 = Object.keys(tmp102);
                const _HermesInternal2 = HermesInternal;
                throw "" + tmp12 + " is not a known option for plural value " + tmp100 + ". Valid options are " + keys1.join(", ");
              } else {
                obj = { builder, nodes: tmp104, locales, dataFormatters, formatConfig, values: tmp101, currentPluralValue: null, keyPrefix: null };
                let num2 = 0;
                if (null != tmp103) {
                  num2 = tmp103;
                }
                obj.currentPluralValue = tmp12 - num2;
                const _HermesInternal = HermesInternal;
                obj.keyPrefix = "" + keyPrefix + "." + tmp;
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
              if (tmp98(tmp99[6]).FormatJsNodeType.Argument === first) {
                if (typeof tmp12 !== "object") {
                  if (typeof tmp12 !== "function") {
                    const _String = String;
                    builder.pushLiteralText(String(tmp12));
                  }
                }
                builder.pushObject(tmp12);
              } else if (tmp98(tmp99[6]).FormatJsNodeType.Date === first) {
                if (tmp2[2] in formatConfig.date) {
                  let result = formatConfig.date[tmp83];
                } else if (null != tmp83) {
                  result = tmp98(tmp99[7]).parseDateTimeSkeleton(tmp83);
                }
                builder.pushLiteralText(dataFormatters.formatDate(tmp12, result));
              } else if (tmp98(tmp99[6]).FormatJsNodeType.Time === first) {
                if (tmp2[2] in formatConfig.time) {
                  let result1 = formatConfig.time[tmp76];
                } else if (null != tmp76) {
                  result1 = tmp98(tmp99[7]).parseDateTimeSkeleton(tmp76);
                }
                builder.pushLiteralText(dataFormatters.formatTime(tmp12, result1));
              } else if (tmp98(tmp99[6]).FormatJsNodeType.Number === first) {
                if (tmp2[2] in formatConfig.number) {
                  let parseNumberSkeletonResult = formatConfig.number[tmp67];
                } else if (null != tmp67) {
                  parseNumberSkeletonResult = tmp98(tmp99[7]).parseNumberSkeleton(tmp98(tmp99[7]).parseNumberSkeletonFromString(tmp67));
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
              } else if (tmp98(tmp99[6]).FormatJsNodeType.Tag === first) {
                let obj = { Builder: builder.constructor, nodes: tmp2[2], locales, dataFormatters, formatConfig, values: tmp101, currentPluralValue, keyPrefix: null };
                const _HermesInternal5 = HermesInternal;
                obj.keyPrefix = "" + keyPrefix + "." + tmp;
                const tmp49 = v0(obj);
                if (null != tmp2[3]) {
                  obj = { Builder: obj6.constructor, nodes: tmp40, locales: tmp43, dataFormatters: tmp44, formatConfig: tmp45, values: tmp101, currentPluralValue: tmp46, keyPrefix: null };
                  const _HermesInternal6 = HermesInternal;
                  obj.keyPrefix = "" + tmp47 + "." + tmp + "-control";
                  let items = tmp41(obj);
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
                  const tmp12Result = tmp12(tmp49, "" + tmp47 + "." + tmp);
                  const _Array = Array;
                  let tmp55 = tmp12Result;
                  if (!Array.isArray(tmp12Result)) {
                    items = [tmp12Result];
                    tmp55 = items;
                  }
                  for (const item10128 of tmp55) {
                    let tmp58 = item10128;
                    if (typeof item10128 === "string") {
                      let pushLiteralTextResult6 = builder.pushLiteralText(tmp58);
                    } else {
                      let pushObjectResult1 = builder.pushObject(tmp58);
                    }
                    continue;
                  }
                }
                tmp41 = v0;
                tmp43 = locales;
                tmp44 = dataFormatters;
                tmp45 = formatConfig;
                tmp46 = currentPluralValue;
              } else if (tmp98(tmp99[6]).FormatJsNodeType.Select === first) {
                const tmp26 = tmp12 in tmp2[2] ? tmp2[2][tmp12] : tmp2[2].other;
                if (null == tmp26) {
                  const _Object2 = Object;
                  const keys = Object.keys(tmp25);
                  const _HermesInternal4 = HermesInternal;
                  throw "" + tmp12 + " is not a known option for select value " + tmp100 + ". Valid options are " + keys.join(", ");
                } else {
                  const obj1 = { builder, nodes: tmp26, locales, dataFormatters, formatConfig, values: tmp101, keyPrefix: null };
                  const _HermesInternal3 = HermesInternal;
                  obj1.keyPrefix = "" + keyPrefix + "." + tmp;
                  keyPrefix(obj1);
                }
              } else if (tmp98(tmp99[6]).FormatJsNodeType.Plural === first) {
                closure_1 = tmp102;
                nodes = tmp103;
                locales = tmp2[4];
                const tmp104 = (() => {
                  const combined = "=" + closure_0;
                  if (combined in closure_1) {
                    return tmp3[combined];
                  } else {
                    const obj = { type };
                    const pluralRules = dataFormatters.getPluralRules(obj);
                    let num = 0;
                    if (null != closure_2) {
                      num = closure_2;
                    }
                    let other = tmp3[pluralRules.select(pluralRules, tmp - num)];
                    if (null === other) {
                      other = tmp3.other;
                    }
                    return other;
                  }
                  tmp = closure_0;
                })();
                if (null == tmp104) {
                  const _Object = Object;
                  const keys1 = Object.keys(tmp102);
                  const _HermesInternal2 = HermesInternal;
                  throw "" + tmp12 + " is not a known option for plural value " + tmp100 + ". Valid options are " + keys1.join(", ");
                } else {
                  obj = { builder, nodes: tmp104, locales, dataFormatters, formatConfig, values: tmp101, currentPluralValue: null, keyPrefix: null };
                  let num2 = 0;
                  if (null != tmp103) {
                    num2 = tmp103;
                  }
                  obj.currentPluralValue = tmp12 - num2;
                  const _HermesInternal = HermesInternal;
                  obj.keyPrefix = "" + keyPrefix + "." + tmp;
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
    tmp3 = c2;
    if (hasOwnProperty()) {
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