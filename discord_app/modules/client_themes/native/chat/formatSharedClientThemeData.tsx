// === Module 13317: formatSharedClientThemeData ===

// Module 13317 (formatSharedClientThemeData)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1126 */;
import _modDef2795 from "module_2795" /* 2795 */;
import _modDef8054 from "module_8054" /* 8054 */;
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
    obj.nitroWheelIconUrl = Image.resolveAssetSource(_modDef8054).uri;
    const intl = util.intl;
    obj.previewLabel = intl.string(util.t.SKNnqq);
    const intl2 = util.intl;
    obj.previewHeading = intl2.string(_modDef2795.yl1iMm);
    const intl3 = util.intl;
    const _HermesInternal = HermesInternal;
    obj.createdByLabel = "" + intl3.format(_modDef2795.fQPSEf, { username: "__USERNAME__" });
    return obj;
  }
};