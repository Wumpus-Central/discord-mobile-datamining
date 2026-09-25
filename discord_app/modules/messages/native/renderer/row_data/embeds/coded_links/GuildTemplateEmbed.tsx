// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx
import _mod17 from "../../../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import GuildTemplatesConstants from "../../../../../../guild_templates/GuildTemplatesConstants.tsx";
import Constants from "../../../../../../instant_invite/Constants.tsx";
import RowGeneratorStyleSheet from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import _modDef11272 from "../../../../../../../../_runtime/metro/11272__.js";
import _modDef11273 from "../../../../../../../../_runtime/metro/11273__.js";
import _modDef12776 from "../../../../../../../../_runtime/metro/12776__.js";
import GuildTemplateStore from "../../../../../../guild_templates/GuildTemplateStore.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx",
);

export const createGuildTemplateEmbed = function createGuildTemplateEmbed(code, theme) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const guildTemplate = GuildTemplateStore.getGuildTemplate(code);
  if (null == guildTemplate) {
    return null;
  } else if (guildTemplate.state === GuildTemplateStates.RESOLVING) {
    const obj5 = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
    const intl3 = util.intl;
    obj5.headerText = intl3.string(util.t.Xj87Yf).toUpperCase();
    ({ resolvingGradientEnd: obj4.resolvingGradientEnd, resolvingGradientStart: obj4.resolvingGradientStart } = colors);
    obj5.type = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj5;
  } else if (guildTemplate.state === tmp17.EXPIRED) {
    const obj = {};
    const merged1 = Object.assign(baseColors);
    const intl = util.intl;
    obj.headerText = intl.string(util.t.C7ZRNw).toUpperCase();
    const str = intl.string(util.t.C7ZRNw);
    obj.titleColor = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400);
    const intl2 = util.intl;
    obj.titleText = intl2.string(util.t.A6MwXE);
    if (obj3.isThemeDark(theme)) {
      let tmpResult = _modDef11272;
    } else {
      tmpResult = _modDef11273;
    }
    obj.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
    obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
    obj.type = InviteTypes.GUILD;
    return obj;
  } else {
    const intl4 = util.intl;
    const obj9 = { usageCount: guildTemplate.usageCount.toString() };
    const obj10 = {};
    const merged2 = Object.assign(baseColors);
    const intl5 = util.intl;
    const formatToPlainStringResult = intl4.formatToPlainString(util.t.L8Awgh, obj9);
    obj10.headerText = intl5.string(util.t.kAvFkO).toUpperCase();
    obj10.headerColor = colors.headerColor;
    obj10.titleText = guildTemplate.name;
    obj10.titleColor = colors.titleColor;
    obj10.subtitle = formatToPlainStringResult;
    obj10.subtitleColor = colors.subtitleColor;
    obj10.thumbnailUrl = Image.resolveAssetSource(_modDef12776).uri;
    ({
      acceptLabelGreenColor: obj6.acceptLabelColor,
      acceptLabelGreenBackgroundColor: obj6.acceptLabelBackgroundColor,
    } = colors);
    const intl6 = util.intl;
    obj10.acceptLabelText = intl6.string(util.t["a3Gl+e"]);
    obj10.embedCanBeTapped = true;
    obj10.type = InviteTypes.GUILD;
    return obj10;
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
};
