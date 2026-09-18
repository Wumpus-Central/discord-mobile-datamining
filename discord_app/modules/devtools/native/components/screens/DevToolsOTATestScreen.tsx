// discord_app/modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import BundleUpdaterDefault from "../../../../../lib/native/BundleUpdater.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function OtaVerificationActionSheet(result) {
  result = result.result;
  const tmp = closure_10();
  _require = tmp;
  const obj = {
    header: closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "OTA Verification Result" }),
    children: null,
  };
  const obj2 = { style: tmp.verificationLine, children: null };
  const items = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has OTA Applied" })];
  let str = "No";
  let str2 = "No";
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  items[1] = closure_8(require("Text/Text").Text, { variant: "text-md/normal", children: str2 });
  obj2.children = items;
  const items1 = [closure_9(closure_7, obj2), , , ,];
  const obj3 = { style: tmp.verificationLine, children: null };
  const items2 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has Local Copy" })];
  let str3 = "--";
  if (null != result.hasLocalCopy) {
    let str4 = str;
    if (result.hasLocalCopy) {
      str4 = "Yes";
    }
    str3 = str4;
  }
  items2[1] = closure_8(require("Text/Text").Text, { variant: "text-md/normal", children: str3 });
  obj3.children = items2;
  items1[1] = closure_9(closure_7, obj3);
  const obj4 = { style: tmp.verificationLine, children: null };
  const items3 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "OTA is Valid" })];
  if (result.isValid) {
    str = "Yes";
  }
  items3[1] = closure_8(require("Text/Text").Text, { variant: "text-md/normal", children: str });
  obj4.children = items3;
  items1[2] = closure_9(closure_7, obj4);
  let tmp2Result = null;
  if (null !== result.totalFileCount) {
    const obj5 = { style: tmp.verificationLine, children: null };
    const items4 = [closure_8(tmp3(4718).Text, { variant: "heading-md/bold", children: "File Counts" })];
    const items5 = [result.totalFileCount, " files. ", , , ,];
    const successes = result.successes;
    let length;
    if (successes != null) {
      length = successes.length;
    }
    items5[2] = length;
    items5[3] = " successes, ";
    const failures = result.failures;
    let length1;
    if (failures != null) {
      length1 = failures.length;
    }
    const obj6 = { variant: "text-md/normal", children: null };
    items5[4] = length1;
    items5[5] = " failures.";
    obj6.children = items5;
    items4[1] = closure_9(tmp3(4718).Text, obj6);
    obj5.children = items4;
    tmp2Result = closure_9(closure_7, obj5);
  }
  items1[3] = tmp2Result;
  let tmp2Result2 = null;
  if (result.failures.length > 0) {
    const obj7 = { style: tmp.verificationLine, children: null };
    const items6 = [closure_8(tmp3(4718).Text, { variant: "heading-md/bold", children: "Failures" })];
    const failures1 = result.failures;
    items6[1] = failures1.map((children) =>
      React6(
        Text_Text.Text,
        { variant: "text-md/normal", style: verificationFailure.verificationFailure, children },
        children,
      ),
    );
    obj7.children = items6;
    tmp2Result2 = closure_9(closure_7, obj7);
  }
  items1[4] = tmp2Result2;
  obj.children = items1;
  return closure_9(require("Sheet/BottomSheet").BottomSheet, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 },
  contentContainer: null,
  verificationLine: null,
  verificationFailure: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.verificationLine = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj2.verificationFailure = { fontFamily: fn(1085).Fonts.CODE_NORMAL };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx");

export default function DevToolsOTATestScreen() {
  closure_6 = async function _verifyFiles() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            noop(true);
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: tmp5(12034).verifyOtaFiles(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          closure_129_5(false);
          const obj7 = { default: OtaVerificationActionSheet };
          const obj8 = { result: closure_128_0 };
          tmp5(4689).openLazy(Promise.resolve(obj7), "OtaVerificationActionSheet", obj8);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c3 = tmp;
        throw tmp10;
      }
    }
  };
  const tmp = closure_10();
  [subLabel, importDefault] = noop.useState("");
  [tmp5, dependencyMap] = noop.useState(null);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [tmp7, asyncGeneratorStep] = noop.useState(null);
  const tmp8 = _slicedToArray(noop.useState(""), 2);
  _slicedToArray = tmp8[1];
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [tmp10, noop] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const otaRootPath = BundleUpdaterDefault.getOtaRootPath();
    otaRootPath.then(closure_1);
    const manifestInfo = BundleUpdaterDefault.getManifestInfo();
    manifestInfo.then(dependencyMap);
    const buildOverrideCookieContents = BundleUpdaterDefault.getBuildOverrideCookieContents();
    buildOverrideCookieContents.then(asyncGeneratorStep);
    const otaStatus = BundleUpdaterDefault.getOtaStatus();
    otaStatus.then(closure_4);
  }, []);
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  let obj2 = { title: "OTA Status", hasIcons: true, children: null };
  const tmp13 = closure_6;
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const items = [
    closure_8(subLabel(5775).TableRow, {
      label: "Status",
      subLabel: tmp8[0],
      icon: closure_8(subLabel(15778).WrenchIcon, {}),
    }),
    closure_8(subLabel(5775).TableRow, {
      label: "Root Path (tap to copy)",
      subLabel,
      onPress: function copyRootPath() {
        ClipboardUtils.copy(first);
      },
    }),
  ];
  obj2.children = items;
  const items1 = [closure_9(subLabel(5857).TableRowGroup, obj2), , ,];
  let str;
  if (tmp5 != null) {
    str = tmp5.source;
  }
  if (str == null) {
    str = "Unknown";
  }
  let obj3 = { label: "Status", subLabel: tmp8[0], icon: closure_8(subLabel(15778).WrenchIcon, {}) };
  let obj4 = {
    label: "Root Path (tap to copy)",
    subLabel,
    onPress: function copyRootPath() {
      ClipboardUtils.copy(first);
    },
  };
  const items2 = [
    closure_8(subLabel(5775).TableRow, {
      label: "Manifest Source",
      subLabel: str,
      icon: closure_8(subLabel(15778).WrenchIcon, {}),
    }),
  ];
  const obj6 = { icon: closure_8(subLabel(8115).PaperIcon, {}), label: null };
  let str2 = "{}";
  if (null != tmp5) {
    let metadata = tmp5.metadata;
    if (metadata == null) {
      metadata = {};
    }
    str2 = JSON.stringify(metadata, null, 2);
  }
  let obj7 = { title: "Manifest", hasIcons: true, children: null };
  obj6.label = str2;
  items2[1] = closure_8(subLabel(5775).TableRow, obj6);
  obj7.children = items2;
  items1[1] = closure_9(subLabel(5857).TableRowGroup, obj7);
  let obj8 = { icon: closure_8(subLabel(15778).WrenchIcon, {}), label: "Is cookie set?", subLabel: null };
  let str3 = "Yes";
  if (null == tmp7) {
    str3 = "No";
  }
  obj8.subLabel = str3;
  const items3 = [closure_8(subLabel(5775).TableRow, obj8)];
  let tmp12Result = null != tmp7;
  if (tmp12Result) {
    const obj9 = { icon: closure_8(tmp15(15778).WrenchIcon, {}), label: null };
    const _JSON = JSON;
    obj9.label = JSON.stringify(tmp7, null, 2);
    tmp12Result = closure_8(tmp15(5775).TableRow, obj9);
  }
  items3[1] = tmp12Result;
  items1[2] = closure_9(subLabel(5857).TableRowGroup, {
    title: "Build Override Cookie",
    hasIcons: true,
    children: items3,
  });
  let obj5 = { label: "Manifest Source", subLabel: str, icon: closure_8(subLabel(15778).WrenchIcon, {}) };
  const items4 = [
    closure_8(subLabel(5775).TableRow, {
      label: "Check for Update & Reload",
      icon: closure_8(subLabel(4670).DownloadIcon, {}),
      onPress: BundleUpdaterDefault.checkForUpdateAndReload,
    }),
  ];
  let str4 = "Verify content hashes for all app files";
  if (tmp10) {
    str4 = "Verification in progress";
  }
  const obj11 = { spacing: 16, children: null };
  const obj12 = { title: "Actions", hasIcons: true, children: null };
  const obj10 = {
    label: "Check for Update & Reload",
    icon: closure_8(subLabel(4670).DownloadIcon, {}),
    onPress: BundleUpdaterDefault.checkForUpdateAndReload,
  };
  items4[1] = closure_8(subLabel(5775).TableRow, {
    label: "Verify OTA Files",
    subLabel: str4,
    icon: closure_8(subLabel(15877).ClipboardCheckIcon, {}),
    onPress: function verifyFiles() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    disabled: tmp10,
  });
  obj12.children = items4;
  items1[3] = closure_9(subLabel(5857).TableRowGroup, obj12);
  obj11.children = items1;
  obj.children = closure_9(subLabel(5142).Stack, obj11);
  return closure_8(tmp13, obj);
}
