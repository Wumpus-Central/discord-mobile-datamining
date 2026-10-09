// discord_app/modules/age_gate/NSFWContentGate.tsx
import GuildRecord from "../../records/GuildRecord.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const isGuildNSFW = GuildRecord.isGuildNSFW;
const result = size.fileFinishedImporting("modules/age_gate/NSFWContentGate.tsx");

export const isChannelOrGuildNSFW = function isChannelOrGuildNSFW(channel) {
  let tmp = null != channel;
  if (tmp) {
    let isNSFWResult = channel.isNSFW();
    if (!isNSFWResult) {
      isNSFWResult = isGuildNSFW(GuildStore.getGuild(channel.guild_id));
    }
    tmp = isNSFWResult;
  }
  return tmp;
};
export const currentUserCanSeeNSFW = function currentUserCanSeeNSFW() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  return true === nsfwAllowed;
};
export const userCannotSeeNSFWContent = function userCannotSeeNSFWContent(channel) {
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
};
export const isNSFWActivityVisible = function isNSFWActivityVisible(channel, userCanSeeNSFW) {
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
};
