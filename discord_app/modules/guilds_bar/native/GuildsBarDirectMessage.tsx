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
const createStyles = fn(4829);
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
  const tmp = closure_12();
  let obj = channelId(channel[11]);
  const guildsBarAnimatedWrapperStyles = channelId(channel[11]).useGuildsBarAnimatedWrapperStyles({
    disableSelectedColor: true,
    disableBGColor: true,
  });
  const items = [GuildReadStateStore];
  const stateFromStores = channelId(channel[12]).useStateFromStores(
    items,
    () => GuildReadStateStore.getMentionCountForPrivateChannel(channelId).count,
  );
  const obj2 = channelId(channel[12]);
  const items1 = [ChannelStore, UserStore, RelationshipStore, CallStore, AuthenticationStore];
  const stateFromStoresObject = channelId(channel[12]).useStateFromStoresObject(items1, () => {
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
    const obj = { channel, dmRecipient: user, label: null };
    if (null != channel) {
      const obj3 = {
        channel,
        unread: stateFromStores > 0,
        mentionCount: stateFromStores,
        isIncomingCall: hasItem,
        isOngoingCall: tmp8,
      };
      let stringResult = getChannelA11yLabelDefault(obj3);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.zLZPmk);
    }
    obj.label = stringResult;
    return obj;
  });
  channel = stateFromStoresObject.channel;
  const dmRecipient = stateFromStoresObject.dmRecipient;
  let obj3 = channelId(channel[12]);
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
  const obj4 = {
    selected: false,
    circle: !isMultiUserDMResult,
    unread: true,
    styles: guildsBarAnimatedWrapperStyles,
    label: stateFromStoresObject.label,
    overState: "Boolean",
    config: memo1,
    cutouts,
    externalChildren: badge,
    expandedChildren: true,
    children: null,
  };
  let tmp11Result = null;
  if (null != channel) {
    const obj5 = { channel };
    tmp11Result = jsx(tmp7(tmp3[18]), { channel });
  }
  obj4.expandedChildren = tmp11Result;
  let isMultiUserDMResult1;
  if (channel != null) {
    isMultiUserDMResult1 = channel.isMultiUserDM();
  }
  if (isMultiUserDMResult1) {
    const obj6 = {
      channel,
      size: tmp2(tmp3[20]).AvatarSizes.LARGE_48,
      pileSizeOverride: tmp2(tmp3[20]).AvatarSizes.REFRESH_MEDIUM_32,
      animate: true,
    };
    let tmp11Result2 = jsx(tmp7(tmp3[19]), {
      channel,
      size: tmp2(tmp3[20]).AvatarSizes.LARGE_48,
      pileSizeOverride: tmp2(tmp3[20]).AvatarSizes.REFRESH_MEDIUM_32,
      animate: true,
    });
    const tmp7Result = tmp7(tmp3[19]);
  } else {
    tmp11Result2 = null;
    if (null != memo) {
      const obj7 = { style: tmp.dm, source: memo };
      tmp11Result2 = jsx(tmp7(tmp3[21]), { style: tmp.dm, source: memo });
    }
  }
  obj4.children = tmp11Result2;
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
    expandedChildren: true,
    children: null,
  });
});
