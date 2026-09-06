// discord_app/modules/experiments/apex/ApexExperimentStore.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import BuildOverrideUtils from "../../build_overrides/BuildOverrideUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import BaseApexExperimentStore from "../../../../discord_common/js/packages/apex/BaseApexExperimentStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
class ApexExperimentStore extends tmp2 {
  constructor() {
    closure_0 = undefined;
    tmp2 = closure_1(closure_2[4]);
    obj = {
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
      },
    };
    tmp = new tmp(tmp2, obj, closure_0(closure_2[4]).DispatchBand.Early, new.target, tmp, tmp2, obj, new.target);
    closure_0 = tmp;
    tmp.track = () => {
      const items = [...arguments];
      const items1 = [...items];
      return AnalyticsUtilsDefault.track.apply(items1);
    };
    tmp.surface = "discord_app";
    addChangeListenerResult = tmp.addChangeListener(() => closure_0.maybeEmitDebugExperimentEvent());
    return tmp;
  }
}
const prototype = ApexExperimentStore.prototype;
prototype["initialize"] = function initialize(version) {
  this.waitFor(AuthenticationStore);
  const storedState = this.loadStoredState(version, BuildOverrideUtils.getBuildOverrideExperiments());
};
prototype["maybeEmitDebugExperimentEvent"] = function maybeEmitDebugExperimentEvent() {
  const self = this;
  const tmp = _slicedToArray(
    this.getEvaluationAndAssignment("user", AuthenticationStore.getId(), "2026-03-debug-experiment"),
    2,
  )[1];
  let variantId;
  if (tmp != null) {
    variantId = tmp.variantId;
  }
  if (null != variantId) {
    if (0 !== variantId) {
      if (variantId !== self.lastEmittedDebugVariantId) {
        self.lastEmittedDebugVariantId = variantId;
        const obj = {
          experiment: "2026-03-debug-experiment",
          apex_debug_variant: variantId,
          experiment_location: "apex_assignments_received",
        };
        obj.track(AnalyticEvents.EXPERIMENT_APEX_DEBUGGING_EVENT, obj);
      }
    }
  }
  self.lastEmittedDebugVariantId = undefined;
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(guilds) {
  guilds = guilds.guilds;
  return this.setExperimentAssignments(
    guilds.apexExperiments,
    guilds.reduce((acc, experiments) => {
      if (null != experiments.experiments) {
        acc[experiments.id] = experiments.experiments;
      }
      return acc;
    }, {}),
  );
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperimentStore.tsx");

export default apexExperimentStore;
export const ExperimentAssignment = fn(1237).ExperimentAssignment;
