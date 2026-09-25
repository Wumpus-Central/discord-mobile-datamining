// === Module 5362: vibegrationsChannelIconKind ===

// Module 5362 (vibegrationsChannelIconKind)
import VibegrationsUtils from "VibegrationsUtils" /* 5363 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5366 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsChannelIconKind.tsx");

export const vibegrationsChannelIconKind = function vibegrationsChannelIconKind(channel, getChannelIconComponent) {
  let tmp = null;
  if (null != channel) {
    tmp = null;
    if (obj.isVibegrationsChannelCandidate(channel, getChannelIconComponent)) {
      let str = "apps";
      if (isRoleRequiredDefault(channel)) {
        str = "apps-lock";
      }
      tmp = str;
    }
    obj = VibegrationsUtils;
  }
  return tmp;
};