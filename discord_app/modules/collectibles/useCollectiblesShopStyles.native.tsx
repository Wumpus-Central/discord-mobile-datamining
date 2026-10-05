// === Module 10815: useCollectiblesShopStyles ===

// Module 10815 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 10816 */;
import module_7063_mod from "module_7063" /* 7063 */;
import size from "module_2" /* 2 */;

let module_7063 = module_7063_mod;
const importDefaultResultResult = module_7063(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7063 = module_7063_mod;
const importDefaultResult1Result = module_7063(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;