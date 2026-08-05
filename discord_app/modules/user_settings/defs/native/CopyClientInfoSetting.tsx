// discord_app/modules/user_settings/defs/native/CopyClientInfoSetting.tsx
import getCurrentBuildOverride from "getCurrentBuildOverride";
import jsxProd from "jsxProd";
import createToggle from "createToggle";
import importAllResult from "getConstants";
import { CopyIcon } from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import { ActionSheet } from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { ActionSheetRowIcon } from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { isFabric } from "../../../../utils/native/FabricUtils.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

let c4;
let c5;
const require = arg1;
function getClientInfo() {
  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
  let tmp;
  if (overrides != null) {
    tmp = overrides[require(undefined, 11100) /* setBuildOverrideForBranch */.DEVICE_FIELD];
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
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.Na2lF9);
  obj[0] = callback(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { label: null, subLabel: null, onPress: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.H66MEk);
  obj[1] = getClientInfo().appVersion;
  obj[2] = function onPress() {
    callback(5638).copy(callback2().appVersion);
    const obj = callback(5638);
    const result = callback(3985).presentCopiedToClipboard();
  };
  const items = [callback(ActionSheetRowIcon.ActionSheetRow, obj), , , , , , ];
  const obj1 = { label: null, subLabel: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj1[0] = intl3.string(getSystemLocale.t.zuaWIt);
  obj1[1] = getClientInfo().buildNumber;
  obj1[2] = function onPress() {
    callback(5638).copy(callback2().buildNumber);
    const obj = callback(5638);
    const result = callback(3985).presentCopiedToClipboard();
  };
  items[1] = callback(ActionSheetRowIcon.ActionSheetRow, obj1);
  let obj2 = { label: null, subLabel: null, onPress: null };
  const intl4 = getSystemLocale.intl;
  obj2[0] = intl4.string(getSystemLocale.t["YD/2+H"]);
  obj2[1] = getClientInfo().releaseChannel;
  obj2[2] = function onPress() {
    callback(5638).copy(callback2().releaseChannel);
    const obj = callback(5638);
    const result = callback(3985).presentCopiedToClipboard();
  };
  items[2] = callback(ActionSheetRowIcon.ActionSheetRow, obj2);
  let obj3 = { label: null, subLabel: null, onPress: null };
  const intl5 = getSystemLocale.intl;
  obj3[0] = intl5.string(getSystemLocale.t["4bhpIV"]);
  obj3[1] = getClientInfo().manifest;
  obj3[2] = function onPress() {
    callback(5638).copy(callback2().manifest);
    const obj = callback(5638);
    const result = callback(3985).presentCopiedToClipboard();
  };
  items[3] = callback(ActionSheetRowIcon.ActionSheetRow, obj3);
  const obj4 = { label: null, subLabel: null, onPress: null };
  const intl6 = getSystemLocale.intl;
  obj4[0] = intl6.string(getSystemLocale.t.Wj3LW4);
  obj4[1] = getClientInfo().buildOverride;
  obj4[2] = function onPress() {
    callback(5638).copy(callback2().buildOverride);
    const obj = callback(5638);
    const result = callback(3985).presentCopiedToClipboard();
  };
  items[4] = callback(ActionSheetRowIcon.ActionSheetRow, obj4);
  let obj7 = isFabric;
  let tmp4Result = null;
  if (obj7.isFabric()) {
    const obj5 = { label: "React Native New Architecture", subLabel: "Enabled", onPress: null };
    obj5[2] = function onPress() {
      callback(5638).copy("React Native New Architecture is enabled.");
      const obj = callback(5638);
      const result = callback(3985).presentCopiedToClipboard();
    };
    tmp4Result = tmp4(tmp2(5648).ActionSheetRow, obj5);
  }
  items[5] = tmp4Result;
  tmp4Result = null;
  if (tmp2Result.isFabric()) {
    let str = "Disabled";
    if (tmp2(4149).isBridgeless) {
      str = "Enabled";
    }
    const obj6 = { label: "Bridgeless mode", subLabel: null, onPress: null };
    obj6[1] = str;
    obj6[2] = function onPress() {
      let str = "disabled";
      if (callback(4149).isBridgeless) {
        str = "enabled";
      }
      const combined = "Bridgeless is " + str + ".";
      let tmpResult = tmp(5638);
      tmpResult.copy(combined);
      tmpResult = tmp(3985);
      const result = tmpResult.presentCopiedToClipboard();
    };
    tmp4Result = tmp4(tmp2(5648).ActionSheetRow, obj6);
  }
  items[6] = tmp4Result;
  const items1 = [closure_5(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: false, children: items }), ];
  obj7 = { hasIcons: true, children: null };
  const obj8 = { icon: null, label: null, onPress: null };
  obj8[0] = callback(CopyIcon.CopyIcon, {});
  const intl7 = tmp2(1236).intl;
  obj8[1] = intl7.string(getSystemLocale.t["7dqZ6H"]);
  obj8[2] = function onPress() {
    let appVersion;
    let buildNumber;
    let buildOverride;
    let manifest;
    let releaseChannel;
    const tmp = callback2();
    ({ appVersion, buildNumber } = tmp);
    ({ releaseChannel, buildOverride, manifest } = tmp);
    const deviceInfo = callback(4265).getDeviceInfo();
    const obj = callback(4265);
    const combined = "App: " + appVersion + " (" + buildNumber + ") " + releaseChannel + "; Manifest: " + manifest + "; Build Override: " + buildOverride + "; " + "Device: " + deviceInfo + " OS " + callback(4265).getSystemVersion() + ";";
    const obj2 = callback(4265);
    callback(5638).copy(combined);
    const obj3 = callback(5638);
    const result = callback(3985).presentCopiedToClipboard();
  };
  obj7[1] = callback(ActionSheetRowIcon.ActionSheetRow, obj8);
  items1[1] = callback(ActionSheetRowIcon.ActionSheetRow.Group, obj7);
  obj[2] = items1;
  return closure_5(ActionSheet.ActionSheet, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
const constants = require("getConstants").getConstants();
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = ACTION_SHEET_HEIGHT_HALF;
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  withArrow: true
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = ACTION_SHEET_HEIGHT_HALF;
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