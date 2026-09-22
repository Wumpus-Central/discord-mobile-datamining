// discord_app/utils/native/ChannelUtils.tsx
import _modDef5242 from "../../../_runtime/metro/05242__.js";
import _modDef5243 from "../../../_runtime/metro/05243__.js";
import _modDef5244 from "../../../_runtime/metro/05244__.js";
import _modDef5245 from "../../../_runtime/metro/05245__.js";
import _modDef5246 from "../../../_runtime/metro/05246__.js";
import _modDef5247 from "../../../_runtime/metro/05247__.js";
import _modDef5248 from "../../../_runtime/metro/05248__.js";
import _modDef5249 from "../../../_runtime/metro/05249__.js";
import _modDef5250 from "../../../_runtime/metro/05250__.js";
import _modDef5251 from "../../../_runtime/metro/05251__.js";
import _modDef5252 from "../../../_runtime/metro/05252__.js";
import _modDef5253 from "../../../_runtime/metro/05253__.js";
import _modDef5254 from "../../../_runtime/metro/05254__.js";
import _modDef5255 from "../../../_runtime/metro/05255__.js";
import _modDef5256 from "../../../_runtime/metro/05256__.js";
import _modDef5257 from "../../../_runtime/metro/05257__.js";
import _modDef5258 from "../../../_runtime/metro/05258__.js";
import _modDef5259 from "../../../_runtime/metro/05259__.js";
import _modDef5260 from "../../../_runtime/metro/05260__.js";
import _modDef5261 from "../../../_runtime/metro/05261__.js";
import _modDef5262 from "../../../_runtime/metro/05262__.js";
import _modDef5263 from "../../../_runtime/metro/05263__.js";
import _modDef5264 from "../../../_runtime/metro/05264__.js";
import _modDef5265 from "../../../_runtime/metro/05265__.js";
import _modDef5266 from "../../../_runtime/metro/05266__.js";
import _modDef5267 from "../../../_runtime/metro/05267__.js";
import _modDef5268 from "../../../_runtime/metro/05268__.js";
import _modDef5269 from "../../../_runtime/metro/05269__.js";
import useShowMemberVerificationGate from "../../modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx";
import _modDef5273 from "../../../_runtime/metro/05273__.js";
import getVibegrationsChannelIcon from "../../modules/vibegrations/native/getVibegrationsChannelIcon.tsx";
import isRoleRequiredDefault from "../../modules/channel/isRoleRequired.tsx";
import AppsIcon2 from "../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import AppsLockIcon from "../../design/components/Icon/native/redesign/generated/AppsLockIcon.tsx";
import _modDef5282 from "../../../_runtime/metro/05282__.js";
import _modDef5283 from "../../../_runtime/metro/05283__.js";
import _modDef5284 from "../../../_runtime/metro/05284__.js";
import _modDef5285 from "../../../_runtime/metro/05285__.js";
import _modDef5286 from "../../../_runtime/metro/05286__.js";
import _modDef5288 from "../../../_runtime/metro/05288__.js";
import _modDef5289 from "../../../_runtime/metro/05289__.js";
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
      let tmp96 = _modDef5273;
    } else {
      tmp96 = _modDef5261;
    }
    return tmp96;
  } else {
    const vibegrationsChannelIconSource = getVibegrationsChannelIcon.getVibegrationsChannelIconSource(
      channel,
      "getChannelIcon",
    );
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
                return _modDef5244;
              } else if (ChannelTypes.GUILD_TEXT === type2) {
                if (isRulesChannel) {
                  let tmp78 = _modDef5283;
                } else {
                  if (isNSFWResult) {
                    ignoreTraits = undefined;
                    if (ignoreTraits != null) {
                      ignoreTraits = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits) {
                      tmp78 = _modDef5257;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits1;
                    if (ignoreTraits != null) {
                      ignoreTraits1 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits1) {
                      _modDef5258;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits2;
                    if (ignoreTraits != null) {
                      ignoreTraits2 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits2) {
                      _modDef5267;
                    }
                  }
                  if (null != channel.linkedLobby) {
                    let tmp81Result2 = _modDef5284;
                  } else {
                    tmp81Result2 = _modDef5245;
                  }
                }
                return tmp78;
              } else if (ChannelTypes.GUILD_FORUM === type2) {
                if (isRulesChannel) {
                  let tmp65 = _modDef5283;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits3;
                    if (ignoreTraits != null) {
                      ignoreTraits3 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits3) {
                      tmp65 = importDefault(isMediaChannelResult ? 5266 : 5263);
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits4;
                    if (ignoreTraits != null) {
                      ignoreTraits4 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits4) {
                      _modDef5264;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits5;
                    if (ignoreTraits != null) {
                      ignoreTraits5 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits5) {
                      if (channel.isGameInvitesChannel()) {
                        let tmp68Result = _modDef5285;
                      } else {
                        tmp68Result = importDefault(isMediaChannelResult ? 5286 : 5287);
                      }
                    }
                  }
                  if (channel.isGameInvitesChannel()) {
                    let tmp68Result2 = _modDef5273;
                  } else {
                    tmp68Result2 = importDefault(isMediaChannelResult ? 5265 : 5262);
                  }
                }
                return tmp65;
              } else if (ChannelTypes.GUILD_MEDIA === type2) {
                if (isRulesChannel) {
                  let tmp55 = _modDef5283;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits6;
                    if (ignoreTraits != null) {
                      ignoreTraits6 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits6) {
                      tmp55 = _modDef5266;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits7;
                    if (ignoreTraits != null) {
                      ignoreTraits7 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits7) {
                      _modDef5264;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits8;
                    if (ignoreTraits != null) {
                      ignoreTraits8 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits8) {
                      let tmp58Result = _modDef5286;
                    }
                  }
                  tmp58Result = _modDef5265;
                }
                return tmp55;
              } else if (ChannelTypes.GROUP_DM === type2) {
                return _modDef5247;
              } else if (ChannelTypes.DM === type2) {
                return _modDef5248;
              } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type2) {
                if (isRulesChannel) {
                  let tmp42 = _modDef5283;
                } else {
                  if (isNSFWResult) {
                    let ignoreTraits9;
                    if (ignoreTraits != null) {
                      ignoreTraits9 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits9) {
                      tmp42 = _modDef5259;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits10;
                    if (ignoreTraits != null) {
                      ignoreTraits10 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits10) {
                      _modDef5260;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits11;
                    if (ignoreTraits != null) {
                      ignoreTraits11 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits11) {
                      let tmp45Result = _modDef5288;
                    }
                  }
                  tmp45Result = _modDef5249;
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
                      let tmp31Result = _modDef5289;
                    } else {
                      tmp31Result = _modDef5256;
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
                    _modDef5289;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits14;
                  if (ignoreTraits != null) {
                    ignoreTraits14 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits14) {
                    let tmp35Result = _modDef5256;
                  }
                }
                tmp35Result = _modDef5250;
              } else if (ChannelTypes.GUILD_VOICE === type2) {
                if (obj.textFocused) {
                  let tmp16Result = _modDef5261;
                } else {
                  if (result) {
                    let ignoreTraits15;
                    if (ignoreTraits != null) {
                      ignoreTraits15 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits15) {
                      if (isRoleRequiredDefault(channel)) {
                        tmp16Result = _modDef5289;
                      } else {
                        tmp16Result = _modDef5253;
                      }
                    }
                  }
                  if (locked) {
                    let ignoreTraits16;
                    if (ignoreTraits != null) {
                      ignoreTraits16 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits16) {
                      _modDef5289;
                    }
                  }
                  if (isRoleRequiredDefault(channel)) {
                    let ignoreTraits17;
                    if (ignoreTraits != null) {
                      ignoreTraits17 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits17) {
                      _modDef5253;
                    }
                  }
                  if (isNSFWResult) {
                    let ignoreTraits18;
                    if (ignoreTraits != null) {
                      ignoreTraits18 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits18) {
                      _modDef5254;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    let ignoreTraits19;
                    if (ignoreTraits != null) {
                      ignoreTraits19 = ignoreTraits.ignoreTraits;
                    }
                    if (!ignoreTraits19) {
                      let tmp20Result4 = _modDef5255;
                    }
                  }
                  tmp20Result4 = _modDef5251;
                }
                return tmp16Result;
              } else if (ChannelTypes.GUILD_DIRECTORY === type2) {
                return _modDef5252;
              } else if (ChannelTypes.GUILD_APP === type2) {
                if (isNSFWResult) {
                  let ignoreTraits20;
                  if (ignoreTraits != null) {
                    ignoreTraits20 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits20) {
                    return _modDef5268;
                  }
                }
                if (channel.isSpoilerChannel()) {
                  let ignoreTraits21;
                  if (ignoreTraits != null) {
                    ignoreTraits21 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits21) {
                    _modDef5269;
                  }
                }
                if (isRoleRequiredDefault(channel)) {
                  let ignoreTraits22;
                  if (ignoreTraits != null) {
                    ignoreTraits22 = ignoreTraits.ignoreTraits;
                  }
                  if (!ignoreTraits22) {
                    let tmp9Result = _modDef5282;
                  }
                }
                tmp9Result = _modDef5246;
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
        let tmp89 = _modDef5242;
      } else {
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
          if (ChannelTypes.PUBLIC_THREAD !== type) {
            tmp89 = null;
          }
        }
        tmp89 = _modDef5243;
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
    const vibegrationsChannelIconComponent = getVibegrationsChannelIcon.getVibegrationsChannelIconComponent(
      channel,
      "getChannelIconComponent",
    );
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
    return _modDef5242;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== arg0) {
      if (ChannelTypes.PUBLIC_THREAD !== arg0) {
        if (ChannelTypes.MEDIA_THREAD !== arg0) {
          return null;
        }
      }
    }
    return _modDef5243;
  }
};
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.MEDIA_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return _modDef5244;
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GUILD_APP === type) {
                    return _modDef5246;
                  } else if (ChannelTypes.GROUP_DM === type) {
                    return _modDef5247;
                  } else if (ChannelTypes.DM === type) {
                    return _modDef5248;
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return _modDef5249;
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return _modDef5250;
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return _modDef5251;
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return _modDef5252;
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
            return _modDef5245;
          }
        }
      }
    }
  }
  const type2 = channel.type;
  if (ChannelTypes.PRIVATE_THREAD === type2) {
    let tmp21 = _modDef5242;
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type2) {
      if (ChannelTypes.PUBLIC_THREAD !== type2) {
        tmp21 = null;
      }
    }
    tmp21 = _modDef5243;
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
      return _modDef5251;
    case "voice-locked":
      return _modDef5253;
    case "voice-nsfw":
      return _modDef5254;
    case "voice-spoiler":
      return _modDef5255;
    case "stage":
      return _modDef5250;
    case "stage-locked":
      return _modDef5256;
    case "text":
      return _modDef5245;
    case "text-nsfw":
      return _modDef5257;
    case "text-spoiler":
      return _modDef5258;
    case "announcement":
      return _modDef5249;
    case "announcement-nsfw":
      return _modDef5259;
    case "announcement-spoiler":
      return _modDef5260;
    case "thread":
      return _modDef5243;
    case "post":
      let tmp21 = _modDef5261;
      return tmp21;
    case "message":
      tmp21 = _modDef5261;
      return tmp21;
    case "forum":
      return _modDef5262;
    case "forum-nsfw":
      return _modDef5263;
    case "forum-spoiler":
      return _modDef5264;
    case "media":
      return _modDef5265;
    case "media-nsfw":
      return _modDef5266;
    case "locked":
      return _modDef5267;
    case "app":
      return _modDef5246;
    case "app-nsfw":
      return _modDef5268;
    case "app-spoiler":
      return _modDef5269;
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
