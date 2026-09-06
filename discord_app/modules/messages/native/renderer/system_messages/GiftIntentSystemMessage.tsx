// discord_app/modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import _modDef7949 from "../../../../../../_runtime/metro/07949__.js";
import createCommonMessageDefault from "createCommonMessage.tsx";
import GiftIntentEmbed from "../row_data/embeds/GiftIntentEmbed.tsx";
import EphemeralIndication from "../row_data/EphemeralIndication.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_3 = createStyles.createNativeStyleProperties({
  iconTintColor: nativeDefault.colors.BACKGROUND_BRAND,
  iconDividerColor: nativeDefault.colors.ICON_STRONG,
});
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx",
);

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  ({ message, theme } = message);
  let obj = GiftIntentEmbed;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = EphemeralIndication;
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = renderer_EmbedUtils;
    obj.iconUrl = tmpResult.getAssetUriForEmbed(_modDef7949);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = closure_3(theme));
    return obj;
  }
};
