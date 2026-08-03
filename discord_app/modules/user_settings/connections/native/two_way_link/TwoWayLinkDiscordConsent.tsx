// === Module 9132: TwoWayLinkDiscordConsent ===

// Module 9132 (TwoWayLinkDiscordConsent)
import timestamp from "timestamp";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsxs: metroImportAll, jsx: c9 } = jsxProd);
let c10 = new require("get ActivityIndicator")("TwoWayLinkDiscordConsentNative");
let closure_11 = createCacheKey.createStyles({ scroller: { alignSelf: "stretch", flexShrink: 1 }, flex: { flex: 1 } });
const tmp4 = new require("get ActivityIndicator")("TwoWayLinkDiscordConsentNative");
const result = require("noop").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkDiscordConsent.tsx");

export const TwoWayLinkDiscordConsent = function TwoWayLinkDiscordConsent(callbackCode) {
  let appDetails;
  let body;
  let clientId;
  let header;
  let redirectUri;
  let scopes;
  callbackCode = callbackCode.callbackCode;
  let _require = callbackCode;
  const callbackState = callbackCode.callbackState;
  const platformType = callbackCode.platformType;
  const onNext = callbackCode.onNext;
  const onError = callbackCode.onError;
  let React;
  let sendAuthorize;
  ({ clientId, scopes, redirectUri } = callbackCode);
  const tmp = callback2();
  let obj = _require(platformType[7]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const tmp5 = onError(React.useState(false), 2);
  React = tmp5[1];
  _require = undefined;
  _require = onNext((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp3;
              let code = tmp5;
              let _location;
              code = undefined;
              let v0 = 1;
              let obj1 = callbackState(platformType[8]);
              c5 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.completeTwoWayLink(outer1_2, _location.location, _location, outer1_1);
              return obj1;
            }
          } else {
            if (1 === tmp8) {
              v0 = 0;
              body = timestamp;
              const _HermesInternal = HermesInternal;
              outer2_10.error("" + outer1_2 + " link error:", body);
              body = body.body;
              code = undefined;
              if (body != null) {
                code = body.code;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              _location = arg1;
              v0 = 0;
            }
            if (null != _location) {
              outer1_3();
            } else {
              v0(code);
            }
            c6 = 3;
          }
        } catch (tmp38) {
          timestamp = tmp38;
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
  const callback = React.useCallback(function() {
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
  sendAuthorize = tmp7.sendAuthorize;
  const items1 = [sendAuthorize];
  ({ header, body, appDetails } = tmp7);
  obj = { style: twoWayLinkStyles.container, children: null };
  const callback1 = React.useCallback(() => {
    callbackState(platformType[10])(null != sendAuthorize, "sendAuthorize not available");
    callback(true);
    sendAuthorize({ isAuthorized: true });
  }, items1);
  obj = { style: tmp.flex, children: null };
  let obj1 = { style: tmp.scroller, children: null };
  const obj2 = { style: twoWayLinkStyles.body, children: null };
  const items2 = [header, ];
  const items3 = [body, appDetails];
  items2[1] = callback(sendAuthorize, { style: twoWayLinkStyles.bodyContent, children: items3 });
  obj2[1] = items2;
  const items4 = [callback(sendAuthorize, obj2), ];
  const obj4 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  let tmp9Result = null != sendAuthorize;
  if (tmp9Result) {
    const obj5 = { style: null, children: null };
    obj5[0] = twoWayLinkStyles.footerButton;
    const obj6 = { size: "lg", variant: "primary", text: null, onPress: null, loading: null };
    const intl = tmp2(tmp3[14]).intl;
    obj6[2] = intl.string(tmp2(tmp3[14]).t.ZN4hkc);
    obj6[3] = callback1;
    obj6[4] = tmp5[0];
    obj5[1] = tmp9(tmp2(tmp3[13]).Button, obj6);
    tmp9Result = tmp9(tmp10, obj5);
  }
  obj4[2] = tmp9Result;
  items4[1] = closure_9(_require(platformType[12]).SafeAreaPaddingView, obj4);
  obj1[1] = items4;
  obj[1] = callback(closure_7, obj1);
  obj[1] = closure_9(callbackState(platformType[11]), obj);
  return closure_9(sendAuthorize, obj);
};