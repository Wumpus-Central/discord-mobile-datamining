// === Module 18873: useWaterwheelsActions ===

// Module 18873 (useWaterwheelsActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6854 */;
import authorizeConnectionDefault from "authorizeConnection" /* 7358 */;
import openPrivacySettingsDefault from "openPrivacySettings" /* 8134 */;
import GameActionCreators from "GameActionCreators" /* 9467 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10156 */;
import NotificationUtilsDefault from "NotificationUtils" /* 14721 */;
import WaterwheelsDiscoverJoinAttribution from "WaterwheelsDiscoverJoinAttribution" /* 18874 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 2138 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 5114 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14712 */;

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
            closure_135_3 = WaterwheelsDiscoverJoinAttribution.captureDiscoverJoinAttribution(AuthenticationStore, () => {

            }, DispatcherDefault);
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
  c12 = 0;
  c13 = 0;
  c10 = 0;
  return (async (arg0, value, arg2) => {
    if (c13 === 2) {
      c13 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp20 === 3) {
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
        c13 = 2;
        switch (c12) {
          case 0:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              const assert = tmp3;
              closure_9 = tmp471;
              closure_137_0 = set;
              closure_137_1 = closure_1;
              closure_137_2 = dependencyMap;
              closure_137_4 = undefined;
              closure_137_5 = undefined;
              closure_137_6 = undefined;
              let id2;
              closure_137_8 = undefined;
              closure_137_9 = undefined;
              closure_137_10 = undefined;
              let application_status2;
              closure_137_12 = undefined;
              closure_137_13 = undefined;
              closure_137_14 = undefined;
              function hasJoinedGuild() {
                guild = closure_7.getGuild(closure_1_1);
                let joinedAt;
                if (guild != null) {
                  joinedAt = guild.joinedAt;
                }
                return null != joinedAt;
              }
              closure_137_3 = hasJoinedGuild;
              closure_137_15 = function canOpenVerification() {
                let isValidResult = assert.isValid();
                if (isValidResult) {
                  guild = closure_7.getGuild(closure_1_1);
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
                  closure_137_6 = false;
                  id2 = id.getId();
                  closure_137_8 = WaterwheelsDiscoverJoinAttribution.captureDiscoverJoinAttribution(id, () => {

                  }, DispatcherDefault);
                  c10 = 3;
                  c12 = 4;
                  c13 = 1;
                  let obj4 = { value: GuildActionCreatorsDefault.joinGuild(closure_1, { autoNavigate: false }), done: false };
                  return obj4;
                }
              }
              c13 = 3;
              return { value: "HermesInternal", done: null };
            }
          break;
          case 1:
            closure_7 = tmp472;
            c10 = 0;
            closure_137_16 = function report() {
              const self = this;
              const apply = closure_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            closure_137_17 = function _report() {
              const self = this;
              const tmp = closure_3(function*() {
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
                        let isValidResult = null != closure_2_4;
                        if (isValidResult) {
                          isValidResult = assert.isValid();
                        }
                        if (isValidResult) {
                          let tmp10Result;
                          if (dependencyMap != null) {
                            tmp10Result = tmp10(closure_2_4);
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
              closure_17 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            closure_137_14 = closure_137_16();
            c10 = 17;
            const tmp425 = closure_137_15();
            let tmp426 = !tmp425;
            if (tmp425) {
              let outcome;
              if (closure_137_4 != null) {
                outcome = closure_137_4.outcome;
              }
              let tmp429 = "verification_required" !== outcome;
              if (tmp429) {
                let outcome1;
                if (closure_137_4 != null) {
                  outcome1 = closure_137_4.outcome;
                }
                tmp429 = "pending" !== outcome1;
              }
              tmp426 = tmp429;
            }
            if (!tmp426) {
              if (null != closure_137_5) {
                const obj5 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_137_1, request: closure_137_5 };
                closure_136_1(closure_136_2[15]).dispatch(obj5);
                const obj34 = closure_136_1(closure_136_2[15]);
              }
              const result = closure_136_0(closure_136_2[29]).transitionToMemberVerification(closure_137_1);
              const obj36 = closure_136_0(closure_136_2[29]);
            }
            c10 = 2;
            c10 = 0;
            closure_137_0.delete(closure_137_1);
            closure_137_8.dispose();
            c12 = 25;
            c13 = 1;
            tmp471 = closure_137_14;
          break;
          case 2:
            c10 = 0;
            closure_137_0.delete(closure_137_1);
            closure_137_8.dispose();
            throw tmp472;
          case 3:
            c10 = 1;
            closure_137_18 = tmp472;
            let tmp357 = closure_137_18 instanceof closure_136_0(closure_136_2[21]).JoinGuildRefusedError;
            if (tmp357) {
              tmp357 = null == closure_137_18.cause;
            }
            if (!tmp357) {
              const obj7 = { outcome: "failed", reason: closure_136_0(closure_136_2[28]).classifyWaterwheelsJoinFailure(closure_137_18) };
              closure_137_4 = obj7;
              const obj30 = closure_136_0(closure_136_2[28]);
            }
            let isValidResult = closure_137_8.isValid();
            if (isValidResult) {
              isValidResult = !(function isJoinFailureAlreadyShown(body) {
                if (body instanceof closure_1_0(6859).JoinGuildRefusedError) {
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
              })(closure_137_18);
            }
            if (isValidResult) {
              const intl8 = closure_136_0(closure_136_2[11]).intl;
              closure_136_14(intl8.string(closure_136_1(closure_136_2[12]).grYfmA));
            }
            c10 = 0;
            closure_137_16 = function report() {
              const self = this;
              const apply = closure_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            closure_137_17 = function _report() {
              const self = this;
              const tmp = closure_3(function*() {
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
                        let isValidResult = null != closure_2_4;
                        if (isValidResult) {
                          isValidResult = assert.isValid();
                        }
                        if (isValidResult) {
                          let tmp10Result;
                          if (dependencyMap != null) {
                            tmp10Result = tmp10(closure_2_4);
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
              closure_17 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            closure_137_14 = closure_137_16();
            c10 = 16;
            const tmp381 = closure_137_15();
            let tmp382 = !tmp381;
            if (tmp381) {
              let outcome2;
              if (closure_137_4 != null) {
                outcome2 = closure_137_4.outcome;
              }
              let tmp385 = "verification_required" !== outcome2;
              if (tmp385) {
                let outcome3;
                if (closure_137_4 != null) {
                  outcome3 = closure_137_4.outcome;
                }
                tmp385 = "pending" !== outcome3;
              }
              tmp382 = tmp385;
            }
            if (!tmp382) {
              if (null != closure_137_5) {
                const obj10 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_137_1, request: closure_137_5 };
                closure_136_1(closure_136_2[15]).dispatch(obj10);
                const obj31 = closure_136_1(closure_136_2[15]);
              }
              const result1 = closure_136_0(closure_136_2[29]).transitionToMemberVerification(closure_137_1);
              const obj33 = closure_136_0(closure_136_2[29]);
            }
            c10 = 15;
            c10 = 0;
            closure_137_0.delete(closure_137_1);
            closure_137_8.dispose();
            c12 = 23;
            c13 = 1;
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj12 = { value, done: true };
              return obj12;
            }
          break;
          case 4:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else {
              value2 = value;
              if (arg0 === 2) {
                c10 = 0;
                closure_137_16 = function report() {
                  const self = this;
                  const apply = closure_17.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                closure_137_17 = function _report() {
                  const self = this;
                  const tmp = closure_3(function*() {
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
                            let isValidResult = null != closure_2_4;
                            if (isValidResult) {
                              isValidResult = assert.isValid();
                            }
                            if (isValidResult) {
                              let tmp10Result;
                              if (dependencyMap != null) {
                                tmp10Result = tmp10(closure_2_4);
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
                  closure_17 = tmp;
                  const apply = tmp.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                closure_137_14 = closure_137_16();
                c10 = 5;
                const tmp320 = closure_137_15();
                let tmp321 = !tmp320;
                if (tmp320) {
                  let outcome4;
                  if (closure_137_4 != null) {
                    outcome4 = closure_137_4.outcome;
                  }
                  let tmp324 = "verification_required" !== outcome4;
                  if (tmp324) {
                    let outcome5;
                    if (closure_137_4 != null) {
                      outcome5 = closure_137_4.outcome;
                    }
                    tmp324 = "pending" !== outcome5;
                  }
                  tmp321 = tmp324;
                }
                if (!tmp321) {
                  if (null != closure_137_5) {
                    const obj13 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_137_1, request: closure_137_5 };
                    closure_136_1(closure_136_2[15]).dispatch(obj13);
                    const obj26 = closure_136_1(closure_136_2[15]);
                  }
                  const result2 = closure_136_0(closure_136_2[29]).transitionToMemberVerification(closure_137_1);
                  const obj28 = closure_136_0(closure_136_2[29]);
                }
                c10 = 4;
                c10 = 0;
                closure_137_0.delete(closure_137_1);
                closure_137_8.dispose();
                c12 = 6;
                c13 = 1;
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  const obj14 = { value, done: true };
                  return obj14;
                } else {
                  c13 = 3;
                  const obj15 = { value: value2, done: true };
                  return obj15;
                }
              } else {
                closure_137_9 = value;
                if (closure_137_8.isValid()) {
                  if (closure_137_3()) {
                    closure_137_4 = { outcome: "succeeded" };
                    value3 = undefined;
                    c10 = 0;
                    closure_137_16 = function report() {
                      const self = this;
                      const apply = closure_17.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    };
                    closure_137_17 = function _report() {
                      const self = this;
                      const tmp = closure_3(function*() {
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
                                let isValidResult = null != closure_2_4;
                                if (isValidResult) {
                                  isValidResult = assert.isValid();
                                }
                                if (isValidResult) {
                                  let tmp10Result;
                                  if (dependencyMap != null) {
                                    tmp10Result = tmp10(closure_2_4);
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
                      closure_17 = tmp;
                      const apply = tmp.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    };
                    closure_137_14 = closure_137_16();
                    c10 = 9;
                    const tmp286 = closure_137_15();
                    let tmp287 = !tmp286;
                    if (tmp286) {
                      let outcome6;
                      if (closure_137_4 != null) {
                        outcome6 = closure_137_4.outcome;
                      }
                      let tmp290 = "verification_required" !== outcome6;
                      if (tmp290) {
                        let outcome7;
                        if (closure_137_4 != null) {
                          outcome7 = closure_137_4.outcome;
                        }
                        tmp290 = "pending" !== outcome7;
                      }
                      tmp287 = tmp290;
                    }
                    if (!tmp287) {
                      if (null != closure_137_5) {
                        const obj16 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_137_1, request: closure_137_5 };
                        closure_136_1(closure_136_2[15]).dispatch(obj16);
                        const obj23 = closure_136_1(closure_136_2[15]);
                      }
                      const result3 = closure_136_0(closure_136_2[29]).transitionToMemberVerification(closure_137_1);
                      const obj25 = closure_136_0(closure_136_2[29]);
                    }
                    c10 = 8;
                    c10 = 0;
                    closure_137_0.delete(closure_137_1);
                    closure_137_8.dispose();
                    c12 = 12;
                    c13 = 1;
                    if (arg0 === 1) {
                      c13 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c13 = 3;
                      const obj18 = { value, done: true };
                      return obj18;
                    } else {
                      c13 = 3;
                      const obj20 = { value: value3, done: true };
                      return obj20;
                    }
                  } else {
                    let body = closure_137_9.body;
                    closure_3 = body;
                    if (body == null) {
                      closure_3 = {};
                    }
                    closure_137_10 = closure_3;
                    const join_request = closure_137_10.join_request;
                    let application_status;
                    if (join_request != null) {
                      application_status = join_request.application_status;
                    }
                    application_status2 = application_status;
                    if (closure_137_10.show_verification_form) {
                      if (closure_137_8.isValid()) {
                        c10 = 10;
                        const _AbortController = AbortController;
                        const abortController = new AbortController();
                        closure_137_12 = abortController;
                        c12 = 15;
                        c13 = 1;
                        const obj22 = {
                          value: closure_136_0(closure_136_2[26]).withDiscoverRequestDeadline(closure_137_12, () => {
                                                const HTTP = closure_0(1282).HTTP;
                                                const obj = { url: closure_9.GUILD_MEMBER_REQUEST_TO_JOIN(closure_1_1), rejectWithError: closure_0(1282).rejectWithMigratedError(), signal: signal.signal, timeout: null };
                                                const obj2 = closure_0(1282);
                                                obj.timeout = { deadline: closure_0(10150).DISCOVER_REQUEST_DEADLINE_MS };
                                                return HTTP.get(obj);
                                              }),
                          done: false
                        };
                        return obj22;
                      }
                    }
                    if (closure_137_3()) {
                      let obj24 = { outcome: "succeeded" };
                    } else if (closure_137_6) {
                      obj24 = { outcome: "verification_required" };
                    } else if (application_status2 === closure_136_0(closure_136_2[24]).GuildJoinRequestApplicationStatuses.APPROVED) {
                      obj24 = { outcome: "succeeded" };
                    } else if (application_status2 === closure_136_0(closure_136_2[24]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
                      obj24 = { outcome: "pending" };
                    } else {
                      if (!closure_137_10.show_verification_form) {
                        if (null == closure_137_10.join_request) {
                          obj24 = { outcome: "succeeded" };
                        }
                      }
                      obj24 = { outcome: "verification_required" };
                    }
                    closure_137_4 = obj24;
                    c10 = 1;
                  }
                } else {
                  c10 = 0;
                  closure_137_16 = function report() {
                    const self = this;
                    const apply = closure_17.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                  closure_137_17 = function _report() {
                    const self = this;
                    const tmp = closure_3(function*() {
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
                              let isValidResult = null != closure_2_4;
                              if (isValidResult) {
                                isValidResult = assert.isValid();
                              }
                              if (isValidResult) {
                                let tmp10Result;
                                if (dependencyMap != null) {
                                  tmp10Result = tmp10(closure_2_4);
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
                    closure_17 = tmp;
                    const apply = tmp.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                  closure_137_14 = closure_137_16();
                  c10 = 7;
                  const tmp214 = closure_137_15();
                  let tmp215 = !tmp214;
                  if (tmp214) {
                    let outcome8;
                    if (closure_137_4 != null) {
                      outcome8 = closure_137_4.outcome;
                    }
                    let tmp218 = "verification_required" !== outcome8;
                    if (tmp218) {
                      let outcome9;
                      if (closure_137_4 != null) {
                        outcome9 = closure_137_4.outcome;
                      }
                      tmp218 = "pending" !== outcome9;
                    }
                    tmp215 = tmp218;
                  }
                  if (!tmp215) {
                    if (null != closure_137_5) {
                      const obj27 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_137_1, request: closure_137_5 };
                      closure_136_1(closure_136_2[15]).dispatch(obj27);
                      const obj17 = closure_136_1(closure_136_2[15]);
                    }
                    const result4 = closure_136_0(closure_136_2[29]).transitionToMemberVerification(closure_137_1);
                    const obj19 = closure_136_0(closure_136_2[29]);
                  }
                  c10 = 6;
                  c10 = 0;
                  closure_137_0.delete(closure_137_1);
                  closure_137_8.dispose();
                  c12 = 9;
                  c13 = 1;
                  if (arg0 === 1) {
                    c13 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c13 = 3;
                    const obj29 = { value, done: true };
                    return obj29;
                  } else {
                    c13 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
              }
            }
          break;
          case 5:
            c10 = 0;
            closure_137_0.delete(closure_137_1);
            closure_137_8.dispose();
            throw tmp472;
          case 6:
          break;
          case 7:
            c10 = 4;
            if (closure_137_15()) {
              const intl7 = closure_136_0(closure_136_2[11]).intl;
              closure_136_14(intl7.string(closure_136_1(closure_136_2[12]).grYfmA));
            }
          break;
          case 8:
            c10 = 0;
            closure_137_0.delete(closure_137_1);
            closure_137_8.dispose();
            throw tmp472;
          case 9:
          break;
          case 10:
            c10 = 6;
            if (closure_137_15()) {
              const intl6 = closure_136_0(closure_136_2[11]).intl;
              closure_136_14(intl6.string(closure_136_1(closure_136_2[12]).grYfmA));
            }
          break;
          case 11:
            c10 = 0;
            closure_137_0.delete(closure_137_1);
            closure_137_8.dispose();
            throw tmp472;
          case 12:
          break;
          case 13:
            c10 = 8;
            if (closure_137_15()) {
              const intl5 = closure_136_0(closure_136_2[11]).intl;
              closure_136_14(intl5.string(closure_136_1(closure_136_2[12]).grYfmA));
            }
          break;
          case 14:
            c10 = 3;
            closure_137_6 = true;
            if (closure_137_15()) {
              const intl4 = closure_136_0(closure_136_2[11]).intl;
              closure_136_14(intl4.string(closure_136_1(closure_136_2[12]).grYfmA));
            }
          break;
          case 15:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 0;
              closure_137_16 = function report() {
                const self = this;
                const apply = closure_17.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              closure_137_17 = function _report() {
                const self = this;
                const tmp = closure_3(function*() {
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
                          let isValidResult = null != closure_2_4;
                          if (isValidResult) {
                            isValidResult = assert.isValid();
                          }
                          if (isValidResult) {
                            let tmp10Result;
                            if (dependencyMap != null) {
                              tmp10Result = tmp10(closure_2_4);
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
                closure_17 = tmp;
                const apply = tmp.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              closure_137_14 = closure_137_16();
              c10 = 12;
              const tmp118 = closure_137_15();
              let tmp119 = !tmp118;
              if (tmp118) {
                let outcome10;
                if (closure_137_4 != null) {
                  outcome10 = closure_137_4.outcome;
                }
                let tmp122 = "verification_required" !== outcome10;
                if (tmp122) {
                  let outcome11;
                  if (closure_137_4 != null) {
                    outcome11 = closure_137_4.outcome;
                  }
                  tmp122 = "pending" !== outcome11;
                }
                tmp119 = tmp122;
              }
              if (!tmp119) {
                if (null != closure_137_5) {
                  const obj32 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_137_1, request: closure_137_5 };
                  closure_136_1(closure_136_2[15]).dispatch(obj32);
                  const obj9 = closure_136_1(closure_136_2[15]);
                }
                const result5 = closure_136_0(closure_136_2[29]).transitionToMemberVerification(closure_137_1);
                const obj11 = closure_136_0(closure_136_2[29]);
              }
              c10 = 11;
              c10 = 0;
              closure_137_0.delete(closure_137_1);
              closure_137_8.dispose();
              c12 = 17;
              c13 = 1;
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                const obj35 = { value, done: true };
                return obj35;
              } else {
                c13 = 3;
                const obj39 = { value, done: true };
                return obj39;
              }
            } else {
              closure_137_13 = value;
              if (closure_137_8.isValid()) {
                closure_137_5 = (function parseJoinRequest(body, arg1, id2) {
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
                })(closure_137_13.body, closure_137_1, id2);
                application_status2 = closure_137_5.application_status;
                c10 = 3;
              } else {
                c10 = 0;
                closure_137_16 = function report() {
                  const self = this;
                  const apply = closure_17.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                closure_137_17 = function _report() {
                  const self = this;
                  const tmp = closure_3(function*() {
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
                            let isValidResult = null != closure_2_4;
                            if (isValidResult) {
                              isValidResult = assert.isValid();
                            }
                            if (isValidResult) {
                              let tmp10Result;
                              if (dependencyMap != null) {
                                tmp10Result = tmp10(closure_2_4);
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
                  closure_17 = tmp;
                  const apply = tmp.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                closure_137_14 = closure_137_16();
                c10 = 14;
                const tmp79 = closure_137_15();
                let tmp80 = !tmp79;
                if (tmp79) {
                  let outcome12;
                  if (closure_137_4 != null) {
                    outcome12 = closure_137_4.outcome;
                  }
                  let tmp83 = "verification_required" !== outcome12;
                  if (tmp83) {
                    let outcome13;
                    if (closure_137_4 != null) {
                      outcome13 = closure_137_4.outcome;
                    }
                    tmp83 = "pending" !== outcome13;
                  }
                  tmp80 = tmp83;
                }
                if (!tmp80) {
                  if (null != closure_137_5) {
                    const obj40 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_137_1, request: closure_137_5 };
                    closure_136_1(closure_136_2[15]).dispatch(obj40);
                    const obj6 = closure_136_1(closure_136_2[15]);
                  }
                  const result6 = closure_136_0(closure_136_2[29]).transitionToMemberVerification(closure_137_1);
                  const obj8 = closure_136_0(closure_136_2[29]);
                }
                c10 = 13;
                c10 = 0;
                closure_137_0.delete(closure_137_1);
                closure_137_8.dispose();
                c12 = 20;
                c13 = 1;
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  const obj41 = { value, done: true };
                  return obj41;
                } else {
                  c13 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            }
          break;
          case 16:
            c10 = 0;
            closure_137_0.delete(closure_137_1);
            closure_137_8.dispose();
            throw tmp472;
          case 17:
          break;
          case 18:
            c10 = 11;
            if (closure_137_15()) {
              const intl3 = closure_136_0(closure_136_2[11]).intl;
              closure_136_14(intl3.string(closure_136_1(closure_136_2[12]).grYfmA));
            }
          break;
          case 19:
            c10 = 0;
            closure_137_0.delete(closure_137_1);
            closure_137_8.dispose();
            throw tmp472;
          case 20:
          break;
          case 21:
            c10 = 13;
            if (closure_137_15()) {
              const intl2 = closure_136_0(closure_136_2[11]).intl;
              closure_136_14(intl2.string(closure_136_1(closure_136_2[12]).grYfmA));
            }
          break;
          case 22:
            c10 = 0;
            closure_137_0.delete(closure_137_1);
            closure_137_8.dispose();
            throw tmp472;
          case 23:
          break;
          case 24:
            c10 = 15;
            if (closure_137_15()) {
              const intl = closure_136_0(closure_136_2[11]).intl;
              closure_136_14(intl.string(closure_136_1(closure_136_2[12]).grYfmA));
            }
          break;
          case 25:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              throw closure_7;
            }
          break;
          default:
            c10 = 2;
            if (closure_137_15()) {
              const intl9 = closure_136_0(closure_136_2[11]).intl;
              closure_136_14(intl9.string(closure_136_1(closure_136_2[12]).grYfmA));
            }
        }
      } catch (tmp472) {
        switch (c10) {
          case 0:
            c13 = tmp18;
            throw tmp473;
          case 1:
            c12 = tmp2;
          break;
          case 2:
            c12 = tmp;
          break;
          case 3:
            c12 = tmp18;
          break;
          case 4:
            c12 = tmp16;
          break;
          case 5:
            c12 = tmp15;
          break;
          case 6:
            c12 = tmp14;
          break;
          case 7:
            c12 = tmp13;
          break;
          case 8:
            c12 = tmp12;
          break;
          case 9:
            c12 = tmp11;
          break;
          case 10:
            c12 = tmp10;
          break;
          case 11:
            c12 = tmp9;
          break;
          case 12:
            c12 = tmp8;
          break;
          case 13:
            c12 = tmp7;
          break;
          case 14:
            c12 = tmp6;
          break;
          case 15:
            c12 = tmp5;
          break;
          case 16:
            c12 = tmp4;
          break;
          default:
            c12 = tmp17;
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
let closure_10 = fn(6839).NotificationAuthorizationStatus;
let items = [, , ];
({ USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED: arr[0], TOO_MANY_USER_GUILDS: arr[1], GUILD_AT_CAPACITY: arr[2] } = AbortCodes);
const set = new Set(items);
const set1 = new Set(Object.values(PlatformTypes));
const waterwheels = "waterwheels";
const set2 = new Set(Object.values(fn(5289).GuildJoinRequestApplicationStatuses));
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/actions/native/useWaterwheelsActions.tsx");

export function useWaterwheelsActions() {
  noop.useRef(new Set());
  return noop.useCallback((type, arg1) => {
    type = type.type;
    if (WaterwheelsCardTypes.WaterwheelsActionType.JOIN_GUILD === type) {
      return joinWaterwheelsGuild(ref.current, type.value.guild_id, arg1);
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD === type) {
      return runGuarded(() => type(7167).startLurking(type.value.guild_id, {}), () => {
        const intl = type(1113).intl;
        return intl.string(closure_1_1(2553).d6U01J);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_CONNECTION === type) {
      return runGuarded(() => {
        const provider = type.value.provider;
        if (set.has(provider)) {
          const obj = { platformType: provider, location: _location };
          authorizeConnectionDefault(obj);
        }
      }, () => {
        const intl = type(1113).intl;
        return intl.string(closure_1_1(2553)["rdTp+3"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_URI === type) {
      return runGuarded(() => type(7587).handleClick({ href: type.value.url }), () => {
        const intl = type(1113).intl;
        return intl.string(closure_1_1(2553)["4a9Wgk"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_NUDGE === type) {
      return runGuarded(requestNotifications, () => {
        const intl = type(1113).intl;
        return intl.string(closure_1_1(2553)["4BoMhv"]);
      });
    } else if (WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GAME === type) {
      return openWaterwheelsGame(type.value.game_id, arg1);
    } else {
      return Promise.resolve(type);
    }
  }, []);
}
export { openWaterwheelsGame };
export { joinWaterwheelsGuild };