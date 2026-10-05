// discord_app/modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx
import intl27 from "../../../intl/index.native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import GuildTagConstants from "../GuildTagConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getGuildTagPalettePresetColorLabel(primary) {
  if (constants.HOT_PINK === primary) {
    const intl26 = intl27.intl;
    return intl26.string(intl27.t.DfOkjB);
  } else if (constants.LIGHT_PINK === primary) {
    const intl25 = intl27.intl;
    return intl25.string(intl27.t["833OIT"]);
  } else if (constants.ORANGE === primary) {
    const intl24 = intl27.intl;
    return intl24.string(intl27.t.i7TMkd);
  } else if (constants.PEACH === primary) {
    const intl23 = intl27.intl;
    return intl23.string(intl27.t["uHgff/"]);
  } else if (constants.GOLD === primary) {
    const intl22 = intl27.intl;
    return intl22.string(intl27.t.EpIKg1);
  } else if (constants.LIGHT_YELLOW === primary) {
    const intl21 = intl27.intl;
    return intl21.string(intl27.t["i9+g+g"]);
  } else if (constants.TEAL === primary) {
    const intl20 = intl27.intl;
    return intl20.string(intl27.t["m82c+Z"]);
  } else if (constants.MINT_GREEN === primary) {
    const intl19 = intl27.intl;
    return intl19.string(intl27.t.xcoOBS);
  } else if (constants.BLUE_TEAL === primary) {
    const intl18 = intl27.intl;
    return intl18.string(intl27.t["5QmjOP"]);
  } else if (constants.LIGHT_BLUE === primary) {
    const intl17 = intl27.intl;
    return intl17.string(intl27.t["/MyjZS"]);
  } else if (constants.PURPLE === primary) {
    const intl16 = intl27.intl;
    return intl16.string(intl27.t["jp+PMl"]);
  } else if (constants.LAVENDER === primary) {
    const intl15 = intl27.intl;
    return intl15.string(intl27.t.aQjtas);
  } else if (constants.VIOLET === primary) {
    const intl14 = intl27.intl;
    return intl14.string(intl27.t.WSnCYH);
  } else if (constants.MAUVE === primary) {
    const intl13 = intl27.intl;
    return intl13.string(intl27.t.wh9c5W);
  } else if (constants.DEEP_PURPLE === primary) {
    const intl12 = intl27.intl;
    return intl12.string(intl27.t.TP5bJs);
  } else if (constants.ORCHID === primary) {
    const intl11 = intl27.intl;
    return intl11.string(intl27.t.jFf82F);
  } else if (constants.RED === primary) {
    const intl10 = intl27.intl;
    return intl10.string(intl27.t.yUcPH5);
  } else if (constants.SALMON === primary) {
    const intl9 = intl27.intl;
    return intl9.string(intl27.t["+HA2GW"]);
  } else if (constants.BROWN === primary) {
    const intl8 = intl27.intl;
    return intl8.string(intl27.t.PI13GO);
  } else if (constants.TAN === primary) {
    const intl7 = intl27.intl;
    return intl7.string(intl27.t.hZU6aR);
  } else if (constants.OLIVE === primary) {
    const intl6 = intl27.intl;
    return intl6.string(intl27.t["1lKfMQ"]);
  } else if (constants.GRAY === primary) {
    const intl5 = intl27.intl;
    return intl5.string(intl27.t["6Gh+v1"]);
  } else if (constants.BURGUNDY === primary) {
    const intl4 = intl27.intl;
    return intl4.string(intl27.t.pvqjJg);
  } else if (constants.ROSE === primary) {
    const intl3 = intl27.intl;
    return intl3.string(intl27.t.RMfRP9);
  } else if (constants.DARK_GRAY === primary) {
    const intl2 = intl27.intl;
    return intl2.string(intl27.t.Ts4j0M);
  } else if (constants.LIGHT_GRAY === primary) {
    const intl = intl27.intl;
    return intl.string(intl27.t.ZBQ1JR);
  } else {
    const obj = GlobalUtils;
    obj.assertNever(primary);
  }
}
const constants = GuildTagConstants.GuildTagPalettePresetColor;
const result = size.fileFinishedImporting("modules/guild_tag/utils/getGuildTagPalettePresetColorPairLabel.tsx");

export default function getGuildTagPalettePresetColorPairLabel(primary, primary2) {
  const intl = intl27.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = {
    primaryColor: getGuildTagPalettePresetColorLabel(primary),
    secondaryColor: getGuildTagPalettePresetColorLabel(primary),
  };
  const g79C8T = intl27.t.g79C8T;
  return formatToPlainString(g79C8T, obj);
}
export { getGuildTagPalettePresetColorLabel };
