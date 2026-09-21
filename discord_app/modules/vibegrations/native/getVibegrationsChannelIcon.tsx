// === Module 5272: getVibegrationsChannelIcon ===

// Module 5272 (getVibegrationsChannelIcon)
import _modDef5244 from "module_5244" /* 5244 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5273 */;
import AppsIcon from "AppsIcon" /* 5278 */;
import AppsLockIcon from "AppsLockIcon" /* 5279 */;
import _modDef5280 from "module_5280" /* 5280 */;
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
    return _modDef5244;
  } else if ("apps-lock" === result) {
    return _modDef5280;
  } else {
    return null;
  }
};