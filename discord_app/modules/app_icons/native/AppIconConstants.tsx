// discord_app/modules/app_icons/native/AppIconConstants.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4478 from "../../hexagon_campaign/HexagonCampaign.messages.js";
import AppIconTypes from "../AppIconTypes.tsx";
import HexagonCampaignUtils from "../../hexagon_campaign/HexagonCampaignUtils.tsx";
import _modDef10349 from "../../../../_runtime/metro/10349__.js";
import _modDef10350 from "../../../../_runtime/metro/10350__.js";
import _modDef10351 from "../../../../_runtime/metro/10351__.js";
import _modDef10352 from "../../../../_runtime/metro/10352__.js";
import _modDef10353 from "../../../../_runtime/metro/10353__.js";
import _modDef10354 from "../../../../_runtime/metro/10354__.js";
import _modDef10355 from "../../../../_runtime/metro/10355__.js";
import _modDef10356 from "../../../../_runtime/metro/10356__.js";
import _modDef10357 from "../../../../_runtime/metro/10357__.js";
import _modDef10358 from "../../../../_runtime/metro/10358__.js";
import _modDef10359 from "../../../../_runtime/metro/10359__.js";
import _modDef10360 from "../../../../_runtime/metro/10360__.js";
import _modDef10361 from "../../../../_runtime/metro/10361__.js";
import _modDef10362 from "../../../../_runtime/metro/10362__.js";
import _modDef10363 from "../../../../_runtime/metro/10363__.js";
import _modDef10364 from "../../../../_runtime/metro/10364__.js";
import _modDef10365 from "../../../../_runtime/metro/10365__.js";
import _modDef10366 from "../../../../_runtime/metro/10366__.js";
import _modDef10367 from "../../../../_runtime/metro/10367__.js";
import _modDef10368 from "../../../../_runtime/metro/10368__.js";
import _modDef10369 from "../../../../_runtime/metro/10369__.js";
import _modDef10370 from "../../../../_runtime/metro/10370__.js";
import _modDef10371 from "../../../../_runtime/metro/10371__.js";
import _modDef10372 from "../../../../_runtime/metro/10372__.js";
import _modDef10373 from "../../../../_runtime/metro/10373__.js";
import _modDef10374 from "../../../../_runtime/metro/10374__.js";
import HexagonCampaignConstants from "../../hexagon_campaign/HexagonCampaignConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getLimitedAlternateIcons() {
  items = [...closure_7];
  if (
    obj.getHexagonCampaignPerkAvailabilityForCurrentUser(constants.APP_ICON, "AppIconConstants") === constants2.HIDDEN
  ) {
    let items1 = [];
  } else {
    const obj2 = {
      id: AppIconTypes.LimitedTimeAppIconIds.HEXAGON,
      iconSource: _modDef10374,
      isPremium: HexagonCampaignUtils.isHexagonCampaignPerkPremiumOnly(constants.APP_ICON),
      expiresAt,
      name: null,
    };
    const intl = util.intl;
    obj2.name = intl.string(_modDef4478.JC4Pii);
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
({
  HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS: c3,
  HexagonCampaignPerk: closure_4,
  HexagonCampaignPerkAvailability: hasOwnProperty,
} = HexagonCampaignConstants);
let obj = { id: AppIconTypes.PremiumAppIconIds.IN_RAINBOWS, iconSource: _modDef10350, isPremium: true, name: null };
let intl = util.intl;
obj.name = intl.string(util.t.yxJB9E);
let items = [obj, , , , , , , , , , , , , , , , , , , , , , ,];
let obj2 = { id: AppIconTypes.PremiumAppIconIds.MIDNIGHT_PRISM, iconSource: _modDef10351, isPremium: true, name: null };
let intl2 = util.intl;
obj2.name = intl2.string(util.t.nshUZZ);
items[1] = obj2;
const obj3 = { id: AppIconTypes.PremiumAppIconIds.COLOR_WAVE, iconSource: _modDef10352, isPremium: true, name: null };
const intl3 = util.intl;
obj3.name = intl3.string(util.t.MWRYqh);
items[2] = obj3;
const obj4 = {
  id: AppIconTypes.PremiumAppIconIds.BLURPLE_TWILIGHT,
  iconSource: _modDef10353,
  isPremium: true,
  name: null,
};
const intl4 = util.intl;
obj4.name = intl4.string(util.t.Mfoe3p);
items[3] = obj4;
const obj5 = {
  id: AppIconTypes.PremiumAppIconIds.BRAND_INVERTED,
  iconSource: _modDef10354,
  isPremium: true,
  name: null,
};
const intl5 = util.intl;
obj5.name = intl5.string(util.t.h6UXSt);
items[4] = obj5;
const obj6 = { id: AppIconTypes.PremiumAppIconIds.BRAND_DARK, iconSource: _modDef10355, name: null, isPremium: true };
const intl6 = util.intl;
obj6.name = intl6.string(util.t.gZEUBl);
items[5] = obj6;
const obj7 = { id: AppIconTypes.PremiumAppIconIds.MATTE_DARK, iconSource: _modDef10356, isPremium: true, name: null };
const intl7 = util.intl;
obj7.name = intl7.string(util.t.NkshQt);
items[6] = obj7;
const obj8 = { id: AppIconTypes.PremiumAppIconIds.MATTE_LIGHT, iconSource: _modDef10357, name: null, isPremium: true };
const intl8 = util.intl;
obj8.name = intl8.string(util.t.G2W302);
items[7] = obj8;
const obj9 = { id: AppIconTypes.PremiumAppIconIds.PASTEL, iconSource: _modDef10358, isPremium: true, name: null };
const intl9 = util.intl;
obj9.name = intl9.string(util.t.mTSkLT);
items[8] = obj9;
const obj10 = { id: AppIconTypes.PremiumAppIconIds.PIRATE, iconSource: _modDef10359, isPremium: true, name: null };
const intl10 = util.intl;
obj10.name = intl10.string(util.t["EgWTY+"]);
items[9] = obj10;
const obj11 = { id: AppIconTypes.PremiumAppIconIds.CAMO, iconSource: _modDef10360, isPremium: true, name: null };
const intl11 = util.intl;
obj11.name = intl11.string(util.t.RSKXOK);
items[10] = obj11;
const obj12 = { id: AppIconTypes.PremiumAppIconIds.SUNSET, iconSource: _modDef10361, isPremium: true, name: null };
const intl12 = util.intl;
obj12.name = intl12.string(util.t.ixdjPB);
items[11] = obj12;
const obj13 = { id: AppIconTypes.PremiumAppIconIds.GALAXY, iconSource: _modDef10362, isPremium: true, name: null };
const intl13 = util.intl;
obj13.name = intl13.string(util.t.cb78Ls);
items[12] = obj13;
const obj14 = { id: AppIconTypes.PremiumAppIconIds.Y2K, iconSource: _modDef10363, isPremium: true, name: null };
const intl14 = util.intl;
obj14.name = intl14.string(util.t["s+KoXO"]);
items[13] = obj14;
const obj15 = {
  id: AppIconTypes.PremiumAppIconIds.CHERRY_BLOSSOM,
  iconSource: _modDef10364,
  isPremium: true,
  name: null,
};
const intl15 = util.intl;
obj15.name = intl15.string(util.t["ta/5RB"]);
items[14] = obj15;
const obj16 = { id: AppIconTypes.PremiumAppIconIds.BEANIE, iconSource: _modDef10365, isPremium: true, name: null };
const intl16 = util.intl;
obj16.name = intl16.string(util.t.IoLViw);
items[15] = obj16;
const obj17 = { id: AppIconTypes.PremiumAppIconIds.GAMING, iconSource: _modDef10366, isPremium: true, name: null };
const intl17 = util.intl;
obj17.name = intl17.string(util.t["2Tf+c4"]);
items[16] = obj17;
const obj18 = { id: AppIconTypes.PremiumAppIconIds.CIRCUIT, iconSource: _modDef10367, isPremium: true, name: null };
const intl18 = util.intl;
obj18.name = intl18.string(util.t.dUpxKb);
items[17] = obj18;
const obj19 = { id: AppIconTypes.PremiumAppIconIds.HOLO_WAVES, iconSource: _modDef10368, isPremium: true, name: null };
const intl19 = util.intl;
obj19.name = intl19.string(util.t["9mg7g1"]);
items[18] = obj19;
const obj20 = { id: AppIconTypes.PremiumAppIconIds.BLUSH, iconSource: _modDef10369, isPremium: true, name: null };
const intl20 = util.intl;
obj20.name = intl20.string(util.t.nmd90m);
items[19] = obj20;
const obj21 = { id: AppIconTypes.PremiumAppIconIds.ANGRY, iconSource: _modDef10370, isPremium: true, name: null };
const intl21 = util.intl;
obj21.name = intl21.string(util.t["9PUXpM"]);
items[20] = obj21;
const obj22 = { id: AppIconTypes.PremiumAppIconIds.MANGA, iconSource: _modDef10371, isPremium: true, name: null };
const intl22 = util.intl;
obj22.name = intl22.string(util.t.hGBbF8);
items[21] = obj22;
const obj23 = { id: AppIconTypes.PremiumAppIconIds.CONTROLLER, iconSource: _modDef10372, isPremium: true, name: null };
const intl23 = util.intl;
obj23.name = intl23.string(util.t["4QM2U1"]);
items[22] = obj23;
const obj24 = { id: AppIconTypes.PremiumAppIconIds.MUSHROOM, iconSource: _modDef10373, isPremium: true, name: null };
const intl24 = util.intl;
obj24.name = intl24.string(util.t.gnLLSK);
items[23] = obj24;
const args = [];
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconConstants.tsx");

export function getDefaultIcon() {
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef10349, name: null, isPremium: false };
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
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef10349, name: null, isPremium: false };
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
    ...getLimitedAlternateIcons(),
  ];
  return items;
}
export function getIconById(currentAppIcon) {
  closure_0 = currentAppIcon;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef10349, name: null, isPremium: false };
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
    ...getLimitedAlternateIcons(),
  ];
  let found = items.find((id) => id.id === closure_0);
  if (null == found) {
    const obj2 = {
      id: AppIconTypes.FreemiumAppIconIds.DEFAULT,
      iconSource: _modDef10349,
      name: null,
      isPremium: false,
    };
    const intl2 = util.intl;
    obj2.name = intl2.string(util.t.ANxkLy);
    found = obj2;
  }
  return found;
}
