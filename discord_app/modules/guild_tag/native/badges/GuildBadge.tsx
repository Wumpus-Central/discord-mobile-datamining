// === Module 13915: badges/GuildBadge ===

// Module 13915 (badges/GuildBadge)
import GuildBadgeSword from "GuildBadgeSword" /* 13916 */;
import GuildBadgeWaterDrop from "GuildBadgeWaterDrop" /* 13919 */;
import GuildBadgeSkull from "GuildBadgeSkull" /* 13920 */;
import GuildBadgeToadstool from "GuildBadgeToadstool" /* 13921 */;
import GuildBadgeMoon from "GuildBadgeMoon" /* 13922 */;
import GuildBadgeLightning from "GuildBadgeLightning" /* 13923 */;
import GuildBadgeLeaf from "GuildBadgeLeaf" /* 13924 */;
import GuildBadgeHeart from "GuildBadgeHeart" /* 13925 */;
import GuildBadgeFire from "GuildBadgeFire" /* 13926 */;
import GuildBadgeCompass from "GuildBadgeCompass" /* 13927 */;
import GuildBadgeCrosshairs from "GuildBadgeCrosshairs" /* 13928 */;
import GuildBadgeFlower from "GuildBadgeFlower" /* 13929 */;
import GuildBadgeForce from "GuildBadgeForce" /* 13930 */;
import GuildBadgeGem from "GuildBadgeGem" /* 13931 */;
import GuildBadgeLava from "GuildBadgeLava" /* 13932 */;
import GuildBadgePsychic from "GuildBadgePsychic" /* 13933 */;
import GuildBadgeSmoke from "GuildBadgeSmoke" /* 13934 */;
import GuildBadgeSnow from "GuildBadgeSnow" /* 13935 */;
import GuildBadgeSound from "GuildBadgeSound" /* 13936 */;
import GuildBadgeSun from "GuildBadgeSun" /* 13937 */;
import GuildBadgeWind from "GuildBadgeWind" /* 13938 */;
import GuildBadgeBunny from "GuildBadgeBunny" /* 13939 */;
import GuildBadgeDog from "GuildBadgeDog" /* 13940 */;
import GuildBadgeFrog from "GuildBadgeFrog" /* 13941 */;
import GuildBadgeGoat from "GuildBadgeGoat" /* 13942 */;
import GuildBadgeCat from "GuildBadgeCat" /* 13943 */;
import GuildBadgeDiamond from "GuildBadgeDiamond" /* 13944 */;
import GuildBadgeCrown from "GuildBadgeCrown" /* 13945 */;
import GuildBadgeTrophy from "GuildBadgeTrophy" /* 13946 */;
import GuildBadgeMoneyBag from "GuildBadgeMoneyBag" /* 13947 */;
import GuildBadgeDollarSign from "GuildBadgeDollarSign" /* 13948 */;
import GuildBadgeClover from "GuildBadgeClover" /* 13949 */;
import GuildBadgeBlossom from "GuildBadgeBlossom" /* 13950 */;
import GuildBadgePottedPlant from "GuildBadgePottedPlant" /* 13951 */;
import GuildBadgeMaple from "GuildBadgeMaple" /* 13952 */;
import GuildBadgeWiltedFlower from "GuildBadgeWiltedFlower" /* 13953 */;
import GuildBadgeButterfly from "GuildBadgeButterfly" /* 13954 */;
import GuildBadgeSnail from "GuildBadgeSnail" /* 13955 */;
import GuildBadgeCaterpillar from "GuildBadgeCaterpillar" /* 13956 */;
import GuildBadgeSpider from "GuildBadgeSpider" /* 13957 */;
import GuildBadgeBee from "GuildBadgeBee" /* 13958 */;
import noop from "module_19" /* 19 */;

require = fn;
const GuildTagBadgeKind = fn(7944).GuildTagBadgeKind;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = function GuildBadge(arg0) {
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  const merged = Object.assign(arg0, Object.assign({ badge: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  if (GuildTagBadgeKind.SWORD === badge) {
    let obj = { primaryTintColor, secondaryTintColor };
    const merged1 = Object.assign(merged);
    return jsx(GuildBadgeSword.GuildBadgeSword, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.WATER_DROP === badge) {
    obj = { primaryTintColor };
    const merged2 = Object.assign(merged);
    return jsx(GuildBadgeWaterDrop.GuildBadgeWaterDrop, { primaryTintColor });
  } else if (tmp2.SKULL === badge) {
    const obj1 = { primaryTintColor };
    const merged3 = Object.assign(merged);
    return jsx(GuildBadgeSkull.GuildBadgeSkull, { primaryTintColor });
  } else if (tmp2.TOADSTOOL === badge) {
    const obj2 = { primaryTintColor, secondaryTintColor };
    const merged4 = Object.assign(merged);
    return jsx(GuildBadgeToadstool.GuildBadgeToadstool, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.MOON === badge) {
    const obj3 = { primaryTintColor };
    const merged5 = Object.assign(merged);
    return jsx(GuildBadgeMoon.GuildBadgeMoon, { primaryTintColor });
  } else if (tmp2.LIGHTNING === badge) {
    const obj4 = { primaryTintColor };
    const merged6 = Object.assign(merged);
    return jsx(GuildBadgeLightning.GuildBadgeLightning, { primaryTintColor });
  } else if (tmp2.LEAF === badge) {
    const obj5 = { primaryTintColor };
    const merged7 = Object.assign(merged);
    return jsx(GuildBadgeLeaf.GuildBadgeLeaf, { primaryTintColor });
  } else if (tmp2.HEART === badge) {
    const obj6 = { primaryTintColor };
    const merged8 = Object.assign(merged);
    return jsx(GuildBadgeHeart.GuildBadgeHeart, { primaryTintColor });
  } else if (tmp2.FIRE === badge) {
    const obj7 = { primaryTintColor };
    const merged9 = Object.assign(merged);
    return jsx(GuildBadgeFire.GuildBadgeFire, { primaryTintColor });
  } else if (tmp2.COMPASS === badge) {
    const obj8 = { primaryTintColor, secondaryTintColor };
    const merged10 = Object.assign(merged);
    return jsx(GuildBadgeCompass.GuildBadgeCompass, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.CROSSHAIRS === badge) {
    const obj9 = { primaryTintColor, secondaryTintColor };
    const merged11 = Object.assign(merged);
    return jsx(GuildBadgeCrosshairs.GuildBadgeCrosshairs, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.FLOWER === badge) {
    const obj10 = { primaryTintColor, secondaryTintColor };
    const merged12 = Object.assign(merged);
    return jsx(GuildBadgeFlower.GuildBadgeFlower, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.FORCE === badge) {
    const obj11 = { primaryTintColor, secondaryTintColor };
    const merged13 = Object.assign(merged);
    return jsx(GuildBadgeForce.GuildBadgeForce, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.GEM === badge) {
    const obj12 = { primaryTintColor, secondaryTintColor };
    const merged14 = Object.assign(merged);
    return jsx(GuildBadgeGem.GuildBadgeGem, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.LAVA === badge) {
    const obj13 = { primaryTintColor, secondaryTintColor };
    const merged15 = Object.assign(merged);
    return jsx(GuildBadgeLava.GuildBadgeLava, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.PSYCHIC === badge) {
    const obj14 = { primaryTintColor, secondaryTintColor };
    const merged16 = Object.assign(merged);
    return jsx(GuildBadgePsychic.GuildBadgePsychic, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SMOKE === badge) {
    const obj15 = { primaryTintColor, secondaryTintColor };
    const merged17 = Object.assign(merged);
    return jsx(GuildBadgeSmoke.GuildBadgeSmoke, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SNOW === badge) {
    const obj16 = { primaryTintColor, secondaryTintColor };
    const merged18 = Object.assign(merged);
    return jsx(GuildBadgeSnow.GuildBadgeSnow, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SOUND === badge) {
    const obj17 = { primaryTintColor, secondaryTintColor };
    const merged19 = Object.assign(merged);
    return jsx(GuildBadgeSound.GuildBadgeSound, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SUN === badge) {
    const obj18 = { primaryTintColor, secondaryTintColor };
    const merged20 = Object.assign(merged);
    return jsx(GuildBadgeSun.GuildBadgeSun, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.WIND === badge) {
    const obj19 = { primaryTintColor, secondaryTintColor };
    const merged21 = Object.assign(merged);
    return jsx(GuildBadgeWind.GuildBadgeWind, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.BUNNY === badge) {
    const obj20 = { primaryTintColor };
    const merged22 = Object.assign(merged);
    return jsx(GuildBadgeBunny.GuildBadgeBunny, { primaryTintColor });
  } else if (tmp2.DOG === badge) {
    const obj21 = { primaryTintColor, secondaryTintColor };
    const merged23 = Object.assign(merged);
    return jsx(GuildBadgeDog.GuildBadgeDog, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.FROG === badge) {
    const obj22 = { primaryTintColor, secondaryTintColor };
    const merged24 = Object.assign(merged);
    return jsx(GuildBadgeFrog.GuildBadgeFrog, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.GOAT === badge) {
    const obj23 = { primaryTintColor };
    const merged25 = Object.assign(merged);
    return jsx(GuildBadgeGoat.GuildBadgeGoat, { primaryTintColor });
  } else if (tmp2.CAT === badge) {
    const obj24 = { primaryTintColor };
    const merged26 = Object.assign(merged);
    return jsx(GuildBadgeCat.GuildBadgeCat, { primaryTintColor });
  } else if (tmp2.DIAMOND === badge) {
    const obj25 = { primaryTintColor };
    const merged27 = Object.assign(merged);
    return jsx(GuildBadgeDiamond.GuildBadgeDiamond, { primaryTintColor });
  } else if (tmp2.CROWN === badge) {
    const obj26 = { primaryTintColor, secondaryTintColor };
    const merged28 = Object.assign(merged);
    return jsx(GuildBadgeCrown.GuildBadgeCrown, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.TROPHY === badge) {
    const obj27 = { primaryTintColor };
    const merged29 = Object.assign(merged);
    return jsx(GuildBadgeTrophy.GuildBadgeTrophy, { primaryTintColor });
  } else if (tmp2.MONEY_BAG === badge) {
    const obj28 = { primaryTintColor };
    const merged30 = Object.assign(merged);
    return jsx(GuildBadgeMoneyBag.GuildBadgeMoneyBag, { primaryTintColor });
  } else if (tmp2.DOLLAR_SIGN === badge) {
    const obj29 = { primaryTintColor };
    const merged31 = Object.assign(merged);
    return jsx(GuildBadgeDollarSign.GuildBadgeDollarSign, { primaryTintColor });
  } else if (tmp2.CLOVER === badge) {
    const obj30 = { primaryTintColor };
    const merged32 = Object.assign(merged);
    return jsx(GuildBadgeClover.GuildBadgeClover, { primaryTintColor });
  } else if (tmp2.BLOSSOM === badge) {
    const obj31 = { primaryTintColor };
    const merged33 = Object.assign(merged);
    return jsx(GuildBadgeBlossom.GuildBadgeBlossom, { primaryTintColor });
  } else if (tmp2.POTTED_PLANT === badge) {
    const obj32 = { primaryTintColor, secondaryTintColor };
    const merged34 = Object.assign(merged);
    return jsx(GuildBadgePottedPlant.GuildBadgePottedPlant, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.MAPLE === badge) {
    const obj33 = { primaryTintColor };
    const merged35 = Object.assign(merged);
    return jsx(GuildBadgeMaple.GuildBadgeMaple, { primaryTintColor });
  } else if (tmp2.WILTED_FLOWER === badge) {
    const obj34 = { primaryTintColor, secondaryTintColor };
    const merged36 = Object.assign(merged);
    return jsx(GuildBadgeWiltedFlower.GuildBadgeWiltedFlower, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.BUTTERFLY === badge) {
    const obj35 = { primaryTintColor, secondaryTintColor };
    const merged37 = Object.assign(merged);
    return jsx(GuildBadgeButterfly.GuildBadgeButterfly, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SNAIL === badge) {
    const obj36 = { primaryTintColor, secondaryTintColor };
    const merged38 = Object.assign(merged);
    return jsx(GuildBadgeSnail.GuildBadgeSnail, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.CATERPILLAR === badge) {
    const obj37 = { primaryTintColor, secondaryTintColor };
    const merged39 = Object.assign(merged);
    return jsx(GuildBadgeCaterpillar.GuildBadgeCaterpillar, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SPIDER === badge) {
    const obj38 = { primaryTintColor, secondaryTintColor };
    const merged40 = Object.assign(merged);
    return jsx(GuildBadgeSpider.GuildBadgeSpider, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.BEE === badge) {
    obj = { primaryTintColor };
    const merged41 = Object.assign(merged);
    return jsx(GuildBadgeBee.GuildBadgeBee, { primaryTintColor });
  } else {
    return null;
  }
};