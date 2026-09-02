// === Module 14051: _defaultMessages ===

// Module 14051 (_defaultMessages)
import set from "set" /* 2 */;
import messagesProxyDefault from "messagesProxy" /* 14052 */;
import module_1273 from "module_1273" /* 1273 */;
import importDefaultResult from "messagesProxy" /* 1237 */;

const chainMessagesObjectsResult = module_1273.chainMessagesObjects(importDefaultResult, messagesProxyDefault);
const result = set.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;