// === Module 13027: ExecutedCommand ===

// Module 13027 (ExecutedCommand)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1405 */;
import Server from "Server" /* 1985 */;
import useMessageAuthor from "useMessageAuthor" /* 5304 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 7030 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7620 */;
import createDisplayNameStylesMobile from "createDisplayNameStylesMobile" /* 7622 */;
import AppLauncherUtils from "AppLauncherUtils" /* 8794 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 9000 */;
import ApplicationInteractionInfoUtils from "ApplicationInteractionInfoUtils" /* 11242 */;
import UserRecord from "UserRecord" /* 1391 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const processColor = react_native.processColor;
const MessageTypes = Constants.MessageTypes;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx");

export const createExecutedCommand = function createExecutedCommand(message, channel, roleStyle, forcedTheme, defaultUsernameColor) {
  let obj11;
  let obj14;
  let obj16;
  let obj19;
  let obj9;
  let tmp17Result17;
  let tmp17Result20;
  let tmp52Result;
  let tmp52Result2;
  let tmp55;
  const tmp = null != message.activityInstance && undefined !== message.activityInstance;
  if (null != message.interaction) {
    let uri;
    let displayNameFontIdForMobileUser1;
    let formatToPartsResult;
    const interaction = message.interaction;
    let user1;
    if (interaction != null) {
      user1 = interaction.user;
    }
    let id1;
    const getUser = UserStore.getUser;
    if (user1 != null) {
      id1 = user1.id;
    }
    const user2 = getUser(id1);
    if (null != user2) {
      let guildId;
      if (channel == null) {
        channel = ChannelStore.getChannel(message.getChannelId());
      }
      const obj3 = useMessageAuthor;
      const guildMemberAvatar = obj3.getUserAuthor(user2, channel).guildMemberAvatar;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      utils_AvatarUtils;
      if (null != guildMemberAvatar) {
        let guildMemberAvatarSource;
        if (null != guildId) {
          const obj2 = { userId: user2.id, avatar: guildMemberAvatar, guildId };
          const obj4 = AvatarUtilsDefault;
          guildMemberAvatarSource = obj4.getGuildMemberAvatarSource(obj2, user2);
        }
        uri = tmp11(guildMemberAvatarSource).uri;
      }
      guildMemberAvatarSource = user2.getAvatarSource(undefined);
    }
    const obj6 = ApplicationInteractionInfoUtils;
    const result = obj6.isPrimaryEntryPointCommandMessage(message);
    const obj7 = useMessageAuthor;
    const userAuthor = obj7.getUserAuthor(message.interaction.user, channel);
    const colorString = userAuthor.colorString;
    const displayName = message.interaction.displayName;
    const colorStrings = userAuthor.colorStrings;
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(forcedTheme, nativeDefault.colors.MENTION_BACKGROUND);
    const obj8 = ApplicationCommandUtils;
    const initialInteractionMetadata = obj8.getInitialInteractionMetadata(message);
    let type;
    if (initialInteractionMetadata != null) {
      type = initialInteractionMetadata.type;
    }
    let tmp25 = null;
    if (type === Server.InteractionTypes.APPLICATION_COMMAND) {
      tmp25 = null;
      if (null != initialInteractionMetadata.target_user) {
        const self = this;
        const self2 = this;
        tmp25 = new UserRecord(initialInteractionMetadata.target_user);
      }
    }
    const tmp17Result = useMessageAuthor;
    const userAuthor1 = tmp17Result.getUserAuthor(tmp25, channel);
    const colorString2 = userAuthor1.colorString;
    let tmp32 = defaultUsernameColor;
    const colorStrings2 = userAuthor1.colorStrings;
    if ("username" === roleStyle) {
      let tmp33Result = processColor(colorString2);
      if (tmp33Result == null) {
        tmp33Result = defaultUsernameColor;
      }
      tmp32 = tmp33Result;
    }
    let tmp36 = defaultUsernameColor;
    if ("username" === roleStyle) {
      let tmp37Result = processColor(colorString);
      if (tmp37Result == null) {
        tmp37Result = defaultUsernameColor;
      }
      tmp36 = tmp37Result;
    }
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    const id = message.interaction.user.id;
    const tmp17Result11 = enhanced_role_colors_EnhancedRoleColorUtils;
    const result1 = tmp17Result11.isNativeMessageEligibleForEnhancedRoleColors(guildId1, id);
    let id2;
    const isNativeMessageEligibleForEnhancedRoleColors = enhanced_role_colors_EnhancedRoleColorUtils.isNativeMessageEligibleForEnhancedRoleColors;
    enhanced_role_colors_EnhancedRoleColorUtils;
    if (tmp25 != null) {
      id2 = tmp25.id;
    }
    let processColorStringsResult = null;
    const result2 = isNativeMessageEligibleForEnhancedRoleColors(guildId1, id2);
    if (result1) {
      const tmp17Result13 = enhanced_role_colors_EnhancedRoleColorUtils;
      processColorStringsResult = tmp17Result13.processColorStrings(colorStrings);
    }
    let processColorStringsResult1 = null;
    if (result2) {
      const tmp17Result14 = enhanced_role_colors_EnhancedRoleColorUtils;
      processColorStringsResult1 = tmp17Result14.processColorStrings(colorStrings2);
    }
    let user = UserStore.getUser(id);
    if (user == null) {
      user = message.interaction.user;
    }
    const tmp17Result15 = createDisplayNameStylesMobile;
    const displayNameFontIdForMobileUser = tmp17Result15.getDisplayNameFontIdForMobileUser(user, guildId1);
    if (null != tmp25) {
      const getDisplayNameFontIdForMobileUser = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser;
      createDisplayNameStylesMobile;
      let user3 = UserStore.getUser(tmp25.id);
      if (user3 == null) {
        user3 = tmp25;
      }
      displayNameFontIdForMobileUser1 = getDisplayNameFontIdForMobileUser(user3, guildId1);
    }
    const obj5 = { username: tmp17Result17.getUserAuthor(message.interaction.user, channel).nick, usernameOnClick: obj9 };
    obj9 = { name: "usernameOnClick", action: "bindUserMenu", userId: id, messageChannelId: message.channel_id, linkColor: tmp36, roleColor: tmp52Result, roleColors: processColorStringsResult, shouldShowRoleDot: tmp55 && null != colorString, fontId: displayNameFontIdForMobileUser };
    tmp17Result17 = useMessageAuthor;
    tmp52Result = processColor(colorString);
    if (tmp52Result == null) {
      tmp52Result = null;
    }
    tmp55 = "dot" === roleStyle;
    if (tmp) {
      if (!result) {
        const tmp17Result18 = ActivitiesInTextUtils;
        const result3 = tmp17Result18.isActivitiesInTextEnabled(channel);
        const intl = intl4.intl;
        const formatToParts = intl.formatToParts;
        const t = intl4.t;
        if (result3) {
          const prop = t["R/mrBi"];
          const obj10 = { activityTextOnClick: obj11 };
          const merged = Object.assign(obj5);
          obj11 = { action: "bindTapActivityText", applicationUserId: message.author.id, messageChannelId: message.channel_id };
          formatToPartsResult = formatToParts(prop, obj10);
        } else {
          const k964Wm = t.k964Wm;
          const obj12 = {};
          const merged1 = Object.assign(obj5);
          formatToPartsResult = formatToParts(k964Wm, obj12);
        }
      }
      const obj13 = { userId: message.interaction.user.id, username: obj5.username, usernameColor: tmp36, avatarURL: uri, targetUsernameColor: tmp32, content: formatToPartsResult, commandNameBackgroundStyles: obj14, showAppsIcon: true };
      obj14 = { color: processColor(semanticColor), borderRadius: 4, spaceAround: true };
      return obj13;
    }
    let result4 = displayName;
    if (result) {
      const tmp17Result19 = AppLauncherUtils;
      result4 = tmp17Result19.formatPrimaryEntryPointCommandName(displayName);
    }
    const intl2 = intl4.intl;
    const formatToParts2 = intl2.formatToParts;
    const obj15 = { commandName: result4, commandNameOnClick: obj16 };
    const SSrolr = intl4.t.SSrolr;
    const merged2 = Object.assign(obj5);
    if (null == channel) {
      obj16 = {};
    } else {
      const obj17 = { name: "commandNameOnClick", action: "bindTapCommandName", userId: message.interaction.user.id, messageId: message.id, applicationUserId: message.author.id, messageType: null, messageChannelId: null };
      ({ type: obj24.messageType, channel_id: obj24.messageChannelId } = message);
      obj16 = obj17;
    }
    formatToPartsResult = formatToParts2(SSrolr, obj15);
    if (null != tmp25) {
      const intl3 = intl4.intl;
      const formatToParts3 = intl3.formatToParts;
      const obj18 = { commandName: result4, commandNameOnClick: {}, targetUsername: tmp17Result20.getUserAuthor(tmp25, channel).nick, targetUsernameOnClick: obj19 };
      const mqKdCM = intl4.t.mqKdCM;
      const merged3 = Object.assign(obj5);
      let id3;
      tmp17Result20 = useMessageAuthor;
      if (tmp25 != null) {
        id3 = tmp25.id;
      }
      obj19 = { name: "targetUsernameOnClick", action: "bindUserMenu", userId: id3, messageChannelId: message.channel_id, linkColor: tmp32, roleColor: tmp52Result2, roleColors: processColorStringsResult1, shouldShowRoleDot: tmp55, fontId: displayNameFontIdForMobileUser1 };
      tmp52Result2 = processColor(colorString2);
      if (tmp52Result2 == null) {
        tmp52Result2 = null;
      }
      if (tmp55) {
        tmp55 = null != colorString2;
      }
      formatToPartsResult = formatToParts3(mqKdCM, obj18);
    }
  }
};