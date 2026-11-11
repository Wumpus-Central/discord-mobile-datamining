// === Module 6338: CheckpointCardColors ===

// Module 6338 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6336 */;
import _modDef6339 from "module_6339" /* 6339 */;
import _modDef6340 from "module_6340" /* 6340 */;
import _modDef6341 from "module_6341" /* 6341 */;
import _modDef6342 from "module_6342" /* 6342 */;
import _modDef6343 from "module_6343" /* 6343 */;
import _modDef6344 from "module_6344" /* 6344 */;
import _modDef6345 from "module_6345" /* 6345 */;
import _modDef6346 from "module_6346" /* 6346 */;
import _modDef6347 from "module_6347" /* 6347 */;
import _modDef6348 from "module_6348" /* 6348 */;
import _modDef6349 from "module_6349" /* 6349 */;
import _modDef6350 from "module_6350" /* 6350 */;
import _modDef6351 from "module_6351" /* 6351 */;
import _modDef6352 from "module_6352" /* 6352 */;
import _modDef6353 from "module_6353" /* 6353 */;
import _modDef6354 from "module_6354" /* 6354 */;
import _modDef6355 from "module_6355" /* 6355 */;
import _modDef6356 from "module_6356" /* 6356 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6357 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6342, clydeLogoImage: _modDef6343, clydeLogoStaticImage: _modDef6344 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6339, clydeLogoImage: _modDef6340, clydeLogoStaticImage: _modDef6341 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6345, clydeLogoImage: _modDef6346, clydeLogoStaticImage: _modDef6347 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6348, clydeLogoImage: _modDef6349, clydeLogoStaticImage: _modDef6350 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6351, clydeLogoImage: _modDef6352, clydeLogoStaticImage: _modDef6353 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6354, clydeLogoImage: _modDef6355, clydeLogoStaticImage: _modDef6356 } };
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCardColors.tsx");

export function getCharacterCardColorPalette(character) {
  if (null == character) {
    let NONE = CheckpointCardColorPalette.CheckpointCardColorPalette.NONE;
  } else {
    NONE = CheckpointTraitConfig.CHECKPOINT_BASE_TO_CARD_COLOR_PALETTE[character.base];
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