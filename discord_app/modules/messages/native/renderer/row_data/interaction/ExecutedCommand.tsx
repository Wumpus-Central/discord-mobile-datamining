// === Module 8088: createExecutedCommand ===

// Module 8088 (createExecutedCommand)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import ThemesDefault from "Themes" /* 712 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1438 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1956 */;
import useNullableMessageAuthor from "useNullableMessageAuthor" /* 4712 */;
import buildCommand from "buildCommand" /* 7213 */;
import processColorStrings from "processColorStrings" /* 7817 */;
import canViewInteractionInfo from "canViewInteractionInfo" /* 8089 */;
import closure_4 from "createdAt" /* 1931 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "mergeGuildAvatar" /* 1923 */;

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
    let id;
    if (user != null) {
      id = user.id;
    }
    const user1 = user.getUser(id);
    if (null == user1) {
      let obj4 = canViewInteractionInfo;
      const result = obj4.isPrimaryEntryPointCommandMessage(message);
      let obj5 = useNullableMessageAuthor;
      const userAuthor = obj5.getUserAuthor(message.interaction.user, channel);
      const colorString = userAuthor.colorString;
      const displayName = message.interaction.displayName;
      const internal = ThemesDefault.internal;
      const semanticColor = internal.resolveSemanticColor(theme, ThemesDefault.colors.MENTION_BACKGROUND);
      let obj6 = buildCommand;
      const initialInteractionMetadata = obj6.getInitialInteractionMetadata(message);
      let type;
      if (initialInteractionMetadata != null) {
        type = initialInteractionMetadata.type;
      }
      let tmp25 = null;
      if (type === PermissionOverwriteType.InteractionTypes.APPLICATION_COMMAND) {
        tmp25 = null;
        if (null != initialInteractionMetadata.target_user) {
          tmp25 = new closure_4(initialInteractionMetadata.target_user);
        }
      }
      let tmp17Result = tmp17(4712);
      const userAuthor1 = tmp17Result.getUserAuthor(tmp25, channel);
      const colorString2 = userAuthor1.colorString;
      let tmp34 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp35Result = processColor(colorString2);
        if (tmp35Result == null) {
          tmp35Result = defaultUsernameColor;
        }
        tmp34 = tmp35Result;
        const tmp35 = processColor;
        const tmp36 = colorString2;
      }
      let tmp38 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp39Result = processColor(colorString);
        if (tmp39Result == null) {
          tmp39Result = defaultUsernameColor;
        }
        tmp38 = tmp39Result;
        const tmp39 = processColor;
        const tmp40 = colorString;
      }
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      id = message.interaction.user.id;
      tmp17Result = tmp17(7817);
      const result1 = tmp17Result.isNativeMessageEligibleForEnhancedRoleColors(guildId, id);
      let id1;
      if (tmp25 != null) {
        id1 = tmp25.id;
      }
      let processColorStringsResult = null;
      const result2 = processColorStrings.isNativeMessageEligibleForEnhancedRoleColors(guildId, id1);
      if (result1) {
        processColorStringsResult = tmp17(7817).processColorStrings(userAuthor.colorStrings);
        const tmp17Result2 = tmp17(7817);
      }
      let processColorStringsResult1 = null;
      if (result2) {
        processColorStringsResult1 = tmp17(7817).processColorStrings(userAuthor1.colorStrings);
        const tmp17Result3 = tmp17(7817);
      }
      let obj = { username: null, usernameOnClick: null };
      const tmp15 = message.type === MessageTypes.CHAT_INPUT_COMMAND || message.type === tmp14.INTERACTION_PREMIUM_UPSELL;
      const tmp17Result1 = processColorStrings;
      obj[0] = useNullableMessageAuthor.getUserAuthor(message.interaction.user, channel).nick;
      obj = { name: "usernameOnClick", action: "bindUserMenu", userId: null, messageChannelId: null, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
      obj[2] = id;
      obj[3] = message.channel_id;
      obj[4] = tmp38;
      let tmp49Result = tmp49(colorString);
      if (tmp49Result == null) {
        tmp49Result = null;
      }
      obj[5] = tmp49Result;
      obj[6] = processColorStringsResult;
      let tmp52 = "dot" === roleStyle;
      let tmp53 = tmp52;
      if (tmp52) {
        tmp53 = null != colorString;
      }
      obj[7] = tmp53;
      obj[1] = obj;
      if (tmp) {
        if (!result) {
          const result3 = tmp17(8090).isActivitiesInTextEnabled(channel);
          const intl = tmp17(1236).intl;
          const formatToParts = intl.formatToParts;
          const t = tmp17(1236).t;
          if (result3) {
            obj1 = {};
            const merged = Object.assign(obj);
            let obj2 = { action: "bindTapActivityText", applicationUserId: null, messageChannelId: null };
            obj2[1] = message.author.id;
            obj2[2] = message.channel_id;
            obj1.activityTextOnClick = obj2;
            let formatToPartsResult = formatToParts(t["R/mrBi"], obj1);
          } else {
            let obj3 = {};
            const merged1 = Object.assign(obj);
            formatToPartsResult = formatToParts(t.k964Wm, obj3);
          }
          const tmp17Result5 = tmp17(8090);
        }
        obj4 = { userId: null, username: null, usernameColor: null, avatarURL: null, targetUsernameColor: null, content: null, commandNameBackgroundStyles: null, showAppsIcon: true };
        obj4[0] = message.interaction.user.id;
        obj4[1] = obj.username;
        obj4[2] = tmp38;
        obj4[3] = undefined;
        obj4[4] = tmp34;
        obj4[5] = formatToPartsResult;
        obj5 = { color: null, borderRadius: 4, spaceAround: true };
        obj5[0] = tmp49(semanticColor);
        obj4[6] = obj5;
        return obj4;
      }
      let result4 = displayName;
      if (result) {
        result4 = tmp17(8091).formatPrimaryEntryPointCommandName(displayName);
        const tmp17Result6 = tmp17(8091);
      }
      const intl2 = tmp17(1236).intl;
      obj6 = {};
      const merged2 = Object.assign(obj);
      obj6.commandName = result4;
      if (null == channel) {
        let obj7 = {};
      } else {
        const obj8 = { name: "commandNameOnClick", action: "bindTapCommandName", userId: null, messageId: null, applicationUserId: null, messageType: null, messageChannelId: null };
        obj8[2] = message.interaction.user.id;
        obj8[3] = message.id;
        obj8[4] = message.author.id;
        ({ type: obj23[5], channel_id: obj23[6] } = message);
        obj7 = obj8;
      }
      obj6.commandNameOnClick = obj7;
      formatToPartsResult = intl2.formatToParts(tmp17(1236).t.SSrolr, obj6);
      if (null != tmp25) {
        const intl3 = tmp17(1236).intl;
        const obj9 = {};
        const merged3 = Object.assign(obj);
        obj9.commandName = result4;
        obj9.commandNameOnClick = {};
        obj9.targetUsername = tmp17(4712).getUserAuthor(tmp25, channel).nick;
        let id2;
        if (tmp25 != null) {
          id2 = tmp25.id;
        }
        const obj10 = { name: "targetUsernameOnClick", action: "bindUserMenu", userId: null, messageChannelId: null, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
        obj10[2] = id2;
        obj10[3] = message.channel_id;
        obj10[4] = tmp34;
        tmp49Result = tmp49(colorString2);
        if (tmp49Result == null) {
          tmp49Result = null;
        }
        obj10[5] = tmp49Result;
        obj10[6] = processColorStringsResult1;
        if (tmp52) {
          tmp52 = null != colorString2;
        }
        obj10[7] = tmp52;
        obj9.targetUsernameOnClick = obj10;
        formatToPartsResult = intl3.formatToParts(tmp17(1236).t.mqKdCM, obj9);
        const tmp17Result7 = tmp17(4712);
        const tmp67 = colorString2;
      }
      const tmp17Result4 = useNullableMessageAuthor;
      const tmp50 = colorString;
    } else {
      if (channel == null) {
        channel = channel.getChannel(message.getChannelId());
      }
      let obj11 = dependencyMap;
      obj2 = useNullableMessageAuthor;
      const guildMemberAvatar = obj2.getUserAuthor(user1, channel).guildMemberAvatar;
      let guildId1;
      if (channel != null) {
        guildId1 = channel.getGuildId();
      }
      ensureAvatarSource;
      if (null == guildMemberAvatar) {
        let avatarSource = user1.getAvatarSource(undefined);
        const uri = tmp11(avatarSource).uri;
      }
      obj3 = getAvatarURLDefault;
      obj11 = { userId: null, avatar: null, guildId: null };
      obj11[0] = user1.id;
      obj11[1] = guildMemberAvatar;
      obj11[2] = guildId1;
      avatarSource = obj3.getGuildMemberAvatarSource(obj11, user1);
      const tmp8 = require;
    }
  }
};