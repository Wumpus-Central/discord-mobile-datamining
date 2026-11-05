// === Module 15372: GameOrganizationInviteEmbed ===

// Module 15372 (GameOrganizationInviteEmbed)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2533 from "module_2533" /* 2533 */;
import ColorUtils from "ColorUtils" /* 5140 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8527 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8540 */;
import canGoToGameOrganizationGuildDefault from "canGoToGameOrganizationGuild" /* 13436 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 13445 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11559 */;

require = fn;
const CodedLinkExtendedType = fn(10303).CodedLinkExtendedType;
const constants = fn(11560).GameOrganizationInviteStates;
const InviteTypes = fn(8024).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx");

export function createGameOrganizationInviteEmbed(code, theme, id) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const invite = GameOrganizationInviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const obj3 = {};
    const merged = Object.assign(baseColors);
    obj3.extendedType = CodedLinkExtendedType.GAME_ORGANIZATION_INVITE;
    obj3.type = InviteTypes.GUILD;
    ({ titleColor: obj17.titleColor, bodyTextColor: obj17.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj4 = {};
      const merged1 = Object.assign(obj3);
      const intl9 = util.intl;
      obj4.headerText = intl9.string(util.t["N/g9Z4"]).toUpperCase();
      ({ resolvingGradientStart: obj16.resolvingGradientStart, resolvingGradientEnd: obj16.resolvingGradientEnd } = colors);
      obj4.embedCanBeTapped = false;
      obj4.canBeAccepted = false;
      return obj4;
    } else if (invite.state === tmp34.ERROR) {
      const obj5 = {};
      const merged2 = Object.assign(obj3);
      const intl6 = util.intl;
      const obj6 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null }) };
      obj5.headerText = intl6.formatToPlainString(_modDef2533["jKi+kc"], obj6);
      const intl7 = util.intl;
      obj5.titleText = intl7.string(_modDef2533["2/aTr2"]);
      const intl8 = util.intl;
      const obj7 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null, lowercase: true }) };
      obj5.subtitle = intl8.formatToPlainString(_modDef2533["L/fHgw"], obj7);
      const internal3 = nativeDefault.internal;
      obj5.titleColor = RowGeneratorStyleSheet.processColorOrThrow(internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL));
      obj5.showInvalidIcon = true;
      obj5.embedCanBeTapped = false;
      obj5.canBeAccepted = false;
      return obj5;
    } else {
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj8 = { displayNoun };
      const tmp35 = getGameOrganizationDisplayNounDefault(obj8);
      ({ memberCount, maxMembers } = organization);
      let tmp5 = null != memberCount && null != maxMembers;
      const obj9 = {};
      const merged3 = Object.assign(obj3);
      const intl = util.intl;
      const obj10 = { noun: tmp35 };
      obj9.headerText = intl.formatToPlainString(_modDef2533["jKi+kc"], obj10);
      ({ name: obj2.titleText, iconUrl } = organization);
      obj9.thumbnailUrl = iconUrl;
      obj9.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
      ({ name: obj2.gameName, iconUrl: iconUrl2 } = application);
      obj9.gameIconUrl = iconUrl2;
      let formatToPlainStringResult;
      if (tmp5) {
        const intl2 = util.intl;
        const obj11 = { count: memberCount, max: maxMembers };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef2533.VuENGl, obj11);
      }
      obj9.memberCountText = formatToPlainStringResult;
      const description = organization.description;
      obj9.bodyText = description;
      const internal = nativeDefault.internal;
      items = [ColorUtils.hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START)), ];
      const tmp9Result = ColorUtils;
      const internal2 = nativeDefault.internal;
      items[1] = ColorUtils.hexToRgba(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      obj9.gradientColors = items;
      const tmp12 = canGoToGameOrganizationGuildDefault(invite, id);
      if (tmp5) {
        tmp5 = memberCount >= maxMembers;
      }
      if (accepted) {
        const intl5 = util.intl;
        const string = intl5.string;
        if (tmp12) {
          let stringResult = string(_modDef2533.H1wMHV);
        } else {
          stringResult = string(util.t.cEnaWx);
        }
        const obj12 = { acceptLabelText: stringResult, canBeAccepted: tmp12, embedCanBeTapped: tmp12 };
      } else {
        if (tmp5) {
          const obj13 = { acceptLabelText: null, canBeAccepted: false, embedCanBeTapped: false };
          const intl4 = util.intl;
          const obj14 = { noun: tmp35 };
          obj13.acceptLabelText = intl4.formatToPlainString(_modDef2533.rMimTG, obj14);
          let obj32 = obj13;
        } else {
          const intl3 = util.intl;
          if (id === inviterId) {
            let stringResult1 = intl3.string(_modDef2533.OkMPbI);
          } else {
            const obj18 = { noun: tmp35 };
            stringResult1 = intl3.formatToPlainString(_modDef2533["Cz/ZUM"], obj18);
          }
          obj32 = { acceptLabelText: stringResult1, canBeAccepted: id !== inviterId, embedCanBeTapped: id !== inviterId };
        }
        const merged4 = Object.assign(obj32);
        obj9.isCtaLoading = GameOrganizationInviteStore.isJoinFlowPending(code);
        return obj9;
      }
      const tmp9Result2 = ColorUtils;
    }
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
}