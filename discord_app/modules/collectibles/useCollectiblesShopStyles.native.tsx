// discord_app/modules/collectibles/useCollectiblesShopStyles.native.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles.tsx";
import module_7063_mod from "../../../_runtime/metro/07063__.js";
import size from "../../../_runtime/metro/00002__.js";

let module_7063 = module_7063_mod;
const importDefaultResultResult = module_7063(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7063 = module_7063_mod;
const importDefaultResult1Result = module_7063(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;
