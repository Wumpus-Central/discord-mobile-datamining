// === Module 5993: CheckpointCardColors ===

// Module 5993 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 5991 */;
import _modDef5994 from "module_5994" /* 5994 */;
import _modDef5995 from "module_5995" /* 5995 */;
import _modDef5996 from "module_5996" /* 5996 */;
import _modDef5997 from "module_5997" /* 5997 */;
import _modDef5998 from "module_5998" /* 5998 */;
import _modDef5999 from "module_5999" /* 5999 */;
import _modDef6000 from "module_6000" /* 6000 */;
import _modDef6001 from "module_6001" /* 6001 */;
import _modDef6002 from "module_6002" /* 6002 */;
import _modDef6003 from "module_6003" /* 6003 */;
import _modDef6004 from "module_6004" /* 6004 */;
import _modDef6005 from "module_6005" /* 6005 */;
import _modDef6006 from "module_6006" /* 6006 */;
import _modDef6007 from "module_6007" /* 6007 */;
import _modDef6008 from "module_6008" /* 6008 */;
import _modDef6009 from "module_6009" /* 6009 */;
import _modDef6010 from "module_6010" /* 6010 */;
import _modDef6011 from "module_6011" /* 6011 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 6012 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef5997, clydeLogoImage: _modDef5998, clydeLogoStaticImage: _modDef5999 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef5994, clydeLogoImage: _modDef5995, clydeLogoStaticImage: _modDef5996 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef6000, clydeLogoImage: _modDef6001, clydeLogoStaticImage: _modDef6002 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef6003, clydeLogoImage: _modDef6004, clydeLogoStaticImage: _modDef6005 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef6006, clydeLogoImage: _modDef6007, clydeLogoStaticImage: _modDef6008 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef6009, clydeLogoImage: _modDef6010, clydeLogoStaticImage: _modDef6011 } };
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