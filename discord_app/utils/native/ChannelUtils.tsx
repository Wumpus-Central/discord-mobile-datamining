// === Module 5239: utils/ChannelUtils ===

// Module 5239 (utils/ChannelUtils)
import _modDef5240 from "module_5240" /* 5240 */;
import _modDef5241 from "module_5241" /* 5241 */;
import _modDef5242 from "module_5242" /* 5242 */;
import _modDef5243 from "module_5243" /* 5243 */;
import _modDef5244 from "module_5244" /* 5244 */;
import _modDef5245 from "module_5245" /* 5245 */;
import _modDef5246 from "module_5246" /* 5246 */;
import _modDef5247 from "module_5247" /* 5247 */;
import _modDef5248 from "module_5248" /* 5248 */;
import _modDef5249 from "module_5249" /* 5249 */;
import _modDef5250 from "module_5250" /* 5250 */;
import _modDef5251 from "module_5251" /* 5251 */;
import _modDef5252 from "module_5252" /* 5252 */;
import _modDef5253 from "module_5253" /* 5253 */;
import _modDef5254 from "module_5254" /* 5254 */;
import _modDef5255 from "module_5255" /* 5255 */;
import _modDef5256 from "module_5256" /* 5256 */;
import _modDef5257 from "module_5257" /* 5257 */;
import _modDef5258 from "module_5258" /* 5258 */;
import _modDef5259 from "module_5259" /* 5259 */;
import _modDef5260 from "module_5260" /* 5260 */;
import _modDef5261 from "module_5261" /* 5261 */;
import _modDef5262 from "module_5262" /* 5262 */;
import _modDef5263 from "module_5263" /* 5263 */;
import _modDef5264 from "module_5264" /* 5264 */;
import _modDef5265 from "module_5265" /* 5265 */;
import _modDef5266 from "module_5266" /* 5266 */;
import _modDef5267 from "module_5267" /* 5267 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5268 */;
import _modDef5271 from "module_5271" /* 5271 */;
import getVibegrationsChannelIcon from "getVibegrationsChannelIcon" /* 5272 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5277 */;
import AppsIcon2 from "AppsIcon" /* 5278 */;
import AppsLockIcon from "AppsLockIcon" /* 5279 */;
import _modDef5280 from "module_5280" /* 5280 */;
import _modDef5281 from "module_5281" /* 5281 */;
import _modDef5282 from "module_5282" /* 5282 */;
import _modDef5283 from "module_5283" /* 5283 */;
import _modDef5284 from "module_5284" /* 5284 */;
import _modDef5286 from "module_5286" /* 5286 */;
import _modDef5287 from "module_5287" /* 5287 */;
import ExperimentalLfgIcon from "ExperimentalLfgIcon" /* 5288 */;
import ChatIcon2 from "ChatIcon" /* 5289 */;
import ThreadLockIcon from "ThreadLockIcon" /* 5290 */;
import ThreadIcon2 from "ThreadIcon" /* 5291 */;
import FolderIcon from "FolderIcon" /* 5292 */;
import BookCheckIcon from "BookCheckIcon" /* 5293 */;
import TextWarningIcon2 from "TextWarningIcon" /* 5294 */;
import TextSpoilerIcon2 from "TextSpoilerIcon" /* 5295 */;
import TextLockIcon2 from "TextLockIcon" /* 5296 */;
import TextControllerIcon from "TextControllerIcon" /* 5297 */;
import TextIcon2 from "TextIcon" /* 5298 */;
import ImageWarningIcon2 from "ImageWarningIcon" /* 5299 */;
import ForumWarningIcon2 from "ForumWarningIcon" /* 5300 */;
import ForumSpoilerIcon3 from "ForumSpoilerIcon" /* 5301 */;
import ExperimentalLfgLockIcon from "ExperimentalLfgLockIcon" /* 5302 */;
import ImageLockIcon from "ImageLockIcon" /* 5303 */;
import ForumLockIcon2 from "ForumLockIcon" /* 5304 */;
import ImageIcon2 from "ImageIcon" /* 5305 */;
import ForumIcon2 from "ForumIcon" /* 5306 */;
import GroupIcon from "GroupIcon" /* 5307 */;
import AtIcon from "AtIcon" /* 5308 */;
import AnnouncementsWarningIcon2 from "AnnouncementsWarningIcon" /* 5309 */;
import AnnouncementsSpoilerIcon2 from "AnnouncementsSpoilerIcon" /* 5310 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 5311 */;
import AnnouncementsIcon2 from "AnnouncementsIcon" /* 5312 */;
import LockIcon3 from "LockIcon" /* 5313 */;
import StageLockIcon2 from "StageLockIcon" /* 5314 */;
import StageIcon2 from "StageIcon" /* 5315 */;
import VoiceLockIcon3 from "VoiceLockIcon" /* 5316 */;
import VoiceWarningIcon2 from "VoiceWarningIcon" /* 5317 */;
import VoiceNormalSpoilerIcon from "VoiceNormalSpoilerIcon" /* 5318 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 5319 */;
import HubIcon from "HubIcon" /* 5320 */;
import AppsWarningIcon from "AppsWarningIcon" /* 5321 */;
import AppsSpoilerIcon2 from "AppsSpoilerIcon" /* 5322 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2063 */;
import UserStore from "UserStore" /* 1372 */;

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
      let tmp96 = _modDef5271;
    } else {
      tmp96 = _modDef5259;
    }
    return tmp96;
  } else {
    const vibegrationsChannelIconSource = getVibegrationsChannelIcon.getVibegrationsChannelIconSource(channel, "getChannelIcon");
    if (null != vibegrationsChannelIconSource) {
      return vibegrationsChannelIconSource;
    } else {
      const isMediaChannelResult = channel.isMediaChannel();
      const isNSFWResult = channel.isNSFW();
      const type2 = channel.type;
      if (ChannelTypes.PRIVATE_THREAD !== type2) {
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
          if (ChannelTypes.PUBLIC_THREAD !== type2) {
            if (ChannelTypes.MEDIA_THREAD !== type2) {
              if (ChannelTypes.GUILD_CATEGORY === type2) {
                return _modDef5242;
              } else if (ChannelTypes.GUILD_TEXT === type2) {
                if (isRulesChannel) {
                  let tmp78 = _modDef5281;
                } else {
                  if (isNSFWResult) {
                    ignoreTraits = undefined;
                    if (ignoreTraits != null) {
                      ignoreTraits = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits) {
                      tmp78 = _modDef5255;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits1;
                    if (ignoreTraits != null) {
                      ignoreTraits1 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits1) {
                      _modDef5256;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits2;
                    if (ignoreTraits != null) {
                      ignoreTraits2 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits2) {
                      _modDef5265;
                    }
                  }
                  if (null != channel.linkedLobby) {
                    let tmp81Result2 = _modDef5282;
                  } else {
                    tmp81Result2 = _modDef5243;
                  }
                }
                return tmp78;
              } else if (ChannelTypes.GUILD_FORUM === type2) {
                if (isRulesChannel) {
                  let tmp65 = _modDef5281;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits3;
                    if (ignoreTraits != null) {
                      ignoreTraits3 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits3) {
                      tmp65 = importDefault(isMediaChannelResult ? 5264 : 5261);
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits4;
                    if (ignoreTraits != null) {
                      ignoreTraits4 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits4) {
                      _modDef5262;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits5;
                    if (ignoreTraits != null) {
                      ignoreTraits5 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits5) {
                      if (channel.isGameInvitesChannel()) {
                        let tmp68Result = _modDef5283;
                      } else {
                        tmp68Result = importDefault(isMediaChannelResult ? 5284 : 5285);
                      }
                    }
                  }
                  if (channel.isGameInvitesChannel()) {
                    let tmp68Result2 = _modDef5271;
                  } else {
                    tmp68Result2 = importDefault(isMediaChannelResult ? 5263 : 5260);
                  }
                }
                return tmp65;
              } else if (ChannelTypes.GUILD_MEDIA === type2) {
                if (isRulesChannel) {
                  let tmp55 = _modDef5281;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits6;
                    if (ignoreTraits != null) {
                      ignoreTraits6 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits6) {
                      tmp55 = _modDef5264;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits7;
                    if (ignoreTraits != null) {
                      ignoreTraits7 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits7) {
                      _modDef5262;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits8;
                    if (ignoreTraits != null) {
                      ignoreTraits8 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits8) {
                      let tmp58Result = _modDef5284;
                    }
                  }
                  tmp58Result = _modDef5263;
                }
                return tmp55;
              } else if (ChannelTypes.GROUP_DM === type2) {
                return _modDef5245;
              } else if (ChannelTypes.DM === type2) {
                return _modDef5246;
              } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type2) {
                if (isRulesChannel) {
                  let tmp42 = _modDef5281;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits9;
                    if (ignoreTraits != null) {
                      ignoreTraits9 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits9) {
                      tmp42 = _modDef5257;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits10;
                    if (ignoreTraits != null) {
                      ignoreTraits10 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits10) {
                      _modDef5258;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits11;
                    if (ignoreTraits != null) {
                      ignoreTraits11 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits11) {
                      let tmp45Result = _modDef5286;
                    }
                  }
                  tmp45Result = _modDef5247;
                }
                return tmp42;
              } else if (ChannelTypes.GUILD_STAGE_VOICE === type2) {
                if (result) {
                  let ignoreTraits12;
                  if (ignoreTraits != null) {
                    ignoreTraits12 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits12) {
                    if (isRoleRequiredDefault(channel)) {
                      let tmp31Result = _modDef5287;
                    } else {
                      tmp31Result = _modDef5254;
                    }
                    return tmp31Result;
                  }
                }
                if (locked) {
                  let ignoreTraits13;
                  if (ignoreTraits != null) {
                    ignoreTraits13 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits13) {
                    _modDef5287;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits14;
                  if (ignoreTraits != null) {
                    ignoreTraits14 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits14) {
                    let tmp35Result = _modDef5254;
                  }
                }
                tmp35Result = _modDef5248;
              } else if (ChannelTypes.GUILD_VOICE === type2) {
                if (obj.textFocused) {
                  let tmp16Result = _modDef5259;
                } else {
                  if (result) {
                    let ignoreTraits15;
                    if (ignoreTraits != null) {
                      ignoreTraits15 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits15) {
                      if (isRoleRequiredDefault(channel)) {
                        tmp16Result = _modDef5287;
                      } else {
                        tmp16Result = _modDef5251;
                      }
                    }
                  }
                  if (locked) {
                    let ignoreTraits16;
                    if (ignoreTraits != null) {
                      ignoreTraits16 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits16) {
                      _modDef5287;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits17;
                    if (ignoreTraits != null) {
                      ignoreTraits17 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits17) {
                      _modDef5251;
                    }
                  }
                  if (isNSFWResult) {
                    let ignoreTraits18;
                    if (ignoreTraits != null) {
                      ignoreTraits18 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits18) {
                      _modDef5252;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits19;
                    if (ignoreTraits != null) {
                      ignoreTraits19 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits19) {
                      let tmp20Result4 = _modDef5253;
                    }
                  }
                  tmp20Result4 = _modDef5249;
                }
                return tmp16Result;
              } else if (ChannelTypes.GUILD_DIRECTORY === type2) {
                return _modDef5250;
              } else if (ChannelTypes.GUILD_APP === type2) {
                if (isNSFWResult) {
                  let ignoreTraits20;
                  if (ignoreTraits != null) {
                    ignoreTraits20 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits20) {
                    return _modDef5266;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits21;
                  if (ignoreTraits != null) {
                    ignoreTraits21 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits21) {
                    _modDef5267;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits22;
                  if (ignoreTraits != null) {
                    ignoreTraits22 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits22) {
                    let tmp9Result = _modDef5280;
                  }
                }
                tmp9Result = _modDef5244;
              } else {
                if (ChannelTypes.GUILD_STORE !== type2) {
                  if (ChannelTypes.GUILD_SPACE !== type2) {
                    const UNKNOWN = ChannelTypes.UNKNOWN;
                  }
                }
                return null;
              }
            }
          }
        }
      }
      const type = channel.type;
      if (ChannelTypes.PRIVATE_THREAD === type) {
        let tmp89 = _modDef5240;
      } else {
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
          if (ChannelTypes.PUBLIC_THREAD !== type) {
            tmp89 = null;
          }
        }
        tmp89 = _modDef5241;
      }
      return tmp89;
    }
    const tmpResult = getVibegrationsChannelIcon;
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
    const vibegrationsChannelIconComponent = getVibegrationsChannelIcon.getVibegrationsChannelIconComponent(channel, "getChannelIconComponent");
    if (null != vibegrationsChannelIconComponent) {
      return vibegrationsChannelIconComponent;
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
    const tmpResult = getVibegrationsChannelIcon;
  }
}
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/ChannelUtils.tsx");

export const getThreadChannelIcon = function getThreadChannelIcon(arg0) {
  if (ChannelTypes.PRIVATE_THREAD === arg0) {
    return _modDef5240;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== arg0) {
      if (ChannelTypes.PUBLIC_THREAD !== arg0) {
        if (ChannelTypes.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return _modDef5241;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return _modDef5242;
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GUILD_APP === type) {
                    return _modDef5244;
                  } else if (ChannelTypes.GROUP_DM === type) {
                    return _modDef5245;
                  } else if (ChannelTypes.DM === type) {
                    return _modDef5246;
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return _modDef5247;
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return _modDef5248;
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return _modDef5249;
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return _modDef5250;
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
            return _modDef5243;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = _modDef5240;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
      if (ChannelTypes.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = _modDef5241;
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
      return _modDef5249;
    case "voice-locked":
      return _modDef5251;
    case "voice-nsfw":
      return _modDef5252;
    case "voice-spoiler":
      return _modDef5253;
    case "stage":
      return _modDef5248;
    case "stage-locked":
      return _modDef5254;
    case "text":
      return _modDef5243;
    case "text-nsfw":
      return _modDef5255;
    case "text-spoiler":
      return _modDef5256;
    case "announcement":
      return _modDef5247;
    case "announcement-nsfw":
      return _modDef5257;
    case "announcement-spoiler":
      return _modDef5258;
    case "thread":
      return _modDef5241;
    case "post":
      let tmp21 = _modDef5259;
      return tmp21;
    case "message":
      tmp21 = _modDef5259;
      return tmp21;
    case "forum":
      return _modDef5260;
    case "forum-nsfw":
      return _modDef5261;
    case "forum-spoiler":
      return _modDef5262;
    case "media":
      return _modDef5263;
    case "media-nsfw":
      return _modDef5264;
    case "locked":
      return _modDef5265;
    case "app":
      return _modDef5244;
    case "app-nsfw":
      return _modDef5266;
    case "app-spoiler":
      return _modDef5267;
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