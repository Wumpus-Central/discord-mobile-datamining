// discord_app/modules/vibegrations/VibegrationsTypes.tsx
import set from "../../../_runtime/00002_set.js";

const frozen = Object.freeze({ PUBLIC: 1, SHAREABLE: 2 });
let set = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
let c2 = 5242880;
let c3 = 52428800;
const items = [
  { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
  { id: "claude-opus-5", label: "Claude Opus 5", provider: "anthropic" },
  { id: "claude-sonnet-5", label: "Claude Sonnet 5", provider: "anthropic" },
  { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", provider: "anthropic" },
  { id: "gpt-5.6-sol", label: "GPT-5.6 Sol", provider: "openai" },
  { id: "gpt-5.6-terra", label: "GPT-5.6 Terra", provider: "openai" },
  { id: "gpt-5.6-luna", label: "GPT-5.6 Luna", provider: "openai" },
];
let obj = { main: items, subagent: items, thinking: ["low", "medium", "high", "xhigh", "max"] };
const items1 = [
  { id: "workers-ai/@cf/moonshotai/kimi-k2.6", label: "Kimi K2.6", provider: "workers-ai" },
  { id: "workers-ai/@cf/zai-org/glm-5.2", label: "GLM 5.2", provider: "workers-ai" },
  { id: "workers-ai/@cf/nvidia/nemotron-3-120b-a12b", label: "Nemotron 3 Super 120B", provider: "workers-ai" },
  { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
  { id: "xai/grok-4.6", label: "Grok 4.6", provider: "xai" },
  { id: "workers-ai/@cf/zai-org/glm-4.7-flash", label: "GLM 4.7 Flash", provider: "workers-ai" },
];
obj = { main: items1, subagent: items1, thinking: obj.thinking };
const result = set.fileFinishedImporting("modules/vibegrations/VibegrationsTypes.tsx");

export const UNNAMED_PROJECT_NAME = "Untitled App";
export const MAX_PROJECT_COLLABORATOR_ROLES = 25;
export const VibegrationsProjectFlags = frozen;
export const isProjectPublic = function isProjectPublic(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return num & frozen.PUBLIC;
};
export const isProjectShared = function isProjectShared(flags) {
  let num = flags.flags;
  if (num == null) {
    num = 0;
  }
  return num & frozen.SHAREABLE;
};
export const projectSupportsVisibility = function projectSupportsVisibility(stateFromStores) {
  return null != stateFromStores.flags;
};
export const projectSupportsCollaboratorRoles = function projectSupportsCollaboratorRoles(stateFromStores) {
  return null != stateFromStores.collaborator_role_ids;
};
export const runesFromUsd = function runesFromUsd(cost_usd) {
  return Math.floor(100 * cost_usd);
};
export const runeCount = function runeCount(input_tokens) {
  return (
    input_tokens.input_tokens +
    input_tokens.output_tokens +
    input_tokens.cache_creation_input_tokens +
    input_tokens.cache_read_input_tokens
  );
};
export const promptRunes = function promptRunes(input_tokens) {
  return input_tokens.input_tokens + input_tokens.cache_creation_input_tokens + input_tokens.cache_read_input_tokens;
};
export const cacheHitRate = function cacheHitRate(input_tokens) {
  const sum =
    input_tokens.input_tokens + input_tokens.cache_creation_input_tokens + input_tokens.cache_read_input_tokens;
  let num = 0;
  if (0 !== sum) {
    num = input_tokens.cache_read_input_tokens / sum;
  }
  return num;
};
export const usageOrEmpty = function usageOrEmpty(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
  }
  return obj;
};
export const sumTokenUsage = function sumTokenUsage(input_tokens, input_tokens2) {
  return {
    input_tokens: input_tokens.input_tokens + input_tokens2.input_tokens,
    output_tokens: input_tokens.output_tokens + input_tokens2.output_tokens,
    cache_creation_input_tokens: input_tokens.cache_creation_input_tokens + input_tokens2.cache_creation_input_tokens,
    cache_read_input_tokens: input_tokens.cache_read_input_tokens + input_tokens2.cache_read_input_tokens,
  };
};
export const VIBEGRATIONS_VIEWABLE_IMAGE_TYPES = set;
export const VIBEGRATIONS_MAX_IMAGE_ATTACHMENT_BYTES = 5242880;
export const VIBEGRATIONS_MAX_ATTACHMENT_BYTES = 52428800;
export const VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = 10;
export const vibegrationsAttachmentLimit = function vibegrationsAttachmentLimit(contentType) {
  return set.has(contentType) ? c2 : c3;
};
export const isVibegrationsAttachmentWithinLimit = function isVibegrationsAttachmentWithinLimit(size, closure_2) {
  return size <= (set.has(closure_2) ? c2 : c3);
};
export const formatVibegrationsAttachmentLimit = function formatVibegrationsAttachmentLimit(arg0) {
  return "" + Math.round(arg0 / 1048576) + " MB";
};
export const VIBEGRATIONS_FALLBACK_MODEL_CHOICES = obj;
export const VIBEGRATIONS_DEV_FALLBACK_MODEL_CHOICES = obj;
