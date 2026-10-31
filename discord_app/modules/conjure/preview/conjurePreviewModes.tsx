// === Module 12082: conjurePreviewModes ===

// Module 12082 (conjurePreviewModes)
import Constants from "Constants" /* 1072 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6845 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6883 */;
import conjurePreviewFrameSurfaces from "conjurePreviewFrameSurfaces" /* 10884 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_3 = {
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
const items = [, , ];
({ GATEWAY_PRESENCE_LIMITED: arr[0], GATEWAY_GUILD_MEMBERS_LIMITED: arr[1], GATEWAY_MESSAGE_CONTENT_LIMITED: arr[2] } = Constants.ApplicationFlags);
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewModes.tsx");

export function previewCapabilitiesFromSurfaces(previewSupportedSurfaces, arg1) {
  ({ legacy, widgetResolvable, botDmResolvable } = arg1);
  let tmp = legacy;
  if (null != previewSupportedSurfaces) {
    tmp = legacy;
    if (0 !== previewSupportedSurfaces.length) {
      const obj = { hasFrame: conjurePreviewFrameSurfaces.declaresPreviewFrame(previewSupportedSurfaces), hasProfileWidget: null, hasBotDm: null };
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
  const found = prop.filter((item) => dependencyMap[item](closure_0));
  const obj = { modes: found, defaultMode: null, showModeSwitch: null, profileState: null };
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
  const obj = { hasMainCard: tmp, hasPopoutCard: miniProfile, hasAny: null };
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
export function previewNeedsAppConsent(data) {
  _require = data;
  if (null == data) {
    return false;
  } else {
    const integrationTypesConfig = data.integrationTypesConfig;
    let permissions;
    if (integrationTypesConfig != null) {
      const tmp3 = integrationTypesConfig[require("ApplicationIntegrationType").ApplicationIntegrationType.GUILD_INSTALL];
      if (tmp3 != null) {
        const oauth2InstallParams = tmp3.oauth2InstallParams;
        if (oauth2InstallParams != null) {
          permissions = oauth2InstallParams.permissions;
        }
      }
    }
    if (permissions == null) {
      const installParams = data.installParams;
      let permissions1;
      if (installParams != null) {
        permissions1 = installParams.permissions;
      }
      permissions = permissions1;
    }
    let someResult = null != permissions;
    if (someResult) {
      const deserializer = BigFlagUtilsAll;
      const obj = BigFlagUtilsAll;
      someResult = !obj.equals(deserializer.deserialize(permissions), BigFlagUtilsAll.EMPTY_FLAG);
      const deserializeResult = deserializer.deserialize(permissions);
    }
    if (!someResult) {
      someResult = items.some((item) => ApplicationFlagUtils.hasApplicationFlag(closure_0, item));
    }
    return someResult;
  }
}
export function permissionReviewBlocksMode(activeMode, result, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = tmpResult31;
  if (tmpResult31 === undefined) {
    flag2 = false;
  }
  let tmp = result;
  if (tmp) {
    let tmp2 = flag2;
    if (!tmp2) {
      let tmp4 = "bot" === activeMode;
      if (!tmp4) {
        if (flag) {
          flag = "frame" === activeMode;
        }
        tmp4 = flag;
      }
      tmp2 = tmp4;
    }
    tmp = tmp2;
  }
  return tmp;
}