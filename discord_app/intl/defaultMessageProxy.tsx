// discord_app/intl/defaultMessageProxy.tsx
import set from "../../_runtime/00002_set.js";
import messagesProxyDefault from "messages/untranslated.messages.js";
import 01155__ from "../../_runtime/metro/01155__.js";
import importDefaultResult from "messages/en-US.messages.js";

const chainMessagesObjectsResult = module_1155.chainMessagesObjects(importDefaultResult, messagesProxyDefault);
const result = set.fileFinishedImporting("intl/defaultMessageProxy.tsx");

export const _defaultMessages = chainMessagesObjectsResult;