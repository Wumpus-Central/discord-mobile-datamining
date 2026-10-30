// === Module 7643: sampleWithUserId ===

// Module 7643 (sampleWithUserId)
import MurmurHashV3Default from "MurmurHashV3" /* 1252 */;
import size from "module_2" /* 2 */;

let c2 = 2147483647;
const result = size.fileFinishedImporting("modules/app_analytics/sampleWithUserId.tsx");

export function sampleWithUserId(id, arg1) {
  const v3Result = MurmurHashV3Default.v3(String(id));
  let sum = v3Result;
  if (v3Result < 0) {
    sum = v3Result + 4294967296;
  }
  return sum % c2 < arg1 * c2;
}