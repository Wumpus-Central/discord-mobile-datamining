// === Module 9054: PinotTypes ===

// Module 9054 (PinotTypes)
import size from "module_2" /* 2 */;

const obj = { CHANNEL_SUMMARIES: "channel_summaries", CHANNEL_MESSAGES: "channel_messages" };
const keys = Object.keys({ [obj.CHANNEL_SUMMARIES]: true, [obj.CHANNEL_MESSAGES]: true });
const result = size.fileFinishedImporting("modules/pinot/PinotTypes.tsx");

export const PinotFeatureKey = obj;
export const PINOT_FEATURE_KEYS = keys;