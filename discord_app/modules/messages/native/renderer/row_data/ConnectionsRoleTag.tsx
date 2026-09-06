// === Module 13184: ConnectionsRoleTag ===

// Module 13184 (ConnectionsRoleTag)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import size from "module_2" /* 2 */;

const processColor = _mod17.processColor;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx");

export const createConnectionsRoleTag = function createConnectionsRoleTag(visibleConnectionsRole) {
  let colorString = visibleConnectionsRole.colorString;
  if (colorString == null) {
    colorString = DEFAULT_ROLE_COLOR_HEX;
  }
  let PRIMARY_630 = nativeDefault.unsafe_rawColors.WHITE;
  let obj = utils_ColorUtils;
  const hex2intResult = obj.hex2int(colorString);
  if (obj2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  obj = { id: visibleConnectionsRole.id, name: visibleConnectionsRole.name, backgroundColor: processColor(colorString), iconColor: processColor(PRIMARY_630) };
  return obj;
};