// discord_app/modules/icymi/native/AnnouncementMessageRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import openChannelLongPressActionSheet from "../../channel/native/openChannelLongPressActionSheet.tsx";
import showLongPressMessageActionSheet from "../../messages/native/long_press/showLongPressMessageActionSheet.tsx";
import ICYMIShared from "ICYMIShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const ITEM_PADDING = fn(16490).ITEM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createICYMIStyles = fn(16452);
let closure_13 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  let obj = { pressable: { flex: 1, paddingLeft: paddingLeft.inset }, footer: null };
  obj = {
    marginVertical: paddingLeft.margin,
    gap: nativeDefault.space.PX_8,
    paddingHorizontal: ITEM_PADDING,
    marginLeft: paddingLeft.inset,
  };
  obj.footer = obj;
  return obj;
});
let closure_14 = noop.memo((message) => {
  message = message.message;
  const guild = message.guild;
  const channel = message.channel;
  ({ unread, visible } = message);
  let obj = message(channel[11]);
  let items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
  );
  const tmp4 = closure_13();
  let obj1 = noop;
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
  const callback = obj1.useCallback(() => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "announcement", "long_press_channel");
    obj = {
      itemId: message.id,
      itemType: "announcement",
      actionParameters: {
        actionGestureType: "long_press",
        actionTargetElement: "item_header",
        actionIntentType: "open",
        actionDestinationType: "channel",
      },
    };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [message, channel.id, guild.id];
  const callback1 = obj1.useCallback(() => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "announcement", "long_press_message");
    obj = {
      itemId: message.id,
      itemType: "announcement",
      actionParameters: {
        actionGestureType: "long_press",
        actionTargetElement: "item_container",
        actionIntentType: "open",
        actionDestinationType: "channel",
      },
    };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    const user = UserStore.getUser(message.author.id);
    obj = { channel, message, user };
    const result = showLongPressMessageActionSheet.showLongPressMessageActionSheet(obj);
  }, items3);
  const callback2 = obj1.useCallback(() => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "announcement", "press_message");
    obj = {
      itemId: message.id,
      itemType: "announcement",
      actionParameters: {
        actionGestureType: "press",
        actionTargetElement: "item_container",
        actionIntentType: "navigate",
        actionDestinationType: "channel",
      },
    };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
    if (null != message) {
      obj = { id: message.id, timestamp: null };
      const _Date = Date;
      obj.timestamp = Date.now();
      const items = [obj];
      ICYMIActionCreatorsDefault.ackGravityItems(items);
      const tmpResult = ICYMIActionCreatorsDefault;
      ICYMIShared.navigateToPost(channel.id, guild.id, message.id);
    }
  }, items4);
  let tmpResult = tmp(tmp2[17]);
  const gravityMessage = tmpResult.useGravityMessage(message);
  obj = {
    actionLabel: null,
    id: null,
    interactionType: "announcement",
    channelId: null,
    timestamp: null,
    onHeaderPress: null,
    onHeaderLongPress: null,
    message: null,
    shouldFeatureUser: true,
    children: null,
  };
  const intl = tmp(tmp2[19]).intl;
  obj.actionLabel = intl.string(message(channel[19]).t["8P08G9"]);
  obj.id = message.id;
  obj.channelId = channel.id;
  const tmp11 = guild(channel[18]);
  obj.timestamp = guild(channel[20]).extractTimestamp(message.id);
  obj.onHeaderPress = callback2;
  obj.onHeaderLongPress = callback;
  obj.message = gravityMessage;
  obj = {
    onPress: callback2,
    onLongPress: callback1,
    accessibilityRole: "button",
    accessibilityLabel: guild(tmp2[22])({ channel, unread }),
    accessibilityHint: null,
    unstable_pressDelay: 130,
    style: null,
    children: null,
  };
  tmpResult = tmp(tmp2[22]);
  obj.accessibilityHint = tmpResult.getChannelA11yHint({ channel, muted: stateFromStores });
  obj.style = tmp4.pressable;
  obj.children = closure_11(message(channel[23]).MessageRowContent, { message, channel, guild, lineClamp: 5, visible });
  const items5 = [closure_11(message(channel[21]).PressableHighlight, obj)];
  obj1 = {
    style: tmp4.footer,
    children: closure_11(guild(channel[24]), {
      message,
      channel,
      guild,
      backgroundVariant: "base",
      id: message.id,
      itemType: "announcement",
    }),
  };
  items5[1] = closure_11(View, obj1);
  obj.children = items5;
  return closure_12(tmp11, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/AnnouncementMessageRow.tsx");

export default function AnnouncementMessageRowWrapper(message) {
  message = message.message;
  let author;
  ({ unread, visible } = message);
  let obj = message(author[11]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(message.getChannelId()));
  const items1 = [GuildStore];
  const stateFromStores1 = message(author[11]).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildStore.getGuild(guild_id);
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
            obj = { unread, message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, visible };
            tmp9 = closure_11(closure_14, obj);
          }
        }
      }
    }
  }
  return tmp9;
}
