// discord_app/utils/native/ChannelUtils.tsx
import isRoleRequiredDefault from "../../modules/channel/isRoleRequired.tsx";
import _modDef8604 from "../../../_runtime/metro/08604__.js";
import _modDef8605 from "../../../_runtime/metro/08605__.js";
import _modDef8606 from "../../../_runtime/metro/08606__.js";
import _modDef8607 from "../../../_runtime/metro/08607__.js";
import _modDef8608 from "../../../_runtime/metro/08608__.js";
import _modDef8609 from "../../../_runtime/metro/08609__.js";
import _modDef8610 from "../../../_runtime/metro/08610__.js";
import _modDef8611 from "../../../_runtime/metro/08611__.js";
import _modDef8612 from "../../../_runtime/metro/08612__.js";
import _modDef8613 from "../../../_runtime/metro/08613__.js";
import _modDef8614 from "../../../_runtime/metro/08614__.js";
import _modDef8615 from "../../../_runtime/metro/08615__.js";
import _modDef8616 from "../../../_runtime/metro/08616__.js";
import _modDef8617 from "../../../_runtime/metro/08617__.js";
import _modDef8618 from "../../../_runtime/metro/08618__.js";
import _modDef8619 from "../../../_runtime/metro/08619__.js";
import _modDef8620 from "../../../_runtime/metro/08620__.js";
import _modDef8621 from "../../../_runtime/metro/08621__.js";
import _modDef8622 from "../../../_runtime/metro/08622__.js";
import _modDef8623 from "../../../_runtime/metro/08623__.js";
import _modDef8624 from "../../../_runtime/metro/08624__.js";
import _modDef8625 from "../../../_runtime/metro/08625__.js";
import _modDef8626 from "../../../_runtime/metro/08626__.js";
import _modDef8627 from "../../../_runtime/metro/08627__.js";
import _modDef8628 from "../../../_runtime/metro/08628__.js";
import _modDef8629 from "../../../_runtime/metro/08629__.js";
import _modDef8630 from "../../../_runtime/metro/08630__.js";
import _modDef8631 from "../../../_runtime/metro/08631__.js";
import useShowMemberVerificationGate from "../../modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx";
import _modDef8633 from "../../../_runtime/metro/08633__.js";
import _modDef8634 from "../../../_runtime/metro/08634__.js";
import _modDef8635 from "../../../_runtime/metro/08635__.js";
import _modDef8636 from "../../../_runtime/metro/08636__.js";
import _modDef8637 from "../../../_runtime/metro/08637__.js";
import _modDef8639 from "../../../_runtime/metro/08639__.js";
import _modDef8640 from "../../../_runtime/metro/08640__.js";
import _modDef8641 from "../../../_runtime/metro/08641__.js";
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
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function getChannelIcon(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [GuildStore, UserStore, GuildMemberStore];
  const result = useShowMemberVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    channel = null;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
    }
    let isGameInvitesChannelResult;
    if (channel != null) {
      isGameInvitesChannelResult = channel.isGameInvitesChannel();
    }
    if (true === isGameInvitesChannelResult) {
      let tmp97 = _modDef8633;
    } else {
      tmp97 = _modDef8623;
    }
    return tmp97;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD !== type) {
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
        if (ChannelTypes.PUBLIC_THREAD !== type) {
          if (ChannelTypes.MEDIA_THREAD !== type) {
            if (ChannelTypes.GUILD_CATEGORY === type) {
              return _modDef8606;
            } else if (ChannelTypes.GUILD_TEXT === type) {
              if (isRulesChannel) {
                let tmp79 = _modDef8634;
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp79 = _modDef8619;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    _modDef8620;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    _modDef8629;
                  }
                }
                if (null != channel.linkedLobby) {
                  let tmp82Result2 = _modDef8635;
                } else {
                  tmp82Result2 = _modDef8607;
                }
              }
              return tmp79;
            } else if (ChannelTypes.GUILD_FORUM === type) {
              if (isRulesChannel) {
                let tmp66 = _modDef8634;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits3;
                  if (ignoreTraits != null) {
                    ignoreTraits3 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits3) {
                    tmp66 = importDefault(isMediaChannelResult ? 8628 : 8625);
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits4;
                  if (ignoreTraits != null) {
                    ignoreTraits4 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits4) {
                    _modDef8626;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    if (channel.isGameInvitesChannel()) {
                      let tmp69Result = _modDef8636;
                    } else {
                      tmp69Result = importDefault(isMediaChannelResult ? 8637 : 8638);
                    }
                  }
                }
                if (channel.isGameInvitesChannel()) {
                  let tmp69Result2 = _modDef8633;
                } else {
                  tmp69Result2 = importDefault(isMediaChannelResult ? 8627 : 8624);
                }
              }
              return tmp66;
            } else if (ChannelTypes.GUILD_MEDIA === type) {
              if (isRulesChannel) {
                let tmp56 = _modDef8634;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp56 = _modDef8628;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    _modDef8626;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp59Result = _modDef8637;
                  }
                }
                tmp59Result = _modDef8627;
              }
              return tmp56;
            } else if (ChannelTypes.GROUP_DM === type) {
              return _modDef8609;
            } else if (ChannelTypes.DM === type) {
              return _modDef8610;
            } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
              if (isRulesChannel) {
                let tmp43 = _modDef8634;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp43 = _modDef8621;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    _modDef8622;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp46Result = _modDef8639;
                  }
                }
                tmp46Result = _modDef8611;
              }
              return tmp43;
            } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
              if (result) {
                let ignoreTraits12;
                if (ignoreTraits != null) {
                  ignoreTraits12 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits12) {
                  if (isRoleRequiredDefault(channel)) {
                    let tmp32Result = _modDef8640;
                  } else {
                    tmp32Result = _modDef8618;
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
                  _modDef8640;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp36Result = _modDef8618;
                }
              }
              tmp36Result = _modDef8612;
            } else if (ChannelTypes.GUILD_VOICE === type) {
              if (obj.textFocused) {
                let tmp17Result = _modDef8623;
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequiredDefault(channel)) {
                      tmp17Result = _modDef8640;
                    } else {
                      tmp17Result = _modDef8615;
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    _modDef8640;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    _modDef8615;
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    _modDef8616;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp21Result4 = _modDef8617;
                  }
                }
                tmp21Result4 = _modDef8613;
              }
              return tmp17Result;
            } else if (ChannelTypes.GUILD_DIRECTORY === type) {
              return _modDef8614;
            } else if (ChannelTypes.GUILD_APP === type) {
              if (isNSFWResult) {
                let ignoreTraits20;
                if (ignoreTraits != null) {
                  ignoreTraits20 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits20) {
                  return _modDef8630;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits21;
                if (ignoreTraits != null) {
                  ignoreTraits21 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits21) {
                  _modDef8631;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits22;
                if (ignoreTraits != null) {
                  ignoreTraits22 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits22) {
                  let tmp10Result = _modDef8641;
                }
              }
              tmp10Result = _modDef8608;
            } else {
              if (ChannelTypes.GUILD_STORE !== type) {
                if (ChannelTypes.GUILD_SPACE !== type) {
                  const UNKNOWN = ChannelTypes.UNKNOWN;
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
      let tmp90 = _modDef8604;
    } else {
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
        if (ChannelTypes.PUBLIC_THREAD !== type2) {
          tmp90 = null;
        }
      }
      tmp90 = _modDef8605;
    }
    return tmp90;
  }
}
function getChannelIconComponent(channel, ignoreTraits) {
  let obj = ignoreTraits;
  if (ignoreTraits == null) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [GuildStore, UserStore, GuildMemberStore];
  const result = useShowMemberVerificationGate.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    channel = null;
    if (null != channel.parent_id) {
      channel = ChannelStore.getChannel(channel.parent_id);
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
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
        if (ChannelTypes.PUBLIC_THREAD !== type) {
          if (ChannelTypes.MEDIA_THREAD !== type) {
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
            } else if (ChannelTypes.GUILD_DIRECTORY === type) {
              return HubIcon.HubIcon;
            } else if (ChannelTypes.GUILD_APP === type) {
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
}
const ChannelTypes = fn(1072).ChannelTypes;
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/ChannelUtils.tsx");

export function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return _modDef8604;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== arg0) {
      if (ChannelTypes.PUBLIC_THREAD !== arg0) {
        if (ChannelTypes.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return _modDef8605;
  }
}
export function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return _modDef8606;
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GUILD_APP === type) {
                    return _modDef8608;
                  } else if (ChannelTypes.GROUP_DM === type) {
                    return _modDef8609;
                  } else if (ChannelTypes.DM === type) {
                    return _modDef8610;
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return _modDef8611;
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return _modDef8612;
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return _modDef8613;
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return _modDef8614;
                  } else {
                    if (ChannelTypes.GUILD_STORE !== type) {
                      if (ChannelTypes.GUILD_SPACE !== type) {
                        const UNKNOWN = ChannelTypes.UNKNOWN;
                      }
                    }
                    return null;
                  }
                }
              }
            }
            return _modDef8607;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = _modDef8604;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
      if (ChannelTypes.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = _modDef8605;
  }
  return tmp21;
}
export function getChannelIconWithGuild(channel, guild) {
  let rulesChannelId;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  return getChannelIcon(channel, { isRulesChannel: rulesChannelId === channel.id });
}
export function getChannelMentionIcon(iconType) {
  switch (iconType) {
    case "voice":
      return _modDef8613;
    case "voice-locked":
      return _modDef8615;
    case "voice-nsfw":
      return _modDef8616;
    case "voice-spoiler":
      return _modDef8617;
    case "stage":
      return _modDef8612;
    case "stage-locked":
      return _modDef8618;
    case "text":
      return _modDef8607;
    case "text-nsfw":
      return _modDef8619;
    case "text-spoiler":
      return _modDef8620;
    case "announcement":
      return _modDef8611;
    case "announcement-nsfw":
      return _modDef8621;
    case "announcement-spoiler":
      return _modDef8622;
    case "thread":
      return _modDef8605;
    case "post":
      let tmp21 = _modDef8623;
      return tmp21;
    case "message":
      tmp21 = _modDef8623;
      return tmp21;
    case "forum":
      return _modDef8624;
    case "forum-nsfw":
      return _modDef8625;
    case "forum-spoiler":
      return _modDef8626;
    case "media":
      return _modDef8627;
    case "media-nsfw":
      return _modDef8628;
    case "locked":
      return _modDef8629;
    case "app":
      return _modDef8608;
    case "app-nsfw":
      return _modDef8630;
    case "app-spoiler":
      return _modDef8631;
    default:
      return null;
  }
}
export { getChannelIcon };
export function getChannelIconComponentWithGuild(channel, guild) {
  let rulesChannelId;
  if (guild != null) {
    rulesChannelId = guild.rulesChannelId;
  }
  return getChannelIconComponent(channel, { isRulesChannel: rulesChannelId === channel.id });
}
export { getChannelIconComponent };
export function getSimpleChannelIconComponent(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
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
          } else if (ChannelTypes.GUILD_APP === type) {
            return AppsIcon2.AppsIcon;
          } else {
            if (ChannelTypes.GUILD_STORE !== type) {
              if (ChannelTypes.GUILD_SPACE !== type) {
                const UNKNOWN = ChannelTypes.UNKNOWN;
              }
            }
            return null;
          }
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = ChatIcon2.ChatIcon;
  } else {
    ThreadIcon = ThreadIcon2.ThreadIcon;
  }
  return ThreadIcon;
}
