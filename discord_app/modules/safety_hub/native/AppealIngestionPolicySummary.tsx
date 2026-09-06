// === Module 11899: AppealIngestionPolicySummary ===

// Module 11899 (AppealIngestionPolicySummary)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import Text_Text from "Text/Text" /* 4556 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8418 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { sectionTitle: { marginBottom: 8 }, policy: { marginBottom: 16 }, borderColor: null, userContainer: null };
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.borderColor = createStyles;
createStyles.userContainer = { marginTop: 8, justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 18 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionPolicySummary.tsx");

export default function AppealIngestionPolicySummary(classification) {
  classification = classification.classification;
  const tmp = closure_5();
  let obj = SafetyHubUtils;
  let description;
  if (classification != null) {
    description = classification.description;
  }
  const capitalizeTextResult = obj.capitalizeText(description);
  obj = { style: tmp.policy, children: null };
  const tmp2Result = ColorUtils;
  obj = { style: tmp.sectionTitle, variant: "text-sm/bold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.xsdcxh);
  const items = [React3(Text_Text.Text, obj), ];
  const obj1 = { style: null, children: React3(Text_Text.Text, { variant: "text-md/semibold", children: capitalizeTextResult }) };
  const items1 = [tmp.userContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj1.style = items1;
  items[1] = React3(View, obj1);
  obj.children = items;
  return React4(View, obj);
};