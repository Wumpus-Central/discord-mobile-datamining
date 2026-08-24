// discord_app/modules/connections/shouldWarnConnectedAccountTwoWay.tsx
import ME from "../../Constants.tsx";
import set from "../../../_runtime/00002_set.js";

const items = [, , , ];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = ME.PlatformTypes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  return set.has(type.type) && type.twoWayLink;
};