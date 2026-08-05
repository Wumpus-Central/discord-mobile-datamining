import { getSystemLocale } from "../../../intl/index.native.tsx";
import { isDiscordFrontendDevelopment } from "../../../utils/GlobalUtils.tsx";
// discord_app/modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx
import { GuildTagPalettePresetColor as closure_2 } from "items";

function getGuildTagPalettePresetColorLabel(primary) {
  if (constants.HOT_PINK === primary) {
    const intl26 = getSystemLocale /* getSystemLocale */.intl;
    return intl26.string(getSystemLocale /* getSystemLocale */.t.DfOkjB);
  } else if (tmp.LIGHT_PINK === primary) {
    const intl25 = getSystemLocale /* getSystemLocale */.intl;
    return intl25.string(getSystemLocale /* getSystemLocale */.t["833OIT"]);
  } else if (tmp.ORANGE === primary) {
    const intl24 = getSystemLocale /* getSystemLocale */.intl;
    return intl24.string(getSystemLocale /* getSystemLocale */.t.i7TMkd);
  } else if (tmp.PEACH === primary) {
    const intl23 = getSystemLocale /* getSystemLocale */.intl;
    return intl23.string(getSystemLocale /* getSystemLocale */.t["uHgff/"]);
  } else if (tmp.GOLD === primary) {
    const intl22 = getSystemLocale /* getSystemLocale */.intl;
    return intl22.string(getSystemLocale /* getSystemLocale */.t.EpIKg1);
  } else if (tmp.LIGHT_YELLOW === primary) {
    const intl21 = getSystemLocale /* getSystemLocale */.intl;
    return intl21.string(getSystemLocale /* getSystemLocale */.t["i9+g+g"]);
  } else if (tmp.TEAL === primary) {
    const intl20 = getSystemLocale /* getSystemLocale */.intl;
    return intl20.string(getSystemLocale /* getSystemLocale */.t["m82c+Z"]);
  } else if (tmp.MINT_GREEN === primary) {
    const intl19 = getSystemLocale /* getSystemLocale */.intl;
    return intl19.string(getSystemLocale /* getSystemLocale */.t.xcoOBS);
  } else if (tmp.BLUE_TEAL === primary) {
    const intl18 = getSystemLocale /* getSystemLocale */.intl;
    return intl18.string(getSystemLocale /* getSystemLocale */.t["5QmjOP"]);
  } else if (tmp.LIGHT_BLUE === primary) {
    const intl17 = getSystemLocale /* getSystemLocale */.intl;
    return intl17.string(getSystemLocale /* getSystemLocale */.t["/MyjZS"]);
  } else if (tmp.PURPLE === primary) {
    const intl16 = getSystemLocale /* getSystemLocale */.intl;
    return intl16.string(getSystemLocale /* getSystemLocale */.t["jp+PMl"]);
  } else if (tmp.LAVENDER === primary) {
    const intl15 = getSystemLocale /* getSystemLocale */.intl;
    return intl15.string(getSystemLocale /* getSystemLocale */.t.aQjtas);
  } else if (tmp.VIOLET === primary) {
    const intl14 = getSystemLocale /* getSystemLocale */.intl;
    return intl14.string(getSystemLocale /* getSystemLocale */.t.WSnCYH);
  } else if (tmp.MAUVE === primary) {
    const intl13 = getSystemLocale /* getSystemLocale */.intl;
    return intl13.string(getSystemLocale /* getSystemLocale */.t.wh9c5W);
  } else if (tmp.DEEP_PURPLE === primary) {
    const intl12 = getSystemLocale /* getSystemLocale */.intl;
    return intl12.string(getSystemLocale /* getSystemLocale */.t.TP5bJs);
  } else if (tmp.ORCHID === primary) {
    const intl11 = getSystemLocale /* getSystemLocale */.intl;
    return intl11.string(getSystemLocale /* getSystemLocale */.t.jFf82F);
  } else if (tmp.RED === primary) {
    const intl10 = getSystemLocale /* getSystemLocale */.intl;
    return intl10.string(getSystemLocale /* getSystemLocale */.t.yUcPH5);
  } else if (tmp.SALMON === primary) {
    const intl9 = getSystemLocale /* getSystemLocale */.intl;
    return intl9.string(getSystemLocale /* getSystemLocale */.t["+HA2GW"]);
  } else if (tmp.BROWN === primary) {
    const intl8 = getSystemLocale /* getSystemLocale */.intl;
    return intl8.string(getSystemLocale /* getSystemLocale */.t.PI13GO);
  } else if (tmp.TAN === primary) {
    const intl7 = getSystemLocale /* getSystemLocale */.intl;
    return intl7.string(getSystemLocale /* getSystemLocale */.t.hZU6aR);
  } else if (tmp.OLIVE === primary) {
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    return intl6.string(getSystemLocale /* getSystemLocale */.t["1lKfMQ"]);
  } else if (tmp.GRAY === primary) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    return intl5.string(getSystemLocale /* getSystemLocale */.t["6Gh+v1"]);
  } else if (tmp.BURGUNDY === primary) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    return intl4.string(getSystemLocale /* getSystemLocale */.t.pvqjJg);
  } else if (tmp.ROSE === primary) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    return intl3.string(getSystemLocale /* getSystemLocale */.t.RMfRP9);
  } else if (tmp.DARK_GRAY === primary) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.string(getSystemLocale /* getSystemLocale */.t.Ts4j0M);
  } else if (tmp.LIGHT_GRAY === primary) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.ZBQ1JR);
  } else {
    isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */.assertNever(primary);
  }
}
const result = require("isDiscordFrontendDevelopment").fileFinishedImporting("modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx");

export default function getGuildTagPalettePresetColorPairLabel(primary, primary) {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  const obj = { primaryColor: null, secondaryColor: null };
  obj[0] = getGuildTagPalettePresetColorLabel(primary);
  obj[1] = getGuildTagPalettePresetColorLabel(primary);
  return intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t.g79C8T, obj);
};
export { getGuildTagPalettePresetColorLabel };