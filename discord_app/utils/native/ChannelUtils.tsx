// === Module 5327: utils/ChannelUtils ===

// Module 5327 (utils/ChannelUtils)
import _modDef5328 from "module_5328" /* 5328 */;
import _modDef5329 from "module_5329" /* 5329 */;
import _modDef5330 from "module_5330" /* 5330 */;
import _modDef5331 from "module_5331" /* 5331 */;
import _modDef5332 from "module_5332" /* 5332 */;
import _modDef5333 from "module_5333" /* 5333 */;
import _modDef5334 from "module_5334" /* 5334 */;
import _modDef5335 from "module_5335" /* 5335 */;
import _modDef5336 from "module_5336" /* 5336 */;
import _modDef5337 from "module_5337" /* 5337 */;
import _modDef5338 from "module_5338" /* 5338 */;
import _modDef5339 from "module_5339" /* 5339 */;
import _modDef5340 from "module_5340" /* 5340 */;
import _modDef5341 from "module_5341" /* 5341 */;
import _modDef5342 from "module_5342" /* 5342 */;
import _modDef5343 from "module_5343" /* 5343 */;
import _modDef5344 from "module_5344" /* 5344 */;
import _modDef5345 from "module_5345" /* 5345 */;
import _modDef5346 from "module_5346" /* 5346 */;
import _modDef5347 from "module_5347" /* 5347 */;
import _modDef5348 from "module_5348" /* 5348 */;
import _modDef5349 from "module_5349" /* 5349 */;
import _modDef5350 from "module_5350" /* 5350 */;
import _modDef5351 from "module_5351" /* 5351 */;
import _modDef5352 from "module_5352" /* 5352 */;
import _modDef5353 from "module_5353" /* 5353 */;
import _modDef5354 from "module_5354" /* 5354 */;
import _modDef5355 from "module_5355" /* 5355 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5356 */;
import _modDef5359 from "module_5359" /* 5359 */;
import getVibegrationsChannelIcon from "getVibegrationsChannelIcon" /* 5360 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5365 */;
import AppsIcon2 from "AppsIcon" /* 5366 */;
import AppsLockIcon from "AppsLockIcon" /* 5367 */;
import _modDef5368 from "module_5368" /* 5368 */;
import _modDef5369 from "module_5369" /* 5369 */;
import _modDef5370 from "module_5370" /* 5370 */;
import _modDef5371 from "module_5371" /* 5371 */;
import _modDef5372 from "module_5372" /* 5372 */;
import _modDef5374 from "module_5374" /* 5374 */;
import _modDef5375 from "module_5375" /* 5375 */;
import ExperimentalLfgIcon from "ExperimentalLfgIcon" /* 5376 */;
import ChatIcon2 from "ChatIcon" /* 5377 */;
import ThreadLockIcon from "ThreadLockIcon" /* 5378 */;
import ThreadIcon2 from "ThreadIcon" /* 5379 */;
import FolderIcon from "FolderIcon" /* 5380 */;
import BookCheckIcon from "BookCheckIcon" /* 5381 */;
import TextWarningIcon2 from "TextWarningIcon" /* 5382 */;
import TextSpoilerIcon2 from "TextSpoilerIcon" /* 5383 */;
import TextLockIcon2 from "TextLockIcon" /* 5384 */;
import TextControllerIcon from "TextControllerIcon" /* 5385 */;
import TextIcon2 from "TextIcon" /* 5386 */;
import ImageWarningIcon2 from "ImageWarningIcon" /* 5387 */;
import ForumWarningIcon2 from "ForumWarningIcon" /* 5388 */;
import ForumSpoilerIcon3 from "ForumSpoilerIcon" /* 5389 */;
import ExperimentalLfgLockIcon from "ExperimentalLfgLockIcon" /* 5390 */;
import ImageLockIcon from "ImageLockIcon" /* 5391 */;
import ForumLockIcon2 from "ForumLockIcon" /* 5392 */;
import ImageIcon2 from "ImageIcon" /* 5393 */;
import ForumIcon2 from "ForumIcon" /* 5394 */;
import GroupIcon from "GroupIcon" /* 5395 */;
import AtIcon from "AtIcon" /* 5396 */;
import AnnouncementsWarningIcon2 from "AnnouncementsWarningIcon" /* 5397 */;
import AnnouncementsSpoilerIcon2 from "AnnouncementsSpoilerIcon" /* 5398 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 5399 */;
import AnnouncementsIcon2 from "AnnouncementsIcon" /* 5400 */;
import LockIcon3 from "LockIcon" /* 5401 */;
import StageLockIcon2 from "StageLockIcon" /* 5402 */;
import StageIcon2 from "StageIcon" /* 5403 */;
import VoiceLockIcon3 from "VoiceLockIcon" /* 5404 */;
import VoiceWarningIcon2 from "VoiceWarningIcon" /* 5405 */;
import VoiceNormalSpoilerIcon from "VoiceNormalSpoilerIcon" /* 5406 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 5407 */;
import HubIcon from "HubIcon" /* 5408 */;
import AppsWarningIcon from "AppsWarningIcon" /* 5409 */;
import AppsSpoilerIcon2 from "AppsSpoilerIcon" /* 5410 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildMemberStore from "GuildMemberStore" /* 2107 */;
import GuildStore from "GuildStore" /* 2066 */;
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
      let tmp96 = _modDef5359;
    } else {
      tmp96 = _modDef5347;
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
                return _modDef5330;
              } else if (ChannelTypes.GUILD_TEXT === type2) {
                if (isRulesChannel) {
                  let tmp78 = _modDef5369;
                } else {
                  if (isNSFWResult) {
                    ignoreTraits = undefined;
                    if (ignoreTraits != null) {
                      ignoreTraits = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits) {
                      tmp78 = _modDef5343;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits1;
                    if (ignoreTraits != null) {
                      ignoreTraits1 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits1) {
                      _modDef5344;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits2;
                    if (ignoreTraits != null) {
                      ignoreTraits2 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits2) {
                      _modDef5353;
                    }
                  }
                  if (null != channel.linkedLobby) {
                    let tmp81Result2 = _modDef5370;
                  } else {
                    tmp81Result2 = _modDef5331;
                  }
                }
                return tmp78;
              } else if (ChannelTypes.GUILD_FORUM === type2) {
                if (isRulesChannel) {
                  let tmp65 = _modDef5369;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits3;
                    if (ignoreTraits != null) {
                      ignoreTraits3 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits3) {
                      tmp65 = importDefault(isMediaChannelResult ? 5352 : 5349);
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits4;
                    if (ignoreTraits != null) {
                      ignoreTraits4 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits4) {
                      _modDef5350;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits5;
                    if (ignoreTraits != null) {
                      ignoreTraits5 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits5) {
                      if (channel.isGameInvitesChannel()) {
                        let tmp68Result = _modDef5371;
                      } else {
                        tmp68Result = importDefault(isMediaChannelResult ? 5372 : 5373);
                      }
                    }
                  }
                  if (channel.isGameInvitesChannel()) {
                    let tmp68Result2 = _modDef5359;
                  } else {
                    tmp68Result2 = importDefault(isMediaChannelResult ? 5351 : 5348);
                  }
                }
                return tmp65;
              } else if (ChannelTypes.GUILD_MEDIA === type2) {
                if (isRulesChannel) {
                  let tmp55 = _modDef5369;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits6;
                    if (ignoreTraits != null) {
                      ignoreTraits6 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits6) {
                      tmp55 = _modDef5352;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits7;
                    if (ignoreTraits != null) {
                      ignoreTraits7 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits7) {
                      _modDef5350;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits8;
                    if (ignoreTraits != null) {
                      ignoreTraits8 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits8) {
                      let tmp58Result = _modDef5372;
                    }
                  }
                  tmp58Result = _modDef5351;
                }
                return tmp55;
              } else if (ChannelTypes.GROUP_DM === type2) {
                return _modDef5333;
              } else if (ChannelTypes.DM === type2) {
                return _modDef5334;
              } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type2) {
                if (isRulesChannel) {
                  let tmp42 = _modDef5369;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits9;
                    if (ignoreTraits != null) {
                      ignoreTraits9 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits9) {
                      tmp42 = _modDef5345;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits10;
                    if (ignoreTraits != null) {
                      ignoreTraits10 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits10) {
                      _modDef5346;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits11;
                    if (ignoreTraits != null) {
                      ignoreTraits11 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits11) {
                      let tmp45Result = _modDef5374;
                    }
                  }
                  tmp45Result = _modDef5335;
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
                      let tmp31Result = _modDef5375;
                    } else {
                      tmp31Result = _modDef5342;
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
                    _modDef5375;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits14;
                  if (ignoreTraits != null) {
                    ignoreTraits14 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits14) {
                    let tmp35Result = _modDef5342;
                  }
                }
                tmp35Result = _modDef5336;
              } else if (ChannelTypes.GUILD_VOICE === type2) {
                if (obj.textFocused) {
                  let tmp16Result = _modDef5347;
                } else {
                  if (result) {
                    let ignoreTraits15;
                    if (ignoreTraits != null) {
                      ignoreTraits15 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits15) {
                      if (isRoleRequiredDefault(channel)) {
                        tmp16Result = _modDef5375;
                      } else {
                        tmp16Result = _modDef5339;
                      }
                    }
                  }
                  if (locked) {
                    let ignoreTraits16;
                    if (ignoreTraits != null) {
                      ignoreTraits16 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits16) {
                      _modDef5375;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits17;
                    if (ignoreTraits != null) {
                      ignoreTraits17 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits17) {
                      _modDef5339;
                    }
                  }
                  if (isNSFWResult) {
                    let ignoreTraits18;
                    if (ignoreTraits != null) {
                      ignoreTraits18 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits18) {
                      _modDef5340;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits19;
                    if (ignoreTraits != null) {
                      ignoreTraits19 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits19) {
                      let tmp20Result4 = _modDef5341;
                    }
                  }
                  tmp20Result4 = _modDef5337;
                }
                return tmp16Result;
              } else if (ChannelTypes.GUILD_DIRECTORY === type2) {
                return _modDef5338;
              } else if (ChannelTypes.GUILD_APP === type2) {
                if (isNSFWResult) {
                  let ignoreTraits20;
                  if (ignoreTraits != null) {
                    ignoreTraits20 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits20) {
                    return _modDef5354;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits21;
                  if (ignoreTraits != null) {
                    ignoreTraits21 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits21) {
                    _modDef5355;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits22;
                  if (ignoreTraits != null) {
                    ignoreTraits22 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits22) {
                    let tmp9Result = _modDef5368;
                  }
                }
                tmp9Result = _modDef5332;
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
        let tmp89 = _modDef5328;
      } else {
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
          if (ChannelTypes.PUBLIC_THREAD !== type) {
            tmp89 = null;
          }
        }
        tmp89 = _modDef5329;
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
    return _modDef5328;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== arg0) {
      if (ChannelTypes.PUBLIC_THREAD !== arg0) {
        if (ChannelTypes.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return _modDef5329;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return _modDef5330;
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GUILD_APP === type) {
                    return _modDef5332;
                  } else if (ChannelTypes.GROUP_DM === type) {
                    return _modDef5333;
                  } else if (ChannelTypes.DM === type) {
                    return _modDef5334;
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return _modDef5335;
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return _modDef5336;
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return _modDef5337;
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return _modDef5338;
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
            return _modDef5331;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = _modDef5328;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
      if (ChannelTypes.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = _modDef5329;
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
      return _modDef5337;
    case "voice-locked":
      return _modDef5339;
    case "voice-nsfw":
      return _modDef5340;
    case "voice-spoiler":
      return _modDef5341;
    case "stage":
      return _modDef5336;
    case "stage-locked":
      return _modDef5342;
    case "text":
      return _modDef5331;
    case "text-nsfw":
      return _modDef5343;
    case "text-spoiler":
      return _modDef5344;
    case "announcement":
      return _modDef5335;
    case "announcement-nsfw":
      return _modDef5345;
    case "announcement-spoiler":
      return _modDef5346;
    case "thread":
      return _modDef5329;
    case "post":
      let tmp21 = _modDef5347;
      return tmp21;
    case "message":
      tmp21 = _modDef5347;
      return tmp21;
    case "forum":
      return _modDef5348;
    case "forum-nsfw":
      return _modDef5349;
    case "forum-spoiler":
      return _modDef5350;
    case "media":
      return _modDef5351;
    case "media-nsfw":
      return _modDef5352;
    case "locked":
      return _modDef5353;
    case "app":
      return _modDef5332;
    case "app-nsfw":
      return _modDef5354;
    case "app-spoiler":
      return _modDef5355;
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