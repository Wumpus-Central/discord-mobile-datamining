// === Module 10054: isStaffToNonStaffForward ===

// Module 10054 (isStaffToNonStaffForward)
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { GuildFeatures } from "ME";

const result = require("mergeGuildAvatar").fileFinishedImporting("modules/forwarding/isStaffToNonStaffForward.tsx");

export default function isStaffToNonStaffForward(channel_id, arr) {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    channel = channel.getChannel(channel_id.channel_id);
    let tmp4 = null != channel;
    if (tmp4) {
      if (channel.isPrivate()) {
        let recipients = channel.recipients;
        let everyResult = recipients.every((arg0) => {
          user = user.getUser(arg0);
          return null != user && user.isStaff();
        });
      } else {
        guild = guild.getGuild(channel.guild_id);
        everyResult = null != guild;
        if (everyResult) {
          let features = guild.features;
          everyResult = features.has(GuildFeatures.INTERNAL_EMPLOYEE_ONLY);
        }
      }
      let someResult = everyResult;
      if (someResult) {
        someResult = arr.some((arg0) => {
          let every = channel.getChannel(arg0);
          let tmp = null != every;
          if (tmp) {
            const isPrivateResult = every.isPrivate();
            if (isPrivateResult) {
              tmp = !isPrivateResult;
            } else if (every.isPrivate()) {
              const recipients = every.recipients;
              every = recipients.every;
              let everyResult = every((arg0) => {
                user = user.getUser(arg0);
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