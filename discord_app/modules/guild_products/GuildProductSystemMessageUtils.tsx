// discord_app/modules/guild_products/GuildProductSystemMessageUtils.tsx
import Constants from "../../Constants.tsx";
import intl2 from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const NOOP = Constants.NOOP;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductSystemMessageUtils.tsx");

export const getGuildProductPurchaseSystemMessageContentMobile =
  function getGuildProductPurchaseSystemMessageContentMobile(usernameOnClickHandler) {
    let usernameHook = usernameOnClickHandler.usernameOnClickHandler;
    const username = usernameOnClickHandler.username;
    if (usernameHook === undefined) {
      usernameHook = NOOP;
    }
    const productName = usernameOnClickHandler.productName;
    const intl = intl2.intl;
    return intl.formatToParts(intl2.t["w4iXs+"], { username, usernameHook, productName });
  };
