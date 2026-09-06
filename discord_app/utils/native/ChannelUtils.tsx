// === Module 5028: utils/ChannelUtils ===

// Module 5028 (utils/ChannelUtils)
import _modDef5029 from "module_5029" /* 5029 */;
import _modDef5030 from "module_5030" /* 5030 */;
import _modDef5031 from "module_5031" /* 5031 */;
import _modDef5032 from "module_5032" /* 5032 */;
import _modDef5033 from "module_5033" /* 5033 */;
import _modDef5034 from "module_5034" /* 5034 */;
import _modDef5035 from "module_5035" /* 5035 */;
import _modDef5036 from "module_5036" /* 5036 */;
import _modDef5037 from "module_5037" /* 5037 */;
import _modDef5038 from "module_5038" /* 5038 */;
import _modDef5039 from "module_5039" /* 5039 */;
import _modDef5040 from "module_5040" /* 5040 */;
import _modDef5041 from "module_5041" /* 5041 */;
import _modDef5042 from "module_5042" /* 5042 */;
import _modDef5043 from "module_5043" /* 5043 */;
import _modDef5044 from "module_5044" /* 5044 */;
import _modDef5045 from "module_5045" /* 5045 */;
import _modDef5046 from "module_5046" /* 5046 */;
import _modDef5047 from "module_5047" /* 5047 */;
import _modDef5048 from "module_5048" /* 5048 */;
import _modDef5049 from "module_5049" /* 5049 */;
import _modDef5050 from "module_5050" /* 5050 */;
import _modDef5051 from "module_5051" /* 5051 */;
import _modDef5052 from "module_5052" /* 5052 */;
import _modDef5053 from "module_5053" /* 5053 */;
import _modDef5054 from "module_5054" /* 5054 */;
import _modDef5055 from "module_5055" /* 5055 */;
import _modDef5056 from "module_5056" /* 5056 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5057 */;
import _modDef5060 from "module_5060" /* 5060 */;
import _modDef5061 from "module_5061" /* 5061 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5062 */;
import _modDef5063 from "module_5063" /* 5063 */;
import _modDef5064 from "module_5064" /* 5064 */;
import _modDef5065 from "module_5065" /* 5065 */;
import _modDef5067 from "module_5067" /* 5067 */;
import _modDef5068 from "module_5068" /* 5068 */;
import _modDef5069 from "module_5069" /* 5069 */;
import ExperimentalLfgIcon from "ExperimentalLfgIcon" /* 5070 */;
import ChatIcon2 from "ChatIcon" /* 5071 */;
import ThreadLockIcon from "ThreadLockIcon" /* 5072 */;
import ThreadIcon2 from "ThreadIcon" /* 5073 */;
import FolderIcon from "FolderIcon" /* 5074 */;
import BookCheckIcon from "BookCheckIcon" /* 5075 */;
import TextWarningIcon2 from "TextWarningIcon" /* 5076 */;
import TextSpoilerIcon2 from "TextSpoilerIcon" /* 5077 */;
import TextLockIcon2 from "TextLockIcon" /* 5078 */;
import TextControllerIcon from "TextControllerIcon" /* 5079 */;
import TextIcon2 from "TextIcon" /* 5080 */;
import ImageWarningIcon2 from "ImageWarningIcon" /* 5081 */;
import ForumWarningIcon2 from "ForumWarningIcon" /* 5082 */;
import ForumSpoilerIcon3 from "ForumSpoilerIcon" /* 5083 */;
import ExperimentalLfgLockIcon from "ExperimentalLfgLockIcon" /* 5084 */;
import ImageLockIcon from "ImageLockIcon" /* 5085 */;
import ForumLockIcon2 from "ForumLockIcon" /* 5086 */;
import ImageIcon2 from "ImageIcon" /* 5087 */;
import ForumIcon2 from "ForumIcon" /* 5088 */;
import GroupIcon from "GroupIcon" /* 5089 */;
import AtIcon from "AtIcon" /* 5090 */;
import AnnouncementsWarningIcon2 from "AnnouncementsWarningIcon" /* 5091 */;
import AnnouncementsSpoilerIcon2 from "AnnouncementsSpoilerIcon" /* 5092 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 5093 */;
import AnnouncementsIcon2 from "AnnouncementsIcon" /* 5094 */;
import LockIcon3 from "LockIcon" /* 5095 */;
import StageLockIcon2 from "StageLockIcon" /* 5096 */;
import StageIcon2 from "StageIcon" /* 5097 */;
import VoiceLockIcon3 from "VoiceLockIcon" /* 5098 */;
import VoiceWarningIcon2 from "VoiceWarningIcon" /* 5099 */;
import VoiceNormalSpoilerIcon from "VoiceNormalSpoilerIcon" /* 5100 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 5101 */;
import HubIcon from "HubIcon" /* 5102 */;
import AppsWarningIcon from "AppsWarningIcon" /* 5103 */;
import AppsSpoilerIcon2 from "AppsSpoilerIcon" /* 5104 */;
import AppsLockIcon from "AppsLockIcon" /* 5105 */;
import AppsIcon2 from "AppsIcon" /* 5106 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

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
      let tmp97 = _modDef5060;
    } else {
      tmp97 = _modDef5048;
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
              return _modDef5031;
            } else if (ChannelTypes.GUILD_TEXT === type) {
              if (isRulesChannel) {
                let tmp79 = _modDef5061;
              } else {
                if (isNSFWResult) {
                  ignoreTraits = undefined;
                  if (ignoreTraits != null) {
                    ignoreTraits = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits) {
                    tmp79 = _modDef5044;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits1;
                  if (ignoreTraits != null) {
                    ignoreTraits1 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits1) {
                    _modDef5045;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits2;
                  if (ignoreTraits != null) {
                    ignoreTraits2 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits2) {
                    let tmp82Result = _modDef5054;
                  }
                }
                if (null != channel.linkedLobby) {
                  tmp82Result = _modDef5063;
                } else {
                  tmp82Result = _modDef5032;
                }
              }
              return tmp79;
            } else if (ChannelTypes.GUILD_FORUM === type) {
              if (isRulesChannel) {
                let tmp66 = _modDef5061;
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
                    _modDef5051;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits5;
                  if (ignoreTraits != null) {
                    ignoreTraits5 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits5) {
                    if (channel.isGameInvitesChannel()) {
                      let tmp69Result = _modDef5064;
                    } else {
                      tmp69Result = importDefault(isMediaChannelResult ? 5065 : 5066);
                    }
                  }
                }
                if (channel.isGameInvitesChannel()) {
                  tmp69Result = _modDef5060;
                } else {
                  tmp69Result = importDefault(isMediaChannelResult ? 5052 : 5049);
                }
              }
              return tmp66;
            } else if (ChannelTypes.GUILD_MEDIA === type) {
              if (isRulesChannel) {
                let tmp56 = _modDef5061;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits6;
                  if (ignoreTraits != null) {
                    ignoreTraits6 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits6) {
                    tmp56 = _modDef5053;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits7;
                  if (ignoreTraits != null) {
                    ignoreTraits7 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits7) {
                    _modDef5051;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits8;
                  if (ignoreTraits != null) {
                    ignoreTraits8 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits8) {
                    let tmp59Result = _modDef5065;
                  }
                }
                tmp59Result = _modDef5052;
              }
              return tmp56;
            } else if (ChannelTypes.GROUP_DM === type) {
              return _modDef5034;
            } else if (ChannelTypes.DM === type) {
              return _modDef5035;
            } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
              if (isRulesChannel) {
                let tmp43 = _modDef5061;
              } else {
                if (isNSFWResult) {
                  let ignoreTraits9;
                  if (ignoreTraits != null) {
                    ignoreTraits9 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits9) {
                    tmp43 = _modDef5046;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits10;
                  if (ignoreTraits != null) {
                    ignoreTraits10 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits10) {
                    _modDef5047;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits11;
                  if (ignoreTraits != null) {
                    ignoreTraits11 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits11) {
                    let tmp46Result = _modDef5067;
                  }
                }
                tmp46Result = _modDef5036;
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
                    let tmp32Result = _modDef5068;
                  } else {
                    tmp32Result = _modDef5043;
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
                  _modDef5068;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits14;
                if (ignoreTraits != null) {
                  ignoreTraits14 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits14) {
                  let tmp36Result = _modDef5043;
                }
              }
              tmp36Result = _modDef5037;
            } else if (ChannelTypes.GUILD_VOICE === type) {
              if (obj.textFocused) {
                let tmp17Result = _modDef5048;
              } else {
                if (result) {
                  let ignoreTraits15;
                  if (ignoreTraits != null) {
                    ignoreTraits15 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits15) {
                    if (isRoleRequiredDefault(channel)) {
                      tmp17Result = _modDef5068;
                    } else {
                      tmp17Result = _modDef5040;
                    }
                  }
                }
                if (locked) {
                  let ignoreTraits16;
                  if (ignoreTraits != null) {
                    ignoreTraits16 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits16) {
                    _modDef5068;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits17;
                  if (ignoreTraits != null) {
                    ignoreTraits17 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits17) {
                    _modDef5040;
                  }
                }
                if (isNSFWResult) {
                  let ignoreTraits18;
                  if (ignoreTraits != null) {
                    ignoreTraits18 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits18) {
                    _modDef5041;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits19;
                  if (ignoreTraits != null) {
                    ignoreTraits19 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits19) {
                    let tmp21Result1 = _modDef5042;
                  }
                }
                tmp21Result1 = _modDef5038;
              }
              return tmp17Result;
            } else if (ChannelTypes.GUILD_DIRECTORY === type) {
              return _modDef5039;
            } else if (ChannelTypes.GUILD_APP === type) {
              if (isNSFWResult) {
                let ignoreTraits20;
                if (ignoreTraits != null) {
                  ignoreTraits20 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits20) {
                  return _modDef5055;
                }
              }
              if (channel.isSpoilerChannel()) {
                let ignoreTraits21;
                if (ignoreTraits != null) {
                  ignoreTraits21 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits21) {
                  _modDef5056;
                }
              }
              if (isRoleRequiredDefault(channel)) {
                let ignoreTraits22;
                if (ignoreTraits != null) {
                  ignoreTraits22 = ignoreTraits.ignoreTraits;
                }
                if (!ignoreTraits22) {
                  let tmp10Result = _modDef5069;
                }
              }
              tmp10Result = _modDef5033;
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
      let tmp90 = _modDef5029;
    } else {
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
        if (ChannelTypes.PUBLIC_THREAD !== type2) {
          tmp90 = null;
        }
      }
      tmp90 = _modDef5030;
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
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return _modDef5029;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== arg0) {
      if (ChannelTypes.PUBLIC_THREAD !== arg0) {
        if (ChannelTypes.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return _modDef5030;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return _modDef5031;
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GUILD_APP === type) {
                    return _modDef5033;
                  } else if (ChannelTypes.GROUP_DM === type) {
                    return _modDef5034;
                  } else if (ChannelTypes.DM === type) {
                    return _modDef5035;
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return _modDef5036;
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return _modDef5037;
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return _modDef5038;
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return _modDef5039;
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
            return _modDef5032;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = _modDef5029;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
      if (ChannelTypes.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = _modDef5030;
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
    case "voice":
      return _modDef5038;
    case "voice-locked":
      return _modDef5040;
    case "voice-nsfw":
      return _modDef5041;
    case "voice-spoiler":
      return _modDef5042;
    case "stage":
      return _modDef5037;
    case "stage-locked":
      return _modDef5043;
    case "text":
      return _modDef5032;
    case "text-nsfw":
      return _modDef5044;
    case "text-spoiler":
      return _modDef5045;
    case "announcement":
      return _modDef5036;
    case "announcement-nsfw":
      return _modDef5046;
    case "announcement-spoiler":
      return _modDef5047;
    case "thread":
      return _modDef5030;
    case "post":
      let tmp21 = _modDef5048;
      return tmp21;
    case "message":
      tmp21 = _modDef5048;
      return tmp21;
    case "forum":
      return _modDef5049;
    case "forum-nsfw":
      return _modDef5050;
    case "forum-spoiler":
      return _modDef5051;
    case "media":
      return _modDef5052;
    case "media-nsfw":
      return _modDef5053;
    case "locked":
      return _modDef5054;
    case "app":
      return _modDef5033;
    case "app-nsfw":
      return _modDef5055;
    case "app-spoiler":
      return _modDef5056;
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
};