// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl8 from "../../../../../../../intl/index.native.tsx";
import _modDef2391 from "../../../../../../game_organization_invites/GameOrganizationInvitesUntranslated.messages.js";
import ColorUtils from "../../../../../../../utils/ColorUtils.tsx";
import Constants from "../../../../../../instant_invite/Constants.tsx";
import react_native from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import CodedLinksConstants from "CodedLinksConstants.tsx";
import GameOrganizationInviteConstants from "../../../../../../game_organization_invites/GameOrganizationInviteConstants.tsx";
import GameOrganizationInviteStore from "../../../../../../game_organization_invites/GameOrganizationInviteStore.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx",
);

export const createGameOrganizationInviteEmbed = function createGameOrganizationInviteEmbed(code, theme) {
  let application;
  let baseColors;
  let colors;
  let description;
  let displayNoun;
  let formatToPlainStringResult;
  let iconUrl;
  let iconUrl2;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let maxMembers;
  let memberCount;
  let obj5;
  let obj6;
  let organization;
  let str;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const invite = GameOrganizationInviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const obj2 = { extendedType: CodedLinkExtendedType.GAME_ORGANIZATION_INVITE, type: InviteTypes.GUILD };
    const merged = Object.assign(baseColors);
    ({ titleColor: obj8.titleColor, bodyTextColor: obj8.bodyTextColor, subtitleColor: obj8.subtitleColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = { headerText: str.toUpperCase(), embedCanBeTapped: false, canBeAccepted: false };
      const merged1 = Object.assign(obj2);
      const intl7 = intl8.intl;
      ({ resolvingGradientStart: obj7.resolvingGradientStart, resolvingGradientEnd: obj7.resolvingGradientEnd } =
        colors);
      str = intl7.string(intl8.t["N/g9Z4"]);
      return obj3;
    } else if (invite.state === tmp26.ERROR) {
      const obj4 = {
        headerText: intl5.string(_modDef2391.GLe98U),
        titleText: intl6.string(_modDef2391["2/aTr2"]),
        titleColor: obj6.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400),
        embedCanBeTapped: false,
        canBeAccepted: false,
      };
      const merged2 = Object.assign(obj2);
      intl5 = intl8.intl;
      intl6 = intl8.intl;
      obj6 = react_native;
      return obj4;
    } else {
      ({ organization, application, displayNoun } = invite);
      if (displayNoun == null) {
        const intl = intl8.intl;
        displayNoun = intl.string(_modDef2391.nVMqjA);
      }
      ({ memberCount, maxMembers } = organization);
      const obj = {
        headerText: intl2.formatToPlainString(_modDef2391["jKi+kc"], obj5),
        thumbnailUrl: iconUrl,
        thumbnailBackgroundColor: colors.thumbnailBackgroundColor,
        gameIconUrl: iconUrl2,
        memberCountText: formatToPlainStringResult,
        bodyText: description,
        gradientColors: items,
        acceptLabelText: intl4.formatToPlainString(_modDef2391["Cz/ZUM"], obj15),
        canBeAccepted: true,
        embedCanBeTapped: true,
      };
      const merged3 = Object.assign(obj2);
      intl2 = intl8.intl;
      obj5 = { noun: displayNoun };
      ({ name: obj.titleText, iconUrl } = organization);
      ({ name: obj.gameName, iconUrl: iconUrl2 } = application);
      formatToPlainStringResult = undefined;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl3 = intl8.intl;
          const obj14 = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl3.formatToPlainString(_modDef2391.VuENGl, obj14);
        }
      }
      description = organization.description;
      const hexToRgba = ColorUtils.hexToRgba;
      ColorUtils;
      const internal = nativeDefault.internal;
      items = [hexToRgba(internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START))];
      const hexToRgba2 = ColorUtils.hexToRgba;
      ColorUtils;
      const internal2 = nativeDefault.internal;
      items[1] = hexToRgba2(internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END));
      intl4 = intl8.intl;
      return obj;
    }
  }
};
