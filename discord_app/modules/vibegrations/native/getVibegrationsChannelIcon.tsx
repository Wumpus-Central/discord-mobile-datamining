// === Module 5552: getVibegrationsChannelIcon ===

// Module 5552 (getVibegrationsChannelIcon)
import _modDef5524 from "module_5524" /* 5524 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5553 */;
import AppsIcon from "AppsIcon" /* 5558 */;
import AppsLockIcon from "AppsLockIcon" /* 5559 */;
import _modDef5560 from "module_5560" /* 5560 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(channel, getChannelIconComponent) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIconComponent);
  if ("apps" === result) {
    return AppsIcon.AppsIcon;
  } else if ("apps-lock" === result) {
    return AppsLockIcon.AppsLockIcon;
  } else {
    return null;
  }
};
export const getVibegrationsChannelIconSource = function getVibegrationsChannelIconSource(channel, getChannelIcon) {
  const result = vibegrationsChannelIconKind.vibegrationsChannelIconKind(channel, getChannelIcon);
  if ("apps" === result) {
    return _modDef5524;
  } else if ("apps-lock" === result) {
    return _modDef5560;
  } else {
    return null;
  }
};