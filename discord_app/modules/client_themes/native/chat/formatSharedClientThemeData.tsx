// discord_app/modules/client_themes/native/chat/formatSharedClientThemeData.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import intl4 from "../../../../intl/index.native.tsx";
import _modDef2723 from "../../intl/ClientThemes.messages.js";
import AssetRegistryDefault from "../../../../../_runtime/07722_AssetRegistry.js";
import size from "../../../../../_runtime/metro/00002__.js";

const Image = react_native.Image;
const result = size.fileFinishedImporting("modules/client_themes/native/chat/formatSharedClientThemeData.tsx");

export const formatSharedClientThemeData = function formatSharedClientThemeData(
  message,
  ensureAvatarSourceResult,
  nick,
) {
  let intl;
  let intl2;
  let intl3;
  let str2;
  const sharedClientTheme = message.sharedClientTheme;
  if (undefined !== sharedClientTheme) {
    const obj = {
      colors: null,
      gradientAngle: null,
      createdBy: nick,
      createdByAvatarUrl: str2,
      nitroWheelIconUrl: Image.resolveAssetSource(AssetRegistryDefault).uri,
      previewLabel: intl.string(intl4.t.SKNnqq),
      previewHeading: intl2.string(_modDef2723.yl1iMm),
      createdByLabel: "" + intl3.format(_modDef2723.fQPSEf, { username: "__USERNAME__" }),
    };
    ({ colors: obj.colors, gradient_angle: obj.gradientAngle } = sharedClientTheme);
    str2 = "";
    if (undefined !== ensureAvatarSourceResult.uri) {
      str2 = ensureAvatarSourceResult.uri;
    }
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    const _HermesInternal = HermesInternal;
    return obj;
  }
};
