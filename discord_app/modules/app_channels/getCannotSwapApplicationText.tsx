// === Module 16816: getCannotSwapApplicationText ===

// Module 16816 (getCannotSwapApplicationText)
import closure_2 from "_getSystemLocale" /* 2025 */;
import closure_3 from "getUncachedChannelPermissions" /* 4199 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_channels/getCannotSwapApplicationText.tsx");

export default function getCannotSwapApplicationText(arg0) {
  const _require = arg0;
  const prop = _require(4206).SWAP_APP_CHANNEL_APPLICATION_PERMISSION_LIST;
  const found = prop.filter((arg0) => !closure_1_3.can(arg0, closure_0));
  if (0 !== found.length) {
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(locale.locale);
    const intl = tmp(1114).intl;
    const obj = { permissions: null, count: null };
    obj[0] = listFormat.format(found.map(tmp(9248).getPermissionName));
    obj[1] = found.length;
    return intl.formatToPlainString(tmp(1114).t.na1rJc, obj);
  }
};