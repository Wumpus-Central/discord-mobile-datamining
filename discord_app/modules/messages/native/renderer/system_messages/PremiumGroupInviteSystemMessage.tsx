// discord_app/modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../../../_runtime/07917_registerAsset.js";
import frozen from "../EmbedUtils.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import createPremiumGroupInviteEmbed from "../row_data/embeds/PremiumGroupInviteEmbed.tsx";
import closure_3 from "../../../../../stores/AuthenticationStore.tsx";
import closure_4 from "../../../../../stores/ChannelStore.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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