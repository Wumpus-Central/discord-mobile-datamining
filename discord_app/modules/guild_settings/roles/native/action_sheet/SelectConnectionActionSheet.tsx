// === Module 17809: SelectConnectionActionSheet ===

// Module 17809 (SelectConnectionActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import TableRow2 from "TableRow" /* 5993 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import BottomSheetModal from "BottomSheetModal" /* 6112 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6644 */;
import ActionSheet2 from "ActionSheet" /* 6701 */;
import ConnectionsHooks from "ConnectionsHooks" /* 7012 */;
import SegmentedControlState from "SegmentedControlState" /* 9282 */;
import SegmentedControl from "SegmentedControl" /* 9283 */;
import useGetOrFetchApplicationBatched from "useGetOrFetchApplicationBatched" /* 11180 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let addConnection, application;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let onPress;
  const obj = react2;
  const cResult = obj.c(7);
  ({ onPress, applicationId } = arg0);
  const obj2 = useGetOrFetchApplicationBatched;
  const getOrFetchApplicationBatched = obj2.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    let tmp5;
    const bot = getOrFetchApplicationBatched.bot;
    if (cResult[0] !== bot) {
      let tmp6 = null;
      if (null != bot) {
        const obj3 = { user: bot, size: native.AvatarSizes.XSMALL, guildId: "r" };
        const Avatar = native.Avatar;
        tmp6 = metroRequire(Avatar, obj3);
      }
      cResult[0] = bot;
      cResult[1] = tmp6;
      tmp5 = tmp6;
    } else {
      tmp5 = cResult[1];
    }
    let description;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    if (cResult[2] === getOrFetchApplicationBatched.name) {
      if (cResult[3] === onPress) {
        if (cResult[4] === tmp5) {
          let tmp9;
          if (cResult[5] === description) {
            tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
    }
    const obj4 = { icon: tmp5, label: getOrFetchApplicationBatched.name, subLabel: description, onPress };
    const tmp11 = metroRequire(TableRow2.TableRow, obj4);
    cResult[2] = getOrFetchApplicationBatched.name;
    cResult[3] = onPress;
    cResult[4] = tmp5;
    cResult[5] = description;
    cResult[6] = tmp11;
    tmp9 = tmp11;
  }
}) : ((arg0) => {
  let applicationId;
  let description;
  let onPress;
  ({ applicationId, onPress } = arg0);
  const obj = useGetOrFetchApplicationBatched;
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    let tmp6Result = null;
    const TableRow = TableRow2.TableRow;
    if (null != bot) {
      const obj2 = { user: bot, size: native.AvatarSizes.XSMALL, guildId: "r" };
      const Avatar = native.Avatar;
      tmp6Result = metroRequire(Avatar, obj2);
    }
    const obj3 = { icon: tmp6Result, label: getOrFetchApplicationBatched.name, subLabel: description, onPress };
    description = undefined;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    return metroRequire(TableRow, obj3);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((addConnection) => {
  let SafeAreaPaddingView;
  let excludedApplications;
  let first;
  let first1;
  let fn;
  let found;
  let gameApplicationIds;
  let intl;
  let items;
  let obj4;
  let obj5;
  let obj8;
  let onCompleteIdentityApplication;
  let tmp10;
  let tmp11;
  let tmp = addConnection;
  let tmp2 = excludedApplications;
  let obj = addConnection(excludedApplications[5]);
  const cResult = obj.c(37);
  addConnection = addConnection.addConnection;
  const excludedConnections = addConnection.excludedConnections;
  excludedApplications = addConnection.excludedApplications;
  ({ integrations, onCompleteApplication: _slicedToArray, gameApplicationIds, onCompleteIdentityApplication } = addConnection);
  const tmp4 = excludedConnections(excludedApplications[9])();
  let closure_5 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { title: intl.string(tmp(tmp2[11]).t.Sm0YG7) };
    const BottomSheetTitleHeader = tmp(tmp2[10]).BottomSheetTitleHeader;
    intl = tmp(tmp2[11]).intl;
    const tmp7 = closure_6(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  [first1, tmp10] = onCompleteIdentityApplication.useState(0);
  if (integrations != null) {
    found = integrations.filter((application) => {
      application = application.application;
      let prop;
      if (application != null) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = application.application;
        let id;
        const has = excludedApplications.has;
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !has(id);
      }
      return tmp2;
    });
  }
  const tmpResult = tmp(tmp2[12]);
  const platforms = tmpResult.usePlatforms();
  if (cResult[1] === addConnection) {
    if (cResult[2] === excludedConnections) {
      if (cResult[3] === platforms) {
        let mapped;
        if (cResult[4] === tmp4) {
          tmp11 = cResult[5];
        }
        if (found != null) {
          mapped = found.map((application) => {
            let Avatar;
            let description;
            let obj2;
            application = application.application;
            let tmp = null;
            if (null != application) {
              let obj = {
                icon: closure_1_6(Avatar, obj2),
                label: application.name,
                subLabel: description,
                onPress() {
                    _slicedToArray(application.id);
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                  }
              };
              const TableRow = addConnection(excludedApplications[8]).TableRow;
              obj2 = { user: application.bot, size: addConnection(excludedApplications[7]).AvatarSizes.XSMALL, guildId: "r" };
              Avatar = addConnection(excludedApplications[7]).Avatar;
              description = undefined;
              if ("" !== application.description) {
                description = application.description;
              }
              const _HermesInternal = HermesInternal;
              tmp = closure_1_6(TableRow, obj, "row-" + application.id);
            }
            return tmp;
          });
        }
        if (cResult[11] === excludedApplications) {
          if (cResult[12] === gameApplicationIds) {
            let arr5;
            let tmp20;
            if (cResult[13] === onCompleteIdentityApplication) {
              arr5 = cResult[14];
            }
            let num14;
            if (mapped != null) {
              num14 = mapped.length;
            }
            if (num14 == null) {
              num14 = 0;
            }
            const _Symbol = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[11]).intl;
              const stringResult = intl2.string(tmp(tmp2[11]).t["3fe7U5"]);
              cResult[17] = stringResult;
              tmp20 = stringResult;
            } else {
              tmp20 = cResult[17];
            }
            if (cResult[18] === num14 > 0) {
              let arr7;
              let tmp28;
              if (cResult[19] === arr5.length > 0) {
                arr7 = cResult[20];
              }
              if (cResult[23] !== arr7) {
                const mapped1 = arr7.map((id) => ({ id, label: id, page: null }));
                cResult[23] = arr7;
                cResult[24] = mapped1;
                tmp28 = mapped1;
              } else {
                tmp28 = cResult[24];
              }
              if (cResult[25] === first1) {
                let tmp30;
                let tmp33;
                if (cResult[26] === tmp28) {
                  tmp30 = cResult[27];
                }
                const tmpResult2 = tmp(tmp2[16]);
                const segmentedControlState = tmpResult2.useSegmentedControlState(tmp30);
                if (1 === first1) {
                  if (num14 > 0) {
                    arr5 = mapped;
                  }
                  tmp11 = arr5;
                } else if (2 === first1) {
                  tmp11 = arr5;
                }
                if (cResult[28] === segmentedControlState) {
                  if (cResult[29] === num14 > 0) {
                    let tmp32;
                    let tmp36;
                    if (cResult[30] === arr5.length > 0) {
                      tmp32 = cResult[31];
                    }
                    if (cResult[32] !== tmp11) {
                      const obj3 = { children: closure_6(SafeAreaPaddingView, obj4) };
                      const BottomSheetScrollView = tmp(tmp2[18]).BottomSheetScrollView;
                      obj4 = { bottom: true, children: closure_6(tmp(tmp2[20]).TableRowGroup, obj5) };
                      SafeAreaPaddingView = tmp(tmp2[19]).SafeAreaPaddingView;
                      obj5 = { hasIcons: true, children: tmp11 };
                      const tmp38 = closure_6(BottomSheetScrollView, obj3);
                      cResult[32] = tmp11;
                      cResult[33] = tmp38;
                      tmp36 = tmp38;
                    } else {
                      tmp36 = cResult[33];
                    }
                    if (cResult[34] === tmp32) {
                      let tmp39;
                      if (cResult[35] === tmp36) {
                        tmp39 = cResult[36];
                      }
                      return tmp39;
                    }
                    const obj6 = { scrollable: true, header: first, startExpanded: true, children: items };
                    items = [tmp32, tmp36];
                    const tmp41 = closure_7(tmp(tmp2[21]).ActionSheet, obj6);
                    cResult[34] = tmp32;
                    cResult[35] = tmp36;
                    cResult[36] = tmp41;
                    tmp39 = tmp41;
                  }
                }
                if (num14 > 0) {
                  const obj7 = { children: closure_6(tmp(tmp2[17]).SegmentedControl, obj8) };
                  obj8 = { state: segmentedControlState };
                  tmp33 = closure_6(closure_5, obj7);
                } else {
                  tmp33 = null;
                }
                cResult[28] = segmentedControlState;
                cResult[29] = num14 > 0;
                cResult[30] = arr5.length > 0;
                cResult[31] = tmp33;
                tmp32 = tmp33;
              }
              const obj9 = { pageWidth: 0, defaultIndex: first1, onSetActiveIndex: tmp10, items: tmp28 };
              cResult[25] = first1;
              cResult[26] = tmp28;
              cResult[27] = obj9;
              tmp30 = obj9;
            }
            const items1 = [tmp20];
            if (num14 > 0) {
              let tmp22;
              const _Symbol2 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(tmp2[11]).intl;
                const stringResult1 = intl3.string(tmp(tmp2[11]).t.PHjkRE);
                cResult[21] = stringResult1;
                tmp22 = stringResult1;
              } else {
                tmp22 = cResult[21];
              }
              items1.push(tmp22);
            }
            if (arr5.length > 0) {
              let tmp25;
              const _Symbol3 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = tmp(tmp2[11]).intl;
                const stringResult2 = intl4.string(tmp(tmp2[11]).t.y3ZnnU);
                cResult[22] = stringResult2;
                tmp25 = stringResult2;
              } else {
                tmp25 = cResult[22];
              }
              items1.push(tmp25);
            }
            cResult[18] = num14 > 0;
            cResult[19] = arr5.length > 0;
            cResult[20] = items1;
            arr7 = items1;
          }
        }
        if (cResult[15] !== excludedApplications) {
          class U {
            constructor(arg0) {
              return !excludedApplications.has(arg0);
            }
          }
          cResult[15] = excludedApplications;
          cResult[16] = U;
        } else {
          class U {
            constructor(arg0) {
              return !excludedApplications.has(arg0);
            }
          }
        }
        if (gameApplicationIds == null) {
          class U {
            constructor(arg0) {
              return !excludedApplications.has(arg0);
            }
          }
        }
        const found1 = gameApplicationIds.filter(U);
        if (null != onCompleteIdentityApplication) {
          class U {
            constructor(arg0) {
              return !excludedApplications.has(arg0);
            }
          }
        } else {
          class U {
            constructor(arg0) {
              return !excludedApplications.has(arg0);
            }
          }
        }
        cResult[11] = excludedApplications;
        cResult[12] = gameApplicationIds;
        cResult[13] = onCompleteIdentityApplication;
        cResult[14] = tmp17;
        arr5 = tmp17;
      }
    }
  }
  if (cResult[6] !== excludedConnections) {
    class U {
      constructor(arg0) {
        return !excludedApplications.has(arg0);
      }
    }
    cResult[6] = excludedConnections;
    cResult[7] = tmp13;
  } else {
    class U {
      constructor(arg0) {
        return !excludedApplications.has(arg0);
      }
    }
  }
  if (cResult[8] === addConnection) {
    class U {
      constructor(arg0) {
        return !excludedApplications.has(arg0);
      }
    }
    const found2 = platforms.filter(tmp13);
    const mapped2 = found2.map(fn);
    cResult[1] = addConnection;
    cResult[2] = excludedConnections;
    cResult[3] = platforms;
    cResult[4] = tmp4;
    cResult[5] = mapped2;
    tmp11 = mapped2;
  }
  fn = function _(icon) {
    const makeSource = addConnection(excludedApplications[13]).makeSource;
    addConnection(excludedApplications[13]);
    let obj = addConnection(excludedApplications[14]);
    icon = icon.icon;
    const source = makeSource(obj.isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    const obj2 = {
      icon: closure_1_6(addConnection(excludedApplications[7]).Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        addConnection(icon.type);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    };
    const TableRow = addConnection(excludedApplications[8]).TableRow;
    return closure_1_6(TableRow, obj2, "row-" + icon.type);
  };
  cResult[8] = addConnection;
  cResult[9] = tmp4;
  cResult[10] = fn;
}) : ((arg0) => {
  let SafeAreaPaddingView;
  let first;
  let gameApplicationIds;
  let intl;
  let items1;
  let mapped2;
  let obj5;
  let obj7;
  let onCompleteIdentityApplication;
  let tmp16;
  let tmp2Result;
  let tmp7;
  ({ addConnection: require, excludedConnections: importDefault, excludedApplications: dependencyMap, integrations, onCompleteApplication: _slicedToArray, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  let closure_5 = useThemeDefault();
  let obj = { title: intl.string(intl5.t.Sm0YG7) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl5.intl;
  const tmp4 = closure_6(BottomSheetTitleHeader, obj);
  [first, tmp7] = onCompleteIdentityApplication.useState(0);
  let found;
  if (integrations != null) {
    found = integrations.filter((application) => {
      application = application.application;
      let prop;
      if (application != null) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = application.application;
        let id;
        const has = dependencyMap.has;
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !has(id);
      }
      return tmp2;
    });
  }
  const tmp3Result = ConnectionsHooks;
  const platforms = tmp3Result.usePlatforms();
  const found1 = platforms.filter((type) => !importDefault.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    const makeSource = AvatarUtils.makeSource;
    AvatarUtils;
    let obj = shared;
    icon = icon.icon;
    const source = makeSource(obj.isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    const obj2 = {
      icon: closure_1_6(native.Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        require(icon.type);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }
    };
    const TableRow = TableRow2.TableRow;
    return closure_1_6(TableRow, obj2, "row-" + icon.type);
  });
  if (found != null) {
    mapped1 = found.map((application) => {
      let Avatar;
      let description;
      let obj2;
      application = application.application;
      let tmp = null;
      if (null != application) {
        let obj = {
          icon: closure_1_6(Avatar, obj2),
          label: application.name,
          subLabel: description,
          onPress() {
              _slicedToArray(application.id);
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
            }
        };
        const TableRow = TableRow2.TableRow;
        obj2 = { user: application.bot, size: native.AvatarSizes.XSMALL, guildId: "r" };
        Avatar = native.Avatar;
        description = undefined;
        if ("" !== application.description) {
          description = application.description;
        }
        const _HermesInternal = HermesInternal;
        tmp = closure_1_6(TableRow, obj, "row-" + application.id);
      }
      return tmp;
    });
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((item) => !dependencyMap.has(item));
  if (null != onCompleteIdentityApplication) {
    mapped2 = found2.map((applicationId) => {
      let closure_0 = applicationId;
      let obj = {
        applicationId,
        onPress() {
          onCompleteIdentityApplication(applicationId);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        }
      };
      return closure_1_6(closure_1_8, obj, "row-identity-" + applicationId);
    });
  } else {
    mapped2 = [];
  }
  let num;
  if (mapped1 != null) {
    num = mapped1.length;
  }
  if (num == null) {
    num = 0;
  }
  const tmp12 = mapped2.length > 0;
  const intl2 = intl5.intl;
  const items = [intl2.string(intl5.t["3fe7U5"])];
  if (num > 0) {
    const push = items.push;
    const intl3 = intl5.intl;
    push(intl3.string(intl5.t.PHjkRE));
  }
  if (tmp12) {
    const push2 = items.push;
    const intl4 = intl5.intl;
    push2(intl4.string(intl5.t.y3ZnnU));
  }
  const tmp3Result2 = SegmentedControlState;
  let obj2 = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp7, items: items.map((id) => ({ id, label: id, page: null })) };
  const segmentedControlState = tmp3Result2.useSegmentedControlState(obj2);
  if (1 === first) {
    if (num > 0) {
      mapped2 = mapped1;
    }
    tmp16 = mapped2;
  } else {
    tmp16 = mapped;
    if (2 === first) {
      tmp16 = mapped2;
    }
  }
  const obj3 = { scrollable: true, header: tmp4, startExpanded: true, children: items1 };
  const ActionSheet = ActionSheet2.ActionSheet;
  if (num > 0) {
    const obj4 = { children: closure_6(SegmentedControl.SegmentedControl, obj5) };
    obj5 = { state: segmentedControlState };
    tmp2Result = closure_6(closure_5, obj4);
  } else {
    tmp2Result = null;
  }
  items1 = [tmp2Result, ];
  const obj6 = { children: closure_6(SafeAreaPaddingView, obj7) };
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  obj7 = { bottom: true, children: closure_6(TableRowGroup.TableRowGroup, { hasIcons: true, children: tmp16 }) };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items1[1] = closure_6(BottomSheetScrollView, obj6);
  return closure_7(ActionSheet, obj3);
});
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default tmp3;