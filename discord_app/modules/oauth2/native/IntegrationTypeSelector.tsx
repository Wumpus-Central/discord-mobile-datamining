// === Module 8790: IntegrationTypeSelector ===

// Module 8790 (IntegrationTypeSelector)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import UserPlusIcon from "UserPlusIcon" /* 4833 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8708 */;
import ServerIcon from "ServerIcon" /* 8791 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { alignItems: "center", flexDirection: "column" }, header: { justifyContent: "center", alignItems: "center", gap: 16, marginTop: 24, marginBottom: 32, width: "100%" }, rows: { alignSelf: "stretch", borderRadius: nativeDefault.radii.sm }, divider: null, learnMore: null, descriptionContainer: null, descriptionMainContainer: null, appIcon: null, appIconMask: null, loadingIcon: null };
let obj3 = { alignSelf: "stretch", borderRadius: nativeDefault.radii.sm };
obj2.divider = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
obj2.learnMore = { marginVertical: 16 };
let obj4 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * StyleSheet.hairlineWidth };
obj2.descriptionContainer = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.descriptionMainContainer = { padding: 8 };
let size = { height: 82, width: 82, borderRadius: nativeDefault.radii.xl };
obj2.appIcon = size;
let obj5 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.appIconMask = { padding: 4, borderRadius: nativeDefault.radii.xl + 4 };
let obj6 = { padding: 4, borderRadius: nativeDefault.radii.xl + 4 };
obj2.loadingIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const styles = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/IntegrationTypeSelector.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  const cResult = application(arr3[6]).c(35);
  application = application.application;
  const onSelect = application.onSelect;
  const tmp4 = styles();
  if (cResult[0] === application.icon) {
    if (cResult[1] === application.id) {
      loadingIcon = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { type: tmp(tmp2[8]).ApplicationIntegrationType.USER_INSTALL, icon: tmp(tmp2[9]).UserPlusIcon, label: null, subLabel: null, beta: false };
      const intl = tmp(tmp2[10]).intl;
      obj3.label = intl.string(tmp(tmp2[10]).t.aCg60P);
      const intl2 = tmp(tmp2[10]).intl;
      obj3.subLabel = intl2.string(tmp(tmp2[10]).t.YeiIUZ);
      cResult[3] = obj3;
      let tmp7 = obj3;
    } else {
      tmp7 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [tmp7, ];
      const obj4 = { type: tmp(tmp2[8]).ApplicationIntegrationType.GUILD_INSTALL, icon: tmp(tmp2[11]).ServerIcon, label: null, subLabel: null, beta: false };
      const intl3 = tmp(tmp2[10]).intl;
      obj4.label = intl3.string(tmp(tmp2[10]).t.E64YCz);
      const intl4 = tmp(tmp2[10]).intl;
      obj4.subLabel = intl4.string(tmp(tmp2[10]).t.bbtoKm);
      items[1] = obj4;
      cResult[4] = items;
      let arr = items;
    } else {
      arr = cResult[4];
    }
    if (cResult[5] !== application.integrationTypesConfig) {
      const found = arr.filter((item) => {
        const integrationTypesConfig = application.integrationTypesConfig;
        let oauth2InstallParams;
        if (integrationTypesConfig != null) {
          if (integrationTypesConfig[item.type] != null) {
            oauth2InstallParams = tmp3.oauth2InstallParams;
          }
        }
        return null != oauth2InstallParams;
      });
      cResult[5] = application.integrationTypesConfig;
      cResult[6] = found;
      arr3 = found;
    } else {
      arr3 = cResult[6];
    }
    if (cResult[7] === loadingIcon) {
      if (cResult[8] === tmp4.appIcon) {
        if (cResult[9] === tmp4.loadingIcon) {
          if (cResult[11] === cResult[10]) {
            if (cResult[12] === tmp4.appIconMask) {
              let tmp17 = cResult[13];
            }
            if (cResult[14] !== application.name) {
              const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: application.name };
              const tmp23 = closure_5(tmp(tmp2[13]).Text, obj5);
              cResult[14] = application.name;
              cResult[15] = tmp23;
              let tmp21 = tmp23;
            } else {
              tmp21 = cResult[15];
            }
            if (cResult[16] === application) {
              if (cResult[17] === tmp4.descriptionContainer) {
                if (cResult[18] === tmp4.descriptionMainContainer) {
                  let tmp24 = cResult[19];
                }
                if (cResult[20] === tmp4.header) {
                  if (cResult[21] === tmp17) {
                    if (cResult[22] === tmp21) {
                      if (cResult[23] === tmp24) {
                        let tmp29 = cResult[24];
                      }
                      if (cResult[25] === onSelect) {
                        if (cResult[26] === arr3) {
                          let tmp33 = cResult[27];
                        }
                        if (cResult[28] === tmp4.rows) {
                          if (cResult[29] === tmp33) {
                            let tmp36 = cResult[30];
                          }
                          if (cResult[31] === tmp4.container) {
                            if (cResult[32] === tmp36) {
                              if (cResult[33] === tmp29) {
                                let tmp40 = cResult[34];
                              }
                              return tmp40;
                            }
                          }
                          const obj6 = { style: tmp4.container, children: null };
                          const items1 = [tmp29, tmp36];
                          obj6.children = items1;
                          const tmp43 = closure_6(closure_4, obj6);
                          cResult[31] = tmp4.container;
                          cResult[32] = tmp36;
                          cResult[33] = tmp29;
                          cResult[34] = tmp43;
                          tmp40 = tmp43;
                        }
                        const obj7 = { style: tmp4.rows, children: tmp33 };
                        const tmp39 = closure_5(closure_4, obj7);
                        cResult[28] = tmp4.rows;
                        cResult[29] = tmp33;
                        cResult[30] = tmp39;
                        tmp36 = tmp39;
                      }
                      const obj8 = {
                        hasIcons: true,
                        children: arr3.map((icon, index) => {
                                              const obj = {
                                                icon: closure_1_5(icon.icon, { color: "interactive-text-default" }),
                                                label: null,
                                                subLabel: null,
                                                onPress() {
                                                  return onSelect(icon.type);
                                                },
                                                start: 0 === index,
                                                end: index === arr3.length - 1,
                                                arrow: true,
                                                trailing: null
                                              };
                                              ({ label: obj.label, subLabel: obj.subLabel } = icon);
                                              let tmpResult;
                                              if (icon.beta) {
                                                tmpResult = closure_1_5(application(arr3[17]).BetaTag, {});
                                              }
                                              obj.trailing = tmpResult;
                                              return closure_1_5(application(arr3[16]).TableRow, obj, icon.type);
                                            })
                      };
                      const tmp35 = closure_5(tmp(tmp2[15]).TableRowGroup, obj8);
                      cResult[25] = onSelect;
                      cResult[26] = arr3;
                      cResult[27] = tmp35;
                      tmp33 = tmp35;
                    }
                  }
                }
                const obj9 = { style: tmp4.header, children: null };
                const items2 = [tmp17, tmp21, tmp24];
                obj9.children = items2;
                const tmp32 = closure_6(closure_4, obj9);
                cResult[20] = tmp4.header;
                cResult[21] = tmp17;
                cResult[22] = tmp21;
                cResult[23] = tmp24;
                cResult[24] = tmp32;
                tmp29 = tmp32;
              }
            }
            let tmp26 = null != application.description;
            if (tmp26) {
              const obj11 = { hideName: true, application, viewContainerStyle: null, mainContainerStyle: null };
              ({ descriptionContainer: obj10.viewContainerStyle, descriptionMainContainer: obj10.mainContainerStyle } = tmp4);
              tmp26 = closure_5(onSelect(tmp2[14]), obj11);
            }
            cResult[16] = application;
            cResult[17] = tmp4.descriptionContainer;
            cResult[18] = tmp4.descriptionMainContainer;
            cResult[19] = tmp26;
            tmp24 = tmp26;
          }
          const obj12 = { style: tmp4.appIconMask, children: cResult[10] };
          const tmp20 = closure_5(closure_4, obj12);
          cResult[11] = cResult[10];
          cResult[12] = tmp4.appIconMask;
          cResult[13] = tmp20;
          tmp17 = tmp20;
        }
      }
    }
    if (null != loadingIcon) {
      const obj13 = { style: tmp4.appIcon, source: loadingIcon };
      let tmp13 = closure_5(onSelect(tmp2[12]), obj13);
    } else {
      const obj14 = { style: null };
      const items3 = [, ];
      ({ appIcon: arr4[0], loadingIcon: arr4[1] } = tmp4);
      obj14.style = items3;
      tmp13 = closure_5(closure_4, obj14);
    }
    cResult[7] = loadingIcon;
    ({ appIcon: tmp3[8], loadingIcon } = tmp4);
    cResult[9] = loadingIcon;
    cResult[10] = tmp13;
  }
  let obj = application(arr3[6]);
  const applicationIconSource = onSelect(arr3[7]).getApplicationIconSource({ id: application.id, icon: application.icon });
  cResult[0] = application.icon;
  cResult[1] = application.id;
  cResult[2] = applicationIconSource;
  loadingIcon = applicationIconSource;
  const obj2 = onSelect(arr3[7]);
  const obj26 = { id: application.id, icon: application.icon };
}) : ((application) => {
  application = application.application;
  const onSelect = application.onSelect;
  const tmp = styles();
  let items = [, ];
  ({ icon: arr[0], id: arr[1] } = application);
  const memo = noop.useMemo(() => AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon }), items);
  const items1 = [application.integrationTypesConfig];
  const memo1 = noop.useMemo(() => {
    const obj = { type: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL, icon: UserPlusIcon.UserPlusIcon, label: null, subLabel: null, beta: false };
    const intl = util.intl;
    obj.label = intl.string(util.t.aCg60P);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t.YeiIUZ);
    const items = [obj, ];
    const obj2 = { type: ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL, icon: ServerIcon.ServerIcon, label: null, subLabel: null, beta: false };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.E64YCz);
    const intl4 = util.intl;
    obj2.subLabel = intl4.string(util.t.bbtoKm);
    items[1] = obj2;
    return items.filter((item) => {
      const integrationTypesConfig = application.integrationTypesConfig;
      let oauth2InstallParams;
      if (integrationTypesConfig != null) {
        if (integrationTypesConfig[item.type] != null) {
          oauth2InstallParams = tmp3.oauth2InstallParams;
        }
      }
      return null != oauth2InstallParams;
    });
  }, items1);
  if (null != memo) {
    let obj2 = { style: tmp.appIcon, source: memo };
    let tmp5 = closure_5(onSelect(memo1[12]), obj2);
    let tmp6 = closure_5;
  } else {
    let obj = { style: null };
    const items2 = [, ];
    ({ appIcon: arr4[0], loadingIcon: arr4[1] } = tmp);
    obj.style = items2;
    tmp5 = closure_5(closure_4, obj);
    tmp6 = closure_5;
  }
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.header, children: null };
  const items3 = [tmp6(closure_4, { style: tmp.appIconMask, children: tmp5 }), tmp6(application(memo1[13]).Text, { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  let tmp6Result = null != application.description;
  if (tmp6Result) {
    const obj8 = { hideName: true, application, viewContainerStyle: null, mainContainerStyle: null };
    ({ descriptionContainer: obj7.viewContainerStyle, descriptionMainContainer: obj7.mainContainerStyle } = tmp);
    tmp6Result = tmp6(onSelect(tmp13[14]), obj8);
  }
  items3[2] = tmp6Result;
  obj4.children = items3;
  const items4 = [closure_6(closure_4, obj4), ];
  const obj9 = {
    style: tmp.rows,
    children: tmp6(application(memo1[15]).TableRowGroup, {
      hasIcons: true,
      children: memo1.map((icon, index) => {
        const obj = {
          icon: closure_1_5(icon.icon, { color: "interactive-text-default" }),
          label: null,
          subLabel: null,
          onPress() {
            return onSelect(icon.type);
          },
          start: 0 === index,
          end: index === memo1.length - 1,
          arrow: true,
          trailing: null
        };
        ({ label: obj.label, subLabel: obj.subLabel } = icon);
        let tmpResult;
        if (icon.beta) {
          tmpResult = closure_1_5(application(memo1[17]).BetaTag, {});
        }
        obj.trailing = tmpResult;
        return closure_1_5(application(memo1[16]).TableRow, obj, icon.type);
      })
    })
  };
  items4[1] = tmp6(closure_4, obj9);
  obj3.children = items4;
  return closure_6(closure_4, obj3);
});
export const useStyles = styles;