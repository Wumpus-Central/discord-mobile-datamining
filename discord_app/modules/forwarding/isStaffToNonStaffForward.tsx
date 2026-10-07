// === Module 11325: isStaffToNonStaffForward ===

// Module 11325 (isStaffToNonStaffForward)
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;

const GuildFeatures = fn(1085).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/isStaffToNonStaffForward.tsx");

export default function isStaffToNonStaffForward(channel_id, arr) {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    const channel = ChannelStore.getChannel(channel_id.channel_id);
    let tmp4 = null != channel;
    if (tmp4) {
      if (channel.isPrivate()) {
        let recipients = channel.recipients;
        let everyResult = recipients.every((item) => {
          user = user.getUser(item);
          return null != user && user.isStaff();
        });
      } else {
        guild = GuildStore.getGuild(channel.guild_id);
        everyResult = null != guild;
        if (everyResult) {
          let features = guild.features;
          everyResult = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
        }
      }
      let someResult = everyResult;
      if (someResult) {
        someResult = arr.some((item) => {
          let every = channel.getChannel(item);
          let tmp = null != every;
          if (tmp) {
            const isPrivateResult = every.isPrivate();
            if (isPrivateResult) {
              tmp = !isPrivateResult;
            } else if (every.isPrivate()) {
              const recipients = every.recipients;
              every = recipients.every;
              let everyResult = every((item) => {
                user = user.getUser(item);
                return null != user && user.isStaff();
              });
            } else {
              guild = guild.getGuild(every.guild_id);
              everyResult = null != guild;
              if (everyResult) {
                const features = guild.features;
                everyResult = features.has(constants.INTERNAL_EMPLOYEE_ONLY);
              }
            }
          }
          return tmp;
        });
      }
      tmp4 = someResult;
    }
    return tmp4;
  } else {
    return false;
  }
};