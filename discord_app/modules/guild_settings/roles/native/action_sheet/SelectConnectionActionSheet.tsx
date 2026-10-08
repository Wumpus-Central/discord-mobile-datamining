// === Module 18142: SelectConnectionActionSheet ===

// Module 18142 (SelectConnectionActionSheet)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useThemeDefault from "useTheme" /* 4991 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import TableRow from "TableRow" /* 6184 */;
import TableRowGroup from "TableRowGroup" /* 6267 */;
import BottomSheetModal from "BottomSheetModal" /* 6298 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6803 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6828 */;
import ActionSheet from "ActionSheet" /* 6885 */;
import ConnectionsHooks from "ConnectionsHooks" /* 7213 */;
import SegmentedControlState from "SegmentedControlState" /* 8505 */;
import SegmentedControl from "SegmentedControl" /* 8752 */;
import useGetOrFetchApplicationBatched from "useGetOrFetchApplicationBatched" /* 11310 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function IdentityApplicationRow(arg0) {
  const cResult = c.c(7);
  ({ onPress, applicationId } = arg0);
  const getOrFetchApplicationBatched = useGetOrFetchApplicationBatched.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    if (cResult[0] !== bot) {
      let tmp6 = null;
      if (null != bot) {
        const obj3 = { user: bot, size: native.AvatarSizes.XSMALL, guildId: "r" };
        tmp6 = timestampProducer(native.Avatar, obj3);
      }
      cResult[0] = bot;
      cResult[1] = tmp6;
      let tmp5 = tmp6;
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
          if (cResult[5] === description) {
            let tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
    }
    const obj4 = { icon: tmp5, label: getOrFetchApplicationBatched.name, subLabel: description, onPress };
    const tmp11 = timestampProducer(TableRow.TableRow, obj4);
    cResult[2] = getOrFetchApplicationBatched.name;
    cResult[3] = onPress;
    cResult[4] = tmp5;
    cResult[5] = description;
    cResult[6] = tmp11;
    tmp9 = tmp11;
  }
}) : (function IdentityApplicationRow(arg0) {
  ({ applicationId, onPress } = arg0);
  const getOrFetchApplicationBatched = useGetOrFetchApplicationBatched.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    let tmp6Result = null;
    if (null != bot) {
      const obj2 = { user: bot, size: native.AvatarSizes.XSMALL, guildId: "r" };
      tmp6Result = timestampProducer(native.Avatar, obj2);
    }
    const obj3 = { icon: tmp6Result, label: getOrFetchApplicationBatched.name, subLabel: null, onPress: null };
    let description;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    obj3.subLabel = description;
    obj3.onPress = onPress;
    return timestampProducer(TableRow.TableRow, obj3);
  }
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SelectConnectionActionSheet(addConnection) {
  const cResult = addConnection(excludedApplications[5]).c(37);
  addConnection = addConnection.addConnection;
  const excludedConnections = addConnection.excludedConnections;
  excludedApplications = addConnection.excludedApplications;
  ({ integrations, onCompleteApplication: _slicedToArray, gameApplicationIds, onCompleteIdentityApplication } = addConnection);
  const tmp4 = excludedConnections(excludedApplications[9])();
  closure_5 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { title: null };
    const intl = tmp(tmp2[11]).intl;
    obj2.title = intl.string(tmp(tmp2[11]).t.Sm0YG7);
    const tmp7 = closure_6(tmp(tmp2[10]).BottomSheetTitleHeader, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  const tmp8 = _slicedToArray(onCompleteIdentityApplication.useState(0), 2);
  const first1 = tmp8[0];
  if (integrations != null) {
    const found = integrations.filter((application) => {
      application = application.application;
      let prop;
      if (application != null) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = application.application;
        let id;
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !excludedApplications.has(id);
      }
      return tmp2;
    });
  }
  let obj = addConnection(excludedApplications[5]);
  const platforms = addConnection(excludedApplications[12]).usePlatforms();
  if (cResult[1] === addConnection) {
    if (cResult[2] === excludedConnections) {
      if (cResult[3] === platforms) {
        if (cResult[4] === tmp4) {
          let tmp10 = cResult[5];
          if (found != null) {
            const mapped = found.map((application) => {
              application = application.application;
              let tmp = null;
              if (null != application) {
                const obj = { icon: null, label: null, subLabel: null, onPress: null };
                const obj2 = { user: application.bot, size: addConnection(excludedApplications[7]).AvatarSizes.XSMALL, guildId: "r" };
                obj.icon = closure_1_6(addConnection(excludedApplications[7]).Avatar, obj2);
                obj.label = application.name;
                let description;
                if ("" !== application.description) {
                  description = application.description;
                }
                obj.subLabel = description;
                obj.onPress = function onPress() {
                  _slicedToArray(application.id);
                  ActionSheetActionCreatorsDefault.hideActionSheet();
                };
                const _HermesInternal = HermesInternal;
                tmp = closure_1_6(addConnection(excludedApplications[8]).TableRow, obj, "row-" + application.id);
              }
              return tmp;
            });
          }
          if (cResult[11] === excludedApplications) {
            if (cResult[12] === gameApplicationIds) {
              if (cResult[13] === onCompleteIdentityApplication) {
                let arr5 = cResult[14];
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
                  let tmp20 = stringResult;
                } else {
                  tmp20 = cResult[17];
                }
                if (cResult[18] === num14 > 0) {
                  if (cResult[19] === tmp19) {
                    let arr7 = cResult[20];
                  }
                  if (cResult[23] !== arr7) {
                    const mapped1 = arr7.map((id) => ({ id, label: id, page: null }));
                    cResult[23] = arr7;
                    cResult[24] = mapped1;
                    let tmp28 = mapped1;
                  } else {
                    tmp28 = cResult[24];
                  }
                  if (cResult[25] === first1) {
                    if (cResult[26] === tmp28) {
                      let tmp30 = cResult[27];
                    }
                    const segmentedControlState = tmp(tmp2[16]).useSegmentedControlState(tmp30);
                    if (1 === first1) {
                      if (tmp18) {
                        arr5 = mapped;
                      }
                      tmp10 = arr5;
                    } else if (2 === first1) {
                      tmp10 = arr5;
                    }
                    if (cResult[28] === segmentedControlState) {
                      if (cResult[29] === tmp18) {
                        if (cResult[30] === tmp19) {
                          let tmp32 = cResult[31];
                        }
                        if (cResult[32] !== tmp10) {
                          const obj3 = { children: null };
                          const obj4 = { bottom: true, children: null };
                          const obj5 = { hasIcons: true, children: tmp10 };
                          obj4.children = closure_6(tmp(tmp2[20]).TableRowGroup, obj5);
                          obj3.children = closure_6(tmp(tmp2[19]).SafeAreaPaddingView, obj4);
                          const tmp38 = closure_6(tmp(tmp2[18]).BottomSheetScrollView, obj3);
                          cResult[32] = tmp10;
                          cResult[33] = tmp38;
                          let tmp36 = tmp38;
                        } else {
                          tmp36 = cResult[33];
                        }
                        if (cResult[34] === tmp32) {
                          if (cResult[35] === tmp36) {
                            let tmp39 = cResult[36];
                          }
                          return tmp39;
                        }
                        const obj6 = { scrollable: true, header: first, startExpanded: true, children: null };
                        const items = [tmp32, tmp36];
                        obj6.children = items;
                        const tmp41 = closure_7(tmp(tmp2[21]).ActionSheet, obj6);
                        cResult[34] = tmp32;
                        cResult[35] = tmp36;
                        cResult[36] = tmp41;
                        tmp39 = tmp41;
                      }
                    }
                    if (tmp18) {
                      const obj7 = { children: null };
                      const obj8 = { state: segmentedControlState };
                      obj7.children = closure_6(tmp(tmp2[17]).SegmentedControl, obj8);
                      let tmp33 = closure_6(closure_5, obj7);
                    } else {
                      tmp33 = null;
                    }
                    cResult[28] = segmentedControlState;
                    cResult[29] = tmp18;
                    cResult[30] = tmp19;
                    cResult[31] = tmp33;
                    tmp32 = tmp33;
                    const tmpResult2 = tmp(tmp2[16]);
                  }
                  const obj9 = { pageWidth: 0, defaultIndex: first1, onSetActiveIndex: tmp8[1], items: tmp28 };
                  cResult[25] = first1;
                  cResult[26] = tmp28;
                  cResult[27] = obj9;
                  tmp30 = obj9;
                }
                const items1 = [tmp20];
                if (num14 <= 0) {
                  if (!tmp19) {
                    cResult[18] = tmp18;
                    cResult[19] = tmp19;
                    cResult[20] = items1;
                    arr7 = items1;
                  } else {
                    const _Symbol3 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl4 = tmp(tmp2[11]).intl;
                      const stringResult1 = intl4.string(tmp(tmp2[11]).t.y3ZnnU);
                      cResult[22] = stringResult1;
                      let tmp25 = stringResult1;
                    } else {
                      tmp25 = cResult[22];
                    }
                    items1.push(tmp25);
                  }
                } else {
                  const _Symbol2 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl3 = tmp(tmp2[11]).intl;
                    const stringResult2 = intl3.string(tmp(tmp2[11]).t.PHjkRE);
                    cResult[21] = stringResult2;
                    let tmp22 = stringResult2;
                  } else {
                    tmp22 = cResult[21];
                  }
                  items1.push(tmp22);
                }
              }
            }
          }
          if (cResult[15] !== excludedApplications) {
            class U {
              constructor(arg0) {
                return !excludedApplications.has(addConnection);
              }
            }
            cResult[15] = excludedApplications;
            cResult[16] = U;
          } else {
            class U {
              constructor(arg0) {
                return !excludedApplications.has(addConnection);
              }
            }
          }
          if (gameApplicationIds == null) {
            class U {
              constructor(arg0) {
                return !excludedApplications.has(addConnection);
              }
            }
          }
          const found1 = gameApplicationIds.filter(U);
          if (null != onCompleteIdentityApplication) {
            class U {
              constructor(arg0) {
                return !excludedApplications.has(addConnection);
              }
            }
          } else {
            class U {
              constructor(arg0) {
                return !excludedApplications.has(addConnection);
              }
            }
          }
          cResult[11] = excludedApplications;
          cResult[12] = gameApplicationIds;
          cResult[13] = onCompleteIdentityApplication;
          cResult[14] = tmp16;
        }
      }
    }
  }
  if (cResult[6] !== excludedConnections) {
    class U {
      constructor(arg0) {
        return !excludedApplications.has(addConnection);
      }
    }
    cResult[6] = excludedConnections;
    cResult[7] = tmp11;
    let found2 = tmp11;
  } else {
    class U {
      constructor(arg0) {
        return !excludedApplications.has(addConnection);
      }
    }
  }
  if (cResult[8] === addConnection) {
    class U {
      constructor(arg0) {
        return !excludedApplications.has(addConnection);
      }
    }
    found2 = platforms.filter(found2);
    const mapped2 = found2.map(R);
    cResult[1] = addConnection;
    cResult[2] = excludedConnections;
    cResult[3] = platforms;
    cResult[4] = tmp4;
    cResult[5] = mapped2;
  }
  class R {
    constructor(arg0) {
      closure_0 = addConnection;
      tmp = addConnection;
      tmp2 = excludedApplications;
      obj = addConnection(excludedApplications[13]);
      obj2 = addConnection(excludedApplications[14]);
      icon = addConnection.icon;
      source = obj.makeSource(obj2.isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
      obj1 = {
        icon: closure_1_6(tmp(tmp2[7]).Icon, { source, disableColor: true }),
        label: addConnection.name,
        onPress() {
              addConnection(icon.type);
              ActionSheetActionCreatorsDefault.hideActionSheet();
            }
      };
      return closure_1_6(tmp(tmp2[8]).TableRow, obj1, "row-" + addConnection.type);
    }
  }
  cResult[8] = addConnection;
  cResult[9] = tmp4;
  cResult[10] = R;
  const tmpResult = addConnection(excludedApplications[12]);
}) : (function SelectConnectionActionSheet(arg0) {
  ({ addConnection: require, excludedConnections: importDefault, excludedApplications: dependencyMap, integrations, onCompleteApplication: _slicedToArray, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  closure_5 = useThemeDefault();
  let obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.Sm0YG7);
  const tmp5 = _slicedToArray(onCompleteIdentityApplication.useState(0), 2);
  const first = tmp5[0];
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
        if (application2 != null) {
          id = application2.id;
        }
        tmp2 = !set2.has(id);
      }
      return tmp2;
    });
  }
  const tmp4 = closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  const platforms = ConnectionsHooks.usePlatforms();
  const found1 = platforms.filter((type) => !set.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    const obj = require("AvatarUtils");
    icon = icon.icon;
    const source = obj.makeSource(require("shared").isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    const obj2 = require("shared");
    return closure_1_6(require("TableRow").TableRow, {
      icon: closure_1_6(require("native").Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        require(icon.type);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    }, "row-" + icon.type);
  });
  if (found != null) {
    mapped1 = found.map((application) => {
      application = application.application;
      let tmp = null;
      if (null != application) {
        const obj = { icon: null, label: null, subLabel: null, onPress: null };
        const obj2 = { user: application.bot, size: require("native").AvatarSizes.XSMALL, guildId: "r" };
        obj.icon = closure_1_6(require("native").Avatar, obj2);
        obj.label = application.name;
        let description;
        if ("" !== application.description) {
          description = application.description;
        }
        obj.subLabel = description;
        obj.onPress = function onPress() {
          _slicedToArray(application.id);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        const _HermesInternal = HermesInternal;
        tmp = closure_1_6(require("TableRow").TableRow, obj, "row-" + application.id);
      }
      return tmp;
    });
  }
  if (gameApplicationIds == null) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((item) => !set2.has(item));
  if (null != onCompleteIdentityApplication) {
    let mapped2 = found2.map((applicationId) => {
      closure_0 = applicationId;
      return closure_1_6(closure_1_8, {
        applicationId,
        onPress() {
          onCompleteIdentityApplication(closure_0);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        }
      }, "row-identity-" + applicationId);
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
  const intl2 = util.intl;
  const items = [intl2.string(util.t["3fe7U5"])];
  if (num > 0) {
    const intl3 = util.intl;
    items.push(intl3.string(util.t.PHjkRE));
  }
  if (tmp11) {
    const intl4 = util.intl;
    items.push(intl4.string(util.t.y3ZnnU));
  }
  tmp11 = mapped2.length > 0;
  const tmp3Result = ConnectionsHooks;
  const tmp3Result2 = SegmentedControlState;
  const segmentedControlState = tmp3Result2.useSegmentedControlState({ pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp5[1], items: items.map((id) => ({ id, label: id, page: null })) });
  if (1 === first) {
    if (tmp10) {
      mapped2 = mapped1;
    }
    let tmp15 = mapped2;
  } else {
    tmp15 = mapped;
    if (2 === first) {
      tmp15 = mapped2;
    }
  }
  const obj3 = { scrollable: true, header: tmp4, startExpanded: true, children: null };
  if (num > 0) {
    const obj4 = { children: null };
    const obj5 = { state: segmentedControlState };
    obj4.children = closure_6(SegmentedControl.SegmentedControl, obj5);
    let tmp2Result = closure_6(closure_5, obj4);
  } else {
    tmp2Result = null;
  }
  const items1 = [tmp2Result, ];
  const obj6 = { children: null };
  let obj2 = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp5[1], items: items.map((id) => ({ id, label: id, page: null })) };
  obj6.children = closure_6(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, children: closure_6(TableRowGroup.TableRowGroup, { hasIcons: true, children: tmp15 }) });
  items1[1] = closure_6(BottomSheetModal.BottomSheetScrollView, obj6);
  obj3.children = items1;
  return closure_7(ActionSheet.ActionSheet, obj3);
});