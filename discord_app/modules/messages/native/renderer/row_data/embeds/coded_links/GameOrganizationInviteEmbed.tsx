// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import _modDef2405 from "../../../../../../game_organization_invites/GameOrganizationInvitesUntranslated.messages.js";
import ColorUtils from "../../../../../../../utils/ColorUtils.tsx";
import RowGeneratorStyleSheet from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import canGoToGameOrganizationGuildDefault from "../../../../../../game_organization_invites/canGoToGameOrganizationGuild.tsx";
import getGameOrganizationDisplayNounDefault from "../../../../../../game_organization_invites/getGameOrganizationDisplayNoun.tsx";
import GameOrganizationInviteStore from "../../../../../../game_organization_invites/GameOrganizationInviteStore.tsx";

require = fn;
const CodedLinkExtendedType = fn(10097).CodedLinkExtendedType;
const constants = fn(11327).GameOrganizationInviteStates;
const InviteTypes = fn(7872).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx",
);

export function createGameOrganizationInviteEmbed(code, theme, id) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const invite = GameOrganizationInviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const obj2 = {};
    const merged = Object.assign(baseColors);
    obj2.extendedType = CodedLinkExtendedType.GAME_ORGANIZATION_INVITE;
    obj2.type = InviteTypes.GUILD;
    ({ titleColor: obj16.titleColor, bodyTextColor: obj16.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = {};
      const merged1 = Object.assign(obj2);
      const intl9 = util.intl;
      obj3.headerText = intl9.string(util.t["N/g9Z4"]).toUpperCase();
      ({ resolvingGradientStart: obj15.resolvingGradientStart, resolvingGradientEnd: obj15.resolvingGradientEnd } =
        colors);
      obj3.embedCanBeTapped = false;
      obj3.canBeAccepted = false;
      return obj3;
    } else if (invite.state === tmp34.ERROR) {
      const obj4 = {};
      const merged2 = Object.assign(obj2);
      const intl6 = util.intl;
      const obj5 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null }) };
      obj4.headerText = intl6.formatToPlainString(_modDef2405["jKi+kc"], obj5);
      const intl7 = util.intl;
      obj4.titleText = intl7.string(_modDef2405["2/aTr2"]);
      const intl8 = util.intl;
      const obj6 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null, lowercase: true }) };
      obj4.subtitle = intl8.formatToPlainString(_modDef2405["L/fHgw"], obj6);
      const internal3 = nativeDefault.internal;
      obj4.titleColor = RowGeneratorStyleSheet.processColorOrThrow(
        internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL),
      );
      obj4.showInvalidIcon = true;
      obj4.embedCanBeTapped = false;
      obj4.canBeAccepted = false;
      return obj4;
    } else {
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj7 = { displayNoun };
      const tmp35 = getGameOrganizationDisplayNounDefault(obj7);
      ({ memberCount, maxMembers } = organization);
      let tmp5 = null != memberCount && null != maxMembers;
      const obj = {};
      const merged3 = Object.assign(obj2);
      const intl = util.intl;
      const obj8 = { noun: tmp35 };
      obj.headerText = intl.formatToPlainString(_modDef2405["jKi+kc"], obj8);
      ({ name: obj.titleText, iconUrl } = organization);
      obj.thumbnailUrl = iconUrl;
      obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
      ({ name: obj.gameName, iconUrl: iconUrl2 } = application);
      obj.gameIconUrl = iconUrl2;
      let formatToPlainStringResult;
      if (tmp5) {
        const intl2 = util.intl;
        const obj9 = { count: memberCount, max: maxMembers };
        formatToPlainStringResult = intl2.formatToPlainString(_modDef2405.VuENGl, obj9);
      }
      obj.memberCountText = formatToPlainStringResult;
      const description = organization.description;
      obj.bodyText = description;
      const internal = nativeDefault.internal;
      const items = [
        ColorUtils.hexToRgba(
          internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START),
        ),
      ];
      const tmp9Result = ColorUtils;
      const internal2 = nativeDefault.internal;
      items[1] = ColorUtils.hexToRgba(
        internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END),
      );
      obj.gradientColors = items;
      const tmp12 = canGoToGameOrganizationGuildDefault(invite, id);
      if (tmp5) {
        tmp5 = memberCount >= maxMembers;
      }
      if (accepted) {
        const intl5 = util.intl;
        const string = intl5.string;
        if (tmp12) {
          let stringResult = string(_modDef2405.H1wMHV);
        } else {
          stringResult = string(util.t.cEnaWx);
        }
        const obj10 = { acceptLabelText: stringResult, canBeAccepted: tmp12, embedCanBeTapped: tmp12 };
      } else {
        if (tmp5) {
          const obj11 = { acceptLabelText: null, canBeAccepted: false, embedCanBeTapped: false };
          const intl4 = util.intl;
          const obj12 = { noun: tmp35 };
          obj11.acceptLabelText = intl4.formatToPlainString(_modDef2405.rMimTG, obj12);
          let obj17 = obj11;
        } else {
          const intl3 = util.intl;
          if (id === inviterId) {
            let stringResult1 = intl3.string(_modDef2405.OkMPbI);
          } else {
            const obj13 = { noun: tmp35 };
            stringResult1 = intl3.formatToPlainString(_modDef2405["Cz/ZUM"], obj13);
          }
          obj17 = {
            acceptLabelText: stringResult1,
            canBeAccepted: id !== inviterId,
            embedCanBeTapped: id !== inviterId,
          };
        }
        const merged4 = Object.assign(obj17);
        return obj;
      }
      const tmp9Result2 = ColorUtils;
    }
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
}
