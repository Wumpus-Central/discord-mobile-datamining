// === Module 15033: UserSettingsSessions ===

// Module 15033 (UserSettingsSessions)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef5009 from "module_5009" /* 5009 */;
import _modDef5010 from "module_5010" /* 5010 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6633 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6671 */;
import ScreenIcon from "ScreenIcon" /* 9061 */;
import _modDef10962 from "module_10962" /* 10962 */;
import AuthSessionsActionCreators from "AuthSessionsActionCreators" /* 15034 */;
import _modDef15035 from "module_15035" /* 15035 */;
import VrHeadsetIcon from "VrHeadsetIcon" /* 15036 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import TextStyles from "TextStyles" /* 5902 */;

require = fn;
function getOsDetails(text) {
  let trimmed;
  if (text != null) {
    trimmed = text.toLowerCase().trim();
    const str = text.toLowerCase();
  }
  if (null !== trimmed) {
    if (undefined !== trimmed) {
      if ("" !== trimmed) {
        if ("ios" !== trimmed) {
          if ("android" !== trimmed) {
            if ("horizon os" === trimmed) {
              const obj2 = { text, iconSource: _modDef10962, IconComponent: VrHeadsetIcon.VrHeadsetIcon };
              return obj2;
            } else {
              const obj = { text, iconSource: _modDef15035, IconComponent: ScreenIcon.ScreenIcon };
              return obj;
            }
          }
        }
        const obj3 = { text, iconSource: _modDef10962, IconComponent: MobilePhoneIcon.MobilePhoneIcon };
        return obj3;
      }
    }
  }
  const obj4 = { text: null, iconSource: null, IconComponent: null };
  const intl = util.intl;
  obj4.text = intl.string(util.t.cDHCNY);
  obj4.iconSource = _modDef15035;
  obj4.IconComponent = ScreenIcon.ScreenIcon;
  return obj4;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1085);
({ UserSettingsSections: closure_9, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { description: { paddingHorizontal: 16, paddingTop: 8, marginBottom: 8 }, detailsText: null, container: null, loading: null, sessionInfo: null, sessionInfoRow: null, sessionInfoRowSpacing: null, logoutButton: null, list: null };
let obj3 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 14));
obj3.fontWeight = "500";
obj2.detailsText = obj3;
obj2.container = { display: "flex", flex: 1 };
obj2.loading = { marginTop: 16 };
obj2.sessionInfo = { display: "flex" };
obj2.sessionInfoRow = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
obj2.sessionInfoRowSpacing = { marginHorizontal: 4 };
obj2.logoutButton = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.list = { paddingHorizontal: 16 };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsSessions() {
  const cResult = otherSessions(576).c(31);
  const tmp4 = closure_13();
  const obj = otherSessions(576);
  let authSessions = otherSessions(14868).useAuthSessions();
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
  const obj2 = otherSessions(14868);
  const stateFromStores = otherSessions(504).useStateFromStores(tmp6, tmp7);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp10[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      const authSessions = otherSessions(dependencyMap[13]).fetchAuthSessions();
      const timeout = setTimeout(() => closure_1_1(true), 500);
      return () => {
        clearTimeout(closure_0);
        AuthSessionsActionCreators.clearAuthSessions();
      };
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    let tmp12 = items1;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const effect = noop.useEffect(tmp11, tmp12);
  if (null == currentSession) {
    let tmp34 = null;
    if (tmp10[0]) {
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp40 = closure_10(closure_5, {});
        cResult[4] = tmp40;
        let tmp37 = tmp40;
      } else {
        tmp37 = cResult[4];
      }
      if (cResult[5] !== tmp4.loading) {
        const obj3 = { style: tmp4.loading, children: tmp37 };
        const tmp44 = closure_10(closure_6, obj3);
        cResult[5] = tmp4.loading;
        cResult[6] = tmp44;
      }
    }
  } else {
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = otherSessions(1126).intl;
      const stringResult = intl.string(otherSessions(1126).t.LLS19o);
      cResult[7] = stringResult;
      let tmp14 = stringResult;
    } else {
      tmp14 = cResult[7];
    }
    if (cResult[8] !== currentSession) {
      let tmp17 = null;
      if (null != currentSession) {
        const obj5 = { session: currentSession, current: true };
        tmp17 = closure_10(closure_15, obj5);
      }
      cResult[8] = currentSession;
      cResult[9] = tmp17;
      let tmp16 = tmp17;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] !== tmp16) {
      const obj6 = { title: tmp14, hasIcons: true, children: tmp16 };
      const tmp22 = closure_10(otherSessions(6267).TableRowGroup, obj6);
      cResult[10] = tmp16;
      cResult[11] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[11];
    }
    let mfaEnabled;
    if (stateFromStores != null) {
      mfaEnabled = stateFromStores.mfaEnabled;
    }
    if (cResult[12] === mfaEnabled) {
      if (cResult[13] === otherSessions) {
        let tmp24 = cResult[14];
      }
      if (cResult[15] !== otherSessions) {
        let tmp32 = null;
        if (otherSessions.length > 0) {
          const obj7 = { start: true, end: true, variant: "danger", label: null, subLabel: null, onPress: null };
          const intl3 = otherSessions(1126).intl;
          obj7.label = intl3.string(otherSessions(1126).t.cLmmeY);
          const intl4 = otherSessions(1126).intl;
          obj7.subLabel = intl4.string(otherSessions(1126).t.OTXyaf);
          obj7.onPress = function onPress() {
            return AuthSessionsActionCreators.logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
          };
          tmp32 = closure_10(otherSessions(6184).TableRow, obj7);
        }
        cResult[15] = otherSessions;
        cResult[16] = tmp32;
        let tmp31 = tmp32;
      } else {
        tmp31 = cResult[16];
      }
      if (cResult[17] === tmp4.list) {
        if (cResult[18] === tmp20) {
          if (cResult[19] === tmp24) {
            if (cResult[20] === tmp31) {
              tmp34 = cResult[21];
            }
          }
        }
      }
      const obj8 = { spacing: 24, style: tmp4.list, children: null };
      const items2 = [tmp20, tmp24, tmp31];
      obj8.children = items2;
      const tmp36 = closure_11(otherSessions(5373).Stack, obj8);
      cResult[17] = tmp4.list;
      cResult[18] = tmp20;
      cResult[19] = tmp24;
      cResult[20] = tmp31;
      cResult[21] = tmp36;
      tmp34 = tmp36;
    }
    if (otherSessions.length > 0) {
      const obj9 = { title: null, hasIcons: true, children: null };
      const intl2 = otherSessions(1126).intl;
      obj9.title = intl2.string(otherSessions(1126).t.xx1MWc);
      const items3 = [otherSessions.map((session) => closure_1_10(closure_1_15, { session }, session.id_hash)), closure_10(closure_16, {})];
      obj9.children = items3;
      let tmp26 = closure_11(otherSessions(6267).TableRowGroup, obj9);
    } else {
      let mfaEnabled1;
      if (stateFromStores != null) {
        mfaEnabled1 = stateFromStores.mfaEnabled;
      }
      tmp26 = null;
    }
    let mfaEnabled2;
    if (stateFromStores != null) {
      mfaEnabled2 = stateFromStores.mfaEnabled;
    }
    cResult[12] = mfaEnabled2;
    cResult[13] = otherSessions;
    cResult[14] = tmp26;
    tmp24 = tmp26;
  }
  ({ container, description } = tmp4);
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = otherSessions(1126).intl;
    const stringResult1 = intl5.string(otherSessions(1126).t.zZp618);
    cResult[22] = stringResult1;
    let tmp46 = stringResult1;
  } else {
    tmp46 = cResult[22];
  }
  if (cResult[23] !== tmp4.description) {
    const obj10 = { variant: "text-sm/medium", style: description, children: tmp46 };
    const tmp50 = closure_10(otherSessions(5086).Text, obj10);
    cResult[23] = tmp4.description;
    cResult[24] = tmp50;
    let tmp48 = tmp50;
  } else {
    tmp48 = cResult[24];
  }
  if (cResult[25] === tmp34) {
    if (cResult[26] === tmp48) {
      let tmp51 = cResult[27];
    }
    if (cResult[28] === tmp4.container) {
      if (cResult[29] === tmp51) {
        let tmp53 = cResult[30];
      }
      return tmp53;
    }
    const obj11 = { style: container, children: tmp51 };
    const tmp56 = closure_10(closure_7, obj11);
    cResult[28] = tmp4.container;
    cResult[29] = tmp51;
    cResult[30] = tmp56;
    tmp53 = tmp56;
  }
  const obj12 = { bottom: true, children: null };
  const items4 = [tmp48, tmp34];
  obj12.children = items4;
  const tmp52 = closure_11(otherSessions(6803).SafeAreaPaddingView, obj12);
  cResult[25] = tmp34;
  cResult[26] = tmp48;
  cResult[27] = tmp52;
  tmp51 = tmp52;
  const tmpResult = otherSessions(504);
}) : (function UserSettingsSessions() {
  const tmp = closure_13();
  let authSessions = otherSessions(14868).useAuthSessions();
  ({ currentSession, otherSessions } = authSessions);
  const obj = otherSessions(14868);
  const items = [UserStore];
  const stateFromStores = otherSessions(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = otherSessions(504);
  [tmp7, importDefault] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const authSessions = otherSessions(dependencyMap[13]).fetchAuthSessions();
    const timeout = setTimeout(() => closure_1_1(true), 500);
    return () => {
      clearTimeout(closure_0);
      AuthSessionsActionCreators.clearAuthSessions();
    };
  }, []);
  if (null == currentSession) {
    let tmp16 = null;
    if (tmp7) {
      const obj3 = { style: tmp.loading, children: closure_10(closure_5, {}) };
      tmp16 = closure_10(closure_6, obj3);
    }
    let tmp20Result2 = tmp16;
  } else {
    const obj4 = { spacing: 24, style: tmp.list, children: null };
    const obj5 = { title: null, hasIcons: true, children: null };
    const intl5 = otherSessions(1126).intl;
    obj5.title = intl5.string(otherSessions(1126).t.LLS19o);
    let tmp21Result = null;
    if (null != currentSession) {
      const obj6 = { session: currentSession, current: true };
      tmp21Result = closure_10(closure_15, obj6);
    }
    obj5.children = tmp21Result;
    const items1 = [closure_10(otherSessions(6267).TableRowGroup, obj5), , ];
    if (otherSessions.length > 0) {
      const obj7 = { title: null, hasIcons: true, children: null };
      const intl = otherSessions(1126).intl;
      obj7.title = intl.string(otherSessions(1126).t.xx1MWc);
      const items2 = [otherSessions.map((session) => closure_1_10(closure_1_15, { session }, session.id_hash)), closure_10(closure_16, {})];
      obj7.children = items2;
      let tmp20Result = closure_11(otherSessions(6267).TableRowGroup, obj7);
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
      const obj8 = { start: true, end: true, variant: "danger", label: null, subLabel: null, onPress: null };
      const intl2 = otherSessions(1126).intl;
      obj8.label = intl2.string(otherSessions(1126).t.cLmmeY);
      const intl3 = otherSessions(1126).intl;
      obj8.subLabel = intl3.string(otherSessions(1126).t.OTXyaf);
      obj8.onPress = function onPress() {
        return AuthSessionsActionCreators.logOutSessions(otherSessions.map((id_hash) => id_hash.id_hash));
      };
      tmp21Result2 = closure_10(otherSessions(6184).TableRow, obj8);
    }
    items1[2] = tmp21Result2;
    obj4.children = items1;
    tmp20Result2 = closure_11(otherSessions(5373).Stack, obj4);
  }
  const obj9 = { style: tmp.container, children: null };
  const obj10 = { bottom: true, children: null };
  const obj11 = { variant: "text-sm/medium", style: tmp.description, children: null };
  const intl4 = otherSessions(1126).intl;
  obj11.children = intl4.string(otherSessions(1126).t.zZp618);
  const items3 = [closure_10(otherSessions(5086).Text, obj11), tmp20Result2];
  obj10.children = items3;
  obj9.children = closure_11(otherSessions(6803).SafeAreaPaddingView, obj10);
  return closure_10(closure_7, obj9);
});
fn(558);
let obj4 = { marginRight: 10, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function SessionInfo(session) {
  const cResult = session(576).c(47);
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
    const platform = client_info3.platform;
  }
  if (cResult[0] === current) {
    if (cResult[1] === platform) {
      if (cResult[2] === session.approx_last_used_time) {
        const client_info4 = session.client_info;
        let os;
        if (client_info4 != null) {
          os = client_info4.os;
        }
        if (cResult[3] === os) {
          let tmp8 = cResult[4];
          let tmp9 = cResult[5];
          let tmp10 = cResult[6];
          let arr = cResult[7];
        }
        if (cResult[11] === current) {
          if (cResult[12] === session.id_hash) {
            if (cResult[13] === tmp4.logoutButton) {
              let tmp19 = cResult[14];
            }
            if (cResult[15] !== arr[0]) {
              const obj2 = { variant: "text-md/semibold", children: arr[0] };
              const tmp25 = closure_10(tmp(5086).Text, obj2);
              cResult[15] = arr[0];
              cResult[16] = tmp25;
              let tmp23 = tmp25;
            } else {
              tmp23 = cResult[16];
            }
            if (cResult[17] === tmp4.sessionInfoRowSpacing) {
              if (cResult[18] === arr[1]) {
                if (cResult[19] === arr.length) {
                  let tmp26 = cResult[20];
                }
                if (cResult[21] === tmp4.sessionInfoRow) {
                  if (cResult[22] === tmp23) {
                    if (cResult[23] === tmp26) {
                      let tmp31 = cResult[24];
                    }
                    if (cResult[25] === tmp4.sessionInfo) {
                      if (cResult[26] === tmp31) {
                        let tmp35 = cResult[27];
                      }
                      if (cResult[28] === tmp8) {
                        if (cResult[29] === tmp9) {
                          let tmp39 = cResult[30];
                        }
                        if (cResult[31] === _location) {
                          if (cResult[32] === tmp4.detailsText) {
                            if (cResult[33] === tmp4.sessionInfoRow) {
                              let tmp42 = cResult[34];
                            }
                            if (cResult[35] === tmp10) {
                              if (cResult[36] === tmp4.detailsText) {
                                if (cResult[37] === tmp4.sessionInfoRow) {
                                  let tmp46 = cResult[38];
                                }
                                if (cResult[39] === tmp42) {
                                  if (cResult[40] === tmp46) {
                                    let tmp50 = cResult[41];
                                  }
                                  if (cResult[42] === tmp19) {
                                    if (cResult[43] === tmp35) {
                                      if (cResult[44] === tmp50) {
                                        if (cResult[45] === tmp39) {
                                          let tmp54 = cResult[46];
                                        }
                                        return tmp54;
                                      }
                                    }
                                  }
                                  const obj3 = { icon: tmp39, label: tmp35, subLabel: tmp50, trailing: tmp19 };
                                  const tmp56 = closure_10(tmp(6184).TableRow, obj3);
                                  cResult[42] = tmp19;
                                  cResult[43] = tmp35;
                                  cResult[44] = tmp50;
                                  cResult[45] = tmp39;
                                  cResult[46] = tmp56;
                                  tmp54 = tmp56;
                                }
                                const obj4 = { accessible: true, children: null };
                                const items = [tmp42, tmp46];
                                obj4.children = items;
                                const tmp53 = closure_11(closure_6, obj4);
                                cResult[39] = tmp42;
                                cResult[40] = tmp46;
                                cResult[41] = tmp53;
                                tmp50 = tmp53;
                              }
                            }
                            let tmp47 = null != tmp10;
                            if (tmp47) {
                              const obj5 = { style: tmp4.sessionInfoRow, children: null };
                              const obj6 = { variant: "text-xs/medium", color: "text-subtle", style: tmp4.detailsText, children: tmp10 };
                              obj5.children = closure_10(tmp(5086).Text, obj6);
                              tmp47 = closure_10(closure_6, obj5);
                            }
                            cResult[35] = tmp10;
                            cResult[36] = tmp4.detailsText;
                            cResult[37] = tmp4.sessionInfoRow;
                            cResult[38] = tmp47;
                            tmp46 = tmp47;
                          }
                        }
                        let tmp43 = null != _location;
                        if (tmp43) {
                          const obj7 = { style: tmp4.sessionInfoRow, children: null };
                          const obj8 = { variant: "text-xs/medium", color: "text-subtle", style: tmp4.detailsText, children: _location };
                          obj7.children = closure_10(tmp(5086).Text, obj8);
                          tmp43 = closure_10(closure_6, obj7);
                        }
                        cResult[31] = _location;
                        cResult[32] = tmp4.detailsText;
                        cResult[33] = tmp4.sessionInfoRow;
                        cResult[34] = tmp43;
                        tmp42 = tmp43;
                      }
                      const obj9 = { source: tmp9, IconComponent: tmp8 };
                      const tmp41 = closure_10(tmp(6184).TableRow.Icon, obj9);
                      cResult[28] = tmp8;
                      cResult[29] = tmp9;
                      cResult[30] = tmp41;
                      tmp39 = tmp41;
                    }
                    const obj10 = { style: tmp4.sessionInfo, accessible: true, children: tmp31 };
                    const tmp38 = closure_10(closure_6, obj10);
                    cResult[25] = tmp4.sessionInfo;
                    cResult[26] = tmp31;
                    cResult[27] = tmp38;
                    tmp35 = tmp38;
                  }
                }
                const obj11 = { style: tmp4.sessionInfoRow, children: null };
                const items1 = [tmp23, tmp26];
                obj11.children = items1;
                const tmp34 = closure_11(closure_6, obj11);
                cResult[21] = tmp4.sessionInfoRow;
                cResult[22] = tmp23;
                cResult[23] = tmp26;
                cResult[24] = tmp34;
                tmp31 = tmp34;
              }
            }
            let tmp27 = arr.length > 1;
            if (tmp27) {
              const obj12 = { children: null };
              const obj13 = { variant: "text-md/semibold", accessibilityLabel: ",", style: tmp4.sessionInfoRowSpacing, children: "\u00B7" };
              const items2 = [closure_10(tmp(5086).Text, obj13), ];
              const obj14 = { variant: "text-md/semibold", children: arr[1] };
              items2[1] = closure_10(tmp(5086).Text, obj14);
              obj12.children = items2;
              tmp27 = closure_11(closure_12, obj12);
            }
            cResult[17] = tmp4.sessionInfoRowSpacing;
            cResult[18] = arr[1];
            cResult[19] = arr.length;
            cResult[20] = tmp27;
            tmp26 = tmp27;
          }
        }
        let tmp20 = null;
        if (!current) {
          const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
          const intl = tmp(1126).intl;
          obj15.accessibilityLabel = intl.string(tmp(1126).t.E4MJNt);
          obj15.onPress = function onPress() {
            return AuthSessionsActionCreators.logOutSessions(session.id_hash);
          };
          obj15.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
          const obj16 = { style: tmp4.logoutButton, source: _modDef5009 };
          obj15.children = closure_10(tmp(1200).Icon, obj16);
          tmp20 = closure_10(tmp(6189).PressableOpacity, obj15);
        }
        cResult[11] = current;
        cResult[12] = session.id_hash;
        cResult[13] = tmp4.logoutButton;
        cResult[14] = tmp20;
        tmp19 = tmp20;
      }
    }
  }
  const client_info5 = session.client_info;
  let os1;
  if (client_info5 != null) {
    os1 = client_info5.os;
  }
  const obj = session(576);
  ({ iconSource, IconComponent } = getOsDetails(os1));
  if (cResult[8] === current) {
    if (cResult[9] === session.approx_last_used_time) {
      let tmp15 = cResult[10];
    }
    const items3 = [tmp14, platform];
    const found = items3.filter(tmp(1387).isNotNullish);
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
    cResult[6] = tmp15;
    cResult[7] = found;
    arr = found;
    tmp10 = tmp15;
    tmp9 = iconSource;
    tmp8 = IconComponent;
  }
  let formatDateResult = null;
  if (!current) {
    formatDateResult = tmp(14868).formatDate(session.approx_last_used_time);
    const tmpResult = tmp(14868);
  }
  cResult[8] = current;
  cResult[9] = session.approx_last_used_time;
  cResult[10] = formatDateResult;
  tmp15 = formatDateResult;
  const tmp11Result = getOsDetails(os1);
}) : (function SessionInfo(session) {
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
  if (!current) {
    formatDateResult = session(14868).formatDate(session.approx_last_used_time);
    const obj = session(14868);
  }
  const items = [text, platform];
  const found = items.filter(session(1387).isNotNullish);
  let tmp13 = null;
  if (!current) {
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
    const intl = tmp11(1126).intl;
    obj2.accessibilityLabel = intl.string(tmp11(1126).t.E4MJNt);
    obj2.onPress = function onPress() {
      return AuthSessionsActionCreators.logOutSessions(session.id_hash);
    };
    obj2.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
    const obj3 = { style: tmp.logoutButton, source: _modDef5009 };
    obj2.children = closure_10(tmp11(1200).Icon, obj3);
    tmp13 = closure_10(tmp11(6189).PressableOpacity, obj2);
  }
  const obj4 = { style: tmp.sessionInfo, accessible: true, children: null };
  const obj5 = { style: tmp.sessionInfoRow, children: null };
  const items1 = [closure_10(session(5086).Text, { variant: "text-md/semibold", children: found[0] }), ];
  let tmp18Result = found.length > 1;
  if (tmp18Result) {
    const obj7 = { children: null };
    const obj8 = { variant: "text-md/semibold", accessibilityLabel: ",", style: tmp.sessionInfoRowSpacing, children: "\u00B7" };
    const items2 = [closure_10(tmp11(5086).Text, obj8), ];
    const obj9 = { variant: "text-md/semibold", children: found[1] };
    items2[1] = closure_10(tmp11(5086).Text, obj9);
    obj7.children = items2;
    tmp18Result = closure_11(closure_12, obj7);
  }
  items1[1] = tmp18Result;
  obj5.children = items1;
  obj4.children = closure_11(closure_6, obj5);
  const obj6 = { variant: "text-md/semibold", children: found[0] };
  const tmp5Result = getOsDetails(os);
  const obj10 = { icon: closure_10(session(6184).TableRow.Icon, { source: iconSource, IconComponent }), label: closure_10(closure_6, obj4), subLabel: null, trailing: null };
  let tmp16Result3 = null != _location;
  if (tmp16Result3) {
    const obj11 = { style: tmp.sessionInfoRow, children: null };
    const obj12 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: _location };
    obj11.children = closure_10(tmp11(5086).Text, obj12);
    tmp16Result3 = closure_10(closure_6, obj11);
  }
  const items3 = [tmp16Result3, ];
  let tmp16Result4 = null != formatDateResult;
  if (tmp16Result4) {
    const obj13 = { style: tmp.sessionInfoRow, children: null };
    const obj14 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.detailsText, children: formatDateResult };
    obj13.children = closure_10(tmp11(5086).Text, obj14);
    tmp16Result4 = closure_10(closure_6, obj13);
  }
  items3[1] = tmp16Result4;
  obj10.subLabel = closure_11(closure_6, { accessible: true, children: items3 });
  obj10.trailing = tmp13;
  return closure_10(session(6184).TableRow, obj10);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function UnknownLegacySessionsInfo() {
  const cResult = navigation(576).c(6);
  const obj = navigation(576);
  navigation = navigation(1502).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "translucent", source: _modDef5010 };
    const tmp9 = closure_10(tmp(6184).TableRow.Icon, obj3);
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.iUa0sn);
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
          UserSettingsModalActionCreatorsDefault.setSection(constants.ACCOUNT);
          navigation.push(constants.ACCOUNT);
        }
    };
    const formatResult = intl2.format(tmp(1126).t["044+8i"], obj4);
    cResult[2] = navigation;
    cResult[3] = formatResult;
    let tmp11 = formatResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp11) {
    const obj5 = { icon: tmp5, label: tmp6, subLabel: tmp11 };
    const tmp15 = closure_10(tmp(6184).TableRow, obj5);
    cResult[4] = tmp11;
    cResult[5] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  return tmp13;
}) : (function UnknownLegacySessionsInfo() {
  _require = require("useNavigation").useNavigation();
  const obj2 = { icon: null, label: null, subLabel: null };
  const obj = require("useNavigation");
  obj2.icon = closure_10(require("TableRow").TableRow.Icon, { variant: "translucent", source: _modDef5010 });
  const intl = require("util").intl;
  obj2.label = intl.string(require("util").t.iUa0sn);
  const intl2 = require("util").intl;
  obj2.subLabel = intl2.format(require("util").t["044+8i"], {
    onClick() {
      UserSettingsModalActionCreatorsDefault.setSection(constants.ACCOUNT);
      closure_0.push(constants.ACCOUNT);
    }
  });
  return closure_10(require("TableRow").TableRow, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/devices/native/UserSettingsSessions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsSessionsContainer() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = collapsed(closure_14, {});
    cResult[0] = tmp5;
    let first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function UserSettingsSessionsContainer() {
  return collapsed(closure_14, {});
});