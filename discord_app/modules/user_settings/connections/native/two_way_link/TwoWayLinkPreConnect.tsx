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
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _authorizeLink(arg0) {
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
      return { value: "IconComponent", done: "IconComponent" };
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
        let tmp6 = closure_130_8;
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
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const WebBrowserType = fn(1085).WebBrowserType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const logger = new LoggerDefault("TwoWayLink");
const createStyles = fn(4890);
let closure_12 = createStyles.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const ReactCompilerGating = fn(558);
let tmp4 = new LoggerDefault("TwoWayLink");
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx",
);

export const TwoWayLinkPreConnect = ReactCompilerGating.isReactCompilerEnabled()
  ? (platformType) => {
      const cResult = require("c").c(44);
      platformType = platformType.platformType;
      _require = platformType;
      const onError = platformType.onError;
      onNext = platformType.onNext;
      ({ img, imgStyle, title, body, redirectDestination } = platformType);
      const tmp4 = closure_12();
      let obj = require("c");
      const twoWayLinkStyles = require("TwoWayLinkStyles").useTwoWayLinkStyles();
      const obj2 = require("TwoWayLinkStyles");
      const obj3 = noop;
      [tmp7, _slicedToArray] = noop.useState(false);
      asyncGeneratorStep = noop.useRef(undefined);
      if (cResult[0] === onError) {
        if (cResult[1] === platformType) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] === onNext) {
          if (cResult[4] === platformType) {
            let tmp9 = cResult[5];
          }
          noop = tmp9;
          class P {
            constructor(arg0) {
              callbackState = platformType.callbackState;
              if (callbackState === closure_4.current) {
                tmp6 = onNext;
                obj = { callbackCode: null, callbackState: null };
                obj.callbackCode = tmp;
                obj.callbackState = callbackState;
                tmp7 = onNext(obj);
              } else {
                tmp2 = closure_11;
                tmp3 = closure_0;
                tmp4 = globalThis;
                _HermesInternal = HermesInternal;
                str = " link: received mismatching callback state!";
                str2 = "";
                warnResult = closure_11.warn("" + closure_0 + " link: received mismatching callback state!");
              }
              return;
            }
          }
          const effect = obj3.useEffect(tmp10, tmp11);
          if (imgStyle == null) {
            imgStyle = false;
          }
          if (cResult[9] === tmp4.image) {
            if (cResult[10] === imgStyle) {
              let tmp14 = cResult[11];
            }
            if (cResult[12] === img) {
              if (cResult[13] === tmp14) {
                let tmp15 = cResult[14];
              }
              if (cResult[15] === twoWayLinkStyles.title) {
                if (cResult[16] === title) {
                  let tmp18 = cResult[17];
                }
                if (cResult[18] === body) {
                  if (cResult[19] === twoWayLinkStyles.body) {
                    let tmp20 = cResult[20];
                  }
                  if (cResult[21] === redirectDestination) {
                    if (cResult[22] === tmp4.redirect) {
                      let tmp22 = cResult[23];
                    }
                    if (cResult[24] === twoWayLinkStyles.content) {
                      if (cResult[25] === tmp20) {
                        if (cResult[26] === tmp22) {
                          if (cResult[27] === tmp15) {
                            if (cResult[28] === tmp18) {
                              let tmp25 = cResult[29];
                            }
                            class P {
                              constructor(arg0) {
                                callbackState = platformType.callbackState;
                                if (callbackState === closure_4.current) {
                                  tmp6 = onNext;
                                  obj = { callbackCode: null, callbackState: null };
                                  obj.callbackCode = tmp;
                                  obj.callbackState = callbackState;
                                  tmp7 = onNext(obj);
                                } else {
                                  tmp2 = closure_11;
                                  tmp3 = closure_0;
                                  tmp4 = globalThis;
                                  _HermesInternal = HermesInternal;
                                  str = " link: received mismatching callback state!";
                                  str2 = "";
                                  warnResult = closure_11.warn(
                                    "" + closure_0 + " link: received mismatching callback state!",
                                  );
                                }
                                return;
                              }
                            }
                            ({ footerContainer, footerButton } = twoWayLinkStyles);
                            if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                              const string = tmp(tmp2[19]).intl.string;
                              class P {
                                constructor(arg0) {
                                  callbackState = platformType.callbackState;
                                  if (callbackState === closure_4.current) {
                                    tmp6 = onNext;
                                    obj = { callbackCode: null, callbackState: null };
                                    obj.callbackCode = tmp;
                                    obj.callbackState = callbackState;
                                    tmp7 = onNext(obj);
                                  } else {
                                    tmp2 = closure_11;
                                    tmp3 = closure_0;
                                    tmp4 = globalThis;
                                    _HermesInternal = HermesInternal;
                                    str = " link: received mismatching callback state!";
                                    str2 = "";
                                    warnResult = closure_11.warn(
                                      "" + closure_0 + " link: received mismatching callback state!",
                                    );
                                  }
                                  return;
                                }
                              }
                              cResult[30] = tmp30;
                              let tmp29 = tmp30;
                            } else {
                              tmp29 = cResult[30];
                            }
                            if (cResult[31] === tmp8) {
                              if (cResult[32] === tmp7) {
                                let tmp31 = cResult[33];
                              }
                              if (cResult[34] === twoWayLinkStyles.footerButton) {
                                if (cResult[35] === tmp31) {
                                  let tmp34 = cResult[36];
                                }
                                if (cResult[37] === twoWayLinkStyles.footerContainer) {
                                  if (cResult[38] === tmp34) {
                                    let tmp37 = cResult[39];
                                  }
                                  if (cResult[40] === twoWayLinkStyles.container) {
                                    if (cResult[41] === tmp25) {
                                      if (cResult[42] === tmp37) {
                                        let tmp39 = cResult[43];
                                      }
                                      return tmp39;
                                    }
                                  }
                                  class P {
                                    constructor(arg0) {
                                      callbackState = platformType.callbackState;
                                      if (callbackState === closure_4.current) {
                                        tmp6 = onNext;
                                        obj = { callbackCode: null, callbackState: null };
                                        obj.callbackCode = tmp;
                                        obj.callbackState = callbackState;
                                        tmp7 = onNext(obj);
                                      } else {
                                        tmp2 = closure_11;
                                        tmp3 = closure_0;
                                        tmp4 = globalThis;
                                        _HermesInternal = HermesInternal;
                                        str = " link: received mismatching callback state!";
                                        str2 = "";
                                        warnResult = closure_11.warn(
                                          "" + closure_0 + " link: received mismatching callback state!",
                                        );
                                      }
                                      return;
                                    }
                                  }
                                  const obj4 = { style: twoWayLinkStyles.container, children: null };
                                  const items = [tmp25, tmp37];
                                  obj4.children = items;
                                  const tmp41 = closure_10(closure_7, obj4);
                                  cResult[40] = twoWayLinkStyles.container;
                                  cResult[41] = tmp25;
                                  cResult[42] = tmp37;
                                  cResult[43] = tmp41;
                                  tmp39 = tmp41;
                                }
                                class P {
                                  constructor(arg0) {
                                    callbackState = platformType.callbackState;
                                    if (callbackState === closure_4.current) {
                                      tmp6 = onNext;
                                      obj = { callbackCode: null, callbackState: null };
                                      obj.callbackCode = tmp;
                                      obj.callbackState = callbackState;
                                      tmp7 = onNext(obj);
                                    } else {
                                      tmp2 = closure_11;
                                      tmp3 = closure_0;
                                      tmp4 = globalThis;
                                      _HermesInternal = HermesInternal;
                                      str = " link: received mismatching callback state!";
                                      str2 = "";
                                      warnResult = closure_11.warn(
                                        "" + closure_0 + " link: received mismatching callback state!",
                                      );
                                    }
                                    return;
                                  }
                                }
                                const obj5 = { bottom: true, style: footerContainer, children: tmp34 };
                                const tmp38 = closure_9(tmp(tmp2[21]).SafeAreaPaddingView, obj5);
                                cResult[37] = twoWayLinkStyles.footerContainer;
                                cResult[38] = tmp34;
                                cResult[39] = tmp38;
                                tmp37 = tmp38;
                              }
                              class P {
                                constructor(arg0) {
                                  callbackState = platformType.callbackState;
                                  if (callbackState === closure_4.current) {
                                    tmp6 = onNext;
                                    obj = { callbackCode: null, callbackState: null };
                                    obj.callbackCode = tmp;
                                    obj.callbackState = callbackState;
                                    tmp7 = onNext(obj);
                                  } else {
                                    tmp2 = closure_11;
                                    tmp3 = closure_0;
                                    tmp4 = globalThis;
                                    _HermesInternal = HermesInternal;
                                    str = " link: received mismatching callback state!";
                                    str2 = "";
                                    warnResult = closure_11.warn(
                                      "" + closure_0 + " link: received mismatching callback state!",
                                    );
                                  }
                                  return;
                                }
                              }
                              const obj6 = { style: footerButton, children: tmp31 };
                              const tmp36 = closure_9(closure_7, obj6);
                              cResult[34] = twoWayLinkStyles.footerButton;
                              cResult[35] = tmp31;
                              cResult[36] = tmp36;
                              tmp34 = tmp36;
                            }
                            const obj7 = { variant: "primary", size: "lg", text: tmp29, onPress: tmp8, loading: tmp7 };
                            const tmp33 = closure_9(tmp(tmp2[20]).Button, obj7);
                            cResult[31] = tmp8;
                            cResult[32] = tmp7;
                            cResult[33] = tmp33;
                            tmp31 = tmp33;
                          }
                        }
                      }
                    }
                    class P {
                      constructor(arg0) {
                        callbackState = platformType.callbackState;
                        if (callbackState === closure_4.current) {
                          tmp6 = onNext;
                          obj = { callbackCode: null, callbackState: null };
                          obj.callbackCode = tmp;
                          obj.callbackState = callbackState;
                          tmp7 = onNext(obj);
                        } else {
                          tmp2 = closure_11;
                          tmp3 = closure_0;
                          tmp4 = globalThis;
                          _HermesInternal = HermesInternal;
                          str = " link: received mismatching callback state!";
                          str2 = "";
                          warnResult = closure_11.warn("" + closure_0 + " link: received mismatching callback state!");
                        }
                        return;
                      }
                    }
                    const obj8 = { style: twoWayLinkStyles.content, children: null };
                    const items1 = [tmp15, tmp18, tmp20, tmp22];
                    obj8.children = items1;
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
                    constructor(arg0) {
                      callbackState = platformType.callbackState;
                      if (callbackState === closure_4.current) {
                        tmp6 = onNext;
                        obj = { callbackCode: null, callbackState: null };
                        obj.callbackCode = tmp;
                        obj.callbackState = callbackState;
                        tmp7 = onNext(obj);
                      } else {
                        tmp2 = closure_11;
                        tmp3 = closure_0;
                        tmp4 = globalThis;
                        _HermesInternal = HermesInternal;
                        str = " link: received mismatching callback state!";
                        str2 = "";
                        warnResult = closure_11.warn("" + closure_0 + " link: received mismatching callback state!");
                      }
                      return;
                    }
                  }
                  if (tmp23) {
                    const obj9 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
                    class P {
                      constructor(arg0) {
                        callbackState = platformType.callbackState;
                        if (callbackState === closure_4.current) {
                          tmp6 = onNext;
                          obj = { callbackCode: null, callbackState: null };
                          obj.callbackCode = tmp;
                          obj.callbackState = callbackState;
                          tmp7 = onNext(obj);
                        } else {
                          tmp2 = closure_11;
                          tmp3 = closure_0;
                          tmp4 = globalThis;
                          _HermesInternal = HermesInternal;
                          str = " link: received mismatching callback state!";
                          str2 = "";
                          warnResult = closure_11.warn("" + closure_0 + " link: received mismatching callback state!");
                        }
                        return;
                      }
                    }
                    const intl = tmp(tmp2[19]).intl;
                    const obj10 = { redirectUrl: redirectDestination };
                    obj9.children = intl.format(tmp(tmp2[19]).t.XhlYYn, obj10);
                    tmp23 = closure_9(tmp(tmp2[18]).Text, obj9);
                  }
                  cResult[21] = redirectDestination;
                  cResult[22] = tmp4.redirect;
                  cResult[23] = tmp23;
                  tmp22 = tmp23;
                }
                class P {
                  constructor(arg0) {
                    callbackState = platformType.callbackState;
                    if (callbackState === closure_4.current) {
                      tmp6 = onNext;
                      obj = { callbackCode: null, callbackState: null };
                      obj.callbackCode = tmp;
                      obj.callbackState = callbackState;
                      tmp7 = onNext(obj);
                    } else {
                      tmp2 = closure_11;
                      tmp3 = closure_0;
                      tmp4 = globalThis;
                      _HermesInternal = HermesInternal;
                      str = " link: received mismatching callback state!";
                      str2 = "";
                      warnResult = closure_11.warn("" + closure_0 + " link: received mismatching callback state!");
                    }
                    return;
                  }
                }
                const obj11 = {
                  variant: "text-md/medium",
                  color: "text-default",
                  style: twoWayLinkStyles.body,
                  children: body,
                };
                const tmp21 = closure_9(tmp(tmp2[18]).Text, obj11);
                cResult[18] = body;
                cResult[19] = twoWayLinkStyles.body;
                cResult[20] = tmp21;
                tmp20 = tmp21;
              }
              class P {
                constructor(arg0) {
                  callbackState = platformType.callbackState;
                  if (callbackState === closure_4.current) {
                    tmp6 = onNext;
                    obj = { callbackCode: null, callbackState: null };
                    obj.callbackCode = tmp;
                    obj.callbackState = callbackState;
                    tmp7 = onNext(obj);
                  } else {
                    tmp2 = closure_11;
                    tmp3 = closure_0;
                    tmp4 = globalThis;
                    _HermesInternal = HermesInternal;
                    str = " link: received mismatching callback state!";
                    str2 = "";
                    warnResult = closure_11.warn("" + closure_0 + " link: received mismatching callback state!");
                  }
                  return;
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
              constructor(arg0) {
                callbackState = platformType.callbackState;
                if (callbackState === closure_4.current) {
                  tmp6 = onNext;
                  obj = { callbackCode: null, callbackState: null };
                  obj.callbackCode = tmp;
                  obj.callbackState = callbackState;
                  tmp7 = onNext(obj);
                } else {
                  tmp2 = closure_11;
                  tmp3 = closure_0;
                  tmp4 = globalThis;
                  _HermesInternal = HermesInternal;
                  str = " link: received mismatching callback state!";
                  str2 = "";
                  warnResult = closure_11.warn("" + closure_0 + " link: received mismatching callback state!");
                }
                return;
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
          constructor(arg0) {
            callbackState = platformType.callbackState;
            if (callbackState === closure_4.current) {
              tmp6 = onNext;
              obj = { callbackCode: null, callbackState: null };
              obj.callbackCode = tmp;
              obj.callbackState = callbackState;
              tmp7 = onNext(obj);
            } else {
              tmp2 = closure_11;
              tmp3 = closure_0;
              tmp4 = globalThis;
              _HermesInternal = HermesInternal;
              str = " link: received mismatching callback state!";
              str2 = "";
              warnResult = closure_11.warn("" + closure_0 + " link: received mismatching callback state!");
            }
            return;
          }
        }
        cResult[3] = onNext;
        cResult[4] = platformType;
        cResult[5] = P;
        tmp9 = P;
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
      const fn = function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      cResult[0] = onError;
      cResult[1] = platformType;
      cResult[2] = fn;
      tmp8 = fn;
      const tmp6 = _slicedToArray(noop.useState(false), 2);
    }
  : (platformType) => {
      platformType = platformType.platformType;
      const onError = platformType.onError;
      const onNext = platformType.onNext;
      ({ imgStyle, redirectDestination } = platformType);
      _slicedToArray = undefined;
      let callback1;
      ({ img, title, body } = platformType);
      const tmp = closure_12();
      const twoWayLinkStyles = platformType(onNext[14]).useTwoWayLinkStyles();
      let obj = platformType(onNext[14]);
      [tmp6, c3] = callback1.useState(false);
      asyncGeneratorStep = callback1.useRef(undefined);
      const items = [onError, platformType];
      const items1 = [platformType, onNext];
      const callback = callback1.useCallback(
        asyncGeneratorStep(async () => {
          v0(true);
          await closure_1_13(platformType);
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
      if (imgStyle == null) {
        imgStyle = false;
      }
      items3[1] = imgStyle;
      obj4.style = items3;
      const items4 = [
        closure_9(closure_6, obj4),
        closure_9(platformType(onNext[18]).Text, {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: twoWayLinkStyles.title,
          accessibilityRole: "header",
          children: title,
        }),
        closure_9(platformType(onNext[18]).Text, {
          variant: "text-md/medium",
          color: "text-default",
          style: twoWayLinkStyles.body,
          children: body,
        }),
      ];
      let tmp12Result = null != redirectDestination;
      if (tmp12Result) {
        const obj7 = { style: tmp.redirect, variant: "text-sm/medium", color: "text-default", children: null };
        const intl = tmp2(tmp3[19]).intl;
        const obj8 = { redirectUrl: redirectDestination };
        obj7.children = intl.format(tmp2(tmp3[19]).t.XhlYYn, obj8);
        tmp12Result = closure_9(tmp2(tmp3[18]).Text, obj7);
      }
      items4[3] = tmp12Result;
      obj3.children = items4;
      const items5 = [closure_10(closure_7, obj3)];
      const obj9 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
      const obj10 = { style: twoWayLinkStyles.footerButton, children: null };
      const obj11 = { variant: "primary", size: "lg", text: null, onPress: null, loading: null };
      const intl2 = tmp2(tmp3[19]).intl;
      obj11.text = intl2.string(platformType(onNext[19]).t["3PatSz"]);
      obj11.onPress = callback;
      obj11.loading = tmp6;
      obj10.children = closure_9(platformType(onNext[20]).Button, obj11);
      obj9.children = closure_9(closure_7, obj10);
      items5[1] = closure_9(platformType(onNext[21]).SafeAreaPaddingView, obj9);
      obj2.children = items5;
      return closure_10(closure_7, obj2);
    };
