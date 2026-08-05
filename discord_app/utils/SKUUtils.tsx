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
  let obj = matchPath /* matchPath */;
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
    const intl70 = getSystemLocale /* getSystemLocale */.intl;
    return intl70.string(getSystemLocale /* getSystemLocale */.t["1o2/IM"]);
  } else if (tmp.ACTION_RPG === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl69 = getSystemLocale /* getSystemLocale */.intl;
    return intl69.string(getSystemLocale /* getSystemLocale */.t.e9Yo4H);
  } else if (tmp.BRAWLER === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl68 = getSystemLocale /* getSystemLocale */.intl;
    return intl68.string(getSystemLocale /* getSystemLocale */.t.WCkEjT);
  } else if (tmp.HACK_AND_SLASH === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl67 = getSystemLocale /* getSystemLocale */.intl;
    return intl67.string(getSystemLocale /* getSystemLocale */.t.xQ4VmK);
  } else if (tmp.PLATFORMER === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl66 = getSystemLocale /* getSystemLocale */.intl;
    return intl66.string(getSystemLocale /* getSystemLocale */.t.WA3189);
  } else if (tmp.STEALTH === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl65 = getSystemLocale /* getSystemLocale */.intl;
    return intl65.string(getSystemLocale /* getSystemLocale */.t["6UPFdw"]);
  } else if (tmp.SURVIVAL === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl64 = getSystemLocale /* getSystemLocale */.intl;
    return intl64.string(getSystemLocale /* getSystemLocale */.t.SVPCt9);
  } else if (tmp.ADVENTURE === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl63 = getSystemLocale /* getSystemLocale */.intl;
    return intl63.string(getSystemLocale /* getSystemLocale */.t["15p8on"]);
  } else if (tmp.ACTION_ADVENTURE === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl62 = getSystemLocale /* getSystemLocale */.intl;
    return intl62.string(getSystemLocale /* getSystemLocale */.t.AxkUBp);
  } else if (tmp.METROIDVANIA === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl61 = getSystemLocale /* getSystemLocale */.intl;
    return intl61.string(getSystemLocale /* getSystemLocale */.t.Iwr38m);
  } else if (tmp.OPEN_WORLD === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl60 = getSystemLocale /* getSystemLocale */.intl;
    return intl60.string(getSystemLocale /* getSystemLocale */.t["2HRHJO"]);
  } else if (tmp.PSYCHOLOGICAL_HORROR === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl59 = getSystemLocale /* getSystemLocale */.intl;
    return intl59.string(getSystemLocale /* getSystemLocale */.t["/IwK3s"]);
  } else if (tmp.SANDBOX === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl58 = getSystemLocale /* getSystemLocale */.intl;
    return intl58.string(getSystemLocale /* getSystemLocale */.t["2+Vu4Q"]);
  } else if (tmp.SURVIVAL_HORROR === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl57 = getSystemLocale /* getSystemLocale */.intl;
    return intl57.string(getSystemLocale /* getSystemLocale */.t.CCzRiK);
  } else if (tmp.VISUAL_NOVEL === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl56 = getSystemLocale /* getSystemLocale */.intl;
    return intl56.string(getSystemLocale /* getSystemLocale */.t.FE7rnk);
  } else if (tmp.DRIVING_RACING === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl55 = getSystemLocale /* getSystemLocale */.intl;
    return intl55.string(getSystemLocale /* getSystemLocale */.t.Erzgca);
  } else if (tmp.VEHICULAR_COMBAT === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl54 = getSystemLocale /* getSystemLocale */.intl;
    return intl54.string(getSystemLocale /* getSystemLocale */.t.YQHhog);
  } else if (tmp.MASSIVELY_MULTIPLAYER === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl53 = getSystemLocale /* getSystemLocale */.intl;
    return intl53.string(getSystemLocale /* getSystemLocale */.t["5CNg1o"]);
  } else if (tmp.MMORPG === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl52 = getSystemLocale /* getSystemLocale */.intl;
    return intl52.string(getSystemLocale /* getSystemLocale */.t["c4NuO/"]);
  } else if (tmp.ROLE_PLAYING === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl51 = getSystemLocale /* getSystemLocale */.intl;
    return intl51.string(getSystemLocale /* getSystemLocale */.t.yayVgs);
  } else if (tmp.DUNGEON_CRAWLER === arg0) {
    tmp = require;
    tmp = dependencyMap;
    const intl50 = getSystemLocale /* getSystemLocale */.intl;
    return intl50.string(getSystemLocale /* getSystemLocale */.t.qicemc);
  } else if (tmp.ROGUELIKE === arg0) {
    const intl49 = getSystemLocale /* getSystemLocale */.intl;
    return intl49.string(getSystemLocale /* getSystemLocale */.t.zWzaCv);
  } else if (tmp.SHOOTER === arg0) {
    const intl48 = getSystemLocale /* getSystemLocale */.intl;
    return intl48.string(getSystemLocale /* getSystemLocale */.t["+pk6sd"]);
  } else if (tmp.LIGHT_GUN === arg0) {
    const intl47 = getSystemLocale /* getSystemLocale */.intl;
    return intl47.string(getSystemLocale /* getSystemLocale */.t.TDS96y);
  } else if (tmp.SHOOT_EM_UP === arg0) {
    const intl46 = getSystemLocale /* getSystemLocale */.intl;
    return intl46.string(getSystemLocale /* getSystemLocale */.t.wltDUE);
  } else if (tmp.FPS === arg0) {
    const intl45 = getSystemLocale /* getSystemLocale */.intl;
    return intl45.string(getSystemLocale /* getSystemLocale */.t.olTaq4);
  } else if (tmp.DUAL_JOYSTICK_SHOOTER === arg0) {
    const intl44 = getSystemLocale /* getSystemLocale */.intl;
    return intl44.string(getSystemLocale /* getSystemLocale */.t["SN+NS3"]);
  } else if (tmp.SIMULATION === arg0) {
    const intl43 = getSystemLocale /* getSystemLocale */.intl;
    return intl43.string(getSystemLocale /* getSystemLocale */.t.sxMPdm);
  } else if (tmp.FLIGHT_SIMULATOR === arg0) {
    const intl42 = getSystemLocale /* getSystemLocale */.intl;
    return intl42.string(getSystemLocale /* getSystemLocale */.t["Q7msr+"]);
  } else if (tmp.TRAIN_SIMULATOR === arg0) {
    const intl41 = getSystemLocale /* getSystemLocale */.intl;
    return intl41.string(getSystemLocale /* getSystemLocale */.t.ZtECf3);
  } else if (tmp.LIFE_SIMULATOR === arg0) {
    const intl40 = getSystemLocale /* getSystemLocale */.intl;
    return intl40.string(getSystemLocale /* getSystemLocale */.t.byt5Fo);
  } else if (tmp.FISHING === arg0) {
    const intl39 = getSystemLocale /* getSystemLocale */.intl;
    return intl39.string(getSystemLocale /* getSystemLocale */.t.BKwiwY);
  } else if (tmp.SPORTS === arg0) {
    const intl38 = getSystemLocale /* getSystemLocale */.intl;
    return intl38.string(getSystemLocale /* getSystemLocale */.t.O0B7XM);
  } else if (tmp.BASEBALL === arg0) {
    const intl37 = getSystemLocale /* getSystemLocale */.intl;
    return intl37.string(getSystemLocale /* getSystemLocale */.t["jPYb/z"]);
  } else if (tmp.BASKETBALL === arg0) {
    const intl36 = getSystemLocale /* getSystemLocale */.intl;
    return intl36.string(getSystemLocale /* getSystemLocale */.t["o+D1Bm"]);
  } else if (tmp.BILLIARDS === arg0) {
    const intl35 = getSystemLocale /* getSystemLocale */.intl;
    return intl35.string(getSystemLocale /* getSystemLocale */.t.PJ5o4E);
  } else if (tmp.BOWLING === arg0) {
    const intl34 = getSystemLocale /* getSystemLocale */.intl;
    return intl34.string(getSystemLocale /* getSystemLocale */.t["82afJw"]);
  } else if (tmp.BOXING === arg0) {
    const intl33 = getSystemLocale /* getSystemLocale */.intl;
    return intl33.string(getSystemLocale /* getSystemLocale */.t.DQvfei);
  } else if (tmp.FOOTBALL === arg0) {
    const intl32 = getSystemLocale /* getSystemLocale */.intl;
    return intl32.string(getSystemLocale /* getSystemLocale */.t.slOYkj);
  } else if (tmp.GOLF === arg0) {
    const intl31 = getSystemLocale /* getSystemLocale */.intl;
    return intl31.string(getSystemLocale /* getSystemLocale */.t.aeQPlG);
  } else if (tmp.HOCKEY === arg0) {
    const intl30 = getSystemLocale /* getSystemLocale */.intl;
    return intl30.string(getSystemLocale /* getSystemLocale */.t.g7oe5X);
  } else if (tmp.SKATEBOARDING_SKATING === arg0) {
    const intl29 = getSystemLocale /* getSystemLocale */.intl;
    return intl29.string(getSystemLocale /* getSystemLocale */.t.yBDEP0);
  } else if (tmp.SNOWBOARDING_SKIING === arg0) {
    const intl28 = getSystemLocale /* getSystemLocale */.intl;
    return intl28.string(getSystemLocale /* getSystemLocale */.t.GVaAci);
  } else if (tmp.SOCCER === arg0) {
    const intl27 = getSystemLocale /* getSystemLocale */.intl;
    return intl27.string(getSystemLocale /* getSystemLocale */.t.KPznxl);
  } else if (tmp.TRACK_FIELD === arg0) {
    const intl26 = getSystemLocale /* getSystemLocale */.intl;
    return intl26.string(getSystemLocale /* getSystemLocale */.t["hJ62Q/"]);
  } else if (tmp.SURFING_WAKEBOARDING === arg0) {
    const intl25 = getSystemLocale /* getSystemLocale */.intl;
    return intl25.string(getSystemLocale /* getSystemLocale */.t.PSh0CV);
  } else if (tmp.WRESTLING === arg0) {
    const intl24 = getSystemLocale /* getSystemLocale */.intl;
    return intl24.string(getSystemLocale /* getSystemLocale */.t["3y9hAT"]);
  } else if (tmp.STRATEGY === arg0) {
    const intl23 = getSystemLocale /* getSystemLocale */.intl;
    return intl23.string(getSystemLocale /* getSystemLocale */.t.KovTD8);
  } else if (tmp.FOUR_X === arg0) {
    const intl22 = getSystemLocale /* getSystemLocale */.intl;
    return intl22.string(getSystemLocale /* getSystemLocale */.t["19h4dX"]);
  } else if (tmp.ARTILLERY === arg0) {
    const intl21 = getSystemLocale /* getSystemLocale */.intl;
    return intl21.string(getSystemLocale /* getSystemLocale */.t.sBqLsP);
  } else if (tmp.RTS === arg0) {
    const intl20 = getSystemLocale /* getSystemLocale */.intl;
    return intl20.string(getSystemLocale /* getSystemLocale */.t.yS4ddj);
  } else if (tmp.TOWER_DEFENSE === arg0) {
    const intl19 = getSystemLocale /* getSystemLocale */.intl;
    return intl19.string(getSystemLocale /* getSystemLocale */.t.SULyIO);
  } else if (tmp.TURN_BASED_STRATEGY === arg0) {
    const intl18 = getSystemLocale /* getSystemLocale */.intl;
    return intl18.string(getSystemLocale /* getSystemLocale */.t.VDsbru);
  } else if (tmp.WARGAME === arg0) {
    const intl17 = getSystemLocale /* getSystemLocale */.intl;
    return intl17.string(getSystemLocale /* getSystemLocale */.t.YDCIrO);
  } else if (tmp.MOBA === arg0) {
    const intl16 = getSystemLocale /* getSystemLocale */.intl;
    return intl16.string(getSystemLocale /* getSystemLocale */.t.i1m1t8);
  } else if (tmp.FIGHTING === arg0) {
    const intl15 = getSystemLocale /* getSystemLocale */.intl;
    return intl15.string(getSystemLocale /* getSystemLocale */.t.KepcSI);
  } else if (tmp.PUZZLE === arg0) {
    const intl14 = getSystemLocale /* getSystemLocale */.intl;
    return intl14.string(getSystemLocale /* getSystemLocale */.t.rm7Ggs);
  } else if (tmp.CARD_GAME === arg0) {
    const intl13 = getSystemLocale /* getSystemLocale */.intl;
    return intl13.string(getSystemLocale /* getSystemLocale */.t.kX85vy);
  } else if (tmp.EDUCATION === arg0) {
    const intl12 = getSystemLocale /* getSystemLocale */.intl;
    return intl12.string(getSystemLocale /* getSystemLocale */.t.klIi67);
  } else if (tmp.FITNESS === arg0) {
    const intl11 = getSystemLocale /* getSystemLocale */.intl;
    return intl11.string(getSystemLocale /* getSystemLocale */.t.GOaaFb);
  } else if (tmp.GAMBLING === arg0) {
    const intl10 = getSystemLocale /* getSystemLocale */.intl;
    return intl10.string(getSystemLocale /* getSystemLocale */.t["X8/Ee9"]);
  } else if (tmp.MUSIC_RHYTHM === arg0) {
    const intl9 = getSystemLocale /* getSystemLocale */.intl;
    return intl9.string(getSystemLocale /* getSystemLocale */.t.qPgrgw);
  } else if (tmp.PARTY_MINI_GAME === arg0) {
    const intl8 = getSystemLocale /* getSystemLocale */.intl;
    return intl8.string(getSystemLocale /* getSystemLocale */.t.diBclF);
  } else if (tmp.PINBALL === arg0) {
    const intl7 = getSystemLocale /* getSystemLocale */.intl;
    return intl7.string(getSystemLocale /* getSystemLocale */.t["1+ottx"]);
  } else if (tmp.TRIVIA_BOARD_GAME === arg0) {
    const intl6 = getSystemLocale /* getSystemLocale */.intl;
    return intl6.string(getSystemLocale /* getSystemLocale */.t.aLlxjC);
  } else if (tmp.TACTICAL === arg0) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    return intl5.string(getSystemLocale /* getSystemLocale */.t.LRPgbt);
  } else if (tmp.INDIE === arg0) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    return intl4.string(getSystemLocale /* getSystemLocale */.t.hz9Xvj);
  } else if (tmp.ARCADE === arg0) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    return intl3.string(getSystemLocale /* getSystemLocale */.t.Sbxowr);
  } else if (tmp.POINT_AND_CLICK === arg0) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.string(getSystemLocale /* getSystemLocale */.t.vcerEn);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["9b4eUr"]);
  }
};
export const canUserInstall = function canUserInstall(type) {
  const obj = _httpGetWithCountryCodeQuery /* _httpGetWithCountryCodeQuery */;
  const result = obj.nativePlatformTypeToSKUOperatingSystem(set /* set */.getPlatform());
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