// === Module 14321: set ===

// Module 14321 (set)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const items = [, , , ];
({ XBOX: arr[0], PLAYSTATION: arr[1], PLAYSTATION_STAGING: arr[2], CRUNCHYROLL: arr[3] } = ME.PlatformTypes);
const set = new Set(items);
const result = obj132.fileFinishedImporting("modules/connections/shouldWarnConnectedAccountTwoWay.tsx");

export default function shouldWarnConnectedAccountTwoWay(type) {
  return set.has(type.type) && type.twoWayLink;
};