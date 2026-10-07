// discord_app/modules/user_settings/privacy_and_safety/DMSafetyConstants.tsx
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  DISABLED: 0,
  [0]: "DISABLED",
  NON_FRIENDS: 1,
  [1]: "NON_FRIENDS",
  FRIENDS_AND_NON_FRIENDS: 2,
  [2]: "FRIENDS_AND_NON_FRIENDS",
};
const items = [obj.DISABLED, preloaded_user_settings.DmSpamFilterV2.DISABLED];
const items1 = [items, ,];
const items2 = [obj.NON_FRIENDS, preloaded_user_settings.DmSpamFilterV2.NON_FRIENDS];
items1[1] = items2;
const items3 = [obj.FRIENDS_AND_NON_FRIENDS, preloaded_user_settings.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS];
items1[2] = items3;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/DMSafetyConstants.tsx");

export const DMSafetyCoachmarkActions = {
  VIEW: 0,
  [0]: "VIEW",
  DISMISS: 1,
  [1]: "DISMISS",
  CHANGE_SETTING: 2,
  [2]: "CHANGE_SETTING",
};
export const DmSpamFilterTypes = {
  DISABLED: 0,
  [0]: "DISABLED",
  NON_FRIENDS: 1,
  [1]: "NON_FRIENDS",
  FRIENDS_AND_NON_FRIENDS: 2,
  [2]: "FRIENDS_AND_NON_FRIENDS",
};
export const ExplicitContentFilterTypes = obj;
export const ExplicitContentFilterToDmSpamFilterV2 = new Map(items1);
