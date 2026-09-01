// discord_app/modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx
import set from "../../../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../../../Constants.tsx";
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getAvatarURLDefault from "../../../../../../utils/AvatarUtils.tsx";
import ensureAvatarSource from "../../../../../../utils/native/AvatarUtils.tsx";
import PermissionOverwriteType from "../../../../../../flow/Server.tsx";
import useNullableMessageAuthor from "../../../../useMessageAuthor.tsx";
import buildCommand from "../../../../../application_commands/ApplicationCommandUtils.tsx";
import processColorStrings from "../../../../../premium/enhanced_role_colors/native/EnhancedRoleColorUtils.tsx";
import createDisplayNameStylesMobile from "../../../../../display_name_styles/native/createDisplayNameStylesMobile.tsx";
import canViewInteractionInfo from "../../../../../applications/ApplicationInteractionInfoUtils.tsx";
import closure_4 from "../../../../../../records/UserRecord.tsx";
import closure_5 from "../../../../../../stores/ChannelStore.tsx";
import closure_6 from "../../../../../../stores/UserStore.tsx";

const processColor = get_ActivityIndicator.processColor;
const MessageTypes = ME.MessageTypes;
let result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx");

export const createExecutedCommand = function createExecutedCommand(
  message,
  channel,
  roleStyle,
  theme,
  defaultUsernameColor,
) {
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
      tmp16Result = tmp16(7870);
      const result1 = tmp16Result.isNativeMessageEligibleForEnhancedRoleColors(guildId, id);
      let id1;
      if (tmp24 != null) {
        id1 = tmp24.id;
      }
      let processColorStringsResult = null;
      const result2 = processColorStrings.isNativeMessageEligibleForEnhancedRoleColors(guildId, id1);
      if (result1) {
        processColorStringsResult = tmp16(7870).processColorStrings(userAuthor.colorStrings);
        const tmp16Result2 = tmp16(7870);
      }
      let processColorStringsResult1 = null;
      if (result2) {
        processColorStringsResult1 = tmp16(7870).processColorStrings(userAuthor1.colorStrings);
        const tmp16Result3 = tmp16(7870);
      }
      user = obj.getUser(id);
      if (user == null) {
        user = message.interaction.user;
      }
      const tmp14 =
        message.type === MessageTypes.CHAT_INPUT_COMMAND || message.type === tmp13.INTERACTION_PREMIUM_UPSELL;
      const tmp16Result1 = processColorStrings;
      const displayNameFontIdForMobileUser = createDisplayNameStylesMobile.getDisplayNameFontIdForMobileUser(
        user,
        guildId,
      );
      if (null != tmp24) {
        let user2 = obj.getUser(tmp24.id);
        if (user2 == null) {
          user2 = tmp24;
        }
        const displayNameFontIdForMobileUser1 = tmp16(7872).getDisplayNameFontIdForMobileUser(user2, guildId);
        const tmp16Result5 = tmp16(7872);
      }
      obj = { username: null, usernameOnClick: null };
      const tmp16Result4 = createDisplayNameStylesMobile;
      obj[0] = useNullableMessageAuthor.getUserAuthor(message.interaction.user, channel).nick;
      obj = {
        name: "usernameOnClick",
        action: "bindUserMenu",
        userId: null,
        messageChannelId: null,
        linkColor: null,
        roleColor: null,
        roleColors: null,
        shouldShowRoleDot: null,
      };
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
      if (null != displayNameFontIdForMobileUser) {
        obj1 = { fontId: null };
        obj1[0] = displayNameFontIdForMobileUser;
        let obj2 = obj1;
      } else {
        obj2 = {};
      }
      const merged = Object.assign(obj2);
      obj[1] = obj;
      if (tmp) {
        if (!result) {
          const result3 = tmp16(8144).isActivitiesInTextEnabled(channel);
          const intl = tmp16(1236).intl;
          const formatToParts = intl.formatToParts;
          const t = tmp16(1236).t;
          if (result3) {
            let obj3 = {};
            const merged1 = Object.assign(obj);
            let obj4 = { action: "bindTapActivityText", applicationUserId: null, messageChannelId: null };
            obj4[1] = message.author.id;
            obj4[2] = message.channel_id;
            obj3.activityTextOnClick = obj4;
            let formatToPartsResult = formatToParts(t["R/mrBi"], obj3);
          } else {
            obj5 = {};
            const merged2 = Object.assign(obj);
            formatToPartsResult = formatToParts(t.k964Wm, obj5);
          }
          const tmp16Result7 = tmp16(8144);
        }
        obj6 = {
          userId: null,
          username: null,
          usernameColor: null,
          avatarURL: null,
          targetUsernameColor: null,
          content: null,
          commandNameBackgroundStyles: null,
          showAppsIcon: true,
        };
        obj6[0] = message.interaction.user.id;
        obj6[1] = obj.username;
        obj6[2] = tmp37;
        obj6[3] = undefined;
        obj6[4] = tmp33;
        obj6[5] = formatToPartsResult;
        obj7 = { color: null, borderRadius: 4, spaceAround: true };
        obj7[0] = tmp51(semanticColor);
        obj6[6] = obj7;
        return obj6;
      }
      let result4 = displayName;
      if (result) {
        result4 = tmp16(8145).formatPrimaryEntryPointCommandName(displayName);
        const tmp16Result8 = tmp16(8145);
      }
      const intl2 = tmp16(1236).intl;
      const obj8 = {};
      const merged3 = Object.assign(obj);
      obj8.commandName = result4;
      if (null == channel) {
        let obj9 = {};
      } else {
        const obj10 = {
          name: "commandNameOnClick",
          action: "bindTapCommandName",
          userId: null,
          messageId: null,
          applicationUserId: null,
          messageType: null,
          messageChannelId: null,
        };
        obj10[2] = message.interaction.user.id;
        obj10[3] = message.id;
        obj10[4] = message.author.id;
        ({ type: obj28[5], channel_id: obj28[6] } = message);
        obj9 = obj10;
      }
      obj8.commandNameOnClick = obj9;
      formatToPartsResult = intl2.formatToParts(tmp16(1236).t.SSrolr, obj8);
      if (null != tmp24) {
        const intl3 = tmp16(1236).intl;
        const obj11 = {};
        const merged4 = Object.assign(obj);
        obj11.commandName = result4;
        obj11.commandNameOnClick = {};
        obj11.targetUsername = tmp16(4746).getUserAuthor(tmp24, channel).nick;
        let id2;
        if (tmp24 != null) {
          id2 = tmp24.id;
        }
        const obj12 = {
          name: "targetUsernameOnClick",
          action: "bindUserMenu",
          userId: null,
          messageChannelId: null,
          linkColor: null,
          roleColor: null,
          roleColors: null,
          shouldShowRoleDot: null,
        };
        obj12[2] = id2;
        obj12[3] = message.channel_id;
        obj12[4] = tmp33;
        tmp51Result = tmp51(colorString2);
        if (tmp51Result == null) {
          tmp51Result = null;
        }
        obj12[5] = tmp51Result;
        obj12[6] = processColorStringsResult1;
        if (tmp54) {
          tmp54 = null != colorString2;
        }
        obj12[7] = tmp54;
        if (null != displayNameFontIdForMobileUser1) {
          const obj13 = { fontId: null };
          obj13[0] = displayNameFontIdForMobileUser1;
          let obj14 = obj13;
        } else {
          obj14 = {};
        }
        const merged5 = Object.assign(obj14);
        obj11.targetUsernameOnClick = obj12;
        intl3.formatToParts(tmp16(1236).t.mqKdCM, obj11);
        const tmp16Result9 = tmp16(4746);
        const tmp72 = colorString2;
      }
      const tmp16Result6 = useNullableMessageAuthor;
      const tmp52 = colorString;
    } else {
      if (channel == null) {
        channel = channel.getChannel(message.getChannelId());
      }
      let obj15 = dependencyMap;
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
      obj15 = { userId: null, avatar: null, guildId: null };
      obj15[0] = user1.id;
      obj15[1] = guildMemberAvatar;
      obj15[2] = guildId1;
      avatarSource = obj4.getGuildMemberAvatarSource(obj15, user1);
      const tmp7 = require;
    }
  }
};
