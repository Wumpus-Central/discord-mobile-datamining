// _runtime/00998__getClientIntegration.js
import _mod682 from "metro/00682__.js";

require = arg1;
const dependencyMap = arg6;
let fn = this;
if (this) {
  fn = this.__rest;
}
if (!fn) {
  fn = (obj, arr) => {
    obj = {};
    for (const key10007 in arg0) {
      let _Object2 = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call2 = hasOwnProperty.call;
      if (typeof call2 === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10007);
      } else {
        hasOwnPropertyResult = call2(arg0, key10007);
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = arg1.indexOf(key10007) < 0;
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        obj[key10007] = arg0[key10007];
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object3 = Object;
      if (typeof Object.getOwnPropertySymbols === "function") {
        const _Object4 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        let num = 0;
        if (0 < ownPropertySymbols.length) {
          const tmp2 = arr.indexOf(ownPropertySymbols[num]) < 0;
          while (!tmp2) {
            if (tmp2) {
              obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
            }
            num = num + 1;
          }
          const _Object = Object;
          const call = propertyIsEnumerable.call;
          typeof call === "unknown"
            ? propertyIsEnumerable(ownPropertySymbols[num])
            : call(obj, ownPropertySymbols[num]);
        }
      }
    }
    return obj;
  };
}
const MobileFeedback = "MobileFeedback";
function _getClientIntegration() {}

export const MOBILE_FEEDBACK_INTEGRATION_NAME = "MobileFeedback";
export const feedbackIntegration = () => {
  let obj = D;
  if (D === undefined) {
    obj = {};
  }
  ({ buttonOptions, screenshotButtonOptions, colorScheme, themeLight, themeDark } = obj);
  obj = {
    name: MobileFeedback,
    options: fn(obj, ["buttonOptions", "screenshotButtonOptions", "colorScheme", "themeLight", "themeDark"]),
    buttonOptions: null,
    screenshotButtonOptions: null,
    colorScheme: null,
    themeLight: null,
    themeDark: null,
  };
  if (!buttonOptions) {
    buttonOptions = {};
  }
  obj.buttonOptions = buttonOptions;
  if (!screenshotButtonOptions) {
    screenshotButtonOptions = {};
  }
  obj.screenshotButtonOptions = screenshotButtonOptions;
  if (!colorScheme) {
    colorScheme = "system";
  }
  obj.colorScheme = colorScheme;
  if (!themeLight) {
    themeLight = {};
  }
  obj.themeLight = themeLight;
  if (!themeDark) {
    themeDark = {};
  }
  obj.themeDark = themeDark;
  return obj;
};
export const getFeedbackOptions = () => {
  if (typeof _getClientIntegration === "function") {
    const client = _mod682.getClient();
    let integrationByName;
    if (null !== client) {
      if (undefined !== client) {
        integrationByName = client.getIntegrationByName(MobileFeedback);
      }
    }
    return integrationByName ? integrationByName.options : {};
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const getFeedbackButtonOptions = () => {
  if (typeof _getClientIntegration === "function") {
    const client = _mod682.getClient();
    let integrationByName;
    if (null !== client) {
      if (undefined !== client) {
        integrationByName = client.getIntegrationByName(MobileFeedback);
      }
    }
    return integrationByName ? integrationByName.buttonOptions : {};
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const getScreenshotButtonOptions = () => {
  if (typeof _getClientIntegration === "function") {
    const client = _mod682.getClient();
    let integrationByName;
    if (null !== client) {
      if (undefined !== client) {
        integrationByName = client.getIntegrationByName(MobileFeedback);
      }
    }
    return integrationByName ? integrationByName.screenshotButtonOptions : {};
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const getColorScheme = () => {
  if (typeof _getClientIntegration === "function") {
    const client = _mod682.getClient();
    let integrationByName;
    if (null !== client) {
      if (undefined !== client) {
        integrationByName = client.getIntegrationByName(MobileFeedback);
      }
    }
    let colorScheme;
    if (null != integrationByName) {
      colorScheme = integrationByName.colorScheme;
    }
    let str = "system";
    if (colorScheme) {
      str = integrationByName.colorScheme;
    }
    return str;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const getFeedbackLightTheme = () => {
  if (typeof _getClientIntegration === "function") {
    const client = _mod682.getClient();
    let integrationByName;
    if (null !== client) {
      if (undefined !== client) {
        integrationByName = client.getIntegrationByName(MobileFeedback);
      }
    }
    return integrationByName ? integrationByName.themeLight : {};
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const getFeedbackDarkTheme = () => {
  if (typeof _getClientIntegration === "function") {
    const client = _mod682.getClient();
    let integrationByName;
    if (null !== client) {
      if (undefined !== client) {
        integrationByName = client.getIntegrationByName(MobileFeedback);
      }
    }
    return integrationByName ? integrationByName.themeDark : {};
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
