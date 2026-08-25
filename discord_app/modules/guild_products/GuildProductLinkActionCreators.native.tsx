// === Module 12427: openGuildProductLink ===

// Module 12427 (openGuildProductLink)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4745 from "module_4745" /* 4745 */;

const result = set.fileFinishedImporting("modules/guild_products/GuildProductLinkActionCreators.native.tsx");

export const openGuildProductLink = function openGuildProductLink(closure_0, closure_1) {
  let obj = _modDef4745;
  obj = { body: null, confirmText: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["mYlo/T"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.BddRzS);
  obj.show(obj);
};