// discord_app/modules/user_settings/premium/native/PremiumFeaturesLogo.tsx
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import _modDef7615 from "../../../../../_runtime/metro/07615__.js";
import _modDef9907 from "../../../../../_runtime/metro/09907__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const PremiumTypes = fn(1386).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9907;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7615;
  }
  const obj = {
    accessible: true,
    accessibilityLabel: null,
    accessibilityRole: "header",
    style: null,
    resizeMode: "contain",
    source: null,
  };
  const tmpResult = tmp(5712);
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
