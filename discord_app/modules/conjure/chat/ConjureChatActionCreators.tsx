// discord_app/modules/conjure/chat/ConjureChatActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export const setComposerDraft = function setComposerDraft(projectId, message) {
  DispatcherDefault.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft: message });
};
