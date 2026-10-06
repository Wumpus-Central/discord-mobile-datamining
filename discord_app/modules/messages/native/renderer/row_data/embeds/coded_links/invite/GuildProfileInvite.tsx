// === Module 13075: GuildProfileInvite ===

// Module 13075 (GuildProfileInvite)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import intl10 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import react_nativeDefault from "react-native" /* 1885 */;
import GuildRoleUtils from "GuildRoleUtils" /* 2110 */;
import RoleIconUtils from "RoleIconUtils" /* 6693 */;
import Constants2 from "Constants" /* 7239 */;
import react_native from "react-native" /* 7606 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7615 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10037 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import size from "module_2" /* 2 */;

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const GuildFeatures = Constants.GuildFeatures;
const InviteTypes = Constants2.InviteTypes;
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx");

export const createGuildProfileInvite = function createGuildProfileInvite(invite, theme) {
  let GUILD;
  let acronym;
  let assetUriForEmbed;
  let guildIconURL;
  let id;
  let name;
  let str2;
  let stringResult;
  let stringResult1;
  let tmp13;
  let tmp14;
  let tmp45;
  let tmp47;
  let tmp5Result16;
  let tmp5Result17;
  const tmp4 = getEmbedThemeColorsDefault(theme);
  const baseColors = tmp4.baseColors;
  const tmp5 = id;
  const colors = tmp4.colors;
  let obj = id(5945);
  const guildProfileFromInvite = obj.buildGuildProfileFromInvite(invite);
  let obj2 = id(4735);
  const isThemeDarkResult = obj2.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  let fromGuildProfileResult = null;
  const tmp8 = isThemeDarkResult ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_160;
  if (null != guildProfileFromInvite) {
    const tmp5Result = tmp5(2066);
    fromGuildProfileResult = tmp5Result.fromGuildProfile(guildProfileFromInvite);
  }
  const tmp5Result10 = tmp5(9415);
  let profilePrimaryColor = tmp5Result10.getProfilePrimaryColor(guildProfileFromInvite);
  const getBackgroundForProfile = tmp5(9413).getBackgroundForProfile;
  tmp5(9413);
  if (profilePrimaryColor == null) {
    profilePrimaryColor = tmp8;
  }
  let memberCount;
  [tmp13, tmp14] = getBackgroundForProfile(theme, profilePrimaryColor);
  _slicedToArray(getBackgroundForProfile(theme, profilePrimaryColor), 2);
  if (guildProfileFromInvite != null) {
    memberCount = guildProfileFromInvite.memberCount;
  }
  if (memberCount == null) {
    memberCount = invite.approximate_member_count;
  }
  let onlineCount;
  if (guildProfileFromInvite != null) {
    onlineCount = guildProfileFromInvite.onlineCount;
  }
  if (onlineCount == null) {
    onlineCount = invite.approximate_presence_count;
  }
  let icon;
  if (guildProfileFromInvite != null) {
    icon = guildProfileFromInvite.icon;
  }
  if (null != icon) {
    const obj3 = { id: null, icon: null, canAnimate: true, size: 128 };
    ({ id: obj6.id, icon: obj6.icon } = guildProfileFromInvite);
    const tmp2Result = AvatarUtilsDefault;
    guildIconURL = tmp2Result.getGuildIconURL(obj3);
  } else {
    let str;
    const getAcronym = tmp5(2019).getAcronym;
    tmp5(2019);
    if (guildProfileFromInvite != null) {
      str = guildProfileFromInvite.name;
    }
    if (str == null) {
      str = "";
    }
    acronym = getAcronym(str);
  }
  let hasItem;
  if (fromGuildProfileResult != null) {
    const features = fromGuildProfileResult.features;
    hasItem = features.has(GuildFeatures.DISCOVERABLE);
  }
  let tmp23;
  if (hasItem) {
    let customBanner;
    if (guildProfileFromInvite != null) {
      customBanner = guildProfileFromInvite.customBanner;
    }
    if (null != customBanner) {
      let obj4 = { id: null, splash: null, size: 400 * react_nativeDefault() };
      ({ id: obj7.id, customBanner: obj7.splash } = guildProfileFromInvite);
      const getGuildDiscoverySplashURL = AvatarUtilsDefault.getGuildDiscoverySplashURL;
      let num = 400;
      AvatarUtilsDefault;
      const guildDiscoverySplashURL = getGuildDiscoverySplashURL(obj4);
      tmp23 = guildDiscoverySplashURL;
    }
  }
  let tmp27 = null != memberCount && memberCount >= 5;
  if (!tmp27) {
    tmp27 = null != onlineCount && onlineCount > 0;
    const tmp28 = null != onlineCount && onlineCount > 0;
  }
  let tmp29;
  let tmp30;
  if (tmp27) {
    let formatToPlainStringResult;
    if (null != onlineCount) {
      let intl = tmp5(1126).intl;
      let obj5 = { membersOnline: onlineCount };
      formatToPlainStringResult = intl.formatToPlainString(tmp5(1126).t["LC+S+m"], obj5);
    }
    let formatToPlainStringResult1;
    if (null != memberCount) {
      const intl2 = tmp5(1126).intl;
      const obj8 = { count: memberCount };
      formatToPlainStringResult1 = intl2.formatToPlainString(tmp5(1126).t.zRl6XR, obj8);
    }
    tmp29 = formatToPlainStringResult1;
    tmp30 = formatToPlainStringResult;
  }
  let guildProfileCTAType = null;
  if (null != guildProfileFromInvite) {
    const tmp5Result13 = tmp5(9428);
    guildProfileCTAType = tmp5Result13.getGuildProfileCTAType(guildProfileFromInvite, invite.code);
  }
  if (tmp5(9428).CTATypes.IS_MEMBER === guildProfileCTAType) {
    const intl7 = tmp5(1126).intl;
    stringResult = intl7.string(tmp5(1126).t.IRoQXr);
  } else if (tmp5(9428).CTATypes.HAS_APPLICATION === guildProfileCTAType) {
    const intl6 = tmp5(1126).intl;
    stringResult = intl6.string(tmp5(1126).t["4yfIDk"]);
  } else if (tmp5(9428).CTATypes.APPLY_TO_JOIN === guildProfileCTAType) {
    const intl5 = tmp5(1126).intl;
    stringResult = intl5.string(tmp5(1126).t["7XdMW2"]);
  } else if (tmp5(9428).CTATypes.ACCEPT_ROLES === guildProfileCTAType) {
    const intl4 = tmp5(1126).intl;
    stringResult = intl4.string(tmp5(1126).t.MMlhsr);
  } else {
    if (tmp5(9428).CTATypes.LURK_DISCOVERABLE !== guildProfileCTAType) {
      const JOIN_VIA_INVITE = tmp5(9428).CTATypes.JOIN_VIA_INVITE;
    }
    const intl3 = tmp5(1126).intl;
    stringResult = intl3.string(tmp5(1126).t.XpeFYr);
  }
  let guildBadgeImageSource;
  if (null != fromGuildProfileResult) {
    const tmp5Result14 = tmp5(8428);
    guildBadgeImageSource = tmp5Result14.getGuildBadgeImageSource(fromGuildProfileResult, theme);
  }
  let found;
  if (guildProfileFromInvite != null) {
    const traits = guildProfileFromInvite.traits;
    if (traits != null) {
      found = traits.filter((label) => {
        let tmp = null != label;
        if (tmp) {
          const str = label.label;
          tmp = str.trim().length > 0;
        }
        return tmp;
      });
    }
  }
  let formatToPlainStringResult2;
  if (null != guildProfileFromInvite) {
    const getEstablishedDate = tmp5(7240).getEstablishedDate;
    tmp5(7240);
    const tmp2Result4 = SnowflakeUtilsDefault;
    const establishedDate = getEstablishedDate(tmp2Result4.extractTimestamp(guildProfileFromInvite.id), LocaleStore.locale);
    const intl8 = tmp5(1126).intl;
    const obj9 = { createdAtDate: establishedDate };
    formatToPlainStringResult2 = intl8.formatToPlainString(tmp5(1126).t.zb2Q56, obj9);
  }
  let mapped;
  if (null != invite.roles) {
    if (invite.roles.length > 0) {
      if (null != invite.guild) {
        id = invite.guild.id;
        const items = [];
        HermesBuiltin.arraySpread(items, invite.roles, 0);
        const sorted = items.sort(tmp5(2110).sortInviteRoles);
        mapped = sorted.map((color) => {
          let intl;
          let obj5;
          let surrogates;
          let tmpResult;
          let unicodeEmoji;
          const obj = GuildRoleUtils;
          const result = obj.inviteRoleToDisplayData(id, color);
          const obj2 = RoleIconUtils;
          const roleIconData = obj2.getRoleIconData(result, 16);
          let num = color.color;
          const int2hex = utils_ColorUtils.int2hex;
          utils_ColorUtils;
          if (num == null) {
            num = 0;
          }
          let tmp7;
          const int2hexResult = int2hex(num);
          if (null != roleIconData) {
            ({ customIconSrc: obj3.source, unicodeEmoji } = roleIconData);
            const obj4 = { source: null, unicodeEmoji: surrogates, name: color.name, size: 16, alt: intl.formatToPlainString(intl10.t["9+YWrE"], obj5) };
            surrogates = undefined;
            if (unicodeEmoji != null) {
              surrogates = unicodeEmoji.surrogates;
            }
            intl = intl10.intl;
            tmp7 = obj4;
            obj5 = { name: color.name };
          }
          const obj6 = { id: color.id, name: color.name, color: tmpResult.processColorOrThrow(int2hexResult), roleIcon: tmp7 };
          tmpResult = react_native;
          return obj6;
        });
      }
    }
  }
  const obj10 = { extendedType: CodedLinkExtendedType.GUILD_PROFILE_INVITE, acceptLabelText: stringResult, onlineText: tmp30, memberText: tmp29, titleText: name, thumbnailUrl: tmp45, thumbnailText: acronym, bodyText: str2, embedCanBeTapped: true, canBeAccepted: true, type: GUILD, inviteSplash: tmp23, bannerColor: tmp5Result16.processColorOrThrow(tmp13), bannerColorSecondary: tmp5Result17.processColorOrThrow(tmp14), hasProfileOverflow: tmp47, badgeIconUrl: assetUriForEmbed, acceptLabelBackgroundColor: colors.acceptLabelGreenBackgroundColor, establishedText: formatToPlainStringResult2, headerText: null, roles: mapped, rolesHeadingText: stringResult1 };
  const merged = Object.assign(baseColors);
  name = undefined;
  if (guildProfileFromInvite != null) {
    name = guildProfileFromInvite.name;
  }
  tmp45 = undefined;
  if (null != guildIconURL) {
    tmp45 = guildIconURL;
  }
  str2 = undefined;
  if (guildProfileFromInvite != null) {
    str2 = guildProfileFromInvite.description;
  }
  if (str2 == null) {
    str2 = "";
  }
  GUILD = invite.type;
  if (GUILD == null) {
    GUILD = InviteTypes.GUILD;
  }
  tmp5Result16 = tmp5(7606);
  tmp5Result17 = tmp5(7606);
  if (found == null) {
    found = [];
  }
  tmp47 = found.length > 0;
  if (!tmp47) {
    let gameApplicationIds;
    if (guildProfileFromInvite != null) {
      gameApplicationIds = guildProfileFromInvite.gameApplicationIds;
    }
    if (gameApplicationIds == null) {
      gameApplicationIds = [];
    }
    tmp47 = gameApplicationIds.length > 0;
  }
  assetUriForEmbed = undefined;
  if (null != guildBadgeImageSource) {
    const tmp5Result18 = tmp5(7616);
    assetUriForEmbed = tmp5Result18.getAssetUriForEmbed(guildBadgeImageSource);
  }
  stringResult1 = undefined;
  if (null != mapped) {
    if (mapped.length > 0) {
      const intl9 = tmp5(1126).intl;
      stringResult1 = intl9.string(tmp5(1126).t.stcSfI);
    }
  }
  return obj10;
};