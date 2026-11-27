// === Module 20070: IntegrationSettingsActionCreators ===

// Module 20070 (IntegrationSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const size = fn(2);
const result = size.fileFinishedImporting("actions/IntegrationSettingsActionCreators.tsx");

export default {
  init() {
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_INIT" });
  },
  setSection(section) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = null;
    }
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_SET_SECTION", section, sectionId: tmp });
  },
  startEditingCommandPermissions(commandId) {
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND", commandId });
  },
  stopEditingCommandPermissions(commandId) {
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND", commandId });
  },
  startEditingIntegration(integrationId) {
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION", integrationId });
  },
  stopEditingIntegration() {
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION" });
  },
  updateIntegration(settings) {
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION", settings });
  },
  startEditingWebhook(webhookId) {
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK", webhookId });
  },
  stopEditingWebhook() {
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK" });
  },
  updateWebhook(settings) {
    DispatcherDefault.dispatch({ type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK", settings });
  },
  saveApplicationPermissions(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async () => {
      closure_0(tmp20[1]).dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" });
      closure_0(tmp20[1]);
      await tmp3(tmp20[2]).saveApplicationPermissions(closure_0, tmp3, tmp20);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = tmp20;
        closure_0(tmp20[1]).dispatch({ type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: closure_128_0.body });
        c5 = 3;
        closure_0(tmp20[1]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_0(tmp20[1]).dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
        c3 = 0;
        closure_0(tmp20[1]);
      }
      return value;
    })();
  },
  saveIntegration(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      closure_0(tmp20[1]).dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" });
      await closure_0(tmp20[3]).updateIntegration(closure_0, tmp3.id, tmp3.expire_behavior, tmp3.expire_grace_period, tmp3.enable_emoticons);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = tmp20;
        closure_0(tmp20[1]).dispatch({ type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: closure_128_0.body });
        c5 = 3;
        closure_0(tmp20[1]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_0(tmp20[1]).dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
        c3 = 0;
        closure_0(tmp20[1]);
      }
      return value;
    })();
  },
  saveWebhook(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      closure_0(tmp20[1]).dispatch({ type: "INTEGRATION_SETTINGS_SUBMITTING" });
      closure_0(tmp20[1]);
      await closure_0(tmp20[4]).update(closure_0, tmp3.id, tmp3);
      if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = tmp20;
        closure_0(tmp20[1]).dispatch({ type: "INTEGRATION_SETTINGS_SAVE_FAILURE", errors: closure_128_0.body });
        c5 = 3;
        closure_0(tmp20[1]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_0(tmp20[1]).dispatch({ type: "INTEGRATION_SETTINGS_SAVE_SUCCESS" });
        c3 = 0;
        closure_0(tmp20[1]);
      }
      return value;
    })();
  }
};