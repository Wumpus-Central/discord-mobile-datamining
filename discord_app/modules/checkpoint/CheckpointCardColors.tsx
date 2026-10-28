// === Module 8661: CheckpointCardColors ===

// Module 8661 (CheckpointCardColors)
import CheckpointCharacterBase from "CheckpointCharacterBase" /* 6078 */;
import _modDef8662 from "module_8662" /* 8662 */;
import _modDef8663 from "module_8663" /* 8663 */;
import _modDef8664 from "module_8664" /* 8664 */;
import _modDef8665 from "module_8665" /* 8665 */;
import _modDef8666 from "module_8666" /* 8666 */;
import _modDef8667 from "module_8667" /* 8667 */;
import _modDef8668 from "module_8668" /* 8668 */;
import _modDef8669 from "module_8669" /* 8669 */;
import _modDef8670 from "module_8670" /* 8670 */;
import _modDef8671 from "module_8671" /* 8671 */;
import _modDef8672 from "module_8672" /* 8672 */;
import _modDef8673 from "module_8673" /* 8673 */;
import _modDef8674 from "module_8674" /* 8674 */;
import _modDef8675 from "module_8675" /* 8675 */;
import _modDef8676 from "module_8676" /* 8676 */;
import _modDef8677 from "module_8677" /* 8677 */;
import _modDef8678 from "module_8678" /* 8678 */;
import _modDef8679 from "module_8679" /* 8679 */;
import size from "module_2" /* 2 */;

const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef8662, clydeLogoImage: _modDef8663, clydeLogoStaticImage: _modDef8664 };
const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef8665, clydeLogoImage: _modDef8666, clydeLogoStaticImage: _modDef8667 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef8668, clydeLogoImage: _modDef8669, clydeLogoStaticImage: _modDef8670 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef8671, clydeLogoImage: _modDef8672, clydeLogoStaticImage: _modDef8673 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef8674, clydeLogoImage: _modDef8675, clydeLogoStaticImage: _modDef8676 };
const obj6 = { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef8677, clydeLogoImage: _modDef8678, clydeLogoStaticImage: _modDef8679 };
let closure_1 = { [CheckpointCharacterBase.CheckpointCharacterBase.GALACTIC]: obj, [CheckpointCharacterBase.CheckpointCharacterBase.IRIDESCENT]: obj, [CheckpointCharacterBase.CheckpointCharacterBase.CHROME]: obj, [CheckpointCharacterBase.CheckpointCharacterBase.ICY]: obj2, [CheckpointCharacterBase.CheckpointCharacterBase.LIQUID]: obj2, [CheckpointCharacterBase.CheckpointCharacterBase.GLACIER]: obj2, [CheckpointCharacterBase.CheckpointCharacterBase.MIDNIGHT]: obj3, [CheckpointCharacterBase.CheckpointCharacterBase.PURPLE]: obj3, [CheckpointCharacterBase.CheckpointCharacterBase.COBALT]: obj3, [CheckpointCharacterBase.CheckpointCharacterBase.FOREST]: obj4, [CheckpointCharacterBase.CheckpointCharacterBase.X_RAY]: obj4, [CheckpointCharacterBase.CheckpointCharacterBase.CRIMSON]: obj5, [CheckpointCharacterBase.CheckpointCharacterBase.RED]: obj5, [CheckpointCharacterBase.CheckpointCharacterBase.BUTTER]: obj6, [CheckpointCharacterBase.CheckpointCharacterBase.ORANGE]: obj6 };
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCardColors.tsx");

export const getCardColors = function getCardColors(character) {
  let tmp;
  if (null != character) {
    tmp = closure_1[character.base];
  }
  if (tmp == null) {
    tmp = obj2;
  }
  return tmp;
};