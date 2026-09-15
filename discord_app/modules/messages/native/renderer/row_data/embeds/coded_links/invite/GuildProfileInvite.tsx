// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx
import SnowflakeUtilsDefault from "../../../../../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../../../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../../../../../utils/AvatarUtils.tsx";
import getDevicePixelRatioDefault from "../../../../../../../../utils/getDevicePixelRatio.native.tsx";
import GuildRoleUtils from "../../../../../../../../utils/GuildRoleUtils.tsx";
import RoleIconUtils from "../../../../../../../guild_boosting/RoleIconUtils.tsx";
import RowGeneratorStyleSheet from "../../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../../getEmbedThemeColors.tsx";
import _slicedToArray from "../../../../../../../../../_runtime/metro/00032__.js";
import LocaleStore from "../../../../../../../user_settings/LocaleStore.tsx";

require = fn;
const CodedLinkExtendedType = fn(11447).CodedLinkExtendedType;
const GuildFeatures = fn(1074).GuildFeatures;
const InviteTypes = fn(7841).InviteTypes;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx",
);

export const createGuildProfileInvite = function createGuildProfileInvite(invite, theme) {
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const guildProfileFromInvite = id(5633).buildGuildProfileFromInvite(invite);
  let obj = id(5633);
  let obj2 = id(4491);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  let fromGuildProfileResult = null;
  const isThemeDarkResult = id(4491).isThemeDark(theme);
  if (null != guildProfileFromInvite) {
    fromGuildProfileResult = tmp4(1972).fromGuildProfile(guildProfileFromInvite);
    const tmp4Result = tmp4(1972);
  }
  const tmp7 = id(4491).isThemeDark(theme) ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_160;
  let profilePrimaryColor = id(9324).getProfilePrimaryColor(guildProfileFromInvite);
  const tmp4Result10 = id(9324);
  if (profilePrimaryColor == null) {
    profilePrimaryColor = tmp7;
  }
  const tmp4Result11 = id(9322);
  let memberCount;
  [tmp11, tmp12] = id(9322).getBackgroundForProfile(theme, profilePrimaryColor);
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
    ({ id: obj8.id, icon: obj8.icon } = guildProfileFromInvite);
    const guildIconURL = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, canAnimate: true, size: 128 });
    let obj3 = { id: null, icon: null, canAnimate: true, size: 128 };
    const tmpResult = AvatarUtilsDefault;
  } else {
    let str;
    if (guildProfileFromInvite != null) {
      str = guildProfileFromInvite.name;
    }
    if (str == null) {
      str = "";
    }
    const acronym = tmp4(1927).getAcronym(str);
    const tmp4Result12 = tmp4(1927);
  }
  let hasItem;
  if (fromGuildProfileResult != null) {
    const features = fromGuildProfileResult.features;
    hasItem = features.has(GuildFeatures.DISCOVERABLE);
  }
  let tmp20;
  if (hasItem) {
    let customBanner;
    if (guildProfileFromInvite != null) {
      customBanner = guildProfileFromInvite.customBanner;
    }
    if (null != customBanner) {
      const obj4 = { id: null, splash: null, size: null };
      ({ id: obj10.id, customBanner: obj10.splash } = guildProfileFromInvite);
      obj4.size = 400 * getDevicePixelRatioDefault();
      const guildDiscoverySplashURL = AvatarUtilsDefault.getGuildDiscoverySplashURL(obj4);
      tmp20 = guildDiscoverySplashURL;
      const tmpResult3 = AvatarUtilsDefault;
    }
  }
  let tmp23 = null != memberCount;
  if (tmp23) {
    tmp23 = memberCount >= 5;
  }
  if (!tmp23) {
    let tmp24 = null != onlineCount;
    if (tmp24) {
      tmp24 = onlineCount > 0;
    }
    tmp23 = tmp24;
  }
  let tmp25;
  let tmp26;
  if (tmp23) {
    let formatToPlainStringResult;
    if (null != onlineCount) {
      let intl = tmp4(1115).intl;
      let obj5 = { membersOnline: onlineCount };
      formatToPlainStringResult = intl.formatToPlainString(tmp4(1115).t["LC+S+m"], obj5);
    }
    let formatToPlainStringResult1;
    if (null != memberCount) {
      const intl2 = tmp4(1115).intl;
      let obj6 = { count: memberCount };
      formatToPlainStringResult1 = intl2.formatToPlainString(tmp4(1115).t.zRl6XR, obj6);
    }
    tmp25 = formatToPlainStringResult1;
    tmp26 = formatToPlainStringResult;
  }
  let guildProfileCTAType = null;
  if (null != guildProfileFromInvite) {
    guildProfileCTAType = tmp4(9337).getGuildProfileCTAType(guildProfileFromInvite, invite.code);
    const tmp4Result13 = tmp4(9337);
  }
  if (id(9337).CTATypes.IS_MEMBER === guildProfileCTAType) {
    const intl7 = tmp4(1115).intl;
    let stringResult = intl7.string(tmp4(1115).t.IRoQXr);
  } else if (tmp4(9337).CTATypes.HAS_APPLICATION === guildProfileCTAType) {
    const intl6 = tmp4(1115).intl;
    stringResult = intl6.string(tmp4(1115).t["4yfIDk"]);
  } else if (tmp4(9337).CTATypes.APPLY_TO_JOIN === guildProfileCTAType) {
    const intl5 = tmp4(1115).intl;
    stringResult = intl5.string(tmp4(1115).t["7XdMW2"]);
  } else if (tmp4(9337).CTATypes.ACCEPT_ROLES === guildProfileCTAType) {
    const intl4 = tmp4(1115).intl;
    stringResult = intl4.string(tmp4(1115).t.MMlhsr);
  } else {
    if (tmp4(9337).CTATypes.LURK_DISCOVERABLE !== guildProfileCTAType) {
      const JOIN_VIA_INVITE = tmp4(9337).CTATypes.JOIN_VIA_INVITE;
    }
    const intl3 = tmp4(1115).intl;
    stringResult = intl3.string(tmp4(1115).t.XpeFYr);
  }
  let guildBadgeImageSource;
  if (null != fromGuildProfileResult) {
    guildBadgeImageSource = tmp4(8870).getGuildBadgeImageSource(fromGuildProfileResult, theme);
    const tmp4Result14 = tmp4(8870);
  }
  let found;
  if (guildProfileFromInvite != null) {
    const traits = guildProfileFromInvite.traits;
    if (traits != null) {
      found = traits.filter((label) => {
        let tmp = null != label;
        if (tmp) {
          tmp = label.label.trim().length > 0;
        }
        return tmp;
      });
    }
  }
  let formatToPlainStringResult2;
  if (null != guildProfileFromInvite) {
    const tmp4Result15 = tmp4(7842);
    const establishedDate = tmp4Result15.getEstablishedDate(
      SnowflakeUtilsDefault.extractTimestamp(guildProfileFromInvite.id),
      LocaleStore.locale,
    );
    const intl8 = tmp4(1115).intl;
    let obj7 = { createdAtDate: establishedDate };
    formatToPlainStringResult2 = intl8.formatToPlainString(tmp4(1115).t.zb2Q56, obj7);
    const tmpResult4 = SnowflakeUtilsDefault;
  }
  let mapped;
  if (null != invite.roles) {
    if (invite.roles.length > 0) {
      if (null != invite.guild) {
        id = invite.guild.id;
        const items = [];
        HermesBuiltin.arraySpread(invite.roles, 0);
        const sorted = items.sort(tmp4(2020).sortInviteRoles);
        mapped = sorted.map((color) => {
          const result = GuildRoleUtils.inviteRoleToDisplayData(id, color);
          const roleIconData = RoleIconUtils.getRoleIconData(result, 16);
          let num = color.color;
          if (num == null) {
            num = 0;
          }
          let tmp6;
          if (null != roleIconData) {
            const obj5 = { source: null, unicodeEmoji: null, name: null, size: 16, alt: null };
            ({ customIconSrc: obj4.source, unicodeEmoji } = roleIconData);
            let surrogates;
            if (unicodeEmoji != null) {
              surrogates = unicodeEmoji.surrogates;
            }
            obj5.unicodeEmoji = surrogates;
            obj5.name = color.name;
            const intl = util.intl;
            const obj6 = { name: color.name };
            obj5.alt = intl.formatToPlainString(util.t["9+YWrE"], obj6);
            tmp6 = obj5;
          }
          const obj7 = { id: color.id, name: color.name, color: null, roleIcon: null };
          const int2hexResult = utils_ColorUtils.int2hex(num);
          obj7.color = RowGeneratorStyleSheet.processColorOrThrow(int2hexResult);
          obj7.roleIcon = tmp6;
          return obj7;
        });
      }
    }
  }
  const obj9 = {};
  const merged = Object.assign(tmp3.baseColors);
  obj9.extendedType = CodedLinkExtendedType.GUILD_PROFILE_INVITE;
  obj9.acceptLabelText = stringResult;
  obj9.onlineText = tmp26;
  obj9.memberText = tmp25;
  let name;
  if (guildProfileFromInvite != null) {
    name = guildProfileFromInvite.name;
  }
  obj9.titleText = name;
  let tmp40;
  if (null != guildIconURL) {
    tmp40 = guildIconURL;
  }
  obj9.thumbnailUrl = tmp40;
  obj9.thumbnailText = acronym;
  let str2;
  if (guildProfileFromInvite != null) {
    str2 = guildProfileFromInvite.description;
  }
  if (str2 == null) {
    str2 = "";
  }
  obj9.bodyText = str2;
  obj9.embedCanBeTapped = true;
  obj9.canBeAccepted = true;
  let GUILD = invite.type;
  if (GUILD == null) {
    GUILD = InviteTypes.GUILD;
  }
  obj9.type = GUILD;
  obj9.inviteSplash = tmp20;
  const tmp10 = _slicedToArray(id(9322).getBackgroundForProfile(theme, profilePrimaryColor), 2);
  obj9.bannerColor = id(8043).processColorOrThrow(tmp11);
  const tmp4Result16 = id(8043);
  obj9.bannerColorSecondary = id(8043).processColorOrThrow(tmp12);
  if (found == null) {
    found = [];
  }
  let tmp42 = found.length > 0;
  if (!tmp42) {
    let gameApplicationIds;
    if (guildProfileFromInvite != null) {
      gameApplicationIds = guildProfileFromInvite.gameApplicationIds;
    }
    if (gameApplicationIds == null) {
      gameApplicationIds = [];
    }
    tmp42 = gameApplicationIds.length > 0;
  }
  obj9.hasProfileOverflow = tmp42;
  let assetUriForEmbed;
  if (null != guildBadgeImageSource) {
    assetUriForEmbed = tmp4(8053).getAssetUriForEmbed(guildBadgeImageSource);
    const tmp4Result18 = tmp4(8053);
  }
  obj9.badgeIconUrl = assetUriForEmbed;
  obj9.acceptLabelBackgroundColor = tmp3.colors.acceptLabelGreenBackgroundColor;
  obj9.establishedText = formatToPlainStringResult2;
  obj9.headerText = null;
  obj9.roles = mapped;
  let stringResult1;
  if (null != mapped) {
    if (mapped.length > 0) {
      const intl9 = tmp4(1115).intl;
      stringResult1 = intl9.string(tmp4(1115).t.stcSfI);
    }
  }
  obj9.rolesHeadingText = stringResult1;
  return obj9;
};
