// === Module 19202: getCannotSwapApplicationText ===

// Module 19202 (getCannotSwapApplicationText)
import LocaleStore from "LocaleStore" /* 2191 */;
import PermissionStore from "PermissionStore" /* 5075 */;

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
    const intl = tmp(1113).intl;
    const obj = { permissions: listFormat.format(found.map(tmp(9908).getPermissionName)), count: found.length };
    return intl.formatToPlainString(tmp(1113).t.na1rJc, obj);
  }
};