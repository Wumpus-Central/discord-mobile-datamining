// discord_app/modules/user_settings/defs/native/CopyClientInfoSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import DeviceUtils from "../../../../utils/native/DeviceUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import CopyIcon from "../../../../design/components/Icon/native/redesign/generated/CopyIcon.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
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
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const Manifest = ClientInfoUtils.getConstants();
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function IOSAnchoredChatScrollerRow() {
      const cResult = subLabel(576).c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1128).intl;
        let result = tmp(7733).isIOSAnchoredChatScrollerEnabled();
        const t = tmp(1128).t;
        const stringResult = intl.string(result ? t.LfEwvz : t["pe/6Ma"]);
        cResult[0] = stringResult;
        const tmpResult = tmp(7733);
      } else {
        subLabel = cResult[0];
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1128).intl;
          const stringResult1 = intl2.string(tmp(1128).t.iNGJNe);
          cResult[1] = stringResult1;
          let tmp8 = stringResult1;
        } else {
          tmp8 = cResult[1];
        }
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            label: tmp8,
            subLabel,
            onPress() {
              ClipboardUtils.copy(first);
              const result = ToastUtils.presentCopiedToClipboard();
            },
          };
          const tmp12 = closure_4(tmp(7279).ActionSheetRow, obj2);
          cResult[2] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[2];
        }
        return tmp10;
      }
      let obj = subLabel(576);
    }
  : function IOSAnchoredChatScrollerRow() {
      const intl = util.intl;
      let result = IOSAnchoredChatScrollerExperiment.isIOSAnchoredChatScrollerEnabled();
      const t = util.t;
      const stringResult = intl.string(result ? t.LfEwvz : t["pe/6Ma"]);
      require = stringResult;
      const obj2 = { label: null, subLabel: null, onPress: null };
      const intl2 = tmp(1128).intl;
      obj2.label = intl2.string(util.t.iNGJNe);
      obj2.subLabel = stringResult;
      obj2.onPress = function onPress() {
        ClipboardUtils.copy(stringResult);
        const result = ToastUtils.presentCopiedToClipboard();
      };
      return closure_4(ActionSheetRow.ActionSheetRow, obj2);
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ClientClientInfoActionSheet() {
      const cResult = c.c(17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { title: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t.Na2lF9);
        const tmp6 = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t.H66MEk);
        const tmp11 = getClientInfo();
        cResult[1] = stringResult;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = {
          label: tmp7,
          subLabel: tmp8.appVersion,
          onPress() {
            ClipboardUtils.copy(getClientInfo().appVersion);
            const result = ToastUtils.presentCopiedToClipboard();
          },
        };
        const tmp14 = React4(ActionSheetRow.ActionSheetRow, obj3);
        cResult[3] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult1 = intl3.string(util.t.zuaWIt);
        const tmp19 = getClientInfo();
        cResult[4] = stringResult1;
        cResult[5] = tmp19;
        let tmp16 = tmp19;
        let tmp15 = stringResult1;
      } else {
        tmp15 = cResult[4];
        tmp16 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          label: tmp15,
          subLabel: tmp16.buildNumber,
          onPress() {
            ClipboardUtils.copy(getClientInfo().buildNumber);
            const result = ToastUtils.presentCopiedToClipboard();
          },
        };
        const tmp22 = React4(ActionSheetRow.ActionSheetRow, obj4);
        cResult[6] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = util.intl;
        const stringResult2 = intl4.string(util.t["YD/2+H"]);
        const tmp27 = getClientInfo();
        cResult[7] = stringResult2;
        cResult[8] = tmp27;
        let tmp24 = tmp27;
        let tmp23 = stringResult2;
      } else {
        tmp23 = cResult[7];
        tmp24 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = {
          label: tmp23,
          subLabel: tmp24.releaseChannel,
          onPress() {
            ClipboardUtils.copy(getClientInfo().releaseChannel);
            const result = ToastUtils.presentCopiedToClipboard();
          },
        };
        const tmp30 = React4(ActionSheetRow.ActionSheetRow, obj5);
        cResult[9] = tmp30;
        let tmp28 = tmp30;
      } else {
        tmp28 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = util.intl;
        const stringResult3 = intl5.string(util.t["4bhpIV"]);
        const tmp35 = getClientInfo();
        cResult[10] = stringResult3;
        cResult[11] = tmp35;
        let tmp32 = tmp35;
        let tmp31 = stringResult3;
      } else {
        tmp31 = cResult[10];
        tmp32 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = {
          label: tmp31,
          subLabel: tmp32.manifest,
          onPress() {
            ClipboardUtils.copy(getClientInfo().manifest);
            const result = ToastUtils.presentCopiedToClipboard();
          },
        };
        const tmp38 = React4(ActionSheetRow.ActionSheetRow, obj6);
        cResult[12] = tmp38;
        let tmp36 = tmp38;
      } else {
        tmp36 = cResult[12];
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl6 = util.intl;
        const stringResult4 = intl6.string(util.t.Wj3LW4);
        const tmp43 = getClientInfo();
        cResult[13] = stringResult4;
        cResult[14] = tmp43;
        let tmp40 = tmp43;
        let tmp39 = stringResult4;
      } else {
        tmp39 = cResult[13];
        tmp40 = cResult[14];
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [tmp12, tmp20, tmp28, tmp36, ,];
        const obj7 = {
          label: tmp39,
          subLabel: tmp40.buildOverride,
          onPress() {
            ClipboardUtils.copy(getClientInfo().buildOverride);
            const result = ToastUtils.presentCopiedToClipboard();
          },
        };
        items[4] = React4(ActionSheetRow.ActionSheetRow, obj7);
        let tmp46Result = null;
        if (tmpResult.isIOS()) {
          tmp46Result = React4(closure_8, {});
        }
        const obj8 = { hasIcons: false, children: null };
        items[5] = tmp46Result;
        obj8.children = items;
        const tmp45Result = hasOwnProperty(ActionSheetRow.ActionSheetRow.Group, obj8);
        cResult[15] = tmp45Result;
        let tmp44 = tmp45Result;
        tmpResult = PlatformUtils;
      } else {
        tmp44 = cResult[15];
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const obj9 = { header: first, startExpanded: true, children: null };
        const items1 = [tmp44];
        const obj10 = { hasIcons: true, children: null };
        const obj11 = { icon: React4(CopyIcon.CopyIcon, {}), label: null, onPress: null };
        const intl7 = util.intl;
        obj11.label = intl7.string(util.t["7dqZ6H"]);
        obj11.onPress = function onPress() {
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
        obj10.children = React4(ActionSheetRow.ActionSheetRow, obj11);
        items1[1] = React4(ActionSheetRow.ActionSheetRow.Group, obj10);
        obj9.children = items1;
        const tmp53 = hasOwnProperty(ActionSheet.ActionSheet, obj9);
        cResult[16] = tmp53;
        let tmp50 = tmp53;
      } else {
        tmp50 = cResult[16];
      }
      return tmp50;
    }
  : function ClientClientInfoActionSheet() {
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
        tmp4Result = React4(closure_8, {});
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
    };
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
const SettingBuilders = fn(11181);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Na2lF9);
  },
  parent: null,
  IconComponent: fn(6825).ClipboardListIcon,
  onPress: function handleClientInfoPress() {
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_9 }), "ClientClientInfoActionSheet");
  },
  usePredicate: fn(4797).DeveloperMode.useSetting,
  withArrow: true,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/CopyClientInfoSetting.tsx");

export default pressable;
export { getClientInfoString };
