// === Module 11013: conjureModelSettingsConnection ===

// Module 11013 (conjureModelSettingsConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10998 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/conjureModelSettingsConnection.tsx");

export const modelSettingsFrameHandlers = {
  model_settings(settings, projectId) {
    const obj2 = { type: "CONJURE_MODEL_SETTINGS_SET", projectId: projectId.projectId, settings: settings.settings, tierSettings: null, tiers: null, choices: null };
    let tier_settings = settings.tier_settings;
    if (tier_settings == null) {
      tier_settings = null;
    }
    obj2.tierSettings = tier_settings;
    let tiers = settings.tiers;
    if (tiers == null) {
      tiers = null;
    }
    obj2.tiers = tiers;
    obj2.choices = settings.choices;
    DispatcherDefault.dispatch(obj2);
  }
};
export const sendModelSettings = function sendModelSettings(projectId, arg1) {
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  try {
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      conjureSocket.sendModelSettings(arg1);
    }
  } catch (err) {
  }
};