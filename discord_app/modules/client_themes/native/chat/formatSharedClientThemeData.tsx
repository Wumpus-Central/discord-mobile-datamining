// discord_app/modules/client_themes/native/chat/formatSharedClientThemeData.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import util from "../../../../intl/index.native.tsx";
import _modDef2626 from "../../intl/ClientThemes.messages.js";
import _modDef8051 from "../../../../../_runtime/metro/08051__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const result = size.fileFinishedImporting("modules/client_themes/native/chat/formatSharedClientThemeData.tsx");

export const formatSharedClientThemeData = function formatSharedClientThemeData(
  message,
  ensureAvatarSourceResult,
  nick,
) {
  const sharedClientTheme = message.sharedClientTheme;
  if (undefined !== sharedClientTheme) {
    const obj = {
      colors: null,
      gradientAngle: null,
      createdBy: null,
      createdByAvatarUrl: null,
      nitroWheelIconUrl: null,
      previewLabel: null,
      previewHeading: null,
      createdByLabel: null,
    };
    ({ colors: obj.colors, gradient_angle: obj.gradientAngle } = sharedClientTheme);
    obj.createdBy = nick;
    let str2 = "";
    if (undefined !== ensureAvatarSourceResult.uri) {
      str2 = ensureAvatarSourceResult.uri;
    }
    obj.createdByAvatarUrl = str2;
    obj.nitroWheelIconUrl = Image.resolveAssetSource(_modDef8051).uri;
    const intl = util.intl;
    obj.previewLabel = intl.string(util.t.SKNnqq);
    const intl2 = util.intl;
    obj.previewHeading = intl2.string(_modDef2626.yl1iMm);
    const intl3 = util.intl;
    const _HermesInternal = HermesInternal;
    obj.createdByLabel = "" + intl3.format(_modDef2626.fQPSEf, { username: "__USERNAME__" });
    return obj;
  }
};
