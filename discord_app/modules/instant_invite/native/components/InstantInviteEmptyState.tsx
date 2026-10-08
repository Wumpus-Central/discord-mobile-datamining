// === Module 8697: InstantInviteEmptyState ===

// Module 8697 (InstantInviteEmptyState)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import FreeFormTextInputDefault from "FreeFormTextInput" /* 6611 */;
import InstantInviteUtilsDefault from "InstantInviteUtils" /* 8660 */;
import _modDef8698 from "module_8698" /* 8698 */;
import noop from "module_19" /* 19 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 8659 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { padding: 16 }, emptyStateContainer: { padding: 0, marginBottom: 16 }, emptyStateArt: { marginBottom: 16 }, emptyStateTitle: { marginBottom: 4 }, linkContainer: { maxWidth: "100%", flexDirection: "row", marginBottom: 8, gap: 8 }, inviteInput: { flexShrink: 1 }, expireCaption: { marginBottom: 16 }, settingsButton: null };
let size = { width: 48, height: 48, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs };
obj2.settingsButton = size;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function InstantInviteEmptyState(arg0) {
  const cResult = stateFromStores(576).c(37);
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
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    function getLinkSublabel() {
      if (null == stateFromStores) {
        return null;
      } else {
        const maxAgeOptionByValue = InstantInviteUtilsDefault.getMaxAgeOptionByValue(stateFromStores.maxAge);
        let str2 = "";
        if (null != maxAgeOptionByValue) {
          let str = maxAgeOptionByValue.descriptiveLabel;
          if (str == null) {
            str = "";
          }
          str2 = str;
        }
        const getMaxUsesOptions = InstantInviteUtilsDefault.getMaxUsesOptions;
        const found = getMaxUsesOptions.find((value) => value.value === maxUses.maxUses);
        let str3 = "";
        if (null != found) {
          let str4 = found.descriptiveLabel;
          if (str4 == null) {
            str4 = "";
          }
          str3 = str4;
        }
        if (0 === stateFromStores.maxAge) {
          let dqPWMN = util.t["99ISmn"];
          let tmp3 = require;
        } else {
          tmp3 = require;
          dqPWMN = util.t.dqPWMN;
        }
        const intl = tmp3(1126).intl;
        const obj = { maxAge: str2, maxUses: str3 };
        return intl.format(dqPWMN, obj);
      }
    }
    cResult[2] = stateFromStores;
    cResult[3] = getLinkSublabel;
    let tmp9 = getLinkSublabel;
  } else {
    tmp9 = cResult[3];
  }
  ({ container, emptyStateContainer, emptyStateArt, emptyStateTitle } = tmp4);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.tQc0l8);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.DXgdcD);
    cResult[4] = stringResult;
    cResult[5] = stringResult1;
    let tmp11 = stringResult1;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp4.emptyStateArt) {
    if (cResult[7] === tmp4.emptyStateContainer) {
      if (cResult[8] === tmp4.emptyStateTitle) {
        let tmp14 = cResult[9];
      }
      if (link == null) {
        link = "";
      }
      if (cResult[10] === onCopy) {
        if (cResult[11] === tmp4.inviteInput) {
          if (cResult[12] === link) {
            let tmp17 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(tmp(1126).t["3D5yo/"]);
            cResult[14] = stringResult2;
            let tmp22 = stringResult2;
          } else {
            tmp22 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp26 = closure_5(tmp(7082).SettingsIcon, {});
            cResult[15] = tmp26;
            let tmp24 = tmp26;
          } else {
            tmp24 = cResult[15];
          }
          if (cResult[16] === onPressSettings) {
            if (cResult[17] === tmp4.settingsButton) {
              let tmp27 = cResult[18];
            }
            if (cResult[19] === tmp4.linkContainer) {
              if (cResult[20] === tmp17) {
                if (cResult[21] === tmp27) {
                  let tmp30 = cResult[22];
                }
                if (cResult[23] !== tmp9) {
                  const tmp9Result = tmp9();
                  cResult[23] = tmp9;
                  cResult[24] = tmp9Result;
                  let tmp34 = tmp9Result;
                } else {
                  tmp34 = cResult[24];
                }
                if (cResult[25] === tmp4.expireCaption) {
                  if (cResult[26] === tmp34) {
                    let tmp36 = cResult[27];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(1126).intl;
                    const stringResult3 = intl4.string(tmp(1126).t.Ej3B3Y);
                    cResult[28] = stringResult3;
                    let tmp39 = stringResult3;
                  } else {
                    tmp39 = cResult[28];
                  }
                  if (cResult[29] !== onShare) {
                    const obj2 = { text: tmp39, onPress: onShare };
                    const tmp43 = closure_5(tmp(5375).Button, obj2);
                    cResult[29] = onShare;
                    cResult[30] = tmp43;
                    let tmp41 = tmp43;
                  } else {
                    tmp41 = cResult[30];
                  }
                  if (cResult[31] === tmp4.container) {
                    if (cResult[32] === tmp14) {
                      if (cResult[33] === tmp30) {
                        if (cResult[34] === tmp36) {
                          if (cResult[35] === tmp41) {
                            let tmp44 = cResult[36];
                          }
                          return tmp44;
                        }
                      }
                    }
                  }
                  const obj3 = { style: container, children: null };
                  const items1 = [tmp14, tmp30, tmp36, tmp41];
                  obj3.children = items1;
                  const tmp47 = closure_6(View, obj3);
                  cResult[31] = tmp4.container;
                  cResult[32] = tmp14;
                  cResult[33] = tmp30;
                  cResult[34] = tmp36;
                  cResult[35] = tmp41;
                  cResult[36] = tmp47;
                  tmp44 = tmp47;
                }
                const obj4 = { style: tmp4.expireCaption, variant: "text-xs/medium", color: "text-muted", children: tmp34 };
                const tmp38 = closure_5(tmp(5086).Text, obj4);
                cResult[25] = tmp4.expireCaption;
                cResult[26] = tmp34;
                cResult[27] = tmp38;
                tmp36 = tmp38;
              }
            }
            const obj5 = { style: tmp4.linkContainer, children: null };
            const items2 = [tmp17, tmp27];
            obj5.children = items2;
            const tmp33 = closure_6(View, obj5);
            cResult[19] = tmp4.linkContainer;
            cResult[20] = tmp17;
            cResult[21] = tmp27;
            cResult[22] = tmp33;
            tmp30 = tmp33;
          }
          const obj6 = { accessibilityLabel: tmp22, accessibilityRole: "button", onPress: onPressSettings, style: tmp4.settingsButton, children: tmp24 };
          const tmp29 = closure_5(tmp(6189).PressableOpacity, obj6);
          cResult[16] = onPressSettings;
          cResult[17] = tmp4.settingsButton;
          cResult[18] = tmp29;
          tmp27 = tmp29;
        }
      }
      const obj7 = { accessibilityRole: "button", onPress: onCopy, editable: false, value: link, style: tmp4.inviteInput, forceAccessibleContainer: true, clearButtonVisibility: tmp(1200).ClearButtonVisibility.NEVER };
      const tmp21 = closure_5(FreeFormTextInputDefault, obj7);
      cResult[10] = onCopy;
      cResult[11] = tmp4.inviteInput;
      cResult[12] = link;
      cResult[13] = tmp21;
      tmp17 = tmp21;
    }
  }
  const tmpResult = stateFromStores(504);
  const tmp15 = closure_5(stateFromStores(1200).RefreshEmptyState, { containerStyle: emptyStateContainer, imageStyle: emptyStateArt, titleStyle: emptyStateTitle, source: _modDef8698, title: tmp10, body: tmp11 });
  cResult[6] = tmp4.emptyStateArt;
  cResult[7] = tmp4.emptyStateContainer;
  cResult[8] = tmp4.emptyStateTitle;
  cResult[9] = tmp15;
  tmp14 = tmp15;
  const obj8 = { containerStyle: emptyStateContainer, imageStyle: emptyStateArt, titleStyle: emptyStateTitle, source: _modDef8698, title: tmp10, body: tmp11 };
}) : (function InstantInviteEmptyState(link) {
  let str = link.link;
  let stateFromStores;
  ({ onCopy, onShare, onPressSettings } = link);
  const tmp = closure_7();
  const items = [CreateInviteModalStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => inviteSettings.getInviteSettings());
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateArt, titleStyle: tmp.emptyStateTitle, source: _modDef8698, title: null, body: null };
  const intl = stateFromStores(1126).intl;
  obj3.title = intl.string(stateFromStores(1126).t.tQc0l8);
  const intl2 = stateFromStores(1126).intl;
  obj3.body = intl2.string(stateFromStores(1126).t.DXgdcD);
  const items1 = [closure_5(stateFromStores(1200).RefreshEmptyState, obj3), , , ];
  const obj4 = { style: tmp.linkContainer, children: null };
  const obj5 = { accessibilityRole: "button", onPress: onCopy, editable: false, value: null, style: null, forceAccessibleContainer: true, clearButtonVisibility: null };
  const obj = stateFromStores(504);
  if (str == null) {
    str = "";
  }
  obj5.value = str;
  obj5.style = tmp.inviteInput;
  obj5.clearButtonVisibility = stateFromStores(1200).ClearButtonVisibility.NEVER;
  const items2 = [closure_5(FreeFormTextInputDefault, obj5), ];
  const obj6 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, children: null };
  const intl3 = tmp2(1126).intl;
  obj6.accessibilityLabel = intl3.string(stateFromStores(1126).t["3D5yo/"]);
  obj6.onPress = onPressSettings;
  obj6.style = tmp.settingsButton;
  obj6.children = closure_5(stateFromStores(7082).SettingsIcon, {});
  items2[1] = closure_5(stateFromStores(6189).PressableOpacity, obj6);
  obj4.children = items2;
  items1[1] = closure_6(View, obj4);
  const obj7 = { style: tmp.expireCaption, variant: "text-xs/medium", color: "text-muted", children: null };
  if (null == stateFromStores) {
    obj7.children = null;
    items1[2] = closure_5(tmp10, obj7);
    const obj8 = { text: null, onPress: null };
    const intl5 = tmp2(1126).intl;
    obj8.text = intl5.string(tmp2(1126).t.Ej3B3Y);
    obj8.onPress = onShare;
    items1[3] = closure_5(tmp2(5375).Button, obj8);
    obj2.children = items1;
    return closure_6(View, obj2);
  } else {
    const maxAgeOptionByValue = InstantInviteUtilsDefault.getMaxAgeOptionByValue(stateFromStores.maxAge);
    let str3 = "";
    if (null != maxAgeOptionByValue) {
      let str4 = maxAgeOptionByValue.descriptiveLabel;
      if (str4 == null) {
        str4 = "";
      }
      str3 = str4;
    }
    const getMaxUsesOptions = InstantInviteUtilsDefault.getMaxUsesOptions;
    const found = getMaxUsesOptions.find((value) => value.value === stateFromStores.maxUses);
    let str5 = "";
    if (null != found) {
      let str6 = found.descriptiveLabel;
      if (str6 == null) {
        str6 = "";
      }
      str5 = str6;
    }
    if (0 === stateFromStores.maxAge) {
      let dqPWMN = tmp2(1126).t["99ISmn"];
    } else {
      dqPWMN = tmp2(1126).t.dqPWMN;
    }
    const intl4 = tmp2(1126).intl;
    const obj9 = { maxAge: str3, maxUses: str5 };
    intl4.format(dqPWMN, obj9);
    const tmp8Result = InstantInviteUtilsDefault;
  }
});