// discord_app/modules/chat_input/native/guard/ChatInputGuardReadonly.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import router_utils from "../../../routing/router_utils.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function sortChannelsByLastMessageId(id, id2) {
  const obj = SnowflakeUtilsDefault;
  return obj.compare(ReadStateStore.lastMessageId(id2.id), ReadStateStore.lastMessageId(id.id));
}
const isTextChannel = fn(1961).isTextChannel;
let closure_6 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const TextAreaCta = fn(11962).TextAreaCta;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, Permissions: map1 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardReadonly.tsx");

export default noop.memo(function ChatInputGuardReadonly(guildId) {
  guildId = guildId.guildId;
  importDefault = undefined;
  let stateFromStores;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let obj = guildId(stateFromStores[11]);
  const channelAction = obj.useMemberActionsForChannel(guildId, guildId.channel).channelAction;
  let obj1 = guildId(stateFromStores[11]);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  importDefault = obj1.useNextMemberAction(guildId, channelId);
  let tmpResult = tmp(tmp2[12]);
  const items = [stateFromStoresArray1];
  stateFromStores = tmpResult.useStateFromStores(items, () => {
    channelId = undefined;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  tmpResult = tmp(tmp2[12]);
  const items1 = [GuildChannelStore];
  stateFromStoresArray = tmpResult.useStateFromStoresArray(items1, () => {
    const mapped = GuildChannelStore.getChannels(guildId)[closure_6].map((channel) => channel.channel);
    return mapped.sort(sortChannelsByLastMessageId);
  });
  const items2 = [PermissionStore];
  const items3 = [stateFromStoresArray];
  stateFromStoresArray1 = guildId(stateFromStores[12]).useStateFromStoresArray(
    items2,
    () => {
      const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
      const found1 = found.filter((type) => stateFromStoresArray(type.type));
      return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
    },
    items3,
  );
  if (null != stateFromStores) {
    obj = { text: null, handlePress: null };
    const intl2 = tmp(tmp2[14]).intl;
    obj = { channelName: tmp(tmp2[15]).computeChannelName(stateFromStores, UserStore, RelationshipStore) };
    obj.text = intl2.formatToPlainString(tmp(tmp2[14]).t.q1krfU, obj);
    obj.handlePress = function handlePress() {
      const obj = { cta_type: TextAreaCta.CHANNEL_LINK };
      obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj);
      router_utils.transitionToGuild(guildId, stateFromStores.id);
    };
    let obj2 = obj;
    const tmpResult2 = tmp(tmp2[15]);
  } else if (0 === stateFromStoresArray1.length) {
    obj1 = { text: null, handlePress: null };
    const intl = tmp(tmp2[14]).intl;
    obj1.text = intl.string(tmp(tmp2[14]).t["gHD/nZ"]);
    obj1.handlePress = function handlePress() {
      const obj = { cta_type: TextAreaCta.CHANNEL_LIST };
      obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj);
      router_utils.transitionToGuild(guildId, undefined);
    };
    obj2 = obj1;
  } else {
    const intl4 = tmp(tmp2[14]).intl;
    let str = "";
    if (null != stateFromStoresArray1[0]) {
      str = tmp(tmp2[15]).computeChannelName(stateFromStoresArray1[0], UserStore, RelationshipStore);
      const tmpResult3 = tmp(tmp2[15]);
    }
    obj2 = { text: null, handlePress: null };
    const obj3 = { channelName: str };
    obj2.text = intl4.formatToPlainString(tmp(tmp2[14]).t.q1krfU, obj3);
    obj2.handlePress = function handlePress() {
      const obj = { cta_type: TextAreaCta.CHANNEL_LINK };
      obj.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, obj);
      router_utils.transitionToGuild(guildId, stateFromStoresArray1[0].id);
    };
  }
  ({ text, handlePress } = obj2);
  const obj4 = { type: "simple-action", actionOnPress: handlePress, actionLabel: null, message: null };
  const tmpResult1 = guildId(stateFromStores[12]);
  const intl3 = tmp(tmp2[14]).intl;
  obj4.actionLabel = intl3.string(guildId(stateFromStores[14]).t["9cs5LM"]);
  obj4.message = text;
  return jsx(require("ChatInputGuard"), {
    type: "simple-action",
    actionOnPress: handlePress,
    actionLabel: null,
    message: null,
  });
});
