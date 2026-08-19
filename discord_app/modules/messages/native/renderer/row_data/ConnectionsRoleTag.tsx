// discord_app/modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../../Constants.tsx";
import int2hslRaw from "../../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";

const processColor = get_ActivityIndicator.processColor;
const DEFAULT_ROLE_COLOR_HEX = ME.DEFAULT_ROLE_COLOR_HEX;
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx");

export const createConnectionsRoleTag = function createConnectionsRoleTag(visibleConnectionsRole) {
  let colorString = visibleConnectionsRole.colorString;
  if (colorString == null) {
    colorString = DEFAULT_ROLE_COLOR_HEX;
  }
  let PRIMARY_630 = ThemesDefault.unsafe_rawColors.WHITE;
  let obj = int2hslRaw;
  const hex2intResult = obj.hex2int(colorString);
  if (obj2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = ThemesDefault.unsafe_rawColors.PRIMARY_630;
  }
  obj = { id: visibleConnectionsRole.id, name: visibleConnectionsRole.name, backgroundColor: processColor(colorString), iconColor: processColor(PRIMARY_630) };
  return obj;
};