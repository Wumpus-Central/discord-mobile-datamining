// === Module 12640: inboundFiltersIntegration ===

// Module 12640 (inboundFiltersIntegration)
import _mod12565 from "module_12565" /* 12565 */;
import _mod12574 from "module_12574" /* 12574 */;
import _mod12576 from "module_12576" /* 12576 */;
import _mod12593 from "module_12593" /* 12593 */;
import module_12621 from "module_12621" /* 12621 */;

let stacktrace;

function _getEventFilterUrl(exception) {
  function _getLastValidUrl() {
    let tmp2;
    items = frames;
    if (frames === undefined) {
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
    const frames = exception.exception.values[0].stacktrace.frames;
    let tmp2 = null;
    if (frames) {
      let tmp3 = frames;
      tmp2 = _getLastValidUrl(frames);
    }
    return tmp2;
  } catch (err) {
    if (_mod12593.DEBUG_BUILD) {
      const logger = _mod12565.logger;
      const error = logger.error;
      const _HermesInternal = HermesInternal;
      const tmp4Result = _mod12576;
      error("Cannot extract url for event " + tmp4Result.getEventDescription(exception));
    }
    return null;
  }
}
let items = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", "can't redefine non-configurable property \"solana\"", "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/];

export const inboundFiltersIntegration = module_12621.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  return {
    name: "InboundFilters",
    processEvent(type, arg1, getOptions) {
      let flag6;
      let tmp2;
      let tmp4;
      let tmp6;
      let tmp7;
      let tmp9;
      function _isSentryError(type) {
        try {
          return "SentryError" === type.exception.values[0].type;
        } catch (err) {
          return false;
        }
      }
      function _getPossibleEventMessages(message) {
        let tmp;
        items = [];
        if (message.message) {
          items.push(message.message);
        }
        try {
          tmp = message.exception.values[message.exception.values.length - 1];
        } catch (err) {
        }
        const value = tmp && tmp.value;
        if (value) {
          items.push(tmp.value);
          if (tmp.type) {
            const _HermesInternal = HermesInternal;
            items.push("" + tmp.type + ": " + tmp.value);
          }
        }
        return items;
      }
      let options = getOptions.getOptions();
      if (obj === undefined) {
        obj = {};
      }
      if (options === undefined) {
        options = {};
      }
      let tmp = obj.allowUrls || [];
      items = [...tmp, ...tmp2];
      const items1 = [...obj.denyUrls || [], ...tmp4];
      const items2 = [...obj.ignoreErrors || [], ...tmp6, ...tmp7];
      const items3 = [...obj.ignoreTransactions || [], ...tmp9];
      const tmp10 = undefined === obj.ignoreInternal || obj.ignoreInternal;
      tmp2 = options.allowUrls || [];
      const tmp3 = obj.denyUrls || [];
      tmp4 = options.denyUrls || [];
      tmp6 = options.ignoreErrors || [];
      tmp7 = obj.disableErrorDefaults ? [] : items;
      tmp9 = options.ignoreTransactions || [];
      if (tmp10) {
        if (_isSentryError(type)) {
          flag6 = true;
          if (_mod12593.DEBUG_BUILD) {
            const logger6 = _mod12565.logger;
            const warn6 = logger6.warn;
            const _HermesInternal6 = HermesInternal;
            const obj12 = _mod12576;
            warn6("Event dropped due to being internal Sentry Error.\nEvent: " + obj12.getEventDescription(type));
            flag6 = true;
          }
        }
        let tmp77 = null;
        if (!flag6) {
          tmp77 = type;
        }
        return tmp77;
      }
      let flag = false;
      if (!type.type) {
        flag = false;
        if (items2.length) {
          const obj3 = _getPossibleEventMessages(type);
          flag = obj3.some((item) => {
            obj = closure_2_0(closure_2_1[4]);
            return obj.stringMatchesSomePattern(item, items2);
          });
        }
      }
      if (flag) {
        flag6 = true;
        if (_mod12593.DEBUG_BUILD) {
          const logger5 = _mod12565.logger;
          const warn5 = logger5.warn;
          const _HermesInternal5 = HermesInternal;
          const obj11 = _mod12576;
          warn5("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + obj11.getEventDescription(type));
          flag6 = true;
        }
      } else {
        let flag2 = false;
        if (!type.type) {
          flag2 = false;
          if (type.exception) {
            flag2 = false;
            if (type.exception.values) {
              flag2 = false;
              if (0 !== type.exception.values.length) {
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
            }
          }
        }
        if (flag2) {
          flag6 = true;
          if (_mod12593.DEBUG_BUILD) {
            const logger4 = _mod12565.logger;
            const warn4 = logger4.warn;
            const _HermesInternal4 = HermesInternal;
            const obj10 = _mod12576;
            warn4("Event dropped due to not having an error message, error type or stacktrace.\nEvent: " + obj10.getEventDescription(type));
            flag6 = true;
          }
        } else {
          let flag3 = false;
          if ("transaction" === type.type) {
            flag3 = false;
            if (items3.length) {
              const transaction = type.transaction;
              let result = transaction;
              if (result) {
                const obj4 = _mod12574;
                result = obj4.stringMatchesSomePattern(transaction, items3);
              }
              flag3 = result;
            }
          }
          if (flag3) {
            flag6 = true;
            if (_mod12593.DEBUG_BUILD) {
              const logger3 = _mod12565.logger;
              const warn3 = logger3.warn;
              const _HermesInternal3 = HermesInternal;
              const obj9 = _mod12576;
              warn3("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: " + obj9.getEventDescription(type));
              flag6 = true;
            }
          } else {
            let flag4 = false;
            if (items1.length) {
              const tmp16 = _getEventFilterUrl(type);
              let result1 = tmp16;
              if (result1) {
                const obj5 = _mod12574;
                result1 = obj5.stringMatchesSomePattern(tmp16, items1);
              }
              flag4 = result1;
            }
            if (flag4) {
              flag6 = true;
              if (_mod12593.DEBUG_BUILD) {
                const logger2 = _mod12565.logger;
                const warn2 = logger2.warn;
                const obj8 = _mod12576;
                const eventDescription = obj8.getEventDescription(type);
                const _HermesInternal2 = HermesInternal;
                warn2("Event dropped due to being matched by `denyUrls` option.\nEvent: " + eventDescription + ".\nUrl: " + _getEventFilterUrl(type));
                flag6 = true;
              }
            } else {
              let flag5 = true;
              if (items.length) {
                const tmp21 = _getEventFilterUrl(type);
                let result2 = !tmp21;
                if (tmp21) {
                  const obj6 = _mod12574;
                  result2 = obj6.stringMatchesSomePattern(tmp21, items);
                }
                flag5 = result2;
              }
              flag6 = false;
              if (!flag5) {
                flag6 = true;
                if (_mod12593.DEBUG_BUILD) {
                  const logger = _mod12565.logger;
                  const warn = logger.warn;
                  const obj7 = _mod12576;
                  const eventDescription1 = obj7.getEventDescription(type);
                  let _HermesInternal = HermesInternal;
                  warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + eventDescription1 + ".\nUrl: " + _getEventFilterUrl(type));
                  flag6 = true;
                }
              }
            }
          }
        }
      }
    }
  };
});