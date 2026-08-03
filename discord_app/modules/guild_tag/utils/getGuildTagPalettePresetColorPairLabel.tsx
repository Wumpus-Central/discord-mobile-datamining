import { GuildTagPalettePresetColor as closure_2 } from "items";

function getGuildTagPalettePresetColorLabel(primary) {
  if (constants.HOT_PINK === primary) {
    const intl26 = require(1236) /* getSystemLocale */.intl;
    return intl26.string(require(1236) /* getSystemLocale */.t.DfOkjB);
  } else if (tmp.LIGHT_PINK === primary) {
    const intl25 = require(1236) /* getSystemLocale */.intl;
    return intl25.string(require(1236) /* getSystemLocale */.t["833OIT"]);
  } else if (tmp.ORANGE === primary) {
    const intl24 = require(1236) /* getSystemLocale */.intl;
    return intl24.string(require(1236) /* getSystemLocale */.t.i7TMkd);
  } else if (tmp.PEACH === primary) {
    const intl23 = require(1236) /* getSystemLocale */.intl;
    return intl23.string(require(1236) /* getSystemLocale */.t["uHgff/"]);
  } else if (tmp.GOLD === primary) {
    const intl22 = require(1236) /* getSystemLocale */.intl;
    return intl22.string(require(1236) /* getSystemLocale */.t.EpIKg1);
  } else if (tmp.LIGHT_YELLOW === primary) {
    const intl21 = require(1236) /* getSystemLocale */.intl;
    return intl21.string(require(1236) /* getSystemLocale */.t["i9+g+g"]);
  } else if (tmp.TEAL === primary) {
    const intl20 = require(1236) /* getSystemLocale */.intl;
    return intl20.string(require(1236) /* getSystemLocale */.t["m82c+Z"]);
  } else if (tmp.MINT_GREEN === primary) {
    const intl19 = require(1236) /* getSystemLocale */.intl;
    return intl19.string(require(1236) /* getSystemLocale */.t.xcoOBS);
  } else if (tmp.BLUE_TEAL === primary) {
    const intl18 = require(1236) /* getSystemLocale */.intl;
    return intl18.string(require(1236) /* getSystemLocale */.t["5QmjOP"]);
  } else if (tmp.LIGHT_BLUE === primary) {
    const intl17 = require(1236) /* getSystemLocale */.intl;
    return intl17.string(require(1236) /* getSystemLocale */.t["/MyjZS"]);
  } else if (tmp.PURPLE === primary) {
    const intl16 = require(1236) /* getSystemLocale */.intl;
    return intl16.string(require(1236) /* getSystemLocale */.t["jp+PMl"]);
  } else if (tmp.LAVENDER === primary) {
    const intl15 = require(1236) /* getSystemLocale */.intl;
    return intl15.string(require(1236) /* getSystemLocale */.t.aQjtas);
  } else if (tmp.VIOLET === primary) {
    const intl14 = require(1236) /* getSystemLocale */.intl;
    return intl14.string(require(1236) /* getSystemLocale */.t.WSnCYH);
  } else if (tmp.MAUVE === primary) {
    const intl13 = require(1236) /* getSystemLocale */.intl;
    return intl13.string(require(1236) /* getSystemLocale */.t.wh9c5W);
  } else if (tmp.DEEP_PURPLE === primary) {
    const intl12 = require(1236) /* getSystemLocale */.intl;
    return intl12.string(require(1236) /* getSystemLocale */.t.TP5bJs);
  } else if (tmp.ORCHID === primary) {
    const intl11 = require(1236) /* getSystemLocale */.intl;
    return intl11.string(require(1236) /* getSystemLocale */.t.jFf82F);
  } else if (tmp.RED === primary) {
    const intl10 = require(1236) /* getSystemLocale */.intl;
    return intl10.string(require(1236) /* getSystemLocale */.t.yUcPH5);
  } else if (tmp.SALMON === primary) {
    const intl9 = require(1236) /* getSystemLocale */.intl;
    return intl9.string(require(1236) /* getSystemLocale */.t["+HA2GW"]);
  } else if (tmp.BROWN === primary) {
    const intl8 = require(1236) /* getSystemLocale */.intl;
    return intl8.string(require(1236) /* getSystemLocale */.t.PI13GO);
  } else if (tmp.TAN === primary) {
    const intl7 = require(1236) /* getSystemLocale */.intl;
    return intl7.string(require(1236) /* getSystemLocale */.t.hZU6aR);
  } else if (tmp.OLIVE === primary) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    return intl6.string(require(1236) /* getSystemLocale */.t["1lKfMQ"]);
  } else if (tmp.GRAY === primary) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(require(1236) /* getSystemLocale */.t["6Gh+v1"]);
  } else if (tmp.BURGUNDY === primary) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.pvqjJg);
  } else if (tmp.ROSE === primary) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t.RMfRP9);
  } else if (tmp.DARK_GRAY === primary) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return intl2.string(require(1236) /* getSystemLocale */.t.Ts4j0M);
  } else if (tmp.LIGHT_GRAY === primary) {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ZBQ1JR);
  } else {
    require(1351) /* isDiscordFrontendDevelopment */.assertNever(primary);
  }
}
const result = require("isDiscordFrontendDevelopment").fileFinishedImporting("modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx");

export default function getGuildTagPalettePresetColorPairLabel(primary, primary) {
  const intl = require(1236) /* getSystemLocale */.intl;
  const obj = { primaryColor: null, secondaryColor: null };
  obj[0] = getGuildTagPalettePresetColorLabel(primary);
  obj[1] = getGuildTagPalettePresetColorLabel(primary);
  return intl.formatToPlainString(require(1236) /* getSystemLocale */.t.g79C8T, obj);
};
export { getGuildTagPalettePresetColorLabel };