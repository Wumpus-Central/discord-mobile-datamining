// === Module 15993: MessagesHeader ===

// Module 15993 (MessagesHeader)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import AssetRegistryDefault from "AssetRegistry" /* 4840 */;
import spring from "spring" /* 5604 */;
import ButtonConstants from "ButtonConstants" /* 5607 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 6018 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6556 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10736 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 11827 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11980 */;
import MessageRequestsButtonDefault from "MessageRequestsButton" /* 15994 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
({ View: closure_4, StyleSheet } = react_native);
const SearchTypes = Constants.SearchTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 1.75;
const PX_16 = nativeDefault.space.PX_16;
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { headerPanel: obj2, headerPanelTitle: obj3, headerPanelButtons: obj4, headerBorder: obj5 };
obj2 = { position: "relative", padding: PX_16, paddingBottom: nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: PX_8, flexDirection: "row", gap: nativeDefault.space.PX_8, justifyContent: "space-between" };
obj4 = { height: ButtonConstants.SMALL_BUTTON_HEIGHT, gap: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_GAP, flexDirection: nativeDefault.modules.mobile.MESSAGES_HEADER_BUTTON_LAYOUT, alignItems: "center" };
obj5 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, top: undefined, height: 1 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = createStyles(obj);
const __initData = { code: "function MessagesHeaderTsx1(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}" };
const __initData2 = { code: "function MessagesHeaderTsx2(){const{withSpring,scrollPosition}=this.__closure;return{opacity:withSpring(scrollPosition.get()>0?1:0)};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let height;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let scrollPosition;
  let tmp5;
  let obj = scrollPosition(576);
  const cResult = obj.c(32);
  ({ height, scrollPosition } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] !== height) {
    let obj2 = { height };
    let num = 0;
    cResult[0] = height;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.headerPanel) {
    let tmp6;
    let tmp12;
    let tmp18;
    let tmp20;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    const fn = function y() {
      const withSpring = spring.withSpring;
      let num = 0;
      spring;
      if (scrollPosition.get() > 0) {
        num = 1;
      }
      const obj = { opacity: withSpring(num) };
      return obj;
    };
    let obj3 = { withSpring: scrollPosition(5604).withSpring, scrollPosition };
    const useAnimatedStyle = scrollPosition(4618).useAnimatedStyle;
    scrollPosition(4618);
    fn.__closure = obj3;
    fn.__workletHash = 17233409273245;
    fn.__initData = __initData;
    const animatedStyle = useAnimatedStyle(fn);
    const tmpResult2 = scrollPosition(15988);
    const isHomeDrawerEnabled = tmpResult2.useIsHomeDrawerEnabled();
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function f() {
        const obj = scrollPosition(dependencyMap[14]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.navigate("message-requests");
        }
      };
      cResult[5] = fn2;
      tmp12 = fn2;
    } else {
      tmp12 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
            rootNavigationRef.navigate("friends", obj2);
          }
        }
      }
      cResult[6] = B;
    } else {
      class B {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
            rootNavigationRef.navigate("friends", obj2);
          }
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            const obj3 = { type: constants.DMS };
            const obj2 = SearchPlatformUtilsDefault;
            const result = obj2.navigateToSearchWithPrefetch(rootNavigationRef, obj3);
          }
        }
      }
      cResult[7] = H;
    } else {
      class H {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            const obj3 = { type: constants.DMS };
            const obj2 = SearchPlatformUtilsDefault;
            const result = obj2.navigateToSearchWithPrefetch(rootNavigationRef, obj3);
          }
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
      cResult[8] = I;
    } else {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
    }
    const tmp17 = HeaderDebugOverlayDefault("bespoke");
    const _Symbol5 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
      const obj4 = { size: "sm", color: nativeDefault.colors.WHITE };
      const PlusLargeIcon = scrollPosition(10702).PlusLargeIcon;
      const tmp19 = closure_6(PlusLargeIcon, obj4);
      cResult[9] = tmp19;
      tmp18 = tmp19;
    } else {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
      const obj5 = { variant: "primary", icon: tmp18, size: "sm", accessibilityLabel: intl.string(scrollPosition(1126).t.jD1qzM), onPress: I };
      const IconButton = scrollPosition(7586).IconButton;
      intl = scrollPosition(1126).intl;
      const tmp21 = closure_6(IconButton, obj5);
      cResult[10] = tmp21;
      tmp20 = tmp21;
    } else {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
    }
    if (cResult[11] !== isHomeDrawerEnabled) {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
      const string = tmp23.string;
      const t = scrollPosition(1126).t;
      if (isHomeDrawerEnabled) {
        class I {
          constructor() {
            const obj = scrollPosition(dependencyMap[14]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                current.navigate("friends", obj2);
              }
            }
          }
        }
      } else {
        class I {
          constructor() {
            const obj = scrollPosition(dependencyMap[14]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                current.navigate("friends", obj2);
              }
            }
          }
        }
      }
      cResult[11] = isHomeDrawerEnabled;
      cResult[12] = tmp24;
    } else {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
    }
    if (cResult[13] !== tmp24) {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
      const obj6 = { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", maxFontSizeMultiplier, accessibilityRole: "header", children: tmp24 };
      cResult[13] = tmp24;
      cResult[14] = closure_6(scrollPosition(4892).Text, obj6);
      const tmp27 = closure_6(scrollPosition(4892).Text, obj6);
    } else {
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
    }
    if (cResult[15] === tmp4.headerPanelTitle) {
      let tmp33;
      let tmp32;
      let tmp36;
      class I {
        constructor() {
          const obj = scrollPosition(dependencyMap[14]);
          const rootNavigationRef = obj.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
              current.navigate("friends", obj2);
            }
          }
        }
      }
      const _Symbol7 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const obj = scrollPosition(dependencyMap[14]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                current.navigate("friends", obj2);
              }
            }
          }
        }
        const obj7 = { onPress: H, variant: "secondary", size: "sm", icon: AssetRegistryDefault2, accessibilityLabel: intl2.string(scrollPosition(1126).t["5h0QOP"]) };
        const IconButton2 = scrollPosition(7586).IconButton;
        intl2 = scrollPosition(1126).intl;
        const tmp34 = closure_6(IconButton2, obj7);
        const obj8 = { noMargin: true, onPress: tmp12, alternateVariant: true };
        const tmp35 = closure_6(MessageRequestsButtonDefault, obj8);
        cResult[18] = tmp34;
        cResult[19] = tmp35;
        tmp33 = tmp35;
        tmp32 = tmp34;
      } else {
        class I {
          constructor() {
            const obj = scrollPosition(dependencyMap[14]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                current.navigate("friends", obj2);
              }
            }
          }
        }
        tmp33 = cResult[19];
      }
      const _Symbol8 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const obj = scrollPosition(dependencyMap[14]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                current.navigate("friends", obj2);
              }
            }
          }
        }
        const obj9 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: AssetRegistryDefault, onPress: B, maxFontSizeMultiplier: 1, text: intl3.string(scrollPosition(1126).t.zIJnA6) };
        const Button = scrollPosition(5601).Button;
        intl3 = scrollPosition(1126).intl;
        const tmp37 = closure_6(Button, obj9);
        cResult[20] = tmp37;
        tmp36 = tmp37;
      } else {
        class I {
          constructor() {
            const obj = scrollPosition(dependencyMap[14]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                current.navigate("friends", obj2);
              }
            }
          }
        }
      }
      if (cResult[21] !== tmp4.headerPanelButtons) {
        class I {
          constructor() {
            const obj = scrollPosition(dependencyMap[14]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                current.navigate("friends", obj2);
              }
            }
          }
        }
        const obj10 = { style: tmp4.headerPanelButtons, children: items };
        items = [tmp32, tmp33, tmp36, tmp20];
        cResult[21] = tmp4.headerPanelButtons;
        cResult[22] = closure_7(closure_4, obj10);
        const tmp40 = closure_7(closure_4, obj10);
      } else {
        class I {
          constructor() {
            const obj = scrollPosition(dependencyMap[14]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                current.navigate("friends", obj2);
              }
            }
          }
        }
      }
      if (cResult[23] === tmp4.headerBorder) {
        class I {
          constructor() {
            const obj = scrollPosition(dependencyMap[14]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                current.navigate("friends", obj2);
              }
            }
          }
        }
        if (cResult[26] === tmp17) {
          class I {
            constructor() {
              const obj = scrollPosition(dependencyMap[14]);
              const rootNavigationRef = obj.getRootNavigationRef();
              if (rootNavigationRef != null) {
                const current = rootNavigationRef.current;
                if (current != null) {
                  const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
                  current.navigate("friends", obj2);
                }
              }
            }
          }
        }
        const obj11 = { style: tmp6, children: items1 };
        items1 = [tmp28, tmp38, tmp41, tmp17];
        cResult[26] = tmp17;
        cResult[27] = tmp6;
        cResult[28] = tmp28;
        cResult[29] = tmp38;
        cResult[30] = tmp41;
        cResult[31] = closure_7(closure_4, obj11);
        const tmp47 = closure_7(closure_4, obj11);
      }
      const obj12 = { style: items2 };
      items2 = [tmp4.headerBorder, animatedStyle];
      cResult[23] = tmp4.headerBorder;
      cResult[24] = animatedStyle;
      cResult[25] = closure_6(ReanimatedRexportDefault.View, obj12);
      const tmp43 = closure_6(ReanimatedRexportDefault.View, obj12);
    }
    const obj13 = { style: tmp4.headerPanelTitle, children: tmp25 };
    cResult[15] = tmp4.headerPanelTitle;
    cResult[16] = tmp25;
    cResult[17] = closure_6(closure_4, obj13);
    const tmp31 = closure_6(closure_4, obj13);
  }
  const items3 = [tmp4.headerPanel, tmp5];
  cResult[2] = tmp4.headerPanel;
  cResult[3] = tmp5;
  cResult[4] = items3;
  tmp6 = items3;
}) : ((height) => {
  let PlusLargeIcon;
  let Text;
  let headerPanel;
  let intl;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let obj5;
  let obj8;
  let stringResult;
  height = height.height;
  const scrollPosition = height.scrollPosition;
  const tmp = closure_11();
  dependencyMap = tmp;
  let items = [tmp, height];
  const memo = react.useMemo(() => {
    const items = [headerPanel.headerPanel, ];
    const obj = { height };
    items[1] = obj;
    return items;
  }, items);
  let obj = height(4618);
  const fn = function c() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (scrollPosition.get() > 0) {
      num = 1;
    }
    const obj = { opacity: withSpring(num) };
    return obj;
  };
  let obj2 = { withSpring: height(5604).withSpring, scrollPosition };
  fn.__closure = obj2;
  fn.__workletHash = 5883359949214;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = height(15988);
  const isHomeDrawerEnabled = obj3.useIsHomeDrawerEnabled();
  const callback = react.useCallback(() => {
    const obj = height(headerPanel[14]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("message-requests");
    }
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = height(headerPanel[14]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Tab", presentation: "card" } };
      rootNavigationRef.navigate("friends", obj2);
    }
  }, []);
  const callback2 = react.useCallback(() => {
    const obj = height(headerPanel[14]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (null != rootNavigationRef) {
      const obj3 = { type: constants.DMS };
      const obj2 = scrollPosition(headerPanel[15]);
      const result = obj2.navigateToSearchWithPrefetch(rootNavigationRef, obj3);
    }
  }, []);
  const callback3 = react.useCallback(() => {
    const obj = height(headerPanel[14]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "new-message", params: { sourcePage: "Messages Header" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  const obj4 = { variant: "primary", icon: closure_6(PlusLargeIcon, obj5), size: "sm", accessibilityLabel: intl.string(height(1126).t.jD1qzM), onPress: callback3 };
  const tmp12 = scrollPosition(6018)("bespoke");
  const IconButton = height(7586).IconButton;
  obj5 = { size: "sm", color: scrollPosition(587).colors.WHITE };
  PlusLargeIcon = height(10702).PlusLargeIcon;
  intl = height(1126).intl;
  const obj6 = { style: memo, children: items1 };
  const obj7 = { style: tmp.headerPanelTitle, children: closure_6(Text, obj8) };
  obj8 = { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", maxFontSizeMultiplier, accessibilityRole: "header", children: stringResult };
  const tmp14 = closure_6(IconButton, obj4);
  Text = height(4892).Text;
  const intl2 = height(1126).intl;
  const string = intl2.string;
  const t = height(1126).t;
  if (isHomeDrawerEnabled) {
    stringResult = string(t.YUU0RF);
  } else {
    stringResult = string(t.OIgYlQ);
  }
  items1 = [closure_6(closure_4, obj7), , , ];
  const obj9 = { style: tmp.headerPanelButtons, children: items2 };
  const obj10 = { onPress: callback2, variant: "secondary", size: "sm", icon: scrollPosition(6556), accessibilityLabel: intl3.string(height(1126).t["5h0QOP"]) };
  const IconButton2 = tmp3(7586).IconButton;
  intl3 = tmp3(1126).intl;
  items2 = [closure_6(IconButton2, obj10), closure_6(scrollPosition(15994), { noMargin: true, onPress: callback, alternateVariant: true }), , ];
  const obj11 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: scrollPosition(4840), onPress: callback1, maxFontSizeMultiplier: 1, text: intl4.string(height(1126).t.zIJnA6) };
  const Button = tmp3(5601).Button;
  intl4 = tmp3(1126).intl;
  items2[2] = closure_6(Button, obj11);
  items2[3] = tmp14;
  items1[1] = closure_7(closure_4, obj9);
  const obj12 = { style: items3 };
  items3 = [tmp.headerBorder, animatedStyle];
  items1[2] = closure_6(scrollPosition(4618).View, obj12);
  items1[3] = tmp12;
  return closure_7(closure_4, obj6);
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesHeader.tsx");

export default memoResult;
export const getMessagesHeaderHeight = function getMessagesHeaderHeight(fontScale) {
  const bound = Math.min(fontScale, c8);
  const obj = MobileVisualRefreshExperiment;
  const refreshToken = obj.resolveRefreshToken(nativeDefault.modules.mobile.MESSAGES_HEADER_PADDING_BOTTOM);
  const obj2 = useScaledTextLineHeight;
  const sum = obj2.scaleTextLineHeight("redesign/heading-18/bold", bound) + PX_8;
  return sum + ButtonConstants.SMALL_BUTTON_HEIGHT + PX_16 + refreshToken;
};