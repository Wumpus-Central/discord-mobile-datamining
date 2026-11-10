// === Module 15436: GameOrganizationInviteEmbed ===

// Module 15436 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2530 from "module_2530" /* 2530 */;
import ColorUtils from "ColorUtils" /* 5139 */;
import _modDef7316 from "module_7316" /* 7316 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8456 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8469 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8471 */;
import _modDef8686 from "module_8686" /* 8686 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 13448 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 13458 */;
import getGameOrganizationInviteCtaStateDefault from "getGameOrganizationInviteCtaState" /* 15437 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11512 */;
import GuildStore from "GuildStore" /* 5013 */;

require = fn;
const CodedLinkExtendedType = fn(10244).CodedLinkExtendedType;
const constants = fn(11513).GameOrganizationInviteStates;
const InviteTypes = fn(7960).InviteTypes;
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
    ({ titleColor: obj15.titleColor, bodyTextColor: obj15.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj4 = {};
      const merged1 = Object.assign(obj2);
      const intl6 = util.intl;
      obj4.headerText = intl6.string(util.t["N/g9Z4"]).toUpperCase();
      ({ resolvingGradientStart: obj14.resolvingGradientStart, resolvingGradientEnd: obj14.resolvingGradientEnd } = colors);
      obj4.embedCanBeTapped = false;
      obj4.canBeAccepted = false;
      return obj4;
    } else if (invite.state === tmp30.ERROR) {
      const obj5 = {};
      const merged2 = Object.assign(obj2);
      const intl3 = util.intl;
      const obj6 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null }) };
      obj5.headerText = intl3.formatToPlainString(_modDef2530["jKi+kc"], obj6);
      const intl4 = util.intl;
      obj5.titleText = intl4.string(_modDef2530["2/aTr2"]);
      const intl5 = util.intl;
      const obj7 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null, lowercase: true }) };
      obj5.subtitle = intl5.formatToPlainString(_modDef2530["L/fHgw"], obj7);
      const internal3 = nativeDefault.internal;
      obj5.titleColor = RowGeneratorStyleSheet.processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL));
      obj5.showInvalidIcon = true;
      obj5.invalidIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7316);
      obj5.embedCanBeTapped = false;
      obj5.canBeAccepted = false;
      return obj5;
    } else {
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj8 = { displayNoun };
      const tmp31 = getGameOrganizationDisplayNounDefault(obj8);
      ({ memberCount, maxMembers } = organization);
      const obj9 = { accepted, isInviter: id1 === inviterId, canGoToGuild: null, noun: null, isGameOrganizationFull: null };
      const tmpResult = getGameOrganizationInviteCtaStateDefault;
      obj9.canGoToGuild = canGoToGameOrganizationGuildDefault(invite, id1, null != GuildStore.getGuild(invite.guildId));
      obj9.noun = tmp31;
      let tmp10 = tmp5;
      if (null != memberCount && null != maxMembers) {
        tmp10 = memberCount >= maxMembers;
      }
      obj9.isGameOrganizationFull = tmp10;
      const tmpResult2 = canGoToGameOrganizationGuildDefault;
      const obj10 = {};
      const merged3 = Object.assign(obj2);
      const intl = util.intl;
      const obj11 = { noun: tmp31 };
      obj10.headerText = intl.formatToPlainString(_modDef2530["jKi+kc"], obj11);
      ({ name: obj3.titleText, iconUrl } = organization);
      obj10.thumbnailUrl = iconUrl;
      obj10.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
      ({ name: obj3.gameName, iconUrl: iconUrl2 } = application);
      obj10.gameIconUrl = iconUrl2;
      let formatToPlainStringResult;
      if (null != memberCount && null != maxMembers) {
        const intl2 = util.intl;
        const obj16 = { count: memberCount, max: maxMembers };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef2530.VuENGl, obj16);
      }
      obj10.memberCountText = formatToPlainStringResult;
      const tmpResultResult = tmpResult(obj9);
      obj10.memberCountIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8686);
      const description = organization.description;
      obj10.bodyText = description;
      const tmp15Result = renderer_EmbedUtils;
      const internal = nativeDefault.internal;
      items = [ColorUtils.hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START)), ];
      const tmp15Result3 = ColorUtils;
      const internal2 = nativeDefault.internal;
      items[1] = ColorUtils.hexToRgba(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      obj10.gradientColors = items;
      ({ label: obj3.acceptLabelText, actionable: obj3.canBeAccepted, actionable: obj3.embedCanBeTapped } = tmpResultResult);
      obj10.isCtaLoading = GameOrganizationInviteStore.isJoinFlowPending(code);
      return obj10;
    }
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
}