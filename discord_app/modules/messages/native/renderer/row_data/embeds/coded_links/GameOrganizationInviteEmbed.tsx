// === Module 14319: GameOrganizationInviteEmbed ===

// Module 14319 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef2639 from "module_2639" /* 2639 */;
import ColorUtils from "ColorUtils" /* 4910 */;
import _modDef7039 from "module_7039" /* 7039 */;
import _modDef7458 from "module_7458" /* 7458 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8245 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8673 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8680 */;
import isGameOrganizationFullDefault from "isGameOrganizationFull" /* 12058 */;
import _modDef12089 from "module_12089" /* 12089 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 12233 */;
import getGameOrganizationInviteCtaStateDefault from "getGameOrganizationInviteCtaState" /* 14320 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11895 */;
import GuildStore from "GuildStore" /* 4784 */;

require = fn;
const CodedLinkExtendedType = fn(10413).CodedLinkExtendedType;
const constants = fn(11896).GameOrganizationInviteStates;
const InviteTypes = fn(8438).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx");

export function createGameOrganizationInviteEmbed(code, theme, id1) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const invite = GameOrganizationInviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const obj2 = {};
    const merged = Object.assign(baseColors);
    obj2.extendedType = CodedLinkExtendedType.GAME_ORGANIZATION_INVITE;
    obj2.type = InviteTypes.GUILD;
    ({ titleColor: obj11.titleColor, bodyTextColor: obj11.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = {};
      const merged1 = Object.assign(obj2);
      const intl5 = util.intl;
      obj3.headerText = intl5.string(util.t["N/g9Z4"]).toUpperCase();
      ({ resolvingGradientStart: obj10.resolvingGradientStart, resolvingGradientEnd: obj10.resolvingGradientEnd } = colors);
      obj3.embedCanBeTapped = false;
      obj3.canBeAccepted = false;
      return obj3;
    } else if (invite.state === tmp19.ERROR) {
      const obj4 = {};
      const merged2 = Object.assign(obj2);
      const intl2 = util.intl;
      obj4.headerText = intl2.formatToPlainString(_modDef2639["jKi+kc"], { displayNoun: "other" });
      const intl3 = util.intl;
      obj4.titleText = intl3.string(_modDef2639["2/aTr2"]);
      const intl4 = util.intl;
      obj4.subtitle = intl4.formatToPlainString(_modDef2639["L/fHgw"], { displayNoun: "other" });
      const internal3 = nativeDefault.internal;
      obj4.titleColor = RowGeneratorStyleSheet.processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL));
      obj4.showInvalidIcon = true;
      obj4.invalidIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7458);
      obj4.embedCanBeTapped = false;
      obj4.canBeAccepted = false;
      return obj4;
    } else {
      ({ organization, application, displayNoun } = invite);
      ({ memberCount, maxMembers } = organization);
      ({ accepted, inviterId } = invite);
      const obj5 = { accepted, isInviter: id1 === inviterId, canGoToGuild: null, displayNoun: null, isGameOrganizationFull: null };
      const tmpResult = getGameOrganizationInviteCtaStateDefault;
      obj5.canGoToGuild = canGoToGameOrganizationGuildDefault(invite, id1, null != GuildStore.getGuild(invite.guildId));
      obj5.displayNoun = displayNoun;
      obj5.isGameOrganizationFull = isGameOrganizationFullDefault(organization);
      const tmpResult2 = canGoToGameOrganizationGuildDefault;
      const obj6 = {};
      const merged3 = Object.assign(obj2);
      const intl6 = util.intl;
      if (displayNoun == null) {
        displayNoun = "other";
      }
      const obj7 = { displayNoun };
      obj6.headerText = intl6.formatToPlainString(_modDef2639["jKi+kc"], obj7);
      ({ name: obj13.titleText, iconUrl } = organization);
      if (iconUrl == null) {
        iconUrl = _modDef12089;
      }
      obj6.thumbnailUrl = iconUrl;
      obj6.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
      ({ name: obj13.gameName, iconUrl: iconUrl2 } = application);
      obj6.gameIconUrl = iconUrl2;
      let formatToPlainStringResult;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl = util.intl;
          const obj12 = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl.formatToPlainString(_modDef2639.VuENGl, obj12);
        }
      }
      obj6.memberCountText = formatToPlainStringResult;
      const tmpResultResult = tmpResult(obj5);
      obj6.memberCountIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7039);
      const description = organization.description;
      obj6.bodyText = description;
      const tmp28Result = renderer_EmbedUtils;
      const internal = nativeDefault.internal;
      items = [ColorUtils.hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START)), ];
      const tmp28Result3 = ColorUtils;
      const internal2 = nativeDefault.internal;
      items[1] = ColorUtils.hexToRgba(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      obj6.gradientColors = items;
      ({ label: obj13.acceptLabelText, actionable: obj13.canBeAccepted, actionable: obj13.embedCanBeTapped } = tmpResultResult);
      obj6.isCtaLoading = GameOrganizationInviteStore.isJoinFlowPending(code);
      return obj6;
    }
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
}