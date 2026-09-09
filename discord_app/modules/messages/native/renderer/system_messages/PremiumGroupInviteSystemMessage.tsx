// discord_app/modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import PremiumGroupInviteEmbed from "../row_data/embeds/PremiumGroupInviteEmbed.tsx";
import _modDef8066 from "../../../../../../_runtime/metro/08066__.js";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
fn(4574);
const createStyles = {
  iconTintColor: nativeDefault.colors.ICON_STRONG,
  iconDividerColor: nativeDefault.colors.ICON_STRONG,
};
let closure_5 = createStyles.createNativeStyleProperties(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx",
);

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  ({ message, theme } = message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  const id = AuthenticationStore.getId();
  let obj = PremiumGroupInviteEmbed;
  const premiumGroupInviteEmbed = obj.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj.premiumGroupInviteInfo = premiumGroupInviteEmbed;
    const tmp7 = closure_5(theme);
    obj.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8066);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj;
  }
};
