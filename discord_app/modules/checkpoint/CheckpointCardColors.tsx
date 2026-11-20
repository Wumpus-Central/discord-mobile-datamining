// === Module 5874: CheckpointCardColors ===

// Module 5874 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 5872 */;
import _modDef5875 from "module_5875" /* 5875 */;
import _modDef5876 from "module_5876" /* 5876 */;
import _modDef5877 from "module_5877" /* 5877 */;
import _modDef5878 from "module_5878" /* 5878 */;
import _modDef5879 from "module_5879" /* 5879 */;
import _modDef5880 from "module_5880" /* 5880 */;
import _modDef5881 from "module_5881" /* 5881 */;
import _modDef5882 from "module_5882" /* 5882 */;
import _modDef5883 from "module_5883" /* 5883 */;
import _modDef5884 from "module_5884" /* 5884 */;
import _modDef5885 from "module_5885" /* 5885 */;
import _modDef5886 from "module_5886" /* 5886 */;
import _modDef5887 from "module_5887" /* 5887 */;
import _modDef5888 from "module_5888" /* 5888 */;
import _modDef5889 from "module_5889" /* 5889 */;
import _modDef5890 from "module_5890" /* 5890 */;
import _modDef5891 from "module_5891" /* 5891 */;
import _modDef5892 from "module_5892" /* 5892 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 5893 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef5878, clydeLogoImage: _modDef5879, clydeLogoStaticImage: _modDef5880 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef5875, clydeLogoImage: _modDef5876, clydeLogoStaticImage: _modDef5877 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef5881, clydeLogoImage: _modDef5882, clydeLogoStaticImage: _modDef5883 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef5884, clydeLogoImage: _modDef5885, clydeLogoStaticImage: _modDef5886 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef5887, clydeLogoImage: _modDef5888, clydeLogoStaticImage: _modDef5889 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef5890, clydeLogoImage: _modDef5891, clydeLogoStaticImage: _modDef5892 } };
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