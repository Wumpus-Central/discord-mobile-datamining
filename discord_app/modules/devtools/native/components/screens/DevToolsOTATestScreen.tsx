// === Module 15487: DevToolsOTATestScreen ===

// Module 15487 (DevToolsOTATestScreen)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import Text_Text from "Text/Text" /* 4886 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import BundleUpdaterDefault from "BundleUpdater" /* 11401 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, c2, c3;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
const Fonts = Constants.Fonts;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, contentContainer: obj3, verificationLine: obj4, verificationFailure: { fontFamily: Fonts.CODE_NORMAL } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((result) => {
  let first;
  let items;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let tmp11;
  let tmp8;
  let verificationFailure;
  let obj = require("react");
  const cResult = obj.c(35);
  result = result.result;
  const tmp4 = closure_10();
  _require = tmp4;
  const totalFileCount = result.totalFileCount;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "OTA Verification Result" });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has OTA Applied" });
    cResult[1] = tmp10;
    tmp8 = tmp10;
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
    const tmp13 = closure_8(require("Text/Text").Text, obj2);
    cResult[2] = str2;
    cResult[3] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp4.verificationLine) {
    let tmp14;
    let tmp16;
    let tmp20;
    if (cResult[5] === tmp11) {
      tmp14 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp18 = closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has Local Copy" });
      cResult[7] = tmp18;
      tmp16 = tmp18;
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
      const tmp22 = closure_8(require("Text/Text").Text, obj3);
      cResult[8] = str3;
      cResult[9] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[9];
    }
    if (cResult[10] === tmp4.verificationLine) {
      let tmp23;
      let tmp27;
      let tmp30;
      if (cResult[11] === tmp20) {
        tmp23 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp29 = closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "OTA is Valid" });
        cResult[13] = tmp29;
        tmp27 = tmp29;
      } else {
        tmp27 = cResult[13];
      }
      if (result.isValid) {
        str = "Yes";
      }
      if (cResult[14] !== str) {
        const obj4 = { variant: "text-md/normal", children: str };
        const tmp32 = closure_8(require("Text/Text").Text, obj4);
        cResult[14] = str;
        cResult[15] = tmp32;
        tmp30 = tmp32;
      } else {
        tmp30 = cResult[15];
      }
      if (cResult[16] === tmp4.verificationLine) {
        let tmp33;
        if (cResult[17] === tmp30) {
          tmp33 = cResult[18];
        }
        if (cResult[19] === null !== totalFileCount) {
          if (cResult[20] === result.failures.length) {
            const successes = result.successes;
            let length;
            const tmp38 = cResult[21];
            if (successes != null) {
              length = successes.length;
            }
            if (tmp38 === length) {
              if (cResult[22] === result.totalFileCount) {
                let tmp40;
                if (cResult[23] === tmp4.verificationLine) {
                  tmp40 = cResult[24];
                }
                if (cResult[25] === result.failures) {
                  if (cResult[26] === tmp4.verificationFailure) {
                    let tmp48;
                    if (cResult[27] === tmp4.verificationLine) {
                      tmp48 = cResult[28];
                    }
                    if (cResult[29] === tmp33) {
                      if (cResult[30] === tmp40) {
                        if (cResult[31] === tmp48) {
                          if (cResult[32] === tmp14) {
                            let tmp53;
                            if (cResult[33] === tmp23) {
                              tmp53 = cResult[34];
                            }
                            return tmp53;
                          }
                        }
                      }
                    }
                    const obj5 = { header: first, children: items };
                    items = [tmp14, tmp23, tmp33, tmp40, tmp48];
                    const tmp55 = closure_9(require("Sheet/BottomSheet").BottomSheet, obj5);
                    cResult[29] = tmp33;
                    cResult[30] = tmp40;
                    cResult[31] = tmp48;
                    cResult[32] = tmp14;
                    cResult[33] = tmp23;
                    cResult[34] = tmp55;
                    tmp53 = tmp55;
                  }
                }
                let tmp49 = null;
                if (result.failures.length > 0) {
                  const obj6 = { style: tmp4.verificationLine, children: items1 };
                  items1 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Failures" }), ];
                  const failures = result.failures;
                  items1[1] = failures.map((children) => {
                    const obj = { variant: "text-md/normal", style: verificationFailure.verificationFailure, children };
                    return metroImportAll(Text_Text.Text, obj, children);
                  });
                  tmp49 = closure_9(closure_7, obj6);
                }
                cResult[25] = result.failures;
                cResult[26] = tmp4.verificationFailure;
                cResult[27] = tmp4.verificationLine;
                cResult[28] = tmp49;
                tmp48 = tmp49;
              }
            }
          }
        }
        let tmp42Result = null;
        if (null !== totalFileCount) {
          const obj7 = { style: tmp4.verificationLine, children: items2 };
          items2 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "File Counts" }), ];
          const items3 = [result.totalFileCount, " files. ", , , , ];
          const successes1 = result.successes;
          let length1;
          const Text = tmp(4886).Text;
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
          const obj8 = { variant: "text-md/normal", children: items3 };
          items3[4] = length2;
          items3[5] = " failures.";
          items2[1] = closure_9(Text, obj8);
          tmp42Result = closure_9(closure_7, obj7);
        }
        cResult[19] = null !== totalFileCount;
        cResult[20] = result.failures.length;
        const successes2 = result.successes;
        let length3;
        if (successes2 != null) {
          length3 = successes2.length;
        }
        cResult[21] = length3;
        cResult[22] = result.totalFileCount;
        cResult[23] = tmp4.verificationLine;
        cResult[24] = tmp42Result;
        tmp40 = tmp42Result;
      }
      const obj9 = { style: tmp4.verificationLine, children: items4 };
      items4 = [tmp27, tmp30];
      const tmp36 = closure_9(closure_7, obj9);
      cResult[16] = tmp4.verificationLine;
      cResult[17] = tmp30;
      cResult[18] = tmp36;
      tmp33 = tmp36;
    }
    const obj10 = { style: tmp4.verificationLine, children: items5 };
    items5 = [tmp16, tmp20];
    const tmp26 = closure_9(closure_7, obj10);
    cResult[10] = tmp4.verificationLine;
    cResult[11] = tmp20;
    cResult[12] = tmp26;
    tmp23 = tmp26;
  }
  const obj11 = { style: tmp4.verificationLine, children: items6 };
  items6 = [tmp8, tmp11];
  const tmp15 = closure_9(closure_7, obj11);
  cResult[4] = tmp4.verificationLine;
  cResult[5] = tmp11;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : ((result) => {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items6;
  let verificationFailure;
  result = result.result;
  const tmp = closure_10();
  _require = tmp;
  const totalFileCount = result.totalFileCount;
  let obj = { header: closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "OTA Verification Result" }), children: items1 };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  const obj2 = { style: tmp.verificationLine, children: items };
  items = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has OTA Applied" }), ];
  let str = "No";
  let str2 = "No";
  const Text = require("Text/Text").Text;
  if (result.hasOtaApplied) {
    str2 = "Yes";
  }
  items[1] = closure_8(Text, { variant: "text-md/normal", children: str2 });
  items1 = [closure_9(closure_7, obj2), , , , ];
  const obj3 = { style: tmp.verificationLine, children: items2 };
  items2 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Has Local Copy" }), ];
  let str3 = "--";
  const Text2 = tmp3(4886).Text;
  if (null != result.hasLocalCopy) {
    let str4 = str;
    if (result.hasLocalCopy) {
      str4 = "Yes";
    }
    str3 = str4;
  }
  items2[1] = closure_8(Text2, { variant: "text-md/normal", children: str3 });
  items1[1] = closure_9(closure_7, obj3);
  const obj4 = { style: tmp.verificationLine, children: items3 };
  items3 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "OTA is Valid" }), ];
  const Text3 = tmp3(4886).Text;
  if (result.isValid) {
    str = "Yes";
  }
  items3[1] = closure_8(Text3, { variant: "text-md/normal", children: str });
  items1[2] = closure_9(closure_7, obj4);
  let tmp2Result = null;
  if (null !== totalFileCount) {
    const obj5 = { style: tmp.verificationLine, children: items4 };
    items4 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "File Counts" }), ];
    const items5 = [result.totalFileCount, " files. ", , , , ];
    const successes = result.successes;
    let length;
    const Text4 = tmp3(4886).Text;
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
    const obj6 = { variant: "text-md/normal", children: items5 };
    items5[4] = length1;
    items5[5] = " failures.";
    items4[1] = closure_9(Text4, obj6);
    tmp2Result = closure_9(closure_7, obj5);
  }
  items1[3] = tmp2Result;
  let tmp2Result2 = null;
  if (result.failures.length > 0) {
    const obj7 = { style: tmp.verificationLine, children: items6 };
    items6 = [closure_8(require("Text/Text").Text, { variant: "heading-md/bold", children: "Failures" }), ];
    const failures1 = result.failures;
    items6[1] = failures1.map((children) => {
      const obj = { variant: "text-md/normal", style: verificationFailure.verificationFailure, children };
      return metroImportAll(Text_Text.Text, obj, children);
    });
    tmp2Result2 = closure_9(closure_7, obj7);
  }
  items1[4] = tmp2Result2;
  return closure_9(BottomSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let subLabel;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp21;
  let tmp24;
  let tmp8;
  const tmp = subLabel;
  let obj = subLabel(576);
  const cResult = obj.c(47);
  const tmp4 = closure_10();
  [subLabel, importDefault] = react.useState("");
  [tmp8, dependencyMap] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  const tmp9 = _slicedToArray(react.useState(null), 2);
  [tmp10, _asyncToGenerator] = tmp9;
  const tmp11 = _slicedToArray(react.useState(""), 2);
  [tmp12, _slicedToArray] = tmp11;
  const tmp13 = _slicedToArray(react.useState(false), 2);
  [tmp14, react] = tmp13;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = BundleUpdaterDefault;
      const otaRootPath = obj.getOtaRootPath();
      otaRootPath.then(closure_1);
      const obj2 = BundleUpdaterDefault;
      const manifestInfo = obj2.getManifestInfo();
      manifestInfo.then(dependencyMap);
      const obj3 = BundleUpdaterDefault;
      const buildOverrideCookieContents = obj3.getBuildOverrideCookieContents();
      buildOverrideCookieContents.then(_asyncToGenerator);
      const obj4 = BundleUpdaterDefault;
      const otaStatus = obj4.getOtaStatus();
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
  const effect = react.useEffect(tmp15, tmp16);
  if (cResult[2] !== subLabel) {
    const fn2 = function u() {
      const obj = ClipboardUtils;
      obj.copy(first);
    };
    cResult[2] = subLabel;
    cResult[3] = fn2;
    tmp18 = fn2;
  } else {
    tmp18 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    subLabel = _asyncToGenerator(async () => {
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let result;
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
              closure_1 = tmp4;
              result = undefined;
              closure_1_5(true);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj2.verifyOtaFiles(), done: false };
              obj2 = closure_2_1(dependencyMap[13]);
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
            result = value;
            closure_1_5(false);
            const obj7 = { default: closure_2_11 };
            const obj8 = { result };
            const obj6 = closure_2_1(dependencyMap[15]);
            obj6.openLazy(Promise.resolve(obj7), "OtaVerificationActionSheet", obj8);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
        }
      }
    });
    function verifyFiles() {
      return closure_0(...arguments);
    }
    cResult[4] = verifyFiles;
    tmp19 = verifyFiles;
  } else {
    tmp19 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp23 = closure_8(tmp(15389).WrenchIcon, {});
    cResult[5] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[5];
  }
  if (cResult[6] !== tmp12) {
    let obj3 = { label: "Status", subLabel: tmp12, icon: tmp21 };
    const tmp26 = closure_8(tmp(5993).TableRow, obj3);
    cResult[6] = tmp12;
    cResult[7] = tmp26;
    tmp24 = tmp26;
  } else {
    tmp24 = cResult[7];
  }
  if (cResult[8] === tmp18) {
    let tmp27;
    if (cResult[9] === subLabel) {
      tmp27 = cResult[10];
    }
    if (cResult[11] === tmp24) {
      let tmp29;
      let tmp32;
      let tmp35;
      let tmp38;
      let tmp41;
      let tmp42;
      if (cResult[12] === tmp27) {
        tmp29 = cResult[13];
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
        const tmp34 = closure_8(tmp(15389).WrenchIcon, {});
        cResult[14] = tmp34;
        tmp32 = tmp34;
      } else {
        tmp32 = cResult[14];
      }
      if (cResult[15] !== str) {
        let obj4 = { label: "Manifest Source", subLabel: str, icon: tmp32 };
        const tmp37 = closure_8(tmp(5993).TableRow, obj4);
        cResult[15] = str;
        cResult[16] = tmp37;
        tmp35 = tmp37;
      } else {
        tmp35 = cResult[16];
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp40 = closure_8(tmp(7553).PaperIcon, {});
        cResult[17] = tmp40;
        tmp38 = tmp40;
      } else {
        tmp38 = cResult[17];
      }
      if (cResult[18] !== tmp8) {
        let str2 = "{}";
        if (null != tmp8) {
          let metadata = tmp8.metadata;
          const _JSON = JSON;
          if (metadata == null) {
            metadata = {};
          }
          str2 = stringify(metadata, null, 2);
        }
        cResult[18] = tmp8;
        cResult[19] = str2;
        tmp41 = str2;
      } else {
        tmp41 = cResult[19];
      }
      if (cResult[20] !== tmp41) {
        let obj5 = { icon: tmp38, label: tmp41 };
        const tmp44 = closure_8(tmp(5993).TableRow, obj5);
        cResult[20] = tmp41;
        cResult[21] = tmp44;
        tmp42 = tmp44;
      } else {
        tmp42 = cResult[21];
      }
      if (cResult[22] === tmp35) {
        let tmp45;
        let tmp48;
        let tmp51;
        let tmp54;
        if (cResult[23] === tmp42) {
          tmp45 = cResult[24];
        }
        const _Symbol3 = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp50 = closure_8(tmp(15389).WrenchIcon, {});
          cResult[25] = tmp50;
          tmp48 = tmp50;
        } else {
          tmp48 = cResult[25];
        }
        let str3 = "Yes";
        if (null == tmp10) {
          str3 = "No";
        }
        if (cResult[26] !== str3) {
          let obj6 = { icon: tmp48, label: "Is cookie set?", subLabel: str3 };
          const tmp53 = closure_8(tmp(5993).TableRow, obj6);
          cResult[26] = str3;
          cResult[27] = tmp53;
          tmp51 = tmp53;
        } else {
          tmp51 = cResult[27];
        }
        if (cResult[28] !== tmp10) {
          let tmp55 = null != tmp10;
          if (tmp55) {
            let obj7 = { icon: closure_8(tmp(15389).WrenchIcon, {}), label: JSON.stringify(tmp10, null, 2) };
            const TableRow = tmp(5993).TableRow;
            const _JSON2 = JSON;
            tmp55 = closure_8(TableRow, obj7);
          }
          cResult[28] = tmp10;
          cResult[29] = tmp55;
          tmp54 = tmp55;
        } else {
          tmp54 = cResult[29];
        }
        if (cResult[30] === tmp51) {
          let tmp57;
          let tmp60;
          let tmp64;
          if (cResult[31] === tmp54) {
            tmp57 = cResult[32];
          }
          const _Symbol4 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            let obj8 = { label: "Check for Update & Reload", icon: closure_8(tmp(4845).DownloadIcon, {}), onPress: BundleUpdaterDefault.checkForUpdateAndReload };
            const TableRow2 = tmp(5993).TableRow;
            const tmp63 = closure_8(TableRow2, obj8);
            cResult[33] = tmp63;
            tmp60 = tmp63;
          } else {
            tmp60 = cResult[33];
          }
          let str4 = "Verify content hashes for all app files";
          if (tmp14) {
            str4 = "Verification in progress";
          }
          const _Symbol5 = Symbol;
          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp66 = closure_8(tmp(15488).ClipboardCheckIcon, {});
            cResult[34] = tmp66;
            tmp64 = tmp66;
          } else {
            tmp64 = cResult[34];
          }
          if (cResult[35] === tmp14) {
            let tmp67;
            if (cResult[36] === str4) {
              tmp67 = cResult[37];
            }
            if (cResult[38] === tmp45) {
              if (cResult[39] === tmp57) {
                if (cResult[40] === tmp67) {
                  let tmp71;
                  if (cResult[41] === tmp29) {
                    tmp71 = cResult[42];
                  }
                  if (cResult[43] === tmp4.contentContainer) {
                    if (cResult[44] === tmp4.wrap) {
                      let tmp74;
                      if (cResult[45] === tmp71) {
                        tmp74 = cResult[46];
                      }
                      return tmp74;
                    }
                  }
                  const obj9 = { style: null, contentContainerStyle: null, children: tmp71 };
                  ({ wrap: obj16.style, contentContainer: obj16.contentContainerStyle } = tmp4);
                  const tmp77 = closure_8(closure_6, obj9);
                  cResult[43] = tmp4.contentContainer;
                  cResult[44] = tmp4.wrap;
                  cResult[45] = tmp71;
                  cResult[46] = tmp77;
                  tmp74 = tmp77;
                }
              }
            }
            const obj10 = { spacing: 16, children: items1 };
            items1 = [tmp29, tmp45, tmp57, tmp67];
            const tmp73 = closure_9(tmp(5593).Stack, obj10);
            cResult[38] = tmp45;
            cResult[39] = tmp57;
            cResult[40] = tmp67;
            cResult[41] = tmp29;
            cResult[42] = tmp73;
            tmp71 = tmp73;
          }
          const obj11 = { title: "Actions", hasIcons: true, children: items2 };
          items2 = [tmp60, ];
          const TableRowGroup = tmp(6074).TableRowGroup;
          const obj12 = { label: "Verify OTA Files", subLabel: str4, icon: tmp64, onPress: tmp19, disabled: tmp14 };
          items2[1] = closure_8(tmp(5993).TableRow, obj12);
          const tmp70 = closure_9(TableRowGroup, obj11);
          cResult[35] = tmp14;
          cResult[36] = str4;
          cResult[37] = tmp70;
          tmp67 = tmp70;
        }
        const obj13 = { title: "Build Override Cookie", hasIcons: true, children: items3 };
        items3 = [tmp51, tmp54];
        const tmp59 = closure_9(tmp(6074).TableRowGroup, obj13);
        cResult[30] = tmp51;
        cResult[31] = tmp54;
        cResult[32] = tmp59;
        tmp57 = tmp59;
      }
      const obj14 = { title: "Manifest", hasIcons: true, children: items4 };
      items4 = [tmp35, tmp42];
      const tmp47 = closure_9(tmp(6074).TableRowGroup, obj14);
      cResult[22] = tmp35;
      cResult[23] = tmp42;
      cResult[24] = tmp47;
      tmp45 = tmp47;
    }
    const obj15 = { title: "OTA Status", hasIcons: true, children: items5 };
    items5 = [tmp24, tmp27];
    const tmp31 = closure_9(tmp(6074).TableRowGroup, obj15);
    cResult[11] = tmp24;
    cResult[12] = tmp27;
    cResult[13] = tmp31;
    tmp29 = tmp31;
  }
  const tmp28 = closure_8(tmp(5993).TableRow, { label: "Root Path (tap to copy)", subLabel, onPress: tmp18 });
  cResult[8] = tmp18;
  cResult[9] = subLabel;
  cResult[10] = tmp28;
  tmp27 = tmp28;
}) : (() => {
  let Stack;
  let closure_1;
  let closure_4;
  let first1;
  let items;
  let obj11;
  let str2;
  let str3;
  let subLabel;
  let tmp11;
  let tmp5;
  let tmp7;
  let obj = function _verifyFiles2() {
    obj = _asyncToGenerator(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let result;
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
              result = undefined;
              react(true);
              const obj2 = tmp4(c2[13]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj2.verifyOtaFiles(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            result = value;
            closure_129_5(false);
            const obj7 = { default: closure_1_11 };
            const obj8 = { result };
            const obj6 = tmp4(c2[15]);
            obj6.openLazy(Promise.resolve(obj7), "OtaVerificationActionSheet", obj8);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          c3 = 3;
          throw tmp9;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_10();
  [subLabel, importDefault] = react.useState("");
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, dependencyMap] = tmp4;
  [tmp7, _asyncToGenerator] = _slicedToArray(react.useState(null), 2);
  const tmp6 = _slicedToArray(react.useState(null), 2);
  [first1, _slicedToArray] = react.useState("");
  const tmp10 = _slicedToArray(react.useState(false), 2);
  [tmp11, react] = tmp10;
  const effect = react.useEffect(() => {
    obj = BundleUpdaterDefault;
    const otaRootPath = obj.getOtaRootPath();
    otaRootPath.then(closure_1);
    const obj2 = BundleUpdaterDefault;
    const manifestInfo = obj2.getManifestInfo();
    manifestInfo.then(dependencyMap);
    const obj3 = BundleUpdaterDefault;
    const buildOverrideCookieContents = obj3.getBuildOverrideCookieContents();
    buildOverrideCookieContents.then(_asyncToGenerator);
    const obj4 = BundleUpdaterDefault;
    const otaStatus = obj4.getOtaStatus();
    otaStatus.then(closure_4);
  }, []);
  obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: closure_9(Stack, obj11) };
  Stack = subLabel(5593).Stack;
  let obj2 = { title: "OTA Status", hasIcons: true, children: items };
  const TableRowGroup = subLabel(6074).TableRowGroup;
  let obj3 = { label: "Status", subLabel: first1, icon: closure_8(subLabel(15389).WrenchIcon, {}) };
  const TableRow = subLabel(5993).TableRow;
  items = [closure_8(TableRow, obj3), ];
  let obj4 = {
    label: "Root Path (tap to copy)",
    subLabel,
    onPress: function copyRootPath() {
      obj = ClipboardUtils;
      obj.copy(first);
    }
  };
  items[1] = closure_8(subLabel(5993).TableRow, obj4);
  const items1 = [closure_9(TableRowGroup, obj2), , , ];
  const TableRowGroup2 = subLabel(6074).TableRowGroup;
  let str;
  const TableRow2 = subLabel(5993).TableRow;
  const tmp14 = obj;
  if (tmp5 != null) {
    str = tmp5.source;
  }
  if (str == null) {
    str = "Unknown";
  }
  let obj5 = { label: "Manifest Source", subLabel: str, icon: closure_8(tmp16(15389).WrenchIcon, {}) };
  const items2 = [closure_8(TableRow2, obj5), ];
  let obj6 = { icon: closure_8(tmp16(7553).PaperIcon, {}), label: str2 };
  const TableRow3 = tmp16(5993).TableRow;
  str2 = "{}";
  if (null != tmp5) {
    let metadata = tmp5.metadata;
    const _JSON = JSON;
    if (metadata == null) {
      metadata = {};
    }
    str2 = stringify(metadata, null, 2);
  }
  let obj7 = { title: "Manifest", hasIcons: true, children: items2 };
  items2[1] = closure_8(TableRow3, obj6);
  items1[1] = closure_9(TableRowGroup2, obj7);
  const TableRowGroup3 = tmp16(6074).TableRowGroup;
  let obj8 = { icon: closure_8(tmp16(15389).WrenchIcon, {}), label: "Is cookie set?", subLabel: str3 };
  const TableRow4 = tmp16(5993).TableRow;
  str3 = "Yes";
  if (null == tmp7) {
    str3 = "No";
  }
  const items3 = [closure_8(TableRow4, obj8), ];
  let tmp13Result = null != tmp7;
  if (tmp13Result) {
    const obj9 = { icon: closure_8(subLabel(15389).WrenchIcon, {}), label: JSON.stringify(tmp7, null, 2) };
    const TableRow5 = tmp16(5993).TableRow;
    const _JSON2 = JSON;
    tmp13Result = closure_8(TableRow5, obj9);
  }
  items3[1] = tmp13Result;
  items1[2] = closure_9(TableRowGroup3, { title: "Build Override Cookie", hasIcons: true, children: items3 });
  const TableRowGroup4 = tmp16(6074).TableRowGroup;
  const obj10 = { label: "Check for Update & Reload", icon: closure_8(subLabel(4845).DownloadIcon, {}), onPress: BundleUpdaterDefault.checkForUpdateAndReload };
  const TableRow6 = tmp16(5993).TableRow;
  const items4 = [closure_8(TableRow6, obj10), ];
  let str4 = "Verify content hashes for all app files";
  const TableRow7 = tmp16(5993).TableRow;
  if (tmp11) {
    str4 = "Verification in progress";
  }
  obj11 = { spacing: 16, children: items1 };
  const obj12 = { title: "Actions", hasIcons: true, children: items4 };
  const obj13 = {
    label: "Verify OTA Files",
    subLabel: str4,
    icon: closure_8(subLabel(15488).ClipboardCheckIcon, {}),
    onPress: function verifyFiles() {
      return obj(...arguments);
    },
    disabled: tmp11
  };
  items4[1] = closure_8(TableRow7, obj13);
  items1[3] = closure_9(TableRowGroup4, obj12);
  return closure_8(tmp14, obj);
});
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsOTATestScreen.tsx");

export default tmp5;