// discord_app/modules/favorites/native/FavoritesGuildActionSheet.tsx
import useFavoritesGuildHideActionDefault from "../hooks/useFavoritesGuildHideAction.tsx";
import useFavoritesGuildResetActionDefault from "../hooks/useFavoritesGuildResetAction.tsx";
import useFavoritesGuildAutoAddedThreadsActionDefault from "../hooks/useFavoritesGuildAutoAddedThreadsAction.tsx";
import openFavoritesGuildChannelSortModalDefault from "modal/openFavoritesGuildChannelSortModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FavoriteStore from "../FavoriteStore.tsx";

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesGuildActionSheet(onClose) {
      const cResult = onClose(576).c(30);
      onClose = onClose.onClose;
      const tmp4 = useFavoritesGuildHideActionDefault();
      importDefault = tmp4;
      const tmp5 = useFavoritesGuildResetActionDefault();
      dependencyMap = tmp5;
      const tmp6 = useFavoritesGuildAutoAddedThreadsActionDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FavoriteStore];
        const fn = function s() {
          return FavoriteStore.hasStoredFavorites();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const obj = onClose(576);
      const stateFromStores = onClose(504).useStateFromStores(tmp7, tmp8);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null };
        const intl = tmp(1128).intl;
        obj2.title = intl.string(tmp(1128).t.wMWyci);
        const tmp13 = closure_4(tmp(7197).BottomSheetTitleHeader, obj2);
        cResult[2] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] === tmp6.isAvailable) {
        if (cResult[4] === tmp6.isEnabled) {
          if (cResult[5] === tmp6.label) {
            if (cResult[6] === tmp6.subLabel) {
              if (cResult[7] === tmp6.toggle) {
                let tmp14 = cResult[8];
              }
              if (cResult[9] === stateFromStores) {
                if (cResult[10] === onClose) {
                  let tmp17 = cResult[11];
                }
                const _Symbol = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { IconComponent: tmp(7012).EyeSlashIcon };
                  const tmp22 = closure_4(tmp(7243).ActionSheetRow.Icon, obj3);
                  class R {
                    constructor() {
                      tmp = onClose();
                      performResult = closure_1.perform();
                      return;
                    }
                  }
                  cResult[12] = tmp22;
                  let tmp20 = tmp22;
                } else {
                  tmp20 = cResult[12];
                }
                if (cResult[13] === tmp4) {
                  if (cResult[14] === onClose) {
                    let tmp23 = cResult[15];
                  }
                  if (cResult[16] === tmp4.label) {
                    if (cResult[17] === tmp4.subLabel) {
                      if (cResult[18] === tmp23) {
                        let tmp24 = cResult[19];
                      }
                      if (cResult[20] === onClose) {
                        if (cResult[21] === tmp5) {
                          let tmp27 = cResult[22];
                        }
                        if (cResult[23] === tmp24) {
                          if (cResult[24] === tmp27) {
                            let tmp31 = cResult[25];
                          }
                          if (cResult[26] === tmp31) {
                            if (cResult[27] === tmp14) {
                              if (cResult[28] === tmp17) {
                                let tmp34 = cResult[29];
                              }
                              return tmp34;
                            }
                          }
                          const obj4 = { header: tmp11, children: null };
                          class R {
                            constructor() {
                              tmp = onClose();
                              performResult = closure_1.perform();
                              return;
                            }
                          }
                          tmp36[0] = tmp14;
                          tmp36[1] = tmp17;
                          tmp36[2] = tmp31;
                          obj4.children = tmp36;
                          const tmp37 = closure_5(tmp(7247).ActionSheet, obj4);
                          cResult[26] = tmp31;
                          cResult[27] = tmp14;
                          cResult[28] = tmp17;
                          cResult[29] = tmp37;
                          tmp34 = tmp37;
                        }
                        const obj6 = { hasIcons: true, children: null };
                        const items1 = [,];
                        class R {
                          constructor() {
                            tmp = onClose();
                            performResult = closure_1.perform();
                            return;
                          }
                        }
                        items1[1] = tmp27;
                        obj6.children = items1;
                        const tmp33 = closure_5(tmp(7243).ActionSheetRow.Group, obj6);
                        cResult[23] = tmp24;
                        cResult[24] = tmp27;
                        cResult[25] = tmp33;
                        tmp31 = tmp33;
                      }
                      let tmp28 = null;
                      if (tmp5.isAvailable) {
                        const obj7 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
                        ({ label: obj13.label, subLabel: obj13.subLabel } = tmp5);
                        class R {
                          constructor() {
                            tmp = onClose();
                            performResult = closure_1.perform();
                            return;
                          }
                        }
                        tmp30[0] = tmp(5651).TrashIcon;
                        obj7.icon = closure_4(tmp(7243).ActionSheetRow.Icon, tmp30);
                        obj7.onPress = function onPress() {
                          onClose();
                          closure_2.perform();
                        };
                        tmp28 = closure_4(tmp(7243).ActionSheetRow, obj7);
                      }
                      class R {
                        constructor() {
                          tmp = onClose();
                          performResult = closure_1.perform();
                          return;
                        }
                      }
                      cResult[21] = tmp5;
                      cResult[22] = tmp28;
                      tmp27 = tmp28;
                    }
                  }
                  const obj8 = { label: tmp4.label, subLabel: null, icon: null, variant: "danger", onPress: null };
                  class R {
                    constructor() {
                      tmp = onClose();
                      performResult = closure_1.perform();
                      return;
                    }
                  }
                  obj8.icon = tmp20;
                  obj8.onPress = tmp23;
                  const tmp26 = closure_4(tmp(7243).ActionSheetRow, obj8);
                  cResult[16] = tmp4.label;
                  cResult[17] = tmp4.subLabel;
                  cResult[18] = tmp23;
                  cResult[19] = tmp26;
                  tmp24 = tmp26;
                }
                class R {
                  constructor() {
                    tmp = onClose();
                    performResult = closure_1.perform();
                    return;
                  }
                }
                cResult[13] = tmp4;
                cResult[14] = onClose;
                cResult[15] = R;
                tmp23 = R;
              }
              let tmp18 = null;
              if (stateFromStores) {
                const obj10 = { hasIcons: true, children: null };
                const obj11 = { label: null, icon: null, onPress: null };
                class R {
                  constructor() {
                    tmp = onClose();
                    performResult = closure_1.perform();
                    return;
                  }
                }
                obj11.label = obj9.string(tmp(1128).t["0dOFq+"]);
                const obj12 = { IconComponent: tmp(12016).ArrowsUpDownIcon };
                obj11.icon = closure_4(tmp(7243).ActionSheetRow.Icon, obj12);
                obj11.onPress = function onPress() {
                  onClose();
                  openFavoritesGuildChannelSortModalDefault();
                };
                obj10.children = closure_4(tmp(7243).ActionSheetRow, obj11);
                tmp18 = closure_4(tmp(7243).ActionSheetRow.Group, obj10);
              }
              cResult[10] = onClose;
              cResult[11] = tmp18;
              tmp17 = tmp18;
            }
          }
        }
      }
      let tmp15 = null;
      if (tmp6.isAvailable) {
        const obj14 = { hasIcons: true, children: null };
        const obj15 = { label: tmp6.label, subLabel: null, icon: null, value: null, onValueChange: null };
        class R {
          constructor() {
            tmp = onClose();
            performResult = closure_1.perform();
            return;
          }
        }
        const obj27 = { IconComponent: tmp(8493).ThreadIcon };
        obj15.icon = closure_4(tmp(7243).ActionSheetRow.Icon, obj27);
        ({ isEnabled: obj5.value, toggle: obj5.onValueChange } = tmp6);
        obj14.children = closure_4(tmp(7243).ActionSheetSwitchRow, obj15);
        tmp15 = closure_4(tmp(7243).ActionSheetRow.Group, obj14);
      }
      cResult[3] = tmp6.isAvailable;
      cResult[4] = tmp6.isEnabled;
      cResult[5] = tmp6.label;
      cResult[6] = tmp6.subLabel;
      cResult[7] = tmp6.toggle;
      cResult[8] = tmp15;
      tmp14 = tmp15;
      const tmpResult = onClose(504);
    }
  : function FavoritesGuildActionSheet(onClose) {
      onClose = onClose.onClose;
      const tmp2 = useFavoritesGuildHideActionDefault();
      importDefault = tmp2;
      const tmp3 = useFavoritesGuildResetActionDefault();
      dependencyMap = tmp3;
      const tmp4 = useFavoritesGuildAutoAddedThreadsActionDefault();
      const items = [FavoriteStore];
      const stateFromStores = onClose(504).useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
      const obj2 = { header: null, children: null };
      const obj3 = { title: null };
      const intl = onClose(1128).intl;
      obj3.title = intl.string(onClose(1128).t.wMWyci);
      obj2.header = closure_4(onClose(7197).BottomSheetTitleHeader, obj3);
      let tmp8Result = null;
      if (tmp4.isAvailable) {
        const obj4 = { hasIcons: true, children: null };
        const obj6 = { label: null, subLabel: null, icon: null, value: null, onValueChange: null };
        ({ label: obj5.label, subLabel: obj5.subLabel } = tmp4);
        const obj7 = { IconComponent: tmp5(8493).ThreadIcon };
        obj6.icon = closure_4(tmp5(7243).ActionSheetRow.Icon, obj7);
        ({ isEnabled: obj5.value, toggle: obj5.onValueChange } = tmp4);
        obj4.children = closure_4(tmp5(7243).ActionSheetSwitchRow, obj6);
        tmp8Result = closure_4(tmp5(7243).ActionSheetRow.Group, obj4);
      }
      const items1 = [tmp8Result, ,];
      let tmp8Result3 = null;
      if (stateFromStores) {
        const obj8 = { hasIcons: true, children: null };
        const obj9 = { label: null, icon: null, onPress: null };
        const intl2 = tmp5(1128).intl;
        obj9.label = intl2.string(tmp5(1128).t["0dOFq+"]);
        const obj10 = { IconComponent: tmp5(12016).ArrowsUpDownIcon };
        obj9.icon = closure_4(tmp5(7243).ActionSheetRow.Icon, obj10);
        obj9.onPress = function onPress() {
          onClose();
          openFavoritesGuildChannelSortModalDefault();
        };
        obj8.children = closure_4(tmp5(7243).ActionSheetRow, obj9);
        tmp8Result3 = closure_4(tmp5(7243).ActionSheetRow.Group, obj8);
      }
      items1[1] = tmp8Result3;
      const obj11 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: "danger", onPress: null };
      const obj = onClose(504);
      obj11.icon = closure_4(onClose(7243).ActionSheetRow.Icon, { IconComponent: onClose(7012).EyeSlashIcon });
      obj11.onPress = function onPress() {
        onClose();
        closure_1.perform();
      };
      const items2 = [closure_4(onClose(7243).ActionSheetRow, obj11)];
      let tmp8Result4 = null;
      if (tmp3.isAvailable) {
        const obj25 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
        ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
        const obj26 = { IconComponent: tmp5(5651).TrashIcon };
        obj25.icon = closure_4(tmp5(7243).ActionSheetRow.Icon, obj26);
        obj25.onPress = function onPress() {
          onClose();
          closure_2.perform();
        };
        tmp8Result4 = closure_4(tmp5(7243).ActionSheetRow, obj25);
      }
      items2[1] = tmp8Result4;
      items1[2] = closure_5(onClose(7243).ActionSheetRow.Group, { hasIcons: true, children: items2 });
      obj2.children = items1;
      return closure_5(onClose(7247).ActionSheet, obj2);
    };
