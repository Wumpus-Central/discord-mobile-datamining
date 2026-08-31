// === Module 12377: _getEventFilterUrl ===

// Module 12377 (_getEventFilterUrl)
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 12330 */;
import setupIntegration from "setupIntegration" /* 12358 */;

function _getEventFilterUrl(arg0) {
  try {
    const frames = arg0.exception.values[0].stacktrace.frames;
    let tmp4 = null;
    if (frames) {
      tmp4 = (function _getLastValidUrl(frames) {
        let tmp2;
        items = frames;
        if (frames === undefined) {
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
      })(frames);
    }
    return tmp4;
  } catch (err) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = tmp6(12302).logger;
      const _HermesInternal = HermesInternal;
      logger.error("Cannot extract url for event " + tmp6(12313).getEventDescription(tmp));
      const tmp6Result = tmp6(12313);
    }
    return null;
  }
}
let items = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", "can't redefine non-configurable property \"solana\"", "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/];

export const inboundFiltersIntegration = setupIntegration.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  obj = {
    name: "InboundFilters",
    processEvent(type, arg1, getOptions) {
      let options = getOptions.getOptions();
      obj = items2;
      if (items2 === undefined) {
        obj = {};
      }
      if (options === undefined) {
        options = {};
      }
      items = [...obj.allowUrls || [], ...tmp2];
      const items1 = [...obj.denyUrls || [], ...tmp4];
      items2 = [...obj.ignoreErrors || [], ...tmp6, ...tmp7];
      const items3 = [...obj.ignoreTransactions || [], ...tmp9];
      if (tmp10) {
        if ((function _isSentryError(type) {
          try {
            return "SentryError" === type.exception.values[0].type;
          } catch (err) {
            return false;
          }
        })(type)) {
          let flag6 = true;
          if (obj(closure_1_1[1]).DEBUG_BUILD) {
            const logger6 = obj(closure_1_1[2]).logger;
            const _HermesInternal6 = HermesInternal;
            logger6.warn("Event dropped due to being internal Sentry Error.\nEvent: " + obj(closure_1_1[3]).getEventDescription(type));
            flag6 = true;
            const obj12 = obj(closure_1_1[3]);
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
          flag = (function _getPossibleEventMessages(message) {
            items = [];
            if (message.message) {
              items.push(message.message);
            }
            try {
              const iter = message.exception.values[message.exception.values.length - 1];
              let value = iter;
              if (iter) {
                value = iter.value;
              }
              if (value) {
                items.push(iter.value);
                if (iter.type) {
                  const _HermesInternal = HermesInternal;
                  items.push("" + iter.type + ": " + iter.value);
                }
              }
              return items;
            } catch (err) {
            }
          })(type).some((arg0) => items2(closure_1_1[4]).stringMatchesSomePattern(arg0, items2));
          const obj3 = (function _getPossibleEventMessages(message) {
            items = [];
            if (message.message) {
              items.push(message.message);
            }
            try {
              const iter = message.exception.values[message.exception.values.length - 1];
              let value = iter;
              if (iter) {
                value = iter.value;
              }
              if (value) {
                items.push(iter.value);
                if (iter.type) {
                  const _HermesInternal = HermesInternal;
                  items.push("" + iter.type + ": " + iter.value);
                }
              }
              return items;
            } catch (err) {
            }
          })(type);
        }
      }
      if (flag) {
        flag6 = true;
        if (obj(closure_1_1[1]).DEBUG_BUILD) {
          const logger5 = obj(closure_1_1[2]).logger;
          const _HermesInternal5 = HermesInternal;
          logger5.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + obj(closure_1_1[3]).getEventDescription(type));
          flag6 = true;
          const obj11 = obj(closure_1_1[3]);
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
                const message = type.message;
                let tmp11 = !message;
                if (!message) {
                  const values = type.exception.values;
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
            }
          }
        }
        if (flag2) {
          flag6 = true;
          if (obj(closure_1_1[1]).DEBUG_BUILD) {
            const logger4 = obj(closure_1_1[2]).logger;
            const _HermesInternal4 = HermesInternal;
            logger4.warn("Event dropped due to not having an error message, error type or stacktrace.\nEvent: " + obj(closure_1_1[3]).getEventDescription(type));
            flag6 = true;
            const obj10 = obj(closure_1_1[3]);
          }
        } else {
          let flag3 = false;
          if ("transaction" === type.type) {
            flag3 = false;
            if (items3.length) {
              const transaction = type.transaction;
              let result = transaction;
              if (result) {
                result = obj(closure_1_1[4]).stringMatchesSomePattern(transaction, items3);
                const obj4 = obj(closure_1_1[4]);
              }
              flag3 = result;
            }
          }
          if (flag3) {
            flag6 = true;
            if (obj(closure_1_1[1]).DEBUG_BUILD) {
              const logger3 = obj(closure_1_1[2]).logger;
              const _HermesInternal3 = HermesInternal;
              logger3.warn("Event dropped due to being matched by `ignoreTransactions` option.\nEvent: " + obj(closure_1_1[3]).getEventDescription(type));
              flag6 = true;
              const obj9 = obj(closure_1_1[3]);
            }
          } else {
            let flag4 = false;
            if (items1.length) {
              const tmp16 = closure_1_3(type);
              let result1 = tmp16;
              if (result1) {
                result1 = obj(closure_1_1[4]).stringMatchesSomePattern(tmp16, items1);
                const obj5 = obj(closure_1_1[4]);
              }
              flag4 = result1;
            }
            if (flag4) {
              flag6 = true;
              if (obj(closure_1_1[1]).DEBUG_BUILD) {
                const logger2 = obj(closure_1_1[2]).logger;
                const eventDescription = obj(closure_1_1[3]).getEventDescription(type);
                const _HermesInternal2 = HermesInternal;
                logger2.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + eventDescription + ".\nUrl: " + closure_1_3(type));
                flag6 = true;
                const obj8 = obj(closure_1_1[3]);
              }
            } else {
              let flag5 = true;
              if (items.length) {
                const tmp21 = closure_1_3(type);
                let result2 = !tmp21;
                if (tmp21) {
                  result2 = obj(closure_1_1[4]).stringMatchesSomePattern(tmp21, items);
                  const obj6 = obj(closure_1_1[4]);
                }
                flag5 = result2;
              }
              flag6 = false;
              if (!flag5) {
                flag6 = true;
                if (obj(closure_1_1[1]).DEBUG_BUILD) {
                  const logger = obj(closure_1_1[2]).logger;
                  const eventDescription1 = obj(closure_1_1[3]).getEventDescription(type);
                  let _HermesInternal = HermesInternal;
                  logger.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + eventDescription1 + ".\nUrl: " + closure_1_3(type));
                  flag6 = true;
                  const obj7 = obj(closure_1_1[3]);
                }
              }
            }
          }
        }
      }
    }
  };
  return obj;
});