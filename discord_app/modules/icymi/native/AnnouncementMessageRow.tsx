// === Module 16042: AnnouncementMessageRowWrapper ===

// Module 16042 (AnnouncementMessageRowWrapper)
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "createGuildRecordFromRust" /* 1909 */;
import closure_7 from "markAllUserIdListsStale" /* 4100 */;
import closure_8 from "updateUserGuildSettingsInternal" /* 4669 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import { ITEM_PADDING } from "ITEM_PADDING" /* 16043 */;
import jsxProd from "jsxProd" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16005 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createICYMIStyles.createICYMIStyles((inset) => {
  obj = { pressable: obj, footer: null };
  obj = { flex: 1, paddingLeft: inset.inset };
  obj = { marginVertical: inset.margin, gap: ThemesDefault.space.PX_8, paddingHorizontal: ITEM_PADDING, marginLeft: inset.inset };
  obj[1] = obj;
  return obj;
});
let closure_14 = importAllResult.memo((message) => {
  message = message.message;
  const guild = message.guild;
  const channel = message.channel;
  ({ unread, visible } = message);
  let obj = message(channel[11]);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.isChannelMuted(channel.getGuildId(), channel.id));
  const tmp4 = callback3();
  obj1 = importAllResult;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const items1 = [id, message.author.id];
  const effect = importAllResult.useEffect(() => {
    let id;
    if (guild != null) {
      id = tmp.id;
    }
    if (null != id) {
      let id1;
      if (tmp != null) {
        id1 = tmp.id;
      }
      const membersById = guild(channel[12]).requestMembersById(id1, message.author.id);
      const obj = guild(channel[12]);
    }
  }, items1);
  const items2 = [channel.id, message.id];
  const items3 = [channel, message];
  const callback = obj1.useCallback(() => {
    let obj = guild(channel[13]);
    obj.itemInteracted(message.id, "announcement", "long_press_channel");
    obj = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
    guild(channel[13]).feedItemActioned(obj);
    const obj2 = guild(channel[13]);
    const result = message(channel[14]).openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [message, channel.id, guild.id];
  const callback1 = obj1.useCallback(() => {
    let obj = guild(channel[13]);
    obj.itemInteracted(message.id, "announcement", "long_press_message");
    obj = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "channel" } };
    guild(channel[13]).feedItemActioned(obj);
    const user = closure_1_9.getUser(message.author.id);
    const obj2 = guild(channel[13]);
    obj = { channel, message, user };
    const result = message(channel[15]).showLongPressMessageActionSheet(obj);
  }, items3);
  const callback2 = obj1.useCallback(() => {
    let obj = guild(channel[13]);
    obj.itemInteracted(message.id, "announcement", "press_message");
    obj = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    guild(channel[13]).feedItemActioned(obj);
    if (null != message) {
      obj = { id: null, timestamp: null };
      obj[0] = tmp3.id;
      const _Date = Date;
      obj[1] = Date.now();
      const items = [obj];
      guild(tmp2[13]).ackGravityItems(items);
      const tmpResult = guild(tmp2[13]);
      message(tmp2[16]).navigateToPost(channel.id, guild.id, tmp3.id);
      const obj6 = message(tmp2[16]);
    }
  }, items4);
  let tmpResult = tmp(tmp2[17]);
  const gravityMessage = tmpResult.useGravityMessage(message);
  obj = { actionLabel: null, id: null, interactionType: "announcement", channelId: null, timestamp: null, onHeaderPress: null, onHeaderLongPress: null, message: null, shouldFeatureUser: true, children: null };
  const intl = tmp(tmp2[19]).intl;
  obj[0] = intl.string(message(channel[19]).t["8P08G9"]);
  obj[1] = message.id;
  obj[3] = channel.id;
  const tmp11 = guild(channel[18]);
  obj[4] = guild(channel[20]).extractTimestamp(message.id);
  obj[5] = callback2;
  obj[6] = callback;
  obj[7] = gravityMessage;
  obj = { onPress: callback2, onLongPress: callback1, accessibilityRole: "button", accessibilityLabel: guild(tmp2[22])({ channel, unread }), accessibilityHint: null, unstable_pressDelay: 130, style: null, children: null };
  tmpResult = tmp(tmp2[22]);
  obj[4] = tmpResult.getChannelA11yHint({ channel, muted: stateFromStores });
  obj[6] = tmp4.pressable;
  obj[7] = callback(message(channel[23]).MessageRowContent, { message, channel, guild, lineClamp: 5, visible });
  const items5 = [callback(message(channel[21]).PressableHighlight, obj), ];
  obj1 = { style: tmp4.footer, children: callback(guild(tmp2[24]), obj2) };
  items5[1] = callback(View, obj1);
  obj[9] = items5;
  return callback2(tmp11, obj);
});
let result = require("set").fileFinishedImporting("modules/icymi/native/AnnouncementMessageRow.tsx");

export default function AnnouncementMessageRowWrapper(message) {
  message = message.message;
  let stateFromStores;
  let author;
  ({ unread, visible } = message);
  let obj = message(author[11]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getChannel(message.getChannelId()));
  const items1 = [closure_6];
  const stateFromStores1 = message(author[11]).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return closure_1_6.getGuild(guild_id);
  });
  const obj2 = message(author[11]);
  const tmp = message;
  const tmp2 = author;
  const gravityMessage = message(author[17]).useGravityMessage(message);
  author = undefined;
  if (gravityMessage != null) {
    author = gravityMessage.author;
  }
  tmp(tmp2[11]);
  [][0] = closure_7;
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
            obj = { unread: null, message: null, channel: null, guild: null, visible: null };
            obj[0] = unread;
            obj[1] = gravityMessage;
            obj[2] = stateFromStores;
            obj[3] = stateFromStores1;
            obj[4] = visible;
            tmp9 = callback(closure_14, obj);
          }
        }
      }
    }
  }
  return tmp9;
};