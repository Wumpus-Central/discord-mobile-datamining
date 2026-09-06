// discord_app/modules/app_channels/getCannotSwapApplicationText.tsx
import LocaleStore from "../user_settings/LocaleStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/getCannotSwapApplicationText.tsx");

export default function getCannotSwapApplicationText(arg0) {
  _require = arg0;
  const prop = require("AppChannelPermissions").SWAP_APP_CHANNEL_APPLICATION_PERMISSION_LIST;
  const found = prop.filter((item) => !PermissionStore.can(item, closure_0));
  if (0 !== found.length) {
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(LocaleStore.locale);
    const intl = tmp(1114).intl;
    const obj = { permissions: listFormat.format(found.map(tmp(9248).getPermissionName)), count: found.length };
    return intl.formatToPlainString(tmp(1114).t.na1rJc, obj);
  }
}
