// === Module 15047: ConnectedApplicationIdentity ===

// Module 15047 (ConnectedApplicationIdentity)
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import Text_Text from "Text/Text" /* 5086 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5297 */;
import Icon from "Icon" /* 5377 */;
import common_AlertDefault from "common/Alert" /* 5394 */;
import InfoBoxDefault from "InfoBox" /* 10485 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const IconDefault = Icon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedApplicationIdentity(identity) {
  const cResult = require("c").c(44);
  identity = identity.identity;
  _require = identity;
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
  let obj = require("c");
  const legacyClassComponentStyles = require("createStyles").useLegacyClassComponentStyles(tmp(tmp2[8]).readStyles);
  let profile = identity.profile;
  let flag;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  const tmpResult = require("createStyles");
  [tmp8, asyncGeneratorStep] = noop.useState(flag);
  if (cResult[0] !== str) {
    let intl = tmp(tmp2[9]).intl;
    let obj2 = { provider: str };
    const formatResult = intl.format(tmp(tmp2[9]).t.VgqIPj, obj2);
    cResult[0] = str;
    cResult[1] = formatResult;
    let tmp9 = formatResult;
  } else {
    tmp9 = cResult[1];
  }
  _slicedToArray = tmp9;
  if (cResult[2] === str) {
    if (cResult[3] === tmp9) {
      if (cResult[4] === token) {
        let tmp11 = cResult[5];
      }
      let icon;
      if (application != null) {
        icon = application.icon;
      }
      if (cResult[6] === icon) {
        if (cResult[7] === identity.application_id) {
          let tmp13 = cResult[8];
        }
        if (cResult[9] === identity.application_id) {
          const profile2 = identity.profile;
          let connection_visible;
          if (profile2 != null) {
            connection_visible = profile2.connection_visible;
          }
          if (cResult[10] === connection_visible) {
            if (cResult[11] === identity.provider_issued_user_id) {
              let tmp19 = cResult[12];
            }
            const profile4 = identity.profile;
            if (null == application) {
              return null;
            } else {
              if (cResult[13] === legacyClassComponentStyles.connectedApplicationIdentityIcon) {
                if (cResult[14] === legacyClassComponentStyles.platformIcon) {
                  let tmp22 = cResult[15];
                }
                if (cResult[16] === application.name) {
                  if (cResult[17] === tmp13) {
                    if (cResult[18] === tmp22) {
                      let tmp23 = cResult[19];
                    }
                    const _Symbol = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp32 = closure_7(tmp(tmp2[19]).XLargeBoldIcon, { size: "sm" });
                      let intl2 = tmp(tmp2[9]).intl;
                      const stringResult = intl2.string(tmp(tmp2[9]).t["DT39A+"]);
                      cResult[20] = tmp32;
                      cResult[21] = stringResult;
                      let tmp30 = stringResult;
                      let tmp29 = tmp32;
                    } else {
                      tmp29 = cResult[20];
                      tmp30 = cResult[21];
                    }
                    if (cResult[22] !== tmp11) {
                      let obj3 = { size: "sm", variant: "icon-only", icon: tmp29, accessibilityLabel: tmp30, onPress: tmp11 };
                      const tmp36 = closure_7(tmp(tmp2[20]).IconButton, obj3);
                      cResult[22] = tmp11;
                      cResult[23] = tmp36;
                      let tmp34 = tmp36;
                    } else {
                      tmp34 = cResult[23];
                    }
                    if (cResult[24] === application.name) {
                      if (cResult[25] === tmp34) {
                        if (cResult[26] === tmp23) {
                          let tmp39 = cResult[27];
                        }
                        if (cResult[28] === legacyClassComponentStyles.connectedAccountHeader) {
                          if (cResult[29] === tmp39) {
                            let tmp42 = cResult[30];
                          }
                          const _Symbol2 = Symbol;
                          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                            let intl3 = tmp(tmp2[9]).intl;
                            const stringResult1 = intl3.string(tmp(tmp2[9]).t.f7yOAX);
                            cResult[31] = stringResult1;
                            let tmp46 = stringResult1;
                          } else {
                            tmp46 = cResult[31];
                          }
                          if (cResult[32] === tmp19) {
                            if (cResult[33] === tmp8) {
                              let tmp48 = cResult[34];
                            }
                            if (cResult[35] === tmp42) {
                              if (cResult[36] === tmp48) {
                                let tmp51 = cResult[37];
                              }
                              if (cResult[38] === legacyClassComponentStyles.connectedAccountItem) {
                                if (cResult[39] === tmp51) {
                                  let tmp54 = cResult[40];
                                }
                                if (cResult[41] === legacyClassComponentStyles.container) {
                                  if (cResult[42] === tmp54) {
                                    let tmp58 = cResult[43];
                                  }
                                  return tmp58;
                                }
                                let obj5 = { style: tmp37, children: tmp54 };
                                const tmp61 = closure_7(View, obj5);
                                cResult[41] = legacyClassComponentStyles.container;
                                cResult[42] = tmp54;
                                cResult[43] = tmp61;
                                tmp58 = tmp61;
                              }
                              const obj6 = { style: tmp38, children: tmp51 };
                              const tmp57 = closure_7(View, obj6);
                              cResult[38] = legacyClassComponentStyles.connectedAccountItem;
                              cResult[39] = tmp51;
                              cResult[40] = tmp57;
                              tmp54 = tmp57;
                            }
                            let obj7 = { value: true, children: null };
                            let items = [tmp42, tmp48];
                            obj7.children = items;
                            const tmp53 = closure_8(tmp(tmp2[23]).TableRowGroupContext, obj7);
                            cResult[35] = tmp42;
                            cResult[36] = tmp48;
                            cResult[37] = tmp53;
                            tmp51 = tmp53;
                          }
                          const obj8 = { label: tmp46, value: tmp8, onValueChange: tmp19 };
                          const tmp50 = closure_7(tmp(tmp2[22]).TableSwitchRow, obj8);
                          cResult[32] = tmp19;
                          cResult[33] = tmp8;
                          cResult[34] = tmp50;
                          tmp48 = tmp50;
                        }
                        const obj9 = { style: legacyClassComponentStyles.connectedAccountHeader, children: tmp39 };
                        const tmp45 = closure_7(View, obj9);
                        cResult[28] = legacyClassComponentStyles.connectedAccountHeader;
                        cResult[29] = tmp39;
                        cResult[30] = tmp45;
                        tmp42 = tmp45;
                      }
                    }
                    const obj10 = { label: application.name, icon: tmp23, trailing: tmp34 };
                    const tmp41 = closure_7(tmp(tmp2[21]).TableRow, obj10);
                    cResult[24] = application.name;
                    cResult[25] = tmp34;
                    cResult[26] = tmp23;
                    cResult[27] = tmp41;
                    tmp39 = tmp41;
                  }
                }
                const obj11 = { accessible: true, accessibilityLabel: application.name, style: tmp22, size: token(tmp2[17]).Sizes.LARGE, source: tmp13, disableColor: true };
                const tmp27 = closure_7(token(tmp2[17]), obj11);
                cResult[16] = application.name;
                cResult[17] = tmp13;
                cResult[18] = tmp22;
                cResult[19] = tmp27;
                tmp23 = tmp27;
                const tmp26 = token(tmp2[17]);
              }
              const items1 = [, ];
              ({ connectedApplicationIdentityIcon: arr[0], platformIcon: arr[1] } = legacyClassComponentStyles);
              cResult[13] = legacyClassComponentStyles.connectedApplicationIdentityIcon;
              cResult[14] = legacyClassComponentStyles.platformIcon;
              cResult[15] = items1;
              tmp22 = items1;
            }
          }
        }
        _require = asyncGeneratorStep(async (connection_visible) => {
          c2 = 0;
          c4 = 0;
          c3 = 0;
          return (async (arg0) => {
            closure_1 = tmp3;
            v0(connection_visible);
            v0 = 1;
            await token(str[18]).updateApplicationIdentityConfig(connection_visible.application_id, connection_visible.provider_issued_user_id, { connection_visible });
            if (1 === tmp7) {
              v0 = 0;
              const profile = connection_visible.profile;
              connection_visible = undefined;
              if (profile != null) {
                connection_visible = profile.connection_visible;
              }
              v0(true === connection_visible);
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              v0 = 0;
            }
            v0 = 0;
            return value;
          })();
        });
        ({ application_id: tmp3[9], profile: profile3 } = identity);
        let connection_visible1;
        if (profile3 != null) {
          connection_visible1 = profile3.connection_visible;
        }
        function t4() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[10] = connection_visible1;
        cResult[11] = identity.provider_issued_user_id;
        cResult[12] = t4;
        tmp19 = t4;
      }
      const obj12 = { id: identity.application_id, icon: null, size: null, botIconFirst: false };
      let icon1;
      if (application != null) {
        icon1 = application.icon;
      }
      obj12.icon = icon1;
      let obj4 = token(tmp2[16]);
      const tmp14 = token;
      obj12.size = tmp(tmp2[17]).getIconSize(tmp14(tmp2[17]).Sizes.LARGE);
      const applicationIconSource = obj4.getApplicationIconSource(obj12);
      let icon2;
      if (application != null) {
        icon2 = application.icon;
      }
      cResult[6] = icon2;
      cResult[7] = identity.application_id;
      cResult[8] = applicationIconSource;
      tmp13 = applicationIconSource;
      const tmpResult2 = tmp(tmp2[17]);
    }
  }
  const fn = function z() {
    let obj = { children: null };
    const items = [React5(native.Spacer, { size: 8 }), , , ];
    const obj2 = { variant: "text-md/medium", children: null };
    const intl = util.intl;
    obj2.children = intl.format(util.t.VgqIPj, { provider: str });
    items[1] = React5(Text_Text.Text, obj2);
    items[2] = React5(native.Spacer, { size: 16 });
    const obj4 = { children: null };
    const intl2 = util.intl;
    obj4.children = intl2.format(util.t.COW3Xn, { platformName: str });
    items[3] = React5(InfoBoxDefault, obj4);
    obj.children = items;
    const obj3 = { provider: str };
    const obj5 = { platformName: str };
    const tmp2 = closure_2_8(View, obj);
    const obj7 = { title: null, body: null, cancelText: null, children: null, confirmText: null, onConfirm: null, confirmColor: null };
    const intl3 = util.intl;
    obj7.title = intl3.formatToPlainString(util.t.U5x12f, { name: str });
    obj7.body = body;
    const intl4 = util.intl;
    obj7.cancelText = intl4.string(util.t["ETE/oC"]);
    obj7.children = tmp2;
    const intl5 = util.intl;
    obj7.confirmText = intl5.string(util.t.ppppRJ);
    obj7.onConfirm = function onConfirm() {
      if (null != token) {
        closure_0(str[14]).handleDeleteApp(tmp);
        const obj = closure_0(str[14]);
      }
    };
    obj7.confirmColor = common_AlertDefault.Colors.RED;
    AlertActionCreatorsDefault.show(obj7);
  };
  cResult[2] = str;
  cResult[3] = tmp9;
  cResult[4] = token;
  cResult[5] = fn;
  tmp11 = fn;
  const tmp7 = _slicedToArray(noop.useState(flag), 2);
}) : (function ConnectedApplicationIdentity(identity) {
  identity = identity.identity;
  _require = identity;
  const token = identity.token;
  let str;
  _slicedToArray = undefined;
  noop = undefined;
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
  const legacyClassComponentStyles = require("createStyles").useLegacyClassComponentStyles(require("ConnectedAccount").readStyles);
  let profile = identity.profile;
  let flag;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  let obj = require("createStyles");
  [tmp6, c4] = noop.useState(flag);
  let intl = tmp2(tmp3[9]).intl;
  const formatResult = intl.format(require("util").t.VgqIPj, { provider: str });
  noop = formatResult;
  let items = [str, formatResult, token];
  let icon;
  const callback = obj2.useCallback(() => {
    let obj = { children: null };
    const items = [React5(native.Spacer, { size: 8 }), , , ];
    const obj2 = { variant: "text-md/medium", children: null };
    const intl = util.intl;
    obj2.children = intl.format(util.t.VgqIPj, { provider: str });
    items[1] = React5(Text_Text.Text, obj2);
    items[2] = React5(native.Spacer, { size: 16 });
    const obj4 = { children: null };
    const intl2 = util.intl;
    obj4.children = intl2.format(util.t.COW3Xn, { platformName: str });
    items[3] = React5(InfoBoxDefault, obj4);
    obj.children = items;
    const obj3 = { provider: str };
    const obj5 = { platformName: str };
    const tmp2 = closure_2_8(View, obj);
    const obj7 = { title: null, body: null, cancelText: null, children: null, confirmText: null, onConfirm: null, confirmColor: null };
    const intl3 = util.intl;
    obj7.title = intl3.formatToPlainString(util.t.U5x12f, { name: str });
    obj7.body = body;
    const intl4 = util.intl;
    obj7.cancelText = intl4.string(util.t["ETE/oC"]);
    obj7.children = tmp2;
    const intl5 = util.intl;
    obj7.confirmText = intl5.string(util.t.ppppRJ);
    obj7.onConfirm = function onConfirm() {
      if (null != token) {
        closure_0(application[14]).handleDeleteApp(tmp);
        const obj = closure_0(application[14]);
      }
    };
    obj7.confirmColor = common_AlertDefault.Colors.RED;
    AlertActionCreatorsDefault.show(obj7);
  }, items);
  if (application != null) {
    icon = application.icon;
  }
  const items1 = [icon, identity.application_id];
  const memo = obj2.useMemo(() => {
    const obj2 = { id: application_id.application_id, icon: null, size: null, botIconFirst: false };
    let icon;
    if (application != null) {
      icon = application.icon;
    }
    obj2.icon = icon;
    const obj = AvatarUtilsDefault;
    obj2.size = Icon.getIconSize(IconDefault.Sizes.LARGE);
    return obj.getApplicationIconSource(obj2);
  }, items1);
  _require = str((connection_visible) => {
    c2 = 0;
    c4 = 0;
    c3 = 0;
    return (function*(arg0) {
      closure_1 = tmp3;
      v3(connection_visible);
      yield token(application[18]).updateApplicationIdentityConfig(connection_visible.application_id, connection_visible.provider_issued_user_id, { connection_visible });
      if (1 === tmp7) {
        c3 = 0;
        const profile = connection_visible.profile;
        connection_visible = undefined;
        if (profile != null) {
          connection_visible = profile.connection_visible;
        }
        v3(true === connection_visible);
        v3 = 3;
      } else if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return value;
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
    let obj3 = { accessible: true, accessibilityLabel: application.name, style: null, size: null, source: null, disableColor: true };
    const items3 = [, ];
    ({ connectedApplicationIdentityIcon: arr4[0], platformIcon: arr4[1] } = legacyClassComponentStyles);
    obj3.style = items3;
    obj3.size = token(tmp3[17]).Sizes.LARGE;
    obj3.source = memo;
    const tmp15 = token(tmp3[17]);
    let obj4 = { size: "sm", variant: "icon-only", icon: closure_7(tmp2(tmp3[19]).XLargeBoldIcon, { size: "sm" }), accessibilityLabel: null, onPress: null };
    let intl2 = tmp2(tmp3[9]).intl;
    obj4.accessibilityLabel = intl2.string(tmp2(tmp3[9]).t["DT39A+"]);
    obj4.onPress = callback;
    let obj5 = { style: legacyClassComponentStyles.container, children: null };
    const obj6 = { style: legacyClassComponentStyles.connectedAccountItem, children: null };
    const tmp16 = closure_7(token(tmp3[17]), obj3);
    let obj7 = { value: true, children: null };
    const obj8 = { style: legacyClassComponentStyles.connectedAccountHeader, children: null };
    const obj9 = { label: application.name, icon: tmp16, trailing: closure_7(tmp2(tmp3[20]).IconButton, obj4) };
    obj8.children = closure_7(tmp2(tmp3[21]).TableRow, obj9);
    const items4 = [closure_7(View, obj8), ];
    const obj10 = { label: null, value: null, onValueChange: null };
    let intl3 = tmp2(tmp3[9]).intl;
    obj10.label = intl3.string(tmp2(tmp3[9]).t.f7yOAX);
    obj10.value = tmp6;
    obj10.onValueChange = tmp12;
    items4[1] = closure_7(tmp2(tmp3[22]).TableSwitchRow, obj10);
    obj7.children = items4;
    obj6.children = closure_8(tmp2(tmp3[23]).TableRowGroupContext, obj7);
    obj5.children = closure_7(View, obj6);
    return closure_7(View, obj5);
  }
  const tmp5 = _slicedToArray(noop.useState(flag), 2);
});