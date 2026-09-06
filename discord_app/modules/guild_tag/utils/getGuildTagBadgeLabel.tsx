// === Module 17592: getGuildTagBadgeLabel ===

// Module 17592 (getGuildTagBadgeLabel)
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import GuildTagConstants from "GuildTagConstants" /* 7944 */;
import size from "module_2" /* 2 */;

const GuildTagBadgeKind = GuildTagConstants.GuildTagBadgeKind;
const result = size.fileFinishedImporting("modules/guild_tag/utils/getGuildTagBadgeLabel.tsx");

export default function getGuildTagBadgeLabel(type) {
  if (GuildTagBadgeKind.SWORD === type) {
    const intl41 = util.intl;
    return intl41.string(util.t["+4RpVO"]);
  } else if (GuildTagBadgeKind.WATER_DROP === type) {
    const intl40 = util.intl;
    return intl40.string(util.t["08tAb0"]);
  } else if (GuildTagBadgeKind.SKULL === type) {
    const intl39 = util.intl;
    return intl39.string(util.t["0opW02"]);
  } else if (GuildTagBadgeKind.TOADSTOOL === type) {
    const intl38 = util.intl;
    return intl38.string(util.t.M90TUl);
  } else if (GuildTagBadgeKind.MOON === type) {
    const intl37 = util.intl;
    return intl37.string(util.t.G8H5XZ);
  } else if (GuildTagBadgeKind.LIGHTNING === type) {
    const intl36 = util.intl;
    return intl36.string(util.t.hcPaJA);
  } else if (GuildTagBadgeKind.LEAF === type) {
    const intl35 = util.intl;
    return intl35.string(util.t.Zg3hHZ);
  } else if (GuildTagBadgeKind.HEART === type) {
    const intl34 = util.intl;
    return intl34.string(util.t.WjcnZD);
  } else if (GuildTagBadgeKind.FIRE === type) {
    const intl33 = util.intl;
    return intl33.string(util.t.OLVr2Z);
  } else if (GuildTagBadgeKind.COMPASS === type) {
    const intl32 = util.intl;
    return intl32.string(util.t.fSU0qj);
  } else if (GuildTagBadgeKind.CROSSHAIRS === type) {
    const intl31 = util.intl;
    return intl31.string(util.t.FImC7X);
  } else if (GuildTagBadgeKind.FLOWER === type) {
    const intl30 = util.intl;
    return intl30.string(util.t.Kswg0Y);
  } else if (GuildTagBadgeKind.FORCE === type) {
    const intl29 = util.intl;
    return intl29.string(util.t.ALJkb2);
  } else if (GuildTagBadgeKind.GEM === type) {
    const intl28 = util.intl;
    return intl28.string(util.t.Xpb5FV);
  } else if (GuildTagBadgeKind.LAVA === type) {
    const intl27 = util.intl;
    return intl27.string(util.t.Q9Mv1c);
  } else if (GuildTagBadgeKind.PSYCHIC === type) {
    const intl26 = util.intl;
    return intl26.string(util.t.qCL3jX);
  } else if (GuildTagBadgeKind.SMOKE === type) {
    const intl25 = util.intl;
    return intl25.string(util.t.HWyuRl);
  } else if (GuildTagBadgeKind.SNOW === type) {
    const intl24 = util.intl;
    return intl24.string(util.t["YTpD+b"]);
  } else if (GuildTagBadgeKind.SOUND === type) {
    const intl23 = util.intl;
    return intl23.string(util.t["8MDV4p"]);
  } else if (GuildTagBadgeKind.SUN === type) {
    const intl22 = util.intl;
    return intl22.string(util.t.q4KKjI);
  } else if (GuildTagBadgeKind.WIND === type) {
    const intl21 = util.intl;
    return intl21.string(util.t.jTxbHc);
  } else if (GuildTagBadgeKind.BUNNY === type) {
    const intl20 = util.intl;
    return intl20.string(util.t.s0jeu5);
  } else if (GuildTagBadgeKind.DOG === type) {
    const intl19 = util.intl;
    return intl19.string(util.t.teQDPB);
  } else if (GuildTagBadgeKind.FROG === type) {
    const intl18 = util.intl;
    return intl18.string(util.t.SAUCGD);
  } else if (GuildTagBadgeKind.GOAT === type) {
    const intl17 = util.intl;
    return intl17.string(util.t.Mpxtar);
  } else if (GuildTagBadgeKind.CAT === type) {
    const intl16 = util.intl;
    return intl16.string(util.t.qCpIw3);
  } else if (GuildTagBadgeKind.DIAMOND === type) {
    const intl15 = util.intl;
    return intl15.string(util.t["zE/nMU"]);
  } else if (GuildTagBadgeKind.CROWN === type) {
    const intl14 = util.intl;
    return intl14.string(util.t.Rp2AbV);
  } else if (GuildTagBadgeKind.TROPHY === type) {
    const intl13 = util.intl;
    return intl13.string(util.t.Jw25U0);
  } else if (GuildTagBadgeKind.MONEY_BAG === type) {
    const intl12 = util.intl;
    return intl12.string(util.t.s2U0Nw);
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === type) {
    const intl11 = util.intl;
    return intl11.string(util.t.AWIIQw);
  } else if (GuildTagBadgeKind.CLOVER === type) {
    const intl10 = util.intl;
    return intl10.string(util.t.ZzsbQp);
  } else if (GuildTagBadgeKind.BLOSSOM === type) {
    const intl9 = util.intl;
    return intl9.string(util.t.uGSJSU);
  } else if (GuildTagBadgeKind.POTTED_PLANT === type) {
    const intl8 = util.intl;
    return intl8.string(util.t.BGZKO9);
  } else if (GuildTagBadgeKind.MAPLE === type) {
    const intl7 = util.intl;
    return intl7.string(util.t.Rqq6To);
  } else if (GuildTagBadgeKind.WILTED_FLOWER === type) {
    const intl6 = util.intl;
    return intl6.string(util.t.o1OjGD);
  } else if (GuildTagBadgeKind.BUTTERFLY === type) {
    const intl5 = util.intl;
    return intl5.string(util.t["76qj8a"]);
  } else if (GuildTagBadgeKind.SNAIL === type) {
    const intl4 = util.intl;
    return intl4.string(util.t.mFQo1S);
  } else if (GuildTagBadgeKind.CATERPILLAR === type) {
    const intl3 = util.intl;
    return intl3.string(util.t.fTwuEi);
  } else if (GuildTagBadgeKind.SPIDER === type) {
    const intl2 = util.intl;
    return intl2.string(util.t.TzZYZM);
  } else if (GuildTagBadgeKind.BEE === type) {
    const intl = util.intl;
    return intl.string(util.t["6euAa8"]);
  } else {
    GlobalUtils.assertNever(type);
  }
};