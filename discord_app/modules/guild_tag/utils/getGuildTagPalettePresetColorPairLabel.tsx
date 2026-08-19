// === Module 16815: getGuildTagPalettePresetColorLabel ===

// Module 16815 (getGuildTagPalettePresetColorLabel)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import items from "items" /* 8168 */;

function getGuildTagPalettePresetColorLabel(primary) {
  if (constants.HOT_PINK === primary) {
    const intl26 = getSystemLocale.intl;
    return intl26.string(getSystemLocale.t.DfOkjB);
  } else if (constants.LIGHT_PINK === primary) {
    const intl25 = getSystemLocale.intl;
    return intl25.string(getSystemLocale.t["833OIT"]);
  } else if (constants.ORANGE === primary) {
    const intl24 = getSystemLocale.intl;
    return intl24.string(getSystemLocale.t.i7TMkd);
  } else if (constants.PEACH === primary) {
    const intl23 = getSystemLocale.intl;
    return intl23.string(getSystemLocale.t["uHgff/"]);
  } else if (constants.GOLD === primary) {
    const intl22 = getSystemLocale.intl;
    return intl22.string(getSystemLocale.t.EpIKg1);
  } else if (constants.LIGHT_YELLOW === primary) {
    const intl21 = getSystemLocale.intl;
    return intl21.string(getSystemLocale.t["i9+g+g"]);
  } else if (constants.TEAL === primary) {
    const intl20 = getSystemLocale.intl;
    return intl20.string(getSystemLocale.t["m82c+Z"]);
  } else if (constants.MINT_GREEN === primary) {
    const intl19 = getSystemLocale.intl;
    return intl19.string(getSystemLocale.t.xcoOBS);
  } else if (constants.BLUE_TEAL === primary) {
    const intl18 = getSystemLocale.intl;
    return intl18.string(getSystemLocale.t["5QmjOP"]);
  } else if (constants.LIGHT_BLUE === primary) {
    const intl17 = getSystemLocale.intl;
    return intl17.string(getSystemLocale.t["/MyjZS"]);
  } else if (constants.PURPLE === primary) {
    const intl16 = getSystemLocale.intl;
    return intl16.string(getSystemLocale.t["jp+PMl"]);
  } else if (constants.LAVENDER === primary) {
    const intl15 = getSystemLocale.intl;
    return intl15.string(getSystemLocale.t.aQjtas);
  } else if (constants.VIOLET === primary) {
    const intl14 = getSystemLocale.intl;
    return intl14.string(getSystemLocale.t.WSnCYH);
  } else if (constants.MAUVE === primary) {
    const intl13 = getSystemLocale.intl;
    return intl13.string(getSystemLocale.t.wh9c5W);
  } else if (constants.DEEP_PURPLE === primary) {
    const intl12 = getSystemLocale.intl;
    return intl12.string(getSystemLocale.t.TP5bJs);
  } else if (constants.ORCHID === primary) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.jFf82F);
  } else if (constants.RED === primary) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.yUcPH5);
  } else if (constants.SALMON === primary) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t["+HA2GW"]);
  } else if (constants.BROWN === primary) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.PI13GO);
  } else if (constants.TAN === primary) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.hZU6aR);
  } else if (constants.OLIVE === primary) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t["1lKfMQ"]);
  } else if (constants.GRAY === primary) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["6Gh+v1"]);
  } else if (constants.BURGUNDY === primary) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.pvqjJg);
  } else if (constants.ROSE === primary) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.RMfRP9);
  } else if (constants.DARK_GRAY === primary) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.Ts4j0M);
  } else if (constants.LIGHT_GRAY === primary) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ZBQ1JR);
  } else {
    isDiscordFrontendDevelopment.assertNever(primary);
  }
}
let closure_2 = items.GuildTagPalettePresetColor;
const result = obj132.fileFinishedImporting("modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx");

export default function getGuildTagPalettePresetColorPairLabel(primary, primary) {
  const intl = getSystemLocale.intl;
  return intl.formatToPlainString(getSystemLocale.t.g79C8T, { primaryColor: getGuildTagPalettePresetColorLabel(primary), secondaryColor: getGuildTagPalettePresetColorLabel(primary) });
};
export { getGuildTagPalettePresetColorLabel };