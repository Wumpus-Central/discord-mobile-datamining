// === Module 6079: CheckpointCardColors ===

// Module 6079 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6077 */;
import _modDef6080 from "module_6080" /* 6080 */;
import _modDef6081 from "module_6081" /* 6081 */;
import _modDef6082 from "module_6082" /* 6082 */;
import _modDef6083 from "module_6083" /* 6083 */;
import _modDef6084 from "module_6084" /* 6084 */;
import _modDef6085 from "module_6085" /* 6085 */;
import _modDef6086 from "module_6086" /* 6086 */;
import _modDef6087 from "module_6087" /* 6087 */;
import _modDef6088 from "module_6088" /* 6088 */;
import _modDef6089 from "module_6089" /* 6089 */;
import _modDef6090 from "module_6090" /* 6090 */;
import _modDef6091 from "module_6091" /* 6091 */;
import _modDef6092 from "module_6092" /* 6092 */;
import _modDef6093 from "module_6093" /* 6093 */;
import _modDef6094 from "module_6094" /* 6094 */;
import _modDef6095 from "module_6095" /* 6095 */;
import _modDef6096 from "module_6096" /* 6096 */;
import _modDef6097 from "module_6097" /* 6097 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6098 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6083, clydeLogoImage: _modDef6084, clydeLogoStaticImage: _modDef6085 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6080, clydeLogoImage: _modDef6081, clydeLogoStaticImage: _modDef6082 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6086, clydeLogoImage: _modDef6087, clydeLogoStaticImage: _modDef6088 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6089, clydeLogoImage: _modDef6090, clydeLogoStaticImage: _modDef6091 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6092, clydeLogoImage: _modDef6093, clydeLogoStaticImage: _modDef6094 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6095, clydeLogoImage: _modDef6096, clydeLogoStaticImage: _modDef6097 } };
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