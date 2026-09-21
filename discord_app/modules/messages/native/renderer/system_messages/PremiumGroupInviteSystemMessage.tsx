// discord_app/modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import PremiumGroupInviteEmbed from "../row_data/embeds/PremiumGroupInviteEmbed.tsx";
import _modDef8310 from "../../../../../../_runtime/metro/08310__.js";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
const createStyles = fn(4756);
let closure_5 = createStyles.createNativeStyleProperties({
  iconTintColor: nativeDefault.colors.ICON_STRONG,
  iconDividerColor: nativeDefault.colors.ICON_STRONG,
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx",
);

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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8310);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj3;
  }
};
