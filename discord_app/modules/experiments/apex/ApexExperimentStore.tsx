// === Module 1246: ApexExperimentStore ===

// Module 1246 (ApexExperimentStore)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import BaseApexExperimentStore2 from "BaseApexExperimentStore" /* 1247 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import BuildOverrideUtils from "BuildOverrideUtils" /* 1366 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const BaseApexExperimentStore = BaseApexExperimentStore2;
let _require;

const AnalyticEvents = Constants.AnalyticEvents;
class ApexExperimentStore extends BaseApexExperimentStore {
  constructor() {
    let closure_0;
    let tmp;
    _require = undefined;
    const tmp2 = DispatcherDefault;
    const obj = {
      CONNECTION_OPEN(arg0) {
        return closure_0.handleConnectionOpen(arg0);
      },
      CONNECTION_OPEN_STATE_UPDATE(apexExperiments) {
        return closure_0.setExperimentAssignments(apexExperiments.apexExperiments);
      },
      GUILD_CREATE(arg0) {
        return closure_0.handleGuildCreate(arg0);
      },
      APEX_EXPERIMENT_OVERRIDE_CREATE(experimentName) {
        return closure_0.createOverride(experimentName.experimentName, experimentName.variantId);
      },
      APEX_EXPERIMENT_OVERRIDE_DELETE(experimentName) {
        return closure_0.deleteOverride(experimentName.experimentName);
      },
      APEX_EXPERIMENT_OVERRIDE_CLEAR() {
        return closure_0.clearAllOverrides();
      },
      APEX_EXPERIMENT_SESSION_OVERRIDE_CREATE(experimentName) {
        return closure_0.createSessionOverride(experimentName.experimentName, experimentName.variantId);
      },
      APEX_EXPERIMENT_SESSION_OVERRIDE_DELETE(experimentName) {
        return closure_0.deleteSessionOverride(experimentName.experimentName);
      },
      APEX_EXPERIMENT_CLEAR_FOR_TESTS() {
        return closure_0.clearForTests();
      },
      APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS(experiments) {
        return closure_0.setExperimentsMetadata(experiments.experiments);
      },
      APEX_EXPERIMENTS_FETCH_START(unitId) {
        return closure_0.handleFetchStart(unitId.unitId);
      },
      APEX_EXPERIMENTS_FETCH_SUCCESS(unitId) {
        return closure_0.handleFetchSuccess(unitId.unitId, unitId.experiments);
      },
      APEX_EXPERIMENTS_FETCH_FAILURE(unitId) {
        return closure_0.handleFetchFailure(unitId.unitId);
      },
      LOGOUT(isSwitchingAccount) {
        return closure_0.handleLogout(isSwitchingAccount.isSwitchingAccount);
      }
    };
    const tmp3 = new tmp(tmp2, obj, require("Dispatcher").DispatchBand.Early, new.target, tmp, tmp2, obj, this);
    _require = tmp3;
    tmp3.track = () => {
      const items = [...arguments];
      const items1 = [...items];
      const tmp = AnalyticsUtilsDefault;
      return tmp.track.apply(items1);
    };
    tmp3.surface = "discord_app";
    tmp3.addChangeListener(() => closure_0.maybeEmitDebugExperimentEvent());
    return tmp3;
  }
  initialize(version) {
    this.waitFor(AuthenticationStore);
    const loadStoredState = this.loadStoredState;
    const obj = BuildOverrideUtils;
    const storedState = loadStoredState(version, obj.getBuildOverrideExperiments());
  }
  maybeEmitDebugExperimentEvent() {
    const self = this;
    const tmp = _slicedToArray(this.getEvaluationAndAssignment("user", AuthenticationStore.getId(), "2026-03-debug-experiment"), 2)[1];
    let variantId;
    if (tmp != null) {
      variantId = tmp.variantId;
    }
    if (null != variantId) {
      if (0 !== variantId) {
        if (variantId !== self.lastEmittedDebugVariantId) {
          self.lastEmittedDebugVariantId = variantId;
          const obj2 = { experiment: "2026-03-debug-experiment", apex_debug_variant: variantId, experiment_location: "apex_assignments_received" };
          const obj = AnalyticsUtilsDefault;
          obj.track(AnalyticEvents.EXPERIMENT_APEX_DEBUGGING_EVENT, obj2);
        }
      }
    }
    self.lastEmittedDebugVariantId = undefined;
  }
  handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    return this.setExperimentAssignments(guilds.apexExperiments, guilds.reduce((acc, experiments) => {
      if (null != experiments.experiments) {
        acc[experiments.id] = experiments.experiments;
      }
      return acc;
    }, {}));
  }
  handleGuildCreate(guild) {
    const experiments = guild.guild.experiments;
    if (null == experiments) {
      return true;
    } else {
      const self = this;
      const obj = {};
      obj[guild.guild.id] = experiments;
      return this.setGuildExperimentAssignments(obj);
    }
  }
}
const prototype = ApexExperimentStore.prototype;
const ExperimentAssignment = BaseApexExperimentStore2.ExperimentAssignment;
const apexExperimentStore = new ApexExperimentStore();
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperimentStore.tsx");

export default apexExperimentStore;
export { ExperimentAssignment };