// === Module 11146: AppIconConstants ===

// Module 11146 (AppIconConstants)
import util from "util" /* 1113 */;
import _modDef4520 from "module_4520" /* 4520 */;
import AppIconTypes from "AppIconTypes" /* 5336 */;
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 5338 */;
import _modDef11147 from "module_11147" /* 11147 */;
import _modDef11148 from "module_11148" /* 11148 */;
import _modDef11149 from "module_11149" /* 11149 */;
import _modDef11150 from "module_11150" /* 11150 */;
import _modDef11151 from "module_11151" /* 11151 */;
import _modDef11152 from "module_11152" /* 11152 */;
import _modDef11153 from "module_11153" /* 11153 */;
import _modDef11154 from "module_11154" /* 11154 */;
import _modDef11155 from "module_11155" /* 11155 */;
import _modDef11156 from "module_11156" /* 11156 */;
import _modDef11157 from "module_11157" /* 11157 */;
import _modDef11158 from "module_11158" /* 11158 */;
import _modDef11159 from "module_11159" /* 11159 */;
import _modDef11160 from "module_11160" /* 11160 */;
import _modDef11161 from "module_11161" /* 11161 */;
import _modDef11162 from "module_11162" /* 11162 */;
import _modDef11163 from "module_11163" /* 11163 */;
import _modDef11164 from "module_11164" /* 11164 */;
import _modDef11165 from "module_11165" /* 11165 */;
import _modDef11166 from "module_11166" /* 11166 */;
import _modDef11167 from "module_11167" /* 11167 */;
import _modDef11168 from "module_11168" /* 11168 */;
import _modDef11169 from "module_11169" /* 11169 */;
import _modDef11170 from "module_11170" /* 11170 */;
import _modDef11171 from "module_11171" /* 11171 */;
import _modDef11172 from "module_11172" /* 11172 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5335 */;
import size from "module_2" /* 2 */;

function getLimitedAlternateIcons() {
  items = [...closure_7];
  if (obj.getHexagonCampaignPerkAvailabilityForCurrentUser(constants.APP_ICON, "AppIconConstants") === constants2.HIDDEN) {
    let items1 = [];
  } else {
    const obj2 = { id: AppIconTypes.LimitedTimeAppIconIds.HEXAGON, iconSource: _modDef11172, isPremium: HexagonCampaignUtils.isHexagonCampaignPerkPremiumOnly(constants.APP_ICON), expiresAt, name: null };
    const intl = util.intl;
    obj2.name = intl.string(_modDef4520.JC4Pii);
    items1 = [obj2];
    const tmp2Result = HexagonCampaignUtils;
  }
  HermesBuiltin.arraySpread(items1, tmp);
  return items.filter((expiresAt) => {
    let tmp = null != expiresAt.expiresAt;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() > expiresAt.expiresAt;
    }
    return !tmp;
  });
}
({ HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: c3, HexagonCampaignPerk: closure_4, HexagonCampaignPerkAvailability: hasOwnProperty } = HexagonCampaignConstants);
let obj = { id: AppIconTypes.PremiumAppIconIds.IN_RAINBOWS, iconSource: _modDef11148, isPremium: true, name: null };
let intl = util.intl;
obj.name = intl.string(util.t.yxJB9E);
let items = [obj, , , , , , , , , , , , , , , , , , , , , , , ];
let obj2 = { id: AppIconTypes.PremiumAppIconIds.MIDNIGHT_PRISM, iconSource: _modDef11149, isPremium: true, name: null };
let intl2 = util.intl;
obj2.name = intl2.string(util.t.nshUZZ);
items[1] = obj2;
const obj3 = { id: AppIconTypes.PremiumAppIconIds.COLOR_WAVE, iconSource: _modDef11150, isPremium: true, name: null };
const intl3 = util.intl;
obj3.name = intl3.string(util.t.MWRYqh);
items[2] = obj3;
const obj4 = { id: AppIconTypes.PremiumAppIconIds.BLURPLE_TWILIGHT, iconSource: _modDef11151, isPremium: true, name: null };
const intl4 = util.intl;
obj4.name = intl4.string(util.t.Mfoe3p);
items[3] = obj4;
const obj5 = { id: AppIconTypes.PremiumAppIconIds.BRAND_INVERTED, iconSource: _modDef11152, isPremium: true, name: null };
const intl5 = util.intl;
obj5.name = intl5.string(util.t.h6UXSt);
items[4] = obj5;
const obj6 = { id: AppIconTypes.PremiumAppIconIds.BRAND_DARK, iconSource: _modDef11153, name: null, isPremium: true };
const intl6 = util.intl;
obj6.name = intl6.string(util.t.gZEUBl);
items[5] = obj6;
const obj7 = { id: AppIconTypes.PremiumAppIconIds.MATTE_DARK, iconSource: _modDef11154, isPremium: true, name: null };
const intl7 = util.intl;
obj7.name = intl7.string(util.t.NkshQt);
items[6] = obj7;
const obj8 = { id: AppIconTypes.PremiumAppIconIds.MATTE_LIGHT, iconSource: _modDef11155, name: null, isPremium: true };
const intl8 = util.intl;
obj8.name = intl8.string(util.t.G2W302);
items[7] = obj8;
const obj9 = { id: AppIconTypes.PremiumAppIconIds.PASTEL, iconSource: _modDef11156, isPremium: true, name: null };
const intl9 = util.intl;
obj9.name = intl9.string(util.t.mTSkLT);
items[8] = obj9;
const obj10 = { id: AppIconTypes.PremiumAppIconIds.PIRATE, iconSource: _modDef11157, isPremium: true, name: null };
const intl10 = util.intl;
obj10.name = intl10.string(util.t["EgWTY+"]);
items[9] = obj10;
const obj11 = { id: AppIconTypes.PremiumAppIconIds.CAMO, iconSource: _modDef11158, isPremium: true, name: null };
const intl11 = util.intl;
obj11.name = intl11.string(util.t.RSKXOK);
items[10] = obj11;
const obj12 = { id: AppIconTypes.PremiumAppIconIds.SUNSET, iconSource: _modDef11159, isPremium: true, name: null };
const intl12 = util.intl;
obj12.name = intl12.string(util.t.ixdjPB);
items[11] = obj12;
const obj13 = { id: AppIconTypes.PremiumAppIconIds.GALAXY, iconSource: _modDef11160, isPremium: true, name: null };
const intl13 = util.intl;
obj13.name = intl13.string(util.t.cb78Ls);
items[12] = obj13;
const obj14 = { id: AppIconTypes.PremiumAppIconIds.Y2K, iconSource: _modDef11161, isPremium: true, name: null };
const intl14 = util.intl;
obj14.name = intl14.string(util.t["s+KoXO"]);
items[13] = obj14;
const obj15 = { id: AppIconTypes.PremiumAppIconIds.CHERRY_BLOSSOM, iconSource: _modDef11162, isPremium: true, name: null };
const intl15 = util.intl;
obj15.name = intl15.string(util.t["ta/5RB"]);
items[14] = obj15;
const obj16 = { id: AppIconTypes.PremiumAppIconIds.BEANIE, iconSource: _modDef11163, isPremium: true, name: null };
const intl16 = util.intl;
obj16.name = intl16.string(util.t.IoLViw);
items[15] = obj16;
const obj17 = { id: AppIconTypes.PremiumAppIconIds.GAMING, iconSource: _modDef11164, isPremium: true, name: null };
const intl17 = util.intl;
obj17.name = intl17.string(util.t["2Tf+c4"]);
items[16] = obj17;
const obj18 = { id: AppIconTypes.PremiumAppIconIds.CIRCUIT, iconSource: _modDef11165, isPremium: true, name: null };
const intl18 = util.intl;
obj18.name = intl18.string(util.t.dUpxKb);
items[17] = obj18;
const obj19 = { id: AppIconTypes.PremiumAppIconIds.HOLO_WAVES, iconSource: _modDef11166, isPremium: true, name: null };
const intl19 = util.intl;
obj19.name = intl19.string(util.t["9mg7g1"]);
items[18] = obj19;
const obj20 = { id: AppIconTypes.PremiumAppIconIds.BLUSH, iconSource: _modDef11167, isPremium: true, name: null };
const intl20 = util.intl;
obj20.name = intl20.string(util.t.nmd90m);
items[19] = obj20;
const obj21 = { id: AppIconTypes.PremiumAppIconIds.ANGRY, iconSource: _modDef11168, isPremium: true, name: null };
const intl21 = util.intl;
obj21.name = intl21.string(util.t["9PUXpM"]);
items[20] = obj21;
const obj22 = { id: AppIconTypes.PremiumAppIconIds.MANGA, iconSource: _modDef11169, isPremium: true, name: null };
const intl22 = util.intl;
obj22.name = intl22.string(util.t.hGBbF8);
items[21] = obj22;
const obj23 = { id: AppIconTypes.PremiumAppIconIds.CONTROLLER, iconSource: _modDef11170, isPremium: true, name: null };
const intl23 = util.intl;
obj23.name = intl23.string(util.t["4QM2U1"]);
items[22] = obj23;
const obj24 = { id: AppIconTypes.PremiumAppIconIds.MUSHROOM, iconSource: _modDef11171, isPremium: true, name: null };
const intl24 = util.intl;
obj24.name = intl24.string(util.t.gnLLSK);
items[23] = obj24;
const args = [];
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconConstants.tsx");

export function getDefaultIcon() {
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef11147, name: null, isPremium: false };
  const intl = util.intl;
  obj.name = intl.string(util.t.ANxkLy);
  return obj;
}
export function isIconExpired(expiresAt) {
  let tmp = null != expiresAt.expiresAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() > expiresAt.expiresAt;
  }
  return tmp;
}
export function getOfficialAlternateIcons() {
  return items.filter((expiresAt) => {
    let tmp = null != expiresAt.expiresAt;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() > expiresAt.expiresAt;
    }
    return !tmp;
  });
}
export { getLimitedAlternateIcons };
export function getIcons() {
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef11147, name: null, isPremium: false };
  const intl = util.intl;
  obj.name = intl.string(util.t.ANxkLy);
  items = [
    obj,
    ...items.filter((expiresAt) => {
      let tmp = null != expiresAt.expiresAt;
      if (tmp) {
        const _Date = Date;
        tmp = Date.now() > expiresAt.expiresAt;
      }
      return !tmp;
    }),
    ...getLimitedAlternateIcons()
  ];
  return items;
}
export function getIconById(currentAppIcon) {
  closure_0 = currentAppIcon;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef11147, name: null, isPremium: false };
  const intl = util.intl;
  obj.name = intl.string(util.t.ANxkLy);
  items = [
    obj,
    ...items.filter((expiresAt) => {
      let tmp = null != expiresAt.expiresAt;
      if (tmp) {
        const _Date = Date;
        tmp = Date.now() > expiresAt.expiresAt;
      }
      return !tmp;
    }),
    ...getLimitedAlternateIcons()
  ];
  let found = items.find((id) => id.id === closure_0);
  if (null == found) {
    const obj2 = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef11147, name: null, isPremium: false };
    const intl2 = util.intl;
    obj2.name = intl2.string(util.t.ANxkLy);
    found = obj2;
  }
  return found;
}