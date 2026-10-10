// === Module 16439: MessagesHeader ===

// Module 16439 (MessagesHeader)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4850 */;
import _modDef5033 from "module_5033" /* 5033 */;
import spring from "spring" /* 5378 */;
import ButtonConstants from "ButtonConstants" /* 5384 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 6201 */;
import _modDef6740 from "module_6740" /* 6740 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10514 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 11893 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12034 */;
import MessageRequestsButtonDefault from "MessageRequestsButton" /* 16440 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const SearchTypes = fn(1085).SearchTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = 1.75;
const PX_16 = nativeDefault.space.PX_16;
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(5092);
let obj = { headerPanel: { position: "relative", padding: PX_16, paddingBottom: nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM }, headerPanelTitle: null, headerPanelButtons: null, headerBorder: null };
let obj3 = { position: "relative", padding: PX_16, paddingBottom: nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM };
obj.headerPanelTitle = { paddingBottom: PX_8, flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "space-between" };
let obj4 = { paddingBottom: PX_8, flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "space-between" };
obj.headerPanelButtons = { height: fn(5384).SMALL_BUTTON_HEIGHT, gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
let obj6 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.colors.BORDER_SUBTLE;
obj6.top = undefined;
obj6.height = 1;
obj.headerBorder = obj6;
let closure_11 = createStyles.createStyles(obj);
const __initData = { code: "function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}" };
const __initData2 = { code: "function MessagesHeaderTsx2(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}" };
const ReactCompilerGating = fn(558);
let obj5 = { height: fn(5384).SMALL_BUTTON_HEIGHT, gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesHeader(arg0) {
  const cResult = scrollPosition(576).c(32);
  ({ height, scrollPosition } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] !== height) {
    let obj2 = { height };
    cResult[0] = height;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.headerPanel) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    const fn = function y() {
      let num = 0;
      if (scrollPosition.get() > 0) {
        num = 1;
      }
      return { opacity: spring.withSpring(num) };
    };
    let obj3 = { withSpring: scrollPosition(5378).withSpring, scrollPosition };
    fn.__closure = obj3;
    fn.__workletHash = 17233409273245;
    fn.__initData = __initData;
    const animatedStyle = scrollPosition(4850).useAnimatedStyle(fn);
    const tmpResult = scrollPosition(4850);
    const isHomeDrawerEnabled = scrollPosition(16434).useIsHomeDrawerEnabled();
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function f() {
        const rootNavigationRef = scrollPosition(4977).getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("message-requests");
        }
      };
      cResult[5] = fn2;
      let tmp11 = fn2;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            obj1 = { screen: "add-friends", params: null };
            obj1.params = { sourcePage: "Messages Tab", presentation: "card" };
            str = "friends";
            navigateResult = rootNavigationRef.navigate("friends", obj1);
          }
          return;
        }
      }
      cResult[6] = B;
    } else {
      class B {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            obj1 = { screen: "add-friends", params: null };
            obj1.params = { sourcePage: "Messages Tab", presentation: "card" };
            str = "friends";
            navigateResult = rootNavigationRef.navigate("friends", obj1);
          }
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          tmp = closure_1_2;
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            tmp3 = closure_1_1;
            obj2 = closure_1_1(tmp[15]);
            obj1 = { type: null };
            tmp4 = closure_1_5;
            obj1.type = closure_1_5.DMS;
            result = obj2.navigateToSearchWithPrefetch(rootNavigationRef, obj1);
          }
          return;
        }
      }
      cResult[7] = E;
    } else {
      class E {
        constructor() {
          tmp = closure_1_2;
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            tmp3 = closure_1_1;
            obj2 = closure_1_1(tmp[15]);
            obj1 = { type: null };
            tmp4 = closure_1_5;
            obj1.type = closure_1_5.DMS;
            result = obj2.navigateToSearchWithPrefetch(rootNavigationRef, obj1);
          }
          return;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            current = rootNavigationRef.current;
            if (current != null) {
              obj1 = { screen: "new-message", params: null };
              obj1.params = { sourcePage: "Messages Header" };
              str = "friends";
              navigateResult = current.navigate("friends", obj1);
            }
          }
          return;
        }
      }
      cResult[8] = I;
    } else {
      class I {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            current = rootNavigationRef.current;
            if (current != null) {
              obj1 = { screen: "new-message", params: null };
              obj1.params = { sourcePage: "Messages Header" };
              str = "friends";
              navigateResult = current.navigate("friends", obj1);
            }
          }
          return;
        }
      }
    }
    const tmp16 = HeaderDebugOverlayDefault("bespoke");
    const _Symbol5 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            current = rootNavigationRef.current;
            if (current != null) {
              obj1 = { screen: "new-message", params: null };
              obj1.params = { sourcePage: "Messages Header" };
              str = "friends";
              navigateResult = current.navigate("friends", obj1);
            }
          }
          return;
        }
      }
      const obj4 = { size: "sm", color: nativeDefault.colors.WHITE };
      const tmp18 = closure_6(scrollPosition(10308).PlusLargeIcon, obj4);
      cResult[9] = tmp18;
      const tmp17 = tmp18;
    } else {
      class I {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            current = rootNavigationRef.current;
            if (current != null) {
              obj1 = { screen: "new-message", params: null };
              obj1.params = { sourcePage: "Messages Header" };
              str = "friends";
              navigateResult = current.navigate("friends", obj1);
            }
          }
          return;
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            current = rootNavigationRef.current;
            if (current != null) {
              obj1 = { screen: "new-message", params: null };
              obj1.params = { sourcePage: "Messages Header" };
              str = "friends";
              navigateResult = current.navigate("friends", obj1);
            }
          }
          return;
        }
      }
      const obj5 = { variant: "primary", icon: tmp17, size: "sm", accessibilityLabel: null, onPress: null };
      const intl = scrollPosition(1126).intl;
      obj5.accessibilityLabel = intl.string(scrollPosition(1126).t.jD1qzM);
      obj5.onPress = I;
      const tmp20 = closure_6(scrollPosition(7573).IconButton, obj5);
      cResult[10] = tmp20;
      const tmp19 = tmp20;
    } else {
      class I {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            current = rootNavigationRef.current;
            if (current != null) {
              obj1 = { screen: "new-message", params: null };
              obj1.params = { sourcePage: "Messages Header" };
              str = "friends";
              navigateResult = current.navigate("friends", obj1);
            }
          }
          return;
        }
      }
    }
    if (cResult[11] !== isHomeDrawerEnabled) {
      class I {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            current = rootNavigationRef.current;
            if (current != null) {
              obj1 = { screen: "new-message", params: null };
              obj1.params = { sourcePage: "Messages Header" };
              str = "friends";
              navigateResult = current.navigate("friends", obj1);
            }
          }
          return;
        }
      }
      if (isHomeDrawerEnabled) {
        class I {
          constructor() {
            obj = scrollPosition(closure_1_2[14]);
            rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              current = rootNavigationRef.current;
              if (current != null) {
                obj1 = { screen: "new-message", params: null };
                obj1.params = { sourcePage: "Messages Header" };
                str = "friends";
                navigateResult = current.navigate("friends", obj1);
              }
            }
            return;
          }
        }
        const stringResult = obj8.string(scrollPosition(1126).t);
      } else {
        class I {
          constructor() {
            obj = scrollPosition(closure_1_2[14]);
            rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              current = rootNavigationRef.current;
              if (current != null) {
                obj1 = { screen: "new-message", params: null };
                obj1.params = { sourcePage: "Messages Header" };
                str = "friends";
                navigateResult = current.navigate("friends", obj1);
              }
            }
            return;
          }
        }
      }
      cResult[11] = isHomeDrawerEnabled;
      cResult[12] = stringResult;
    } else {
      class I {
        constructor() {
          obj = scrollPosition(closure_1_2[14]);
          rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            current = rootNavigationRef.current;
            if (current != null) {
              obj1 = { screen: "new-message", params: null };
              obj1.params = { sourcePage: "Messages Header" };
              str = "friends";
              navigateResult = current.navigate("friends", obj1);
            }
          }
          return;
        }
      }
      if (cResult[13] !== tmp21) {
        class I {
          constructor() {
            obj = scrollPosition(closure_1_2[14]);
            rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              current = rootNavigationRef.current;
              if (current != null) {
                obj1 = { screen: "new-message", params: null };
                obj1.params = { sourcePage: "Messages Header" };
                str = "friends";
                navigateResult = current.navigate("friends", obj1);
              }
            }
            return;
          }
        }
        const obj6 = { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", maxFontSizeMultiplier, accessibilityRole: "header", children: tmp21 };
        const tmp26 = closure_6(scrollPosition(5088).Text, obj6);
        cResult[13] = tmp21;
        cResult[14] = tmp26;
      } else {
        class I {
          constructor() {
            obj = scrollPosition(closure_1_2[14]);
            rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              current = rootNavigationRef.current;
              if (current != null) {
                obj1 = { screen: "new-message", params: null };
                obj1.params = { sourcePage: "Messages Header" };
                str = "friends";
                navigateResult = current.navigate("friends", obj1);
              }
            }
            return;
          }
        }
      }
      if (cResult[15] === tmp4.headerPanelTitle) {
        class I {
          constructor() {
            obj = scrollPosition(closure_1_2[14]);
            rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              current = rootNavigationRef.current;
              if (current != null) {
                obj1 = { screen: "new-message", params: null };
                obj1.params = { sourcePage: "Messages Header" };
                str = "friends";
                navigateResult = current.navigate("friends", obj1);
              }
            }
            return;
          }
        }
        const _Symbol7 = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              obj = scrollPosition(closure_1_2[14]);
              rootNavigationRef = obj.getRootNavigationRef();
              if (rootNavigationRef != null) {
                current = rootNavigationRef.current;
                if (current != null) {
                  obj1 = { screen: "new-message", params: null };
                  obj1.params = { sourcePage: "Messages Header" };
                  str = "friends";
                  navigateResult = current.navigate("friends", obj1);
                }
              }
              return;
            }
          }
          const obj7 = { onPress: E, variant: "secondary", size: "sm", icon: _modDef6740, accessibilityLabel: null };
          const intl2 = scrollPosition(1126).intl;
          obj7.accessibilityLabel = intl2.string(scrollPosition(1126).t["5h0QOP"]);
          const tmp33 = closure_6(scrollPosition(7573).IconButton, obj7);
          const obj9 = { noMargin: true, onPress: tmp11, alternateVariant: true };
          const tmp34 = closure_6(MessageRequestsButtonDefault, obj9);
          cResult[18] = tmp33;
          cResult[19] = tmp34;
          let tmp32 = tmp34;
          const tmp31 = tmp33;
        } else {
          class I {
            constructor() {
              obj = scrollPosition(closure_1_2[14]);
              rootNavigationRef = obj.getRootNavigationRef();
              if (rootNavigationRef != null) {
                current = rootNavigationRef.current;
                if (current != null) {
                  obj1 = { screen: "new-message", params: null };
                  obj1.params = { sourcePage: "Messages Header" };
                  str = "friends";
                  navigateResult = current.navigate("friends", obj1);
                }
              }
              return;
            }
          }
          tmp32 = cResult[19];
        }
        const _Symbol8 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              obj = scrollPosition(closure_1_2[14]);
              rootNavigationRef = obj.getRootNavigationRef();
              if (rootNavigationRef != null) {
                current = rootNavigationRef.current;
                if (current != null) {
                  obj1 = { screen: "new-message", params: null };
                  obj1.params = { sourcePage: "Messages Header" };
                  str = "friends";
                  navigateResult = current.navigate("friends", obj1);
                }
              }
              return;
            }
          }
          const obj10 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: _modDef5033, onPress: B, maxFontSizeMultiplier: 1, text: null };
          const intl3 = scrollPosition(1126).intl;
          obj10.text = intl3.string(scrollPosition(1126).t.zIJnA6);
          const tmp36 = closure_6(scrollPosition(5379).Button, obj10);
          cResult[20] = tmp36;
          const tmp35 = tmp36;
        } else {
          class I {
            constructor() {
              obj = scrollPosition(closure_1_2[14]);
              rootNavigationRef = obj.getRootNavigationRef();
              if (rootNavigationRef != null) {
                current = rootNavigationRef.current;
                if (current != null) {
                  obj1 = { screen: "new-message", params: null };
                  obj1.params = { sourcePage: "Messages Header" };
                  str = "friends";
                  navigateResult = current.navigate("friends", obj1);
                }
              }
              return;
            }
          }
        }
        if (cResult[21] !== tmp4.headerPanelButtons) {
          class I {
            constructor() {
              obj = scrollPosition(closure_1_2[14]);
              rootNavigationRef = obj.getRootNavigationRef();
              if (rootNavigationRef != null) {
                current = rootNavigationRef.current;
                if (current != null) {
                  obj1 = { screen: "new-message", params: null };
                  obj1.params = { sourcePage: "Messages Header" };
                  str = "friends";
                  navigateResult = current.navigate("friends", obj1);
                }
              }
              return;
            }
          }
          const obj11 = { style: tmp4.headerPanelButtons, children: null };
          const items = [tmp31, tmp32, tmp35, tmp19];
          obj11.children = items;
          const tmp39 = closure_7(closure_4, obj11);
          cResult[21] = tmp4.headerPanelButtons;
          cResult[22] = tmp39;
        } else {
          class I {
            constructor() {
              obj = scrollPosition(closure_1_2[14]);
              rootNavigationRef = obj.getRootNavigationRef();
              if (rootNavigationRef != null) {
                current = rootNavigationRef.current;
                if (current != null) {
                  obj1 = { screen: "new-message", params: null };
                  obj1.params = { sourcePage: "Messages Header" };
                  str = "friends";
                  navigateResult = current.navigate("friends", obj1);
                }
              }
              return;
            }
          }
        }
        if (cResult[23] === tmp4.headerBorder) {
          class I {
            constructor() {
              obj = scrollPosition(closure_1_2[14]);
              rootNavigationRef = obj.getRootNavigationRef();
              if (rootNavigationRef != null) {
                current = rootNavigationRef.current;
                if (current != null) {
                  obj1 = { screen: "new-message", params: null };
                  obj1.params = { sourcePage: "Messages Header" };
                  str = "friends";
                  navigateResult = current.navigate("friends", obj1);
                }
              }
              return;
            }
          }
          if (cResult[26] === tmp16) {
            class I {
              constructor() {
                obj = scrollPosition(closure_1_2[14]);
                rootNavigationRef = obj.getRootNavigationRef();
                if (rootNavigationRef != null) {
                  current = rootNavigationRef.current;
                  if (current != null) {
                    obj1 = { screen: "new-message", params: null };
                    obj1.params = { sourcePage: "Messages Header" };
                    str = "friends";
                    navigateResult = current.navigate("friends", obj1);
                  }
                }
                return;
              }
            }
          }
          const obj12 = { style: tmp6, children: null };
          const items1 = [tmp27, tmp37, tmp40, tmp16];
          obj12.children = items1;
          const tmp46 = closure_7(closure_4, obj12);
          cResult[26] = tmp16;
          cResult[27] = tmp6;
          cResult[28] = tmp27;
          cResult[29] = tmp37;
          cResult[30] = tmp40;
          cResult[31] = tmp46;
        }
        const obj13 = { style: null };
        const items2 = [tmp4.headerBorder, animatedStyle];
        obj13.style = items2;
        const tmp42 = closure_6(ReanimatedRexportDefault.View, obj13);
        cResult[23] = tmp4.headerBorder;
        cResult[24] = animatedStyle;
        cResult[25] = tmp42;
      }
      const obj14 = { style: tmp4.headerPanelTitle, children: tmp24 };
      const tmp30 = closure_6(closure_4, obj14);
      cResult[15] = tmp4.headerPanelTitle;
      cResult[16] = tmp24;
      cResult[17] = tmp30;
    }
    const tmpResult2 = scrollPosition(16434);
  }
  const items3 = [tmp4.headerPanel, tmp5];
  cResult[2] = tmp4.headerPanel;
  cResult[3] = tmp5;
  cResult[4] = items3;
  tmp6 = items3;
  let obj = scrollPosition(576);
}) : (function MessagesHeader(height) {
  height = height.height;
  const scrollPosition = height.scrollPosition;
  const tmp = closure_11();
  dependencyMap = tmp;
  let items = [tmp, height];
  const memo = noop.useMemo(() => {
    const items = [headerPanel.headerPanel, { height }];
    return items;
  }, items);
  const fn = function c() {
    let num = 0;
    if (scrollPosition.get() > 0) {
      num = 1;
    }
    return { opacity: spring.withSpring(num) };
  };
  let obj = height(4850);
  fn.__closure = { withSpring: height(5378).withSpring, scrollPosition };
  fn.__workletHash = 5883359949214;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj2 = { withSpring: height(5378).withSpring, scrollPosition };
  const isHomeDrawerEnabled = height(16434).useIsHomeDrawerEnabled();
  const callback = noop.useCallback(() => {
    const rootNavigationRef = height(headerPanel[14]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const callback1 = noop.useCallback(() => {
    const rootNavigationRef = height(headerPanel[14]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
      rootNavigationRef.navigate("friends", obj2);
    }
  }, []);
  const callback2 = noop.useCallback(() => {
    const rootNavigationRef = height(headerPanel[14]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      const obj3 = { type: constants.DMS };
      const result = scrollPosition(headerPanel[15]).navigateToSearchWithPrefetch(rootNavigationRef, obj3);
      const obj2 = scrollPosition(headerPanel[15]);
    }
    const obj = height(headerPanel[14]);
  }, []);
  const callback3 = noop.useCallback(() => {
    const rootNavigationRef = height(headerPanel[14]).getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  let obj3 = height(16434);
  const obj4 = { variant: "primary", icon: null, size: "sm", accessibilityLabel: null, onPress: null };
  const tmp12 = scrollPosition(6201)("bespoke");
  obj4.icon = closure_6(height(10308).PlusLargeIcon, { size: "sm", color: scrollPosition(587).colors.WHITE });
  const intl = height(1126).intl;
  obj4.accessibilityLabel = intl.string(height(1126).t.jD1qzM);
  obj4.onPress = callback3;
  const obj6 = { style: memo, children: null };
  const obj7 = { style: tmp.headerPanelTitle, children: null };
  const obj5 = { size: "sm", color: scrollPosition(587).colors.WHITE };
  const obj8 = { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", maxFontSizeMultiplier, accessibilityRole: "header", children: null };
  const intl2 = height(1126).intl;
  const string = intl2.string;
  const t = height(1126).t;
  if (isHomeDrawerEnabled) {
    let stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  obj8.children = stringResult;
  obj7.children = closure_6(height(5088).Text, obj8);
  const items1 = [closure_6(closure_4, obj7), , , ];
  const obj9 = { style: tmp.headerPanelButtons, children: null };
  const obj10 = { onPress: callback2, variant: "secondary", size: "sm", icon: scrollPosition(6740), accessibilityLabel: null };
  const intl3 = tmp3(1126).intl;
  obj10.accessibilityLabel = intl3.string(height(1126).t["5h0QOP"]);
  const items2 = [closure_6(height(7573).IconButton, obj10), closure_6(scrollPosition(16440), { noMargin: true, onPress: callback, alternateVariant: true }), , ];
  const obj11 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: scrollPosition(5033), onPress: callback1, maxFontSizeMultiplier: 1, text: null };
  const intl4 = tmp3(1126).intl;
  obj11.text = intl4.string(height(1126).t.zIJnA6);
  items2[2] = closure_6(height(5379).Button, obj11);
  items2[3] = closure_6(height(7573).IconButton, obj4);
  obj9.children = items2;
  items1[1] = closure_7(closure_4, obj9);
  const obj12 = { style: null };
  const items3 = [tmp.headerBorder, animatedStyle];
  obj12.style = items3;
  items1[2] = closure_6(scrollPosition(4850).View, obj12);
  items1[3] = tmp12;
  obj6.children = items1;
  return closure_7(closure_4, obj6);
}));
export const getMessagesHeaderHeight = function getMessagesHeaderHeight(fontScale) {
  const bound = Math.min(fontScale, c8);
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM);
  const sum = useScaledTextLineHeight.scaleTextLineHeight("redesign/heading-18/bold", bound) + PX_8;
  return sum + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
};