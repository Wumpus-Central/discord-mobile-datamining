// === Module 14302: formatSharedClientThemeData ===

// Module 14302 (formatSharedClientThemeData)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1128 */;
import _modDef2758 from "module_2758" /* 2758 */;
import _modDef8366 from "module_8366" /* 8366 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const result = size.fileFinishedImporting("modules/client_themes/native/chat/formatSharedClientThemeData.tsx");

export const formatSharedClientThemeData = function formatSharedClientThemeData(message, ensureAvatarSourceResult, nick) {
  const sharedClientTheme = message.sharedClientTheme;
  if (undefined !== sharedClientTheme) {
    const obj = { colors: null, gradientAngle: null, createdBy: null, createdByAvatarUrl: null, nitroWheelIconUrl: null, previewLabel: null, previewHeading: null, createdByLabel: null };
    ({ colors: obj.colors, gradient_angle: obj.gradientAngle } = sharedClientTheme);
    obj.createdBy = nick;
    let str2 = "";
    if (undefined !== ensureAvatarSourceResult.uri) {
      str2 = ensureAvatarSourceResult.uri;
    }
    obj.createdByAvatarUrl = str2;
    obj.nitroWheelIconUrl = Image.resolveAssetSource(_modDef8366).uri;
    const intl = util.intl;
    obj.previewLabel = intl.string(util.t.SKNnqq);
    const intl2 = util.intl;
    obj.previewHeading = intl2.string(_modDef2758.yl1iMm);
    const intl3 = util.intl;
    const _HermesInternal = HermesInternal;
    obj.createdByLabel = "" + intl3.format(_modDef2758.fQPSEf, { username: "__USERNAME__" });
    return obj;
  }
};