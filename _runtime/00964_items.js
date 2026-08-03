Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = ["response.output_item.added", "response.function_call_arguments.delta", "response.function_call_arguments.done", "response.output_item.done"];
const items1 = ["response.created", "response.in_progress", "response.failed", "response.completed", "response.incomplete", "response.queued", "response.output_text.delta"];
HermesBuiltin.arraySpread(items, 7);
arg5.INSTRUMENTED_METHODS = ["responses.create", "chat.completions.create", "embeddings.create", "conversations.create"];
arg5.OPENAI_INTEGRATION_NAME = "OpenAI";
arg5.RESPONSES_TOOL_CALL_EVENT_TYPES = items;
arg5.RESPONSE_EVENT_TYPES = items1;