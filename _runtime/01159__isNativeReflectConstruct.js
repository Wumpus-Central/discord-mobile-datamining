// === Module 1159: _isNativeReflectConstruct ===

// Module 1159 (_isNativeReflectConstruct)
import closure_2 from "_possibleConstructorReturn" /* 93 */;
import closure_3 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import _createClass from "_createClass" /* 42 */;
import closure_4 from "_classCallCheck" /* 41 */;

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
  ({ locales: closure_3, values: closure_4, dataFormatters: _isNativeReflectConstruct, formatConfig: isRichTextTag, currentPluralValue: closure_7, keyPrefix: bindFormatValuesWithBuilder } = builder);
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
        let pushLiteralTextResult1 = v0;
        if (typeof pushLiteralTextResult1[v0] === "string") {
          builder.pushLiteralText(tmp2);
          return 0;
        } else {
          const first = tmp2[0];
          if (first === builder(originalMessage[6]).FormatJsNodeType.Pound) {
            if (typeof currentPluralValue === "number") {
              pushLiteralTextResult1 = dataFormatters;
              pushLiteralTextResult1 = builder;
              pushLiteralTextResult1 = builder;
              pushLiteralTextResult1 = builder.pushLiteralText(dataFormatters.formatNumber(tmp93));
            }
            return 0;
          } else {
            pushLiteralTextResult1 = tmp2[1];
            pushLiteralTextResult1 = values;
            if (!(pushLiteralTextResult1 in values)) {
              if (!formatConfig(pushLiteralTextResult1)) {
                const tmp10 = new currentPluralValue(pushLiteralTextResult1, pushLiteralTextResult1, first);
                throw tmp10;
              }
            }
            builder = tmp12;
            if (tmp98(tmp99[6]).FormatJsNodeType.Argument === first) {
              if (typeof tmp12 !== "object") {
                if (typeof tmp12 !== "function") {
                  pushLiteralTextResult1 = builder;
                  pushLiteralTextResult1 = builder;
                  pushLiteralTextResult1 = globalThis;
                  const _String = String;
                  pushLiteralTextResult1 = builder.pushLiteralText(String(tmp12));
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
                pushLiteralTextResult1 = null;
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
              let obj = { Builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
              obj[0] = builder.constructor;
              obj[1] = tmp2[2];
              obj[2] = closure_3;
              obj[3] = dataFormatters;
              obj[4] = formatConfig;
              obj[5] = pushLiteralTextResult1;
              obj[6] = currentPluralValue;
              const _HermesInternal5 = HermesInternal;
              obj[7] = "" + keyPrefix + "." + pushLiteralTextResult1;
              const tmp49 = v0(obj);
              if (null != tmp2[3]) {
                obj = { Builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                obj[0] = obj6.constructor;
                obj[1] = tmp40;
                obj[2] = tmp43;
                obj[3] = tmp44;
                obj[4] = tmp45;
                obj[5] = pushLiteralTextResult1;
                obj[6] = tmp46;
                const _HermesInternal6 = HermesInternal;
                obj[7] = "" + tmp47 + "." + pushLiteralTextResult1 + "-control";
                let items = tmp41(obj);
              } else {
                items = [];
              }
              if (formatConfig(pushLiteralTextResult1)) {
                obj6.pushRichTextTag(pushLiteralTextResult1, tmp49, items);
              } else if (typeof tmp12 !== "function") {
                const _HermesInternal7 = HermesInternal;
                throw "expected a function type for a Tag formatting value, " + pushLiteralTextResult1 + ". got " + typeof tmp12 + ": " + tmp12;
              } else {
                const _HermesInternal8 = HermesInternal;
                pushLiteralTextResult1 = tmp12(tmp49, "" + tmp47 + "." + pushLiteralTextResult1);
                const _Array = Array;
                let tmp55 = pushLiteralTextResult1;
                if (!Array.isArray(pushLiteralTextResult1)) {
                  items = [pushLiteralTextResult1];
                  tmp55 = items;
                }
                for (const item10128 of tmp55) {
                  let tmp58 = item10128;
                  if (typeof item10128 === "string") {
                    let tmp59 = builder;
                    let tmp60 = builder;
                    let tmp61 = item10128;
                    let pushLiteralTextResult5 = builder.pushLiteralText(tmp58);
                  } else {
                    pushLiteralTextResult1 = builder;
                    pushLiteralTextResult1 = builder;
                    pushLiteralTextResult1 = item10128;
                    pushLiteralTextResult1 = builder.pushObject(tmp58);
                  }
                  continue;
                }
              }
              tmp41 = v0;
              tmp43 = closure_3;
              tmp44 = dataFormatters;
              tmp45 = formatConfig;
              tmp46 = currentPluralValue;
            } else if (tmp98(tmp99[6]).FormatJsNodeType.Select === first) {
              const tmp26 = tmp12 in tmp2[2] ? tmp2[2][tmp12] : tmp2[2].other;
              if (null == tmp26) {
                const _Object2 = Object;
                const keys = Object.keys(tmp25);
                const _HermesInternal4 = HermesInternal;
                throw "" + tmp12 + " is not a known option for select value " + pushLiteralTextResult1 + ". Valid options are " + keys.join(", ");
              } else {
                obj1 = { builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, keyPrefix: null };
                obj1[0] = builder;
                obj1[1] = tmp26;
                obj1[2] = closure_3;
                obj1[3] = dataFormatters;
                obj1[4] = formatConfig;
                obj1[5] = pushLiteralTextResult1;
                const _HermesInternal3 = HermesInternal;
                obj1[6] = "" + keyPrefix + "." + pushLiteralTextResult1;
                keyPrefix(obj1);
              }
            } else if (tmp98(tmp99[6]).FormatJsNodeType.Plural === first) {
              pushLiteralTextResult1 = tmp2[2];
              pushLiteralTextResult1 = tmp2[3];
              closure_3 = tmp2[4];
              pushLiteralTextResult1 = (() => {
                const combined = "=" + closure_0;
                if (combined in pushLiteralTextResult1) {
                  return tmp3[combined];
                } else {
                  const obj = { type: null };
                  obj[0] = closure_3;
                  const pluralRules = closure_1_5.getPluralRules(obj);
                  let num = 0;
                  if (null != pushLiteralTextResult1) {
                    num = pushLiteralTextResult1;
                  }
                  let other = tmp3[pluralRules.select(pluralRules, tmp - num)];
                  if (null === other) {
                    other = tmp3.other;
                  }
                  return other;
                }
                tmp = closure_0;
              })();
              pushLiteralTextResult1 = null;
              if (null == pushLiteralTextResult1) {
                const _Object = Object;
                const keys1 = Object.keys(pushLiteralTextResult1);
                const _HermesInternal2 = HermesInternal;
                throw "" + tmp12 + " is not a known option for plural value " + pushLiteralTextResult1 + ". Valid options are " + keys1.join(", ");
              } else {
                obj = { builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                obj[0] = builder;
                obj[1] = pushLiteralTextResult1;
                obj[2] = closure_3;
                obj[3] = dataFormatters;
                obj[4] = formatConfig;
                obj[5] = pushLiteralTextResult1;
                let num2 = 0;
                if (null != pushLiteralTextResult1) {
                  num2 = pushLiteralTextResult1;
                }
                obj[6] = tmp12 - num2;
                const _HermesInternal = HermesInternal;
                obj[7] = "" + keyPrefix + "." + pushLiteralTextResult1;
                keyPrefix(obj);
                const tmp13 = keyPrefix;
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
          let pushLiteralTextResult1 = v0;
          if (typeof pushLiteralTextResult1[v0] === "string") {
            builder.pushLiteralText(tmp2);
            return 0;
          } else {
            const first = tmp2[0];
            if (first === builder(originalMessage[6]).FormatJsNodeType.Pound) {
              if (typeof currentPluralValue === "number") {
                pushLiteralTextResult1 = dataFormatters;
                pushLiteralTextResult1 = builder;
                pushLiteralTextResult1 = builder;
                pushLiteralTextResult1 = builder.pushLiteralText(dataFormatters.formatNumber(tmp93));
              }
              return 0;
            } else {
              pushLiteralTextResult1 = tmp2[1];
              pushLiteralTextResult1 = values;
              if (!(pushLiteralTextResult1 in values)) {
                if (!formatConfig(pushLiteralTextResult1)) {
                  const tmp10 = new currentPluralValue(pushLiteralTextResult1, pushLiteralTextResult1, first);
                  throw tmp10;
                }
              }
              builder = tmp12;
              if (tmp98(tmp99[6]).FormatJsNodeType.Argument === first) {
                if (typeof tmp12 !== "object") {
                  if (typeof tmp12 !== "function") {
                    pushLiteralTextResult1 = builder;
                    pushLiteralTextResult1 = builder;
                    pushLiteralTextResult1 = globalThis;
                    const _String = String;
                    pushLiteralTextResult1 = builder.pushLiteralText(String(tmp12));
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
                  pushLiteralTextResult1 = null;
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
                let obj = { Builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                obj[0] = builder.constructor;
                obj[1] = tmp2[2];
                obj[2] = closure_3;
                obj[3] = dataFormatters;
                obj[4] = formatConfig;
                obj[5] = pushLiteralTextResult1;
                obj[6] = currentPluralValue;
                const _HermesInternal5 = HermesInternal;
                obj[7] = "" + keyPrefix + "." + pushLiteralTextResult1;
                const tmp49 = v0(obj);
                if (null != tmp2[3]) {
                  obj = { Builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                  obj[0] = obj6.constructor;
                  obj[1] = tmp40;
                  obj[2] = tmp43;
                  obj[3] = tmp44;
                  obj[4] = tmp45;
                  obj[5] = pushLiteralTextResult1;
                  obj[6] = tmp46;
                  const _HermesInternal6 = HermesInternal;
                  obj[7] = "" + tmp47 + "." + pushLiteralTextResult1 + "-control";
                  let items = tmp41(obj);
                } else {
                  items = [];
                }
                if (formatConfig(pushLiteralTextResult1)) {
                  obj6.pushRichTextTag(pushLiteralTextResult1, tmp49, items);
                } else if (typeof tmp12 !== "function") {
                  const _HermesInternal7 = HermesInternal;
                  throw "expected a function type for a Tag formatting value, " + pushLiteralTextResult1 + ". got " + typeof tmp12 + ": " + tmp12;
                } else {
                  const _HermesInternal8 = HermesInternal;
                  pushLiteralTextResult1 = tmp12(tmp49, "" + tmp47 + "." + pushLiteralTextResult1);
                  const _Array = Array;
                  let tmp55 = pushLiteralTextResult1;
                  if (!Array.isArray(pushLiteralTextResult1)) {
                    items = [pushLiteralTextResult1];
                    tmp55 = items;
                  }
                  for (const item10128 of tmp55) {
                    let tmp58 = item10128;
                    if (typeof item10128 === "string") {
                      let tmp59 = builder;
                      let tmp60 = builder;
                      let tmp61 = item10128;
                      let pushLiteralTextResult5 = builder.pushLiteralText(tmp58);
                    } else {
                      pushLiteralTextResult1 = builder;
                      pushLiteralTextResult1 = builder;
                      pushLiteralTextResult1 = item10128;
                      pushLiteralTextResult1 = builder.pushObject(tmp58);
                    }
                    continue;
                  }
                }
                tmp41 = v0;
                tmp43 = closure_3;
                tmp44 = dataFormatters;
                tmp45 = formatConfig;
                tmp46 = currentPluralValue;
              } else if (tmp98(tmp99[6]).FormatJsNodeType.Select === first) {
                const tmp26 = tmp12 in tmp2[2] ? tmp2[2][tmp12] : tmp2[2].other;
                if (null == tmp26) {
                  const _Object2 = Object;
                  const keys = Object.keys(tmp25);
                  const _HermesInternal4 = HermesInternal;
                  throw "" + tmp12 + " is not a known option for select value " + pushLiteralTextResult1 + ". Valid options are " + keys.join(", ");
                } else {
                  obj1 = { builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, keyPrefix: null };
                  obj1[0] = builder;
                  obj1[1] = tmp26;
                  obj1[2] = closure_3;
                  obj1[3] = dataFormatters;
                  obj1[4] = formatConfig;
                  obj1[5] = pushLiteralTextResult1;
                  const _HermesInternal3 = HermesInternal;
                  obj1[6] = "" + keyPrefix + "." + pushLiteralTextResult1;
                  keyPrefix(obj1);
                }
              } else if (tmp98(tmp99[6]).FormatJsNodeType.Plural === first) {
                pushLiteralTextResult1 = tmp2[2];
                pushLiteralTextResult1 = tmp2[3];
                closure_3 = tmp2[4];
                pushLiteralTextResult1 = (() => {
                  const combined = "=" + closure_0;
                  if (combined in pushLiteralTextResult1) {
                    return tmp3[combined];
                  } else {
                    const obj = { type: null };
                    obj[0] = closure_3;
                    const pluralRules = closure_1_5.getPluralRules(obj);
                    let num = 0;
                    if (null != pushLiteralTextResult1) {
                      num = pushLiteralTextResult1;
                    }
                    let other = tmp3[pluralRules.select(pluralRules, tmp - num)];
                    if (null === other) {
                      other = tmp3.other;
                    }
                    return other;
                  }
                  tmp = closure_0;
                })();
                pushLiteralTextResult1 = null;
                if (null == pushLiteralTextResult1) {
                  const _Object = Object;
                  const keys1 = Object.keys(pushLiteralTextResult1);
                  const _HermesInternal2 = HermesInternal;
                  throw "" + tmp12 + " is not a known option for plural value " + pushLiteralTextResult1 + ". Valid options are " + keys1.join(", ");
                } else {
                  obj = { builder: null, nodes: null, locales: null, dataFormatters: null, formatConfig: null, values: null, currentPluralValue: null, keyPrefix: null };
                  obj[0] = builder;
                  obj[1] = pushLiteralTextResult1;
                  obj[2] = closure_3;
                  obj[3] = dataFormatters;
                  obj[4] = formatConfig;
                  obj[5] = pushLiteralTextResult1;
                  let num2 = 0;
                  if (null != pushLiteralTextResult1) {
                    num2 = pushLiteralTextResult1;
                  }
                  obj[6] = tmp12 - num2;
                  const _HermesInternal = HermesInternal;
                  obj[7] = "" + keyPrefix + "." + pushLiteralTextResult1;
                  keyPrefix(obj);
                  const tmp13 = keyPrefix;
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