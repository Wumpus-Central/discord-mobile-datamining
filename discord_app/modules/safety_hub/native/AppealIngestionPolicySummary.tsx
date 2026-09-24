// discord_app/modules/safety_hub/native/AppealIngestionPolicySummary.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SafetyHubUtils from "../SafetyHubUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  sectionTitle: { marginBottom: 8 },
  policy: { marginBottom: 16 },
  borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY },
  userContainer: null,
};
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.userContainer = {
  marginTop: 8,
  justifyContent: "flex-start",
  minHeight: 40,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  padding: 18,
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionPolicySummary.tsx");

export default function AppealIngestionPolicySummary(classification) {
  classification = classification.classification;
  const tmp = closure_5();
  let description;
  if (classification != null) {
    description = classification.description;
  }
  const capitalizeTextResult = SafetyHubUtils.capitalizeText(description);
  const obj2 = { style: tmp.policy, children: null };
  const tmp2Result = ColorUtils;
  const obj3 = { style: tmp.sectionTitle, variant: "text-sm/bold", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.xsdcxh);
  const items = [React3(Text_Text.Text, obj3)];
  const obj4 = {
    style: null,
    children: React3(Text_Text.Text, { variant: "text-md/semibold", children: capitalizeTextResult }),
  };
  const items1 = [tmp.userContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj4.style = items1;
  items[1] = React3(View, obj4);
  obj2.children = items;
  return React4(View, obj2);
}
