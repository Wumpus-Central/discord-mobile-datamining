// discord_app/modules/nuf/native/MobileOnboardingFrictionShared.tsx
import size from "../../../../_runtime/metro/00002__.js";

const obj = { EXPLAINER: "explainer", OS_ONLY: "os_only", NONE: "none" };
const obj2 = { skipContactSync: false, skipAvatar: false, notificationPrompt: obj.EXPLAINER, deferATT: false };
const obj3 = {};
const merged = Object.assign(obj2);
obj3.skipContactSync = true;
obj3.skipAvatar = true;
const result = size.fileFinishedImporting("modules/nuf/native/MobileOnboardingFrictionShared.tsx");

export const OnboardingNotificationPrompt = obj;
export const CONTROL = obj2;
export const LOW_FRICTION_V1 = obj3;
