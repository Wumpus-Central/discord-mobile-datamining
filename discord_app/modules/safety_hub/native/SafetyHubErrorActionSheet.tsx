// === Module 14832: SafetyHubErrorActionSheet ===

// Module 14832 (SafetyHubErrorActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import CircleXIcon from "CircleXIcon" /* 4997 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6829 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11498 */;
import useSafetyHubLoadingDefault from "useSafetyHubLoading" /* 14831 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { errorContainer: { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16, minHeight: 120 }, redesignErrorIconContainer: null, redesignErrorIcon: null };
let size = { display: "flex", justifyContent: "center", alignItems: "center", height: 40, width: 40, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.WHITE };
obj2.redesignErrorIconContainer = size;
obj2.redesignErrorIcon = { height: 50, width: 50 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { display: "flex", alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16, minHeight: 120 };
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubErrorActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SafetyHubErrorActionSheet() {
  const cResult = c.c(16);
  const tmp4 = closure_7();
  const tmp6 = useSafetyHubLoadingDefault();
  if (cResult[0] !== tmp4.redesignErrorIcon) {
    const obj2 = { size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, style: tmp4.redesignErrorIcon };
    const tmp9 = hasOwnProperty(CircleXIcon.CircleXIcon, obj2);
    cResult[0] = tmp4.redesignErrorIcon;
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp4.redesignErrorIconContainer) {
    if (cResult[3] === tmp7) {
      let tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "heading-lg/normal", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t.TDRvqs);
      const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[5] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === tmp4.errorContainer) {
      if (cResult[7] === tmp10) {
        let tmp16 = cResult[8];
      }
      const _Symbol2 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t.R1AN4F);
        cResult[9] = C;
        cResult[10] = stringResult;
        let tmp21 = stringResult;
      } else {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
        tmp21 = cResult[10];
      }
      if (cResult[11] !== tmp6) {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
        const obj4 = { onPress: C, text: tmp21, loading: tmp6, disabled: tmp6 };
        const tmp24 = hasOwnProperty(components_Button_Button.Button, obj4);
        cResult[11] = tmp6;
        cResult[12] = tmp24;
      } else {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
      }
      if (cResult[13] === tmp16) {
        class C {
          constructor() {
            obj = closure_1_2(closure_1_3[11]);
            return obj.getSafetyHubData();
          }
        }
        return tmp25;
      }
      const obj5 = { children: null };
      const items = [tmp16, tmp23];
      obj5.children = items;
      const tmp27 = timestampProducer(Sheet_BottomSheet.BottomSheet, obj5);
      cResult[13] = tmp16;
      cResult[14] = tmp23;
      cResult[15] = tmp27;
      tmp25 = tmp27;
    }
    const obj6 = { style: tmp4.errorContainer, children: null };
    const items1 = [tmp10, tmp13];
    obj6.children = items1;
    const tmp19 = timestampProducer(View, obj6);
    cResult[6] = tmp4.errorContainer;
    cResult[7] = tmp10;
    cResult[8] = tmp19;
    tmp16 = tmp19;
  }
  const tmp11 = hasOwnProperty(View, { style: tmp4.redesignErrorIconContainer, children: tmp7 });
  cResult[2] = tmp4.redesignErrorIconContainer;
  cResult[3] = tmp7;
  cResult[4] = tmp11;
  tmp10 = tmp11;
  const obj7 = { style: tmp4.redesignErrorIconContainer, children: tmp7 };
}) : (function SafetyHubErrorActionSheet(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const tmp2 = closure_7();
    const tmp5 = useSafetyHubLoadingDefault();
    const obj = { children: null };
    const obj2 = { style: tmp2.errorContainer, children: null };
    const obj3 = { style: tmp2.redesignErrorIconContainer, children: null };
    const obj4 = { size: "custom", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT, style: tmp2.redesignErrorIcon };
    obj3.children = hasOwnProperty(CircleXIcon.CircleXIcon, obj4);
    const items = [hasOwnProperty(View, obj3), ];
    const obj5 = { variant: "heading-lg/normal", children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t.TDRvqs);
    items[1] = hasOwnProperty(Text_Text.Text, obj5);
    obj2.children = items;
    const items1 = [timestampProducer(View, obj2), ];
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
    items1[1] = hasOwnProperty(components_Button_Button.Button, obj6);
    obj.children = items1;
    return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
  }
});