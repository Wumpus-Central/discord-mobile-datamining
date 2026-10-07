// discord_app/modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BottomSheetModal from "../../../../_runtime/06119_BottomSheetModal.js";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../CollectiblesActionCreators.tsx";
import _modDef17155 from "../../../../discord_assets/assets/collectibles/frames/announcement_sheet_frame.png.js";
import _modDef17156 from "../../../../discord_assets/assets/collectibles/frames/ea/announcement_key_1.png.js";
import noop from "../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(1087).CollectiblesMobileShopScreen;
const ACTION_SHEET_MAX_WIDTH = fn(6653).ACTION_SHEET_MAX_WIDTH;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let c11 = 32;
const createStyles = fn(4896);
let obj2 = {
  mascotContainer: null,
  mascotLayer: null,
  mascotImage: null,
  framePreviewImage: null,
  container: null,
  headerText: null,
  featureRow: null,
  featureText: null,
  featureRows: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.pointerEvents = "none";
obj2.mascotContainer = obj3;
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2.mascotLayer = {};
obj2.mascotImage = { width: "100%", aspectRatio: 1.8324022346368716 };
obj2.framePreviewImage = { width: "100%", aspectRatio: 3.25, resizeMode: "contain" };
obj2.container = {
  padding: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_16,
};
obj2.headerText = { textAlign: "center" };
let obj4 = {};
let obj5 = {
  padding: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_16,
};
obj2.featureRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.featureText = { flex: 1 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.featureRows = { gap: nativeDefault.space.PX_32 };
let closure_12 = createStyles.createStyles(obj2);
const __initData = {
  code: "function CollectiblesMobileAnnouncementActionSheetTsx1(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}",
};
const __initData2 = {
  code: "function CollectiblesMobileAnnouncementActionSheetTsx2(){const{animatedPosition,safeAreaTop,MASCOT_SAFE_AREA_NUDGE}=this.__closure;return{transform:[{translateY:animatedPosition.get()+safeAreaTop-MASCOT_SAFE_AREA_NUDGE}]};}",
};
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(22);
      const tmp3 = closure_12();
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
                  const obj4 = { uri: _modDef17155 };
                  cResult[13] = obj4;
                  let tmp15 = obj4;
                } else {
                  tmp15 = cResult[13];
                }
                if (cResult[14] !== tmp3.mascotImage) {
                  const obj5 = {
                    source: tmp15,
                    style: tmp3.mascotImage,
                    accessibilityElementsHidden: true,
                    importantForAccessibility: "no-hide-descendants",
                  };
                  const tmp19 = options(React4, obj5);
                  cResult[14] = tmp3.mascotImage;
                  cResult[15] = tmp19;
                  let tmp16 = tmp19;
                } else {
                  tmp16 = cResult[15];
                }
                if (cResult[16] === tmp14) {
                  if (cResult[17] === tmp16) {
                    let tmp20 = cResult[18];
                  }
                  if (cResult[19] === tmp10) {
                    if (cResult[20] === tmp20) {
                      let tmp24 = cResult[21];
                    }
                    return tmp24;
                  }
                  const obj6 = { style: tmp10, children: tmp20 };
                  const tmp26 = options(ReanimatedRexportDefault.View, obj6);
                  cResult[19] = tmp10;
                  cResult[20] = tmp20;
                  cResult[21] = tmp26;
                  tmp24 = tmp26;
                }
                const obj7 = { style: tmp14, children: tmp16 };
                const tmp23 = options(hasOwnProperty, obj7);
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
    }
  : () => {
      const tmp = closure_12();
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
      const items1 = [tmp.mascotLayer];
      const rect = { top: -138 * result1, left: -56 * result1, right: -56 * result1 };
      items1[1] = rect;
      obj4.style = items1;
      const obj5 = {
        source: null,
        style: null,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
      };
      obj5.source = { uri: _modDef17155 };
      obj5.style = tmp.mascotImage;
      obj4.children = options(React4, obj5);
      obj3.children = options(hasOwnProperty, obj4);
      return options(ReanimatedRexportDefault.View, obj3);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(7);
      ({ icon, text } = arg0);
      const tmp4 = closure_12();
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
        const tmp10 = v65535(hasOwnProperty, obj2);
        cResult[3] = icon;
        cResult[4] = tmp4.featureRow;
        cResult[5] = tmp5;
        cResult[6] = tmp10;
        tmp7 = tmp10;
      }
      const tmp6 = options(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        style: tmp4.featureText,
        children: text,
      });
      cResult[0] = tmp4.featureText;
      cResult[1] = text;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.featureText, children: text };
    }
  : (arg0) => {
      ({ icon, text } = arg0);
      const tmp = closure_12();
      const obj = { style: tmp.featureRow, children: null };
      const items = [
        icon,
        options(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          style: tmp.featureText,
          children: text,
        }),
      ];
      obj.children = items;
      return v65535(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let obj7 = { gap: nativeDefault.space.PX_32 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesMobileAnnouncementActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = markAsDismissed(576).c(33);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_12();
      importDefault = noop.useRef(false);
      dependencyMap = noop.useRef(markAsDismissed);
      if (cResult[0] !== markAsDismissed) {
        const fn = function s() {
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
        class E {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.PRIMARY);
            obj = closure_0(closure_2[16]);
            obj1 = {
              screen: closure_6.FEATURED_PAGE,
              analyticsLocations: [],
              analyticsSource: closure_1(closure_2[17]).ACTION_SHEET,
            };
            result = obj.openCollectiblesShopMobile(obj1);
            return;
          }
        }
        cResult[5] = markAsDismissed;
        cResult[6] = E;
      } else {
        class E {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.PRIMARY);
            obj = closure_0(closure_2[16]);
            obj1 = {
              screen: closure_6.FEATURED_PAGE,
              analyticsLocations: [],
              analyticsSource: closure_1(closure_2[17]).ACTION_SHEET,
            };
            result = obj.openCollectiblesShopMobile(obj1);
            return;
          }
        }
      }
      if (cResult[7] !== markAsDismissed) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        cResult[7] = markAsDismissed;
        cResult[8] = P;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const tmp15 = closure_9(closure_15, {});
        cResult[9] = tmp15;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        tmp17[0] = _modDef17156;
        cResult[10] = tmp17;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[11] !== tmp4.framePreviewImage) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj3 = {
          source: tmp17,
          style: tmp4.framePreviewImage,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        const tmp21 = closure_9(closure_4, obj3);
        cResult[11] = tmp4.framePreviewImage;
        cResult[12] = tmp21;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const stringResult = obj4.string(tmp(1126).t.vRCvqo);
        cResult[13] = stringResult;
        const tmp22 = stringResult;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[14] !== tmp4.headerText) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj5 = {
          variant: "heading-xl/bold",
          color: "text-strong",
          accessibilityRole: "header",
          style: tmp4.headerText,
          children: tmp22,
        };
        const tmp25 = closure_9(tmp(4892).Text, obj5);
        cResult[14] = tmp4.headerText;
        cResult[15] = tmp25;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj6 = { icon: null, text: null };
        const obj7 = { size };
        obj6.icon = closure_9(tmp(12385).PaintIllocon, obj7);
        const intl = tmp(1126).intl;
        obj6.text = intl.string(tmp(1126).t["6ZWB0C"]);
        const tmp29 = closure_9(closure_16, obj6);
        cResult[16] = tmp29;
        const tmp26 = tmp29;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj8 = { icon: null, text: null };
        const obj9 = { size };
        obj8.icon = closure_9(tmp(12379).HeartIllocon, obj9);
        const intl2 = tmp(1126).intl;
        obj8.text = intl2.string(tmp(1126).t.MkVbBY);
        const tmp33 = closure_9(closure_16, obj8);
        cResult[17] = tmp33;
        const tmp30 = tmp33;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj10 = { icon: null, text: null };
        const obj11 = { size };
        obj10.icon = closure_9(tmp(17157).ShopIllocon, obj11);
        const intl3 = tmp(1126).intl;
        obj10.text = intl3.string(tmp(1126).t["/4bQuG"]);
        const tmp37 = closure_9(closure_16, obj10);
        cResult[18] = tmp37;
        const tmp34 = tmp37;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[19] !== tmp4.featureRows) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj12 = { style: tmp4.featureRows, children: null };
        const items2 = [tmp26, tmp30, tmp34];
        obj12.children = items2;
        const tmp40 = closure_10(closure_5, obj12);
        cResult[19] = tmp4.featureRows;
        cResult[20] = tmp40;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const stringResult1 = obj13.string(tmp(1126).t.S9hXPI);
        cResult[21] = stringResult1;
        const tmp41 = stringResult1;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[22] !== E) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const obj14 = { size: "lg", text: tmp41, onPress: E };
        const tmp44 = closure_9(tmp(5601).Button, obj14);
        cResult[22] = E;
        cResult[23] = tmp44;
      } else {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      if (cResult[24] === tmp4.container) {
        class P {
          constructor() {
            closure_1.current = true;
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
      }
      const obj15 = { style: tmp4.container, children: null };
      const items3 = [tmp19, tmp24, tmp38, tmp43];
      obj15.children = items3;
      let obj = markAsDismissed(576);
      cResult[24] = tmp4.container;
      cResult[25] = tmp19;
      cResult[26] = tmp24;
      cResult[27] = tmp38;
      cResult[28] = tmp43;
      cResult[29] = closure_10(closure_5, obj15);
      const tmp45 = closure_10(closure_5, obj15);
    }
  : (markAsDismissed) => {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp = closure_12();
      importDefault = noop.useRef(false);
      dependencyMap = noop.useRef(markAsDismissed);
      const items = [markAsDismissed];
      const effect = noop.useEffect(() => {
        closure_2.current = markAsDismissed;
      }, items);
      const effect1 = noop.useEffect(
        () => () => {
          if (!ref.current) {
            ref2.current(constants2.AUTO_DISMISS);
          }
        },
        [],
      );
      const items1 = [markAsDismissed];
      const items2 = [markAsDismissed];
      const callback = noop.useCallback(() => {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.PRIMARY);
        const obj = CollectiblesActionCreators;
        const result = obj.openCollectiblesShopMobile({
          screen: constants.FEATURED_PAGE,
          analyticsLocations: [],
          analyticsSource: AnalyticsLocationDefault.ACTION_SHEET,
        });
      }, items1);
      const callback1 = noop.useCallback(() => {
        closure_1.current = true;
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items2);
      const memo = noop.useMemo(() => closure_1_9(closure_1_15, {}), []);
      let obj = { onDismiss: callback1, backdropChildren: memo, children: null };
      const obj2 = { style: tmp.container, children: null };
      const obj3 = {
        source: { uri: _modDef17156 },
        style: tmp.framePreviewImage,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
      };
      const items3 = [closure_9(closure_4, obj3), , ,];
      const obj5 = {
        variant: "heading-xl/bold",
        color: "text-strong",
        accessibilityRole: "header",
        style: tmp.headerText,
        children: null,
      };
      const intl = markAsDismissed(1126).intl;
      obj5.children = intl.string(markAsDismissed(1126).t.vRCvqo);
      items3[1] = closure_9(markAsDismissed(4892).Text, obj5);
      const obj6 = { style: tmp.featureRows, children: null };
      const obj7 = { icon: closure_9(markAsDismissed(12385).PaintIllocon, { size }), text: null };
      const intl2 = markAsDismissed(1126).intl;
      obj7.text = intl2.string(markAsDismissed(1126).t["6ZWB0C"]);
      const items4 = [closure_9(closure_16, obj7), ,];
      const obj9 = { icon: closure_9(markAsDismissed(12379).HeartIllocon, { size }), text: null };
      const intl3 = markAsDismissed(1126).intl;
      obj9.text = intl3.string(markAsDismissed(1126).t.MkVbBY);
      items4[1] = closure_9(closure_16, obj9);
      const obj11 = { icon: closure_9(markAsDismissed(17157).ShopIllocon, { size }), text: null };
      const intl4 = markAsDismissed(1126).intl;
      obj11.text = intl4.string(markAsDismissed(1126).t["/4bQuG"]);
      items4[2] = closure_9(closure_16, obj11);
      obj6.children = items4;
      items3[2] = closure_10(closure_5, obj6);
      const obj13 = { size: "lg", text: null, onPress: null };
      const intl5 = markAsDismissed(1126).intl;
      obj13.text = intl5.string(markAsDismissed(1126).t.S9hXPI);
      obj13.onPress = callback;
      items3[3] = closure_9(markAsDismissed(5601).Button, obj13);
      obj2.children = items3;
      obj.children = closure_10(closure_5, obj2);
      return closure_9(markAsDismissed(6652).BottomSheet, obj);
    };
