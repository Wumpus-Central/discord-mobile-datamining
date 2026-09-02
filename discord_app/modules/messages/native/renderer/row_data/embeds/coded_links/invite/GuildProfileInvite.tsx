// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx
import ThemesDefault from "../../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getEmbedThemeColorsDefault from "../../getEmbedThemeColors.tsx";
import closure_3 from "../../../../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../../user_settings/LocaleStore.tsx";
import { CodedLinkExtendedType } from "../CodedLinksConstants.tsx";
import { GuildFeatures } from "../../../../../../../../Constants.tsx";
import { InviteTypes } from "../../../../../../../instant_invite/Constants.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx",
);

export const createGuildProfileInvite = function createGuildProfileInvite(invite, closure_2) {
  const tmp3 = getEmbedThemeColorsDefault(closure_2);
  let obj = id(5568);
  const guildProfileFromInvite = obj.buildGuildProfileFromInvite(invite);
  obj1 = id(1362);
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  let fromGuildProfileResult = null;
  const isThemeDarkResult = obj1.isThemeDark(closure_2);
  if (null != guildProfileFromInvite) {
    let tmp4Result = tmp4(1425);
    fromGuildProfileResult = tmp4Result.fromGuildProfile(guildProfileFromInvite);
  }
  tmp4Result = tmp4(9030);
  let profilePrimaryColor = tmp4Result.getProfilePrimaryColor(guildProfileFromInvite);
  const tmp7 = obj1.isThemeDark(closure_2) ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_160;
  if (profilePrimaryColor == null) {
    profilePrimaryColor = tmp7;
  }
  const tmp4Result1 = id(9028);
  let memberCount;
  [tmp11, tmp12] = callback(id(9028).getBackgroundForProfile(closure_2, profilePrimaryColor), 2);
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
    let tmpResult = tmp(1430);
    obj = { id: null, icon: null, canAnimate: true, size: 128 };
    ({ id: obj8[0], icon: obj8[1] } = guildProfileFromInvite);
    const guildIconURL = tmpResult.getGuildIconURL(obj);
  } else {
    let str;
    if (guildProfileFromInvite != null) {
      str = guildProfileFromInvite.name;
    }
    if (str == null) {
      str = "";
    }
    const acronym = tmp4(1902).getAcronym(str);
    const tmp4Result2 = tmp4(1902);
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
      tmpResult = tmp(1430);
      obj = { id: null, splash: null, size: null };
      ({ id: obj10[0], customBanner: obj10[1] } = guildProfileFromInvite);
      obj[2] = 400 * tmp(1894)();
      const guildDiscoverySplashURL = tmpResult.getGuildDiscoverySplashURL(obj);
      tmp20 = guildDiscoverySplashURL;
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
      let intl = tmp4(1233).intl;
      obj1 = { membersOnline: null };
      obj1[0] = onlineCount;
      formatToPlainStringResult = intl.formatToPlainString(tmp4(1233).t["LC+S+m"], obj1);
    }
    let formatToPlainStringResult1;
    if (null != memberCount) {
      const intl2 = tmp4(1233).intl;
      const obj2 = { count: null };
      obj2[0] = memberCount;
      formatToPlainStringResult1 = intl2.formatToPlainString(tmp4(1233).t.zRl6XR, obj2);
    }
    tmp25 = formatToPlainStringResult1;
    tmp26 = formatToPlainStringResult;
  }
  let guildProfileCTAType = null;
  if (null != guildProfileFromInvite) {
    guildProfileCTAType = tmp4(9043).getGuildProfileCTAType(guildProfileFromInvite, invite.code);
    const tmp4Result3 = tmp4(9043);
  }
  if (id(9043).CTATypes.IS_MEMBER === guildProfileCTAType) {
    const intl7 = tmp4(1233).intl;
    let stringResult = intl7.string(tmp4(1233).t.IRoQXr);
  } else if (tmp4(9043).CTATypes.HAS_APPLICATION === guildProfileCTAType) {
    const intl6 = tmp4(1233).intl;
    stringResult = intl6.string(tmp4(1233).t["4yfIDk"]);
  } else if (tmp4(9043).CTATypes.APPLY_TO_JOIN === guildProfileCTAType) {
    const intl5 = tmp4(1233).intl;
    stringResult = intl5.string(tmp4(1233).t["7XdMW2"]);
  } else if (tmp4(9043).CTATypes.ACCEPT_ROLES === guildProfileCTAType) {
    const intl4 = tmp4(1233).intl;
    stringResult = intl4.string(tmp4(1233).t.MMlhsr);
  } else {
    if (tmp4(9043).CTATypes.LURK_DISCOVERABLE !== guildProfileCTAType) {
      const JOIN_VIA_INVITE = tmp4(9043).CTATypes.JOIN_VIA_INVITE;
    }
    const intl3 = tmp4(1233).intl;
    stringResult = intl3.string(tmp4(1233).t.XpeFYr);
  }
  let guildBadgeImageSource;
  if (null != fromGuildProfileResult) {
    guildBadgeImageSource = tmp4(8882).getGuildBadgeImageSource(fromGuildProfileResult, closure_2);
    const tmp4Result4 = tmp4(8882);
  }
  let found;
  if (guildProfileFromInvite != null) {
    const traits = guildProfileFromInvite.traits;
    if (traits != null) {
      found = traits.filter((label) => {
        let tmp = null != label;
        if (tmp) {
          tmp = label.label.trim().length > 0;
          const str = label.label;
        }
        return tmp;
      });
    }
  }
  let formatToPlainStringResult2;
  if (null != guildProfileFromInvite) {
    const tmp4Result5 = tmp4(7492);
    const establishedDate = tmp4Result5.getEstablishedDate(
      tmp(11).extractTimestamp(guildProfileFromInvite.id),
      locale.locale,
    );
    const intl8 = tmp4(1233).intl;
    const obj3 = { createdAtDate: null };
    obj3[0] = establishedDate;
    formatToPlainStringResult2 = intl8.formatToPlainString(tmp4(1233).t.zb2Q56, obj3);
    const tmpResult1 = tmp(11);
  }
  let mapped;
  if (null != invite.roles) {
    if (invite.roles.length > 0) {
      if (null != invite.guild) {
        id = invite.guild.id;
        const items = [];
        HermesBuiltin.arraySpread(invite.roles, 0);
        const sorted = items.sort(tmp4(1988).sortInviteRoles);
        mapped = sorted.map((color) => {
          let obj = id(closure_1_2[20]);
          const result = obj.inviteRoleToDisplayData(id, color);
          obj1 = id(closure_1_2[21]);
          let roleIconData = obj1.getRoleIconData(result, 16);
          if (roleIconData == null) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          let tmpResult = tmp(tmp2[22]);
          let num = color.color;
          if (num == null) {
            num = 0;
          }
          if (null != customIconSrc) {
            obj = { source: null, unicodeEmoji: null, name: null, size: 16, alt: null };
            obj[0] = customIconSrc;
            let surrogates;
            if (unicodeEmoji != null) {
              surrogates = unicodeEmoji.surrogates;
            }
            obj[1] = surrogates;
            obj[2] = color.name;
            const intl = tmp(tmp2[15]).intl;
            obj = { name: null };
            obj[0] = color.name;
            obj[4] = intl.formatToPlainString(tmp(tmp2[15]).t["9+YWrE"], obj);
            const tmp5 = obj;
          }
          obj1 = { id: color.id, name: color.name, color: null, roleIcon: null };
          tmpResult = tmp(tmp2[23]);
          obj1[2] = tmpResult.processColorOrThrow(tmpResult.int2hex(num));
          obj1[3] = tmp5;
          return obj1;
        });
      }
    }
  }
  const obj4 = {};
  const merged = Object.assign(tmp3.baseColors);
  obj4.extendedType = CodedLinkExtendedType.GUILD_PROFILE_INVITE;
  obj4.acceptLabelText = stringResult;
  obj4.onlineText = tmp26;
  obj4.memberText = tmp25;
  let name;
  if (guildProfileFromInvite != null) {
    name = guildProfileFromInvite.name;
  }
  obj4.titleText = name;
  let tmp40;
  if (null != guildIconURL) {
    tmp40 = guildIconURL;
  }
  obj4.thumbnailUrl = tmp40;
  obj4.thumbnailText = acronym;
  let str2;
  if (guildProfileFromInvite != null) {
    str2 = guildProfileFromInvite.description;
  }
  if (str2 == null) {
    str2 = "";
  }
  obj4.bodyText = str2;
  obj4.embedCanBeTapped = true;
  obj4.canBeAccepted = true;
  let GUILD = invite.type;
  if (GUILD == null) {
    GUILD = InviteTypes.GUILD;
  }
  obj4.type = GUILD;
  obj4.inviteSplash = tmp20;
  const tmp10 = callback(id(9028).getBackgroundForProfile(closure_2, profilePrimaryColor), 2);
  obj4.bannerColor = id(7854).processColorOrThrow(tmp11);
  const tmp4Result6 = id(7854);
  obj4.bannerColorSecondary = id(7854).processColorOrThrow(tmp12);
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
  obj4.hasProfileOverflow = tmp42;
  let assetUriForEmbed;
  if (null != guildBadgeImageSource) {
    assetUriForEmbed = tmp4(7864).getAssetUriForEmbed(guildBadgeImageSource);
    const tmp4Result8 = tmp4(7864);
  }
  obj4.badgeIconUrl = assetUriForEmbed;
  obj4.acceptLabelBackgroundColor = tmp3.colors.acceptLabelGreenBackgroundColor;
  obj4.establishedText = formatToPlainStringResult2;
  obj4.headerText = null;
  obj4.roles = mapped;
  let stringResult1;
  if (null != mapped) {
    if (mapped.length > 0) {
      const intl9 = tmp4(1233).intl;
      stringResult1 = intl9.string(tmp4(1233).t.stcSfI);
    }
  }
  obj4.rolesHeadingText = stringResult1;
  return obj4;
};
