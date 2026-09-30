// === Module 5564: getVibegrationsChannelIcon ===

// Module 5564 (getVibegrationsChannelIcon)
import _modDef5536 from "module_5536" /* 5536 */;
import vibegrationsChannelIconKind from "vibegrationsChannelIconKind" /* 5565 */;
import AppsIcon from "AppsIcon" /* 5570 */;
import AppsLockIcon from "AppsLockIcon" /* 5571 */;
import _modDef5572 from "module_5572" /* 5572 */;
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
    return _modDef5536;
  } else if ("apps-lock" === result) {
    return _modDef5572;
  } else {
    return null;
  }
};