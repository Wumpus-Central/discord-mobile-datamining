// === Module 14184: badges/GuildBadge ===

// Module 14184 (badges/GuildBadge)
import GuildBadgeSword from "GuildBadgeSword" /* 14185 */;
import GuildBadgeWaterDrop from "GuildBadgeWaterDrop" /* 14188 */;
import GuildBadgeSkull from "GuildBadgeSkull" /* 14189 */;
import GuildBadgeToadstool from "GuildBadgeToadstool" /* 14190 */;
import GuildBadgeMoon from "GuildBadgeMoon" /* 14191 */;
import GuildBadgeLightning from "GuildBadgeLightning" /* 14192 */;
import GuildBadgeLeaf from "GuildBadgeLeaf" /* 14193 */;
import GuildBadgeHeart from "GuildBadgeHeart" /* 14194 */;
import GuildBadgeFire from "GuildBadgeFire" /* 14195 */;
import GuildBadgeCompass from "GuildBadgeCompass" /* 14196 */;
import GuildBadgeCrosshairs from "GuildBadgeCrosshairs" /* 14197 */;
import GuildBadgeFlower from "GuildBadgeFlower" /* 14198 */;
import GuildBadgeForce from "GuildBadgeForce" /* 14199 */;
import GuildBadgeGem from "GuildBadgeGem" /* 14200 */;
import GuildBadgeLava from "GuildBadgeLava" /* 14201 */;
import GuildBadgePsychic from "GuildBadgePsychic" /* 14202 */;
import GuildBadgeSmoke from "GuildBadgeSmoke" /* 14203 */;
import GuildBadgeSnow from "GuildBadgeSnow" /* 14204 */;
import GuildBadgeSound from "GuildBadgeSound" /* 14205 */;
import GuildBadgeSun from "GuildBadgeSun" /* 14206 */;
import GuildBadgeWind from "GuildBadgeWind" /* 14207 */;
import GuildBadgeBunny from "GuildBadgeBunny" /* 14208 */;
import GuildBadgeDog from "GuildBadgeDog" /* 14209 */;
import GuildBadgeFrog from "GuildBadgeFrog" /* 14210 */;
import GuildBadgeGoat from "GuildBadgeGoat" /* 14211 */;
import GuildBadgeCat from "GuildBadgeCat" /* 14212 */;
import GuildBadgeDiamond from "GuildBadgeDiamond" /* 14213 */;
import GuildBadgeCrown from "GuildBadgeCrown" /* 14214 */;
import GuildBadgeTrophy from "GuildBadgeTrophy" /* 14215 */;
import GuildBadgeMoneyBag from "GuildBadgeMoneyBag" /* 14216 */;
import GuildBadgeDollarSign from "GuildBadgeDollarSign" /* 14217 */;
import GuildBadgeClover from "GuildBadgeClover" /* 14218 */;
import GuildBadgeBlossom from "GuildBadgeBlossom" /* 14219 */;
import GuildBadgePottedPlant from "GuildBadgePottedPlant" /* 14220 */;
import GuildBadgeMaple from "GuildBadgeMaple" /* 14221 */;
import GuildBadgeWiltedFlower from "GuildBadgeWiltedFlower" /* 14222 */;
import GuildBadgeButterfly from "GuildBadgeButterfly" /* 14223 */;
import GuildBadgeSnail from "GuildBadgeSnail" /* 14224 */;
import GuildBadgeCaterpillar from "GuildBadgeCaterpillar" /* 14225 */;
import GuildBadgeSpider from "GuildBadgeSpider" /* 14226 */;
import GuildBadgeBee from "GuildBadgeBee" /* 14227 */;
import noop from "module_19" /* 19 */;

require = fn;
const GuildTagBadgeKind = fn(8202).GuildTagBadgeKind;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = function GuildBadge(arg0) {
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  const merged = Object.assign(arg0, Object.assign({ badge: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  if (GuildTagBadgeKind.SWORD === badge) {
    const obj2 = { primaryTintColor, secondaryTintColor };
    const merged1 = Object.assign(merged);
    return jsx(GuildBadgeSword.GuildBadgeSword, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WATER_DROP === badge) {
    const obj3 = { primaryTintColor };
    const merged2 = Object.assign(merged);
    return jsx(GuildBadgeWaterDrop.GuildBadgeWaterDrop, { primaryTintColor });
  } else if (GuildTagBadgeKind.SKULL === badge) {
    const obj4 = { primaryTintColor };
    const merged3 = Object.assign(merged);
    return jsx(GuildBadgeSkull.GuildBadgeSkull, { primaryTintColor });
  } else if (GuildTagBadgeKind.TOADSTOOL === badge) {
    const obj5 = { primaryTintColor, secondaryTintColor };
    const merged4 = Object.assign(merged);
    return jsx(GuildBadgeToadstool.GuildBadgeToadstool, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MOON === badge) {
    const obj6 = { primaryTintColor };
    const merged5 = Object.assign(merged);
    return jsx(GuildBadgeMoon.GuildBadgeMoon, { primaryTintColor });
  } else if (GuildTagBadgeKind.LIGHTNING === badge) {
    const obj7 = { primaryTintColor };
    const merged6 = Object.assign(merged);
    return jsx(GuildBadgeLightning.GuildBadgeLightning, { primaryTintColor });
  } else if (GuildTagBadgeKind.LEAF === badge) {
    const obj8 = { primaryTintColor };
    const merged7 = Object.assign(merged);
    return jsx(GuildBadgeLeaf.GuildBadgeLeaf, { primaryTintColor });
  } else if (GuildTagBadgeKind.HEART === badge) {
    const obj9 = { primaryTintColor };
    const merged8 = Object.assign(merged);
    return jsx(GuildBadgeHeart.GuildBadgeHeart, { primaryTintColor });
  } else if (GuildTagBadgeKind.FIRE === badge) {
    const obj10 = { primaryTintColor };
    const merged9 = Object.assign(merged);
    return jsx(GuildBadgeFire.GuildBadgeFire, { primaryTintColor });
  } else if (GuildTagBadgeKind.COMPASS === badge) {
    const obj11 = { primaryTintColor, secondaryTintColor };
    const merged10 = Object.assign(merged);
    return jsx(GuildBadgeCompass.GuildBadgeCompass, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CROSSHAIRS === badge) {
    const obj12 = { primaryTintColor, secondaryTintColor };
    const merged11 = Object.assign(merged);
    return jsx(GuildBadgeCrosshairs.GuildBadgeCrosshairs, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FLOWER === badge) {
    const obj13 = { primaryTintColor, secondaryTintColor };
    const merged12 = Object.assign(merged);
    return jsx(GuildBadgeFlower.GuildBadgeFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FORCE === badge) {
    const obj14 = { primaryTintColor, secondaryTintColor };
    const merged13 = Object.assign(merged);
    return jsx(GuildBadgeForce.GuildBadgeForce, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GEM === badge) {
    const obj15 = { primaryTintColor, secondaryTintColor };
    const merged14 = Object.assign(merged);
    return jsx(GuildBadgeGem.GuildBadgeGem, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.LAVA === badge) {
    const obj16 = { primaryTintColor, secondaryTintColor };
    const merged15 = Object.assign(merged);
    return jsx(GuildBadgeLava.GuildBadgeLava, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.PSYCHIC === badge) {
    const obj17 = { primaryTintColor, secondaryTintColor };
    const merged16 = Object.assign(merged);
    return jsx(GuildBadgePsychic.GuildBadgePsychic, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SMOKE === badge) {
    const obj18 = { primaryTintColor, secondaryTintColor };
    const merged17 = Object.assign(merged);
    return jsx(GuildBadgeSmoke.GuildBadgeSmoke, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNOW === badge) {
    const obj19 = { primaryTintColor, secondaryTintColor };
    const merged18 = Object.assign(merged);
    return jsx(GuildBadgeSnow.GuildBadgeSnow, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SOUND === badge) {
    const obj20 = { primaryTintColor, secondaryTintColor };
    const merged19 = Object.assign(merged);
    return jsx(GuildBadgeSound.GuildBadgeSound, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SUN === badge) {
    const obj21 = { primaryTintColor, secondaryTintColor };
    const merged20 = Object.assign(merged);
    return jsx(GuildBadgeSun.GuildBadgeSun, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.WIND === badge) {
    const obj22 = { primaryTintColor, secondaryTintColor };
    const merged21 = Object.assign(merged);
    return jsx(GuildBadgeWind.GuildBadgeWind, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUNNY === badge) {
    const obj23 = { primaryTintColor };
    const merged22 = Object.assign(merged);
    return jsx(GuildBadgeBunny.GuildBadgeBunny, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOG === badge) {
    const obj24 = { primaryTintColor, secondaryTintColor };
    const merged23 = Object.assign(merged);
    return jsx(GuildBadgeDog.GuildBadgeDog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.FROG === badge) {
    const obj25 = { primaryTintColor, secondaryTintColor };
    const merged24 = Object.assign(merged);
    return jsx(GuildBadgeFrog.GuildBadgeFrog, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.GOAT === badge) {
    const obj26 = { primaryTintColor };
    const merged25 = Object.assign(merged);
    return jsx(GuildBadgeGoat.GuildBadgeGoat, { primaryTintColor });
  } else if (GuildTagBadgeKind.CAT === badge) {
    const obj27 = { primaryTintColor };
    const merged26 = Object.assign(merged);
    return jsx(GuildBadgeCat.GuildBadgeCat, { primaryTintColor });
  } else if (GuildTagBadgeKind.DIAMOND === badge) {
    const obj28 = { primaryTintColor };
    const merged27 = Object.assign(merged);
    return jsx(GuildBadgeDiamond.GuildBadgeDiamond, { primaryTintColor });
  } else if (GuildTagBadgeKind.CROWN === badge) {
    const obj29 = { primaryTintColor, secondaryTintColor };
    const merged28 = Object.assign(merged);
    return jsx(GuildBadgeCrown.GuildBadgeCrown, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.TROPHY === badge) {
    const obj30 = { primaryTintColor };
    const merged29 = Object.assign(merged);
    return jsx(GuildBadgeTrophy.GuildBadgeTrophy, { primaryTintColor });
  } else if (GuildTagBadgeKind.MONEY_BAG === badge) {
    const obj31 = { primaryTintColor };
    const merged30 = Object.assign(merged);
    return jsx(GuildBadgeMoneyBag.GuildBadgeMoneyBag, { primaryTintColor });
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === badge) {
    const obj32 = { primaryTintColor };
    const merged31 = Object.assign(merged);
    return jsx(GuildBadgeDollarSign.GuildBadgeDollarSign, { primaryTintColor });
  } else if (GuildTagBadgeKind.CLOVER === badge) {
    const obj33 = { primaryTintColor };
    const merged32 = Object.assign(merged);
    return jsx(GuildBadgeClover.GuildBadgeClover, { primaryTintColor });
  } else if (GuildTagBadgeKind.BLOSSOM === badge) {
    const obj34 = { primaryTintColor };
    const merged33 = Object.assign(merged);
    return jsx(GuildBadgeBlossom.GuildBadgeBlossom, { primaryTintColor });
  } else if (GuildTagBadgeKind.POTTED_PLANT === badge) {
    const obj35 = { primaryTintColor, secondaryTintColor };
    const merged34 = Object.assign(merged);
    return jsx(GuildBadgePottedPlant.GuildBadgePottedPlant, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.MAPLE === badge) {
    const obj36 = { primaryTintColor };
    const merged35 = Object.assign(merged);
    return jsx(GuildBadgeMaple.GuildBadgeMaple, { primaryTintColor });
  } else if (GuildTagBadgeKind.WILTED_FLOWER === badge) {
    const obj37 = { primaryTintColor, secondaryTintColor };
    const merged36 = Object.assign(merged);
    return jsx(GuildBadgeWiltedFlower.GuildBadgeWiltedFlower, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BUTTERFLY === badge) {
    const obj38 = { primaryTintColor, secondaryTintColor };
    const merged37 = Object.assign(merged);
    return jsx(GuildBadgeButterfly.GuildBadgeButterfly, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SNAIL === badge) {
    const obj39 = { primaryTintColor, secondaryTintColor };
    const merged38 = Object.assign(merged);
    return jsx(GuildBadgeSnail.GuildBadgeSnail, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.CATERPILLAR === badge) {
    const obj40 = { primaryTintColor, secondaryTintColor };
    const merged39 = Object.assign(merged);
    return jsx(GuildBadgeCaterpillar.GuildBadgeCaterpillar, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.SPIDER === badge) {
    const obj41 = { primaryTintColor, secondaryTintColor };
    const merged40 = Object.assign(merged);
    return jsx(GuildBadgeSpider.GuildBadgeSpider, { primaryTintColor, secondaryTintColor });
  } else if (GuildTagBadgeKind.BEE === badge) {
    const obj = { primaryTintColor };
    const merged41 = Object.assign(merged);
    return jsx(GuildBadgeBee.GuildBadgeBee, { primaryTintColor });
  } else {
    return null;
  }
};