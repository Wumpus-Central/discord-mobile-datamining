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
      const cResult = onClose(576).c(34);
      onClose = onClose.onClose;
      const tmp4 = useFavoritesGuildHideActionDefault();
      importDefault = tmp4;
      const tmp5 = useFavoritesGuildResetActionDefault();
      dependencyMap = tmp5;
      const tmp6 = useFavoritesGuildAutoAddedThreadsActionDefault();
      const obj = onClose(576);
      const hasAccess = onClose(10279).useFavoritesAccess("FavoritesGuildActionSheet").hasAccess;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FavoriteStore];
        const fn = function c() {
          return FavoriteStore.hasStoredFavorites();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const obj2 = onClose(10279);
      const stateFromStores = onClose(504).useStateFromStores(tmp7, tmp8);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { title: null };
        const intl = tmp(1126).intl;
        obj3.title = intl.string(tmp(1126).t.wMWyci);
        const tmp13 = closure_4(tmp(6835).BottomSheetTitleHeader, obj3);
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
              if (cResult[9] === hasAccess) {
                if (cResult[10] === stateFromStores) {
                  if (cResult[11] === onClose) {
                    let tmp18 = cResult[12];
                  }
                  if (tmp4.isPreview) {
                    let EyeSlashIcon = tmp(6212).XSmallIcon;
                  } else {
                    EyeSlashIcon = tmp(6648).EyeSlashIcon;
                  }
                  if (cResult[13] !== EyeSlashIcon) {
                    const obj4 = { IconComponent: EyeSlashIcon };
                    const tmp24 = closure_4(tmp(6888).ActionSheetRow.Icon, obj4);
                    cResult[13] = EyeSlashIcon;
                    class F {
                      constructor() {
                        tmp = onClose();
                        performResult = closure_1.perform();
                        return;
                      }
                    }
                    cResult[14] = tmp24;
                    let tmp22 = tmp24;
                  } else {
                    tmp22 = cResult[14];
                  }
                  let str = "danger";
                  if (tmp4.isPreview) {
                    str = "default";
                  }
                  if (cResult[15] === tmp4) {
                    if (cResult[16] === onClose) {
                      let tmp25 = cResult[17];
                    }
                    if (cResult[18] === tmp4.label) {
                      if (cResult[19] === tmp4.subLabel) {
                        if (cResult[20] === tmp22) {
                          if (cResult[21] === str) {
                            if (cResult[22] === tmp25) {
                              let tmp26 = cResult[23];
                            }
                            if (cResult[24] === onClose) {
                              if (cResult[25] === tmp5) {
                                let tmp29 = cResult[26];
                              }
                              if (cResult[27] === tmp26) {
                                if (cResult[28] === tmp29) {
                                  let tmp33 = cResult[29];
                                }
                                if (cResult[30] === tmp33) {
                                  if (cResult[31] === tmp14) {
                                    if (cResult[32] === tmp18) {
                                      let tmp36 = cResult[33];
                                    }
                                    return tmp36;
                                  }
                                }
                                const obj5 = { header: tmp11, children: null };
                                const items1 = [, ,];
                                class F {
                                  constructor() {
                                    tmp = onClose();
                                    performResult = closure_1.perform();
                                    return;
                                  }
                                }
                                items1[1] = tmp18;
                                items1[2] = tmp33;
                                obj5.children = items1;
                                const tmp38 = closure_5(tmp(6892).ActionSheet, obj5);
                                cResult[30] = tmp33;
                                cResult[31] = tmp14;
                                cResult[32] = tmp18;
                                cResult[33] = tmp38;
                                tmp36 = tmp38;
                              }
                              const obj7 = { hasIcons: true, children: null };
                              const items2 = [tmp26];
                              class F {
                                constructor() {
                                  tmp = onClose();
                                  performResult = closure_1.perform();
                                  return;
                                }
                              }
                              obj7.children = items2;
                              const tmp35 = closure_5(tmp(6888).ActionSheetRow.Group, obj7);
                              cResult[27] = tmp26;
                              cResult[28] = tmp29;
                              cResult[29] = tmp35;
                              tmp33 = tmp35;
                            }
                            let tmp30 = null;
                            if (tmp5.isAvailable) {
                              const obj8 = {
                                label: null,
                                subLabel: null,
                                icon: null,
                                variant: "danger",
                                onPress: null,
                              };
                              ({ label: obj13.label, subLabel: obj13.subLabel } = tmp5);
                              const obj9 = { IconComponent: null };
                              class F {
                                constructor() {
                                  tmp = onClose();
                                  performResult = closure_1.perform();
                                  return;
                                }
                              }
                              obj9.IconComponent = tmp(5048).TrashIcon;
                              obj8.icon = closure_4(tmp32, obj9);
                              obj8.onPress = function onPress() {
                                onClose();
                                closure_2.perform();
                              };
                              tmp30 = closure_4(tmp(6888).ActionSheetRow, obj8);
                            }
                            cResult[24] = onClose;
                            class F {
                              constructor() {
                                tmp = onClose();
                                performResult = closure_1.perform();
                                return;
                              }
                            }
                            cResult[25] = tmp5;
                            cResult[26] = tmp30;
                            tmp29 = tmp30;
                          }
                        }
                      }
                    }
                    const obj10 = { label: null, subLabel: null, icon: null, variant: null, onPress: null };
                    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp4);
                    class F {
                      constructor() {
                        tmp = onClose();
                        performResult = closure_1.perform();
                        return;
                      }
                    }
                    obj10.variant = str;
                    obj10.onPress = tmp25;
                    const tmp28 = closure_4(tmp(6888).ActionSheetRow, obj10);
                    cResult[18] = tmp4.label;
                    cResult[19] = tmp4.subLabel;
                    cResult[20] = tmp22;
                    cResult[21] = str;
                    cResult[22] = tmp25;
                    cResult[23] = tmp28;
                    tmp26 = tmp28;
                  }
                  class F {
                    constructor() {
                      tmp = onClose();
                      performResult = closure_1.perform();
                      return;
                    }
                  }
                  cResult[15] = tmp4;
                  cResult[16] = onClose;
                  cResult[17] = F;
                  tmp25 = F;
                }
              }
              let tmp19 = null;
              if (hasAccess) {
                tmp19 = null;
                if (stateFromStores) {
                  const obj11 = { hasIcons: true, children: null };
                  const obj14 = { label: null, icon: null, onPress: null };
                  class F {
                    constructor() {
                      tmp = onClose();
                      performResult = closure_1.perform();
                      return;
                    }
                  }
                  obj14.label = tmp21(tmp(1126).t["0dOFq+"]);
                  const obj15 = { IconComponent: tmp(11793).ArrowsUpDownIcon };
                  obj14.icon = closure_4(tmp(6888).ActionSheetRow.Icon, obj15);
                  obj14.onPress = function onPress() {
                    onClose();
                    openFavoritesGuildChannelSortModalDefault();
                  };
                  obj11.children = closure_4(tmp(6888).ActionSheetRow, obj14);
                  tmp19 = closure_4(tmp(6888).ActionSheetRow.Group, obj11);
                }
              }
              cResult[9] = hasAccess;
              cResult[10] = stateFromStores;
              cResult[11] = onClose;
              cResult[12] = tmp19;
              tmp18 = tmp19;
            }
          }
        }
      }
      let tmp15 = null;
      if (tmp6.isAvailable) {
        const obj16 = { hasIcons: true, children: null };
        const obj29 = { label: null, subLabel: null, icon: null, value: null, onValueChange: null };
        ({ label: obj6.label, subLabel: obj6.subLabel } = tmp6);
        class F {
          constructor() {
            tmp = onClose();
            performResult = closure_1.perform();
            return;
          }
        }
        const obj30 = { IconComponent: tmp(8184).ThreadIcon };
        obj29.icon = closure_4(tmp(6888).ActionSheetRow.Icon, obj30);
        ({ isEnabled: obj6.value, toggle: obj6.onValueChange } = tmp6);
        obj16.children = closure_4(tmp17, obj29);
        tmp15 = closure_4(tmp(6888).ActionSheetRow.Group, obj16);
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
      const obj = onClose(10279);
      const items = [FavoriteStore];
      const stateFromStores = onClose(504).useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
      const obj3 = { header: null, children: null };
      const obj4 = { title: null };
      const intl = onClose(1126).intl;
      obj4.title = intl.string(onClose(1126).t.wMWyci);
      obj3.header = closure_4(onClose(6835).BottomSheetTitleHeader, obj4);
      let tmp8Result = null;
      if (tmp4.isAvailable) {
        const obj5 = { hasIcons: true, children: null };
        const obj7 = { label: null, subLabel: null, icon: null, value: null, onValueChange: null };
        ({ label: obj6.label, subLabel: obj6.subLabel } = tmp4);
        const obj8 = { IconComponent: tmp5(8184).ThreadIcon };
        obj7.icon = closure_4(tmp5(6888).ActionSheetRow.Icon, obj8);
        ({ isEnabled: obj6.value, toggle: obj6.onValueChange } = tmp4);
        obj5.children = closure_4(tmp5(6888).ActionSheetSwitchRow, obj7);
        tmp8Result = closure_4(tmp5(6888).ActionSheetRow.Group, obj5);
      }
      const items1 = [tmp8Result, ,];
      let tmp8Result3 = null;
      if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
        tmp8Result3 = null;
        if (stateFromStores) {
          const obj9 = { hasIcons: true, children: null };
          const obj10 = { label: null, icon: null, onPress: null };
          const intl2 = tmp5(1126).intl;
          obj10.label = intl2.string(tmp5(1126).t["0dOFq+"]);
          const obj11 = { IconComponent: tmp5(11793).ArrowsUpDownIcon };
          obj10.icon = closure_4(tmp5(6888).ActionSheetRow.Icon, obj11);
          obj10.onPress = function onPress() {
            onClose();
            openFavoritesGuildChannelSortModalDefault();
          };
          obj9.children = closure_4(tmp5(6888).ActionSheetRow, obj10);
          tmp8Result3 = closure_4(tmp5(6888).ActionSheetRow.Group, obj9);
        }
      }
      items1[1] = tmp8Result3;
      const obj13 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
      if (tmp2.isPreview) {
        let EyeSlashIcon = tmp5(6212).XSmallIcon;
      } else {
        EyeSlashIcon = tmp5(6648).EyeSlashIcon;
      }
      obj13.icon = closure_4(onClose(6888).ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
      let str = "danger";
      if (tmp2.isPreview) {
        str = "default";
      }
      obj13.variant = str;
      obj13.onPress = function onPress() {
        onClose();
        closure_1.perform();
      };
      const items2 = [closure_4(onClose(6888).ActionSheetRow, obj13)];
      let tmp8Result4 = null;
      if (tmp3.isAvailable) {
        const obj24 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
        ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
        const obj25 = { IconComponent: tmp5(5048).TrashIcon };
        obj24.icon = closure_4(tmp5(6888).ActionSheetRow.Icon, obj25);
        obj24.onPress = function onPress() {
          onClose();
          closure_2.perform();
        };
        tmp8Result4 = closure_4(tmp5(6888).ActionSheetRow, obj24);
      }
      items2[1] = tmp8Result4;
      items1[2] = closure_5(onClose(6888).ActionSheetRow.Group, { hasIcons: true, children: items2 });
      obj3.children = items1;
      return closure_5(onClose(6892).ActionSheet, obj3);
    };
