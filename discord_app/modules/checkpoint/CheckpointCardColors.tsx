// === Module 6225: CheckpointCardColors ===

// Module 6225 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6223 */;
import _modDef6226 from "module_6226" /* 6226 */;
import _modDef6227 from "module_6227" /* 6227 */;
import _modDef6228 from "module_6228" /* 6228 */;
import _modDef6229 from "module_6229" /* 6229 */;
import _modDef6230 from "module_6230" /* 6230 */;
import _modDef6231 from "module_6231" /* 6231 */;
import _modDef6232 from "module_6232" /* 6232 */;
import _modDef6233 from "module_6233" /* 6233 */;
import _modDef6234 from "module_6234" /* 6234 */;
import _modDef6235 from "module_6235" /* 6235 */;
import _modDef6236 from "module_6236" /* 6236 */;
import _modDef6237 from "module_6237" /* 6237 */;
import _modDef6238 from "module_6238" /* 6238 */;
import _modDef6239 from "module_6239" /* 6239 */;
import _modDef6240 from "module_6240" /* 6240 */;
import _modDef6241 from "module_6241" /* 6241 */;
import _modDef6242 from "module_6242" /* 6242 */;
import _modDef6243 from "module_6243" /* 6243 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6244 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6229, clydeLogoImage: _modDef6230, clydeLogoStaticImage: _modDef6231 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6226, clydeLogoImage: _modDef6227, clydeLogoStaticImage: _modDef6228 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6232, clydeLogoImage: _modDef6233, clydeLogoStaticImage: _modDef6234 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6235, clydeLogoImage: _modDef6236, clydeLogoStaticImage: _modDef6237 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6238, clydeLogoImage: _modDef6239, clydeLogoStaticImage: _modDef6240 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6241, clydeLogoImage: _modDef6242, clydeLogoStaticImage: _modDef6243 } };
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