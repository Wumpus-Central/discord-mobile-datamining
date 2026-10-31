// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx
import _mod17 from "../../../../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../../intl/index.native.tsx";
import FlagUtils from "../../../../../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import AvatarUtilsDefault from "../../../../../../../../utils/AvatarUtils.tsx";
import getDevicePixelRatioDefault from "../../../../../../../../utils/getDevicePixelRatio.native.tsx";
import HelpdeskUtilsDefault from "../../../../../../../../utils/HelpdeskUtils.tsx";
import GuildRecordUtils from "../../../../../../../../utils/GuildRecordUtils.tsx";
import UserUtilsDefault from "../../../../../../../../utils/UserUtils.tsx";
import useChannelName from "../../../../../../../channel/useChannelName.tsx";
import Constants2 from "../../../../../../../instant_invite/Constants.tsx";
import InviteTargetTypes from "../../../../../../../../../discord_common/js/shared/shared-constants/InviteTargetTypes.tsx";
import RowGeneratorStyleSheet from "../../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../../getEmbedThemeColors.tsx";
import renderer_EmbedUtils from "../../../../EmbedUtils.tsx";
import utils_ChannelUtils from "../../../../../../../../utils/native/ChannelUtils.tsx";
import GuildInviteFlags from "../../../../../../../../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import GuildBadgeImageSource from "../../../../../../../guild_badge/native/GuildBadgeImageSource.tsx";
import CodedLinksConstants from "../CodedLinksConstants.tsx";
import getChannelAndRecipientsFromInviteDefault from "getChannelAndRecipientsFromInvite.tsx";
import GuestUtilsDefault from "../../../../../../../guests/GuestUtils.tsx";
import _modDef13220 from "../../../../../../../../../_runtime/metro/13220__.js";
import _modDef13221 from "../../../../../../../../../_runtime/metro/13221__.js";
import InviteErrorUtils from "../../../../../../../../utils/InviteErrorUtils.tsx";
import _modDef14320 from "../../../../../../../../../_runtime/metro/14320__.js";
import getHeaderTextForInvite from "../../../../../../getHeaderTextForInvite.tsx";
import GuildRecord from "../../../../../../../../records/GuildRecord.tsx";
import ApplicationStreamingStore from "../../../../../../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../../../../stores/GuildStore.tsx";
import InviteStore from "../../../../../../../../stores/InviteStore.tsx";
import RelationshipStore from "../../../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../../../stores/UserStore.tsx";
import Constants from "../../../../../../../../Constants.tsx";
import size from "../../../../../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
({ getGuildIconURL: closure_4, getGuildAcronym: hasOwnProperty } = GuildRecord);
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
({ HelpdeskArticles: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16 } = Constants);
const InviteTypes = Constants2.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx",
);

export function createResolvingGuildInvite(theme) {
  const tmp = getEmbedThemeColorsDefault(theme);
  const obj = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
  const intl = util.intl;
  obj.headerText = intl.string(util.t["N/g9Z4"]).toUpperCase();
  ({ resolvingGradientEnd: obj.resolvingGradientEnd, resolvingGradientStart: obj.resolvingGradientStart } = tmp.colors);
  obj.type = InviteTypes.GUILD;
  const merged = Object.assign(tmp.baseColors);
  return obj;
}
export function createExpiredGuildInvite(author, arg1, theme) {
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const obj = {};
  const merged = Object.assign(tmp3.baseColors);
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (arg1) {
    let str = string(t.C89OLE);
    let tmp6 = require;
  } else {
    str = string(t.YVub5y);
    tmp6 = require;
  }
  obj.headerText = str.toUpperCase();
  obj.titleColor = tmp6(8381).processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
  if (arg1) {
    const intl4 = tmp6(1113).intl;
    let stringResult = intl4.string(tmp6(1113).t["F/OLvL"]);
  } else {
    author = author.author;
    let username;
    if (author != null) {
      username = author.username;
    }
    if (null != username) {
      const intl3 = tmp6(1113).intl;
      const obj2 = { username: UserUtilsDefault.getFormattedName(author.author) };
      stringResult = intl3.formatToPlainString(tmp6(1113).t["9Akp1s"], obj2);
      const tmpResult = UserUtilsDefault;
    } else {
      const intl2 = tmp6(1113).intl;
      stringResult = intl2.string(tmp6(1113).t["SMJr+a"]);
    }
  }
  obj.subtitle = stringResult;
  const intl5 = tmp6(1113).intl;
  obj.titleText = intl5.string(tmp6(1113).t["Jhx/ud"]);
  const tmp6Result = tmp6(8381);
  if (tmp6Result2.isThemeDark(theme)) {
    let tmpResult2 = _modDef13220;
  } else {
    tmpResult2 = _modDef13221;
  }
  obj.thumbnailUrl = Image.resolveAssetSource(tmpResult2).uri;
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = tmp3.colors);
  obj.type = InviteTypes.GUILD;
  return obj;
}
export function createDisabledGuildInvite(invite, theme) {
  const tmp3 = getEmbedThemeColorsDefault(theme);
  if (null != invite.guild) {
    let fromInviteGuildResult = GuildRecordUtils.fromInviteGuild(invite.guild);
  } else {
    const channel = invite.channel;
    let id;
    if (channel != null) {
      id = channel.id;
    }
    const channel1 = ChannelStore.getChannel(id);
    let guild_id;
    if (channel1 != null) {
      guild_id = channel1.guild_id;
    }
    fromInviteGuildResult = GuildStore.getGuild(guild_id);
  }
  let tmp11;
  if (null != fromInviteGuildResult) {
    tmp11 = React4(fromInviteGuildResult, 48, false);
  }
  const obj2 = {};
  const merged = Object.assign(tmp3.baseColors);
  obj2.extendedType = CodedLinkExtendedType.GUILD_INVITE_DISABLED;
  const intl = util.intl;
  obj2.headerText = intl.string(util.t["Hyx2F/"]).toUpperCase();
  const intl2 = util.intl;
  obj2.titleText = intl2.string(util.t.tQ4AnN);
  const str = intl.string(util.t["Hyx2F/"]);
  obj2.titleColor = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_345);
  let name;
  if (fromInviteGuildResult != null) {
    name = fromInviteGuildResult.name;
  }
  if (name == null) {
    const intl3 = util.intl;
    name = intl3.string(util.t.wBceYP);
  }
  obj2.guildName = name;
  const intl4 = util.intl;
  obj2.subtitle = intl4.string(util.t["x+XpjL"]);
  const intl5 = util.intl;
  obj2.helpCenterArticleLabel = intl5.string(util.t["4FlZqw"]);
  obj2.helpCenterArticleURL = HelpdeskUtilsDefault.getArticleURL(constants.INVITE_DISABLED);
  obj2.guildIcon = tmp11;
  const tmpResult = HelpdeskUtilsDefault;
  obj2.thumbnailUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef14320);
  let tmp17;
  if (null == tmp11) {
    let tmp18;
    if (null != fromInviteGuildResult) {
      tmp18 = hasOwnProperty(fromInviteGuildResult);
    }
    tmp17 = tmp18;
  }
  obj2.thumbnailText = tmp17;
  obj2.subtitleColor = tmp3.colors.subtitleColor;
  obj2.type = InviteTypes.GUILD;
  return obj2;
}
export function createErroredGuildInvite(code, arg1, theme) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const inviteError = InviteStore.getInviteError(code);
  const tmp3 = getEmbedThemeColorsDefault(theme);
  code = undefined;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = InviteErrorUtils.getDescriptiveInviteError(code);
  const obj3 = {};
  const merged = Object.assign(baseColors);
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (arg1) {
    let str = string(t.C89OLE);
  } else {
    str = string(t.YVub5y);
  }
  obj3.headerText = str.toUpperCase();
  obj3.titleColor = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
  let description;
  if (descriptiveInviteError != null) {
    description = descriptiveInviteError.description;
  }
  if (description == null) {
    let message;
    if (inviteError != null) {
      message = inviteError.message;
    }
    description = message;
  }
  obj3.subtitle = description;
  let title;
  if (descriptiveInviteError != null) {
    title = descriptiveInviteError.title;
  }
  if (title == null) {
    const intl2 = util.intl;
    title = intl2.string(util.t["Jhx/ud"]);
  }
  obj3.titleText = title;
  const tmp5Result = RowGeneratorStyleSheet;
  if (tmp5Result2.isThemeDark(theme)) {
    let tmpResult = _modDef13220;
  } else {
    tmpResult = _modDef13221;
  }
  obj3.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  ({ thumbnailBackgroundColor: obj2.thumbnailBackgroundColor, subtitleColor: obj2.subtitleColor } = colors);
  obj3.type = InviteTypes.GUILD;
  return obj3;
}
export function createGuildInvite(invite, isOwnInvite, theme) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  let guild = null;
  if (null != invite.guild) {
    guild = GuildStore.getGuild(invite.guild.id);
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const items = [GuildMemberStore];
  const tmpResult = GuestUtilsDefault;
  const channel = getChannelAndRecipientsFromInviteDefault(invite).channel;
  const tmp7 = null != channel && channel.isGuildVocal();
  let flag;
  if (channel != null) {
    flag = channel.isGuildStageVoice();
  }
  if (flag == null) {
    flag = false;
  }
  ({ target_user, approximate_member_count, approximate_presence_count } = invite);
  let tmp9 = null != invite.guild;
  if (tmp9) {
    tmp9 = null == guild;
  }
  let flag2 = true;
  if (tmp9) {
    guild = GuildRecordUtils.fromInviteGuild(invite.guild);
    flag2 = false;
    const tmp8Result = GuildRecordUtils;
  }
  const canAcceptInviteResult = GuestUtilsDefault.canAcceptInvite(items, invite);
  const obj = { isVoiceChannel: tmp7, isOwnInvite, isHubGuild: null, isStream: null, isStage: null, isGuest: null };
  let flag3;
  if (guild != null) {
    const features = guild.features;
    flag3 = features.has(constants3.HUB);
  }
  if (flag3 == null) {
    flag3 = false;
  }
  const tmp11 = invite.target_type === InviteTargetTypes.InviteTargetTypes.STREAM;
  obj.isHubGuild = flag3;
  obj.isStream = tmp11;
  obj.isStage = flag;
  const tmp8Result9 = getHeaderTextForInvite;
  let num = invite.flags;
  if (num == null) {
    num = 0;
  }
  obj.isGuest = FlagUtils.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
  const str = tmp8Result9.getHeaderTextForInvite(obj);
  if (guild != null) {
    const name = guild.name;
  }
  let icon;
  if (guild != null) {
    icon = guild.icon;
  }
  if (null != icon) {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    const obj2 = { id, icon: null, canAnimate: true, size: 128 };
    let icon1;
    if (guild != null) {
      icon1 = guild.icon;
    }
    obj2.icon = icon1;
    const guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj2);
    const tmpResult5 = AvatarUtilsDefault;
  } else if (null != guild) {
    const tmp13 = hasOwnProperty(guild);
  }
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null != splash) {
    const obj3 = { id: null, splash: null, size: null };
    ({ id: obj9.id, splash: obj9.splash } = guild);
    obj3.size = 400 * getDevicePixelRatioDefault();
    const guildSplashURL = AvatarUtilsDefault.getGuildSplashURL(obj3);
    const tmp19 = guildSplashURL;
    const tmpResult6 = AvatarUtilsDefault;
  }
  if (tmp7) {
    if (flag2) {
      if (null != target_user) {
        if (tmp11) {
          const intl3 = util.intl;
          const obj4 = { name: null };
          const tmpResult7 = AvatarUtilsDefault;
          obj4.name = UserUtilsDefault.getFormattedName(target_user);
          const tmpResult8 = UserUtilsDefault;
          const intl4 = util.intl;
          let name1;
          if (guild != null) {
            name1 = guild.name;
          }
          const obj5 = { guildName: name1 };
          let str3 = intl4.formatToPlainString(util.t.u0vaDE, obj5);
          let tmp22 = null != ApplicationStreamingStore.getActiveStreamForUser(target_user.id, channel.getGuildId());
          let uri = Image.resolveAssetSource(tmpResult7.getUserAvatarSource(target_user)).uri;
          let tmp24 = intl3.formatToPlainString(util.t.QmlLEq, obj4);
          const formatToPlainStringResult = intl3.formatToPlainString(util.t.QmlLEq, obj4);
        }
      }
    }
    const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelIcon(channel));
    let uri1;
    if (assetSource != null) {
      uri1 = assetSource.uri;
    }
    str3 = "";
    let tmp25 = uri1;
    tmp22 = flag2;
    let tmp23 = tmp13;
    uri = guildIconURL;
    tmp24 = name;
    const tmp8Result11 = utils_ChannelUtils;
  } else {
    if (null != channel) {
      if (channel.type === constants2.GUILD_STAGE_VOICE) {
        const assetSource1 = Image.resolveAssetSource(utils_ChannelUtils.getChannelIcon(channel));
        let uri2;
        if (assetSource1 != null) {
          uri2 = assetSource1.uri;
        }
        str3 = "";
        tmp25 = uri2;
        tmp22 = flag2;
        tmp23 = tmp13;
        uri = guildIconURL;
        tmp24 = name;
        const tmp8Result12 = utils_ChannelUtils;
      }
    }
    if (null == approximate_member_count) {
      str3 = "";
      tmp22 = flag2;
      tmp23 = tmp13;
      uri = guildIconURL;
      tmp24 = name;
      if (null != channel) {
        const assetSource2 = Image.resolveAssetSource(utils_ChannelUtils.getChannelIcon(channel));
        let uri3;
        if (assetSource2 != null) {
          uri3 = assetSource2.uri;
        }
        tmp25 = uri3;
        str3 = "";
        tmp22 = flag2;
        tmp23 = tmp13;
        uri = guildIconURL;
        tmp24 = name;
        const tmp8Result13 = utils_ChannelUtils;
      }
    }
    const intl = util.intl;
    const obj6 = { membersOnline: approximate_presence_count };
    const intl2 = util.intl;
    if (approximate_member_count == null) {
      approximate_member_count = 0;
    }
    const obj7 = { count: approximate_member_count };
    const formatToPlainStringResult1 = intl.formatToPlainString(util.t["LC+S+m"], obj6);
    str3 = "";
    tmp22 = flag2;
    tmp23 = tmp13;
    uri = guildIconURL;
    tmp24 = name;
    const formatToPlainStringResult2 = intl2.formatToPlainString(util.t.zRl6XR, obj7);
    const tmp27 = formatToPlainStringResult1;
  }
  if (tmp7) {
    ({
      acceptLabelGreenColor: acceptLabelGreenColor2,
      acceptLabelGreenBackgroundColor: acceptLabelGreenBackgroundColor2,
    } = colors);
    const intl7 = util.intl;
    const string = intl7.string;
    let t = util.t;
    if (flag) {
      t = t["7vb2cc"];
      let stringResult = string(t);
    } else {
      stringResult = string(t.gpqgah);
    }
  } else {
    if (tmp22) {
      ({
        acceptLabelDisabledColor: acceptLabelGreenColor,
        acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor,
      } = colors);
      const intl6 = util.intl;
      let stringResult1 = intl6.string(util.t.cEnaWx);
    } else {
      ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
      const intl5 = util.intl;
      stringResult1 = intl5.string(util.t.XpeFYr);
    }
    let guildBadgeImageSource;
    if (null != guild) {
      guildBadgeImageSource = GuildBadgeImageSource.getGuildBadgeImageSource(guild, theme);
      const tmp8Result14 = GuildBadgeImageSource;
    }
    const obj8 = {};
    const merged = Object.assign(baseColors);
    let formatted;
    if (null != str) {
      formatted = str.toUpperCase();
    }
    obj8.headerText = formatted;
    obj8.headerColor = colors.headerColor;
    obj8.acceptLabelText = stringResult1;
    obj8.onlineText = tmp27;
    obj8.memberText = formatToPlainStringResult2;
    obj8.channelIcon = tmp25;
    obj8.titleText = tmp24;
    obj8.titleColor = colors.titleColor;
    let tmp53;
    if (null != uri) {
      tmp53 = uri;
    }
    obj8.thumbnailUrl = tmp53;
    obj8.thumbnailText = tmp23;
    obj8.subtitle = str3;
    let subtitleColor;
    if ("" !== str3) {
      subtitleColor = colors.subtitleColor;
    }
    obj8.subtitleColor = subtitleColor;
    obj8.acceptLabelBackgroundColor = acceptLabelGreenBackgroundColor;
    obj8.acceptLabelBorderColor = undefined;
    obj8.acceptLabelColor = acceptLabelGreenColor;
    obj8.embedCanBeTapped = true;
    obj8.canBeAccepted = canAcceptInviteResult;
    let channelName;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      const tmp8Result15 = useChannelName;
    }
    obj8.channelName = channelName;
    let GUILD = invite.type;
    if (GUILD == null) {
      GUILD = InviteTypes.GUILD;
    }
    obj8.type = GUILD;
    obj8.inviteSplash = tmp19;
    let assetUriForEmbed;
    if (null != guildBadgeImageSource) {
      assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(guildBadgeImageSource);
      const tmp8Result16 = renderer_EmbedUtils;
    }
    obj8.badgeIconUrl = assetUriForEmbed;
    return obj8;
  }
  const tmp8Result10 = FlagUtils;
}
