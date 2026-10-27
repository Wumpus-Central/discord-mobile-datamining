// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import _modDef2403 from "../../../../../../game_organization_invites/GameOrganizationInvitesUntranslated.messages.js";
import ColorUtils from "../../../../../../../utils/ColorUtils.tsx";
import RowGeneratorStyleSheet from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import canGoToGameOrganizationGuildDefault from "../../../../../../game_organization_invites/canGoToGameOrganizationGuild.tsx";
import getGameOrganizationDisplayNounDefault from "../../../../../../game_organization_invites/getGameOrganizationDisplayNoun.tsx";
import GameOrganizationInviteStore from "../../../../../../game_organization_invites/GameOrganizationInviteStore.tsx";

require = fn;
const CodedLinkExtendedType = fn(10006).CodedLinkExtendedType;
const constants = fn(11033).GameOrganizationInviteStates;
const InviteTypes = fn(7810).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx",
);

export const createGameOrganizationInviteEmbed = function createGameOrganizationInviteEmbed(code, theme, id) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const invite = GameOrganizationInviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const obj2 = {};
    const merged = Object.assign(baseColors);
    obj2.extendedType = CodedLinkExtendedType.GAME_ORGANIZATION_INVITE;
    obj2.type = InviteTypes.GUILD;
    ({ titleColor: obj9.titleColor, bodyTextColor: obj9.bodyTextColor, subtitleColor: obj9.subtitleColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = {};
      const merged1 = Object.assign(obj2);
      const intl5 = util.intl;
      obj3.headerText = intl5.string(util.t["N/g9Z4"]).toUpperCase();
      ({ resolvingGradientStart: obj8.resolvingGradientStart, resolvingGradientEnd: obj8.resolvingGradientEnd } =
        colors);
      obj3.embedCanBeTapped = false;
      obj3.canBeAccepted = false;
      return obj3;
    } else if (invite.state === tmp29.ERROR) {
      const obj4 = {};
      const merged2 = Object.assign(obj2);
      const intl3 = util.intl;
      obj4.headerText = intl3.string(_modDef2403.GLe98U);
      const intl4 = util.intl;
      obj4.titleText = intl4.string(_modDef2403["2/aTr2"]);
      obj4.titleColor = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
      obj4.embedCanBeTapped = false;
      obj4.canBeAccepted = false;
      return obj4;
    } else {
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj5 = { displayNoun };
      const tmp30 = getGameOrganizationDisplayNounDefault(obj5);
      ({ memberCount, maxMembers } = organization);
      const obj6 = {};
      const merged3 = Object.assign(obj2);
      const intl6 = util.intl;
      const obj10 = { noun: tmp30 };
      obj6.headerText = intl6.formatToPlainString(_modDef2403["jKi+kc"], obj10);
      ({ name: obj11.titleText, iconUrl } = organization);
      obj6.thumbnailUrl = iconUrl;
      obj6.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
      ({ name: obj11.gameName, iconUrl: iconUrl2 } = application);
      obj6.gameIconUrl = iconUrl2;
      let formatToPlainStringResult;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl = util.intl;
          const obj = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl.formatToPlainString(_modDef2403.VuENGl, obj);
        }
      }
      obj6.memberCountText = formatToPlainStringResult;
      const description = organization.description;
      obj6.bodyText = description;
      const internal = nativeDefault.internal;
      const items = [
        ColorUtils.hexToRgba(
          internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START),
        ),
      ];
      const tmp34Result = ColorUtils;
      const internal2 = nativeDefault.internal;
      items[1] = ColorUtils.hexToRgba(
        internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END),
      );
      obj6.gradientColors = items;
      const tmp7 = canGoToGameOrganizationGuildDefault(invite, id);
      const obj12 = { acceptLabelText: null, canBeAccepted: null, embedCanBeTapped: null };
      const intl2 = util.intl;
      if (accepted) {
        const string = intl2.string;
        if (tmp7) {
          let stringResult = string(_modDef2403.H1wMHV);
        } else {
          stringResult = string(util.t.cEnaWx);
        }
        obj12.acceptLabelText = stringResult;
        obj12.canBeAccepted = tmp7;
        obj12.embedCanBeTapped = tmp7;
      } else {
        if (id === inviterId) {
          let stringResult1 = intl2.string(_modDef2403.OkMPbI);
        } else {
          const obj20 = { noun: tmp30 };
          stringResult1 = intl2.formatToPlainString(_modDef2403["Cz/ZUM"], obj20);
        }
        obj12.acceptLabelText = stringResult1;
        obj12.canBeAccepted = id !== inviterId;
        obj12.embedCanBeTapped = id !== inviterId;
        const merged4 = Object.assign(obj12);
        return obj6;
      }
      const tmp34Result2 = ColorUtils;
    }
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
};
