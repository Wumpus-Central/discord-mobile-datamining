// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import ConnectedAccountsActionCreatorsDefault from "../../../../../actions/ConnectedAccountsActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
function authorizeLink() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _authorizeLink(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          let url;
          const obj4 = { twoWayLinkType: require("TwoWayLinkType").TwoWayLinkType.MOBILE };
          c3 = 1;
          c4 = 1;
          const obj8 = { value: ConnectedAccountsActionCreatorsDefault.authorize(closure_0, obj4), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        url = value.body.url;
        const obj5 = closure_130_1(closure_130_2[10]);
        const tmp18 = url;
        let tmp6 = closure_130_7;
        if (obj6.isAndroid()) {
          let IN_APP = tmp6.CHROME;
        } else {
          IN_APP = tmp6.IN_APP;
        }
        tmp6 = closure_1;
        obj5.openURL(tmp18, IN_APP);
        c4 = 3;
        obj6 = closure_130_0(closure_130_2[11]);
      }
    } catch (tmp9) {
      c4 = tmp;
      throw tmp9;
    }
  }
};
const View = fn(17).View;
const WebBrowserType = fn(1085).WebBrowserType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = new LoggerDefault("TwoWayLink");
const createStyles = fn(5091);
let closure_11 = createStyles.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const ReactCompilerGating = fn(558);
const tmp3 = new LoggerDefault("TwoWayLink");
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx",
);

export const TwoWayLinkPreConnect = ReactCompilerGating.isReactCompilerEnabled()
  ? function TwoWayLinkPreConnect(platformType) {
      const cResult = require("c").c(44);
      platformType = platformType.platformType;
      _require = platformType;
      const onError = platformType.onError;
      onNext = platformType.onNext;
      ({ img, imgStyle, title, body, redirectDestination } = platformType);
      const tmp4 = closure_11();
      let obj = require("c");
      const twoWayLinkStyles = require("TwoWayLinkStyles").useTwoWayLinkStyles();
      const obj2 = require("TwoWayLinkStyles");
      const obj3 = noop;
      [r10030, _slicedToArray] = noop.useState(false);
      asyncGeneratorStep = noop.useRef(undefined);
      if (cResult[0] === onError) {
        if (cResult[3] === onNext) {
          if (cResult[4] === platformType) {
            let tmp8 = cResult[5];
          }
          noop = tmp8;
          if (cResult[6] !== tmp8) {
            class I {
              constructor() {
                obj = closure_1(closure_2[17]);
                subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                return () => {
                  onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                };
              }
            }
            const items = [tmp8];
            cResult[6] = tmp8;
            cResult[7] = I;
            cResult[8] = items;
            let tmp10 = items;
          } else {
            class I {
              constructor() {
                obj = closure_1(closure_2[17]);
                subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                return () => {
                  onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                };
              }
            }
            tmp10 = cResult[8];
          }
          const effect = obj3.useEffect(I, tmp10);
          const container = twoWayLinkStyles.container;
          if (imgStyle == null) {
            class I {
              constructor() {
                obj = closure_1(closure_2[17]);
                subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                return () => {
                  onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                };
              }
            }
          }
          if (cResult[9] === tmp4.image) {
            class I {
              constructor() {
                obj = closure_1(closure_2[17]);
                subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                return () => {
                  onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                };
              }
            }
            if (cResult[12] === img) {
              class I {
                constructor() {
                  obj = closure_1(closure_2[17]);
                  subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                  return () => {
                    onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                  };
                }
              }
              if (cResult[15] === twoWayLinkStyles.title) {
                class I {
                  constructor() {
                    obj = closure_1(closure_2[17]);
                    subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                    return () => {
                      onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                    };
                  }
                }
                if (cResult[18] === body) {
                  class I {
                    constructor() {
                      obj = closure_1(closure_2[17]);
                      subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                      return () => {
                        onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                      };
                    }
                  }
                  if (cResult[21] === redirectDestination) {
                    class I {
                      constructor() {
                        obj = closure_1(closure_2[17]);
                        subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                        return () => {
                          onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                        };
                      }
                    }
                    if (cResult[24] === twoWayLinkStyles.content) {
                      class I {
                        constructor() {
                          obj = closure_1(closure_2[17]);
                          subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                          return () => {
                            onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                          };
                        }
                      }
                    }
                    const obj4 = { style: twoWayLinkStyles.content, children: null };
                    const items1 = [tmp14, tmp18, tmp21, tmp24];
                    obj4.children = items1;
                    const tmp29 = closure_9(View, obj4);
                    cResult[24] = twoWayLinkStyles.content;
                    cResult[25] = tmp21;
                    cResult[26] = tmp24;
                    cResult[27] = tmp14;
                    cResult[28] = tmp18;
                    cResult[29] = tmp29;
                  }
                  let tmp25 = null != redirectDestination;
                  if (tmp25) {
                    class I {
                      constructor() {
                        obj = closure_1(closure_2[17]);
                        subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                        return () => {
                          onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                        };
                      }
                    }
                    const obj5 = {
                      style: tmp4.redirect,
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: null,
                    };
                    const intl = tmp(tmp2[20]).intl;
                    const obj6 = { redirectUrl: redirectDestination };
                    obj5.children = intl.format(tmp(tmp2[20]).t.XhlYYn, obj6);
                    tmp25 = closure_8(tmp(tmp2[19]).Text, obj5);
                  }
                  cResult[21] = redirectDestination;
                  cResult[22] = tmp4.redirect;
                  cResult[23] = tmp25;
                }
                const obj7 = {
                  variant: "text-md/medium",
                  color: "text-default",
                  style: twoWayLinkStyles.body,
                  children: body,
                };
                const tmp23 = closure_8(tmp(tmp2[19]).Text, obj7);
                cResult[18] = body;
                cResult[19] = twoWayLinkStyles.body;
                cResult[20] = tmp23;
              }
              const obj8 = {
                variant: "heading-xl/bold",
                color: "mobile-text-heading-primary",
                style: twoWayLinkStyles.title,
                accessibilityRole: "header",
                children: title,
              };
              const tmp20 = closure_8(tmp(tmp2[19]).Text, obj8);
              cResult[15] = twoWayLinkStyles.title;
              cResult[16] = title;
              cResult[17] = tmp20;
            }
            const obj9 = { source: img, style: tmp13 };
            const tmp17 = closure_8(onError(tmp2[18]), obj9);
            cResult[12] = img;
            cResult[13] = tmp13;
            cResult[14] = tmp17;
          }
          const items2 = [tmp4.image, imgStyle];
          cResult[9] = tmp4.image;
          cResult[10] = imgStyle;
          cResult[11] = items2;
        }
        const fn = function z(callbackState) {
          callbackState = callbackState.callbackState;
          if (callbackState === ref.current) {
            const obj = { callbackCode: tmp, callbackState };
            onNext(obj);
          } else {
            const _HermesInternal = HermesInternal;
            logger.warn("" + closure_0 + " link: received mismatching callback state!");
          }
        };
        cResult[3] = onNext;
        cResult[4] = platformType;
        cResult[5] = fn;
        tmp8 = fn;
      }
      _require = asyncGeneratorStep(async () => {
        v0(true);
        await authorizeLink(closure_0);
        closure_128_0 = value;
        v0 = 0;
        v0(false);
        state = closure_0(onNext[15]).getCallbackParamsFromURL(closure_128_0).state;
        onError(onNext[16])(null != state, "Authorize URL state query parameter must be present");
        c4.current = state;
        await "IconComponent";
        v0 = 0;
        tmp3();
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
      cResult[0] = onError;
      cResult[1] = platformType;
      cResult[2] = t1;
      const tmp6 = _slicedToArray(noop.useState(false), 2);
    }
  : function TwoWayLinkPreConnect(platformType) {
      platformType = platformType.platformType;
      const onError = platformType.onError;
      const onNext = platformType.onNext;
      ({ imgStyle, redirectDestination } = platformType);
      _slicedToArray = undefined;
      let callback1;
      ({ img, title, body } = platformType);
      const tmp = closure_11();
      const twoWayLinkStyles = platformType(onNext[14]).useTwoWayLinkStyles();
      let obj = platformType(onNext[14]);
      [tmp6, c3] = callback1.useState(false);
      asyncGeneratorStep = callback1.useRef(undefined);
      const items = [onError, platformType];
      const items1 = [platformType, onNext];
      const callback = callback1.useCallback(
        asyncGeneratorStep(async () => {
          v0(true);
          await closure_1_12(platformType);
          closure_128_0 = value;
          closure_129_3(false);
          state = platformType(tmp16[15]).getCallbackParamsFromURL(closure_128_0).state;
          tmp3(tmp16[16])(null != state, "Authorize URL state query parameter must be present");
          closure_129_4.current = state;
          await "IconComponent";
          v0 = 0;
          closure_129_1();
        }),
        items,
      );
      callback1 = callback1.useCallback((callbackState) => {
        callbackState = callbackState.callbackState;
        if (callbackState === ref.current) {
          const obj = { callbackCode: tmp, callbackState };
          onNext(obj);
        } else {
          const _HermesInternal = HermesInternal;
          logger.warn("" + platformType + " link: received mismatching callback state!");
        }
      }, items1);
      const items2 = [callback1];
      const effect = callback1.useEffect(() => {
        const subscription = DispatcherDefault.subscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
        return () => {
          onError(onNext[17]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
        };
      }, items2);
      const obj2 = { style: twoWayLinkStyles.container, children: null };
      const obj3 = { style: twoWayLinkStyles.content, children: null };
      const obj4 = { source: img, style: null };
      const items3 = [tmp.image];
      const tmp5 = _slicedToArray(callback1.useState(false), 2);
      if (imgStyle == null) {
        imgStyle = false;
      }
      items3[1] = imgStyle;
      obj4.style = items3;
      const items4 = [
        closure_8(onError(onNext[18]), obj4),
        closure_8(platformType(onNext[19]).Text, {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: twoWayLinkStyles.title,
          accessibilityRole: "header",
          children: title,
        }),
        closure_8(platformType(onNext[19]).Text, {
          variant: "text-md/medium",
          color: "text-default",
          style: twoWayLinkStyles.body,
          children: body,
        }),
      ];
      let tmp12Result = null != redirectDestination;
      if (tmp12Result) {
        const obj7 = { style: tmp.redirect, variant: "text-sm/medium", color: "text-default", children: null };
        const intl = tmp2(tmp3[20]).intl;
        const obj8 = { redirectUrl: redirectDestination };
        obj7.children = intl.format(tmp2(tmp3[20]).t.XhlYYn, obj8);
        tmp12Result = closure_8(tmp2(tmp3[19]).Text, obj7);
      }
      items4[3] = tmp12Result;
      obj3.children = items4;
      const items5 = [closure_9(View, obj3)];
      const obj9 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
      const obj10 = { style: twoWayLinkStyles.footerButton, children: null };
      const obj11 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
      const intl2 = tmp2(tmp3[20]).intl;
      obj11.text = intl2.string(platformType(onNext[20]).t["3PatSz"]);
      obj11.onPress = callback;
      obj11.loading = tmp6;
      obj10.children = closure_8(platformType(onNext[21]).Button, obj11);
      obj9.children = closure_8(View, obj10);
      items5[1] = closure_8(platformType(onNext[22]).SafeAreaPaddingView, obj9);
      obj2.children = items5;
      return closure_9(View, obj2);
    };
