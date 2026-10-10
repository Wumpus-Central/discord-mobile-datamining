// === Module 17657: CollectiblesMobileAnnouncementActionSheet ===

// Module 17657 (CollectiblesMobileAnnouncementActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import BottomSheetModal from "BottomSheetModal" /* 6306 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7262 */;
import _modDef17658 from "module_17658" /* 17658 */;
import _modDef17659 from "module_17659" /* 17659 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
let closure_5 = fn(1087).CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = fn(6840).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 32;
const createStyles = fn(5092);
let obj2 = { mascotContainer: null, mascotLayer: null, mascotImage: null, framePreviewImage: null, container: null, headerText: null, featureRow: null, featureText: null, featureRows: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.pointerEvents = "none";
obj2.mascotContainer = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2.mascotLayer = {};
obj2.mascotImage = { width: "100%", aspectRatio: 1.8324022346368716 };
obj2.framePreviewImage = { width: "100%", aspectRatio: 3.25, resizeMode: "contain" };
obj2.container = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj2.headerText = { textAlign: "center" };
let obj4 = {};
let obj5 = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj2.featureRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.featureText = { flex: 1 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.featureRows = { gap: nativeDefault.space.PX_32 };
let closure_11 = createStyles.createStyles(obj2);
const __initData = { code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
const __initData2 = { code: "function CollectiblesMobileAnnouncementActionSheetTsx2(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}" };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function CatEarsBackdrop() {
  const cResult = c.c(22);
  const tmp3 = closure_11();
  const width = useWindowDimensionsDefault().width;
  const animatedPosition = BottomSheetModal.useBottomSheet().animatedPosition;
  const top = useSafeAreaInsetsDefault().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  const fn = function t() {
    const obj = { transform: null };
    const items = [{ translateY: animatedPosition.get() + top - 60 }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 6274760278164;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  if (cResult[0] !== result) {
    const rect = { left: result, right: result };
    cResult[0] = result;
    cResult[1] = rect;
    let tmp9 = rect;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === animatedStyle) {
    if (cResult[3] === tmp3.mascotContainer) {
      if (cResult[4] === tmp9) {
        let tmp10 = cResult[5];
      }
      const result2 = -138 * result1;
      if (cResult[6] === result2) {
        if (cResult[7] === tmp12) {
          if (cResult[8] === tmp12) {
            let tmp13 = cResult[9];
          }
          if (cResult[10] === tmp3.mascotLayer) {
            if (cResult[11] === tmp13) {
              let tmp14 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { uri: _modDef17658 };
              cResult[13] = obj4;
              let tmp15 = obj4;
            } else {
              tmp15 = cResult[13];
            }
            if (cResult[14] !== tmp3.mascotImage) {
              const obj5 = { source: tmp15, style: tmp3.mascotImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
              const tmp18 = closure_1_8(FastImageDefault, obj5);
              cResult[14] = tmp3.mascotImage;
              cResult[15] = tmp18;
              let tmp16 = tmp18;
            } else {
              tmp16 = cResult[15];
            }
            if (cResult[16] === tmp14) {
              if (cResult[17] === tmp16) {
                let tmp19 = cResult[18];
              }
              if (cResult[19] === tmp10) {
                if (cResult[20] === tmp19) {
                  let tmp23 = cResult[21];
                }
                return tmp23;
              }
              const obj6 = { style: tmp10, children: tmp19 };
              const tmp25 = closure_1_8(ReanimatedRexportDefault.View, obj6);
              cResult[19] = tmp10;
              cResult[20] = tmp19;
              cResult[21] = tmp25;
              tmp23 = tmp25;
            }
            const obj7 = { style: tmp14, children: tmp16 };
            const tmp22 = closure_1_8(React4, obj7);
            cResult[16] = tmp14;
            cResult[17] = tmp16;
            cResult[18] = tmp22;
            tmp19 = tmp22;
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
}) : (function CatEarsBackdrop() {
  const tmp = closure_11();
  const width = useWindowDimensionsDefault().width;
  const animatedPosition = BottomSheetModal.useBottomSheet().animatedPosition;
  const top = useSafeAreaInsetsDefault().top;
  const bound = Math.min(width, ACTION_SHEET_MAX_WIDTH);
  const result = (width - bound) / 2;
  const result1 = bound / 1200;
  const fn = function t() {
    const obj = { transform: null };
    const items = [{ translateY: animatedPosition.get() + top - 60 }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { animatedPosition, safeAreaTop: top, MASCOT_SAFE_AREA_NUDGE: 60 };
  fn.__workletHash = 4965253652215;
  fn.__initData = __initData2;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  let items = [tmp.mascotContainer, { left: result, right: result }, animatedStyle];
  obj3.style = items;
  const obj4 = { style: null, children: null };
  const items1 = [tmp.mascotLayer, ];
  const rect = { top: -138 * result1, left: -56 * result1, right: -56 * result1 };
  items1[1] = rect;
  obj4.style = items1;
  const obj5 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  const obj6 = { uri: null };
  obj6.uri = _modDef17658;
  obj5.source = obj6;
  obj5.style = tmp.mascotImage;
  obj4.children = closure_1_8(FastImageDefault, obj5);
  obj3.children = closure_1_8(React4, obj4);
  return closure_1_8(ReanimatedRexportDefault.View, obj3);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function FeatureRow(arg0) {
  const cResult = c.c(7);
  ({ icon, text } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] === tmp4.featureText) {
    if (cResult[1] === text) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === icon) {
      if (cResult[4] === tmp4.featureRow) {
        if (cResult[5] === tmp5) {
          let tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const obj2 = { style: tmp4.featureRow, children: null };
    const items = [icon, tmp5];
    obj2.children = items;
    const tmp10 = options(React4, obj2);
    cResult[3] = icon;
    cResult[4] = tmp4.featureRow;
    cResult[5] = tmp5;
    cResult[6] = tmp10;
    tmp7 = tmp10;
  }
  const tmp6 = closure_1_8(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", style: tmp4.featureText, children: text });
  cResult[0] = tmp4.featureText;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.featureText, children: text };
}) : (function FeatureRow(arg0) {
  ({ icon, text } = arg0);
  const tmp = closure_11();
  const obj = { style: tmp.featureRow, children: null };
  const items = [icon, closure_1_8(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", style: tmp.featureText, children: text })];
  obj.children = items;
  return options(React4, obj);
});
ReactCompilerGating = fn(558);
let obj7 = { gap: nativeDefault.space.PX_32 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  const cResult = markAsDismissed(576).c(33);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_11();
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(markAsDismissed);
  if (cResult[0] !== markAsDismissed) {
    const fn = function o() {
      closure_2.current = markAsDismissed;
    };
    const items = [markAsDismissed];
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      return () => {
        if (!ref.current) {
          ref2.current(constants2.AUTO_DISMISS);
        }
      };
    };
    const items1 = [];
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect1 = noop.useEffect(tmp8, tmp9);
  if (cResult[5] !== markAsDismissed) {
    const fn3 = function y() {
      closure_1.current = true;
      markAsDismissed(ContentDismissActionType.PRIMARY);
      const obj = CollectiblesActionCreators;
      const result = obj.openCollectiblesShopMobile({ screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.ACTION_SHEET });
    };
    cResult[5] = markAsDismissed;
    cResult[6] = fn3;
    let tmp11 = fn3;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] !== markAsDismissed) {
    const fn4 = function v() {
      closure_1.current = true;
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[7] = markAsDismissed;
    cResult[8] = fn4;
    let tmp12 = fn4;
  } else {
    tmp12 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = closure_8(closure_14, {});
    cResult[9] = tmp16;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { uri: _modDef17659 };
    cResult[10] = obj3;
    let tmp17 = obj3;
  } else {
    tmp17 = cResult[10];
  }
  if (cResult[11] !== tmp4.framePreviewImage) {
    const obj4 = { source: tmp17, style: tmp4.framePreviewImage, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
    const tmp22 = closure_8(FastImageDefault, obj4);
    cResult[11] = tmp4.framePreviewImage;
    cResult[12] = tmp22;
    let tmp19 = tmp22;
  } else {
    tmp19 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.vRCvqo);
    cResult[13] = stringResult;
    let tmp23 = stringResult;
  } else {
    tmp23 = cResult[13];
  }
  if (cResult[14] !== tmp4.headerText) {
    const obj5 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp4.headerText, children: tmp23 };
    const tmp27 = closure_8(tmp(5088).Text, obj5);
    cResult[14] = tmp4.headerText;
    cResult[15] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { icon: null, text: null };
    const obj7 = { size };
    obj6.icon = closure_8(tmp(12454).PaintIllocon, obj7);
    const intl2 = tmp(1126).intl;
    obj6.text = intl2.string(tmp(1126).t["6ZWB0C"]);
    const tmp32 = closure_8(closure_15, obj6);
    cResult[16] = tmp32;
    let tmp28 = tmp32;
  } else {
    tmp28 = cResult[16];
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { icon: null, text: null };
    const obj9 = { size };
    obj8.icon = closure_8(tmp(12442).HeartIllocon, obj9);
    const intl3 = tmp(1126).intl;
    obj8.text = intl3.string(tmp(1126).t.MkVbBY);
    const tmp37 = closure_8(closure_15, obj8);
    cResult[17] = tmp37;
    let tmp33 = tmp37;
  } else {
    tmp33 = cResult[17];
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = { icon: null, text: null };
    const obj11 = { size };
    obj10.icon = closure_8(tmp(17660).ShopIllocon, obj11);
    const intl4 = tmp(1126).intl;
    obj10.text = intl4.string(tmp(1126).t["/4bQuG"]);
    const tmp42 = closure_8(closure_15, obj10);
    cResult[18] = tmp42;
    let tmp38 = tmp42;
  } else {
    tmp38 = cResult[18];
  }
  if (cResult[19] !== tmp4.featureRows) {
    const obj12 = { style: tmp4.featureRows, children: null };
    const items2 = [tmp28, tmp33, tmp38];
    obj12.children = items2;
    const tmp46 = closure_9(closure_4, obj12);
    cResult[19] = tmp4.featureRows;
    cResult[20] = tmp46;
    let tmp43 = tmp46;
  } else {
    tmp43 = cResult[20];
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1126).intl;
    const stringResult1 = intl5.string(tmp(1126).t.S9hXPI);
    cResult[21] = stringResult1;
    let tmp47 = stringResult1;
  } else {
    tmp47 = cResult[21];
  }
  if (cResult[22] !== tmp11) {
    const obj13 = { size: "lg", text: tmp47, onPress: tmp11 };
    const tmp51 = closure_8(tmp(5379).Button, obj13);
    cResult[22] = tmp11;
    cResult[23] = tmp51;
    let tmp49 = tmp51;
  } else {
    tmp49 = cResult[23];
  }
  if (cResult[24] === tmp4.container) {
    if (cResult[25] === tmp19) {
      if (cResult[26] === tmp25) {
        if (cResult[27] === tmp43) {
          if (cResult[28] === tmp49) {
            let tmp52 = cResult[29];
          }
          if (cResult[30] === tmp12) {
            if (cResult[31] === tmp52) {
              let tmp54 = cResult[32];
            }
            return tmp54;
          }
          const obj14 = { onDismiss: tmp12, backdropChildren: tmp13, children: tmp52 };
          const tmp56 = closure_8(tmp(6839).BottomSheet, obj14);
          cResult[30] = tmp12;
          cResult[31] = tmp52;
          cResult[32] = tmp56;
          tmp54 = tmp56;
        }
      }
    }
  }
  const obj15 = { style: tmp4.container, children: null };
  const items3 = [tmp19, tmp25, tmp43, tmp49];
  obj15.children = items3;
  const tmp53 = closure_9(closure_4, obj15);
  cResult[24] = tmp4.container;
  cResult[25] = tmp19;
  cResult[26] = tmp25;
  cResult[27] = tmp43;
  cResult[28] = tmp49;
  cResult[29] = tmp53;
  tmp52 = tmp53;
  let obj = markAsDismissed(576);
}) : (function CollectiblesMobileAnnouncementActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_11();
  importDefault = noop.useRef(false);
  dependencyMap = noop.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = noop.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = noop.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(constants2.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.PRIMARY);
    const obj = CollectiblesActionCreators;
    const result = obj.openCollectiblesShopMobile({ screen: constants.FEATURED_PAGE, analyticsLocations: [], analyticsSource: AnalyticsLocationDefault.ACTION_SHEET });
  }, items1);
  const callback1 = noop.useCallback(() => {
    closure_1.current = true;
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const memo = noop.useMemo(() => closure_1_8(closure_1_14, {}), []);
  let obj = { onDismiss: callback1, backdropChildren: memo, children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { source: null, style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  const obj4 = { uri: _modDef17659 };
  obj3.source = obj4;
  obj3.style = tmp.framePreviewImage;
  const items3 = [closure_8(FastImageDefault, obj3), , , ];
  const obj5 = { variant: "heading-xl/bold", color: "text-strong", accessibilityRole: "header", style: tmp.headerText, children: null };
  const intl = markAsDismissed(1126).intl;
  obj5.children = intl.string(markAsDismissed(1126).t.vRCvqo);
  items3[1] = closure_8(markAsDismissed(5088).Text, obj5);
  const obj6 = { style: tmp.featureRows, children: null };
  const obj7 = { icon: closure_8(markAsDismissed(12454).PaintIllocon, { size }), text: null };
  const intl2 = markAsDismissed(1126).intl;
  obj7.text = intl2.string(markAsDismissed(1126).t["6ZWB0C"]);
  const items4 = [closure_8(closure_15, obj7), , ];
  const obj9 = { icon: closure_8(markAsDismissed(12442).HeartIllocon, { size }), text: null };
  const intl3 = markAsDismissed(1126).intl;
  obj9.text = intl3.string(markAsDismissed(1126).t.MkVbBY);
  items4[1] = closure_8(closure_15, obj9);
  const obj11 = { icon: closure_8(markAsDismissed(17660).ShopIllocon, { size }), text: null };
  const intl4 = markAsDismissed(1126).intl;
  obj11.text = intl4.string(markAsDismissed(1126).t["/4bQuG"]);
  items4[2] = closure_8(closure_15, obj11);
  obj6.children = items4;
  items3[2] = closure_9(closure_4, obj6);
  const obj13 = { size: "lg", text: null, onPress: null };
  const intl5 = markAsDismissed(1126).intl;
  obj13.text = intl5.string(markAsDismissed(1126).t.S9hXPI);
  obj13.onPress = callback;
  items3[3] = closure_8(markAsDismissed(5379).Button, obj13);
  obj2.children = items3;
  obj.children = closure_9(closure_4, obj2);
  return closure_8(markAsDismissed(6839).BottomSheet, obj);
});