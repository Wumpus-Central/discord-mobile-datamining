// === Module 8253: getGuildProductPurchaseSystemMessageContentMobile ===

// Module 8253 (getGuildProductPurchaseSystemMessageContentMobile)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const NOOP = ME.NOOP;
const result = set.fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameHook = username.usernameOnClickHandler;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const intl = getSystemLocale.intl;
  return intl.formatToParts(getSystemLocale.t["w4iXs+"], { username: username.username, usernameHook, productName: username.productName });
};