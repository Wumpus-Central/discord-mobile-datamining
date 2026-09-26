// === Module 5335: utils/ChannelUtils ===

// Module 5335 (utils/ChannelUtils)
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
import _modDef5356 from "module_5356" /* 5356 */;
import _modDef5357 from "module_5357" /* 5357 */;
import _modDef5358 from "module_5358" /* 5358 */;
import _modDef5359 from "module_5359" /* 5359 */;
import _modDef5360 from "module_5360" /* 5360 */;
import _modDef5361 from "module_5361" /* 5361 */;
import _modDef5362 from "module_5362" /* 5362 */;
import _modDef5363 from "module_5363" /* 5363 */;
import useShowMemberVerificationGate from "useShowMemberVerificationGate" /* 5364 */;
import _modDef5367 from "module_5367" /* 5367 */;
import getVibegrationsChannelIcon from "getVibegrationsChannelIcon" /* 5368 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5373 */;
import AppsIcon2 from "AppsIcon" /* 5374 */;
import AppsLockIcon from "AppsLockIcon" /* 5375 */;
import _modDef5376 from "module_5376" /* 5376 */;
import _modDef5377 from "module_5377" /* 5377 */;
import _modDef5378 from "module_5378" /* 5378 */;
import _modDef5379 from "module_5379" /* 5379 */;
import _modDef5380 from "module_5380" /* 5380 */;
import _modDef5382 from "module_5382" /* 5382 */;
import _modDef5383 from "module_5383" /* 5383 */;
import ExperimentalLfgIcon from "ExperimentalLfgIcon" /* 5384 */;
import ChatIcon2 from "ChatIcon" /* 5385 */;
import ThreadLockIcon from "ThreadLockIcon" /* 5386 */;
import ThreadIcon2 from "ThreadIcon" /* 5387 */;
import FolderIcon from "FolderIcon" /* 5388 */;
import BookCheckIcon from "BookCheckIcon" /* 5389 */;
import TextWarningIcon2 from "TextWarningIcon" /* 5390 */;
import TextSpoilerIcon2 from "TextSpoilerIcon" /* 5391 */;
import TextLockIcon2 from "TextLockIcon" /* 5392 */;
import TextControllerIcon from "TextControllerIcon" /* 5393 */;
import TextIcon2 from "TextIcon" /* 5394 */;
import ImageWarningIcon2 from "ImageWarningIcon" /* 5395 */;
import ForumWarningIcon2 from "ForumWarningIcon" /* 5396 */;
import ForumSpoilerIcon3 from "ForumSpoilerIcon" /* 5397 */;
import ExperimentalLfgLockIcon from "ExperimentalLfgLockIcon" /* 5398 */;
import ImageLockIcon from "ImageLockIcon" /* 5399 */;
import ForumLockIcon2 from "ForumLockIcon" /* 5400 */;
import ImageIcon2 from "ImageIcon" /* 5401 */;
import ForumIcon2 from "ForumIcon" /* 5402 */;
import GroupIcon from "GroupIcon" /* 5403 */;
import AtIcon from "AtIcon" /* 5404 */;
import AnnouncementsWarningIcon2 from "AnnouncementsWarningIcon" /* 5405 */;
import AnnouncementsSpoilerIcon2 from "AnnouncementsSpoilerIcon" /* 5406 */;
import AnnouncementsLockIcon from "AnnouncementsLockIcon" /* 5407 */;
import AnnouncementsIcon2 from "AnnouncementsIcon" /* 5408 */;
import LockIcon3 from "LockIcon" /* 5409 */;
import StageLockIcon2 from "StageLockIcon" /* 5410 */;
import StageIcon2 from "StageIcon" /* 5411 */;
import VoiceLockIcon3 from "VoiceLockIcon" /* 5412 */;
import VoiceWarningIcon2 from "VoiceWarningIcon" /* 5413 */;
import VoiceNormalSpoilerIcon from "VoiceNormalSpoilerIcon" /* 5414 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 5415 */;
import HubIcon from "HubIcon" /* 5416 */;
import AppsWarningIcon from "AppsWarningIcon" /* 5417 */;
import AppsSpoilerIcon2 from "AppsSpoilerIcon" /* 5418 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
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
      let tmp96 = _modDef5367;
    } else {
      tmp96 = _modDef5355;
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
                return _modDef5338;
              } else if (ChannelTypes.GUILD_TEXT === type2) {
                if (isRulesChannel) {
                  let tmp78 = _modDef5377;
                } else {
                  if (isNSFWResult) {
                    ignoreTraits = undefined;
                    if (ignoreTraits != null) {
                      ignoreTraits = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits) {
                      tmp78 = _modDef5351;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits1;
                    if (ignoreTraits != null) {
                      ignoreTraits1 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits1) {
                      _modDef5352;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits2;
                    if (ignoreTraits != null) {
                      ignoreTraits2 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits2) {
                      _modDef5361;
                    }
                  }
                  if (null != channel.linkedLobby) {
                    let tmp81Result2 = _modDef5378;
                  } else {
                    tmp81Result2 = _modDef5339;
                  }
                }
                return tmp78;
              } else if (ChannelTypes.GUILD_FORUM === type2) {
                if (isRulesChannel) {
                  let tmp65 = _modDef5377;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits3;
                    if (ignoreTraits != null) {
                      ignoreTraits3 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits3) {
                      tmp65 = importDefault(isMediaChannelResult ? 5360 : 5357);
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits4;
                    if (ignoreTraits != null) {
                      ignoreTraits4 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits4) {
                      _modDef5358;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits5;
                    if (ignoreTraits != null) {
                      ignoreTraits5 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits5) {
                      if (channel.isGameInvitesChannel()) {
                        let tmp68Result = _modDef5379;
                      } else {
                        tmp68Result = importDefault(isMediaChannelResult ? 5380 : 5381);
                      }
                    }
                  }
                  if (channel.isGameInvitesChannel()) {
                    let tmp68Result2 = _modDef5367;
                  } else {
                    tmp68Result2 = importDefault(isMediaChannelResult ? 5359 : 5356);
                  }
                }
                return tmp65;
              } else if (ChannelTypes.GUILD_MEDIA === type2) {
                if (isRulesChannel) {
                  let tmp55 = _modDef5377;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits6;
                    if (ignoreTraits != null) {
                      ignoreTraits6 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits6) {
                      tmp55 = _modDef5360;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits7;
                    if (ignoreTraits != null) {
                      ignoreTraits7 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits7) {
                      _modDef5358;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits8;
                    if (ignoreTraits != null) {
                      ignoreTraits8 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits8) {
                      let tmp58Result = _modDef5380;
                    }
                  }
                  tmp58Result = _modDef5359;
                }
                return tmp55;
              } else if (ChannelTypes.GROUP_DM === type2) {
                return _modDef5341;
              } else if (ChannelTypes.DM === type2) {
                return _modDef5342;
              } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type2) {
                if (isRulesChannel) {
                  let tmp42 = _modDef5377;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits9;
                    if (ignoreTraits != null) {
                      ignoreTraits9 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits9) {
                      tmp42 = _modDef5353;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits10;
                    if (ignoreTraits != null) {
                      ignoreTraits10 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits10) {
                      _modDef5354;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits11;
                    if (ignoreTraits != null) {
                      ignoreTraits11 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits11) {
                      let tmp45Result = _modDef5382;
                    }
                  }
                  tmp45Result = _modDef5343;
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
                      let tmp31Result = _modDef5383;
                    } else {
                      tmp31Result = _modDef5350;
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
                    _modDef5383;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits14;
                  if (ignoreTraits != null) {
                    ignoreTraits14 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits14) {
                    let tmp35Result = _modDef5350;
                  }
                }
                tmp35Result = _modDef5344;
              } else if (ChannelTypes.GUILD_VOICE === type2) {
                if (obj.textFocused) {
                  let tmp16Result = _modDef5355;
                } else {
                  if (result) {
                    let ignoreTraits15;
                    if (ignoreTraits != null) {
                      ignoreTraits15 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits15) {
                      if (isRoleRequiredDefault(channel)) {
                        tmp16Result = _modDef5383;
                      } else {
                        tmp16Result = _modDef5347;
                      }
                    }
                  }
                  if (locked) {
                    let ignoreTraits16;
                    if (ignoreTraits != null) {
                      ignoreTraits16 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits16) {
                      _modDef5383;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits17;
                    if (ignoreTraits != null) {
                      ignoreTraits17 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits17) {
                      _modDef5347;
                    }
                  }
                  if (isNSFWResult) {
                    let ignoreTraits18;
                    if (ignoreTraits != null) {
                      ignoreTraits18 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits18) {
                      _modDef5348;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits19;
                    if (ignoreTraits != null) {
                      ignoreTraits19 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits19) {
                      let tmp20Result4 = _modDef5349;
                    }
                  }
                  tmp20Result4 = _modDef5345;
                }
                return tmp16Result;
              } else if (ChannelTypes.GUILD_DIRECTORY === type2) {
                return _modDef5346;
              } else if (ChannelTypes.GUILD_APP === type2) {
                if (isNSFWResult) {
                  let ignoreTraits20;
                  if (ignoreTraits != null) {
                    ignoreTraits20 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits20) {
                    return _modDef5362;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits21;
                  if (ignoreTraits != null) {
                    ignoreTraits21 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits21) {
                    _modDef5363;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits22;
                  if (ignoreTraits != null) {
                    ignoreTraits22 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits22) {
                    let tmp9Result = _modDef5376;
                  }
                }
                tmp9Result = _modDef5340;
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
        let tmp89 = _modDef5336;
      } else {
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
          if (ChannelTypes.PUBLIC_THREAD !== type) {
            tmp89 = null;
          }
        }
        tmp89 = _modDef5337;
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
    return _modDef5336;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== arg0) {
      if (ChannelTypes.PUBLIC_THREAD !== arg0) {
        if (ChannelTypes.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return _modDef5337;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return _modDef5338;
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GUILD_APP === type) {
                    return _modDef5340;
                  } else if (ChannelTypes.GROUP_DM === type) {
                    return _modDef5341;
                  } else if (ChannelTypes.DM === type) {
                    return _modDef5342;
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return _modDef5343;
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return _modDef5344;
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return _modDef5345;
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return _modDef5346;
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
            return _modDef5339;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = _modDef5336;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
      if (ChannelTypes.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = _modDef5337;
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
      return _modDef5345;
    case "voice-locked":
      return _modDef5347;
    case "voice-nsfw":
      return _modDef5348;
    case "voice-spoiler":
      return _modDef5349;
    case "stage":
      return _modDef5344;
    case "stage-locked":
      return _modDef5350;
    case "text":
      return _modDef5339;
    case "text-nsfw":
      return _modDef5351;
    case "text-spoiler":
      return _modDef5352;
    case "announcement":
      return _modDef5343;
    case "announcement-nsfw":
      return _modDef5353;
    case "announcement-spoiler":
      return _modDef5354;
    case "thread":
      return _modDef5337;
    case "post":
      let tmp21 = _modDef5355;
      return tmp21;
    case "message":
      tmp21 = _modDef5355;
      return tmp21;
    case "forum":
      return _modDef5356;
    case "forum-nsfw":
      return _modDef5357;
    case "forum-spoiler":
      return _modDef5358;
    case "media":
      return _modDef5359;
    case "media-nsfw":
      return _modDef5360;
    case "locked":
      return _modDef5361;
    case "app":
      return _modDef5340;
    case "app-nsfw":
      return _modDef5362;
    case "app-spoiler":
      return _modDef5363;
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