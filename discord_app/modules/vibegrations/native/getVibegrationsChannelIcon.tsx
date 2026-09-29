// === Module 5534: getVibegrationsChannelIcon ===

// Module 5534 (getVibegrationsChannelIcon)
import _modDef5506 from "module_5506" /* 5506 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5535 */;
import AppsIcon from "AppsIcon" /* 5540 */;
import AppsLockIcon from "AppsLockIcon" /* 5541 */;
import _modDef5542 from "module_5542" /* 5542 */;
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
    return _modDef5506;
  } else if ("apps-lock" === result) {
    return _modDef5542;
  } else {
    return null;
  }
};