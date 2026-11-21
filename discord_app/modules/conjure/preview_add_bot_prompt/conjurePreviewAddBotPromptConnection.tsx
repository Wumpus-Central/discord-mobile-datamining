// discord_app/modules/conjure/preview_add_bot_prompt/conjurePreviewAddBotPromptConnection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import conjureProjectSockets from "../connection/conjureProjectSockets.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/conjure/preview_add_bot_prompt/conjurePreviewAddBotPromptConnection.tsx",
);

export function conjurePreviewBotAdded(arg0) {
  const integrationStatus = ConjureProjectStore.getIntegrationStatus(arg0);
  let prop;
  if (integrationStatus != null) {
    prop = integrationStatus.integration_installed;
  }
  return true === prop && true !== integrationStatus.bot_permissions_changed;
}
export const previewAddBotPromptFrameHandlers = {
  preview_add_bot_prompt(prompt, projectId) {
    projectId = projectId.projectId;
    if (null != prompt.prompt) {
      const integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
      let prop;
      if (integrationStatus != null) {
        prop = integrationStatus.integration_installed;
      }
      if (tmp4) {
        const id = prompt.prompt.id;
        const added = "added";
        if (
          obj3.sendOnConjureSocket(projectId, "preview bot answer", (sendPreviewBotAnswer) =>
            sendPreviewBotAnswer.sendPreviewBotAnswer(id, added),
          )
        ) {
          const obj2 = { type: "CONJURE_PREVIEW_ADD_BOT_PROMPT_SET", projectId, prompt: null };
          DispatcherDefault.dispatch(obj2);
        }
        obj3 = conjureProjectSockets;
      }
      tmp4 = true === prop && true !== integrationStatus.bot_permissions_changed;
    }
    DispatcherDefault.dispatch({ type: "CONJURE_PREVIEW_ADD_BOT_PROMPT_SET", projectId, prompt: prompt.prompt });
    const obj5 = { type: "CONJURE_PREVIEW_ADD_BOT_PROMPT_SET", projectId, prompt: prompt.prompt };
  },
};
export function answerConjurePreviewAddBotPrompt(projectId, id, added) {
  closure_0 = id;
  closure_1 = added;
  if (
    obj.sendOnConjureSocket(projectId, "preview bot answer", (sendPreviewBotAnswer) =>
      sendPreviewBotAnswer.sendPreviewBotAnswer(id, added),
    )
  ) {
    const obj3 = { type: "CONJURE_PREVIEW_ADD_BOT_PROMPT_SET", projectId, prompt: null };
    DispatcherDefault.dispatch(obj3);
  }
  obj = conjureProjectSockets;
}
