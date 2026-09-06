// discord_app/utils/SKUUtils.tsx
import util from "../intl/index.native.tsx";
import PlatformUtils from "PlatformUtils.tsx";
import _modDef4153 from "../../_runtime/metro/04153__.js";
import matchPathCompat from "../modules/routing/matchPathCompat.tsx";
import StoreUtils from "StoreUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";

require = fn;
const Constants = fn(1074);
const GameGenres = Constants.GameGenres;
({ SKUTypes: hasOwnProperty, Routes: metroRequire, SKUProductLines: closure_7 } = Constants);
let closure_8 = {};
let closure_9 = {};
const merged = Object.assign(GameGenres);
const frozen = Object.freeze({ ALL: -1 });
const keys = Object.keys(frozen);
const item = keys.forEach((item) => {
  const replaced = item.toLowerCase().replace(/_/g, "-");
  closure_8[replaced] = frozen[item];
  closure_9[frozen[item]] = replaced;
});
const items = [
  ["YYYY-MM-DD", "MMMM DD, Y"],
  ["YYYY-MM", "MMMM Y"],
  ["MM-DD", "MMMM DD"],
  ["MM", "MMMM"],
  ["YYYY", "Y"],
];
const size = fn(2);
let result = size.fileFinishedImporting("utils/SKUUtils.tsx");

export const getSKUIdFromURL = function getSKUIdFromURL(pathname) {
  const obj = { path: timestampProducer.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug") };
  const matchPathResult = obj.matchPath(pathname, obj);
  let skuId = null;
  if (null != matchPathResult) {
    skuId = matchPathResult.params.skuId;
  }
  return skuId;
};
export const getGenreURLSlugFromId = function getGenreURLSlugFromId(arg0) {
  return closure_9[arg0];
};
export const getGenreIdFromURLSlug = function getGenreIdFromURLSlug(arg0) {
  return closure_8[arg0];
};
export const getGenreText = function getGenreText(arg0) {
  if (GameGenres.ACTION === arg0) {
    const intl70 = util.intl;
    return intl70.string(util.t["1o2/IM"]);
  } else if (GameGenres.ACTION_RPG === arg0) {
    const intl69 = util.intl;
    return intl69.string(util.t.e9Yo4H);
  } else if (GameGenres.BRAWLER === arg0) {
    const intl68 = util.intl;
    return intl68.string(util.t.WCkEjT);
  } else if (GameGenres.HACK_AND_SLASH === arg0) {
    const intl67 = util.intl;
    return intl67.string(util.t.xQ4VmK);
  } else if (GameGenres.PLATFORMER === arg0) {
    const intl66 = util.intl;
    return intl66.string(util.t.WA3189);
  } else if (GameGenres.STEALTH === arg0) {
    const intl65 = util.intl;
    return intl65.string(util.t["6UPFdw"]);
  } else if (GameGenres.SURVIVAL === arg0) {
    const intl64 = util.intl;
    return intl64.string(util.t.SVPCt9);
  } else if (GameGenres.ADVENTURE === arg0) {
    const intl63 = util.intl;
    return intl63.string(util.t["15p8on"]);
  } else if (GameGenres.ACTION_ADVENTURE === arg0) {
    const intl62 = util.intl;
    return intl62.string(util.t.AxkUBp);
  } else if (GameGenres.METROIDVANIA === arg0) {
    const intl61 = util.intl;
    return intl61.string(util.t.Iwr38m);
  } else if (GameGenres.OPEN_WORLD === arg0) {
    const intl60 = util.intl;
    return intl60.string(util.t["2HRHJO"]);
  } else if (GameGenres.PSYCHOLOGICAL_HORROR === arg0) {
    const intl59 = util.intl;
    return intl59.string(util.t["/IwK3s"]);
  } else if (GameGenres.SANDBOX === arg0) {
    const intl58 = util.intl;
    return intl58.string(util.t["2+Vu4Q"]);
  } else if (GameGenres.SURVIVAL_HORROR === arg0) {
    const intl57 = util.intl;
    return intl57.string(util.t.CCzRiK);
  } else if (GameGenres.VISUAL_NOVEL === arg0) {
    const intl56 = util.intl;
    return intl56.string(util.t.FE7rnk);
  } else if (GameGenres.DRIVING_RACING === arg0) {
    const intl55 = util.intl;
    return intl55.string(util.t.Erzgca);
  } else if (GameGenres.VEHICULAR_COMBAT === arg0) {
    const intl54 = util.intl;
    return intl54.string(util.t.YQHhog);
  } else if (GameGenres.MASSIVELY_MULTIPLAYER === arg0) {
    const intl53 = util.intl;
    return intl53.string(util.t["5CNg1o"]);
  } else if (GameGenres.MMORPG === arg0) {
    const intl52 = util.intl;
    return intl52.string(util.t["c4NuO/"]);
  } else if (GameGenres.ROLE_PLAYING === arg0) {
    const intl51 = util.intl;
    return intl51.string(util.t.yayVgs);
  } else if (GameGenres.DUNGEON_CRAWLER === arg0) {
    const intl50 = util.intl;
    return intl50.string(util.t.qicemc);
  } else if (GameGenres.ROGUELIKE === arg0) {
    const intl49 = util.intl;
    return intl49.string(util.t.zWzaCv);
  } else if (GameGenres.SHOOTER === arg0) {
    const intl48 = util.intl;
    return intl48.string(util.t["+pk6sd"]);
  } else if (GameGenres.LIGHT_GUN === arg0) {
    const intl47 = util.intl;
    return intl47.string(util.t.TDS96y);
  } else if (GameGenres.SHOOT_EM_UP === arg0) {
    const intl46 = util.intl;
    return intl46.string(util.t.wltDUE);
  } else if (GameGenres.FPS === arg0) {
    const intl45 = util.intl;
    return intl45.string(util.t.olTaq4);
  } else if (GameGenres.DUAL_JOYSTICK_SHOOTER === arg0) {
    const intl44 = util.intl;
    return intl44.string(util.t["SN+NS3"]);
  } else if (GameGenres.SIMULATION === arg0) {
    const intl43 = util.intl;
    return intl43.string(util.t.sxMPdm);
  } else if (GameGenres.FLIGHT_SIMULATOR === arg0) {
    const intl42 = util.intl;
    return intl42.string(util.t["Q7msr+"]);
  } else if (GameGenres.TRAIN_SIMULATOR === arg0) {
    const intl41 = util.intl;
    return intl41.string(util.t.ZtECf3);
  } else if (GameGenres.LIFE_SIMULATOR === arg0) {
    const intl40 = util.intl;
    return intl40.string(util.t.byt5Fo);
  } else if (GameGenres.FISHING === arg0) {
    const intl39 = util.intl;
    return intl39.string(util.t.BKwiwY);
  } else if (GameGenres.SPORTS === arg0) {
    const intl38 = util.intl;
    return intl38.string(util.t.O0B7XM);
  } else if (GameGenres.BASEBALL === arg0) {
    const intl37 = util.intl;
    return intl37.string(util.t["jPYb/z"]);
  } else if (GameGenres.BASKETBALL === arg0) {
    const intl36 = util.intl;
    return intl36.string(util.t["o+D1Bm"]);
  } else if (GameGenres.BILLIARDS === arg0) {
    const intl35 = util.intl;
    return intl35.string(util.t.PJ5o4E);
  } else if (GameGenres.BOWLING === arg0) {
    const intl34 = util.intl;
    return intl34.string(util.t["82afJw"]);
  } else if (GameGenres.BOXING === arg0) {
    const intl33 = util.intl;
    return intl33.string(util.t.DQvfei);
  } else if (GameGenres.FOOTBALL === arg0) {
    const intl32 = util.intl;
    return intl32.string(util.t.slOYkj);
  } else if (GameGenres.GOLF === arg0) {
    const intl31 = util.intl;
    return intl31.string(util.t.aeQPlG);
  } else if (GameGenres.HOCKEY === arg0) {
    const intl30 = util.intl;
    return intl30.string(util.t.g7oe5X);
  } else if (GameGenres.SKATEBOARDING_SKATING === arg0) {
    const intl29 = util.intl;
    return intl29.string(util.t.yBDEP0);
  } else if (GameGenres.SNOWBOARDING_SKIING === arg0) {
    const intl28 = util.intl;
    return intl28.string(util.t.GVaAci);
  } else if (GameGenres.SOCCER === arg0) {
    const intl27 = util.intl;
    return intl27.string(util.t.KPznxl);
  } else if (GameGenres.TRACK_FIELD === arg0) {
    const intl26 = util.intl;
    return intl26.string(util.t["hJ62Q/"]);
  } else if (GameGenres.SURFING_WAKEBOARDING === arg0) {
    const intl25 = util.intl;
    return intl25.string(util.t.PSh0CV);
  } else if (GameGenres.WRESTLING === arg0) {
    const intl24 = util.intl;
    return intl24.string(util.t["3y9hAT"]);
  } else if (GameGenres.STRATEGY === arg0) {
    const intl23 = util.intl;
    return intl23.string(util.t.KovTD8);
  } else if (GameGenres.FOUR_X === arg0) {
    const intl22 = util.intl;
    return intl22.string(util.t["19h4dX"]);
  } else if (GameGenres.ARTILLERY === arg0) {
    const intl21 = util.intl;
    return intl21.string(util.t.sBqLsP);
  } else if (GameGenres.RTS === arg0) {
    const intl20 = util.intl;
    return intl20.string(util.t.yS4ddj);
  } else if (GameGenres.TOWER_DEFENSE === arg0) {
    const intl19 = util.intl;
    return intl19.string(util.t.SULyIO);
  } else if (GameGenres.TURN_BASED_STRATEGY === arg0) {
    const intl18 = util.intl;
    return intl18.string(util.t.VDsbru);
  } else if (GameGenres.WARGAME === arg0) {
    const intl17 = util.intl;
    return intl17.string(util.t.YDCIrO);
  } else if (GameGenres.MOBA === arg0) {
    const intl16 = util.intl;
    return intl16.string(util.t.i1m1t8);
  } else if (GameGenres.FIGHTING === arg0) {
    const intl15 = util.intl;
    return intl15.string(util.t.KepcSI);
  } else if (GameGenres.PUZZLE === arg0) {
    const intl14 = util.intl;
    return intl14.string(util.t.rm7Ggs);
  } else if (GameGenres.CARD_GAME === arg0) {
    const intl13 = util.intl;
    return intl13.string(util.t.kX85vy);
  } else if (GameGenres.EDUCATION === arg0) {
    const intl12 = util.intl;
    return intl12.string(util.t.klIi67);
  } else if (GameGenres.FITNESS === arg0) {
    const intl11 = util.intl;
    return intl11.string(util.t.GOaaFb);
  } else if (GameGenres.GAMBLING === arg0) {
    const intl10 = util.intl;
    return intl10.string(util.t["X8/Ee9"]);
  } else if (GameGenres.MUSIC_RHYTHM === arg0) {
    const intl9 = util.intl;
    return intl9.string(util.t.qPgrgw);
  } else if (GameGenres.PARTY_MINI_GAME === arg0) {
    const intl8 = util.intl;
    return intl8.string(util.t.diBclF);
  } else if (GameGenres.PINBALL === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t["1+ottx"]);
  } else if (GameGenres.TRIVIA_BOARD_GAME === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.aLlxjC);
  } else if (GameGenres.TACTICAL === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t.LRPgbt);
  } else if (GameGenres.INDIE === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.hz9Xvj);
  } else if (GameGenres.ARCADE === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.Sbxowr);
  } else if (GameGenres.POINT_AND_CLICK === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.vcerEn);
  } else {
    const intl = util.intl;
    return intl.string(util.t["9b4eUr"]);
  }
};
export const canUserInstall = function canUserInstall(type) {
  const obj = StoreUtils;
  const result = obj.nativePlatformTypeToSKUOperatingSystem(PlatformUtils.getPlatform());
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
      [tmp3, tmp4] = _slicedToArray(items[num], 2);
      const obj = _modDef4153(preorderApproximateReleaseDate, tmp3, true);
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
