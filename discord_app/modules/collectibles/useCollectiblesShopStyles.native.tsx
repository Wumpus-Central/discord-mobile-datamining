// === Module 10828: useCollectiblesShopStyles ===

// Module 10828 (useCollectiblesShopStyles)
import nativeDefault from "native" /* 587 */;
import createUseCollectiblesShopStylesDefault from "createUseCollectiblesShopStyles" /* 10829 */;
import module_7076_mod from "module_7076" /* 7076 */;
import size from "module_2" /* 2 */;

let module_7076 = module_7076_mod;
const importDefaultResultResult = module_7076(nativeDefault.unsafe_rawColors.WHITE);
const saturateResult = importDefaultResultResult.saturate(1);
module_7076 = module_7076_mod;
const importDefaultResult1Result = module_7076(nativeDefault.unsafe_rawColors.BLACK);
const saturateResult1 = importDefaultResult1Result.saturate(1);
const tmp6 = createUseCollectiblesShopStylesDefault({ dark: saturateResult1, light: saturateResult });
const result = size.fileFinishedImporting("modules/collectibles/useCollectiblesShopStyles.native.tsx");

export default tmp6;