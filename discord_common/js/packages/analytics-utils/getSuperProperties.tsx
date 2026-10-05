// === Module 1347: getSuperProperties ===

// Module 1347 (getSuperProperties)
import Storage5 from "Storage" /* 510 */;
import encodeProperties from "encodeProperties" /* 1345 */;
import react_native from "react-native" /* 1348 */;
import ClientModDetectionUtils from "ClientModDetectionUtils" /* 1349 */;
import clientLaunchId from "clientLaunchId" /* 1350 */;
import _modDef1351 from "module_1351" /* 1351 */;
import react_native2 from "react-native" /* 1352 */;
import react_native3 from "react-native" /* 1353 */;
import react_native4 from "react-native" /* 1354 */;
import DesignIds from "DesignIds" /* 1355 */;
import SessionStorage3 from "SessionStorage" /* 1356 */;
import size from "module_2" /* 2 */;

let closure_4, constants;

let _module;
let obj;
function getCachedSuperProperties() {
  let _default;
  const Storage = Storage5.Storage;
  let value = Storage.get(deviceProperties);
  if (null == value) {
    const tmp6 = getDeviceProperties();
    const Storage2 = Storage5.Storage;
    const result = Storage2.set(deviceProperties, tmp6);
    value = tmp6;
  }
  const Storage3 = Storage5.Storage;
  let value3 = Storage3.get(referralProperties);
  if (null == value3) {
    obj = {};
    const Storage4 = Storage5.Storage;
    const result1 = Storage4.set(referralProperties, obj);
    value3 = obj;
  }
  const SessionStorage = SessionStorage3.SessionStorage;
  let value4 = SessionStorage.get(referralProperties);
  if (null == value4) {
    const obj2 = {};
    const obj3 = {};
    const _Object = Object;
    const keys = Object.keys(obj2);
    const mapped = keys.map((item) => {
      obj3["" + item + "_current"] = obj2[item];
      return obj2[item];
    });
    const SessionStorage2 = SessionStorage3.SessionStorage;
    const result2 = SessionStorage2.set(referralProperties, obj3);
    value4 = obj3;
  }
  const obj4 = { browser_user_agent: window.navigator.userAgent || "", browser_version: _modDef1351.version || "", os_version: _default.getConstants().systemVersion || "" };
  const merged = Object.assign(value);
  _modDef1351.version || "";
  _default = react_native3.default;
  _default.getConstants().systemVersion || "";
  const merged1 = Object.assign(value3);
  const merged2 = Object.assign(value4);
  return obj4;
}
function getContextualSuperProperties() {
  let obj2;
  obj = { client_build_number: parseInt("35020000000000", 10), client_event_source: null, has_client_mods: obj2.usesClientMods(), client_launch_id: clientLaunchId.clientLaunchId };
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
  obj2 = ClientModDetectionUtils;
  return obj;
}
function getOS() {
  const _default = react_native2.default;
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
  const _default = react_native3.default;
  return _default.getConstants().device;
}
function getDeviceProperties() {
  let DeviceVendorID;
  let ReleaseChannel;
  let Version;
  let obj2;
  let tmp;
  function getBrowser() {
    let userAgent;
    let vendor;
    ({ userAgent, vendor } = window.navigator);
    const _default = react_native2.default;
    let isMetaQuestResult;
    if (_default != null) {
      isMetaQuestResult = _default.isMetaQuest();
    }
    let str = "Discord Android";
    if (true === isMetaQuestResult) {
      str = "Discord VR";
    }
    return str;
  }
  obj = { os: tmp, browser: getBrowser(), device: getDevice(), system_locale: getSystemLocale(), has_client_mods: obj2.usesClientMods() };
  tmp = getOS();
  obj2 = ClientModDetectionUtils;
  try {
    let _default = react_native4.default;
    constants = _default.getConstants();
    let str = "";
    ({ Version, ReleaseChannel, DeviceVendorID } = constants);
    if ("Android" === tmp) {
      str = " - rn";
    }
    obj.client_version = Version + str;
    obj.release_channel = ReleaseChannel;
    obj.device_vendor_id = DeviceVendorID;
    obj.design_id = DesignIds.DesignIds.DESIGN_TABS_IA;
  } catch (err) {
  }
  return obj;
}
const getSystemLocale = react_native.getSystemLocale;
const deviceProperties = "deviceProperties";
const referralProperties = "referralProperties";
if (null != DiscordNative) {
  let app = DiscordNative.app;
  const platform = DiscordNative.process.platform;
  const app2 = DiscordNative.app;
  const version = app.getVersion();
  const arch = DiscordNative.os.arch;
  const appArch = DiscordNative.os.appArch;
  let str4 = app2.getReleaseChannel();
  let str3 = "Windows";
  const systemLocale = getSystemLocale();
  if ("win32" !== platform) {
    let str = "darwin";
    if ("darwin" === platform) {
      str3 = "Mac OS X";
    } else {
      str3 = "linux" === platform ? "Linux" : platform;
    }
  }
  obj = { os: str3, browser: "Discord Client", release_channel: str4, client_version: version, os_version: DiscordNative.os.release, os_arch: arch, app_arch: appArch, system_locale: systemLocale, has_client_mods: _module.usesClientMods(), client_launch_id: clientLaunchId.clientLaunchId };
  if (!str4) {
    str4 = "unknown";
  }
  _module = ClientModDetectionUtils;
  const name = _modDef1351.name;
  let toLocaleLowerCaseResult;
  if (name != null) {
    toLocaleLowerCaseResult = name.toLocaleLowerCase();
  }
  if ("electron" === toLocaleLowerCaseResult) {
    obj.browser_user_agent = _modDef1351.ua || "";
    _modDef1351.ua || "";
    let tmp6 = _modDef1351.version || "";
    obj.browser_version = tmp6;
  }
  if ("linux" === platform) {
    const crashReporter = DiscordNative.crashReporter;
    const metadata = crashReporter.getMetadata();
    obj.window_manager = metadata.wm;
    obj.distro = metadata.distro;
    obj.runtime_environment = metadata.runtime_environment;
    obj.display_server = metadata.display_server;
  } else {
    let str7 = "darwin";
    if ("darwin" === platform) {
      let first;
      const tmp8 = obj;
      if (DiscordNative.os.release != null) {
        first = str10.split(".")[0];
      }
      tmp8.os_sdk_version = first;
    } else if ("win32" === platform) {
      let tmp7;
      const tmp19 = obj;
      if (DiscordNative.os.release != null) {
        let str8 = ".";
        tmp7 = str10.split(".")[2];
      }
      tmp19.os_sdk_version = tmp7;
    }
  }
}
let closure_12 = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
if (null == obj) {
  try {
    obj = getCachedSuperProperties();
  } catch (err) {
    obj = {};
  }
}
function extendSuperProperties(arg0) {
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(arg0);
  const obj2 = encodeProperties;
  closure_4 = obj2.encodeProperties(obj);
}
let result = extendSuperProperties(getContextualSuperProperties());
let result1 = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/getSuperProperties.tsx");

export { getOS };
export { getDevice };
export const getCampaignParams = function getCampaignParams(arg0) {
  let closure_0 = arg0;
  obj = {};
  const item = closure_12.forEach(function(item) {
    let str = "";
    if (null != closure_0) {
      const _RegExp = RegExp;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const str3 = item.replace(/[[]/, "\\[");
      const regExp = new RegExp("[\\?&]" + str3.replace(/[\]]/, "\\]") + "=([^&#]*)");
      const match = regExp.exec(tmp);
      let str7 = "";
      if (null !== match) {
        if (typeof match[1] === "string") {
          const _decodeURIComponent = decodeURIComponent;
          const str8 = decodeURIComponent(match[1]);
          str7 = str8.replace(/\+/g, " ");
        } else {
          str7 = "";
        }
      }
      str = str7;
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