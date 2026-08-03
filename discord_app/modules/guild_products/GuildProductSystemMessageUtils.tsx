// === Module 7781: getGuildProductPurchaseSystemMessageContentMobile ===

// Module 7781 (getGuildProductPurchaseSystemMessageContentMobile)
import { NOOP } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameHook = username.usernameOnClickHandler;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.formatToParts(require(1236) /* getSystemLocale */.t["w4iXs+"], { username: username.username, usernameHook, productName: username.productName });
};