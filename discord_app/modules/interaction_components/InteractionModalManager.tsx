// discord_app/modules/interaction_components/InteractionModalManager.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import openInteractionIframeModalDefault from "openInteractionIframeModal.native.tsx";
import closeIFrameModalDefault from "closeIFrameModal.native.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import InteractionStore from "../interactions/InteractionStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2, data, interactionDebugContext;

let obj = function _handleInteractionModalCreate() {
  let paths;
  obj = _asyncToGenerator(async (arg0) => {
    const application = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      function getInteractionModalDebugData(interactionId) {
        let applicationId;
        let components;
        let interactionType;
        let messageId;
        let tmp11;
        let tmp9;
        interactionDebugContext = interactionDebugContext.getInteractionDebugContext(interactionId.nonce);
        data = undefined;
        if (interactionDebugContext != null) {
          data = interactionDebugContext.interaction.data;
        }
        obj = {
          interactionId: interactionId.id,
          nonce: interactionId.nonce,
          channelId: interactionId.channelId,
          applicationId: interactionId.application.id,
          hasApplicationRecord: null != application.getApplication(interactionId.application.id),
          hasActionApplicationBot: null != interactionId.application.bot,
          componentCount: interactionId.components.length,
          componentTypes: components.map((type) => type.type),
          sourceInteractionType: interactionType,
          sourceApplicationId: applicationId,
          sourceMessageId: messageId,
          hasSourceCustomId: tmp9,
          hasSourceComponentId: tmp11,
        };
        components = interactionId.components;
        interactionType = undefined;
        if (data != null) {
          interactionType = data.interactionType;
        }
        applicationId = undefined;
        if (data != null) {
          applicationId = data.applicationId;
        }
        messageId = undefined;
        if (interactionDebugContext != null) {
          messageId = interactionDebugContext.messageId;
        }
        let interactionType1;
        if (data != null) {
          interactionType1 = data.interactionType;
        }
        tmp9 = undefined;
        if (interactionType1 === closure_1_0(closure_1_2[4]).InteractionTypes.MESSAGE_COMPONENT) {
          tmp9 = null != data.customId;
        }
        let interactionType2;
        if (data != null) {
          interactionType2 = data.interactionType;
        }
        tmp11 = undefined;
        if (interactionType2 === closure_1_0(closure_1_2[4]).InteractionTypes.MESSAGE_COMPONENT) {
          tmp11 = null != data.componentId;
        }
        return obj;
      }
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              data = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: require("asyncRequire")(paths[5], paths.paths), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            value.openInteractionModal(application);
            const obj6 = { type: "interaction_modal", application_id: application.application.id };
            const obj7 = closure_130_1(closure_130_2[7]);
            obj7.track(closure_130_6.OPEN_MODAL, obj6);
            const AndroidPullModeRenderingExperiment = closure_130_0(
              closure_130_2[8],
            ).AndroidPullModeRenderingExperiment;
            if (AndroidPullModeRenderingExperiment.getCurrentConfig().treatmentId >= 2) {
              data = getInteractionModalDebugData(application);
              obj = closure_130_1(closure_130_2[9]);
              let tmp11 = data;
              const obj8 = { category: "interaction_modal", message: "Interaction modal opened", data };
              obj.addBreadcrumb(obj8);
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp18) {
          c4 = 3;
          throw tmp18;
        }
      }
    })();
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const interaction_iframe_modal = "interaction_iframe_modal";
class InteractionModalManager extends AutomaticLifecycleManager {
  constructor() {
    let uiStore;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.iframeModalOpenTimeMs = undefined;
    applyArgumentsResult.actions = {
      INTERACTION_MODAL_CREATE(arg0) {
        function handleInteractionModalCreate() {
          return closure_1_8(...arguments);
        }
        !handleInteractionModalCreate(arg0);
      },
      INTERACTION_IFRAME_MODAL_CREATE(application) {
        require.iframeModalOpenTimeMs = Date.now();
        openInteractionIframeModalDefault(application);
        obj = AnalyticsUtilsDefault;
        const obj2 = { type: interaction_iframe_modal, application_id: application.application.id };
        obj.track(AnalyticEvents.OPEN_MODAL, obj2);
      },
      INTERACTION_IFRAME_MODAL_CLOSE(applicationId) {
        const iframeModalOpenTimeMs = require.iframeModalOpenTimeMs;
        let diff;
        if (null != iframeModalOpenTimeMs) {
          const _Date = Date;
          diff = Date.now() - iframeModalOpenTimeMs;
        }
        obj = AnalyticsUtilsDefault;
        const obj2 = {
          type: interaction_iframe_modal,
          application_id: applicationId.applicationId,
          duration_open_ms: diff,
        };
        obj.track(AnalyticEvents.MODAL_DISMISSED, obj2);
        require.iframeModalOpenTimeMs = undefined;
      },
      RPC_APP_DISCONNECTED(application) {
        application = application.application;
        const iFrameModalApplicationId = uiStore.getIFrameModalApplicationId();
        let tmp3 = application.id === iFrameModalApplicationId;
        const iFrameModalKey = uiStore.getIFrameModalKey();
        if (tmp3) {
          tmp3 = null != iFrameModalApplicationId;
        }
        if (tmp3) {
          closeIFrameModalDefault(iFrameModalApplicationId, iFrameModalKey);
        }
      },
    };
    return applyArgumentsResult;
  }
}
const interactionModalManager = new InteractionModalManager();
const result = size.fileFinishedImporting("modules/interaction_components/InteractionModalManager.tsx");

export default interactionModalManager;
export const INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE = "interaction_iframe_modal";
