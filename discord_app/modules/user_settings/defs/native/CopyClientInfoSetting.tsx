// === Module 14537: getClientInfo ===

// Module 14537 (getClientInfo)
import getCurrentBuildOverride from "getCurrentBuildOverride";
import jsxProd from "jsxProd";
import createToggle from "createToggle";
import importAllResult from "getConstants";

let c4;
let c5;
const require = arg1;
function getClientInfo() {
  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
  let tmp;
  if (overrides != null) {
    tmp = overrides[require(undefined, 10994) /* setBuildOverrideForBranch */.DEVICE_FIELD];
  }
  let str2 = "N/A";
  if (str.trim().length > 0) {
    str2 = tmp4.Manifest;
  }
  const Build = tmp4.Build;
  let str3 = "N/A";
  if (null != Build) {
    str3 = "N/A";
    if ("" !== Build) {
      str3 = Build;
    }
  }
  let str5 = "N/A";
  if (null != tmp) {
    str5 = tmp.id;
  }
  let str6 = "N/A";
  if (null != str5) {
    str6 = "N/A";
    if ("" !== str5) {
      str6 = str5;
    }
  }
  const Version = tmp4.Version;
  let str8 = "N/A";
  if (null != Version) {
    str8 = "N/A";
    if ("" !== Version) {
      str8 = Version;
    }
  }
  const obj = { appVersion: str8, buildNumber: str3, buildOverride: str6, manifest: str2, releaseChannel: null };
  const ReleaseChannel = tmp4.ReleaseChannel;
  let str10 = "N/A";
  if (null != ReleaseChannel) {
    str10 = "N/A";
    if ("" !== ReleaseChannel) {
      str10 = ReleaseChannel;
    }
  }
  obj[4] = str10;
  return obj;
}
function ClientClientInfoActionSheet() {
  let obj = { header: null, startExpanded: true, children: null };
  obj = { title: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.Na2lF9);
  obj[0] = callback(require(5246) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { label: null, subLabel: null, onPress: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t.H66MEk);
  obj[1] = getClientInfo().appVersion;
  obj[2] = function onPress() {
    callback(5547).copy(callback2().appVersion);
    const obj = callback(5547);
    const result = callback(3893).presentCopiedToClipboard();
  };
  const items = [callback(require(5557) /* ActionSheetRowIcon */.ActionSheetRow, obj), , , , , , ];
  const obj1 = { label: null, subLabel: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj1[0] = intl3.string(require(1236) /* getSystemLocale */.t.zuaWIt);
  obj1[1] = getClientInfo().buildNumber;
  obj1[2] = function onPress() {
    callback(5547).copy(callback2().buildNumber);
    const obj = callback(5547);
    const result = callback(3893).presentCopiedToClipboard();
  };
  items[1] = callback(require(5557) /* ActionSheetRowIcon */.ActionSheetRow, obj1);
  let obj2 = { label: null, subLabel: null, onPress: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj2[0] = intl4.string(require(1236) /* getSystemLocale */.t["YD/2+H"]);
  obj2[1] = getClientInfo().releaseChannel;
  obj2[2] = function onPress() {
    callback(5547).copy(callback2().releaseChannel);
    const obj = callback(5547);
    const result = callback(3893).presentCopiedToClipboard();
  };
  items[2] = callback(require(5557) /* ActionSheetRowIcon */.ActionSheetRow, obj2);
  let obj3 = { label: null, subLabel: null, onPress: null };
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj3[0] = intl5.string(require(1236) /* getSystemLocale */.t["4bhpIV"]);
  obj3[1] = getClientInfo().manifest;
  obj3[2] = function onPress() {
    callback(5547).copy(callback2().manifest);
    const obj = callback(5547);
    const result = callback(3893).presentCopiedToClipboard();
  };
  items[3] = callback(require(5557) /* ActionSheetRowIcon */.ActionSheetRow, obj3);
  const obj4 = { label: null, subLabel: null, onPress: null };
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl6.string(require(1236) /* getSystemLocale */.t.Wj3LW4);
  obj4[1] = getClientInfo().buildOverride;
  obj4[2] = function onPress() {
    callback(5547).copy(callback2().buildOverride);
    const obj = callback(5547);
    const result = callback(3893).presentCopiedToClipboard();
  };
  items[4] = callback(require(5557) /* ActionSheetRowIcon */.ActionSheetRow, obj4);
  let obj7 = require(4057) /* isFabric */;
  let tmp4Result = null;
  if (obj7.isFabric()) {
    const obj5 = { label: "React Native New Architecture", subLabel: "Enabled", onPress: null };
    obj5[2] = function onPress() {
      callback(5547).copy("React Native New Architecture is enabled.");
      const obj = callback(5547);
      const result = callback(3893).presentCopiedToClipboard();
    };
    tmp4Result = tmp4(tmp2(5557).ActionSheetRow, obj5);
  }
  items[5] = tmp4Result;
  tmp4Result = null;
  if (tmp2Result.isFabric()) {
    let str = "Disabled";
    if (tmp2(4057).isBridgeless) {
      str = "Enabled";
    }
    const obj6 = { label: "Bridgeless mode", subLabel: null, onPress: null };
    obj6[1] = str;
    obj6[2] = function onPress() {
      let str = "disabled";
      if (callback(4057).isBridgeless) {
        str = "enabled";
      }
      const combined = "Bridgeless is " + str + ".";
      let tmpResult = tmp(5547);
      tmpResult.copy(combined);
      tmpResult = tmp(3893);
      const result = tmpResult.presentCopiedToClipboard();
    };
    tmp4Result = tmp4(tmp2(5557).ActionSheetRow, obj6);
  }
  items[6] = tmp4Result;
  const items1 = [closure_5(require(5557) /* ActionSheetRowIcon */.ActionSheetRow.Group, { hasIcons: false, children: items }), ];
  obj7 = { hasIcons: true, children: null };
  const obj8 = { icon: null, label: null, onPress: null };
  obj8[0] = callback(require(4141) /* CopyIcon */.CopyIcon, {});
  const intl7 = tmp2(1236).intl;
  obj8[1] = intl7.string(require(1236) /* getSystemLocale */.t["7dqZ6H"]);
  obj8[2] = function onPress() {
    let appVersion;
    let buildNumber;
    let buildOverride;
    let manifest;
    let releaseChannel;
    const tmp = callback2();
    ({ appVersion, buildNumber } = tmp);
    ({ releaseChannel, buildOverride, manifest } = tmp);
    const deviceInfo = callback(4173).getDeviceInfo();
    const obj = callback(4173);
    const combined = "App: " + appVersion + " (" + buildNumber + ") " + releaseChannel + "; Manifest: " + manifest + "; Build Override: " + buildOverride + "; " + "Device: " + deviceInfo + " OS " + callback(4173).getSystemVersion() + ";";
    const obj2 = callback(4173);
    callback(5547).copy(combined);
    const obj3 = callback(5547);
    const result = callback(3893).presentCopiedToClipboard();
  };
  obj7[1] = callback(require(5557) /* ActionSheetRowIcon */.ActionSheetRow, obj8);
  items1[1] = callback(require(5557) /* ActionSheetRowIcon */.ActionSheetRow.Group, obj7);
  obj[2] = items1;
  return closure_5(require(5555) /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
const constants = require("getConstants").getConstants();
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = importDefault(4161);
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  withArrow: true
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = importDefault(4161);
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  withArrow: true
};
let result = require("getConstants").fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

export default pressable;
export const getClientInfoString = function getClientInfoString(ReleaseChannel) {
  let str = "N/A";
  if (null != ReleaseChannel) {
    str = "N/A";
    if ("" !== ReleaseChannel) {
      str = ReleaseChannel;
    }
  }
  return str;
};