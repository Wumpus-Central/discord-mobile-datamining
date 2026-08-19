// === Module 910: _mergeOptions ===

// Module 910 (_mergeOptions)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 823 */;
import setupIntegration from "setupIntegration" /* 887 */;

function _mergeOptions() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  items = [...obj.allowUrls || [], ...tmp2];
  obj = { allowUrls: items, denyUrls: items1, ignoreErrors: items2, ignoreTransactions: items3 };
  items1 = [...obj.denyUrls || [], ...tmp4];
  items2 = [...obj.ignoreErrors || [], ...tmp6, ...tmp7];
  items3 = [...obj.ignoreTransactions || [], ...tmp9];
  return obj;
}
function _getEventFilterUrl(exception) {
  try {
    exception = exception.exception;
    items = undefined;
    if (exception != null) {
      items = exception.values;
    }
    if (items == null) {
      items = [];
    }
    items = [];
    HermesBuiltin.arraySpread(items, 0);
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
    let tmp10 = null;
    if (frames) {
      tmp10 = (function _getLastValidUrl(arg0) {
        let tmp2;
        items = arg0;
        if (arg0 === undefined) {
          items = [];
        }
        let diff = items.length - 1;
        if (0 <= diff) {
          while (true) {
            tmp2 = items[diff];
            let tmp3 = diff;
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
      })(tmp9);
    }
    return tmp10;
  } catch (err) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = tmp12(824).debug;
      const _HermesInternal = HermesInternal;
      debug.error("Cannot extract url for event " + tmp12(830).getEventDescription(tmp));
      const tmp12Result = tmp12(830);
    }
    return null;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let items = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, "can't redefine non-configurable property \"solana\"", "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
const defineIntegrationResult = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  c1 = undefined;
  obj = {
    name: "EventFilters",
    setup(getOptions) {
      closure_1 = closure_1_4(obj, getOptions.getOptions());
    },
    processEvent(type, arg1, getOptions) {
      let tmp = closure_1;
      if (!closure_1) {
        const tmp5 = closure_1_4(ignoreErrors, getOptions.getOptions());
        closure_1 = tmp5;
        tmp = tmp5;
      }
      if (type.type) {
        let flag5 = false;
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
              result = obj(_undefined[5]).stringMatchesSomePattern(transaction, ignoreTransactions);
              const obj9 = obj(_undefined[5]);
            }
            flag6 = result;
          }
          flag5 = false;
          if (flag6) {
            flag5 = true;
            if (obj(_undefined[1]).DEBUG_BUILD) {
              const debug5 = obj(_undefined[2]).debug;
              const _HermesInternal5 = HermesInternal;
              debug5.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: " + obj(_undefined[3]).getEventDescription(type));
              flag5 = true;
              const obj10 = obj(_undefined[3]);
            }
          }
        }
      } else {
        ignoreErrors = tmp.ignoreErrors;
        let length1;
        if (ignoreErrors != null) {
          length1 = ignoreErrors.length;
        }
        let flag = false;
        if (length1) {
          obj = obj(_undefined[4]);
          const possibleEventMessages = obj.getPossibleEventMessages(type);
          flag = possibleEventMessages.some((arg0) => ignoreErrors(table[5]).stringMatchesSomePattern(arg0, ignoreErrors));
        }
        if (flag) {
          flag5 = true;
          if (obj(_undefined[1]).DEBUG_BUILD) {
            const debug4 = obj(_undefined[2]).debug;
            const _HermesInternal4 = HermesInternal;
            debug4.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + obj(_undefined[3]).getEventDescription(type));
            flag5 = true;
            const obj8 = obj(_undefined[3]);
          }
        } else {
          const exception = type.exception;
          let length2;
          if (exception != null) {
            let values = exception.values;
            if (values != null) {
              length2 = values.length;
            }
          }
          let flag2 = false;
          if (length2) {
            const message = type.message;
            let tmp11 = !message;
            if (!message) {
              values = type.exception.values;
              tmp11 = !values.some((stacktrace) => {
                stacktrace = stacktrace.stacktrace;
                if (!stacktrace) {
                  let type = stacktrace.type;
                  if (type) {
                    type = "Error" !== stacktrace.type;
                  }
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
            if (obj(_undefined[1]).DEBUG_BUILD) {
              const debug3 = obj(_undefined[2]).debug;
              const _HermesInternal3 = HermesInternal;
              debug3.warn("Event dropped due to not having an error message, error type or stacktrace.\nEvent: " + obj(_undefined[3]).getEventDescription(type));
              flag5 = true;
              const obj7 = obj(_undefined[3]);
            }
          } else {
            const denyUrls = tmp.denyUrls;
            let length3;
            if (denyUrls != null) {
              length3 = denyUrls.length;
            }
            let flag3 = false;
            if (length3) {
              const tmp14 = closure_1_5(type);
              let result1 = tmp14;
              if (result1) {
                result1 = obj(_undefined[5]).stringMatchesSomePattern(tmp14, denyUrls);
                const obj3 = obj(_undefined[5]);
              }
              flag3 = result1;
            }
            if (flag3) {
              flag5 = true;
              if (obj(_undefined[1]).DEBUG_BUILD) {
                const debug2 = obj(_undefined[2]).debug;
                const eventDescription = obj(_undefined[3]).getEventDescription(type);
                const _HermesInternal2 = HermesInternal;
                debug2.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + eventDescription + ".\nUrl: " + closure_1_5(type));
                flag5 = true;
                const obj6 = obj(_undefined[3]);
              }
            } else {
              const allowUrls = tmp.allowUrls;
              let length4;
              if (allowUrls != null) {
                length4 = allowUrls.length;
              }
              let flag4 = true;
              if (length4) {
                const tmp20 = closure_1_5(type);
                let result2 = !tmp20;
                if (tmp20) {
                  result2 = obj(_undefined[5]).stringMatchesSomePattern(tmp20, allowUrls);
                  const obj4 = obj(_undefined[5]);
                }
                flag4 = result2;
              }
              flag5 = false;
              if (!flag4) {
                flag5 = true;
                if (obj(_undefined[1]).DEBUG_BUILD) {
                  const debug = obj(_undefined[2]).debug;
                  const eventDescription1 = obj(_undefined[3]).getEventDescription(type);
                  const _HermesInternal = HermesInternal;
                  debug.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + eventDescription1 + ".\nUrl: " + closure_1_5(type));
                  flag5 = true;
                  const obj5 = obj(_undefined[3]);
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
  return obj;
});
let c3 = defineIntegrationResult;

export const eventFiltersIntegration = defineIntegrationResult;
export const inboundFiltersIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(defineIntegrationResult(obj));
  obj.name = "InboundFilters";
  return obj;
});