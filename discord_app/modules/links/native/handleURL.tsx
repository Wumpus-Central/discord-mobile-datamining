// discord_app/modules/links/native/handleURL.tsx
import module_3979 from "module_3979";
import { Linking } from "handleSupportedURL";
import setContent from "setContent";
import { WebBrowserType } from "ME";

const require = arg1;
function sanitizeURLPart(str) {
  let replaced = str;
  if (null != str) {
    replaced = str.replace(/[^\x00-\x7F]+/g, (arg0) => encodeURIComponent(arg0));
  }
  return replaced;
}
function _handleURL() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    let iter = (function*(arg0, arg1) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let openInBrowser = tmp3;
              let flag2 = tmp5;
              let flag;
              flag2 = undefined;
              let obj1 = flag;
              if (flag === undefined) {
                obj1 = {};
              }
              flag = obj1.allowExternal;
              if (flag === undefined) {
                flag = true;
              }
              flag2 = obj1.forceExternalBrowser;
              if (flag2 === undefined) {
                flag2 = false;
              }
              let setContent;
              let payload;
              c7 = undefined;
              v0 = undefined;
              let closure_9;
              openInBrowser = function openInBrowser() {
                if (null != obj.sanitizeUrl(lib)) {
                  let SAFARI = constants.SAFARI;
                  if (lib.startsWith("https:")) {
                    const browserManagerSelectedBrowser = lib(tmp2[12]).getBrowserManagerSelectedBrowser();
                    let tmp10 = callback;
                    if (callback == null) {
                      tmp10 = browserManagerSelectedBrowser;
                    }
                    let tmp11 = flag2;
                    if (flag2) {
                      tmp11 = tmp10 === tmp5.IN_APP;
                    }
                    SAFARI = tmp10;
                    if (tmp11) {
                      if (browserManagerSelectedBrowser !== tmp5.IN_APP) {
                        SAFARI = browserManagerSelectedBrowser;
                      } else {
                        tmp8(tmp2[13]).isIOS() ? tmp5.SAFARI : tmp5.CHROME;
                        const tmp8Result = tmp8(tmp2[13]);
                      }
                    }
                    const obj3 = lib(tmp2[12]);
                    tmp8 = lib;
                  }
                  if (constants.IN_APP === SAFARI) {
                    const result = lib(tmp2[12]).browserManagerOpenUrl(lib, tmp5.IN_APP);
                    result.catch(() => {
                      const intl = outer1_0(outer1_2[11]).intl;
                      outer1_0(outer1_2[10]).presentFailedToast("" + intl.string(outer1_0(outer1_2[11]).t.HryVrx) + " " + closure_0);
                    });
                    const obj7 = lib(tmp2[12]);
                    let isIOSResult = lib(tmp2[13]).isIOS();
                    if (isIOSResult) {
                      isIOSResult = tmp53.isOpen();
                    }
                    if (isIOSResult) {
                      callback(tmp2[14]).hideAllActionSheets();
                      const tmpResult = callback(tmp2[14]);
                    }
                    const obj8 = lib(tmp2[13]);
                  } else if (tmp5.CHROME === SAFARI) {
                    const result1 = lib(tmp2[12]).browserManagerOpenUrl(lib, tmp5.CHROME);
                    result1.catch(() => {
                      const intl = outer1_0(outer1_2[11]).intl;
                      outer1_0(outer1_2[10]).presentFailedToast("" + intl.string(outer1_0(outer1_2[11]).t.HryVrx) + " " + closure_0);
                    });
                    const obj6 = lib(tmp2[12]);
                  } else {
                    const SAFARI2 = tmp5.SAFARI;
                    const result2 = lib(tmp2[12]).browserManagerOpenUrl(lib, tmp5.SAFARI);
                    const obj5 = lib(tmp2[12]);
                  }
                } else {
                  let intl = lib(tmp2[11]).intl;
                  lib(tmp2[10]).presentFailedToast(intl.string(lib(tmp2[11]).t.XiqzAp));
                  const obj2 = lib(tmp2[10]);
                }
              };
              c7 = 1;
              v0 = 1;
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else if (outer1_3) {
                outer1_4();
              } else {
                let obj5 = /^[a-zA-Z0-9+-.]+:/;
                if (!obj5.test(closure_0)) {
                  closure_0 = "https://" + closure_0;
                }
                let obj6 = /^https?:/i;
                if (obj6.test(closure_0)) {
                  payload = 1;
                  let obj7 = callback(flag[15]);
                  setContent = obj7.parse(closure_0);
                  setContent.pathname = v0(setContent.pathname);
                  setContent.search = v0(setContent.search);
                  setContent.hash = v0(setContent.hash);
                  let obj8 = callback(flag[15]);
                  closure_0 = obj8.format(setContent);
                  payload = 0;
                }
                payload = callback(flag[16])(closure_0).payload;
                let obj3 = { payload: null, safe: true };
                obj3[0] = payload;
                if (!callback(flag[17])(obj3)) {
                  if (flag) {
                    c7 = 3;
                    v0 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = (function tryHandleUniversalLink(closure_0) {
                      return new Promise((closure_0) => {
                        const result = outer1_1(outer1_2[5]).tryOpenUrlAsUniversalLink(closure_0);
                        const obj = outer1_1(outer1_2[5]);
                        result.then(() => { ... }).catch(() => { ... });
                      });
                    })(closure_0);
                    return obj4;
                  }
                }
              }
            } else if (2 === tmp8) {
              payload = 0;
              v0 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              if (3 === tmp8) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 3;
                  obj5 = { value: null, done: true };
                  obj5[0] = arg1;
                  return obj5;
                } else {
                  c7 = arg1;
                  if (!c7) {
                    c7 = 4;
                    v0 = 1;
                    obj6 = { value: null, done: false };
                    obj6[0] = (function tryHandleCustomScheme(closure_0) {
                      let protocol;
                      let regex;
                      let arr = closure_0;
                      let lib = closure_0;
                      const iter = lib(flag[6]).LINKING_SCHEMAS_VALUES[Symbol.iterator]();
                      while (iter !== undefined) {
                        ({ regex, protocol } = nextResult);
                        let tmp2 = arr;
                        let match = regex.exec(arr);
                        let tmp4;
                        if (match != null) {
                          tmp4 = match[1];
                        }
                        if (null != tmp4) {
                          let tmp6 = protocol;
                          let tmp7 = tmp4;
                          let sum = protocol + tmp5;
                          arr = sum;
                          lib = sum;
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
                          let promise = new Promise((closure_0) => {
                            const obj = outer1_1(outer1_2[5]);
                            const tryOpenSchemeResult = outer1_1(outer1_2[5]).tryOpenScheme(closure_0);
                            outer1_1(outer1_2[5]).tryOpenScheme(closure_0).then(() => { ... }).catch(() => { ... });
                          });
                        }
                        return promise;
                      }
                      promise = new Promise((arg0) => {
                        logger.info("URL is not a custom scheme.");
                        arg0(false);
                      });
                    })(closure_0);
                    return obj6;
                  }
                }
              } else if (4 === tmp8) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 3;
                  obj7 = { value: null, done: true };
                  obj7[0] = arg1;
                  return obj7;
                } else {
                  v0 = arg1;
                  if (!v0) {
                    c7 = 5;
                    v0 = 1;
                    obj8 = { value: null, done: false };
                    obj8[0] = (function tryHandleWhitelistedURL(closure_0) {
                      const lib = closure_0;
                      function _loop(protocol) {
                        let closure_0 = protocol;
                        let num = 0;
                        if (null !== regex.exec(closure_0)) {
                          let obj = { v: null };
                          const promise = new Promise(() => { ... });
                          obj[0] = promise;
                          num = obj;
                        }
                        return num;
                      }
                      const iter = lib(flag[8]).LINKING_WHITELIST_VALUES[Symbol.iterator]();
                      const nextResult = iter.next();
                      while (iter !== undefined) {
                        let regex = nextResult.regex;
                        let _loopResult = _loop(nextResult.protocol);
                        if (0 !== _loopResult) {
                          let tmp4 = _loopResult;
                          if (tmp3) {
                            let tmp5 = iter;
                            iter.return();
                            return _loopResult.v;
                          }
                        }
                        continue;
                      }
                      return new Promise((arg0) => {
                        logger.info("URL is not whitelisted.");
                        arg0(false);
                      });
                    })(closure_0);
                    return obj8;
                  }
                }
              } else if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_9 = arg1;
                if (!closure_9) {
                  openInBrowser();
                }
              }
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            v0 = 3;
          }
        } catch (tmp53) {
          setContent = tmp53;
          if (tmp4 === payload) {
            v0 = tmp2;
            throw tmp53;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _handleURL = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const error = new require("ME")("handleURL");
let tmp2 = new require("ME")("handleURL");
let result = require("setContent").fileFinishedImporting("modules/links/native/handleURL.tsx");

export default function handleURL(arg0, arg1) {
  const self = this;
  const apply = _handleURL.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};