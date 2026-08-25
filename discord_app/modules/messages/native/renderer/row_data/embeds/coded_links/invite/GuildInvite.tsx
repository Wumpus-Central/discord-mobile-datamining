// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx
import set from "../../../../../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../../../../intl/index.native.tsx";
import fromGuildPropertiesWithAdditionalFields from "../../../../../../../../utils/GuildRecordUtils.tsx";
import combinedDefault from "../../../../../../../../utils/HelpdeskUtils.tsx";
import set2 from "../../../../../../../../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import processColorOrThrow from "../../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../../getEmbedThemeColors.tsx";
import frozen from "../../../../EmbedUtils.tsx";
import CodedLinkExtendedType2 from "../CodedLinksConstants.tsx";
import getDescriptiveInviteError from "../../../../../../../../utils/InviteErrorUtils.tsx";
import registerAssetDefault from "../../../../../../../../../_runtime/12281_registerAsset.js";
import getHeaderTextForInvite from "../../../../../../getHeaderTextForInvite.tsx";
import GuildNSFWContentLevel from "../../../../../../../../records/GuildRecord.tsx";
import closure_6 from "../../../../../../../../stores/ApplicationStreamingStore.tsx";
import closure_7 from "../../../../../../../../stores/ChannelStore.tsx";
import closure_8 from "../../../../../../../../stores/GuildMemberStore.tsx";
import closure_9 from "../../../../../../../../stores/GuildStore.tsx";
import closure_10 from "../../../../../../../../stores/InviteStore.tsx";
import closure_11 from "../../../../../../../../stores/RelationshipStore.tsx";
import closure_12 from "../../../../../../../../stores/UserStore.tsx";
import ME from "../../../../../../../../Constants.tsx";
import InviteSendStates from "../../../../../../../instant_invite/Constants.tsx";

const Image = get_ActivityIndicator.Image;
({ getGuildIconURL: c4, getGuildAcronym: c5 } = GuildNSFWContentLevel);
const CodedLinkExtendedType = CodedLinkExtendedType2.CodedLinkExtendedType;
({ HelpdeskArticles: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16 } = ME);
({ InviteTargetTypes: closure_17, InviteTypes: closure_18 } = InviteSendStates);
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildInvite.tsx");

export const createResolvingGuildInvite = function createResolvingGuildInvite(closure_2) {
  const tmp = getEmbedThemeColorsDefault(closure_2);
  const obj = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["N/g9Z4"]).toUpperCase();
  ({ resolvingGradientEnd: obj[1], resolvingGradientStart: obj[2] } = tmp.colors);
  obj[3] = constants5.GUILD;
  const merged = Object.assign(tmp.baseColors);
  return obj;
};
export const createExpiredGuildInvite = function createExpiredGuildInvite(author, arg1, closure_2) {
  const tmp3 = getEmbedThemeColorsDefault(closure_2);
  let obj = {};
  const merged = Object.assign(tmp3.baseColors);
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (arg1) {
    let str = string(t.C89OLE);
    let tmp6 = tmp5;
  } else {
    str = string(t.YVub5y);
    tmp6 = tmp5;
  }
  obj.headerText = str.toUpperCase();
  let tmp6Result = tmp6(8196);
  obj.titleColor = tmp6Result.processColorOrThrow(ThemesDefault.unsafe_rawColors.RED_400);
  if (arg1) {
    const intl4 = tmp6(1236).intl;
    let stringResult = intl4.string(tmp6(1236).t["F/OLvL"]);
  } else {
    author = author.author;
    let username;
    if (author != null) {
      username = author.username;
    }
    if (null != username) {
      const intl3 = tmp6(1236).intl;
      obj = { username: null };
      let tmpResult = tmp(4224);
      obj[0] = tmpResult.getFormattedName(author.author);
      stringResult = intl3.formatToPlainString(tmp6(1236).t["9Akp1s"], obj);
    } else {
      const intl2 = tmp6(1236).intl;
      stringResult = intl2.string(tmp6(1236).t["SMJr+a"]);
    }
  }
  obj.subtitle = stringResult;
  const intl5 = tmp6(1236).intl;
  obj.titleText = intl5.string(tmp6(1236).t["Jhx/ud"]);
  tmp6Result = tmp6(1363);
  if (tmp6Result.isThemeDark(closure_2)) {
    tmpResult = tmp(11368);
  } else {
    tmpResult = tmp(11369);
  }
  obj.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  ({ thumbnailBackgroundColor: obj.thumbnailBackgroundColor, subtitleColor: obj.subtitleColor } = tmp3.colors);
  obj.type = constants5.GUILD;
  return obj;
};
export const createDisabledGuildInvite = function createDisabledGuildInvite(invite, closure_2) {
  const tmp3 = getEmbedThemeColorsDefault(closure_2);
  if (null != invite.guild) {
    let obj = fromGuildPropertiesWithAdditionalFields;
    let fromInviteGuildResult = obj.fromInviteGuild(invite.guild);
  } else {
    let channel = invite.channel;
    let id;
    if (channel != null) {
      id = channel.id;
    }
    channel = channel.getChannel(id);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    fromInviteGuildResult = store.getGuild(guild_id);
  }
  let tmp11;
  if (null != fromInviteGuildResult) {
    tmp11 = callback(fromInviteGuildResult, 48, false);
  }
  obj = {};
  const merged = Object.assign(tmp3.baseColors);
  obj.extendedType = CodedLinkExtendedType.GUILD_INVITE_DISABLED;
  const intl = getSystemLocale.intl;
  obj.headerText = intl.string(getSystemLocale.t["Hyx2F/"]).toUpperCase();
  const intl2 = getSystemLocale.intl;
  obj.titleText = intl2.string(getSystemLocale.t.tQ4AnN);
  const str = intl.string(getSystemLocale.t["Hyx2F/"]);
  obj.titleColor = processColorOrThrow.processColorOrThrow(ThemesDefault.unsafe_rawColors.RED_345);
  let name;
  if (fromInviteGuildResult != null) {
    name = fromInviteGuildResult.name;
  }
  if (name == null) {
    const intl3 = tmp14(1236).intl;
    name = intl3.string(tmp14(1236).t.wBceYP);
  }
  obj.guildName = name;
  const intl4 = tmp14(1236).intl;
  obj.subtitle = intl4.string(getSystemLocale.t["x+XpjL"]);
  const intl5 = tmp14(1236).intl;
  obj.helpCenterArticleLabel = intl5.string(getSystemLocale.t["4FlZqw"]);
  const obj3 = processColorOrThrow;
  obj.helpCenterArticleURL = combinedDefault.getArticleURL(constants.INVITE_DISABLED);
  obj.guildIcon = tmp11;
  const tmp16 = tmp11;
  const tmpResult = combinedDefault;
  obj.thumbnailUrl = frozen.getAssetUriForEmbed(registerAssetDefault);
  let tmp17;
  if (null == tmp11) {
    let tmp18;
    if (null != fromInviteGuildResult) {
      tmp18 = callback2(fromInviteGuildResult);
    }
    tmp17 = tmp18;
  }
  obj.thumbnailText = tmp17;
  obj.subtitleColor = tmp3.colors.subtitleColor;
  obj.type = constants5.GUILD;
  return obj;
};
export const createErroredGuildInvite = function createErroredGuildInvite(code, arg1, closure_2) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(closure_2));
  inviteError = inviteError.getInviteError(code);
  let obj = getDescriptiveInviteError;
  code = undefined;
  if (inviteError != null) {
    code = inviteError.code;
  }
  const descriptiveInviteError = obj.getDescriptiveInviteError(code);
  obj = {};
  const merged = Object.assign(baseColors);
  const intl = tmp5(1236).intl;
  const string = intl.string;
  const t = tmp5(1236).t;
  if (arg1) {
    let str = string(t.C89OLE);
  } else {
    str = string(t.YVub5y);
  }
  obj.headerText = str.toUpperCase();
  let tmp5Result = tmp5(8196);
  obj.titleColor = tmp5Result.processColorOrThrow(ThemesDefault.unsafe_rawColors.RED_400);
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
    const intl2 = tmp5(1236).intl;
    title = intl2.string(tmp5(1236).t["Jhx/ud"]);
  }
  obj.titleText = title;
  tmp5Result = tmp5(1363);
  if (tmp5Result.isThemeDark(closure_2)) {
    let tmpResult = tmp(11368);
  } else {
    tmpResult = tmp(11369);
  }
  obj.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
  ({ thumbnailBackgroundColor: obj2.thumbnailBackgroundColor, subtitleColor: obj2.subtitleColor } = colors);
  obj.type = constants5.GUILD;
  return obj;
};
export const createGuildInvite = function createGuildInvite(invite, isOwnInvite, closure_2) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(closure_2));
  let guild = null;
  if (null != invite.guild) {
    guild = store.getGuild(invite.guild.id);
  }
  let tmpResult = tmp(11081);
  const items = [closure_8];
  const tmp3 = getEmbedThemeColorsDefault(closure_2);
  const channel = tmp(11080)(invite).channel;
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
    obj1 = fromGuildPropertiesWithAdditionalFields;
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
  obj[2] = flag3;
  obj[3] = invite.target_type === constants4.STREAM;
  obj[4] = flag;
  let tmp10Result = tmp10(1403);
  let num = invite.flags;
  if (num == null) {
    num = 0;
  }
  obj[5] = tmp10Result.hasFlag(num, set2.GuildInviteFlags.IS_GUEST_INVITE);
  const str = obj2.getHeaderTextForInvite(obj);
  if (guild != null) {
    let name = guild.name;
  }
  let icon;
  if (guild != null) {
    icon = guild.icon;
  }
  if (null != icon) {
    tmpResult = tmp(1435);
    let id;
    if (guild != null) {
      id = guild.id;
    }
    obj = { id: null, icon: null, canAnimate: true, size: 128 };
    obj[0] = id;
    let icon1;
    if (guild != null) {
      icon1 = guild.icon;
    }
    obj[1] = icon1;
    const guildIconURL = tmpResult.getGuildIconURL(obj);
  } else if (null != guild) {
    const tmp14 = callback2(guild);
  }
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null != splash) {
    obj1 = { id: null, splash: null, size: null };
    ({ id: obj9[0], splash: obj9[1] } = guild);
    obj1[2] = 400 * tmp(1896)();
    const guildSplashURL = tmp(1435).getGuildSplashURL(obj1);
    const tmp20 = guildSplashURL;
    const tmpResult1 = tmp(1435);
  }
  if (tmp7) {
    if (flag2) {
      if (null != target_user) {
        if (tmp12) {
          const intl3 = tmp10(1236).intl;
          obj2 = { name: null };
          const tmpResult2 = tmp(1435);
          obj2[0] = tmp(4224).getFormattedName(target_user);
          const tmpResult3 = tmp(4224);
          const intl4 = tmp10(1236).intl;
          name = undefined;
          if (guild != null) {
            name = guild.name;
          }
          const obj3 = { guildName: null };
          obj3[0] = name;
          let str3 = intl4.formatToPlainString(tmp10(1236).t.u0vaDE, obj3);
          let tmp23 = null != activeStreamForUser.getActiveStreamForUser(target_user.id, channel.getGuildId());
          let uri = Image.resolveAssetSource(tmpResult2.getUserAvatarSource(target_user)).uri;
          let tmp25 = intl3.formatToPlainString(tmp10(1236).t.QmlLEq, obj2);
          const formatToPlainStringResult = intl3.formatToPlainString(tmp10(1236).t.QmlLEq, obj2);
        }
      }
    }
    tmp10Result = tmp10(4866);
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
        const assetSource1 = Image.resolveAssetSource(tmp10(4866).getChannelIcon(channel));
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
        const tmp10Result1 = tmp10(4866);
      }
    }
    if (null == approximate_member_count) {
      str3 = "";
      tmp23 = flag2;
      tmp24 = tmp14;
      uri = guildIconURL;
      tmp25 = name;
      if (null != channel) {
        const assetSource2 = Image.resolveAssetSource(tmp10(4866).getChannelIcon(channel));
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
        const tmp10Result2 = tmp10(4866);
      }
    }
    const intl = tmp10(1236).intl;
    const obj4 = { membersOnline: null };
    obj4[0] = approximate_presence_count;
    const intl2 = tmp10(1236).intl;
    if (approximate_member_count == null) {
      approximate_member_count = 0;
    }
    const obj5 = { count: null };
    obj5[0] = approximate_member_count;
    const formatToPlainStringResult1 = intl.formatToPlainString(tmp10(1236).t["LC+S+m"], obj4);
    str3 = "";
    tmp23 = flag2;
    tmp24 = tmp14;
    uri = guildIconURL;
    tmp25 = name;
    const formatToPlainStringResult2 = intl2.formatToPlainString(tmp10(1236).t.zRl6XR, obj5);
    const tmp28 = formatToPlainStringResult1;
  }
  if (tmp7) {
    ({ acceptLabelGreenColor: acceptLabelGreenColor2, acceptLabelGreenBackgroundColor: acceptLabelGreenBackgroundColor2 } = colors);
    const intl7 = tmp10(1236).intl;
    const string = intl7.string;
    if (flag) {
      let stringResult = string(_7vb2cc);
    } else {
      stringResult = string(_7vb2cc.gpqgah);
    }
  } else {
    if (tmp23) {
      ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
      const intl6 = tmp10(1236).intl;
      let stringResult1 = intl6.string(tmp10(1236).t.cEnaWx);
    } else {
      ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
      const intl5 = tmp10(1236).intl;
      stringResult1 = intl5.string(tmp10(1236).t.XpeFYr);
    }
    let guildBadgeImageSource;
    if (null != guild) {
      guildBadgeImageSource = tmp10(9412).getGuildBadgeImageSource(guild, closure_2);
      const tmp10Result3 = tmp10(9412);
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
    let tmp53;
    if (null != uri) {
      tmp53 = uri;
    }
    obj6.thumbnailUrl = tmp53;
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
      channelName = tmp10(4574).computeChannelName(channel, closure_12, closure_11);
      const tmp10Result4 = tmp10(4574);
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
      assetUriForEmbed = tmp10(8206).getAssetUriForEmbed(guildBadgeImageSource);
      const tmp10Result5 = tmp10(8206);
    }
    obj6.badgeIconUrl = assetUriForEmbed;
    return obj6;
  }
};