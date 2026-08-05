// discord_app/modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx
import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import DownloadIcon from "DownloadIcon";
import get_ActivityIndicator from "_copy";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function OtaVerificationActionSheet(result) {
  result = result.result;
  let _require;
  const tmp = createCacheKey();
  _require = tmp;
  let obj = { header: null, children: null };
  obj[0] = callback2(_require(5337).BottomSheetTitleHeader, { title: "OTA Verification Result" });
  obj = { style: tmp.verificationLine, children: null };
  const items = [callback2(_require(4281).Text, { variant: "heading-md/bold", children: "Has OTA Applied" }), ];
  let str = "No";
  let str2 = "No";
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  items[1] = callback2(_require(4281).Text, { variant: "text-md/normal", children: str2 });
  obj[1] = items;
  const items1 = [closure_9(closure_7, obj), , , , ];
  obj = { style: tmp.verificationLine, children: null };
  const items2 = [callback2(_require(4281).Text, { variant: "heading-md/bold", children: "Has Local Copy" }), ];
  let str3 = "--";
  if (null != result.hasLocalCopy) {
    let str4 = str;
    if (result.hasLocalCopy) {
      str4 = "Yes";
    }
    str3 = str4;
  }
  items2[1] = callback2(_require(4281).Text, { variant: "text-md/normal", children: str3 });
  obj[1] = items2;
  items1[1] = closure_9(closure_7, obj);
  const obj1 = { style: tmp.verificationLine, children: null };
  const items3 = [callback2(_require(4281).Text, { variant: "heading-md/bold", children: "OTA is Valid" }), ];
  if (result.isValid) {
    str = "Yes";
  }
  items3[1] = callback2(_require(4281).Text, { variant: "text-md/normal", children: str });
  obj1[1] = items3;
  items1[2] = closure_9(closure_7, obj1);
  let tmp2Result = null;
  if (null !== result.totalFileCount) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.verificationLine;
    const items4 = [tmp5(tmp3(4281).Text, { variant: "heading-md/bold", children: "File Counts" }), ];
    const items5 = [result.totalFileCount, " files. ", , , , ];
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
    obj3[1] = items5;
    items4[1] = tmp2(tmp3(4281).Text, obj3);
    obj2[1] = items4;
    tmp2Result = tmp2(tmp6, obj2);
  }
  items1[3] = tmp2Result;
  tmp2Result = null;
  if (result.failures.length > 0) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.verificationLine;
    const items6 = [tmp5(tmp3(4281).Text, { variant: "heading-md/bold", children: "Failures" }), ];
    const failures1 = result.failures;
    items6[1] = failures1.map((children) => outer1_8(_undefined(outer1_2[10]).Text, { variant: "text-md/normal", style: _undefined.verificationFailure, children }, children));
    obj4[1] = items6;
    tmp2Result = tmp2(tmp6, obj4);
  }
  items1[4] = tmp2Result;
  obj[1] = items1;
  return closure_9(_require(5338).BottomSheet, obj);
}
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { wrap: null, contentContainer: null, verificationLine: null, verificationFailure: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16 };
let obj1 = { padding: require("Themes").space.PX_16 };
createCacheKey[2] = { paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_8 };
createCacheKey[3] = { fontFamily: require("sum").Fonts.CODE_NORMAL };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_8 };
let result = require("noop").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx");

export default function DevToolsOTATestScreen() {
  let closure_3;
  let DownloadIcon;
  let dependencyMap;
  let tmp10;
  let tmp5;
  let tmp7;
  function _verifyFiles() {
    const self = this;
    const tmp = outer1_3(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp5;
              let closure_0 = tmp2;
              closure_0 = undefined;
              outer1_5(true);
              let obj1 = outer1_1(11102);
              dependencyMap = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.verifyOtaFiles();
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = arg1;
            callback(false);
            const obj2 = { default: null };
            obj2[0] = outer1_11;
            const obj3 = { result: null };
            obj3[0] = closure_0;
            outer1_1(4253).openLazy(Promise.resolve(obj2), "OtaVerificationActionSheet", obj3);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    });
    const _verifyFiles = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  [tmp5, dependencyMap] = callback(React.useState(null), 2);
  const tmp4 = callback(React.useState(null), 2);
  [tmp7, closure_3] = callback(React.useState(null), 2);
  const tmp8 = callback(React.useState(""), 2);
  callback = tmp8[1];
  const tmp6 = callback(React.useState(null), 2);
  [tmp10, DownloadIcon] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const otaRootPath = callback(outer1_2[11]).getOtaRootPath();
    otaRootPath.then(callback);
    const obj = callback(outer1_2[11]);
    const manifestInfo = callback(outer1_2[11]).getManifestInfo();
    manifestInfo.then(closure_2);
    const obj2 = callback(outer1_2[11]);
    const buildOverrideCookieContents = callback(outer1_2[11]).getBuildOverrideCookieContents();
    buildOverrideCookieContents.then(closure_3);
    const obj3 = callback(outer1_2[11]);
    const otaStatus = callback(outer1_2[11]).getOtaStatus();
    otaStatus.then(_slicedToArray);
  }, []);
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { title: "OTA Status", hasIcons: true, children: null };
  obj = { label: "Status", subLabel: tmp8[0], icon: null };
  obj[2] = callback2(first(14642).WrenchIcon, {});
  const items = [
    callback2(first(5315).TableRow, obj),
    callback2(first(5315).TableRow, {
      label: "Root Path (tap to copy)",
      subLabel: first,
      onPress: function copyRootPath() {
        first(outer1_2[17]).copy(first);
      }
    })
  ];
  obj[2] = items;
  const items1 = [callback3(first(5649).TableRowGroup, obj), , , ];
  let str;
  if (tmp5 != null) {
    str = tmp5.source;
  }
  if (str == null) {
    str = "Unknown";
  }
  let obj1 = {
    label: "Root Path (tap to copy)",
    subLabel: first,
    onPress: function copyRootPath() {
      first(outer1_2[17]).copy(first);
    }
  };
  const tmp13 = _verifyFiles;
  const tmp9 = callback(React.useState(false), 2);
  const items2 = [callback2(first(5315).TableRow, { label: "Manifest Source", subLabel: str, icon: callback2(first(14642).WrenchIcon, {}) }), ];
  let obj3 = { icon: null, label: null };
  obj3[0] = callback2(first(8378).PaperIcon, {});
  let str2 = "{}";
  if (null != tmp5) {
    let metadata = tmp5.metadata;
    if (metadata == null) {
      metadata = {};
    }
    str2 = JSON.stringify(metadata, null, 2);
  }
  const obj4 = { title: "Manifest", hasIcons: true, children: null };
  obj3[1] = str2;
  items2[1] = callback2(first(5315).TableRow, obj3);
  obj4[2] = items2;
  items1[1] = callback3(first(5649).TableRowGroup, obj4);
  const obj5 = { icon: null, label: "Is cookie set?", subLabel: null };
  obj5[0] = callback2(first(14642).WrenchIcon, {});
  let str3 = "Yes";
  if (null == tmp7) {
    str3 = "No";
  }
  obj5[2] = str3;
  const items3 = [callback2(first(5315).TableRow, obj5), ];
  let tmp12Result = null != tmp7;
  if (tmp12Result) {
    const obj6 = { icon: null, label: null };
    obj6[0] = tmp12(tmp15(14642).WrenchIcon, {});
    const _JSON = JSON;
    obj6[1] = JSON.stringify(tmp7, null, 2);
    tmp12Result = tmp12(tmp15(5315).TableRow, obj6);
  }
  items3[1] = tmp12Result;
  items1[2] = callback3(first(5649).TableRowGroup, { title: "Build Override Cookie", hasIcons: true, children: items3 });
  const obj7 = { label: "Check for Update & Reload", icon: null, onPress: null };
  obj7[1] = callback2(first(4235).DownloadIcon, {});
  obj7[2] = importDefault(11102).checkForUpdateAndReload;
  const items4 = [callback2(first(5315).TableRow, obj7), ];
  let str4 = "Verify content hashes for all app files";
  if (tmp10) {
    str4 = "Verification in progress";
  }
  const obj8 = { spacing: 16, children: null };
  const obj9 = { title: "Actions", hasIcons: true, children: null };
  let obj2 = { label: "Manifest Source", subLabel: str, icon: callback2(first(14642).WrenchIcon, {}) };
  items4[1] = callback2(first(5315).TableRow, {
    label: "Verify OTA Files",
    subLabel: str4,
    icon: callback2(first(14875).ClipboardCheckIcon, {}),
    onPress: function verifyFiles() {
      const self = this;
      const apply = _verifyFiles.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    disabled: tmp10
  });
  obj9[2] = items4;
  items1[3] = callback3(first(5649).TableRowGroup, obj9);
  obj8[1] = items1;
  obj[2] = callback3(first(4693).Stack, obj8);
  return callback2(tmp13, obj);
};