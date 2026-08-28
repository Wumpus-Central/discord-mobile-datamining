// === Module 4946: getChannelIcon ===

// Module 4946 (getChannelIcon)
import registerAssetDefault from "registerAsset" /* 4947 */;
import registerAssetDefault2 from "registerAsset" /* 4948 */;
import registerAssetDefault3 from "registerAsset" /* 4949 */;
import registerAssetDefault4 from "registerAsset" /* 4950 */;
import registerAssetDefault5 from "registerAsset" /* 4951 */;
import registerAssetDefault6 from "registerAsset" /* 4952 */;
import registerAssetDefault7 from "registerAsset" /* 4953 */;
import registerAssetDefault8 from "registerAsset" /* 4954 */;
import registerAssetDefault9 from "registerAsset" /* 4955 */;
import registerAssetDefault10 from "registerAsset" /* 4956 */;
import registerAssetDefault11 from "registerAsset" /* 4961 */;
import registerAssetDefault12 from "registerAsset" /* 4962 */;
import registerAssetDefault13 from "registerAsset" /* 4963 */;
import registerAssetDefault14 from "registerAsset" /* 4964 */;
import registerAssetDefault15 from "registerAsset" /* 4965 */;
import registerAssetDefault16 from "registerAsset" /* 4968 */;
import registerAssetDefault17 from "registerAsset" /* 4970 */;
import shouldShowMembershipVerificationGate from "shouldShowMembershipVerificationGate" /* 4972 */;
import registerAssetDefault18 from "registerAsset" /* 4975 */;
import registerAssetDefault19 from "registerAsset" /* 4976 */;
import isRoleRequiredDefault from "isRoleRequired" /* 4977 */;
import registerAssetDefault20 from "registerAsset" /* 4983 */;
import FolderIcon from "FolderIcon" /* 4988 */;
import TextIcon2 from "TextIcon" /* 4994 */;
import ImageIcon2 from "ImageIcon" /* 5001 */;
import ForumIcon2 from "ForumIcon" /* 5002 */;
import GroupIcon from "GroupIcon" /* 5003 */;
import AtIcon from "AtIcon" /* 5004 */;
import AnnouncementsIcon2 from "AnnouncementsIcon" /* 5008 */;
import StageIcon2 from "StageIcon" /* 5011 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 5015 */;
import HubIcon from "HubIcon" /* 5016 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "trackCommunicationDisabled" /* 1993 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "mergeGuildAvatar" /* 1923 */;
import { ChannelTypes } from "ME" /* 676 */;

require = arg1;
function getChannelIcon(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [closure_5, closure_6, closure_4];
  const result = shouldShowMembershipVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    channel = null;
    if (null != channel.parent_id) {
      channel = store.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      let tmp89 = registerAssetDefault18;
    } else {
      tmp89 = registerAssetDefault15;
    }
    return tmp89;
  } else {
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      let tmp4 = registerAssetDefault;
    } else if (tmp3.ANNOUNCEMENT_THREAD === type) {
      tmp4 = registerAssetDefault2;
    } else {
      tmp4 = null;
    }
    if (null != tmp4) {
      return tmp4;
    } else {
      const isMediaChannelResult = channel.isMediaChannel();
      const isNSFWResult = channel.isNSFW();
      const type3 = channel.type;
      if (tmp3.PRIVATE_THREAD !== type3) {
        if (tmp3.ANNOUNCEMENT_THREAD !== type3) {
          if (tmp3.PUBLIC_THREAD !== type3) {
            if (tmp3.GUILD_CATEGORY === type3) {
              return registerAssetDefault3;
            } else if (tmp3.GUILD_TEXT === type3) {
              if (isRulesChannel) {
                let tmp71 = registerAssetDefault19;
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp71 = registerAssetDefault11;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    registerAssetDefault12;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    let tmp74Result = tmp74(4971);
                  }
                }
                if (null != channel.linkedLobby) {
                  tmp74Result = tmp74(4978);
                } else {
                  tmp74Result = tmp74(4950);
                }
              }
              return tmp71;
            } else if (tmp3.GUILD_FORUM === type3) {
              if (isRulesChannel) {
                let tmp58 = registerAssetDefault19;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp58 = importDefault(isMediaChannelResult ? 4970 : 4967);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    registerAssetDefault16;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    if (channel.isGameInvitesChannel()) {
                      let tmp61Result = tmp61(4979);
                    } else {
                      tmp61Result = tmp61(isMediaChannelResult ? 4980 : 4981);
                    }
                  }
                }
                if (channel.isGameInvitesChannel()) {
                  tmp61Result = tmp61(4975);
                } else {
                  tmp61Result = tmp61(isMediaChannelResult ? 4969 : 4966);
                }
              }
              return tmp58;
            } else if (tmp3.GUILD_MEDIA === type3) {
              if (isRulesChannel) {
                let tmp48 = registerAssetDefault19;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp48 = registerAssetDefault17;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    registerAssetDefault16;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp51Result = tmp51(4980);
                  }
                }
                tmp51Result = tmp51(4969);
              }
              return tmp48;
            } else if (tmp3.GROUP_DM === type3) {
              return registerAssetDefault5;
            } else if (tmp3.DM === type3) {
              return registerAssetDefault6;
            } else if (tmp3.GUILD_ANNOUNCEMENT === type3) {
              if (isRulesChannel) {
                let tmp35 = registerAssetDefault19;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp35 = registerAssetDefault13;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    registerAssetDefault14;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp38Result = tmp38(4982);
                  }
                }
                tmp38Result = tmp38(4953);
              }
              return tmp35;
            } else if (tmp3.GUILD_STAGE_VOICE === type3) {
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (isRoleRequiredDefault(channel)) {
                    let tmp24Result = tmp24(4983);
                  } else {
                    tmp24Result = tmp24(4960);
                  }
                  return tmp24Result;
                }
              }
              if (locked) {
                let ignoreTraits13;
                if (ignoreTraits != null) {
                  ignoreTraits13 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits13) {
                  registerAssetDefault20;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp28Result = tmp28(4960);
                }
              }
              tmp28Result = tmp28(4954);
            } else if (tmp3.GUILD_VOICE === type3) {
              if (obj.textFocused) {
                let tmp9Result = registerAssetDefault15;
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequiredDefault(channel)) {
                      tmp9Result = tmp9(4983);
                    } else {
                      tmp9Result = tmp9(4957);
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    registerAssetDefault20;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    tmp13(4957);
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp13(4958);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp13Result1 = tmp13(4959);
                  }
                }
                tmp13Result1 = tmp13(4955);
              }
              return tmp9Result;
            } else if (tmp3.GUILD_DIRECTORY === type3) {
              return registerAssetDefault10;
            } else {
              return null;
            }
          }
        }
      }
      const type2 = channel.type;
      if (tmp3.PRIVATE_THREAD === type2) {
        let tmp82 = registerAssetDefault;
      } else if (tmp3.ANNOUNCEMENT_THREAD === type2) {
        tmp82 = registerAssetDefault2;
      } else {
        tmp82 = null;
      }
      return tmp82;
    }
  }
  const obj2 = shouldShowMembershipVerificationGate;
}
function getChannelIconComponent(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [closure_5, closure_6, closure_4];
  const result = shouldShowMembershipVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    channel = null;
    if (null != channel.parent_id) {
      channel = store.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      let ChatIcon = tmp(4984).ExperimentalLfgIcon;
    } else {
      ChatIcon = tmp(4985).ChatIcon;
    }
    return ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      return tmp(4986).ThreadLockIcon;
    } else {
      if (tmp6.ANNOUNCEMENT_THREAD !== type) {
        if (tmp6.PUBLIC_THREAD !== type) {
          if (tmp6.GUILD_CATEGORY === type) {
            return tmp(4988).FolderIcon;
          } else if (tmp6.GUILD_TEXT === type) {
            if (isRulesChannel) {
              let TextWarningIcon = tmp(4989).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                ignoreTraits = undefined;
                if (ignoreTraits != null) {
                  ignoreTraits = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits) {
                  TextWarningIcon = tmp(4990).TextWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits1;
                if (ignoreTraits != null) {
                  ignoreTraits1 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits1) {
                  const TextSpoilerIcon = tmp(4991).TextSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits2;
                if (ignoreTraits != null) {
                  ignoreTraits2 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits2) {
                  const TextLockIcon = tmp(4992).TextLockIcon;
                }
              }
              if (null != channel.linkedLobby) {
                let TextIcon = tmp(4993).TextControllerIcon;
              } else {
                TextIcon = tmp(4994).TextIcon;
              }
            }
            return TextWarningIcon;
          } else if (tmp6.GUILD_FORUM === type) {
            if (isRulesChannel) {
              let ForumWarningIcon = tmp(4989).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits3;
                if (ignoreTraits != null) {
                  ignoreTraits3 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits3) {
                  if (isMediaChannelResult) {
                    ForumWarningIcon = tmp(4995).ImageWarningIcon;
                  } else {
                    ForumWarningIcon = tmp(4996).ForumWarningIcon;
                  }
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits4;
                if (ignoreTraits != null) {
                  ignoreTraits4 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits4) {
                  const ForumSpoilerIcon2 = tmp(4997).ForumSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits5;
                if (ignoreTraits != null) {
                  ignoreTraits5 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits5) {
                  if (channel.isGameInvitesChannel()) {
                    let ForumLockIcon = tmp(4998).ExperimentalLfgLockIcon;
                  } else if (isMediaChannelResult) {
                    ForumLockIcon = tmp(4999).ImageLockIcon;
                  } else {
                    ForumLockIcon = tmp(5000).ForumLockIcon;
                  }
                }
              }
              if (channel.isGameInvitesChannel()) {
                let ForumIcon = tmp(4984).ExperimentalLfgIcon;
              } else if (isMediaChannelResult) {
                ForumIcon = tmp(5001).ImageIcon;
              } else {
                ForumIcon = tmp(5002).ForumIcon;
              }
            }
            return ForumWarningIcon;
          } else if (tmp6.GUILD_MEDIA === type) {
            if (isRulesChannel) {
              let ImageWarningIcon = tmp(4989).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits6;
                if (ignoreTraits != null) {
                  ignoreTraits6 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits6) {
                  ImageWarningIcon = tmp(4995).ImageWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits7;
                if (ignoreTraits != null) {
                  ignoreTraits7 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits7) {
                  const ForumSpoilerIcon = tmp(4997).ForumSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits8;
                if (ignoreTraits != null) {
                  ignoreTraits8 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits8) {
                  let ImageIcon = tmp(4999).ImageLockIcon;
                }
              }
              ImageIcon = tmp(5001).ImageIcon;
            }
            return ImageWarningIcon;
          } else if (tmp6.GROUP_DM === type) {
            return tmp(5003).GroupIcon;
          } else if (tmp6.DM === type) {
            return tmp(5004).AtIcon;
          } else if (tmp6.GUILD_ANNOUNCEMENT === type) {
            if (isRulesChannel) {
              let AnnouncementsWarningIcon = tmp(4989).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits9;
                if (ignoreTraits != null) {
                  ignoreTraits9 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits9) {
                  AnnouncementsWarningIcon = tmp(5005).AnnouncementsWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits10;
                if (ignoreTraits != null) {
                  ignoreTraits10 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits10) {
                  const AnnouncementsSpoilerIcon = tmp(5006).AnnouncementsSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits11;
                if (ignoreTraits != null) {
                  ignoreTraits11 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits11) {
                  let AnnouncementsIcon = tmp(5007).AnnouncementsLockIcon;
                }
              }
              AnnouncementsIcon = tmp(5008).AnnouncementsIcon;
            }
            return AnnouncementsWarningIcon;
          } else if (tmp6.GUILD_STAGE_VOICE === type) {
            if (result) {
              let ignoreTraits12;
              if (ignoreTraits != null) {
                ignoreTraits12 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits12) {
                if (isRoleRequiredDefault(channel)) {
                  let StageLockIcon = tmp(5009).LockIcon;
                } else {
                  StageLockIcon = tmp(5010).StageLockIcon;
                }
                return StageLockIcon;
              }
            }
            if (locked) {
              let ignoreTraits13;
              if (ignoreTraits != null) {
                ignoreTraits13 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits13) {
                const LockIcon2 = tmp(5009).LockIcon;
              }
            }
            if (isRoleRequiredDefault(channel)) {
              let ignoreTraits14;
              if (ignoreTraits != null) {
                ignoreTraits14 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits14) {
                let StageIcon = tmp(5010).StageLockIcon;
              }
            }
            StageIcon = tmp(5011).StageIcon;
          } else if (tmp6.GUILD_VOICE === type) {
            if (obj.textFocused) {
              let VoiceLockIcon = tmp(4985).ChatIcon;
            } else {
              if (result) {
                let ignoreTraits15;
                if (ignoreTraits != null) {
                  ignoreTraits15 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits15) {
                  if (isRoleRequiredDefault(channel)) {
                    VoiceLockIcon = tmp(5009).LockIcon;
                  } else {
                    VoiceLockIcon = tmp(5012).VoiceLockIcon;
                  }
                }
              }
              if (locked) {
                let ignoreTraits16;
                if (ignoreTraits != null) {
                  ignoreTraits16 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits16) {
                  const LockIcon = tmp(5009).LockIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits17;
                if (ignoreTraits != null) {
                  ignoreTraits17 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits17) {
                  const VoiceLockIcon2 = tmp(5012).VoiceLockIcon;
                }
              }
              if (isNSFWResult) {
                let ignoreTraits18;
                if (ignoreTraits != null) {
                  ignoreTraits18 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits18) {
                  const VoiceWarningIcon = tmp(5013).VoiceWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits19;
                if (ignoreTraits != null) {
                  ignoreTraits19 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits19) {
                  let VoiceNormalIcon = tmp(5014).VoiceNormalSpoilerIcon;
                }
              }
              VoiceNormalIcon = tmp(5015).VoiceNormalIcon;
            }
            return VoiceLockIcon;
          } else if (tmp6.GUILD_DIRECTORY === type) {
            return tmp(5016).HubIcon;
          }
        }
      }
      return tmp(4987).ThreadIcon;
    }
  }
  const obj2 = shouldShowMembershipVerificationGate;
}
let result = require("set").fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return registerAssetDefault;
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== arg0) {
      if (tmp.PUBLIC_THREAD !== arg0) {
        return null;
      }
    }
    return registerAssetDefault2;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type) {
    let tmp2 = registerAssetDefault;
  } else if (tmp.ANNOUNCEMENT_THREAD === type) {
    tmp2 = registerAssetDefault2;
  } else {
    tmp2 = null;
  }
  if (null != tmp2) {
    return tmp2;
  } else {
    const type3 = channel.type;
    if (tmp.PRIVATE_THREAD !== type3) {
      if (tmp.ANNOUNCEMENT_THREAD !== type3) {
        if (tmp.PUBLIC_THREAD !== type3) {
          if (tmp.GUILD_CATEGORY === type3) {
            return registerAssetDefault3;
          } else {
            if (tmp.GUILD_TEXT !== type3) {
              if (tmp.GUILD_FORUM !== type3) {
                if (tmp.GUILD_MEDIA !== type3) {
                  if (tmp.GROUP_DM === type3) {
                    return registerAssetDefault5;
                  } else if (tmp.DM === type3) {
                    return registerAssetDefault6;
                  } else if (tmp.GUILD_ANNOUNCEMENT === type3) {
                    return registerAssetDefault7;
                  } else if (tmp.GUILD_STAGE_VOICE === type3) {
                    return registerAssetDefault8;
                  } else if (tmp.GUILD_VOICE === type3) {
                    return registerAssetDefault9;
                  } else if (tmp.GUILD_DIRECTORY === type3) {
                    return registerAssetDefault10;
                  } else {
                    return null;
                  }
                }
              }
            }
            return registerAssetDefault4;
          }
        }
      }
    }
    const type2 = channel.type;
    if (tmp.PRIVATE_THREAD === type2) {
      let tmp23 = registerAssetDefault;
    } else if (tmp.ANNOUNCEMENT_THREAD === type2) {
      tmp23 = registerAssetDefault2;
    } else {
      tmp23 = null;
    }
    return tmp23;
  }
};
export const getChannelIconWithGuild = function getChannelIconWithGuild(channel, guild) {
  let rulesChannelId;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  return getChannelIcon(channel, { isRulesChannel: rulesChannelId === channel.id });
};
export const getChannelMentionIcon = function getChannelMentionIcon(iconType) {

};
export { getChannelIcon };
export const getChannelIconComponentWithGuild = function getChannelIconComponentWithGuild(channel, guild) {
  let rulesChannelId;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  return getChannelIconComponent(channel, { isRulesChannel: rulesChannelId === channel.id });
};
export { getChannelIconComponent };
export const getSimpleChannelIconComponent = function getSimpleChannelIconComponent(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (tmp.ANNOUNCEMENT_THREAD !== type) {
      if (tmp.PUBLIC_THREAD !== type) {
        if (tmp.GUILD_CATEGORY === type) {
          return FolderIcon.FolderIcon;
        } else if (tmp.GUILD_TEXT === type) {
          return TextIcon2.TextIcon;
        } else if (tmp.GUILD_FORUM === type) {
          return ForumIcon2.ForumIcon;
        } else if (tmp.GUILD_MEDIA === type) {
          return ImageIcon2.ImageIcon;
        } else if (tmp.GROUP_DM === type) {
          return GroupIcon.GroupIcon;
        } else if (tmp.DM === type) {
          return AtIcon.AtIcon;
        } else if (tmp.GUILD_ANNOUNCEMENT === type) {
          return AnnouncementsIcon2.AnnouncementsIcon;
        } else if (tmp.GUILD_STAGE_VOICE === type) {
          return StageIcon2.StageIcon;
        } else if (tmp.GUILD_VOICE === type) {
          return VoiceNormalIcon2.VoiceNormalIcon;
        } else if (tmp.GUILD_DIRECTORY === type) {
          return HubIcon.HubIcon;
        } else {
          return null;
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp23(4985).ChatIcon;
  } else {
    ThreadIcon = tmp23(4987).ThreadIcon;
  }
  return ThreadIcon;
};