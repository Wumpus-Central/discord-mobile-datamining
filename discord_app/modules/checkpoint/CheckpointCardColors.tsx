// === Module 6296: CheckpointCardColors ===

// Module 6296 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6294 */;
import _modDef6297 from "module_6297" /* 6297 */;
import _modDef6298 from "module_6298" /* 6298 */;
import _modDef6299 from "module_6299" /* 6299 */;
import _modDef6300 from "module_6300" /* 6300 */;
import _modDef6301 from "module_6301" /* 6301 */;
import _modDef6302 from "module_6302" /* 6302 */;
import _modDef6303 from "module_6303" /* 6303 */;
import _modDef6304 from "module_6304" /* 6304 */;
import _modDef6305 from "module_6305" /* 6305 */;
import _modDef6306 from "module_6306" /* 6306 */;
import _modDef6307 from "module_6307" /* 6307 */;
import _modDef6308 from "module_6308" /* 6308 */;
import _modDef6309 from "module_6309" /* 6309 */;
import _modDef6310 from "module_6310" /* 6310 */;
import _modDef6311 from "module_6311" /* 6311 */;
import _modDef6312 from "module_6312" /* 6312 */;
import _modDef6313 from "module_6313" /* 6313 */;
import _modDef6314 from "module_6314" /* 6314 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6315 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6300, clydeLogoImage: _modDef6301, clydeLogoStaticImage: _modDef6302 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6297, clydeLogoImage: _modDef6298, clydeLogoStaticImage: _modDef6299 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6303, clydeLogoImage: _modDef6304, clydeLogoStaticImage: _modDef6305 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6306, clydeLogoImage: _modDef6307, clydeLogoStaticImage: _modDef6308 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6309, clydeLogoImage: _modDef6310, clydeLogoStaticImage: _modDef6311 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6312, clydeLogoImage: _modDef6313, clydeLogoStaticImage: _modDef6314 } };
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