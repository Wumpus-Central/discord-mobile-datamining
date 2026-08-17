// _runtime/01133__getClientIntegration.js
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

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
      let tmp6 = key10007;
      let _Object2 = Object;
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
          typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols[num]) : call(obj, ownPropertySymbols[num]);
        }
      }
    }
    return obj;
  };
}
const MobileFeedback = "MobileFeedback";
function _getClientIntegration() {

}
arg5.MOBILE_FEEDBACK_INTEGRATION_NAME = "MobileFeedback";
arg5.feedbackIntegration = (D) => {
  let obj = D;
  if (D === undefined) {
    obj = {};
  }
  ({ buttonOptions, screenshotButtonOptions, colorScheme, themeLight, themeDark } = obj);
  obj = { name: MobileFeedback, options: fn(obj, ["buttonOptions", "screenshotButtonOptions", "colorScheme", "themeLight", "themeDark"]), buttonOptions: null, screenshotButtonOptions: null, colorScheme: null, themeLight: null, themeDark: null };
  if (!buttonOptions) {
    buttonOptions = {};
  }
  obj[2] = buttonOptions;
  if (!screenshotButtonOptions) {
    screenshotButtonOptions = {};
  }
  obj[3] = screenshotButtonOptions;
  if (!colorScheme) {
    colorScheme = "system";
  }
  obj[4] = colorScheme;
  if (!themeLight) {
    themeLight = {};
  }
  obj[5] = themeLight;
  if (!themeDark) {
    themeDark = {};
  }
  obj[6] = themeDark;
  return obj;
};
arg5.getFeedbackOptions = () => {
  if (typeof _getClientIntegration !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const client = registerSpanErrorInstrumentation.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(MobileFeedback);
    }
  }
  return integrationByName ? integrationByName.options : {};
};
arg5.getFeedbackButtonOptions = () => {
  if (typeof _getClientIntegration !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const client = registerSpanErrorInstrumentation.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(MobileFeedback);
    }
  }
  return integrationByName ? integrationByName.buttonOptions : {};
};
arg5.getScreenshotButtonOptions = () => {
  if (typeof _getClientIntegration !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const client = registerSpanErrorInstrumentation.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(MobileFeedback);
    }
  }
  return integrationByName ? integrationByName.screenshotButtonOptions : {};
};
arg5.getColorScheme = () => {
  if (typeof _getClientIntegration !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const client = registerSpanErrorInstrumentation.getClient();
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
};
arg5.getFeedbackLightTheme = () => {
  if (typeof _getClientIntegration !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const client = registerSpanErrorInstrumentation.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(MobileFeedback);
    }
  }
  return integrationByName ? integrationByName.themeLight : {};
};
arg5.getFeedbackDarkTheme = () => {
  if (typeof _getClientIntegration !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const client = registerSpanErrorInstrumentation.getClient();
  let integrationByName;
  if (null !== client) {
    if (undefined !== client) {
      integrationByName = client.getIntegrationByName(MobileFeedback);
    }
  }
  return integrationByName ? integrationByName.themeDark : {};
};