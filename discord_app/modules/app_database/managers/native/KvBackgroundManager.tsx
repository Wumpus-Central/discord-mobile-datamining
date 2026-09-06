// === Module 17347: KvBackgroundManager ===

// Module 17347 (KvBackgroundManager)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1090 */;
import reportMalformedStorageValuesDefault from "reportMalformedStorageValues" /* 17348 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import MultiAccountStore from "MultiAccountStore" /* 12413 */;
import SaveableChannelsStore from "SaveableChannelsStore" /* 7478 */;
import FileSystemStore from "FileSystemStore" /* 7479 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

let require = fn;
let SaveableChannelsStore = fn(7478);
({ MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT: metroRequire, MAXIMUM_MESSAGES_PER_CHANNEL_EVER: closure_7 } = SaveableChannelsStore);
let closure_10 = 5 * DurationsDefault.Millis.MINUTE;
let closure_11 = new LoggerDefault("KvBackgroundManager");
class KvBackgroundManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.isCleaning = false;
    applyArgumentsResult.lastDeepClean = 0;
    applyArgumentsResult.hasConnected = false;
    applyArgumentsResult.applicationActive = false;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
            return applyArgumentsResult.handleAppStateUpdate(arg0);
          },
      LOGOUT(arg0) {
            return applyArgumentsResult.handleLogout(arg0);
          },
      POST_CONNECTION_OPEN(arg0) {
            return applyArgumentsResult.handlePostConnectionOpen(arg0);
          }
    };
    applyArgumentsResult.steps = {
      trimOrphanedChannels(arg0) {
            closure_0 = arg0;
            return closure_4(function*(arg0, value) {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
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
                      obj = { value, done: true };
                      return obj;
                    } else {
                      prefix = v1(1986).channels(prefix);
                      const obj5 = v1(1986);
                      const obj6 = prefix;
                      closure_1 = v1(1986).messages(prefix);
                      const obj7 = v1(1986);
                      closure_2 = v1(1986).channelsTemp(prefix);
                      if (closure_1_8.canEvictOrphans()) {
                        v1 = 1;
                        c0 = 1;
                        const obj1 = {
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
                        return obj1;
                      }
                      const obj8 = v1(1986);
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value, done: true };
                    return obj;
                  }
                  c0 = 3;
                  return { value: "HermesInternal", done: null };
                } catch (tmp5) {
                  c0 = tmp;
                  throw tmp5;
                }
              }
            })();
          },
      deleteDeprecatedKeyspaces(arg0) {
            closure_0 = arg0;
            return closure_4(function*(arg0, value) {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj = { value, done: true };
                  return obj;
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
                      obj = { value, done: true };
                      return obj;
                    } else {
                      c1 = 1;
                      c0 = 1;
                      const obj1 = {
                        value: closure_0.transaction((arg0) => {
                                  while (tmp !== undefined) {
                                    let tmp4 = closure_2_3(tmp2, 2);
                                    [tmp5, tmp6] = tmp4;
                                    let items = [tmp6];
                                    let tmp10 = new.target;
                                    let tmp11 = new.target;
                                    let flag = true;
                                    let table = new c0(1987).Table(items, tmp5, closure_1_0, true);
                                    let upgradeTransactionResult = table.upgradeTransaction(arg0);
                                    let deleteResult = upgradeTransactionResult.delete();
                                    continue;
                                  }
                                }, "deleteDeprecatedKeyspaces"),
                        done: false
                      };
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    c0 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp6) {
                  c0 = tmp;
                  throw tmp6;
                }
              }
            })();
          },
      trimLowDisk(arg0) {
            closure_0 = arg0;
            return closure_4(function*(arg0, value) {
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj = { value, done: true };
                  return obj;
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
                      obj = { value, done: true };
                      return obj;
                    } else if (isLowDisk.isLowDisk) {
                      c1 = 1;
                      c0 = 1;
                      const obj1 = { value: closure_0.incrementalVacuum().catch((error) => logger.warn(error)), done: false };
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value, done: true };
                    return obj;
                  }
                  c0 = 3;
                  return { value: "HermesInternal", done: null };
                } catch (tmp7) {
                  c0 = tmp;
                  throw tmp7;
                }
              }
            })();
          },
      deleteExtraDatabases() {
            return (async (arg0, value) => {
              if (c7 === 2) {
                c7 = 3;
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
                  c7 = 2;
                  if (0 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_3 = tmp;
                      closure_130_1 = undefined;
                      users = users.getUsers();
                      let _Set = Set;
                      let tmp30 = new.target;
                      let tmp31 = new.target;
                      let set = new Set(users.map((id) => closure_1_1(closure_1_2[13]).databaseName(id.id)));
                      closure_130_0 = set;
                      let Kv = closure_0(tmp2[12]).Kv;
                      c6 = 1;
                      c7 = 1;
                      let obj1 = { value: Kv.databases(), done: false };
                      return obj1;
                    }
                  } else if (1 === tmp5) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_1 = value;
                      closure_0 = value[Symbol.iterator]();
                      while (closure_0 !== undefined) {
                        users = 1;
                        closure_130_1 = tmp11;
                        if (!closure_130_0.has(closure_130_1)) {
                          let _HermesInternal = HermesInternal;
                          let logResult = logger.log("deleting orphaned database: " + closure_130_1);
                          let Database = closure_0(tmp2[12]).Database;
                          let deleteResult = Database.delete(closure_130_1);
                          let catchPromise = deleteResult.catch(() => null);
                        }
                        users = 0;
                        continue;
                      }
                      c7 = 3;
                      return { value: "HermesInternal", done: null };
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
            return (async (arg0, value) => {
              if (v3 === 2) {
                v3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
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
                      obj = { value, done: true };
                      return obj;
                    } else {
                      const Kv = v3(closure_1_2[12]).Kv;
                      c1 = 1;
                      v3 = 1;
                      const obj1 = { value: Kv.optimize(true), done: false };
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    v3 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp7) {
                  v3 = tmp;
                  throw tmp7;
                }
              }
            })();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = KvBackgroundManager.prototype;
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  const self = this;
  if ("background" === state.state) {
    reportMalformedStorageValuesDefault("app_background");
  }
  let applicationActive = !tmp4;
  if ("active" !== state.state) {
    applicationActive = this.applicationActive;
  }
  if (applicationActive) {
    self.maybeCleanup();
  }
  self.applicationActive = "active" === state.state;
};
prototype["handleLogout"] = function handleLogout() {
  this.hasConnected = false;
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  this.hasConnected = true;
};
prototype["maybeCleanup"] = function maybeCleanup() {
  const self = this;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            if (self.hasConnected) {
              if (!self.isCleaning) {
                const _Date = Date;
                const timestamp = Date.now();
                closure_128_0 = timestamp;
                isLowDisk = isLowDisk.isLowDisk;
                if (!isLowDisk) {
                  isLowDisk = timestamp - self.lastDeepClean >= closure_1_10;
                }
                closure_128_1 = isLowDisk;
                c4 = 1;
                c5 = 1;
                let obj1 = { value: tmp3(tmp70[9]).startBackgroundTask(), done: false };
                return obj1;
              }
            }
            c5 = 3;
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_2 = value;
            if (obj10.isIOS()) {
              if (closure_128_2 === tmp3(tmp70[9]).backgroundTaskIdentifierInvalid) {
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            c3 = 1;
            closure_129_0.isCleaning = true;
            c4 = 3;
            c5 = 1;
            const obj3 = { value: closure_129_0.cleanupAsync(closure_128_1), done: false };
            return obj3;
          }
        } else if (2 === tmp8) {
          c3 = 0;
          closure_129_0.isCleaning = false;
          if (closure_128_1) {
            let lastDeepClean3 = closure_128_0;
          } else {
            lastDeepClean3 = closure_129_0.lastDeepClean;
          }
          closure_129_0.lastDeepClean = lastDeepClean3;
          obj2 = tmp3(tmp70[9]);
          obj2.endBackgroundTask(closure_128_2);
          throw tmp70;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
          closure_129_0.isCleaning = false;
          if (closure_128_1) {
            let lastDeepClean = closure_128_0;
          } else {
            lastDeepClean = closure_129_0.lastDeepClean;
          }
          closure_129_0.lastDeepClean = lastDeepClean;
          obj = tmp3(tmp70[9]);
          obj.endBackgroundTask(closure_128_2);
        }
        c3 = 0;
        closure_129_0.isCleaning = false;
        if (closure_128_1) {
          let lastDeepClean2 = closure_128_0;
        } else {
          lastDeepClean2 = closure_129_0.lastDeepClean;
        }
        closure_129_0.lastDeepClean = lastDeepClean2;
        obj1 = tmp3(tmp70[9]);
        obj1.endBackgroundTask(closure_128_2);
        c5 = 3;
      } catch (tmp70) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp70;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["cleanupAsync"] = function cleanupAsync(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async (arg0, value) => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp4;
            const _HermesInternal = HermesInternal;
            closure_1_11.verbose("performing cleanup (deep: " + closure_0 + ")");
            const databaseResult = v2(dependencyMap[11]).database();
            if (null != databaseResult) {
              v2 = 1;
              dependencyMap = 1;
              const obj1 = { value: self.cleanDatabaseAsync(databaseResult, tmp16), done: false };
              return obj1;
            }
            const obj9 = v2(dependencyMap[11]);
            tmp16 = closure_0;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj2 = { value, done: true };
            return obj2;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const steps = closure_128_1.steps;
            v2 = 3;
            dependencyMap = 1;
            const obj4 = { value: steps.deleteExtraDatabases(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
        const steps2 = closure_128_1.steps;
        v2 = 2;
        dependencyMap = 1;
        const obj5 = { value: steps2.optimize(), done: false };
        return obj5;
      } catch (tmp10) {
        dependencyMap = tmp;
        throw tmp10;
      }
    }
  })();
};
prototype["cleanDatabaseAsync"] = function cleanDatabaseAsync(databaseResult, arg1) {
  closure_0 = databaseResult;
  closure_1 = arg1;
  const self = this;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            c3 = 1;
            const steps3 = self.steps;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: steps3.trimOrphanedChannels(closure_0), done: false };
            return obj1;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = closure_2;
            logger.warn("couldn't clean database:", closure_128_0);
            c5 = 3;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj2 = { value, done: true };
                return obj2;
              }
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const steps = closure_129_2.steps;
                c4 = 4;
                c5 = 1;
                const obj4 = { value: steps.trimLowDisk(closure_129_0), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            }
            c3 = 0;
          }
          const steps2 = closure_129_2.steps;
          c4 = 3;
          c5 = 1;
          const obj5 = { value: steps2.deleteDeprecatedKeyspaces(closure_129_0), done: false };
          return obj5;
        }
      } catch (tmp24) {
        closure_2 = tmp24;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp24;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
const kvBackgroundManager = new KvBackgroundManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_database/managers/native/KvBackgroundManager.tsx");

export default kvBackgroundManager;