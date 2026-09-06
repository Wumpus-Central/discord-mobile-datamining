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
  let obj = {
    header: closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "OTA Verification Result" }),
    children: null,
  };
  obj = { style: tmp.verificationLine, children: null };
  const items = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has OTA Applied" })];
  let str = "No";
  let str2 = "No";
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  items[1] = closure_8(require("Text/Text").Text, { variant: "text-md/normal", children: str2 });
  obj.children = items;
  const items1 = [closure_9(closure_7, obj), , , ,];
  obj = { style: tmp.verificationLine, children: null };
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
  obj.children = items2;
  items1[1] = closure_9(closure_7, obj);
  const obj1 = { style: tmp.verificationLine, children: null };
  const items3 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "OTA is Valid" })];
  if (result.isValid) {
    str = "Yes";
  }
  items3[1] = closure_8(require("Text/Text").Text, { variant: "text-md/normal", children: str });
  obj1.children = items3;
  items1[2] = closure_9(closure_7, obj1);
  let tmp2Result = null;
  if (null !== result.totalFileCount) {
    const obj2 = { style: tmp.verificationLine, children: null };
    const items4 = [tmp5(tmp3(4556).Text, { variant: "heading-md/bold", children: "File Counts" })];
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
    const obj3 = { variant: "text-md/normal", children: null };
    items5[4] = length1;
    items5[5] = " failures.";
    obj3.children = items5;
    items4[1] = tmp2(tmp3(4556).Text, obj3);
    obj2.children = items4;
    tmp2Result = tmp2(tmp6, obj2);
  }
  items1[3] = tmp2Result;
  tmp2Result = null;
  if (result.failures.length > 0) {
    const obj4 = { style: tmp.verificationLine, children: null };
    const items6 = [tmp5(tmp3(4556).Text, { variant: "heading-md/bold", children: "Failures" })];
    const failures1 = result.failures;
    items6[1] = failures1.map((children) =>
      React6(
        Text_Text.Text,
        { variant: "text-md/normal", style: verificationFailure.verificationFailure, children },
        children,
      ),
    );
    obj4.children = items6;
    tmp2Result = tmp2(tmp6, obj4);
  }
  items1[4] = tmp2Result;
  obj.children = items1;
  return closure_9(require("Sheet/BottomSheet").BottomSheet, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { wrap: null, contentContainer: null, verificationLine: null, verificationFailure: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.wrap = createStyles;
createStyles.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj1 = { padding: nativeDefault.space.PX_16 };
createStyles.verificationLine = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_8,
};
createStyles.verificationFailure = { fontFamily: fn(1085).Fonts.CODE_NORMAL };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx");

export default function DevToolsOTATestScreen() {
  closure_6 = async function _verifyFiles(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            noop(true);
            let obj1 = tmp5(11791);
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.verifyOtaFiles();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          closure_129_5(false);
          const obj2 = { default: OtaVerificationActionSheet };
          const obj3 = { result: closure_128_0 };
          tmp5(4527).openLazy(Promise.resolve(obj2), "OtaVerificationActionSheet", obj3);
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
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  const subLabel = tmp2[0];
  importDefault = tmp2[1];
  [tmp5, dependencyMap] = _slicedToArray(noop.useState(null), 2);
  const tmp4 = _slicedToArray(noop.useState(null), 2);
  [tmp7, asyncGeneratorStep] = _slicedToArray(noop.useState(null), 2);
  const tmp8 = _slicedToArray(noop.useState(""), 2);
  _slicedToArray = tmp8[1];
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [tmp10, noop] = _slicedToArray(noop.useState(false), 2);
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
  obj = { title: "OTA Status", hasIcons: true, children: null };
  obj = { label: "Status", subLabel: tmp8[0], icon: closure_8(subLabel(15562).WrenchIcon, {}) };
  const items = [
    closure_8(subLabel(5605).TableRow, obj),
    closure_8(subLabel(5605).TableRow, {
      label: "Root Path (tap to copy)",
      subLabel,
      onPress: function copyRootPath() {
        ClipboardUtils.copy(first);
      },
    }),
  ];
  obj.children = items;
  const items1 = [closure_9(subLabel(5687).TableRowGroup, obj), , ,];
  let str;
  if (tmp5 != null) {
    str = tmp5.source;
  }
  if (str == null) {
    str = "Unknown";
  }
  let obj1 = {
    label: "Root Path (tap to copy)",
    subLabel,
    onPress: function copyRootPath() {
      ClipboardUtils.copy(first);
    },
  };
  const tmp13 = closure_6;
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const items2 = [
    closure_8(subLabel(5605).TableRow, {
      label: "Manifest Source",
      subLabel: str,
      icon: closure_8(subLabel(15562).WrenchIcon, {}),
    }),
  ];
  let obj3 = { icon: closure_8(subLabel(7910).PaperIcon, {}), label: null };
  let str2 = "{}";
  if (null != tmp5) {
    let metadata = tmp5.metadata;
    if (metadata == null) {
      metadata = {};
    }
    str2 = JSON.stringify(metadata, null, 2);
  }
  const obj4 = { title: "Manifest", hasIcons: true, children: null };
  obj3.label = str2;
  items2[1] = closure_8(subLabel(5605).TableRow, obj3);
  obj4.children = items2;
  items1[1] = closure_9(subLabel(5687).TableRowGroup, obj4);
  const obj5 = { icon: closure_8(subLabel(15562).WrenchIcon, {}), label: "Is cookie set?", subLabel: null };
  let str3 = "Yes";
  if (null == tmp7) {
    str3 = "No";
  }
  obj5.subLabel = str3;
  const items3 = [closure_8(subLabel(5605).TableRow, obj5)];
  let tmp12Result = null != tmp7;
  if (tmp12Result) {
    const obj6 = { icon: tmp12(tmp15(15562).WrenchIcon, {}), label: null };
    const _JSON = JSON;
    obj6.label = JSON.stringify(tmp7, null, 2);
    tmp12Result = tmp12(tmp15(5605).TableRow, obj6);
  }
  items3[1] = tmp12Result;
  items1[2] = closure_9(subLabel(5687).TableRowGroup, {
    title: "Build Override Cookie",
    hasIcons: true,
    children: items3,
  });
  let obj2 = { label: "Manifest Source", subLabel: str, icon: closure_8(subLabel(15562).WrenchIcon, {}) };
  const items4 = [
    closure_8(subLabel(5605).TableRow, {
      label: "Check for Update & Reload",
      icon: closure_8(subLabel(4509).DownloadIcon, {}),
      onPress: BundleUpdaterDefault.checkForUpdateAndReload,
    }),
  ];
  let str4 = "Verify content hashes for all app files";
  if (tmp10) {
    str4 = "Verification in progress";
  }
  const obj8 = { spacing: 16, children: null };
  const obj9 = { title: "Actions", hasIcons: true, children: null };
  const obj7 = {
    label: "Check for Update & Reload",
    icon: closure_8(subLabel(4509).DownloadIcon, {}),
    onPress: BundleUpdaterDefault.checkForUpdateAndReload,
  };
  items4[1] = closure_8(subLabel(5605).TableRow, {
    label: "Verify OTA Files",
    subLabel: str4,
    icon: closure_8(subLabel(15658).ClipboardCheckIcon, {}),
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
  obj9.children = items4;
  items1[3] = closure_9(subLabel(5687).TableRowGroup, obj9);
  obj8.children = items1;
  obj.children = closure_9(subLabel(4973).Stack, obj8);
  return closure_8(tmp13, obj);
}
