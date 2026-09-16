// === Module 15672: CopyClientInfoSetting ===

// Module 15672 (CopyClientInfoSetting)
import util from "util" /* 1115 */;
import ToastUtils from "ToastUtils" /* 4335 */;
import CopyIcon from "CopyIcon" /* 4584 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import DeviceUtils from "DeviceUtils" /* 4617 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7259 */;
import ClipboardUtils from "ClipboardUtils" /* 7299 */;
import ActionSheet from "ActionSheet" /* 7307 */;
import ActionSheetRow from "ActionSheetRow" /* 7309 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11932 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11571 */;
import ClientInfoUtils from "ClientInfoUtils" /* 1363 */;

require = fn;
function getClientInfo() {
  const overrides = BuildOverrideStore.getCurrentBuildOverride().overrides;
  let tmp;
  if (overrides != null) {
    tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
  }
  let str2 = "N/A";
  if (str.trim().length > 0) {
    str2 = Manifest.Manifest;
  }
  const Build = Manifest.Build;
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
  const Version = Manifest.Version;
  let str8 = "N/A";
  if (null != Version) {
    str8 = "N/A";
    if ("" !== Version) {
      str8 = Version;
    }
  }
  const obj = { appVersion: str8, buildNumber: str3, buildOverride: str6, manifest: str2, releaseChannel: null };
  const ReleaseChannel = Manifest.ReleaseChannel;
  let str10 = "N/A";
  if (null != ReleaseChannel) {
    str10 = "N/A";
    if ("" !== ReleaseChannel) {
      str10 = ReleaseChannel;
    }
  }
  obj.releaseChannel = str10;
  return obj;
}
function ClientClientInfoActionSheet() {
  let obj = { header: null, startExpanded: true, children: null };
  let obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.Na2lF9);
  obj.header = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  let obj3 = { hasIcons: false, children: null };
  const obj4 = { label: null, subLabel: null, onPress: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.H66MEk);
  obj4.subLabel = getClientInfo().appVersion;
  obj4.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().appVersion);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  const items = [React4(ActionSheetRow.ActionSheetRow, obj4), , , , ];
  const obj5 = { label: null, subLabel: null, onPress: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.zuaWIt);
  obj5.subLabel = getClientInfo().buildNumber;
  obj5.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().buildNumber);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  items[1] = React4(ActionSheetRow.ActionSheetRow, obj5);
  const obj6 = { label: null, subLabel: null, onPress: null };
  const intl4 = util.intl;
  obj6.label = intl4.string(util.t["YD/2+H"]);
  obj6.subLabel = getClientInfo().releaseChannel;
  obj6.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().releaseChannel);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  items[2] = React4(ActionSheetRow.ActionSheetRow, obj6);
  const obj7 = { label: null, subLabel: null, onPress: null };
  const intl5 = util.intl;
  obj7.label = intl5.string(util.t["4bhpIV"]);
  obj7.subLabel = getClientInfo().manifest;
  obj7.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().manifest);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  items[3] = React4(ActionSheetRow.ActionSheetRow, obj7);
  const obj8 = { label: null, subLabel: null, onPress: null };
  const intl6 = util.intl;
  obj8.label = intl6.string(util.t.Wj3LW4);
  obj8.subLabel = getClientInfo().buildOverride;
  obj8.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().buildOverride);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  items[4] = React4(ActionSheetRow.ActionSheetRow, obj8);
  obj3.children = items;
  const items1 = [hasOwnProperty(ActionSheetRow.ActionSheetRow.Group, obj3), ];
  const obj9 = { hasIcons: true, children: null };
  const obj10 = { icon: React4(CopyIcon.CopyIcon, {}), label: null, onPress: null };
  const intl7 = util.intl;
  obj10.label = intl7.string(util.t["7dqZ6H"]);
  obj10.onPress = function onPress() {
    const tmp = getClientInfo();
    ({ appVersion, buildNumber } = tmp);
    ({ releaseChannel, buildOverride, manifest } = tmp);
    const deviceInfo = DeviceUtils.getDeviceInfo();
    const combined = "App: " + appVersion + " (" + buildNumber + ") " + releaseChannel + "; Manifest: " + manifest + "; Build Override: " + buildOverride + "; " + "Device: " + deviceInfo + " OS " + DeviceUtils.getSystemVersion() + ";";
    ClipboardUtils.copy(combined);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  obj9.children = React4(ActionSheetRow.ActionSheetRow, obj10);
  items1[1] = React4(ActionSheetRow.ActionSheetRow.Group, obj9);
  obj.children = items1;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const Manifest = ClientInfoUtils.getConstants();
const SettingBuilders = fn(11614);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Na2lF9);
  },
  parent: null,
  IconComponent: fn(5624).ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: ClientClientInfoActionSheet }), "ClientClientInfoActionSheet");
  },
  usePredicate: fn(1936).DeveloperMode.useSetting,
  withArrow: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

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