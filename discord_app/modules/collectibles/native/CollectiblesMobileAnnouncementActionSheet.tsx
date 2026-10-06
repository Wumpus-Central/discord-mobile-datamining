// === Module 17154: CollectiblesMobileAnnouncementActionSheet ===

// Module 17154 (CollectiblesMobileAnnouncementActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Text_Text from "Text/Text" /* 4892 */;
import BottomSheetModal from "BottomSheetModal" /* 6119 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6653 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7065 */;
import _modDef17155 from "module_17155" /* 17155 */;
import _modDef17156 from "module_17156" /* 17156 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let BottomSheet, dependencyMap, importDefault, markAsDismissed;

let StyleSheet;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ Image: closure_4, StyleSheet, View: hasOwnProperty } = react_native);
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let c11 = 32;
let createStyles = createStyles_mod;
let obj = { mascotContainer: obj2, mascotLayer: obj3, mascotImage: { width: "100%", aspectRatio: 1.8324022346368716 }, framePreviewImage: { width: "100%", aspectRatio: 3.25, resizeMode: "contain" }, container: obj4, headerText: { textAlign: "center" }, featureRow: obj5, featureText: { flex: 1 }, featureRows: obj6 };
obj2 = { pointerEvents: "none" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj6 = { gap: nativeDefault.space.PX_32 };
let closure_12 = createStyles(obj);
const __initData = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
const __initData2 = { code: "function CollectiblesMobileAnnouncementActionSheetTsx2(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp9;
  let obj = react2;
  const cResult = obj.c(22);
  const tmp3 = closure_12();
  const width = useWindowDimensionsDefault().width;
  const obj2 = BottomSheetModal;
  const animatedPosition = obj2.useBottomSheet().animatedPosition;
  const top = useSafeAreaInsetsDefault().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  const fn = function t() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: animatedPosition.get() + top - 60 }];
    ({ translateY: animatedPosition.get() + top - 60 });
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 6274760278164;
  fn.__initData = __initData;
  const obj3 = ReanimatedRexport;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] !== result) {
    const rect = { left: result, right: result };
    cResult[0] = result;
    cResult[1] = rect;
    tmp9 = rect;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp3.mascotContainer) {
      let tmp10;
      if (cResult[4] === tmp9) {
        tmp10 = cResult[5];
      }
      const result2 = -138 * result1;
      if (cResult[6] === result2) {
        if (cResult[7] === -56 * result1) {
          let tmp13;
          if (cResult[8] === -56 * result1) {
            tmp13 = cResult[9];
          }
          if (cResult[10] === tmp3.mascotLayer) {
            let tmp14;
            let tmp15;
            let tmp16;
            if (cResult[11] === tmp13) {
              tmp14 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { uri: _modDef17155 };
              cResult[13] = obj4;
              tmp15 = obj4;
            } else {
              tmp15 = cResult[13];
            }
            if (cResult[14] !== tmp3.mascotImage) {
              const obj5 = { source: tmp15, style: tmp3.mascotImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
              const tmp19 = React4(React3, obj5);
              cResult[14] = tmp3.mascotImage;
              cResult[15] = tmp19;
              tmp16 = tmp19;
            } else {
              tmp16 = cResult[15];
            }
            if (cResult[16] === tmp14) {
              let tmp20;
              if (cResult[17] === tmp16) {
                tmp20 = cResult[18];
              }
              if (cResult[19] === tmp10) {
                let tmp24;
                if (cResult[20] === tmp20) {
                  tmp24 = cResult[21];
                }
                return tmp24;
              }
              const obj6 = { style: tmp10, children: tmp20 };
              const tmp26 = React4(ReanimatedRexportDefault.View, obj6);
              cResult[19] = tmp10;
              cResult[20] = tmp20;
              cResult[21] = tmp26;
              tmp24 = tmp26;
            }
            const obj7 = { style: tmp14, children: tmp16 };
            const tmp23 = React4(hasOwnProperty, obj7);
            cResult[16] = tmp14;
            cResult[17] = tmp16;
            cResult[18] = tmp23;
            tmp20 = tmp23;
          }
          let items = [tmp3.mascotLayer, tmp13];
          cResult[10] = tmp3.mascotLayer;
          cResult[11] = tmp13;
          cResult[12] = items;
          tmp14 = items;
        }
      }
      const rect1 = { top: result2, left: -56 * result1, right: -56 * result1 };
      cResult[6] = result2;
      cResult[7] = -56 * result1;
      cResult[8] = -56 * result1;
      cResult[9] = rect1;
      tmp13 = rect1;
    }
  }
  const items1 = [tmp3.mascotContainer, tmp9, animatedStyle];
  cResult[2] = animatedStyle;
  cResult[3] = tmp3.mascotContainer;
  cResult[4] = tmp9;
  cResult[5] = items1;
  tmp10 = items1;
}) : (() => {
  let items;
  let items1;
  let obj4;
  let obj5;
  let obj6;
  const tmp = closure_12();
  const width = useWindowDimensionsDefault().width;
  let obj = BottomSheetModal;
  const animatedPosition = obj.useBottomSheet().animatedPosition;
  const top = useSafeAreaInsetsDefault().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  const obj2 = ReanimatedRexport;
  const fn = function t() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: animatedPosition.get() + top - 60 }];
    ({ translateY: animatedPosition.get() + top - 60 });
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 4965253652215;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj3 = { style: items, children: React4(hasOwnProperty, obj4) };
  items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj4 = { style: items1, children: React4(React3, obj5) };
  items1 = [tmp.mascotLayer, ];
  const rect = { top: -138 * result1, left: -56 * result1, right: -56 * result1 };
  items1[1] = rect;
  obj5 = { source: obj6, style: tmp.mascotImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj6 = { uri: _modDef17155 };
  const View = ReanimatedRexportDefault.View;
  return React4(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let icon;
  let items;
  let text;
  const obj = react2;
  const cResult = obj.c(7);
  ({ icon, text } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === tmp4.featureText) {
    let tmp5;
    if (cResult[1] === text) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === icon) {
      if (cResult[4] === tmp4.featureRow) {
        let tmp7;
        if (cResult[5] === tmp5) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { style: tmp4.featureRow, children: items };
    items = [icon, tmp5];
    const tmp10 = authStore(hasOwnProperty, obj2);
    cResult[3] = icon;
    cResult[4] = tmp4.featureRow;
    cResult[5] = tmp5;
    cResult[6] = tmp10;
    tmp7 = tmp10;
  }
  const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.featureText, children: text };
  const tmp6 = React4(Text_Text.Text, obj3);
  cResult[0] = tmp4.featureText;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((arg0) => {
  let icon;
  let items;
  let text;
  ({ icon, text } = arg0);
  const tmp = closure_12();
  const obj = { style: tmp.featureRow, children: items };
  items = [icon, ];
  const obj2 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text };
  items[1] = React4(Text_Text.Text, obj2);
  return authStore(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  let closure_1;
  let closure_2;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj11;
  let obj7;
  let obj9;
  let tmp22;
  let tmp26;
  let tmp30;
  let tmp34;
  let tmp41;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = markAsDismissed(576);
  const cResult = obj.c(33);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_12();
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(markAsDismissed);
  if (cResult[0] !== markAsDismissed) {
    const fn = function s() {
      closure_2.current = markAsDismissed;
    };
    const items = [markAsDismissed];
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      let ref;
      let ref2;
      return () => {
        if (!ref.current) {
          ref2.current(constants2.AUTO_DISMISS);
        }
      };
    };
    const items1 = [];
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect1 = react.useEffect(tmp8, tmp9);
  if (cResult[5] !== markAsDismissed) {
    class E {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.PRIMARY);
        const obj = CollectiblesActionCreators;
        const obj2 = { screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.ACTION_SHEET };
        const result = obj.openCollectiblesShopMobile(obj2);
      }
    }
    cResult[5] = markAsDismissed;
    cResult[6] = E;
  } else {
    class E {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.PRIMARY);
        const obj = CollectiblesActionCreators;
        const obj2 = { screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.ACTION_SHEET };
        const result = obj.openCollectiblesShopMobile(obj2);
      }
    }
  }
  if (cResult[7] !== markAsDismissed) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[7] = markAsDismissed;
    cResult[8] = P;
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[9] = closure_9(closure_15, {});
    const tmp15 = closure_9(closure_15, {});
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  const container = tmp4.container;
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    tmp17[0] = _modDef17156;
    cResult[10] = tmp17;
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[11] !== tmp4.framePreviewImage) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const obj3 = { source: tmp17, style: tmp4.framePreviewImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    cResult[11] = tmp4.framePreviewImage;
    cResult[12] = closure_9(closure_4, obj3);
    const tmp21 = closure_9(closure_4, obj3);
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  const headerText = tmp4.headerText;
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const stringResult = obj4.string(markAsDismissed(1126).t.vRCvqo);
    cResult[13] = stringResult;
    tmp22 = stringResult;
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[14] !== tmp4.headerText) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const obj5 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: headerText, children: tmp22 };
    cResult[14] = tmp4.headerText;
    cResult[15] = closure_9(markAsDismissed(4892).Text, obj5);
    const tmp25 = closure_9(markAsDismissed(4892).Text, obj5);
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const obj6 = { icon: closure_9(markAsDismissed(12385).PaintIllocon, obj7), text: intl.string(markAsDismissed(1126).t["6ZWB0C"]) };
    obj7 = { size };
    intl = tmp(1126).intl;
    const tmp29 = closure_9(closure_16, obj6);
    cResult[16] = tmp29;
    tmp26 = tmp29;
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const obj8 = { icon: closure_9(markAsDismissed(12379).HeartIllocon, obj9), text: intl2.string(markAsDismissed(1126).t.MkVbBY) };
    obj9 = { size };
    intl2 = tmp(1126).intl;
    const tmp33 = closure_9(closure_16, obj8);
    cResult[17] = tmp33;
    tmp30 = tmp33;
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const obj10 = { icon: closure_9(markAsDismissed(17157).ShopIllocon, obj11), text: intl3.string(markAsDismissed(1126).t["/4bQuG"]) };
    obj11 = { size };
    intl3 = tmp(1126).intl;
    const tmp37 = closure_9(closure_16, obj10);
    cResult[18] = tmp37;
    tmp34 = tmp37;
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[19] !== tmp4.featureRows) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const obj12 = { style: tmp4.featureRows, children: items2 };
    items2 = [tmp26, tmp30, tmp34];
    cResult[19] = tmp4.featureRows;
    cResult[20] = closure_10(closure_5, obj12);
    const tmp40 = closure_10(closure_5, obj12);
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const stringResult1 = obj13.string(markAsDismissed(1126).t.S9hXPI);
    cResult[21] = stringResult1;
    tmp41 = stringResult1;
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[22] !== E) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const obj14 = { size: "lg", text: tmp41, onPress: E };
    cResult[22] = E;
    cResult[23] = closure_9(markAsDismissed(5601).Button, obj14);
    const tmp44 = closure_9(markAsDismissed(5601).Button, obj14);
  } else {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[24] === tmp4.container) {
    class P {
      constructor() {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  const obj15 = { style: container, children: items3 };
  items3 = [tmp19, tmp24, tmp38, tmp43];
  cResult[24] = tmp4.container;
  cResult[25] = tmp19;
  cResult[26] = tmp24;
  cResult[27] = tmp38;
  cResult[28] = tmp43;
  cResult[29] = closure_10(closure_5, obj15);
  closure_10(closure_5, obj15);
}) : ((markAsDismissed) => {
  let closure_1;
  let closure_2;
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let obj10;
  let obj12;
  let obj2;
  let obj4;
  let obj8;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_12();
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = react.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = react.useEffect(() => {
    let ref;
    let ref2;
    return () => {
      if (!ref.current) {
        ref2.current(constants2.AUTO_DISMISS);
      }
    };
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = react.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.PRIMARY);
    const obj = CollectiblesActionCreators;
    const obj2 = { screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.ACTION_SHEET };
    const result = obj.openCollectiblesShopMobile(obj2);
  }, items1);
  const callback1 = react.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const memo = react.useMemo(() => closure_1_9(closure_1_15, {}), []);
  let obj = { onDismiss: callback1, backdropChildren: memo, children: closure_10(closure_5, obj2) };
  obj2 = { style: tmp.container, children: items3 };
  const obj3 = { source: obj4, style: tmp.framePreviewImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  obj4 = { uri: _modDef17156 };
  BottomSheet = markAsDismissed(6652).BottomSheet;
  items3 = [closure_9(closure_4, obj3), , , ];
  const obj5 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText, children: intl.string(markAsDismissed(1126).t.vRCvqo) };
  const Text = markAsDismissed(4892).Text;
  intl = markAsDismissed(1126).intl;
  items3[1] = closure_9(Text, obj5);
  const obj6 = { style: tmp.featureRows, children: items4 };
  const obj7 = { icon: closure_9(markAsDismissed(12385).PaintIllocon, obj8), text: intl2.string(markAsDismissed(1126).t["6ZWB0C"]) };
  obj8 = { size };
  intl2 = markAsDismissed(1126).intl;
  items4 = [closure_9(closure_16, obj7), , ];
  const obj9 = { icon: closure_9(markAsDismissed(12379).HeartIllocon, obj10), text: intl3.string(markAsDismissed(1126).t.MkVbBY) };
  obj10 = { size };
  intl3 = markAsDismissed(1126).intl;
  items4[1] = closure_9(closure_16, obj9);
  const obj11 = { icon: closure_9(markAsDismissed(17157).ShopIllocon, obj12), text: intl4.string(markAsDismissed(1126).t["/4bQuG"]) };
  obj12 = { size };
  intl4 = markAsDismissed(1126).intl;
  items4[2] = closure_9(closure_16, obj11);
  items3[2] = closure_10(closure_5, obj6);
  const obj13 = { size: "lg", text: intl5.string(markAsDismissed(1126).t.S9hXPI), onPress: callback };
  const Button = markAsDismissed(5601).Button;
  intl5 = markAsDismissed(1126).intl;
  items3[3] = closure_9(Button, obj13);
  return closure_9(BottomSheet, obj);
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default tmp7;