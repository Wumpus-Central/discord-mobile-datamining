// === Module 10709: ConjureUsageTypes ===

// Module 10709 (ConjureUsageTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/usage/ConjureUsageTypes.tsx");

export const runesFromUsd = function runesFromUsd(cost_usd) {
  return Math.floor(100 * cost_usd);
};
export const runeCount = function runeCount(total) {
  return total.input_tokens + total.output_tokens + total.cache_creation_input_tokens + total.cache_read_input_tokens;
};
export const promptRunes = function promptRunes(input_tokens) {
  return input_tokens.input_tokens + input_tokens.cache_creation_input_tokens + input_tokens.cache_read_input_tokens;
};
export const cacheHitRate = function cacheHitRate(sumTokenUsageResult1) {
  const sum = sumTokenUsageResult1.input_tokens + sumTokenUsageResult1.cache_creation_input_tokens + sumTokenUsageResult1.cache_read_input_tokens;
  let num = 0;
  if (0 !== sum) {
    num = sumTokenUsageResult1.cache_read_input_tokens / sum;
  }
  return num;
};
export const usageOrEmpty = function usageOrEmpty(compaction) {
  let obj = compaction;
  if (compaction == null) {
    obj = { input_tokens: 0, output_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 };
  }
  return obj;
};
export const sumTokenUsage = function sumTokenUsage(orchestrator, codegen) {
  return { input_tokens: orchestrator.input_tokens + codegen.input_tokens, output_tokens: orchestrator.output_tokens + codegen.output_tokens, cache_creation_input_tokens: orchestrator.cache_creation_input_tokens + codegen.cache_creation_input_tokens, cache_read_input_tokens: orchestrator.cache_read_input_tokens + codegen.cache_read_input_tokens };
};