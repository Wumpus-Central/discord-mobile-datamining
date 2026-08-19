// discord_app/utils/native/ChannelUtils.tsx
import isRoleRequiredDefault from "../../modules/channel/isRoleRequired.tsx";
import registerAssetDefault from "../../../_runtime/06833_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/06834_registerAsset.js";
import registerAssetDefault3 from "../../../_runtime/06835_registerAsset.js";
import registerAssetDefault4 from "../../../_runtime/06836_registerAsset.js";
import registerAssetDefault5 from "../../../_runtime/06837_registerAsset.js";
import registerAssetDefault6 from "../../../_runtime/06838_registerAsset.js";
import registerAssetDefault7 from "../../../_runtime/06839_registerAsset.js";
import registerAssetDefault8 from "../../../_runtime/06840_registerAsset.js";
import registerAssetDefault9 from "../../../_runtime/06841_registerAsset.js";
import registerAssetDefault10 from "../../../_runtime/06842_registerAsset.js";
import registerAssetDefault11 from "../../../_runtime/06843_registerAsset.js";
import registerAssetDefault12 from "../../../_runtime/06844_registerAsset.js";
import registerAssetDefault13 from "../../../_runtime/06845_registerAsset.js";
import registerAssetDefault14 from "../../../_runtime/06846_registerAsset.js";
import registerAssetDefault15 from "../../../_runtime/06847_registerAsset.js";
import registerAssetDefault16 from "../../../_runtime/06848_registerAsset.js";
import registerAssetDefault17 from "../../../_runtime/06849_registerAsset.js";
import registerAssetDefault18 from "../../../_runtime/06850_registerAsset.js";
import registerAssetDefault19 from "../../../_runtime/06851_registerAsset.js";
import registerAssetDefault20 from "../../../_runtime/06852_registerAsset.js";
import registerAssetDefault21 from "../../../_runtime/06853_registerAsset.js";
import registerAssetDefault22 from "../../../_runtime/06854_registerAsset.js";
import registerAssetDefault23 from "../../../_runtime/06855_registerAsset.js";
import registerAssetDefault24 from "../../../_runtime/06856_registerAsset.js";
import registerAssetDefault25 from "../../../_runtime/06857_registerAsset.js";
import shouldShowMembershipVerificationGate from "../../modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx";
import registerAssetDefault26 from "../../../_runtime/06861_registerAsset.js";
import registerAssetDefault27 from "../../../_runtime/06862_registerAsset.js";
import registerAssetDefault28 from "../../../_runtime/06863_registerAsset.js";
import registerAssetDefault29 from "../../../_runtime/06865_registerAsset.js";
import registerAssetDefault30 from "../../../_runtime/06866_registerAsset.js";
import ChatIcon from "../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import ThreadLockIcon from "../../design/components/Icon/native/redesign/generated/ThreadLockIcon.tsx";
import ThreadIcon2 from "../../design/components/Icon/native/redesign/generated/ThreadIcon.tsx";
import FolderIcon from "../../design/components/Icon/native/redesign/generated/FolderIcon.tsx";
import BookCheckIcon from "../../design/components/Icon/native/redesign/generated/BookCheckIcon.tsx";
import TextWarningIcon2 from "../../design/components/Icon/native/redesign/generated/TextWarningIcon.tsx";
import TextSpoilerIcon2 from "../../design/components/Icon/native/redesign/generated/TextSpoilerIcon.tsx";
import TextLockIcon2 from "../../design/components/Icon/native/redesign/generated/TextLockIcon.tsx";
import TextControllerIcon from "../../design/components/Icon/native/redesign/generated/TextControllerIcon.tsx";
import TextIcon2 from "../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import ImageWarningIcon2 from "../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import ForumWarningIcon2 from "../../design/components/Icon/native/redesign/generated/ForumWarningIcon.tsx";
import ForumSpoilerIcon3 from "../../design/components/Icon/native/redesign/generated/ForumSpoilerIcon.tsx";
import ImageLockIcon from "../../design/components/Icon/native/redesign/generated/ImageLockIcon.tsx";
import ForumLockIcon2 from "../../design/components/Icon/native/redesign/generated/ForumLockIcon.tsx";
import ImageIcon2 from "../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import ForumIcon2 from "../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import GroupIcon from "../../design/components/Icon/native/redesign/generated/GroupIcon.tsx";
import AtIcon from "../../design/components/Icon/native/redesign/generated/AtIcon.tsx";
import AnnouncementsWarningIcon2 from "../../design/components/Icon/native/redesign/generated/AnnouncementsWarningIcon.tsx";
import AnnouncementsSpoilerIcon2 from "../../design/components/Icon/native/redesign/generated/AnnouncementsSpoilerIcon.tsx";
import AnnouncementsLockIcon from "../../design/components/Icon/native/redesign/generated/AnnouncementsLockIcon.tsx";
import AnnouncementsIcon2 from "../../design/components/Icon/native/redesign/generated/AnnouncementsIcon.tsx";
import LockIcon3 from "../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import StageLockIcon2 from "../../design/components/Icon/native/redesign/generated/StageLockIcon.tsx";
import StageIcon2 from "../../design/components/Icon/native/redesign/generated/StageIcon.tsx";
import VoiceLockIcon3 from "../../design/components/Icon/native/redesign/generated/VoiceLockIcon.tsx";
import VoiceWarningIcon2 from "../../design/components/Icon/native/redesign/generated/VoiceWarningIcon.tsx";
import VoiceNormalSpoilerIcon from "../../design/components/Icon/native/redesign/generated/VoiceNormalSpoilerIcon.tsx";
import VoiceNormalIcon2 from "../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import HubIcon from "../../design/components/Icon/native/redesign/generated/HubIcon.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { ChannelTypes } from "../../Constants.tsx";

require = fn;
function getChannelIcon(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [closure_4, closure_5, closure_3];
  const result = shouldShowMembershipVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    return registerAssetDefault19;
  } else {
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      let tmp4 = registerAssetDefault;
    } else if (ChannelTypes.ANNOUNCEMENT_THREAD === type) {
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
      if (ChannelTypes.PRIVATE_THREAD !== type3) {
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type3) {
          if (ChannelTypes.PUBLIC_THREAD !== type3) {
            if (ChannelTypes.GUILD_CATEGORY === type3) {
              return registerAssetDefault3;
            } else if (ChannelTypes.GUILD_TEXT === type3) {
              if (isRulesChannel) {
                let tmp69 = registerAssetDefault26;
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp69 = registerAssetDefault15;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    registerAssetDefault16;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    let tmp72Result = registerAssetDefault25;
                  }
                }
                if (null != channel.linkedLobby) {
                  tmp72Result = registerAssetDefault27;
                } else {
                  tmp72Result = registerAssetDefault4;
                }
              }
              return tmp69;
            } else if (ChannelTypes.GUILD_FORUM === type3) {
              if (isRulesChannel) {
                let tmp58 = registerAssetDefault26;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp58 = importDefault(isMediaChannelResult ? 6856 : 6853);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    registerAssetDefault22;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    importDefault(isMediaChannelResult ? 6863 : 6864);
                  }
                }
                importDefault(isMediaChannelResult ? 6855 : 6852);
              }
              return tmp58;
            } else if (ChannelTypes.GUILD_MEDIA === type3) {
              if (isRulesChannel) {
                let tmp48 = registerAssetDefault26;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp48 = registerAssetDefault24;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    registerAssetDefault22;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp51Result = registerAssetDefault28;
                  }
                }
                tmp51Result = registerAssetDefault23;
              }
              return tmp48;
            } else if (ChannelTypes.GROUP_DM === type3) {
              return registerAssetDefault5;
            } else if (ChannelTypes.DM === type3) {
              return registerAssetDefault6;
            } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type3) {
              if (isRulesChannel) {
                let tmp35 = registerAssetDefault26;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp35 = registerAssetDefault17;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    registerAssetDefault18;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp38Result = registerAssetDefault29;
                  }
                }
                tmp38Result = registerAssetDefault7;
              }
              return tmp35;
            } else if (ChannelTypes.GUILD_STAGE_VOICE === type3) {
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (isRoleRequiredDefault(channel)) {
                    let tmp24Result = registerAssetDefault30;
                  } else {
                    tmp24Result = registerAssetDefault14;
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
                  registerAssetDefault30;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp28Result = registerAssetDefault14;
                }
              }
              tmp28Result = registerAssetDefault8;
            } else if (ChannelTypes.GUILD_VOICE === type3) {
              if (obj.textFocused) {
                let tmp9Result = registerAssetDefault19;
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequiredDefault(channel)) {
                      tmp9Result = registerAssetDefault30;
                    } else {
                      tmp9Result = registerAssetDefault11;
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    registerAssetDefault30;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    registerAssetDefault11;
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    registerAssetDefault12;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp13Result1 = registerAssetDefault13;
                  }
                }
                tmp13Result1 = registerAssetDefault9;
              }
              return tmp9Result;
            } else if (ChannelTypes.GUILD_DIRECTORY === type3) {
              return registerAssetDefault10;
            } else {
              return null;
            }
          }
        }
      }
      const type2 = channel.type;
      if (ChannelTypes.PRIVATE_THREAD === type2) {
        let tmp80 = registerAssetDefault;
      } else if (ChannelTypes.ANNOUNCEMENT_THREAD === type2) {
        tmp80 = registerAssetDefault2;
      } else {
        tmp80 = null;
      }
      return tmp80;
    }
  }
}
function getChannelIconComponent(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [closure_4, closure_5, closure_3];
  const result = shouldShowMembershipVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    return ChatIcon.ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      return ThreadLockIcon.ThreadLockIcon;
    } else {
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
        if (ChannelTypes.PUBLIC_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return FolderIcon.FolderIcon;
          } else if (ChannelTypes.GUILD_TEXT === type) {
            if (isRulesChannel) {
              let TextWarningIcon = BookCheckIcon.BookCheckIcon;
            } else {
              if (isNSFWResult) {
                ignoreTraits = undefined;
                if (ignoreTraits != null) {
                  ignoreTraits = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits) {
                  TextWarningIcon = TextWarningIcon2.TextWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits1;
                if (ignoreTraits != null) {
                  ignoreTraits1 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits1) {
                  const TextSpoilerIcon = TextSpoilerIcon2.TextSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits2;
                if (ignoreTraits != null) {
                  ignoreTraits2 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits2) {
                  const TextLockIcon = TextLockIcon2.TextLockIcon;
                }
              }
              if (null != channel.linkedLobby) {
                let TextIcon = TextControllerIcon.TextControllerIcon;
              } else {
                TextIcon = TextIcon2.TextIcon;
              }
            }
            return TextWarningIcon;
          } else if (ChannelTypes.GUILD_FORUM === type) {
            if (isRulesChannel) {
              let ForumWarningIcon = BookCheckIcon.BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits3;
                if (ignoreTraits != null) {
                  ignoreTraits3 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits3) {
                  if (isMediaChannelResult) {
                    ForumWarningIcon = ImageWarningIcon2.ImageWarningIcon;
                  } else {
                    ForumWarningIcon = ForumWarningIcon2.ForumWarningIcon;
                  }
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits4;
                if (ignoreTraits != null) {
                  ignoreTraits4 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits4) {
                  const ForumSpoilerIcon2 = ForumSpoilerIcon3.ForumSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits5;
                if (ignoreTraits != null) {
                  ignoreTraits5 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits5) {
                  if (isMediaChannelResult) {
                    let ForumLockIcon = ImageLockIcon.ImageLockIcon;
                  } else {
                    ForumLockIcon = ForumLockIcon2.ForumLockIcon;
                  }
                }
              }
              if (isMediaChannelResult) {
                let ForumIcon = ImageIcon2.ImageIcon;
              } else {
                ForumIcon = ForumIcon2.ForumIcon;
              }
            }
            return ForumWarningIcon;
          } else if (ChannelTypes.GUILD_MEDIA === type) {
            if (isRulesChannel) {
              let ImageWarningIcon = BookCheckIcon.BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits6;
                if (ignoreTraits != null) {
                  ignoreTraits6 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits6) {
                  ImageWarningIcon = ImageWarningIcon2.ImageWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits7;
                if (ignoreTraits != null) {
                  ignoreTraits7 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits7) {
                  const ForumSpoilerIcon = ForumSpoilerIcon3.ForumSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits8;
                if (ignoreTraits != null) {
                  ignoreTraits8 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits8) {
                  let ImageIcon = ImageLockIcon.ImageLockIcon;
                }
              }
              ImageIcon = ImageIcon2.ImageIcon;
            }
            return ImageWarningIcon;
          } else if (ChannelTypes.GROUP_DM === type) {
            return GroupIcon.GroupIcon;
          } else if (ChannelTypes.DM === type) {
            return AtIcon.AtIcon;
          } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
            if (isRulesChannel) {
              let AnnouncementsWarningIcon = BookCheckIcon.BookCheckIcon;
            } else {
              if (isNSFWResult) {
                let ignoreTraits9;
                if (ignoreTraits != null) {
                  ignoreTraits9 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits9) {
                  AnnouncementsWarningIcon = AnnouncementsWarningIcon2.AnnouncementsWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits10;
                if (ignoreTraits != null) {
                  ignoreTraits10 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits10) {
                  const AnnouncementsSpoilerIcon = AnnouncementsSpoilerIcon2.AnnouncementsSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits11;
                if (ignoreTraits != null) {
                  ignoreTraits11 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits11) {
                  let AnnouncementsIcon = AnnouncementsLockIcon.AnnouncementsLockIcon;
                }
              }
              AnnouncementsIcon = AnnouncementsIcon2.AnnouncementsIcon;
            }
            return AnnouncementsWarningIcon;
          } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
            if (result) {
              let ignoreTraits12;
              if (ignoreTraits != null) {
                ignoreTraits12 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits12) {
                if (isRoleRequiredDefault(channel)) {
                  let StageLockIcon = LockIcon3.LockIcon;
                } else {
                  StageLockIcon = StageLockIcon2.StageLockIcon;
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
                const LockIcon2 = LockIcon3.LockIcon;
              }
            }
            if (isRoleRequiredDefault(channel)) {
              let ignoreTraits14;
              if (ignoreTraits != null) {
                ignoreTraits14 = ignoreTraits.ignoreTraits;
              }
              if (!ignoreTraits14) {
                let StageIcon = StageLockIcon2.StageLockIcon;
              }
            }
            StageIcon = StageIcon2.StageIcon;
          } else if (ChannelTypes.GUILD_VOICE === type) {
            if (obj.textFocused) {
              let VoiceLockIcon = ChatIcon.ChatIcon;
            } else {
              if (result) {
                let ignoreTraits15;
                if (ignoreTraits != null) {
                  ignoreTraits15 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits15) {
                  if (isRoleRequiredDefault(channel)) {
                    VoiceLockIcon = LockIcon3.LockIcon;
                  } else {
                    VoiceLockIcon = VoiceLockIcon3.VoiceLockIcon;
                  }
                }
              }
              if (locked) {
                let ignoreTraits16;
                if (ignoreTraits != null) {
                  ignoreTraits16 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits16) {
                  const LockIcon = LockIcon3.LockIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits17;
                if (ignoreTraits != null) {
                  ignoreTraits17 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits17) {
                  const VoiceLockIcon2 = VoiceLockIcon3.VoiceLockIcon;
                }
              }
              if (isNSFWResult) {
                let ignoreTraits18;
                if (ignoreTraits != null) {
                  ignoreTraits18 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits18) {
                  const VoiceWarningIcon = VoiceWarningIcon2.VoiceWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits19;
                if (ignoreTraits != null) {
                  ignoreTraits19 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits19) {
                  let VoiceNormalIcon = VoiceNormalSpoilerIcon.VoiceNormalSpoilerIcon;
                }
              }
              VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
            }
            return VoiceLockIcon;
          } else if (ChannelTypes.GUILD_DIRECTORY === type) {
            return HubIcon.HubIcon;
          }
        }
      }
      return ThreadIcon2.ThreadIcon;
    }
  }
}
let result = require("obj132").fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return registerAssetDefault;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== arg0) {
      if (ChannelTypes.PUBLIC_THREAD !== arg0) {
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
  } else if (ChannelTypes.ANNOUNCEMENT_THREAD === type) {
    tmp2 = registerAssetDefault2;
  } else {
    tmp2 = null;
  }
  if (null != tmp2) {
    return tmp2;
  } else {
    const type3 = channel.type;
    if (ChannelTypes.PRIVATE_THREAD !== type3) {
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type3) {
        if (ChannelTypes.PUBLIC_THREAD !== type3) {
          if (ChannelTypes.GUILD_CATEGORY === type3) {
            return registerAssetDefault3;
          } else {
            if (ChannelTypes.GUILD_TEXT !== type3) {
              if (ChannelTypes.GUILD_FORUM !== type3) {
                if (ChannelTypes.GUILD_MEDIA !== type3) {
                  if (ChannelTypes.GROUP_DM === type3) {
                    return registerAssetDefault5;
                  } else if (ChannelTypes.DM === type3) {
                    return registerAssetDefault6;
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type3) {
                    return registerAssetDefault7;
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type3) {
                    return registerAssetDefault8;
                  } else if (ChannelTypes.GUILD_VOICE === type3) {
                    return registerAssetDefault9;
                  } else if (ChannelTypes.GUILD_DIRECTORY === type3) {
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
    if (ChannelTypes.PRIVATE_THREAD === type2) {
      let tmp23 = registerAssetDefault;
    } else if (ChannelTypes.ANNOUNCEMENT_THREAD === type2) {
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
  switch (iconType) {
    case "p":
    break;
    case "LIGHT":
    break;
    case "LengthDelimited":
    break;
    case "limit":
    break;
    case "i":
    break;
    case "it":
    break;
    case "d":
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
      return registerAssetDefault9;
    case "find":
    break;
    case "ind":
      return registerAssetDefault11;
    case "flags":
    break;
    case "forEach":
      return registerAssetDefault12;
    case "gap":
    break;
    case "get":
      return registerAssetDefault13;
    case "getChannel":
    break;
    case "getCurrentUser":
      return registerAssetDefault8;
    case "getGuild":
    break;
    case "guild":
      return registerAssetDefault14;
    case "guildId":
    break;
    case "guild_id":
      return registerAssetDefault4;
    case "has":
    break;
    case "hasDiversityParent":
      return registerAssetDefault15;
    case "hash":
    break;
    case "hd":
      return registerAssetDefault16;
    case "header":
    break;
    case "height":
      return registerAssetDefault7;
    case "httpServerLocation":
    break;
    case "icon":
      return registerAssetDefault17;
    case "includes":
    break;
    case "index":
      return registerAssetDefault18;
    case "indexOf":
    break;
    case "intl":
      return registerAssetDefault2;
    case "items":
    break;
    case "join":
      let tmp15 = registerAssetDefault19;
      return tmp15;
    case "jsx":
    break;
    case "jsxs":
      tmp15 = registerAssetDefault19;
      return tmp15;
    case "justifyContent":
    break;
    case "key":
      return registerAssetDefault20;
    case "keys":
    break;
    case "kind":
      return registerAssetDefault21;
    case "ks":
    break;
    case "space":
      return registerAssetDefault22;
    case "label":
    break;
    case "lc":
      return registerAssetDefault23;
    case "left":
    break;
    case "length":
      return registerAssetDefault24;
    case "lj":
    break;
    case "loadJsonAsset":
      return registerAssetDefault25;
    case "location":
    break;
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
    case "track":
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
    case "getWebViewProxy":
    break;
    case "xyYt8A":
    break;
    case "ACTIVITIES_INVITES_WRITE":
    break;
    case "INVITES":
    break;
    case "TEAL_NEW_60":
    break;
    case "useIsReferralReminderDCExperimentEnabled":
    break;
    case "dragOffsetFromRight":
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
    case "$ZodDate":
    break;
    case "ZodDate":
    break;
    case "D":
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
    case "CardA11yWrapper":
    break;
    case "perGuildMaxCount":
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
    case "loadIfNecessary":
    break;
    case "searchAllStickers":
    break;
    case "ANDROID_NOTIFICATION_LIGHTS":
    break;
    case "L":
    break;
    case "LI":
    break;
    case "SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS":
    break;
    case "REQUIRE_TAG":
    break;
    case "AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING":
    break;
    case "STREAM":
    break;
    case "STREAMING":
    break;
    case "$ZodCheckMaxLength":
    break;
    case "kMaxLength":
    break;
    case "eng":
    break;
    case "ng":
    break;
    case "el":
    break;
    case "li":
    break;
    case "lim":
    break;
    case "limited":
    break;
    case "limitedTimeBadge":
    break;
    case "mi":
    break;
    case "mit":
    break;
    case "getAppState":
    break;
    case "$ZodMap":
    break;
    case "ZodMap":
    break;
    case "M":
    break;
    case "ap":
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
    case "categoryType":
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
    case "CHANNEL_NOTICE_SHOW_DELAY":
    break;
    case "DELAYED":
    break;
    case "PX_80":
    break;
    case "_":
    break;
    case "spanIsSampled":
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
    case "is":
    break;
    case "se":
    break;
    case "dup":
    break;
    case "perUserFpsWindow":
    break;
    case "woman_and_man_holding_hands_medium_skin_tone_medium_dark_skin_tone":
    break;
    case "r_has_min_length$esjava$0":
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
    case "R":
    break;
    case "ReflectionBinaryReader":
    break;
    case "ef":
    break;
    case "f":
    break;
    case "BinaryReader":
    break;
    case "APP_LANDING_VIEWED":
    break;
    case "LANDING":
    break;
    case "DCDDeviceThermalStateManager":
    break;
    case "ThermalState":
    break;
    case "leading":
    break;
    case "leadingFade":
    break;
    case "FadeIn":
    break;
    case "FadeInData":
    break;
    case "getButtonStyles":
    break;
    case "$ZodSet":
    break;
    case "ZodSet":
    break;
    case "S":
    break;
    case "et":
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
    case "g":
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
    case "QUEST_BAR_VIDEO_QUEST_PREVIEW":
    break;
    case "QUEST_PREVIEW_TOOL":
    break;
    case "QUEST_PREVIEW_TOOL_2":
    break;
    case "getMediaEngineExperiments":
    break;
    case "generateSessionId":
    break;
    case "ActionSheetHeaderPressableText":
    break;
    case "Pressable":
    break;
    case "ex":
    break;
    case "ext":
    break;
    case "isMute":
    break;
    case "isMuteScheduledEventsEnabled":
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
    case "ACTION_SHEET_START_HEIGHT_RATIO":
    break;
    case "STAR":
    break;
    case "START":
    break;
    case "IO":
    break;
    case "__":
    break;
    case "__c":
    break;
    case "cl":
    break;
    case "clo":
    break;
    case "lo":
    break;
    case "los":
    break;
    case "os":
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
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.GUILD_CATEGORY === type) {
          return FolderIcon.FolderIcon;
        } else if (ChannelTypes.GUILD_TEXT === type) {
          return TextIcon2.TextIcon;
        } else if (ChannelTypes.GUILD_FORUM === type) {
          return ForumIcon2.ForumIcon;
        } else if (ChannelTypes.GUILD_MEDIA === type) {
          return ImageIcon2.ImageIcon;
        } else if (ChannelTypes.GROUP_DM === type) {
          return GroupIcon.GroupIcon;
        } else if (ChannelTypes.DM === type) {
          return AtIcon.AtIcon;
        } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
          return AnnouncementsIcon2.AnnouncementsIcon;
        } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
          return StageIcon2.StageIcon;
        } else if (ChannelTypes.GUILD_VOICE === type) {
          return VoiceNormalIcon2.VoiceNormalIcon;
        } else if (ChannelTypes.GUILD_DIRECTORY === type) {
          return HubIcon.HubIcon;
        } else {
          return null;
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = ChatIcon.ChatIcon;
  } else {
    ThreadIcon = ThreadIcon2.ThreadIcon;
  }
  return ThreadIcon;
};