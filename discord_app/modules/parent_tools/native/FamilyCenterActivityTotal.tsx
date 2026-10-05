// === Module 14703: FamilyCenterActivityTotal ===

// Module 14703 (FamilyCenterActivityTotal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8298 */;
import useFamilyCenterActivities from "useFamilyCenterActivities" /* 14702 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let displayType;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2 };
obj2 = { display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, padding: 12, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LEDGE);
let closure_5 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((displayType) => {
  let items;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(11);
  displayType = displayType.displayType;
  const tmp4 = closure_5();
  const obj2 = useFamilyCenterActivities;
  const actionTotalsForDisplayType = obj2.useActionTotalsForDisplayType(displayType);
  const obj3 = useFamilyCenterActivities;
  const formattedTotalForDisplayType = obj3.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  if (cResult[0] !== displayType) {
    const tmpResult = FamilyCenterUtils;
    const activityTypeTextConfigs = tmpResult.getActivityTypeTextConfigs();
    const value = activityTypeTextConfigs.get(displayType);
    let tooltipHeaderResult;
    if (value != null) {
      tooltipHeaderResult = value.tooltipHeader();
    }
    cResult[0] = displayType;
    cResult[1] = tooltipHeaderResult;
    tmp7 = tooltipHeaderResult;
  } else {
    tmp7 = cResult[1];
  }
  let num2 = formattedTotalForDisplayType;
  if (formattedTotalForDisplayType == null) {
    num2 = 0;
  }
  if (cResult[2] === str) {
    let tmp10;
    let tmp12;
    if (cResult[3] === num2) {
      tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp7) {
      const obj4 = { variant: "text-sm/semibold", children: tmp7 };
      const tmp14 = _false(Text_Text.Text, obj4);
      cResult[5] = tmp7;
      cResult[6] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp10) {
        let tmp15;
        if (cResult[9] === tmp12) {
          tmp15 = cResult[10];
        }
        return tmp15;
      }
    }
    const obj5 = { style: tmp4.container, children: items };
    items = [tmp10, tmp12];
    const tmp18 = React3(View, obj5);
    cResult[7] = tmp4.container;
    cResult[8] = tmp10;
    cResult[9] = tmp12;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const tmp11 = _false(Text_Text.Text, { variant: "heading-xxl/medium", color: str, children: num2 });
  cResult[2] = str;
  cResult[3] = num2;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((displayType) => {
  let items;
  displayType = displayType.displayType;
  const tmp = closure_5();
  const obj = useFamilyCenterActivities;
  const actionTotalsForDisplayType = obj.useActionTotalsForDisplayType(displayType);
  const obj2 = useFamilyCenterActivities;
  let num = obj2.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  const tmp2Result = FamilyCenterUtils;
  const activityTypeTextConfigs = tmp2Result.getActivityTypeTextConfigs();
  const value = activityTypeTextConfigs.get(displayType);
  let tooltipHeaderResult;
  if (value != null) {
    tooltipHeaderResult = value.tooltipHeader();
  }
  const obj3 = { style: tmp.container, children: items };
  const obj4 = { variant: "heading-xxl/medium", color: str, children: num };
  const Text = Text_Text.Text;
  if (num == null) {
    num = 0;
  }
  items = [_false(Text, obj4), _false(Text_Text.Text, { variant: "text-sm/semibold", children: tooltipHeaderResult })];
  return React3(View, obj3);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityTotal.tsx");

export default tmp6;