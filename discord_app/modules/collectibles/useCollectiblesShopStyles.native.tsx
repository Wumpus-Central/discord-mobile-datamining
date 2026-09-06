// discord_app/modules/collectibles/useCollectiblesShopStyles.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles.tsx";
import tinycolor from "../../../_runtime/07552_tinycolor.js";

const importDefaultResultResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = tinycolor(nativeDefault.unsafe_rawColors.WHITE).saturate(1);
const importDefaultResult1Result = tinycolor(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default createUseCollectiblesShopStylesDefault({
  dark: tinycolor(nativeDefault.unsafe_rawColors.BLACK).saturate(1),
  light: saturateResult,
});
