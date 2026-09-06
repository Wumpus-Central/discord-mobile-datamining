// === Module 14875: FamilyCenterActivityBanner ===

// Module 14875 (FamilyCenterActivityBanner)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import Text_Text from "Text/Text" /* 4556 */;
import useUserLinks from "useUserLinks" /* 8645 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8646 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11919 */;
import noop from "module_19" /* 19 */;

const FamilyCenterBannerButton = tmp2(14876);
require = fn;
function FamilyCenterActivityBannerButton() {
  let obj = useUserLinks;
  const hasActiveLinks = obj.useHasActiveLinks();
  const tmp5 = useIsInAdultAgeGroupDefault();
  const tmp = closure_7();
  let tmp6 = null;
  if (!obj2.useHasMaxConnections()) {
    if (tmp5) {
      tmp6 = null;
    }
    obj = { style: tmp.container, children: null };
    let tmp7Result = FamilyCenterBannerButton;
    tmp7Result = tmp7(tmp5 ? tmp7Result.FamilyCenterParentQRCodeButton : tmp7Result.FamilyCenterTeenQRCodeButton, {});
    obj.children = tmp7Result;
    tmp7Result = tmp7(React3, obj);
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ container: { width: "100%" } });
fn(4560);
createStyles = { container: null, art: null, header: null, description: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: 16, padding: 24, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2 };
createStyles.container = createStyles;
createStyles = { maxWidth: 243, maxHeight: 119, marginBottom: nativeDefault.space.PX_8 };
createStyles.art = createStyles;
createStyles.header = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.description = { textAlign: "center" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default function FamilyCenterActivityBanner() {
  const tmp4 = closure_9();
  let obj = useUserLinks;
  const hasMaxConnections = obj.useHasMaxConnections();
  let obj1 = useAgeSpecificText;
  const intl = util.intl;
  const tmp = importDefault;
  const tmp3 = useIsInAdultAgeGroupDefault();
  const intl2 = util.intl;
  const ageSpecificText = obj1.useAgeSpecificText(intl.string(_modDef2396["T7GyW+"]), intl2.string(_modDef2396.goKE2b));
  let obj2 = useAgeSpecificText;
  const intl3 = util.intl;
  const stringResult = intl.string(_modDef2396["T7GyW+"]);
  const intl4 = util.intl;
  obj = { style: tmp4.container, children: null };
  obj = { source: null, style: null };
  const ageSpecificText1 = obj2.useAgeSpecificText(intl3.format(_modDef2396.MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" }), intl4.format(_modDef2396.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }));
  obj.source = tmp(tmp3 ? 14883 : 14884);
  obj.style = tmp4.art;
  const items = [hasOwnProperty(React4, obj), , , ];
  obj1 = { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items[1] = hasOwnProperty(Text_Text.Text, obj1);
  obj2 = { style: tmp4.description, variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 };
  items[2] = hasOwnProperty(Text_Text.Text, obj2);
  let tmp13Result = null;
  if (!hasMaxConnections) {
    tmp13Result = tmp13(FamilyCenterActivityBannerButton, {});
  }
  items[3] = tmp13Result;
  obj.children = items;
  return timestampProducer(React3, obj);
};