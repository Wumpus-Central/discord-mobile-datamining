// === Module 13375: GuildBadge ===

// Module 13375 (GuildBadge)
import noopAll from "noop" /* 19 */;
import items from "items" /* 13376 */;
import items2 from "items" /* 13379 */;
import items3 from "items" /* 13380 */;
import items4 from "items" /* 13381 */;
import items5 from "items" /* 13382 */;
import items6 from "items" /* 13383 */;
import items7 from "items" /* 13384 */;
import items8 from "items" /* 13385 */;
import items9 from "items" /* 13386 */;
import items10 from "items" /* 13387 */;
import items11 from "items" /* 13388 */;
import items12 from "items" /* 13389 */;
import items13 from "items" /* 13390 */;
import items14 from "items" /* 13391 */;
import items15 from "items" /* 13392 */;
import items16 from "items" /* 13393 */;
import items17 from "items" /* 13394 */;
import items18 from "items" /* 13395 */;
import items19 from "items" /* 13396 */;
import items20 from "items" /* 13397 */;
import items21 from "items" /* 13398 */;
import items22 from "items" /* 13399 */;
import items23 from "items" /* 13400 */;
import items24 from "items" /* 13401 */;
import items25 from "items" /* 13402 */;
import items26 from "items" /* 13403 */;
import items27 from "items" /* 13404 */;
import items28 from "items" /* 13405 */;
import items29 from "items" /* 13406 */;
import items30 from "items" /* 13407 */;
import items31 from "items" /* 13408 */;
import items32 from "items" /* 13409 */;
import items33 from "items" /* 13410 */;
import items34 from "items" /* 13411 */;
import items35 from "items" /* 13412 */;
import items36 from "items" /* 13413 */;
import items37 from "items" /* 13414 */;
import items38 from "items" /* 13415 */;
import items39 from "items" /* 13416 */;
import items40 from "items" /* 13417 */;
import items41 from "items" /* 13418 */;
import { GuildTagBadgeKind } from "items" /* 8168 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = function GuildBadge(arg0) {
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  if (GuildTagBadgeKind.SWORD === badge) {
    let obj = { primaryTintColor: null, secondaryTintColor: null };
    obj[0] = primaryTintColor;
    obj[1] = secondaryTintColor;
    const merged1 = Object.assign(merged);
    return jsx(items.GuildBadgeSword, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.WATER_DROP === badge) {
    obj = { primaryTintColor: null };
    obj[0] = primaryTintColor;
    const merged2 = Object.assign(merged);
    return jsx(items2.GuildBadgeWaterDrop, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.SKULL === badge) {
    obj1 = { primaryTintColor: null };
    obj1[0] = primaryTintColor;
    const merged3 = Object.assign(merged);
    return jsx(items3.GuildBadgeSkull, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.TOADSTOOL === badge) {
    const obj2 = { primaryTintColor: null, secondaryTintColor: null };
    obj2[0] = primaryTintColor;
    obj2[1] = secondaryTintColor;
    const merged4 = Object.assign(merged);
    return jsx(items4.GuildBadgeToadstool, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.MOON === badge) {
    const obj3 = { primaryTintColor: null };
    obj3[0] = primaryTintColor;
    const merged5 = Object.assign(merged);
    return jsx(items5.GuildBadgeMoon, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.LIGHTNING === badge) {
    const obj4 = { primaryTintColor: null };
    obj4[0] = primaryTintColor;
    const merged6 = Object.assign(merged);
    return jsx(items6.GuildBadgeLightning, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.LEAF === badge) {
    const obj5 = { primaryTintColor: null };
    obj5[0] = primaryTintColor;
    const merged7 = Object.assign(merged);
    return jsx(items7.GuildBadgeLeaf, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.HEART === badge) {
    const obj6 = { primaryTintColor: null };
    obj6[0] = primaryTintColor;
    const merged8 = Object.assign(merged);
    return jsx(items8.GuildBadgeHeart, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.FIRE === badge) {
    const obj7 = { primaryTintColor: null };
    obj7[0] = primaryTintColor;
    const merged9 = Object.assign(merged);
    return jsx(items9.GuildBadgeFire, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.COMPASS === badge) {
    const obj8 = { primaryTintColor: null, secondaryTintColor: null };
    obj8[0] = primaryTintColor;
    obj8[1] = secondaryTintColor;
    const merged10 = Object.assign(merged);
    return jsx(items10.GuildBadgeCompass, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.CROSSHAIRS === badge) {
    const obj9 = { primaryTintColor: null, secondaryTintColor: null };
    obj9[0] = primaryTintColor;
    obj9[1] = secondaryTintColor;
    const merged11 = Object.assign(merged);
    return jsx(items11.GuildBadgeCrosshairs, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.FLOWER === badge) {
    const obj10 = { primaryTintColor: null, secondaryTintColor: null };
    obj10[0] = primaryTintColor;
    obj10[1] = secondaryTintColor;
    const merged12 = Object.assign(merged);
    return jsx(items12.GuildBadgeFlower, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.FORCE === badge) {
    const obj11 = { primaryTintColor: null, secondaryTintColor: null };
    obj11[0] = primaryTintColor;
    obj11[1] = secondaryTintColor;
    const merged13 = Object.assign(merged);
    return jsx(items13.GuildBadgeForce, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.GEM === badge) {
    const obj12 = { primaryTintColor: null, secondaryTintColor: null };
    obj12[0] = primaryTintColor;
    obj12[1] = secondaryTintColor;
    const merged14 = Object.assign(merged);
    return jsx(items14.GuildBadgeGem, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.LAVA === badge) {
    const obj13 = { primaryTintColor: null, secondaryTintColor: null };
    obj13[0] = primaryTintColor;
    obj13[1] = secondaryTintColor;
    const merged15 = Object.assign(merged);
    return jsx(items15.GuildBadgeLava, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.PSYCHIC === badge) {
    const obj14 = { primaryTintColor: null, secondaryTintColor: null };
    obj14[0] = primaryTintColor;
    obj14[1] = secondaryTintColor;
    const merged16 = Object.assign(merged);
    return jsx(items16.GuildBadgePsychic, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.SMOKE === badge) {
    const obj15 = { primaryTintColor: null, secondaryTintColor: null };
    obj15[0] = primaryTintColor;
    obj15[1] = secondaryTintColor;
    const merged17 = Object.assign(merged);
    return jsx(items17.GuildBadgeSmoke, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.SNOW === badge) {
    const obj16 = { primaryTintColor: null, secondaryTintColor: null };
    obj16[0] = primaryTintColor;
    obj16[1] = secondaryTintColor;
    const merged18 = Object.assign(merged);
    return jsx(items18.GuildBadgeSnow, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.SOUND === badge) {
    const obj17 = { primaryTintColor: null, secondaryTintColor: null };
    obj17[0] = primaryTintColor;
    obj17[1] = secondaryTintColor;
    const merged19 = Object.assign(merged);
    return jsx(items19.GuildBadgeSound, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.SUN === badge) {
    const obj18 = { primaryTintColor: null, secondaryTintColor: null };
    obj18[0] = primaryTintColor;
    obj18[1] = secondaryTintColor;
    const merged20 = Object.assign(merged);
    return jsx(items20.GuildBadgeSun, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.WIND === badge) {
    const obj19 = { primaryTintColor: null, secondaryTintColor: null };
    obj19[0] = primaryTintColor;
    obj19[1] = secondaryTintColor;
    const merged21 = Object.assign(merged);
    return jsx(items21.GuildBadgeWind, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.BUNNY === badge) {
    const obj20 = { primaryTintColor: null };
    obj20[0] = primaryTintColor;
    const merged22 = Object.assign(merged);
    return jsx(items22.GuildBadgeBunny, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.DOG === badge) {
    const obj21 = { primaryTintColor: null, secondaryTintColor: null };
    obj21[0] = primaryTintColor;
    obj21[1] = secondaryTintColor;
    const merged23 = Object.assign(merged);
    return jsx(items23.GuildBadgeDog, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.FROG === badge) {
    const obj22 = { primaryTintColor: null, secondaryTintColor: null };
    obj22[0] = primaryTintColor;
    obj22[1] = secondaryTintColor;
    const merged24 = Object.assign(merged);
    return jsx(items24.GuildBadgeFrog, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.GOAT === badge) {
    const obj23 = { primaryTintColor: null };
    obj23[0] = primaryTintColor;
    const merged25 = Object.assign(merged);
    return jsx(items25.GuildBadgeGoat, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.CAT === badge) {
    const obj24 = { primaryTintColor: null };
    obj24[0] = primaryTintColor;
    const merged26 = Object.assign(merged);
    return jsx(items26.GuildBadgeCat, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.DIAMOND === badge) {
    const obj25 = { primaryTintColor: null };
    obj25[0] = primaryTintColor;
    const merged27 = Object.assign(merged);
    return jsx(items27.GuildBadgeDiamond, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.CROWN === badge) {
    const obj26 = { primaryTintColor: null, secondaryTintColor: null };
    obj26[0] = primaryTintColor;
    obj26[1] = secondaryTintColor;
    const merged28 = Object.assign(merged);
    return jsx(items28.GuildBadgeCrown, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.TROPHY === badge) {
    const obj27 = { primaryTintColor: null };
    obj27[0] = primaryTintColor;
    const merged29 = Object.assign(merged);
    return jsx(items29.GuildBadgeTrophy, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.MONEY_BAG === badge) {
    const obj28 = { primaryTintColor: null };
    obj28[0] = primaryTintColor;
    const merged30 = Object.assign(merged);
    return jsx(items30.GuildBadgeMoneyBag, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.DOLLAR_SIGN === badge) {
    const obj29 = { primaryTintColor: null };
    obj29[0] = primaryTintColor;
    const merged31 = Object.assign(merged);
    return jsx(items31.GuildBadgeDollarSign, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.CLOVER === badge) {
    const obj30 = { primaryTintColor: null };
    obj30[0] = primaryTintColor;
    const merged32 = Object.assign(merged);
    return jsx(items32.GuildBadgeClover, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.BLOSSOM === badge) {
    const obj31 = { primaryTintColor: null };
    obj31[0] = primaryTintColor;
    const merged33 = Object.assign(merged);
    return jsx(items33.GuildBadgeBlossom, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.POTTED_PLANT === badge) {
    const obj32 = { primaryTintColor: null, secondaryTintColor: null };
    obj32[0] = primaryTintColor;
    obj32[1] = secondaryTintColor;
    const merged34 = Object.assign(merged);
    return jsx(items34.GuildBadgePottedPlant, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.MAPLE === badge) {
    const obj33 = { primaryTintColor: null };
    obj33[0] = primaryTintColor;
    const merged35 = Object.assign(merged);
    return jsx(items35.GuildBadgeMaple, { primaryTintColor: null });
  } else if (GuildTagBadgeKind.WILTED_FLOWER === badge) {
    const obj34 = { primaryTintColor: null, secondaryTintColor: null };
    obj34[0] = primaryTintColor;
    obj34[1] = secondaryTintColor;
    const merged36 = Object.assign(merged);
    return jsx(items36.GuildBadgeWiltedFlower, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.BUTTERFLY === badge) {
    const obj35 = { primaryTintColor: null, secondaryTintColor: null };
    obj35[0] = primaryTintColor;
    obj35[1] = secondaryTintColor;
    const merged37 = Object.assign(merged);
    return jsx(items37.GuildBadgeButterfly, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.SNAIL === badge) {
    const obj36 = { primaryTintColor: null, secondaryTintColor: null };
    obj36[0] = primaryTintColor;
    obj36[1] = secondaryTintColor;
    const merged38 = Object.assign(merged);
    return jsx(items38.GuildBadgeSnail, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.CATERPILLAR === badge) {
    const obj37 = { primaryTintColor: null, secondaryTintColor: null };
    obj37[0] = primaryTintColor;
    obj37[1] = secondaryTintColor;
    const merged39 = Object.assign(merged);
    return jsx(items39.GuildBadgeCaterpillar, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.SPIDER === badge) {
    const obj38 = { primaryTintColor: null, secondaryTintColor: null };
    obj38[0] = primaryTintColor;
    obj38[1] = secondaryTintColor;
    const merged40 = Object.assign(merged);
    return jsx(items40.GuildBadgeSpider, { primaryTintColor: null, secondaryTintColor: null });
  } else if (GuildTagBadgeKind.BEE === badge) {
    obj = { primaryTintColor: null };
    obj[0] = primaryTintColor;
    const merged41 = Object.assign(merged);
    return jsx(items41.GuildBadgeBee, { primaryTintColor: null });
  } else {
    return null;
  }
};