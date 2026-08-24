// === Module 5062: sampleWithUserId ===

// Module 5062 (sampleWithUserId)
import set from "set" /* 2 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1217 */;

let c2 = 2147483647;
const result = set.fileFinishedImporting("modules/app_analytics/sampleWithUserId.tsx");

export const sampleWithUserId = function sampleWithUserId(id, arg1) {
  const v3Result = MurmurHashV3Default.v3(String(id));
  let sum = v3Result;
  if (v3Result < 0) {
    sum = v3Result + 4294967296;
  }
  return sum % c2 < arg1 * c2;
};