// === Module 13713: LocalAppDetectionUtils ===

// Module 13713 (LocalAppDetectionUtils)
import LocalAppDetectionTypes from "LocalAppDetectionTypes" /* 13712 */;
import GameCommunityUpsellExperiment from "GameCommunityUpsellExperiment" /* 13714 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConsentStore from "ConsentStore" /* 6595 */;

require = fn;
function isGameCommunityAddServerEntryEnabled() {
  const GameCommunityAddServerEntryExperiment = GameCommunityUpsellExperiment.GameCommunityAddServerEntryExperiment;
  return GameCommunityAddServerEntryExperiment.getConfig({ location: "LocalAppDetectionUtils" }).enabled;
}
function getDetectableApp(arg0) {
  if (LocalAppDetectionTypes.DetectableAppNames.ROBLOX === arg0) {
    return { androidScheme: "roblox", iosScheme: "roblox" };
  } else if (tmp(13712).DetectableAppNames.MINECRAFT === arg0) {
    let obj = { androidScheme: "minecraft", iosScheme: "minecraft", predicate: isGameCommunityAddServerEntryEnabled };
    return obj;
  } else if (tmp(13712).DetectableAppNames.FORTNITE === arg0) {
    obj = { androidScheme: "fortnite", iosScheme: "com.epicgames.fortnite", predicate: isGameCommunityAddServerEntryEnabled };
    return obj;
  } else if (tmp(13712).DetectableAppNames.GENSHIN === arg0) {
    const obj1 = { androidScheme: "genshin", iosScheme: "genshin", predicate: isGameCommunityAddServerEntryEnabled };
    return obj1;
  } else if (tmp(13712).DetectableAppNames.PUBG_MOBILE === arg0) {
    const obj2 = { androidScheme: "pubgmobile", iosScheme: "igame1320", predicate: isGameCommunityAddServerEntryEnabled };
    return obj2;
  } else if (tmp(13712).DetectableAppNames.CALL_OF_DUTY_MOBILE === arg0) {
    const obj3 = { androidScheme: "codm", iosScheme: "codm", predicate: isGameCommunityAddServerEntryEnabled };
    return obj3;
  } else if (tmp(13712).DetectableAppNames.CLASH_OF_CLANS === arg0) {
    const obj4 = { androidScheme: "clashofclans", iosScheme: "clashofclans", predicate: isGameCommunityAddServerEntryEnabled };
    return obj4;
  } else if (tmp(13712).DetectableAppNames.MOBILE_LEGENDS_BANG_BANG === arg0) {
    const obj5 = { androidScheme: "mobilelegends", iosScheme: "mobilelegends", predicate: isGameCommunityAddServerEntryEnabled };
    return obj5;
  } else if (tmp(13712).DetectableAppNames.GARENA_FREE_FIRE === arg0) {
    const obj6 = { androidScheme: "garenafreefire", iosScheme: "freefire", predicate: isGameCommunityAddServerEntryEnabled };
    return obj6;
  } else if (tmp(13712).DetectableAppNames.POKEMON_GO === arg0) {
    const obj7 = { androidScheme: "pokemongo", iosScheme: "pokemongo", predicate: isGameCommunityAddServerEntryEnabled };
    return obj7;
  } else if (tmp(13712).DetectableAppNames.POKEMON_TCG_POCKET === arg0) {
    const obj8 = { androidScheme: "pokemontcgp", iosScheme: "pokemontcgp", predicate: isGameCommunityAddServerEntryEnabled };
    return obj8;
  } else if (tmp(13712).DetectableAppNames.CLASH_ROYALE === arg0) {
    const obj9 = { androidScheme: "clashroyale", iosScheme: "clashroyale", predicate: isGameCommunityAddServerEntryEnabled };
    return obj9;
  } else if (tmp(13712).DetectableAppNames.AMONG_US === arg0) {
    const obj10 = { androidScheme: "amongus", iosScheme: "amongus", predicate: isGameCommunityAddServerEntryEnabled };
    return obj10;
  } else if (tmp(13712).DetectableAppNames.MONOPOLY_GO === arg0) {
    const obj11 = { androidScheme: "monopolygo", iosScheme: "monopolygo", predicate: isGameCommunityAddServerEntryEnabled };
    return obj11;
  } else if (tmp(13712).DetectableAppNames.BRAWL_STARS === arg0) {
    const obj12 = { androidScheme: "brawlstars", iosScheme: "brawlstars", predicate: isGameCommunityAddServerEntryEnabled };
    return obj12;
  } else if (tmp(13712).DetectableAppNames.BRAWLHALLA === arg0) {
    const obj13 = { androidScheme: "brawlhalla", iosScheme: null, predicate: isGameCommunityAddServerEntryEnabled };
    return obj13;
  } else if (tmp(13712).DetectableAppNames.WUTHERING_WAVES === arg0) {
    obj = { androidScheme: "wutheringwaves", iosScheme: "akioversea", predicate: isGameCommunityAddServerEntryEnabled };
    return obj;
  }
}
let closure_9 = async function _detectLocalApps(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp;
          closure_3 = tmp2;
          let tmp47 = closure_0;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_0 = {};
          if (ConsentStore.hasConsented(constants.PERSONALIZATION)) {
            closure_2 = tmp47;
            importDefault = tmp47[Symbol.iterator]();
            if (importDefault !== undefined) {
              c6 = 1;
              closure_131_1 = tmp24;
              closure_131_2 = closure_132_8(closure_131_1);
              let obj10 = closure_132_0(closure_132_2[5]);
              let tmp57 = closure_131_2;
              closure_131_3 = obj10.isIOS() ? tmp57.iosScheme : tmp57.androidScheme;
              if (null != closure_131_3) {
                let predicate = closure_131_2.predicate;
                let predicateResult;
                if (predicate != null) {
                  predicateResult = predicate();
                }
                if (false !== predicateResult) {
                  let obj3 = closure_132_0(closure_132_2[6]);
                  c7 = 2;
                  c8 = 1;
                  let obj1 = { value: obj3.canOpenUrlScheme(closure_131_3), done: false };
                  return obj1;
                }
              }
              closure_131_0[closure_131_1] = false;
            }
          }
          let obj6 = closure_132_1(closure_132_2[8]);
          let obj2 = { type: "LOCAL_APP_DETECTION_COMPLETE", result: null };
          obj2.result = closure_131_0;
          let dispatchResult = obj6.dispatch(obj2);
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (1 === tmp5) {
        c6 = 0;
        importDefault.return();
        throw hasOwnProperty;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        importDefault.return();
        c8 = 3;
        obj3 = { value, done: true };
        return obj3;
      } else {
        closure_131_4 = value;
        closure_131_0[closure_131_1] = closure_131_4;
        obj = closure_132_1(closure_132_2[7]);
        let obj4 = { scheme: null, result: null };
        obj4.scheme = closure_131_3;
        obj4.result = closure_131_4;
        let trackResult = obj.track(closure_132_5.CAN_OPEN_URL_REQUESTED, obj4);
      }
      c6 = 0;
    }
  }
};
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, Consents: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionUtils.tsx");

export const detectLocalApps = function detectLocalApps() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};