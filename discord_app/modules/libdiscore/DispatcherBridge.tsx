// discord_app/modules/libdiscore/DispatcherBridge.tsx
import LoggerDefault from "../debug/Logger.tsx";
import libdiscoreExperiments from "libdiscoreExperiments.tsx";
import Constants from "../../Constants.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import DevSettingsStore from "../devtools/dev_settings/DevSettingsStore.tsx";
import RawGuildEmojiStore from "../emojis/RawGuildEmojiStore.tsx";
import GuildStickersStore from "../stickers/GuildStickersStore.tsx";
import NoteStore from "../user_profile/notes/NoteStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildRoleStore from "../../stores/GuildRoleStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _instance_members_initializer_DispatcherBridge_, recordType;

const AnalyticEvents = Constants.AnalyticEvents;
const tmp7 = new LoggerDefault("DispatcherBridge");
const metroRequire = tmp7;
let items = [NoteStore, GuildStore, GuildRoleStore, RawGuildEmojiStore, GuildStickersStore];
let closure_7 = {
  GUILD_MEMBER_ADD(arg0) {
    const obj = { currentUserId: AuthenticationStore.getId() };
    const merged = Object.assign(arg0);
    return obj;
  },
  CONNECTION_OPEN(guilds) {
    return { guilds: guilds.guilds, unavailableGuilds: guilds.unavailableGuilds };
  },
  CACHE_LOADED(guilds) {
    return { guilds: guilds.guilds };
  },
  CACHE_LOADED_LAZY(guilds) {
    return { guilds: guilds.guilds };
  },
  BACKGROUND_SYNC(guilds) {
    return { guilds: guilds.guilds };
  },
};
const set = new Set(["libdiscore", "typescript-libdiscore-dual-read"]);
_instance_members_initializer_DispatcherBridge_ = function () {
  this.tokenToStore = new Map();
  this.disabledFromFatalError = false;
  new Map();
};
class DispatcherBridge {
  constructor(items) {
    let actionHandler;
    const obj = Object.create(new.target.prototype);
    const tmp2 = _instance_members_initializer_DispatcherBridge_();
    if (0 !== items.length) {
      const FLUX_API = obj(actionHandler[9]).FLUX_API;
      if (null != FLUX_API) {
        try {
          items = [];
          let iter = items[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let name = nextResult.getName();
            let result = nextResult.connectWithLibdiscore(FLUX_API);
            let tokenToStore = obj.tokenToStore;
            let result1 = tokenToStore.set(result, nextResult);
            let _HermesInternal = HermesInternal;
            let str6 = "";
            let str7 = " => [token: ";
            let str8 = ", mode: ";
            let str9 = "]";
            let arr = items.push("" + name + " => [token: " + result + ", mode: " + nextResult.getMode() + "]");
            continue;
          }
          const _HermesInternal2 = HermesInternal;
          logger.info("Connected " + length + " store(s), mapping: " + items.join(", ") + ".");
          const registeredActionTypes = FLUX_API.getRegisteredActionTypes();
          const _HermesInternal3 = HermesInternal;
          logger.info(
            "Registering " +
              registeredActionTypes.length +
              " bridged action(s): " +
              registeredActionTypes.join(", ") +
              ".",
          );
          actionHandler = function actionHandler(type) {
            let metrics;
            let storeResults;
            if (!obj.disabledFromFatalError) {
              let json;
              const _performance = performance;
              const nowResult = performance.now();
              if (null != closure_1_7[type.type]) {
                const _JSON2 = JSON;
                const obj2 = { type: type.type };
                const merged = Object.assign(tmp4(type));
                json = stringify(obj2);
              } else {
                const _JSON = JSON;
                json = JSON.stringify(type);
              }
              const _performance2 = performance;
              const obj3 = { kind: "json_stringify_action", durationMillis: performance.now() - nowResult };
              const TelemetryExperiment = obj(actionHandler[10]).TelemetryExperiment;
              const shouldCollectMetricsResult = TelemetryExperiment.shouldCollectMetrics();
              const iter = FLUX_API.dispatchAction(json, shouldCollectMetricsResult);
              if (iter.ok) {
                const _performance3 = performance;
                const diff = performance.now() - nowResult;
                ({ metrics, storeResults } = iter.value);
                const items = [];
                for (const item10056 of storeResults) {
                  if (null != item10056.error) {
                    let handleStoreErrorResult = obj.handleStoreError(item10056, type.type);
                  } else {
                    let arr = items.push(item10056);
                  }
                  continue;
                }
                function _loop(iter2) {
                  type = iter2;
                  obj.withStoreToken(iter2.storeToken, type.type, (applyChanges) => {
                    applyChanges.applyChanges(databaseChanges.databaseChanges);
                  });
                }
                const iter2 = items[Symbol.iterator]();
                while (iter2 !== undefined) {
                  let _loopResult = _loop(iter2.next());
                  continue;
                }
                for (const item10082 of items) {
                  let withStoreTokenResult = obj.withStoreToken(item10082.storeToken, type.type, (doEmitChanges) => {
                    doEmitChanges.doEmitChanges(type);
                  });
                  continue;
                }
                if (null != metrics) {
                  if (shouldCollectMetricsResult) {
                    const items1 = [obj3];
                    HermesBuiltin.arraySpread(items1, metrics.timings, 1);
                    if (_default.get("libdiscore_verbose_telemetry_logging")) {
                      let mapped = items1.map((kind) => " - " + kind.kind + ": " + kind.durationMillis + "ms");
                      const items2 = ["Timings", mapped.join("\n")];
                      const items3 = [items2, ,];
                      const mutations = metrics.mutations;
                      const mapped1 = mutations.map((recordType) => {
                        recordType = recordType.recordType;
                        const entries = Object.entries(recordType.metrics);
                        const found = entries.filter((item) => {
                          let tmp;
                          [, tmp] = item;
                          return 0 !== tmp;
                        });
                        const mapped = found.map((item) => {
                          let tmp;
                          let tmp2;
                          [tmp, tmp2] = item;
                          return " - " + tmp + ": " + tmp2;
                        });
                        return " * Record Type: " + recordType + "\n" + mapped.join("\n");
                      });
                      const items4 = ["Mutations", mapped1.join("\n")];
                      items3[1] = items4;
                      const memory = metrics.memory;
                      const mapped2 = memory.map((recordType) => {
                        recordType = recordType.recordType;
                        const entries = Object.entries(recordType.statistics);
                        const mapped = entries.map((item) => {
                          let tmp;
                          let tmp2;
                          [tmp, tmp2] = item;
                          return " - " + tmp + ": " + JSON.stringify(tmp2);
                        });
                        return " * Record Type: " + recordType + "\n" + mapped.join("\n");
                      });
                      const items5 = ["Memory Usage", mapped2.join("\n")];
                      items3[2] = items5;
                      let found = items3.filter((item) => {
                        let arr;
                        [, arr] = item;
                        return arr.length > 0;
                      });
                      const mapped3 = found.map((item) => {
                        let tmp;
                        let tmp2;
                        [tmp, tmp2] = item;
                        return "" + tmp + ":\n" + tmp2;
                      });
                      const _HermesInternal = HermesInternal;
                      logger.info("Handling action " + type.type + " took " + diff + "ms\n" + mapped3.join("\n\n"));
                    }
                    const _JSON3 = JSON;
                    const obj4 = {
                      action_type: type.type,
                      total_duration_millis: diff,
                      timings: JSON.stringify(items1),
                      mutations: JSON.stringify(metrics.mutations),
                      memory_usage: JSON.stringify(metrics.memory),
                    };
                    const track = FLUX_API(actionHandler[11]).track;
                    const LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY = constants.LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY;
                    FLUX_API(actionHandler[11]);
                    const _JSON4 = JSON;
                    const _JSON5 = JSON;
                    track(LIBDISCORE_DISPATCH_BRIDGE_TELEMETRY, obj4);
                    const TelemetryExperiment2 = obj(actionHandler[10]).TelemetryExperiment;
                    TelemetryExperiment2.didEmit();
                  }
                }
              } else {
                obj.handleFatalError(iter.error, type.type);
              }
            }
          };
          const tmp24 = FLUX_API(actionHandler[12]);
          const _Object = Object;
          const register = tmp24.register;
          const fromEntriesResult = Object.fromEntries(
            registeredActionTypes.map((item) => {
              const items = [item, actionHandler];
              return items;
            }),
          );
          register(
            "LibDiscoreDispatcherBridge",
            fromEntriesResult,
            () => {},
            obj(actionHandler[12]).DispatchBand.Database,
          );
          const _default = obj(actionHandler[13]).default;
          _default.addChangeListener(() => {
            if ("active" !== _default.getState()) {
              let tmp = globalThis;
              let _Date = Date;
              let closure_0 = Date.now();
              const result = FLUX_API.flushReplicationStates();
              if (result != null) {
                result.then((result) => {
                  const tmp = result;
                  if (tmp) {
                    const _Date = Date;
                    const _HermesInternal = HermesInternal;
                    logger.info("Successfully flushed replication states in " + Date.now() - closure_0 + "ms");
                  }
                });
              }
            }
          });
        } catch (tmp30) {
          logger.error("Failed to initialize the dispatcher bridge", tmp30);
        }
      } else {
        logger.info("Not initializing DispatcherBridge, because kvStoreApi is unavailable.");
      }
    }
    return obj;
  }
  handleFatalError(error, type) {
    const self = this;
    error = new Error(error);
    const result = this.hasAnyAuthoritativeStore();
    logger.error("Fatal dispatch error for action", type, "hasAuthoritativeStore:", result, error);
    const obj2 = SentryUtilsDefault;
    const obj3 = {
      extra: { actionType: type, hasAuthoritativeStore: result },
      tags: { source: "libdiscore", errorKind: "fatal_dispatch" },
    };
    obj2.captureException(error, obj3);
    if (result) {
      const obj4 = libdiscoreExperiments;
      const result1 = obj4.clearLibdiscoreExperimentCache();
      throw error;
    } else {
      logger.warn("Disabling DispatcherBridge until restart");
      self.disabledFromFatalError = true;
      const tokenToStore = self.tokenToStore;
      const values = tokenToStore.values();
      for (const item10040 of values) {
        let result2 = item10040.disableDualReadValidation();
        continue;
      }
    }
  }
  handleStoreError(storeToken, type) {
    const tokenToStore = this.tokenToStore;
    const value = tokenToStore.get(storeToken.storeToken);
    let name;
    if (value != null) {
      name = value.getName();
    }
    if (name == null) {
      const _HermesInternal = HermesInternal;
      name = "unknown(token:" + storeToken.storeToken + ")";
    }
    let mode;
    if (value != null) {
      mode = value.getMode();
    }
    let str3 = storeToken.error;
    const _Error = Error;
    if (str3 == null) {
      str3 = "unknown store error";
    }
    const _Error1 = new _Error(str3);
    logger.error("Store", name, "failed to handle action", type, "mode:", mode, _Error1);
    const obj = {
      extra: { actionType: type, storeName: name, storeMode: mode },
      tags: { source: "libdiscore", errorKind: "store_dispatch" },
    };
    const obj3 = SentryUtilsDefault;
    obj3.captureException(_Error1, obj);
    if ("typescript-libdiscore-dual-read" !== mode) {
      let error;
      if ("libdiscore" === mode) {
        const obj5 = libdiscoreExperiments;
        const result = obj5.clearLibdiscoreExperimentCache();
        error = _Error1;
      } else {
        const _Error2 = Error;
        const _HermesInternal3 = HermesInternal;
        const self = this;
        const self2 = this;
        error = new Error("unexpected storeMode '" + mode + "' for store " + name);
      }
      throw error;
    } else {
      const _HermesInternal2 = HermesInternal;
      logger.warn("Store: " + name + " had unexpected error in Rust implementation, disabling moving forward");
      if (value != null) {
        const result1 = value.disableDualReadValidation();
      }
    }
  }
  withStoreToken(storeToken, type, fn) {
    const tokenToStore = this.tokenToStore;
    const value = tokenToStore.get(storeToken);
    if (null == value) {
      logger.warn("When dispatching action", type, "we got a store token", storeToken, "that is unknown");
    } else {
      fn(value);
    }
  }
  hasAnyAuthoritativeStore() {
    const tokenToStore = this.tokenToStore;
    const values = tokenToStore.values();
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if ("libdiscore" === nextResult.getMode()) {
        iter.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
const prototype = DispatcherBridge.prototype;
const dispatcherBridge = new DispatcherBridge(items.filter((getMode) => set.has(getMode.getMode())));
let result = size.fileFinishedImporting("modules/libdiscore/DispatcherBridge.tsx");

export default dispatcherBridge;
