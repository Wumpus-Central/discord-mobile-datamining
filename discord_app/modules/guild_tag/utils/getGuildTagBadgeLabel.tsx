// === Module 17412: getGuildTagBadgeLabel ===

// Module 17412 (getGuildTagBadgeLabel)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1470 */;
import items from "items" /* 7862 */;

const GuildTagBadgeKind = items.GuildTagBadgeKind;
const result = set.fileFinishedImporting("modules/guild_tag/utils/getGuildTagBadgeLabel.tsx");

export default function getGuildTagBadgeLabel(arg0) {
  if (GuildTagBadgeKind.SWORD === arg0) {
    const intl41 = getSystemLocale.intl;
    return intl41.string(getSystemLocale.t["+4RpVO"]);
  } else if (tmp.WATER_DROP === arg0) {
    const intl40 = getSystemLocale.intl;
    return intl40.string(getSystemLocale.t["08tAb0"]);
  } else if (tmp.SKULL === arg0) {
    const intl39 = getSystemLocale.intl;
    return intl39.string(getSystemLocale.t["0opW02"]);
  } else if (tmp.TOADSTOOL === arg0) {
    const intl38 = getSystemLocale.intl;
    return intl38.string(getSystemLocale.t.M90TUl);
  } else if (tmp.MOON === arg0) {
    const intl37 = getSystemLocale.intl;
    return intl37.string(getSystemLocale.t.G8H5XZ);
  } else if (tmp.LIGHTNING === arg0) {
    const intl36 = getSystemLocale.intl;
    return intl36.string(getSystemLocale.t.hcPaJA);
  } else if (tmp.LEAF === arg0) {
    const intl35 = getSystemLocale.intl;
    return intl35.string(getSystemLocale.t.Zg3hHZ);
  } else if (tmp.HEART === arg0) {
    const intl34 = getSystemLocale.intl;
    return intl34.string(getSystemLocale.t.WjcnZD);
  } else if (tmp.FIRE === arg0) {
    const intl33 = getSystemLocale.intl;
    return intl33.string(getSystemLocale.t.OLVr2Z);
  } else if (tmp.COMPASS === arg0) {
    const intl32 = getSystemLocale.intl;
    return intl32.string(getSystemLocale.t.fSU0qj);
  } else if (tmp.CROSSHAIRS === arg0) {
    const intl31 = getSystemLocale.intl;
    return intl31.string(getSystemLocale.t.FImC7X);
  } else if (tmp.FLOWER === arg0) {
    const intl30 = getSystemLocale.intl;
    return intl30.string(getSystemLocale.t.Kswg0Y);
  } else if (tmp.FORCE === arg0) {
    const intl29 = getSystemLocale.intl;
    return intl29.string(getSystemLocale.t.ALJkb2);
  } else if (tmp.GEM === arg0) {
    const intl28 = getSystemLocale.intl;
    return intl28.string(getSystemLocale.t.Xpb5FV);
  } else if (tmp.LAVA === arg0) {
    const intl27 = getSystemLocale.intl;
    return intl27.string(getSystemLocale.t.Q9Mv1c);
  } else if (tmp.PSYCHIC === arg0) {
    const intl26 = getSystemLocale.intl;
    return intl26.string(getSystemLocale.t.qCL3jX);
  } else if (tmp.SMOKE === arg0) {
    const intl25 = getSystemLocale.intl;
    return intl25.string(getSystemLocale.t.HWyuRl);
  } else if (tmp.SNOW === arg0) {
    const intl24 = getSystemLocale.intl;
    return intl24.string(getSystemLocale.t["YTpD+b"]);
  } else if (tmp.SOUND === arg0) {
    const intl23 = getSystemLocale.intl;
    return intl23.string(getSystemLocale.t["8MDV4p"]);
  } else if (tmp.SUN === arg0) {
    const intl22 = getSystemLocale.intl;
    return intl22.string(getSystemLocale.t.q4KKjI);
  } else if (tmp.WIND === arg0) {
    const intl21 = getSystemLocale.intl;
    return intl21.string(getSystemLocale.t.jTxbHc);
  } else if (tmp.BUNNY === arg0) {
    const intl20 = getSystemLocale.intl;
    return intl20.string(getSystemLocale.t.s0jeu5);
  } else if (tmp.DOG === arg0) {
    const intl19 = getSystemLocale.intl;
    return intl19.string(getSystemLocale.t.teQDPB);
  } else if (tmp.FROG === arg0) {
    const intl18 = getSystemLocale.intl;
    return intl18.string(getSystemLocale.t.SAUCGD);
  } else if (tmp.GOAT === arg0) {
    const intl17 = getSystemLocale.intl;
    return intl17.string(getSystemLocale.t.Mpxtar);
  } else if (tmp.CAT === arg0) {
    const intl16 = getSystemLocale.intl;
    return intl16.string(getSystemLocale.t.qCpIw3);
  } else if (tmp.DIAMOND === arg0) {
    const intl15 = getSystemLocale.intl;
    return intl15.string(getSystemLocale.t["zE/nMU"]);
  } else if (tmp.CROWN === arg0) {
    const intl14 = getSystemLocale.intl;
    return intl14.string(getSystemLocale.t.Rp2AbV);
  } else if (tmp.TROPHY === arg0) {
    const intl13 = getSystemLocale.intl;
    return intl13.string(getSystemLocale.t.Jw25U0);
  } else if (tmp.MONEY_BAG === arg0) {
    const intl12 = getSystemLocale.intl;
    return intl12.string(getSystemLocale.t.s2U0Nw);
  } else if (tmp.DOLLAR_SIGN === arg0) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.AWIIQw);
  } else if (tmp.CLOVER === arg0) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t.ZzsbQp);
  } else if (tmp.BLOSSOM === arg0) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.uGSJSU);
  } else if (tmp.POTTED_PLANT === arg0) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.BGZKO9);
  } else if (tmp.MAPLE === arg0) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t.Rqq6To);
  } else if (tmp.WILTED_FLOWER === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.o1OjGD);
  } else if (tmp.BUTTERFLY === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t["76qj8a"]);
  } else if (tmp.SNAIL === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.mFQo1S);
  } else if (tmp.CATERPILLAR === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.fTwuEi);
  } else if (tmp.SPIDER === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.TzZYZM);
  } else if (tmp.BEE === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6euAa8"]);
  } else {
    isDiscordFrontendDevelopment.assertNever(arg0);
  }
};