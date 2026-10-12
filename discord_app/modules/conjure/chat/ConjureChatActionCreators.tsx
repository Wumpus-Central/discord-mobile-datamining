// discord_app/modules/conjure/chat/ConjureChatActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureChatActionCreators.tsx");

export const setComposerDraft = function setComposerDraft(projectId, draft) {
  DispatcherDefault.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId, draft });
};
export const setChatSidebarWidth = function setChatSidebarWidth(width) {
  DispatcherDefault.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width });
};
