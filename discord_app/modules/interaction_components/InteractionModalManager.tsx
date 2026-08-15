// discord_app/modules/interaction_components/InteractionModalManager.tsx
import onClose from "onClose";
import addApplication from "addApplication";
import deleteNonce from "deleteNonce";
import { AnalyticEvents } from "ME";
import "initialize";

let require = arg1;
function _handleInteractionModalCreate() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0, openInteractionModal) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw openInteractionModal;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = openInteractionModal;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw openInteractionModal;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = openInteractionModal;
              return obj;
            } else {
              const dependencyMap = tmp2;
              let callback = tmp3;
              callback = undefined;
              c3 = 1;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = lib(outer1_2[6])(outer1_2[5], outer1_2.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw openInteractionModal;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = openInteractionModal;
            return obj2;
          } else {
            openInteractionModal.openInteractionModal(lib);
            const obj3 = { type: "interaction_modal", application_id: null };
            obj3[1] = lib.application.id;
            callback(698).track(constants.OPEN_MODAL, obj3);
            const AndroidPullModeRenderingExperiment = lib(1914).AndroidPullModeRenderingExperiment;
            if (AndroidPullModeRenderingExperiment.getCurrentConfig().treatmentId >= 2) {
              callback = (function getInteractionModalDebugData(closure_0) {
                interactionDebugContext = interactionDebugContext.getInteractionDebugContext(closure_0.nonce);
                let data;
                if (interactionDebugContext != null) {
                  data = interactionDebugContext.interaction.data;
                }
                const obj = { interactionId: closure_0.id, nonce: closure_0.nonce, channelId: closure_0.channelId, applicationId: closure_0.application.id, hasApplicationRecord: null != application.getApplication(closure_0.application.id), hasActionApplicationBot: null != closure_0.application.bot, componentCount: closure_0.components.length, componentTypes: components.map((type) => type.type), sourceInteractionType: null, sourceApplicationId: null, sourceMessageId: null, hasSourceCustomId: null, hasSourceComponentId: null };
                components = closure_0.components;
                let interactionType;
                if (data != null) {
                  interactionType = data.interactionType;
                }
                obj[8] = interactionType;
                let applicationId;
                if (data != null) {
                  applicationId = data.applicationId;
                }
                obj[9] = applicationId;
                let messageId;
                if (interactionDebugContext != null) {
                  messageId = interactionDebugContext.messageId;
                }
                obj[10] = messageId;
                let interactionType1;
                if (data != null) {
                  interactionType1 = data.interactionType;
                }
                let tmp9;
                if (interactionType1 === callback(tmp2[4]).InteractionTypes.MESSAGE_COMPONENT) {
                  tmp9 = null != data.customId;
                }
                obj[11] = tmp9;
                let interactionType2;
                if (data != null) {
                  interactionType2 = data.interactionType;
                }
                let tmp11;
                if (interactionType2 === callback(tmp2[4]).InteractionTypes.MESSAGE_COMPONENT) {
                  tmp11 = null != data.componentId;
                }
                obj[12] = tmp11;
                return obj;
              })(lib);
              obj = callback(1208);
              const obj4 = { category: "interaction_modal", message: "Interaction modal opened", data: null };
              obj4[2] = callback;
              obj.addBreadcrumb(obj4);
            }
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp19) {
          c4 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  const _handleInteractionModalCreate = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const interaction_iframe_modal = "interaction_iframe_modal";
let prototype = function InteractionModalManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult.iframeModalOpenTimeMs = undefined;
  applyArgumentsResult.actions = {
    INTERACTION_MODAL_CREATE(arg0) {
      !(function handleInteractionModalCreate(arg0) {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(arg0);
    },
    INTERACTION_IFRAME_MODAL_CREATE(application) {
      closure_0.iframeModalOpenTimeMs = Date.now();
      outer1_1(outer1_2[10])(application);
      let obj = outer1_1(outer1_2[7]);
      obj = { type: outer1_7, application_id: application.application.id };
      obj.track(outer1_6.OPEN_MODAL, obj);
    },
    INTERACTION_IFRAME_MODAL_CLOSE(applicationId) {
      const iframeModalOpenTimeMs = applyArgumentsResult.iframeModalOpenTimeMs;
      let diff;
      if (null != iframeModalOpenTimeMs) {
        const _Date = Date;
        diff = Date.now() - iframeModalOpenTimeMs;
      }
      let obj = outer1_1(outer1_2[7]);
      obj = { type: outer1_7, application_id: applicationId.applicationId, duration_open_ms: diff };
      obj.track(outer1_6.MODAL_DISMISSED, obj);
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
        callback(table[11])(iFrameModalApplicationId, iFrameModalKey);
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("deleteNonce").fileFinishedImporting("modules/interaction_components/InteractionModalManager.tsx");

export default prototype;
export const INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE = "interaction_iframe_modal";