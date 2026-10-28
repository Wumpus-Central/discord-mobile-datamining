// === Module 15287: LocalAppDetectionUtils ===

// Module 15287 (LocalAppDetectionUtils)
import LocalAppDetectionTypes from "LocalAppDetectionTypes" /* 15286 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConsentStore from "ConsentStore" /* 6705 */;

require = fn;
function getDetectableApp(arg0) {
  if (LocalAppDetectionTypes.DetectableAppNames.ROBLOX === arg0) {
    return { androidScheme: "roblox", iosScheme: "roblox" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.MINECRAFT === arg0) {
    return { androidScheme: "minecraft", iosScheme: "minecraft" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.FORTNITE === arg0) {
    return { androidScheme: "fortnite", iosScheme: "com.epicgames.fortnite" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.GENSHIN === arg0) {
    return { androidScheme: "genshin", iosScheme: "genshin" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.PUBG_MOBILE === arg0) {
    return { androidScheme: "pubgmobile", iosScheme: "igame1320" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.CALL_OF_DUTY_MOBILE === arg0) {
    return { androidScheme: "codm", iosScheme: "codm" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.CLASH_OF_CLANS === arg0) {
    return { androidScheme: "clashofclans", iosScheme: "clashofclans" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.MOBILE_LEGENDS_BANG_BANG === arg0) {
    return { androidScheme: "mobilelegends", iosScheme: "mobilelegends" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.GARENA_FREE_FIRE === arg0) {
    return { androidScheme: "garenafreefire", iosScheme: "freefire" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.POKEMON_GO === arg0) {
    return { androidScheme: "pokemongo", iosScheme: "pokemongo" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.POKEMON_TCG_POCKET === arg0) {
    return { androidScheme: "pokemontcgp", iosScheme: "pokemontcgp" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.CLASH_ROYALE === arg0) {
    return { androidScheme: "clashroyale", iosScheme: "clashroyale" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.AMONG_US === arg0) {
    return { androidScheme: "amongus", iosScheme: "amongus" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.MONOPOLY_GO === arg0) {
    return { androidScheme: "monopolygo", iosScheme: "monopolygo" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.BRAWL_STARS === arg0) {
    return { androidScheme: "brawlstars", iosScheme: "brawlstars" };
  } else if (LocalAppDetectionTypes.DetectableAppNames.BRAWLHALLA === arg0) {
    return { androidScheme: "brawlhalla", iosScheme: null };
  } else if (LocalAppDetectionTypes.DetectableAppNames.WUTHERING_WAVES === arg0) {
    return { androidScheme: "wutheringwaves", iosScheme: "akioversea" };
  }
}
let closure_8 = async function _detectLocalApps(arg0) {
  dependencyMap = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp;
            closure_3 = tmp2;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_0 = {};
            if (ConsentStore.hasConsented(constants.PERSONALIZATION)) {
              closure_2 = dependencyMap;
              closure_1 = dependencyMap[Symbol.iterator]();
              if (closure_1 !== undefined) {
                c6 = 1;
                closure_131_1 = tmp24;
                closure_131_2 = closure_132_7(closure_131_1);
                let obj10 = closure_132_0(closure_132_2[4]);
                let tmp55 = closure_131_2;
                closure_131_3 = obj10.isIOS() ? tmp55.iosScheme : tmp55.androidScheme;
                if (null != closure_131_3) {
                  let obj4 = closure_132_0(closure_132_2[5]);
                  c7 = 2;
                  c8 = 1;
                  let obj5 = { value: obj4.canOpenUrlScheme(closure_131_3), done: false };
                  return obj5;
                } else {
                  let flag = false;
                  closure_131_0[closure_131_1] = false;
                }
              }
            }
            let obj6 = closure_132_1(closure_132_2[7]);
            let obj7 = { type: "LOCAL_APP_DETECTION_COMPLETE", result: null };
            obj7.result = closure_131_0;
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
          closure_131_4 = value;
          closure_131_0[closure_131_1] = closure_131_4;
          let obj = closure_132_1(closure_132_2[6]);
          let obj9 = { scheme: null, result: null };
          obj9.scheme = closure_131_3;
          obj9.result = closure_131_4;
          let trackResult = obj.track(closure_132_5.CAN_OPEN_URL_REQUESTED, obj9);
        }
        c6 = 0;
      }
    }
  })();
};
const Constants = fn(1084);
({ AnalyticEvents: hasOwnProperty, Consents: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionUtils.tsx");

export const detectLocalApps = function detectLocalApps() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};