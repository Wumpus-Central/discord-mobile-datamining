// === Module 14786: ConnectedApplicationIdentity ===

// Module 14786 (ConnectedApplicationIdentity)
import react_native from "react-native" /* 17 */;
import intl6 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4892 */;
import Icon from "Icon" /* 5603 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import AlertDefault from "Alert" /* 5790 */;
import InfoBoxDefault from "InfoBox" /* 9472 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const IconDefault = Icon;
let closure_1, identity, v0, v3;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((identity) => {
  let body;
  let icon1;
  let items;
  let profile3;
  let str;
  let tmp8;
  let tmp9;
  let tmpResult2;
  let tmp = identity;
  let tmp2 = str;
  let obj = identity(str[6]);
  const cResult = obj.c(44);
  identity = identity.identity;
  const token = identity.token;
  let application;
  if (token != null) {
    application = token.application;
  }
  str = undefined;
  if (application != null) {
    str = application.name;
  }
  if (str == null) {
    str = "";
  }
  const tmpResult = tmp(tmp2[7]);
  const legacyClassComponentStyles = tmpResult.useLegacyClassComponentStyles(tmp(tmp2[8]).readStyles);
  let profile = identity.profile;
  let flag;
  const useState = react.useState;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  [tmp8, _asyncToGenerator] = _slicedToArray(useState(flag), 2);
  const tmp7 = _slicedToArray(useState(flag), 2);
  if (cResult[0] !== str) {
    let intl = tmp(tmp2[9]).intl;
    let obj2 = { provider: str };
    const formatResult = intl.format(tmp(tmp2[9]).t.VgqIPj, obj2);
    cResult[0] = str;
    cResult[1] = formatResult;
    tmp9 = formatResult;
  } else {
    tmp9 = cResult[1];
  }
  _slicedToArray = tmp9;
  if (cResult[2] === str) {
    if (cResult[3] === tmp9) {
      let tmp11;
      if (cResult[4] === token) {
        tmp11 = cResult[5];
      }
      let icon;
      const tmp12 = cResult[6];
      if (application != null) {
        icon = application.icon;
      }
      if (tmp12 === icon) {
        let tmp14;
        if (cResult[7] === identity.application_id) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === identity.application_id) {
          const profile2 = identity.profile;
          let connection_visible;
          const tmp20 = cResult[10];
          if (profile2 != null) {
            connection_visible = profile2.connection_visible;
          }
          if (tmp20 === connection_visible) {
            let tmp22;
            if (cResult[11] === identity.provider_issued_user_id) {
              tmp22 = cResult[12];
            }
            const profile4 = identity.profile;
            if (null == application) {
              return null;
            } else {
              if (cResult[13] === legacyClassComponentStyles.connectedApplicationIdentityIcon) {
                let tmp25;
                if (cResult[14] === legacyClassComponentStyles.platformIcon) {
                  tmp25 = cResult[15];
                }
                if (cResult[16] === application.name) {
                  if (cResult[17] === tmp14) {
                    let tmp26;
                    let tmp33;
                    let tmp32;
                    let tmp37;
                    if (cResult[18] === tmp25) {
                      tmp26 = cResult[19];
                    }
                    const _Symbol = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp35 = closure_7(tmp(tmp2[19]).XLargeBoldIcon, { size: "sm" });
                      let intl2 = tmp(tmp2[9]).intl;
                      const stringResult = intl2.string(tmp(tmp2[9]).t["DT39A+"]);
                      cResult[20] = tmp35;
                      cResult[21] = stringResult;
                      tmp33 = stringResult;
                      tmp32 = tmp35;
                    } else {
                      tmp32 = cResult[20];
                      tmp33 = cResult[21];
                    }
                    if (cResult[22] !== tmp11) {
                      let obj3 = { size: "sm", variant: "icon-only", icon: tmp32, accessibilityLabel: tmp33, onPress: tmp11 };
                      const tmp39 = closure_7(tmp(tmp2[20]).IconButton, obj3);
                      cResult[22] = tmp11;
                      cResult[23] = tmp39;
                      tmp37 = tmp39;
                    } else {
                      tmp37 = cResult[23];
                    }
                    if (cResult[24] === application.name) {
                      if (cResult[25] === tmp37) {
                        let tmp42;
                        if (cResult[26] === tmp26) {
                          tmp42 = cResult[27];
                        }
                        if (cResult[28] === legacyClassComponentStyles.connectedAccountHeader) {
                          let tmp45;
                          let tmp49;
                          if (cResult[29] === tmp42) {
                            tmp45 = cResult[30];
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                            let intl3 = tmp(tmp2[9]).intl;
                            const stringResult1 = intl3.string(tmp(tmp2[9]).t.f7yOAX);
                            cResult[31] = stringResult1;
                            tmp49 = stringResult1;
                          } else {
                            tmp49 = cResult[31];
                          }
                          if (cResult[32] === tmp22) {
                            let tmp51;
                            if (cResult[33] === tmp8) {
                              tmp51 = cResult[34];
                            }
                            if (cResult[35] === tmp45) {
                              let tmp54;
                              if (cResult[36] === tmp51) {
                                tmp54 = cResult[37];
                              }
                              if (cResult[38] === legacyClassComponentStyles.connectedAccountItem) {
                                let tmp57;
                                if (cResult[39] === tmp54) {
                                  tmp57 = cResult[40];
                                }
                                if (cResult[41] === legacyClassComponentStyles.container) {
                                  let tmp61;
                                  if (cResult[42] === tmp57) {
                                    tmp61 = cResult[43];
                                  }
                                  return tmp61;
                                }
                                let obj4 = { style: tmp40, children: tmp57 };
                                const tmp64 = closure_7(View, obj4);
                                cResult[41] = legacyClassComponentStyles.container;
                                cResult[42] = tmp57;
                                cResult[43] = tmp64;
                                tmp61 = tmp64;
                              }
                              let obj5 = { style: tmp41, children: tmp54 };
                              const tmp60 = closure_7(View, obj5);
                              cResult[38] = legacyClassComponentStyles.connectedAccountItem;
                              cResult[39] = tmp54;
                              cResult[40] = tmp60;
                              tmp57 = tmp60;
                            }
                            let obj6 = { value: true, children: items };
                            items = [tmp45, tmp51];
                            const tmp56 = closure_8(tmp(tmp2[23]).TableRowGroupContext, obj6);
                            cResult[35] = tmp45;
                            cResult[36] = tmp51;
                            cResult[37] = tmp56;
                            tmp54 = tmp56;
                          }
                          let obj7 = { label: tmp49, value: tmp8, onValueChange: tmp22 };
                          const tmp53 = closure_7(tmp(tmp2[22]).TableSwitchRow, obj7);
                          cResult[32] = tmp22;
                          cResult[33] = tmp8;
                          cResult[34] = tmp53;
                          tmp51 = tmp53;
                        }
                        const obj8 = { style: legacyClassComponentStyles.connectedAccountHeader, children: tmp42 };
                        const tmp48 = closure_7(View, obj8);
                        cResult[28] = legacyClassComponentStyles.connectedAccountHeader;
                        cResult[29] = tmp42;
                        cResult[30] = tmp48;
                        tmp45 = tmp48;
                      }
                    }
                    const obj9 = { label: application.name, icon: tmp26, trailing: tmp37 };
                    const tmp44 = closure_7(tmp(tmp2[21]).TableRow, obj9);
                    cResult[24] = application.name;
                    cResult[25] = tmp37;
                    cResult[26] = tmp26;
                    cResult[27] = tmp44;
                    tmp42 = tmp44;
                  }
                }
                const obj10 = { accessible: true, accessibilityLabel: application.name, style: tmp25, size: token(tmp2[17]).Sizes.LARGE, source: tmp14, disableColor: true };
                const tmp29 = token(tmp2[17]);
                const tmp30 = closure_7(tmp29, obj10);
                cResult[16] = application.name;
                cResult[17] = tmp14;
                cResult[18] = tmp25;
                cResult[19] = tmp30;
                tmp26 = tmp30;
              }
              const items1 = [, ];
              ({ connectedApplicationIdentityIcon: arr[0], platformIcon: arr[1] } = legacyClassComponentStyles);
              cResult[13] = legacyClassComponentStyles.connectedApplicationIdentityIcon;
              cResult[14] = legacyClassComponentStyles.platformIcon;
              cResult[15] = items1;
              tmp25 = items1;
            }
          }
        }
        let closure_0 = _asyncToGenerator(async (connection_visible) => {
          let c2 = 0;
          let c4 = 0;
          let c3 = 0;
          return (async (arg0) => {
            let obj2;
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                return { value, done: true };
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c4 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    return { value, done: true };
                  } else {
                    closure_1 = tmp;
                    v0(connection_visible);
                    v0 = 1;
                    c2 = 2;
                    c4 = 1;
                    const obj5 = { connection_visible };
                    const obj6 = { value: obj2.updateApplicationIdentityConfig(connection_visible.application_id, connection_visible.provider_issued_user_id, obj5), done: false };
                    obj2 = token(str[18]);
                    return obj6;
                  }
                } else {
                  if (1 === tmp4) {
                    v0 = 0;
                    const profile = connection_visible.profile;
                    connection_visible = undefined;
                    const tmp6 = v0;
                    if (profile != null) {
                      connection_visible = profile.connection_visible;
                    }
                    tmp6(true === connection_visible);
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v0 = 0;
                    c4 = 3;
                    return { value, done: true };
                  } else {
                    v0 = 0;
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp17) {
                if (0 === v0) {
                  c4 = 3;
                  throw tmp17;
                } else {
                  c2 = 1;
                }
              }
            }
          })();
        });
        ({ application_id: tmp3[9], profile: profile3 } = identity);
        let connection_visible1;
        if (profile3 != null) {
          connection_visible1 = profile3.connection_visible;
        }
        const fn2 = function() {
          return closure_0(...arguments);
        };
        cResult[10] = connection_visible1;
        cResult[11] = identity.provider_issued_user_id;
        cResult[12] = fn2;
        tmp22 = fn2;
      }
      const tmp16 = token(tmp2[16]);
      const obj11 = { id: identity.application_id, icon: icon1, size: tmpResult2.getIconSize(token(tmp2[17]).Sizes.LARGE), botIconFirst: false };
      icon1 = undefined;
      const getApplicationIconSource = tmp16.getApplicationIconSource;
      if (application != null) {
        icon1 = application.icon;
      }
      tmpResult2 = tmp(tmp2[17]);
      const applicationIconSource = getApplicationIconSource(obj11);
      let icon2;
      if (application != null) {
        icon2 = application.icon;
      }
      cResult[6] = icon2;
      cResult[7] = identity.application_id;
      cResult[8] = applicationIconSource;
      tmp14 = applicationIconSource;
    }
  }
  const fn = function z() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let items;
    let obj3;
    let obj5;
    let obj7;
    let obj = { children: items };
    items = [metroImportDefault(native.Spacer, { size: 8 }), , , ];
    const obj2 = { variant: "text-md/medium", children: intl.format(intl6.t.VgqIPj, obj3) };
    const Text = Text_Text.Text;
    intl = intl6.intl;
    obj3 = { provider: str };
    items[1] = metroImportDefault(Text, obj2);
    items[2] = metroImportDefault(native.Spacer, { size: 16 });
    const obj4 = { children: intl2.format(intl6.t.COW3Xn, obj5) };
    const tmp = InfoBoxDefault;
    intl2 = intl6.intl;
    obj5 = { platformName: str };
    items[3] = metroImportDefault(tmp, obj4);
    const tmp2 = metroImportAll(View, obj);
    const obj6 = {
      title: intl3.formatToPlainString(intl6.t.U5x12f, obj7),
      body,
      cancelText: intl4.string(intl6.t["ETE/oC"]),
      children: tmp2,
      confirmText: intl5.string(intl6.t.ppppRJ),
      onConfirm() {
        if (null != token) {
          const obj = identity(str[14]);
          obj.handleDeleteApp(tmp);
        }
      },
      confirmColor: AlertDefault.Colors.RED
    };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl3 = intl6.intl;
    obj7 = { name: str };
    intl4 = intl6.intl;
    intl5 = intl6.intl;
    show(obj6);
  };
  cResult[2] = str;
  cResult[3] = tmp9;
  cResult[4] = token;
  cResult[5] = fn;
  tmp11 = fn;
}) : ((identity) => {
  let TableRowGroupContext;
  let body;
  let c4;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let obj6;
  let obj7;
  let obj9;
  let tmp6;
  identity = identity.identity;
  const token = identity.token;
  let str;
  _slicedToArray = undefined;
  react = undefined;
  let application;
  if (token != null) {
    application = token.application;
  }
  str = undefined;
  if (application != null) {
    str = application.name;
  }
  if (str == null) {
    str = "";
  }
  let tmp2 = identity;
  const tmp3 = application;
  let obj = identity(application[7]);
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(identity(application[8]).readStyles);
  let obj2 = react;
  let profile = identity.profile;
  let flag;
  const useState = react.useState;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  [tmp6, c4] = _slicedToArray(useState(flag), 2);
  const tmp5 = _slicedToArray(useState(flag), 2);
  let intl = tmp2(tmp3[9]).intl;
  const formatResult = intl.format(tmp2(tmp3[9]).t.VgqIPj, { provider: str });
  react = formatResult;
  let items = [str, formatResult, token];
  let icon;
  const callback = obj2.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let items;
    let obj3;
    let obj5;
    let obj7;
    let obj = { children: items };
    items = [metroImportDefault(native.Spacer, { size: 8 }), , , ];
    const obj2 = { variant: "text-md/medium", children: intl.format(intl6.t.VgqIPj, obj3) };
    const Text = Text_Text.Text;
    intl = intl6.intl;
    obj3 = { provider: str };
    items[1] = metroImportDefault(Text, obj2);
    items[2] = metroImportDefault(native.Spacer, { size: 16 });
    const obj4 = { children: intl2.format(intl6.t.COW3Xn, obj5) };
    const tmp = InfoBoxDefault;
    intl2 = intl6.intl;
    obj5 = { platformName: str };
    items[3] = metroImportDefault(tmp, obj4);
    const tmp2 = metroImportAll(View, obj);
    const obj6 = {
      title: intl3.formatToPlainString(intl6.t.U5x12f, obj7),
      body,
      cancelText: intl4.string(intl6.t["ETE/oC"]),
      children: tmp2,
      confirmText: intl5.string(intl6.t.ppppRJ),
      onConfirm() {
        if (null != token) {
          const obj = identity(application[14]);
          obj.handleDeleteApp(tmp);
        }
      },
      confirmColor: AlertDefault.Colors.RED
    };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl3 = intl6.intl;
    obj7 = { name: str };
    intl4 = intl6.intl;
    intl5 = intl6.intl;
    show(obj6);
  }, items);
  const useMemo = obj2.useMemo;
  if (application != null) {
    icon = application.icon;
  }
  const items1 = [icon, identity.application_id];
  const memo = useMemo(() => {
    let icon;
    let obj2;
    const obj = { id: identity.application_id, icon, size: obj2.getIconSize(IconDefault.Sizes.LARGE), botIconFirst: false };
    icon = undefined;
    const getApplicationIconSource = AvatarUtilsDefault.getApplicationIconSource;
    AvatarUtilsDefault;
    if (application != null) {
      icon = application.icon;
    }
    obj2 = Icon;
    return getApplicationIconSource(obj);
  }, items1);
  let closure_0 = str((connection_visible) => {
    let c2 = 0;
    c4 = 0;
    let c3 = 0;
    return (function*(arg0) {
      let obj2;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              return { value, done: true };
            } else {
              closure_1 = tmp;
              v3(connection_visible);
              c3 = 1;
              c2 = 2;
              v3 = 1;
              const obj5 = { connection_visible };
              const obj6 = { value: obj2.updateApplicationIdentityConfig(connection_visible.application_id, connection_visible.provider_issued_user_id, obj5), done: false };
              obj2 = token(application[18]);
              return obj6;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
              const profile = connection_visible.profile;
              connection_visible = undefined;
              const tmp6 = v3;
              if (profile != null) {
                connection_visible = profile.connection_visible;
              }
              tmp6(true === connection_visible);
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              v3 = 3;
              return { value, done: true };
            } else {
              c3 = 0;
            }
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp17) {
          if (0 === c3) {
            v3 = 3;
            throw tmp17;
          } else {
            c2 = 1;
          }
        }
      }
    })();
  });
  const profile2 = identity.profile;
  let connection_visible;
  if (profile2 != null) {
    connection_visible = profile2.connection_visible;
  }
  const items2 = [connection_visible, , ];
  ({ provider_issued_user_id: arr3[1], application_id: arr3[2] } = identity);
  if (null == application) {
    return null;
  } else {
    let obj3 = { accessible: true, accessibilityLabel: application.name, style: items3, size: token(tmp3[17]).Sizes.LARGE, source: memo, disableColor: true };
    items3 = [, ];
    ({ connectedApplicationIdentityIcon: arr4[0], platformIcon: arr4[1] } = legacyClassComponentStyles);
    const tmp15 = token(tmp3[17]);
    const tmp16 = closure_7(tmp15, obj3);
    let obj4 = { size: "sm", variant: "icon-only", icon: closure_7(tmp2(tmp3[19]).XLargeBoldIcon, { size: "sm" }), accessibilityLabel: intl2.string(tmp2(tmp3[9]).t["DT39A+"]), onPress: callback };
    const IconButton = tmp2(tmp3[20]).IconButton;
    intl2 = tmp2(tmp3[9]).intl;
    let obj5 = { style: legacyClassComponentStyles.container, children: closure_7(View, obj6) };
    obj6 = { style: legacyClassComponentStyles.connectedAccountItem, children: closure_8(TableRowGroupContext, obj7) };
    const tmp17 = closure_7(IconButton, obj4);
    obj7 = { value: true, children: items4 };
    const obj8 = { style: legacyClassComponentStyles.connectedAccountHeader, children: closure_7(tmp2(tmp3[21]).TableRow, obj9) };
    TableRowGroupContext = tmp2(tmp3[23]).TableRowGroupContext;
    obj9 = { label: application.name, icon: tmp16, trailing: tmp17 };
    items4 = [closure_7(View, obj8), ];
    const obj10 = { label: intl3.string(tmp2(tmp3[9]).t.f7yOAX), value: tmp6, onValueChange: tmp12 };
    const TableSwitchRow = tmp2(tmp3[22]).TableSwitchRow;
    intl3 = tmp2(tmp3[9]).intl;
    items4[1] = closure_7(TableSwitchRow, obj10);
    return closure_7(View, obj5);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx");

export default tmp3;