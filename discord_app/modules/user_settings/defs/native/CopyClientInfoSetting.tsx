// === Module 15399: CopyClientInfoSetting ===

// Module 15399 (CopyClientInfoSetting)
import react from "react" /* 576 */;
import intl8 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import CopyIcon from "CopyIcon" /* 4849 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import DeviceUtils from "DeviceUtils" /* 4872 */;
import ClipboardListIcon from "ClipboardListIcon" /* 5935 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6651 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import ActionSheetRow7 from "ActionSheetRow" /* 6704 */;
import ActionSheet2 from "ActionSheet" /* 6708 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11412 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11095 */;
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 1368 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function getClientInfo() {
  let str10;
  const overrides = BuildOverrideStore.getCurrentBuildOverride().overrides;
  let tmp;
  if (overrides != null) {
    tmp = overrides[build_overrides_BuildOverrideUtils.DEVICE_FIELD];
  }
  let str2 = "N/A";
  const str = Manifest.Manifest;
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
  const ReleaseChannel = Manifest.ReleaseChannel;
  const obj = { appVersion: str8, buildNumber: str3, buildOverride: str6, manifest: str2, releaseChannel: str10 };
  str10 = "N/A";
  if (null != ReleaseChannel) {
    str10 = "N/A";
    if ("" !== ReleaseChannel) {
      str10 = ReleaseChannel;
    }
  }
  return obj;
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const Manifest = react_native.getConstants();
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let ActionSheetRow;
  let first;
  let intl;
  let intl7;
  let items;
  let items1;
  let obj11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp20;
  let tmp23;
  let tmp24;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp36;
  let tmp39;
  let tmp40;
  let tmp44;
  let tmp48;
  let tmp7;
  let tmp8;
  let obj = react;
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { title: intl.string(intl8.t.Na2lF9) };
    const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
    intl = intl8.intl;
    const tmp6 = React3(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl8.intl;
    const stringResult = intl2.string(intl8.t.H66MEk);
    const tmp11 = getClientInfo();
    cResult[1] = stringResult;
    cResult[2] = tmp11;
    tmp8 = tmp11;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = {
      label: tmp7,
      subLabel: tmp8.appVersion,
      onPress() {
          const appVersion = getClientInfo().appVersion;
          const obj = ClipboardUtils;
          obj.copy(appVersion);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    const tmp14 = React3(ActionSheetRow7.ActionSheetRow, obj3);
    cResult[3] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl8.intl;
    const stringResult1 = intl3.string(intl8.t.zuaWIt);
    const tmp19 = getClientInfo();
    cResult[4] = stringResult1;
    cResult[5] = tmp19;
    tmp16 = tmp19;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = {
      label: tmp15,
      subLabel: tmp16.buildNumber,
      onPress() {
          const buildNumber = getClientInfo().buildNumber;
          const obj = ClipboardUtils;
          obj.copy(buildNumber);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    const tmp22 = React3(ActionSheetRow7.ActionSheetRow, obj4);
    cResult[6] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = intl8.intl;
    const stringResult2 = intl4.string(intl8.t["YD/2+H"]);
    const tmp27 = getClientInfo();
    cResult[7] = stringResult2;
    cResult[8] = tmp27;
    tmp24 = tmp27;
    tmp23 = stringResult2;
  } else {
    tmp23 = cResult[7];
    tmp24 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = {
      label: tmp23,
      subLabel: tmp24.releaseChannel,
      onPress() {
          const releaseChannel = getClientInfo().releaseChannel;
          const obj = ClipboardUtils;
          obj.copy(releaseChannel);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    const tmp30 = React3(ActionSheetRow7.ActionSheetRow, obj5);
    cResult[9] = tmp30;
    tmp28 = tmp30;
  } else {
    tmp28 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = intl8.intl;
    const stringResult3 = intl5.string(intl8.t["4bhpIV"]);
    const tmp35 = getClientInfo();
    cResult[10] = stringResult3;
    cResult[11] = tmp35;
    tmp32 = tmp35;
    tmp31 = stringResult3;
  } else {
    tmp31 = cResult[10];
    tmp32 = cResult[11];
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = {
      label: tmp31,
      subLabel: tmp32.manifest,
      onPress() {
          const manifest = getClientInfo().manifest;
          const obj = ClipboardUtils;
          obj.copy(manifest);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    const tmp38 = React3(ActionSheetRow7.ActionSheetRow, obj6);
    cResult[12] = tmp38;
    tmp36 = tmp38;
  } else {
    tmp36 = cResult[12];
  }
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const intl6 = intl8.intl;
    const stringResult4 = intl6.string(intl8.t.Wj3LW4);
    const tmp43 = getClientInfo();
    cResult[13] = stringResult4;
    cResult[14] = tmp43;
    tmp40 = tmp43;
    tmp39 = stringResult4;
  } else {
    tmp39 = cResult[13];
    tmp40 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { hasIcons: false, children: items };
    items = [tmp12, tmp20, tmp28, tmp36, ];
    const Group = ActionSheetRow7.ActionSheetRow.Group;
    const obj8 = {
      label: tmp39,
      subLabel: tmp40.buildOverride,
      onPress() {
          const buildOverride = getClientInfo().buildOverride;
          const obj = ClipboardUtils;
          obj.copy(buildOverride);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }
    };
    items[4] = React3(ActionSheetRow7.ActionSheetRow, obj8);
    const tmp47 = hasOwnProperty(Group, obj7);
    cResult[15] = tmp47;
    tmp44 = tmp47;
  } else {
    tmp44 = cResult[15];
  }
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { header: first, startExpanded: true, children: items1 };
    items1 = [tmp44, ];
    const ActionSheet = ActionSheet2.ActionSheet;
    const obj10 = { hasIcons: true, children: React3(ActionSheetRow, obj11) };
    const Group2 = ActionSheetRow7.ActionSheetRow.Group;
    obj11 = {
      icon: React3(CopyIcon.CopyIcon, {}),
      label: intl7.string(intl8.t["7dqZ6H"]),
      onPress() {
          let appVersion;
          let buildNumber;
          let buildOverride;
          let manifest;
          let releaseChannel;
          const tmp = getClientInfo();
          ({ appVersion, buildNumber } = tmp);
          ({ releaseChannel, buildOverride, manifest } = tmp);
          const obj = DeviceUtils;
          const deviceInfo = obj.getDeviceInfo();
          const obj2 = DeviceUtils;
          const combined = "App: " + appVersion + " (" + buildNumber + ") " + releaseChannel + "; Manifest: " + manifest + "; Build Override: " + buildOverride + "; " + "Device: " + deviceInfo + " OS " + obj2.getSystemVersion() + ";";
          const obj3 = ClipboardUtils;
          obj3.copy(combined);
          const obj4 = ToastUtils;
          const result = obj4.presentCopiedToClipboard();
        }
    };
    ActionSheetRow = ActionSheetRow7.ActionSheetRow;
    intl7 = intl8.intl;
    items1[1] = React3(Group2, obj10);
    const tmp51 = hasOwnProperty(ActionSheet, obj9);
    cResult[16] = tmp51;
    tmp48 = tmp51;
  } else {
    tmp48 = cResult[16];
  }
  return tmp48;
}) : (() => {
  let ActionSheetRow6;
  let BottomSheetTitleHeader;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items1;
  let obj10;
  let obj2;
  let obj = { header: React3(BottomSheetTitleHeader, obj2), startExpanded: true, children: items1 };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { title: intl.string(intl8.t.Na2lF9) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl8.intl;
  let obj3 = { hasIcons: false, children: items };
  const Group = ActionSheetRow7.ActionSheetRow.Group;
  let obj4 = {
    label: intl2.string(intl8.t.H66MEk),
    subLabel: getClientInfo().appVersion,
    onPress() {
      const appVersion = getClientInfo().appVersion;
      const obj = ClipboardUtils;
      obj.copy(appVersion);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow = ActionSheetRow7.ActionSheetRow;
  intl2 = intl8.intl;
  items = [React3(ActionSheetRow, obj4), , , , ];
  const obj5 = {
    label: intl3.string(intl8.t.zuaWIt),
    subLabel: getClientInfo().buildNumber,
    onPress() {
      const buildNumber = getClientInfo().buildNumber;
      const obj = ClipboardUtils;
      obj.copy(buildNumber);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow2 = ActionSheetRow7.ActionSheetRow;
  intl3 = intl8.intl;
  items[1] = React3(ActionSheetRow2, obj5);
  const obj6 = {
    label: intl4.string(intl8.t["YD/2+H"]),
    subLabel: getClientInfo().releaseChannel,
    onPress() {
      const releaseChannel = getClientInfo().releaseChannel;
      const obj = ClipboardUtils;
      obj.copy(releaseChannel);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow3 = ActionSheetRow7.ActionSheetRow;
  intl4 = intl8.intl;
  items[2] = React3(ActionSheetRow3, obj6);
  const obj7 = {
    label: intl5.string(intl8.t["4bhpIV"]),
    subLabel: getClientInfo().manifest,
    onPress() {
      const manifest = getClientInfo().manifest;
      const obj = ClipboardUtils;
      obj.copy(manifest);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow4 = ActionSheetRow7.ActionSheetRow;
  intl5 = intl8.intl;
  items[3] = React3(ActionSheetRow4, obj7);
  const obj8 = {
    label: intl6.string(intl8.t.Wj3LW4),
    subLabel: getClientInfo().buildOverride,
    onPress() {
      const buildOverride = getClientInfo().buildOverride;
      const obj = ClipboardUtils;
      obj.copy(buildOverride);
      const obj2 = ToastUtils;
      const result = obj2.presentCopiedToClipboard();
    }
  };
  const ActionSheetRow5 = ActionSheetRow7.ActionSheetRow;
  intl6 = intl8.intl;
  items[4] = React3(ActionSheetRow5, obj8);
  items1 = [hasOwnProperty(Group, obj3), ];
  const obj9 = { hasIcons: true, children: React3(ActionSheetRow6, obj10) };
  const Group2 = ActionSheetRow7.ActionSheetRow.Group;
  obj10 = {
    icon: React3(CopyIcon.CopyIcon, {}),
    label: intl7.string(intl8.t["7dqZ6H"]),
    onPress() {
      let appVersion;
      let buildNumber;
      let buildOverride;
      let manifest;
      let releaseChannel;
      const tmp = getClientInfo();
      ({ appVersion, buildNumber } = tmp);
      ({ releaseChannel, buildOverride, manifest } = tmp);
      const obj = DeviceUtils;
      const deviceInfo = obj.getDeviceInfo();
      const obj2 = DeviceUtils;
      const combined = "App: " + appVersion + " (" + buildNumber + ") " + releaseChannel + "; Manifest: " + manifest + "; Build Override: " + buildOverride + "; " + "Device: " + deviceInfo + " OS " + obj2.getSystemVersion() + ";";
      const obj3 = ClipboardUtils;
      obj3.copy(combined);
      const obj4 = ToastUtils;
      const result = obj4.presentCopiedToClipboard();
    }
  };
  ActionSheetRow6 = ActionSheetRow7.ActionSheetRow;
  intl7 = intl8.intl;
  items1[1] = React3(Group2, obj9);
  return hasOwnProperty(ActionSheet, obj);
});
function getClientInfoString(ReleaseChannel) {
  let str = "N/A";
  if (null != ReleaseChannel) {
    str = "N/A";
    if ("" !== ReleaseChannel) {
      str = ReleaseChannel;
    }
  }
  return str;
}
let obj = {
  useTitle() {
    const intl = intl8.intl;
    return intl.string(intl8.t.Na2lF9);
  },
  parent: null,
  IconComponent: ClipboardListIcon.ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: closure_8 };
    obj.openLazy(Promise.resolve(obj2), "ClientClientInfoActionSheet");
  },
  usePredicate: UserSettings.DeveloperMode.useSetting,
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

export default pressable;
export { getClientInfoString };