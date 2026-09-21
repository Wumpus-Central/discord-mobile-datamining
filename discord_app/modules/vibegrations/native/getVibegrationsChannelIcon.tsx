// discord_app/modules/vibegrations/native/getVibegrationsChannelIcon.tsx
import _modDef5244 from "../../../../_runtime/metro/05244__.js";
import vibegrationsChannelIconKind from "../lib/vibegrationsChannelIconKind.tsx";
import AppsIcon from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import AppsLockIcon from "../../../design/components/Icon/native/redesign/generated/AppsLockIcon.tsx";
import _modDef5280 from "../../../../_runtime/metro/05280__.js";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/vibegrations/native/getVibegrationsChannelIcon.tsx");

export const getVibegrationsChannelIconComponent = function getVibegrationsChannelIconComponent(
  channel,
  getChannelIconComponent,
) {
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
