// discord_app/modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import utils_ColorUtils from "../../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
  obj = {
    id: visibleConnectionsRole.id,
    name: visibleConnectionsRole.name,
    backgroundColor: processColor(colorString),
    iconColor: processColor(PRIMARY_630),
  };
  return obj;
};
