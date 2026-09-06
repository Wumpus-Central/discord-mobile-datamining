// discord_app/utils/native/ChannelUtils.tsx
import registerAssetDefault from "../../../_runtime/05029_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/05030_registerAsset.js";
import registerAssetDefault3 from "../../../_runtime/05031_registerAsset.js";
import registerAssetDefault4 from "../../../_runtime/05032_registerAsset.js";
import registerAssetDefault5 from "../../../_runtime/05033_registerAsset.js";
import registerAssetDefault6 from "../../../_runtime/05034_registerAsset.js";
import registerAssetDefault7 from "../../../_runtime/05035_registerAsset.js";
import registerAssetDefault8 from "../../../_runtime/05036_registerAsset.js";
import registerAssetDefault9 from "../../../_runtime/05037_registerAsset.js";
import registerAssetDefault10 from "../../../_runtime/05038_registerAsset.js";
import registerAssetDefault11 from "../../../_runtime/05039_registerAsset.js";
import registerAssetDefault12 from "../../../_runtime/05040_registerAsset.js";
import registerAssetDefault13 from "../../../_runtime/05041_registerAsset.js";
import registerAssetDefault14 from "../../../_runtime/05042_registerAsset.js";
import registerAssetDefault15 from "../../../_runtime/05043_registerAsset.js";
import registerAssetDefault16 from "../../../_runtime/05044_registerAsset.js";
import registerAssetDefault17 from "../../../_runtime/05045_registerAsset.js";
import registerAssetDefault18 from "../../../_runtime/05046_registerAsset.js";
import registerAssetDefault19 from "../../../_runtime/05047_registerAsset.js";
import registerAssetDefault20 from "../../../_runtime/05048_registerAsset.js";
import registerAssetDefault21 from "../../../_runtime/05049_registerAsset.js";
import registerAssetDefault22 from "../../../_runtime/05050_registerAsset.js";
import registerAssetDefault23 from "../../../_runtime/05051_registerAsset.js";
import registerAssetDefault24 from "../../../_runtime/05052_registerAsset.js";
import registerAssetDefault25 from "../../../_runtime/05053_registerAsset.js";
import registerAssetDefault26 from "../../../_runtime/05054_registerAsset.js";
import registerAssetDefault27 from "../../../_runtime/05055_registerAsset.js";
import registerAssetDefault28 from "../../../_runtime/05056_registerAsset.js";
import shouldShowMembershipVerificationGate from "../../modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx";
import registerAssetDefault29 from "../../../_runtime/05060_registerAsset.js";
import registerAssetDefault30 from "../../../_runtime/05061_registerAsset.js";
import isRoleRequiredDefault from "../../modules/channel/isRoleRequired.tsx";
import registerAssetDefault31 from "../../../_runtime/05068_registerAsset.js";
import ExperimentalLfgIcon from "../../design/components/Icon/native/redesign/generated/ExperimentalLfgIcon.tsx";
import ChatIcon2 from "../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
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
import ExperimentalLfgLockIcon from "../../design/components/Icon/native/redesign/generated/ExperimentalLfgLockIcon.tsx";
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
import AppsWarningIcon from "../../design/components/Icon/native/redesign/generated/AppsWarningIcon.tsx";
import AppsSpoilerIcon2 from "../../design/components/Icon/native/redesign/generated/AppsSpoilerIcon.tsx";
import AppsLockIcon from "../../design/components/Icon/native/redesign/generated/AppsLockIcon.tsx";
import AppsIcon2 from "../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import closure_4 from "../../stores/GuildMemberStore.tsx";
import closure_5 from "../../stores/GuildStore.tsx";
import closure_6 from "../../stores/UserStore.tsx";
import { ChannelTypes } from "../../Constants.tsx";

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
      let tmp97 = registerAssetDefault29;
    } else {
      tmp97 = registerAssetDefault20;
    }
    return tmp97;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD !== type) {
      if (tmp5.ANNOUNCEMENT_THREAD !== type) {
        if (tmp5.PUBLIC_THREAD !== type) {
          if (tmp5.MEDIA_THREAD !== type) {
            if (tmp5.GUILD_CATEGORY === type) {
              return registerAssetDefault3;
            } else if (tmp5.GUILD_TEXT === type) {
              if (isRulesChannel) {
                let tmp79 = registerAssetDefault30;
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp79 = registerAssetDefault16;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    registerAssetDefault17;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    let tmp82Result = tmp82(5054);
                  }
                }
                if (null != channel.linkedLobby) {
                  tmp82Result = tmp82(5063);
                } else {
                  tmp82Result = tmp82(5032);
                }
              }
              return tmp79;
            } else if (tmp5.GUILD_FORUM === type) {
              if (isRulesChannel) {
                let tmp66 = registerAssetDefault30;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp66 = importDefault(isMediaChannelResult ? 5053 : 5050);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    registerAssetDefault23;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    if (channel.isGameInvitesChannel()) {
                      let tmp69Result = tmp69(5064);
                    } else {
                      tmp69Result = tmp69(isMediaChannelResult ? 5065 : 5066);
                    }
                  }
                }
                if (channel.isGameInvitesChannel()) {
                  tmp69Result = tmp69(5060);
                } else {
                  tmp69Result = tmp69(isMediaChannelResult ? 5052 : 5049);
                }
              }
              return tmp66;
            } else if (tmp5.GUILD_MEDIA === type) {
              if (isRulesChannel) {
                let tmp56 = registerAssetDefault30;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp56 = registerAssetDefault25;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    registerAssetDefault23;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp59Result = tmp59(5065);
                  }
                }
                tmp59Result = tmp59(5052);
              }
              return tmp56;
            } else if (tmp5.GROUP_DM === type) {
              return registerAssetDefault6;
            } else if (tmp5.DM === type) {
              return registerAssetDefault7;
            } else if (tmp5.GUILD_ANNOUNCEMENT === type) {
              if (isRulesChannel) {
                let tmp43 = registerAssetDefault30;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp43 = registerAssetDefault18;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    registerAssetDefault19;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp46Result = tmp46(5067);
                  }
                }
                tmp46Result = tmp46(5036);
              }
              return tmp43;
            } else if (tmp5.GUILD_STAGE_VOICE === type) {
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (isRoleRequiredDefault(channel)) {
                    let tmp32Result = tmp32(5068);
                  } else {
                    tmp32Result = tmp32(5043);
                  }
                  return tmp32Result;
                }
              }
              if (locked) {
                let ignoreTraits13;
                if (ignoreTraits != null) {
                  ignoreTraits13 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits13) {
                  registerAssetDefault31;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp36Result = tmp36(5043);
                }
              }
              tmp36Result = tmp36(5037);
            } else if (tmp5.GUILD_VOICE === type) {
              if (obj.textFocused) {
                let tmp17Result = registerAssetDefault20;
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequiredDefault(channel)) {
                      tmp17Result = tmp17(5068);
                    } else {
                      tmp17Result = tmp17(5040);
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    registerAssetDefault31;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    tmp21(5040);
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    tmp21(5041);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp21Result1 = tmp21(5042);
                  }
                }
                tmp21Result1 = tmp21(5038);
              }
              return tmp17Result;
            } else if (tmp5.GUILD_DIRECTORY === type) {
              return registerAssetDefault11;
            } else if (tmp5.GUILD_APP === type) {
              if (isNSFWResult) {
                let ignoreTraits20;
                if (ignoreTraits != null) {
                  ignoreTraits20 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits20) {
                  return registerAssetDefault27;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits21;
                if (ignoreTraits != null) {
                  ignoreTraits21 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits21) {
                  registerAssetDefault28;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits22;
                if (ignoreTraits != null) {
                  ignoreTraits22 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits22) {
                  let tmp10Result = tmp10(5069);
                }
              }
              tmp10Result = tmp10(5033);
            } else {
              if (tmp5.GUILD_STORE !== type) {
                if (tmp5.GUILD_SPACE !== type) {
                  const UNKNOWN = tmp5.UNKNOWN;
                }
              }
              return null;
            }
          }
        }
      }
    }
    const type2 = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type2) {
      let tmp90 = registerAssetDefault;
    } else {
      if (tmp5.ANNOUNCEMENT_THREAD !== type2) {
        if (tmp5.PUBLIC_THREAD !== type2) {
          tmp90 = null;
        }
      }
      tmp90 = registerAssetDefault2;
    }
    return tmp90;
  }
  const obj2 = shouldShowMembershipVerificationGate;
}
function getChannelIconComponent(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const tmp = require;
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
      let ChatIcon = ExperimentalLfgIcon.ExperimentalLfgIcon;
    } else {
      ChatIcon = ChatIcon2.ChatIcon;
    }
    return ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      return ThreadLockIcon.ThreadLockIcon;
    } else {
      if (tmp6.ANNOUNCEMENT_THREAD !== type) {
        if (tmp6.PUBLIC_THREAD !== type) {
          if (tmp6.MEDIA_THREAD !== type) {
            if (tmp6.GUILD_CATEGORY === type) {
              return FolderIcon.FolderIcon;
            } else if (tmp6.GUILD_TEXT === type) {
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
            } else if (tmp6.GUILD_FORUM === type) {
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
                    if (channel.isGameInvitesChannel()) {
                      let ForumLockIcon = ExperimentalLfgLockIcon.ExperimentalLfgLockIcon;
                    } else if (isMediaChannelResult) {
                      ForumLockIcon = ImageLockIcon.ImageLockIcon;
                    } else {
                      ForumLockIcon = ForumLockIcon2.ForumLockIcon;
                    }
                  }
                }
                if (channel.isGameInvitesChannel()) {
                  let ForumIcon = ExperimentalLfgIcon.ExperimentalLfgIcon;
                } else if (isMediaChannelResult) {
                  ForumIcon = ImageIcon2.ImageIcon;
                } else {
                  ForumIcon = ForumIcon2.ForumIcon;
                }
              }
              return ForumWarningIcon;
            } else if (tmp6.GUILD_MEDIA === type) {
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
            } else if (tmp6.GROUP_DM === type) {
              return GroupIcon.GroupIcon;
            } else if (tmp6.DM === type) {
              return AtIcon.AtIcon;
            } else if (tmp6.GUILD_ANNOUNCEMENT === type) {
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
            } else if (tmp6.GUILD_STAGE_VOICE === type) {
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
            } else if (tmp6.GUILD_VOICE === type) {
              if (obj.textFocused) {
                let VoiceLockIcon = ChatIcon2.ChatIcon;
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
            } else if (tmp6.GUILD_DIRECTORY === type) {
              return HubIcon.HubIcon;
            } else if (tmp6.GUILD_APP === type) {
              if (isNSFWResult) {
                let ignoreTraits20;
                if (ignoreTraits != null) {
                  ignoreTraits20 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits20) {
                  return AppsWarningIcon.AppsWarningIcon;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits21;
                if (ignoreTraits != null) {
                  ignoreTraits21 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits21) {
                  const AppsSpoilerIcon = AppsSpoilerIcon2.AppsSpoilerIcon;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits22;
                if (ignoreTraits != null) {
                  ignoreTraits22 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits22) {
                  let AppsIcon = AppsLockIcon.AppsLockIcon;
                }
              }
              AppsIcon = AppsIcon2.AppsIcon;
            }
          }
        }
      }
      return ThreadIcon2.ThreadIcon;
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
        if (tmp.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return registerAssetDefault2;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (tmp.ANNOUNCEMENT_THREAD !== type) {
      if (tmp.PUBLIC_THREAD !== type) {
        if (tmp.MEDIA_THREAD !== type) {
          if (tmp.GUILD_CATEGORY === type) {
            return registerAssetDefault3;
          } else {
            if (tmp.GUILD_TEXT !== type) {
              if (tmp.GUILD_FORUM !== type) {
                if (tmp.GUILD_MEDIA !== type) {
                  if (tmp.GUILD_APP === type) {
                    return registerAssetDefault5;
                  } else if (tmp.GROUP_DM === type) {
                    return registerAssetDefault6;
                  } else if (tmp.DM === type) {
                    return registerAssetDefault7;
                  } else if (tmp.GUILD_ANNOUNCEMENT === type) {
                    return registerAssetDefault8;
                  } else if (tmp.GUILD_STAGE_VOICE === type) {
                    return registerAssetDefault9;
                  } else if (tmp.GUILD_VOICE === type) {
                    return registerAssetDefault10;
                  } else if (tmp.GUILD_DIRECTORY === type) {
                    return registerAssetDefault11;
                  } else {
                    if (tmp.GUILD_STORE !== type) {
                      if (tmp.GUILD_SPACE !== type) {
                        const UNKNOWN = tmp.UNKNOWN;
                      }
                    }
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
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = registerAssetDefault;
  } else {
    if (tmp.ANNOUNCEMENT_THREAD !== type2) {
      if (tmp.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = registerAssetDefault2;
  }
  return tmp21;
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
    case "assign":
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
    case "construct":
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
      break;
    case "flags":
      break;
    case "forEach":
      break;
    case "gap":
      break;
    case "get":
      break;
    case "getChannel":
      break;
    case "getCurrentUser":
      break;
    case "guild":
      break;
    case "guildId":
      break;
    case "guild_id":
      break;
    case "has":
      break;
    case "hasDiversityParent":
      break;
    case "hash":
      break;
    case "hd":
      break;
    case "header":
      break;
    case "height":
      break;
    case "httpServerLocation":
      break;
    case "icon":
      return registerAssetDefault10;
    case "includes":
      break;
    case "index":
      return registerAssetDefault12;
    case "indexOf":
      break;
    case "intl":
      return registerAssetDefault13;
    case "items":
      break;
    case "join":
      return registerAssetDefault14;
    case "jsx":
      break;
    case "jsxs":
      return registerAssetDefault9;
    case "justifyContent":
      break;
    case "key":
      return registerAssetDefault15;
    case "keys":
      break;
    case "kind":
      return registerAssetDefault4;
    case "ks":
      break;
    case "space":
      return registerAssetDefault16;
    case "label":
      break;
    case "lc":
      return registerAssetDefault17;
    case "left":
      break;
    case "length":
      return registerAssetDefault8;
    case "lj":
      break;
    case "loadJsonAsset":
      return registerAssetDefault18;
    case "location":
      break;
    case "map":
      return registerAssetDefault19;
    case "marginTop":
      break;
    case "marginBottom":
      let tmp23 = registerAssetDefault2;
      return tmp23;
    case "match":
      break;
    case "max":
      let tmp20 = registerAssetDefault20;
      return tmp20;
    case "memo":
      break;
    case "message":
      tmp20 = registerAssetDefault20;
      return tmp20;
    case "messageId":
      break;
    case "method":
      return registerAssetDefault21;
    case "methodobject":
      break;
    case "withTiming":
      return registerAssetDefault22;
    case "min":
      break;
    case "mn":
      return registerAssetDefault23;
    case "mode":
      break;
    case "name":
      return registerAssetDefault24;
    case "names":
      break;
    case "next":
      return registerAssetDefault25;
    case "nm":
      break;
    case "no":
      return registerAssetDefault26;
    case "now":
      break;
    case "np":
      return registerAssetDefault5;
    case "onPress":
      break;
    case "opacity":
      return registerAssetDefault27;
    case "options":
      break;
    case "parent":
      return registerAssetDefault28;
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
    case "toLowerCase":
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
    case "guild_metadata":
      break;
    case "metadataRefreshing":
      break;
    case "getIsLoading":
      break;
    case "getIsLoadingAgeVerification":
      break;
    case "AgeVerificationDmCta":
      break;
    case "tapImageData":
      break;
    case "person_standing_tone5":
      break;
    case "extraBottomHeight":
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
    case "DateToSystemTimezoneSetter":
      break;
    case "at":
      break;
    case "te":
      break;
    case "mez":
      break;
    case "Setter":
      break;
    case "useDeferredValue":
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
    case "khr":
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
    case "AppDatabaseManager":
      break;
    case "Database":
      break;
    case "tab":
      break;
    case "base":
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
    case "go_live_notifications":
      break;
    case "paymentGatewaySubscriptionId":
      break;
    case "integrationOwner":
      break;
    case "integrationOwnerHook":
      break;
    case "setScrollDirection":
      break;
    case "closeSuspendedUser":
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
    case "$ZodCheckMaxLength":
      break;
    case "kMaxLength":
      break;
    case "L":
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
    case "getAppUIViewed":
      break;
    case "wedding":
      break;
    case "getMediaPostEmbedChannelId":
      break;
    case "createGuildReportRaidSystemMessage":
      break;
    case "$ZodMap":
      break;
    case "ZodMap":
      break;
    case "M":
      break;
    case "ap":
      break;
    case "remoteSessionId":
      break;
    case "GameLibrarySettings":
      break;
    case "rar":
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
    case "getStartedHeaderContainer":
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
    case "PX_80":
      break;
    case "_":
      break;
    case "_shouldShowModal":
      break;
    case "shouldShow":
      break;
    case "ModalFadeTransition":
      break;
    case "emojiReactionFrecency":
      break;
    case "emojiReactionFrecencyWithoutFetchingLatest":
      break;
    case "testModeApplicationId":
      break;
    case "AUTO_MODERATION_REMOVE_REGEX_PATTERNS":
      break;
    case "RNSVGClipPath":
      break;
    case "ClipPath":
      break;
    case "lip":
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
    case "handlePasskeyUpsellShow":
      break;
    case "ShowQRCodeModal":
      break;
    case "ModalAnimation":
      break;
    case "invalidEmojis":
      break;
    case "isAVI":
      break;
    case "isAVIF":
      break;
    case "IFD_TYPE_GPS":
      break;
    case "GPSAltitude":
      break;
    case "GPSAltitudeRef":
      break;
    case "Altitude":
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
    case "Touchable":
      break;
    case "TouchableHaptic":
      break;
    case "$ZodSet":
      break;
    case "ZodSet":
      break;
    case "S":
      break;
    case "et":
      break;
    case "canUseEmojisEverywhere":
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
    case "QUEST_BAR_MOBILE":
      break;
    case "QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT":
      break;
    case "INTERACTIVE_MUTED":
      break;
    case "inner_width":
      break;
    case "widthChars":
      break;
    case "buttonLabel":
      break;
    case "generateNewAnimationId":
      break;
    case "ActionSheetHeaderPressableText":
      break;
    case "Pressable":
      break;
    case "ex":
      break;
    case "ext":
      break;
    case "isReported":
      break;
    case "AccessibilityFocusView":
      break;
    case "V":
      break;
    case "W":
      tmp23 = registerAssetDefault2;
      return tmp23;
    case "ir":
      break;
    case "re":
      break;
    case "reType":
      break;
    case "pe":
      break;
    case "_clientPromise":
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
    case "su":
      break;
    case "sur":
      break;
    case "ur":
      break;
    case "isExpanded":
      break;
    case "__data__":
      break;
    case "_d":
      break;
    case "_data":
      break;
    case "__REMOTEDEV__":
      break;
    case "__DISCORD_WINDOW_ID":
      break;
    case "__iteratees__":
      break;
    case "_iter":
      break;
    case "_iterate":
      break;
    case "iteratee":
      break;
    case "tee":
      break;
    case "__SENTRY_RELEASE__":
      break;
    case "SENTRY_RELEASE":
      break;
    case "__INTERNAL_SLOT_MAP__":
      break;
    case "__BUNDLE_START_TIME__":
      break;
    case "__e":
      break;
    case "Mo":
      break;
    case "ModuleNotFoundError":
      break;
    case "du":
      break;
    case "__i":
      break;
    case "__init":
      break;
    case "_i":
      break;
    case "_init":
      break;
    case "init":
      break;
    case "ni":
      break;
    case "nit":
      break;
    case "ta":
      break;
    case "__filtered__":
      break;
    case "lte":
      break;
    case "__SENTRY_DEBUG__":
      break;
    case "__FORMATJS_LISTFORMAT_DATA__":
      break;
    case "TJS":
      break;
    case "pa":
      break;
    case "pack":
      break;
    case "package":
      break;
    case "ack":
      break;
    case "ka":
      break;
    case "age":
      break;
    case "ge":
      break;
    case "ger":
      break;
    case "_a":
      break;
    case "as":
      break;
    case "ass":
      break;
    case "asset":
      break;
    case "assetContainer":
      break;
    case "ss":
      break;
    case "setForegroundProcess":
      break;
    case "_w":
      break;
    case "wo":
      break;
    case "work":
      break;
    case "worklet":
      break;
    case "kl":
      break;
    case "let":
      break;
    case "Hash":
      break;
    case "sh":
      break;
    case "growthbookTags":
      break;
    case "initialScrollToTop":
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
        if (tmp.MEDIA_THREAD !== type) {
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
          } else if (tmp.GUILD_APP === type) {
            return AppsIcon2.AppsIcon;
          } else {
            if (tmp.GUILD_STORE !== type) {
              if (tmp.GUILD_SPACE !== type) {
                const UNKNOWN = tmp.UNKNOWN;
              }
            }
            return null;
          }
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp25(5071).ChatIcon;
  } else {
    ThreadIcon = tmp25(5073).ThreadIcon;
  }
  return ThreadIcon;
};
