// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx
import set from "../../../../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import getSystemLocale from "../../../../../../../intl/index.native.tsx";
import GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD from "../../../../../../guild_templates/GuildTemplatesConstants.tsx";
import InviteSendStates from "../../../../../../instant_invite/Constants.tsx";
import processColorOrThrow from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import closure_4 from "../../../../../../guild_templates/GuildTemplateStore.tsx";

const Image = get_ActivityIndicator.Image;
const GuildTemplateStates = GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD.GuildTemplateStates;
const InviteTypes = InviteSendStates.InviteTypes;
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx");

export const createGuildTemplateEmbed = function createGuildTemplateEmbed(code, closure_2) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(closure_2));
  guildTemplate = guildTemplate.getGuildTemplate(code);
  if (null == guildTemplate) {
    return null;
  } else if (guildTemplate.state === GuildTemplateStates.RESOLVING) {
    let obj = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t.Xj87Yf).toUpperCase();
    ({ resolvingGradientEnd: obj4[1], resolvingGradientStart: obj4[2] } = colors);
    obj[3] = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj;
  } else if (guildTemplate.state === tmp17.EXPIRED) {
    obj = {};
    const merged1 = Object.assign(baseColors);
    const intl = getSystemLocale.intl;
    obj.headerText = intl.string(getSystemLocale.t.C7ZRNw).toUpperCase();
    obj1 = processColorOrThrow;
    obj.titleColor = obj1.processColorOrThrow(tmp(712).unsafe_rawColors.RED_400);
    const intl2 = getSystemLocale.intl;
    obj.titleText = intl2.string(getSystemLocale.t.A6MwXE);
    const str = intl.string(getSystemLocale.t.C7ZRNw);
    if (obj3.isThemeDark(closure_2)) {
      let tmpResult = tmp(11381);
    } else {
      tmpResult = tmp(11382);
    }
    obj.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
    obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
    obj.type = InviteTypes.GUILD;
    return obj;
  } else {
    const intl4 = getSystemLocale.intl;
    obj = { usageCount: null };
    obj[0] = guildTemplate.usageCount.toString();
    obj1 = {};
    const merged2 = Object.assign(baseColors);
    const intl5 = getSystemLocale.intl;
    const formatToPlainStringResult = intl4.formatToPlainString(getSystemLocale.t.L8Awgh, obj);
    const str3 = guildTemplate.usageCount;
    obj1.headerText = intl5.string(getSystemLocale.t.kAvFkO).toUpperCase();
    obj1.headerColor = colors.headerColor;
    obj1.titleText = guildTemplate.name;
    obj1.titleColor = colors.titleColor;
    obj1.subtitle = formatToPlainStringResult;
    obj1.subtitleColor = colors.subtitleColor;
    obj1.thumbnailUrl = Image.resolveAssetSource(tmp(12885)).uri;
    ({ acceptLabelGreenColor: obj6.acceptLabelColor, acceptLabelGreenBackgroundColor: obj6.acceptLabelBackgroundColor } = colors);
    const intl6 = getSystemLocale.intl;
    obj1.acceptLabelText = intl6.string(getSystemLocale.t["a3Gl+e"]);
    obj1.embedCanBeTapped = true;
    obj1.type = InviteTypes.GUILD;
    return obj1;
  }
  const tmp3 = getEmbedThemeColorsDefault(closure_2);
};