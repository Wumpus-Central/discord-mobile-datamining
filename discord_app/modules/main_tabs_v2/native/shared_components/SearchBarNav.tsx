// === Module 6889: SearchBarNav ===

// Module 6889 (SearchBarNav)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6021 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import SearchField2 from "SearchField" /* 6554 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onClose;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let closure_2 = ["onClose"];
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cancelText: obj3, cancelIcon: obj4, flex: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", height: NavigatorConstants.NAV_BAR_HEIGHT, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: nativeDefault.colors.BORDER_STRONG };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { marginRight: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onClose, ref) => {
  let SearchField;
  let intl2;
  let items;
  let obj5;
  let tmp10;
  let tmp12;
  let tmp14Result;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(26);
  if (cResult[0] !== onClose) {
    onClose = onClose.onClose;
    const tmp8 = _objectWithoutProperties(onClose, closure_2);
    cResult[0] = onClose;
    cResult[1] = onClose;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = onClose;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_7();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t["ETE/oC"]);
    cResult[3] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const rect = { top: 8, right: 8, bottom: 8, left: 8 };
    cResult[4] = rect;
    tmp12 = rect;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp9.cancelIcon) {
    let tmp13;
    if (cResult[6] === tmp9.cancelText) {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp4) {
      let tmp16;
      let tmp19;
      if (cResult[9] === tmp13) {
        tmp16 = cResult[10];
      }
      if (cResult[11] !== tmp16) {
        let tmp20 = null;
        const tmpResult = PlatformUtils;
        if (tmpResult.isAndroid()) {
          tmp20 = tmp16;
        }
        cResult[11] = tmp16;
        cResult[12] = tmp20;
        tmp19 = tmp20;
      } else {
        tmp19 = cResult[12];
      }
      if (cResult[13] === tmp5) {
        let tmp22;
        if (cResult[14] === ref) {
          tmp22 = cResult[15];
        }
        if (cResult[16] === tmp9.flex) {
          let tmp29;
          let tmp33;
          if (cResult[17] === tmp22) {
            tmp29 = cResult[18];
          }
          if (cResult[19] !== tmp16) {
            let tmp34 = null;
            const tmpResult3 = PlatformUtils;
            if (!tmpResult3.isAndroid()) {
              tmp34 = tmp16;
            }
            cResult[19] = tmp16;
            cResult[20] = tmp34;
            tmp33 = tmp34;
          } else {
            tmp33 = cResult[20];
          }
          if (cResult[21] === tmp9.container) {
            if (cResult[22] === tmp19) {
              if (cResult[23] === tmp29) {
                let tmp35;
                if (cResult[24] === tmp33) {
                  tmp35 = cResult[25];
                }
                return tmp35;
              }
            }
          }
          const obj2 = { style: tmp9.container, children: items };
          items = [tmp19, tmp29, tmp33];
          const tmp38 = metroRequire(React3, obj2);
          cResult[21] = tmp9.container;
          cResult[22] = tmp19;
          cResult[23] = tmp29;
          cResult[24] = tmp33;
          cResult[25] = tmp38;
          tmp35 = tmp38;
        }
        const obj3 = { style: tmp9.flex, children: tmp22 };
        const tmp32 = hasOwnProperty(React3, obj3);
        cResult[16] = tmp9.flex;
        cResult[17] = tmp22;
        cResult[18] = tmp32;
        tmp29 = tmp32;
      }
      const obj4 = { children: hasOwnProperty(SearchField, obj5) };
      obj5 = { size: "md", round: true, ref };
      SearchField = SearchField2.SearchField;
      const merged = Object.assign(tmp5);
      const tmp28 = hasOwnProperty(React3, obj4);
      cResult[13] = tmp5;
      cResult[14] = ref;
      cResult[15] = tmp28;
      tmp22 = tmp28;
    }
    const obj6 = { accessibilityRole: "button", accessibilityLabel: tmp10, onPress: tmp4, hitSlop: tmp12, children: tmp13 };
    const tmp18 = hasOwnProperty(Pressables.PressableOpacity, obj6);
    cResult[8] = tmp4;
    cResult[9] = tmp13;
    cResult[10] = tmp18;
    tmp16 = tmp18;
  }
  const tmpResult4 = PlatformUtils;
  if (tmpResult4.isAndroid()) {
    const obj7 = { style: tmp9.cancelIcon };
    tmp14Result = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj7);
  } else {
    const obj8 = { style: tmp9.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t["ETE/oC"]) };
    const Text = Text_Text.Text;
    intl2 = intl3.intl;
    tmp14Result = hasOwnProperty(Text, obj8);
  }
  cResult[5] = tmp9.cancelIcon;
  cResult[6] = tmp9.cancelText;
  cResult[7] = tmp14Result;
  tmp13 = tmp14Result;
}) : ((onClose, ref) => {
  let SearchField;
  let intl;
  let intl2;
  let items;
  let obj7;
  let obj8;
  let tmp3Result;
  onClose = onClose.onClose;
  const merged = Object.assign(onClose, Object.assign({ onClose: 0 }));
  const tmp2 = closure_7();
  const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl3.t["ETE/oC"]), onPress: onClose, hitSlop: { top: 8, right: 8, bottom: 8, left: 8 }, children: tmp3Result };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl3.intl;
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    const obj3 = { style: tmp2.cancelIcon };
    tmp3Result = hasOwnProperty(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj3);
  } else {
    const obj4 = { style: tmp2.cancelText, maxFontSizeMultiplier: 2, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(intl3.t["ETE/oC"]) };
    const Text = Text_Text.Text;
    intl2 = intl3.intl;
    tmp3Result = hasOwnProperty(Text, obj4);
  }
  const tmp3Result2 = hasOwnProperty(PressableOpacity, obj);
  let tmp10 = null;
  const obj5 = { style: tmp2.container, children: items };
  const tmp4Result = PlatformUtils;
  if (tmp4Result.isAndroid()) {
    tmp10 = tmp3Result2;
  }
  items = [tmp10, , ];
  const obj6 = { style: tmp2.flex, children: hasOwnProperty(React3, obj7) };
  obj7 = { children: hasOwnProperty(SearchField, obj8) };
  obj8 = { size: "md", round: true, ref };
  SearchField = SearchField2.SearchField;
  const merged1 = Object.assign(merged);
  items[1] = hasOwnProperty(React3, obj6);
  let tmp12 = null;
  const tmp4Result2 = PlatformUtils;
  if (!tmp4Result2.isAndroid()) {
    tmp12 = tmp3Result2;
  }
  items[2] = tmp12;
  return metroRequire(React3, obj5);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx");

export default forwardRefResult;