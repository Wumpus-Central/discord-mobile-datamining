// === Module 1212: initialize ===

// Module 1212 (initialize)
import _slicedToArray from "_slicedToArray";
import "_toPropertyKey";
import fetchFingerprint from "fetchFingerprint";
import { AnalyticEvents } from "ME";

const require = arg1;
class ApexExperimentStore extends tmp2 {
  constructor() {
    DispatchBand = undefined;
    tmp2 = require("dispatcher");
    obj = {
      CONNECTION_OPEN(arg0) {
            return obj.handleConnectionOpen(arg0);
          },
      CONNECTION_OPEN_STATE_UPDATE(apexExperiments) {
            return obj.setExperimentAssignments(apexExperiments.apexExperiments);
          },
      GUILD_CREATE(arg0) {
            return obj.handleGuildCreate(arg0);
          },
      APEX_EXPERIMENT_OVERRIDE_CREATE(arg0) {
            return obj.createOverride(tmp.experimentName, tmp.variantId);
          },
      APEX_EXPERIMENT_OVERRIDE_DELETE(experimentName) {
            return obj.deleteOverride(experimentName.experimentName);
          },
      APEX_EXPERIMENT_OVERRIDE_CLEAR() {
            return obj.clearAllOverrides();
          },
      APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE(arg0) {
            return obj.createSessionOverride(tmp.experimentName, tmp.variantId);
          },
      APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE(experimentName) {
            return obj.deleteSessionOverride(experimentName.experimentName);
          },
      APEX_EXPERIMENT_CLEAR_FOR_TESTS() {
            return obj.clearForTests();
          },
      APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS(experiments) {
            return obj.setExperimentsMetadata(experiments.experiments);
          },
      APEX_EXPERIMENTS_FETCH_START(unitId) {
            return obj.handleFetchStart(unitId.unitId);
          },
      APEX_EXPERIMENTS_FETCH_SUCCESS(arg0) {
            return obj.handleFetchSuccess(tmp.unitId, tmp.experiments);
          },
      APEX_EXPERIMENTS_FETCH_FAILURE(unitId) {
            return obj.handleFetchFailure(unitId.unitId);
          },
      LOGOUT(isSwitchingAccount) {
            return obj.handleLogout(isSwitchingAccount.isSwitchingAccount);
          }
    };
    tmp = new tmp(tmp2, obj, require("dispatcher").DispatchBand.Early, new.target, tmp, tmp2, obj, new.target);
    // ThrowIfThisInitialized (0x7c)
    DispatchBand = tmp;
    tmp.track = () => {
      const items = [...arguments];
      const items1 = [...items];
      return callback(table[5]).track.apply(items1);
    };
    tmp.surface = "discord_app";
    addChangeListenerResult = tmp.addChangeListener(() => obj.maybeEmitDebugExperimentEvent());
    return tmp;
  }
}
const prototype = ApexExperimentStore.prototype;
prototype["initialize"] = function initialize(version) {
  this.waitFor(fetchFingerprint);
  const storedState = this.loadStoredState(version, require(4171) /* Version */.getBuildOverrideExperiments());
};
prototype["maybeEmitDebugExperimentEvent"] = function maybeEmitDebugExperimentEvent() {
  const self = this;
  const tmp = callback(this.getEvaluationAndAssignment("user", id.getId(), "2026-03-debug-experiment"), 2)[1];
  let variantId;
  if (tmp != null) {
    variantId = tmp.variantId;
  }
  if (null != variantId) {
    if (0 !== variantId) {
      if (variantId !== self.lastEmittedDebugVariantId) {
        self.lastEmittedDebugVariantId = variantId;
        let obj = importDefault(698);
        obj = { experiment: "2026-03-debug-experiment", apex_debug_variant: null, experiment_location: "apex_assignments_received" };
        obj[1] = variantId;
        obj.track(AnalyticEvents.EXPERIMENT_APEX_DEBUGGING_EVENT, obj);
      }
    }
  }
  self.lastEmittedDebugVariantId = undefined;
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(guilds) {
  guilds = guilds.guilds;
  return this.setExperimentAssignments(guilds.apexExperiments, guilds.reduce((arg0, experiments) => {
    if (null != experiments.experiments) {
      arg0[experiments.id] = experiments.experiments;
    }
    return arg0;
  }, {}));
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  const experiments = guild.guild.experiments;
  if (null == experiments) {
    return true;
  } else {
    const self = this;
    const obj = {};
    obj[guild.guild.id] = experiments;
    return this.setGuildExperimentAssignments(obj);
  }
};
const apexExperimentStore = new ApexExperimentStore();
const result = require("fetchFingerprint").fileFinishedImporting("modules/experiments/apex/ApexExperimentStore.tsx");

export default apexExperimentStore;
export const ExperimentAssignment = require("_toPropertyKey").ExperimentAssignment;