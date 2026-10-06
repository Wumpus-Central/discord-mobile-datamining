// discord_app/modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import PremiumGroupInviteEmbed from "../row_data/embeds/PremiumGroupInviteEmbed.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/07733_AssetRegistry.js";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj = { iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG };
let closure_5 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx",
);

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  let theme;
  let tmp3Result;
  ({ message, theme } = message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  const id = AuthenticationStore.getId();
  const obj = PremiumGroupInviteEmbed;
  const premiumGroupInviteEmbed = obj.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    const obj3 = {
      premiumGroupInviteInfo: premiumGroupInviteEmbed,
      iconUrl: tmp3Result.getAssetUriForEmbed(AssetRegistryDefault),
    };
    const tmp7 = closure_5(theme);
    const merged = Object.assign(createCommonMessageDefault(message));
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    tmp3Result = renderer_EmbedUtils;
    return obj3;
  }
};
