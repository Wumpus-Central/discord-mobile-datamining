// === Module 6091: CheckpointCardColors ===

// Module 6091 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6089 */;
import _modDef6092 from "module_6092" /* 6092 */;
import _modDef6093 from "module_6093" /* 6093 */;
import _modDef6094 from "module_6094" /* 6094 */;
import _modDef6095 from "module_6095" /* 6095 */;
import _modDef6096 from "module_6096" /* 6096 */;
import _modDef6097 from "module_6097" /* 6097 */;
import _modDef6098 from "module_6098" /* 6098 */;
import _modDef6099 from "module_6099" /* 6099 */;
import _modDef6100 from "module_6100" /* 6100 */;
import _modDef6101 from "module_6101" /* 6101 */;
import _modDef6102 from "module_6102" /* 6102 */;
import _modDef6103 from "module_6103" /* 6103 */;
import _modDef6104 from "module_6104" /* 6104 */;
import _modDef6105 from "module_6105" /* 6105 */;
import _modDef6106 from "module_6106" /* 6106 */;
import _modDef6107 from "module_6107" /* 6107 */;
import _modDef6108 from "module_6108" /* 6108 */;
import _modDef6109 from "module_6109" /* 6109 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6110 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6095, clydeLogoImage: _modDef6096, clydeLogoStaticImage: _modDef6097 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6092, clydeLogoImage: _modDef6093, clydeLogoStaticImage: _modDef6094 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6098, clydeLogoImage: _modDef6099, clydeLogoStaticImage: _modDef6100 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6101, clydeLogoImage: _modDef6102, clydeLogoStaticImage: _modDef6103 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6104, clydeLogoImage: _modDef6105, clydeLogoStaticImage: _modDef6106 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6107, clydeLogoImage: _modDef6108, clydeLogoStaticImage: _modDef6109 } };
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