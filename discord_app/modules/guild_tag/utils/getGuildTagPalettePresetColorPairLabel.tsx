// discord_app/modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx
import util from "../../../intl/index.native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import GuildTagConstants from "../GuildTagConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getGuildTagPalettePresetColorLabel(primary) {
  if (constants.HOT_PINK === primary) {
    const intl26 = util.intl;
    return intl26.string(util.t.DfOkjB);
  } else if (tmp.LIGHT_PINK === primary) {
    const intl25 = util.intl;
    return intl25.string(util.t["833OIT"]);
  } else if (tmp.ORANGE === primary) {
    const intl24 = util.intl;
    return intl24.string(util.t.i7TMkd);
  } else if (tmp.PEACH === primary) {
    const intl23 = util.intl;
    return intl23.string(util.t["uHgff/"]);
  } else if (tmp.GOLD === primary) {
    const intl22 = util.intl;
    return intl22.string(util.t.EpIKg1);
  } else if (tmp.LIGHT_YELLOW === primary) {
    const intl21 = util.intl;
    return intl21.string(util.t["i9+g+g"]);
  } else if (tmp.TEAL === primary) {
    const intl20 = util.intl;
    return intl20.string(util.t["m82c+Z"]);
  } else if (tmp.MINT_GREEN === primary) {
    const intl19 = util.intl;
    return intl19.string(util.t.xcoOBS);
  } else if (tmp.BLUE_TEAL === primary) {
    const intl18 = util.intl;
    return intl18.string(util.t["5QmjOP"]);
  } else if (tmp.LIGHT_BLUE === primary) {
    const intl17 = util.intl;
    return intl17.string(util.t["/MyjZS"]);
  } else if (tmp.PURPLE === primary) {
    const intl16 = util.intl;
    return intl16.string(util.t["jp+PMl"]);
  } else if (tmp.LAVENDER === primary) {
    const intl15 = util.intl;
    return intl15.string(util.t.aQjtas);
  } else if (tmp.VIOLET === primary) {
    const intl14 = util.intl;
    return intl14.string(util.t.WSnCYH);
  } else if (tmp.MAUVE === primary) {
    const intl13 = util.intl;
    return intl13.string(util.t.wh9c5W);
  } else if (tmp.DEEP_PURPLE === primary) {
    const intl12 = util.intl;
    return intl12.string(util.t.TP5bJs);
  } else if (tmp.ORCHID === primary) {
    const intl11 = util.intl;
    return intl11.string(util.t.jFf82F);
  } else if (tmp.RED === primary) {
    const intl10 = util.intl;
    return intl10.string(util.t.yUcPH5);
  } else if (tmp.SALMON === primary) {
    const intl9 = util.intl;
    return intl9.string(util.t["+HA2GW"]);
  } else if (tmp.BROWN === primary) {
    const intl8 = util.intl;
    return intl8.string(util.t.PI13GO);
  } else if (tmp.TAN === primary) {
    const intl7 = util.intl;
    return intl7.string(util.t.hZU6aR);
  } else if (tmp.OLIVE === primary) {
    const intl6 = util.intl;
    return intl6.string(util.t["1lKfMQ"]);
  } else if (tmp.GRAY === primary) {
    const intl5 = util.intl;
    return intl5.string(util.t["6Gh+v1"]);
  } else if (tmp.BURGUNDY === primary) {
    const intl4 = util.intl;
    return intl4.string(util.t.pvqjJg);
  } else if (tmp.ROSE === primary) {
    const intl3 = util.intl;
    return intl3.string(util.t.RMfRP9);
  } else if (tmp.DARK_GRAY === primary) {
    const intl2 = util.intl;
    return intl2.string(util.t.Ts4j0M);
  } else if (tmp.LIGHT_GRAY === primary) {
    const intl = util.intl;
    return intl.string(util.t.ZBQ1JR);
  } else {
    GlobalUtils.assertNever(primary);
  }
}
const constants = GuildTagConstants.GuildTagPalettePresetColor;
const result = size.fileFinishedImporting("modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx");

export default function getGuildTagPalettePresetColorPairLabel(primary, primary) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.g79C8T, {
    primaryColor: getGuildTagPalettePresetColorLabel(primary),
    secondaryColor: getGuildTagPalettePresetColorLabel(primary),
  });
}
export { getGuildTagPalettePresetColorLabel };
