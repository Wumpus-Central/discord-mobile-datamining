// discord_app/modules/interaction_components/InteractionModalManager.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import openInteractionIframeModalDefault from "openInteractionIframeModal.native.tsx";
import closeIFrameModalDefault from "closeIFrameModal.native.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../applications/ApplicationStore.tsx";
import InteractionStore from "../interactions/InteractionStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
let closure_8 = async function _handleInteractionModalCreate(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp3;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c3 = 1;
          c4 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[5], paths.paths), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        value.openInteractionModal(closure_129_0);
        const obj3 = { type: "interaction_modal", application_id: closure_129_0.application.id };
        closure_130_1(closure_130_2[7]).track(closure_130_6.OPEN_MODAL, obj3);
        const AndroidPullModeRenderingExperiment = closure_130_0(closure_130_2[8]).AndroidPullModeRenderingExperiment;
        if (AndroidPullModeRenderingExperiment.getCurrentConfig().treatmentId >= 2) {
          closure_129_1 = (function getInteractionModalDebugData(interactionId) {
            interactionDebugContext = interactionDebugContext.getInteractionDebugContext(interactionId.nonce);
            let data;
            if (interactionDebugContext != null) {
              data = interactionDebugContext.interaction.data;
            }
            const obj = {
              interactionId: interactionId.id,
              nonce: interactionId.nonce,
              channelId: interactionId.channelId,
              applicationId: interactionId.application.id,
              hasApplicationRecord: null != application.getApplication(interactionId.application.id),
              hasActionApplicationBot: null != interactionId.application.bot,
              componentCount: interactionId.components.length,
              componentTypes: null,
              sourceInteractionType: null,
              sourceApplicationId: null,
              sourceMessageId: null,
              hasSourceCustomId: null,
              hasSourceComponentId: null,
            };
            const components = interactionId.components;
            obj.componentTypes = components.map((type) => type.type);
            let interactionType;
            if (data != null) {
              interactionType = data.interactionType;
            }
            obj.sourceInteractionType = interactionType;
            let applicationId;
            if (data != null) {
              applicationId = data.applicationId;
            }
            obj.sourceApplicationId = applicationId;
            let messageId;
            if (interactionDebugContext != null) {
              messageId = interactionDebugContext.messageId;
            }
            obj.sourceMessageId = messageId;
            let interactionType1;
            if (data != null) {
              interactionType1 = data.interactionType;
            }
            let tmp9;
            if (interactionType1 === closure_1_0(dependencyMap[4]).InteractionTypes.MESSAGE_COMPONENT) {
              tmp9 = null != data.customId;
            }
            obj.hasSourceCustomId = tmp9;
            let interactionType2;
            if (data != null) {
              interactionType2 = data.interactionType;
            }
            let tmp11;
            if (interactionType2 === closure_1_0(dependencyMap[4]).InteractionTypes.MESSAGE_COMPONENT) {
              tmp11 = null != data.componentId;
            }
            obj.hasSourceComponentId = tmp11;
            return obj;
          })(closure_129_0);
          obj = closure_130_1(closure_130_2[9]);
          const obj4 = { category: "interaction_modal", message: "Interaction modal opened", data: closure_129_1 };
          obj.addBreadcrumb(obj4);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp19) {
      c4 = tmp;
      throw tmp19;
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const interaction_iframe_modal = "interaction_iframe_modal";
let prototype = function InteractionModalManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.iframeModalOpenTimeMs = undefined;
  applyArgumentsResult.actions = {
    INTERACTION_MODAL_CREATE(arg0) {
      !(function handleInteractionModalCreate() {
        const self = this;
        const apply = closure_1_8.apply;
        if (typeof apply === "unknown") {
          applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(arg0);
    },
    INTERACTION_IFRAME_MODAL_CREATE(application) {
      applyArgumentsResult.iframeModalOpenTimeMs = Date.now();
      openInteractionIframeModalDefault(application);
      const obj = { type: interaction_iframe_modal, application_id: application.application.id };
      obj.track(AnalyticEvents.OPEN_MODAL, obj);
    },
    INTERACTION_IFRAME_MODAL_CLOSE(applicationId) {
      const iframeModalOpenTimeMs = applyArgumentsResult.iframeModalOpenTimeMs;
      let diff;
      if (null != iframeModalOpenTimeMs) {
        const _Date = Date;
        diff = Date.now() - iframeModalOpenTimeMs;
      }
      const obj = {
        type: interaction_iframe_modal,
        application_id: applicationId.applicationId,
        duration_open_ms: diff,
      };
      obj.track(AnalyticEvents.MODAL_DISMISSED, obj);
      applyArgumentsResult.iframeModalOpenTimeMs = undefined;
    },
    RPC_APP_DISCONNECTED(application) {
      const iFrameModalApplicationId = uiStore.getIFrameModalApplicationId();
      let tmp3 = application.application.id === iFrameModalApplicationId;
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
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/InteractionModalManager.tsx");

export default prototype;
export const INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE = "interaction_iframe_modal";
