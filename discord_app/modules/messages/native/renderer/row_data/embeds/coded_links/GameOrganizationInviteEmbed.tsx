// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import _modDef2459 from "../../../../../../game_organization_invites/GameOrganizationInvitesUntranslated.messages.js";
import ColorUtils from "../../../../../../../utils/ColorUtils.tsx";
import RowGeneratorStyleSheet from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import getGameOrganizationDisplayNounDefault from "../../../../../../game_organization_invites/getGameOrganizationDisplayNoun.tsx";
import GameOrganizationInviteStore from "../../../../../../game_organization_invites/GameOrganizationInviteStore.tsx";

require = fn;
const CodedLinkExtendedType = fn(9907).CodedLinkExtendedType;
const constants = fn(10810).GameOrganizationInviteStates;
const InviteTypes = fn(7689).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx",
);

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
    ({ titleColor: obj8.titleColor, bodyTextColor: obj8.bodyTextColor, subtitleColor: obj8.subtitleColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = {};
      const merged1 = Object.assign(obj2);
      const intl5 = util.intl;
      obj3.headerText = intl5.string(util.t["N/g9Z4"]).toUpperCase();
      ({ resolvingGradientStart: obj7.resolvingGradientStart, resolvingGradientEnd: obj7.resolvingGradientEnd } =
        colors);
      obj3.embedCanBeTapped = false;
      obj3.canBeAccepted = false;
      return obj3;
    } else if (invite.state === tmp19.ERROR) {
      const obj4 = {};
      const merged2 = Object.assign(obj2);
      const intl3 = util.intl;
      obj4.headerText = intl3.string(_modDef2459.GLe98U);
      const intl4 = util.intl;
      obj4.titleText = intl4.string(_modDef2459["2/aTr2"]);
      obj4.titleColor = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
      obj4.embedCanBeTapped = false;
      obj4.canBeAccepted = false;
      return obj4;
    } else {
      ({ organization, application, displayNoun } = invite);
      const tmp20 = getGameOrganizationDisplayNounDefault(displayNoun);
      ({ memberCount, maxMembers } = organization);
      const obj5 = {};
      const merged3 = Object.assign(obj2);
      const intl6 = util.intl;
      const obj10 = { noun: tmp20 };
      obj5.headerText = intl6.formatToPlainString(_modDef2459["jKi+kc"], obj10);
      ({ name: obj9.titleText, iconUrl } = organization);
      obj5.thumbnailUrl = iconUrl;
      obj5.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
      ({ name: obj9.gameName, iconUrl: iconUrl2 } = application);
      obj5.gameIconUrl = iconUrl2;
      let formatToPlainStringResult;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl = util.intl;
          const obj = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl.formatToPlainString(_modDef2459.VuENGl, obj);
        }
      }
      obj5.memberCountText = formatToPlainStringResult;
      const description = organization.description;
      obj5.bodyText = description;
      const internal = nativeDefault.internal;
      const items = [
        ColorUtils.hexToRgba(
          internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START),
        ),
      ];
      const tmp24Result = ColorUtils;
      const internal2 = nativeDefault.internal;
      items[1] = ColorUtils.hexToRgba(
        internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END),
      );
      obj5.gradientColors = items;
      const intl2 = util.intl;
      const obj16 = { noun: tmp20 };
      obj5.acceptLabelText = intl2.formatToPlainString(_modDef2459["Cz/ZUM"], obj16);
      obj5.canBeAccepted = true;
      obj5.embedCanBeTapped = true;
      return obj5;
    }
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
};
