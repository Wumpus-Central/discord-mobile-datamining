// discord_app/modules/guild_products/GuildProductSystemMessageUtils.tsx
import { NOOP } from "ME";
import { getSystemLocale } from "../../intl/index.native.tsx";

const result = require("set").fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile = function getGuildProductPurchaseSystemMessageContentMobile(username) {
  let usernameHook = username.usernameOnClickHandler;
  if (usernameHook === undefined) {
    usernameHook = NOOP;
  }
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.formatToParts(getSystemLocale /* getSystemLocale */.t["w4iXs+"], { username: username.username, usernameHook, productName: username.productName });
};