// discord_app/modules/guilds_bar/native/GuildsBarDirectMessage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import getChannelA11yLabelDefault from "../../channel/getChannelA11yLabel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import CallStore from "../../../stores/CallStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { dm: null };
let size = {
  width: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
  height: nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE,
};
obj.dm = size;
let closure_12 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarDirectMessage.tsx");

export default noop.memo(function GuildsBarDirectMessage(channelId) {
  channelId = channelId.channelId;
  let channel;
  let obj = channelId(channel[11]);
  const tmp = closure_12();
  let obj1 = channelId(channel[12]);
  const items = [GuildReadStateStore];
  const stateFromStores = obj1.useStateFromStores(
    items,
    () => GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count,
  );
  let obj2 = channelId(channel[12]);
  const items1 = [ChannelStore, UserStore, RelationshipStore, CallStore, AuthenticationStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    channel = ChannelStore.getChannel(channelId);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    let user;
    if (type === ChannelTypes.DM) {
      user = UserStore.getUser(channel.getRecipientId());
    }
    const call = CallStore.getCall(channelId);
    const id = AuthenticationStore.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    let obj = { channel, dmRecipient: user, label: null };
    if (null != channel) {
      obj = {
        channel,
        unread: stateFromStores > 0,
        mentionCount: stateFromStores,
        isIncomingCall: hasItem,
        isOngoingCall: tmp8,
      };
      let stringResult = getChannelA11yLabelDefault(obj);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.zLZPmk);
    }
    obj.label = stringResult;
    return obj;
  });
  channel = stateFromStoresObject.channel;
  const dmRecipient = stateFromStoresObject.dmRecipient;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles({
    disableSelectedColor: true,
    disableBGColor: true,
  });
  const items2 = [channel, dmRecipient];
  ({ badge, cutouts } = stateFromStores(channel[15])({ mentionCount: stateFromStores }));
  const memo = dmRecipient.useMemo(() => {
    let isDMResult;
    if (channel != null) {
      isDMResult = channel.isDM();
    }
    let tmp2;
    if (isDMResult) {
      let avatarSource;
      if (dmRecipient != null) {
        avatarSource = dmRecipient.getAvatarSource(undefined);
      }
      tmp2 = avatarSource;
    }
    return tmp2;
  }, items2);
  const items3 = [channel];
  const memo1 = dmRecipient.useMemo(
    () => ({
      onPress() {
        if (null != closure_1_2) {
          channelId(channel[16]).transitionToChannel(tmp.id);
          const obj = channelId(channel[16]);
        }
      },
      onLongPress() {
        if (null != closure_1_2) {
          const result = channelId(channel[17]).openChannelLongPressActionSheet(tmp.id);
          const obj = channelId(channel[17]);
        }
      },
    }),
    items3,
  );
  let isMultiUserDMResult;
  const tmp8 = stateFromStores(channel[15])({ mentionCount: stateFromStores });
  if (channel != null) {
    isMultiUserDMResult = channel.isMultiUserDM();
  }
  obj = {
    selected: false,
    circle: !isMultiUserDMResult,
    unread: true,
    styles: guildsBarAnimatedWrapperStyles,
    label: stateFromStoresObject.label,
    overState: "Boolean",
    config: memo1,
    cutouts,
    externalChildren: badge,
    expandedChildren: "flowing",
    children: "hourglass",
  };
  let tmp11Result = null;
  if (null != channel) {
    obj = { channel };
    tmp11Result = jsx(tmp7(tmp3[18]), { channel });
  }
  obj.expandedChildren = tmp11Result;
  let isMultiUserDMResult1;
  if (channel != null) {
    isMultiUserDMResult1 = channel.isMultiUserDM();
  }
  if (isMultiUserDMResult1) {
    obj1 = {
      channel,
      size: tmp2(tmp3[20]).AvatarSizes.LARGE_48,
      pileSizeOverride: tmp2(tmp3[20]).AvatarSizes.REFRESH_MEDIUM_32,
      animate: true,
    };
    tmp11Result = jsx(tmp7(tmp3[19]), {
      channel,
      size: tmp2(tmp3[20]).AvatarSizes.LARGE_48,
      pileSizeOverride: tmp2(tmp3[20]).AvatarSizes.REFRESH_MEDIUM_32,
      animate: true,
    });
    const tmp7Result = tmp7(tmp3[19]);
  } else {
    tmp11Result = null;
    if (null != memo) {
      obj2 = { style: tmp.dm, source: memo };
      tmp11Result = jsx(tmp7(tmp3[21]), { style: tmp.dm, source: memo });
    }
  }
  obj.children = tmp11Result;
  return jsx(stateFromStores(channel[11]), {
    selected: false,
    circle: !isMultiUserDMResult,
    unread: true,
    styles: guildsBarAnimatedWrapperStyles,
    label: stateFromStoresObject.label,
    overState: "Boolean",
    config: memo1,
    cutouts,
    externalChildren: badge,
    expandedChildren: "flowing",
    children: "hourglass",
  });
});
