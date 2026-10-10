// === Module 9222: TwoWayLinkDiscordConsent ===

// Module 9222 (TwoWayLinkDiscordConsent)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_8, jsx: closure_9 } = jsxProd);
let closure_10 = new LoggerDefault("TwoWayLinkDiscordConsentNative");
const createStyles = fn(5092);
let closure_11 = createStyles.createStyles({ scroller: { alignSelf: "stretch", flexShrink: 1 }, flex: { flex: 1 } });
const ReactCompilerGating = fn(558);
const tmp4 = new LoggerDefault("TwoWayLinkDiscordConsentNative");
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkDiscordConsent.tsx");

export const TwoWayLinkDiscordConsent = ReactCompilerGating.isReactCompilerEnabled() ? (function TwoWayLinkDiscordConsent(callbackCode) {
  const cResult = require("c").c(39);
  callbackCode = callbackCode.callbackCode;
  _require = callbackCode;
  const callbackState = callbackCode.callbackState;
  platformType = callbackCode.platformType;
  ({ clientId, scopes, onNext } = callbackCode);
  const onError = callbackCode.onError;
  const redirectUri = callbackCode.redirectUri;
  closure_11();
  let obj = require("c");
  const tmp = platformType;
  const twoWayLinkStyles = require("TwoWayLinkStyles").useTwoWayLinkStyles();
  let obj2 = require("TwoWayLinkStyles");
  [r10030, noop] = onError(noop.useState(false), 2);
  if (cResult[0] === callbackCode) {
    if (cResult[1] === callbackState) {
      if (cResult[2] === onError) {
        if (cResult[3] === onNext) {
          if (cResult[4] === platformType) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === clientId) {
            if (cResult[7] === tmp6) {
              if (cResult[8] === redirectUri) {
                if (cResult[9] === scopes) {
                  let tmp7 = cResult[10];
                }
                ({ header, body, appDetails, sendAuthorize } = callbackState(tmp[11])(tmp7));
                if (cResult[11] !== sendAuthorize) {
                  class E {
                    constructor() {
                      tmp = closure_1(closure_2[12])(null != sendAuthorize, "sendAuthorize not available");
                      tmp2 = closure_5(true);
                      tmp3 = sendAuthorize({ isAuthorized: true });
                      return;
                    }
                  }
                  cResult[11] = sendAuthorize;
                  cResult[12] = E;
                } else {
                  class E {
                    constructor() {
                      tmp = closure_1(closure_2[12])(null != sendAuthorize, "sendAuthorize not available");
                      tmp2 = closure_5(true);
                      tmp3 = sendAuthorize({ isAuthorized: true });
                      return;
                    }
                  }
                }
                if (cResult[13] === appDetails) {
                  class E {
                    constructor() {
                      tmp = closure_1(closure_2[12])(null != sendAuthorize, "sendAuthorize not available");
                      tmp2 = closure_5(true);
                      tmp3 = sendAuthorize({ isAuthorized: true });
                      return;
                    }
                  }
                }
                let obj3 = { style: twoWayLinkStyles.bodyContent, children: null };
                const items = [body, appDetails];
                obj3.children = items;
                const tmp14 = closure_8(sendAuthorize, obj3);
                cResult[13] = appDetails;
                cResult[14] = body;
                cResult[15] = twoWayLinkStyles.bodyContent;
                cResult[16] = tmp14;
                const tmp9 = callbackState(tmp[11])(tmp7);
              }
            }
          }
          let obj4 = { clientId, scopes, responseType: "code", callback: tmp6, isTrustedName: true, isEmbeddedFlow: true, redirectUri, withBackPressHandler: false };
          cResult[6] = clientId;
          cResult[7] = tmp6;
          cResult[8] = redirectUri;
          cResult[9] = scopes;
          cResult[10] = obj4;
          tmp7 = obj4;
        }
      }
    }
  }
  _require = onNext((arg0) => {
    const _location = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp5;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              v0 = 1;
              const obj2 = callbackState(platformType[10]);
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj2.completeTwoWayLink(closure_2, _location.location, _location, closure_1), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp8) {
              v0 = 0;
              closure_129_2 = tmp38;
              const _HermesInternal = HermesInternal;
              logger.error("" + closure_2 + " link error:", closure_129_2);
              const body = closure_129_2.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              closure_129_1 = code;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_129_0 = value;
              v0 = 0;
            }
            if (null != closure_129_0) {
              tmp38();
            } else {
              v0(closure_129_1);
            }
            c6 = 3;
          }
        } catch (tmp38) {
          if (tmp4 === v0) {
            c6 = tmp2;
            throw tmp38;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  function t1() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = callbackCode;
  cResult[1] = callbackState;
  cResult[2] = onError;
  cResult[3] = onNext;
  cResult[4] = platformType;
  cResult[5] = t1;
  tmp6 = t1;
  const tmp5 = onError(noop.useState(false), 2);
}) : (function TwoWayLinkDiscordConsent(callbackCode) {
  callbackCode = callbackCode.callbackCode;
  _require = callbackCode;
  const callbackState = callbackCode.callbackState;
  const platformType = callbackCode.platformType;
  const onNext = callbackCode.onNext;
  const onError = callbackCode.onError;
  noop = undefined;
  ({ clientId, scopes, redirectUri } = callbackCode);
  const tmp = closure_11();
  const twoWayLinkStyles = require("TwoWayLinkStyles").useTwoWayLinkStyles();
  const tmp5 = onError(noop.useState(false), 2);
  noop = tmp5[1];
  _require = onNext((arg0) => {
    const _location = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp5;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              v0 = 1;
              const obj2 = callbackState(platformType[10]);
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj2.completeTwoWayLink(closure_2, _location.location, _location, closure_1), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp8) {
              v0 = 0;
              closure_129_2 = tmp38;
              const _HermesInternal = HermesInternal;
              logger.error("" + closure_2 + " link error:", closure_129_2);
              const body = closure_129_2.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              closure_129_1 = code;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_129_0 = value;
              v0 = 0;
            }
            if (null != closure_129_0) {
              tmp38();
            } else {
              v0(closure_129_1);
            }
            c6 = 3;
          }
        } catch (tmp38) {
          if (tmp4 === v0) {
            c6 = tmp2;
            throw tmp38;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const items = [callbackCode, callbackState, platformType, onNext, onError];
  const callback = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const tmp7 = callbackState(platformType[11])({ clientId, scopes, responseType: "code", callback, isTrustedName: true, isEmbeddedFlow: true, redirectUri, withBackPressHandler: false });
  const sendAuthorize = tmp7.sendAuthorize;
  const items1 = [sendAuthorize];
  ({ header, body, appDetails } = tmp7);
  let obj2 = { style: twoWayLinkStyles.container, children: null };
  const callback1 = noop.useCallback(() => {
    _modDef38(null != sendAuthorize, "sendAuthorize not available");
    closure_5(true);
    sendAuthorize({ isAuthorized: true });
  }, items1);
  let obj3 = { style: tmp.flex, children: null };
  let obj4 = { style: tmp.scroller, children: null };
  let obj5 = { style: twoWayLinkStyles.body, children: null };
  const items2 = [header, ];
  const obj6 = { style: twoWayLinkStyles.bodyContent, children: null };
  const items3 = [body, appDetails];
  obj6.children = items3;
  let obj = require("TwoWayLinkStyles");
  items2[1] = closure_8(sendAuthorize, obj6);
  obj5.children = items2;
  const items4 = [closure_8(sendAuthorize, obj5), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  let tmp9Result = null != sendAuthorize;
  if (tmp9Result) {
    const obj8 = { style: twoWayLinkStyles.footerButton, children: null };
    const obj9 = { size: "lg", variant: "primary", text: null, onPress: null, loading: null };
    const intl = tmp2(tmp3[14]).intl;
    obj9.text = intl.string(tmp2(tmp3[14]).t.ZN4hkc);
    obj9.onPress = callback1;
    obj9.loading = tmp5[0];
    obj8.children = closure_9(tmp2(tmp3[13]).Button, obj9);
    tmp9Result = closure_9(tmp10, obj8);
  }
  obj7.children = tmp9Result;
  items4[1] = closure_9(require("common/SafeAreaView").SafeAreaPaddingView, obj7);
  obj4.children = items4;
  obj3.children = closure_8(closure_7, obj4);
  obj2.children = closure_9(callbackState(platformType[16]), obj3);
  return closure_9(sendAuthorize, obj2);
});