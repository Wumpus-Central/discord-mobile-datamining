// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx
import react_native from "../../../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../../../../../intl/index.native.tsx";
import shared from "../../../../../../../design/shared.tsx";
import GuildTemplatesConstants from "../../../../../../guild_templates/GuildTemplatesConstants.tsx";
import Constants from "../../../../../../instant_invite/Constants.tsx";
import react_native2 from "../../../RowGeneratorStyleSheet.tsx";
import getEmbedThemeColorsDefault from "../getEmbedThemeColors.tsx";
import AssetRegistryDefault from "../../../../../../../../_runtime/11418_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../../../_runtime/11419_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../../../../_runtime/13058_AssetRegistry.js";
import GuildTemplateStore from "../../../../../../guild_templates/GuildTemplateStore.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const Image = react_native.Image;
const GuildTemplateStates = GuildTemplatesConstants.GuildTemplateStates;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/GuildTemplateEmbed.tsx",
);

export const createGuildTemplateEmbed = function createGuildTemplateEmbed(code, theme) {
  let baseColors;
  let colors;
  let formatToPlainStringResult;
  let intl2;
  let intl6;
  let obj2;
  let resolveAssetSource;
  let str;
  let str2;
  let str3;
  let str4;
  let tmpResult;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const guildTemplate = GuildTemplateStore.getGuildTemplate(code);
  if (null == guildTemplate) {
    return null;
  } else if (guildTemplate.state === GuildTemplateStates.RESOLVING) {
    const obj5 = {
      headerText: str2.toUpperCase(),
      resolvingGradientEnd: null,
      resolvingGradientStart: null,
      type: InviteTypes.GUILD,
    };
    const intl3 = intl7.intl;
    ({ resolvingGradientEnd: obj4.resolvingGradientEnd, resolvingGradientStart: obj4.resolvingGradientStart } = colors);
    str2 = intl3.string(intl7.t.Xj87Yf);
    const merged = Object.assign(baseColors);
    return obj5;
  } else if (guildTemplate.state === tmp17.EXPIRED) {
    const obj = {
      headerText: str.toUpperCase(),
      titleColor: obj2.processColorOrThrow(nativeDefault.unsafe_rawColors.RED_400),
      titleText: intl2.string(intl7.t.A6MwXE),
      thumbnailUrl: resolveAssetSource(tmpResult).uri,
      thumbnailBackgroundColor: colors.thumbnailBackgroundColor,
      type: InviteTypes.GUILD,
    };
    const merged1 = Object.assign(baseColors);
    const intl = intl7.intl;
    str = intl.string(intl7.t.C7ZRNw);
    obj2 = react_native2;
    intl2 = intl7.intl;
    resolveAssetSource = Image.resolveAssetSource;
    const obj3 = shared;
    if (obj3.isThemeDark(theme)) {
      tmpResult = AssetRegistryDefault;
    } else {
      tmpResult = AssetRegistryDefault2;
    }
    return obj;
  } else {
    const intl4 = intl7.intl;
    const formatToPlainString = intl4.formatToPlainString;
    const obj9 = { usageCount: str3.toString() };
    str3 = guildTemplate.usageCount;
    const L8Awgh = intl7.t.L8Awgh;
    const obj10 = {
      headerText: str4.toUpperCase(),
      headerColor: colors.headerColor,
      titleText: guildTemplate.name,
      titleColor: colors.titleColor,
      subtitle: formatToPlainStringResult,
      subtitleColor: colors.subtitleColor,
      thumbnailUrl: Image.resolveAssetSource(AssetRegistryDefault3).uri,
      acceptLabelText: intl6.string(intl7.t["a3Gl+e"]),
      embedCanBeTapped: true,
      type: InviteTypes.GUILD,
    };
    formatToPlainStringResult = formatToPlainString(L8Awgh, obj9);
    const merged2 = Object.assign(baseColors);
    const intl5 = intl7.intl;
    ({
      acceptLabelGreenColor: obj6.acceptLabelColor,
      acceptLabelGreenBackgroundColor: obj6.acceptLabelBackgroundColor,
    } = colors);
    str4 = intl5.string(intl7.t.kAvFkO);
    intl6 = intl7.intl;
    return obj10;
  }
};
