// === Module 6391: CheckpointCardColors ===

// Module 6391 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6389 */;
import _modDef6392 from "module_6392" /* 6392 */;
import _modDef6393 from "module_6393" /* 6393 */;
import _modDef6394 from "module_6394" /* 6394 */;
import _modDef6395 from "module_6395" /* 6395 */;
import _modDef6396 from "module_6396" /* 6396 */;
import _modDef6397 from "module_6397" /* 6397 */;
import _modDef6398 from "module_6398" /* 6398 */;
import _modDef6399 from "module_6399" /* 6399 */;
import _modDef6400 from "module_6400" /* 6400 */;
import _modDef6401 from "module_6401" /* 6401 */;
import _modDef6402 from "module_6402" /* 6402 */;
import _modDef6403 from "module_6403" /* 6403 */;
import _modDef6404 from "module_6404" /* 6404 */;
import _modDef6405 from "module_6405" /* 6405 */;
import _modDef6406 from "module_6406" /* 6406 */;
import _modDef6407 from "module_6407" /* 6407 */;
import _modDef6408 from "module_6408" /* 6408 */;
import _modDef6409 from "module_6409" /* 6409 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6410 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6395, clydeLogoImage: _modDef6396, clydeLogoStaticImage: _modDef6397 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6392, clydeLogoImage: _modDef6393, clydeLogoStaticImage: _modDef6394 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6398, clydeLogoImage: _modDef6399, clydeLogoStaticImage: _modDef6400 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6401, clydeLogoImage: _modDef6402, clydeLogoStaticImage: _modDef6403 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6404, clydeLogoImage: _modDef6405, clydeLogoStaticImage: _modDef6406 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6407, clydeLogoImage: _modDef6408, clydeLogoStaticImage: _modDef6409 } };
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