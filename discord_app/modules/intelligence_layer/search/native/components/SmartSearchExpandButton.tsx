// === Module 16867: SmartSearchExpandButton ===

// Module 16867 (SmartSearchExpandButton)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef3919 from "module_3919" /* 3919 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 10844 */;
import ChevronSmallUpIcon2 from "ChevronSmallUpIcon" /* 13379 */;
import useSearchHostSurface from "useSearchHostSurface" /* 16866 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Pressable: c3, StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles((backgroundColor) => {
  let obj3;
  const obj = { block: { position: "absolute", left: 0, right: 0, bottom: 0, alignItems: "center" }, pill: { height: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor, alignItems: "center", justifyContent: "center" }, surface: obj3 };
  obj3 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
  ({ height: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor, alignItems: "center", justifyContent: "center" });
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ChevronSmallUpIcon;
  let block;
  let isCollapsed;
  let items;
  let onPress;
  let pill;
  let tmp13;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(15);
  ({ isCollapsed, onPress } = arg0);
  const obj2 = useSearchHostSurface;
  const tmp4 = closure_9(obj2.useSearchHostSurfaceColor());
  if (isCollapsed) {
    ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
  }
  ({ block, pill } = tmp4);
  if (cResult[0] !== isCollapsed) {
    const intl = intl2.intl;
    const string = intl.string;
    const tmp7 = _modDef3919;
    const stringResult = string(isCollapsed ? tmp7.NuTbB9 : tmp7.FKLBbW);
    cResult[0] = isCollapsed;
    cResult[1] = stringResult;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp4.surface) {
    const obj3 = { style: tmp4.surface, pointerEvents: "none" };
    const tmp12 = metroRequire(hasOwnProperty, obj3);
    cResult[2] = tmp4.surface;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== ChevronSmallUpIcon) {
    const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
    const tmp16 = metroRequire(ChevronSmallUpIcon, obj4);
    cResult[4] = ChevronSmallUpIcon;
    cResult[5] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === onPress) {
    if (cResult[7] === tmp4.pill) {
      if (cResult[8] === tmp5) {
        if (cResult[9] === tmp9) {
          let tmp17;
          if (cResult[10] === tmp13) {
            tmp17 = cResult[11];
          }
          if (cResult[12] === tmp4.block) {
            let tmp19;
            if (cResult[13] === tmp17) {
              tmp19 = cResult[14];
            }
            return tmp19;
          }
          const obj5 = { style: block, hitSlop: rect, children: tmp17 };
          const tmp23 = metroRequire(hasOwnProperty, obj5);
          cResult[12] = tmp4.block;
          cResult[13] = tmp17;
          cResult[14] = tmp23;
          tmp19 = tmp23;
        }
      }
    }
  }
  const obj6 = { style: pill, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: tmp5, onPress, children: items };
  items = [tmp9, tmp13];
  const tmp18 = metroImportDefault(_false, obj6);
  cResult[6] = onPress;
  cResult[7] = tmp4.pill;
  cResult[8] = tmp5;
  cResult[9] = tmp9;
  cResult[10] = tmp13;
  cResult[11] = tmp18;
  tmp17 = tmp18;
}) : ((isCollapsed) => {
  let ChevronSmallUpIcon;
  let FKLBbW;
  let items;
  let obj3;
  let string;
  let tmp10;
  isCollapsed = isCollapsed.isCollapsed;
  const onPress = isCollapsed.onPress;
  const obj = useSearchHostSurface;
  const tmp3 = closure_9(obj.useSearchHostSurfaceColor());
  if (isCollapsed) {
    ChevronSmallUpIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = ChevronSmallUpIcon2.ChevronSmallUpIcon;
  }
  const obj2 = { style: tmp3.block, hitSlop: rect, children: metroImportDefault(_false, obj3) };
  obj3 = { style: tmp3.pill, hitSlop: rect, accessibilityRole: "button", accessibilityLabel: string(FKLBbW), onPress, children: items };
  const intl = intl2.intl;
  string = intl.string;
  const tmp9 = _modDef3919;
  if (isCollapsed) {
    FKLBbW = tmp9.NuTbB9;
    tmp10 = importDefault;
  } else {
    FKLBbW = tmp9.FKLBbW;
    tmp10 = importDefault;
  }
  items = [, ];
  const obj4 = { style: tmp3.surface, pointerEvents: "none" };
  items[0] = metroRequire(hasOwnProperty, obj4);
  const obj5 = { size: "sm", color: tmp10(587).colors.INTERACTIVE_ICON_DEFAULT };
  items[1] = metroRequire(ChevronSmallUpIcon, obj5);
  return metroRequire(hasOwnProperty, obj2);
}));
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SmartSearchExpandButton.tsx");

export default memoResult;