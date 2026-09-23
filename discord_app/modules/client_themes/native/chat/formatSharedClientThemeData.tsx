// === Module 13575: formatSharedClientThemeData ===

// Module 13575 (formatSharedClientThemeData)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1115 */;
import _modDef2714 from "module_2714" /* 2714 */;
import _modDef8396 from "module_8396" /* 8396 */;
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
    obj.nitroWheelIconUrl = Image.resolveAssetSource(_modDef8396).uri;
    const intl = util.intl;
    obj.previewLabel = intl.string(util.t.SKNnqq);
    const intl2 = util.intl;
    obj.previewHeading = intl2.string(_modDef2714.yl1iMm);
    const intl3 = util.intl;
    const _HermesInternal = HermesInternal;
    obj.createdByLabel = "" + intl3.format(_modDef2714.fQPSEf, { username: "__USERNAME__" });
    return obj;
  }
};