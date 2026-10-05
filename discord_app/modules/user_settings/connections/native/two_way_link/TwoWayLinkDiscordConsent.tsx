// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkDiscordConsent.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let callbackCode, v0;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsxs: metroImportAll, jsx: c9 } = Fragment);
const tmp4 = new LoggerDefault("TwoWayLinkDiscordConsentNative");
let closure_10 = tmp4;
let closure_11 = createStyles.createStyles({ scroller: { alignSelf: "stretch", flexShrink: 1 }, flex: { flex: 1 } });
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (callbackCode) => {
      let appDetails;
      let body;
      let clientId;
      let header;
      let items;
      let onNext;
      let platformType;
      let scopes;
      let sendAuthorize;
      const tmp = platformType;
      const obj = callbackCode(platformType[8]);
      const cResult = obj.c(39);
      callbackCode = callbackCode.callbackCode;
      const callbackState = callbackCode.callbackState;
      platformType = callbackCode.platformType;
      ({ clientId, scopes, onNext } = callbackCode);
      const onError = callbackCode.onError;
      const redirectUri = callbackCode.redirectUri;
      const tmp3 = closure_11();
      let obj2 = callbackCode(platformType[9]);
      const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
      const tmp5 = onError(react.useState(false), 2);
      [r10030, react] = tmp5;
      if (cResult[0] === callbackCode) {
        if (cResult[1] === callbackState) {
          if (cResult[2] === onError) {
            if (cResult[3] === onNext) {
              let tmp6;
              if (cResult[4] === platformType) {
                tmp6 = cResult[5];
              }
              if (cResult[6] === clientId) {
                if (cResult[7] === tmp6) {
                  if (cResult[8] === redirectUri) {
                    let tmp7;
                    if (cResult[9] === scopes) {
                      tmp7 = cResult[10];
                    }
                    ({ header, body, appDetails, sendAuthorize } = callbackState(tmp[11])(tmp7));
                    callbackState(tmp[11])(tmp7);
                    if (cResult[11] !== sendAuthorize) {
                      class E {
                        constructor() {
                          _modDef38(null != sendAuthorize, "sendAuthorize not available");
                          react(true);
                          sendAuthorize({ isAuthorized: true });
                        }
                      }
                      cResult[11] = sendAuthorize;
                      cResult[12] = E;
                    } else {
                      class E {
                        constructor() {
                          _modDef38(null != sendAuthorize, "sendAuthorize not available");
                          react(true);
                          sendAuthorize({ isAuthorized: true });
                        }
                      }
                    }
                    if (cResult[13] === appDetails) {
                      class E {
                        constructor() {
                          _modDef38(null != sendAuthorize, "sendAuthorize not available");
                          react(true);
                          sendAuthorize({ isAuthorized: true });
                        }
                      }
                    }
                    const obj3 = { style: twoWayLinkStyles.bodyContent, children: items };
                    items = [body, appDetails];
                    const tmp14 = closure_8(sendAuthorize, obj3);
                    cResult[13] = appDetails;
                    cResult[14] = body;
                    cResult[15] = twoWayLinkStyles.bodyContent;
                    cResult[16] = tmp14;
                  }
                }
              }
              const obj4 = {
                clientId,
                scopes,
                responseType: "code",
                callback: tmp6,
                isTrustedName: true,
                isEmbeddedFlow: true,
                redirectUri,
                withBackPressHandler: false,
              };
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
      let closure_0 = onNext((arg0) => {
        let closure_3;
        let _location = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (function* (arg0) {
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let code;
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else {
                  _location = undefined;
                  code = undefined;
                  body = undefined;
                  v0 = 1;
                  _location = _location.location;
                  const obj2 = callbackState(platformType[10]);
                  body = obj2.completeTwoWayLink(body, _location, _location, body);
                  c5 = 2;
                  c6 = 1;
                  return { value: body, done: false };
                }
              } else {
                if (1 === tmp4) {
                  v0 = 0;
                  body = tmp32;
                  const _HermesInternal = HermesInternal;
                  logger.error("" + body + " link error:", body);
                  body = body.body;
                  code = undefined;
                  if (body != null) {
                    code = body.code;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v0 = 0;
                  c6 = 3;
                  return { value, done: true };
                } else {
                  _location = value;
                  v0 = 0;
                }
                if (null != _location) {
                  tmp32();
                } else {
                  body = v0;
                  v0(code);
                }
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp32) {
              if (0 === v0) {
                c6 = 3;
                throw tmp32;
              } else {
                c5 = 1;
              }
            }
          }
        })();
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[0] = callbackCode;
      cResult[1] = callbackState;
      cResult[2] = onError;
      cResult[3] = onNext;
      cResult[4] = platformType;
      cResult[5] = fn;
      tmp6 = fn;
    }
  : (callbackCode) => {
      let Button;
      let appDetails;
      let body;
      let clientId;
      let closure_5;
      let header;
      let intl;
      let items2;
      let items3;
      let items4;
      let obj3;
      let obj4;
      let obj9;
      let redirectUri;
      let scopes;
      let tmp10Result;
      let tmp12;
      callbackCode = callbackCode.callbackCode;
      const callbackState = callbackCode.callbackState;
      const platformType = callbackCode.platformType;
      const onNext = callbackCode.onNext;
      const onError = callbackCode.onError;
      react = undefined;
      ({ clientId, scopes, redirectUri } = callbackCode);
      const tmp = closure_11();
      const tmp3 = platformType;
      const obj = callbackCode(platformType[9]);
      const twoWayLinkStyles = obj.useTwoWayLinkStyles();
      const tmp5 = onError(react.useState(false), 2);
      react = tmp5[1];
      const first = tmp5[0];
      const useCallback = react.useCallback;
      let closure_0 = onNext((arg0) => {
        let closure_3;
        let _location = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (function* (arg0) {
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let code;
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else {
                  body = tmp;
                  _location = undefined;
                  code = undefined;
                  v0 = 1;
                  _location = _location.location;
                  const obj2 = callbackState(platformType[10]);
                  body = obj2.completeTwoWayLink(body, _location, _location, body);
                  c5 = 2;
                  c6 = 1;
                  return { value: body, done: false };
                }
              } else {
                if (1 === tmp4) {
                  v0 = 0;
                  body = tmp32;
                  const _HermesInternal = HermesInternal;
                  logger.error("" + body + " link error:", body);
                  body = body.body;
                  code = undefined;
                  if (body != null) {
                    code = body.code;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v0 = 0;
                  c6 = 3;
                  return { value, done: true };
                } else {
                  _location = value;
                  v0 = 0;
                }
                if (null != _location) {
                  tmp32();
                } else {
                  body = v0;
                  v0(code);
                }
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp32) {
              if (0 === v0) {
                c6 = 3;
                throw tmp32;
              } else {
                c5 = 1;
              }
            }
          }
        })();
      });
      const items = [callbackCode, callbackState, platformType, onNext, onError];
      const callback = useCallback(function () {
        return closure_0(...arguments);
      }, items);
      const tmp8 = callbackState(platformType[11])({
        clientId,
        scopes,
        responseType: "code",
        callback,
        isTrustedName: true,
        isEmbeddedFlow: true,
        redirectUri,
        withBackPressHandler: false,
      });
      const sendAuthorize = tmp8.sendAuthorize;
      const items1 = [sendAuthorize];
      ({ header, body, appDetails } = tmp8);
      let obj2 = { style: twoWayLinkStyles.container, children: closure_9(tmp12, obj3) };
      const callback1 = react.useCallback(() => {
        _modDef38(null != sendAuthorize, "sendAuthorize not available");
        closure_5(true);
        sendAuthorize({ isAuthorized: true });
      }, items1);
      obj3 = { style: tmp.flex, children: closure_8(closure_7, obj4) };
      obj4 = { style: tmp.scroller, children: items4 };
      const obj5 = { style: twoWayLinkStyles.body, children: items2 };
      items2 = [header];
      const obj6 = { style: twoWayLinkStyles.bodyContent, children: items3 };
      items3 = [body, appDetails];
      tmp12 = callbackState(platformType[16]);
      items2[1] = closure_8(sendAuthorize, obj6);
      items4 = [closure_8(sendAuthorize, obj5)];
      const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: tmp10Result };
      tmp10Result = null != sendAuthorize;
      const SafeAreaPaddingView = callbackCode(platformType[15]).SafeAreaPaddingView;
      if (tmp10Result) {
        const obj8 = { style: twoWayLinkStyles.footerButton, children: closure_9(Button, obj9) };
        obj9 = {
          size: "lg",
          variant: "primary",
          text: intl.string(callbackCode(tmp3[14]).t.ZN4hkc),
          onPress: callback1,
          loading: first,
        };
        Button = tmp2(tmp3[13]).Button;
        intl = tmp2(tmp3[14]).intl;
        tmp10Result = closure_9(tmp11, obj8);
      }
      items4[1] = closure_9(SafeAreaPaddingView, obj7);
      return closure_9(sendAuthorize, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkDiscordConsent.tsx",
);

export const TwoWayLinkDiscordConsent = tmp5;
