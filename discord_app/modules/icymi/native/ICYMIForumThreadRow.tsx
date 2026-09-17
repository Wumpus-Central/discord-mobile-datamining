// discord_app/modules/icymi/native/ICYMIForumThreadRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import openChannelLongPressActionSheet from "../../channel/native/openChannelLongPressActionSheet.tsx";
import ICYMIShared from "ICYMIShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
class ICYMIForumThreadRow {
  constructor(arg0) {
    channel = global.channel;
    message = global.message;
    closure_2 = undefined;
    author = undefined;
    tmp = closure_9();
    tmp2 = channel;
    tmp3 = closure_2;
    obj = channel(closure_2[7]);
    items = [];
    items[0] = closure_6;
    stateFromStores = obj.useStateFromStores(items, () => {
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      return GuildStore.getGuild(guildId);
    });
    closure_2 = stateFromStores;
    author = message.author;
    obj2 = channel(closure_2[7]);
    items1 = [];
    items1[0] = closure_5;
    obj3 = author;
    items2 = [,];
    items2[0] = author.id;
    id = undefined;
    stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    items2[1] = id;
    effect = author.useEffect(() => {
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (null != id) {
        let id1;
        if (stateFromStores != null) {
          id1 = stateFromStores.id;
        }
        const items = [author.id];
        const membersById = GuildActionCreatorsDefault.requestMembersById(id1, items);
      }
    }, items2);
    items3 = [, ,];
    items3[0] = channel;
    items3[1] = stateFromStores;
    items3[2] = message.id;
    callback = obj3.useCallback(() => {
      ICYMIActionCreatorsDefault.itemInteracted(message.id, "forum_thread", "press_forum_thread");
      ICYMIActionCreatorsDefault.feedItemActioned({
        itemId: message.id,
        itemType: "forum_thread",
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "item_container",
          actionIntentType: "navigate",
          actionDestinationType: "channel",
        },
      });
      let tmp6 = null != channel;
      if (tmp6) {
        tmp6 = null != stateFromStores;
      }
      if (tmp6) {
        ICYMIShared.navigateToPost(channel.id, stateFromStores.id, message.id);
      }
      const obj3 = {
        itemId: message.id,
        itemType: "forum_thread",
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "item_container",
          actionIntentType: "navigate",
          actionDestinationType: "channel",
        },
      };
    }, items3);
    items4 = [,];
    items4[0] = channel.parent_id;
    items4[1] = message.id;
    callback1 = obj3.useCallback(() => {
      if (null != channel.parent_id) {
        ICYMIActionCreatorsDefault.itemInteracted(message.id, "forum_thread", "long_press_forum_thread");
        const obj3 = {
          itemId: message.id,
          itemType: "forum_thread",
          actionParameters: {
            actionGestureType: "long_press",
            actionTargetElement: "item_container",
            actionIntentType: "open",
            actionDestinationType: null,
          },
        };
        ICYMIActionCreatorsDefault.feedItemActioned(obj3);
        const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(tmp.parent_id);
      }
    }, items4);
    tmp2Result = tmp2(tmp3[12]);
    gravityMessage = tmp2Result.useGravityMessage(message);
    tmp11 = message;
    tmp13 = null;
    if (null != channel) {
      tmp13 = null;
      if (null != channel.guild_id) {
        tmp13 = null;
        if (null != stateFromStores) {
          tmp13 = null;
          if (null != author) {
            tmp13 = null;
            if (null != stateFromStores1) {
              tmp14 = jsxs;
              obj1 = {
                actionLabel: null,
                id: null,
                interactionType: "forum_thread",
                channelId: null,
                timestamp: null,
                onHeaderPress: null,
                onHeaderLongPress: null,
                message: null,
                shouldFeatureUser: true,
                children: null,
              };
              tmp11Result = tmp11(tmp3[14]);
              intl = tmp2(tmp3[15]).intl;
              obj1.actionLabel = intl.string(tmp2(tmp3[15]).t.bYNuVx);
              obj1.id = gravityMessage.id;
              obj1.channelId = channel.parent_id;
              tmp11Result1 = tmp11(tmp3[16]);
              obj1.timestamp = tmp11Result1.extractTimestamp(gravityMessage.id);
              obj1.onHeaderPress = callback;
              obj1.onHeaderLongPress = callback1;
              obj1.message = gravityMessage;
              tmp16 = jsx;
              obj16 = {
                onPress: null,
                onLongPress: null,
                accessibilityRole: "button",
                unstable_pressDelay: 130,
                style: null,
                children: null,
              };
              obj16.onPress = callback;
              obj16.onLongPress = callback1;
              obj16.style = tmp.pressable;
              tmp17 = View;
              obj17 = { style: null, children: null };
              obj17.style = tmp.container;
              obj18 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: null };
              obj18.children = tmp12;
              items5 = [, ,];
              items5[0] = jsx(tmp2(tmp3[18]).Text, obj18);
              obj19 = { variant: "text-md/normal", color: "text-subtle", style: null, lineClamp: 5, children: null };
              obj19.style = tmp.subtitle;
              tmp11Result2 = tmp11(tmp3[19]);
              flag = true;
              obj19.children = tmp11Result2.parseInlineReply(message.content, true);
              items5[1] = jsx(tmp2(tmp3[18]).Text, obj19);
              obj20 = { message: null, visible: null, itemType: "forum_thread" };
              obj20.message = message;
              obj20.visible = global.visible;
              items5[2] = jsx(tmp11(tmp3[20]), obj20);
              obj17.children = items5;
              obj16.children = jsxs(View, obj17);
              items6 = [,];
              items6[0] = jsx(tmp2(tmp3[17]).PressableHighlight, obj16);
              obj21 = { style: null, children: null };
              obj21.style = tmp.footer;
              obj22 = { style: null, children: null };
              obj22.style = tmp.ICYMICardInteractionRow;
              obj23 = {
                message: null,
                channel: null,
                guild: null,
                backgroundVariant: "base",
                id: null,
                itemType: "forum_thread",
              };
              obj23.message = gravityMessage;
              obj23.channel = channel;
              obj23.guild = stateFromStores;
              obj23.id = gravityMessage.id;
              obj22.children = jsx(tmp11(tmp3[21]), obj23);
              obj21.children = jsx(View, obj22);
              items6[1] = jsx(View, obj21);
              obj1.children = items6;
              tmp13 = jsxs(tmp11Result, obj1);
            }
          }
        }
      }
    }
    return tmp13;
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createICYMIStyles = fn(16612);
const React7 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = {
    pressable: { flex: 1, paddingLeft: marginHorizontal.inset },
    container: { marginHorizontal: marginHorizontal.margin },
    subtitle: { marginTop: nativeDefault.space.PX_8, marginBottom: marginHorizontal.margin },
    footer: {
      justifyContent: "flex-end",
      paddingLeft: marginHorizontal.inset,
      marginTop: marginHorizontal.margin,
      gap: marginHorizontal.margin,
    },
    threadAsComments: { marginHorizontal: marginHorizontal.margin },
    ICYMICardInteractionRow: { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin },
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIForumThreadRow.tsx");

export default function ForumThreadRowWrapper(message) {
  return React5(ICYMIForumThreadRow, {
    message: message.message,
    channel: message.threadChannel,
    visible: message.visible,
  });
}
export const MAX_AVATARS_IN_PILE = 3;
export { ICYMIForumThreadRow };
