// === Module 15503: DevToolsOTATestScreen ===

// Module 15503 (DevToolsOTATestScreen)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import BundleUpdaterDefault from "BundleUpdater" /* 11414 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null, verificationLine: null, verificationFailure: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.contentContainer = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.verificationLine = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj2.verificationFailure = { fontFamily: fn(1096).Fonts.CODE_NORMAL };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((result) => {
  const cResult = require("c").c(35);
  result = result.result;
  const tmp4 = closure_10();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_8(tmp(6651).BottomSheetTitleHeader, { title: "OTA Verification Result" });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_8(tmp(4892).Text, { variant: "heading-md/bold", children: "Has OTA Applied" });
    cResult[1] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  let str = "No";
  let str2 = "No";
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  if (cResult[2] !== str2) {
    const obj2 = { variant: "text-md/normal", children: str2 };
    const tmp13 = closure_8(tmp(4892).Text, obj2);
    cResult[2] = str2;
    cResult[3] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp4.verificationLine) {
    if (cResult[5] === tmp11) {
      let tmp14 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = closure_8(tmp(4892).Text, { variant: "heading-md/bold", children: "Has Local Copy" });
      cResult[7] = tmp18;
      let tmp16 = tmp18;
    } else {
      tmp16 = cResult[7];
    }
    let str3 = "--";
    if (null != result.hasLocalCopy) {
      let str4 = str;
      if (result.hasLocalCopy) {
        str4 = "Yes";
      }
      str3 = str4;
    }
    if (cResult[8] !== str3) {
      const obj3 = { variant: "text-md/normal", children: str3 };
      const tmp22 = closure_8(tmp(4892).Text, obj3);
      cResult[8] = str3;
      cResult[9] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] === tmp4.verificationLine) {
      if (cResult[11] === tmp20) {
        let tmp23 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp29 = closure_8(tmp(4892).Text, { variant: "heading-md/bold", children: "OTA is Valid" });
        cResult[13] = tmp29;
        let tmp27 = tmp29;
      } else {
        tmp27 = cResult[13];
      }
      if (result.isValid) {
        str = "Yes";
      }
      if (cResult[14] !== str) {
        const obj4 = { variant: "text-md/normal", children: str };
        const tmp32 = closure_8(tmp(4892).Text, obj4);
        cResult[14] = str;
        cResult[15] = tmp32;
        let tmp30 = tmp32;
      } else {
        tmp30 = cResult[15];
      }
      if (cResult[16] === tmp4.verificationLine) {
        if (cResult[17] === tmp30) {
          let tmp33 = cResult[18];
        }
        if (cResult[19] === null !== result.totalFileCount) {
          if (cResult[20] === result.failures.length) {
            const successes = result.successes;
            let length;
            if (successes != null) {
              length = successes.length;
            }
            if (cResult[21] === length) {
              if (cResult[22] === result.totalFileCount) {
                if (cResult[23] === tmp4.verificationLine) {
                  let tmp39 = cResult[24];
                }
                if (cResult[25] === result.failures) {
                  if (cResult[26] === tmp4.verificationFailure) {
                    if (cResult[27] === tmp4.verificationLine) {
                      let tmp47 = cResult[28];
                    }
                    if (cResult[29] === tmp33) {
                      if (cResult[30] === tmp39) {
                        if (cResult[31] === tmp47) {
                          if (cResult[32] === tmp14) {
                            if (cResult[33] === tmp23) {
                              let tmp52 = cResult[34];
                            }
                            return tmp52;
                          }
                        }
                      }
                    }
                    const obj5 = { header: first, children: null };
                    const items = [tmp14, tmp23, tmp33, tmp39, tmp47];
                    obj5.children = items;
                    const tmp54 = closure_9(tmp(6652).BottomSheet, obj5);
                    cResult[29] = tmp33;
                    cResult[30] = tmp39;
                    cResult[31] = tmp47;
                    cResult[32] = tmp14;
                    cResult[33] = tmp23;
                    cResult[34] = tmp54;
                    tmp52 = tmp54;
                  }
                }
                let tmp48 = null;
                if (result.failures.length > 0) {
                  const obj6 = { style: tmp4.verificationLine, children: null };
                  const items1 = [closure_8(tmp(4892).Text, { variant: "heading-md/bold", children: "Failures" }), ];
                  const failures = result.failures;
                  items1[1] = failures.map((children) => closure_2_8(Text_Text.Text, { variant: "text-md/normal", style: verificationFailure.verificationFailure, children }, children));
                  obj6.children = items1;
                  tmp48 = closure_9(closure_7, obj6);
                }
                cResult[25] = result.failures;
                cResult[26] = tmp4.verificationFailure;
                cResult[27] = tmp4.verificationLine;
                cResult[28] = tmp48;
                tmp47 = tmp48;
              }
            }
          }
        }
        let tmp41Result = null;
        if (null !== result.totalFileCount) {
          const obj7 = { style: tmp4.verificationLine, children: null };
          const items2 = [closure_8(tmp(4892).Text, { variant: "heading-md/bold", children: "File Counts" }), ];
          const items3 = [result.totalFileCount, " files. ", , , , ];
          const successes1 = result.successes;
          let length1;
          if (successes1 != null) {
            length1 = successes1.length;
          }
          items3[2] = length1;
          items3[3] = " successes, ";
          const failures1 = result.failures;
          let length2;
          if (failures1 != null) {
            length2 = failures1.length;
          }
          const obj8 = { variant: "text-md/normal", children: null };
          items3[4] = length2;
          items3[5] = " failures.";
          obj8.children = items3;
          items2[1] = closure_9(tmp(4892).Text, obj8);
          obj7.children = items2;
          tmp41Result = closure_9(closure_7, obj7);
        }
        cResult[19] = null !== result.totalFileCount;
        cResult[20] = result.failures.length;
        const successes2 = result.successes;
        let length3;
        if (successes2 != null) {
          length3 = successes2.length;
        }
        cResult[21] = length3;
        cResult[22] = result.totalFileCount;
        cResult[23] = tmp4.verificationLine;
        cResult[24] = tmp41Result;
        tmp39 = tmp41Result;
      }
      const obj9 = { style: tmp4.verificationLine, children: null };
      const items4 = [tmp27, tmp30];
      obj9.children = items4;
      const tmp36 = closure_9(closure_7, obj9);
      cResult[16] = tmp4.verificationLine;
      cResult[17] = tmp30;
      cResult[18] = tmp36;
      tmp33 = tmp36;
    }
    const obj10 = { style: tmp4.verificationLine, children: null };
    const items5 = [tmp16, tmp20];
    obj10.children = items5;
    const tmp26 = closure_9(closure_7, obj10);
    cResult[10] = tmp4.verificationLine;
    cResult[11] = tmp20;
    cResult[12] = tmp26;
    tmp23 = tmp26;
  }
  const obj11 = { style: tmp4.verificationLine, children: null };
  const items6 = [tmp8, tmp11];
  obj11.children = items6;
  const tmp15 = closure_9(closure_7, obj11);
  cResult[4] = tmp4.verificationLine;
  cResult[5] = tmp11;
  cResult[6] = tmp15;
  tmp14 = tmp15;
  const obj = require("c");
}) : ((result) => {
  result = result.result;
  const tmp = closure_10();
  _require = tmp;
  const obj = { header: closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "OTA Verification Result" }), children: null };
  const obj2 = { style: tmp.verificationLine, children: null };
  const items = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has OTA Applied" }), ];
  let str = "No";
  let str2 = "No";
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  items[1] = closure_8(require("Text/Text").Text, { variant: "text-md/normal", children: str2 });
  obj2.children = items;
  const items1 = [closure_9(closure_7, obj2), , , , ];
  const obj3 = { style: tmp.verificationLine, children: null };
  const items2 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has Local Copy" }), ];
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
  const items3 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "OTA is Valid" }), ];
  if (result.isValid) {
    str = "Yes";
  }
  items3[1] = closure_8(require("Text/Text").Text, { variant: "text-md/normal", children: str });
  obj4.children = items3;
  items1[2] = closure_9(closure_7, obj4);
  let tmp2Result = null;
  if (null !== result.totalFileCount) {
    const obj5 = { style: tmp.verificationLine, children: null };
    const items4 = [closure_8(tmp3(4892).Text, { variant: "heading-md/bold", children: "File Counts" }), ];
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
    const obj6 = { variant: "text-md/normal", children: null };
    items5[4] = length1;
    items5[5] = " failures.";
    obj6.children = items5;
    items4[1] = closure_9(tmp3(4892).Text, obj6);
    obj5.children = items4;
    tmp2Result = closure_9(closure_7, obj5);
  }
  items1[3] = tmp2Result;
  let tmp2Result2 = null;
  if (result.failures.length > 0) {
    const obj7 = { style: tmp.verificationLine, children: null };
    const items6 = [closure_8(tmp3(4892).Text, { variant: "heading-md/bold", children: "Failures" }), ];
    const failures1 = result.failures;
    items6[1] = failures1.map((children) => closure_2_8(Text_Text.Text, { variant: "text-md/normal", style: verificationFailure.verificationFailure, children }, children));
    obj7.children = items6;
    tmp2Result2 = closure_9(closure_7, obj7);
  }
  items1[4] = tmp2Result2;
  obj.children = items1;
  return closure_9(require("Sheet/BottomSheet").BottomSheet, obj);
});
ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(47);
  const tmp4 = closure_10();
  [first, importDefault] = noop.useState("");
  _require = first;
  let obj = require("c");
  [tmp8, dependencyMap] = noop.useState(null);
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  [tmp10, asyncGeneratorStep] = noop.useState(null);
  const tmp9 = _slicedToArray(noop.useState(null), 2);
  [tmp12, _slicedToArray] = noop.useState("");
  const tmp11 = _slicedToArray(noop.useState(""), 2);
  [tmp14, noop] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const otaRootPath = BundleUpdaterDefault.getOtaRootPath();
      otaRootPath.then(closure_1);
      const manifestInfo = BundleUpdaterDefault.getManifestInfo();
      manifestInfo.then(dependencyMap);
      const buildOverrideCookieContents = BundleUpdaterDefault.getBuildOverrideCookieContents();
      buildOverrideCookieContents.then(asyncGeneratorStep);
      const otaStatus = BundleUpdaterDefault.getOtaStatus();
      otaStatus.then(_slicedToArray);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp15 = fn;
    tmp16 = items;
  } else {
    [tmp15, tmp16] = cResult;
  }
  const effect = noop.useEffect(tmp15, tmp16);
  if (cResult[2] !== first) {
    const fn2 = function u() {
      ClipboardUtils.copy(closure_0);
    };
    cResult[2] = first;
    cResult[3] = fn2;
    let tmp18 = fn2;
  } else {
    tmp18 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    _require = asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
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
              c2 = 1;
              c3 = 1;
              const obj5 = { value: tmp5(11414).verifyOtaFiles(), done: false };
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
            noop(false);
            const obj7 = { default: closure_2_11 };
            const obj8 = { result: closure_128_0 };
            tmp5(4860).openLazy(Promise.resolve(obj7), "OtaVerificationActionSheet", obj8);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          c3 = tmp;
          throw tmp10;
        }
      }
    });
    function verifyFiles() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[4] = verifyFiles;
    let tmp19 = verifyFiles;
  } else {
    tmp19 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp23 = closure_8(tmp(15404).WrenchIcon, {});
    cResult[5] = tmp23;
    let tmp21 = tmp23;
  } else {
    tmp21 = cResult[5];
  }
  if (cResult[6] !== tmp12) {
    let obj3 = { label: "Status", subLabel: tmp12, icon: tmp21 };
    const tmp26 = closure_8(tmp(6000).TableRow, obj3);
    cResult[6] = tmp12;
    cResult[7] = tmp26;
    let tmp24 = tmp26;
  } else {
    tmp24 = cResult[7];
  }
  if (cResult[8] === tmp18) {
    if (cResult[9] === first) {
      let tmp27 = cResult[10];
    }
    if (cResult[11] === tmp24) {
      if (cResult[12] === tmp27) {
        let tmp29 = cResult[13];
      }
      let str;
      if (tmp8 != null) {
        str = tmp8.source;
      }
      if (str == null) {
        str = "Unknown";
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp34 = closure_8(tmp(15404).WrenchIcon, {});
        cResult[14] = tmp34;
        let tmp32 = tmp34;
      } else {
        tmp32 = cResult[14];
      }
      if (cResult[15] !== str) {
        let obj4 = { label: "Manifest Source", subLabel: str, icon: tmp32 };
        const tmp37 = closure_8(tmp(6000).TableRow, obj4);
        cResult[15] = str;
        cResult[16] = tmp37;
        let tmp35 = tmp37;
      } else {
        tmp35 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp40 = closure_8(tmp(7565).PaperIcon, {});
        cResult[17] = tmp40;
        let tmp38 = tmp40;
      } else {
        tmp38 = cResult[17];
      }
      if (cResult[18] !== tmp8) {
        let str2 = "{}";
        if (null != tmp8) {
          let metadata = tmp8.metadata;
          if (metadata == null) {
            metadata = {};
          }
          str2 = JSON.stringify(metadata, null, 2);
        }
        cResult[18] = tmp8;
        cResult[19] = str2;
        let tmp41 = str2;
      } else {
        tmp41 = cResult[19];
      }
      if (cResult[20] !== tmp41) {
        let obj5 = { icon: tmp38, label: tmp41 };
        const tmp44 = closure_8(tmp(6000).TableRow, obj5);
        cResult[20] = tmp41;
        cResult[21] = tmp44;
        let tmp42 = tmp44;
      } else {
        tmp42 = cResult[21];
      }
      if (cResult[22] === tmp35) {
        if (cResult[23] === tmp42) {
          let tmp45 = cResult[24];
        }
        const _Symbol3 = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp50 = closure_8(tmp(15404).WrenchIcon, {});
          cResult[25] = tmp50;
          let tmp48 = tmp50;
        } else {
          tmp48 = cResult[25];
        }
        let str3 = "Yes";
        if (null == tmp10) {
          str3 = "No";
        }
        if (cResult[26] !== str3) {
          const obj6 = { icon: tmp48, label: "Is cookie set?", subLabel: str3 };
          const tmp53 = closure_8(tmp(6000).TableRow, obj6);
          cResult[26] = str3;
          cResult[27] = tmp53;
          let tmp51 = tmp53;
        } else {
          tmp51 = cResult[27];
        }
        if (cResult[28] !== tmp10) {
          let tmp55 = null != tmp10;
          if (tmp55) {
            let obj7 = { icon: closure_8(tmp(15404).WrenchIcon, {}), label: null };
            const _JSON = JSON;
            obj7.label = JSON.stringify(tmp10, null, 2);
            tmp55 = closure_8(tmp(6000).TableRow, obj7);
          }
          cResult[28] = tmp10;
          cResult[29] = tmp55;
          let tmp54 = tmp55;
        } else {
          tmp54 = cResult[29];
        }
        if (cResult[30] === tmp51) {
          if (cResult[31] === tmp54) {
            let tmp57 = cResult[32];
          }
          const _Symbol4 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            let obj8 = { label: "Check for Update & Reload", icon: closure_8(tmp(4851).DownloadIcon, {}), onPress: BundleUpdaterDefault.checkForUpdateAndReload };
            const tmp63 = closure_8(tmp(6000).TableRow, obj8);
            cResult[33] = tmp63;
            let tmp60 = tmp63;
          } else {
            tmp60 = cResult[33];
          }
          let str4 = "Verify content hashes for all app files";
          if (tmp14) {
            str4 = "Verification in progress";
          }
          const _Symbol5 = Symbol;
          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp66 = closure_8(tmp(15504).ClipboardCheckIcon, {});
            cResult[34] = tmp66;
            let tmp64 = tmp66;
          } else {
            tmp64 = cResult[34];
          }
          if (cResult[35] === tmp14) {
            if (cResult[36] === str4) {
              let tmp67 = cResult[37];
            }
            if (cResult[38] === tmp45) {
              if (cResult[39] === tmp57) {
                if (cResult[40] === tmp67) {
                  if (cResult[41] === tmp29) {
                    let tmp71 = cResult[42];
                  }
                  if (cResult[43] === tmp4.contentContainer) {
                    if (cResult[44] === tmp4.wrap) {
                      if (cResult[45] === tmp71) {
                        let tmp74 = cResult[46];
                      }
                      return tmp74;
                    }
                  }
                  const obj9 = { style: null, contentContainerStyle: null, children: null };
                  ({ wrap: obj16.style, contentContainer: obj16.contentContainerStyle } = tmp4);
                  obj9.children = tmp71;
                  const tmp77 = closure_8(closure_6, obj9);
                  cResult[43] = tmp4.contentContainer;
                  cResult[44] = tmp4.wrap;
                  cResult[45] = tmp71;
                  cResult[46] = tmp77;
                  tmp74 = tmp77;
                }
              }
            }
            const obj10 = { spacing: 16, children: null };
            const items1 = [tmp29, tmp45, tmp57, tmp67];
            obj10.children = items1;
            const tmp73 = closure_9(tmp(5600).Stack, obj10);
            cResult[38] = tmp45;
            cResult[39] = tmp57;
            cResult[40] = tmp67;
            cResult[41] = tmp29;
            cResult[42] = tmp73;
            tmp71 = tmp73;
          }
          const obj11 = { title: "Actions", hasIcons: true, children: null };
          const items2 = [tmp60, ];
          const obj12 = { label: "Verify OTA Files", subLabel: str4, icon: tmp64, onPress: tmp19, disabled: tmp14 };
          items2[1] = closure_8(tmp(6000).TableRow, obj12);
          obj11.children = items2;
          const tmp70 = closure_9(tmp(6081).TableRowGroup, obj11);
          cResult[35] = tmp14;
          cResult[36] = str4;
          cResult[37] = tmp70;
          tmp67 = tmp70;
        }
        const obj13 = { title: "Build Override Cookie", hasIcons: true, children: null };
        const items3 = [tmp51, tmp54];
        obj13.children = items3;
        const tmp59 = closure_9(tmp(6081).TableRowGroup, obj13);
        cResult[30] = tmp51;
        cResult[31] = tmp54;
        cResult[32] = tmp59;
        tmp57 = tmp59;
      }
      const obj14 = { title: "Manifest", hasIcons: true, children: null };
      const items4 = [tmp35, tmp42];
      obj14.children = items4;
      const tmp47 = closure_9(tmp(6081).TableRowGroup, obj14);
      cResult[22] = tmp35;
      cResult[23] = tmp42;
      cResult[24] = tmp47;
      tmp45 = tmp47;
    }
    const obj15 = { title: "OTA Status", hasIcons: true, children: null };
    const items5 = [tmp24, tmp27];
    obj15.children = items5;
    const tmp31 = closure_9(tmp(6081).TableRowGroup, obj15);
    cResult[11] = tmp24;
    cResult[12] = tmp27;
    cResult[13] = tmp31;
    tmp29 = tmp31;
  }
  const tmp28 = closure_8(require("TableRow").TableRow, { label: "Root Path (tap to copy)", subLabel: first, onPress: tmp18 });
  cResult[8] = tmp18;
  cResult[9] = first;
  cResult[10] = tmp28;
  tmp27 = tmp28;
  const tmp13 = _slicedToArray(noop.useState(false), 2);
}) : (() => {
  closure_6 = async function _verifyFiles2() {
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
        return { value: "IconComponent", done: null };
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
            const obj5 = { value: tmp5(11414).verifyOtaFiles(), done: false };
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
          const obj7 = { default: closure_1_11 };
          const obj8 = { result: closure_128_0 };
          tmp5(4860).openLazy(Promise.resolve(obj7), "OtaVerificationActionSheet", obj8);
          c3 = 3;
          return { value: "IconComponent", done: null };
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
    closure_8(subLabel(6000).TableRow, { label: "Status", subLabel: tmp8[0], icon: closure_8(subLabel(15404).WrenchIcon, {}) }),
    closure_8(subLabel(6000).TableRow, {
      label: "Root Path (tap to copy)",
      subLabel,
      onPress: function copyRootPath() {
        ClipboardUtils.copy(first);
      }
    })
  ];
  obj2.children = items;
  const items1 = [closure_9(subLabel(6081).TableRowGroup, obj2), , , ];
  let str;
  if (tmp5 != null) {
    str = tmp5.source;
  }
  if (str == null) {
    str = "Unknown";
  }
  let obj3 = { label: "Status", subLabel: tmp8[0], icon: closure_8(subLabel(15404).WrenchIcon, {}) };
  let obj4 = {
    label: "Root Path (tap to copy)",
    subLabel,
    onPress: function copyRootPath() {
      ClipboardUtils.copy(first);
    }
  };
  const items2 = [closure_8(subLabel(6000).TableRow, { label: "Manifest Source", subLabel: str, icon: closure_8(subLabel(15404).WrenchIcon, {}) }), ];
  const obj6 = { icon: closure_8(subLabel(7565).PaperIcon, {}), label: null };
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
  items2[1] = closure_8(subLabel(6000).TableRow, obj6);
  obj7.children = items2;
  items1[1] = closure_9(subLabel(6081).TableRowGroup, obj7);
  let obj8 = { icon: closure_8(subLabel(15404).WrenchIcon, {}), label: "Is cookie set?", subLabel: null };
  let str3 = "Yes";
  if (null == tmp7) {
    str3 = "No";
  }
  obj8.subLabel = str3;
  const items3 = [closure_8(subLabel(6000).TableRow, obj8), ];
  let tmp12Result = null != tmp7;
  if (tmp12Result) {
    const obj9 = { icon: closure_8(tmp15(15404).WrenchIcon, {}), label: null };
    const _JSON = JSON;
    obj9.label = JSON.stringify(tmp7, null, 2);
    tmp12Result = closure_8(tmp15(6000).TableRow, obj9);
  }
  items3[1] = tmp12Result;
  items1[2] = closure_9(subLabel(6081).TableRowGroup, { title: "Build Override Cookie", hasIcons: true, children: items3 });
  let obj5 = { label: "Manifest Source", subLabel: str, icon: closure_8(subLabel(15404).WrenchIcon, {}) };
  const items4 = [closure_8(subLabel(6000).TableRow, { label: "Check for Update & Reload", icon: closure_8(subLabel(4851).DownloadIcon, {}), onPress: BundleUpdaterDefault.checkForUpdateAndReload }), ];
  let str4 = "Verify content hashes for all app files";
  if (tmp10) {
    str4 = "Verification in progress";
  }
  const obj11 = { spacing: 16, children: null };
  const obj12 = { title: "Actions", hasIcons: true, children: null };
  const obj10 = { label: "Check for Update & Reload", icon: closure_8(subLabel(4851).DownloadIcon, {}), onPress: BundleUpdaterDefault.checkForUpdateAndReload };
  items4[1] = closure_8(subLabel(6000).TableRow, {
    label: "Verify OTA Files",
    subLabel: str4,
    icon: closure_8(subLabel(15504).ClipboardCheckIcon, {}),
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
    disabled: tmp10
  });
  obj12.children = items4;
  items1[3] = closure_9(subLabel(6081).TableRowGroup, obj12);
  obj11.children = items1;
  obj.children = closure_9(subLabel(5600).Stack, obj11);
  return closure_8(tmp13, obj);
});