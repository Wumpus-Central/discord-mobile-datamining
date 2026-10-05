// === Module 16063: FavoritesGuildActionSheet ===

// Module 16063 (FavoritesGuildActionSheet)
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 16064 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 16065 */;
import useFavoritesGuildAutoAddedThreadsActionDefault from "useFavoritesGuildAutoAddedThreadsAction" /* 16066 */;
import openFavoritesGuildChannelSortModalDefault from "openFavoritesGuildChannelSortModal" /* 16067 */;
import react from "react" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, onClose;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let ActionSheetRow;
  let Icon;
  let Icon2;
  let closure_1;
  let closure_2;
  let intl;
  let items1;
  let items2;
  let obj14;
  let obj15;
  let obj29;
  let obj30;
  let obj9;
  let tmp11;
  let tmp7;
  let tmp8;
  const obj = onClose(576);
  const cResult = obj.c(34);
  onClose = onClose.onClose;
  const tmp4 = useFavoritesGuildHideActionDefault();
  importDefault = tmp4;
  const tmp5 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp5;
  const tmp6 = useFavoritesGuildAutoAddedThreadsActionDefault();
  const obj2 = onClose(10036);
  const hasAccess = obj2.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess;
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
  const tmpResult = onClose(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: intl.string(onClose(1126).t.wMWyci) };
    const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
    intl = tmp(1126).intl;
    const tmp13 = closure_4(BottomSheetTitleHeader, obj3);
    cResult[2] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === tmp6.isAvailable) {
    if (cResult[4] === tmp6.isEnabled) {
      if (cResult[5] === tmp6.label) {
        if (cResult[6] === tmp6.subLabel) {
          let tmp14;
          if (cResult[7] === tmp6.toggle) {
            tmp14 = cResult[8];
          }
          if (cResult[9] === hasAccess) {
            if (cResult[10] === stateFromStores) {
              let tmp18;
              let EyeSlashIcon;
              let tmp22;
              if (cResult[11] === onClose) {
                tmp18 = cResult[12];
              }
              if (tmp4.isPreview) {
                EyeSlashIcon = tmp(6017).XSmallIcon;
              } else {
                EyeSlashIcon = tmp(6456).EyeSlashIcon;
              }
              if (cResult[13] !== EyeSlashIcon) {
                const obj4 = { IconComponent: EyeSlashIcon };
                const tmp24 = closure_4(onClose(6697).ActionSheetRow.Icon, obj4);
                cResult[13] = EyeSlashIcon;
                class C {
                  constructor() {
                    onClose();
                    closure_1.perform();
                  }
                }
                cResult[14] = tmp24;
                tmp22 = tmp24;
              } else {
                tmp22 = cResult[14];
              }
              let str = "danger";
              if (tmp4.isPreview) {
                str = "default";
              }
              if (cResult[15] === tmp4) {
                let tmp25;
                if (cResult[16] === onClose) {
                  tmp25 = cResult[17];
                }
                if (cResult[18] === tmp4.label) {
                  if (cResult[19] === tmp4.subLabel) {
                    if (cResult[20] === tmp22) {
                      if (cResult[21] === str) {
                        let tmp26;
                        if (cResult[22] === tmp25) {
                          tmp26 = cResult[23];
                        }
                        if (cResult[24] === onClose) {
                          let tmp29;
                          if (cResult[25] === tmp5) {
                            tmp29 = cResult[26];
                          }
                          if (cResult[27] === tmp26) {
                            let tmp33;
                            if (cResult[28] === tmp29) {
                              tmp33 = cResult[29];
                            }
                            if (cResult[30] === tmp33) {
                              if (cResult[31] === tmp14) {
                                let tmp36;
                                if (cResult[32] === tmp18) {
                                  tmp36 = cResult[33];
                                }
                                return tmp36;
                              }
                            }
                            const obj5 = { header: tmp11, children: items1 };
                            items1 = [, , ];
                            class C {
                              constructor() {
                                onClose();
                                closure_1.perform();
                              }
                            }
                            items1[1] = tmp18;
                            items1[2] = tmp33;
                            const tmp38 = closure_5(onClose(6701).ActionSheet, obj5);
                            cResult[30] = tmp33;
                            cResult[31] = tmp14;
                            cResult[32] = tmp18;
                            cResult[33] = tmp38;
                            tmp36 = tmp38;
                          }
                          const obj7 = { hasIcons: true, children: items2 };
                          items2 = [tmp26, ];
                          class C {
                            constructor() {
                              onClose();
                              closure_1.perform();
                            }
                          }
                          const tmp35 = closure_5(onClose(6697).ActionSheetRow.Group, obj7);
                          cResult[27] = tmp26;
                          cResult[28] = tmp29;
                          cResult[29] = tmp35;
                          tmp33 = tmp35;
                        }
                        let tmp30 = null;
                        if (tmp5.isAvailable) {
                          ({ label: obj13.label, subLabel: obj13.subLabel } = tmp5);
                          const obj8 = {
                            label: null,
                            subLabel: null,
                            icon: closure_4(tmp32, obj9),
                            variant: "danger",
                            onPress() {
                                                      onClose();
                                                      closure_2.perform();
                                                    }
                          };
                          const ActionSheetRow2 = tmp(6697).ActionSheetRow;
                          obj9 = { IconComponent: onClose(4847).TrashIcon };
                          class C {
                            constructor() {
                              onClose();
                              closure_1.perform();
                            }
                          }
                          tmp30 = closure_4(ActionSheetRow2, obj8);
                        }
                        cResult[24] = onClose;
                        class C {
                          constructor() {
                            onClose();
                            closure_1.perform();
                          }
                        }
                        cResult[25] = tmp5;
                        cResult[26] = tmp30;
                        tmp29 = tmp30;
                      }
                    }
                  }
                }
                const obj10 = { label: null, subLabel: null, icon: null, variant: str, onPress: tmp25 };
                ({ label: obj12.label, subLabel: obj12.subLabel } = tmp4);
                class C {
                  constructor() {
                    onClose();
                    closure_1.perform();
                  }
                }
                const tmp28 = closure_4(onClose(6697).ActionSheetRow, obj10);
                cResult[18] = tmp4.label;
                cResult[19] = tmp4.subLabel;
                cResult[20] = tmp22;
                cResult[21] = str;
                cResult[22] = tmp25;
                cResult[23] = tmp28;
                tmp26 = tmp28;
              }
              class C {
                constructor() {
                  onClose();
                  closure_1.perform();
                }
              }
              cResult[15] = tmp4;
              cResult[16] = onClose;
              cResult[17] = C;
              tmp25 = C;
            }
          }
          let tmp19 = null;
          if (hasAccess) {
            tmp19 = null;
            if (stateFromStores) {
              const obj11 = { hasIcons: true, children: closure_4(ActionSheetRow, obj14) };
              const Group2 = tmp(6697).ActionSheetRow.Group;
              obj14 = {
                label: tmp21(onClose(1126).t["0dOFq+"]),
                icon: closure_4(Icon2, obj15),
                onPress() {
                              onClose();
                              openFavoritesGuildChannelSortModalDefault();
                            }
              };
              ActionSheetRow = tmp(6697).ActionSheetRow;
              const intl2 = tmp(1126).intl;
              class C {
                constructor() {
                  onClose();
                  closure_1.perform();
                }
              }
              obj15 = { IconComponent: onClose(11775).ArrowsUpDownIcon };
              Icon2 = tmp(6697).ActionSheetRow.Icon;
              tmp19 = closure_4(Group2, obj11);
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
    const obj16 = { hasIcons: true, children: closure_4(tmp17, obj29) };
    const Group = tmp(6697).ActionSheetRow.Group;
    ({ label: obj6.label, subLabel: obj6.subLabel } = tmp6);
    obj29 = { label: null, subLabel: null, icon: closure_4(Icon, obj30), value: null, onValueChange: null };
    class C {
      constructor() {
        onClose();
        closure_1.perform();
      }
    }
    obj30 = { IconComponent: onClose(5857).ThreadIcon };
    Icon = tmp(6697).ActionSheetRow.Icon;
    ({ isEnabled: obj6.value, toggle: obj6.onValueChange } = tmp6);
    tmp15 = closure_4(Group, obj16);
  }
  cResult[3] = tmp6.isAvailable;
  cResult[4] = tmp6.isEnabled;
  cResult[5] = tmp6.label;
  cResult[6] = tmp6.subLabel;
  cResult[7] = tmp6.toggle;
  cResult[8] = tmp15;
  tmp14 = tmp15;
}) : ((onClose) => {
  let ActionSheetRow;
  let ActionSheetSwitchRow;
  let BottomSheetTitleHeader;
  let EyeSlashIcon;
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let closure_1;
  let closure_2;
  let intl;
  let intl2;
  let items1;
  let obj10;
  let obj11;
  let obj25;
  let obj4;
  let obj7;
  let obj8;
  let str;
  onClose = onClose.onClose;
  const tmp2 = useFavoritesGuildHideActionDefault();
  importDefault = tmp2;
  const tmp3 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp3;
  const tmp4 = useFavoritesGuildAutoAddedThreadsActionDefault();
  const obj = onClose(10036);
  const hasAccess = obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess;
  const items = [FavoriteStore];
  const obj2 = onClose(504);
  const stateFromStores = obj2.useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj3 = { header: closure_4(BottomSheetTitleHeader, obj4), children: items1 };
  const ActionSheet = onClose(6701).ActionSheet;
  obj4 = { title: intl.string(onClose(1126).t.wMWyci) };
  BottomSheetTitleHeader = onClose(6644).BottomSheetTitleHeader;
  intl = onClose(1126).intl;
  let tmp8Result = null;
  if (tmp4.isAvailable) {
    const obj5 = { hasIcons: true, children: closure_4(ActionSheetSwitchRow, obj7) };
    const Group = tmp5(6697).ActionSheetRow.Group;
    ({ label: obj6.label, subLabel: obj6.subLabel } = tmp4);
    obj7 = { label: null, subLabel: null, icon: closure_4(Icon, obj8), value: null, onValueChange: null };
    ActionSheetSwitchRow = tmp5(6697).ActionSheetSwitchRow;
    obj8 = { IconComponent: onClose(5857).ThreadIcon };
    Icon = tmp5(6697).ActionSheetRow.Icon;
    ({ isEnabled: obj6.value, toggle: obj6.onValueChange } = tmp4);
    tmp8Result = closure_4(Group, obj5);
  }
  items1 = [tmp8Result, , ];
  let tmp8Result3 = null;
  if (hasAccess) {
    tmp8Result3 = null;
    if (stateFromStores) {
      const obj9 = { hasIcons: true, children: closure_4(ActionSheetRow, obj10) };
      const Group2 = tmp5(6697).ActionSheetRow.Group;
      obj10 = {
        label: intl2.string(onClose(1126).t["0dOFq+"]),
        icon: closure_4(Icon2, obj11),
        onPress() {
              onClose();
              openFavoritesGuildChannelSortModalDefault();
            }
      };
      ActionSheetRow = tmp5(6697).ActionSheetRow;
      intl2 = tmp5(1126).intl;
      obj11 = { IconComponent: onClose(11775).ArrowsUpDownIcon };
      Icon2 = tmp5(6697).ActionSheetRow.Icon;
      tmp8Result3 = closure_4(Group2, obj9);
    }
  }
  items1[1] = tmp8Result3;
  const Group3 = tmp5(6697).ActionSheetRow.Group;
  const obj13 = {
    label: tmp2.label,
    subLabel: tmp2.subLabel,
    icon: closure_4(Icon3, { IconComponent: EyeSlashIcon }),
    variant: str,
    onPress() {
      onClose();
      closure_1.perform();
    }
  };
  const ActionSheetRow2 = tmp5(6697).ActionSheetRow;
  Icon3 = tmp5(6697).ActionSheetRow.Icon;
  if (tmp2.isPreview) {
    EyeSlashIcon = tmp5(6017).XSmallIcon;
  } else {
    EyeSlashIcon = tmp5(6456).EyeSlashIcon;
  }
  str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  const items2 = [closure_4(ActionSheetRow2, obj13), ];
  let tmp8Result4 = null;
  if (tmp3.isAvailable) {
    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
    const obj24 = {
      label: null,
      subLabel: null,
      icon: closure_4(Icon4, obj25),
      variant: "danger",
      onPress() {
          onClose();
          closure_2.perform();
        }
    };
    const ActionSheetRow3 = tmp5(6697).ActionSheetRow;
    obj25 = { IconComponent: onClose(4847).TrashIcon };
    Icon4 = tmp5(6697).ActionSheetRow.Icon;
    tmp8Result4 = closure_4(ActionSheetRow3, obj24);
  }
  items2[1] = tmp8Result4;
  items1[2] = closure_5(Group3, { hasIcons: true, children: items2 });
  return closure_5(ActionSheet, obj3);
});
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default tmp4;