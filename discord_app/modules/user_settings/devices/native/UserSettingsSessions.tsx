// === Module 14772: UserSettingsSessions ===

// Module 14772 (UserSettingsSessions)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import AssetRegistryDefault from "AssetRegistry" /* 4815 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 4816 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6455 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6494 */;
import ScreenIcon from "ScreenIcon" /* 8577 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9761 */;
import AuthSessionsActionCreators from "AuthSessionsActionCreators" /* 14773 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14774 */;
import VrHeadsetIcon from "VrHeadsetIcon" /* 14775 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles from "TextStyles" /* 5922 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation, session;

let Fonts;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function getOsDetails(text) {
  let intl;
  let trimmed;
  if (text != null) {
    const str = text.toLowerCase();
    trimmed = str.trim();
  }
  if (null !== trimmed) {
    if (undefined !== trimmed) {
      if ("" !== trimmed) {
        if ("ios" !== trimmed) {
          if ("android" !== trimmed) {
            if ("horizon os" === trimmed) {
              const obj2 = { text, iconSource: AssetRegistryDefault3, IconComponent: VrHeadsetIcon.VrHeadsetIcon };
              return obj2;
            } else {
              const obj = { text, iconSource: AssetRegistryDefault4, IconComponent: ScreenIcon.ScreenIcon };
              return obj;
            }
          }
        }
        const obj3 = { text, iconSource: AssetRegistryDefault3, IconComponent: MobilePhoneIcon.MobilePhoneIcon };
        return obj3;
      }
    }
  }
  const obj4 = { text: intl.string(intl6.t.cDHCNY), iconSource: AssetRegistryDefault4, IconComponent: ScreenIcon.ScreenIcon };
  intl = intl6.intl;
  return obj4;
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ UserSettingsSections: c9, Fonts } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { description: { paddingHorizontal: 16, paddingTop: 8, marginBottom: 8 }, detailsText: obj2, container: { display: "flex", flex: 1 }, loading: { marginTop: 16 }, sessionInfo: { display: "flex" }, sessionInfoRow: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, sessionInfoRowSpacing: { marginHorizontal: 4 }, logoutButton: obj3, list: { paddingHorizontal: 16 } };
obj2 = { fontWeight: "500" };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
obj3 = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let container;
  let currentSession;
  let currentUser;
  let description;
  let first;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let items4;
  let otherSessions;
  let tmp12;
  let tmp13;
  let tmp36;
  let tmp47;
  let tmp49;
  let tmp6;
  let tmp7;
  let obj = otherSessions(576);
  const cResult = obj.c(31);
  const tmp4 = closure_13();
  const obj2 = otherSessions(14607);
  let authSessions = obj2.useAuthSessions();
  ({ currentSession, otherSessions } = authSessions);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = otherSessions(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  [first, closure_1] = react.useState(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      let closure_0;
      let obj = otherSessions(dependencyMap[13]);
      const authSessions = obj.fetchAuthSessions();
      const timeout = setTimeout(() => closure_1_1(true), 500);
      return () => {
        clearTimeout(closure_0);
        const obj = AuthSessionsActionCreators;
        obj.clearAuthSessions();
      };
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    tmp13 = items1;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const effect = react.useEffect(tmp12, tmp13);
  if (null == currentSession) {
    tmp36 = null;
    if (first) {
      let tmp39;
      let tmp43;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp42 = closure_10(closure_5, {});
        cResult[4] = tmp42;
        tmp39 = tmp42;
      } else {
        tmp39 = cResult[4];
      }
      if (cResult[5] !== tmp4.loading) {
        const obj3 = { style: tmp4.loading, children: tmp39 };
        const tmp46 = closure_10(closure_6, obj3);
        cResult[5] = tmp4.loading;
        cResult[6] = tmp46;
        tmp43 = tmp46;
      } else {
        tmp43 = cResult[6];
      }
      tmp36 = tmp43;
    }
  } else {
    let tmp15;
    let tmp17;
    let tmp21;
    let tmp28;
    const _Symbol2 = Symbol;
    const list = tmp4.list;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = otherSessions(1126).intl;
      const stringResult = intl.string(otherSessions(1126).t.LLS19o);
      cResult[7] = stringResult;
      tmp15 = stringResult;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] !== currentSession) {
      let tmp18 = null;
      if (null != currentSession) {
        const obj5 = { session: currentSession, current: true };
        tmp18 = closure_10(closure_15, obj5);
      }
      cResult[8] = currentSession;
      cResult[9] = tmp18;
      tmp17 = tmp18;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] !== tmp17) {
      const obj6 = { title: tmp15, hasIcons: true, children: tmp17 };
      const tmp23 = closure_10(otherSessions(6081).TableRowGroup, obj6);
      cResult[10] = tmp17;
      cResult[11] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[11];
    }
    let mfaEnabled;
    const tmp24 = cResult[12];
    if (stateFromStores != null) {
      mfaEnabled = stateFromStores.mfaEnabled;
    }
    if (tmp24 === mfaEnabled) {
      let tmp26;
      let tmp33;
      if (cResult[13] === otherSessions) {
        tmp26 = cResult[14];
      }
      if (cResult[15] !== otherSessions) {
        let tmp34 = null;
        if (otherSessions.length > 0) {
          const obj7 = {
            start: true,
            end: true,
            variant: "danger",
            label: intl3.string(otherSessions(1126).t.cLmmeY),
            subLabel: intl4.string(otherSessions(1126).t.OTXyaf),
            onPress() {
                      const obj = AuthSessionsActionCreators;
                      return obj.logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
                    }
          };
          const TableRow = otherSessions(6000).TableRow;
          intl3 = otherSessions(1126).intl;
          intl4 = otherSessions(1126).intl;
          tmp34 = closure_10(TableRow, obj7);
        }
        cResult[15] = otherSessions;
        cResult[16] = tmp34;
        tmp33 = tmp34;
      } else {
        tmp33 = cResult[16];
      }
      if (cResult[17] === tmp4.list) {
        if (cResult[18] === tmp21) {
          if (cResult[19] === tmp26) {
            if (cResult[20] === tmp33) {
              tmp36 = cResult[21];
            }
          }
        }
      }
      const obj8 = { spacing: 24, style: list, children: items2 };
      items2 = [tmp21, tmp26, tmp33];
      const tmp38 = closure_11(otherSessions(5600).Stack, obj8);
      cResult[17] = tmp4.list;
      cResult[18] = tmp21;
      cResult[19] = tmp26;
      cResult[20] = tmp33;
      cResult[21] = tmp38;
      tmp36 = tmp38;
    }
    if (otherSessions.length > 0) {
      const obj9 = { title: intl2.string(otherSessions(1126).t.xx1MWc), hasIcons: true, children: items3 };
      const TableRowGroup = otherSessions(6081).TableRowGroup;
      intl2 = otherSessions(1126).intl;
      items3 = [
        otherSessions.map((session) => {
              const obj = { session };
              return closure_1_10(closure_1_15, obj, session.id_hash);
            }),
        closure_10(closure_16, {})
      ];
      tmp28 = closure_11(TableRowGroup, obj9);
    } else {
      let mfaEnabled1;
      if (stateFromStores != null) {
        mfaEnabled1 = stateFromStores.mfaEnabled;
      }
      tmp28 = null;
    }
    let mfaEnabled2;
    if (stateFromStores != null) {
      mfaEnabled2 = stateFromStores.mfaEnabled;
    }
    cResult[12] = mfaEnabled2;
    cResult[13] = otherSessions;
    cResult[14] = tmp28;
    tmp26 = tmp28;
  }
  ({ container, description } = tmp4);
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = otherSessions(1126).intl;
    const stringResult1 = intl5.string(otherSessions(1126).t.zZp618);
    cResult[22] = stringResult1;
    tmp47 = stringResult1;
  } else {
    tmp47 = cResult[22];
  }
  if (cResult[23] !== tmp4.description) {
    const obj10 = { variant: "text-sm/medium", style: description, children: tmp47 };
    const tmp51 = closure_10(otherSessions(4892).Text, obj10);
    cResult[23] = tmp4.description;
    cResult[24] = tmp51;
    tmp49 = tmp51;
  } else {
    tmp49 = cResult[24];
  }
  if (cResult[25] === tmp36) {
    let tmp52;
    if (cResult[26] === tmp49) {
      tmp52 = cResult[27];
    }
    if (cResult[28] === tmp4.container) {
      let tmp54;
      if (cResult[29] === tmp52) {
        tmp54 = cResult[30];
      }
      return tmp54;
    }
    const obj11 = { style: container, children: tmp52 };
    const tmp57 = closure_10(closure_7, obj11);
    cResult[28] = tmp4.container;
    cResult[29] = tmp52;
    cResult[30] = tmp57;
    tmp54 = tmp57;
  }
  const obj12 = { bottom: true, children: items4 };
  items4 = [tmp49, tmp36];
  const tmp53 = closure_11(otherSessions(6626).SafeAreaPaddingView, obj12);
  cResult[25] = tmp36;
  cResult[26] = tmp49;
  cResult[27] = tmp53;
  tmp52 = tmp53;
}) : (() => {
  let SafeAreaPaddingView;
  let currentSession;
  let currentUser;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let items3;
  let obj10;
  let otherSessions;
  let tmp20Result2;
  let tmp21Result;
  let tmp7;
  const tmp = closure_13();
  let obj = otherSessions(14607);
  let authSessions = obj.useAuthSessions();
  ({ currentSession, otherSessions } = authSessions);
  const items = [UserStore];
  const obj2 = otherSessions(504);
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  [tmp7, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    let closure_0;
    let obj = otherSessions(dependencyMap[13]);
    const authSessions = obj.fetchAuthSessions();
    const timeout = setTimeout(() => closure_1_1(true), 500);
    return () => {
      clearTimeout(closure_0);
      const obj = AuthSessionsActionCreators;
      obj.clearAuthSessions();
    };
  }, []);
  if (null == currentSession) {
    let tmp16 = null;
    if (tmp7) {
      const obj3 = { style: tmp.loading, children: closure_10(closure_5, {}) };
      tmp16 = closure_10(closure_6, obj3);
    }
    tmp20Result2 = tmp16;
  } else {
    let tmp20Result;
    const obj4 = { spacing: 24, style: tmp.list, children: items1 };
    const Stack = otherSessions(5600).Stack;
    const obj5 = { title: intl5.string(otherSessions(1126).t.LLS19o), hasIcons: true, children: tmp21Result };
    const TableRowGroup2 = otherSessions(6081).TableRowGroup;
    intl5 = otherSessions(1126).intl;
    tmp21Result = null;
    if (null != currentSession) {
      const obj6 = { session: currentSession, current: true };
      tmp21Result = closure_10(closure_15, obj6);
    }
    items1 = [closure_10(TableRowGroup2, obj5), , ];
    if (otherSessions.length > 0) {
      const obj7 = { title: intl.string(otherSessions(1126).t.xx1MWc), hasIcons: true, children: items2 };
      const TableRowGroup = otherSessions(6081).TableRowGroup;
      intl = otherSessions(1126).intl;
      items2 = [
        otherSessions.map((session) => {
              const obj = { session };
              return closure_1_10(closure_1_15, obj, session.id_hash);
            }),
        closure_10(closure_16, {})
      ];
      tmp20Result = closure_11(TableRowGroup, obj7);
    } else {
      let mfaEnabled;
      if (stateFromStores != null) {
        mfaEnabled = stateFromStores.mfaEnabled;
      }
      tmp20Result = null;
    }
    items1[1] = tmp20Result;
    let tmp21Result2 = null;
    if (otherSessions.length > 0) {
      const obj8 = {
        start: true,
        end: true,
        variant: "danger",
        label: intl2.string(otherSessions(1126).t.cLmmeY),
        subLabel: intl3.string(otherSessions(1126).t.OTXyaf),
        onPress() {
              const obj = AuthSessionsActionCreators;
              return obj.logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
            }
      };
      const TableRow = otherSessions(6000).TableRow;
      intl2 = otherSessions(1126).intl;
      intl3 = otherSessions(1126).intl;
      tmp21Result2 = closure_10(TableRow, obj8);
    }
    items1[2] = tmp21Result2;
    tmp20Result2 = closure_11(Stack, obj4);
  }
  const obj9 = { style: tmp.container, children: closure_11(SafeAreaPaddingView, obj10) };
  obj10 = { bottom: true, children: items3 };
  SafeAreaPaddingView = otherSessions(6626).SafeAreaPaddingView;
  const obj11 = { variant: "text-sm/medium", style: tmp.description, children: intl4.string(otherSessions(1126).t.zZp618) };
  const Text = otherSessions(4892).Text;
  intl4 = otherSessions(1126).intl;
  items3 = [closure_10(Text, obj11), tmp20Result2];
  return closure_10(closure_7, obj9);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = authStore(closure_14, {});
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => authStore(closure_14, {}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((session) => {
  let Icon;
  let IconComponent;
  let arr;
  let client_info6;
  let iconSource;
  let intl;
  let items;
  let items1;
  let items2;
  let obj16;
  let obj6;
  let obj8;
  let platform;
  let tmp10;
  let tmp11;
  let tmp9;
  let obj = session(576);
  const cResult = obj.c(47);
  session = session.session;
  const current = session.current;
  const tmp4 = closure_13();
  const client_info = session.client_info;
  let _location;
  if (client_info != null) {
    _location = client_info.location;
  }
  if (_location == null) {
    const client_info2 = session.client_info;
    let ip;
    if (client_info2 != null) {
      ip = client_info2.ip;
    }
    _location = ip;
  }
  const client_info3 = session.client_info;
  if (client_info3 != null) {
    platform = client_info3.platform;
  }
  if (cResult[0] === current) {
    if (cResult[1] === platform) {
      if (cResult[2] === session.approx_last_used_time) {
        const client_info4 = session.client_info;
        let os;
        const tmp7 = cResult[3];
        if (client_info4 != null) {
          os = client_info4.os;
        }
        if (tmp7 === os) {
          tmp9 = cResult[4];
          tmp10 = cResult[5];
          tmp11 = cResult[6];
          arr = cResult[7];
        }
        if (cResult[11] === current) {
          if (cResult[12] === session.id_hash) {
            let tmp20;
            let tmp24;
            if (cResult[13] === tmp4.logoutButton) {
              tmp20 = cResult[14];
            }
            if (cResult[15] !== arr[0]) {
              const obj2 = { variant: "text-md/semibold", children: arr[0] };
              const tmp26 = closure_10(session(4892).Text, obj2);
              cResult[15] = arr[0];
              cResult[16] = tmp26;
              tmp24 = tmp26;
            } else {
              tmp24 = cResult[16];
            }
            if (cResult[17] === tmp4.sessionInfoRowSpacing) {
              if (cResult[18] === arr[1]) {
                let tmp27;
                if (cResult[19] === arr.length) {
                  tmp27 = cResult[20];
                }
                if (cResult[21] === tmp4.sessionInfoRow) {
                  if (cResult[22] === tmp24) {
                    let tmp32;
                    if (cResult[23] === tmp27) {
                      tmp32 = cResult[24];
                    }
                    if (cResult[25] === tmp4.sessionInfo) {
                      let tmp36;
                      if (cResult[26] === tmp32) {
                        tmp36 = cResult[27];
                      }
                      if (cResult[28] === tmp9) {
                        let tmp40;
                        if (cResult[29] === tmp10) {
                          tmp40 = cResult[30];
                        }
                        if (cResult[31] === _location) {
                          if (cResult[32] === tmp4.detailsText) {
                            let tmp43;
                            if (cResult[33] === tmp4.sessionInfoRow) {
                              tmp43 = cResult[34];
                            }
                            if (cResult[35] === tmp11) {
                              if (cResult[36] === tmp4.detailsText) {
                                let tmp47;
                                if (cResult[37] === tmp4.sessionInfoRow) {
                                  tmp47 = cResult[38];
                                }
                                if (cResult[39] === tmp43) {
                                  let tmp51;
                                  if (cResult[40] === tmp47) {
                                    tmp51 = cResult[41];
                                  }
                                  if (cResult[42] === tmp20) {
                                    if (cResult[43] === tmp36) {
                                      if (cResult[44] === tmp51) {
                                        let tmp55;
                                        if (cResult[45] === tmp40) {
                                          tmp55 = cResult[46];
                                        }
                                        return tmp55;
                                      }
                                    }
                                  }
                                  const obj3 = { icon: tmp40, label: tmp36, subLabel: tmp51, trailing: tmp20 };
                                  const tmp57 = closure_10(session(6000).TableRow, obj3);
                                  cResult[42] = tmp20;
                                  cResult[43] = tmp36;
                                  cResult[44] = tmp51;
                                  cResult[45] = tmp40;
                                  cResult[46] = tmp57;
                                  tmp55 = tmp57;
                                }
                                const obj4 = { accessible: true, children: items };
                                items = [tmp43, tmp47];
                                const tmp54 = closure_11(closure_6, obj4);
                                cResult[39] = tmp43;
                                cResult[40] = tmp47;
                                cResult[41] = tmp54;
                                tmp51 = tmp54;
                              }
                            }
                            let tmp48 = null != tmp11;
                            if (tmp48) {
                              const obj5 = { style: tmp4.sessionInfoRow, children: closure_10(session(4892).Text, obj6) };
                              obj6 = { variant: "text-xs/medium", color: "text-subtle", style: tmp4.detailsText, children: tmp11 };
                              tmp48 = closure_10(closure_6, obj5);
                            }
                            cResult[35] = tmp11;
                            cResult[36] = tmp4.detailsText;
                            cResult[37] = tmp4.sessionInfoRow;
                            cResult[38] = tmp48;
                            tmp47 = tmp48;
                          }
                        }
                        let tmp44 = null != _location;
                        if (tmp44) {
                          const obj7 = { style: tmp4.sessionInfoRow, children: closure_10(session(4892).Text, obj8) };
                          obj8 = { variant: "text-xs/medium", color: "text-subtle", style: tmp4.detailsText, children: _location };
                          tmp44 = closure_10(closure_6, obj7);
                        }
                        cResult[31] = _location;
                        cResult[32] = tmp4.detailsText;
                        cResult[33] = tmp4.sessionInfoRow;
                        cResult[34] = tmp44;
                        tmp43 = tmp44;
                      }
                      const obj9 = { source: tmp10, IconComponent: tmp9 };
                      const tmp42 = closure_10(session(6000).TableRow.Icon, obj9);
                      cResult[28] = tmp9;
                      cResult[29] = tmp10;
                      cResult[30] = tmp42;
                      tmp40 = tmp42;
                    }
                    const obj10 = { style: tmp4.sessionInfo, accessible: true, children: tmp32 };
                    const tmp39 = closure_10(closure_6, obj10);
                    cResult[25] = tmp4.sessionInfo;
                    cResult[26] = tmp32;
                    cResult[27] = tmp39;
                    tmp36 = tmp39;
                  }
                }
                const obj11 = { style: tmp4.sessionInfoRow, children: items1 };
                items1 = [tmp24, tmp27];
                const tmp35 = closure_11(closure_6, obj11);
                cResult[21] = tmp4.sessionInfoRow;
                cResult[22] = tmp24;
                cResult[23] = tmp27;
                cResult[24] = tmp35;
                tmp32 = tmp35;
              }
            }
            let tmp28 = arr.length > 1;
            if (tmp28) {
              const obj12 = { children: items2 };
              const obj13 = { variant: "text-md/semibold", accessibilityLabel: ",", style: tmp4.sessionInfoRowSpacing, children: "\u00B7" };
              items2 = [closure_10(session(4892).Text, obj13), ];
              const obj14 = { variant: "text-md/semibold", children: arr[1] };
              items2[1] = closure_10(session(4892).Text, obj14);
              tmp28 = closure_11(closure_12, obj12);
            }
            cResult[17] = tmp4.sessionInfoRowSpacing;
            cResult[18] = arr[1];
            cResult[19] = arr.length;
            cResult[20] = tmp28;
            tmp27 = tmp28;
          }
        }
        let tmp21 = null;
        if (!current) {
          const obj15 = {
            accessibilityRole: "button",
            accessibilityLabel: intl.string(session(1126).t.E4MJNt),
            onPress() {
                      const obj = AuthSessionsActionCreators;
                      return obj.logOutSessions(session.id_hash);
                    },
            hitSlop: { top: 5, left: 5, bottom: 5, right: 5 },
            children: closure_10(Icon, obj16)
          };
          const PressableOpacity = tmp(5916).PressableOpacity;
          intl = tmp(1126).intl;
          obj16 = { style: tmp4.logoutButton, source: AssetRegistryDefault };
          Icon = tmp(1188).Icon;
          tmp21 = closure_10(PressableOpacity, obj15);
        }
        cResult[11] = current;
        cResult[12] = session.id_hash;
        cResult[13] = tmp4.logoutButton;
        cResult[14] = tmp21;
        tmp20 = tmp21;
      }
    }
  }
  const client_info5 = session.client_info;
  let os1;
  if (client_info5 != null) {
    os1 = client_info5.os;
  }
  ({ iconSource, IconComponent } = getOsDetails(os1));
  getOsDetails(os1);
  if (cResult[8] === current) {
    let tmp16;
    if (cResult[9] === session.approx_last_used_time) {
      tmp16 = cResult[10];
    }
    const items3 = [tmp15, platform];
    const found = items3.filter(tmp(1375).isNotNullish);
    cResult[0] = current;
    cResult[1] = platform;
    ({ approx_last_used_time: tmp3[2], client_info: client_info6 } = session);
    let os2;
    if (client_info6 != null) {
      os2 = client_info6.os;
    }
    cResult[3] = os2;
    cResult[4] = IconComponent;
    cResult[5] = iconSource;
    cResult[6] = tmp16;
    cResult[7] = found;
    arr = found;
    tmp11 = tmp16;
    tmp10 = iconSource;
    tmp9 = IconComponent;
  }
  let formatDateResult = null;
  if (!current) {
    const tmpResult = session(14607);
    formatDateResult = tmpResult.formatDate(session.approx_last_used_time);
  }
  cResult[8] = current;
  cResult[9] = session.approx_last_used_time;
  cResult[10] = formatDateResult;
  tmp16 = formatDateResult;
}) : ((session) => {
  let Icon;
  let IconComponent;
  let iconSource;
  let intl;
  let items1;
  let items2;
  let items3;
  let obj12;
  let obj14;
  let obj3;
  let obj5;
  let text;
  let tmp16Result;
  session = session.session;
  const current = session.current;
  const tmp = closure_13();
  const client_info = session.client_info;
  let _location;
  if (client_info != null) {
    _location = client_info.location;
  }
  if (_location == null) {
    const client_info2 = session.client_info;
    let ip;
    if (client_info2 != null) {
      ip = client_info2.ip;
    }
    _location = ip;
  }
  const client_info3 = session.client_info;
  let platform;
  if (client_info3 != null) {
    platform = client_info3.platform;
  }
  const client_info4 = session.client_info;
  let os;
  if (client_info4 != null) {
    os = client_info4.os;
  }
  let formatDateResult = null;
  ({ text, iconSource, IconComponent } = getOsDetails(os));
  getOsDetails(os);
  if (!current) {
    let obj = session(14607);
    formatDateResult = obj.formatDate(session.approx_last_used_time);
  }
  const items = [text, platform];
  const found = items.filter(session(1375).isNotNullish);
  let tmp13 = null;
  if (!current) {
    const obj2 = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(session(1126).t.E4MJNt),
      onPress() {
          const obj = AuthSessionsActionCreators;
          return obj.logOutSessions(session.id_hash);
        },
      hitSlop: { top: 5, left: 5, bottom: 5, right: 5 },
      children: closure_10(Icon, obj3)
    };
    const PressableOpacity = tmp11(5916).PressableOpacity;
    intl = tmp11(1126).intl;
    obj3 = { style: tmp.logoutButton, source: AssetRegistryDefault };
    Icon = tmp11(1188).Icon;
    tmp13 = closure_10(PressableOpacity, obj2);
  }
  const obj4 = { style: tmp.sessionInfo, accessible: true, children: closure_11(closure_6, obj5) };
  obj5 = { style: tmp.sessionInfoRow, children: items1 };
  items1 = [, ];
  const obj6 = { variant: "text-md/semibold", children: found[0] };
  items1[0] = closure_10(session(4892).Text, obj6);
  let tmp18Result = found.length > 1;
  if (tmp18Result) {
    const obj7 = { children: items2 };
    const obj8 = { variant: "text-md/semibold", accessibilityLabel: ",", style: tmp.sessionInfoRowSpacing, children: "\u00B7" };
    items2 = [closure_10(session(4892).Text, obj8), ];
    const obj9 = { variant: "text-md/semibold", children: found[1] };
    items2[1] = closure_10(session(4892).Text, obj9);
    tmp18Result = closure_11(closure_12, obj7);
  }
  items1[1] = tmp18Result;
  const obj10 = { icon: closure_10(session(6000).TableRow.Icon, { source: iconSource, IconComponent }), label: tmp16Result, subLabel: closure_11(closure_6, { accessible: true, children: items3 }), trailing: tmp13 };
  tmp16Result = closure_10(closure_6, obj4);
  const TableRow = tmp11(6000).TableRow;
  let tmp16Result3 = null != _location;
  if (tmp16Result3) {
    const obj11 = { style: tmp.sessionInfoRow, children: closure_10(session(4892).Text, obj12) };
    obj12 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: _location };
    tmp16Result3 = closure_10(closure_6, obj11);
  }
  items3 = [tmp16Result3, ];
  let tmp16Result4 = null != formatDateResult;
  if (tmp16Result4) {
    const obj13 = { style: tmp.sessionInfoRow, children: closure_10(session(4892).Text, obj14) };
    obj14 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: formatDateResult };
    tmp16Result4 = closure_10(closure_6, obj13);
  }
  items3[1] = tmp16Result4;
  return closure_10(TableRow, obj10);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp11;
  let tmp13;
  let tmp5;
  let tmp6;
  let obj = navigation(576);
  const cResult = obj.c(6);
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "translucent", source: AssetRegistryDefault2 };
    const Icon = tmp(6000).TableRow.Icon;
    const tmp9 = closure_10(Icon, obj3);
    const intl = tmp(1126).intl;
    const stringResult = intl.string(navigation(1126).t.iUa0sn);
    cResult[0] = tmp9;
    cResult[1] = stringResult;
    tmp5 = tmp9;
    tmp6 = stringResult;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== navigation) {
    const intl2 = tmp(1126).intl;
    const obj4 = {
      onClick() {
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(constants.ACCOUNT);
          navigation.push(constants.ACCOUNT);
        }
    };
    const formatResult = intl2.format(navigation(1126).t["044+8i"], obj4);
    cResult[2] = navigation;
    cResult[3] = formatResult;
    tmp11 = formatResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp11) {
    const obj5 = { icon: tmp5, label: tmp6, subLabel: tmp11 };
    const tmp15 = closure_10(navigation(6000).TableRow, obj5);
    cResult[4] = tmp11;
    cResult[5] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  return tmp13;
}) : (() => {
  let Icon;
  let closure_0;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const obj2 = { icon: closure_10(Icon, obj3), label: intl.string(require("intl").t.iUa0sn), subLabel: intl2.format(require("intl").t["044+8i"], obj4) };
  const TableRow = require("TableRow").TableRow;
  obj3 = { variant: "translucent", source: AssetRegistryDefault2 };
  Icon = require("TableRow").TableRow.Icon;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  obj4 = {
    onClick() {
      const obj = UserSettingsModalActionCreatorsDefault;
      obj.setSection(constants.ACCOUNT);
      closure_0.push(constants.ACCOUNT);
    }
  };
  return closure_10(TableRow, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/devices/native/UserSettingsSessions.tsx");

export default tmp8;