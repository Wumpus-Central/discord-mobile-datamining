// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx
import _slicedToArray from "_slicedToArray";
import closure_4 from "jsxProd";
import Button from "Button";
import get_ActivityIndicator from "getSystemLocale";
import { WebBrowserType } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_6;
let error;
const require = arg1;
function _authorizeLink() {
  const self = this;
  const tmp = callback2((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const dependencyMap = tmp2;
              const callback2 = tmp5;
              let url;
              const obj1 = { twoWayLinkType: null };
              obj1[0] = callback(outer1_2[9]).TwoWayLinkType.MOBILE;
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = outer1_1(outer1_2[8]).authorize(url, obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            url = body.body.url;
            const obj5 = callback2(3890);
            const tmp19 = url;
            let tmp6 = closure_8;
            if (obj6.isAndroid()) {
              let IN_APP = tmp6.CHROME;
            } else {
              IN_APP = tmp6.IN_APP;
            }
            tmp6 = callback2;
            obj5.openURL(tmp19, IN_APP);
            c4 = 3;
            obj6 = url(500);
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const _authorizeLink = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Image: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const unpackModuleId = new require("get ActivityIndicator")("TwoWayLink");
let closure_12 = createCacheKey.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const tmp4 = new require("get ActivityIndicator")("TwoWayLink");
const result = require("noop").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx");

export const TwoWayLinkPreConnect = function TwoWayLinkPreConnect(platformType) {
  let body;
  let c3;
  let img;
  let imgStyle;
  let redirectDestination;
  let title;
  let tmp6;
  platformType = platformType.platformType;
  const onError = platformType.onError;
  const onNext = platformType.onNext;
  ({ imgStyle, redirectDestination } = platformType);
  let callback;
  let callback2;
  let callback1;
  ({ img, title, body } = platformType);
  const tmp = callback3();
  let obj = platformType(onNext[12]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  [tmp6, c3] = callback(callback1.useState(false), 2);
  callback2 = callback1.useRef(undefined);
  const items = [onError, platformType];
  const items1 = [platformType, onNext];
  callback = callback1.useCallback(callback2(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let state = tmp3;
            let closure_0 = tmp7;
            closure_0 = undefined;
            state = undefined;
            v0(true);
            v0 = 1;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = (function authorizeLink(outer1_0) {
              const self = this;
              const apply = closure_13.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(outer1_0);
            return obj1;
          }
        } else if (1 === tmp7) {
          v0 = 0;
          state();
          c5 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = undefined;
          return obj2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          v0 = 0;
          v0(false);
          state = outer1_0(outer1_2[13]).getCallbackParamsFromURL(closure_0).state;
          outer1_1(outer1_2[14])(null != state, "Authorize URL state query parameter must be present");
          c4.current = state;
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        let closure_2 = tmp15;
        if (tmp4 === v0) {
          c5 = tmp2;
          throw tmp15;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  callback1 = callback1.useCallback((callbackState) => {
    callbackState = callbackState.callbackState;
    if (callbackState === ref.current) {
      const obj = { callbackCode: null, callbackState: null };
      obj[0] = tmp;
      obj[1] = callbackState;
      onNext(obj);
    } else {
      const _HermesInternal = HermesInternal;
      outer1_11.warn("" + platformType + " link: received mismatching callback state!");
    }
  }, items1);
  const items2 = [callback1];
  const effect = callback1.useEffect(() => {
    const subscription = onError(onNext[15]).subscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    return () => {
      outer1_1(outer1_2[15]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", Button);
    };
  }, items2);
  obj = { style: twoWayLinkStyles.container, children: null };
  obj = { style: twoWayLinkStyles.content, children: null };
  let obj1 = { source: img, style: null };
  const items3 = [tmp.image, ];
  if (imgStyle == null) {
    imgStyle = false;
  }
  items3[1] = imgStyle;
  obj1[1] = items3;
  const items4 = [closure_9(closure_6, obj1), closure_9(platformType(onNext[16]).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: title }), closure_9(platformType(onNext[16]).Text, { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body }), ];
  let tmp12Result = null != redirectDestination;
  if (tmp12Result) {
    const obj4 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj4[0] = tmp.redirect;
    const intl = tmp2(tmp3[17]).intl;
    const obj5 = { redirectUrl: null };
    obj5[0] = redirectDestination;
    obj4[3] = intl.format(tmp2(tmp3[17]).t.XhlYYn, obj5);
    tmp12Result = tmp12(tmp2(tmp3[16]).Text, obj4);
  }
  items4[3] = tmp12Result;
  obj[1] = items4;
  const items5 = [closure_10(closure_7, obj), ];
  const obj6 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
  const obj7 = { style: twoWayLinkStyles.footerButton, children: null };
  const obj8 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
  const intl2 = tmp2(tmp3[17]).intl;
  obj8[2] = intl2.string(platformType(onNext[17]).t["3PatSz"]);
  obj8[3] = callback;
  obj8[4] = tmp6;
  obj7[1] = closure_9(platformType(onNext[19]).Button, obj8);
  obj6[2] = closure_9(closure_7, obj7);
  items5[1] = closure_9(platformType(onNext[18]).SafeAreaPaddingView, obj6);
  obj[1] = items5;
  return closure_10(closure_7, obj);
};