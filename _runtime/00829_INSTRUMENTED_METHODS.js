// _runtime/00829_INSTRUMENTED_METHODS.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = [
  "response.output_item.added",
  "response.function_call_arguments.delta",
  "response.function_call_arguments.done",
  "response.output_item.done",
];
const items1 = [
  "response.created",
  "response.in_progress",
  "response.failed",
  "response.completed",
  "response.incomplete",
  "response.queued",
  "response.output_text.delta",
];
HermesBuiltin.arraySpread(items, 7);

export const INSTRUMENTED_METHODS = [
  "responses.create",
  "chat.completions.create",
  "embeddings.create",
  "conversations.create",
];
export const OPENAI_INTEGRATION_NAME = "OpenAI";
export const RESPONSES_TOOL_CALL_EVENT_TYPES = items;
export const RESPONSE_EVENT_TYPES = items1;
