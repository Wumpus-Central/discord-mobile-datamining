// discord_app/modules/vibegrations/lib/vibegrationsChannelIconKind.tsx
import VibegrationsUtils from "VibegrationsUtils.tsx";
import isRoleRequiredDefault from "../../channel/isRoleRequired.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
