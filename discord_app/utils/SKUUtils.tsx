// discord_app/utils/SKUUtils.tsx
import _slicedToArray from "_slicedToArray";
import ME from "ME";
import { t } from "../../_runtime/03867_t.js";
import { getSystemLocale } from "../intl/index.native.tsx";
import { matchPath } from "../modules/routing/matchPathCompat.tsx";
import { set } from "PlatformUtils.tsx";
import { _httpGetWithCountryCodeQuery } from "StoreUtils.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
const GameGenres = ME.GameGenres;
({ SKUTypes: c5, Routes: closure_6, SKUProductLines: error } = ME);
let closure_8 = {};
let closure_9 = {};
const merged = Object.assign(GameGenres);
const frozen = Object.freeze({ ALL: -1 });
const keys = Object.keys(frozen);
const item = keys.forEach((str) => {
  const replaced = str.toLowerCase().replace(/_/g, "-");
  closure_8[replaced] = frozen[str];
  closure_9[frozen[str]] = replaced;
});
const items = [["YYYY-MM-DD", "MMMM DD, Y"], ["YYYY-MM", "MMMM Y"], ["MM-DD", "MMMM DD"], ["MM", "MMMM"], ["YYYY", "Y"]];
let result = require("matchPath").fileFinishedImporting("utils/SKUUtils.tsx");

export const getSKUIdFromURL = function getSKUIdFromURL(pathname) {
  let obj = matchPath;
  obj = { path: closure_6.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug") };
  const matchPathResult = obj.matchPath(pathname, obj);
  let skuId = null;
  if (null != matchPathResult) {
    skuId = matchPathResult.params.skuId;
  }
  return skuId;
};
export const getGenreURLSlugFromId = function getGenreURLSlugFromId(arg0) {
  return table2[arg0];
};
export const getGenreIdFromURLSlug = function getGenreIdFromURLSlug(arg0) {
  return table[arg0];
};
export const getGenreText = function getGenreText(arg0) {
  let tmp = GameGenres;
  if (GameGenres.ACTION === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl70 = getSystemLocale.intl;
    return intl70.string(getSystemLocale.t["1o2/IM"]);
  } else if (tmp.ACTION_RPG === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl69 = getSystemLocale.intl;
    return intl69.string(getSystemLocale.t.e9Yo4H);
  } else if (tmp.BRAWLER === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl68 = getSystemLocale.intl;
    return intl68.string(getSystemLocale.t.WCkEjT);
  } else if (tmp.HACK_AND_SLASH === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl67 = getSystemLocale.intl;
    return intl67.string(getSystemLocale.t.xQ4VmK);
  } else if (tmp.PLATFORMER === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl66 = getSystemLocale.intl;
    return intl66.string(getSystemLocale.t.WA3189);
  } else if (tmp.STEALTH === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl65 = getSystemLocale.intl;
    return intl65.string(getSystemLocale.t["6UPFdw"]);
  } else if (tmp.SURVIVAL === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl64 = getSystemLocale.intl;
    return intl64.string(getSystemLocale.t.SVPCt9);
  } else if (tmp.ADVENTURE === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl63 = getSystemLocale.intl;
    return intl63.string(getSystemLocale.t["15p8on"]);
  } else if (tmp.ACTION_ADVENTURE === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl62 = getSystemLocale.intl;
    return intl62.string(getSystemLocale.t.AxkUBp);
  } else if (tmp.METROIDVANIA === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl61 = getSystemLocale.intl;
    return intl61.string(getSystemLocale.t.Iwr38m);
  } else if (tmp.OPEN_WORLD === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl60 = getSystemLocale.intl;
    return intl60.string(getSystemLocale.t["2HRHJO"]);
  } else if (tmp.PSYCHOLOGICAL_HORROR === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl59 = getSystemLocale.intl;
    return intl59.string(getSystemLocale.t["/IwK3s"]);
  } else if (tmp.SANDBOX === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl58 = getSystemLocale.intl;
    return intl58.string(getSystemLocale.t["2+Vu4Q"]);
  } else if (tmp.SURVIVAL_HORROR === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl57 = getSystemLocale.intl;
    return intl57.string(getSystemLocale.t.CCzRiK);
  } else if (tmp.VISUAL_NOVEL === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl56 = getSystemLocale.intl;
    return intl56.string(getSystemLocale.t.FE7rnk);
  } else if (tmp.DRIVING_RACING === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl55 = getSystemLocale.intl;
    return intl55.string(getSystemLocale.t.Erzgca);
  } else if (tmp.VEHICULAR_COMBAT === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl54 = getSystemLocale.intl;
    return intl54.string(getSystemLocale.t.YQHhog);
  } else if (tmp.MASSIVELY_MULTIPLAYER === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl53 = getSystemLocale.intl;
    return intl53.string(getSystemLocale.t["5CNg1o"]);
  } else if (tmp.MMORPG === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl52 = getSystemLocale.intl;
    return intl52.string(getSystemLocale.t["c4NuO/"]);
  } else if (tmp.ROLE_PLAYING === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl51 = getSystemLocale.intl;
    return intl51.string(getSystemLocale.t.yayVgs);
  } else if (tmp.DUNGEON_CRAWLER === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl50 = getSystemLocale.intl;
    return intl50.string(getSystemLocale.t.qicemc);
  } else if (tmp.ROGUELIKE === arg0) {
    const intl49 = getSystemLocale.intl;
    return intl49.string(getSystemLocale.t.zWzaCv);
  } else if (tmp.SHOOTER === arg0) {
    const intl48 = getSystemLocale.intl;
    return intl48.string(getSystemLocale.t["+pk6sd"]);
  } else if (tmp.LIGHT_GUN === arg0) {
    const intl47 = getSystemLocale.intl;
    return intl47.string(getSystemLocale.t.TDS96y);
  } else if (tmp.SHOOT_EM_UP === arg0) {
    const intl46 = getSystemLocale.intl;
    return intl46.string(getSystemLocale.t.wltDUE);
  } else if (tmp.FPS === arg0) {
    const intl45 = getSystemLocale.intl;
    return intl45.string(getSystemLocale.t.olTaq4);
  } else if (tmp.DUAL_JOYSTICK_SHOOTER === arg0) {
    const intl44 = getSystemLocale.intl;
    return intl44.string(getSystemLocale.t["SN+NS3"]);
  } else if (tmp.SIMULATION === arg0) {
    const intl43 = getSystemLocale.intl;
    return intl43.string(getSystemLocale.t.sxMPdm);
  } else if (tmp.FLIGHT_SIMULATOR === arg0) {
    const intl42 = getSystemLocale.intl;
    return intl42.string(getSystemLocale.t["Q7msr+"]);
  } else if (tmp.TRAIN_SIMULATOR === arg0) {
    const intl41 = getSystemLocale.intl;
    return intl41.string(getSystemLocale.t.ZtECf3);
  } else if (tmp.LIFE_SIMULATOR === arg0) {
    const intl40 = getSystemLocale.intl;
    return intl40.string(getSystemLocale.t.byt5Fo);
  } else if (tmp.FISHING === arg0) {
    const intl39 = getSystemLocale.intl;
    return intl39.string(getSystemLocale.t.BKwiwY);
  } else if (tmp.SPORTS === arg0) {
    const intl38 = getSystemLocale.intl;
    return intl38.string(getSystemLocale.t.O0B7XM);
  } else if (tmp.BASEBALL === arg0) {
    const intl37 = getSystemLocale.intl;
    return intl37.string(getSystemLocale.t["jPYb/z"]);
  } else if (tmp.BASKETBALL === arg0) {
    const intl36 = getSystemLocale.intl;
    return intl36.string(getSystemLocale.t["o+D1Bm"]);
  } else if (tmp.BILLIARDS === arg0) {
    const intl35 = getSystemLocale.intl;
    return intl35.string(getSystemLocale.t.PJ5o4E);
  } else if (tmp.BOWLING === arg0) {
    const intl34 = getSystemLocale.intl;
    return intl34.string(getSystemLocale.t["82afJw"]);
  } else if (tmp.BOXING === arg0) {
    const intl33 = getSystemLocale.intl;
    return intl33.string(getSystemLocale.t.DQvfei);
  } else if (tmp.FOOTBALL === arg0) {
    const intl32 = getSystemLocale.intl;
    return intl32.string(getSystemLocale.t.slOYkj);
  } else if (tmp.GOLF === arg0) {
    const intl31 = getSystemLocale.intl;
    return intl31.string(getSystemLocale.t.aeQPlG);
  } else if (tmp.HOCKEY === arg0) {
    const intl30 = getSystemLocale.intl;
    return intl30.string(getSystemLocale.t.g7oe5X);
  } else if (tmp.SKATEBOARDING_SKATING === arg0) {
    const intl29 = getSystemLocale.intl;
    return intl29.string(getSystemLocale.t.yBDEP0);
  } else if (tmp.SNOWBOARDING_SKIING === arg0) {
    const intl28 = getSystemLocale.intl;
    return intl28.string(getSystemLocale.t.GVaAci);
  } else if (tmp.SOCCER === arg0) {
    const intl27 = getSystemLocale.intl;
    return intl27.string(getSystemLocale.t.KPznxl);
  } else if (tmp.TRACK_FIELD === arg0) {
    const intl26 = getSystemLocale.intl;
    return intl26.string(getSystemLocale.t["hJ62Q/"]);
  } else if (tmp.SURFING_WAKEBOARDING === arg0) {
    const intl25 = getSystemLocale.intl;
    return intl25.string(getSystemLocale.t.PSh0CV);
  } else if (tmp.WRESTLING === arg0) {
    const intl24 = getSystemLocale.intl;
    return intl24.string(getSystemLocale.t["3y9hAT"]);
  } else if (tmp.STRATEGY === arg0) {
    const intl23 = getSystemLocale.intl;
    return intl23.string(getSystemLocale.t.KovTD8);
  } else if (tmp.FOUR_X === arg0) {
    const intl22 = getSystemLocale.intl;
    return intl22.string(getSystemLocale.t["19h4dX"]);
  } else if (tmp.ARTILLERY === arg0) {
    const intl21 = getSystemLocale.intl;
    return intl21.string(getSystemLocale.t.sBqLsP);
  } else if (tmp.RTS === arg0) {
    const intl20 = getSystemLocale.intl;
    return intl20.string(getSystemLocale.t.yS4ddj);
  } else if (tmp.TOWER_DEFENSE === arg0) {
    const intl19 = getSystemLocale.intl;
    return intl19.string(getSystemLocale.t.SULyIO);
  } else if (tmp.TURN_BASED_STRATEGY === arg0) {
    const intl18 = getSystemLocale.intl;
    return intl18.string(getSystemLocale.t.VDsbru);
  } else if (tmp.WARGAME === arg0) {
    const intl17 = getSystemLocale.intl;
    return intl17.string(getSystemLocale.t.YDCIrO);
  } else if (tmp.MOBA === arg0) {
    const intl16 = getSystemLocale.intl;
    return intl16.string(getSystemLocale.t.i1m1t8);
  } else if (tmp.FIGHTING === arg0) {
    const intl15 = getSystemLocale.intl;
    return intl15.string(getSystemLocale.t.KepcSI);
  } else if (tmp.PUZZLE === arg0) {
    const intl14 = getSystemLocale.intl;
    return intl14.string(getSystemLocale.t.rm7Ggs);
  } else if (tmp.CARD_GAME === arg0) {
    const intl13 = getSystemLocale.intl;
    return intl13.string(getSystemLocale.t.kX85vy);
  } else if (tmp.EDUCATION === arg0) {
    const intl12 = getSystemLocale.intl;
    return intl12.string(getSystemLocale.t.klIi67);
  } else if (tmp.FITNESS === arg0) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.GOaaFb);
  } else if (tmp.GAMBLING === arg0) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t["X8/Ee9"]);
  } else if (tmp.MUSIC_RHYTHM === arg0) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.qPgrgw);
  } else if (tmp.PARTY_MINI_GAME === arg0) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.diBclF);
  } else if (tmp.PINBALL === arg0) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t["1+ottx"]);
  } else if (tmp.TRIVIA_BOARD_GAME === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.aLlxjC);
  } else if (tmp.TACTICAL === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.LRPgbt);
  } else if (tmp.INDIE === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.hz9Xvj);
  } else if (tmp.ARCADE === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.Sbxowr);
  } else if (tmp.POINT_AND_CLICK === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.vcerEn);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9b4eUr"]);
  }
};
export const canUserInstall = function canUserInstall(type) {
  const obj = _httpGetWithCountryCodeQuery;
  const result = obj.nativePlatformTypeToSKUOperatingSystem(set.getPlatform());
  let hasItem = type.type === constants.DURABLE_PRIMARY;
  if (hasItem) {
    hasItem = null != result;
  }
  if (hasItem) {
    const supportedOperatingSystems = type.supportedOperatingSystems;
    hasItem = supportedOperatingSystems.includes(result);
  }
  return hasItem;
};
export const getReadablePreorderReleaseDate = function getReadablePreorderReleaseDate(arg0) {
  let preorderApproximateReleaseDate;
  let preorderReleaseAt;
  let tmp3;
  let tmp4;
  ({ preorderReleaseAt, preorderApproximateReleaseDate } = arg0);
  if (null != preorderReleaseAt) {
    return preorderReleaseAt.format("MMMM DD");
  } else if (null == preorderApproximateReleaseDate) {
    return null;
  } else {
    let num = 0;
    if (0 < items.length) {
      [tmp3, tmp4] = callback(items[num], 2);
      const obj = t(preorderApproximateReleaseDate, tmp3, true);
      while (!obj.isValid()) {
        num = num + 1;
      }
      return obj.format(tmp4);
    }
    return preorderApproximateReleaseDate;
  }
};
export const isThirdPartySKU = function isThirdPartySKU(arg0) {
  return arg0 === constants2.SOCIAL_LAYER_GAME_ITEM;
};