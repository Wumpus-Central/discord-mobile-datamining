// === Module 12480: createGuildTemplateEmbed ===

// Module 12480 (createGuildTemplateEmbed)
import { Image } from "get ActivityIndicator";
import handleGuildTemplateResolveSuccess from "handleGuildTemplateResolveSuccess";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";
import { InviteTypes } from "InviteSendStates";

const result = require("GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx");

export const createGuildTemplateEmbed = function createGuildTemplateEmbed(code, closure_2) {
  let baseColors;
  let colors;
  ({ colors, baseColors } = importDefault(7851)(closure_2));
  guildTemplate = guildTemplate.getGuildTemplate(code);
  if (null == guildTemplate) {
    return null;
  } else if (guildTemplate.state === GuildTemplateStates.RESOLVING) {
    let obj = { headerText: null, resolvingGradientEnd: null, resolvingGradientStart: null, type: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.Xj87Yf).toUpperCase();
    ({ resolvingGradientEnd: obj4[1], resolvingGradientStart: obj4[2] } = colors);
    obj[3] = InviteTypes.GUILD;
    const merged = Object.assign(baseColors);
    return obj;
  } else if (guildTemplate.state === tmp17.EXPIRED) {
    obj = {};
    const merged1 = Object.assign(baseColors);
    const intl = require(1236) /* getSystemLocale */.intl;
    obj.headerText = intl.string(require(1236) /* getSystemLocale */.t.C7ZRNw).toUpperCase();
    let obj1 = require(7843) /* processColorOrThrow */;
    obj.titleColor = obj1.processColorOrThrow(tmp(712).unsafe_rawColors.RED_400);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj.titleText = intl2.string(require(1236) /* getSystemLocale */.t.A6MwXE);
    const str = intl.string(require(1236) /* getSystemLocale */.t.C7ZRNw);
    if (obj3.isThemeDark(closure_2)) {
      let tmpResult = tmp(11129);
    } else {
      tmpResult = tmp(11130);
    }
    obj.thumbnailUrl = Image.resolveAssetSource(tmpResult).uri;
    obj.thumbnailBackgroundColor = colors.thumbnailBackgroundColor;
    obj.type = InviteTypes.GUILD;
    return obj;
  } else {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj = { usageCount: null };
    obj[0] = guildTemplate.usageCount.toString();
    obj1 = {};
    const merged2 = Object.assign(baseColors);
    const intl5 = require(1236) /* getSystemLocale */.intl;
    const formatToPlainStringResult = intl4.formatToPlainString(require(1236) /* getSystemLocale */.t.L8Awgh, obj);
    const str3 = guildTemplate.usageCount;
    obj1.headerText = intl5.string(require(1236) /* getSystemLocale */.t.kAvFkO).toUpperCase();
    obj1.headerColor = colors.headerColor;
    obj1.titleText = guildTemplate.name;
    obj1.titleColor = colors.titleColor;
    obj1.subtitle = formatToPlainStringResult;
    obj1.subtitleColor = colors.subtitleColor;
    obj1.thumbnailUrl = Image.resolveAssetSource(tmp(12481)).uri;
    ({ acceptLabelGreenColor: obj6.acceptLabelColor, acceptLabelGreenBackgroundColor: obj6.acceptLabelBackgroundColor } = colors);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    obj1.acceptLabelText = intl6.string(require(1236) /* getSystemLocale */.t["a3Gl+e"]);
    obj1.embedCanBeTapped = true;
    obj1.type = InviteTypes.GUILD;
    return obj1;
  }
  const tmp3 = importDefault(7851)(closure_2);
};