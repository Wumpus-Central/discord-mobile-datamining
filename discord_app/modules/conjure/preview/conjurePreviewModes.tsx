// === Module 17079: conjurePreviewModes ===

// Module 17079 (conjurePreviewModes)
import ConjureTypes from "ConjureTypes" /* 6946 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 11416 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj = {
  frame(hasFrame) {
    return hasFrame.hasFrame;
  },
  widget(disableInteraction) {
    return disableInteraction.hasProfileWidget;
  },
  overlay(hasOverlay) {
    return true === hasOverlay.hasOverlay;
  },
  bot(hasBotDm) {
    return true === hasBotDm.hasBotDm;
  }
};
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewModes.tsx");

export const previewCapabilitiesFromSurfaces = function previewCapabilitiesFromSurfaces(previewSupportedSurfaces, arg1) {
  ({ legacy, widgetResolvable, botDmResolvable } = arg1);
  let tmp = legacy;
  if (null != previewSupportedSurfaces) {
    tmp = legacy;
    if (0 !== previewSupportedSurfaces.length) {
      obj = { hasFrame: conjurePreviewFrameSurfaces.declaresPreviewFrame(previewSupportedSurfaces), hasProfileWidget: null, hasBotDm: null };
      if (widgetResolvable) {
        widgetResolvable = previewSupportedSurfaces.includes(ConjureTypes.ConjureSupportedSurface.PROFILE_WIDGET);
      }
      obj.hasProfileWidget = widgetResolvable;
      if (botDmResolvable) {
        let hasItem = previewSupportedSurfaces.includes(ConjureTypes.ConjureSupportedSurface.BOT);
        if (!hasItem) {
          hasItem = previewSupportedSurfaces.includes(ConjureTypes.ConjureSupportedSurface.APPLICATION_COMMANDS);
        }
        botDmResolvable = hasItem;
      }
      obj.hasBotDm = botDmResolvable;
      tmp = obj;
    }
  }
  return tmp;
};
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
export const resolvePreviewMode = function resolvePreviewMode(arg0, result2) {
  let defaultMode = arg0;
  if (null == arg0) {
    defaultMode = result2.defaultMode;
  } else {
    const modes = result2.modes;
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
export function permissionReviewBlocksMode(activeMode, result) {
  let tmp = result;
  if (result) {
    tmp = "bot" === activeMode;
  }
  return tmp;
}