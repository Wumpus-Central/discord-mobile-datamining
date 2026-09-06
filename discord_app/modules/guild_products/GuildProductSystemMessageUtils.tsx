// discord_app/modules/guild_products/GuildProductSystemMessageUtils.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile =
  function getGuildProductPurchaseSystemMessageContentMobile(username) {
    let usernameHook = username.usernameOnClickHandler;
    if (usernameHook === undefined) {
      usernameHook = NOOP;
    }
    const intl = util.intl;
    return intl.formatToParts(util.t["w4iXs+"], {
      username: username.username,
      usernameHook,
      productName: username.productName,
    });
  };
