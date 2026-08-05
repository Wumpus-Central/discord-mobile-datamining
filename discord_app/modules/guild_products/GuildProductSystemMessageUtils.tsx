// discord_app/modules/guild_products/GuildProductSystemMessageUtils.tsx
import { NOOP } from "ME";

const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameHook = username.usernameOnClickHandler;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  return intl.formatToParts(require("../../intl/index.native.tsx") /* getSystemLocale */.t["w4iXs+"], { username: username.username, usernameHook, productName: username.productName });
};