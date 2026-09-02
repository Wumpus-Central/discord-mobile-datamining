// === Module 8146: createConnectionsRoleTag ===

// Module 8146 (createConnectionsRoleTag)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 673 */;
import int2hslRaw from "int2hslRaw" /* 685 */;
import ThemesDefault from "Themes" /* 709 */;

const processColor = get_ActivityIndicator.processColor;
const DEFAULT_ROLE_COLOR_HEX = ME.DEFAULT_ROLE_COLOR_HEX;
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx");

export const createConnectionsRoleTag = function createConnectionsRoleTag(merged) {
  let colorString = merged.colorString;
  if (colorString == null) {
    colorString = DEFAULT_ROLE_COLOR_HEX;
  }
  let PRIMARY_630 = ThemesDefault.unsafe_rawColors.WHITE;
  let obj = int2hslRaw;
  const hex2intResult = obj.hex2int(colorString);
  const tmp = importDefault;
  if (obj2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = ThemesDefault.unsafe_rawColors.PRIMARY_630;
  }
  obj = { id: merged.id, name: merged.name, backgroundColor: processColor(colorString), iconColor: processColor(PRIMARY_630) };
  return obj;
};