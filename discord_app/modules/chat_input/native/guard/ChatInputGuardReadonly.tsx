// === Module 11942: ChatInputGuardReadonly ===

// Module 11942 (ChatInputGuardReadonly)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1101 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5009 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildChannelStore from "GuildChannelStore" /* 4464 */;
import PermissionStore from "PermissionStore" /* 4466 */;
import ReadStateStore from "ReadStateStore" /* 4844 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
function sortChannelsByLastMessageId(id, id2) {
  const obj = SnowflakeUtilsDefault;
  return obj.compare(ReadStateStore.lastMessageId(id2.id), ReadStateStore.lastMessageId(id.id));
}
const isTextChannel = fn(2048).isTextChannel;
let closure_6 = fn(4464).GUILD_SELECTABLE_CHANNELS_KEY;
const TextAreaCta = fn(11430).TextAreaCta;
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
  const channelAction = guildId(stateFromStores[11]).useMemberActionsForChannel(guildId, guildId.channel).channelAction;
  let obj = guildId(stateFromStores[11]);
  let channelId;
  if (channelAction != null) {
    channelId = channelAction.channelId;
  }
  importDefault = guildId(stateFromStores[11]).useNextMemberAction(guildId, channelId);
  let obj2 = guildId(stateFromStores[11]);
  const items = [stateFromStoresArray1];
  stateFromStores = guildId(stateFromStores[12]).useStateFromStores(items, () => {
    channelId = undefined;
    if (channelId != null) {
      channelId = channelId.channelId;
    }
    return ChannelStore.getChannel(channelId);
  });
  const tmpResult = guildId(stateFromStores[12]);
  const items1 = [GuildChannelStore];
  stateFromStoresArray = guildId(stateFromStores[12]).useStateFromStoresArray(items1, () => {
    const mapped = GuildChannelStore.getChannels(guildId)[closure_6].map((channel) => channel.channel);
    return mapped.sort(sortChannelsByLastMessageId);
  });
  const tmpResult5 = guildId(stateFromStores[12]);
  const items2 = [PermissionStore];
  const items3 = [stateFromStoresArray];
  stateFromStoresArray1 = guildId(stateFromStores[12]).useStateFromStoresArray(items2, () => {
    const found = stateFromStoresArray.filter(GlobalUtils.isNotNullish);
    const found1 = found.filter((type) => stateFromStoresArray(type.type));
    return found1.filter((item) => closure_1_7.can(constants.SEND_MESSAGES, item));
  }, items3);
  if (null != stateFromStores) {
    const obj3 = { text: null, handlePress: null };
    const intl2 = tmp(tmp2[14]).intl;
    const obj4 = { channelName: tmp(tmp2[15]).computeChannelName(stateFromStores, UserStore, RelationshipStore) };
    obj3.text = intl2.formatToPlainString(tmp(tmp2[14]).t.q1krfU, obj4);
    obj3.handlePress = function handlePress() {
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.CHANNEL_LINK });
      const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
      router_utils.transitionToGuild(guildId, stateFromStores.id);
    };
    let obj6 = obj3;
    const tmpResult7 = tmp(tmp2[15]);
  } else if (0 === stateFromStoresArray1.length) {
    const obj5 = { text: null, handlePress: null };
    const intl = tmp(tmp2[14]).intl;
    obj5.text = intl.string(tmp(tmp2[14]).t["gHD/nZ"]);
    obj5.handlePress = function handlePress() {
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.CHANNEL_LIST });
      const obj2 = { cta_type: TextAreaCta.CHANNEL_LIST };
      router_utils.transitionToGuild(guildId, undefined);
    };
    obj6 = obj5;
  } else {
    const intl4 = tmp(tmp2[14]).intl;
    let str = "";
    if (null != stateFromStoresArray1[0]) {
      str = tmp(tmp2[15]).computeChannelName(stateFromStoresArray1[0], UserStore, RelationshipStore);
      const tmpResult8 = tmp(tmp2[15]);
    }
    obj6 = { text: null, handlePress: null };
    const obj7 = { channelName: str };
    obj6.text = intl4.formatToPlainString(tmp(tmp2[14]).t.q1krfU, obj7);
    obj6.handlePress = function handlePress() {
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.TEXT_AREA_CTA_CLICKED, { cta_type: TextAreaCta.CHANNEL_LINK });
      const obj2 = { cta_type: TextAreaCta.CHANNEL_LINK };
      router_utils.transitionToGuild(guildId, stateFromStoresArray1[0].id);
    };
  }
  ({ text, handlePress } = obj6);
  const obj8 = { type: "simple-action", actionOnPress: handlePress, actionLabel: null, message: null };
  const tmpResult6 = guildId(stateFromStores[12]);
  const intl3 = tmp(tmp2[14]).intl;
  obj8.actionLabel = intl3.string(guildId(stateFromStores[14]).t["9cs5LM"]);
  obj8.message = text;
  return jsx(require("ChatInputGuard"), { type: "simple-action", actionOnPress: handlePress, actionLabel: null, message: null });
});