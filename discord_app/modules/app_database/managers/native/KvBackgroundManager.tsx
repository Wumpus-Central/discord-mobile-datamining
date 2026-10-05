// === Module 17495: KvBackgroundManager ===

// Module 17495 (KvBackgroundManager)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1102 */;
import reportMalformedStorageValuesDefault from "reportMalformedStorageValues" /* 17496 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MultiAccountStore from "MultiAccountStore" /* 12056 */;
import SaveableChannelsStore_mod from "SaveableChannelsStore" /* 6987 */;
import FileSystemStore from "FileSystemStore" /* 6988 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c0, c2, c4, c5, c6, c7, saveableChannels, set;

let metroImportDefault;
let metroRequire;
let SaveableChannelsStore = SaveableChannelsStore_mod;
({ MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT: metroRequire, MAXIMUM_MESSAGES_PER_CHANNEL_EVER: metroImportDefault } = SaveableChannelsStore);
SaveableChannelsStore = SaveableChannelsStore_mod;
let closure_10 = 5 * DurationsDefault.Millis.MINUTE;
const tmp3 = new LoggerDefault("KvBackgroundManager");
let closure_11 = tmp3;
class KvBackgroundManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.isCleaning = false;
    applyArgumentsResult.lastDeepClean = 0;
    applyArgumentsResult.hasConnected = false;
    applyArgumentsResult.applicationActive = false;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
        return require.handleAppStateUpdate(arg0);
      },
      LOGOUT(arg0) {
        return require.handleLogout(arg0);
      },
      POST_CONNECTION_OPEN(arg0) {
        return require.handlePostConnectionOpen(arg0);
      }
    };
    applyArgumentsResult.steps = {
      trimOrphanedChannels(arg0) {
        let closure_0 = arg0;
        return closure_4(function*() {
          let v1;
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const obj5 = v1(closure_1_2[11]);
                  const obj6 = closure_0;
                  closure_0 = obj5.channels(closure_0);
                  const obj7 = v1(closure_1_2[11]);
                  let closure_1 = obj7.messages(closure_0);
                  const obj8 = v1(closure_1_2[11]);
                  let closure_2 = obj8.channelsTemp(closure_0);
                  if (closure_1_8.canEvictOrphans()) {
                    v1 = 1;
                    c0 = 1;
                    const obj4 = {
                      value: obj6.transaction((arg0) => {
                                  const upgradeTransactionResult = closure_1.upgradeTransaction(arg0);
                                  const upgradeTransactionResult1 = closure_2.upgradeTransaction(arg0);
                                  saveableChannels = saveableChannels.getSaveableChannels();
                                  const iter = saveableChannels[Symbol.iterator]();
                                  const nextResult = iter.next();
                                  while (iter !== undefined) {
                                    let putResult = upgradeTransactionResult1.put(nextResult.guildId, nextResult.channelId, null);
                                    continue;
                                  }
                                  upgradeTransactionResult.trimOrphans(prefix.prefix);
                                  upgradeTransactionResult.trimChannelsIn(closure_2.prefix, closure_2_7);
                                  upgradeTransactionResult.trimChannelsNotIn(closure_2.prefix, closure_2_6);
                                  upgradeTransactionResult1.delete();
                                }, "trimOrphanedChannels"),
                      done: false
                    };
                    return obj4;
                  }
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
              return { value: "IconComponent", done: null };
            } catch (tmp4) {
              c0 = 3;
              throw tmp4;
            }
          }
        })();
      },
      deleteDeprecatedKeyspaces(arg0) {
        let closure_0 = arg0;
        return closure_4(function*() {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else {
            const tmp6 = value;
            if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
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
                    c1 = 1;
                    c0 = 1;
                    const obj4 = {
                      value: closure_0.transaction(function(arg0) {
                                  let tmp5;
                                  let tmp6;
                                  const tmp = c0(closure_2_2[11]).DEPRECATED_KEYSPACES[Symbol.iterator]();
                                  while (tmp !== undefined) {
                                    let tmp4 = closure_2_3(tmp2, 2);
                                    [tmp5, tmp6] = tmp4;
                                    let items = [tmp6];
                                    let self = this;
                                    let self2 = this;
                                    let flag = true;
                                    let table = new c0(closure_2_2[12]).Table(items, tmp5, closure_1_0, true);
                                    let upgradeTransactionResult = table.upgradeTransaction(arg0);
                                    let deleteResult = upgradeTransactionResult.delete();
                                    continue;
                                  }
                                }, "deleteDeprecatedKeyspaces"),
                      done: false
                    };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c0 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp5) {
                c0 = 3;
                throw tmp5;
              }
            }
          }
        })();
      },
      trimLowDisk(arg0) {
        let closure_0 = arg0;
        return closure_4(function*() {
          let incrementalVacuumResult;
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
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
                } else if (isLowDisk.isLowDisk) {
                  c1 = 1;
                  c0 = 1;
                  const obj4 = { value: incrementalVacuumResult.catch((error) => logger.warn(error)), done: false };
                  incrementalVacuumResult = closure_0.incrementalVacuum();
                  return obj4;
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
              return { value: "IconComponent", done: null };
            } catch (tmp6) {
              c0 = 3;
              throw tmp6;
            }
          }
        })();
      },
      deleteExtraDatabases() {
        return (async function() {
          let users;
          if (c7 === 2) {
            c7 = 3;
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
              let closure_2;
              let c1;
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_3 = tmp;
                  closure_2 = tmp2;
                  c1 = undefined;
                  users = users.getUsers();
                  let _Set = Set;
                  let self = this;
                  let self2 = this;
                  set = new Set(users.map((id) => {
                    const obj = closure_1_1(closure_1_2[13]);
                    return obj.databaseName(id.id);
                  }));
                  let Kv = closure_0(closure_2[12]).Kv;
                  c6 = 1;
                  c7 = 1;
                  let obj4 = { value: Kv.databases(), done: false };
                  return obj4;
                }
              } else if (1 === tmp5) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  let obj = { value, done: true };
                  return obj;
                } else {
                  let closure_1_1 = value;
                  closure_0 = value[Symbol.iterator]();
                  while (closure_0 !== undefined) {
                    users = 1;
                    c1 = tmp11;
                    if (!set.has(c1)) {
                      let _HermesInternal = HermesInternal;
                      let logResult = logger.log("deleting orphaned database: " + c1);
                      let Database = closure_0(closure_2[12]).Database;
                      let deleteResult = Database.delete(c1);
                      let catchPromise = deleteResult.catch(() => null);
                    }
                    users = 0;
                    continue;
                  }
                  c7 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else {
                users = 0;
                closure_0.return();
                throw closure_1_4;
              }
            }
          }
        })();
      },
      optimize() {
        return (async () => {
          let v3;
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              v3 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  const Kv = v3(closure_1_2[12]).Kv;
                  c1 = 1;
                  v3 = 1;
                  const obj4 = { value: Kv.optimize(true), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                v3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp6) {
              v3 = 3;
              throw tmp6;
            }
          }
        })();
      }
    };
    return applyArgumentsResult;
  }
  handleAppStateUpdate(state) {
    const self = this;
    state = state.state;
    const applicationActive = this.applicationActive;
    if ("background" === state.state) {
      reportMalformedStorageValuesDefault("app_background");
    }
    const tmp5 = "active" !== state && applicationActive;
    if (tmp5) {
      self.maybeCleanup();
    }
    self.applicationActive = "active" === state;
  }
  handleLogout() {
    this.hasConnected = false;
  }
  handlePostConnectionOpen() {
    this.hasConnected = true;
  }
  maybeCleanup() {
    const self = this;
    return (async () => {
      let closure_1;
      let lastDeepClean;
      let obj4;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        let closure_2;
        try {
          let timestamp;
          let isLowDisk;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              timestamp = undefined;
              isLowDisk = undefined;
              closure_2 = undefined;
              if (self.hasConnected) {
                if (!self.isCleaning) {
                  const _Date = Date;
                  timestamp = Date.now();
                  isLowDisk = isLowDisk.isLowDisk || timestamp - self.lastDeepClean >= closure_1_10;
                  c4 = 1;
                  c5 = 1;
                  const obj5 = { value: obj4.startBackgroundTask(), done: false };
                  obj4 = tmp(closure_2[9]);
                  return obj5;
                }
              }
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_2 = value;
              const obj8 = lastDeepClean(closure_2[10]);
              if (obj8.isIOS()) {
                lastDeepClean = tmp;
                if (closure_2 === tmp(closure_2[9]).backgroundTaskIdentifierInvalid) {
                  c5 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              c3 = 1;
              closure_129_0.isCleaning = true;
              lastDeepClean = closure_129_0;
              c4 = 3;
              c5 = 1;
              const obj7 = { value: closure_129_0.cleanupAsync(isLowDisk), done: false };
              return obj7;
            }
          } else if (2 === c4) {
            let lastDeepClean2;
            lastDeepClean = tmp;
            c3 = 0;
            closure_129_0.isCleaning = false;
            const tmp32 = closure_2;
            if (isLowDisk) {
              lastDeepClean2 = timestamp;
            } else {
              lastDeepClean2 = closure_129_0.lastDeepClean;
            }
            closure_129_0.lastDeepClean = lastDeepClean2;
            lastDeepClean = tmp(closure_2[9]).endBackgroundTask;
            const tmp44 = tmp(closure_2[9]);
            lastDeepClean(closure_2);
            throw tmp32;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            lastDeepClean = closure_129_0;
            closure_129_0.isCleaning = false;
            if (isLowDisk) {
              lastDeepClean = timestamp;
            } else {
              lastDeepClean = closure_129_0.lastDeepClean;
            }
            closure_129_0.lastDeepClean = lastDeepClean;
            lastDeepClean = tmp(closure_2[9]);
            lastDeepClean.endBackgroundTask(closure_2);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            lastDeepClean = closure_129_0;
            closure_129_0.isCleaning = false;
            if (isLowDisk) {
              lastDeepClean = timestamp;
            } else {
              lastDeepClean = closure_129_0.lastDeepClean;
            }
            closure_129_0.lastDeepClean = lastDeepClean;
            lastDeepClean = tmp(closure_2[9]);
            lastDeepClean.endBackgroundTask(closure_2);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp62) {
          closure_2 = tmp62;
          if (0 === c3) {
            c5 = 3;
            throw tmp62;
          } else {
            c4 = 2;
          }
        }
      }
    })();
  }
  cleanupAsync(isLowDisk) {
    let closure_0 = isLowDisk;
    const self = this;
    return (async () => {
      let v2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v2) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp3;
              const _HermesInternal = HermesInternal;
              closure_1_11.verbose("performing cleanup (deep: " + closure_0 + ")");
              const obj9 = v2(c2[11]);
              const databaseResult = obj9.database();
              const tmp14 = closure_0;
              if (null != databaseResult) {
                v2 = 1;
                c2 = 1;
                const obj4 = { value: self.cleanDatabaseAsync(databaseResult, tmp14), done: false };
                return obj4;
              }
            }
          } else if (1 === v2) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj5 = { value, done: true };
              return obj5;
            }
          } else if (2 === v2) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const steps = closure_128_1.steps;
              v2 = 3;
              c2 = 1;
              const obj7 = { value: steps.deleteExtraDatabases(), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
          const steps2 = closure_128_1.steps;
          v2 = 2;
          c2 = 1;
          const obj8 = { value: steps2.optimize(), done: false };
          return obj8;
        } catch (tmp9) {
          c2 = 3;
          throw tmp9;
        }
      }
    })();
  }
  cleanDatabaseAsync(databaseResult, arg1) {
    let closure_0 = databaseResult;
    let closure_1 = arg1;
    const self = this;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp;
              closure_0 = tmp4;
              c3 = 1;
              const steps3 = self.steps;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: steps3.trimOrphanedChannels(closure_0), done: false };
              return obj4;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              logger.warn("couldn't clean database:", closure_0);
            } else {
              if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else if (closure_129_1) {
                  const steps2 = closure_129_2.steps;
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: steps2.deleteDeprecatedKeyspaces(closure_129_0), done: false };
                  return obj6;
                }
              } else if (3 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  const steps = closure_129_2.steps;
                  c4 = 4;
                  c5 = 1;
                  const obj8 = { value: steps.trimLowDisk(closure_129_0), done: false };
                  return obj8;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
}
const prototype = KvBackgroundManager.prototype;
const kvBackgroundManager = new KvBackgroundManager();
const result = size.fileFinishedImporting("modules/app_database/managers/native/KvBackgroundManager.tsx");

export default kvBackgroundManager;