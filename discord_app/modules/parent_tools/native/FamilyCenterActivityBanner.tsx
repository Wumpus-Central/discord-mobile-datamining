// discord_app/modules/parent_tools/native/FamilyCenterActivityBanner.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../FamilyCenter.messages.js";
import { useAgeSpecificText } from "../hooks/useAgeSpecificText.tsx";
import { useIsInAdultAgeGroup } from "../hooks/useIsInAdultAgeGroup.tsx";
import { useUserIdsForLinkStatus } from "../hooks/useUserLinks.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
function FamilyCenterActivityBannerButton() {
  let obj = useUserIdsForLinkStatus;
  const hasActiveLinks = obj.useHasActiveLinks();
  const tmp5 = useIsInAdultAgeGroup();
  const tmp = callback();
  const tmp2 = require;
  let tmp6 = null;
  if (!obj2.useHasMaxConnections()) {
    if (tmp5) {
      tmp6 = null;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    let tmp7Result = tmp2(14188);
    tmp7Result = tmp7(tmp5 ? tmp7Result.FamilyCenterParentQRCodeButton : tmp7Result.FamilyCenterTeenQRCodeButton, {});
    obj[1] = tmp7Result;
    tmp7Result = tmp7(closure_3, obj);
    const tmp8 = closure_3;
  }
  return tmp6;
}
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { width: "100%" } });
createCacheKey = { container: null, art: null, header: null, description: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, marginTop: 16, padding: 24, alignItems: "center", borderRadius: require("Themes").radii.md, elevation: 2 };
createCacheKey[0] = createCacheKey;
createCacheKey = { maxWidth: 243, maxHeight: 119, marginBottom: require("Themes").space.PX_8 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: require("Themes").space.PX_8, textAlign: "center" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginBottom: require("Themes").space.PX_8, textAlign: "center" };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityBanner.tsx");

export default function FamilyCenterActivityBanner() {
  const tmp4 = createCacheKey();
  let obj = useUserIdsForLinkStatus;
  const hasMaxConnections = obj.useHasMaxConnections();
  let obj1 = useAgeSpecificText;
  const intl = getSystemLocale.intl;
  const tmp = importDefault;
  const tmp3 = useIsInAdultAgeGroup();
  const intl2 = getSystemLocale.intl;
  const ageSpecificText = obj1.useAgeSpecificText(intl.string(messagesProxy["T7GyW+"]), intl2.string(messagesProxy.goKE2b));
  let obj2 = useAgeSpecificText;
  const intl3 = getSystemLocale.intl;
  const stringResult = intl.string(messagesProxy["T7GyW+"]);
  const intl4 = getSystemLocale.intl;
  obj = { style: tmp4.container, children: null };
  obj = { source: null, style: null };
  const ageSpecificText1 = obj2.useAgeSpecificText(intl3.format(messagesProxy.MXjDSv, { articleLink: "https://support.discord.com/hc/articles/14155060633623" }), intl4.format(messagesProxy.EMCf6j, { articleLink: "https://support.discord.com/hc/articles/14155043715735" }));
  obj[0] = tmp(tmp3 ? 14195 : 14196);
  obj[1] = tmp4.art;
  const items = [closure_5(closure_4, obj), , , ];
  obj1 = { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items[1] = closure_5(Text.Text, obj1);
  obj2 = { style: tmp4.description, variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 };
  items[2] = closure_5(Text.Text, obj2);
  let tmp13Result = null;
  if (!hasMaxConnections) {
    tmp13Result = tmp13(FamilyCenterActivityBannerButton, {});
  }
  items[3] = tmp13Result;
  obj[1] = items;
  return closure_6(closure_3, obj);
};