// === Module 16867: SmartSearchExpandButton ===

// Module 16867 (SmartSearchExpandButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3919 from "module_3919" /* 3919 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 10844 */;
import ChevronSmallUpIcon2 from "ChevronSmallUpIcon" /* 13379 */;
import useSearchHostSurface from "useSearchHostSurface" /* 16866 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8 };
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = { block: { position: "absolute", left: 0, right: 0, bottom: 0, alignItems: "center" }, pill: { height: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor, alignItems: "center", justifyContent: "center" }, surface: null };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.borderRadius = nativeDefault.radii.round;
  obj3.backgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
  obj.surface = obj3;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(15);
  ({ isCollapsed, onPress } = arg0);
  const tmp4 = closure_9(useSearchHostSurface.useSearchHostSurfaceColor());
  if (isCollapsed) {
    let ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
  }
  if (cResult[0] !== isCollapsed) {
    const intl = util.intl;
    const tmp9 = _modDef3919;
    const stringResult = intl.string(isCollapsed ? tmp9.NuTbB9 : tmp9.FKLBbW);
    cResult[0] = isCollapsed;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] !== tmp4.surface) {
      const obj3 = { style: tmp4.surface, pointerEvents: "none" };
      const tmp15 = timestampProducer(hasOwnProperty, obj3);
      cResult[2] = tmp4.surface;
      cResult[3] = tmp15;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[3];
    }
    if (cResult[4] !== ChevronSmallUpIcon) {
      const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
      const tmp19 = timestampProducer(ChevronSmallUpIcon, obj4);
      cResult[4] = ChevronSmallUpIcon;
      cResult[5] = tmp19;
      let tmp16 = tmp19;
    } else {
      tmp16 = cResult[5];
    }
    if (cResult[6] === onPress) {
      if (cResult[7] === tmp4.pill) {
        if (cResult[8] === tmp7) {
          if (cResult[9] === tmp12) {
            if (cResult[10] === tmp16) {
              let tmp20 = cResult[11];
            }
            if (cResult[12] === tmp4.block) {
              if (cResult[13] === tmp20) {
                let tmp25 = cResult[14];
              }
              return tmp25;
            }
            const obj5 = { style: tmp5, hitSlop: rect, children: tmp20 };
            const tmp29 = timestampProducer(hasOwnProperty, obj5);
            cResult[12] = tmp4.block;
            cResult[13] = tmp20;
            cResult[14] = tmp29;
            tmp25 = tmp29;
          }
        }
      }
    }
    const obj6 = { style: tmp6, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: cResult[1], onPress, children: null };
    const items = [tmp12, tmp16];
    obj6.children = items;
    const tmp24 = React5(React3, obj6);
    cResult[6] = onPress;
    cResult[7] = tmp4.pill;
    cResult[8] = cResult[1];
    cResult[9] = tmp12;
    cResult[10] = tmp16;
    cResult[11] = tmp24;
    tmp20 = tmp24;
  }
}) : ((isCollapsed) => {
  isCollapsed = isCollapsed.isCollapsed;
  const tmp3 = closure_9(useSearchHostSurface.useSearchHostSurfaceColor());
  if (isCollapsed) {
    let ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
  }
  const obj2 = { style: tmp3.block, hitSlop: rect, children: null };
  const obj3 = { style: tmp3.pill, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  const tmp9 = _modDef3919;
  if (isCollapsed) {
    let FKLBbW = tmp9.NuTbB9;
    let tmp10 = importDefault;
  } else {
    FKLBbW = tmp9.FKLBbW;
    tmp10 = importDefault;
  }
  obj3.accessibilityLabel = intl.string(FKLBbW);
  obj3.onPress = isCollapsed.onPress;
  const items = [timestampProducer(hasOwnProperty, { style: tmp3.surface, pointerEvents: "none" }), ];
  const obj4 = { style: tmp3.surface, pointerEvents: "none" };
  items[1] = timestampProducer(ChevronSmallUpIcon, { size: "sm", color: tmp10(587).colors.INTERACTIVE_ICON_DEFAULT });
  obj3.children = items;
  obj2.children = React5(React3, obj3);
  return timestampProducer(hasOwnProperty, obj2);
}));