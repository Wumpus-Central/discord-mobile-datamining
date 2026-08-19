// discord_app/utils/SKUUtils.tsx
import obj132 from "PlatformUtils.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import tDefault from "../../_runtime/03975_t.js";
import matchPath from "../modules/routing/matchPathCompat.tsx";
import _httpGetWithCountryCodeQuery from "StoreUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import ME from "../Constants.tsx";

require = fn;
const GameGenres = ME.GameGenres;
({ SKUTypes: c5, Routes: closure_6, SKUProductLines: error } = ME);
let closure_8 = {};
let closure_9 = {};
const merged = Object.assign(GameGenres);
const frozen = Object.freeze({ ALL: -1 });
const keys = Object.keys(frozen);
const item = keys.forEach((item, index) => {
  const replaced = item.toLowerCase().replace(/_/g, "-");
  closure_8[replaced] = frozen[item];
  closure_9[frozen[item]] = replaced;
});
const items = [["YYYY-MM-DD", "MMMM DD, Y"], ["YYYY-MM", "MMMM Y"], ["MM-DD", "MMMM DD"], ["MM", "MMMM"], ["YYYY", "Y"]];
let result = require("obj132").fileFinishedImporting("utils/SKUUtils.tsx");

export const getSKUIdFromURL = function getSKUIdFromURL(pathname) {
  const obj = { path: closure_6.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug") };
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
  if (GameGenres.ACTION === arg0) {
    const intl70 = getSystemLocale.intl;
    return intl70.string(getSystemLocale.t["1o2/IM"]);
  } else if (GameGenres.ACTION_RPG === arg0) {
    const intl69 = getSystemLocale.intl;
    return intl69.string(getSystemLocale.t.e9Yo4H);
  } else if (GameGenres.BRAWLER === arg0) {
    const intl68 = getSystemLocale.intl;
    return intl68.string(getSystemLocale.t.WCkEjT);
  } else if (GameGenres.HACK_AND_SLASH === arg0) {
    const intl67 = getSystemLocale.intl;
    return intl67.string(getSystemLocale.t.xQ4VmK);
  } else if (GameGenres.PLATFORMER === arg0) {
    const intl66 = getSystemLocale.intl;
    return intl66.string(getSystemLocale.t.WA3189);
  } else if (GameGenres.STEALTH === arg0) {
    const intl65 = getSystemLocale.intl;
    return intl65.string(getSystemLocale.t["6UPFdw"]);
  } else if (GameGenres.SURVIVAL === arg0) {
    const intl64 = getSystemLocale.intl;
    return intl64.string(getSystemLocale.t.SVPCt9);
  } else if (GameGenres.ADVENTURE === arg0) {
    const intl63 = getSystemLocale.intl;
    return intl63.string(getSystemLocale.t["15p8on"]);
  } else if (GameGenres.ACTION_ADVENTURE === arg0) {
    const intl62 = getSystemLocale.intl;
    return intl62.string(getSystemLocale.t.AxkUBp);
  } else if (GameGenres.METROIDVANIA === arg0) {
    const intl61 = getSystemLocale.intl;
    return intl61.string(getSystemLocale.t.Iwr38m);
  } else if (GameGenres.OPEN_WORLD === arg0) {
    const intl60 = getSystemLocale.intl;
    return intl60.string(getSystemLocale.t["2HRHJO"]);
  } else if (GameGenres.PSYCHOLOGICAL_HORROR === arg0) {
    const intl59 = getSystemLocale.intl;
    return intl59.string(getSystemLocale.t["/IwK3s"]);
  } else if (GameGenres.SANDBOX === arg0) {
    const intl58 = getSystemLocale.intl;
    return intl58.string(getSystemLocale.t["2+Vu4Q"]);
  } else if (GameGenres.SURVIVAL_HORROR === arg0) {
    const intl57 = getSystemLocale.intl;
    return intl57.string(getSystemLocale.t.CCzRiK);
  } else if (GameGenres.VISUAL_NOVEL === arg0) {
    const intl56 = getSystemLocale.intl;
    return intl56.string(getSystemLocale.t.FE7rnk);
  } else if (GameGenres.DRIVING_RACING === arg0) {
    const intl55 = getSystemLocale.intl;
    return intl55.string(getSystemLocale.t.Erzgca);
  } else if (GameGenres.VEHICULAR_COMBAT === arg0) {
    const intl54 = getSystemLocale.intl;
    return intl54.string(getSystemLocale.t.YQHhog);
  } else if (GameGenres.MASSIVELY_MULTIPLAYER === arg0) {
    const intl53 = getSystemLocale.intl;
    return intl53.string(getSystemLocale.t["5CNg1o"]);
  } else if (GameGenres.MMORPG === arg0) {
    const intl52 = getSystemLocale.intl;
    return intl52.string(getSystemLocale.t["c4NuO/"]);
  } else if (GameGenres.ROLE_PLAYING === arg0) {
    const intl51 = getSystemLocale.intl;
    return intl51.string(getSystemLocale.t.yayVgs);
  } else if (GameGenres.DUNGEON_CRAWLER === arg0) {
    const intl50 = getSystemLocale.intl;
    return intl50.string(getSystemLocale.t.qicemc);
  } else if (GameGenres.ROGUELIKE === arg0) {
    const intl49 = getSystemLocale.intl;
    return intl49.string(getSystemLocale.t.zWzaCv);
  } else if (GameGenres.SHOOTER === arg0) {
    const intl48 = getSystemLocale.intl;
    return intl48.string(getSystemLocale.t["+pk6sd"]);
  } else if (GameGenres.LIGHT_GUN === arg0) {
    const intl47 = getSystemLocale.intl;
    return intl47.string(getSystemLocale.t.TDS96y);
  } else if (GameGenres.SHOOT_EM_UP === arg0) {
    const intl46 = getSystemLocale.intl;
    return intl46.string(getSystemLocale.t.wltDUE);
  } else if (GameGenres.FPS === arg0) {
    const intl45 = getSystemLocale.intl;
    return intl45.string(getSystemLocale.t.olTaq4);
  } else if (GameGenres.DUAL_JOYSTICK_SHOOTER === arg0) {
    const intl44 = getSystemLocale.intl;
    return intl44.string(getSystemLocale.t["SN+NS3"]);
  } else if (GameGenres.SIMULATION === arg0) {
    const intl43 = getSystemLocale.intl;
    return intl43.string(getSystemLocale.t.sxMPdm);
  } else if (GameGenres.FLIGHT_SIMULATOR === arg0) {
    const intl42 = getSystemLocale.intl;
    return intl42.string(getSystemLocale.t["Q7msr+"]);
  } else if (GameGenres.TRAIN_SIMULATOR === arg0) {
    const intl41 = getSystemLocale.intl;
    return intl41.string(getSystemLocale.t.ZtECf3);
  } else if (GameGenres.LIFE_SIMULATOR === arg0) {
    const intl40 = getSystemLocale.intl;
    return intl40.string(getSystemLocale.t.byt5Fo);
  } else if (GameGenres.FISHING === arg0) {
    const intl39 = getSystemLocale.intl;
    return intl39.string(getSystemLocale.t.BKwiwY);
  } else if (GameGenres.SPORTS === arg0) {
    const intl38 = getSystemLocale.intl;
    return intl38.string(getSystemLocale.t.O0B7XM);
  } else if (GameGenres.BASEBALL === arg0) {
    const intl37 = getSystemLocale.intl;
    return intl37.string(getSystemLocale.t["jPYb/z"]);
  } else if (GameGenres.BASKETBALL === arg0) {
    const intl36 = getSystemLocale.intl;
    return intl36.string(getSystemLocale.t["o+D1Bm"]);
  } else if (GameGenres.BILLIARDS === arg0) {
    const intl35 = getSystemLocale.intl;
    return intl35.string(getSystemLocale.t.PJ5o4E);
  } else if (GameGenres.BOWLING === arg0) {
    const intl34 = getSystemLocale.intl;
    return intl34.string(getSystemLocale.t["82afJw"]);
  } else if (GameGenres.BOXING === arg0) {
    const intl33 = getSystemLocale.intl;
    return intl33.string(getSystemLocale.t.DQvfei);
  } else if (GameGenres.FOOTBALL === arg0) {
    const intl32 = getSystemLocale.intl;
    return intl32.string(getSystemLocale.t.slOYkj);
  } else if (GameGenres.GOLF === arg0) {
    const intl31 = getSystemLocale.intl;
    return intl31.string(getSystemLocale.t.aeQPlG);
  } else if (GameGenres.HOCKEY === arg0) {
    const intl30 = getSystemLocale.intl;
    return intl30.string(getSystemLocale.t.g7oe5X);
  } else if (GameGenres.SKATEBOARDING_SKATING === arg0) {
    const intl29 = getSystemLocale.intl;
    return intl29.string(getSystemLocale.t.yBDEP0);
  } else if (GameGenres.SNOWBOARDING_SKIING === arg0) {
    const intl28 = getSystemLocale.intl;
    return intl28.string(getSystemLocale.t.GVaAci);
  } else if (GameGenres.SOCCER === arg0) {
    const intl27 = getSystemLocale.intl;
    return intl27.string(getSystemLocale.t.KPznxl);
  } else if (GameGenres.TRACK_FIELD === arg0) {
    const intl26 = getSystemLocale.intl;
    return intl26.string(getSystemLocale.t["hJ62Q/"]);
  } else if (GameGenres.SURFING_WAKEBOARDING === arg0) {
    const intl25 = getSystemLocale.intl;
    return intl25.string(getSystemLocale.t.PSh0CV);
  } else if (GameGenres.WRESTLING === arg0) {
    const intl24 = getSystemLocale.intl;
    return intl24.string(getSystemLocale.t["3y9hAT"]);
  } else if (GameGenres.STRATEGY === arg0) {
    const intl23 = getSystemLocale.intl;
    return intl23.string(getSystemLocale.t.KovTD8);
  } else if (GameGenres.FOUR_X === arg0) {
    const intl22 = getSystemLocale.intl;
    return intl22.string(getSystemLocale.t["19h4dX"]);
  } else if (GameGenres.ARTILLERY === arg0) {
    const intl21 = getSystemLocale.intl;
    return intl21.string(getSystemLocale.t.sBqLsP);
  } else if (GameGenres.RTS === arg0) {
    const intl20 = getSystemLocale.intl;
    return intl20.string(getSystemLocale.t.yS4ddj);
  } else if (GameGenres.TOWER_DEFENSE === arg0) {
    const intl19 = getSystemLocale.intl;
    return intl19.string(getSystemLocale.t.SULyIO);
  } else if (GameGenres.TURN_BASED_STRATEGY === arg0) {
    const intl18 = getSystemLocale.intl;
    return intl18.string(getSystemLocale.t.VDsbru);
  } else if (GameGenres.WARGAME === arg0) {
    const intl17 = getSystemLocale.intl;
    return intl17.string(getSystemLocale.t.YDCIrO);
  } else if (GameGenres.MOBA === arg0) {
    const intl16 = getSystemLocale.intl;
    return intl16.string(getSystemLocale.t.i1m1t8);
  } else if (GameGenres.FIGHTING === arg0) {
    const intl15 = getSystemLocale.intl;
    return intl15.string(getSystemLocale.t.KepcSI);
  } else if (GameGenres.PUZZLE === arg0) {
    const intl14 = getSystemLocale.intl;
    return intl14.string(getSystemLocale.t.rm7Ggs);
  } else if (GameGenres.CARD_GAME === arg0) {
    const intl13 = getSystemLocale.intl;
    return intl13.string(getSystemLocale.t.kX85vy);
  } else if (GameGenres.EDUCATION === arg0) {
    const intl12 = getSystemLocale.intl;
    return intl12.string(getSystemLocale.t.klIi67);
  } else if (GameGenres.FITNESS === arg0) {
    const intl11 = getSystemLocale.intl;
    return intl11.string(getSystemLocale.t.GOaaFb);
  } else if (GameGenres.GAMBLING === arg0) {
    const intl10 = getSystemLocale.intl;
    return intl10.string(getSystemLocale.t["X8/Ee9"]);
  } else if (GameGenres.MUSIC_RHYTHM === arg0) {
    const intl9 = getSystemLocale.intl;
    return intl9.string(getSystemLocale.t.qPgrgw);
  } else if (GameGenres.PARTY_MINI_GAME === arg0) {
    const intl8 = getSystemLocale.intl;
    return intl8.string(getSystemLocale.t.diBclF);
  } else if (GameGenres.PINBALL === arg0) {
    const intl7 = getSystemLocale.intl;
    return intl7.string(getSystemLocale.t["1+ottx"]);
  } else if (GameGenres.TRIVIA_BOARD_GAME === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.aLlxjC);
  } else if (GameGenres.TACTICAL === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.LRPgbt);
  } else if (GameGenres.INDIE === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.hz9Xvj);
  } else if (GameGenres.ARCADE === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.Sbxowr);
  } else if (GameGenres.POINT_AND_CLICK === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.vcerEn);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9b4eUr"]);
  }
};
export const canUserInstall = function canUserInstall(type) {
  const obj = _httpGetWithCountryCodeQuery;
  const result = obj.nativePlatformTypeToSKUOperatingSystem(obj132.getPlatform());
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
  ({ preorderReleaseAt, preorderApproximateReleaseDate } = arg0);
  if (null != preorderReleaseAt) {
    return preorderReleaseAt.format("MMMM DD");
  } else if (null == preorderApproximateReleaseDate) {
    return null;
  } else {
    let num = 0;
    if (0 < items.length) {
      [tmp3, tmp4] = callback(items[num], 2);
      const obj = tDefault(preorderApproximateReleaseDate, tmp3, true);
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