// === Module 9035: PinotDiscoverable ===

// Module 9035 (PinotDiscoverable)
import util from "util" /* 1113 */;
import _modDef3160 from "module_3160" /* 3160 */;
import PinotConstants from "PinotConstants" /* 9036 */;
import size from "module_2" /* 2 */;

const PinotDiscoverableOption = { ALL_CONTENT: "all_content", SUMMARIES: "summaries", MESSAGES: "messages", NONE: "none" };
({ SWP_CHANNEL_SUMMARIES_EXCLUDED, SWP_CHANNEL_MESSAGES_EXCLUDED } = PinotConstants.PinotChannelFlags);
let closure_1 = tmp2;
const dependencyMap = { [PinotDiscoverableOption.ALL_CONTENT]: 0, [PinotDiscoverableOption.SUMMARIES]: SWP_CHANNEL_MESSAGES_EXCLUDED, [PinotDiscoverableOption.MESSAGES]: SWP_CHANNEL_SUMMARIES_EXCLUDED, [PinotDiscoverableOption.NONE]: tmp2 };
({ ALL_CONTENT, SUMMARIES, MESSAGES, NONE } = PinotDiscoverableOption);
const result = size.fileFinishedImporting("modules/pinot/PinotDiscoverable.tsx");

export { PinotDiscoverableOption };
export const PINOT_DISCOVERABLE_OPTION_LABELS = { [ALL_CONTENT]: _modDef3160.QsbbMS, [SUMMARIES]: util.t.q21fUr, [MESSAGES]: util.t.OIgYlQ, [NONE]: util.t.PoWNfe };
export function getPinotDiscoverableFlags(arg0, serverFlags) {
  if (arg0 === obj.NONE) {
    let tmp3 = dependencyMap[arg0];
  } else {
    tmp3 = dependencyMap[arg0] & ~serverFlags;
  }
  return tmp3;
}
export function getPinotCloneChannelFlags(flags) {
  let num;
  if (flags != null) {
    num = flags.flags;
  }
  if (num == null) {
    num = 0;
  }
  return num & closure_1;
}