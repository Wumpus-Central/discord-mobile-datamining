// discord_app/modules/conjure/preview_add_bot_prompt/ConjurePreviewAddBotPromptStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

const map = new Map();
const Store = initializeDefault.Store;
class PreviewAddBotPromptStore extends Store {}
PreviewAddBotPromptStore.prototype["getPrompt"] = function getPrompt(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
const previewAddBotPromptStore = new PreviewAddBotPromptStore(DispatcherDefault, {
  CONJURE_PREVIEW_ADD_BOT_PROMPT_SET(arg0) {
    ({ projectId, prompt: _prompt } = arg0);
    value = map.get(projectId);
    let id;
    if (value != null) {
      id = value.id;
    }
    if (id == null) {
      id = null;
    }
    let id1;
    if (_prompt != null) {
      id1 = _prompt.id;
    }
    if (id1 == null) {
      id1 = null;
    }
    let flag = id !== id1;
    if (flag) {
      if (null == _prompt) {
        map.delete(projectId);
        flag = true;
      } else {
        const result = map.set(projectId, _prompt);
        flag = true;
      }
    }
    return flag;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview_add_bot_prompt/ConjurePreviewAddBotPromptStore.tsx");

export default previewAddBotPromptStore;
