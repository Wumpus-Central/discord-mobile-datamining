// discord_app/modules/connections/shouldWarnConnectedAccountTwoWay.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [, , ,];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = Constants.PlatformTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  return set.has(type.type) && type.twoWayLink;
}
