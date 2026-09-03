// === Module 6151: ObscureReason ===

// Module 6151 (ObscureReason)
import set from "set" /* 2 */;

const obj = { SPOILER: "spoiler", EXPLICIT_CONTENT: "explicit_content", POTENTIAL_EXPLICIT_CONTENT: "potential_explicit_content", GORE_CONTENT: "gore_content", SELF_HARM_CONTENT: "self_harm_content" };
const items = [, , , ];
({ EXPLICIT_CONTENT: arr[0], GORE_CONTENT: arr[1], SELF_HARM_CONTENT: arr[2], POTENTIAL_EXPLICIT_CONTENT: arr[3] } = obj);
let set = new Set(items);
const items1 = [, , ];
({ EXPLICIT_CONTENT: arr2[0], GORE_CONTENT: arr2[1], SELF_HARM_CONTENT: arr2[2] } = obj);
const result = set.fileFinishedImporting("modules/explicit_media_redaction/ObscureMediaModels.tsx");

export const ObscureReason = obj;
export const SENSITIVE_CONTENT_OBSCURABLE_REASONS = set;
export const AGE_VERIFICATION_OBSCURABLE_REASONS = new Set(items1);