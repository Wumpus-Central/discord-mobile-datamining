// === Module 13218: GuildTemplateEmbed ===

// Module 13218 (GuildTemplateEmbed)
import _mod17 from "module_17" /* 17 */;
import util from "util" /* 1114 */;
import GuildTemplatesConstants from "GuildTemplatesConstants" /* 7326 */;
import Constants from "Constants" /* 7736 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 7936 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7945 */;
import GuildTemplateStore from "GuildTemplateStore" /* 7457 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx");

export const createGuildTemplateEmbed = function createGuildTemplateEmbed(code, arg1) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(arg1));
  const guildTemplate = GuildTemplateStore.getGuildTemplate(code);
  if (null == guildTemplate) {
    return null;
  } else if (guildTemplate.state === GuildTemplateStates.RESOLVING) {
    let obj = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
    const intl3 = util.intl;
    obj.headerText = intl3.string(util.t.Xj87Yf).toUpperCase();
    ({ resolvingGradientEnd: obj4.resolvingGradientEnd, resolvingGradientStart: obj4.resolvingGradientStart } = colors);
    obj.type = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj;
  } else if (guildTemplate.state === tmp17.EXPIRED) {
    obj = {};
    const merged1 = Object.assign(baseColors);
    const intl = util.intl;
    obj.headerText = intl.string(util.t.C7ZRNw).toUpperCase();
    let obj1 = RowGeneratorStyleSheet;
    obj.titleColor = obj1.processColorOrThrow(tmp(576).unsafe_rawColors.RED_400);
    const intl2 = util.intl;
    obj.titleText = intl2.string(util.t.A6MwXE);
    const str = intl.string(util.t.C7ZRNw);
    if (obj3.isThemeDark(arg1)) {
      let tmpResult = tmp(11808);
    } else {
      tmpResult = tmp(11809);
    }
    obj.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
    obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
    obj.type = InviteTypes.GUILD;
    return obj;
  } else {
    const intl4 = util.intl;
    obj = { usageCount: guildTemplate.usageCount.toString() };
    obj1 = {};
    const merged2 = Object.assign(baseColors);
    const intl5 = util.intl;
    const formatToPlainStringResult = intl4.formatToPlainString(util.t.L8Awgh, obj);
    obj1.headerText = intl5.string(util.t.kAvFkO).toUpperCase();
    obj1.headerColor = colors.headerColor;
    obj1.titleText = guildTemplate.name;
    obj1.titleColor = colors.titleColor;
    obj1.subtitle = formatToPlainStringResult;
    obj1.subtitleColor = colors.subtitleColor;
    obj1.thumbnailUrl = Image.resolveAssetSource(tmp(13219)).uri;
    ({ acceptLabelGreenColor: obj6.acceptLabelColor, acceptLabelGreenBackgroundColor: obj6.acceptLabelBackgroundColor } = colors);
    const intl6 = util.intl;
    obj1.acceptLabelText = intl6.string(util.t["a3Gl+e"]);
    obj1.embedCanBeTapped = true;
    obj1.type = InviteTypes.GUILD;
    return obj1;
  }
  const tmp3 = getEmbedThemeColorsDefault(arg1);
};