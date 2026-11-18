// discord_app/modules/user_settings/premium/native/PremiumFeaturesLogo.tsx
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import _modDef9030 from "../../../../../_runtime/metro/09030__.js";
import _modDef9405 from "../../../../../_runtime/metro/09405__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const PremiumTypes = fn(1390).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9405;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef9030;
  }
  const obj = {
    accessible: true,
    accessibilityLabel: null,
    accessibilityRole: "header",
    style: null,
    resizeMode: "contain",
    source: null,
  };
  const tmpResult = tmp(5510);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return (
    <tmpResult
      accessible
      accessibilityLabel={null}
      accessibilityRole="header"
      style={null}
      resizeMode="contain"
      source={null}
    />
  );
}
