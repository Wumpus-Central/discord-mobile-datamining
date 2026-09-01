// === Module 16925: handleAppStateUpdate ===

// Module 16925 (handleAppStateUpdate)
import timestampDefault from "timestamp" /* 3 */;
import setDefault from "set" /* 687 */;
import initializeDefault from "initialize" /* 5486 */;
import reportMalformedStorageValuesDefault from "reportMalformedStorageValues" /* 16926 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "initialize" /* 11982 */;
import handleSelectedChannelStoreChanged from "handleSelectedChannelStoreChanged" /* 7223 */;
import closure_8 from "handleSelectedChannelStoreChanged" /* 7223 */;
import closure_9 from "result" /* 7224 */;

let require = arg1;
({ MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT: closure_6, MAXIMUM_MESSAGES_PER_CHANNEL_EVER: error } = handleSelectedChannelStoreChanged);
let closure_10 = 5 * setDefault.Millis.MINUTE;
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
            closure_0 = closure_1_0;
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
                  return { value: "HermesInternal", done: null };
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
                      c0 = v0(closure_1_2[11]).channels(c0);
                      const obj5 = v0(closure_1_2[11]);
                      const obj6 = c0;
                      v0 = v0(closure_1_2[11]).messages(c0);
                      const obj7 = v0(closure_1_2[11]);
                      closure_2 = v0(closure_1_2[11]).channelsTemp(c0);
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
                      const obj8 = v0(closure_1_2[11]);
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
                  return { value: "HermesInternal", done: null };
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
                  return { value: "HermesInternal", done: null };
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
                          let tmp3 = closure_1_3;
                          let tmp4 = closure_1_3(tmp2, 2);
                          let tmp7 = v3;
                          let tmp8 = closure_1_2;
                          [tmp5, tmp6] = tmp4;
                          let items = [tmp6];
                          let tmp9 = v3;
                          let tmp10 = new.target;
                          let tmp11 = new.target;
                          let tmp12 = items;
                          let flag = true;
                          let table = new v3(closure_1_2[12]).Table(items, tmp5, v3, true);
                          let tmp13 = table;
                          let upgradeTransactionResult = table.upgradeTransaction(arg0);
                          let deleteResult = upgradeTransactionResult.delete();
                          continue;
                        }
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
                    return { value: "HermesInternal", done: null };
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
                  return { value: "HermesInternal", done: null };
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
                      obj1[0] = c0.incrementalVacuum().catch((arg0) => logger.warn(arg0));
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
                  return { value: "HermesInternal", done: null };
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
                  return { value: "HermesInternal", done: null };
                }
              } else {
                while (true) {
                  let num = 2;
                  c7 = 2;
                  if (0 === c6) {
                    if (arg0 === 1) {
                      let num6 = 3;
                      c7 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      let num5 = 3;
                      c7 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      closure_3 = tmp;
                      closure_2 = tmp2;
                      let set;
                      closure_1 = undefined;
                      let tmp30 = users;
                      users = users.getUsers();
                      let _Set = Set;
                      let tmp31 = new.target;
                      let tmp32 = new.target;
                      set = new Set(users.map((id) => callback(tmp2[13]).databaseName(id.id)));
                      let tmp34 = set;
                      let tmp35 = closure_1_0;
                      let tmp36 = closure_1_2;
                      let Kv = closure_1_0(closure_1_2[12]).Kv;
                      c6 = 1;
                      let num12 = 1;
                      c7 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = Kv.databases();
                      return obj1;
                    }
                  } else if (1 === tmp5) {
                    if (arg0 === 1) {
                      let num4 = 3;
                      c7 = 3;
                      throw arg1;
                    } else if (arg0 === 2) {
                      let num3 = 3;
                      c7 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      closure_1 = arg1;
                      let tmp26 = arg1;
                      closure_1 = arg1;
                      set = arg1[Symbol.iterator]();
                      let tmp9 = closure_1;
                      let tmp10 = set;
                      while (set !== undefined) {
                        let tmp27 = closure_2;
                        users = 1;
                        closure_1 = tmp11;
                        let tmp28 = set;
                        let tmp29 = closure_1;
                        if (!set.has(closure_1)) {
                          let tmp12 = closure_2;
                          let tmp13 = closure_3;
                          let tmp14 = closure_1_11;
                          let tmp15 = closure_1;
                          let _HermesInternal = HermesInternal;
                          let logResult = closure_1_11.log("deleting orphaned database: " + closure_1);
                          let tmp17 = closure_1_0;
                          let tmp18 = closure_1_2;
                          let Database = closure_1_0(closure_1_2[12]).Database;
                          let tmp19 = closure_1;
                          let deleteResult = Database.delete(closure_1);
                          let catchPromise = deleteResult.catch(() => null);
                        }
                        users = 0;
                        continue;
                      }
                      let num2 = 3;
                      c7 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    let tmp6 = closure_4;
                    let tmp7 = closure_4;
                    users = 0;
                    let tmp8 = set;
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
                  return { value: "HermesInternal", done: null };
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
                      const Kv = v0(closure_1_2[12]).Kv;
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
                    return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
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
            if (closure_1_0.hasConnected) {
              if (!closure_1_0.isCleaning) {
                const _Date = Date;
                timestamp = Date.now();
                isLowDisk = closure_1_9.isLowDisk;
                if (!isLowDisk) {
                  isLowDisk = timestamp - closure_1_0.lastDeepClean >= closure_1_10;
                }
                c4 = 1;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_1(7500).startBackgroundTask();
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
              if (dependencyMap === closure_1_1(7500).backgroundTaskIdentifierInvalid) {
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            c3 = 1;
            closure_1_0.isCleaning = true;
            c4 = 3;
            c5 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = closure_1_0.cleanupAsync(closure_1_1);
            return obj3;
          }
        } else if (2 === tmp8) {
          c3 = 0;
          timestamp.isCleaning = false;
          if (closure_1_1) {
            let lastDeepClean3 = closure_1_0;
          } else {
            lastDeepClean3 = closure_1_0.lastDeepClean;
          }
          timestamp.lastDeepClean = lastDeepClean3;
          obj2 = closure_1_1(7500);
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
          obj = closure_1_1(7500);
          obj.endBackgroundTask(c2);
          const tmp12 = timestamp;
        }
        c3 = 0;
        closure_1_0.isCleaning = false;
        if (isLowDisk) {
          let lastDeepClean2 = timestamp;
        } else {
          lastDeepClean2 = timestamp.lastDeepClean;
        }
        closure_1_0.lastDeepClean = lastDeepClean2;
        obj1 = closure_1_1(7500);
        obj1.endBackgroundTask(c2);
        c5 = 3;
        const tmp26 = closure_1_0;
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
  closure_0 = closure_1_1;
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
        return { value: "HermesInternal", done: null };
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
            const databaseResult = v0(table[11]).database();
            if (null != databaseResult) {
              v0 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = v0.cleanDatabaseAsync(databaseResult, tmp17);
              return obj1;
            }
            const obj9 = v0(table[11]);
            tmp17 = closure_1_0;
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
          return { value: "HermesInternal", done: null };
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
prototype["cleanDatabaseAsync"] = function cleanDatabaseAsync(databaseResult, arg1) {
  closure_0 = databaseResult;
  closure_1 = arg1;
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
        return { value: "HermesInternal", done: null };
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
            const steps3 = closure_1_2.steps;
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
let tmp3 = new timestampDefault("KvBackgroundManager");
const result = require("set").fileFinishedImporting("modules/app_database/managers/native/KvBackgroundManager.tsx");

export default kvBackgroundManager;