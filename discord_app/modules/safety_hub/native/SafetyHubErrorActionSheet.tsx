// === Module 14551: SafetyHubErrorActionSheet ===

// Module 14551 (SafetyHubErrorActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import CircleXIcon from "CircleXIcon" /* 4797 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11493 */;
import useSafetyHubLoadingDefault from "useSafetyHubLoading" /* 14550 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { errorContainer: { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16, minHeight: 120 }, redesignErrorIconContainer: null, redesignErrorIcon: null };
let size = { display: "flex", justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.WHITE };
obj2.redesignErrorIconContainer = size;
obj2.redesignErrorIcon = { height: 50, width: 50 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16, minHeight: 120 };
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(20);
  const tmp4 = closure_7();
  const tmp6 = useSafetyHubLoadingDefault();
  if (cResult[0] !== tmp4.errorContainer) {
    const items = [tmp4.errorContainer];
    cResult[0] = tmp4.errorContainer;
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp4.redesignErrorIconContainer) {
    const items1 = [tmp4.redesignErrorIconContainer];
    cResult[2] = tmp4.redesignErrorIconContainer;
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp4.redesignErrorIcon) {
    const obj2 = { size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, style: null };
    const items2 = [tmp4.redesignErrorIcon];
    obj2.style = items2;
    const tmp11 = hasOwnProperty(CircleXIcon.CircleXIcon, obj2);
    cResult[4] = tmp4.redesignErrorIcon;
    cResult[5] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp8) {
    if (cResult[7] === tmp9) {
      let tmp12 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "heading-lg/normal", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t.TDRvqs);
      const tmp17 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[9] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[9];
    }
    if (cResult[10] === tmp7) {
      if (cResult[11] === tmp12) {
        let tmp18 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function _() {
          return SafetyHubActionCreatorsAll.getSafetyHubData();
        };
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t.R1AN4F);
        cResult[13] = fn;
        cResult[14] = stringResult;
        let tmp23 = stringResult;
        let tmp22 = fn;
      } else {
        tmp22 = cResult[13];
        tmp23 = cResult[14];
      }
      if (cResult[15] !== tmp6) {
        const obj4 = { onPress: tmp22, text: tmp23, loading: tmp6, disabled: tmp6 };
        const tmp27 = hasOwnProperty(components_Button_Button.Button, obj4);
        cResult[15] = tmp6;
        cResult[16] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[16];
      }
      if (cResult[17] === tmp18) {
        if (cResult[18] === tmp25) {
          let tmp28 = cResult[19];
        }
        return tmp28;
      }
      const obj5 = { children: null };
      const items3 = [tmp18, tmp25];
      obj5.children = items3;
      const tmp30 = timestampProducer(Sheet_BottomSheet.BottomSheet, obj5);
      cResult[17] = tmp18;
      cResult[18] = tmp25;
      cResult[19] = tmp30;
      tmp28 = tmp30;
    }
    const obj6 = { style: tmp7, children: null };
    const items4 = [tmp12, tmp15];
    obj6.children = items4;
    const tmp21 = timestampProducer(View, obj6);
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
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const tmp2 = closure_7();
    const tmp5 = useSafetyHubLoadingDefault();
    const obj = { children: null };
    const obj2 = { style: null, children: null };
    const items = [tmp2.errorContainer];
    obj2.style = items;
    const obj3 = { style: null, children: null };
    const items1 = [tmp2.redesignErrorIconContainer];
    obj3.style = items1;
    const obj4 = { size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, style: null };
    const items2 = [tmp2.redesignErrorIcon];
    obj4.style = items2;
    obj3.children = hasOwnProperty(CircleXIcon.CircleXIcon, obj4);
    const items3 = [hasOwnProperty(View, obj3), ];
    const obj5 = { variant: "heading-lg/normal", children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t.TDRvqs);
    items3[1] = hasOwnProperty(Text_Text.Text, obj5);
    obj2.children = items3;
    const items4 = [timestampProducer(View, obj2), ];
    const obj6 = {
      onPress() {
          return SafetyHubActionCreatorsAll.getSafetyHubData();
        },
      text: null,
      loading: null,
      disabled: null
    };
    const intl2 = util.intl;
    obj6.text = intl2.string(util.t.R1AN4F);
    obj6.loading = tmp5;
    obj6.disabled = tmp5;
    items4[1] = hasOwnProperty(components_Button_Button.Button, obj6);
    obj.children = items4;
    return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
  }
});