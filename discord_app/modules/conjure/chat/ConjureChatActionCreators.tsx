// === Module 12802: ConjureChatActionCreators ===

// Module 12802 (ConjureChatActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export function setComposerDraft(CONJURE_HOME_DRAFT_KEY, message) {
  DispatcherDefault.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: CONJURE_HOME_DRAFT_KEY, draft: message });
}