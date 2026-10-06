// === Module 7624: formatMessageForwards ===

// Module 7624 (formatMessageForwards)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl4 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import DateUtils from "DateUtils" /* 4558 */;
import useChannelName from "useChannelName" /* 5049 */;
import isForwardMessageDefault from "isForwardMessage" /* 6815 */;
import BasicGuildStore from "BasicGuildStore" /* 7625 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

class MessageForward {
  constructor(parentMessage, messageSnapshot, snapshotIndex) {
    const obj = Object.create(new.target.prototype);
    obj.parentMessage = parentMessage;
    obj.messageSnapshot = messageSnapshot;
    obj.snapshotIndex = snapshotIndex;
    return obj;
  }
  getForwardInfo(arg0) {
    let intl;
    let intl2;
    let intl3;
    let obj11;
    let obj12;
    let obj17;
    let obj19;
    let obj20;
    let obj7;
    let obj8;
    let obj9;
    let parentMessage;
    let snapshotIndex;
    let timestamp;
    let tmp3Result3;
    let tmp3Result4;
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
    const messageSnapshot = this.messageSnapshot;
    let tmp5;
    if (isForwardMessageDefault(parentMessage)) {
      const messageReference = parentMessage.messageReference;
      let message_id;
      if (messageReference != null) {
        message_id = messageReference.message_id;
      }
      tmp5 = message_id;
    }
    const calendarFormatCompact = DateUtils.calendarFormatCompact;
    DateUtils;
    if (null != tmp5) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const tmp3Result = SnowflakeUtilsDefault;
      timestamp = new Date(tmp3Result.extractTimestamp(tmp5));
    } else {
      timestamp = messageSnapshot.message.timestamp;
    }
    const result = calendarFormatCompact(timestamp);
    const channel = obj.getChannel(this.parentMessage.channel_id);
    if (null != channel) {
      const messageReference2 = parentMessage.messageReference;
      let guild_id1;
      const guild_id = channel.guild_id;
      if (messageReference2 != null) {
        guild_id1 = messageReference2.guild_id;
      }
      if (guild_id === guild_id1) {
        const messageReference4 = parentMessage.messageReference;
        let channel_id;
        const getChannel = obj.getChannel;
        if (messageReference4 != null) {
          channel_id = messageReference4.channel_id;
        }
        const channel1 = getChannel(channel_id);
        if (null == channel1) {
          let obj6;
          const guild = obj3.getGuild(channel.guild_id);
          if (null == guild) {
            obj6 = { snapshotIndex };
            const obj5 = { snapshotIndex };
          } else {
            obj6 = { snapshotIndex, footerInfo: obj7 };
            obj7 = { originLabel: guild.name, originIconUrl: tmp3Result3.getGuildIconURL(obj8), timestampLabel: result, accessibilityLabel: intl3.formatToPlainString(intl4.t["+l04BN"], obj9) };
            obj8 = { id: null, size: 16, icon: null, canAnimate: false };
            ({ id: obj22.id, icon: obj22.icon } = guild);
            tmp3Result3 = AvatarUtilsDefault;
            intl3 = intl4.intl;
            obj9 = { origin: guild.name, timestamp: result };
          }
          return obj6;
        } else {
          let obj13;
          if (obj2.can(channel1.accessPermissions, channel1)) {
            const obj10 = { snapshotIndex, footerInfo: obj11 };
            const tmp8Result = useChannelName;
            const channelName = tmp8Result.computeChannelName(channel1, tmp, tmp2, true);
            obj11 = { originLabel: channelName, timestampLabel: result, accessibilityLabel: intl.formatToPlainString(intl4.t["+l04BN"], obj12) };
            intl = intl4.intl;
            obj13 = obj10;
            obj12 = { origin: channelName, timestamp: result };
          } else {
            obj13 = { snapshotIndex };
          }
          return obj13;
        }
      }
    }
    const messageReference3 = parentMessage.messageReference;
    let guild_id2;
    if (messageReference3 != null) {
      guild_id2 = messageReference3.guild_id;
    }
    if (null == guild_id2) {
      return { snapshotIndex };
    } else {
      let obj16;
      let guild1 = obj3.getGuild(guild_id2);
      if (guild1 == null) {
        guild1 = obj4.getGuild(guild_id2);
      }
      if (null == guild1) {
        obj16 = { snapshotIndex };
        const obj15 = { snapshotIndex };
      } else {
        obj16 = { snapshotIndex, footerInfo: obj17 };
        obj17 = { originLabel: guild1.name, originIconUrl: tmp3Result4.getGuildIconURL(obj19), timestampLabel: result, accessibilityLabel: intl2.formatToPlainString(intl4.t["+l04BN"], obj20) };
        obj19 = { id: null, size: 16, icon: null, canAnimate: false };
        ({ id: obj18.id, icon: obj18.icon } = guild1);
        tmp3Result4 = AvatarUtilsDefault;
        intl2 = intl4.intl;
        obj20 = { origin: guild1.name, timestamp: result };
      }
      return obj16;
    }
  }
}
const prototype = MessageForward.prototype;
let result = size.fileFinishedImporting("modules/forwarding/formatMessageForwards.tsx");

export { MessageForward };
export const maybeCreateSingleForwardForMessage = function maybeCreateSingleForwardForMessage(message) {
  if (isForwardMessageDefault(message)) {
    const first = message.messageSnapshots[0];
    if (null != first) {
      const self = this;
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