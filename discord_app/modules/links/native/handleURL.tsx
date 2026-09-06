// === Module 4250: handleURL ===

// Module 4250 (handleURL)
import LoggerDefault from "Logger" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;

const require = fn;
function sanitizeURLPart(str) {
  let replaced = str;
  if (null != str) {
    replaced = str.replace(/[^\x00-\x7F]+/g, (arg0) => encodeURIComponent(arg0));
  }
  return replaced;
}
let closure_9 = async function _handleURL(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let obj1 = dependencyMap;
          if (dependencyMap === undefined) {
            obj1 = {};
          }
          let flag = obj1.allowExternal;
          if (flag === undefined) {
            flag = true;
          }
          closure_131_2 = flag;
          let flag2 = obj1.forceExternalBrowser;
          if (flag2 === undefined) {
            flag2 = false;
          }
          closure_131_3 = flag2;
          closure_131_5 = undefined;
          let payload;
          closure_131_7 = undefined;
          closure_131_8 = undefined;
          closure_131_9 = undefined;
          closure_131_4 = function openInBrowser() {
            if (null != obj.sanitizeUrl(closure_1_0)) {
              let SAFARI = constants.SAFARI;
              if (closure_1_0.startsWith("https:")) {
                const browserManagerSelectedBrowser = closure_0(4525).getBrowserManagerSelectedBrowser();
                let tmp10 = closure_1_1;
                if (closure_1_1 == null) {
                  tmp10 = browserManagerSelectedBrowser;
                }
                let tmp11 = closure_1_3;
                if (closure_1_3) {
                  tmp11 = tmp10 === constants.IN_APP;
                }
                SAFARI = tmp10;
                if (tmp11) {
                  if (browserManagerSelectedBrowser !== constants.IN_APP) {
                    SAFARI = browserManagerSelectedBrowser;
                  } else {
                    closure_0(1115).isIOS() ? constants.SAFARI : constants.CHROME;
                    const tmp8Result = closure_0(1115);
                  }
                }
                const obj3 = closure_0(4525);
              }
              if (constants.IN_APP === SAFARI) {
                const result = closure_0(4525).browserManagerOpenUrl(closure_1_0, constants.IN_APP);
                result.catch(() => {
                  const intl = closure_2_0(1114).intl;
                  closure_2_0(4258).presentFailedToast("" + intl.string(closure_2_0(1114).t.HryVrx) + " " + closure_1_0);
                });
                const obj7 = closure_0(4525);
                let isIOSResult = closure_0(1115).isIOS();
                if (isIOSResult) {
                  isIOSResult = open.isOpen();
                }
                if (isIOSResult) {
                  closure_1(4527).hideAllActionSheets();
                  const tmpResult = closure_1(4527);
                }
                const obj8 = closure_0(1115);
              } else if (constants.CHROME === SAFARI) {
                const result1 = closure_0(4525).browserManagerOpenUrl(closure_1_0, constants.CHROME);
                result1.catch(() => {
                  const intl = closure_2_0(1114).intl;
                  closure_2_0(4258).presentFailedToast("" + intl.string(closure_2_0(1114).t.HryVrx) + " " + closure_1_0);
                });
                const obj6 = closure_0(4525);
              } else {
                const SAFARI2 = constants.SAFARI;
                const result2 = closure_0(4525).browserManagerOpenUrl(closure_1_0, constants.SAFARI);
                const obj5 = closure_0(4525);
              }
            } else {
              let intl = closure_0(1114).intl;
              closure_0(4258).presentFailedToast(intl.string(closure_0(1114).t.XiqzAp));
              const obj2 = closure_0(4258);
            }
            obj = closure_1(4257);
          };
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else if (closure_131_3) {
            closure_131_4();
          } else {
            let obj5 = /^[a-zA-Z0-9+-.]+:/;
            if (!obj5.test(closure_131_0)) {
              closure_131_0 = "https://" + closure_131_0;
            }
            let obj6 = /^https?:/i;
            if (obj6.test(closure_131_0)) {
              c6 = 1;
              let obj7 = closure_132_1(closure_132_2[15]);
              closure_131_5 = obj7.parse(closure_131_0);
              closure_131_5.pathname = closure_132_8(closure_131_5.pathname);
              closure_131_5.search = closure_132_8(closure_131_5.search);
              closure_131_5.hash = closure_132_8(closure_131_5.hash);
              let obj8 = closure_132_1(closure_132_2[15]);
              closure_131_0 = obj8.format(closure_131_5);
              c6 = 0;
            }
            payload = closure_132_1(closure_132_2[16])(closure_131_0).payload;
            let obj3 = { payload, safe: true };
            if (!closure_132_1(closure_132_2[17])(obj3)) {
              if (closure_131_2) {
                c7 = 3;
                c8 = 1;
                const obj4 = {
                  value: (function tryHandleUniversalLink(arg0) {
                                  closure_0 = arg0;
                                  return new Promise((arg0) => {
                                    closure_0 = arg0;
                                    const result = closure_2_1(4252).tryOpenUrlAsUniversalLink(closure_0);
                                    const obj = closure_2_1(4252);
                                    result.then(() => {
                                      logger.info("Universal link opened successfully.");
                                      closure_0(true);
                                    }).catch(() => {
                                      logger.info("URL is not a handled universal link.");
                                      closure_0(false);
                                    });
                                  });
                                })(closure_131_0),
                  done: false
                };
                return obj4;
              }
            }
          }
        } else if (2 === tmp8) {
          c6 = 0;
          c8 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj5 = { value, done: true };
              return obj5;
            } else {
              closure_131_7 = value;
              if (!closure_131_7) {
                c7 = 4;
                c8 = 1;
                obj6 = {
                  value: (function tryHandleCustomScheme(arg0) {
                                  let arr = arg0;
                                  closure_0 = arg0;
                                  const iter = closure_0(4254).LINKING_SCHEMAS_VALUES[Symbol.iterator]();
                                  while (iter !== undefined) {
                                    ({ regex, protocol } = nextResult);
                                    let match = regex.exec(arr);
                                    let tmp4;
                                    if (match != null) {
                                      tmp4 = match[1];
                                    }
                                    if (null != tmp4) {
                                      let sum = protocol + tmp5;
                                      arr = sum;
                                      closure_0 = sum;
                                    }
                                    continue;
                                  }
                                  let first = null;
                                  if (-1 !== arr.indexOf("://")) {
                                    first = arr.split("://")[0];
                                  }
                                  if ("http" !== first) {
                                    if ("https" !== first) {
                                      logger.info("tryHandleCustomScheme", arr);
                                      let promise = new Promise((arg0) => {
                                        closure_0 = arg0;
                                        const obj = closure_2_1(4252);
                                        const tryOpenSchemeResult = closure_2_1(4252).tryOpenScheme(closure_0);
                                        closure_2_1(4252).tryOpenScheme(closure_0).then(() => {
                                          logger.info("Custom scheme opened successfully.");
                                          closure_0(true);
                                        }).catch(() => {
                                          logger.info("Custom scheme failed to open.");
                                          closure_0(false);
                                        });
                                      });
                                    }
                                    return promise;
                                  }
                                  promise = new Promise((fn) => {
                                    logger.info("URL is not a custom scheme.");
                                    fn(false);
                                  });
                                  nextResult = iter.next();
                                })(closure_131_0),
                  done: false
                };
                return obj6;
              }
            }
          } else if (4 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj7 = { value, done: true };
              return obj7;
            } else {
              closure_131_8 = value;
              if (!closure_131_8) {
                c7 = 5;
                c8 = 1;
                obj8 = {
                  value: (function tryHandleWhitelistedURL(arg0) {
                                  closure_0 = arg0;
                                  function _loop(protocol) {
                                    closure_0 = protocol;
                                    let num = 0;
                                    if (null !== regex.exec(closure_0)) {
                                      let obj = { v: null };
                                      const promise = new Promise((url) => {
                                        const canOpenURLResult = closure_3_4.canOpenURL(url);
                                        closure_3_4.canOpenURL(url).then((result) => {
                                          if (result) {
                                            regex(dependencyMap[7]).performURLNavigation(url);
                                            url(true);
                                            const obj = regex(dependencyMap[7]);
                                          } else {
                                            logger.info("Whitelisted URL, but cannot be opened (app likely not installed).");
                                            url(false);
                                          }
                                        }).catch((error) => {
                                          logger.info("Whitelisted URL encountered an error.", { error });
                                          url(false);
                                        });
                                      });
                                      obj.v = promise;
                                      num = obj;
                                    }
                                    return num;
                                  }
                                  const iter = closure_0(4256).LINKING_WHITELIST_VALUES[Symbol.iterator]();
                                  const nextResult = iter.next();
                                  while (iter !== undefined) {
                                    let regex = nextResult.regex;
                                    let _loopResult = _loop(nextResult.protocol);
                                    if (0 !== _loopResult) {
                                      if (tmp3) {
                                        iter.return();
                                        return _loopResult.v;
                                      }
                                    }
                                    continue;
                                  }
                                  return new Promise((fn) => {
                                    logger.info("URL is not whitelisted.");
                                    fn(false);
                                  });
                                })(closure_131_0),
                  done: false
                };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_131_9 = value;
            if (!closure_131_9) {
              closure_131_4();
            }
          }
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
        c8 = 3;
      }
    } catch (tmp53) {
      const open = tmp53;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp53;
      } else {
        c7 = tmp;
      }
    }
  }
};
const Linking = fn(17).Linking;
const WebBrowserType = fn(1074).WebBrowserType;
let closure_7 = new LoggerDefault("handleURL");
const size = fn(2);
let result = size.fileFinishedImporting("modules/links/native/handleURL.tsx");

export default function handleURL(arg0, arg1) {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};