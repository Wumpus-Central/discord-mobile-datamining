// === Module 7685: PremiumGroupInviteSystemMessage ===

// Module 7685 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 576 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7583 */;
import createCommonMessageDefault from "createCommonMessage" /* 7601 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 7686 */;
import _modDef7690 from "module_7690" /* 7690 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
const createStyles = fn(4866);
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7690);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj3;
  }
};