// === Module 15256: OtaVerificationActionSheet ===

// Module 15256 (OtaVerificationActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import BundleUpdaterManagerDefault from "BundleUpdaterManager" /* 11362 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function OtaVerificationActionSheet(result) {
  result = result.result;
  let _require;
  const tmp = callback4();
  _require = tmp;
  let obj = { header: callback2(_require(5621).BottomSheetTitleHeader, { title: "OTA Verification Result" }), children: null };
  obj = { style: tmp.verificationLine, children: null };
  const items = [callback2(_require(4474).Text, { variant: "heading-md/bold", children: "Has OTA Applied" }), ];
  let str = "No";
  let str2 = "No";
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  items[1] = callback2(_require(4474).Text, { variant: "text-md/normal", children: str2 });
  obj[1] = items;
  const items1 = [closure_9(closure_7, obj), , , , ];
  obj = { style: tmp.verificationLine, children: null };
  const items2 = [callback2(_require(4474).Text, { variant: "heading-md/bold", children: "Has Local Copy" }), ];
  let str3 = "--";
  if (null != result.hasLocalCopy) {
    let str4 = str;
    if (result.hasLocalCopy) {
      str4 = "Yes";
    }
    str3 = str4;
  }
  items2[1] = callback2(_require(4474).Text, { variant: "text-md/normal", children: str3 });
  obj[1] = items2;
  items1[1] = closure_9(closure_7, obj);
  obj1 = { style: tmp.verificationLine, children: null };
  const items3 = [callback2(_require(4474).Text, { variant: "heading-md/bold", children: "OTA is Valid" }), ];
  if (result.isValid) {
    str = "Yes";
  }
  items3[1] = callback2(_require(4474).Text, { variant: "text-md/normal", children: str });
  obj1[1] = items3;
  items1[2] = closure_9(closure_7, obj1);
  let tmp2Result = null;
  if (null !== result.totalFileCount) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.verificationLine;
    const items4 = [tmp5(tmp3(4474).Text, { variant: "heading-md/bold", children: "File Counts" }), ];
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
    items4[1] = tmp2(tmp3(4474).Text, obj3);
    obj2[1] = items4;
    tmp2Result = tmp2(tmp6, obj2);
  }
  items1[3] = tmp2Result;
  tmp2Result = null;
  if (result.failures.length > 0) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.verificationLine;
    const items6 = [tmp5(tmp3(4474).Text, { variant: "heading-md/bold", children: "Failures" }), ];
    const failures1 = result.failures;
    items6[1] = failures1.map((children) => closure_1_8(lib(closure_1_2[10]).Text, { variant: "text-md/normal", style: lib.verificationFailure, children }, children));
    obj4[1] = items6;
    tmp2Result = tmp2(tmp6, obj4);
  }
  items1[4] = tmp2Result;
  obj[1] = items1;
  return closure_9(_require(5622).BottomSheet, obj);
}
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { wrap: null, contentContainer: null, verificationLine: null, verificationFailure: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
let obj1 = { padding: ThemesDefault.space.PX_16 };
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_8 };
createCacheKey[3] = { fontFamily: require("sum").Fonts.CODE_NORMAL };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_8 };
let result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx");

export default function DevToolsOTATestScreen() {
  function _verifyFiles() {
    const self = this;
    const tmp = closure_1_3(function*() {
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
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_0 = undefined;
              closure_1_5(true);
              obj1 = closure_1_1(11362);
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
            obj2[0] = closure_1_11;
            const obj3 = { result: null };
            obj3[0] = closure_0;
            closure_1_1(4445).openLazy(Promise.resolve(obj2), "OtaVerificationActionSheet", obj3);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    });
    closure_6 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  importDefault = tmp2[1];
  [tmp5, dependencyMap] = callback(React.useState(null), 2);
  const tmp4 = callback(React.useState(null), 2);
  [tmp7, closure_3] = callback(React.useState(null), 2);
  const tmp8 = callback(React.useState(""), 2);
  callback = tmp8[1];
  const tmp6 = callback(React.useState(null), 2);
  [tmp10, closure_5] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const otaRootPath = callback(closure_1_2[11]).getOtaRootPath();
    otaRootPath.then(callback);
    const obj = callback(closure_1_2[11]);
    const manifestInfo = callback(closure_1_2[11]).getManifestInfo();
    manifestInfo.then(closure_2);
    const obj2 = callback(closure_1_2[11]);
    const buildOverrideCookieContents = callback(closure_1_2[11]).getBuildOverrideCookieContents();
    buildOverrideCookieContents.then(closure_3);
    const obj3 = callback(closure_1_2[11]);
    const otaStatus = callback(closure_1_2[11]).getOtaStatus();
    otaStatus.then(closure_4);
  }, []);
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { title: "OTA Status", hasIcons: true, children: null };
  obj = { label: "Status", subLabel: tmp8[0], icon: callback2(first(15161).WrenchIcon, {}) };
  const items = [
    callback2(first(5599).TableRow, obj),
    callback2(first(5599).TableRow, {
      label: "Root Path (tap to copy)",
      subLabel: first,
      onPress: function copyRootPath() {
        first(closure_1_2[17]).copy(first);
      }
    })
  ];
  obj[2] = items;
  const items1 = [callback3(first(5992).TableRowGroup, obj), , , ];
  let str;
  if (tmp5 != null) {
    str = tmp5.source;
  }
  if (str == null) {
    str = "Unknown";
  }
  obj1 = {
    label: "Root Path (tap to copy)",
    subLabel: first,
    onPress: function copyRootPath() {
      first(closure_1_2[17]).copy(first);
    }
  };
  const tmp13 = _verifyFiles;
  const tmp9 = callback(React.useState(false), 2);
  const items2 = [callback2(first(5599).TableRow, { label: "Manifest Source", subLabel: str, icon: callback2(first(15161).WrenchIcon, {}) }), ];
  let obj3 = { icon: callback2(first(7819).PaperIcon, {}), label: null };
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
  items2[1] = callback2(first(5599).TableRow, obj3);
  obj4[2] = items2;
  items1[1] = callback3(first(5992).TableRowGroup, obj4);
  const obj5 = { icon: callback2(first(15161).WrenchIcon, {}), label: "Is cookie set?", subLabel: null };
  let str3 = "Yes";
  if (null == tmp7) {
    str3 = "No";
  }
  obj5[2] = str3;
  const items3 = [callback2(first(5599).TableRow, obj5), ];
  let tmp12Result = null != tmp7;
  if (tmp12Result) {
    const obj6 = { icon: null, label: null };
    obj6[0] = tmp12(tmp15(15161).WrenchIcon, {});
    const _JSON = JSON;
    obj6[1] = JSON.stringify(tmp7, null, 2);
    tmp12Result = tmp12(tmp15(5599).TableRow, obj6);
  }
  items3[1] = tmp12Result;
  items1[2] = callback3(first(5992).TableRowGroup, { title: "Build Override Cookie", hasIcons: true, children: items3 });
  let obj2 = { label: "Manifest Source", subLabel: str, icon: callback2(first(15161).WrenchIcon, {}) };
  const items4 = [callback2(first(5599).TableRow, { label: "Check for Update & Reload", icon: callback2(first(4427).DownloadIcon, {}), onPress: BundleUpdaterManagerDefault.checkForUpdateAndReload }), ];
  let str4 = "Verify content hashes for all app files";
  if (tmp10) {
    str4 = "Verification in progress";
  }
  const obj8 = { spacing: 16, children: null };
  const obj9 = { title: "Actions", hasIcons: true, children: null };
  const obj7 = { label: "Check for Update & Reload", icon: callback2(first(4427).DownloadIcon, {}), onPress: BundleUpdaterManagerDefault.checkForUpdateAndReload };
  items4[1] = callback2(first(5599).TableRow, {
    label: "Verify OTA Files",
    subLabel: str4,
    icon: callback2(first(15257).ClipboardCheckIcon, {}),
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
  items1[3] = callback3(first(5992).TableRowGroup, obj9);
  obj8[1] = items1;
  obj[2] = callback3(first(4926).Stack, obj8);
  return callback2(tmp13, obj);
};