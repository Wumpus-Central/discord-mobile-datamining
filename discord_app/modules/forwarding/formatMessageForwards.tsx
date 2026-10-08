// === Module 7945: formatMessageForwards ===

// Module 7945 (formatMessageForwards)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import DateUtils from "DateUtils" /* 4750 */;
import useChannelName from "useChannelName" /* 5417 */;
import isForwardMessageDefault from "isForwardMessage" /* 6988 */;
import BasicGuildStore from "BasicGuildStore" /* 7946 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;

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
  let obj2 = arg3;
  if (arg3 === undefined) {
    obj2 = PermissionStore;
  }
  let obj3 = arg4;
  if (arg4 === undefined) {
    obj3 = GuildStore;
  }
  let obj4 = arg5;
  if (arg5 === undefined) {
    obj4 = BasicGuildStore;
  }
  ({ snapshotIndex, parentMessage } = this);
  let tmp5;
  if (isForwardMessageDefault(parentMessage)) {
    const messageReference = parentMessage.messageReference;
    let message_id;
    if (messageReference != null) {
      message_id = messageReference.message_id;
    }
    tmp5 = message_id;
  }
  if (null != tmp5) {
    const _Date = Date;
    let timestamp = new Date(SnowflakeUtilsDefault.extractTimestamp(tmp5));
    const tmp3Result = SnowflakeUtilsDefault;
  } else {
    timestamp = this.messageSnapshot.message.timestamp;
  }
  const result = DateUtils.calendarFormatCompact(timestamp);
  const channel = obj.getChannel(this.parentMessage.channel_id);
  if (null != channel) {
    const messageReference2 = parentMessage.messageReference;
    let guild_id;
    if (messageReference2 != null) {
      guild_id = messageReference2.guild_id;
    }
    if (channel.guild_id === guild_id) {
      const messageReference4 = parentMessage.messageReference;
      let channel_id;
      if (messageReference4 != null) {
        channel_id = messageReference4.channel_id;
      }
      const channel1 = obj.getChannel(channel_id);
      if (null == channel1) {
        guild = obj3.getGuild(channel.guild_id);
        if (null == guild) {
          const obj6 = { snapshotIndex };
          let obj7 = obj6;
        } else {
          obj7 = { snapshotIndex, footerInfo: null };
          const obj8 = { originLabel: guild.name, originIconUrl: null, timestampLabel: null, accessibilityLabel: null };
          ({ id: obj23.id, icon: obj23.icon } = guild);
          obj8.originIconUrl = AvatarUtilsDefault.getGuildIconURL({ id: null, size: 16, icon: null, canAnimate: false });
          obj8.timestampLabel = result;
          const intl3 = util.intl;
          const obj10 = { origin: guild.name, timestamp: result };
          obj8.accessibilityLabel = intl3.formatToPlainString(util.t["+l04BN"], obj10);
          obj7.footerInfo = obj8;
          const obj9 = { id: null, size: 16, icon: null, canAnimate: false };
          const tmp3Result3 = AvatarUtilsDefault;
        }
        return obj7;
      } else {
        if (obj2.can(channel1.accessPermissions, channel1)) {
          const obj11 = { snapshotIndex, footerInfo: null };
          const tmp8Result = useChannelName;
          const channelName = tmp8Result.computeChannelName(channel1, tmp, tmp2, true);
          const obj12 = { originLabel: channelName, timestampLabel: result, accessibilityLabel: null };
          const intl = util.intl;
          const obj13 = { origin: channelName, timestamp: result };
          obj12.accessibilityLabel = intl.formatToPlainString(util.t["+l04BN"], obj13);
          obj11.footerInfo = obj12;
          let obj14 = obj11;
        } else {
          obj14 = { snapshotIndex };
        }
        return obj14;
      }
    }
  }
  const messageReference3 = parentMessage.messageReference;
  let guild_id1;
  if (messageReference3 != null) {
    guild_id1 = messageReference3.guild_id;
  }
  if (null == guild_id1) {
    const obj15 = { snapshotIndex };
    return obj15;
  } else {
    let guild1 = obj3.getGuild(guild_id1);
    if (guild1 == null) {
      guild1 = obj4.getGuild(guild_id1);
    }
    if (null == guild1) {
      const obj16 = { snapshotIndex };
      let obj17 = obj16;
    } else {
      obj17 = { snapshotIndex, footerInfo: null };
      const obj18 = { originLabel: guild1.name, originIconUrl: null, timestampLabel: null, accessibilityLabel: null };
      ({ id: obj19.id, icon: obj19.icon } = guild1);
      obj18.originIconUrl = AvatarUtilsDefault.getGuildIconURL({ id: null, size: 16, icon: null, canAnimate: false });
      obj18.timestampLabel = result;
      const intl2 = util.intl;
      const obj21 = { origin: guild1.name, timestamp: result };
      obj18.accessibilityLabel = intl2.formatToPlainString(util.t["+l04BN"], obj21);
      obj17.footerInfo = obj18;
      const obj20 = { id: null, size: 16, icon: null, canAnimate: false };
      const tmp3Result4 = AvatarUtilsDefault;
    }
    return obj17;
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