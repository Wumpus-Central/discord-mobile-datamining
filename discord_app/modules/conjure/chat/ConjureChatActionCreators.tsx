// === Module 11753: ConjureChatActionCreators ===

// Module 11753 (ConjureChatActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export const setComposerDraft = function setComposerDraft(projectId, message) {
  DispatcherDefault.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft: message });
};