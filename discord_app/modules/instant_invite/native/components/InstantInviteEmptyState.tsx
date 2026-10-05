// discord_app/modules/instant_invite/native/components/InstantInviteEmptyState.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import FreeFormTextInputDefault from "../../../../design/void/Form/native/FreeFormTextInput.tsx";
import InstantInviteUtilsDefault from "../../../../utils/InstantInviteUtils.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09515_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {
  container: { padding: 16 },
  emptyStateContainer: { padding: 0, marginBottom: 16 },
  emptyStateArt: { marginBottom: 16 },
  emptyStateTitle: { marginBottom: 4 },
  linkContainer: { maxWidth: "100%", flexDirection: "row", marginBottom: 8, gap: 8 },
  inviteInput: { flexShrink: 1 },
  expireCaption: { marginBottom: 16 },
  settingsButton: size,
};
size = {
  width: 48,
  height: 48,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.xs,
};
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let container;
      let emptyStateArt;
      let emptyStateContainer;
      let emptyStateTitle;
      let inviteSettings;
      let items1;
      let items2;
      let link;
      let onCopy;
      let onPressSettings;
      let onShare;
      let stateFromStores;
      let tmp10;
      let tmp11;
      let tmp5;
      let tmp6;
      let tmp9;
      let obj = stateFromStores(576);
      const cResult = obj.c(37);
      ({ link, onCopy, onShare, onPressSettings } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CreateInviteModalStore];
        const fn = function u() {
          return inviteSettings.getInviteSettings();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = stateFromStores(504);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function h() {
          let maxUses;
          if (null == stateFromStores) {
            return null;
          } else {
            let dqPWMN;
            let tmp3;
            const obj2 = InstantInviteUtilsDefault;
            const maxAgeOptionByValue = obj2.getMaxAgeOptionByValue(stateFromStores.maxAge);
            let str2 = "";
            let str = "";
            if (null != maxAgeOptionByValue) {
              let descriptiveLabel = maxAgeOptionByValue.descriptiveLabel;
              if (descriptiveLabel == null) {
                descriptiveLabel = str2;
              }
              str = descriptiveLabel;
            }
            const getMaxUsesOptions = InstantInviteUtilsDefault.getMaxUsesOptions;
            const found = getMaxUsesOptions.find((value) => value.value === maxUses.maxUses);
            if (null != found) {
              str2 = found.descriptiveLabel;
            }
            if (0 === stateFromStores.maxAge) {
              dqPWMN = intl6.t["99ISmn"];
              tmp3 = require;
            } else {
              tmp3 = require;
              dqPWMN = intl6.t.dqPWMN;
            }
            const intl = tmp3(1126).intl;
            const obj = { maxAge: str, maxUses: str2 };
            return intl.format(dqPWMN, obj);
          }
        };
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[3];
      }
      ({ container, emptyStateContainer, emptyStateArt, emptyStateTitle } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(stateFromStores(1126).t.tQc0l8);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(stateFromStores(1126).t.DXgdcD);
        cResult[4] = stringResult;
        cResult[5] = stringResult1;
        tmp11 = stringResult1;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4.emptyStateArt) {
        if (cResult[7] === tmp4.emptyStateContainer) {
          let tmp14;
          if (cResult[8] === tmp4.emptyStateTitle) {
            tmp14 = cResult[9];
          }
          const linkContainer = tmp4.linkContainer;
          if (link == null) {
            link = "";
          }
          if (cResult[10] === onCopy) {
            if (cResult[11] === tmp4.inviteInput) {
              let tmp17;
              let tmp22;
              let tmp24;
              if (cResult[12] === link) {
                tmp17 = cResult[13];
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(1126).intl;
                const stringResult2 = intl3.string(stateFromStores(1126).t["3D5yo/"]);
                cResult[14] = stringResult2;
                tmp22 = stringResult2;
              } else {
                tmp22 = cResult[14];
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp26 = closure_5(stateFromStores(6883).SettingsIcon, {});
                cResult[15] = tmp26;
                tmp24 = tmp26;
              } else {
                tmp24 = cResult[15];
              }
              if (cResult[16] === onPressSettings) {
                let tmp27;
                if (cResult[17] === tmp4.settingsButton) {
                  tmp27 = cResult[18];
                }
                if (cResult[19] === tmp4.linkContainer) {
                  if (cResult[20] === tmp17) {
                    let tmp30;
                    let tmp34;
                    if (cResult[21] === tmp27) {
                      tmp30 = cResult[22];
                    }
                    const expireCaption = tmp4.expireCaption;
                    if (cResult[23] !== tmp9) {
                      const tmp9Result = tmp9();
                      cResult[23] = tmp9;
                      cResult[24] = tmp9Result;
                      tmp34 = tmp9Result;
                    } else {
                      tmp34 = cResult[24];
                    }
                    if (cResult[25] === tmp4.expireCaption) {
                      let tmp36;
                      let tmp39;
                      let tmp41;
                      if (cResult[26] === tmp34) {
                        tmp36 = cResult[27];
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = tmp(1126).intl;
                        const stringResult3 = intl4.string(stateFromStores(1126).t.Ej3B3Y);
                        cResult[28] = stringResult3;
                        tmp39 = stringResult3;
                      } else {
                        tmp39 = cResult[28];
                      }
                      if (cResult[29] !== onShare) {
                        let obj2 = { text: tmp39, onPress: onShare };
                        const tmp43 = closure_5(stateFromStores(5594).Button, obj2);
                        cResult[29] = onShare;
                        cResult[30] = tmp43;
                        tmp41 = tmp43;
                      } else {
                        tmp41 = cResult[30];
                      }
                      if (cResult[31] === tmp4.container) {
                        if (cResult[32] === tmp14) {
                          if (cResult[33] === tmp30) {
                            if (cResult[34] === tmp36) {
                              let tmp44;
                              if (cResult[35] === tmp41) {
                                tmp44 = cResult[36];
                              }
                              return tmp44;
                            }
                          }
                        }
                      }
                      const obj3 = { style: container, children: items1 };
                      items1 = [tmp14, tmp30, tmp36, tmp41];
                      const tmp47 = closure_6(View, obj3);
                      cResult[31] = tmp4.container;
                      cResult[32] = tmp14;
                      cResult[33] = tmp30;
                      cResult[34] = tmp36;
                      cResult[35] = tmp41;
                      cResult[36] = tmp47;
                      tmp44 = tmp47;
                    }
                    const obj4 = {
                      style: expireCaption,
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: tmp34,
                    };
                    const tmp38 = closure_5(stateFromStores(4886).Text, obj4);
                    cResult[25] = tmp4.expireCaption;
                    cResult[26] = tmp34;
                    cResult[27] = tmp38;
                    tmp36 = tmp38;
                  }
                }
                const obj5 = { style: linkContainer, children: items2 };
                items2 = [tmp17, tmp27];
                const tmp33 = closure_6(View, obj5);
                cResult[19] = tmp4.linkContainer;
                cResult[20] = tmp17;
                cResult[21] = tmp27;
                cResult[22] = tmp33;
                tmp30 = tmp33;
              }
              const obj6 = {
                accessibilityLabel: tmp22,
                accessibilityRole: "button",
                onPress: onPressSettings,
                style: tmp4.settingsButton,
                children: tmp24,
              };
              const tmp29 = closure_5(stateFromStores(5909).PressableOpacity, obj6);
              cResult[16] = onPressSettings;
              cResult[17] = tmp4.settingsButton;
              cResult[18] = tmp29;
              tmp27 = tmp29;
            }
          }
          const obj7 = {
            accessibilityRole: "button",
            onPress: onCopy,
            editable: false,
            value: link,
            style: tmp4.inviteInput,
            forceAccessibleContainer: true,
            clearButtonVisibility: stateFromStores(1188).ClearButtonVisibility.NEVER,
          };
          const tmp20 = FreeFormTextInputDefault;
          const tmp21 = closure_5(tmp20, obj7);
          cResult[10] = onCopy;
          cResult[11] = tmp4.inviteInput;
          cResult[12] = link;
          cResult[13] = tmp21;
          tmp17 = tmp21;
        }
      }
      const obj8 = {
        containerStyle: emptyStateContainer,
        imageStyle: emptyStateArt,
        titleStyle: emptyStateTitle,
        source: AssetRegistryDefault,
        title: tmp10,
        body: tmp11,
      };
      const RefreshEmptyState = tmp(1188).RefreshEmptyState;
      const tmp15 = closure_5(RefreshEmptyState, obj8);
      cResult[6] = tmp4.emptyStateArt;
      cResult[7] = tmp4.emptyStateContainer;
      cResult[8] = tmp4.emptyStateTitle;
      cResult[9] = tmp15;
      tmp14 = tmp15;
    }
  : (link) => {
      let formatResult;
      let intl;
      let intl2;
      let intl3;
      let intl5;
      let inviteSettings;
      let items1;
      let items2;
      let onCopy;
      let onPressSettings;
      let onShare;
      let str = link.link;
      let stateFromStores;
      ({ onCopy, onShare, onPressSettings } = link);
      const tmp = closure_7();
      const items = [CreateInviteModalStore];
      const obj = stateFromStores(504);
      stateFromStores = obj.useStateFromStores(items, () => inviteSettings.getInviteSettings());
      const obj2 = { style: tmp.container, children: items1 };
      const obj3 = {
        containerStyle: tmp.emptyStateContainer,
        imageStyle: tmp.emptyStateArt,
        titleStyle: tmp.emptyStateTitle,
        source: AssetRegistryDefault,
        title: intl.string(stateFromStores(1126).t.tQc0l8),
        body: intl2.string(stateFromStores(1126).t.DXgdcD),
      };
      const RefreshEmptyState = stateFromStores(1188).RefreshEmptyState;
      intl = stateFromStores(1126).intl;
      intl2 = stateFromStores(1126).intl;
      items1 = [closure_5(RefreshEmptyState, obj3), , ,];
      const obj4 = { style: tmp.linkContainer, children: items2 };
      const obj5 = {
        accessibilityRole: "button",
        onPress: onCopy,
        editable: false,
        value: str,
        style: tmp.inviteInput,
        forceAccessibleContainer: true,
        clearButtonVisibility: stateFromStores(1188).ClearButtonVisibility.NEVER,
      };
      const tmp9 = FreeFormTextInputDefault;
      if (str == null) {
        str = "";
      }
      items2 = [closure_5(tmp9, obj5)];
      const obj6 = {
        accessibilityLabel: intl3.string(stateFromStores(1126).t["3D5yo/"]),
        accessibilityRole: "button",
        onPress: onPressSettings,
        style: tmp.settingsButton,
        children: closure_5(stateFromStores(6883).SettingsIcon, {}),
      };
      const PressableOpacity = tmp2(5909).PressableOpacity;
      intl3 = tmp2(1126).intl;
      items2[1] = closure_5(PressableOpacity, obj6);
      items1[1] = closure_6(View, obj4);
      const obj7 = { style: tmp.expireCaption, variant: "text-xs/medium", color: "text-muted", children: formatResult };
      formatResult = null;
      const Text = tmp2(4886).Text;
      if (null != stateFromStores) {
        let dqPWMN;
        const tmp8Result = InstantInviteUtilsDefault;
        const maxAgeOptionByValue = tmp8Result.getMaxAgeOptionByValue(stateFromStores.maxAge);
        let str2 = "";
        let str3 = "";
        if (null != maxAgeOptionByValue) {
          let descriptiveLabel = maxAgeOptionByValue.descriptiveLabel;
          if (descriptiveLabel == null) {
            descriptiveLabel = str2;
          }
          str3 = descriptiveLabel;
        }
        const getMaxUsesOptions = InstantInviteUtilsDefault.getMaxUsesOptions;
        const found = getMaxUsesOptions.find((value) => value.value === stateFromStores.maxUses);
        if (null != found) {
          str2 = found.descriptiveLabel;
        }
        if (0 === stateFromStores.maxAge) {
          dqPWMN = tmp2(1126).t["99ISmn"];
        } else {
          dqPWMN = tmp2(1126).t.dqPWMN;
        }
        const intl4 = tmp2(1126).intl;
        const obj8 = { maxAge: str3, maxUses: str2 };
        formatResult = intl4.format(dqPWMN, obj8);
      }
      items1[2] = closure_5(Text, obj7);
      const obj9 = { text: intl5.string(stateFromStores(1126).t.Ej3B3Y), onPress: onShare };
      const Button = tmp2(5594).Button;
      intl5 = tmp2(1126).intl;
      items1[3] = closure_5(Button, obj9);
      return closure_6(View, obj2);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteEmptyState.tsx");

export default tmp4;
