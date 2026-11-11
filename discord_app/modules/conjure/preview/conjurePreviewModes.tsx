// === Module 13046: conjurePreviewModes ===

// Module 13046 (conjurePreviewModes)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6955 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 7276 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj = {
  frame(hasFrame) {
    return hasFrame.hasFrame;
  },
  widget(dependencyMap) {
    return dependencyMap.hasProfileWidget;
  },
  overlay(hasOverlay) {
    return true === hasOverlay.hasOverlay;
  },
  bot(hasBotDm) {
    return true === hasBotDm.hasBotDm;
  }
};
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewModes.tsx");

export function previewCapabilitiesFromSurfaces(previewSupportedSurfaces, arg1) {
  ({ legacy, widgetResolvable, botDmResolvable } = arg1);
  let tmp = legacy;
  if (null != previewSupportedSurfaces) {
    tmp = legacy;
    if (0 !== previewSupportedSurfaces.length) {
      obj = { hasFrame: conjurePreviewFrameSurfaces.declaresPreviewFrame(previewSupportedSurfaces), hasProfileWidget: null, hasBotDm: null };
      if (widgetResolvable) {
        widgetResolvable = previewSupportedSurfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET);
      }
      obj.hasProfileWidget = widgetResolvable;
      if (botDmResolvable) {
        let hasItem = previewSupportedSurfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.BOT);
        if (!hasItem) {
          hasItem = previewSupportedSurfaces.includes(ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS);
        }
        botDmResolvable = hasItem;
      }
      obj.hasBotDm = botDmResolvable;
      tmp = obj;
    }
  }
  return tmp;
}
export function previewModeAvailability(installScope) {
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
}
export function profileWidgetState(installScope) {
  let str = "available";
  if ("user" === installScope.installScope) {
    str = "available";
    if (true === tmp) {
      str = "unavailable-authorization-revoked";
    }
  }
  return str;
}
export function resolvePreviewMode(mode, result2) {
  let defaultMode = mode;
  if (null == mode) {
    defaultMode = result2.defaultMode;
  } else {
    const modes = result2.modes;
  }
  return defaultMode;
}
export function showsFramePreview(modes, arg1) {
  let hasItem = "frame" === arg1;
  if (hasItem) {
    modes = modes.modes;
    hasItem = modes.includes("frame");
  }
  if (!hasItem) {
    hasItem = 0 === modes.modes.length;
  }
  return hasItem;
}
export function profileSurfaceAvailability(widgetTop) {
  let tmp = widgetTop.widgetTop && widgetTop.widgetBottom;
  const miniProfile = widgetTop.miniProfile;
  obj = { hasMainCard: tmp, hasPopoutCard: miniProfile, hasAny: null };
  if (!tmp) {
    tmp = miniProfile;
  }
  obj.hasAny = tmp;
  return obj;
}
export function requiresPermissionReview(arg0) {
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
}
export function previewBotInstallBlocksMode(activeMode, arg1) {
  let tmp = "bot" === activeMode;
  if (tmp) {
    obj = {};
    const merged = Object.assign(arg1);
    obj.botPermissionsChanged = false;
    ({ previewReady, integrationInstalled } = obj);
    let tmp5 = !previewReady;
    ({ installScope, botPermissionsChanged } = obj);
    if (previewReady) {
      tmp5 = null == integrationInstalled;
    }
    let tmp7 = !tmp5;
    if (!tmp5) {
      let tmp8 = botPermissionsChanged;
      if (!tmp8) {
        tmp8 = "user" !== installScope && !integrationInstalled;
        const tmp9 = "user" !== installScope && !integrationInstalled;
      }
      tmp7 = tmp8;
    }
    tmp = tmp7;
  }
  return tmp;
}