// === Module 14555: SafetyHubErrorActionSheet ===

// Module 14555 (SafetyHubErrorActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import CircleXIcon2 from "CircleXIcon" /* 4797 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11493 */;
import useSafetyHubLoadingDefault from "useSafetyHubLoading" /* 14554 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { errorContainer: obj2, redesignErrorIconContainer: size, redesignErrorIcon: { height: 50, width: 50 } };
obj2 = { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16, minHeight: 120 };
createStyles = createStyles.createStyles;
size = { display: "flex", justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.WHITE };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let items2;
  let items3;
  let items4;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(20);
  const tmp4 = closure_7();
  const tmp6 = useSafetyHubLoadingDefault();
  if (cResult[0] !== tmp4.errorContainer) {
    const items = [tmp4.errorContainer];
    cResult[0] = tmp4.errorContainer;
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.redesignErrorIconContainer) {
    const items1 = [tmp4.redesignErrorIconContainer];
    cResult[2] = tmp4.redesignErrorIconContainer;
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp4.redesignErrorIcon) {
    const obj2 = { size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, style: items2 };
    const CircleXIcon = CircleXIcon2.CircleXIcon;
    items2 = [tmp4.redesignErrorIcon];
    const tmp11 = hasOwnProperty(CircleXIcon, obj2);
    cResult[4] = tmp4.redesignErrorIcon;
    cResult[5] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp8) {
    let tmp12;
    let tmp15;
    if (cResult[7] === tmp9) {
      tmp12 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "heading-lg/normal", children: intl.string(intl3.t.TDRvqs) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      const tmp17 = hasOwnProperty(Text, obj3);
      cResult[9] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] === tmp7) {
      let tmp18;
      let tmp23;
      let tmp22;
      let tmp25;
      if (cResult[11] === tmp12) {
        tmp18 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function _() {
          const obj = SafetyHubActionCreatorsAll;
          return obj.getSafetyHubData();
        };
        const intl2 = intl3.intl;
        const stringResult = intl2.string(intl3.t.R1AN4F);
        cResult[13] = fn;
        cResult[14] = stringResult;
        tmp23 = stringResult;
        tmp22 = fn;
      } else {
        tmp22 = cResult[13];
        tmp23 = cResult[14];
      }
      if (cResult[15] !== tmp6) {
        const obj4 = { onPress: tmp22, text: tmp23, loading: tmp6, disabled: tmp6 };
        const tmp27 = hasOwnProperty(components_Button_Button.Button, obj4);
        cResult[15] = tmp6;
        cResult[16] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[16];
      }
      if (cResult[17] === tmp18) {
        let tmp28;
        if (cResult[18] === tmp25) {
          tmp28 = cResult[19];
        }
        return tmp28;
      }
      const obj5 = { children: items3 };
      items3 = [tmp18, tmp25];
      const tmp30 = metroRequire(Sheet_BottomSheet.BottomSheet, obj5);
      cResult[17] = tmp18;
      cResult[18] = tmp25;
      cResult[19] = tmp30;
      tmp28 = tmp30;
    }
    const obj6 = { style: tmp7, children: items4 };
    items4 = [tmp12, tmp15];
    const tmp21 = metroRequire(View, obj6);
    cResult[10] = tmp7;
    cResult[11] = tmp12;
    cResult[12] = tmp21;
    tmp18 = tmp21;
  }
  const tmp13 = hasOwnProperty(View, { style: tmp8, children: tmp9 });
  cResult[6] = tmp8;
  cResult[7] = tmp9;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : ((arg0) => {
  let CircleXIcon;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj4;
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const tmp2 = closure_7();
    const tmp5 = useSafetyHubLoadingDefault();
    let obj = { children: items4 };
    const obj2 = { style: items, children: items3 };
    items = [tmp2.errorContainer];
    const obj3 = { style: items1, children: hasOwnProperty(CircleXIcon, obj4) };
    items1 = [tmp2.redesignErrorIconContainer];
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    obj4 = { size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, style: items2 };
    CircleXIcon = CircleXIcon2.CircleXIcon;
    items2 = [tmp2.redesignErrorIcon];
    items3 = [hasOwnProperty(View, obj3), ];
    const obj5 = { variant: "heading-lg/normal", children: intl.string(intl3.t.TDRvqs) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    items3[1] = hasOwnProperty(Text, obj5);
    items4 = [metroRequire(View, obj2), ];
    const obj6 = {
      onPress() {
          const obj = SafetyHubActionCreatorsAll;
          return obj.getSafetyHubData();
        },
      text: intl2.string(intl3.t.R1AN4F),
      loading: tmp5,
      disabled: tmp5
    };
    const Button = components_Button_Button.Button;
    intl2 = intl3.intl;
    items4[1] = hasOwnProperty(Button, obj6);
    return metroRequire(BottomSheet, obj);
  }
});
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default tmp5;