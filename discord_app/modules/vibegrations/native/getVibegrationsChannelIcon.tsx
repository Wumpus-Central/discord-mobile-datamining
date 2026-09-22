// === Module 5274: getVibegrationsChannelIcon ===

// Module 5274 (getVibegrationsChannelIcon)
import _modDef5246 from "module_5246" /* 5246 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5275 */;
import AppsIcon from "AppsIcon" /* 5280 */;
import AppsLockIcon from "AppsLockIcon" /* 5281 */;
import _modDef5282 from "module_5282" /* 5282 */;
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
    return _modDef5246;
  } else if ("apps-lock" === result) {
    return _modDef5282;
  } else {
    return null;
  }
};