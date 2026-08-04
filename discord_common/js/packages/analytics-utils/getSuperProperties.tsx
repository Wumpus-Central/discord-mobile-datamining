// discord_common/js/packages/analytics-utils/getSuperProperties.tsx
import { getSystemLocale } from "getSystemLocale";

function getOS() {
  const _default = require(670) /* enforcing */.default;
  let isMetaQuestResult;
  if (_default != null) {
    isMetaQuestResult = _default.isMetaQuest();
  }
  let str = "Android";
  if (true === isMetaQuestResult) {
    str = "Horizon OS";
  }
  return str;
}
function getDevice() {
  const tmp3 = require(17) /* get ActivityIndicator */;
  if ("android" === tmp3.Platform.OS) {
    let device = require(671) /* enforcing */.default.getConstants().device;
    const _default = require(671) /* enforcing */.default;
  } else {
    device = tmp3.NativeModules.DCDDeviceManager.device;
  }
  return device;
}
function getDeviceProperties() {
  let DeviceVendorID;
  let ReleaseChannel;
  let Version;
  const obj = {};
  const tmp = getOS();
  obj.os = tmp;
  obj.browser = (function getBrowser() {
    let userAgent;
    let vendor;
    ({ userAgent, vendor } = window.navigator);
    const _default = callback(table[4]).default;
    let isMetaQuestResult;
    if (_default != null) {
      isMetaQuestResult = _default.isMetaQuest();
    }
    let str = "Discord Android";
    if (true === isMetaQuestResult) {
      str = "Discord VR";
    }
    return str;
  })();
  obj.device = getDevice();
  obj.system_locale = getSystemLocale();
  obj.has_client_mods = require(667) /* usesClientMods */.usesClientMods();
  try {
    const tmp2Result = tmp2(17);
    if ("android" === tmp2Result.Platform.OS) {
      let constants = tmp2(672).default.getConstants();
      let _default = tmp2(672).default;
    } else {
      const InfoDictionaryManager = tmp2Result.NativeModules.InfoDictionaryManager;
      constants = InfoDictionaryManager.getConstants();
    }
    let str2 = "";
    ({ Version, ReleaseChannel, DeviceVendorID } = constants);
    if ("Android" === tmp) {
      str2 = " - rn";
    }
    obj.client_version = Version + str2;
    obj.release_channel = ReleaseChannel;
    obj.device_vendor_id = DeviceVendorID;
    obj.design_id = tmp2(673).DesignIds.DESIGN_TABS_IA;
    return obj;
  } catch (err) {
  }
}
const deviceProperties = "deviceProperties";
const referralProperties = "referralProperties";
if (null != DiscordNative) {
  let app = DiscordNative.app;
  const platform = DiscordNative.process.platform;
  const app2 = DiscordNative.app;
  const version = app.getVersion();
  let str4 = app2.getReleaseChannel();
  let str3 = "Windows";
  const systemLocale = getSystemLocale();
  if ("win32" !== platform) {
    if ("darwin" === platform) {
      str3 = "Mac OS X";
    } else {
      str3 = "linux" === platform ? "Linux" : platform;
    }
  }
  let obj = { os: null, browser: "Discord Client", release_channel: null, client_version: null, os_version: null, os_arch: null, app_arch: null, system_locale: null, has_client_mods: null, client_launch_id: null };
  obj[0] = str3;
  if (!str4) {
    str4 = "unknown";
  }
  obj[2] = str4;
  obj[3] = version;
  obj[4] = DiscordNative.os.release;
  obj[5] = DiscordNative.os.arch;
  obj[6] = DiscordNative.os.appArch;
  obj[7] = systemLocale;
  const _module = require("usesClientMods");
  obj[8] = _module.usesClientMods();
  obj[9] = require("clientLaunchId").clientLaunchId;
  let closure_3 = obj;
  const name = require("format").name;
  let toLocaleLowerCaseResult;
  if (name != null) {
    toLocaleLowerCaseResult = name.toLocaleLowerCase();
  }
  if ("electron" === toLocaleLowerCaseResult) {
    closure_3.browser_user_agent = require("format").ua || "";
    let tmp3 = closure_3;
    const tmp4 = require("format").ua || "";
    const tmp5 = closure_3;
    tmp5.browser_version = require("format").version || "";
    let tmp6 = require("format").version || "";
  }
  if ("linux" === platform) {
    const crashReporter = DiscordNative.crashReporter;
    const metadata = crashReporter.getMetadata();
    closure_3.window_manager = metadata.wm;
    closure_3.distro = metadata.distro;
    closure_3.runtime_environment = metadata.runtime_environment;
    closure_3.display_server = metadata.display_server;
  } else if ("darwin" === platform) {
    let first;
    if (str10 != null) {
      first = str10.split(".")[0];
    }
    closure_3.os_sdk_version = first;
    const tmp8 = closure_3;
  } else if ("win32" === platform) {
    let tmp7;
    if (str10 != null) {
      tmp7 = str10.split(".")[2];
    }
    closure_3.os_sdk_version = tmp7;
    const tmp19 = closure_3;
  }
}
let closure_12 = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
if (null == closure_3) {
  try {
    closure_3 = (function getCachedSuperProperties() {
      const Storage = obj(595).Storage;
      let value = Storage.get(deviceProperties);
      if (null == value) {
        const tmp6 = getDeviceProperties();
        const Storage2 = tmp(595).Storage;
        const result = Storage2.set(deviceProperties, tmp6);
        value = tmp6;
      }
      const Storage3 = tmp(595).Storage;
      value = Storage3.get(referralProperties);
      if (null == value) {
        obj = {};
        const Storage4 = tmp(595).Storage;
        const result1 = Storage4.set(tmp8, obj);
        value = obj;
      }
      const SessionStorage = tmp(674).SessionStorage;
      let value1 = SessionStorage.get(tmp8);
      if (null == value1) {
        obj = {};
        obj = {};
        const _Object = Object;
        const keys = Object.keys(obj);
        const mapped = keys.map((arg0) => {
          obj["" + arg0 + "_current"] = obj[arg0];
          return obj[arg0];
        });
        const SessionStorage2 = tmp(674).SessionStorage;
        const result2 = SessionStorage2.set(tmp8, obj);
        value1 = obj;
      }
      const merged = Object.assign(value);
      const obj2 = { browser_user_agent: window.navigator.userAgent || "", browser_version: null };
      obj2[1] = obj(669).version || "";
      const tmpResult = obj(17);
      const obj3 = {};
      const merged1 = Object.assign(obj2);
      if ("android" === tmpResult.Platform.OS) {
        let str = tmp(671).default.getConstants().systemVersion;
        const _default = tmp(671).default;
      } else {
        str = tmpResult.NativeModules.DCDDeviceManager.systemVersion;
      }
      if (!str) {
        str = "";
      }
      obj3.os_version = str;
      const merged2 = Object.assign(obj3);
      const merged3 = Object.assign(value);
      const merged4 = Object.assign(value1);
      return {};
    })();
  } catch (err) {
    closure_3 = {};
  }
}
function extendSuperProperties(arg0) {
  const obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  let closure_4 = require(662) /* encodeProperties */.encodeProperties(obj);
}
let result = extendSuperProperties((function getContextualSuperProperties() {
  const obj = { client_build_number: parseInt("6119", 10) };
  let buildNumber;
  if (DiscordNative != null) {
    const app = DiscordNative.app;
    buildNumber = app.getBuildNumber();
  }
  let isNaNResult = null == buildNumber;
  if (!isNaNResult) {
    const _isNaN = isNaN;
    isNaNResult = isNaN(buildNumber);
  }
  if (!isNaNResult) {
    obj.native_build_number = buildNumber;
  }
  obj.client_event_source = null;
  obj.has_client_mods = require(667) /* usesClientMods */.usesClientMods();
  obj.client_launch_id = require(668) /* clientLaunchId */.clientLaunchId;
  return obj;
})());
let result1 = require("clientLaunchId").fileFinishedImporting("../discord_common/js/packages/analytics-utils/getSuperProperties.tsx");

export { getOS };
export { getDevice };
export const getCampaignParams = function getCampaignParams(arg0) {
  let closure_0 = arg0;
  const obj = {};
  const item = closure_12.forEach((str) => {
    str = "";
    if (null != closure_0) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const regExp = new RegExp("[\\?&]" + str.replace(/[[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)");
      const match = regExp.exec(tmp);
      let str7 = "";
      if (null !== match) {
        if (typeof match[1] === "y") {
          const _decodeURIComponent = decodeURIComponent;
          str7 = decodeURIComponent(match[1]).replace(/\+/g, " ");
          const str8 = decodeURIComponent(match[1]);
        } else {
          str7 = "";
        }
      }
      str = str7;
      const str3 = str.replace(/[[]/, "\\[");
    }
    if (str.length > 0) {
      obj[str] = str;
    }
  });
  return obj;
};
export { extendSuperProperties };
export function getSuperProperties() {
  return closure_3;
}
export function getSuperPropertiesBase64() {
  return closure_4;
}