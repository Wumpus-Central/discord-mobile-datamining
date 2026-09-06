// === Module 8046: createPremiumGroupInviteSystemMessage ===

// Module 8046 (createPremiumGroupInviteSystemMessage)
import ThemesDefault from "Themes" /* 576 */;
import frozen from "frozen" /* 7946 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import createPremiumGroupInviteEmbed from "createPremiumGroupInviteEmbed" /* 8047 */;
import registerAssetDefault from "registerAsset" /* 8051 */;
import closure_3 from "fetchFingerprint" /* 502 */;
import closure_4 from "ensureGuildLoaded" /* 1957 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
createCacheKey = { iconTintColor: ThemesDefault.colors.ICON_STRONG, iconDividerColor: ThemesDefault.colors.ICON_STRONG };
let closure_5 = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  ({ message, theme } = message);
  channel = channel.getChannel(message.getChannelId());
  id = id.getId();
  let obj = createPremiumGroupInviteEmbed;
  const premiumGroupInviteEmbed = obj.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj.premiumGroupInviteInfo = premiumGroupInviteEmbed;
    const tmp7 = callback(theme);
    obj.iconUrl = frozen.getAssetUriForEmbed(registerAssetDefault);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj;
  }
  const tmp3 = require;
};