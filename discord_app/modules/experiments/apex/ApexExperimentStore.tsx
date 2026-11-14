// discord_app/modules/experiments/apex/ApexExperimentStore.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import BuildOverrideUtils from "../../build_overrides/BuildOverrideUtils.tsx";
import ApexLaunchLatch from "ApexLaunchLatch.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import BaseApexExperimentStore from "../../../../discord_common/js/packages/apex/BaseApexExperimentStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
class ApexExperimentStore extends tmp2 {
  constructor() {
    closure_0 = undefined;
    tmp2 = closure_1(closure_2[4]);
    obj = {
      CONNECTION_OPEN(arg0) {
        return closure_0.handleConnectionOpen(arg0);
      },
      CONNECTION_OPEN_STATE_UPDATE(apexExperiments) {
        const result = closure_0.updateLaunchLatchUnits();
        const result1 = closure_0.setExperimentAssignments(apexExperiments.apexExperiments);
        if (null != apexExperiments.apexExperiments) {
          const result2 = closure_0.drainLaunchLatchReceipts();
        }
        return result1;
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
        const result = closure_0.updateLaunchLatchUnits();
        closure_0.handleFetchSuccess(unitId.unitId, unitId.experiments);
        if (null != unitId.experiments) {
          const result1 = closure_0.drainLaunchLatchReceipts();
        }
      },
      APEX_EXPERIMENTS_FETCH_FAILURE(unitId) {
        return closure_0.handleFetchFailure(unitId.unitId);
      },
      LOGOUT(isSwitchingAccount) {
        return closure_0.handleLogout(isSwitchingAccount.isSwitchingAccount);
      },
    };
    tmp1 = new tmp(
      tmp2,
      obj,
      closure_0(closure_2[4]).DispatchBand.Early,
      new.target,
      tmp,
      tmp2,
      obj,
      new.target,
      closure_0,
      undefined,
    );
    closure_0 = tmp1;
    registerExperimentResult = tmp1.registerExperiment(closure_0(closure_2[5]).ApexLaunchLatchFlags);
    tmp1.track = () => {
      items = [...arguments];
      const items1 = [...items];
      return AnalyticsUtilsDefault.track.apply(items1);
    };
    tmp1.surface = "discord_app";
    addChangeListenerResult = tmp1.addChangeListener(() => closure_0.maybeEmitDebugExperimentEvent());
    return tmp1;
  }
  handleLogout(arg0) {
    launchLatch = this.launchLatch;
    if (launchLatch != null) {
      flag = true;
      logoutResult = launchLatch.logout(true === global);
    }
    handleLogoutResult = super.handleLogout(global);
    return;
  }
  clearForTests() {
    clearForTestsResult = super.clearForTests();
    result = this.initializeLaunchLatch();
    return;
  }
}
const prototype = ApexExperimentStore.prototype;
prototype["initialize"] = function initialize(version) {
  this.waitFor(AuthenticationStore);
  const storedState = this.loadStoredState(version, BuildOverrideUtils.getBuildOverrideExperiments());
  const result = this.initializeLaunchLatch();
  const result1 = this.updateLaunchLatchUnits();
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
        const obj2 = {
          experiment: "2026-03-debug-experiment",
          apex_debug_variant: variantId,
          experiment_location: "apex_assignments_received",
        };
        AnalyticsUtilsDefault.track(AnalyticEvents.EXPERIMENT_APEX_DEBUGGING_EVENT, obj2);
      }
    }
  }
  self.lastEmittedDebugVariantId = undefined;
};
prototype["initializeLaunchLatch"] = function initializeLaunchLatch() {
  const apexLaunchLatchController = new ApexLaunchLatch.ApexLaunchLatchController(this, this.track);
  this.launchLatch = apexLaunchLatchController;
};
prototype["updateLaunchLatchUnits"] = function updateLaunchLatchUnits() {
  const launchLatch = this.launchLatch;
  if (launchLatch != null) {
    launchLatch.updateUnits();
  }
};
prototype["onAssignmentsIngested"] = function onAssignmentsIngested(arg0, arg1, arg2) {
  const launchLatch = this.launchLatch;
  if (launchLatch != null) {
    const result = launchLatch.onAssignmentsIngested(arg0, arg1, arg2);
  }
};
prototype["resolveConfigAssignment"] = function resolveConfigAssignment(arg0, arg1, arg2) {
  const launchLatch = this.launchLatch;
  let configAssignment;
  if (launchLatch != null) {
    configAssignment = launchLatch.resolveConfigAssignment(arg0, arg1, arg2);
  }
  return configAssignment;
};
prototype["onConfigApplied"] = function onConfigApplied(arg0, arg1, arg2) {
  const launchLatch = this.launchLatch;
  if (launchLatch != null) {
    launchLatch.onConfigApplied(arg0, arg1, arg2);
  }
};
prototype["drainLaunchLatchReceipts"] = function drainLaunchLatchReceipts(arg0) {
  const launchLatch = this.launchLatch;
  if (launchLatch != null) {
    launchLatch.drainReceipts(arg0);
  }
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(guilds) {
  const self = this;
  const result = this.updateLaunchLatchUnits();
  guilds = guilds.guilds;
  const result1 = this.setExperimentAssignments(
    guilds.apexExperiments,
    guilds.reduce((acc, experiments) => {
      if (null != experiments.experiments) {
        acc[experiments.id] = experiments.experiments;
      }
      return acc;
    }, {}),
  );
  if (null != guilds.apexExperiments) {
    const result2 = self.drainLaunchLatchReceipts();
  }
  return result1;
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
let result = size.fileFinishedImporting("modules/experiments/apex/ApexExperimentStore.tsx");

export default apexExperimentStore;
export const ExperimentAssignment = fn(1247).ExperimentAssignment;
