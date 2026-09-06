// === Module 12521: GuildPowerupsBoostGem ===

// Module 12521 (GuildPowerupsBoostGem)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import BoostGemDefault from "BoostGem" /* 12522 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { boostGemContainer: null };
let size = { width: 100, height: 100, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT, alignItems: "center", justifyContent: "center", alignSelf: "center" };
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
};