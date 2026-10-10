// === Module 13508: GameOrganizationInviteEmbed ===

// Module 13508 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2438 from "module_2438" /* 2438 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 7750 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7888 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 10484 */;

require = fn;
const CodedLinkExtendedType = fn(9609).CodedLinkExtendedType;
const constants = fn(10485).GameOrganizationInviteStates;
const InviteTypes = fn(7423).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx");

export const createGameOrganizationInviteEmbed = function createGameOrganizationInviteEmbed(code, theme) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const invite = GameOrganizationInviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const obj2 = {};
    const merged = Object.assign(baseColors);
    obj2.extendedType = CodedLinkExtendedType.GAME_ORGANIZATION_INVITE;
    obj2.type = InviteTypes.GUILD;
    ({ titleColor: obj10.titleColor, bodyTextColor: obj10.bodyTextColor, subtitleColor: obj10.subtitleColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = {};
      const merged1 = Object.assign(obj2);
      const intl7 = util.intl;
      obj3.headerText = intl7.string(util.t["N/g9Z4"]).toUpperCase();
      ({ resolvingGradientStart: obj9.resolvingGradientStart, resolvingGradientEnd: obj9.resolvingGradientEnd } = colors);
      obj3.embedCanBeTapped = false;
      obj3.canBeAccepted = false;
      return obj3;
    } else if (invite.state === tmp24.ERROR) {
      const obj4 = {};
      const merged2 = Object.assign(obj2);
      const intl5 = util.intl;
      obj4.headerText = intl5.string(_modDef2438.GLe98U);
      const intl6 = util.intl;
      obj4.titleText = intl6.string(_modDef2438["2/aTr2"]);
      obj4.titleColor = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
      obj4.embedCanBeTapped = false;
      obj4.canBeAccepted = false;
      return obj4;
    } else {
      ({ organization, application, displayNoun } = invite);
      if (displayNoun == null) {
        const intl = util.intl;
        displayNoun = intl.string(_modDef2438.nVMqjA);
      }
      ({ memberCount, maxMembers } = organization);
      const obj = {};
      const merged3 = Object.assign(obj2);
      const intl2 = util.intl;
      const obj5 = { noun: displayNoun };
      obj.headerText = intl2.formatToPlainString(_modDef2438["jKi+kc"], obj5);
      ({ name: obj.titleText, iconUrl } = organization);
      obj.thumbnailUrl = iconUrl;
      obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
      ({ name: obj.gameName, iconUrl: iconUrl2 } = application);
      obj.gameIconUrl = iconUrl2;
      let formatToPlainStringResult;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl3 = util.intl;
          const obj6 = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl3.formatToPlainString(_modDef2438.VuENGl, obj6);
        }
      }
      obj.memberCountText = formatToPlainStringResult;
      const description = organization.description;
      obj.bodyText = description;
      const internal = nativeDefault.internal;
      const items = [ColorUtils.hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START)), ];
      const tmp9Result = ColorUtils;
      const internal2 = nativeDefault.internal;
      items[1] = ColorUtils.hexToRgba(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      obj.gradientColors = items;
      const intl4 = util.intl;
      const obj7 = { noun: displayNoun };
      obj.acceptLabelText = intl4.formatToPlainString(_modDef2438["Cz/ZUM"], obj7);
      obj.canBeAccepted = true;
      obj.embedCanBeTapped = true;
      return obj;
    }
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
};