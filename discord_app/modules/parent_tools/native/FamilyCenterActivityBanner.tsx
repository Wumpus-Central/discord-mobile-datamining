// discord_app/modules/parent_tools/native/FamilyCenterActivityBanner.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2397 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import FamilyCenterBannerButton from "FamilyCenterBannerButton.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function FamilyCenterActivityBannerButton() {
  const tmp = closure_7();
  const hasActiveLinks = useUserLinks.useHasActiveLinks();
  const tmp5 = useIsInAdultAgeGroupDefault();
  let tmp6 = null;
  if (!obj2.useHasMaxConnections()) {
    if (tmp5) {
      tmp6 = null;
    }
    const obj3 = { style: tmp.container, children: null };
    let tmp7Result1 = FamilyCenterBannerButton;
    tmp7Result1 = hasOwnProperty(
      tmp5 ? tmp7Result1.FamilyCenterParentQRCodeButton : tmp7Result1.FamilyCenterTeenQRCodeButton,
      {},
    );
    obj3.children = tmp7Result1;
    hasOwnProperty(React3, obj3);
  }
  return tmp6;
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(4639);
let closure_7 = createStyles.createStyles({ container: { width: "100%" } });
createStyles = fn(4639);
let obj3 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    marginTop: 16,
    padding: 24,
    alignItems: "center",
    borderRadius: nativeDefault.radii.md,
    elevation: 2,
  },
  art: null,
  header: null,
  description: null,
};
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginTop: 16,
  padding: 24,
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
  elevation: 2,
};
obj3.art = { maxWidth: 243, maxHeight: 119, marginBottom: nativeDefault.space.PX_8 };
let obj5 = { maxWidth: 243, maxHeight: 119, marginBottom: nativeDefault.space.PX_8 };
obj3.header = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj3.description = { textAlign: "center" };
let closure_9 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default function FamilyCenterActivityBanner() {
  const tmp4 = closure_9();
  const tmp3 = useIsInAdultAgeGroupDefault();
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  const intl = util.intl;
  const obj2 = useAgeSpecificText;
  const intl2 = util.intl;
  const ageSpecificText = obj2.useAgeSpecificText(intl.string(_modDef2397["T7GyW+"]), intl2.string(_modDef2397.goKE2b));
  const stringResult = intl.string(_modDef2397["T7GyW+"]);
  const intl3 = util.intl;
  const obj3 = useAgeSpecificText;
  const intl4 = util.intl;
  const obj4 = { style: tmp4.container, children: null };
  const obj5 = { source: null, style: null };
  const ageSpecificText1 = obj3.useAgeSpecificText(
    intl3.format(_modDef2397.MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" }),
    intl4.format(_modDef2397.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }),
  );
  obj5.source = importDefault(tmp3 ? 14983 : 14984);
  obj5.style = tmp4.art;
  const items = [
    hasOwnProperty(React4, obj5),
    hasOwnProperty(Text_Text.Text, { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText }),
    hasOwnProperty(Text_Text.Text, {
      style: tmp4.description,
      variant: "text-sm/medium",
      color: "text-muted",
      children: ageSpecificText1,
    }),
  ];
  let tmp13Result = null;
  if (!hasMaxConnections) {
    tmp13Result = hasOwnProperty(FamilyCenterActivityBannerButton, {});
  }
  items[3] = tmp13Result;
  obj4.children = items;
  return timestampProducer(React3, obj4);
}
