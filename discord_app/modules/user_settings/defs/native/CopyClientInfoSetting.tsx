// discord_app/modules/user_settings/defs/native/CopyClientInfoSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRowIcon from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import setBuildOverrideForBranch from "../../../build_overrides/native/BuildOverrideUtils.tsx";
import closure_3 from "../../../build_overrides/BuildOverrideStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import importAllResult from "../../../../utils/native/ClientInfoUtils.tsx";

require = arg1;
function getClientInfo() {
  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
  let tmp;
  if (overrides != null) {
    tmp = overrides[setBuildOverrideForBranch.DEVICE_FIELD];
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
  obj = { hasIcons: false, children: null };
  obj1 = { label: null, subLabel: null, onPress: null };
  const intl2 = getSystemLocale.intl;
  obj1[0] = intl2.string(getSystemLocale.t.H66MEk);
  obj1[1] = getClientInfo().appVersion;
  obj1[2] = function onPress() {
    callback(5981).copy(callback2().appVersion);
    const obj = callback(5981);
    const result = callback(4193).presentCopiedToClipboard();
  };
  const items = [callback(ActionSheetRowIcon.ActionSheetRow, obj1), , , ,];
  let obj2 = { label: null, subLabel: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj2[0] = intl3.string(getSystemLocale.t.zuaWIt);
  obj2[1] = getClientInfo().buildNumber;
  obj2[2] = function onPress() {
    callback(5981).copy(callback2().buildNumber);
    const obj = callback(5981);
    const result = callback(4193).presentCopiedToClipboard();
  };
  items[1] = callback(ActionSheetRowIcon.ActionSheetRow, obj2);
  let obj3 = { label: null, subLabel: null, onPress: null };
  const intl4 = getSystemLocale.intl;
  obj3[0] = intl4.string(getSystemLocale.t["YD/2+H"]);
  obj3[1] = getClientInfo().releaseChannel;
  obj3[2] = function onPress() {
    callback(5981).copy(callback2().releaseChannel);
    const obj = callback(5981);
    const result = callback(4193).presentCopiedToClipboard();
  };
  items[2] = callback(ActionSheetRowIcon.ActionSheetRow, obj3);
  const obj4 = { label: null, subLabel: null, onPress: null };
  const intl5 = getSystemLocale.intl;
  obj4[0] = intl5.string(getSystemLocale.t["4bhpIV"]);
  obj4[1] = getClientInfo().manifest;
  obj4[2] = function onPress() {
    callback(5981).copy(callback2().manifest);
    const obj = callback(5981);
    const result = callback(4193).presentCopiedToClipboard();
  };
  items[3] = callback(ActionSheetRowIcon.ActionSheetRow, obj4);
  const obj5 = { label: null, subLabel: null, onPress: null };
  const intl6 = getSystemLocale.intl;
  obj5[0] = intl6.string(getSystemLocale.t.Wj3LW4);
  obj5[1] = getClientInfo().buildOverride;
  obj5[2] = function onPress() {
    callback(5981).copy(callback2().buildOverride);
    const obj = callback(5981);
    const result = callback(4193).presentCopiedToClipboard();
  };
  items[4] = callback(ActionSheetRowIcon.ActionSheetRow, obj5);
  obj[1] = items;
  const items1 = [callback2(ActionSheetRowIcon.ActionSheetRow.Group, obj)];
  const obj6 = { hasIcons: true, children: null };
  const obj7 = { icon: callback(CopyIcon.CopyIcon, {}), label: null, onPress: null };
  const intl7 = getSystemLocale.intl;
  obj7[1] = intl7.string(getSystemLocale.t["7dqZ6H"]);
  obj7[2] = function onPress() {
    const tmp = callback2();
    ({ appVersion, buildNumber } = tmp);
    ({ releaseChannel, buildOverride, manifest } = tmp);
    const deviceInfo = callback(4457).getDeviceInfo();
    const obj = callback(4457);
    const combined =
      "App: " +
      appVersion +
      " (" +
      buildNumber +
      ") " +
      releaseChannel +
      "; Manifest: " +
      manifest +
      "; Build Override: " +
      buildOverride +
      "; " +
      "Device: " +
      deviceInfo +
      " OS " +
      callback(4457).getSystemVersion() +
      ";";
    const obj2 = callback(4457);
    callback(5981).copy(combined);
    const obj3 = callback(5981);
    const result = callback(4193).presentCopiedToClipboard();
  };
  obj6[1] = callback(ActionSheetRowIcon.ActionSheetRow, obj7);
  items1[1] = callback(ActionSheetRowIcon.ActionSheetRow.Group, obj6);
  obj[2] = items1;
  return callback2(ActionSheet.ActionSheet, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
const constants = importAllResult.getConstants();
const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  withArrow: true,
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Na2lF9);
  },
  parent: null,
  IconComponent: require("ClipboardListIcon").ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { default: ClientClientInfoActionSheet };
    obj.openLazy(Promise.resolve(obj), "ClientClientInfoActionSheet");
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting,
  withArrow: true,
};
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

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
