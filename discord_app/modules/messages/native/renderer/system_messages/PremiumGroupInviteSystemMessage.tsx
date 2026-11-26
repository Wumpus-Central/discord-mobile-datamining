// === Module 14428: PremiumGroupInviteSystemMessage ===

// Module 14428 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 575 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8821 */;
import _modDef9638 from "module_9638" /* 9638 */;
import createCommonMessageDefault from "createCommonMessage" /* 14373 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 14429 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4892 */;

require = fn;
const createStyles = fn(5043);
let closure_5 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export function createPremiumGroupInviteSystemMessage(message) {
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef9638);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj3;
  }
}