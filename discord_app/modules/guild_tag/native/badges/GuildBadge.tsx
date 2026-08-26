// === Module 13541: GuildBadge ===

// Module 13541 (GuildBadge)
import noopAll from "noop" /* 19 */;
import items from "items" /* 13542 */;
import items2 from "items" /* 13545 */;
import items3 from "items" /* 13546 */;
import items4 from "items" /* 13547 */;
import items5 from "items" /* 13548 */;
import items6 from "items" /* 13549 */;
import items7 from "items" /* 13550 */;
import items8 from "items" /* 13551 */;
import items9 from "items" /* 13552 */;
import items10 from "items" /* 13553 */;
import items11 from "items" /* 13554 */;
import items12 from "items" /* 13555 */;
import items13 from "items" /* 13556 */;
import items14 from "items" /* 13557 */;
import items15 from "items" /* 13558 */;
import items16 from "items" /* 13559 */;
import items17 from "items" /* 13560 */;
import items18 from "items" /* 13561 */;
import items19 from "items" /* 13562 */;
import items20 from "items" /* 13563 */;
import items21 from "items" /* 13564 */;
import items22 from "items" /* 13565 */;
import items23 from "items" /* 13566 */;
import items24 from "items" /* 13567 */;
import items25 from "items" /* 13568 */;
import items26 from "items" /* 13569 */;
import items27 from "items" /* 13570 */;
import items28 from "items" /* 13571 */;
import items29 from "items" /* 13572 */;
import items30 from "items" /* 13573 */;
import items31 from "items" /* 13574 */;
import items32 from "items" /* 13575 */;
import items33 from "items" /* 13576 */;
import items34 from "items" /* 13577 */;
import items35 from "items" /* 13578 */;
import items36 from "items" /* 13579 */;
import items37 from "items" /* 13580 */;
import items38 from "items" /* 13581 */;
import items39 from "items" /* 13582 */;
import items40 from "items" /* 13583 */;
import items41 from "items" /* 13584 */;
import { GuildTagBadgeKind } from "items" /* 8270 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = function GuildBadge(arg0) {
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  let merged = Object.assign(arg0, Object.create(null));
  if (GuildTagBadgeKind.SWORD === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    let obj = { primaryTintColor: null, secondaryTintColor: null };
    obj[0] = primaryTintColor;
    obj[1] = secondaryTintColor;
    merged = obj;
    merged = Object.assign(merged);
    return jsx(items.GuildBadgeSword, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.WATER_DROP === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    obj = { primaryTintColor: null };
    obj[0] = primaryTintColor;
    merged = obj;
    merged = Object.assign(merged);
    return jsx(items2.GuildBadgeWaterDrop, { primaryTintColor: null });
  } else if (tmp2.SKULL === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    obj1 = { primaryTintColor: null };
    obj1[0] = primaryTintColor;
    merged = obj1;
    merged = Object.assign(merged);
    return jsx(items3.GuildBadgeSkull, { primaryTintColor: null });
  } else if (tmp2.TOADSTOOL === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj2 = { primaryTintColor: null, secondaryTintColor: null };
    obj2[0] = primaryTintColor;
    obj2[1] = secondaryTintColor;
    merged = obj2;
    merged = Object.assign(merged);
    return jsx(items4.GuildBadgeToadstool, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.MOON === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj3 = { primaryTintColor: null };
    obj3[0] = primaryTintColor;
    merged = obj3;
    merged = Object.assign(merged);
    return jsx(items5.GuildBadgeMoon, { primaryTintColor: null });
  } else if (tmp2.LIGHTNING === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj4 = { primaryTintColor: null };
    obj4[0] = primaryTintColor;
    merged = obj4;
    merged = Object.assign(merged);
    return jsx(items6.GuildBadgeLightning, { primaryTintColor: null });
  } else if (tmp2.LEAF === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj5 = { primaryTintColor: null };
    obj5[0] = primaryTintColor;
    merged = obj5;
    merged = Object.assign(merged);
    return jsx(items7.GuildBadgeLeaf, { primaryTintColor: null });
  } else if (tmp2.HEART === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj6 = { primaryTintColor: null };
    obj6[0] = primaryTintColor;
    merged = obj6;
    merged = Object.assign(merged);
    return jsx(items8.GuildBadgeHeart, { primaryTintColor: null });
  } else if (tmp2.FIRE === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj7 = { primaryTintColor: null };
    obj7[0] = primaryTintColor;
    merged = obj7;
    merged = Object.assign(merged);
    return jsx(items9.GuildBadgeFire, { primaryTintColor: null });
  } else if (tmp2.COMPASS === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj8 = { primaryTintColor: null, secondaryTintColor: null };
    obj8[0] = primaryTintColor;
    obj8[1] = secondaryTintColor;
    merged = obj8;
    merged = Object.assign(merged);
    return jsx(items10.GuildBadgeCompass, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.CROSSHAIRS === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj9 = { primaryTintColor: null, secondaryTintColor: null };
    obj9[0] = primaryTintColor;
    obj9[1] = secondaryTintColor;
    merged = obj9;
    merged = Object.assign(merged);
    return jsx(items11.GuildBadgeCrosshairs, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.FLOWER === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj10 = { primaryTintColor: null, secondaryTintColor: null };
    obj10[0] = primaryTintColor;
    obj10[1] = secondaryTintColor;
    merged = obj10;
    merged = Object.assign(merged);
    return jsx(items12.GuildBadgeFlower, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.FORCE === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj11 = { primaryTintColor: null, secondaryTintColor: null };
    obj11[0] = primaryTintColor;
    obj11[1] = secondaryTintColor;
    merged = obj11;
    merged = Object.assign(merged);
    return jsx(items13.GuildBadgeForce, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.GEM === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj12 = { primaryTintColor: null, secondaryTintColor: null };
    obj12[0] = primaryTintColor;
    obj12[1] = secondaryTintColor;
    merged = obj12;
    merged = Object.assign(merged);
    return jsx(items14.GuildBadgeGem, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.LAVA === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj13 = { primaryTintColor: null, secondaryTintColor: null };
    obj13[0] = primaryTintColor;
    obj13[1] = secondaryTintColor;
    merged = obj13;
    merged = Object.assign(merged);
    return jsx(items15.GuildBadgeLava, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.PSYCHIC === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj14 = { primaryTintColor: null, secondaryTintColor: null };
    obj14[0] = primaryTintColor;
    obj14[1] = secondaryTintColor;
    merged = obj14;
    merged = Object.assign(merged);
    return jsx(items16.GuildBadgePsychic, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SMOKE === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj15 = { primaryTintColor: null, secondaryTintColor: null };
    obj15[0] = primaryTintColor;
    obj15[1] = secondaryTintColor;
    merged = obj15;
    merged = Object.assign(merged);
    return jsx(items17.GuildBadgeSmoke, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SNOW === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj16 = { primaryTintColor: null, secondaryTintColor: null };
    obj16[0] = primaryTintColor;
    obj16[1] = secondaryTintColor;
    merged = obj16;
    merged = Object.assign(merged);
    return jsx(items18.GuildBadgeSnow, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SOUND === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj17 = { primaryTintColor: null, secondaryTintColor: null };
    obj17[0] = primaryTintColor;
    obj17[1] = secondaryTintColor;
    merged = obj17;
    merged = Object.assign(merged);
    return jsx(items19.GuildBadgeSound, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SUN === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj18 = { primaryTintColor: null, secondaryTintColor: null };
    obj18[0] = primaryTintColor;
    obj18[1] = secondaryTintColor;
    merged = obj18;
    merged = Object.assign(merged);
    return jsx(items20.GuildBadgeSun, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.WIND === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj19 = { primaryTintColor: null, secondaryTintColor: null };
    obj19[0] = primaryTintColor;
    obj19[1] = secondaryTintColor;
    merged = obj19;
    merged = Object.assign(merged);
    return jsx(items21.GuildBadgeWind, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.BUNNY === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj20 = { primaryTintColor: null };
    obj20[0] = primaryTintColor;
    merged = obj20;
    merged = Object.assign(merged);
    return jsx(items22.GuildBadgeBunny, { primaryTintColor: null });
  } else if (tmp2.DOG === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj21 = { primaryTintColor: null, secondaryTintColor: null };
    obj21[0] = primaryTintColor;
    obj21[1] = secondaryTintColor;
    merged = obj21;
    merged = Object.assign(merged);
    return jsx(items23.GuildBadgeDog, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.FROG === badge) {
    merged = jsx;
    merged = require;
    merged = dependencyMap;
    const obj22 = { primaryTintColor: null, secondaryTintColor: null };
    obj22[0] = primaryTintColor;
    obj22[1] = secondaryTintColor;
    merged = obj22;
    merged = Object.assign(merged);
    return jsx(items24.GuildBadgeFrog, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.GOAT === badge) {
    merged = require;
    merged = dependencyMap;
    const obj23 = { primaryTintColor: null };
    obj23[0] = primaryTintColor;
    merged = obj23;
    merged = Object.assign(merged);
    return jsx(items25.GuildBadgeGoat, { primaryTintColor: null });
  } else if (tmp2.CAT === badge) {
    const obj24 = { primaryTintColor: null };
    obj24[0] = primaryTintColor;
    const merged1 = Object.assign(merged);
    return jsx(items26.GuildBadgeCat, { primaryTintColor: null });
  } else if (tmp2.DIAMOND === badge) {
    const obj25 = { primaryTintColor: null };
    obj25[0] = primaryTintColor;
    const merged2 = Object.assign(merged);
    return jsx(items27.GuildBadgeDiamond, { primaryTintColor: null });
  } else if (tmp2.CROWN === badge) {
    const obj26 = { primaryTintColor: null, secondaryTintColor: null };
    obj26[0] = primaryTintColor;
    obj26[1] = secondaryTintColor;
    const merged3 = Object.assign(merged);
    return jsx(items28.GuildBadgeCrown, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.TROPHY === badge) {
    const obj27 = { primaryTintColor: null };
    obj27[0] = primaryTintColor;
    const merged4 = Object.assign(merged);
    return jsx(items29.GuildBadgeTrophy, { primaryTintColor: null });
  } else if (tmp2.MONEY_BAG === badge) {
    const obj28 = { primaryTintColor: null };
    obj28[0] = primaryTintColor;
    const merged5 = Object.assign(merged);
    return jsx(items30.GuildBadgeMoneyBag, { primaryTintColor: null });
  } else if (tmp2.DOLLAR_SIGN === badge) {
    const obj29 = { primaryTintColor: null };
    obj29[0] = primaryTintColor;
    const merged6 = Object.assign(merged);
    return jsx(items31.GuildBadgeDollarSign, { primaryTintColor: null });
  } else if (tmp2.CLOVER === badge) {
    const obj30 = { primaryTintColor: null };
    obj30[0] = primaryTintColor;
    const merged7 = Object.assign(merged);
    return jsx(items32.GuildBadgeClover, { primaryTintColor: null });
  } else if (tmp2.BLOSSOM === badge) {
    const obj31 = { primaryTintColor: null };
    obj31[0] = primaryTintColor;
    const merged8 = Object.assign(merged);
    return jsx(items33.GuildBadgeBlossom, { primaryTintColor: null });
  } else if (tmp2.POTTED_PLANT === badge) {
    const obj32 = { primaryTintColor: null, secondaryTintColor: null };
    obj32[0] = primaryTintColor;
    obj32[1] = secondaryTintColor;
    const merged9 = Object.assign(merged);
    return jsx(items34.GuildBadgePottedPlant, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.MAPLE === badge) {
    const obj33 = { primaryTintColor: null };
    obj33[0] = primaryTintColor;
    const merged10 = Object.assign(merged);
    return jsx(items35.GuildBadgeMaple, { primaryTintColor: null });
  } else if (tmp2.WILTED_FLOWER === badge) {
    const obj34 = { primaryTintColor: null, secondaryTintColor: null };
    obj34[0] = primaryTintColor;
    obj34[1] = secondaryTintColor;
    const merged11 = Object.assign(merged);
    return jsx(items36.GuildBadgeWiltedFlower, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.BUTTERFLY === badge) {
    const obj35 = { primaryTintColor: null, secondaryTintColor: null };
    obj35[0] = primaryTintColor;
    obj35[1] = secondaryTintColor;
    const merged12 = Object.assign(merged);
    return jsx(items37.GuildBadgeButterfly, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SNAIL === badge) {
    const obj36 = { primaryTintColor: null, secondaryTintColor: null };
    obj36[0] = primaryTintColor;
    obj36[1] = secondaryTintColor;
    const merged13 = Object.assign(merged);
    return jsx(items38.GuildBadgeSnail, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.CATERPILLAR === badge) {
    const obj37 = { primaryTintColor: null, secondaryTintColor: null };
    obj37[0] = primaryTintColor;
    obj37[1] = secondaryTintColor;
    const merged14 = Object.assign(merged);
    return jsx(items39.GuildBadgeCaterpillar, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.SPIDER === badge) {
    const obj38 = { primaryTintColor: null, secondaryTintColor: null };
    obj38[0] = primaryTintColor;
    obj38[1] = secondaryTintColor;
    const merged15 = Object.assign(merged);
    return jsx(items40.GuildBadgeSpider, { primaryTintColor: null, secondaryTintColor: null });
  } else if (tmp2.BEE === badge) {
    obj = { primaryTintColor: null };
    obj[0] = primaryTintColor;
    const merged16 = Object.assign(merged);
    return jsx(items41.GuildBadgeBee, { primaryTintColor: null });
  } else {
    return null;
  }
};