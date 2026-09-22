// === Module 13521: invite/GuildInvite ===

// Module 13521 (invite/GuildInvite)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1879 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2056 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import UserUtilsDefault from "UserUtils" /* 4601 */;
import useChannelName from "useChannelName" /* 4910 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5241 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8198 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8207 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8208 */;
import GuildInviteFlags from "GuildInviteFlags" /* 8667 */;
import GuildBadgeImageSource from "GuildBadgeImageSource" /* 9026 */;
import CodedLinksConstants from "CodedLinksConstants" /* 11576 */;
import getChannelAndRecipientsFromInviteDefault from "getChannelAndRecipientsFromInvite" /* 11577 */;
import GuestUtilsDefault from "GuestUtils" /* 11578 */;
import _modDef12066 from "module_12066" /* 12066 */;
import _modDef12067 from "module_12067" /* 12067 */;
import InviteErrorUtils from "InviteErrorUtils" /* 12981 */;
import _modDef12982 from "module_12982" /* 12982 */;
import getHeaderTextForInvite from "getHeaderTextForInvite" /* 13522 */;
import GuildRecord from "GuildRecord" /* 2060 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4779 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2064 */;
import InviteStore from "InviteStore" /* 4741 */;
import RelationshipStore from "RelationshipStore" /* 4406 */;
import UserStore from "UserStore" /* 1372 */;
import Constants_mod from "Constants" /* 1074 */;
import Constants_mod from "Constants" /* 7981 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
({ getGuildIconURL: closure_4, getGuildAcronym: hasOwnProperty } = GuildRecord);
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let Constants = Constants_mod;
({ HelpdeskArticles: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16 } = Constants);
let Constants = Constants_mod;
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
  obj.titleColor = tmp6(8198).processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
  if (arg1) {
    const intl4 = tmp6(1115).intl;
    let stringResult = intl4.string(tmp6(1115).t["F/OLvL"]);
  } else {
    author = author.author;
    let username;
    if (author != null) {
      username = author.username;
    }
    if (null != username) {
      const intl3 = tmp6(1115).intl;
      const obj2 = { username: UserUtilsDefault.getFormattedName(author.author) };
      stringResult = intl3.formatToPlainString(tmp6(1115).t["9Akp1s"], obj2);
      const tmpResult = UserUtilsDefault;
    } else {
      const intl2 = tmp6(1115).intl;
      stringResult = intl2.string(tmp6(1115).t["SMJr+a"]);
    }
  }
  obj.subtitle = stringResult;
  const intl5 = tmp6(1115).intl;
  obj.titleText = intl5.string(tmp6(1115).t["Jhx/ud"]);
  const tmp6Result = tmp6(8198);
  if (tmp6Result2.isThemeDark(theme)) {
    let tmpResult2 = _modDef12066;
  } else {
    tmpResult2 = _modDef12067;
  }
  obj.thumbnailUrl = Image.resolveAssetSource(tmpResult2).uri;
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = tmp3.colors);
  obj.type = constants5.GUILD;
  return obj;
};
export const createDisabledGuildInvite = function createDisabledGuildInvite(invite, theme) {
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
  obj2.thumbnailUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef12982);
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
  obj2.type = constants5.GUILD;
  return obj2;
};
export const createErroredGuildInvite = function createErroredGuildInvite(code, arg1, theme) {
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
    let tmpResult = _modDef12066;
  } else {
    tmpResult = _modDef12067;
  }
  obj3.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  ({ thumbnailBackgroundColor: obj2.thumbnailBackgroundColor, subtitleColor: obj2.subtitleColor } = colors);
  obj3.type = constants5.GUILD;
  return obj3;
};
export const createGuildInvite = function createGuildInvite(invite, isOwnInvite, theme) {
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
  let tmp8 = null != invite.guild;
  if (tmp8) {
    tmp8 = null == guild;
  }
  let flag2 = true;
  if (tmp8) {
    guild = GuildRecordUtils.fromInviteGuild(invite.guild);
    flag2 = false;
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
  obj.isHubGuild = flag3;
  obj.isStream = invite.target_type === constants4.STREAM;
  obj.isStage = flag;
  const obj3 = getHeaderTextForInvite;
  let num = invite.flags;
  if (num == null) {
    num = 0;
  }
  obj.isGuest = FlagUtils.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
  const str = obj3.getHeaderTextForInvite(obj);
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
    const obj4 = { id, icon: null, canAnimate: true, size: 128 };
    let icon1;
    if (guild != null) {
      icon1 = guild.icon;
    }
    obj4.icon = icon1;
    const guildIconURL = AvatarUtilsDefault.getGuildIconURL(obj4);
    const tmpResult5 = AvatarUtilsDefault;
  } else if (null != guild) {
    const tmp14 = hasOwnProperty(guild);
  }
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null != splash) {
    const obj5 = { id: null, splash: null, size: null };
    ({ id: obj9.id, splash: obj9.splash } = guild);
    obj5.size = 400 * getDevicePixelRatioDefault();
    const guildSplashURL = AvatarUtilsDefault.getGuildSplashURL(obj5);
    const tmp20 = guildSplashURL;
    const tmpResult6 = AvatarUtilsDefault;
  }
  if (tmp7) {
    if (flag2) {
      if (null != target_user) {
        if (tmp12) {
          const intl3 = util.intl;
          const obj6 = { name: null };
          const tmpResult7 = AvatarUtilsDefault;
          obj6.name = UserUtilsDefault.getFormattedName(target_user);
          const tmpResult8 = UserUtilsDefault;
          const intl4 = util.intl;
          let name1;
          if (guild != null) {
            name1 = guild.name;
          }
          const obj7 = { guildName: name1 };
          let str3 = intl4.formatToPlainString(util.t.u0vaDE, obj7);
          let tmp23 = null != ApplicationStreamingStore.getActiveStreamForUser(target_user.id, channel.getGuildId());
          let uri = Image.resolveAssetSource(tmpResult7.getUserAvatarSource(target_user)).uri;
          let tmp25 = intl3.formatToPlainString(util.t.QmlLEq, obj6);
          const formatToPlainStringResult = intl3.formatToPlainString(util.t.QmlLEq, obj6);
        }
      }
    }
    const assetSource = Image.resolveAssetSource(utils_ChannelUtils.getChannelIcon(channel));
    let uri1;
    if (assetSource != null) {
      uri1 = assetSource.uri;
    }
    str3 = "";
    let tmp26 = uri1;
    tmp23 = flag2;
    let tmp24 = tmp14;
    uri = guildIconURL;
    tmp25 = name;
    const tmp10Result7 = utils_ChannelUtils;
  } else {
    if (null != channel) {
      if (channel.type === constants2.GUILD_STAGE_VOICE) {
        const assetSource1 = Image.resolveAssetSource(utils_ChannelUtils.getChannelIcon(channel));
        let uri2;
        if (assetSource1 != null) {
          uri2 = assetSource1.uri;
        }
        str3 = "";
        tmp26 = uri2;
        tmp23 = flag2;
        tmp24 = tmp14;
        uri = guildIconURL;
        tmp25 = name;
        const tmp10Result8 = utils_ChannelUtils;
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
        let uri3;
        if (assetSource2 != null) {
          uri3 = assetSource2.uri;
        }
        tmp26 = uri3;
        str3 = "";
        tmp23 = flag2;
        tmp24 = tmp14;
        uri = guildIconURL;
        tmp25 = name;
        const tmp10Result9 = utils_ChannelUtils;
      }
    }
    const intl = util.intl;
    const obj8 = { membersOnline: approximate_presence_count };
    const intl2 = util.intl;
    if (approximate_member_count == null) {
      approximate_member_count = 0;
    }
    const obj10 = { count: approximate_member_count };
    const formatToPlainStringResult1 = intl.formatToPlainString(util.t["LC+S+m"], obj8);
    str3 = "";
    tmp23 = flag2;
    tmp24 = tmp14;
    uri = guildIconURL;
    tmp25 = name;
    const formatToPlainStringResult2 = intl2.formatToPlainString(util.t.zRl6XR, obj10);
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
      const tmp10Result10 = GuildBadgeImageSource;
    }
    const obj11 = {};
    const merged = Object.assign(baseColors);
    let formatted;
    if (null != str) {
      formatted = str.toUpperCase();
    }
    obj11.headerText = formatted;
    obj11.headerColor = colors.headerColor;
    obj11.acceptLabelText = stringResult1;
    obj11.onlineText = tmp28;
    obj11.memberText = formatToPlainStringResult2;
    obj11.channelIcon = tmp26;
    obj11.titleText = tmp25;
    obj11.titleColor = colors.titleColor;
    let tmp54;
    if (null != uri) {
      tmp54 = uri;
    }
    obj11.thumbnailUrl = tmp54;
    obj11.thumbnailText = tmp24;
    obj11.subtitle = str3;
    let subtitleColor;
    if ("" !== str3) {
      subtitleColor = colors.subtitleColor;
    }
    obj11.subtitleColor = subtitleColor;
    obj11.acceptLabelBackgroundColor = acceptLabelGreenBackgroundColor;
    obj11.acceptLabelBorderColor = undefined;
    obj11.acceptLabelColor = acceptLabelGreenColor;
    obj11.embedCanBeTapped = true;
    obj11.canBeAccepted = canAcceptInviteResult;
    let channelName;
    if (null != channel) {
      channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      const tmp10Result11 = useChannelName;
    }
    obj11.channelName = channelName;
    let GUILD = invite.type;
    if (GUILD == null) {
      GUILD = constants5.GUILD;
    }
    obj11.type = GUILD;
    obj11.inviteSplash = tmp20;
    let assetUriForEmbed;
    if (null != guildBadgeImageSource) {
      assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(guildBadgeImageSource);
      const tmp10Result12 = renderer_EmbedUtils;
    }
    obj11.badgeIconUrl = assetUriForEmbed;
    return obj11;
  }
  const tmp10Result = FlagUtils;
};