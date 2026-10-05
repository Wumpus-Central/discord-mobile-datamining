// === Module 786: eventFiltersIntegration ===

// Module 786 (eventFiltersIntegration)
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import uuid4 from "uuid4" /* 706 */;
import _mod708 from "module_708" /* 708 */;
import _mod764 from "module_764" /* 764 */;
import module_763_mod from "module_763" /* 763 */;

let mechanism;

function _mergeOptions(arg0) {
  let items1;
  let items2;
  let items3;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  if (options === undefined) {
    const obj2 = {};
  }
  items = [...obj.allowUrls || [], ...tmp2];
  const obj3 = { allowUrls: items, denyUrls: items1, ignoreErrors: items2, ignoreTransactions: items3 };
  items1 = [...obj.denyUrls || [], ...tmp4];
  items2 = [...obj.ignoreErrors || [], ...tmp6, ...tmp7];
  items3 = [...obj.ignoreTransactions || [], ...tmp9];
  return obj3;
}
function _getEventFilterUrl(exception) {
  function _getLastValidUrl(arg0) {
    let tmp2;
    items = arg0;
    if (arg0 === undefined) {
      items = [];
    }
    let diff = items.length - 1;
    if (0 <= diff) {
      while (true) {
        tmp2 = items[diff];
        if (tmp2) {
          if ("<anonymous>" !== tmp2.filename) {
            if ("[native code]" !== tmp2.filename) {
              break;
            }
          }
        }
        diff = diff - 1;
      }
      return tmp2.filename || null;
    }
    return null;
  }
  try {
    exception = exception.exception;
    let tmp2 = null;
    let items1;
    if (exception != null) {
      items1 = exception.values;
    }
    if (items1 == null) {
      items1 = [];
    }
    items = [];
    let tmp3 = items;
    HermesBuiltin.arraySpread(items, items1, 0);
    const reversed = items.reverse();
    const found = reversed.find((mechanism) => {
      mechanism = mechanism.mechanism;
      let parent_id;
      if (mechanism != null) {
        parent_id = mechanism.parent_id;
      }
      let tmp2 = undefined === parent_id;
      if (tmp2) {
        const stacktrace = mechanism.stacktrace;
        let length;
        if (stacktrace != null) {
          const frames = stacktrace.frames;
          if (frames != null) {
            length = frames.length;
          }
        }
        tmp2 = length;
      }
      return tmp2;
    });
    let frames;
    if (found != null) {
      let stacktrace = found.stacktrace;
      if (stacktrace != null) {
        frames = stacktrace.frames;
      }
    }
    let tmp9 = null;
    if (frames) {
      tmp9 = _getLastValidUrl(tmp8);
    }
    return tmp9;
  } catch (err) {
    if (_mod699.DEBUG_BUILD) {
      const debug = CONSOLE_LEVELS.debug;
      const error = debug.error;
      const _HermesInternal = HermesInternal;
      const tmp11Result = uuid4;
      error("Cannot extract url for event " + tmp11Result.getEventDescription(exception));
    }
    return null;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let items = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, "can't redefine non-configurable property \"solana\"", "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
let module_763 = module_763_mod;
const defineIntegrationResult = module_763.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_1;
  return {
    name: "EventFilters",
    setup(getOptions) {
      closure_1 = _mergeOptions(obj, getOptions.getOptions());
    },
    processEvent(type, arg1, getOptions) {
      let flag5;
      let tmp = closure_1;
      if (!tmp) {
        const tmp5 = _mergeOptions(obj, getOptions.getOptions());
        closure_1 = tmp5;
        tmp = tmp5;
      }
      if (type.type) {
        flag5 = false;
        if ("transaction" === type.type) {
          const ignoreTransactions = tmp.ignoreTransactions;
          let length;
          if (ignoreTransactions != null) {
            length = ignoreTransactions.length;
          }
          let flag6 = false;
          if (length) {
            const transaction = type.transaction;
            let result = transaction;
            if (result) {
              const obj9 = _mod708;
              result = obj9.stringMatchesSomePattern(transaction, ignoreTransactions);
            }
            flag6 = result;
          }
          flag5 = false;
          if (flag6) {
            flag5 = true;
            if (_mod699.DEBUG_BUILD) {
              const debug5 = CONSOLE_LEVELS.debug;
              const warn5 = debug5.warn;
              const _HermesInternal5 = HermesInternal;
              const obj10 = uuid4;
              warn5("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: " + obj10.getEventDescription(type));
              flag5 = true;
            }
          }
        }
      } else {
        const ignoreErrors = tmp.ignoreErrors;
        let length1;
        if (ignoreErrors != null) {
          length1 = ignoreErrors.length;
        }
        let flag = false;
        if (length1) {
          obj = _mod764;
          const possibleEventMessages = obj.getPossibleEventMessages(type);
          flag = possibleEventMessages.some((item) => {
            obj = closure_2_0(closure_2_1[5]);
            return obj.stringMatchesSomePattern(item, ignoreErrors);
          });
        }
        if (flag) {
          flag5 = true;
          if (_mod699.DEBUG_BUILD) {
            const debug4 = CONSOLE_LEVELS.debug;
            const warn4 = debug4.warn;
            const _HermesInternal4 = HermesInternal;
            const obj8 = uuid4;
            warn4("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + obj8.getEventDescription(type));
            flag5 = true;
          }
        } else {
          const exception = type.exception;
          let length2;
          if (exception != null) {
            const values2 = exception.values;
            if (values2 != null) {
              length2 = values2.length;
            }
          }
          let flag2 = false;
          if (length2) {
            let tmp11 = !type.message;
            if (tmp11) {
              const values = type.exception.values;
              tmp11 = !values.some((stacktrace) => {
                stacktrace = stacktrace.stacktrace;
                if (!stacktrace) {
                  const type = stacktrace.type && "Error" !== stacktrace.type;
                  stacktrace = type;
                }
                if (!stacktrace) {
                  stacktrace = stacktrace.value;
                }
                return stacktrace;
              });
            }
            flag2 = tmp11;
          }
          if (flag2) {
            flag5 = true;
            if (_mod699.DEBUG_BUILD) {
              const debug3 = CONSOLE_LEVELS.debug;
              const warn3 = debug3.warn;
              const _HermesInternal3 = HermesInternal;
              const obj7 = uuid4;
              warn3("Event dropped due to not having an error message, error type or stacktrace.\nEvent: " + obj7.getEventDescription(type));
              flag5 = true;
            }
          } else {
            const denyUrls = tmp.denyUrls;
            let length3;
            if (denyUrls != null) {
              length3 = denyUrls.length;
            }
            let flag3 = false;
            if (length3) {
              const tmp14 = _getEventFilterUrl(type);
              let result1 = tmp14;
              if (result1) {
                const obj3 = _mod708;
                result1 = obj3.stringMatchesSomePattern(tmp14, denyUrls);
              }
              flag3 = result1;
            }
            if (flag3) {
              flag5 = true;
              if (_mod699.DEBUG_BUILD) {
                const debug2 = CONSOLE_LEVELS.debug;
                const warn2 = debug2.warn;
                const obj6 = uuid4;
                const eventDescription = obj6.getEventDescription(type);
                const _HermesInternal2 = HermesInternal;
                warn2("Event dropped due to being matched by `denyUrls` option.\nEvent: " + eventDescription + ".\nUrl: " + _getEventFilterUrl(type));
                flag5 = true;
              }
            } else {
              const allowUrls = tmp.allowUrls;
              let length4;
              if (allowUrls != null) {
                length4 = allowUrls.length;
              }
              let flag4 = true;
              if (length4) {
                const tmp20 = _getEventFilterUrl(type);
                let result2 = !tmp20;
                if (tmp20) {
                  const obj4 = _mod708;
                  result2 = obj4.stringMatchesSomePattern(tmp20, allowUrls);
                }
                flag4 = result2;
              }
              flag5 = false;
              if (!flag4) {
                flag5 = true;
                if (_mod699.DEBUG_BUILD) {
                  const debug = CONSOLE_LEVELS.debug;
                  const warn = debug.warn;
                  const obj5 = uuid4;
                  const eventDescription1 = obj5.getEventDescription(type);
                  const _HermesInternal = HermesInternal;
                  warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + eventDescription1 + ".\nUrl: " + _getEventFilterUrl(type));
                  flag5 = true;
                }
              }
            }
          }
        }
      }
      let tmp72 = null;
      if (!flag5) {
        tmp72 = type;
      }
      return tmp72;
    }
  };
});
let c3 = defineIntegrationResult;
module_763 = module_763_mod;

export const eventFiltersIntegration = defineIntegrationResult;
export const inboundFiltersIntegration = module_763.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = { name: "InboundFilters" };
  const merged = Object.assign(defineIntegrationResult(obj));
  return obj2;
});