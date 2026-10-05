// === Module 13526: LocalAppDetectionUtils ===

// Module 13526 (LocalAppDetectionUtils)
import LocalAppDetectionTypes from "LocalAppDetectionTypes" /* 13525 */;
import GameCommunityUpsellExperiment from "GameCommunityUpsellExperiment" /* 13527 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConsentStore from "ConsentStore" /* 6084 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_1, predicate, result2, scheme;

let hasOwnProperty;
let metroRequire;
function isGameCommunityAddServerEntryEnabled() {
  const GameCommunityAddServerEntryExperiment = GameCommunityUpsellExperiment.GameCommunityAddServerEntryExperiment;
  return GameCommunityAddServerEntryExperiment.getConfig({ location: "LocalAppDetectionUtils" }).enabled;
}
function getDetectableApp(arg0) {
  if (LocalAppDetectionTypes.DetectableAppNames.ROBLOX === arg0) {
    return { androidScheme: "roblox", iosScheme: "roblox" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.MINECRAFT === arg0) {
    return { androidScheme: "minecraft", iosScheme: "minecraft", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.FORTNITE === arg0) {
    return { androidScheme: "fortnite", iosScheme: "com.epicgames.fortnite", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.GENSHIN === arg0) {
    return { androidScheme: "genshin", iosScheme: "genshin", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.PUBG_MOBILE === arg0) {
    return { androidScheme: "pubgmobile", iosScheme: "igame1320", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.CALL_OF_DUTY_MOBILE === arg0) {
    return { androidScheme: "codm", iosScheme: "codm", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.CLASH_OF_CLANS === arg0) {
    return { androidScheme: "clashofclans", iosScheme: "clashofclans", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.MOBILE_LEGENDS_BANG_BANG === arg0) {
    return { androidScheme: "mobilelegends", iosScheme: "mobilelegends", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.GARENA_FREE_FIRE === arg0) {
    return { androidScheme: "garenafreefire", iosScheme: "freefire", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.POKEMON_GO === arg0) {
    return { androidScheme: "pokemongo", iosScheme: "pokemongo", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.POKEMON_TCG_POCKET === arg0) {
    return { androidScheme: "pokemontcgp", iosScheme: "pokemontcgp", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.CLASH_ROYALE === arg0) {
    return { androidScheme: "clashroyale", iosScheme: "clashroyale", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.AMONG_US === arg0) {
    return { androidScheme: "amongus", iosScheme: "amongus", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.MONOPOLY_GO === arg0) {
    return { androidScheme: "monopolygo", iosScheme: "monopolygo", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.BRAWL_STARS === arg0) {
    return { androidScheme: "brawlstars", iosScheme: "brawlstars", predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.BRAWLHALLA === arg0) {
    return { androidScheme: "brawlhalla", iosScheme: null, predicate: isGameCommunityAddServerEntryEnabled };
  } else if (LocalAppDetectionTypes.DetectableAppNames.WUTHERING_WAVES === arg0) {
    return { androidScheme: "wutheringwaves", iosScheme: "akioversea", predicate: isGameCommunityAddServerEntryEnabled };
  }
}
let obj = function _detectLocalApps() {
  obj = _asyncToGenerator(async (result) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        while (true) {
          let c1;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let tmp47 = result;
              c1 = undefined;
              predicate = undefined;
              scheme = undefined;
              result2 = undefined;
              result = {};
              if (ConsentStore.hasConsented(constants.PERSONALIZATION)) {
                predicate = tmp47;
                closure_1 = tmp47[Symbol.iterator]();
                if (closure_1 !== undefined) {
                  c6 = 1;
                  c1 = tmp24;
                  predicate = closure_132_8(c1);
                  let obj10 = closure_132_0(closure_132_2[5]);
                  let tmp57 = predicate;
                  scheme = obj10.isIOS() ? tmp57.iosScheme : tmp57.androidScheme;
                  if (null != scheme) {
                    predicate = predicate.predicate;
                    let predicateResult;
                    if (predicate != null) {
                      predicateResult = predicate();
                    }
                    if (false !== predicateResult) {
                      let obj4 = closure_132_0(closure_132_2[6]);
                      c7 = 2;
                      c8 = 1;
                      let obj5 = { value: obj4.canOpenUrlScheme(scheme), done: false };
                      return obj5;
                    }
                  }
                  result[c1] = false;
                }
              }
              let obj6 = closure_132_1(closure_132_2[8]);
              let obj7 = { type: "LOCAL_APP_DETECTION_COMPLETE", result };
              let dispatchResult = obj6.dispatch(obj7);
              c8 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (1 === tmp5) {
            c6 = 0;
            closure_1.return();
            throw closure_1_5;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_1.return();
            c8 = 3;
            let obj8 = { value, done: true };
            return obj8;
          } else {
            result2 = value;
            result[c1] = result2;
            obj = closure_132_1(closure_132_2[7]);
            let obj9 = { scheme, result: result2 };
            let trackResult = obj.track(closure_132_5.CAN_OPEN_URL_REQUESTED, obj9);
          }
          c6 = 0;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: hasOwnProperty, Consents: metroRequire } = Constants);
let result = size.fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionUtils.tsx");

export const detectLocalApps = function detectLocalApps() {
  return obj(...arguments);
};