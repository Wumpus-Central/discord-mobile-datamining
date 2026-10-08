// === Module 8049: PremiumGroupInviteSystemMessage ===

// Module 8049 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 587 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7863 */;
import createCommonMessageDefault from "createCommonMessage" /* 7955 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 8050 */;
import _modDef8054 from "module_8054" /* 8054 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2063 */;

require = fn;
const createStyles = fn(5090);
let closure_5 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  ({ message, theme } = message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  const id = AuthenticationStore.getId();
  const premiumGroupInviteEmbed = PremiumGroupInviteEmbed.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    const obj3 = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj3.premiumGroupInviteInfo = premiumGroupInviteEmbed;
    const tmp7 = closure_5(theme);
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8054);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj3;
  }
};