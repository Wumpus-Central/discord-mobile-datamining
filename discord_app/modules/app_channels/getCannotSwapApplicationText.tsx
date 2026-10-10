// === Module 17517: getCannotSwapApplicationText ===

// Module 17517 (getCannotSwapApplicationText)
import LocaleStore from "LocaleStore" /* 2129 */;
import PermissionStore from "PermissionStore" /* 4750 */;

const require = globalThis.__r;

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
    const intl = tmp(1126).intl;
    const obj = { permissions: listFormat.format(found.map(tmp(9237).getPermissionName)), count: found.length };
    return intl.formatToPlainString(tmp(1126).t.na1rJc, obj);
  }
};