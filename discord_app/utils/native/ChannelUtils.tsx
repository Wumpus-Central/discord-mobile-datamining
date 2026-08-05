// discord_app/utils/native/ChannelUtils.tsx
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ChannelTypes } from "ME";
import { registerAsset } from "../../../_runtime/04716_registerAsset.js";
import { registerAsset } from "../../../_runtime/04717_registerAsset.js";
import { registerAsset } from "../../../_runtime/04718_registerAsset.js";
import { registerAsset } from "../../../_runtime/04719_registerAsset.js";
import { registerAsset } from "../../../_runtime/04720_registerAsset.js";
import { registerAsset } from "../../../_runtime/04721_registerAsset.js";
import { registerAsset } from "../../../_runtime/04722_registerAsset.js";
import { registerAsset } from "../../../_runtime/04723_registerAsset.js";
import { registerAsset } from "../../../_runtime/04724_registerAsset.js";
import { registerAsset } from "../../../_runtime/04725_registerAsset.js";
import { registerAsset } from "../../../_runtime/04726_registerAsset.js";
import { registerAsset } from "../../../_runtime/04727_registerAsset.js";
import { registerAsset } from "../../../_runtime/04728_registerAsset.js";
import { registerAsset } from "../../../_runtime/04729_registerAsset.js";
import { registerAsset } from "../../../_runtime/04730_registerAsset.js";
import { registerAsset } from "../../../_runtime/04731_registerAsset.js";
import { registerAsset } from "../../../_runtime/04732_registerAsset.js";
import { registerAsset } from "../../../_runtime/04733_registerAsset.js";
import { registerAsset } from "../../../_runtime/04734_registerAsset.js";
import { registerAsset } from "../../../_runtime/04735_registerAsset.js";
import { registerAsset } from "../../../_runtime/04736_registerAsset.js";
import { registerAsset } from "../../../_runtime/04737_registerAsset.js";
import { registerAsset } from "../../../_runtime/04738_registerAsset.js";
import { registerAsset } from "../../../_runtime/04739_registerAsset.js";
import { registerAsset } from "../../../_runtime/04740_registerAsset.js";
import { registerAsset } from "../../../_runtime/04744_registerAsset.js";
import { registerAsset } from "../../../_runtime/04750_registerAsset.js";
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
                    let tmp72Result = tmp72(4740);
                  }
                }
                if (null != channel.linkedLobby) {
                  tmp72Result = tmp72(4746);
                } else {
                  tmp72Result = tmp72(4719);
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
                    tmp58 = importDefault(isMediaChannelResult ? 4739 : 4736);
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
                    tmp61(isMediaChannelResult ? 4747 : 4748);
                  }
                }
                importDefault(isMediaChannelResult ? 4738 : 4735);
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
                    let tmp51Result = tmp51(4747);
                  }
                }
                tmp51Result = tmp51(4738);
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
                    let tmp38Result = tmp38(4749);
                  }
                }
                tmp38Result = tmp38(4722);
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
                    let tmp24Result = tmp24(4750);
                  } else {
                    tmp24Result = tmp24(4729);
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
                  let tmp28Result = tmp28(4729);
                }
              }
              tmp28Result = tmp28(4723);
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
                      tmp9Result = tmp9(4750);
                    } else {
                      tmp9Result = tmp9(4726);
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
                    tmp13(4726);
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp13(4727);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp13Result1 = tmp13(4728);
                  }
                }
                tmp13Result1 = tmp13(4724);
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
    return tmp(4751).ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      return tmp(4752).ThreadLockIcon;
    } else {
      if (tmp6.ANNOUNCEMENT_THREAD !== type) {
        if (tmp6.PUBLIC_THREAD !== type) {
          if (tmp6.GUILD_CATEGORY === type) {
            return tmp(4754).FolderIcon;
          } else if (tmp6.GUILD_TEXT === type) {
            if (isRulesChannel) {
              let TextWarningIcon = tmp(4755).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                ignoreTraits = undefined;
                if (ignoreTraits != null) {
                  ignoreTraits = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits) {
                  TextWarningIcon = tmp(4756).TextWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits1;
                if (ignoreTraits != null) {
                  ignoreTraits1 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits1) {
                  const TextSpoilerIcon = tmp(4757).TextSpoilerIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits2;
                if (ignoreTraits != null) {
                  ignoreTraits2 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits2) {
                  const TextLockIcon = tmp(4758).TextLockIcon;
                }
              }
              if (null != channel.linkedLobby) {
                let TextIcon = tmp(4759).TextControllerIcon;
              } else {
                TextIcon = tmp(4760).TextIcon;
              }
            }
            return TextWarningIcon;
          } else if (tmp6.GUILD_FORUM === type) {
            if (isRulesChannel) {
              let ForumWarningIcon = tmp(4755).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits3;
                if (ignoreTraits != null) {
                  ignoreTraits3 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits3) {
                  if (isMediaChannelResult) {
                    ForumWarningIcon = tmp(4761).ImageWarningIcon;
                  } else {
                    ForumWarningIcon = tmp(4762).ForumWarningIcon;
                  }
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits4;
                if (ignoreTraits != null) {
                  ignoreTraits4 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits4) {
                  const ForumSpoilerIcon2 = tmp(4763).ForumSpoilerIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits5;
                if (ignoreTraits != null) {
                  ignoreTraits5 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits5) {
                  if (isMediaChannelResult) {
                    let ForumLockIcon = tmp(4764).ImageLockIcon;
                  } else {
                    ForumLockIcon = tmp(4765).ForumLockIcon;
                  }
                }
              }
              if (isMediaChannelResult) {
                let ForumIcon = tmp(4766).ImageIcon;
              } else {
                ForumIcon = tmp(4767).ForumIcon;
              }
            }
            return ForumWarningIcon;
          } else if (tmp6.GUILD_MEDIA === type) {
            if (isRulesChannel) {
              let ImageWarningIcon = tmp(4755).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits6;
                if (ignoreTraits != null) {
                  ignoreTraits6 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits6) {
                  ImageWarningIcon = tmp(4761).ImageWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits7;
                if (ignoreTraits != null) {
                  ignoreTraits7 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits7) {
                  const ForumSpoilerIcon = tmp(4763).ForumSpoilerIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits8;
                if (ignoreTraits != null) {
                  ignoreTraits8 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits8) {
                  let ImageIcon = tmp(4764).ImageLockIcon;
                }
              }
              ImageIcon = tmp(4766).ImageIcon;
            }
            return ImageWarningIcon;
          } else if (tmp6.GROUP_DM === type) {
            return tmp(4768).GroupIcon;
          } else if (tmp6.DM === type) {
            return tmp(4769).AtIcon;
          } else if (tmp6.GUILD_ANNOUNCEMENT === type) {
            if (isRulesChannel) {
              let AnnouncementsWarningIcon = tmp(4755).BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits9;
                if (ignoreTraits != null) {
                  ignoreTraits9 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits9) {
                  AnnouncementsWarningIcon = tmp(4770).AnnouncementsWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits10;
                if (ignoreTraits != null) {
                  ignoreTraits10 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits10) {
                  const AnnouncementsSpoilerIcon = tmp(4771).AnnouncementsSpoilerIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits11;
                if (ignoreTraits != null) {
                  ignoreTraits11 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits11) {
                  let AnnouncementsIcon = tmp(4772).AnnouncementsLockIcon;
                }
              }
              AnnouncementsIcon = tmp(4773).AnnouncementsIcon;
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
                  let StageLockIcon = tmp(4774).LockIcon;
                } else {
                  StageLockIcon = tmp(4775).StageLockIcon;
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
                const LockIcon2 = tmp(4774).LockIcon;
              }
            }
            if (isRoleRequired(channel)) {
              let ignoreTraits14;
              if (ignoreTraits != null) {
                ignoreTraits14 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits14) {
                let StageIcon = tmp(4775).StageLockIcon;
              }
            }
            StageIcon = tmp(4776).StageIcon;
          } else if (tmp6.GUILD_VOICE === type) {
            if (obj.textFocused) {
              let VoiceLockIcon = tmp(4751).ChatIcon;
            } else {
              if (result) {
                let ignoreTraits15;
                if (ignoreTraits != null) {
                  ignoreTraits15 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits15) {
                  if (isRoleRequired(channel)) {
                    VoiceLockIcon = tmp(4774).LockIcon;
                  } else {
                    VoiceLockIcon = tmp(4777).VoiceLockIcon;
                  }
                }
              }
              if (locked) {
                let ignoreTraits16;
                if (ignoreTraits != null) {
                  ignoreTraits16 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits16) {
                  const LockIcon = tmp(4774).LockIcon;
                }
              }
              if (isRoleRequired(channel)) {
                let ignoreTraits17;
                if (ignoreTraits != null) {
                  ignoreTraits17 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits17) {
                  const VoiceLockIcon2 = tmp(4777).VoiceLockIcon;
                }
              }
              if (isNSFWResult) {
                let ignoreTraits18;
                if (ignoreTraits != null) {
                  ignoreTraits18 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits18) {
                  const VoiceWarningIcon = tmp(4778).VoiceWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits19;
                if (ignoreTraits != null) {
                  ignoreTraits19 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits19) {
                  let VoiceNormalIcon = tmp(4779).VoiceNormalSpoilerIcon;
                }
              }
              VoiceNormalIcon = tmp(4780).VoiceNormalIcon;
            }
            return VoiceLockIcon;
          } else if (tmp6.GUILD_DIRECTORY === type) {
            return tmp(4781).HubIcon;
          }
        }
      }
      return tmp(4753).ThreadIcon;
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
  switch (iconType) {
    case "c":
    break;
    case "p":
    break;
    case "LIGHT":
    break;
    case "Map":
    break;
    case "Math":
    break;
    case "h":
    break;
    case "Number":
    break;
    case "Object":
    break;
    case "ct":
    break;
    case "PX_16":
    break;
    case "flex":
    break;
    case "flexDirection":
    break;
    case "PX_8":
    break;
    case "Path":
    break;
    case "Promise":
    break;
    case "i":
    break;
    case "s":
    break;
    case "Reflect":
    break;
    case "Set":
    break;
    case "format":
    break;
    case "formatToPlainString":
    break;
    case "String":
    break;
    case "Symbol":
    break;
    case "Text":
    break;
    case "x":
    break;
    case "View":
    break;
    case "w":
    break;
    case "WireType":
    break;
    case "__closure":
    break;
    case "__d":
    break;
    case "d":
    break;
    case "__esModule":
    break;
    case "__initData":
    break;
    case "filter":
    break;
    case "__packager_asset":
    break;
    case "k":
    break;
    case "set":
    break;
    case "__workletHash":
    break;
    case "_desired":
    break;
    case "_distance":
    break;
    case "st":
    break;
    case "accessibilityLabel":
    break;
    case "it":
    break;
    case "accessibilityRole":
    break;
    case "accessible":
    break;
    case "padding":
    break;
    case "paddingHorizontal":
    break;
    case "add":
    break;
    case "alignItems":
    break;
    case "ao":
    break;
    case "applicationId":
    break;
    case "ti":
    break;
    case "apply":
    break;
    case "backgroundColor":
    break;
    case "round":
    break;
    case "bm":
    break;
    case "body":
    break;
    case "borderRadius":
    break;
    case "bottom":
    break;
    case "call":
    break;
    case "channel":
    break;
    case "channelId":
    break;
    case "channel_id":
    break;
    case "id":
    break;
    case "children":
    break;
    case "cix":
    break;
    case "ix":
    break;
    case "unicodeVersion":
    break;
    case "code":
    break;
    case "color":
    break;
    case "colors":
    break;
    case "concat":
    break;
    case "constructor":
    break;
    case "container":
    break;
    case "content":
    break;
    case "context":
    break;
    case "text":
    break;
    case "count":
    break;
    case "create":
    break;
    case "createStyles":
    break;
    case "ty":
    break;
    case "current":
    break;
    case "cursor":
    break;
    case "data":
    break;
    case "ddd":
    break;
    case "default":
    break;
    case "defineProperty":
    break;
    case "op":
    break;
    case "delete":
    break;
    case "description":
    break;
    case "ip":
    break;
    case "disabled":
    break;
    case "sa":
    break;
    case "dispatch":
    break;
    case "displayName":
    break;
    case "diversity":
    break;
    case "v":
    break;
    case "done":
    break;
    case "duration":
    break;
    case "enabled":
    break;
    case "end":
    break;
    case "enumerable":
    break;
    case "error":
    break;
    case "exports":
    break;
    case "fileFinishedImporting":
    break;
    case "fill":
    break;
    case "find":
    break;
    case "ind":
      return registerAsset;
    case "flags":
    break;
    case "forEach":
      return registerAsset;
    case "gap":
    break;
    case "get":
      return registerAsset;
    case "getChannel":
    break;
    case "getCurrentUser":
      return registerAsset;
    case "getGuild":
    break;
    case "guild":
      return registerAsset;
    case "guildId":
    break;
    case "guild_id":
      return registerAsset;
    case "has":
    break;
    case "hasDiversityParent":
      return registerAsset;
    case "hash":
    break;
    case "hd":
      return registerAsset;
    case "header":
    break;
    case "height":
      return registerAsset;
    case "httpServerLocation":
    break;
    case "icon":
      return registerAsset;
    case "includes":
    break;
    case "index":
      return registerAsset;
    case "indexOf":
    break;
    case "intl":
      return registerAsset;
    case "items":
    break;
    case "join":
      return registerAsset;
    case "jsx":
    break;
    case "jsxs":
      let tmp15 = registerAsset;
      return tmp15;
    case "justifyContent":
    break;
    case "key":
      tmp15 = registerAsset;
      return tmp15;
    case "keys":
    break;
    case "kind":
      return registerAsset;
    case "ks":
    break;
    case "space":
      return registerAsset;
    case "label":
    break;
    case "lc":
      return registerAsset;
    case "left":
    break;
    case "length":
      return registerAsset;
    case "limit":
    break;
    case "lj":
      return registerAsset;
    case "loadJsonAsset":
    break;
    case "location":
      return registerAsset;
    case "map":
    break;
    case "marginTop":
    break;
    case "marginBottom":
    break;
    case "max":
    break;
    case "memo":
    break;
    case "message":
    break;
    case "messageId":
    break;
    case "method":
    break;
    case "methodobject":
    break;
    case "withTiming":
    break;
    case "min":
    break;
    case "ml":
    break;
    case "mn":
    break;
    case "mode":
    break;
    case "name":
    break;
    case "names":
    break;
    case "next":
    break;
    case "nm":
    break;
    case "no":
    break;
    case "now":
    break;
    case "np":
    break;
    case "track":
    break;
    case "onPress":
    break;
    case "opacity":
    break;
    case "options":
    break;
    case "parent":
    break;
    case "paths":
    break;
    case "pos":
    break;
    case "position":
    break;
    case "props":
    break;
    case "prototype":
    break;
    case "type":
    break;
    case "push":
    break;
    case "radii":
    break;
    case "raw":
    break;
    case "ref":
    break;
    case "registerAsset":
    break;
    case "rejectWithError":
    break;
    case "replace":
    break;
    case "resizeMode":
    break;
    case "size":
    break;
    case "resolve":
    break;
    case "result":
    break;
    case "right":
    break;
    case "runOnJS":
    break;
    case "scales":
    break;
    case "shapes":
    break;
    case "sk":
    break;
    case "skuId":
    break;
    case "slice":
    break;
    case "source":
    break;
    case "split":
    break;
    case "spriteIndex":
    break;
    case "sr":
    break;
    case "start":
    break;
    case "state":
    break;
    case "status":
    break;
    case "substring_i":
    break;
    case "string":
    break;
    case "style":
    break;
    case "surrogates":
    break;
    case "tag":
    break;
    case "test":
    break;
    case "then":
    break;
    case "title":
    break;
    case "toCharArray$esjava$1":
    break;
    case "toString":
    break;
    case "top":
    break;
    case "transform":
    break;
    case "uri":
    break;
    case "url":
    break;
    case "useCallback":
    break;
    case "useEffect":
    break;
    case "useMemo":
    break;
    case "useRef":
    break;
    case "useState":
    break;
    case "useStateFromStores":
    break;
    case "user":
    break;
    case "userId":
    break;
    case "value":
    break;
    case "values":
    break;
    case "variant":
    break;
    case "warn":
    break;
    case "width":
    break;
    case "window":
    break;
    case "withSpring":
    break;
    case "":
    break;
    case "isArrayBuffer":
    break;
    case "A":
    break;
    case "ay":
    break;
    case "getVoiceState":
    break;
    case "getVoiceStateChannelSummaryFromVoiceStates":
    break;
    case "ClipsSaveNoOpReason":
    break;
    case "firstChild":
    break;
    case "emojiLineHeight":
    break;
    case "$ZodBoolean":
    break;
    case "ZodBoolean":
    break;
    case "B":
    break;
    case "le":
    break;
    case "an":
    break;
    case "n":
    break;
    case "useActionBarPrimaryButton":
    break;
    case "ActionBarPrimaryButton":
    break;
    case "ary":
    break;
    case "u":
    break;
    case "tt":
    break;
    case "on":
    break;
    case "BOOST_SETTINGS":
    break;
    case "SETTINGS_APPEARANCE":
    break;
    case "SETTINGS_APPEARANCE_DARK_MODE_THEME_PICKER":
    break;
    case "APPEARANCE":
    break;
    case "APPEARANCE_DARK_MODE_THEME_PICKER":
    break;
    case "D":
    break;
    case "DARK_MODE_THEME_PICKER":
    break;
    case "R":
    break;
    case "K":
    break;
    case "RPC_VOICE_WRITE":
    break;
    case "$ZodDate":
    break;
    case "ZodDate":
    break;
    case "DateParser":
    break;
    case "at":
    break;
    case "te":
    break;
    case "serializeDate":
    break;
    case "MarkupParserNodeTypeError":
    break;
    case "E":
    break;
    case "Err":
    break;
    case "ro":
    break;
    case "or":
    break;
    case "_createRenderMask":
    break;
    case "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE":
    break;
    case "BOT_HTTP_INTERACTIONS":
    break;
    case "H":
    break;
    case "HT":
    break;
    case "TP":
    break;
    case "P":
    break;
    case "INTERACTIONS":
    break;
    case "NSFW_SPACE_WARNING_MODAL_CLICKED":
    break;
    case "rm":
    break;
    case "m":
    break;
    case "me":
    break;
    case "mes":
    break;
    case "I":
    break;
    case "InternalCard":
    break;
    case "ter":
    break;
    case "na":
    break;
    case "al":
    break;
    case "CardStyleInterpolators":
    break;
    case "pol":
    break;
    case "ImageFileIcon":
    break;
    case "FileIcon":
    break;
    case "hasSameRoleAsUsername":
    break;
    case "getChannelIcon":
    break;
    case "getChannelIconComponent":
    break;
    case "getChannelIconComponentWithGuild":
    break;
    case "co":
    break;
    case "C":
    break;
    case "Component":
    break;
    case "om":
    break;
    case "mp":
    break;
    case "po":
    break;
    case "pon":
    break;
    case "one":
    break;
    case "ne":
    break;
    case "en":
    break;
    case "USE_APP_COMMAND":
    break;
    case "ANDROID_NOTIFICATION_LIGHTS":
    break;
    case "L":
    break;
    case "LI":
    break;
    case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
    break;
    case "REQUIRE_SAFETY_FLOWS":
    break;
    case "SAFETY_FLOWS":
    break;
    case "SAFETY_FLOWS_MODAL_KEY":
    break;
    case "$ZodMap":
    break;
    case "ZodMap":
    break;
    case "M":
    break;
    case "ap":
    break;
    case "$ZodCheckGreaterThan":
    break;
    case "ToIntlMathematicalValue":
    break;
    case "th":
    break;
    case "ValueSetter":
    break;
    case "$ZodCheckNumberFormat":
    break;
    case "N":
    break;
    case "NumberFormat":
    break;
    case "um":
    break;
    case "b":
    break;
    case "be":
    break;
    case "$ZodObject":
    break;
    case "$ZodObjectJIT":
    break;
    case "ZodObject":
    break;
    case "O":
    break;
    case "j":
    break;
    case "je":
    break;
    case "IT":
    break;
    case "MEDIA_PICKER_SEND_BUTTON_SPRING":
    break;
    case "marginHorizontal":
    break;
    case "Direction":
    break;
    case "rect":
    break;
    case "DESIGN_SYSTEM_ALERT_MODAL":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "disableTrack":
    break;
    case "isTV":
    break;
    case "TVAntennaCable":
    break;
    case "empty_nest":
    break;
    case "_nestedChildLists":
    break;
    case "nested":
    break;
    case "shouldShowSpoilerGateForChannelId":
    break;
    case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
    break;
    case "RNSVGClipPath":
    break;
    case "ClipPath":
    break;
    case "$ZodPromise":
    break;
    case "ZodPromise":
    break;
    case "PromiseDeduper":
    break;
    case "mi":
    break;
    case "is":
    break;
    case "se":
    break;
    case "dup":
    break;
    case "perGuildMaxCount":
    break;
    case "useEmptyStatePlatforms":
    break;
    case "PREMIUM_PLANS":
    break;
    case "ANSWER_HAS":
    break;
    case "HAS_APPLICATION":
    break;
    case "APPLICATION_COMMAND_INDEX_CHANNEL":
    break;
    case "CHANNEL_ACTION_BANNER_HEIGHT":
    break;
    case "BANNER_HEIGHT":
    break;
    case "fgClip":
    break;
    case "ClipViewAnimated":
    break;
    case "AnimatedFlashList":
    break;
    case "FlashList":
    break;
    case "FlashListRef":
    break;
    case "las":
    break;
    case "ReflectionBinaryReader":
    break;
    case "ef":
    break;
    case "f":
    break;
    case "BinaryReader":
    break;
    case "compressionMethod":
    break;
    case "updateGuildNotificationSettings":
    break;
    case "GuildNotificationSettingsFlags":
    break;
    case "CHANNEL_LINK_PREVIEW_JOINED":
    break;
    case "DOUBLE_TAP_REACT_UPSELL":
    break;
    case "LaunchMail":
    break;
    case "MailForward":
    break;
    case "adler":
    break;
    case "includeTaskTypes":
    break;
    case "APP_DIRECTORY_SETTINGS_NEW_PILL":
    break;
    case "sza":
    break;
    case "awaitStorage":
    break;
    case "$ZodSet":
    break;
    case "ZodSet":
    break;
    case "S":
    break;
    case "et":
    break;
    case "ReferenceError":
    break;
    case "postformat":
    break;
    case "form":
    break;
    case "orm":
    break;
    case "ma":
    break;
    case "mat":
    break;
    case "lai":
    break;
    case "StringBuilder":
    break;
    case "tr":
    break;
    case "tri":
    break;
    case "ring":
    break;
    case "in":
    break;
    case "ing":
    break;
    case "ng":
    break;
    case "g":
    break;
    case "langtag":
    break;
    case "tagIcon":
    break;
    case "tagIconUrl":
    break;
    case "$ZodSymbol":
    break;
    case "ZodSymbol":
    break;
    case "SymbolLock":
    break;
    case "bo":
    break;
    case "bol":
    break;
    case "QUEST_BOTTOM_SHEET":
    break;
    case "MAX_DAYS_AHEAD_AN_EVENT_CAN_END":
    break;
    case "dashedTint":
    break;
    case "interactive":
    break;
    case "interactiveFilter":
    break;
    case "lastReceivedChangelogId":
    break;
    case "fullScreenSwipeEnabled":
    break;
    case "ActionSheetHeaderPressableText":
    break;
    case "Pressable":
    break;
    case "ex":
    break;
    case "ext":
    break;
    case "isLegacyOverlayEnabled":
    break;
    case "AccessibilityFocusView":
    break;
    case "V":
    break;
    case "W":
    break;
    case "ir":
    break;
    case "re":
    break;
    case "reType":
    break;
    case "pe":
    break;
    case "maxDynamicContentSize":
    break;
    default:
      return null;
  }
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
    let ThreadIcon = tmp23(4751).ChatIcon;
  } else {
    ThreadIcon = tmp23(4753).ThreadIcon;
  }
  return ThreadIcon;
};