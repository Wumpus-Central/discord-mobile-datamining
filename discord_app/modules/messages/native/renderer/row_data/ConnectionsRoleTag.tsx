// discord_app/modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx
import { processColor } from "get ActivityIndicator";
import { DEFAULT_ROLE_COLOR_HEX } from "ME";

const result = require("Themes").fileFinishedImporting("modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx");

export const createConnectionsRoleTag = function createConnectionsRoleTag(merged) {
  let colorString = merged.colorString;
  if (colorString == null) {
    colorString = DEFAULT_ROLE_COLOR_HEX;
  }
  let PRIMARY_630 = require("../../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.WHITE;
  let obj = require("../../../../../../discord_common/js/shared/utils/ColorUtils.tsx") /* int2hslRaw */;
  const hex2intResult = obj.hex2int(colorString);
  const tmp = importDefault;
  if (obj2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = tmp(712).unsafe_rawColors.PRIMARY_630;
  }
  obj = { id: merged.id, name: merged.name, backgroundColor: processColor(colorString), iconColor: processColor(PRIMARY_630) };
  return obj;
};