// discord_app/modules/app_database/managers/native/KvBackgroundManager.tsx
import timestampDefault from "../../../debug/Logger.tsx";
import obj132Default from "../../../../utils/Durations.tsx";
import initializeDefault from "../../../../lib/AutomaticLifecycleManager.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import initialize from "../../../multi_account/MultiAccountStore.tsx";
import handleSelectedChannelStoreChanged from "../../modules/messages/SaveableChannelsStore.tsx";
import handleSelectedChannelStoreChanged2 from "../../modules/messages/SaveableChannelsStore.tsx";
import closure_9 from "../../stores/FileSystemStore.tsx";

let require = fn;
({ MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT: closure_6, MAXIMUM_MESSAGES_PER_CHANNEL_EVER: error } = handleSelectedChannelStoreChanged);
let closure_10 = 5 * obj132Default.Millis.MINUTE;
let closure_11 = new timestampDefault("KvBackgroundManager");
initializeDefault;
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
      trimOrphanedChannels(closure_1_0) {
            closure_0 = require;
            return callback(function*() {
              if (c0 === 2) {
                c0 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp3 === 3) {
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
                try {
                  c0 = 2;
                  if (0 === v0) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      c0 = v0(closure_1_2[10]).channels(c0);
                      const obj5 = v0(closure_1_2[10]);
                      const obj6 = c0;
                      v0 = v0(closure_1_2[10]).messages(c0);
                      const obj7 = v0(closure_1_2[10]);
                      closure_2 = v0(closure_1_2[10]).channelsTemp(c0);
                      if (closure_1_8.canEvictOrphans()) {
                        v0 = 1;
                        c0 = 1;
                        obj1 = { value: null, done: false };
                        obj1[0] = obj6.transaction((arg0) => {
                          const upgradeTransactionResult = c1.upgradeTransaction(arg0);
                          const upgradeTransactionResult1 = closure_2.upgradeTransaction(arg0);
                          const saveableChannels = closure_1_8.getSaveableChannels();
                          const iter = saveableChannels[Symbol.iterator]();
                          const nextResult = iter.next();
                          while (iter !== undefined) {
                            let putResult = upgradeTransactionResult1.put(nextResult.guildId, nextResult.channelId, null);
                            continue;
                          }
                          upgradeTransactionResult.trimOrphans(prefix.prefix);
                          upgradeTransactionResult.trimChannelsIn(closure_2.prefix, closure_1_7);
                          upgradeTransactionResult.trimChannelsNotIn(closure_2.prefix, closure_1_6);
                          upgradeTransactionResult1.delete();
                        }, "trimOrphanedChannels");
                        return obj1;
                      }
                      const obj8 = v0(closure_1_2[10]);
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  }
                  c0 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } catch (tmp5) {
                  c0 = tmp;
                  throw tmp5;
                }
              }
            })();
          },
      deleteDeprecatedKeyspaces(closure_0) {
            return callback(function*() {
              if (c0 === 2) {
                c0 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp3 === 3) {
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
                try {
                  c0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      c1 = 1;
                      c0 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = c0.transaction((arg0) => {
                        while (tmp !== undefined) {
                          let tmp4 = closure_1_3(tmp2, 2);
                          [tmp5, tmp6] = tmp4;
                          let items = [tmp6];
                          let flag = true;
                          let table = new v3(closure_1_2[11]).Table(items, tmp5, v3, true);
                          let upgradeTransactionResult = table.upgradeTransaction(arg0);
                          let deleteResult = upgradeTransactionResult.delete();
                          continue;
                        }
                        tmp = v3(closure_1_2[10]).DEPRECATED_KEYSPACES[Symbol.iterator]();
                      }, "deleteDeprecatedKeyspaces");
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    c0 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } catch (tmp6) {
                  c0 = tmp;
                  throw tmp6;
                }
              }
            })();
          },
      trimLowDisk(closure_0) {
            return callback(function*() {
              if (c0 === 2) {
                c0 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp3 === 3) {
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
                try {
                  c0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else if (closure_1_9.isLowDisk) {
                      c1 = 1;
                      c0 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = c0.incrementalVacuum().catch((error) => logger.warn(error));
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  }
                  c0 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } catch (tmp7) {
                  c0 = tmp;
                  throw tmp7;
                }
              }
            })();
          },
      deleteExtraDatabases() {
            return closure_1_4(function*() {
              if (c7 === 2) {
                c7 = 3;
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
                  c7 = 2;
                  if (0 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      closure_3 = tmp;
                      closure_2 = tmp2;
                      closure_1 = undefined;
                      users = users.getUsers();
                      let _Set = Set;
                      let set = new Set(users.map((item, index) => callback(tmp2[12]).databaseName(item.id)));
                      let Kv = closure_1_0(closure_1_2[11]).Kv;
                      c6 = 1;
                      c7 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = Kv.databases();
                      return obj1;
                    }
                  } else if (1 === tmp5) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      closure_1 = arg1;
                      set = arg1[Symbol.iterator]();
                      while (set !== undefined) {
                        users = 1;
                        closure_1 = tmp11;
                        if (!set.has(closure_1)) {
                          let _HermesInternal = HermesInternal;
                          let logResult = closure_1_11.log("deleting orphaned database: " + closure_1);
                          let Database = closure_1_0(closure_1_2[11]).Database;
                          let deleteResult = Database.delete(closure_1);
                          let catchPromise = deleteResult.catch((error) => null);
                        }
                        users = 0;
                        continue;
                      }
                      c7 = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } else {
                    users = 0;
                    set.return();
                    throw closure_4;
                  }
                }
              }
            })();
          },
      optimize() {
            return closure_1_4(function*() {
              if (v0 === 2) {
                v0 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp3 === 3) {
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
                try {
                  v0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      v0 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      v0 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      const Kv = v0(closure_1_2[11]).Kv;
                      c1 = 1;
                      v0 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = Kv.optimize(true);
                      return obj1;
                    }
                  } else if (arg0 === 1) {
                    v0 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    v0 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    v0 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } catch (tmp7) {
                  v0 = tmp;
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
  let applicationActive = !tmp;
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
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
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
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let isLowDisk = tmp3;
            let timestamp = tmp5;
            timestamp = undefined;
            isLowDisk = undefined;
            c2 = undefined;
            if (self.hasConnected) {
              if (!self.isCleaning) {
                const _Date = Date;
                timestamp = Date.now();
                isLowDisk = closure_1_9.isLowDisk;
                if (!isLowDisk) {
                  isLowDisk = timestamp - self.lastDeepClean >= closure_1_10;
                }
                c4 = 1;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_1(7503).startBackgroundTask();
                return obj1;
              }
            }
            c5 = 3;
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            dependencyMap = arg1;
            if (obj10.isIOS()) {
              if (dependencyMap === closure_1_1(7503).backgroundTaskIdentifierInvalid) {
                c5 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            }
            c3 = 1;
            self.isCleaning = true;
            c4 = 3;
            c5 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = self.cleanupAsync(closure_1_1);
            return obj3;
          }
        } else if (2 === tmp8) {
          c3 = 0;
          timestamp.isCleaning = false;
          if (closure_1_1) {
            let lastDeepClean3 = self;
          } else {
            lastDeepClean3 = self.lastDeepClean;
          }
          timestamp.lastDeepClean = lastDeepClean3;
          obj2 = closure_1_1(7503);
          obj2.endBackgroundTask(dependencyMap);
          throw c2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          c3 = 0;
          timestamp.isCleaning = false;
          if (isLowDisk) {
            let lastDeepClean = timestamp;
          } else {
            lastDeepClean = timestamp.lastDeepClean;
          }
          timestamp.lastDeepClean = lastDeepClean;
          obj = closure_1_1(7503);
          obj.endBackgroundTask(c2);
        }
        c3 = 0;
        self.isCleaning = false;
        if (isLowDisk) {
          let lastDeepClean2 = timestamp;
        } else {
          lastDeepClean2 = timestamp.lastDeepClean;
        }
        self.lastDeepClean = lastDeepClean2;
        obj1 = closure_1_1(7503);
        obj1.endBackgroundTask(c2);
        c5 = 3;
      } catch (tmp70) {
        c2 = tmp70;
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
prototype["cleanupAsync"] = function cleanupAsync(closure_1_1) {
  closure_0 = importDefault;
  const self = this;
  return callback(function*() {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
      try {
        table = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            const _HermesInternal = HermesInternal;
            closure_1_11.verbose("performing cleanup (deep: " + closure_1_0 + ")");
            const databaseResult = v0(table[10]).database();
            if (null != databaseResult) {
              v0 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = v0.cleanDatabaseAsync(databaseResult, closure_1_0);
              return obj1;
            }
            const obj9 = v0(table[10]);
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            const steps = v0.steps;
            v0 = 3;
            table = 1;
            const obj4 = { value: null, done: false };
            obj4[0] = steps.deleteExtraDatabases();
            return obj4;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          table = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
        const steps2 = v0.steps;
        v0 = 2;
        table = 1;
        const obj5 = { value: null, done: false };
        obj5[0] = steps2.optimize();
        return obj5;
      } catch (tmp10) {
        table = tmp;
        throw tmp10;
      }
    }
  })();
};
prototype["cleanDatabaseAsync"] = function cleanDatabaseAsync(databaseResult, closure_1_0) {
  closure_0 = databaseResult;
  closure_1 = require;
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            c3 = 1;
            const steps3 = self.steps;
            c4 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = steps3.trimOrphanedChannels(closure_1_0);
            return obj1;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_0 = closure_2;
            closure_1_11.warn("couldn't clean database:", closure_0);
            c5 = 3;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              }
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                const steps = closure_2.steps;
                c4 = 4;
                c5 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = steps.trimLowDisk(closure_0);
                return obj4;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c3 = 0;
          }
          const steps2 = closure_2.steps;
          c4 = 3;
          c5 = 1;
          const obj5 = { value: null, done: false };
          obj5[0] = steps2.deleteDeprecatedKeyspaces(closure_0);
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
const tmp3 = new timestampDefault("KvBackgroundManager");
const result = require("obj132").fileFinishedImporting("modules/app_database/managers/native/KvBackgroundManager.tsx");

export default kvBackgroundManager;