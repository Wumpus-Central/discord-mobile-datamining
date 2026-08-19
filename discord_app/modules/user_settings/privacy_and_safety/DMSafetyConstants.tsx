// === Module 4068: items ===

// Module 4068 (items)
import set from "set" /* 2 */;
import create from "create" /* 1306 */;

const obj = { DISABLED: 0, [0]: "DISABLED", NON_FRIENDS: 1, [1]: "NON_FRIENDS", FRIENDS_AND_NON_FRIENDS: 2, [2]: "FRIENDS_AND_NON_FRIENDS" };
const items = [obj.DISABLED, create.DmSpamFilterV2.DISABLED];
const items1 = [items, , ];
const items2 = [obj.NON_FRIENDS, create.DmSpamFilterV2.NON_FRIENDS];
items1[1] = items2;
const items3 = [obj.FRIENDS_AND_NON_FRIENDS, create.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS];
items1[2] = items3;
const map = new Map(items1);
const result = set.fileFinishedImporting("modules/user_settings/privacy_and_safety/DMSafetyConstants.tsx");

export const DMSafetyCoachmarkActions = { VIEW: 0, [0]: "VIEW", DISMISS: 1, [1]: "DISMISS", CHANGE_SETTING: 2, [2]: "CHANGE_SETTING" };
export const DmSpamFilterTypes = { DISABLED: 0, [0]: "DISABLED", NON_FRIENDS: 1, [1]: "NON_FRIENDS", FRIENDS_AND_NON_FRIENDS: 2, [2]: "FRIENDS_AND_NON_FRIENDS" };
export const ExplicitContentFilterTypes = obj;
export const ExplicitContentFilterToDmSpamFilterV2 = map;