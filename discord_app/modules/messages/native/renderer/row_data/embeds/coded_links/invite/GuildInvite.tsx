// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx
import react_native from "../../../../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl8 from "../../../../../../../../intl/index.native.tsx";
import FlagUtils from "../../../../../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import AvatarUtilsDefault from "../../../../../../../../utils/AvatarUtils.tsx";
import react_nativeDefault from "../../../../../../../../utils/getDevicePixelRatio.native.tsx";
import GuildRecordUtils from "../../../../../../../../utils/GuildRecordUtils.tsx";
import HelpdeskUtilsDefault from "../../../../../../../../utils/HelpdeskUtils.tsx";
import UserUtilsDefault from "../../../../../../../../utils/UserUtils.tsx";
import shared from "../../../../../../../../design/shared.tsx";
import useChannelName from "../../../../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../../../../utils/native/ChannelUtils.tsx";
import react_native2 from "../../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../../getEmbedThemeColors.tsx";
import renderer_EmbedUtils from "../../../../EmbedUtils.tsx";
import GuildInviteFlags from "../../../../../../../../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import GuildBadgeImageSource from "../../../../../../../guild_badge/native/GuildBadgeImageSource.tsx";
import CodedLinksConstants from "../CodedLinksConstants.tsx";
import getChannelAndRecipientsFromInviteDefault from "getChannelAndRecipientsFromInvite.tsx";
import GuestUtilsDefault from "../../../../../../../guests/GuestUtils.tsx";
import AssetRegistryDefault from "../../../../../../../../../_runtime/11431_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../../../../_runtime/11432_AssetRegistry.js";
import InviteErrorUtils from "../../../../../../../../utils/InviteErrorUtils.tsx";
import AssetRegistryDefault3 from "../../../../../../../../../_runtime/12407_AssetRegistry.js";
import getHeaderTextForInvite2 from "../../../../../../getHeaderTextForInvite.tsx";
import GuildRecord from "../../../../../../../../records/GuildRecord.tsx";
import ApplicationStreamingStore from "../../../../../../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../../../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../../../../../stores/GuildStore.tsx";
import InviteStore from "../../../../../../../../stores/InviteStore.tsx";
import RelationshipStore from "../../../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../../../stores/UserStore.tsx";
import Constants_mod from "../../../../../../../../Constants.tsx";
import Constants_mod2 from "../../../../../../../instant_invite/Constants.tsx";
import size from "../../../../../../../../../_runtime/metro/00002__.js";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
const Image = react_native.Image;
({ getGuildIconURL: closure_4, getGuildAcronym: hasOwnProperty } = GuildRecord);
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let Constants = Constants_mod2;
({ HelpdeskArticles: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16 } = Constants);
Constants = Constants_mod2;
({ InviteTargetTypes: closure_17, InviteTypes: closure_18 } = Constants);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx",
);

export const createResolvingGuildInvite = function createResolvingGuildInvite(theme) {
  let str;
  const tmp = getEmbedThemeColorsDefault(theme);
  const colors = tmp.colors;
  const obj = {
    headerText: str.toUpperCase(),
    resolvingGradientEnd: null,
    resolvingGradientStart: null,
    type: constants5.GUILD,
  };
  const baseColors = tmp.baseColors;
  const intl = intl8.intl;
  ({ resolvingGradientEnd: obj.resolvingGradientEnd, resolvingGradientStart: obj.resolvingGradientStart } = colors);
  str = intl.string(intl8.t["N/g9Z4"]);
  const merged = Object.assign(baseColors);
  return obj;
};
export const createExpiredGuildInvite = function createExpiredGuildInvite(author, arg1, theme) {
  let intl5;
  let resolveAssetSource;
  let str;
  let stringResult;
  let tmp6;
  let tmp6Result;
  let tmpResult;
  let tmpResult2;
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const colors = tmp3.colors;
  const obj = {
    headerText: str.toUpperCase(),
    titleColor: tmp6Result.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400),
    subtitle: stringResult,
    titleText: intl5.string(tmp6(1126).t["Jhx/ud"]),
    thumbnailUrl: resolveAssetSource(tmpResult2).uri,
    type: constants5.GUILD,
  };
  const merged = Object.assign(tmp3.baseColors);
  const intl = intl8.intl;
  const string = intl.string;
  const t = intl8.t;
  if (arg1) {
    str = string(t.C89OLE);
    tmp6 = require;
  } else {
    str = string(t.YVub5y);
    tmp6 = require;
  }
  tmp6Result = tmp6(7606);
  if (arg1) {
    const intl4 = tmp6(1126).intl;
    stringResult = intl4.string(tmp6(1126).t["F/OLvL"]);
  } else {
    author = author.author;
    let username;
    if (author != null) {
      username = author.username;
    }
    if (null != username) {
      const intl3 = tmp6(1126).intl;
      const formatToPlainString = intl3.formatToPlainString;
      const obj2 = { username: tmpResult.getFormattedName(author.author) };
      const v9Akp1s = tmp6(1126).t["9Akp1s"];
      tmpResult = UserUtilsDefault;
      stringResult = formatToPlainString(v9Akp1s, obj2);
    } else {
      const intl2 = tmp6(1126).intl;
      stringResult = intl2.string(tmp6(1126).t["SMJr+a"]);
    }
  }
  intl5 = tmp6(1126).intl;
  resolveAssetSource = Image.resolveAssetSource;
  const tmp6Result2 = tmp6(4735);
  if (tmp6Result2.isThemeDark(theme)) {
    tmpResult2 = AssetRegistryDefault;
  } else {
    tmpResult2 = AssetRegistryDefault2;
  }
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = colors);
  return obj;
};
export const createDisabledGuildInvite = function createDisabledGuildInvite(invite, theme) {
  let fromInviteGuildResult;
  let intl2;
  let intl4;
  let intl5;
  let name;
  let obj3;
  let str;
  let tmp14Result;
  let tmp17;
  let tmpResult;
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const baseColors = tmp3.baseColors;
  const colors = tmp3.colors;
  if (null != invite.guild) {
    const obj = GuildRecordUtils;
    fromInviteGuildResult = obj.fromInviteGuild(invite.guild);
  } else {
    const channel = invite.channel;
    let id;
    const getGuild = GuildStore.getGuild;
    const getChannel = ChannelStore.getChannel;
    if (channel != null) {
      id = channel.id;
    }
    const channel1 = getChannel(id);
    let guild_id;
    if (channel1 != null) {
      guild_id = channel1.guild_id;
    }
    fromInviteGuildResult = getGuild(guild_id);
  }
  let tmp11;
  if (null != fromInviteGuildResult) {
    tmp11 = React3(fromInviteGuildResult, 48, false);
  }
  const obj2 = {
    extendedType: CodedLinkExtendedType.GUILD_INVITE_DISABLED,
    headerText: str.toUpperCase(),
    titleText: intl2.string(intl8.t.tQ4AnN),
    titleColor: obj3.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_345),
    guildName: name,
    subtitle: intl4.string(intl8.t["x+XpjL"]),
    helpCenterArticleLabel: intl5.string(intl8.t["4FlZqw"]),
    helpCenterArticleURL: tmpResult.getArticleURL(constants.INVITE_DISABLED),
    guildIcon: tmp11,
    thumbnailUrl: tmp14Result.getAssetUriForEmbed(AssetRegistryDefault3),
    thumbnailText: tmp17,
    subtitleColor: colors.subtitleColor,
    type: constants5.GUILD,
  };
  const merged = Object.assign(baseColors);
  const intl = intl8.intl;
  str = intl.string(intl8.t["Hyx2F/"]);
  intl2 = intl8.intl;
  name = undefined;
  obj3 = react_native2;
  if (fromInviteGuildResult != null) {
    name = fromInviteGuildResult.name;
  }
  if (name == null) {
    const intl3 = intl8.intl;
    name = intl3.string(intl8.t.wBceYP);
  }
  intl4 = intl8.intl;
  intl5 = intl8.intl;
  tmpResult = HelpdeskUtilsDefault;
  tmp17 = undefined;
  tmp14Result = renderer_EmbedUtils;
  if (null == tmp11) {
    let tmp18;
    if (null != fromInviteGuildResult) {
      tmp18 = hasOwnProperty(fromInviteGuildResult);
    }
    tmp17 = tmp18;
  }
  return obj2;
};
export const createErroredGuildInvite = function createErroredGuildInvite(code, arg1, theme) {
  let baseColors;
  let colors;
  let description;
  let resolveAssetSource;
  let str;
  let title;
  let tmp5Result;
  let tmpResult;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const inviteError = InviteStore.getInviteError(code);
  code = undefined;
  const getDescriptiveInviteError = InviteErrorUtils.getDescriptiveInviteError;
  InviteErrorUtils;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = getDescriptiveInviteError(code);
  const obj = {
    headerText: str.toUpperCase(),
    titleColor: tmp5Result.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400),
    subtitle: description,
    titleText: title,
    thumbnailUrl: resolveAssetSource(tmpResult).uri,
    type: constants5.GUILD,
  };
  const merged = Object.assign(baseColors);
  const intl = intl8.intl;
  const string = intl.string;
  const t = intl8.t;
  if (arg1) {
    str = string(t.C89OLE);
  } else {
    str = string(t.YVub5y);
  }
  description = undefined;
  tmp5Result = react_native2;
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
  title = undefined;
  if (descriptiveInviteError != null) {
    title = descriptiveInviteError.title;
  }
  if (title == null) {
    const intl2 = intl8.intl;
    title = intl2.string(intl8.t["Jhx/ud"]);
  }
  resolveAssetSource = Image.resolveAssetSource;
  const tmp5Result2 = shared;
  if (tmp5Result2.isThemeDark(theme)) {
    tmpResult = AssetRegistryDefault;
  } else {
    tmpResult = AssetRegistryDefault2;
  }
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = colors);
  return obj;
};
export const createGuildInvite = function createGuildInvite(invite, isOwnInvite, theme) {
  let GUILD;
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenBackgroundColor2;
  let acceptLabelGreenColor;
  let acceptLabelGreenColor2;
  let approximate_member_count;
  let approximate_presence_count;
  let assetUriForEmbed;
  let baseColors;
  let channelName;
  let colors;
  let flag3;
  let formatToPlainStringResult1;
  let formatted;
  let guildIconURL;
  let hasFlag;
  let icon1;
  let name;
  let num;
  let str3;
  let stringResult1;
  let subtitleColor;
  let target_user;
  let tmp16;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp33;
  let tmp53;
  let tmpResult8;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  let guild = null;
  getEmbedThemeColorsDefault(theme);
  if (null != invite.guild) {
    guild = GuildStore.getGuild(invite.guild.id);
  }
  const items = [GuildMemberStore];
  const tmpResult = GuestUtilsDefault;
  const canAcceptInviteResult = tmpResult.canAcceptInvite(items, invite);
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
  const target_type = invite.target_type;
  const STREAM = constants4.STREAM;
  if (tmp8) {
    tmp8 = null == guild;
  }
  let flag2 = true;
  if (tmp8) {
    const obj2 = GuildRecordUtils;
    guild = obj2.fromInviteGuild(invite.guild);
    flag2 = false;
  }
  const obj = {
    isVoiceChannel: tmp7,
    isOwnInvite,
    isHubGuild: flag3,
    isStream: target_type === STREAM,
    isStage: flag,
    isGuest: hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE),
  };
  flag3 = undefined;
  const getHeaderTextForInvite = getHeaderTextForInvite2.getHeaderTextForInvite;
  getHeaderTextForInvite2;
  if (guild != null) {
    const features = guild.features;
    flag3 = features.has(constants3.HUB);
  }
  if (flag3 == null) {
    flag3 = false;
  }
  num = invite.flags;
  hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  const str = getHeaderTextForInvite(obj);
  if (guild != null) {
    name = guild.name;
  }
  let icon;
  if (guild != null) {
    icon = guild.icon;
  }
  if (null != icon) {
    let id;
    const getGuildIconURL = AvatarUtilsDefault.getGuildIconURL;
    AvatarUtilsDefault;
    if (guild != null) {
      id = guild.id;
    }
    const obj3 = { id, icon: icon1, canAnimate: true, size: 128 };
    icon1 = undefined;
    if (guild != null) {
      icon1 = guild.icon;
    }
    guildIconURL = getGuildIconURL(obj3);
  } else if (null != guild) {
    tmp16 = hasOwnProperty(guild);
  }
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  let tmp23;
  if (null != splash) {
    ({ id: obj5.id, splash: obj5.splash } = guild);
    const obj4 = { id: null, splash: null, size: 400 * react_nativeDefault() };
    const getGuildSplashURL = AvatarUtilsDefault.getGuildSplashURL;
    AvatarUtilsDefault;
    const guildSplashURL = getGuildSplashURL(obj4);
    tmp23 = guildSplashURL;
  }
  if (tmp7) {
    if (flag2) {
      if (null != target_user) {
        if (target_type === STREAM) {
          const resolveAssetSource4 = Image.resolveAssetSource;
          const tmpResult7 = AvatarUtilsDefault;
          const uri = resolveAssetSource4(tmpResult7.getUserAvatarSource(target_user)).uri;
          const intl3 = intl8.intl;
          const formatToPlainString2 = intl3.formatToPlainString;
          const obj6 = { name: tmpResult8.getFormattedName(target_user) };
          const QmlLEq = intl8.t.QmlLEq;
          tmpResult8 = UserUtilsDefault;
          const formatToPlainString2Result = formatToPlainString2(QmlLEq, obj6);
          const intl4 = intl8.intl;
          const formatToPlainString3 = intl4.formatToPlainString;
          let name1;
          const u0vaDE = intl8.t.u0vaDE;
          if (guild != null) {
            name1 = guild.name;
          }
          const obj7 = { guildName: name1 };
          str3 = formatToPlainString3(u0vaDE, obj7);
          tmp27 = null != ApplicationStreamingStore.getActiveStreamForUser(target_user.id, channel.getGuildId());
          tmp29 = uri;
          tmp30 = formatToPlainString2Result;
        }
      }
    }
    const resolveAssetSource3 = Image.resolveAssetSource;
    const tmp10Result7 = utils_ChannelUtils;
    const assetSource3 = resolveAssetSource3(tmp10Result7.getChannelIcon(channel));
    let uri1;
    if (assetSource3 != null) {
      uri1 = assetSource3.uri;
    }
    str3 = "";
    tmp31 = uri1;
    tmp27 = flag2;
    tmp28 = tmp16;
    tmp29 = guildIconURL;
    tmp30 = name;
  } else {
    if (null != channel) {
      if (channel.type === constants2.GUILD_STAGE_VOICE) {
        const resolveAssetSource2 = Image.resolveAssetSource;
        const tmp10Result8 = utils_ChannelUtils;
        const assetSource2 = resolveAssetSource2(tmp10Result8.getChannelIcon(channel));
        let uri2;
        if (assetSource2 != null) {
          uri2 = assetSource2.uri;
        }
        str3 = "";
        tmp31 = uri2;
        tmp27 = flag2;
        tmp28 = tmp16;
        tmp29 = guildIconURL;
        tmp30 = name;
      }
    }
    if (null == approximate_member_count) {
      str3 = "";
      tmp27 = flag2;
      tmp28 = tmp16;
      tmp29 = guildIconURL;
      tmp30 = name;
      if (null != channel) {
        const resolveAssetSource = Image.resolveAssetSource;
        const tmp10Result9 = utils_ChannelUtils;
        const assetSource = resolveAssetSource(tmp10Result9.getChannelIcon(channel));
        let uri3;
        if (assetSource != null) {
          uri3 = assetSource.uri;
        }
        tmp31 = uri3;
        str3 = "";
        tmp27 = flag2;
        tmp28 = tmp16;
        tmp29 = guildIconURL;
        tmp30 = name;
      }
    }
    const intl = intl8.intl;
    const obj8 = { membersOnline: approximate_presence_count };
    const formatToPlainStringResult = intl.formatToPlainString(intl8.t["LC+S+m"], obj8);
    const intl2 = intl8.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const zRl6XR = intl8.t.zRl6XR;
    if (approximate_member_count == null) {
      approximate_member_count = 0;
    }
    str3 = "";
    tmp27 = flag2;
    tmp28 = tmp16;
    tmp29 = guildIconURL;
    tmp30 = name;
    const obj9 = { count: approximate_member_count };
    formatToPlainStringResult1 = formatToPlainString(zRl6XR, obj9);
    tmp33 = formatToPlainStringResult;
  }
  if (tmp7) {
    let stringResult;
    ({
      acceptLabelGreenColor: acceptLabelGreenColor2,
      acceptLabelGreenBackgroundColor: acceptLabelGreenBackgroundColor2,
    } = colors);
    const intl7 = intl8.intl;
    const string = intl7.string;
    const t = intl8.t;
    if (flag) {
      stringResult = string(t["7vb2cc"]);
    } else {
      stringResult = string(t.gpqgah);
    }
    stringResult1 = stringResult;
    acceptLabelGreenBackgroundColor = acceptLabelGreenBackgroundColor2;
    acceptLabelGreenColor = acceptLabelGreenColor2;
  } else if (tmp27) {
    ({
      acceptLabelDisabledColor: acceptLabelGreenColor,
      acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor,
    } = colors);
    const intl6 = intl8.intl;
    stringResult1 = intl6.string(intl8.t.cEnaWx);
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl5 = intl8.intl;
    stringResult1 = intl5.string(intl8.t.XpeFYr);
  }
  let guildBadgeImageSource;
  if (null != guild) {
    const tmp10Result10 = GuildBadgeImageSource;
    guildBadgeImageSource = tmp10Result10.getGuildBadgeImageSource(guild, theme);
  }
  const obj10 = {
    headerText: formatted,
    headerColor: colors.headerColor,
    acceptLabelText: stringResult1,
    onlineText: tmp33,
    memberText: formatToPlainStringResult1,
    channelIcon: tmp31,
    titleText: tmp30,
    titleColor: colors.titleColor,
    thumbnailUrl: tmp53,
    thumbnailText: tmp28,
    subtitle: str3,
    subtitleColor,
    acceptLabelBackgroundColor: acceptLabelGreenBackgroundColor,
    acceptLabelBorderColor: undefined,
    acceptLabelColor: acceptLabelGreenColor,
    embedCanBeTapped: true,
    canBeAccepted: canAcceptInviteResult,
    channelName,
    type: GUILD,
    inviteSplash: tmp23,
    badgeIconUrl: assetUriForEmbed,
  };
  const merged = Object.assign(baseColors);
  formatted = undefined;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  tmp53 = undefined;
  if (null != tmp29) {
    tmp53 = tmp29;
  }
  subtitleColor = undefined;
  if ("" !== str3) {
    subtitleColor = colors.subtitleColor;
  }
  channelName = undefined;
  if (null != channel) {
    const tmp10Result11 = useChannelName;
    channelName = tmp10Result11.computeChannelName(channel, UserStore, RelationshipStore);
  }
  GUILD = invite.type;
  if (GUILD == null) {
    GUILD = constants5.GUILD;
  }
  assetUriForEmbed = undefined;
  if (null != guildBadgeImageSource) {
    const tmp10Result12 = renderer_EmbedUtils;
    assetUriForEmbed = tmp10Result12.getAssetUriForEmbed(guildBadgeImageSource);
  }
  return obj10;
};
