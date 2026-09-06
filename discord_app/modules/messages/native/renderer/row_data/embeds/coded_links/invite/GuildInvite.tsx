// === Module 13209: invite/GuildInvite ===

// Module 13209 (invite/GuildInvite)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1878 */;
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import shared from "shared" /* 4411 */;
import useChannelName from "useChannelName" /* 4713 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 7936 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7946 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8392 */;
import GuildBadgeImageSource from "GuildBadgeImageSource" /* 8741 */;
import CodedLinksConstants from "CodedLinksConstants" /* 11309 */;
import getChannelAndRecipientsFromInviteDefault from "getChannelAndRecipientsFromInvite" /* 11310 */;
import GuestUtilsDefault from "GuestUtils" /* 11311 */;
import _modDef11808 from "module_11808" /* 11808 */;
import _modDef11809 from "module_11809" /* 11809 */;
import InviteErrorUtils from "InviteErrorUtils" /* 12724 */;
import _modDef12725 from "module_12725" /* 12725 */;
import getHeaderTextForInvite from "getHeaderTextForInvite" /* 13210 */;
import GuildRecord from "GuildRecord" /* 1975 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import InviteStore from "InviteStore" /* 4544 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import Constants from "Constants" /* 1074 */;
import Constants from "Constants" /* 7736 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
({ getGuildIconURL: closure_4, getGuildAcronym: hasOwnProperty } = GuildRecord);
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
({ HelpdeskArticles: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16 } = Constants);
({ InviteTargetTypes: closure_17, InviteTypes: closure_18 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx");

export const createResolvingGuildInvite = function createResolvingGuildInvite(theme) {
  const tmp = getEmbedThemeColorsDefault(theme);
  const obj = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
  const intl = util.intl;
  obj.headerText = intl.string(util.t["N/g9Z4"]).toUpperCase();
  ({ resolvingGradientEnd: obj.resolvingGradientEnd, resolvingGradientStart: obj.resolvingGradientStart } = tmp.colors);
  obj.type = constants5.GUILD;
  const merged = Object.assign(tmp.baseColors);
  return obj;
};
export const createExpiredGuildInvite = function createExpiredGuildInvite(author, arg1, theme) {
  const tmp3 = getEmbedThemeColorsDefault(theme);
  let obj = {};
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
  let tmp6Result = tmp6(7936);
  obj.titleColor = tmp6Result.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
  if (arg1) {
    const intl4 = tmp6(1114).intl;
    let stringResult = intl4.string(tmp6(1114).t["F/OLvL"]);
  } else {
    author = author.author;
    let username;
    if (author != null) {
      username = author.username;
    }
    if (null != username) {
      const intl3 = tmp6(1114).intl;
      obj = { username: null };
      let tmpResult = UserUtilsDefault;
      obj.username = tmpResult.getFormattedName(author.author);
      stringResult = intl3.formatToPlainString(tmp6(1114).t["9Akp1s"], obj);
    } else {
      const intl2 = tmp6(1114).intl;
      stringResult = intl2.string(tmp6(1114).t["SMJr+a"]);
    }
  }
  obj.subtitle = stringResult;
  const intl5 = tmp6(1114).intl;
  obj.titleText = intl5.string(tmp6(1114).t["Jhx/ud"]);
  tmp6Result = tmp6(4411);
  if (tmp6Result.isThemeDark(theme)) {
    tmpResult = _modDef11808;
  } else {
    tmpResult = _modDef11809;
  }
  obj.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = tmp3.colors);
  obj.type = constants5.GUILD;
  return obj;
};
export const createDisabledGuildInvite = function createDisabledGuildInvite(invite, theme) {
  const tmp3 = getEmbedThemeColorsDefault(theme);
  if (null != invite.guild) {
    let obj = GuildRecordUtils;
    let fromInviteGuildResult = obj.fromInviteGuild(invite.guild);
  } else {
    let channel = invite.channel;
    let id;
    if (channel != null) {
      id = channel.id;
    }
    channel = ChannelStore.getChannel(id);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    fromInviteGuildResult = GuildStore.getGuild(guild_id);
  }
  let tmp11;
  if (null != fromInviteGuildResult) {
    tmp11 = React4(fromInviteGuildResult, 48, false);
  }
  obj = {};
  const merged = Object.assign(tmp3.baseColors);
  obj.extendedType = CodedLinkExtendedType.GUILD_INVITE_DISABLED;
  const intl = util.intl;
  obj.headerText = intl.string(util.t["Hyx2F/"]).toUpperCase();
  const intl2 = util.intl;
  obj.titleText = intl2.string(util.t.tQ4AnN);
  const str = intl.string(util.t["Hyx2F/"]);
  obj.titleColor = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_345);
  let name;
  if (fromInviteGuildResult != null) {
    name = fromInviteGuildResult.name;
  }
  if (name == null) {
    const intl3 = util.intl;
    name = intl3.string(util.t.wBceYP);
  }
  obj.guildName = name;
  const intl4 = util.intl;
  obj.subtitle = intl4.string(util.t["x+XpjL"]);
  const intl5 = util.intl;
  obj.helpCenterArticleLabel = intl5.string(util.t["4FlZqw"]);
  obj.helpCenterArticleURL = HelpdeskUtilsDefault.getArticleURL(constants.INVITE_DISABLED);
  obj.guildIcon = tmp11;
  const tmpResult = HelpdeskUtilsDefault;
  obj.thumbnailUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef12725);
  let tmp17;
  if (null == tmp11) {
    let tmp18;
    if (null != fromInviteGuildResult) {
      tmp18 = hasOwnProperty(fromInviteGuildResult);
    }
    tmp17 = tmp18;
  }
  obj.thumbnailText = tmp17;
  obj.subtitleColor = tmp3.colors.subtitleColor;
  obj.type = constants5.GUILD;
  return obj;
};
export const createErroredGuildInvite = function createErroredGuildInvite(code, arg1, theme) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const inviteError = InviteStore.getInviteError(code);
  let obj = InviteErrorUtils;
  code = undefined;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = obj.getDescriptiveInviteError(code);
  obj = {};
  const merged = Object.assign(baseColors);
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (arg1) {
    let str = string(t.C89OLE);
  } else {
    str = string(t.YVub5y);
  }
  obj.headerText = str.toUpperCase();
  let tmp5Result = RowGeneratorStyleSheet;
  obj.titleColor = tmp5Result.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
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
  obj.subtitle = description;
  let title;
  if (descriptiveInviteError != null) {
    title = descriptiveInviteError.title;
  }
  if (title == null) {
    const intl2 = util.intl;
    title = intl2.string(util.t["Jhx/ud"]);
  }
  obj.titleText = title;
  tmp5Result = shared;
  if (tmp5Result.isThemeDark(theme)) {
    let tmpResult = _modDef11808;
  } else {
    tmpResult = _modDef11809;
  }
  obj.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  ({ thumbnailBackgroundColor: obj2.thumbnailBackgroundColor, subtitleColor: obj2.subtitleColor } = colors);
  obj.type = constants5.GUILD;
  return obj;
};
export const createGuildInvite = function createGuildInvite(invite, isOwnInvite, theme) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  let guild = null;
  if (null != invite.guild) {
    guild = GuildStore.getGuild(invite.guild.id);
  }
  let tmpResult = GuestUtilsDefault;
  const items = [GuildMemberStore];
  const tmp3 = getEmbedThemeColorsDefault(theme);
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
  let tmp8 = null != invite.guild;
  if (tmp8) {
    tmp8 = null == guild;
  }
  let flag2 = true;
  if (tmp8) {
    let obj1 = GuildRecordUtils;
    guild = obj1.fromInviteGuild(invite.guild);
    flag2 = false;
  }
  let obj2 = getHeaderTextForInvite;
  let obj = { isVoiceChannel: tmp7, isOwnInvite, isHubGuild: null, isStream: null, isStage: null, isGuest: null };
  let flag3;
  if (guild != null) {
    const features = guild.features;
    flag3 = features.has(constants3.HUB);
  }
  if (flag3 == null) {
    flag3 = false;
  }
  obj.isHubGuild = flag3;
  obj.isStream = invite.target_type === constants4.STREAM;
  obj.isStage = flag;
  let tmp10Result = FlagUtils;
  let num = invite.flags;
  if (num == null) {
    num = 0;
  }
  obj.isGuest = tmp10Result.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
  const str = obj2.getHeaderTextForInvite(obj);
  if (guild != null) {
    let name = guild.name;
  }
  let icon;
  if (guild != null) {
    icon = guild.icon;
  }
  if (null != icon) {
    tmpResult = AvatarUtilsDefault;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    obj = { id, icon: null, canAnimate: true, size: 128 };
    let icon1;
    if (guild != null) {
      icon1 = guild.icon;
    }
    obj.icon = icon1;
    const guildIconURL = tmpResult.getGuildIconURL(obj);
  } else if (null != guild) {
    const tmp14 = hasOwnProperty(guild);
  }
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null != splash) {
    obj1 = { id: null, splash: null, size: null };
    ({ id: obj9.id, splash: obj9.splash } = guild);
    obj1.size = 400 * getDevicePixelRatioDefault();
    const guildSplashURL = AvatarUtilsDefault.getGuildSplashURL(obj1);
    const tmp20 = guildSplashURL;
    const tmpResult1 = AvatarUtilsDefault;
  }
  if (tmp7) {
    if (flag2) {
      if (null != target_user) {
        if (tmp12) {
          const intl3 = util.intl;
          obj2 = { name: null };
          const tmpResult2 = AvatarUtilsDefault;
          obj2.name = UserUtilsDefault.getFormattedName(target_user);
          const tmpResult3 = UserUtilsDefault;
          const intl4 = util.intl;
          name = undefined;
          if (guild != null) {
            name = guild.name;
          }
          const obj3 = { guildName: name };
          let str3 = intl4.formatToPlainString(util.t.u0vaDE, obj3);
          let tmp23 = null != ApplicationStreamingStore.getActiveStreamForUser(target_user.id, channel.getGuildId());
          let uri = Image.resolveAssetSource(tmpResult2.getUserAvatarSource(target_user)).uri;
          let tmp25 = intl3.formatToPlainString(util.t.QmlLEq, obj2);
          const formatToPlainStringResult = intl3.formatToPlainString(util.t.QmlLEq, obj2);
        }
      }
    }
    tmp10Result = utils_ChannelUtils;
    const assetSource = Image.resolveAssetSource(tmp10Result.getChannelIcon(channel));
    uri = undefined;
    if (assetSource != null) {
      uri = assetSource.uri;
    }
    str3 = "";
    let tmp26 = uri;
    tmp23 = flag2;
    let tmp24 = tmp14;
    uri = guildIconURL;
    tmp25 = name;
  } else {
    if (null != channel) {
      if (channel.type === constants2.GUILD_STAGE_VOICE) {
        const assetSource1 = Image.resolveAssetSource(utils_ChannelUtils.getChannelIcon(channel));
        let uri1;
        if (assetSource1 != null) {
          uri1 = assetSource1.uri;
        }
        str3 = "";
        tmp26 = uri1;
        tmp23 = flag2;
        tmp24 = tmp14;
        uri = guildIconURL;
        tmp25 = name;
        const tmp10Result1 = utils_ChannelUtils;
      }
    }
    if (null == approximate_member_count) {
      str3 = "";
      tmp23 = flag2;
      tmp24 = tmp14;
      uri = guildIconURL;
      tmp25 = name;
      if (null != channel) {
        const assetSource2 = Image.resolveAssetSource(utils_ChannelUtils.getChannelIcon(channel));
        let uri2;
        if (assetSource2 != null) {
          uri2 = assetSource2.uri;
        }
        tmp26 = uri2;
        str3 = "";
        tmp23 = flag2;
        tmp24 = tmp14;
        uri = guildIconURL;
        tmp25 = name;
        const tmp10Result2 = utils_ChannelUtils;
      }
    }
    const intl = util.intl;
    const obj4 = { membersOnline: approximate_presence_count };
    const intl2 = util.intl;
    if (approximate_member_count == null) {
      approximate_member_count = 0;
    }
    const obj5 = { count: approximate_member_count };
    const formatToPlainStringResult1 = intl.formatToPlainString(util.t["LC+S+m"], obj4);
    str3 = "";
    tmp23 = flag2;
    tmp24 = tmp14;
    uri = guildIconURL;
    tmp25 = name;
    const formatToPlainStringResult2 = intl2.formatToPlainString(util.t.zRl6XR, obj5);
    const tmp28 = formatToPlainStringResult1;
  }
  if (tmp7) {
    ({ acceptLabelGreenColor: acceptLabelGreenColor2, acceptLabelGreenBackgroundColor: acceptLabelGreenBackgroundColor2 } = colors);
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
    if (tmp23) {
      ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
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
      const tmp10Result3 = GuildBadgeImageSource;
    }
    const obj6 = {};
    const merged = Object.assign(baseColors);
    let formatted;
    if (null != str) {
      formatted = str.toUpperCase();
    }
    obj6.headerText = formatted;
    obj6.headerColor = colors.headerColor;
    obj6.acceptLabelText = stringResult1;
    obj6.onlineText = tmp28;
    obj6.memberText = formatToPlainStringResult2;
    obj6.channelIcon = tmp26;
    obj6.titleText = tmp25;
    obj6.titleColor = colors.titleColor;
    let tmp54;
    if (null != uri) {
      tmp54 = uri;
    }
    obj6.thumbnailUrl = tmp54;
    obj6.thumbnailText = tmp24;
    obj6.subtitle = str3;
    let subtitleColor;
    if ("" !== str3) {
      subtitleColor = colors.subtitleColor;
    }
    obj6.subtitleColor = subtitleColor;
    obj6.acceptLabelBackgroundColor = acceptLabelGreenBackgroundColor;
    obj6.acceptLabelBorderColor = undefined;
    obj6.acceptLabelColor = acceptLabelGreenColor;
    obj6.embedCanBeTapped = true;
    obj6.canBeAccepted = canAcceptInviteResult;
    let channelName;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      const tmp10Result4 = useChannelName;
    }
    obj6.channelName = channelName;
    let GUILD = invite.type;
    if (GUILD == null) {
      GUILD = constants5.GUILD;
    }
    obj6.type = GUILD;
    obj6.inviteSplash = tmp20;
    let assetUriForEmbed;
    if (null != guildBadgeImageSource) {
      assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(guildBadgeImageSource);
      const tmp10Result5 = renderer_EmbedUtils;
    }
    obj6.badgeIconUrl = assetUriForEmbed;
    return obj6;
  }
  canAcceptInviteResult = tmpResult.canAcceptInvite(items, invite);
};