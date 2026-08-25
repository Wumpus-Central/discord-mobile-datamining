// === Module 13180: isGameCommunityAddServerEntryEnabled ===

// Module 13180 (isGameCommunityAddServerEntryEnabled)
import DetectableAppNames from "DetectableAppNames" /* 13179 */;
import GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT from "GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT" /* 13181 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "hasConsented" /* 5935 */;
import ME from "ME" /* 676 */;

require = arg1;
function isGameCommunityAddServerEntryEnabled() {
  const GameCommunityAddServerEntryExperiment = GAME_COMMUNITY_ADD_SERVER_ENTRY_EXPERIMENT.GameCommunityAddServerEntryExperiment;
  return GameCommunityAddServerEntryExperiment.getConfig({ location: "LocalAppDetectionUtils" }).enabled;
}
function getDetectableApp(arg0) {
  if (DetectableAppNames.DetectableAppNames.ROBLOX === arg0) {
    return { androidScheme: "roblox", iosScheme: "roblox" };
  } else if (tmp(13179).DetectableAppNames.MINECRAFT === arg0) {
    let obj = { androidScheme: "minecraft", iosScheme: "minecraft", predicate: null };
    obj[2] = isGameCommunityAddServerEntryEnabled;
    return obj;
  } else if (tmp(13179).DetectableAppNames.FORTNITE === arg0) {
    obj = { androidScheme: "fortnite", iosScheme: "com.epicgames.fortnite", predicate: null };
    obj[2] = isGameCommunityAddServerEntryEnabled;
    return obj;
  } else if (tmp(13179).DetectableAppNames.GENSHIN === arg0) {
    obj1 = { androidScheme: "genshin", iosScheme: "genshin", predicate: null };
    obj1[2] = isGameCommunityAddServerEntryEnabled;
    return obj1;
  } else if (tmp(13179).DetectableAppNames.PUBG_MOBILE === arg0) {
    const obj2 = { androidScheme: "pubgmobile", iosScheme: "igame1320", predicate: null };
    obj2[2] = isGameCommunityAddServerEntryEnabled;
    return obj2;
  } else if (tmp(13179).DetectableAppNames.CALL_OF_DUTY_MOBILE === arg0) {
    const obj3 = { androidScheme: "codm", iosScheme: "codm", predicate: null };
    obj3[2] = isGameCommunityAddServerEntryEnabled;
    return obj3;
  } else if (tmp(13179).DetectableAppNames.CLASH_OF_CLANS === arg0) {
    const obj4 = { androidScheme: "clashofclans", iosScheme: "clashofclans", predicate: null };
    obj4[2] = isGameCommunityAddServerEntryEnabled;
    return obj4;
  } else if (tmp(13179).DetectableAppNames.MOBILE_LEGENDS_BANG_BANG === arg0) {
    const obj5 = { androidScheme: "mobilelegends", iosScheme: "mobilelegends", predicate: null };
    obj5[2] = isGameCommunityAddServerEntryEnabled;
    return obj5;
  } else if (tmp(13179).DetectableAppNames.GARENA_FREE_FIRE === arg0) {
    const obj6 = { androidScheme: "garenafreefire", iosScheme: "freefire", predicate: null };
    obj6[2] = isGameCommunityAddServerEntryEnabled;
    return obj6;
  } else if (tmp(13179).DetectableAppNames.POKEMON_GO === arg0) {
    const obj7 = { androidScheme: "pokemongo", iosScheme: "pokemongo", predicate: null };
    obj7[2] = isGameCommunityAddServerEntryEnabled;
    return obj7;
  } else if (tmp(13179).DetectableAppNames.POKEMON_TCG_POCKET === arg0) {
    const obj8 = { androidScheme: "pokemontcgp", iosScheme: "pokemontcgp", predicate: null };
    obj8[2] = isGameCommunityAddServerEntryEnabled;
    return obj8;
  } else if (tmp(13179).DetectableAppNames.CLASH_ROYALE === arg0) {
    const obj9 = { androidScheme: "clashroyale", iosScheme: "clashroyale", predicate: null };
    obj9[2] = isGameCommunityAddServerEntryEnabled;
    return obj9;
  } else if (tmp(13179).DetectableAppNames.AMONG_US === arg0) {
    const obj10 = { androidScheme: "amongus", iosScheme: "amongus", predicate: null };
    obj10[2] = isGameCommunityAddServerEntryEnabled;
    return obj10;
  } else if (tmp(13179).DetectableAppNames.MONOPOLY_GO === arg0) {
    const obj11 = { androidScheme: "monopolygo", iosScheme: "monopolygo", predicate: null };
    obj11[2] = isGameCommunityAddServerEntryEnabled;
    return obj11;
  } else if (tmp(13179).DetectableAppNames.BRAWL_STARS === arg0) {
    const obj12 = { androidScheme: "brawlstars", iosScheme: "brawlstars", predicate: null };
    obj12[2] = isGameCommunityAddServerEntryEnabled;
    return obj12;
  } else if (tmp(13179).DetectableAppNames.BRAWLHALLA === arg0) {
    const obj13 = { androidScheme: "brawlhalla", iosScheme: null, predicate: null };
    obj13[2] = isGameCommunityAddServerEntryEnabled;
    return obj13;
  } else if (tmp(13179).DetectableAppNames.WUTHERING_WAVES === arg0) {
    obj = { androidScheme: "wutheringwaves", iosScheme: "akioversea", predicate: null };
    obj[2] = isGameCommunityAddServerEntryEnabled;
    return obj;
  }
}
function _detectLocalApps() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          let num = 2;
          v0 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              let num7 = 3;
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp;
              closure_3 = tmp2;
              let tmp48 = callback;
              let lib;
              let predicate;
              closure_3 = undefined;
              closure_4 = undefined;
              callback = {};
              let tmp49 = closure_1_4;
              let tmp50 = constants2;
              if (closure_1_4.hasConsented(constants2.PERSONALIZATION)) {
                predicate = tmp48;
                let tmp21 = tmp48;
                predicate = tmp48;
                lib = tmp48[Symbol.iterator]();
                let tmp22 = predicate;
                let tmp23 = lib;
                if (lib !== undefined) {
                  let tmp51 = closure_3;
                  let tmp52 = closure_4;
                  constants2 = 1;
                  lib = tmp24;
                  let tmp53 = v0;
                  let tmp54 = lib;
                  predicate = v0(lib);
                  let tmp55 = callback;
                  let tmp56 = predicate;
                  let obj10 = callback(predicate[5]);
                  let tmp57 = closure_3;
                  let tmp58 = predicate;
                  let tmp25 = closure_3;
                  closure_3 = obj10.isIOS() ? tmp58.iosScheme : tmp58.androidScheme;
                  let tmp26 = closure_3;
                  if (null != closure_3) {
                    let tmp27 = closure_3;
                    predicate = predicate.predicate;
                    let predicateResult;
                    if (predicate != null) {
                      predicateResult = predicate();
                    }
                    if (false !== predicateResult) {
                      let tmp32 = closure_3;
                      let tmp33 = closure_4;
                      let tmp34 = callback;
                      let tmp35 = predicate;
                      let obj3 = callback(predicate[6]);
                      let tmp36 = closure_3;
                      c7 = 2;
                      let num4 = 1;
                      v0 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = obj3.canOpenUrlScheme(closure_3);
                      return obj1;
                    }
                  }
                  let tmp29 = closure_3;
                  let tmp30 = callback;
                  let tmp31 = lib;
                  callback[lib] = false;
                }
              }
              let tmp37 = closure_3;
              let tmp38 = closure_4;
              let tmp39 = lib;
              let tmp40 = predicate;
              let obj6 = lib(predicate[8]);
              let obj2 = { type: "LOCAL_APP_DETECTION_COMPLETE", result: null };
              let tmp41 = callback;
              obj2[1] = callback;
              let dispatchResult = obj6.dispatch(obj2);
              let num5 = 3;
              v0 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (1 === tmp5) {
            let tmp18 = constants;
            let tmp19 = constants;
            constants2 = 0;
            let tmp20 = lib;
            lib.return();
            throw constants;
          } else if (arg0 === 1) {
            let num3 = 3;
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants2 = 0;
            let tmp17 = lib;
            lib.return();
            let num2 = 3;
            v0 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            let tmp6 = closure_3;
            let tmp7 = closure_4;
            closure_4 = arg1;
            let tmp8 = callback;
            let tmp9 = lib;
            let tmp10 = closure_4;
            callback[lib] = closure_4;
            let tmp11 = lib;
            let tmp12 = predicate;
            obj = lib(predicate[7]);
            let tmp13 = constants;
            let obj4 = { scheme: null, result: null };
            let tmp14 = closure_3;
            obj4[0] = closure_3;
            let tmp15 = closure_4;
            obj4[1] = closure_4;
            let trackResult = obj.track(constants.CAN_OPEN_URL_REQUESTED, obj4);
          }
          constants2 = 0;
        }
      }
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: c5, Consents: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionUtils.tsx");

export const detectLocalApps = function detectLocalApps(ALL_DETECTABLE_APP_NAMES) {
  const self = this;
  const apply = _detectLocalApps.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};