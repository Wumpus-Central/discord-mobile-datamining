// discord_app/modules/pinot/PinotDiscoverable.tsx
import util from "../../intl/index.native.tsx";
import _modDef3160 from "Pinot.messages.js";
import PinotConstants from "PinotConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PinotDiscoverableOption = {
  ALL_CONTENT: "all_content",
  SUMMARIES: "summaries",
  MESSAGES: "messages",
  NONE: "none",
};
({ SWP_CHANNEL_SUMMARIES_EXCLUDED, SWP_CHANNEL_MESSAGES_EXCLUDED } = PinotConstants.PinotChannelFlags);
let closure_1 = tmp2;
const dependencyMap = {
  [PinotDiscoverableOption.ALL_CONTENT]: 0,
  [PinotDiscoverableOption.SUMMARIES]: SWP_CHANNEL_MESSAGES_EXCLUDED,
  [PinotDiscoverableOption.MESSAGES]: SWP_CHANNEL_SUMMARIES_EXCLUDED,
  [PinotDiscoverableOption.NONE]: tmp2,
};
({ ALL_CONTENT, SUMMARIES, MESSAGES, NONE } = PinotDiscoverableOption);
const result = size.fileFinishedImporting("modules/pinot/PinotDiscoverable.tsx");

export { PinotDiscoverableOption };
export const PINOT_DISCOVERABLE_OPTION_LABELS = {
  [ALL_CONTENT]: _modDef3160.QsbbMS,
  [SUMMARIES]: util.t.q21fUr,
  [MESSAGES]: util.t.OIgYlQ,
  [NONE]: util.t.PoWNfe,
};
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
