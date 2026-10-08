// === Module 7078: SearchBarNav ===

// Module 7078 (SearchBarNav)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import Text_Text from "Text/Text" /* 5086 */;
import Pressables from "Pressables" /* 6189 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6207 */;
import SearchField from "SearchField" /* 6730 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["onClose", "ref"];
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flexDirection: "row", alignItems: "center", height: fn(6261).NAV_BAR_HEIGHT, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_STRONG }, cancelText: null, cancelIcon: null, flex: null };
let obj3 = { flexDirection: "row", alignItems: "center", height: fn(6261).NAV_BAR_HEIGHT, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_STRONG };
obj2.cancelText = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.cancelIcon = { marginRight: nativeDefault.space.PX_16 };
obj2.flex = { flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginRight: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SearchBarNav(arg0) {
  const cResult = c.c(27);
  if (cResult[0] !== arg0) {
    ({ onClose, ref } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = onClose;
    cResult[2] = tmp9;
    cResult[3] = ref;
    let tmp6 = ref;
    let tmp5 = tmp9;
    let tmp4 = onClose;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_7();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["ETE/oC"]);
    cResult[4] = stringResult;
    let tmp11 = stringResult;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const rect = { top: 8, right: 8, bottom: 8, left: 8 };
    cResult[5] = rect;
    let tmp13 = rect;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp10.cancelIcon) {
    if (cResult[7] === tmp10.cancelText) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp14) {
          let tmp17 = cResult[11];
        }
        if (cResult[12] !== tmp17) {
          let tmp21 = null;
          if (tmpResult.isAndroid()) {
            tmp21 = tmp17;
          }
          cResult[12] = tmp17;
          cResult[13] = tmp21;
          let tmp20 = tmp21;
          tmpResult = PlatformUtils;
        } else {
          tmp20 = cResult[13];
        }
        if (cResult[14] === tmp5) {
          if (cResult[15] === tmp6) {
            let tmp22 = cResult[16];
          }
          if (cResult[17] === tmp10.flex) {
            if (cResult[18] === tmp22) {
              let tmp29 = cResult[19];
            }
            if (cResult[20] !== tmp17) {
              let tmp34 = null;
              if (!tmpResult3.isAndroid()) {
                tmp34 = tmp17;
              }
              cResult[20] = tmp17;
              cResult[21] = tmp34;
              let tmp33 = tmp34;
              tmpResult3 = PlatformUtils;
            } else {
              tmp33 = cResult[21];
            }
            if (cResult[22] === tmp10.container) {
              if (cResult[23] === tmp20) {
                if (cResult[24] === tmp29) {
                  if (cResult[25] === tmp33) {
                    let tmp35 = cResult[26];
                  }
                  return tmp35;
                }
              }
            }
            const obj2 = { style: tmp10.container, children: null };
            const items = [tmp20, tmp29, tmp33];
            obj2.children = items;
            const tmp38 = timestampProducer(React4, obj2);
            cResult[22] = tmp10.container;
            cResult[23] = tmp20;
            cResult[24] = tmp29;
            cResult[25] = tmp33;
            cResult[26] = tmp38;
            tmp35 = tmp38;
          }
          const obj3 = { style: tmp10.flex, children: tmp22 };
          const tmp32 = hasOwnProperty(React4, obj3);
          cResult[17] = tmp10.flex;
          cResult[18] = tmp22;
          cResult[19] = tmp32;
          tmp29 = tmp32;
        }
        const obj4 = { children: null };
        const obj5 = { size: "md", round: true, ref: tmp6 };
        const merged = Object.assign(tmp5);
        obj4.children = hasOwnProperty(SearchField.SearchField, obj5);
        const tmp28 = hasOwnProperty(React4, obj4);
        cResult[14] = tmp5;
        cResult[15] = tmp6;
        cResult[16] = tmp28;
        tmp22 = tmp28;
      }
      const obj6 = { accessibilityRole: "button", accessibilityLabel: tmp11, onPress: tmp4, hitSlop: tmp13, children: cResult[8] };
      const tmp19 = hasOwnProperty(Pressables.PressableOpacity, obj6);
      cResult[9] = tmp4;
      cResult[10] = cResult[8];
      cResult[11] = tmp19;
      tmp17 = tmp19;
    }
  }
  if (tmpResult4.isAndroid()) {
    const obj7 = { style: tmp10.cancelIcon };
    let tmp15Result = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj7);
  } else {
    const obj8 = { style: tmp10.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = util.intl;
    obj8.children = intl2.string(util.t["ETE/oC"]);
    tmp15Result = hasOwnProperty(Text_Text.Text, obj8);
  }
  cResult[6] = tmp10.cancelIcon;
  cResult[7] = tmp10.cancelText;
  cResult[8] = tmp15Result;
  tmpResult4 = PlatformUtils;
}) : (function SearchBarNav(arg0) {
  ({ onClose, ref } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onClose: 0, ref: 0 }));
  const tmp2 = closure_7();
  const obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["ETE/oC"]);
  obj.onPress = onClose;
  obj.hitSlop = { top: 8, right: 8, bottom: 8, left: 8 };
  if (obj2.isAndroid()) {
    const obj3 = { style: tmp2.cancelIcon };
    let tmp3Result = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj3);
  } else {
    const obj4 = { style: tmp2.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl2 = util.intl;
    obj4.children = intl2.string(util.t["ETE/oC"]);
    tmp3Result = hasOwnProperty(Text_Text.Text, obj4);
  }
  obj.children = tmp3Result;
  const tmp3Result2 = hasOwnProperty(Pressables.PressableOpacity, obj);
  const obj5 = { style: tmp2.container, children: null };
  obj2 = PlatformUtils;
  let tmp10 = null;
  if (tmp4Result.isAndroid()) {
    tmp10 = tmp3Result2;
  }
  const items = [tmp10, , ];
  const obj6 = { style: tmp2.flex, children: null };
  const obj7 = { children: null };
  const merged1 = Object.assign(merged);
  obj7.children = hasOwnProperty(SearchField.SearchField, { size: "md", round: true, ref });
  obj6.children = hasOwnProperty(React4, obj7);
  items[1] = hasOwnProperty(React4, obj6);
  const obj8 = { size: "md", round: true, ref };
  tmp4Result = PlatformUtils;
  let tmp12 = null;
  if (!tmp4Result2.isAndroid()) {
    tmp12 = tmp3Result2;
  }
  items[2] = tmp12;
  obj5.children = items;
  return timestampProducer(React4, obj5);
});