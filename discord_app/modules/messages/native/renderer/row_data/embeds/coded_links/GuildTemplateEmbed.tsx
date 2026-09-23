// === Module 13612: GuildTemplateEmbed ===

// Module 13612 (GuildTemplateEmbed)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7654 */;
import Constants from "Constants" /* 8063 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8280 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8289 */;
import _modDef12143 from "module_12143" /* 12143 */;
import _modDef12144 from "module_12144" /* 12144 */;
import _modDef13613 from "module_13613" /* 13613 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7785 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx");

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
      let tmpResult = _modDef12143;
    } else {
      tmpResult = _modDef12144;
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
    obj10.thumbnailUrl = Image.resolveAssetSource(_modDef13613).uri;
    ({ acceptLabelGreenColor: obj6.acceptLabelColor, acceptLabelGreenBackgroundColor: obj6.acceptLabelBackgroundColor } = colors);
    const intl6 = util.intl;
    obj10.acceptLabelText = intl6.string(util.t["a3Gl+e"]);
    obj10.embedCanBeTapped = true;
    obj10.type = InviteTypes.GUILD;
    return obj10;
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
};