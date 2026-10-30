// discord_app/modules/user_settings/defs/native/CopyClientInfoSetting.tsx
import util from "../../../../intl/index.native.tsx";
import DeviceUtils from "../../../../utils/native/DeviceUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import IOSAnchoredChatScrollerExperiment from "../../../messages/native/IOSAnchoredChatScrollerExperiment.tsx";
import build_overrides_BuildOverrideUtils from "../../../build_overrides/native/BuildOverrideUtils.tsx";
import BuildOverrideStore from "../../../build_overrides/BuildOverrideStore.tsx";
import ClientInfoUtils from "../../../../utils/native/ClientInfoUtils.tsx";

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
function IOSAnchoredChatScrollerRow() {
  const intl = util.intl;
  let result = IOSAnchoredChatScrollerExperiment.isIOSAnchoredChatScrollerEnabled();
  const t = util.t;
  const stringResult = intl.string(result ? t.LfEwvz : t["pe/6Ma"]);
  require = stringResult;
  const obj2 = { label: null, subLabel: null, onPress: null };
  const intl2 = tmp(1114).intl;
  obj2.label = intl2.string(util.t.iNGJNe);
  obj2.subLabel = stringResult;
  obj2.onPress = function onPress() {
    ClipboardUtils.copy(stringResult);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  return closure_4(ActionSheetRow.ActionSheetRow, obj2);
}
function ClientClientInfoActionSheet() {
  let obj = { header: null, startExpanded: true, children: null };
  let obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.Na2lF9);
  obj.header = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  let obj3 = { label: null, subLabel: null, onPress: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(util.t.H66MEk);
  obj3.subLabel = getClientInfo().appVersion;
  obj3.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().appVersion);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  const items = [React4(ActionSheetRow.ActionSheetRow, obj3), , , , ,];
  const obj4 = { label: null, subLabel: null, onPress: null };
  const intl3 = util.intl;
  obj4.label = intl3.string(util.t.zuaWIt);
  obj4.subLabel = getClientInfo().buildNumber;
  obj4.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().buildNumber);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  items[1] = React4(ActionSheetRow.ActionSheetRow, obj4);
  const obj5 = { label: null, subLabel: null, onPress: null };
  const intl4 = util.intl;
  obj5.label = intl4.string(util.t["YD/2+H"]);
  obj5.subLabel = getClientInfo().releaseChannel;
  obj5.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().releaseChannel);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  items[2] = React4(ActionSheetRow.ActionSheetRow, obj5);
  const obj6 = { label: null, subLabel: null, onPress: null };
  const intl5 = util.intl;
  obj6.label = intl5.string(util.t["4bhpIV"]);
  obj6.subLabel = getClientInfo().manifest;
  obj6.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().manifest);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  items[3] = React4(ActionSheetRow.ActionSheetRow, obj6);
  const obj7 = { label: null, subLabel: null, onPress: null };
  const intl6 = util.intl;
  obj7.label = intl6.string(util.t.Wj3LW4);
  obj7.subLabel = getClientInfo().buildOverride;
  obj7.onPress = function onPress() {
    ClipboardUtils.copy(getClientInfo().buildOverride);
    const result = ToastUtils.presentCopiedToClipboard();
  };
  items[4] = React4(ActionSheetRow.ActionSheetRow, obj7);
  let tmp4Result = null;
  if (obj8.isIOS()) {
    tmp4Result = React4(IOSAnchoredChatScrollerRow, {});
  }
  items[5] = tmp4Result;
  const items1 = [hasOwnProperty(ActionSheetRow.ActionSheetRow.Group, { hasIcons: false, children: items })];
  const obj9 = { hasIcons: true, children: null };
  const obj10 = { icon: React4(CopyIcon.CopyIcon, {}), label: null, onPress: null };
  const intl7 = util.intl;
  obj10.label = intl7.string(util.t["7dqZ6H"]);
  obj10.onPress = function onPress() {
    const tmp = getClientInfo();
    ({ appVersion, buildNumber } = tmp);
    ({ releaseChannel, buildOverride, manifest } = tmp);
    const deviceInfo = DeviceUtils.getDeviceInfo();
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
      DeviceUtils.getSystemVersion() +
      ";";
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
const SettingBuilders = fn(11505);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Na2lF9);
  },
  parent: null,
  IconComponent: fn(6907).ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    ActionSheetActionCreatorsDefault.openLazy(
      Promise.resolve({ default: ClientClientInfoActionSheet }),
      "ClientClientInfoActionSheet",
    );
  },
  usePredicate: fn(4834).DeveloperMode.useSetting,
  withArrow: true,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

export default pressable;
export function getClientInfoString(ReleaseChannel) {
  let str = "N/A";
  if (null != ReleaseChannel) {
    str = "N/A";
    if ("" !== ReleaseChannel) {
      str = ReleaseChannel;
    }
  }
  return str;
}
