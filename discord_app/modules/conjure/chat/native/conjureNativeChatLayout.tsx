// === Module 11814: conjureNativeChatLayout ===

// Module 11814 (conjureNativeChatLayout)
import nativeDefault from "native" /* 587 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 11810 */;
import size from "module_2" /* 2 */;

const diff = ConjureNativeStatusLine.MESSAGE_CONTENT_INSET - ConjureNativeStatusLine.MESSAGE_EDGE_INSET;
const result = size.fileFinishedImporting("modules/conjure/chat/native/conjureNativeChatLayout.tsx");

export const BLOCK_GAP = nativeDefault.space.PX_8;
export const ROW_PAD = 2;
export const GROUP_GAP = nativeDefault.space.PX_12;
export const RAIL_INDENT = diff;