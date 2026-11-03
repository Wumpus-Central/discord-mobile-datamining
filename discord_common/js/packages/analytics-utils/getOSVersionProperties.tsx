// discord_common/js/packages/analytics-utils/getOSVersionProperties.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/analytics-utils/getOSVersionProperties.tsx");

export function getNativeOSVersionProperties(systemVersion, tmpResult2) {
  if (tmpResult2) {
    let str = systemVersion.systemVersion;
  } else {
    str = systemVersion.osVersion;
    if (str == null) {
      str = "";
    }
  }
  const obj = { os_version: str, os_version_is_release: null, os_sdk_version: null };
  let tmp2 = tmpResult2;
  if (!tmpResult2) {
    tmp2 = null != systemVersion.osVersion;
  }
  obj.os_version_is_release = tmp2;
  if (tmpResult2) {
    systemVersion = systemVersion.osSdkVersion || undefined;
    const tmp4 = systemVersion.osSdkVersion || undefined;
  } else {
    systemVersion = systemVersion.systemVersion;
  }
  obj.os_sdk_version = systemVersion;
  return obj;
}
export function getDesktopOSVersionProperties(platform, release, systemVersion) {
  let tmp = systemVersion;
  if (systemVersion == null) {
    let str = "";
    if ("darwin" !== platform) {
      str = release;
    }
    tmp = str;
  }
  if ("darwin" === platform) {
    const obj2 = { os_sdk_version: release.split(".")[0] };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  if ("win32" === platform) {
    const obj4 = { os_sdk_version: release.split(".")[2] };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return { os_version: tmp, os_version_is_release: "darwin" !== platform || null != systemVersion };
}
