// === Module 8150: createExecutedCommand ===

// Module 8150 (createExecutedCommand)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 673 */;
import ThemesDefault from "Themes" /* 709 */;
import getAvatarURLDefault from "getAvatarURL" /* 1430 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1433 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import useNullableMessageAuthor from "useNullableMessageAuthor" /* 4746 */;
import buildCommand from "buildCommand" /* 7275 */;
import processColorStrings from "processColorStrings" /* 7879 */;
import createDisplayNameStylesMobile from "createDisplayNameStylesMobile" /* 7881 */;
import canViewInteractionInfo from "canViewInteractionInfo" /* 8151 */;
import closure_4 from "createdAt" /* 1934 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "mergeGuildAvatar" /* 1921 */;

const processColor = get_ActivityIndicator.processColor;
const MessageTypes = ME.MessageTypes;
let result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx");

export const createExecutedCommand = function createExecutedCommand(message, channel, roleStyle, theme, defaultUsernameColor) {
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
    let obj = user;
    let id;
    if (user != null) {
      id = user.id;
    }
    const user1 = user.getUser(id);
    if (null == user1) {
      let obj5 = canViewInteractionInfo;
      const result = obj5.isPrimaryEntryPointCommandMessage(message);
      let obj6 = useNullableMessageAuthor;
      const userAuthor = obj6.getUserAuthor(message.interaction.user, channel);
      const colorString = userAuthor.colorString;
      const displayName = message.interaction.displayName;
      const internal = ThemesDefault.internal;
      const semanticColor = internal.resolveSemanticColor(theme, ThemesDefault.colors.MENTION_BACKGROUND);
      let obj7 = buildCommand;
      const initialInteractionMetadata = obj7.getInitialInteractionMetadata(message);
      let type;
      if (initialInteractionMetadata != null) {
        type = initialInteractionMetadata.type;
      }
      let tmp24 = null;
      if (type === PermissionOverwriteType.InteractionTypes.APPLICATION_COMMAND) {
        tmp24 = null;
        if (null != initialInteractionMetadata.target_user) {
          tmp24 = new closure_4(initialInteractionMetadata.target_user);
        }
      }
      let tmp16Result = tmp16(4746);
      const userAuthor1 = tmp16Result.getUserAuthor(tmp24, channel);
      const colorString2 = userAuthor1.colorString;
      let tmp33 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp34Result = processColor(colorString2);
        if (tmp34Result == null) {
          tmp34Result = defaultUsernameColor;
        }
        tmp33 = tmp34Result;
        const tmp34 = processColor;
        const tmp35 = colorString2;
      }
      let tmp37 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp38Result = processColor(colorString);
        if (tmp38Result == null) {
          tmp38Result = defaultUsernameColor;
        }
        tmp37 = tmp38Result;
        const tmp38 = processColor;
        const tmp39 = colorString;
      }
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      id = message.interaction.user.id;
      tmp16Result = tmp16(7879);
      const result1 = tmp16Result.isNativeMessageEligibleForEnhancedRoleColors(guildId, id);
      let id1;
      if (tmp24 != null) {
        id1 = tmp24.id;
      }
      let processColorStringsResult = null;
      const result2 = processColorStrings.isNativeMessageEligibleForEnhancedRoleColors(guildId, id1);
      if (result1) {
        processColorStringsResult = tmp16(7879).processColorStrings(userAuthor.colorStrings);
        const tmp16Result2 = tmp16(7879);
      }
      let processColorStringsResult1 = null;
      if (result2) {
        processColorStringsResult1 = tmp16(7879).processColorStrings(userAuthor1.colorStrings);
        const tmp16Result3 = tmp16(7879);
      }
      user = obj.getUser(id);
      if (user == null) {
        user = message.interaction.user;
      }
      const tmp14 = message.type === MessageTypes.CHAT_INPUT_COMMAND || message.type === tmp13.INTERACTION_PREMIUM_UPSELL;
      const tmp16Result1 = processColorStrings;
      const displayNameFontIdForMobileUser = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser(user, guildId);
      if (null != tmp24) {
        let user2 = obj.getUser(tmp24.id);
        if (user2 == null) {
          user2 = tmp24;
        }
        const displayNameFontIdForMobileUser1 = tmp16(7881).getDisplayNameFontIdForMobileUser(user2, guildId);
        const tmp16Result5 = tmp16(7881);
      }
      obj = { username: null, usernameOnClick: null };
      const tmp16Result4 = createDisplayNameStylesMobile;
      obj[0] = useNullableMessageAuthor.getUserAuthor(message.interaction.user, channel).nick;
      obj = { name: "usernameOnClick", action: "bindUserMenu", userId: null, messageChannelId: null, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, fontId: null };
      obj[2] = id;
      obj[3] = message.channel_id;
      obj[4] = tmp37;
      let tmp51Result = tmp51(colorString);
      if (tmp51Result == null) {
        tmp51Result = null;
      }
      obj[5] = tmp51Result;
      obj[6] = processColorStringsResult;
      let tmp54 = "dot" === roleStyle;
      let tmp55 = tmp54;
      if (tmp54) {
        tmp55 = null != colorString;
      }
      obj[7] = tmp55;
      obj[8] = displayNameFontIdForMobileUser;
      obj[1] = obj;
      if (tmp) {
        if (!result) {
          const result3 = tmp16(8152).isActivitiesInTextEnabled(channel);
          const intl = tmp16(1233).intl;
          const formatToParts = intl.formatToParts;
          const t = tmp16(1233).t;
          if (result3) {
            obj1 = {};
            const merged = Object.assign(obj);
            const obj2 = { action: "bindTapActivityText", applicationUserId: null, messageChannelId: null };
            obj2[1] = message.author.id;
            obj2[2] = message.channel_id;
            obj1.activityTextOnClick = obj2;
            let formatToPartsResult = formatToParts(t["R/mrBi"], obj1);
          } else {
            let obj3 = {};
            const merged1 = Object.assign(obj);
            formatToPartsResult = formatToParts(t.k964Wm, obj3);
          }
          const tmp16Result7 = tmp16(8152);
        }
        let obj4 = { userId: null, username: null, usernameColor: null, avatarURL: null, targetUsernameColor: null, content: null, commandNameBackgroundStyles: null, showAppsIcon: true };
        obj4[0] = message.interaction.user.id;
        obj4[1] = obj.username;
        obj4[2] = tmp37;
        obj4[3] = undefined;
        obj4[4] = tmp33;
        obj4[5] = formatToPartsResult;
        obj5 = { color: null, borderRadius: 4, spaceAround: true };
        obj5[0] = tmp51(semanticColor);
        obj4[6] = obj5;
        return obj4;
      }
      let result4 = displayName;
      if (result) {
        result4 = tmp16(8153).formatPrimaryEntryPointCommandName(displayName);
        const tmp16Result8 = tmp16(8153);
      }
      const intl2 = tmp16(1233).intl;
      obj6 = {};
      const merged2 = Object.assign(obj);
      obj6.commandName = result4;
      if (null == channel) {
        obj7 = {};
      } else {
        const obj8 = { name: "commandNameOnClick", action: "bindTapCommandName", userId: null, messageId: null, applicationUserId: null, messageType: null, messageChannelId: null };
        obj8[2] = message.interaction.user.id;
        obj8[3] = message.id;
        obj8[4] = message.author.id;
        ({ type: obj26[5], channel_id: obj26[6] } = message);
        obj7 = obj8;
      }
      obj6.commandNameOnClick = obj7;
      formatToPartsResult = intl2.formatToParts(tmp16(1233).t.SSrolr, obj6);
      if (null != tmp24) {
        const intl3 = tmp16(1233).intl;
        const obj9 = {};
        const merged3 = Object.assign(obj);
        obj9.commandName = result4;
        obj9.commandNameOnClick = {};
        obj9.targetUsername = tmp16(4746).getUserAuthor(tmp24, channel).nick;
        let id2;
        if (tmp24 != null) {
          id2 = tmp24.id;
        }
        const obj10 = { name: "targetUsernameOnClick", action: "bindUserMenu", userId: null, messageChannelId: null, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, fontId: null };
        obj10[2] = id2;
        obj10[3] = message.channel_id;
        obj10[4] = tmp33;
        tmp51Result = tmp51(colorString2);
        if (tmp51Result == null) {
          tmp51Result = null;
        }
        obj10[5] = tmp51Result;
        obj10[6] = processColorStringsResult1;
        if (tmp54) {
          tmp54 = null != colorString2;
        }
        obj10[7] = tmp54;
        obj10[8] = displayNameFontIdForMobileUser1;
        obj9.targetUsernameOnClick = obj10;
        formatToPartsResult = intl3.formatToParts(tmp16(1233).t.mqKdCM, obj9);
        const tmp16Result9 = tmp16(4746);
        const tmp69 = colorString2;
      }
      const tmp16Result6 = useNullableMessageAuthor;
      const tmp52 = colorString;
    } else {
      if (channel == null) {
        channel = channel.getChannel(message.getChannelId());
      }
      let obj11 = dependencyMap;
      obj3 = useNullableMessageAuthor;
      const guildMemberAvatar = obj3.getUserAuthor(user1, channel).guildMemberAvatar;
      let guildId1;
      if (channel != null) {
        guildId1 = channel.getGuildId();
      }
      ensureAvatarSource;
      if (null == guildMemberAvatar) {
        let avatarSource = user1.getAvatarSource(undefined);
        const uri = tmp10(avatarSource).uri;
      }
      obj4 = getAvatarURLDefault;
      obj11 = { userId: null, avatar: null, guildId: null };
      obj11[0] = user1.id;
      obj11[1] = guildMemberAvatar;
      obj11[2] = guildId1;
      avatarSource = obj4.getGuildMemberAvatarSource(obj11, user1);
      const tmp7 = require;
    }
  }
};