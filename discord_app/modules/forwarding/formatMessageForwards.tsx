// discord_app/modules/forwarding/formatMessageForwards.tsx
import util from "../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import DateUtils from "../../utils/DateUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import isForwardMessageDefault from "isForwardMessage.tsx";
import BasicGuildStore from "../guild/BasicGuildStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
class MessageForward {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    obj.parentMessage = global;
    obj.messageSnapshot = fn;
    obj.snapshotIndex = importDefault;
    return obj;
  }
}
MessageForward.prototype["getForwardInfo"] = function getForwardInfo(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = ChannelStore;
  }
  let tmp = UserStore;
  if (UserStore === undefined) {
    tmp = UserStore;
  }
  let tmp2 = RelationshipStore;
  if (RelationshipStore === undefined) {
    tmp2 = RelationshipStore;
  }
  let obj1 = arg3;
  if (arg3 === undefined) {
    obj1 = PermissionStore;
  }
  let obj2 = arg4;
  if (arg4 === undefined) {
    obj2 = GuildStore;
  }
  let obj3 = time;
  if (time === undefined) {
    obj3 = BasicGuildStore;
  }
  ({ snapshotIndex, parentMessage } = this);
  let obj4 = DateUtils;
  const result = obj4.calendarFormatCompact(this.messageSnapshot.message.timestamp);
  const channel = obj.getChannel(this.parentMessage.channel_id);
  if (null != channel) {
    const messageReference = parentMessage.messageReference;
    let guild_id;
    if (messageReference != null) {
      guild_id = messageReference.guild_id;
    }
    if (channel.guild_id === guild_id) {
      const messageReference3 = parentMessage.messageReference;
      let channel_id;
      if (messageReference3 != null) {
        channel_id = messageReference3.channel_id;
      }
      const channel1 = obj.getChannel(channel_id);
      if (null == channel1) {
        const guild = obj2.getGuild(channel.guild_id);
        if (null == guild) {
          obj = { snapshotIndex };
        } else {
          obj = { snapshotIndex, footerInfo: null };
          obj1 = { originLabel: guild.name, originIconUrl: null, timestampLabel: null, accessibilityLabel: null };
          obj2 = { id: null, size: 16, icon: null, canAnimate: false };
          ({ id: obj22.id, icon: obj22.icon } = guild);
          obj1.originIconUrl = AvatarUtilsDefault.getGuildIconURL(obj2);
          obj1.timestampLabel = result;
          const intl3 = util.intl;
          obj3 = { origin: guild.name, timestamp: result };
          obj1.accessibilityLabel = intl3.formatToPlainString(util.t["+l04BN"], obj3);
          obj.footerInfo = obj1;
        }
        return obj;
      } else {
        if (obj1.can(channel1.accessPermissions, channel1)) {
          obj4 = { snapshotIndex, footerInfo: null };
          const tmp3Result = useChannelName;
          const channelName = tmp3Result.computeChannelName(channel1, tmp, tmp2, true);
          const obj5 = { originLabel: channelName, timestampLabel: result, accessibilityLabel: null };
          const intl = util.intl;
          const obj6 = { origin: channelName, timestamp: result };
          obj5.accessibilityLabel = intl.formatToPlainString(util.t["+l04BN"], obj6);
          obj4.footerInfo = obj5;
          let obj7 = obj4;
        } else {
          obj7 = { snapshotIndex };
        }
        return obj7;
      }
    }
  }
  const messageReference2 = parentMessage.messageReference;
  let guild_id1;
  if (messageReference2 != null) {
    guild_id1 = messageReference2.guild_id;
  }
  if (null == guild_id1) {
    const obj8 = { snapshotIndex };
    return obj8;
  } else {
    let guild1 = obj2.getGuild(guild_id1);
    if (guild1 == null) {
      guild1 = obj3.getGuild(guild_id1);
    }
    if (null == guild1) {
      const obj9 = { snapshotIndex };
      let obj10 = obj9;
    } else {
      obj10 = { snapshotIndex, footerInfo: null };
      const obj11 = { originLabel: guild1.name, originIconUrl: null, timestampLabel: null, accessibilityLabel: null };
      ({ id: obj18.id, icon: obj18.icon } = guild1);
      obj11.originIconUrl = AvatarUtilsDefault.getGuildIconURL({ id: null, size: 16, icon: null, canAnimate: false });
      obj11.timestampLabel = result;
      const intl2 = util.intl;
      const obj13 = { origin: guild1.name, timestamp: result };
      obj11.accessibilityLabel = intl2.formatToPlainString(util.t["+l04BN"], obj13);
      obj10.footerInfo = obj11;
      const obj12 = { id: null, size: 16, icon: null, canAnimate: false };
    }
    return obj10;
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/forwarding/formatMessageForwards.tsx");

export { MessageForward };
export const maybeCreateSingleForwardForMessage = function maybeCreateSingleForwardForMessage(message) {
  if (isForwardMessageDefault(message)) {
    const first = message.messageSnapshots[0];
    if (null != first) {
      if (typeof MessageForward === "function") {
        const obj = Object.create(MessageForward.prototype);
        obj.parentMessage = message;
        obj.messageSnapshot = first;
        obj.snapshotIndex = 0;
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
};
