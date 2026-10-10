// === Module 15151: FamilyCenterActivityTotal ===

// Module 15151 (FamilyCenterActivityTotal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5088 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7741 */;
import useFamilyCenterActivities from "useFamilyCenterActivities" /* 15150 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LEDGE);
obj2.container = { display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, padding: 12, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, padding: 12, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityTotal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterActivityTotal(displayType) {
  const cResult = c.c(11);
  displayType = displayType.displayType;
  const tmp4 = closure_5();
  const actionTotalsForDisplayType = useFamilyCenterActivities.useActionTotalsForDisplayType(displayType);
  const formattedTotalForDisplayType = useFamilyCenterActivities.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  if (cResult[0] !== displayType) {
    const activityTypeTextConfigs = FamilyCenterUtils.getActivityTypeTextConfigs();
    value = activityTypeTextConfigs.get(displayType);
    let tooltipHeaderResult;
    if (value != null) {
      tooltipHeaderResult = value.tooltipHeader();
    }
    cResult[0] = displayType;
    cResult[1] = tooltipHeaderResult;
    let tmp7 = tooltipHeaderResult;
    const tmpResult = FamilyCenterUtils;
  } else {
    tmp7 = cResult[1];
  }
  let num2 = formattedTotalForDisplayType;
  if (formattedTotalForDisplayType == null) {
    num2 = 0;
  }
  if (cResult[2] === str) {
    if (cResult[3] === num2) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] !== tmp7) {
      const obj4 = { variant: "text-sm/semibold", children: tmp7 };
      const tmp14 = React3(Text_Text.Text, obj4);
      cResult[5] = tmp7;
      cResult[6] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp4.container) {
      if (cResult[8] === tmp10) {
        if (cResult[9] === tmp12) {
          let tmp15 = cResult[10];
        }
        return tmp15;
      }
    }
    const obj5 = { style: tmp4.container, children: null };
    const items = [tmp10, tmp12];
    obj5.children = items;
    const tmp18 = React4(View, obj5);
    cResult[7] = tmp4.container;
    cResult[8] = tmp10;
    cResult[9] = tmp12;
    cResult[10] = tmp18;
    tmp15 = tmp18;
  }
  const tmp11 = React3(Text_Text.Text, { variant: "heading-xxl/medium", color: str, children: num2 });
  cResult[2] = str;
  cResult[3] = num2;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : (function FamilyCenterActivityTotal(displayType) {
  displayType = displayType.displayType;
  const tmp = closure_5();
  const actionTotalsForDisplayType = useFamilyCenterActivities.useActionTotalsForDisplayType(displayType);
  let num = useFamilyCenterActivities.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  const activityTypeTextConfigs = FamilyCenterUtils.getActivityTypeTextConfigs();
  value = activityTypeTextConfigs.get(displayType);
  let tooltipHeaderResult;
  if (value != null) {
    tooltipHeaderResult = value.tooltipHeader();
  }
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { variant: "heading-xxl/medium", color: str, children: null };
  if (num == null) {
    num = 0;
  }
  obj4.children = num;
  const items = [React3(Text_Text.Text, obj4), React3(Text_Text.Text, { variant: "text-sm/semibold", children: tooltipHeaderResult })];
  obj3.children = items;
  return React4(View, obj3);
});