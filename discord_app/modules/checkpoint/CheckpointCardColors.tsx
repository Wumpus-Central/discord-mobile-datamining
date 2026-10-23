// === Module 8610: CheckpointCardColors ===

// Module 8610 (CheckpointCardColors)
import CheckpointCharacterBase from "CheckpointCharacterBase" /* 6026 */;
import _modDef8611 from "module_8611" /* 8611 */;
import _modDef8612 from "module_8612" /* 8612 */;
import _modDef8613 from "module_8613" /* 8613 */;
import _modDef8614 from "module_8614" /* 8614 */;
import _modDef8615 from "module_8615" /* 8615 */;
import _modDef8616 from "module_8616" /* 8616 */;
import _modDef8617 from "module_8617" /* 8617 */;
import _modDef8618 from "module_8618" /* 8618 */;
import _modDef8619 from "module_8619" /* 8619 */;
import _modDef8620 from "module_8620" /* 8620 */;
import _modDef8621 from "module_8621" /* 8621 */;
import _modDef8622 from "module_8622" /* 8622 */;
import size from "module_2" /* 2 */;

const obj = { primaryBackgroundColor: "#7D53DE", secondaryBackgroundColor: "#BCB1D5", tertiaryBackgroundColor: "#CFC3EB", shadowColor: "#411D96", backgroundGradientStartColor: "#2F156B", recapCardBackgroundImage: _modDef8611, clydeLogoImage: _modDef8612 };
const obj2 = { primaryBackgroundColor: "#34E2F1", secondaryBackgroundColor: "#94CCD1", tertiaryBackgroundColor: "#A5E3E9", shadowColor: "#0C9BA7", backgroundGradientStartColor: "#12606D", recapCardBackgroundImage: _modDef8613, clydeLogoImage: _modDef8614 };
const obj3 = { primaryBackgroundColor: "#FF4CD2", secondaryBackgroundColor: "#D5A9D6", tertiaryBackgroundColor: "#E9BBE9", shadowColor: "#B20086", backgroundGradientStartColor: "#80005F", recapCardBackgroundImage: _modDef8615, clydeLogoImage: _modDef8616 };
const obj4 = { primaryBackgroundColor: "#35ED7E", secondaryBackgroundColor: "#B2C5B1", tertiaryBackgroundColor: "#B5DCB3", shadowColor: "#0FA44A", backgroundGradientStartColor: "#0A7535", recapCardBackgroundImage: _modDef8617, clydeLogoImage: _modDef8618 };
const obj5 = { primaryBackgroundColor: "#EF3054", secondaryBackgroundColor: "#E5A1AE", tertiaryBackgroundColor: "#F6AFBC", shadowColor: "#A60D2A", backgroundGradientStartColor: "#76091E", recapCardBackgroundImage: _modDef8619, clydeLogoImage: _modDef8620 };
const obj6 = { primaryBackgroundColor: "#FFE047", secondaryBackgroundColor: "#E6CBA8", tertiaryBackgroundColor: "#FFE0B8", shadowColor: "#B29400", backgroundGradientStartColor: "#806A00", recapCardBackgroundImage: _modDef8621, clydeLogoImage: _modDef8622 };
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