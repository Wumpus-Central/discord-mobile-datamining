// === Module 13188: ExecutedCommand ===

// Module 13188 (ExecutedCommand)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1399 */;
import Server from "Server" /* 1894 */;
import useMessageAuthor from "useMessageAuthor" /* 4793 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7521 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7961 */;
import createDisplayNameStylesMobile from "createDisplayNameStylesMobile" /* 7963 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9289 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 9546 */;
import ApplicationInteractionInfoUtils from "ApplicationInteractionInfoUtils" /* 11619 */;
import UserRecord from "UserRecord" /* 1385 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;
import size from "module_2" /* 2 */;

const processColor = _mod17.processColor;
const MessageTypes = Constants.MessageTypes;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx");

export const createExecutedCommand = function createExecutedCommand(message, channel, roleStyle, forcedTheme, defaultUsernameColor) {
  let tmp = null != message.activityInstance;
  if (tmp) {
    tmp = undefined !== message.activityInstance;
  }
  if (null != message.interaction) {
    const interaction = message.interaction;
    let user;
    if (interaction != null) {
      user = interaction.user;
    }
    let obj = UserStore;
    let id;
    if (user != null) {
      id = user.id;
    }
    const user1 = UserStore.getUser(id);
    if (null == user1) {
      let obj5 = ApplicationInteractionInfoUtils;
      const result = obj5.isPrimaryEntryPointCommandMessage(message);
      let obj6 = useMessageAuthor;
      const userAuthor = obj6.getUserAuthor(message.interaction.user, channel);
      const colorString = userAuthor.colorString;
      const displayName = message.interaction.displayName;
      const internal = nativeDefault.internal;
      const semanticColor = internal.resolveSemanticColor(forcedTheme, nativeDefault.colors.MENTION_BACKGROUND);
      let obj7 = ApplicationCommandUtils;
      const initialInteractionMetadata = obj7.getInitialInteractionMetadata(message);
      let type;
      if (initialInteractionMetadata != null) {
        type = initialInteractionMetadata.type;
      }
      let tmp24 = null;
      if (type === Server.InteractionTypes.APPLICATION_COMMAND) {
        tmp24 = null;
        if (null != initialInteractionMetadata.target_user) {
          tmp24 = new UserRecord(initialInteractionMetadata.target_user);
        }
      }
      let tmp16Result = useMessageAuthor;
      const userAuthor1 = tmp16Result.getUserAuthor(tmp24, channel);
      const colorString2 = userAuthor1.colorString;
      let tmp33 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp34Result = processColor(colorString2);
        if (tmp34Result == null) {
          tmp34Result = defaultUsernameColor;
        }
        tmp33 = tmp34Result;
      }
      let tmp37 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp38Result = processColor(colorString);
        if (tmp38Result == null) {
          tmp38Result = defaultUsernameColor;
        }
        tmp37 = tmp38Result;
      }
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      id = message.interaction.user.id;
      tmp16Result = enhanced_role_colors_EnhancedRoleColorUtils;
      const result1 = tmp16Result.isNativeMessageEligibleForEnhancedRoleColors(guildId, id);
      let id1;
      if (tmp24 != null) {
        id1 = tmp24.id;
      }
      let processColorStringsResult = null;
      const result2 = enhanced_role_colors_EnhancedRoleColorUtils.isNativeMessageEligibleForEnhancedRoleColors(guildId, id1);
      if (result1) {
        processColorStringsResult = enhanced_role_colors_EnhancedRoleColorUtils.processColorStrings(userAuthor.colorStrings);
        const tmp16Result2 = enhanced_role_colors_EnhancedRoleColorUtils;
      }
      let processColorStringsResult1 = null;
      if (result2) {
        processColorStringsResult1 = enhanced_role_colors_EnhancedRoleColorUtils.processColorStrings(userAuthor1.colorStrings);
        const tmp16Result3 = enhanced_role_colors_EnhancedRoleColorUtils;
      }
      user = obj.getUser(id);
      if (user == null) {
        user = message.interaction.user;
      }
      const tmp16Result1 = enhanced_role_colors_EnhancedRoleColorUtils;
      const displayNameFontIdForMobileUser = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser(user, guildId);
      if (null != tmp24) {
        let user2 = obj.getUser(tmp24.id);
        if (user2 == null) {
          user2 = tmp24;
        }
        const displayNameFontIdForMobileUser1 = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser(user2, guildId);
        const tmp16Result5 = createDisplayNameStylesMobile;
      }
      obj = { username: null, usernameOnClick: null };
      const tmp16Result4 = createDisplayNameStylesMobile;
      obj.username = useMessageAuthor.getUserAuthor(message.interaction.user, channel).nick;
      obj = { name: "usernameOnClick", action: "bindUserMenu", userId: id, messageChannelId: message.channel_id, linkColor: tmp37, roleColor: null, roleColors: null, shouldShowRoleDot: null, fontId: null };
      let tmp51Result = processColor(colorString);
      if (tmp51Result == null) {
        tmp51Result = null;
      }
      obj.roleColor = tmp51Result;
      obj.roleColors = processColorStringsResult;
      let tmp54 = "dot" === roleStyle;
      let tmp55 = tmp54;
      if (tmp54) {
        tmp55 = null != colorString;
      }
      obj.shouldShowRoleDot = tmp55;
      obj.fontId = displayNameFontIdForMobileUser;
      obj.usernameOnClick = obj;
      if (tmp) {
        if (!result) {
          const result3 = ActivitiesInTextUtils.isActivitiesInTextEnabled(channel);
          const intl = util.intl;
          const formatToParts = intl.formatToParts;
          const t = util.t;
          if (result3) {
            const obj1 = {};
            const merged = Object.assign(obj);
            const obj2 = { action: "bindTapActivityText", applicationUserId: message.author.id, messageChannelId: message.channel_id };
            obj1.activityTextOnClick = obj2;
            let formatToPartsResult = formatToParts(t["R/mrBi"], obj1);
          } else {
            let obj3 = {};
            const merged1 = Object.assign(obj);
            formatToPartsResult = formatToParts(t.k964Wm, obj3);
          }
          const tmp16Result7 = ActivitiesInTextUtils;
        }
        let obj4 = { userId: message.interaction.user.id, username: obj.username, usernameColor: tmp37, avatarURL: undefined, targetUsernameColor: tmp33, content: formatToPartsResult, commandNameBackgroundStyles: null, showAppsIcon: true };
        obj5 = { color: processColor(semanticColor), borderRadius: 4, spaceAround: true };
        obj4.commandNameBackgroundStyles = obj5;
        return obj4;
      }
      let result4 = displayName;
      if (result) {
        result4 = AppLauncherUtils.formatPrimaryEntryPointCommandName(displayName);
        const tmp16Result8 = AppLauncherUtils;
      }
      const intl2 = util.intl;
      obj6 = {};
      const merged2 = Object.assign(obj);
      obj6.commandName = result4;
      if (null == channel) {
        obj7 = {};
      } else {
        const obj8 = { name: "commandNameOnClick", action: "bindTapCommandName", userId: message.interaction.user.id, messageId: message.id, applicationUserId: message.author.id, messageType: null, messageChannelId: null };
        ({ type: obj26.messageType, channel_id: obj26.messageChannelId } = message);
        obj7 = obj8;
      }
      obj6.commandNameOnClick = obj7;
      formatToPartsResult = intl2.formatToParts(util.t.SSrolr, obj6);
      if (null != tmp24) {
        const intl3 = util.intl;
        const obj9 = {};
        const merged3 = Object.assign(obj);
        obj9.commandName = result4;
        obj9.commandNameOnClick = {};
        obj9.targetUsername = useMessageAuthor.getUserAuthor(tmp24, channel).nick;
        let id2;
        if (tmp24 != null) {
          id2 = tmp24.id;
        }
        const obj10 = { name: "targetUsernameOnClick", action: "bindUserMenu", userId: id2, messageChannelId: message.channel_id, linkColor: tmp33, roleColor: null, roleColors: null, shouldShowRoleDot: null, fontId: null };
        tmp51Result = processColor(colorString2);
        if (tmp51Result == null) {
          tmp51Result = null;
        }
        obj10.roleColor = tmp51Result;
        obj10.roleColors = processColorStringsResult1;
        if (tmp54) {
          tmp54 = null != colorString2;
        }
        obj10.shouldShowRoleDot = tmp54;
        obj10.fontId = displayNameFontIdForMobileUser1;
        obj9.targetUsernameOnClick = obj10;
        formatToPartsResult = intl3.formatToParts(util.t.mqKdCM, obj9);
        const tmp16Result9 = useMessageAuthor;
      }
      const tmp16Result6 = useMessageAuthor;
    } else {
      if (channel == null) {
        channel = ChannelStore.getChannel(message.getChannelId());
      }
      let obj11 = dependencyMap;
      obj3 = useMessageAuthor;
      const guildMemberAvatar = obj3.getUserAuthor(user1, channel).guildMemberAvatar;
      let guildId1;
      if (channel != null) {
        guildId1 = channel.getGuildId();
      }
      utils_AvatarUtils;
      if (null == guildMemberAvatar) {
        let avatarSource = user1.getAvatarSource(undefined);
        const uri = tmp10(avatarSource).uri;
      }
      obj4 = AvatarUtilsDefault;
      obj11 = { userId: user1.id, avatar: guildMemberAvatar, guildId: guildId1 };
      avatarSource = obj4.getGuildMemberAvatarSource(obj11, user1);
    }
  }
};