// === Module 16599: AnnouncementMessageRow ===

// Module 16599 (AnnouncementMessageRow)
import nativeDefault from "native" /* 576 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5605 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8472 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11049 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11791 */;
import ICYMIShared from "ICYMIShared" /* 16601 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;
import RelationshipStore from "RelationshipStore" /* 4288 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4820 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const ITEM_PADDING = fn(16600).ITEM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createICYMIStyles = fn(16562);
let closure_13 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  const obj = { pressable: { flex: 1, paddingLeft: paddingLeft.inset }, footer: { marginVertical: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: ITEM_PADDING, marginLeft: paddingLeft.inset } };
  return obj;
});
let closure_14 = noop.memo((message) => {
  message = message.message;
  const guild = message.guild;
  const channel = message.channel;
  ({ unread, visible } = message);
  let items = [UserGuildSettingsStore];
  const stateFromStores = message(channel[11]).useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
  const tmp4 = closure_13();
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const items1 = [id, message.author.id];
  const effect = noop.useEffect(() => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    if (null != id) {
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      const membersById = GuildActionCreatorsDefault.requestMembersById(id1, message.author.id);
    }
  }, items1);
  const items2 = [channel.id, message.id];
  const items3 = [channel, message];
  const callback = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(message.id, "announcement", "long_press_channel");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } });
    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [message, channel.id, guild.id];
  const callback1 = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(message.id, "announcement", "long_press_message");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "channel" } });
    const user = UserStore.getUser(message.author.id);
    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "channel" } };
    const result = showLongPressMessageActionSheet.showLongPressMessageActionSheet({ channel, message, user });
  }, items3);
  const callback2 = noop.useCallback(() => {
    ICYMIActionCreatorsDefault.itemInteracted(message.id, "announcement", "press_message");
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } });
    if (null != message) {
      const obj4 = { id: message.id, timestamp: null };
      const _Date = Date;
      obj4.timestamp = Date.now();
      const items = [obj4];
      ICYMIActionCreatorsDefault.ackGravityItems(items);
      const tmpResult = ICYMIActionCreatorsDefault;
      ICYMIShared.navigateToPost(channel.id, guild.id, message.id);
    }
    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
  }, items4);
  let obj = message(channel[11]);
  const gravityMessage = message(channel[17]).useGravityMessage(message);
  let obj3 = { actionLabel: null, id: null, interactionType: "announcement", channelId: null, timestamp: null, onHeaderPress: null, onHeaderLongPress: null, message: null, shouldFeatureUser: true, children: null };
  let tmpResult = message(channel[17]);
  const intl = tmp(tmp2[19]).intl;
  obj3.actionLabel = intl.string(message(channel[19]).t["8P08G9"]);
  obj3.id = message.id;
  obj3.channelId = channel.id;
  const tmp11 = guild(channel[18]);
  obj3.timestamp = guild(channel[20]).extractTimestamp(message.id);
  obj3.onHeaderPress = callback2;
  obj3.onHeaderLongPress = callback;
  obj3.message = gravityMessage;
  let obj4 = { onPress: callback2, onLongPress: callback1, accessibilityRole: "button", accessibilityLabel: guild(channel[22])({ channel, unread }), accessibilityHint: null, unstable_pressDelay: 130, style: null, children: null };
  const obj5 = guild(channel[20]);
  obj4.accessibilityHint = message(channel[22]).getChannelA11yHint({ channel, muted: stateFromStores });
  obj4.style = tmp4.pressable;
  obj4.children = closure_11(message(channel[23]).MessageRowContent, { message, channel, guild, lineClamp: 5, visible });
  const items5 = [closure_11(message(channel[21]).PressableHighlight, obj4), ];
  let obj6 = { style: tmp4.footer, children: closure_11(guild(channel[24]), { message, channel, guild, backgroundVariant: "base", id: message.id, itemType: "announcement" }) };
  items5[1] = closure_11(View, obj6);
  obj3.children = items5;
  return closure_12(tmp11, obj3);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/AnnouncementMessageRow.tsx");

export default function AnnouncementMessageRowWrapper(message) {
  message = message.message;
  let author;
  ({ unread, visible } = message);
  const items = [ChannelStore];
  const stateFromStores = message(author[11]).useStateFromStores(items, () => ChannelStore.getChannel(message.getChannelId()));
  const obj = message(author[11]);
  const tmp = message;
  const tmp2 = author;
  const items1 = [GuildStore];
  const stateFromStores1 = message(author[11]).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const obj2 = message(author[11]);
  const gravityMessage = message(author[17]).useGravityMessage(message);
  author = undefined;
  if (gravityMessage != null) {
    author = gravityMessage.author;
  }
  tmp(tmp2[11]);
  [][0] = RelationshipStore;
  let tmp9 = null;
  if (null != stateFromStores) {
    tmp9 = null;
    if (null != stateFromStores1) {
      tmp9 = null;
      if (null != gravityMessage) {
        tmp9 = null;
        if (null != author) {
          tmp9 = null;
          if (!tmp8) {
            const obj4 = { unread, message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, visible };
            tmp9 = closure_11(closure_14, obj4);
          }
        }
      }
    }
  }
  return tmp9;
};