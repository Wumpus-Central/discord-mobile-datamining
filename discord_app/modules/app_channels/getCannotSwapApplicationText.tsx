// === Module 18163: getCannotSwapApplicationText ===

// Module 18163 (getCannotSwapApplicationText)
import LocaleStore from "LocaleStore" /* 2068 */;
import PermissionStore from "PermissionStore" /* 4901 */;

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
    const intl = tmp(1128).intl;
    const obj = { permissions: listFormat.format(found.map(tmp(9609).getPermissionName)), count: found.length };
    return intl.formatToPlainString(tmp(1128).t.na1rJc, obj);
  }
};