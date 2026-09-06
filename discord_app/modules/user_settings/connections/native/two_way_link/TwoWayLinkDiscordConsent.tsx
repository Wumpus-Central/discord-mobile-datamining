// === Module 9234: TwoWayLinkDiscordConsent ===

// Module 9234 (TwoWayLinkDiscordConsent)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsxs: closure_8, jsx: closure_9 } = jsxProd);
let closure_10 = new LoggerDefault("TwoWayLinkDiscordConsentNative");
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ scroller: { alignSelf: "stretch", flexShrink: 1 }, flex: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkDiscordConsent.tsx");

export const TwoWayLinkDiscordConsent = function TwoWayLinkDiscordConsent(callbackCode) {
  callbackCode = callbackCode.callbackCode;
  _require = callbackCode;
  const callbackState = callbackCode.callbackState;
  const platformType = callbackCode.platformType;
  const onNext = callbackCode.onNext;
  const onError = callbackCode.onError;
  noop = undefined;
  ({ clientId, scopes, redirectUri } = callbackCode);
  const tmp = closure_11();
  let obj = require("TwoWayLinkStyles");
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const tmp5 = onError(noop.useState(false), 2);
  noop = tmp5[1];
  _require = onNext((arg0) => {
    const _location = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, value) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp5;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              v0 = 1;
              let obj1 = callbackState(platformType[8]);
              c5 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.completeTwoWayLink(closure_2, _location.location, _location, closure_1);
              return obj1;
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
              obj = { value, done: true };
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
  const tmp7 = callbackState(platformType[9])({ clientId, scopes, responseType: "code", callback, isTrustedName: true, isEmbeddedFlow: true, redirectUri, withBackPressHandler: false });
  const sendAuthorize = tmp7.sendAuthorize;
  const items1 = [sendAuthorize];
  ({ header, body, appDetails } = tmp7);
  obj = { style: twoWayLinkStyles.container, children: null };
  const callback1 = noop.useCallback(() => {
    _modDef38(null != sendAuthorize, "sendAuthorize not available");
    closure_5(true);
    sendAuthorize({ isAuthorized: true });
  }, items1);
  obj = { style: tmp.flex, children: null };
  let obj1 = { style: tmp.scroller, children: null };
  const obj2 = { style: twoWayLinkStyles.body, children: null };
  const items2 = [header, ];
  const obj3 = { style: twoWayLinkStyles.bodyContent, children: null };
  const items3 = [body, appDetails];
  obj3.children = items3;
  items2[1] = closure_8(sendAuthorize, obj3);
  obj2.children = items2;
  const items4 = [closure_8(sendAuthorize, obj2), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  let tmp9Result = null != sendAuthorize;
  if (tmp9Result) {
    const obj5 = { style: twoWayLinkStyles.footerButton, children: null };
    const obj6 = { size: "lg", variant: "primary", text: null, onPress: null, loading: null };
    const intl = tmp2(tmp3[14]).intl;
    obj6.text = intl.string(tmp2(tmp3[14]).t.ZN4hkc);
    obj6.onPress = callback1;
    obj6.loading = tmp5[0];
    obj5.children = tmp9(tmp2(tmp3[13]).Button, obj6);
    tmp9Result = tmp9(tmp10, obj5);
  }
  obj4.children = tmp9Result;
  items4[1] = closure_9(require("common/SafeAreaView").SafeAreaPaddingView, obj4);
  obj1.children = items4;
  obj.children = closure_8(closure_7, obj1);
  obj.children = closure_9(callbackState(platformType[11]), obj);
  return closure_9(sendAuthorize, obj);
};