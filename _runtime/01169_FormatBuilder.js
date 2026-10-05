// _runtime/01169_FormatBuilder.js
import c2 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import _wrapNativeSuper from "metro/00158__wrapNativeSuper.js";
import _createClass from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
function isRichTextTag(arg0) {
  return "$" === arg0[0];
}
function bindFormatValuesWithBuilder(builder) {
  let length;
  let nodes;
  let sum;
  builder = builder.builder;
  ({ originalMessage: dependencyMap, nodes } = builder);
  ({
    locales: _getPrototypeOf,
    values: _classCallCheck,
    dataFormatters: _isNativeReflectConstruct,
    formatConfig: isRichTextTag,
    currentPluralValue: closure_7,
    keyPrefix: bindFormatValuesWithBuilder,
  } = builder);
  if (1 === nodes.length) {
    if (typeof nodes[0] === "string") {
      builder.pushLiteralText(nodes[0]);
    }
  }
  let c9 = 0;
  let num = 0;
  if (0 < nodes.length) {
    do {
      let tmp = (function _loop() {
        let closure_0;
        let closure_2;
        let num2;
        let other;
        let type;
        if (typeof nodes[v0] === "string") {
          builder.pushLiteralText(nodes[v0]);
          return 0;
        } else {
          const first = tmp2[0];
          if (first === builder(originalMessage[6]).FormatJsNodeType.Pound) {
            if (typeof currentPluralValue === "number") {
              builder.pushLiteralText(dataFormatters.formatNumber(tmp91));
            }
            return 0;
          } else {
            if (!(nodes[v0][1] in values)) {
              let num = 0;
              if (!formatConfig(nodes[v0][1])) {
                const self = this;
                const self2 = this;
                const tmp8 = new currentPluralValue(nodes[v0][1], other, first);
                throw tmp8;
              }
            }
            builder = tmp10;
            if (builder(originalMessage[6]).FormatJsNodeType.Argument === first) {
              if (typeof values[nodes[v0][1]] !== "object") {
                if (typeof values[nodes[v0][1]] !== "function") {
                  const _String = String;
                  builder.pushLiteralText(String(values[nodes[v0][1]]));
                }
              }
              builder.pushObject(values[nodes[v0][1]]);
            } else if (builder(originalMessage[6]).FormatJsNodeType.Date === first) {
              let result;
              if (nodes[v0][2] in formatConfig.date) {
                result = formatConfig.date[tmp81];
              } else if (null != nodes[v0][2]) {
                result = tmp96(originalMessage[7]).parseDateTimeSkeleton(tmp81);
              }
              builder.pushLiteralText(dataFormatters.formatDate(values[nodes[v0][1]], result));
            } else if (builder(originalMessage[6]).FormatJsNodeType.Time === first) {
              let result1;
              if (nodes[v0][2] in formatConfig.time) {
                result1 = formatConfig.time[tmp74];
              } else if (null != nodes[v0][2]) {
                result1 = tmp96(originalMessage[7]).parseDateTimeSkeleton(tmp74);
              }
              builder.pushLiteralText(dataFormatters.formatTime(values[nodes[v0][1]], result1));
            } else if (builder(originalMessage[6]).FormatJsNodeType.Number === first) {
              let parseNumberSkeletonResult;
              if (nodes[v0][2] in formatConfig.number) {
                parseNumberSkeletonResult = formatConfig.number[tmp65];
              } else if (null != nodes[v0][2]) {
                parseNumberSkeletonResult = tmp96(originalMessage[7]).parseNumberSkeleton(
                  tmp96(originalMessage[7]).parseNumberSkeletonFromString(tmp65),
                );
              }
              let result2 = tmp10;
              if (typeof values[nodes[v0][1]] === "number") {
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
                result2 = tmp10 * num5;
              }
              builder.pushLiteralText(dataFormatters.formatNumber(result2, parseNumberSkeletonResult));
            } else if (builder(originalMessage[6]).FormatJsNodeType.Tag === first) {
              let items1;
              const _HermesInternal5 = HermesInternal;
              const obj2 = {
                Builder: builder.constructor,
                nodes: nodes[v0][2],
                locales,
                dataFormatters,
                formatConfig,
                values,
                currentPluralValue,
                keyPrefix: "" + keyPrefix + "." + v0,
              };
              const tmp47 = v0(obj2);
              const tmp41 = locales;
              if (null != nodes[v0][3]) {
                const _HermesInternal6 = HermesInternal;
                const obj3 = {
                  Builder: builder.constructor,
                  nodes: nodes[v0][3],
                  locales: tmp41,
                  dataFormatters,
                  formatConfig,
                  values,
                  currentPluralValue,
                  keyPrefix: "" + keyPrefix + "." + v0 + "-control",
                };
                items1 = v0(obj3);
              } else {
                items1 = [];
              }
              if (formatConfig(nodes[v0][1])) {
                builder.pushRichTextTag(nodes[v0][1], tmp47, items1);
              } else if (typeof values[nodes[v0][1]] !== "function") {
                const _HermesInternal7 = HermesInternal;
                throw (
                  "expected a function type for a Tag formatting value, " +
                  nodes[v0][1] +
                  ". got " +
                  typeof values[nodes[v0][1]] +
                  ": " +
                  values[nodes[v0][1]]
                );
              } else {
                const _HermesInternal8 = HermesInternal;
                const tmp10Result = values[nodes[v0][1]](tmp47, "" + keyPrefix + "." + v0);
                const _Array = Array;
                let tmp53 = tmp10Result;
                if (!Array.isArray(tmp10Result)) {
                  const items = [tmp10Result];
                  tmp53 = items;
                }
                for (const item10128 of tmp53) {
                  if (typeof item10128 === "string") {
                    let pushLiteralTextResult6 = builder.pushLiteralText(item10128);
                  } else {
                    let pushObjectResult1 = builder.pushObject(item10128);
                  }
                  continue;
                }
              }
            } else if (builder(originalMessage[6]).FormatJsNodeType.Select === first) {
              const tmp24 =
                values[nodes[v0][1]] in nodes[v0][2] ? nodes[v0][2][values[nodes[v0][1]]] : nodes[v0][2].other;
              if (null == tmp24) {
                const _Object2 = Object;
                const keys = Object.keys(tmp23);
                const _HermesInternal4 = HermesInternal;
                throw (
                  "" +
                  values[nodes[v0][1]] +
                  " is not a known option for select value " +
                  nodes[v0][1] +
                  ". Valid options are " +
                  keys.join(", ")
                );
              } else {
                const _HermesInternal3 = HermesInternal;
                const obj4 = {
                  builder,
                  nodes: tmp24,
                  locales,
                  dataFormatters,
                  formatConfig,
                  values,
                  keyPrefix: "" + keyPrefix + "." + v0,
                };
                keyPrefix(obj4);
              }
            } else if (builder(originalMessage[6]).FormatJsNodeType.Plural === first) {
              other = tmp100;
              nodes = tmp101;
              locales = tmp2[4];
              const tmp102 = (() => {
                const combined = "=" + closure_0;
                if (combined in other) {
                  return other[combined];
                } else {
                  const obj = { type };
                  const pluralRules = dataFormatters.getPluralRules(obj);
                  let num = 0;
                  const select = pluralRules.select;
                  if (null != closure_2) {
                    num = closure_2;
                  }
                  other = other[select(pluralRules, closure_0 - num)] ?? other.other;
                  return other;
                }
              })();
              if (null == tmp102) {
                const _Object = Object;
                const keys1 = Object.keys(tmp100);
                const _HermesInternal2 = HermesInternal;
                throw (
                  "" +
                  values[nodes[v0][1]] +
                  " is not a known option for plural value " +
                  nodes[v0][1] +
                  ". Valid options are " +
                  keys1.join(", ")
                );
              } else {
                let obj = {
                  builder,
                  nodes: tmp102,
                  locales,
                  dataFormatters,
                  formatConfig,
                  values,
                  currentPluralValue: values[nodes[v0][1]] - num2,
                  keyPrefix: "" + keyPrefix + "." + v0,
                };
                num2 = 0;
                if (null != nodes[v0][3]) {
                  num2 = tmp101;
                }
                const _HermesInternal = HermesInternal;
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
  let currentPluralValue;
  let dataFormatters;
  let finishResult;
  let formatConfig;
  let keyPrefix;
  let length;
  let locales;
  let nodes;
  let originalMessage;
  let sum;
  let v0;
  let values;
  ({ nodes, keyPrefix } = Builder);
  let obj = { keyPrefix };
  ({ originalMessage, locales, dataFormatters, formatConfig, values, currentPluralValue } = Builder);
  let builder = new Builder.Builder(obj);
  if (typeof nodes === "string") {
    builder.pushLiteralText(nodes);
    finishResult = builder.finish();
  } else {
    if (1 === nodes.length) {
      if (typeof nodes[0] === "string") {
        builder.pushLiteralText(nodes[0]);
      }
      finishResult = builder.finish();
    }
    let num = 0;
    let c9 = 0;
    let num2 = 0;
    if (0 < nodes.length) {
      do {
        let tmp = (function _loop() {
          let closure_0;
          let closure_2;
          let num2;
          let other;
          let type;
          if (typeof nodes[v0] === "string") {
            builder.pushLiteralText(nodes[v0]);
            return 0;
          } else {
            const first = tmp2[0];
            if (first === builder(originalMessage[6]).FormatJsNodeType.Pound) {
              if (typeof currentPluralValue === "number") {
                builder.pushLiteralText(dataFormatters.formatNumber(tmp91));
              }
              return 0;
            } else {
              if (!(nodes[v0][1] in values)) {
                let num = 0;
                if (!formatConfig(nodes[v0][1])) {
                  const self = this;
                  const self2 = this;
                  const tmp8 = new currentPluralValue(nodes[v0][1], other, first);
                  throw tmp8;
                }
              }
              builder = tmp10;
              if (builder(originalMessage[6]).FormatJsNodeType.Argument === first) {
                if (typeof values[nodes[v0][1]] !== "object") {
                  if (typeof values[nodes[v0][1]] !== "function") {
                    const _String = String;
                    builder.pushLiteralText(String(values[nodes[v0][1]]));
                  }
                }
                builder.pushObject(values[nodes[v0][1]]);
              } else if (builder(originalMessage[6]).FormatJsNodeType.Date === first) {
                let result;
                if (nodes[v0][2] in formatConfig.date) {
                  result = formatConfig.date[tmp81];
                } else if (null != nodes[v0][2]) {
                  result = tmp96(originalMessage[7]).parseDateTimeSkeleton(tmp81);
                }
                builder.pushLiteralText(dataFormatters.formatDate(values[nodes[v0][1]], result));
              } else if (builder(originalMessage[6]).FormatJsNodeType.Time === first) {
                let result1;
                if (nodes[v0][2] in formatConfig.time) {
                  result1 = formatConfig.time[tmp74];
                } else if (null != nodes[v0][2]) {
                  result1 = tmp96(originalMessage[7]).parseDateTimeSkeleton(tmp74);
                }
                builder.pushLiteralText(dataFormatters.formatTime(values[nodes[v0][1]], result1));
              } else if (builder(originalMessage[6]).FormatJsNodeType.Number === first) {
                let parseNumberSkeletonResult;
                if (nodes[v0][2] in formatConfig.number) {
                  parseNumberSkeletonResult = formatConfig.number[tmp65];
                } else if (null != nodes[v0][2]) {
                  parseNumberSkeletonResult = tmp96(originalMessage[7]).parseNumberSkeleton(
                    tmp96(originalMessage[7]).parseNumberSkeletonFromString(tmp65),
                  );
                }
                let result2 = tmp10;
                if (typeof values[nodes[v0][1]] === "number") {
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
                  result2 = tmp10 * num5;
                }
                builder.pushLiteralText(dataFormatters.formatNumber(result2, parseNumberSkeletonResult));
              } else if (builder(originalMessage[6]).FormatJsNodeType.Tag === first) {
                let items1;
                const _HermesInternal5 = HermesInternal;
                const obj2 = {
                  Builder: builder.constructor,
                  nodes: nodes[v0][2],
                  locales,
                  dataFormatters,
                  formatConfig,
                  values,
                  currentPluralValue,
                  keyPrefix: "" + keyPrefix + "." + v0,
                };
                const tmp47 = v0(obj2);
                const tmp41 = locales;
                if (null != nodes[v0][3]) {
                  const _HermesInternal6 = HermesInternal;
                  const obj3 = {
                    Builder: builder.constructor,
                    nodes: nodes[v0][3],
                    locales: tmp41,
                    dataFormatters,
                    formatConfig,
                    values,
                    currentPluralValue,
                    keyPrefix: "" + keyPrefix + "." + v0 + "-control",
                  };
                  items1 = v0(obj3);
                } else {
                  items1 = [];
                }
                if (formatConfig(nodes[v0][1])) {
                  builder.pushRichTextTag(nodes[v0][1], tmp47, items1);
                } else if (typeof values[nodes[v0][1]] !== "function") {
                  const _HermesInternal7 = HermesInternal;
                  throw (
                    "expected a function type for a Tag formatting value, " +
                    nodes[v0][1] +
                    ". got " +
                    typeof values[nodes[v0][1]] +
                    ": " +
                    values[nodes[v0][1]]
                  );
                } else {
                  const _HermesInternal8 = HermesInternal;
                  const tmp10Result = values[nodes[v0][1]](tmp47, "" + keyPrefix + "." + v0);
                  const _Array = Array;
                  let tmp53 = tmp10Result;
                  if (!Array.isArray(tmp10Result)) {
                    const items = [tmp10Result];
                    tmp53 = items;
                  }
                  for (const item10128 of tmp53) {
                    if (typeof item10128 === "string") {
                      let pushLiteralTextResult6 = builder.pushLiteralText(item10128);
                    } else {
                      let pushObjectResult1 = builder.pushObject(item10128);
                    }
                    continue;
                  }
                }
              } else if (builder(originalMessage[6]).FormatJsNodeType.Select === first) {
                const tmp24 =
                  values[nodes[v0][1]] in nodes[v0][2] ? nodes[v0][2][values[nodes[v0][1]]] : nodes[v0][2].other;
                if (null == tmp24) {
                  const _Object2 = Object;
                  const keys = Object.keys(tmp23);
                  const _HermesInternal4 = HermesInternal;
                  throw (
                    "" +
                    values[nodes[v0][1]] +
                    " is not a known option for select value " +
                    nodes[v0][1] +
                    ". Valid options are " +
                    keys.join(", ")
                  );
                } else {
                  const _HermesInternal3 = HermesInternal;
                  const obj4 = {
                    builder,
                    nodes: tmp24,
                    locales,
                    dataFormatters,
                    formatConfig,
                    values,
                    keyPrefix: "" + keyPrefix + "." + v0,
                  };
                  keyPrefix(obj4);
                }
              } else if (builder(originalMessage[6]).FormatJsNodeType.Plural === first) {
                other = tmp100;
                nodes = tmp101;
                locales = tmp2[4];
                const tmp102 = (() => {
                  const combined = "=" + closure_0;
                  if (combined in other) {
                    return other[combined];
                  } else {
                    const obj = { type };
                    const pluralRules = dataFormatters.getPluralRules(obj);
                    let num = 0;
                    const select = pluralRules.select;
                    if (null != closure_2) {
                      num = closure_2;
                    }
                    other = other[select(pluralRules, closure_0 - num)] ?? other.other;
                    return other;
                  }
                })();
                if (null == tmp102) {
                  const _Object = Object;
                  const keys1 = Object.keys(tmp100);
                  const _HermesInternal2 = HermesInternal;
                  throw (
                    "" +
                    values[nodes[v0][1]] +
                    " is not a known option for plural value " +
                    nodes[v0][1] +
                    ". Valid options are " +
                    keys1.join(", ")
                  );
                } else {
                  let obj = {
                    builder,
                    nodes: tmp102,
                    locales,
                    dataFormatters,
                    formatConfig,
                    values,
                    currentPluralValue: values[nodes[v0][1]] - num2,
                    keyPrefix: "" + keyPrefix + "." + v0,
                  };
                  num2 = 0;
                  if (null != nodes[v0][3]) {
                    num2 = tmp101;
                  }
                  const _HermesInternal = HermesInternal;
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
  constructor(context) {
    _classCallCheck(this, FormatBuilder);
    this.context = context;
  }
}
class MissingValueError {
  constructor(variableName, originalMessage, nodeType) {
    let constructResult;
    const self = this;
    _classCallCheck(this, MissingValueError);
    const items = [
      "No value for variable '" + variableName + "' was provided for the localized message '" + originalMessage + "'",
    ];
    const obj = _getPrototypeOf(MissingValueError);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c2(self, constructResult);
    tmp3Result.variableName = variableName;
    tmp3Result.originalMessage = originalMessage;
    tmp3Result.nodeType = nodeType;
    return tmp3Result;
  }
}
_inherits(MissingValueError, _wrapNativeSuper(Error));
let closure_7 = _createClass(MissingValueError);
const FormatBuilder_export = _createClass(FormatBuilder);

export { bindFormatValuesWithBuilder };
export { bindFormatValues };
export { FormatBuilder_export as FormatBuilder };
