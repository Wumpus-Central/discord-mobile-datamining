// === Module 8443: GuildProductSystemMessageUtils ===

// Module 8443 (GuildProductSystemMessageUtils)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameHook = username.usernameOnClickHandler;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const intl = util.intl;
  return intl.formatToParts(util.t["w4iXs+"], { username: username.username, usernameHook, productName: username.productName });
}