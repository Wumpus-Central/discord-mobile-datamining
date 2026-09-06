// discord_common/js/packages/analytics-utils/getSuperProperties.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import Storage5 from "../storage/Storage.tsx";
import encodeProperties from "encodeProperties.tsx";
import getSystemLocale2 from "../i18n/getSystemLocale.tsx";
import ClientModDetectionUtils from "../../shared/utils/ClientModDetectionUtils.tsx";
import clientLaunchId from "clientLaunchId.tsx";
import formatDefault from "../../../../_runtime/01341_format.js";
import NativeMetaQuestModule from "../rtn-codegen/js/NativeMetaQuestModule.tsx";
import NativeDeviceModule from "../rtn-codegen/js/NativeDeviceModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getOS() {
  const _default = NativeMetaQuestModule.default;
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
  const tmp3 = _mod17;
  if ("android" === tmp3.Platform.OS) {
    let device = NativeDeviceModule.default.getConstants().device;
    const _default = NativeDeviceModule.default;
  } else {
    device = tmp3.NativeModules.DCDDeviceManager.device;
  }
  return device;
}
function getDeviceProperties() {
  obj = {};
  const tmp = getOS();
  obj.os = tmp;
  obj.browser = (function getBrowser() {
    ({ userAgent, vendor } = window.navigator);
    const _default = NativeMetaQuestModule.default;
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
  obj.has_client_mods = ClientModDetectionUtils.usesClientMods();
  try {
    const tmp2Result = tmp2(17);
    if ("android" === tmp2Result.Platform.OS) {
      constants = tmp2(1344).default.getConstants();
      let _default = tmp2(1344).default;
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
    obj.design_id = tmp2(1345).DesignIds.DESIGN_TABS_IA;
    return obj;
  } catch (err) {}
}
const getSystemLocale = getSystemLocale2.getSystemLocale;
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
  let obj = {
    os: str3,
    browser: "Discord Client",
    release_channel: null,
    client_version: null,
    os_version: null,
    os_arch: null,
    app_arch: null,
    system_locale: null,
    has_client_mods: null,
    client_launch_id: null,
  };
  if (!str4) {
    str4 = "unknown";
  }
  obj.release_channel = str4;
  obj.client_version = version;
  obj.os_version = DiscordNative.os.release;
  obj.os_arch = DiscordNative.os.arch;
  obj.app_arch = DiscordNative.os.appArch;
  obj.system_locale = systemLocale;
  const _module = ClientModDetectionUtils;
  obj.has_client_mods = _module.usesClientMods();
  obj.client_launch_id = clientLaunchId.clientLaunchId;
  const name = formatDefault.name;
  let toLocaleLowerCaseResult;
  if (name != null) {
    toLocaleLowerCaseResult = name.toLocaleLowerCase();
  }
  if ("electron" === toLocaleLowerCaseResult) {
    obj.browser_user_agent = formatDefault.ua || "";
    const tmp4 = formatDefault.ua || "";
    const tmp5 = obj;
    tmp5.browser_version = formatDefault.version || "";
    let tmp6 = formatDefault.version || "";
  }
  if ("linux" === platform) {
    const crashReporter = DiscordNative.crashReporter;
    const metadata = crashReporter.getMetadata();
    obj.window_manager = metadata.wm;
    obj.distro = metadata.distro;
    obj.runtime_environment = metadata.runtime_environment;
    obj.display_server = metadata.display_server;
  } else if ("darwin" === platform) {
    let first;
    if (str10 != null) {
      first = str10.split(".")[0];
    }
    obj.os_sdk_version = first;
  } else if ("win32" === platform) {
    let tmp7;
    if (str10 != null) {
      tmp7 = str10.split(".")[2];
    }
    obj.os_sdk_version = tmp7;
  }
}
let closure_12 = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
if (null == obj) {
  try {
    obj = (function getCachedSuperProperties() {
      const Storage = Storage5.Storage;
      value = Storage.get(deviceProperties);
      if (null == value) {
        const tmp6 = getDeviceProperties();
        const Storage2 = tmp(510).Storage;
        const result = Storage2.set(deviceProperties, tmp6);
        value = tmp6;
      }
      const Storage3 = tmp(510).Storage;
      value = Storage3.get(referralProperties);
      if (null == value) {
        obj = {};
        const Storage4 = tmp(510).Storage;
        const result1 = Storage4.set(tmp8, obj);
        value = obj;
      }
      const SessionStorage = tmp(1346).SessionStorage;
      let value1 = SessionStorage.get(tmp8);
      if (null == value1) {
        obj = {};
        obj = {};
        const _Object = Object;
        const keys = Object.keys(obj);
        const mapped = keys.map((item) => {
          obj["" + item + "_current"] = obj[item];
          return obj[item];
        });
        const SessionStorage2 = tmp(1346).SessionStorage;
        const result2 = SessionStorage2.set(tmp8, obj);
        value1 = obj;
      }
      const merged = Object.assign(value);
      const obj2 = {
        browser_user_agent: window.navigator.userAgent || "",
        browser_version: formatDefault.version || "",
      };
      const tmpResult = _mod17;
      const obj3 = {};
      const merged1 = Object.assign(obj2);
      if ("android" === tmpResult.Platform.OS) {
        let str = tmp(1343).default.getConstants().systemVersion;
        const _default = tmp(1343).default;
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
    obj = {};
  }
}
function extendSuperProperties(arg0) {
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  closure_4 = encodeProperties.encodeProperties(obj);
}
let result = extendSuperProperties(
  (function getContextualSuperProperties() {
    obj = { client_build_number: parseInt("6365", 10) };
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
    obj.has_client_mods = ClientModDetectionUtils.usesClientMods();
    obj.client_launch_id = clientLaunchId.clientLaunchId;
    return obj;
  })(),
);
let result1 = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/getSuperProperties.tsx");

export { getOS };
export { getDevice };
export const getCampaignParams = function getCampaignParams(arg0) {
  closure_0 = arg0;
  obj = {};
  const item = closure_12.forEach((item) => {
    let str = "";
    if (null != closure_0) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const regExp = new RegExp("[\\?&]" + item.replace(/[[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)");
      const match = regExp.exec(tmp);
      let str7 = "";
      if (null !== match) {
        if (typeof match[1] === "string") {
          const _decodeURIComponent = decodeURIComponent;
          str7 = decodeURIComponent(match[1]).replace(/\+/g, " ");
          const str8 = decodeURIComponent(match[1]);
        } else {
          str7 = "";
        }
      }
      str = str7;
      const str3 = item.replace(/[[]/, "\\[");
    }
    if (str.length > 0) {
      obj[item] = str;
    }
  });
  return obj;
};
export { extendSuperProperties };
export function getSuperProperties() {
  return obj;
}
export function getSuperPropertiesBase64() {
  return closure_4;
}
