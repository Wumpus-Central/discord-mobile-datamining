// === Module 6211: CheckpointCardColors ===

// Module 6211 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 6209 */;
import _modDef6212 from "module_6212" /* 6212 */;
import _modDef6213 from "module_6213" /* 6213 */;
import _modDef6214 from "module_6214" /* 6214 */;
import _modDef6215 from "module_6215" /* 6215 */;
import _modDef6216 from "module_6216" /* 6216 */;
import _modDef6217 from "module_6217" /* 6217 */;
import _modDef6218 from "module_6218" /* 6218 */;
import _modDef6219 from "module_6219" /* 6219 */;
import _modDef6220 from "module_6220" /* 6220 */;
import _modDef6221 from "module_6221" /* 6221 */;
import _modDef6222 from "module_6222" /* 6222 */;
import _modDef6223 from "module_6223" /* 6223 */;
import _modDef6224 from "module_6224" /* 6224 */;
import _modDef6225 from "module_6225" /* 6225 */;
import _modDef6226 from "module_6226" /* 6226 */;
import _modDef6227 from "module_6227" /* 6227 */;
import _modDef6228 from "module_6228" /* 6228 */;
import _modDef6229 from "module_6229" /* 6229 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6230 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef6215, clydeLogoImage: _modDef6216, clydeLogoStaticImage: _modDef6217 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef6212, clydeLogoImage: _modDef6213, clydeLogoStaticImage: _modDef6214 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6218, clydeLogoImage: _modDef6219, clydeLogoStaticImage: _modDef6220 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6221, clydeLogoImage: _modDef6222, clydeLogoStaticImage: _modDef6223 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6224, clydeLogoImage: _modDef6225, clydeLogoStaticImage: _modDef6226 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6227, clydeLogoImage: _modDef6228, clydeLogoStaticImage: _modDef6229 } };
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