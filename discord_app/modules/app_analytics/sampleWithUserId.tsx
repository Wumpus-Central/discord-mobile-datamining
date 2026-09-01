// discord_app/modules/app_analytics/sampleWithUserId.tsx
import set from "../../../_runtime/00002_set.js";
import MurmurHashV3Default from "../../../_runtime/01217_MurmurHashV3.js";

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
