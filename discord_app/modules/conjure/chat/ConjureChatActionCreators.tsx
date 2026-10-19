// === Module 12347: ConjureChatActionCreators ===

// Module 12347 (ConjureChatActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export const setComposerDraft = function setComposerDraft(projectId, draft) {
  DispatcherDefault.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft });
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width });
};