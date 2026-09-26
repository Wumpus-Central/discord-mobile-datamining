// discord_app/modules/user_settings/premium/native/PremiumFeaturesLogo.tsx
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import _modDef6857 from "../../../../../_runtime/metro/06857__.js";
import _modDef8686 from "../../../../../_runtime/metro/08686__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef8686;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef6857;
  }
  const obj = {
    accessible: true,
    accessibilityLabel: null,
    accessibilityRole: "header",
    style: null,
    resizeMode: "contain",
    source: null,
  };
  const tmpResult = tmp(5899);
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
