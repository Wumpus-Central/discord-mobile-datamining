// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import Constants from "../../../../../Constants.tsx";
import ConnectedAccountsActionCreatorsDefault from "../../../../../actions/ConnectedAccountsActionCreators.tsx";
import TwoWayLinkType from "../../../../../../discord_common/js/shared/shared-constants/TwoWayLinkType.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator_mod from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let platformType;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
function authorizeLink() {
  return obj(...arguments);
}
let obj = function _authorizeLink() {
  obj = _asyncToGenerator(async (arg0) => {
    let IN_APP;
    let c3;
    let c4;
    let closure_1;
    let closure_2;
    let closure_0 = arg0;
    const obj4 = { twoWayLinkType: TwoWayLinkType.TwoWayLinkType.MOBILE };
    const authorize = ConnectedAccountsActionCreatorsDefault.authorize;
    await authorize(closure_0, obj4);
    const url = value.body.url;
    const openURL = closure_130_1(closure_130_2[10]).openURL;
    const tmp15 = closure_130_1(closure_130_2[10]);
    const obj6 = closure_130_0(closure_130_2[11]);
    const tmp16 = url;
    if (obj6.isAndroid()) {
      IN_APP = closure_130_8.CHROME;
    } else {
      IN_APP = closure_130_8.IN_APP;
    }
    openURL(tmp16, IN_APP);
    return url;
  });
  return obj(...arguments);
};
let _slicedToArray = _slicedToArray_mod;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ Image: metroRequire, View: metroImportDefault } = react_native);
const WebBrowserType = Constants.WebBrowserType;
({ jsx: c9, jsxs: c10 } = Fragment);
let tmp4 = new LoggerDefault("TwoWayLink");
const logger = tmp4;
let closure_12 = createStyles.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (platformType) => {
      let body;
      let closure_5;
      let footerButton;
      let footerContainer;
      let img;
      let imgStyle;
      let intl;
      let items;
      let items1;
      let obj10;
      let onNext;
      let redirectDestination;
      let ref;
      let title;
      let tmp23;
      let tmp7;
      const tmp = platformType;
      obj = platformType(onNext[13]);
      const cResult = obj.c(44);
      platformType = platformType.platformType;
      const onError = platformType.onError;
      onNext = platformType.onNext;
      ({ img, imgStyle, title, body, redirectDestination } = platformType);
      const tmp4 = closure_12();
      const obj2 = platformType(onNext[14]);
      const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
      const obj3 = react;
      const tmp6 = _slicedToArray(react.useState(false), 2);
      [tmp7, _slicedToArray] = tmp6;
      _asyncToGenerator = react.useRef(undefined);
      if (cResult[0] === onError) {
        let tmp8;
        if (cResult[1] === platformType) {
          tmp8 = cResult[2];
        }
        if (cResult[3] === onNext) {
          let tmp9;
          if (cResult[4] === platformType) {
            tmp9 = cResult[5];
          }
          react = tmp9;
          class P {
            constructor(callbackState) {
              callbackState = callbackState.callbackState;
              if (callbackState === ref.current) {
                obj = { callbackCode: tmp, callbackState };
                onNext(obj);
              } else {
                const _HermesInternal = HermesInternal;
                logger.warn("" + platformType + " link: received mismatching callback state!");
              }
            }
          }
          const effect = obj3.useEffect(tmp10, tmp11);
          const container = twoWayLinkStyles.container;
          if (imgStyle == null) {
            imgStyle = false;
          }
          if (cResult[9] === tmp4.image) {
            let tmp14;
            if (cResult[10] === imgStyle) {
              tmp14 = cResult[11];
            }
            if (cResult[12] === img) {
              let tmp15;
              if (cResult[13] === tmp14) {
                tmp15 = cResult[14];
              }
              if (cResult[15] === twoWayLinkStyles.title) {
                let tmp18;
                if (cResult[16] === title) {
                  tmp18 = cResult[17];
                }
                if (cResult[18] === body) {
                  let tmp20;
                  if (cResult[19] === twoWayLinkStyles.body) {
                    tmp20 = cResult[20];
                  }
                  if (cResult[21] === redirectDestination) {
                    let tmp22;
                    if (cResult[22] === tmp4.redirect) {
                      tmp22 = cResult[23];
                    }
                    if (cResult[24] === twoWayLinkStyles.content) {
                      if (cResult[25] === tmp20) {
                        if (cResult[26] === tmp22) {
                          if (cResult[27] === tmp15) {
                            let tmp25;
                            let tmp29;
                            if (cResult[28] === tmp18) {
                              tmp25 = cResult[29];
                            }
                            class P {
                              constructor(callbackState) {
                                callbackState = callbackState.callbackState;
                                if (callbackState === ref.current) {
                                  obj = { callbackCode: tmp, callbackState };
                                  onNext(obj);
                                } else {
                                  const _HermesInternal = HermesInternal;
                                  logger.warn("" + platformType + " link: received mismatching callback state!");
                                }
                              }
                            }
                            ({ footerContainer, footerButton } = twoWayLinkStyles);
                            if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                              const string = tmp(tmp2[19]).intl.string;
                              class P {
                                constructor(callbackState) {
                                  callbackState = callbackState.callbackState;
                                  if (callbackState === ref.current) {
                                    obj = { callbackCode: tmp, callbackState };
                                    onNext(obj);
                                  } else {
                                    const _HermesInternal = HermesInternal;
                                    logger.warn("" + platformType + " link: received mismatching callback state!");
                                  }
                                }
                              }
                              cResult[30] = tmp30;
                              tmp29 = tmp30;
                            } else {
                              tmp29 = cResult[30];
                            }
                            if (cResult[31] === tmp8) {
                              let tmp31;
                              if (cResult[32] === tmp7) {
                                tmp31 = cResult[33];
                              }
                              if (cResult[34] === twoWayLinkStyles.footerButton) {
                                let tmp34;
                                if (cResult[35] === tmp31) {
                                  tmp34 = cResult[36];
                                }
                                if (cResult[37] === twoWayLinkStyles.footerContainer) {
                                  let tmp37;
                                  if (cResult[38] === tmp34) {
                                    tmp37 = cResult[39];
                                  }
                                  if (cResult[40] === twoWayLinkStyles.container) {
                                    if (cResult[41] === tmp25) {
                                      let tmp39;
                                      if (cResult[42] === tmp37) {
                                        tmp39 = cResult[43];
                                      }
                                      return tmp39;
                                    }
                                  }
                                  class P {
                                    constructor(callbackState) {
                                      callbackState = callbackState.callbackState;
                                      if (callbackState === ref.current) {
                                        obj = { callbackCode: tmp, callbackState };
                                        onNext(obj);
                                      } else {
                                        const _HermesInternal = HermesInternal;
                                        logger.warn("" + platformType + " link: received mismatching callback state!");
                                      }
                                    }
                                  }
                                  const obj4 = { style: container, children: items };
                                  items = [tmp25, tmp37];
                                  const tmp41 = closure_10(closure_7, obj4);
                                  cResult[40] = twoWayLinkStyles.container;
                                  cResult[41] = tmp25;
                                  cResult[42] = tmp37;
                                  cResult[43] = tmp41;
                                  tmp39 = tmp41;
                                }
                                class P {
                                  constructor(callbackState) {
                                    callbackState = callbackState.callbackState;
                                    if (callbackState === ref.current) {
                                      obj = { callbackCode: tmp, callbackState };
                                      onNext(obj);
                                    } else {
                                      const _HermesInternal = HermesInternal;
                                      logger.warn("" + platformType + " link: received mismatching callback state!");
                                    }
                                  }
                                }
                                const obj5 = { bottom: true, style: footerContainer, children: tmp34 };
                                const tmp38 = closure_9(tmp(onNext[21]).SafeAreaPaddingView, obj5);
                                cResult[37] = twoWayLinkStyles.footerContainer;
                                cResult[38] = tmp34;
                                cResult[39] = tmp38;
                                tmp37 = tmp38;
                              }
                              class P {
                                constructor(callbackState) {
                                  callbackState = callbackState.callbackState;
                                  if (callbackState === ref.current) {
                                    obj = { callbackCode: tmp, callbackState };
                                    onNext(obj);
                                  } else {
                                    const _HermesInternal = HermesInternal;
                                    logger.warn("" + platformType + " link: received mismatching callback state!");
                                  }
                                }
                              }
                              let obj6 = { style: footerButton, children: tmp31 };
                              const tmp36 = closure_9(closure_7, obj6);
                              cResult[34] = twoWayLinkStyles.footerButton;
                              cResult[35] = tmp31;
                              cResult[36] = tmp36;
                              tmp34 = tmp36;
                            }
                            const obj7 = { variant: "primary", size: "lg", text: tmp29, onPress: tmp8, loading: tmp7 };
                            const tmp33 = closure_9(tmp(onNext[20]).Button, obj7);
                            cResult[31] = tmp8;
                            cResult[32] = tmp7;
                            cResult[33] = tmp33;
                            tmp31 = tmp33;
                          }
                        }
                      }
                    }
                    class P {
                      constructor(callbackState) {
                        callbackState = callbackState.callbackState;
                        if (callbackState === ref.current) {
                          obj = { callbackCode: tmp, callbackState };
                          onNext(obj);
                        } else {
                          const _HermesInternal = HermesInternal;
                          logger.warn("" + platformType + " link: received mismatching callback state!");
                        }
                      }
                    }
                    const obj8 = { style: twoWayLinkStyles.content, children: items1 };
                    items1 = [tmp15, tmp18, tmp20, tmp22];
                    const tmp27 = closure_10(closure_7, obj8);
                    cResult[24] = twoWayLinkStyles.content;
                    cResult[25] = tmp20;
                    cResult[26] = tmp22;
                    cResult[27] = tmp15;
                    cResult[28] = tmp18;
                    cResult[29] = tmp27;
                    tmp25 = tmp27;
                  }
                  class P {
                    constructor(callbackState) {
                      callbackState = callbackState.callbackState;
                      if (callbackState === ref.current) {
                        obj = { callbackCode: tmp, callbackState };
                        onNext(obj);
                      } else {
                        const _HermesInternal = HermesInternal;
                        logger.warn("" + platformType + " link: received mismatching callback state!");
                      }
                    }
                  }
                  if (tmp23) {
                    const obj9 = {
                      style: null,
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: intl.format(tmp(onNext[19]).t.XhlYYn, obj10),
                    };
                    class P {
                      constructor(callbackState) {
                        callbackState = callbackState.callbackState;
                        if (callbackState === ref.current) {
                          obj = { callbackCode: tmp, callbackState };
                          onNext(obj);
                        } else {
                          const _HermesInternal = HermesInternal;
                          logger.warn("" + platformType + " link: received mismatching callback state!");
                        }
                      }
                    }
                    const Text = tmp(tmp2[18]).Text;
                    intl = tmp(tmp2[19]).intl;
                    obj10 = { redirectUrl: redirectDestination };
                    tmp23 = closure_9(Text, obj9);
                  }
                  cResult[21] = redirectDestination;
                  cResult[22] = tmp4.redirect;
                  cResult[23] = tmp23;
                  tmp22 = tmp23;
                }
                class P {
                  constructor(callbackState) {
                    callbackState = callbackState.callbackState;
                    if (callbackState === ref.current) {
                      obj = { callbackCode: tmp, callbackState };
                      onNext(obj);
                    } else {
                      const _HermesInternal = HermesInternal;
                      logger.warn("" + platformType + " link: received mismatching callback state!");
                    }
                  }
                }
                const obj11 = {
                  variant: "text-md/medium",
                  color: "text-default",
                  style: twoWayLinkStyles.body,
                  children: body,
                };
                const tmp21 = closure_9(tmp(onNext[18]).Text, obj11);
                cResult[18] = body;
                cResult[19] = twoWayLinkStyles.body;
                cResult[20] = tmp21;
                tmp20 = tmp21;
              }
              class P {
                constructor(callbackState) {
                  callbackState = callbackState.callbackState;
                  if (callbackState === ref.current) {
                    obj = { callbackCode: tmp, callbackState };
                    onNext(obj);
                  } else {
                    const _HermesInternal = HermesInternal;
                    logger.warn("" + platformType + " link: received mismatching callback state!");
                  }
                }
              }
              const obj12 = {
                variant: "heading-xl/bold",
                color: "mobile-text-heading-primary",
                style: twoWayLinkStyles.title,
                accessibilityRole: "header",
                children: title,
              };
              const tmp19 = closure_9(tmp(tmp2[18]).Text, obj12);
              cResult[15] = twoWayLinkStyles.title;
              cResult[16] = title;
              cResult[17] = tmp19;
              tmp18 = tmp19;
            }
            class P {
              constructor(callbackState) {
                callbackState = callbackState.callbackState;
                if (callbackState === ref.current) {
                  obj = { callbackCode: tmp, callbackState };
                  onNext(obj);
                } else {
                  const _HermesInternal = HermesInternal;
                  logger.warn("" + platformType + " link: received mismatching callback state!");
                }
              }
            }
            const obj13 = { source: img, style: tmp14 };
            const tmp17 = closure_9(closure_6, obj13);
            cResult[12] = img;
            cResult[13] = tmp14;
            cResult[14] = tmp17;
            tmp15 = tmp17;
          }
          const items2 = [tmp4.image, imgStyle];
          cResult[9] = tmp4.image;
          cResult[10] = imgStyle;
          cResult[11] = items2;
          tmp14 = items2;
        }
        class P {
          constructor(callbackState) {
            callbackState = callbackState.callbackState;
            if (callbackState === ref.current) {
              obj = { callbackCode: tmp, callbackState };
              onNext(obj);
            } else {
              const _HermesInternal = HermesInternal;
              logger.warn("" + platformType + " link: received mismatching callback state!");
            }
          }
        }
        cResult[3] = onNext;
        cResult[4] = platformType;
        cResult[5] = P;
        tmp9 = P;
      }
      let closure_0 = _asyncToGenerator(async () => {
        let c5;
        let closure_1;
        let closure_2;
        closure_0 = tmp4;
        v0(true);
        await closure_2_13(closure_0);
        closure_0 = value;
        v0(false);
        const obj6 = closure_0(onNext[15]);
        const state = obj6.getCallbackParamsFromURL(closure_0).state;
        onError(onNext[16])(null != state, "Authorize URL state query parameter must be present");
        c4.current = state;
        await "IconComponent";
        tmp();
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[0] = onError;
      cResult[1] = platformType;
      cResult[2] = fn;
      tmp8 = fn;
    }
  : (platformType) => {
      let Button;
      let body;
      let c3;
      let img;
      let imgStyle;
      let intl;
      let intl2;
      let items3;
      let items4;
      let items5;
      let obj10;
      let obj11;
      let obj8;
      let redirectDestination;
      let ref;
      let title;
      let tmp6;
      platformType = platformType.platformType;
      const onError = platformType.onError;
      const onNext = platformType.onNext;
      ({ imgStyle, redirectDestination } = platformType);
      _slicedToArray = undefined;
      let callback1;
      ({ img, title, body } = platformType);
      const tmp = closure_12();
      const tmp3 = onNext;
      obj = platformType(onNext[14]);
      const twoWayLinkStyles = obj.useTwoWayLinkStyles();
      [tmp6, c3] = callback1.useState(false);
      _slicedToArray(callback1.useState(false), 2);
      _asyncToGenerator = callback1.useRef(undefined);
      const items = [onError, platformType];
      const items1 = [platformType, onNext];
      const callback = callback1.useCallback(
        _asyncToGenerator(async () => {
          let c4;
          let c5;
          let closure_0;
          let closure_1;
          let closure_2;
          v0(true);
          await closure_1_13(platformType);
          platformType = value;
          closure_129_3(false);
          const obj6 = platformType(onNext[15]);
          const state = obj6.getCallbackParamsFromURL(platformType).state;
          tmp(onNext[16])(null != state, "Authorize URL state query parameter must be present");
          closure_129_4.current = state;
          await "IconComponent";
          closure_129_1();
        }),
        items,
      );
      callback1 = callback1.useCallback((callbackState) => {
        callbackState = callbackState.callbackState;
        if (callbackState === ref.current) {
          obj = { callbackCode: tmp, callbackState };
          onNext(obj);
        } else {
          const _HermesInternal = HermesInternal;
          logger.warn("" + platformType + " link: received mismatching callback state!");
        }
      }, items1);
      const items2 = [callback1];
      const effect = callback1.useEffect(() => {
        obj = DispatcherDefault;
        const subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
        return () => {
          obj = onError(onNext[17]);
          obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
        };
      }, items2);
      const obj2 = { style: twoWayLinkStyles.container, children: items5 };
      const obj3 = { style: twoWayLinkStyles.content, children: items4 };
      const obj4 = { source: img, style: items3 };
      items3 = [tmp.image];
      if (imgStyle == null) {
        imgStyle = false;
      }
      items3[1] = imgStyle;
      items4 = [closure_9(closure_6, obj4), , ,];
      const obj5 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: twoWayLinkStyles.title,
        accessibilityRole: "header",
        children: title,
      };
      items4[1] = closure_9(platformType(tmp3[18]).Text, obj5);
      let obj6 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
      items4[2] = closure_9(platformType(tmp3[18]).Text, obj6);
      let tmp12Result = null != redirectDestination;
      if (tmp12Result) {
        const obj7 = {
          style: tmp.redirect,
          variant: "text-sm/medium",
          color: "text-default",
          children: intl.format(platformType(tmp3[19]).t.XhlYYn, obj8),
        };
        const Text = tmp2(tmp3[18]).Text;
        intl = tmp2(tmp3[19]).intl;
        obj8 = { redirectUrl: redirectDestination };
        tmp12Result = closure_9(Text, obj7);
      }
      items4[3] = tmp12Result;
      items5 = [closure_10(closure_7, obj3)];
      const obj9 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: closure_9(closure_7, obj10) };
      obj10 = { style: twoWayLinkStyles.footerButton, children: closure_9(Button, obj11) };
      const SafeAreaPaddingView = tmp2(tmp3[21]).SafeAreaPaddingView;
      obj11 = {
        variant: "primary",
        size: "lg",
        text: intl2.string(platformType(tmp3[19]).t["3PatSz"]),
        onPress: callback,
        loading: tmp6,
      };
      Button = tmp2(tmp3[20]).Button;
      intl2 = tmp2(tmp3[19]).intl;
      items5[1] = closure_9(SafeAreaPaddingView, obj9);
      return closure_10(closure_7, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx",
);

export const TwoWayLinkPreConnect = tmp5;
