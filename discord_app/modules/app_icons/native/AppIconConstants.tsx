// discord_app/modules/app_icons/native/AppIconConstants.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4247 from "../../hexagon_campaign/HexagonCampaign.messages.js";
import HexagonCampaignUtils from "../../hexagon_campaign/HexagonCampaignUtils.tsx";
import AppIconTypes from "../AppIconTypes.tsx";
import _modDef9867 from "../../../../_runtime/metro/09867__.js";
import _modDef9868 from "../../../../_runtime/metro/09868__.js";
import _modDef9869 from "../../../../_runtime/metro/09869__.js";
import _modDef9870 from "../../../../_runtime/metro/09870__.js";
import _modDef9871 from "../../../../_runtime/metro/09871__.js";
import _modDef9872 from "../../../../_runtime/metro/09872__.js";
import _modDef9873 from "../../../../_runtime/metro/09873__.js";
import _modDef9874 from "../../../../_runtime/metro/09874__.js";
import _modDef9875 from "../../../../_runtime/metro/09875__.js";
import _modDef9876 from "../../../../_runtime/metro/09876__.js";
import _modDef9877 from "../../../../_runtime/metro/09877__.js";
import _modDef9878 from "../../../../_runtime/metro/09878__.js";
import _modDef9879 from "../../../../_runtime/metro/09879__.js";
import _modDef9880 from "../../../../_runtime/metro/09880__.js";
import _modDef9881 from "../../../../_runtime/metro/09881__.js";
import _modDef9882 from "../../../../_runtime/metro/09882__.js";
import _modDef9883 from "../../../../_runtime/metro/09883__.js";
import _modDef9884 from "../../../../_runtime/metro/09884__.js";
import _modDef9885 from "../../../../_runtime/metro/09885__.js";
import _modDef9886 from "../../../../_runtime/metro/09886__.js";
import _modDef9887 from "../../../../_runtime/metro/09887__.js";
import _modDef9888 from "../../../../_runtime/metro/09888__.js";
import _modDef9889 from "../../../../_runtime/metro/09889__.js";
import _modDef9890 from "../../../../_runtime/metro/09890__.js";
import _modDef9891 from "../../../../_runtime/metro/09891__.js";
import _modDef9892 from "../../../../_runtime/metro/09892__.js";
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
      iconSource: _modDef9892,
      isPremium: HexagonCampaignUtils.isHexagonCampaignPerkPremiumOnly(constants.APP_ICON),
      expiresAt,
      name: null,
    };
    const intl = util.intl;
    obj2.name = intl.string(_modDef4247.JC4Pii);
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
let obj = { id: AppIconTypes.PremiumAppIconIds.IN_RAINBOWS, iconSource: _modDef9868, isPremium: true, name: null };
let intl = util.intl;
obj.name = intl.string(util.t.yxJB9E);
let items = [obj, , , , , , , , , , , , , , , , , , , , , , ,];
let obj2 = { id: AppIconTypes.PremiumAppIconIds.MIDNIGHT_PRISM, iconSource: _modDef9869, isPremium: true, name: null };
let intl2 = util.intl;
obj2.name = intl2.string(util.t.nshUZZ);
items[1] = obj2;
const obj3 = { id: AppIconTypes.PremiumAppIconIds.COLOR_WAVE, iconSource: _modDef9870, isPremium: true, name: null };
const intl3 = util.intl;
obj3.name = intl3.string(util.t.MWRYqh);
items[2] = obj3;
const obj4 = {
  id: AppIconTypes.PremiumAppIconIds.BLURPLE_TWILIGHT,
  iconSource: _modDef9871,
  isPremium: true,
  name: null,
};
const intl4 = util.intl;
obj4.name = intl4.string(util.t.Mfoe3p);
items[3] = obj4;
const obj5 = {
  id: AppIconTypes.PremiumAppIconIds.BRAND_INVERTED,
  iconSource: _modDef9872,
  isPremium: true,
  name: null,
};
const intl5 = util.intl;
obj5.name = intl5.string(util.t.h6UXSt);
items[4] = obj5;
const obj6 = { id: AppIconTypes.PremiumAppIconIds.BRAND_DARK, iconSource: _modDef9873, name: null, isPremium: true };
const intl6 = util.intl;
obj6.name = intl6.string(util.t.gZEUBl);
items[5] = obj6;
const obj7 = { id: AppIconTypes.PremiumAppIconIds.MATTE_DARK, iconSource: _modDef9874, isPremium: true, name: null };
const intl7 = util.intl;
obj7.name = intl7.string(util.t.NkshQt);
items[6] = obj7;
const obj8 = { id: AppIconTypes.PremiumAppIconIds.MATTE_LIGHT, iconSource: _modDef9875, name: null, isPremium: true };
const intl8 = util.intl;
obj8.name = intl8.string(util.t.G2W302);
items[7] = obj8;
const obj9 = { id: AppIconTypes.PremiumAppIconIds.PASTEL, iconSource: _modDef9876, isPremium: true, name: null };
const intl9 = util.intl;
obj9.name = intl9.string(util.t.mTSkLT);
items[8] = obj9;
const obj10 = { id: AppIconTypes.PremiumAppIconIds.PIRATE, iconSource: _modDef9877, isPremium: true, name: null };
const intl10 = util.intl;
obj10.name = intl10.string(util.t["EgWTY+"]);
items[9] = obj10;
const obj11 = { id: AppIconTypes.PremiumAppIconIds.CAMO, iconSource: _modDef9878, isPremium: true, name: null };
const intl11 = util.intl;
obj11.name = intl11.string(util.t.RSKXOK);
items[10] = obj11;
const obj12 = { id: AppIconTypes.PremiumAppIconIds.SUNSET, iconSource: _modDef9879, isPremium: true, name: null };
const intl12 = util.intl;
obj12.name = intl12.string(util.t.ixdjPB);
items[11] = obj12;
const obj13 = { id: AppIconTypes.PremiumAppIconIds.GALAXY, iconSource: _modDef9880, isPremium: true, name: null };
const intl13 = util.intl;
obj13.name = intl13.string(util.t.cb78Ls);
items[12] = obj13;
const obj14 = { id: AppIconTypes.PremiumAppIconIds.Y2K, iconSource: _modDef9881, isPremium: true, name: null };
const intl14 = util.intl;
obj14.name = intl14.string(util.t["s+KoXO"]);
items[13] = obj14;
const obj15 = {
  id: AppIconTypes.PremiumAppIconIds.CHERRY_BLOSSOM,
  iconSource: _modDef9882,
  isPremium: true,
  name: null,
};
const intl15 = util.intl;
obj15.name = intl15.string(util.t["ta/5RB"]);
items[14] = obj15;
const obj16 = { id: AppIconTypes.PremiumAppIconIds.BEANIE, iconSource: _modDef9883, isPremium: true, name: null };
const intl16 = util.intl;
obj16.name = intl16.string(util.t.IoLViw);
items[15] = obj16;
const obj17 = { id: AppIconTypes.PremiumAppIconIds.GAMING, iconSource: _modDef9884, isPremium: true, name: null };
const intl17 = util.intl;
obj17.name = intl17.string(util.t["2Tf+c4"]);
items[16] = obj17;
const obj18 = { id: AppIconTypes.PremiumAppIconIds.CIRCUIT, iconSource: _modDef9885, isPremium: true, name: null };
const intl18 = util.intl;
obj18.name = intl18.string(util.t.dUpxKb);
items[17] = obj18;
const obj19 = { id: AppIconTypes.PremiumAppIconIds.HOLO_WAVES, iconSource: _modDef9886, isPremium: true, name: null };
const intl19 = util.intl;
obj19.name = intl19.string(util.t["9mg7g1"]);
items[18] = obj19;
const obj20 = { id: AppIconTypes.PremiumAppIconIds.BLUSH, iconSource: _modDef9887, isPremium: true, name: null };
const intl20 = util.intl;
obj20.name = intl20.string(util.t.nmd90m);
items[19] = obj20;
const obj21 = { id: AppIconTypes.PremiumAppIconIds.ANGRY, iconSource: _modDef9888, isPremium: true, name: null };
const intl21 = util.intl;
obj21.name = intl21.string(util.t["9PUXpM"]);
items[20] = obj21;
const obj22 = { id: AppIconTypes.PremiumAppIconIds.MANGA, iconSource: _modDef9889, isPremium: true, name: null };
const intl22 = util.intl;
obj22.name = intl22.string(util.t.hGBbF8);
items[21] = obj22;
const obj23 = { id: AppIconTypes.PremiumAppIconIds.CONTROLLER, iconSource: _modDef9890, isPremium: true, name: null };
const intl23 = util.intl;
obj23.name = intl23.string(util.t["4QM2U1"]);
items[22] = obj23;
const obj24 = { id: AppIconTypes.PremiumAppIconIds.MUSHROOM, iconSource: _modDef9891, isPremium: true, name: null };
const intl24 = util.intl;
obj24.name = intl24.string(util.t.gnLLSK);
items[23] = obj24;
const args = [];
const result = size.fileFinishedImporting("modules/app_icons/native/AppIconConstants.tsx");

export const getDefaultIcon = function getDefaultIcon() {
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef9867, name: null, isPremium: false };
  const intl = util.intl;
  obj.name = intl.string(util.t.ANxkLy);
  return obj;
};
export const isHexagonCampaignAppIcon = function isHexagonCampaignAppIcon(currentAppIcon) {
  return currentAppIcon === AppIconTypes.LimitedTimeAppIconIds.HEXAGON;
};
export const isIconExpired = function isIconExpired(expiresAt) {
  let tmp = null != expiresAt.expiresAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() > expiresAt.expiresAt;
  }
  return tmp;
};
export const getOfficialAlternateIcons = function getOfficialAlternateIcons() {
  return items.filter((expiresAt) => {
    let tmp = null != expiresAt.expiresAt;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() > expiresAt.expiresAt;
    }
    return !tmp;
  });
};
export { getLimitedAlternateIcons };
export const getIcons = function getIcons() {
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef9867, name: null, isPremium: false };
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
};
export const getIconById = function getIconById(currentAppIcon) {
  closure_0 = currentAppIcon;
  const obj = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef9867, name: null, isPremium: false };
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
    const obj2 = { id: AppIconTypes.FreemiumAppIconIds.DEFAULT, iconSource: _modDef9867, name: null, isPremium: false };
    const intl2 = util.intl;
    obj2.name = intl2.string(util.t.ANxkLy);
    found = obj2;
  }
  return found;
};
