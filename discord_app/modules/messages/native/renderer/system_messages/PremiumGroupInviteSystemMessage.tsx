import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { iconTintColor: require("Themes").colors.ICON_STRONG, iconDividerColor: require("Themes").colors.ICON_STRONG };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  channel = channel.getChannel(message.getChannelId());
  id = id.getId();
  let obj = require(7952) /* createPremiumGroupInviteEmbed */;
  const premiumGroupInviteEmbed = obj.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(importDefault(7870)(message));
    obj.premiumGroupInviteInfo = premiumGroupInviteEmbed;
    const tmp7 = createCacheKey(theme);
    obj.iconUrl = tmp3(7853).getAssetUriForEmbed(importDefault(7614));
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj;
  }
  tmp3 = require;
};