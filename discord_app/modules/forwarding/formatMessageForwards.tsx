// === Module 8179: getForwardInfo ===

// Module 8179 (getForwardInfo)
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import resetCache from "resetCache" /* 4063 */;
import isForwardMessageDefault from "isForwardMessage" /* 5026 */;
import closure_3 from "getGuild" /* 8180 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "getUncachedChannelPermissions" /* 4021 */;
import closure_7 from "markAllUserIdListsStale" /* 4030 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
class MessageForward {
  constructor(arg0, arg1, arg2) {
    obj = Object.create(new.target.prototype);
    obj.parentMessage = global;
    obj.messageSnapshot = arg1;
    obj.snapshotIndex = importDefault;
    return obj;
  }
}
MessageForward.prototype["getForwardInfo"] = function getForwardInfo(arg0, closure_9, closure_7, arg3, arg4, maxSettingsForPreset) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_4;
  }
  let tmp = closure_9;
  if (closure_9 === undefined) {
    tmp = closure_8;
  }
  let tmp2 = closure_7;
  if (closure_7 === undefined) {
    tmp2 = closure_7;
  }
  obj1 = arg3;
  if (arg3 === undefined) {
    obj1 = closure_6;
  }
  let obj2 = arg4;
  if (arg4 === undefined) {
    obj2 = closure_5;
  }
  let obj3 = maxSettingsForPreset;
  if (maxSettingsForPreset === undefined) {
    obj3 = closure_3;
  }
  ({ snapshotIndex, parentMessage } = this);
  let obj4 = resetCache;
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
          obj = { snapshotIndex: null };
          obj[0] = snapshotIndex;
        } else {
          obj = { snapshotIndex: null, footerInfo: null };
          obj[0] = snapshotIndex;
          obj1 = { originLabel: null, originIconUrl: null, timestampLabel: null, accessibilityLabel: null };
          obj1[0] = guild.name;
          obj2 = { id: null, size: 16, icon: null, canAnimate: false };
          ({ id: obj22[0], icon: obj22[2] } = guild);
          obj1[1] = getAvatarURLDefault.getGuildIconURL(obj2);
          obj1[2] = result;
          const intl3 = tmp3(1236).intl;
          obj3 = { origin: null, timestamp: null };
          obj3[0] = guild.name;
          obj3[1] = result;
          obj1[3] = intl3.formatToPlainString(tmp3(1236).t["+l04BN"], obj3);
          obj[1] = obj1;
          const obj21 = getAvatarURLDefault;
        }
        return obj;
      } else {
        if (obj1.can(channel1.accessPermissions, channel1)) {
          obj4 = { snapshotIndex: null, footerInfo: null };
          obj4[0] = snapshotIndex;
          const tmp3Result = tmp3(4984);
          const channelName = tmp3Result.computeChannelName(channel1, tmp, tmp2, true);
          const obj5 = { originLabel: null, timestampLabel: null, accessibilityLabel: null };
          obj5[0] = channelName;
          obj5[1] = result;
          const intl = tmp3(1236).intl;
          const obj6 = { origin: null, timestamp: null };
          obj6[0] = channelName;
          obj6[1] = result;
          obj5[2] = intl.formatToPlainString(tmp3(1236).t["+l04BN"], obj6);
          obj4[1] = obj5;
          let obj7 = obj4;
        } else {
          obj7 = { snapshotIndex: null };
          obj7[0] = snapshotIndex;
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
    const obj8 = { snapshotIndex: null };
    obj8[0] = snapshotIndex;
    return obj8;
  } else {
    let guild1 = obj2.getGuild(guild_id1);
    if (guild1 == null) {
      guild1 = obj3.getGuild(guild_id1);
    }
    if (null == guild1) {
      const obj9 = { snapshotIndex: null };
      obj9[0] = snapshotIndex;
      let obj10 = obj9;
    } else {
      obj10 = { snapshotIndex: null, footerInfo: null };
      obj10[0] = snapshotIndex;
      const obj11 = { originLabel: null, originIconUrl: null, timestampLabel: null, accessibilityLabel: null };
      obj11[0] = guild1.name;
      ({ id: obj18[0], icon: obj18[2] } = guild1);
      obj11[1] = getAvatarURLDefault.getGuildIconURL({ id: null, size: 16, icon: null, canAnimate: false });
      obj11[2] = result;
      const intl2 = tmp3(1236).intl;
      const obj13 = { origin: null, timestamp: null };
      obj13[0] = guild1.name;
      obj13[1] = result;
      obj11[3] = intl2.formatToPlainString(tmp3(1236).t["+l04BN"], obj13);
      obj10[1] = obj11;
      const obj12 = { id: null, size: 16, icon: null, canAnimate: false };
      const obj17 = getAvatarURLDefault;
    }
    return obj10;
  }
};
let result = require("set").fileFinishedImporting("modules/forwarding/formatMessageForwards.tsx");

export { MessageForward };
export const maybeCreateSingleForwardForMessage = function maybeCreateSingleForwardForMessage(message) {
  if (isForwardMessageDefault(message)) {
    const first = message.messageSnapshots[0];
    if (null != first) {
      if (typeof MessageForward !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const obj = Object.create(MessageForward.prototype);
      obj.parentMessage = message;
      obj.messageSnapshot = first;
      obj.snapshotIndex = 0;
      return obj;
    }
  }
};