// === Module 14677: BaseUpsellActionSheet ===

// Module 14677 (BaseUpsellActionSheet)
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4580 */;
import CircleCheckIcon2 from "CircleCheckIcon" /* 4798 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import GuildIconDefault from "GuildIcon" /* 5978 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14675 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, guild, guildId, importDefault;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function renderSuccessIcon() {
  const obj = { size: "sm", color: nativeDefault.colors.STATUS_POSITIVE, secondaryColor: nativeDefault.colors.WHITE };
  const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
  return metroImportDefault(CircleCheckIcon, obj);
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, title: obj3, description: obj4, card: obj5, cardInfo: obj6, statusRow: obj7, guildSummary: { flexShrink: 1 }, chevron: obj8, buttonsContainer: obj9 };
obj2 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_24 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj6 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
obj7 = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_4, paddingBottom: 2 };
obj8 = { marginLeft: nativeDefault.space.PX_8 };
obj9 = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let tmp6;
  let tmp8;
  const obj = guildId(576);
  const cResult = obj.c(5);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    const obj2 = { guild: stateFromStores, size: guildId(5978).GuildIconSizes.XSMALL };
    const tmp11 = GuildIconDefault;
    const tmp12 = closure_7(tmp11, obj2);
    cResult[3] = stateFromStores;
    cResult[4] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const items = [GuildStore];
  const obj = guildId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj2 = { guild: stateFromStores, size: guildId(5978).GuildIconSizes.XSMALL };
  const tmp2 = GuildIconDefault;
  return closure_7(tmp2, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let card;
  let cardInfo;
  let closure_1;
  let direction;
  let guildIds;
  let items3;
  let onPress;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp18;
  let tmp6;
  let tmp8;
  let obj = arr(576);
  const cResult = obj.c(51);
  ({ guildIds, direction, onPress } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== guildIds) {
    const tmpResult = arr(14675);
    const result = tmpResult.sortGuildIdsByFrecency(guildIds);
    cResult[0] = guildIds;
    cResult[1] = result;
    arr = result;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== arr[0]) {
    const fn = function f() {
      return GuildStore.getGuild(arr[0]);
    };
    cResult[3] = arr[0];
    cResult[4] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult3 = arr(504);
  const stateFromStores = tmpResult3.useStateFromStores(tmp6, tmp8);
  if (cResult[5] !== direction) {
    let stringResult;
    if (direction === arr(14675).ChangeDirection.RESTRICTING) {
      const intl2 = tmp(1126).intl;
      stringResult = intl2.string(tmp(1126).t.e6Kpa7);
    } else {
      const intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.cy4G4y);
    }
    cResult[5] = direction;
    cResult[6] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[6];
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[7] !== arr) {
    let substr = arr;
    if (4 !== arr.length) {
      substr = arr.slice(0, 3);
    }
    cResult[7] = arr;
    cResult[8] = substr;
    tmp13 = substr;
  } else {
    tmp13 = cResult[8];
  }
  importDefault = tmp13;
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[9] = items1;
    tmp15 = items1;
  } else {
    tmp15 = cResult[9];
  }
  if (cResult[10] !== tmp13) {
    class E {
      constructor() {
        return closure_1.map((item) => {
          guild = guild.getGuild(item);
          let str;
          if (guild != null) {
            str = guild.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        });
      }
    }
    const items2 = [tmp13];
    cResult[10] = tmp13;
    cResult[11] = E;
    cResult[12] = items2;
    tmp18 = items2;
  } else {
    class E {
      constructor() {
        return closure_1.map((item) => {
          guild = guild.getGuild(item);
          let str;
          if (guild != null) {
            str = guild.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        });
      }
    }
    tmp18 = cResult[12];
  }
  const tmpResult4 = arr(504);
  const stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp15, E, tmp18);
  ({ card, cardInfo } = tmp4);
  if (cResult[13] !== guildIds.length) {
    class E {
      constructor() {
        return closure_1.map((item) => {
          guild = guild.getGuild(item);
          let str;
          if (guild != null) {
            str = guild.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        });
      }
    }
    const obj2 = { count: guildIds.length };
    cResult[13] = guildIds.length;
    cResult[14] = obj5.format(arr(1126).t["0fkj8J"], obj2);
    const formatResult = obj5.format(arr(1126).t["0fkj8J"], obj2);
  } else {
    class E {
      constructor() {
        return closure_1.map((item) => {
          guild = guild.getGuild(item);
          let str;
          if (guild != null) {
            str = guild.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        });
      }
    }
  }
  if (cResult[15] !== tmp20) {
    class E {
      constructor() {
        return closure_1.map((item) => {
          guild = guild.getGuild(item);
          let str;
          if (guild != null) {
            str = guild.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        });
      }
    }
    const obj3 = { variant: "text-md/semibold", color: "text-strong", children: tmp20 };
    cResult[15] = tmp20;
    cResult[16] = closure_7(arr(4892).Text, obj3);
    const tmp23 = closure_7(arr(4892).Text, obj3);
  } else {
    class E {
      constructor() {
        return closure_1.map((item) => {
          guild = guild.getGuild(item);
          let str;
          if (guild != null) {
            str = guild.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        });
      }
    }
  }
  const statusRow = tmp4.statusRow;
  if (direction === arr(14675).ChangeDirection.RESTRICTING) {
    class E {
      constructor() {
        return closure_1.map((item) => {
          guild = guild.getGuild(item);
          let str;
          if (guild != null) {
            str = guild.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        });
      }
    }
  }
  if (cResult[17] === tmp10) {
    class E {
      constructor() {
        return closure_1.map((item) => {
          guild = guild.getGuild(item);
          let str;
          if (guild != null) {
            str = guild.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        });
      }
    }
    if (cResult[20] === str) {
      class E {
        constructor() {
          return closure_1.map((item) => {
            guild = guild.getGuild(item);
            let str;
            if (guild != null) {
              str = guild.name;
            }
            if (str == null) {
              str = "";
            }
            return str;
          });
        }
      }
      if (cResult[23] === tmp4.guildSummary) {
        class E {
          constructor() {
            return closure_1.map((item) => {
              guild = guild.getGuild(item);
              let str;
              if (guild != null) {
                str = guild.name;
              }
              if (str == null) {
                str = "";
              }
              return str;
            });
          }
        }
        if (cResult[26] === tmp4.statusRow) {
          class E {
            constructor() {
              return closure_1.map((item) => {
                guild = guild.getGuild(item);
                let str;
                if (guild != null) {
                  str = guild.name;
                }
                if (str == null) {
                  str = "";
                }
                return str;
              });
            }
          }
        }
        const obj4 = { style: statusRow, children: items3 };
        items3 = [tmp24, tmp29];
        cResult[26] = tmp4.statusRow;
        cResult[27] = tmp24;
        cResult[28] = tmp29;
        cResult[29] = closure_8(closure_5, obj4);
        const tmp35 = closure_8(closure_5, obj4);
      }
      const obj6 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp26, children: tmp27 };
      cResult[23] = tmp4.guildSummary;
      cResult[24] = tmp27;
      cResult[25] = closure_7(arr(4892).Text, obj6);
      const tmp31 = closure_7(arr(4892).Text, obj6);
    }
    const intl3 = tmp(1126).intl;
    const format = intl3.format;
    const t = tmp(1126).t;
    const obj7 = { guildName: str };
    cResult[20] = str;
    cResult[21] = null != stateFromStores && arr.length > 1;
    cResult[22] = format(null != stateFromStores && arr.length > 1 ? t["8ZLbvR"] : t["+NoTYm"], obj7);
    const formatResult1 = format(null != stateFromStores && arr.length > 1 ? t["8ZLbvR"] : t["+NoTYm"], obj7);
  }
  cResult[17] = tmp10;
  cResult[18] = "text-muted";
  cResult[19] = closure_7(arr(4892).Text, { variant: "text-sm/medium", color: "text-muted", children: tmp10 });
  const tmp25 = closure_7(arr(4892).Text, { variant: "text-sm/medium", color: "text-muted", children: tmp10 });
}) : ((guildIds) => {
  let ChevronLargeRightIcon;
  let direction;
  let format;
  let intl3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj5;
  let onPress;
  let stringResult;
  let t;
  guildIds = guildIds.guildIds;
  ({ direction, onPress } = guildIds);
  let substr;
  const tmp = closure_10();
  const items = [guildIds];
  const memo = react.useMemo(() => {
    const obj = ActivityPrivacyUpsellUtils;
    return obj.sortGuildIdsByFrecency(guildIds);
  }, items);
  let obj = guildIds(substr[9]);
  const items1 = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(memo[0]));
  if (direction === guildIds(substr[11]).ChangeDirection.RESTRICTING) {
    const intl2 = tmp2(tmp3[12]).intl;
    stringResult = intl2.string(tmp2(tmp3[12]).t.e6Kpa7);
  } else {
    const intl = tmp2(tmp3[12]).intl;
    stringResult = intl.string(tmp2(tmp3[12]).t.cy4G4y);
  }
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  substr = memo;
  const tmp7 = null != stateFromStores && memo.length > 1;
  if (4 !== memo.length) {
    substr = memo.slice(0, 3);
  }
  const items2 = [GuildStore];
  const items3 = [substr];
  const obj2 = { style: tmp.card, onPress, children: items6 };
  const obj3 = { style: tmp.cardInfo, children: items4 };
  const tmp2Result = guildIds(substr[9]);
  const stateFromStoresArray = tmp2Result.useStateFromStoresArray(items2, () => substr.map((item) => {
    guild = guild.getGuild(item);
    let str;
    if (guild != null) {
      str = guild.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  }), items3);
  const obj4 = { variant: "text-md/semibold", color: "text-strong", children: intl3.format(guildIds(substr[12]).t["0fkj8J"], obj5) };
  const tmp10 = null != onPress ? closure_4 : closure_5;
  const Text = tmp2(tmp3[13]).Text;
  intl3 = tmp2(tmp3[12]).intl;
  obj5 = { count: guildIds.length };
  items4 = [closure_7(Text, obj4), ];
  const obj6 = { style: tmp.statusRow, children: items5 };
  const Text2 = tmp2(tmp3[13]).Text;
  let str2 = "text-muted";
  if (direction === guildIds(substr[11]).ChangeDirection.RESTRICTING) {
    str2 = "text-feedback-positive";
  }
  items5 = [closure_7(Text2, { variant: "text-sm/medium", color: str2, children: stringResult }), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.guildSummary, children: format(tmp7 ? t["8ZLbvR"] : t["+NoTYm"], { guildName: str }) };
  const Text3 = tmp2(tmp3[13]).Text;
  const intl4 = tmp2(tmp3[12]).intl;
  format = intl4.format;
  t = tmp2(tmp3[12]).t;
  items5[1] = closure_7(Text3, obj7);
  items4[1] = closure_8(closure_5, obj6);
  items6 = [closure_8(closure_5, obj3), , ];
  const obj8 = {
    size: guildIds(substr[10]).GuildIconSizes.XSMALL,
    names: stateFromStoresArray,
    totalCount: memo.length,
    children: substr.map((guildId) => {
      const obj = { guildId };
      return closure_1_7(closure_1_11, obj, guildId);
    })
  };
  const GuildIconPile = tmp2(tmp3[14]).GuildIconPile;
  items6[1] = closure_7(GuildIconPile, obj8);
  let tmp12Result = null != onPress;
  if (tmp12Result) {
    const obj9 = { style: tmp.chevron, children: closure_7(ChevronLargeRightIcon, obj10) };
    obj10 = { color: memo(substr[5]).colors.TEXT_SUBTLE, size: "xs" };
    ChevronLargeRightIcon = tmp2(tmp3[15]).ChevronLargeRightIcon;
    tmp12Result = closure_7(closure_5, obj9);
  }
  items6[2] = tmp12Result;
  return closure_8(tmp10, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirm) => {
  let affectedGuildIds;
  let confirmText;
  let direction;
  let intl;
  let items;
  let items1;
  let obj4;
  let subtitle;
  let title;
  let toastContent;
  let obj = toastContent(576);
  const cResult = obj.c(27);
  ({ direction, affectedGuildIds, title, subtitle, confirmText, toastContent } = onConfirm);
  onConfirm = onConfirm.onConfirm;
  const onCardPress = onConfirm.onCardPress;
  const tmp4 = closure_10();
  if (cResult[0] === onConfirm) {
    let tmp5;
    let tmp7;
    if (cResult[1] === toastContent) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function _() {
        const obj = onConfirm(dependencyMap[16]);
        obj.hideActionSheet();
      };
      cResult[3] = fn2;
      tmp7 = fn2;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === tmp4.title) {
      let tmp8;
      if (cResult[5] === title) {
        tmp8 = cResult[6];
      }
      if (cResult[7] === tmp4.description) {
        let tmp11;
        if (cResult[8] === subtitle) {
          tmp11 = cResult[9];
        }
        if (cResult[10] === affectedGuildIds) {
          if (cResult[11] === direction) {
            let tmp14;
            if (cResult[12] === onCardPress) {
              tmp14 = cResult[13];
            }
            if (cResult[14] === confirmText) {
              let tmp18;
              let tmp21;
              if (cResult[15] === tmp5) {
                tmp18 = cResult[16];
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { variant: "secondary", size: "md", text: intl.string(toastContent(1126).t.X1rGEm), onPress: tmp7 };
                const Button = toastContent(5601).Button;
                intl = toastContent(1126).intl;
                const tmp23 = closure_7(Button, obj2);
                cResult[17] = tmp23;
                tmp21 = tmp23;
              } else {
                tmp21 = cResult[17];
              }
              if (cResult[18] === tmp4.buttonsContainer) {
                let tmp24;
                if (cResult[19] === tmp18) {
                  tmp24 = cResult[20];
                }
                if (cResult[21] === tmp4.container) {
                  if (cResult[22] === tmp8) {
                    if (cResult[23] === tmp11) {
                      if (cResult[24] === tmp14) {
                        let tmp28;
                        if (cResult[25] === tmp24) {
                          tmp28 = cResult[26];
                        }
                        return tmp28;
                      }
                    }
                  }
                }
                let obj3 = { startExpanded: true, children: closure_8(closure_5, obj4) };
                obj4 = { style: tmp4.container, children: items };
                items = [tmp8, tmp11, tmp14, tmp24];
                BottomSheet = toastContent(6652).BottomSheet;
                const tmp32 = closure_7(BottomSheet, obj3);
                cResult[21] = tmp4.container;
                cResult[22] = tmp8;
                cResult[23] = tmp11;
                cResult[24] = tmp14;
                cResult[25] = tmp24;
                cResult[26] = tmp32;
                tmp28 = tmp32;
              }
              let obj5 = { style: tmp4.buttonsContainer, children: items1 };
              items1 = [tmp18, tmp21];
              const tmp27 = closure_8(closure_5, obj5);
              cResult[18] = tmp4.buttonsContainer;
              cResult[19] = tmp18;
              cResult[20] = tmp27;
              tmp24 = tmp27;
            }
            const obj6 = { variant: "primary", size: "md", text: confirmText, onPress: tmp5 };
            const tmp20 = closure_7(toastContent(5601).Button, obj6);
            cResult[14] = confirmText;
            cResult[15] = tmp5;
            cResult[16] = tmp20;
            tmp18 = tmp20;
          }
        }
        const obj7 = { guildIds: affectedGuildIds, direction, onPress: onCardPress };
        const tmp17 = closure_7(closure_12, obj7);
        cResult[10] = affectedGuildIds;
        cResult[11] = direction;
        cResult[12] = onCardPress;
        cResult[13] = tmp17;
        tmp14 = tmp17;
      }
      const obj8 = { style: tmp4.description, variant: "text-md/medium", color: "text-default", children: subtitle };
      const tmp13 = closure_7(toastContent(4892).Text, obj8);
      cResult[7] = tmp4.description;
      cResult[8] = subtitle;
      cResult[9] = tmp13;
      tmp11 = tmp13;
    }
    const obj9 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/bold", color: "text-strong", children: title };
    const tmp10 = closure_7(toastContent(4892).Text, obj9);
    cResult[4] = tmp4.title;
    cResult[5] = title;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
  const fn = function n() {
    onConfirm();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = DesignSystemsNotificationComponentsExperiment;
    const designSystemsNotificationComponents = obj2.getDesignSystemsNotificationComponents("BaseUpsellActionSheet");
    const obj3 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents) {
      const obj4 = { text: toastContent, variant: "success" };
      obj3.openMana("ACTIVITY_PRIVACY_UPSELL_TOAST", obj4);
    } else {
      const obj5 = { key: "ACTIVITY_PRIVACY_UPSELL_TOAST", content: toastContent, icon: renderSuccessIcon };
      obj3.open(obj5);
    }
  };
  cResult[0] = onConfirm;
  cResult[1] = toastContent;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((toastContent) => {
  let affectedGuildIds;
  let confirmText;
  let direction;
  let intl;
  let items1;
  let items2;
  let obj2;
  let onCardPress;
  let subtitle;
  let title;
  toastContent = toastContent.toastContent;
  const onConfirm = toastContent.onConfirm;
  ({ direction, affectedGuildIds, title, subtitle, confirmText, onCardPress } = toastContent);
  const tmp = closure_10();
  const items = [onConfirm, toastContent];
  const callback = react.useCallback(() => {
    onConfirm();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = DesignSystemsNotificationComponentsExperiment;
    const designSystemsNotificationComponents = obj2.getDesignSystemsNotificationComponents("BaseUpsellActionSheet");
    const obj3 = ToastActionCreatorsDefault;
    if (designSystemsNotificationComponents) {
      const obj4 = { text: toastContent, variant: "success" };
      obj3.openMana("ACTIVITY_PRIVACY_UPSELL_TOAST", obj4);
    } else {
      const obj5 = { key: "ACTIVITY_PRIVACY_UPSELL_TOAST", content: toastContent, icon: renderSuccessIcon };
      obj3.open(obj5);
    }
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = onConfirm(dependencyMap[16]);
    obj.hideActionSheet();
  }, []);
  let obj = { startExpanded: true, children: closure_8(closure_5, obj2) };
  obj2 = { style: tmp.container, children: items1 };
  BottomSheet = toastContent(6652).BottomSheet;
  let obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/bold", color: "text-strong", children: title };
  items1 = [closure_7(toastContent(4892).Text, obj3), , , ];
  let obj4 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: subtitle };
  items1[1] = closure_7(toastContent(4892).Text, obj4);
  items1[2] = closure_7(closure_12, { guildIds: affectedGuildIds, direction, onPress: onCardPress });
  let obj5 = { style: tmp.buttonsContainer, children: items2 };
  items2 = [closure_7(toastContent(5601).Button, { variant: "primary", size: "md", text: confirmText, onPress: callback }), ];
  const obj6 = { variant: "secondary", size: "md", text: intl.string(toastContent(1126).t.X1rGEm), onPress: callback1 };
  const Button = toastContent(5601).Button;
  intl = toastContent(1126).intl;
  items2[1] = closure_7(Button, obj6);
  items1[3] = closure_8(closure_5, obj5);
  return closure_7(BottomSheet, obj);
});
let result = size.fileFinishedImporting("modules/activity_privacy/native/BaseUpsellActionSheet.tsx");

export default tmp5;