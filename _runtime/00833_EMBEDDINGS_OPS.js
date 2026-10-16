// _runtime/00833_EMBEDDINGS_OPS.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const map = new Map();
const set = new Set([
  "ai.generateText",
  "ai.streamText",
  "ai.generateObject",
  "ai.streamObject",
  "ai.embed",
  "ai.embedMany",
]);
const set1 = new Set([
  "ai.generateText.doGenerate",
  "ai.streamText.doStream",
  "ai.generateObject.doGenerate",
  "ai.streamObject.doStream",
]);

export const EMBEDDINGS_OPS = new Set(["ai.embed.doEmbed", "ai.embedMany.doEmbed"]);
export const GENERATE_CONTENT_OPS = set1;
export const INVOKE_AGENT_OPS = set;
export const toolCallSpanMap = map;
