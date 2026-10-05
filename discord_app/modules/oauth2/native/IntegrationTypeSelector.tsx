// discord_app/modules/oauth2/native/IntegrationTypeSelector.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import UserPlusIcon from "../../../design/components/Icon/native/redesign/generated/UserPlusIcon.tsx";
import ApplicationIntegrationType from "../../../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import ServerIcon from "../../../design/components/Icon/native/redesign/generated/ServerIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let application;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { alignItems: "center", flexDirection: "column" },
  header: { justifyContent: "center", alignItems: "center", gap: 16, marginTop: 24, marginBottom: 32, width: "100%" },
  rows: obj2,
  divider: obj3,
  learnMore: { marginVertical: 16 },
  descriptionContainer: obj4,
  descriptionMainContainer: { padding: 8 },
  appIcon: size,
  appIconMask: obj5,
  loadingIcon: obj6,
};
obj2 = { alignSelf: "stretch", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = {
  height: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: -1 * StyleSheet.hairlineWidth,
};
obj4 = {
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  width: "100%",
  borderRadius: nativeDefault.radii.sm,
};
size = { height: 82, width: 82, borderRadius: nativeDefault.radii.xl };
obj5 = { padding: 4, borderRadius: nativeDefault.radii.xl + 4 };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const styles = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (application) => {
      let arr3;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items1;
      let items2;
      let items3;
      let obj = application(arr3[6]);
      const cResult = obj.c(35);
      application = application.application;
      const onSelect = application.onSelect;
      const tmp4 = styles();
      if (cResult[0] === application.icon) {
        let tmp5;
        let tmp8;
        let arr;
        let tmp14;
        if (cResult[1] === application.id) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            type: application(arr3[8]).ApplicationIntegrationType.USER_INSTALL,
            icon: application(arr3[9]).UserPlusIcon,
            label: intl.string(application(arr3[10]).t.aCg60P),
            subLabel: intl2.string(application(arr3[10]).t.YeiIUZ),
            beta: false,
          };
          intl = tmp(tmp2[10]).intl;
          intl2 = tmp(tmp2[10]).intl;
          cResult[3] = obj3;
          tmp8 = obj3;
        } else {
          tmp8 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [tmp8];
          const obj4 = {
            type: application(arr3[8]).ApplicationIntegrationType.GUILD_INSTALL,
            icon: application(arr3[11]).ServerIcon,
            label: intl3.string(application(arr3[10]).t.E64YCz),
            subLabel: intl4.string(application(arr3[10]).t.bbtoKm),
            beta: false,
          };
          intl3 = tmp(tmp2[10]).intl;
          intl4 = tmp(tmp2[10]).intl;
          items[1] = obj4;
          cResult[4] = items;
          arr = items;
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
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp4.appIcon) {
            let tmp10;
            if (cResult[9] === tmp4.loadingIcon) {
              tmp10 = cResult[10];
            }
            if (cResult[11] === tmp10) {
              let tmp17;
              let tmp21;
              if (cResult[12] === tmp4.appIconMask) {
                tmp17 = cResult[13];
              }
              if (cResult[14] !== application.name) {
                const obj5 = {
                  variant: "heading-lg/bold",
                  color: "mobile-text-heading-primary",
                  children: application.name,
                };
                const tmp23 = closure_5(application(arr3[13]).Text, obj5);
                cResult[14] = application.name;
                cResult[15] = tmp23;
                tmp21 = tmp23;
              } else {
                tmp21 = cResult[15];
              }
              if (cResult[16] === application) {
                if (cResult[17] === tmp4.descriptionContainer) {
                  let tmp24;
                  if (cResult[18] === tmp4.descriptionMainContainer) {
                    tmp24 = cResult[19];
                  }
                  if (cResult[20] === tmp4.header) {
                    if (cResult[21] === tmp17) {
                      if (cResult[22] === tmp21) {
                        let tmp29;
                        if (cResult[23] === tmp24) {
                          tmp29 = cResult[24];
                        }
                        if (cResult[25] === onSelect) {
                          let tmp33;
                          if (cResult[26] === arr3) {
                            tmp33 = cResult[27];
                          }
                          if (cResult[28] === tmp4.rows) {
                            let tmp36;
                            if (cResult[29] === tmp33) {
                              tmp36 = cResult[30];
                            }
                            if (cResult[31] === tmp4.container) {
                              if (cResult[32] === tmp36) {
                                let tmp40;
                                if (cResult[33] === tmp29) {
                                  tmp40 = cResult[34];
                                }
                                return tmp40;
                              }
                            }
                            const obj6 = { style: tmp4.container, children: items1 };
                            items1 = [tmp29, tmp36];
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
                            let tmpResult;
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
                              trailing: tmpResult,
                            };
                            const TableRow = application(arr3[16]).TableRow;
                            ({ label: obj.label, subLabel: obj.subLabel } = icon);
                            tmpResult = undefined;
                            if (icon.beta) {
                              tmpResult = closure_1_5(application(arr3[17]).BetaTag, {});
                            }
                            return closure_1_5(TableRow, obj, icon.type);
                          }),
                        };
                        const TableRowGroup = tmp(tmp2[15]).TableRowGroup;
                        const tmp35 = closure_5(TableRowGroup, obj8);
                        cResult[25] = onSelect;
                        cResult[26] = arr3;
                        cResult[27] = tmp35;
                        tmp33 = tmp35;
                      }
                    }
                  }
                  const obj9 = { style: tmp4.header, children: items2 };
                  items2 = [tmp17, tmp21, tmp24];
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
                ({
                  descriptionContainer: obj10.viewContainerStyle,
                  descriptionMainContainer: obj10.mainContainerStyle,
                } = tmp4);
                tmp26 = closure_5(onSelect(tmp2[14]), obj11);
              }
              cResult[16] = application;
              cResult[17] = tmp4.descriptionContainer;
              cResult[18] = tmp4.descriptionMainContainer;
              cResult[19] = tmp26;
              tmp24 = tmp26;
            }
            const obj12 = { style: tmp4.appIconMask, children: tmp10 };
            const tmp20 = closure_5(closure_4, obj12);
            cResult[11] = tmp10;
            cResult[12] = tmp4.appIconMask;
            cResult[13] = tmp20;
            tmp17 = tmp20;
          }
        }
        if (null != tmp5) {
          const obj13 = { style: tmp4.appIcon, source: tmp5 };
          tmp14 = closure_5(onSelect(tmp2[12]), obj13);
        } else {
          const obj14 = { style: items3 };
          items3 = [,];
          ({ appIcon: arr4[0], loadingIcon: arr4[1] } = tmp4);
          tmp14 = closure_5(closure_4, obj14);
        }
        cResult[7] = tmp5;
        cResult[8] = tmp4.appIcon;
        cResult[9] = tmp4.loadingIcon;
        cResult[10] = tmp14;
        tmp10 = tmp14;
      }
      const obj2 = onSelect(arr3[7]);
      const obj26 = { id: application.id, icon: application.icon };
      const applicationIconSource = obj2.getApplicationIconSource(obj26);
      cResult[0] = application.icon;
      cResult[1] = application.id;
      cResult[2] = applicationIconSource;
      tmp5 = applicationIconSource;
    }
  : (application) => {
      let TableRowGroup;
      let items2;
      let items3;
      let items4;
      let obj17;
      let tmp5;
      let tmp6;
      application = application.application;
      const onSelect = application.onSelect;
      const tmp = styles();
      let items = [,];
      ({ icon: arr[0], id: arr[1] } = application);
      const memo = react.useMemo(() => {
        const obj = AvatarUtilsDefault;
        const obj2 = { id: application.id, icon: application.icon };
        return obj.getApplicationIconSource(obj2);
      }, items);
      const items1 = [application.integrationTypesConfig];
      const memo1 = react.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        let intl4;
        const obj = {
          type: ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL,
          icon: UserPlusIcon.UserPlusIcon,
          label: intl.string(intl5.t.aCg60P),
          subLabel: intl2.string(intl5.t.YeiIUZ),
          beta: false,
        };
        intl = intl5.intl;
        intl2 = intl5.intl;
        const items = [obj];
        const obj2 = {
          type: ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL,
          icon: ServerIcon.ServerIcon,
          label: intl3.string(intl5.t.E64YCz),
          subLabel: intl4.string(intl5.t.bbtoKm),
          beta: false,
        };
        intl3 = intl5.intl;
        intl4 = intl5.intl;
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
        tmp5 = closure_5(onSelect(memo1[12]), obj2);
        tmp6 = closure_5;
      } else {
        let obj = { style: items2 };
        items2 = [,];
        ({ appIcon: arr4[0], loadingIcon: arr4[1] } = tmp);
        tmp5 = closure_5(closure_4, obj);
        tmp6 = closure_5;
      }
      const obj4 = { style: tmp.header, children: items3 };
      items3 = [, ,];
      const obj3 = { style: tmp.container, children: items4 };
      const obj5 = { style: tmp.appIconMask, children: tmp5 };
      items3[0] = tmp6(closure_4, obj5);
      const obj6 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: application.name };
      items3[1] = tmp6(application(memo1[13]).Text, obj6);
      let tmp6Result = null != application.description;
      const tmp12 = application;
      if (tmp6Result) {
        const obj8 = { hideName: true, application, viewContainerStyle: null, mainContainerStyle: null };
        ({ descriptionContainer: obj7.viewContainerStyle, descriptionMainContainer: obj7.mainContainerStyle } = tmp);
        tmp6Result = tmp6(onSelect(tmp13[14]), obj8);
      }
      items3[2] = tmp6Result;
      items4 = [closure_6(closure_4, obj4)];
      const obj9 = { style: tmp.rows, children: tmp6(TableRowGroup, obj17) };
      obj17 = {
        hasIcons: true,
        children: memo1.map((icon, index) => {
          let tmpResult;
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
            trailing: tmpResult,
          };
          const TableRow = application(memo1[16]).TableRow;
          ({ label: obj.label, subLabel: obj.subLabel } = icon);
          tmpResult = undefined;
          if (icon.beta) {
            tmpResult = closure_1_5(application(memo1[17]).BetaTag, {});
          }
          return closure_1_5(TableRow, obj, icon.type);
        }),
      };
      TableRowGroup = tmp12(tmp13[15]).TableRowGroup;
      items4[1] = tmp6(closure_4, obj9);
      return closure_6(closure_4, obj3);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/oauth2/native/IntegrationTypeSelector.tsx");

export default tmp6;
export const useStyles = styles;
