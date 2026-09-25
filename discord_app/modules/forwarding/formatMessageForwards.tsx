// === Module 7391: formatMessageForwards ===

// Module 7391 (formatMessageForwards)
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import DateUtils from "DateUtils" /* 4509 */;
import useChannelName from "useChannelName" /* 4982 */;
import isForwardMessageDefault from "isForwardMessage" /* 6715 */;
import BasicGuildStore from "BasicGuildStore" /* 7392 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4466 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import UserStore from "UserStore" /* 1372 */;

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
  const result = DateUtils.calendarFormatCompact(this.messageSnapshot.message.timestamp);
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
        const guild = obj3.getGuild(channel.guild_id);
        if (null == guild) {
          const obj6 = { snapshotIndex };
          let obj7 = obj6;
        } else {
          obj7 = { snapshotIndex, footerInfo: null };
          const obj8 = { originLabel: guild.name, originIconUrl: null, timestampLabel: null, accessibilityLabel: null };
          ({ id: obj22.id, icon: obj22.icon } = guild);
          obj8.originIconUrl = AvatarUtilsDefault.getGuildIconURL({ id: null, size: 16, icon: null, canAnimate: false });
          obj8.timestampLabel = result;
          const intl3 = util.intl;
          const obj10 = { origin: guild.name, timestamp: result };
          obj8.accessibilityLabel = intl3.formatToPlainString(util.t["+l04BN"], obj10);
          obj7.footerInfo = obj8;
          const obj9 = { id: null, size: 16, icon: null, canAnimate: false };
        }
        return obj7;
      } else {
        if (obj2.can(channel1.accessPermissions, channel1)) {
          const obj11 = { snapshotIndex, footerInfo: null };
          const tmp3Result = useChannelName;
          const channelName = tmp3Result.computeChannelName(channel1, tmp, tmp2, true);
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
  const messageReference2 = parentMessage.messageReference;
  let guild_id1;
  if (messageReference2 != null) {
    guild_id1 = messageReference2.guild_id;
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
      let obj19 = obj16;
    } else {
      obj19 = { snapshotIndex, footerInfo: null };
      const obj20 = { originLabel: guild1.name, originIconUrl: null, timestampLabel: null, accessibilityLabel: null };
      ({ id: obj18.id, icon: obj18.icon } = guild1);
      obj20.originIconUrl = AvatarUtilsDefault.getGuildIconURL({ id: null, size: 16, icon: null, canAnimate: false });
      obj20.timestampLabel = result;
      const intl2 = util.intl;
      const obj38 = { origin: guild1.name, timestamp: result };
      obj20.accessibilityLabel = intl2.formatToPlainString(util.t["+l04BN"], obj38);
      obj19.footerInfo = obj20;
      const obj23 = { id: null, size: 16, icon: null, canAnimate: false };
    }
    return obj19;
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