// discord_app/modules/premium/powerups/native/GuildPowerupsBoostGem.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import BoostGemDefault from "images/BoostGem.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { boostGemContainer: null };
let size = {
  width: 100,
  height: 100,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
};
obj.boostGemContainer = size;
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostGem.tsx");

export default function GuildPowerupsBoostGem(arg0) {
  ({ style, gemWidth, gemHeight } = arg0);
  const obj = { style: null, children: null };
  const items = [closure_4().boostGemContainer, style];
  obj.style = items;
  obj.children = jsx(BoostGemDefault, { width: gemWidth, height: gemHeight });
  return <View style={null}>{null}</View>;
}
