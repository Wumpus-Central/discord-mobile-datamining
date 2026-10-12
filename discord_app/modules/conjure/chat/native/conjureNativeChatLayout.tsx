// discord_app/modules/conjure/chat/native/conjureNativeChatLayout.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConjureNativeStatusLine from "../../agent_activity/native/ConjureNativeStatusLine.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const diff = ConjureNativeStatusLine.MESSAGE_CONTENT_INSET - ConjureNativeStatusLine.MESSAGE_EDGE_INSET;
const result = size.fileFinishedImporting("modules/conjure/chat/native/conjureNativeChatLayout.tsx");

export const BLOCK_GAP = nativeDefault.space.PX_8;
export const ROW_PAD = 2;
export const GROUP_GAP = nativeDefault.space.PX_12;
export const RAIL_INDENT = diff;
