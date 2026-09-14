// discord_app/modules/collectibles/useCollectiblesShopStyles.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles.tsx";
import tinycolor_mod from "../../../_runtime/07655_tinycolor.js";

let tinycolor = tinycolor_mod;
const importDefaultResultResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE);
let tinycolor = tinycolor_mod;
const saturateResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE).saturate(1);
const importDefaultResult1Result = tinycolor(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default createUseCollectiblesShopStylesDefault({
  dark: tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1),
  light: saturateResult,
});
