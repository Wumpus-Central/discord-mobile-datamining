// === Module 6401: CheckpointCardColors ===

// Module 6401 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6399 */;
import _modDef6402 from "module_6402" /* 6402 */;
import _modDef6403 from "module_6403" /* 6403 */;
import _modDef6404 from "module_6404" /* 6404 */;
import _modDef6405 from "module_6405" /* 6405 */;
import _modDef6406 from "module_6406" /* 6406 */;
import _modDef6407 from "module_6407" /* 6407 */;
import _modDef6408 from "module_6408" /* 6408 */;
import _modDef6409 from "module_6409" /* 6409 */;
import _modDef6410 from "module_6410" /* 6410 */;
import _modDef6411 from "module_6411" /* 6411 */;
import _modDef6412 from "module_6412" /* 6412 */;
import _modDef6413 from "module_6413" /* 6413 */;
import _modDef6414 from "module_6414" /* 6414 */;
import _modDef6415 from "module_6415" /* 6415 */;
import _modDef6416 from "module_6416" /* 6416 */;
import _modDef6417 from "module_6417" /* 6417 */;
import _modDef6418 from "module_6418" /* 6418 */;
import _modDef6419 from "module_6419" /* 6419 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6420 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6405, clydeLogoImage: _modDef6406, clydeLogoStaticImage: _modDef6407 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6402, clydeLogoImage: _modDef6403, clydeLogoStaticImage: _modDef6404 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6408, clydeLogoImage: _modDef6409, clydeLogoStaticImage: _modDef6410 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6411, clydeLogoImage: _modDef6412, clydeLogoStaticImage: _modDef6413 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6414, clydeLogoImage: _modDef6415, clydeLogoStaticImage: _modDef6416 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6417, clydeLogoImage: _modDef6418, clydeLogoStaticImage: _modDef6419 } };
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