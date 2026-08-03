// === Module 8130: createConnectionsRoleTag ===

// Module 8130 (createConnectionsRoleTag)
import { processColor } from "get ActivityIndicator";
import { DEFAULT_ROLE_COLOR_HEX } from "ME";

const result = require("Themes").fileFinishedImporting("modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx");

export const createConnectionsRoleTag = function createConnectionsRoleTag(merged) {
  let colorString = merged.colorString;
  if (colorString == null) {
    colorString = DEFAULT_ROLE_COLOR_HEX;
  }
  let PRIMARY_630 = importDefault(712).unsafe_rawColors.WHITE;
  let obj = require(688) /* int2hslRaw */;
  const hex2intResult = obj.hex2int(colorString);
  const tmp = importDefault;
  if (obj2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = tmp(712).unsafe_rawColors.PRIMARY_630;
  }
  obj = { id: merged.id, name: merged.name, backgroundColor: processColor(colorString), iconColor: processColor(PRIMARY_630) };
  return obj;
};