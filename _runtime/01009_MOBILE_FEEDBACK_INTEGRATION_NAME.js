// _runtime/01009_MOBILE_FEEDBACK_INTEGRATION_NAME.js
import _mod693 from "metro/00693__.js";

let hasOwnProperty;

const fn =
  (this && this.__rest) ||
  ((obj, arr) => {
    obj = {};
    for (const key10007 in obj) {
      let _Object2 = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let callResult = hasOwnProperty.call(obj, key10007) && arr.indexOf(key10007) < 0;
      if (!callResult) {
        continue;
      } else {
        obj[key10007] = obj[key10007];
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object3 = Object;
      if (typeof Object.getOwnPropertySymbols === "function") {
        let num;
        const _Object4 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
          let callResult1 = arr.indexOf(ownPropertySymbols[num]) < 0;
          if (callResult1) {
            let _Object = Object;
            callResult1 = propertyIsEnumerable.call(obj, ownPropertySymbols[num]);
          }
          if (callResult1) {
            obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
          }
        }
      }
    }
    return obj;
  });
const MobileFeedback = "MobileFeedback";
function _getClientIntegration() {}

export const MOBILE_FEEDBACK_INTEGRATION_NAME = "MobileFeedback";
export const feedbackIntegration = () => {
  let buttonOptions;
  let colorScheme;
  let screenshotButtonOptions;
  let themeDark;
  let themeLight;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ buttonOptions, screenshotButtonOptions, colorScheme, themeLight, themeDark } = obj);
  const obj2 = {
    name: MobileFeedback,
    options: fn(obj, ["buttonOptions", "screenshotButtonOptions", "colorScheme", "themeLight", "themeDark"]),
    buttonOptions,
    screenshotButtonOptions,
    colorScheme,
    themeLight,
    themeDark,
  };
  if (!buttonOptions) {
    buttonOptions = {};
  }
  if (!screenshotButtonOptions) {
    screenshotButtonOptions = {};
  }
  if (!colorScheme) {
    colorScheme = "system";
  }
  if (!themeLight) {
    themeLight = {};
  }
  if (!themeDark) {
    themeDark = {};
  }
  return obj2;
};
export const getFeedbackOptions = () => {
  if (typeof _getClientIntegration === "function") {
    const obj = _mod693;
    const client = obj.getClient();
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
    const obj = _mod693;
    const client = obj.getClient();
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
    const obj = _mod693;
    const client = obj.getClient();
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
    const obj = _mod693;
    const client = obj.getClient();
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
    const obj = _mod693;
    const client = obj.getClient();
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
    const obj = _mod693;
    const client = obj.getClient();
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
