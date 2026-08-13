// discord_app/utils/native/ChannelUtils.tsx
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ChannelTypes } from "ME";
import { registerAsset } from "../../../_runtime/04806_registerAsset.js";
import { registerAsset } from "../../../_runtime/04807_registerAsset.js";
import { registerAsset } from "../../../_runtime/04808_registerAsset.js";
import { registerAsset } from "../../../_runtime/04809_registerAsset.js";
import { registerAsset } from "../../../_runtime/04810_registerAsset.js";
import { registerAsset } from "../../../_runtime/04811_registerAsset.js";
import { registerAsset } from "../../../_runtime/04812_registerAsset.js";
import { registerAsset } from "../../../_runtime/04813_registerAsset.js";
import { registerAsset } from "../../../_runtime/04814_registerAsset.js";
import { registerAsset } from "../../../_runtime/04815_registerAsset.js";
import { registerAsset } from "../../../_runtime/04820_registerAsset.js";
import { registerAsset } from "../../../_runtime/04821_registerAsset.js";
import { registerAsset } from "../../../_runtime/04822_registerAsset.js";
import { registerAsset } from "../../../_runtime/04823_registerAsset.js";
import { registerAsset } from "../../../_runtime/04824_registerAsset.js";
import { registerAsset } from "../../../_runtime/04827_registerAsset.js";
import { registerAsset } from "../../../_runtime/04829_registerAsset.js";
import { registerAsset } from "../../../_runtime/04830_registerAsset.js";
import { registerAsset } from "../../../_runtime/04834_registerAsset.js";
import { registerAsset } from "../../../_runtime/04840_registerAsset.js";
import { AnnouncementsIcon } from "../../design/components/Icon/native/redesign/generated/AnnouncementsIcon.tsx";
import { AtIcon } from "../../design/components/Icon/native/redesign/generated/AtIcon.tsx";
import { FolderIcon } from "../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import { ForumIcon } from "../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import { GroupIcon } from "../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
import { HubIcon } from "../../design/components/Icon/native/redesign/generated/HubIcon.tsx";
import { ImageIcon } from "../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import { StageIcon } from "../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import { TextIcon } from "../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import { VoiceNormalIcon } from "../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import { isRoleRequired } from "../../modules/channel/isRoleRequired.tsx";
import { shouldShowMembershipVerificationGate } from "../../modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx";

const require = arg1;
function getChannelIcon(channel, ignoreTraits) {
  let isRulesChannel;
  let locked;
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [createGuildRecordFromRust, mergeGuildAvatar, trackCommunicationDisabled];
  const result = shouldShowMembershipVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    return registerAsset;
  } else {
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      let tmp4 = registerAsset;
    } else if (tmp3.ANNOUNCEMENT_THREAD === type) {
      tmp4 = registerAsset;
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
              return registerAsset;
            } else if (tmp3.GUILD_TEXT === type3) {
              if (isRulesChannel) {
                let tmp69 = registerAsset;
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp69 = registerAsset;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    registerAsset;
                  }
                }
                if (isRoleRequired(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    let tmp72Result = tmp72(4830);
                  }
                }
                if (null != channel.linkedLobby) {
                  tmp72Result = tmp72(4836);
                } else {
                  tmp72Result = tmp72(4809);
                }
              }
              return tmp69;
            } else if (tmp3.GUILD_FORUM === type3) {
              if (isRulesChannel) {
                let tmp58 = registerAsset;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp58 = importDefault(isMediaChannelResult ? 4829 : 4826);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    registerAsset;
                  }
                }
                if (isRoleRequired(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    tmp61(isMediaChannelResult ? 4837 : 4838);
                  }
                }
                importDefault(isMediaChannelResult ? 4828 : 4825);
              }
              return tmp58;
            } else if (tmp3.GUILD_MEDIA === type3) {
              if (isRulesChannel) {
                let tmp48 = registerAsset;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp48 = registerAsset;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    registerAsset;
                  }
                }
                if (isRoleRequired(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp51Result = tmp51(4837);
                  }
                }
                tmp51Result = tmp51(4828);
              }
              return tmp48;
            } else if (tmp3.GROUP_DM === type3) {
              return registerAsset;
            } else if (tmp3.DM === type3) {
              return registerAsset;
            } else if (tmp3.GUILD_ANNOUNCEMENT === type3) {
              if (isRulesChannel) {
                let tmp35 = registerAsset;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp35 = registerAsset;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    registerAsset;
                  }
                }
                if (isRoleRequired(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp38Result = tmp38(4839);
                  }
                }
                tmp38Result = tmp38(4812);
              }
              return tmp35;
            } else if (tmp3.GUILD_STAGE_VOICE === type3) {
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (isRoleRequired(channel)) {
                    let tmp24Result = tmp24(4840);
                  } else {
                    tmp24Result = tmp24(4819);
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
                  registerAsset;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp28Result = tmp28(4819);
                }
              }
              tmp28Result = tmp28(4813);
            } else if (tmp3.GUILD_VOICE === type3) {
              if (obj.textFocused) {
                let tmp9Result = registerAsset;
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequired(channel)) {
                      tmp9Result = tmp9(4840);
                    } else {
                      tmp9Result = tmp9(4816);
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    registerAsset;
                  }
                }
                if (isRoleRequired(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    tmp13(4816);
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp13(4817);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp13Result1 = tmp13(4818);
                  }
                }
                tmp13Result1 = tmp13(4814);
              }
              return tmp9Result;
            } else if (tmp3.GUILD_DIRECTORY === type3) {
              return registerAsset;
            } else {
              return null;
            }
          }
        }
      }
      const type2 = channel.type;
      if (tmp3.PRIVATE_THREAD === type2) {
        let tmp80 = registerAsset;
      } else if (tmp3.ANNOUNCEMENT_THREAD === type2) {
        tmp80 = registerAsset;
      } else {
        tmp80 = null;
      }
      return tmp80;
    }
  }
  const obj2 = shouldShowMembershipVerificationGate;
}
function getChannelIconComponent(channel, ignoreTraits) {
  let isRulesChannel;
  let locked;
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [createGuildRecordFromRust, mergeGuildAvatar, trackCommunicationDisabled];
  const result = shouldShowMembershipVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    return tmp(4841).ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      return tmp(4842).ThreadLockIcon;
    } else {
      if (tmp6.ANNOUNCEMENT_THREAD !== type) {
        if (tmp6.PUBLIC_THREAD !== type) {
          if (tmp6.GUILD_CATEGORY === type) {
            return tmp(4844).FolderIcon;
          } else if (tmp6.GUILD_TEXT === type) {
            if (isRulesChannel) {
              let TextWarningIcon = tmp(4845).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                ignoreTraits = undefined;
                if (ignoreTraits != null) {
                  ignoreTraits = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits) {
                  TextWarningIcon = tmp(4846).TextWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits1;
                if (ignoreTraits != null) {
                  ignoreTraits1 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits1) {
                  const TextSpoilerIcon = tmp(4847).TextSpoilerIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits2;
                if (ignoreTraits != null) {
                  ignoreTraits2 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits2) {
                  const TextLockIcon = tmp(4848).TextLockIcon;
                }
              }
              if (null != channel.linkedLobby) {
                let TextIcon = tmp(4849).TextControllerIcon;
              } else {
                TextIcon = tmp(4850).TextIcon;
              }
            }
            return TextWarningIcon;
          } else if (tmp6.GUILD_FORUM === type) {
            if (isRulesChannel) {
              let ForumWarningIcon = tmp(4845).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits3;
                if (ignoreTraits != null) {
                  ignoreTraits3 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits3) {
                  if (isMediaChannelResult) {
                    ForumWarningIcon = tmp(4851).ImageWarningIcon;
                  } else {
                    ForumWarningIcon = tmp(4852).ForumWarningIcon;
                  }
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits4;
                if (ignoreTraits != null) {
                  ignoreTraits4 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits4) {
                  const ForumSpoilerIcon2 = tmp(4853).ForumSpoilerIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits5;
                if (ignoreTraits != null) {
                  ignoreTraits5 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits5) {
                  if (isMediaChannelResult) {
                    let ForumLockIcon = tmp(4854).ImageLockIcon;
                  } else {
                    ForumLockIcon = tmp(4855).ForumLockIcon;
                  }
                }
              }
              if (isMediaChannelResult) {
                let ForumIcon = tmp(4856).ImageIcon;
              } else {
                ForumIcon = tmp(4857).ForumIcon;
              }
            }
            return ForumWarningIcon;
          } else if (tmp6.GUILD_MEDIA === type) {
            if (isRulesChannel) {
              let ImageWarningIcon = tmp(4845).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits6;
                if (ignoreTraits != null) {
                  ignoreTraits6 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits6) {
                  ImageWarningIcon = tmp(4851).ImageWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits7;
                if (ignoreTraits != null) {
                  ignoreTraits7 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits7) {
                  const ForumSpoilerIcon = tmp(4853).ForumSpoilerIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits8;
                if (ignoreTraits != null) {
                  ignoreTraits8 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits8) {
                  let ImageIcon = tmp(4854).ImageLockIcon;
                }
              }
              ImageIcon = tmp(4856).ImageIcon;
            }
            return ImageWarningIcon;
          } else if (tmp6.GROUP_DM === type) {
            return tmp(4858).GroupIcon;
          } else if (tmp6.DM === type) {
            return tmp(4859).AtIcon;
          } else if (tmp6.GUILD_ANNOUNCEMENT === type) {
            if (isRulesChannel) {
              let AnnouncementsWarningIcon = tmp(4845).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits9;
                if (ignoreTraits != null) {
                  ignoreTraits9 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits9) {
                  AnnouncementsWarningIcon = tmp(4860).AnnouncementsWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits10;
                if (ignoreTraits != null) {
                  ignoreTraits10 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits10) {
                  const AnnouncementsSpoilerIcon = tmp(4861).AnnouncementsSpoilerIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits11;
                if (ignoreTraits != null) {
                  ignoreTraits11 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits11) {
                  let AnnouncementsIcon = tmp(4862).AnnouncementsLockIcon;
                }
              }
              AnnouncementsIcon = tmp(4863).AnnouncementsIcon;
            }
            return AnnouncementsWarningIcon;
          } else if (tmp6.GUILD_STAGE_VOICE === type) {
            if (result) {
              let ignoreTraits12;
              if (ignoreTraits != null) {
                ignoreTraits12 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits12) {
                if (isRoleRequired(channel)) {
                  let StageLockIcon = tmp(4864).LockIcon;
                } else {
                  StageLockIcon = tmp(4865).StageLockIcon;
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
                const LockIcon2 = tmp(4864).LockIcon;
              }
            }
            if (isRoleRequired(channel)) {
              let ignoreTraits14;
              if (ignoreTraits != null) {
                ignoreTraits14 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits14) {
                let StageIcon = tmp(4865).StageLockIcon;
              }
            }
            StageIcon = tmp(4866).StageIcon;
          } else if (tmp6.GUILD_VOICE === type) {
            if (obj.textFocused) {
              let VoiceLockIcon = tmp(4841).ChatIcon;
            } else {
              if (result) {
                let ignoreTraits15;
                if (ignoreTraits != null) {
                  ignoreTraits15 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits15) {
                  if (isRoleRequired(channel)) {
                    VoiceLockIcon = tmp(4864).LockIcon;
                  } else {
                    VoiceLockIcon = tmp(4867).VoiceLockIcon;
                  }
                }
              }
              if (locked) {
                let ignoreTraits16;
                if (ignoreTraits != null) {
                  ignoreTraits16 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits16) {
                  const LockIcon = tmp(4864).LockIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits17;
                if (ignoreTraits != null) {
                  ignoreTraits17 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits17) {
                  const VoiceLockIcon2 = tmp(4867).VoiceLockIcon;
                }
              }
              if (isNSFWResult) {
                let ignoreTraits18;
                if (ignoreTraits != null) {
                  ignoreTraits18 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits18) {
                  const VoiceWarningIcon = tmp(4868).VoiceWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits19;
                if (ignoreTraits != null) {
                  ignoreTraits19 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits19) {
                  let VoiceNormalIcon = tmp(4869).VoiceNormalSpoilerIcon;
                }
              }
              VoiceNormalIcon = tmp(4870).VoiceNormalIcon;
            }
            return VoiceLockIcon;
          } else if (tmp6.GUILD_DIRECTORY === type) {
            return tmp(4871).HubIcon;
          }
        }
      }
      return tmp(4843).ThreadIcon;
    }
  }
  const obj2 = shouldShowMembershipVerificationGate;
}
let result = require("mergeGuildAvatar").fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return registerAsset;
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== arg0) {
      if (tmp.PUBLIC_THREAD !== arg0) {
        return null;
      }
    }
    return registerAsset;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type) {
    let tmp2 = registerAsset;
  } else if (tmp.ANNOUNCEMENT_THREAD === type) {
    tmp2 = registerAsset;
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
            return registerAsset;
          } else {
            if (tmp.GUILD_TEXT !== type3) {
              if (tmp.GUILD_FORUM !== type3) {
                if (tmp.GUILD_MEDIA !== type3) {
                  if (tmp.GROUP_DM === type3) {
                    return registerAsset;
                  } else if (tmp.DM === type3) {
                    return registerAsset;
                  } else if (tmp.GUILD_ANNOUNCEMENT === type3) {
                    return registerAsset;
                  } else if (tmp.GUILD_STAGE_VOICE === type3) {
                    return registerAsset;
                  } else if (tmp.GUILD_VOICE === type3) {
                    return registerAsset;
                  } else if (tmp.GUILD_DIRECTORY === type3) {
                    return registerAsset;
                  } else {
                    return null;
                  }
                }
              }
            }
            return registerAsset;
          }
        }
      }
    }
    const type2 = channel.type;
    if (tmp.PRIVATE_THREAD === type2) {
      let tmp23 = registerAsset;
    } else if (tmp.ANNOUNCEMENT_THREAD === type2) {
      tmp23 = registerAsset;
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
  return registerAsset;
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
          return TextIcon.TextIcon;
        } else if (tmp.GUILD_FORUM === type) {
          return ForumIcon.ForumIcon;
        } else if (tmp.GUILD_MEDIA === type) {
          return ImageIcon.ImageIcon;
        } else if (tmp.GROUP_DM === type) {
          return GroupIcon.GroupIcon;
        } else if (tmp.DM === type) {
          return AtIcon.AtIcon;
        } else if (tmp.GUILD_ANNOUNCEMENT === type) {
          return AnnouncementsIcon.AnnouncementsIcon;
        } else if (tmp.GUILD_STAGE_VOICE === type) {
          return StageIcon.StageIcon;
        } else if (tmp.GUILD_VOICE === type) {
          return VoiceNormalIcon.VoiceNormalIcon;
        } else if (tmp.GUILD_DIRECTORY === type) {
          return HubIcon.HubIcon;
        } else {
          return null;
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp23(4841).ChatIcon;
  } else {
    ThreadIcon = tmp23(4843).ThreadIcon;
  }
  return ThreadIcon;
};