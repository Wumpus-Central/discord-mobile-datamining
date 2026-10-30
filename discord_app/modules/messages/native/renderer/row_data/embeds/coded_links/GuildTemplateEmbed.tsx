// === Module 15082: GuildTemplateEmbed ===

// Module 15082 (GuildTemplateEmbed)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7495 */;
import Constants from "Constants" /* 7872 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8373 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8386 */;
import _modDef13185 from "module_13185" /* 13185 */;
import _modDef13186 from "module_13186" /* 13186 */;
import _modDef15083 from "module_15083" /* 15083 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7630 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx");

export function createGuildTemplateEmbed(code, theme) {
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
      let tmpResult = _modDef13185;
    } else {
      tmpResult = _modDef13186;
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
    obj10.thumbnailUrl = Image.resolveAssetSource(_modDef15083).uri;
    ({ acceptLabelGreenColor: obj6.acceptLabelColor, acceptLabelGreenBackgroundColor: obj6.acceptLabelBackgroundColor } = colors);
    const intl6 = util.intl;
    obj10.acceptLabelText = intl6.string(util.t["a3Gl+e"]);
    obj10.embedCanBeTapped = true;
    obj10.type = InviteTypes.GUILD;
    return obj10;
  }
  const tmp3 = getEmbedThemeColorsDefault(theme);
}