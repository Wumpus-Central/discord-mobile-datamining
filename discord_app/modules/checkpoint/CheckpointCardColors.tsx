// === Module 5901: CheckpointCardColors ===

// Module 5901 (CheckpointCardColors)
import CheckpointCardColorPalette from "CheckpointCardColorPalette" /* 5899 */;
import _modDef5902 from "module_5902" /* 5902 */;
import _modDef5903 from "module_5903" /* 5903 */;
import _modDef5904 from "module_5904" /* 5904 */;
import _modDef5905 from "module_5905" /* 5905 */;
import _modDef5906 from "module_5906" /* 5906 */;
import _modDef5907 from "module_5907" /* 5907 */;
import _modDef5908 from "module_5908" /* 5908 */;
import _modDef5909 from "module_5909" /* 5909 */;
import _modDef5910 from "module_5910" /* 5910 */;
import _modDef5911 from "module_5911" /* 5911 */;
import _modDef5912 from "module_5912" /* 5912 */;
import _modDef5913 from "module_5913" /* 5913 */;
import _modDef5914 from "module_5914" /* 5914 */;
import _modDef5915 from "module_5915" /* 5915 */;
import _modDef5916 from "module_5916" /* 5916 */;
import _modDef5917 from "module_5917" /* 5917 */;
import _modDef5918 from "module_5918" /* 5918 */;
import _modDef5919 from "module_5919" /* 5919 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 5920 */;
import size from "module_2" /* 2 */;

const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef5905, clydeLogoImage: _modDef5906, clydeLogoStaticImage: _modDef5907 };
const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef5902, clydeLogoImage: _modDef5903, clydeLogoStaticImage: _modDef5904 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef5908, clydeLogoImage: _modDef5909, clydeLogoStaticImage: _modDef5910 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef5911, clydeLogoImage: _modDef5912, clydeLogoStaticImage: _modDef5913 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef5914, clydeLogoImage: _modDef5915, clydeLogoStaticImage: _modDef5916 };
let closure_3 = { [CheckpointCardColorPalette.CheckpointCardColorPalette.NONE]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.CYAN]: obj2, [CheckpointCardColorPalette.CheckpointCardColorPalette.PURPLE]: obj, [CheckpointCardColorPalette.CheckpointCardColorPalette.PINK]: obj3, [CheckpointCardColorPalette.CheckpointCardColorPalette.GREEN]: obj4, [CheckpointCardColorPalette.CheckpointCardColorPalette.RED]: obj5, [CheckpointCardColorPalette.CheckpointCardColorPalette.YELLOW]: { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef5917, clydeLogoImage: _modDef5918, clydeLogoStaticImage: _modDef5919 } };
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