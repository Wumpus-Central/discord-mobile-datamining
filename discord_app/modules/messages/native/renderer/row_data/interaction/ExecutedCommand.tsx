// discord_app/modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx
import obj132 from "../../../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../../../Constants.tsx";
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import getAvatarURLDefault from "../../../../../../utils/AvatarUtils.tsx";
import ensureAvatarSource from "../../../../../../utils/native/AvatarUtils.tsx";
import PermissionOverwriteType from "../../../../../../flow/Server.tsx";
import useNullableMessageAuthor from "../../../../useMessageAuthor.tsx";
import buildCommand from "../../../../../application_commands/ApplicationCommandUtils.tsx";
import processColorStrings from "../../../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import canViewInteractionInfo from "../../../../../applications/ApplicationInteractionInfoUtils.tsx";
import isActivityInTextSupportedForChannel from "../../../../../activities/ActivitiesInTextUtils.tsx";
import getShelfBadgeTypeIfActive from "../../../../../app_launcher/utils/AppLauncherUtils.tsx";
import createdAt from "../../../../../../records/UserRecord.tsx";
import ensureGuildLoaded from "../../../../../../stores/ChannelStore.tsx";
import mergeGuildAvatar from "../../../../../../stores/UserStore.tsx";

const processColor = get_ActivityIndicator.processColor;
const MessageTypes = ME.MessageTypes;
let result = obj132.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx");

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
      const semanticColor = internal.resolveSemanticColor(forcedTheme, ThemesDefault.colors.MENTION_BACKGROUND);
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
      let tmp17Result = useNullableMessageAuthor;
      const userAuthor1 = tmp17Result.getUserAuthor(tmp25, channel);
      const colorString2 = userAuthor1.colorString;
      let tmp34 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp35Result = processColor(colorString2);
        if (tmp35Result == null) {
          tmp35Result = defaultUsernameColor;
        }
        tmp34 = tmp35Result;
      }
      let tmp38 = defaultUsernameColor;
      if ("username" === roleStyle) {
        let tmp39Result = processColor(colorString);
        if (tmp39Result == null) {
          tmp39Result = defaultUsernameColor;
        }
        tmp38 = tmp39Result;
      }
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      id = message.interaction.user.id;
      tmp17Result = processColorStrings;
      const result1 = tmp17Result.isNativeMessageEligibleForEnhancedRoleColors(guildId, id);
      let id1;
      if (tmp25 != null) {
        id1 = tmp25.id;
      }
      let processColorStringsResult = null;
      const result2 = processColorStrings.isNativeMessageEligibleForEnhancedRoleColors(guildId, id1);
      if (result1) {
        processColorStringsResult = processColorStrings.processColorStrings(userAuthor.colorStrings);
        const tmp17Result2 = processColorStrings;
      }
      let processColorStringsResult1 = null;
      if (result2) {
        processColorStringsResult1 = processColorStrings.processColorStrings(userAuthor1.colorStrings);
        const tmp17Result3 = processColorStrings;
      }
      let obj = { username: null, usernameOnClick: null };
      const tmp17Result1 = processColorStrings;
      obj[0] = useNullableMessageAuthor.getUserAuthor(message.interaction.user, channel).nick;
      obj = { name: "usernameOnClick", action: "bindUserMenu", userId: null, messageChannelId: null, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
      obj[2] = id;
      obj[3] = message.channel_id;
      obj[4] = tmp38;
      let tmp49Result = processColor(colorString);
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
          const result3 = isActivityInTextSupportedForChannel.isActivitiesInTextEnabled(channel);
          const intl = getSystemLocale.intl;
          const formatToParts = intl.formatToParts;
          const t = getSystemLocale.t;
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
          const tmp17Result5 = isActivityInTextSupportedForChannel;
        }
        obj4 = { userId: null, username: null, usernameColor: null, avatarURL: null, targetUsernameColor: null, content: null, commandNameBackgroundStyles: null, showAppsIcon: true };
        obj4[0] = message.interaction.user.id;
        obj4[1] = obj.username;
        obj4[2] = tmp38;
        obj4[3] = undefined;
        obj4[4] = tmp34;
        obj4[5] = formatToPartsResult;
        obj5 = { color: null, borderRadius: 4, spaceAround: true };
        obj5[0] = processColor(semanticColor);
        obj4[6] = obj5;
        return obj4;
      }
      let result4 = displayName;
      if (result) {
        result4 = getShelfBadgeTypeIfActive.formatPrimaryEntryPointCommandName(displayName);
        const tmp17Result6 = getShelfBadgeTypeIfActive;
      }
      const intl2 = getSystemLocale.intl;
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
      formatToPartsResult = intl2.formatToParts(getSystemLocale.t.SSrolr, obj6);
      if (null != tmp25) {
        const intl3 = getSystemLocale.intl;
        const obj9 = {};
        const merged3 = Object.assign(obj);
        obj9.commandName = result4;
        obj9.commandNameOnClick = {};
        obj9.targetUsername = useNullableMessageAuthor.getUserAuthor(tmp25, channel).nick;
        let id2;
        if (tmp25 != null) {
          id2 = tmp25.id;
        }
        const obj10 = { name: "targetUsernameOnClick", action: "bindUserMenu", userId: null, messageChannelId: null, linkColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null };
        obj10[2] = id2;
        obj10[3] = message.channel_id;
        obj10[4] = tmp34;
        tmp49Result = processColor(colorString2);
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
        formatToPartsResult = intl3.formatToParts(getSystemLocale.t.mqKdCM, obj9);
        const tmp17Result7 = useNullableMessageAuthor;
      }
      const tmp17Result4 = useNullableMessageAuthor;
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
    }
  }
};