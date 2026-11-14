// discord_app/modules/waterwheels/actions/native/useWaterwheelsActions.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import openPrivacySettingsDefault from "../../../native_permissions/mobile/openPrivacySettings.native.tsx";
import GameActionCreators from "../../../games/GameActionCreators.tsx";
import WaterwheelsCardTypes from "../../cards/WaterwheelsCardTypes.tsx";
import NotificationUtilsDefault from "../../../../utils/native/NotificationUtils.tsx";
import WaterwheelsDiscoverJoinAttribution from "../../discover/WaterwheelsDiscoverJoinAttribution.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GameStore from "../../../games/GameStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PushNotificationPermissionStore from "../../../../stores/native/PushNotificationPermissionStore.tsx";

require = fn;
function openErrorToast(text) {
  ToastActionCreatorsDefault.open("waterwheels-action-error", { text });
}
function openWaterwheelsGame() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _openWaterwheelsGame(arg0) {
  if (c13 === 2) {
    c13 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp26 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c13 = 2;
      switch (c12) {
        case 0:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c13 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_6 = tmp3;
            closure_7 = tmp24;
            closure_135_0 = closure_0;
            closure_135_1 = closure_1;
            closure_135_2 = undefined;
            closure_135_3 = undefined;
            closure_135_4 = undefined;
            closure_135_3 = WaterwheelsDiscoverJoinAttribution.captureDiscoverJoinAttribution(
              AuthenticationStore,
              () => {},
              DispatcherDefault,
            );
            c10 = 3;
            if (null == game.getGame(closure_0)) {
              items = [closure_0];
              c12 = 4;
              c13 = 1;
              const obj4 = { value: GameActionCreators.fetchGamesWithSupplementalData(items), done: false };
              return obj4;
            } else if (closure_135_3.isValid()) {
              closure_135_4 = (function isOpenable() {
                game = game.getGame(closure_1_0);
                let tmp2 = null != game;
                if (tmp2) {
                  tmp2 = !closure_0(dependencyMap[16]).isGameDisabled(game);
                  const obj = closure_0(dependencyMap[16]);
                }
                return tmp2;
              })();
              if (closure_135_4) {
                const obj5 = { gameId: closure_135_0, gameProfileModalChecks: null, source: null };
                const obj6 = { gameId: closure_135_0, shouldOpenGameProfile: closure_135_4 };
                obj5.gameProfileModalChecks = obj6;
                obj5.source = closure_134_0(closure_134_2[19]).GameProfileSources.GameSheet;
                closure_134_1(closure_134_2[18]).openGameProfileModal(obj5);
                if (closure_135_3.isValid()) {
                  closure_135_2 = { outcome: "succeeded" };
                }
                const obj15 = closure_134_1(closure_134_2[18]);
              } else {
                closure_135_2 = { outcome: "failed", reason: "other" };
              }
              c10 = 1;
            } else {
              c10 = 9;
              let outcome;
              if (closure_135_2 != null) {
                outcome = closure_135_2.outcome;
              }
              let isValidResult = "failed" === outcome;
              if (isValidResult) {
                isValidResult = closure_135_3.isValid();
              }
              if (isValidResult) {
                const intl3 = closure_134_0(closure_134_2[11]).intl;
                closure_134_14(intl3.string(closure_134_0(closure_134_2[11]).t.F8FvUy));
              }
              c10 = 12;
              let isValidResult1 = null != closure_135_2;
              if (isValidResult1) {
                isValidResult1 = closure_135_3.isValid();
              }
              if (isValidResult1) {
                let tmp206Result;
                if (closure_135_1 != null) {
                  tmp206Result = tmp206(closure_135_2);
                }
                c12 = 16;
                c13 = 1;
                const obj7 = { value: tmp206Result, done: false };
                return obj7;
              } else {
                c10 = 11;
                c10 = 0;
                closure_135_3.dispose();
                c13 = 3;
                c10 = 0;
                closure_135_3.dispose();
                throw closure_11;
              }
            }
          }
          break;
        case 1:
          closure_8 = closure_11;
          c10 = 2;
          let outcome1;
          if (closure_135_2 != null) {
            outcome1 = closure_135_2.outcome;
          }
          let isValidResult2 = "failed" === outcome1;
          if (isValidResult2) {
            isValidResult2 = closure_135_3.isValid();
          }
          if (isValidResult2) {
            const intl2 = closure_134_0(closure_134_2[11]).intl;
            closure_134_14(intl2.string(closure_134_0(closure_134_2[11]).t.F8FvUy));
          }
          c10 = 21;
          let isValidResult3 = null != closure_135_2;
          if (isValidResult3) {
            isValidResult3 = closure_135_3.isValid();
          }
          if (isValidResult3) {
            let tmp179Result;
            if (closure_135_1 != null) {
              tmp179Result = tmp179(closure_135_2);
            }
            c12 = 29;
            c13 = 1;
            const obj8 = { value: tmp179Result, done: false };
            return obj8;
          } else {
            c10 = 20;
            c10 = 0;
            closure_135_3.dispose();
            throw closure_8;
          }
          break;
        case 2:
          closure_3 = closure_11;
          c10 = 22;
          let isValidResult4 = null != closure_135_2;
          if (isValidResult4) {
            isValidResult4 = closure_135_3.isValid();
          }
          if (!isValidResult4) {
            c10 = 19;
            c10 = 0;
            closure_135_3.dispose();
            throw closure_3;
          } else {
            let tmp151Result;
            if (closure_135_1 != null) {
              tmp151Result = tmp151(closure_135_2);
            }
            c12 = 31;
            c13 = 1;
            const obj9 = { value: tmp151Result, done: false };
            return obj9;
          }
          break;
        case 3:
          c10 = 1;
          if (closure_135_3.isValid()) {
            closure_135_2 = { outcome: "failed", reason: "other" };
          }
          c10 = 14;
          let outcome2;
          if (closure_135_2 != null) {
            outcome2 = closure_135_2.outcome;
          }
          let isValidResult5 = "failed" === outcome2;
          if (isValidResult5) {
            isValidResult5 = closure_135_3.isValid();
          }
          if (isValidResult5) {
            const intl4 = closure_134_0(closure_134_2[11]).intl;
            closure_134_14(intl4.string(closure_134_0(closure_134_2[11]).t.F8FvUy));
          }
          c10 = 17;
          let isValidResult6 = null != closure_135_2;
          if (isValidResult6) {
            isValidResult6 = closure_135_3.isValid();
          }
          if (isValidResult6) {
            let tmp244Result;
            if (closure_135_1 != null) {
              tmp244Result = tmp244(closure_135_2);
            }
            c12 = 23;
            c13 = 1;
            const obj10 = { value: tmp244Result, done: false };
            return obj10;
          } else {
            c10 = 16;
            c10 = 0;
            closure_135_3.dispose();
            c13 = 3;
            c10 = 0;
            closure_135_3.dispose();
            throw closure_11;
          }
          break;
        case 4:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else {
            closure_2 = value;
            if (arg0 === 2) {
              c10 = 4;
              let outcome3;
              if (closure_135_2 != null) {
                outcome3 = closure_135_2.outcome;
              }
              let isValidResult7 = "failed" === outcome3;
              if (isValidResult7) {
                isValidResult7 = closure_135_3.isValid();
              }
              if (isValidResult7) {
                const intl = closure_134_0(closure_134_2[11]).intl;
                closure_134_14(intl.string(closure_134_0(closure_134_2[11]).t.F8FvUy));
              }
              c10 = 7;
              let isValidResult8 = null != closure_135_2;
              if (isValidResult8) {
                isValidResult8 = closure_135_3.isValid();
              }
              if (isValidResult8) {
                let tmp136Result;
                if (closure_135_1 != null) {
                  tmp136Result = tmp136(closure_135_2);
                }
                c12 = 9;
                c13 = 1;
                const obj11 = { value: tmp136Result, done: false };
                return obj11;
              } else {
                c10 = 6;
                c10 = 0;
                closure_135_3.dispose();
                c13 = 3;
                c10 = 0;
                closure_135_3.dispose();
                throw closure_11;
              }
            }
          }
          break;
        case 5:
          closure_9 = closure_11;
          c10 = 8;
          let isValidResult9 = null != closure_135_2;
          if (isValidResult9) {
            isValidResult9 = closure_135_3.isValid();
          }
          if (isValidResult9) {
            let tmp112Result;
            if (closure_135_1 != null) {
              tmp112Result = tmp112(closure_135_2);
            }
            c12 = 11;
            c13 = 1;
            const obj12 = { value: tmp112Result, done: false };
            return obj12;
          } else {
            c10 = 5;
            c10 = 0;
            closure_135_3.dispose();
            throw closure_9;
          }
          break;
        case 6:
          c10 = 0;
          closure_135_3.dispose();
          throw closure_11;
        case 7:
          break;
        case 8:
          c10 = 6;
          break;
        case 9:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_135_3.dispose();
            c13 = 3;
            const obj13 = { value, done: true };
            return obj13;
          }
          break;
        case 10:
          c10 = 5;
          break;
        case 11:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_135_3.dispose();
            c13 = 3;
            const obj14 = { value, done: true };
            return obj14;
          }
          break;
        case 12:
          game = closure_11;
          c10 = 13;
          let isValidResult10 = null != closure_135_2;
          if (isValidResult10) {
            isValidResult10 = closure_135_3.isValid();
          }
          if (isValidResult10) {
            let tmp86Result;
            if (closure_135_1 != null) {
              tmp86Result = tmp86(closure_135_2);
            }
            c12 = 18;
            c13 = 1;
            const obj16 = { value: tmp86Result, done: false };
            return obj16;
          } else {
            c10 = 10;
            c10 = 0;
            closure_135_3.dispose();
            throw game;
          }
          break;
        case 13:
          c10 = 0;
          closure_135_3.dispose();
          throw closure_11;
        case 14:
          break;
        case 15:
          c10 = 11;
          break;
        case 16:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_135_3.dispose();
            c13 = 3;
            const obj17 = { value, done: true };
            return obj17;
          }
          break;
        case 17:
          c10 = 10;
          break;
        case 18:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_135_3.dispose();
            c13 = 3;
            const obj18 = { value, done: true };
            return obj18;
          }
          break;
        case 19:
          closure_4 = closure_11;
          c10 = 18;
          let isValidResult11 = null != closure_135_2;
          if (isValidResult11) {
            isValidResult11 = closure_135_3.isValid();
          }
          if (isValidResult11) {
            let tmp60Result;
            if (closure_135_1 != null) {
              tmp60Result = tmp60(closure_135_2);
            }
            c12 = 25;
            c13 = 1;
            const obj20 = { value: tmp60Result, done: false };
            return obj20;
          } else {
            c10 = 15;
            c10 = 0;
            closure_135_3.dispose();
            throw closure_4;
          }
          break;
        case 20:
          c10 = 0;
          closure_135_3.dispose();
          throw closure_11;
        case 21:
          break;
        case 22:
          c10 = 16;
          break;
        case 23:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_135_3.dispose();
            c13 = 3;
            const obj21 = { value, done: true };
            return obj21;
          }
          break;
        case 24:
          c10 = 15;
          break;
        case 25:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_135_3.dispose();
            c13 = 3;
            const obj22 = { value, done: true };
            return obj22;
          }
          break;
        case 26:
          c10 = 0;
          closure_135_3.dispose();
          throw closure_11;
        case 27:
          c10 = 0;
          closure_135_3.dispose();
          throw closure_11;
        case 28:
          c10 = 20;
          break;
        case 29:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_135_3.dispose();
            c13 = 3;
            let obj = { value, done: true };
            return obj;
          }
          break;
        case 30:
          c10 = 19;
          break;
        default:
          if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_135_3.dispose();
            c13 = 3;
            const obj23 = { value, done: true };
            return obj23;
          }
      }
    } catch (tmp257) {
      closure_11 = tmp257;
      switch (c10) {
        case 0:
          c13 = tmp23;
          throw tmp258;
        case 1:
          c12 = tmp2;
          break;
        case 2:
          c12 = tmp;
          break;
        case 3:
          c12 = tmp23;
          break;
        case 4:
          c12 = tmp21;
          break;
        case 5:
          c12 = tmp20;
          break;
        case 6:
          c12 = tmp19;
          break;
        case 7:
          c12 = tmp18;
          break;
        case 8:
          c12 = tmp17;
          break;
        case 9:
          c12 = tmp16;
          break;
        case 10:
          c12 = tmp15;
          break;
        case 11:
          c12 = tmp14;
          break;
        case 12:
          c12 = tmp13;
          break;
        case 13:
          c12 = tmp12;
          break;
        case 14:
          c12 = tmp11;
          break;
        case 15:
          c12 = tmp10;
          break;
        case 16:
          c12 = tmp9;
          break;
        case 17:
          c12 = tmp8;
          break;
        case 18:
          c12 = tmp7;
          break;
        case 19:
          c12 = tmp6;
          break;
        case 20:
          c12 = tmp5;
          break;
        case 21:
          c12 = tmp4;
          break;
        default:
          c12 = tmp22;
      }
    }
  }
};
function requestNotifications() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _requestNotifications() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (authorizationStatus.authorizationStatus !== constants.DENIED) {
          c1 = 1;
          c0 = 1;
          const obj5 = { value: NotificationUtilsDefault.requestPermission(), done: false };
          return obj5;
        } else {
          openPrivacySettingsDefault();
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp10) {
      c0 = tmp;
      throw tmp10;
    }
  }
};
function joinWaterwheelsGuild() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _joinWaterwheelsGuild() {
  closure_1 = value;
  closure_2 = arg2;
  closure_3 = arg3;
  c13 = 0;
  c14 = 0;
  c11 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c14 === 2) {
      c14 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp21 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c14 = 2;
        switch (c13) {
          case 0:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else if (arg0 === 2) {
              c14 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_9 = tmp3;
              const assert = tmp19;
              closure_138_0 = set;
              closure_138_1 = closure_1;
              closure_138_2 = dependencyMap;
              closure_138_3 = closure_3;
              closure_138_5 = undefined;
              closure_138_6 = undefined;
              closure_138_7 = undefined;
              closure_138_8 = undefined;
              let id2;
              closure_138_10 = undefined;
              closure_138_11 = undefined;
              closure_138_12 = undefined;
              let application_status2;
              closure_138_14 = undefined;
              closure_138_15 = undefined;
              closure_138_16 = undefined;
              function hasJoinedGuild() {
                guild = c7.getGuild(closure_1_1);
                let joinedAt;
                if (guild != null) {
                  joinedAt = guild.joinedAt;
                }
                return null != joinedAt;
              }
              closure_138_4 = hasJoinedGuild;
              closure_138_17 = function canOpenVerification() {
                let isValidResult = assert.isValid();
                if (isValidResult) {
                  guild = c7.getGuild(closure_1_1);
                  let joinedAt;
                  if (guild != null) {
                    joinedAt = guild.joinedAt;
                  }
                  isValidResult = null == joinedAt;
                }
                return isValidResult;
              };
              if (!hasJoinedGuild()) {
                if (!set.has(closure_1)) {
                  set.add(closure_1);
                  if (closure_3 != null) {
                    closure_3(closure_1, true);
                  }
                  closure_138_7 = false;
                  closure_138_8 = false;
                  id2 = id.getId();
                  closure_138_10 = WaterwheelsDiscoverJoinAttribution.captureDiscoverJoinAttribution(
                    id,
                    () => {},
                    DispatcherDefault,
                  );
                  c11 = 3;
                  c13 = 4;
                  c14 = 1;
                  let obj4 = {
                    value: GuildActionCreatorsDefault.joinGuild(closure_1, { autoNavigate: false }),
                    done: false,
                  };
                  return obj4;
                }
              }
              c14 = 3;
              return { value: "HermesInternal", done: null };
            }
            break;
          case 1:
            closure_8 = closure_12;
            c11 = 0;
            closure_138_18 = function report() {
              const self = this;
              const apply = closure_19.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            closure_138_19 = function _report() {
              const self = this;
              const tmp = closure_3(function* () {
                if (c0 === 2) {
                  c0 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp5 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c0 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c0 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        c2 = 1;
                        let isValidResult = null != closure_2_5;
                        if (isValidResult) {
                          isValidResult = assert.isValid();
                        }
                        if (isValidResult) {
                          let tmp10Result;
                          if (dependencyMap != null) {
                            tmp10Result = tmp10(closure_2_5);
                          }
                          c1 = 2;
                          c0 = 1;
                          const obj4 = { value: tmp10Result, done: false };
                          return obj4;
                        } else {
                          c2 = 0;
                        }
                      }
                    } else if (1 === tmp6) {
                      c2 = 0;
                    } else if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 0;
                      c0 = 3;
                      const obj = { value, done: true };
                      return obj;
                    }
                    c0 = 3;
                  } catch (tmp13) {
                    if (tmp3 === c2) {
                      c0 = tmp2;
                      throw tmp13;
                    } else {
                      c1 = tmp;
                    }
                  }
                }
              });
              closure_19 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            closure_138_16 = closure_138_18();
            c11 = 17;
            if (closure_138_8) {
              let isValidResult = closure_138_10.isValid();
              if (isValidResult) {
                isValidResult = closure_138_4();
              }
              if (isValidResult) {
                isValidResult = closure_137_0(closure_137_2[26]).shouldShowMembershipVerificationGate(closure_138_1);
                const obj56 = closure_137_0(closure_137_2[26]);
              }
              if (isValidResult) {
                const result = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                const obj57 = closure_137_0(closure_137_2[30]);
              }
            } else {
              const tmp590 = closure_138_17();
              let tmp591 = !tmp590;
              if (tmp590) {
                let outcome;
                if (closure_138_5 != null) {
                  outcome = closure_138_5.outcome;
                }
                let tmp594 = "verification_required" !== outcome;
                if (tmp594) {
                  let outcome1;
                  if (closure_138_5 != null) {
                    outcome1 = closure_138_5.outcome;
                  }
                  tmp594 = "pending" !== outcome1;
                }
                tmp591 = tmp594;
              }
              if (!tmp591) {
                if (null != closure_138_6) {
                  const obj5 = {
                    type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                    guildId: closure_138_1,
                    request: closure_138_6,
                  };
                  closure_137_1(closure_137_2[15]).dispatch(obj5);
                  const obj53 = closure_137_1(closure_137_2[15]);
                }
                const result1 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                const obj55 = closure_137_0(closure_137_2[30]);
              }
            }
            c11 = 2;
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp649(closure_138_1, false);
            }
            closure_138_10.dispose();
            c13 = 25;
            c14 = 1;
            const obj7 = { value: closure_138_16, done: false };
            return obj7;
          case 2:
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp576(closure_138_1, false);
            }
            closure_138_10.dispose();
            throw closure_12;
          case 3:
            c11 = 1;
            closure_138_20 = closure_12;
            let tmp496 = closure_138_20 instanceof closure_137_0(closure_137_2[21]).JoinGuildRefusedError;
            if (tmp496) {
              tmp496 = null == closure_138_20.cause;
            }
            if (!tmp496) {
              const obj11 = {
                outcome: "failed",
                reason: closure_137_0(closure_137_2[29]).classifyWaterwheelsJoinFailure(closure_138_20),
              };
              closure_138_5 = obj11;
              const obj46 = closure_137_0(closure_137_2[29]);
            }
            let isValidResult1 = closure_138_10.isValid();
            if (isValidResult1) {
              isValidResult1 = !(function isJoinFailureAlreadyShown(body) {
                if (body instanceof closure_1_0(6922).JoinGuildRefusedError) {
                  return true;
                } else {
                  let code;
                  if (body != null) {
                    body = body.body;
                    if (body != null) {
                      code = body.code;
                    }
                  }
                  let hasItem = null != code;
                  if (hasItem) {
                    hasItem = set.has(code);
                  }
                  return hasItem;
                }
              })(closure_138_20);
            }
            if (isValidResult1) {
              const intl8 = closure_137_0(closure_137_2[11]).intl;
              closure_137_14(intl8.string(closure_137_1(closure_137_2[12]).grYfmA));
            }
            c11 = 0;
            closure_138_18 = function report() {
              const self = this;
              const apply = closure_19.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            closure_138_19 = function _report() {
              const self = this;
              const tmp = closure_3(function* () {
                if (c0 === 2) {
                  c0 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp5 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c0 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c0 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c0 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        c2 = 1;
                        let isValidResult = null != closure_2_5;
                        if (isValidResult) {
                          isValidResult = assert.isValid();
                        }
                        if (isValidResult) {
                          let tmp10Result;
                          if (dependencyMap != null) {
                            tmp10Result = tmp10(closure_2_5);
                          }
                          c1 = 2;
                          c0 = 1;
                          const obj4 = { value: tmp10Result, done: false };
                          return obj4;
                        } else {
                          c2 = 0;
                        }
                      }
                    } else if (1 === tmp6) {
                      c2 = 0;
                    } else if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 0;
                      c0 = 3;
                      const obj = { value, done: true };
                      return obj;
                    }
                    c0 = 3;
                  } catch (tmp13) {
                    if (tmp3 === c2) {
                      c0 = tmp2;
                      throw tmp13;
                    } else {
                      c1 = tmp;
                    }
                  }
                }
              });
              closure_19 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            closure_138_16 = closure_138_18();
            c11 = 16;
            if (closure_138_8) {
              let isValidResult2 = closure_138_10.isValid();
              if (isValidResult2) {
                isValidResult2 = closure_138_4();
              }
              if (isValidResult2) {
                isValidResult2 = closure_137_0(closure_137_2[26]).shouldShowMembershipVerificationGate(closure_138_1);
                const obj50 = closure_137_0(closure_137_2[26]);
              }
              if (isValidResult2) {
                const result2 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                const obj51 = closure_137_0(closure_137_2[30]);
              }
            } else {
              const tmp521 = closure_138_17();
              let tmp522 = !tmp521;
              if (tmp521) {
                let outcome2;
                if (closure_138_5 != null) {
                  outcome2 = closure_138_5.outcome;
                }
                let tmp525 = "verification_required" !== outcome2;
                if (tmp525) {
                  let outcome3;
                  if (closure_138_5 != null) {
                    outcome3 = closure_138_5.outcome;
                  }
                  tmp525 = "pending" !== outcome3;
                }
                tmp522 = tmp525;
              }
              if (!tmp522) {
                if (null != closure_138_6) {
                  const obj13 = {
                    type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                    guildId: closure_138_1,
                    request: closure_138_6,
                  };
                  closure_137_1(closure_137_2[15]).dispatch(obj13);
                  const obj47 = closure_137_1(closure_137_2[15]);
                }
                const result3 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                const obj49 = closure_137_0(closure_137_2[30]);
              }
            }
            c11 = 15;
            break;
          case 4:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else {
              value2 = value;
              if (arg0 === 2) {
                c11 = 0;
                closure_138_18 = function report() {
                  const self = this;
                  const apply = closure_19.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                closure_138_19 = function _report() {
                  const self = this;
                  const tmp = closure_3(function* () {
                    if (c0 === 2) {
                      c0 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp5 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c0 = 2;
                        if (0 === c1) {
                          if (arg0 === 1) {
                            c0 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c0 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            c2 = 1;
                            let isValidResult = null != closure_2_5;
                            if (isValidResult) {
                              isValidResult = assert.isValid();
                            }
                            if (isValidResult) {
                              let tmp10Result;
                              if (dependencyMap != null) {
                                tmp10Result = tmp10(closure_2_5);
                              }
                              c1 = 2;
                              c0 = 1;
                              const obj4 = { value: tmp10Result, done: false };
                              return obj4;
                            } else {
                              c2 = 0;
                            }
                          }
                        } else if (1 === tmp6) {
                          c2 = 0;
                        } else if (arg0 === 1) {
                          c0 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 0;
                          c0 = 3;
                          const obj = { value, done: true };
                          return obj;
                        }
                        c0 = 3;
                      } catch (tmp13) {
                        if (tmp3 === c2) {
                          c0 = tmp2;
                          throw tmp13;
                        } else {
                          c1 = tmp;
                        }
                      }
                    }
                  });
                  closure_19 = tmp;
                  const apply = tmp.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                closure_138_16 = closure_138_18();
                c11 = 5;
                if (closure_138_8) {
                  let isValidResult3 = closure_138_10.isValid();
                  if (isValidResult3) {
                    isValidResult3 = closure_138_4();
                  }
                  if (isValidResult3) {
                    isValidResult3 = closure_137_0(closure_137_2[26]).shouldShowMembershipVerificationGate(
                      closure_138_1,
                    );
                    const obj42 = closure_137_0(closure_137_2[26]);
                  }
                  if (isValidResult3) {
                    const result4 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                    const obj43 = closure_137_0(closure_137_2[30]);
                  }
                } else {
                  const tmp440 = closure_138_17();
                  let tmp441 = !tmp440;
                  if (tmp440) {
                    let outcome4;
                    if (closure_138_5 != null) {
                      outcome4 = closure_138_5.outcome;
                    }
                    let tmp444 = "verification_required" !== outcome4;
                    if (tmp444) {
                      let outcome5;
                      if (closure_138_5 != null) {
                        outcome5 = closure_138_5.outcome;
                      }
                      tmp444 = "pending" !== outcome5;
                    }
                    tmp441 = tmp444;
                  }
                  if (!tmp441) {
                    if (null != closure_138_6) {
                      const obj17 = {
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: closure_138_1,
                        request: closure_138_6,
                      };
                      closure_137_1(closure_137_2[15]).dispatch(obj17);
                      const obj39 = closure_137_1(closure_137_2[15]);
                    }
                    const result5 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                    const obj41 = closure_137_0(closure_137_2[30]);
                  }
                }
                c11 = 4;
              } else {
                closure_138_11 = value;
                if (closure_138_10.isValid()) {
                  let body = closure_138_11.body;
                  closure_4 = body;
                  if (body == null) {
                    closure_4 = {};
                  }
                  closure_138_12 = closure_4;
                  if (closure_138_4()) {
                    if (tmp341.show_verification_form) {
                      if (obj32.shouldShowMembershipVerificationGate(closure_138_1)) {
                        closure_138_5 = { outcome: "verification_required" };
                        closure_138_8 = true;
                      }
                      value3 = undefined;
                      c11 = 0;
                      closure_138_18 = function report() {
                        const self = this;
                        const apply = closure_19.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      };
                      closure_138_19 = function _report() {
                        const self = this;
                        const tmp = closure_3(function* () {
                          if (c0 === 2) {
                            c0 = 3;
                            throw new TypeError("Generator functions may not be called on executing generators");
                          } else if (tmp5 === 3) {
                            if (arg0 === 1) {
                              throw value;
                            } else if (arg0 === 2) {
                              const obj2 = { value, done: true };
                              return obj2;
                            } else {
                              return { value: "HermesInternal", done: null };
                            }
                          } else {
                            try {
                              c0 = 2;
                              if (0 === c1) {
                                if (arg0 === 1) {
                                  c0 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c0 = 3;
                                  const obj3 = { value, done: true };
                                  return obj3;
                                } else {
                                  c2 = 1;
                                  let isValidResult = null != closure_2_5;
                                  if (isValidResult) {
                                    isValidResult = assert.isValid();
                                  }
                                  if (isValidResult) {
                                    let tmp10Result;
                                    if (dependencyMap != null) {
                                      tmp10Result = tmp10(closure_2_5);
                                    }
                                    c1 = 2;
                                    c0 = 1;
                                    const obj4 = { value: tmp10Result, done: false };
                                    return obj4;
                                  } else {
                                    c2 = 0;
                                  }
                                }
                              } else if (1 === tmp6) {
                                c2 = 0;
                              } else if (arg0 === 1) {
                                c0 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c2 = 0;
                                c0 = 3;
                                const obj = { value, done: true };
                                return obj;
                              }
                              c0 = 3;
                            } catch (tmp13) {
                              if (tmp3 === c2) {
                                c0 = tmp2;
                                throw tmp13;
                              } else {
                                c1 = tmp;
                              }
                            }
                          }
                        });
                        closure_19 = tmp;
                        const apply = tmp.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      };
                      closure_138_16 = closure_138_18();
                      c11 = 9;
                      if (closure_138_8) {
                        let isValidResult4 = closure_138_10.isValid();
                        if (isValidResult4) {
                          isValidResult4 = closure_138_4();
                        }
                        if (isValidResult4) {
                          isValidResult4 = closure_137_0(closure_137_2[26]).shouldShowMembershipVerificationGate(
                            closure_138_1,
                          );
                          const obj36 = closure_137_0(closure_137_2[26]);
                        }
                        if (isValidResult4) {
                          const result6 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(
                            closure_138_1,
                          );
                          const obj37 = closure_137_0(closure_137_2[30]);
                        }
                      } else {
                        const tmp386 = closure_138_17();
                        let tmp387 = !tmp386;
                        if (tmp386) {
                          let outcome6;
                          if (closure_138_5 != null) {
                            outcome6 = closure_138_5.outcome;
                          }
                          let tmp390 = "verification_required" !== outcome6;
                          if (tmp390) {
                            let outcome7;
                            if (closure_138_5 != null) {
                              outcome7 = closure_138_5.outcome;
                            }
                            tmp390 = "pending" !== outcome7;
                          }
                          tmp387 = tmp390;
                        }
                        if (!tmp387) {
                          if (null != closure_138_6) {
                            const obj18 = {
                              type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                              guildId: closure_138_1,
                              request: closure_138_6,
                            };
                            closure_137_1(closure_137_2[15]).dispatch(obj18);
                            const obj33 = closure_137_1(closure_137_2[15]);
                          }
                          const result7 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(
                            closure_138_1,
                          );
                          const obj35 = closure_137_0(closure_137_2[30]);
                        }
                      }
                      c11 = 8;
                      obj32 = closure_137_0(closure_137_2[26]);
                    }
                    closure_138_5 = { outcome: "succeeded" };
                  } else {
                    const join_request = tmp341.join_request;
                    let application_status;
                    if (join_request != null) {
                      application_status = join_request.application_status;
                    }
                    application_status2 = application_status;
                    if (closure_138_12.show_verification_form) {
                      if (closure_138_10.isValid()) {
                        c11 = 10;
                        const _AbortController = AbortController;
                        const abortController = new AbortController();
                        closure_138_14 = abortController;
                        c13 = 15;
                        c14 = 1;
                        const obj19 = {
                          value: closure_137_0(closure_137_2[27]).withDiscoverRequestDeadline(closure_138_14, () => {
                            const HTTP = closure_0(1285).HTTP;
                            const obj = {
                              url: closure_9.GUILD_MEMBER_REQUEST_TO_JOIN(closure_1_1),
                              rejectWithError: closure_0(1285).rejectWithMigratedError(),
                              signal: signal.signal,
                              timeout: null,
                            };
                            const obj2 = closure_0(1285);
                            obj.timeout = { deadline: closure_0(10219).DISCOVER_REQUEST_DEADLINE_MS };
                            return HTTP.get(obj);
                          }),
                          done: false,
                        };
                        return obj19;
                      }
                    }
                    if (closure_138_4()) {
                      let obj20 = { outcome: "succeeded" };
                    } else if (closure_138_7) {
                      obj20 = { outcome: "verification_required" };
                    } else if (
                      application_status2 ===
                      closure_137_0(closure_137_2[24]).GuildJoinRequestApplicationStatuses.APPROVED
                    ) {
                      obj20 = { outcome: "succeeded" };
                    } else if (
                      application_status2 ===
                      closure_137_0(closure_137_2[24]).GuildJoinRequestApplicationStatuses.SUBMITTED
                    ) {
                      obj20 = { outcome: "pending" };
                    } else {
                      if (!closure_138_12.show_verification_form) {
                        if (null == closure_138_12.join_request) {
                          obj20 = { outcome: "succeeded" };
                        }
                      }
                      obj20 = { outcome: "verification_required" };
                    }
                    closure_138_5 = obj20;
                    c11 = 1;
                  }
                } else {
                  c11 = 0;
                  closure_138_18 = function report() {
                    const self = this;
                    const apply = closure_19.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                  closure_138_19 = function _report() {
                    const self = this;
                    const tmp = closure_3(function* () {
                      if (c0 === 2) {
                        c0 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp5 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj2 = { value, done: true };
                          return obj2;
                        } else {
                          return { value: "HermesInternal", done: null };
                        }
                      } else {
                        try {
                          c0 = 2;
                          if (0 === c1) {
                            if (arg0 === 1) {
                              c0 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c0 = 3;
                              const obj3 = { value, done: true };
                              return obj3;
                            } else {
                              c2 = 1;
                              let isValidResult = null != closure_2_5;
                              if (isValidResult) {
                                isValidResult = assert.isValid();
                              }
                              if (isValidResult) {
                                let tmp10Result;
                                if (dependencyMap != null) {
                                  tmp10Result = tmp10(closure_2_5);
                                }
                                c1 = 2;
                                c0 = 1;
                                const obj4 = { value: tmp10Result, done: false };
                                return obj4;
                              } else {
                                c2 = 0;
                              }
                            }
                          } else if (1 === tmp6) {
                            c2 = 0;
                          } else if (arg0 === 1) {
                            c0 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c2 = 0;
                            c0 = 3;
                            const obj = { value, done: true };
                            return obj;
                          }
                          c0 = 3;
                        } catch (tmp13) {
                          if (tmp3 === c2) {
                            c0 = tmp2;
                            throw tmp13;
                          } else {
                            c1 = tmp;
                          }
                        }
                      }
                    });
                    closure_19 = tmp;
                    const apply = tmp.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                  closure_138_16 = closure_138_18();
                  c11 = 7;
                  if (closure_138_8) {
                    let isValidResult5 = closure_138_10.isValid();
                    if (isValidResult5) {
                      isValidResult5 = closure_138_4();
                    }
                    if (isValidResult5) {
                      isValidResult5 = closure_137_0(closure_137_2[26]).shouldShowMembershipVerificationGate(
                        closure_138_1,
                      );
                      const obj26 = closure_137_0(closure_137_2[26]);
                    }
                    if (isValidResult5) {
                      const result8 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                      const obj27 = closure_137_0(closure_137_2[30]);
                    }
                  } else {
                    const tmp286 = closure_138_17();
                    let tmp287 = !tmp286;
                    if (tmp286) {
                      let outcome8;
                      if (closure_138_5 != null) {
                        outcome8 = closure_138_5.outcome;
                      }
                      let tmp290 = "verification_required" !== outcome8;
                      if (tmp290) {
                        let outcome9;
                        if (closure_138_5 != null) {
                          outcome9 = closure_138_5.outcome;
                        }
                        tmp290 = "pending" !== outcome9;
                      }
                      tmp287 = tmp290;
                    }
                    if (!tmp287) {
                      if (null != closure_138_6) {
                        const obj21 = {
                          type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                          guildId: closure_138_1,
                          request: closure_138_6,
                        };
                        closure_137_1(closure_137_2[15]).dispatch(obj21);
                        const obj23 = closure_137_1(closure_137_2[15]);
                      }
                      const result9 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                      const obj25 = closure_137_0(closure_137_2[30]);
                    }
                  }
                  c11 = 6;
                }
              }
            }
            break;
          case 5:
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp274(closure_138_1, false);
            }
            closure_138_10.dispose();
            throw closure_12;
          case 6:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else if (arg0 === 2) {
              c14 = 3;
              const obj22 = { value, done: true };
              return obj22;
            } else {
              c14 = 3;
              const obj24 = { value: value2, done: true };
              return obj24;
            }
            break;
          case 7:
            c11 = 4;
            if (closure_138_17()) {
              const intl7 = closure_137_0(closure_137_2[11]).intl;
              closure_137_14(intl7.string(closure_137_1(closure_137_2[12]).grYfmA));
            }
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp481(closure_138_1, false);
            }
            closure_138_10.dispose();
            c13 = 6;
            c14 = 1;
            const obj28 = { value: closure_138_16, done: false };
            return obj28;
          case 8:
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp251(closure_138_1, false);
            }
            closure_138_10.dispose();
            throw closure_12;
          case 9:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else if (arg0 === 2) {
              c14 = 3;
              const obj29 = { value, done: true };
              return obj29;
            } else {
              c14 = 3;
              return { value: "HermesInternal", done: null };
            }
            break;
          case 10:
            c11 = 6;
            if (closure_138_17()) {
              const intl6 = closure_137_0(closure_137_2[11]).intl;
              closure_137_14(intl6.string(closure_137_1(closure_137_2[12]).grYfmA));
            }
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp327(closure_138_1, false);
            }
            closure_138_10.dispose();
            c13 = 9;
            c14 = 1;
            const obj31 = { value: closure_138_16, done: false };
            return obj31;
          case 11:
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp229(closure_138_1, false);
            }
            closure_138_10.dispose();
            throw closure_12;
          case 12:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else if (arg0 === 2) {
              c14 = 3;
              const obj34 = { value, done: true };
              return obj34;
            } else {
              c14 = 3;
              const obj38 = { value: value3, done: true };
              return obj38;
            }
            break;
          case 13:
            c11 = 8;
            if (closure_138_17()) {
              const intl5 = closure_137_0(closure_137_2[11]).intl;
              closure_137_14(intl5.string(closure_137_1(closure_137_2[12]).grYfmA));
            }
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp427(closure_138_1, false);
            }
            closure_138_10.dispose();
            c13 = 12;
            c14 = 1;
            const obj40 = { value: closure_138_16, done: false };
            return obj40;
          case 14:
            c11 = 3;
            closure_138_7 = true;
            if (closure_138_17()) {
              const intl4 = closure_137_0(closure_137_2[11]).intl;
              closure_137_14(intl4.string(closure_137_1(closure_137_2[12]).grYfmA));
            }
            break;
          case 15:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 0;
              closure_138_18 = function report() {
                const self = this;
                const apply = closure_19.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              closure_138_19 = function _report() {
                const self = this;
                const tmp = closure_3(function* () {
                  if (c0 === 2) {
                    c0 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp5 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    try {
                      c0 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c0 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c0 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          c2 = 1;
                          let isValidResult = null != closure_2_5;
                          if (isValidResult) {
                            isValidResult = assert.isValid();
                          }
                          if (isValidResult) {
                            let tmp10Result;
                            if (dependencyMap != null) {
                              tmp10Result = tmp10(closure_2_5);
                            }
                            c1 = 2;
                            c0 = 1;
                            const obj4 = { value: tmp10Result, done: false };
                            return obj4;
                          } else {
                            c2 = 0;
                          }
                        }
                      } else if (1 === tmp6) {
                        c2 = 0;
                      } else if (arg0 === 1) {
                        c0 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 0;
                        c0 = 3;
                        const obj = { value, done: true };
                        return obj;
                      }
                      c0 = 3;
                    } catch (tmp13) {
                      if (tmp3 === c2) {
                        c0 = tmp2;
                        throw tmp13;
                      } else {
                        c1 = tmp;
                      }
                    }
                  }
                });
                closure_19 = tmp;
                const apply = tmp.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              closure_138_16 = closure_138_18();
              c11 = 12;
              if (closure_138_8) {
                let isValidResult6 = closure_138_10.isValid();
                if (isValidResult6) {
                  isValidResult6 = closure_138_4();
                }
                if (isValidResult6) {
                  isValidResult6 = closure_137_0(closure_137_2[26]).shouldShowMembershipVerificationGate(closure_138_1);
                  const obj15 = closure_137_0(closure_137_2[26]);
                }
                if (isValidResult6) {
                  const result10 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                  const obj16 = closure_137_0(closure_137_2[30]);
                }
              } else {
                const tmp155 = closure_138_17();
                let tmp156 = !tmp155;
                if (tmp155) {
                  let outcome10;
                  if (closure_138_5 != null) {
                    outcome10 = closure_138_5.outcome;
                  }
                  let tmp159 = "verification_required" !== outcome10;
                  if (tmp159) {
                    let outcome11;
                    if (closure_138_5 != null) {
                      outcome11 = closure_138_5.outcome;
                    }
                    tmp159 = "pending" !== outcome11;
                  }
                  tmp156 = tmp159;
                }
                if (!tmp156) {
                  if (null != closure_138_6) {
                    const obj44 = {
                      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                      guildId: closure_138_1,
                      request: closure_138_6,
                    };
                    closure_137_1(closure_137_2[15]).dispatch(obj44);
                    const obj12 = closure_137_1(closure_137_2[15]);
                  }
                  const result11 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                  const obj14 = closure_137_0(closure_137_2[30]);
                }
              }
              c11 = 11;
            } else {
              closure_138_15 = value;
              if (closure_138_10.isValid()) {
                closure_138_6 = (function parseJoinRequest(body, arg1, id2) {
                  if (null != body) {
                    if (typeof body === "object") {
                      const _Array2 = Array;
                      if (!Array.isArray(body)) {
                        if (set2.has(body.application_status)) {
                          if (body.guild_id === arg1) {
                            if (null != id2) {
                              if (body.user_id === id2) {
                                if (typeof body.join_request_id === "string") {
                                  if (0 !== body.join_request_id.length) {
                                    if (body.id === body.join_request_id) {
                                      if (typeof body.created_at === "string") {
                                        if (0 !== body.created_at.length) {
                                          if ("last_seen" in body) {
                                            if (null === body.last_seen) {
                                              if ("rejection_reason" in body) {
                                                if (null === body.rejection_reason) {
                                                  if (null != body.form_responses) {
                                                    const _Array = Array;
                                                  }
                                                  const obj = {};
                                                  const merged = Object.assign(body);
                                                  let form_responses = body.form_responses;
                                                  if (form_responses == null) {
                                                    form_responses = [];
                                                  }
                                                  obj.form_responses = form_responses;
                                                  let str2 = body.rejection_reason;
                                                  if (str2 == null) {
                                                    str2 = "";
                                                  }
                                                  obj.rejection_reason = str2;
                                                  return obj;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        const _Error = Error;
                        const error = new Error("Invalid join request response");
                        throw error;
                      }
                    }
                  }
                  const error1 = new Error("Invalid join request response");
                  throw error1;
                })(closure_138_15.body, closure_138_1, id2);
                application_status2 = closure_138_6.application_status;
                c11 = 3;
              } else {
                c11 = 0;
                closure_138_18 = function report() {
                  const self = this;
                  const apply = closure_19.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                closure_138_19 = function _report() {
                  const self = this;
                  const tmp = closure_3(function* () {
                    if (c0 === 2) {
                      c0 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp5 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "HermesInternal", done: null };
                      }
                    } else {
                      try {
                        c0 = 2;
                        if (0 === c1) {
                          if (arg0 === 1) {
                            c0 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c0 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            c2 = 1;
                            let isValidResult = null != closure_2_5;
                            if (isValidResult) {
                              isValidResult = assert.isValid();
                            }
                            if (isValidResult) {
                              let tmp10Result;
                              if (dependencyMap != null) {
                                tmp10Result = tmp10(closure_2_5);
                              }
                              c1 = 2;
                              c0 = 1;
                              const obj4 = { value: tmp10Result, done: false };
                              return obj4;
                            } else {
                              c2 = 0;
                            }
                          }
                        } else if (1 === tmp6) {
                          c2 = 0;
                        } else if (arg0 === 1) {
                          c0 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 0;
                          c0 = 3;
                          const obj = { value, done: true };
                          return obj;
                        }
                        c0 = 3;
                      } catch (tmp13) {
                        if (tmp3 === c2) {
                          c0 = tmp2;
                          throw tmp13;
                        } else {
                          c1 = tmp;
                        }
                      }
                    }
                  });
                  closure_19 = tmp;
                  const apply = tmp.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                closure_138_16 = closure_138_18();
                c11 = 14;
                if (closure_138_8) {
                  let isValidResult7 = closure_138_10.isValid();
                  if (isValidResult7) {
                    isValidResult7 = closure_138_4();
                  }
                  if (isValidResult7) {
                    isValidResult7 = closure_137_0(closure_137_2[26]).shouldShowMembershipVerificationGate(
                      closure_138_1,
                    );
                    const obj9 = closure_137_0(closure_137_2[26]);
                  }
                  if (isValidResult7) {
                    const result12 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                    const obj10 = closure_137_0(closure_137_2[30]);
                  }
                } else {
                  const tmp96 = closure_138_17();
                  let tmp97 = !tmp96;
                  if (tmp96) {
                    let outcome12;
                    if (closure_138_5 != null) {
                      outcome12 = closure_138_5.outcome;
                    }
                    let tmp100 = "verification_required" !== outcome12;
                    if (tmp100) {
                      let outcome13;
                      if (closure_138_5 != null) {
                        outcome13 = closure_138_5.outcome;
                      }
                      tmp100 = "pending" !== outcome13;
                    }
                    tmp97 = tmp100;
                  }
                  if (!tmp97) {
                    if (null != closure_138_6) {
                      const obj45 = {
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: closure_138_1,
                        request: closure_138_6,
                      };
                      closure_137_1(closure_137_2[15]).dispatch(obj45);
                      const obj6 = closure_137_1(closure_137_2[15]);
                    }
                    const result13 = closure_137_0(closure_137_2[30]).transitionToMemberVerification(closure_138_1);
                    const obj8 = closure_137_0(closure_137_2[30]);
                  }
                }
                c11 = 13;
              }
            }
            break;
          case 16:
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp84(closure_138_1, false);
            }
            closure_138_10.dispose();
            throw closure_12;
          case 17:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else if (arg0 === 2) {
              c14 = 3;
              const obj48 = { value, done: true };
              return obj48;
            } else {
              c14 = 3;
              const obj52 = { value, done: true };
              return obj52;
            }
            break;
          case 18:
            c11 = 11;
            if (closure_138_17()) {
              const intl3 = closure_137_0(closure_137_2[11]).intl;
              closure_137_14(intl3.string(closure_137_1(closure_137_2[12]).grYfmA));
            }
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp196(closure_138_1, false);
            }
            closure_138_10.dispose();
            c13 = 17;
            c14 = 1;
            const obj54 = { value: closure_138_16, done: false };
            return obj54;
          case 19:
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp61(closure_138_1, false);
            }
            closure_138_10.dispose();
            throw closure_12;
          case 20:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else if (arg0 === 2) {
              c14 = 3;
              const obj60 = { value, done: true };
              return obj60;
            } else {
              c14 = 3;
              return { value: "HermesInternal", done: null };
            }
            break;
          case 21:
            c11 = 13;
            if (closure_138_17()) {
              const intl2 = closure_137_0(closure_137_2[11]).intl;
              closure_137_14(intl2.string(closure_137_1(closure_137_2[12]).grYfmA));
            }
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp137(closure_138_1, false);
            }
            closure_138_10.dispose();
            c13 = 20;
            c14 = 1;
            const obj61 = { value: closure_138_16, done: false };
            return obj61;
          case 22:
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp39(closure_138_1, false);
            }
            closure_138_10.dispose();
            throw closure_12;
          case 23:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else if (arg0 === 2) {
              c14 = 3;
              const obj62 = { value, done: true };
              return obj62;
            }
            break;
          case 24:
            c11 = 15;
            if (closure_138_17()) {
              const intl = closure_137_0(closure_137_2[11]).intl;
              closure_137_14(intl.string(closure_137_1(closure_137_2[12]).grYfmA));
            }
            c11 = 0;
            closure_138_0.delete(closure_138_1);
            if (closure_138_3 != null) {
              tmp562(closure_138_1, false);
            }
            closure_138_10.dispose();
            c13 = 23;
            c14 = 1;
            const obj63 = { value: closure_138_16, done: false };
            return obj63;
          case 25:
            if (arg0 === 1) {
              c14 = 3;
              throw value;
            } else if (arg0 === 2) {
              c14 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              throw closure_8;
            }
            break;
          default:
            c11 = 2;
            if (closure_138_17()) {
              const intl9 = closure_137_0(closure_137_2[11]).intl;
              closure_137_14(intl9.string(closure_137_1(closure_137_2[12]).grYfmA));
            }
        }
      } catch (tmp657) {
        closure_12 = tmp657;
        switch (c11) {
          case 0:
            c14 = tmp18;
            throw tmp658;
          case 1:
            c13 = tmp2;
            break;
          case 2:
            c13 = tmp;
            break;
          case 3:
            c13 = tmp18;
            break;
          case 4:
            c13 = tmp16;
            break;
          case 5:
            c13 = tmp15;
            break;
          case 6:
            c13 = tmp14;
            break;
          case 7:
            c13 = tmp13;
            break;
          case 8:
            c13 = tmp12;
            break;
          case 9:
            c13 = tmp11;
            break;
          case 10:
            c13 = tmp10;
            break;
          case 11:
            c13 = tmp9;
            break;
          case 12:
            c13 = tmp8;
            break;
          case 13:
            c13 = tmp7;
            break;
          case 14:
            c13 = tmp6;
            break;
          case 15:
            c13 = tmp5;
            break;
          case 16:
            c13 = tmp4;
            break;
          default:
            c13 = tmp17;
        }
      }
    }
  })();
};
function runGuarded(requestNotifications, arg1) {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_23 = async function _runGuarded(arg0) {
  closure_3 = tmp3;
  closure_2 = tmp5;
  closure_130_0 = closure_1;
  await closure_0();
  if (1 === tmp8) {
    c4 = 0;
    closure_131_14(closure_130_0());
    c6 = 3;
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c4 = 0;
  }
  return value;
};
const Constants = fn(1072);
({ AbortCodes, Endpoints: closure_9, PlatformTypes } = Constants);
let closure_10 = fn(6902).NotificationAuthorizationStatus;
let items = [, ,];
({
  USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED: arr[0],
  TOO_MANY_USER_GUILDS: arr[1],
  GUILD_AT_CAPACITY: arr[2],
} = AbortCodes);
const set = new Set(items);
const set1 = new Set(Object.values(PlatformTypes));
const waterwheels = "waterwheels";
const set2 = new Set(Object.values(fn(5352).GuildJoinRequestApplicationStatuses));
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/actions/native/useWaterwheelsActions.tsx");

export function useWaterwheelsActions(callback) {
  closure_0 = callback;
  noop.useRef(new Set());
  items = [callback];
  return noop.useCallback((type, arg1) => {
    type = type.type;
    if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD === type) {
      return joinWaterwheelsGuild(ref.current, type.value.guild_id, arg1, type);
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD === type) {
      return runGuarded(
        () => type(7230).startLurking(type.value.guild_id, {}),
        () => {
          const intl = type(1113).intl;
          return intl.string(ref(2569).d6U01J);
        },
      );
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION === type) {
      return runGuarded(
        () => {
          const provider = type.value.provider;
          if (set.has(provider)) {
            const obj = { platformType: provider, location: _location };
            closure_1(7422)(obj);
          }
        },
        () => {
          const intl = type(1113).intl;
          return intl.string(ref(2569)["rdTp+3"]);
        },
      );
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_URI === type) {
      return runGuarded(
        () => type(7653).handleClick({ href: type.value.url }),
        () => {
          const intl = type(1113).intl;
          return intl.string(ref(2569)["4a9Wgk"]);
        },
      );
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
      return runGuarded(requestNotifications, () => {
        const intl = type(1113).intl;
        return intl.string(ref(2569)["4BoMhv"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME === type) {
      return openWaterwheelsGame(type.value.game_id, arg1);
    } else {
      return Promise.resolve(type);
    }
  }, items);
}
export { openWaterwheelsGame };
export { joinWaterwheelsGuild };
