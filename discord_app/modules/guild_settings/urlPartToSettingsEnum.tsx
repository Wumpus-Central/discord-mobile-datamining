// discord_app/modules/guild_settings/urlPartToSettingsEnum.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_settings/urlPartToSettingsEnum.tsx");

export default function urlPartToSettingsEnum(arg0, str) {
  let formatted;
  if (str != null) {
    const str2 = "_".replace(/-/g, "_");
    if (str2 != null) {
      formatted = str2.toUpperCase();
    }
  }
  if (null != formatted) {
    if (formatted in arg0) {
      return arg0[formatted];
    }
  }
}
