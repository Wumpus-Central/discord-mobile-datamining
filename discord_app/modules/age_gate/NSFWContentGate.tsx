// === Module 6739: NSFWContentGate ===

// Module 6739 (NSFWContentGate)
import GuildRecord from "GuildRecord" /* 4875 */;
import GuildStore from "GuildStore" /* 4879 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

const isGuildNSFW = GuildRecord.isGuildNSFW;
const result = size.fileFinishedImporting("modules/age_gate/NSFWContentGate.tsx");

export function isChannelOrGuildNSFW(channel) {
  let tmp = null != channel;
  if (tmp) {
    let isNSFWResult = channel.isNSFW();
    if (!isNSFWResult) {
      isNSFWResult = isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    }
    tmp = isNSFWResult;
  }
  return tmp;
}
export function currentUserCanSeeNSFW() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return true === nsfwAllowed;
}
export function userCannotSeeNSFWContent(channel) {
  let tmp = null != channel;
  if (tmp) {
    let tmp2 = null != channel;
    if (tmp2) {
      let isNSFWResult = channel.isNSFW();
      if (!isNSFWResult) {
        isNSFWResult = isGuildNSFW(GuildStore.getGuild(channel.guild_id));
      }
      tmp2 = isNSFWResult;
    }
    if (tmp2) {
      const currentUser = UserStore.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      tmp2 = true !== nsfwAllowed;
    }
    tmp = tmp2;
  }
  return tmp;
}
export function isNSFWActivityVisible(channel, userCanSeeNSFW) {
  let tmp = null == channel;
  if (!tmp) {
    userCanSeeNSFW = undefined;
    if (userCanSeeNSFW != null) {
      userCanSeeNSFW = userCanSeeNSFW.userCanSeeNSFW;
    }
    if (userCanSeeNSFW == null) {
      const currentUser = UserStore.getCurrentUser();
      let nsfwAllowed;
      if (currentUser != null) {
        nsfwAllowed = currentUser.nsfwAllowed;
      }
      userCanSeeNSFW = true === nsfwAllowed;
    }
    let tmp7 = userCanSeeNSFW;
    if (!tmp7) {
      let tmp8 = true !== channel.nsfw;
      if (tmp8) {
        let guildIsNSFW;
        if (userCanSeeNSFW != null) {
          guildIsNSFW = userCanSeeNSFW.guildIsNSFW;
        }
        if (guildIsNSFW == null) {
          guildIsNSFW = isGuildNSFW(GuildStore.getGuild(channel.guild_id));
        }
        tmp8 = !guildIsNSFW;
      }
      tmp7 = tmp8;
    }
    tmp = tmp7;
  }
  return tmp;
}