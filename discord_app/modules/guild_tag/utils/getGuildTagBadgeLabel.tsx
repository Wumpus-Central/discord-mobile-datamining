// discord_app/modules/guild_tag/utils/getGuildTagBadgeLabel.tsx
import { GuildTagBadgeKind } from "items";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { isDiscordFrontendDevelopment } from "../../../utils/GlobalUtils.tsx";

const result = require("isDiscordFrontendDevelopment").fileFinishedImporting("modules/guild_tag/utils/getGuildTagBadgeLabel.tsx");

export default function getGuildTagBadgeLabel(arg0) {
  if (GuildTagBadgeKind.SWORD === arg0) {
    const intl41 = getSystemLocale /* getSystemLocale */.intl;
    return intl41.string(getSystemLocale /* getSystemLocale */.t["+4RpVO"]);
  } else if (tmp.WATER_DROP === arg0) {
    const intl40 = getSystemLocale /* getSystemLocale */.intl;
    return intl40.string(getSystemLocale /* getSystemLocale */.t["08tAb0"]);
  } else if (tmp.SKULL === arg0) {
    const intl39 = getSystemLocale /* getSystemLocale */.intl;
    return intl39.string(getSystemLocale /* getSystemLocale */.t["0opW02"]);
  } else if (tmp.TOADSTOOL === arg0) {
    const intl38 = getSystemLocale /* getSystemLocale */.intl;
    return intl38.string(getSystemLocale /* getSystemLocale */.t.M90TUl);
  } else if (tmp.MOON === arg0) {
    const intl37 = getSystemLocale /* getSystemLocale */.intl;
    return intl37.string(getSystemLocale /* getSystemLocale */.t.G8H5XZ);
  } else if (tmp.LIGHTNING === arg0) {
    const intl36 = getSystemLocale /* getSystemLocale */.intl;
    return intl36.string(getSystemLocale /* getSystemLocale */.t.hcPaJA);
  } else if (tmp.LEAF === arg0) {
    const intl35 = getSystemLocale /* getSystemLocale */.intl;
    return intl35.string(getSystemLocale /* getSystemLocale */.t.Zg3hHZ);
  } else if (tmp.HEART === arg0) {
    const intl34 = getSystemLocale /* getSystemLocale */.intl;
    return intl34.string(getSystemLocale /* getSystemLocale */.t.WjcnZD);
  } else if (tmp.FIRE === arg0) {
    const intl33 = getSystemLocale /* getSystemLocale */.intl;
    return intl33.string(getSystemLocale /* getSystemLocale */.t.OLVr2Z);
  } else if (tmp.COMPASS === arg0) {
    const intl32 = getSystemLocale /* getSystemLocale */.intl;
    return intl32.string(getSystemLocale /* getSystemLocale */.t.fSU0qj);
  } else if (tmp.CROSSHAIRS === arg0) {
    const intl31 = getSystemLocale /* getSystemLocale */.intl;
    return intl31.string(getSystemLocale /* getSystemLocale */.t.FImC7X);
  } else if (tmp.FLOWER === arg0) {
    const intl30 = getSystemLocale /* getSystemLocale */.intl;
    return intl30.string(getSystemLocale /* getSystemLocale */.t.Kswg0Y);
  } else if (tmp.FORCE === arg0) {
    const intl29 = getSystemLocale /* getSystemLocale */.intl;
    return intl29.string(getSystemLocale /* getSystemLocale */.t.ALJkb2);
  } else if (tmp.GEM === arg0) {
    const intl28 = getSystemLocale /* getSystemLocale */.intl;
    return intl28.string(getSystemLocale /* getSystemLocale */.t.Xpb5FV);
  } else if (tmp.LAVA === arg0) {
    const intl27 = getSystemLocale /* getSystemLocale */.intl;
    return intl27.string(getSystemLocale /* getSystemLocale */.t.Q9Mv1c);
  } else if (tmp.PSYCHIC === arg0) {
    const intl26 = getSystemLocale /* getSystemLocale */.intl;
    return intl26.string(getSystemLocale /* getSystemLocale */.t.qCL3jX);
  } else if (tmp.SMOKE === arg0) {
    const intl25 = getSystemLocale /* getSystemLocale */.intl;
    return intl25.string(getSystemLocale /* getSystemLocale */.t.HWyuRl);
  } else if (tmp.SNOW === arg0) {
    const intl24 = getSystemLocale /* getSystemLocale */.intl;
    return intl24.string(getSystemLocale /* getSystemLocale */.t["YTpD+b"]);
  } else if (tmp.SOUND === arg0) {
    const intl23 = getSystemLocale /* getSystemLocale */.intl;
    return intl23.string(getSystemLocale /* getSystemLocale */.t["8MDV4p"]);
  } else if (tmp.SUN === arg0) {
    const intl22 = getSystemLocale /* getSystemLocale */.intl;
    return intl22.string(getSystemLocale /* getSystemLocale */.t.q4KKjI);
  } else if (tmp.WIND === arg0) {
    const intl21 = getSystemLocale /* getSystemLocale */.intl;
    return intl21.string(getSystemLocale /* getSystemLocale */.t.jTxbHc);
  } else if (tmp.BUNNY === arg0) {
    const intl20 = getSystemLocale /* getSystemLocale */.intl;
    return intl20.string(getSystemLocale /* getSystemLocale */.t.s0jeu5);
  } else if (tmp.DOG === arg0) {
    const intl19 = getSystemLocale /* getSystemLocale */.intl;
    return intl19.string(getSystemLocale /* getSystemLocale */.t.teQDPB);
  } else if (tmp.FROG === arg0) {
    const intl18 = getSystemLocale /* getSystemLocale */.intl;
    return intl18.string(getSystemLocale /* getSystemLocale */.t.SAUCGD);
  } else if (tmp.GOAT === arg0) {
    const intl17 = getSystemLocale /* getSystemLocale */.intl;
    return intl17.string(getSystemLocale /* getSystemLocale */.t.Mpxtar);
  } else if (tmp.CAT === arg0) {
    const intl16 = getSystemLocale /* getSystemLocale */.intl;
    return intl16.string(getSystemLocale /* getSystemLocale */.t.qCpIw3);
  } else if (tmp.DIAMOND === arg0) {
    const intl15 = getSystemLocale /* getSystemLocale */.intl;
    return intl15.string(getSystemLocale /* getSystemLocale */.t["zE/nMU"]);
  } else if (tmp.CROWN === arg0) {
    const intl14 = getSystemLocale /* getSystemLocale */.intl;
    return intl14.string(getSystemLocale /* getSystemLocale */.t.Rp2AbV);
  } else if (tmp.TROPHY === arg0) {
    const intl13 = getSystemLocale /* getSystemLocale */.intl;
    return intl13.string(getSystemLocale /* getSystemLocale */.t.Jw25U0);
  } else if (tmp.MONEY_BAG === arg0) {
    const intl12 = getSystemLocale /* getSystemLocale */.intl;
    return intl12.string(getSystemLocale /* getSystemLocale */.t.s2U0Nw);
  } else if (tmp.DOLLAR_SIGN === arg0) {
    const intl11 = getSystemLocale /* getSystemLocale */.intl;
    return intl11.string(getSystemLocale /* getSystemLocale */.t.AWIIQw);
  } else if (tmp.CLOVER === arg0) {
    const intl10 = getSystemLocale /* getSystemLocale */.intl;
    return intl10.string(getSystemLocale /* getSystemLocale */.t.ZzsbQp);
  } else if (tmp.BLOSSOM === arg0) {
    const intl9 = getSystemLocale /* getSystemLocale */.intl;
    return intl9.string(getSystemLocale /* getSystemLocale */.t.uGSJSU);
  } else if (tmp.POTTED_PLANT === arg0) {
    const intl8 = getSystemLocale /* getSystemLocale */.intl;
    return intl8.string(getSystemLocale /* getSystemLocale */.t.BGZKO9);
  } else if (tmp.MAPLE === arg0) {
    const intl7 = getSystemLocale /* getSystemLocale */.intl;
    return intl7.string(getSystemLocale /* getSystemLocale */.t.Rqq6To);
  } else if (tmp.WILTED_FLOWER === arg0) {
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    return intl6.string(getSystemLocale /* getSystemLocale */.t.o1OjGD);
  } else if (tmp.BUTTERFLY === arg0) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    return intl5.string(getSystemLocale /* getSystemLocale */.t["76qj8a"]);
  } else if (tmp.SNAIL === arg0) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    return intl4.string(getSystemLocale /* getSystemLocale */.t.mFQo1S);
  } else if (tmp.CATERPILLAR === arg0) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    return intl3.string(getSystemLocale /* getSystemLocale */.t.fTwuEi);
  } else if (tmp.SPIDER === arg0) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.string(getSystemLocale /* getSystemLocale */.t.TzZYZM);
  } else if (tmp.BEE === arg0) {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["6euAa8"]);
  } else {
    isDiscordFrontendDevelopment /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
};