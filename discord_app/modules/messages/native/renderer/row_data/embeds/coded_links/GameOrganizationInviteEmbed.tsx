// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import _modDef2549 from "../../../../../../game_organization_invites/GameOrganizationInvitesUntranslated.messages.js";
import ColorUtils from "../../../../../../../utils/ColorUtils.tsx";
import _modDef7373 from "../../../../../../../../_runtime/metro/07373__.js";
import _modDef7790 from "../../../../../../../../_runtime/metro/07790__.js";
import renderer_EmbedUtils from "../../../EmbedUtils.tsx";
import RowGeneratorStyleSheet from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import isGameOrganizationFullDefault from "../../../../../../game_organizations/isGameOrganizationFull.tsx";
import canGoToGameOrganizationGuildDefault from "../../../../../../game_organization_invites/canGoToGameOrganizationGuild.tsx";
import getGameOrganizationDisplayNounDefault from "../../../../../../game_organization_invites/getGameOrganizationDisplayNoun.tsx";
import getGameOrganizationInviteCtaStateDefault from "../../../../../../game_organization_invites/getGameOrganizationInviteCtaState.tsx";
import GameOrganizationInviteStore from "../../../../../../game_organization_invites/GameOrganizationInviteStore.tsx";
import GuildStore from "../../../../../../../stores/GuildStore.tsx";

require = fn;
const CodedLinkExtendedType = fn(11825).CodedLinkExtendedType;
const constants = fn(12274).GameOrganizationInviteStates;
const InviteTypes = fn(8775).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/GameOrganizationInviteEmbed.tsx",
);

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
    ({ titleColor: obj12.titleColor, bodyTextColor: obj12.bodyTextColor } = colors);
    if (invite.state === constants.RESOLVING) {
      const obj3 = {};
      const merged1 = Object.assign(obj2);
      const intl5 = util.intl;
      obj3.headerText = intl5.string(util.t["N/g9Z4"]).toUpperCase();
      ({ resolvingGradientStart: obj11.resolvingGradientStart, resolvingGradientEnd: obj11.resolvingGradientEnd } =
        colors);
      obj3.embedCanBeTapped = false;
      obj3.canBeAccepted = false;
      return obj3;
    } else if (invite.state === tmp19.ERROR) {
      const obj4 = {};
      const merged2 = Object.assign(obj2);
      const intl2 = util.intl;
      const obj5 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null }) };
      obj4.headerText = intl2.formatToPlainString(_modDef2549["jKi+kc"], obj5);
      const intl3 = util.intl;
      obj4.titleText = intl3.string(_modDef2549["2/aTr2"]);
      const intl4 = util.intl;
      const obj6 = { noun: getGameOrganizationDisplayNounDefault({ displayNoun: null, lowercase: true }) };
      obj4.subtitle = intl4.formatToPlainString(_modDef2549["L/fHgw"], obj6);
      const internal3 = nativeDefault.internal;
      obj4.titleColor = RowGeneratorStyleSheet.processColorOrThrow(
        internal3.resolveSemanticColor(theme, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL),
      );
      obj4.showInvalidIcon = true;
      obj4.invalidIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7790);
      obj4.embedCanBeTapped = false;
      obj4.canBeAccepted = false;
      return obj4;
    } else {
      ({ organization, application, displayNoun, accepted, inviterId } = invite);
      const obj7 = { displayNoun };
      const tmp21 = getGameOrganizationDisplayNounDefault(obj7);
      ({ memberCount, maxMembers } = organization);
      const obj8 = {
        accepted,
        isInviter: id1 === inviterId,
        canGoToGuild: null,
        noun: null,
        isGameOrganizationFull: null,
      };
      const tmpResult = getGameOrganizationInviteCtaStateDefault;
      obj8.canGoToGuild = canGoToGameOrganizationGuildDefault(invite, id1, null != GuildStore.getGuild(invite.guildId));
      obj8.noun = tmp21;
      obj8.isGameOrganizationFull = isGameOrganizationFullDefault(organization);
      const tmpResult2 = canGoToGameOrganizationGuildDefault;
      const obj13 = {};
      const merged3 = Object.assign(obj2);
      const intl6 = util.intl;
      const obj14 = { noun: tmp21 };
      obj13.headerText = intl6.formatToPlainString(_modDef2549["jKi+kc"], obj14);
      ({ name: obj15.titleText, iconUrl } = organization);
      obj13.thumbnailUrl = iconUrl;
      obj13.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
      ({ name: obj15.gameName, iconUrl: iconUrl2 } = application);
      obj13.gameIconUrl = iconUrl2;
      let formatToPlainStringResult;
      if (null != memberCount) {
        if (null != maxMembers) {
          const intl = util.intl;
          const obj16 = { count: memberCount, max: maxMembers };
          formatToPlainStringResult = intl.formatToPlainString(_modDef2549.VuENGl, obj16);
        }
      }
      obj13.memberCountText = formatToPlainStringResult;
      const tmpResultResult = tmpResult(obj8);
      obj13.memberCountIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7373);
      const description = organization.description;
      obj13.bodyText = description;
      const tmp29Result = renderer_EmbedUtils;
      const internal = nativeDefault.internal;
      items = [
        ColorUtils.hexToRgba(
          internal.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_START),
        ),
      ];
      const tmp29Result3 = ColorUtils;
      const internal2 = nativeDefault.internal;
      items[1] = ColorUtils.hexToRgba(
        internal2.resolveSemanticColor(theme, nativeDefault.colors.EXPRESSIVE_GRADIENT_PURPLE_END),
      );
      obj13.gradientColors = items;
      ({
        label: obj15.acceptLabelText,
        actionable: obj15.canBeAccepted,
        actionable: obj15.embedCanBeTapped,
      } = tmpResultResult);
      obj13.isCtaLoading = GameOrganizationInviteStore.isJoinFlowPending(code);
      return obj13;
    }
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
}
