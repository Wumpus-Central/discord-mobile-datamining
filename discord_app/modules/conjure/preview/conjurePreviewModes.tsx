// discord_app/modules/conjure/preview/conjurePreviewModes.tsx
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let obj = {
  frame(hasFrame) {
    return hasFrame.hasFrame;
  },
  widget(disableInteraction) {
    return disableInteraction.hasProfileWidget;
  },
  bot(hasBotDm) {
    return true === hasBotDm.hasBotDm;
  },
};
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewModes.tsx");

export const previewModeAvailability = function previewModeAvailability(installScope) {
  _require = installScope;
  const prop = require("ConjurePreviewMode").CONJURE_PREVIEW_MODE_ORDER;
  const found = prop.filter((item) => obj[item](closure_0));
  obj = { modes: found, defaultMode: null, showModeSwitch: null, profileState: null };
  let first = found[0];
  if (first == null) {
    first = null;
  }
  obj.defaultMode = first;
  obj.showModeSwitch = found.length > 1;
  let str = "available";
  if ("user" === installScope.installScope) {
    str = "available";
    if (true === tmp2) {
      str = "unavailable-authorization-revoked";
    }
  }
  obj.profileState = str;
  return obj;
};
export const profileWidgetState = function profileWidgetState(installScope) {
  let str = "available";
  if ("user" === installScope.installScope) {
    str = "available";
    if (true === tmp) {
      str = "unavailable-authorization-revoked";
    }
  }
  return str;
};
export const resolvePreviewMode = function resolvePreviewMode(arg0, result1) {
  let defaultMode = arg0;
  if (null == arg0) {
    defaultMode = result1.defaultMode;
  } else {
    const modes = result1.modes;
  }
  return defaultMode;
};
export const showsFramePreview = function showsFramePreview(modes, arg1) {
  let hasItem = "frame" === arg1;
  if (hasItem) {
    modes = modes.modes;
    hasItem = modes.includes("frame");
  }
  if (!hasItem) {
    hasItem = 0 === modes.modes.length;
  }
  return hasItem;
};
export const profileSurfaceAvailability = function profileSurfaceAvailability(widgetTop) {
  let tmp = widgetTop.widgetTop && widgetTop.widgetBottom;
  const miniProfile = widgetTop.miniProfile;
  obj = { hasMainCard: tmp, hasPopoutCard: miniProfile, hasAny: null };
  if (!tmp) {
    tmp = miniProfile;
  }
  obj.hasAny = tmp;
  return obj;
};
export const requiresPermissionReview = function requiresPermissionReview(arg0) {
  ({ previewReady, integrationInstalled } = arg0);
  let tmp = !previewReady;
  ({ installScope, botPermissionsChanged } = arg0);
  if (previewReady) {
    tmp = null == integrationInstalled;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    let tmp4 = botPermissionsChanged;
    if (!tmp4) {
      tmp4 = "user" !== installScope && !integrationInstalled;
      const tmp5 = "user" !== installScope && !integrationInstalled;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
