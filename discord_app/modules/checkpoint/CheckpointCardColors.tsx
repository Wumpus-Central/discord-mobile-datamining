// === Module 6248: CheckpointCardColors ===

// Module 6248 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6246 */;
import _modDef6249 from "module_6249" /* 6249 */;
import _modDef6250 from "module_6250" /* 6250 */;
import _modDef6251 from "module_6251" /* 6251 */;
import _modDef6252 from "module_6252" /* 6252 */;
import _modDef6253 from "module_6253" /* 6253 */;
import _modDef6254 from "module_6254" /* 6254 */;
import _modDef6255 from "module_6255" /* 6255 */;
import _modDef6256 from "module_6256" /* 6256 */;
import _modDef6257 from "module_6257" /* 6257 */;
import _modDef6258 from "module_6258" /* 6258 */;
import _modDef6259 from "module_6259" /* 6259 */;
import _modDef6260 from "module_6260" /* 6260 */;
import _modDef6261 from "module_6261" /* 6261 */;
import _modDef6262 from "module_6262" /* 6262 */;
import _modDef6263 from "module_6263" /* 6263 */;
import _modDef6264 from "module_6264" /* 6264 */;
import _modDef6265 from "module_6265" /* 6265 */;
import _modDef6266 from "module_6266" /* 6266 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6267 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6252, clydeLogoImage: _modDef6253, clydeLogoStaticImage: _modDef6254 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6249, clydeLogoImage: _modDef6250, clydeLogoStaticImage: _modDef6251 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6255, clydeLogoImage: _modDef6256, clydeLogoStaticImage: _modDef6257 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6258, clydeLogoImage: _modDef6259, clydeLogoStaticImage: _modDef6260 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6261, clydeLogoImage: _modDef6262, clydeLogoStaticImage: _modDef6263 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6264, clydeLogoImage: _modDef6265, clydeLogoStaticImage: _modDef6266 } };
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