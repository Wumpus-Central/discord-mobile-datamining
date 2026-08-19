// discord_app/modules/premium/powerups/native/GuildPowerupsBoostGem.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import BoostGemDefault from "images/BoostGem.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { width: 100, height: 100, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_SECONDARY_ALT, alignItems: "center", justifyContent: "center", alignSelf: "center" };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostGem.tsx");

export default function GuildPowerupsBoostGem(arg0) {
  ({ style, gemWidth, gemHeight } = arg0);
  const obj = { style: null, children: null };
  const items = [callback().boostGemContainer, style];
  obj[0] = items;
  obj[1] = jsx(BoostGemDefault, { width: gemWidth, height: gemHeight });
  return <View style={null}>{null}</View>;
};