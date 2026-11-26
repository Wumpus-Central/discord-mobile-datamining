// === Module 6422: CheckpointCardColors ===

// Module 6422 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6420 */;
import _modDef6423 from "module_6423" /* 6423 */;
import _modDef6424 from "module_6424" /* 6424 */;
import _modDef6425 from "module_6425" /* 6425 */;
import _modDef6426 from "module_6426" /* 6426 */;
import _modDef6427 from "module_6427" /* 6427 */;
import _modDef6428 from "module_6428" /* 6428 */;
import _modDef6429 from "module_6429" /* 6429 */;
import _modDef6430 from "module_6430" /* 6430 */;
import _modDef6431 from "module_6431" /* 6431 */;
import _modDef6432 from "module_6432" /* 6432 */;
import _modDef6433 from "module_6433" /* 6433 */;
import _modDef6434 from "module_6434" /* 6434 */;
import _modDef6435 from "module_6435" /* 6435 */;
import _modDef6436 from "module_6436" /* 6436 */;
import _modDef6437 from "module_6437" /* 6437 */;
import _modDef6438 from "module_6438" /* 6438 */;
import _modDef6439 from "module_6439" /* 6439 */;
import _modDef6440 from "module_6440" /* 6440 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6441 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6426, clydeLogoImage: _modDef6427, clydeLogoStaticImage: _modDef6428 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6423, clydeLogoImage: _modDef6424, clydeLogoStaticImage: _modDef6425 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6429, clydeLogoImage: _modDef6430, clydeLogoStaticImage: _modDef6431 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6432, clydeLogoImage: _modDef6433, clydeLogoStaticImage: _modDef6434 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6435, clydeLogoImage: _modDef6436, clydeLogoStaticImage: _modDef6437 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6438, clydeLogoImage: _modDef6439, clydeLogoStaticImage: _modDef6440 } };
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCardColors.tsx");

export function getCharacterCardColorPalette(stateFromStores) {
  if (null == stateFromStores) {
    let NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
  } else {
    NONE = CheckpointTraitConfig.CHECKPOINT_BASE_TO_CARD_COLOR_PALETTE[stateFromStores.base];
    if (NONE == null) {
      NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
    }
  }
  return NONE;
}
export function getCardColors(characterCardColorPalette) {
  let tmp = closure_3[characterCardColorPalette];
  if (tmp == null) {
    tmp = obj2;
  }
  return tmp;
}