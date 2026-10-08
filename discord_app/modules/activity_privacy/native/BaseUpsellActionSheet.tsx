// discord_app/modules/activity_privacy/native/BaseUpsellActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import ActivityPrivacyUpsellUtils from "../ActivityPrivacyUpsellUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
function renderSuccessIcon() {
  return React5(CircleCheckIcon.CircleCheckIcon, {
    size: "sm",
    color: nativeDefault.colors.STATUS_POSITIVE,
    secondaryColor: nativeDefault.colors.WHITE,
  });
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24 },
  title: null,
  description: null,
  card: null,
  cardInfo: null,
  statusRow: null,
  guildSummary: null,
  chevron: null,
  buttonsContainer: null,
};
let obj3 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_24 };
obj2.title = { marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginBottom: nativeDefault.space.PX_8 };
obj2.description = { marginBottom: nativeDefault.space.PX_24 };
let obj5 = { marginBottom: nativeDefault.space.PX_24 };
obj2.card = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_24,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
let obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_24,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.cardInfo = { flex: 1, marginRight: nativeDefault.space.PX_12 };
let obj7 = { flex: 1, marginRight: nativeDefault.space.PX_12 };
obj2.statusRow = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_4, paddingBottom: 2 };
obj2.guildSummary = { flexShrink: 1 };
let obj8 = { flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_4, paddingBottom: 2 };
obj2.chevron = { marginLeft: nativeDefault.space.PX_8 };
let obj9 = { marginLeft: nativeDefault.space.PX_8 };
obj2.buttonsContainer = { gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StoreGuildIcon(guildId) {
      const cResult = guildId(576).c(5);
      guildId = guildId.guildId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function o() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        const obj2 = { guild: stateFromStores, size: tmp(6161).GuildIconSizes.XSMALL };
        const tmp12 = closure_7(GuildIconDefault, obj2);
        cResult[3] = stateFromStores;
        cResult[4] = tmp12;
        let tmp8 = tmp12;
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : function StoreGuildIcon(guildId) {
      guildId = guildId.guildId;
      const items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      const obj2 = { guild: stateFromStores, size: null };
      const obj = guildId(504);
      obj2.size = guildId(6161).GuildIconSizes.XSMALL;
      return closure_7(GuildIconDefault, obj2);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildCard(arg0) {
      const cResult = arr(576).c(51);
      ({ guildIds, direction, onPress } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] !== guildIds) {
        const result = tmp(14936).sortGuildIdsByFrecency(guildIds);
        cResult[0] = guildIds;
        cResult[1] = result;
        arr = result;
        const tmpResult = tmp(14936);
      } else {
        arr = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[2] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== arr[0]) {
        const fn = function f() {
          return GuildStore.getGuild(arr[0]);
        };
        cResult[3] = arr[0];
        cResult[4] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[4];
      }
      const obj = arr(576);
      const stateFromStores = arr(504).useStateFromStores(tmp6, tmp8);
      if (cResult[5] !== direction) {
        if (direction === tmp(14936).ChangeDirection.RESTRICTING) {
          const intl2 = tmp(1126).intl;
          let stringResult = intl2.string(tmp(1126).t.e6Kpa7);
        } else {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.cy4G4y);
        }
        cResult[5] = direction;
        cResult[6] = stringResult;
      } else {
        let str;
        if (stateFromStores != null) {
          str = stateFromStores.name;
        }
        if (str == null) {
          str = "";
        }
        let tmp14 = null != stateFromStores;
        if (tmp14) {
          tmp14 = arr.length > 1;
        }
        if (cResult[7] !== arr) {
          let substr = arr;
          if (4 !== arr.length) {
            substr = arr.slice(0, 3);
          }
          cResult[7] = arr;
          cResult[8] = substr;
          let tmp15 = substr;
        } else {
          tmp15 = cResult[8];
        }
        importDefault = tmp15;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [GuildStore];
          cResult[9] = items1;
          let tmp17 = items1;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] !== tmp15) {
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
          const items2 = [tmp15];
          cResult[10] = tmp15;
          cResult[11] = E;
          cResult[12] = items2;
          let tmp20 = items2;
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
          tmp20 = cResult[12];
        }
        const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp17, E, tmp20);
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
          const formatResult = obj5.format(tmp(1126).t["0fkj8J"], obj2);
          cResult[13] = guildIds.length;
          cResult[14] = formatResult;
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
        if (cResult[15] !== tmp23) {
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
          const obj3 = { variant: "text-md/semibold", color: "text-strong", children: tmp23 };
          const tmp26 = closure_7(tmp(5086).Text, obj3);
          cResult[15] = tmp23;
          cResult[16] = tmp26;
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
        if (direction === tmp(14936).ChangeDirection.RESTRICTING) {
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
        if (cResult[17] === cResult[6]) {
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
          }
          const intl3 = tmp(1126).intl;
          let t = tmp(1126).t;
          const obj4 = { guildName: str };
          t = intl3.format(tmp14 ? t["8ZLbvR"] : t["+NoTYm"], obj4);
          cResult[20] = str;
          cResult[21] = tmp14;
          cResult[22] = t;
        }
        const obj6 = { variant: "text-sm/medium", color: "text-muted", children: cResult[6] };
        const tmp29 = closure_7(tmp(5086).Text, obj6);
        cResult[17] = cResult[6];
        cResult[18] = "text-muted";
        cResult[19] = tmp29;
        const tmpResult4 = tmp(504);
      }
      const tmpResult3 = arr(504);
    }
  : function GuildCard(guildIds) {
      guildIds = guildIds.guildIds;
      ({ direction, onPress } = guildIds);
      let substr;
      const tmp = closure_10();
      const items = [guildIds];
      const memo = noop.useMemo(() => ActivityPrivacyUpsellUtils.sortGuildIdsByFrecency(guildIds), items);
      const items1 = [GuildStore];
      const stateFromStores = guildIds(substr[9]).useStateFromStores(items1, () => GuildStore.getGuild(memo[0]));
      if (direction === guildIds(substr[11]).ChangeDirection.RESTRICTING) {
        const intl2 = tmp2(tmp3[12]).intl;
        let stringResult = intl2.string(tmp2(tmp3[12]).t.e6Kpa7);
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
      let tmp7 = null != stateFromStores;
      if (tmp7) {
        tmp7 = memo.length > 1;
      }
      substr = memo;
      if (4 !== memo.length) {
        substr = memo.slice(0, 3);
      }
      const obj = guildIds(substr[9]);
      const items2 = [GuildStore];
      const items3 = [substr];
      const obj2 = { style: tmp.card, onPress, children: null };
      const obj3 = { style: tmp.cardInfo, children: null };
      const stateFromStoresArray = guildIds(substr[9]).useStateFromStoresArray(
        items2,
        () =>
          substr.map((item) => {
            guild = guild.getGuild(item);
            let str;
            if (guild != null) {
              str = guild.name;
            }
            if (str == null) {
              str = "";
            }
            return str;
          }),
        items3,
      );
      const obj4 = { variant: "text-md/semibold", color: "text-strong", children: null };
      const intl3 = tmp2(tmp3[12]).intl;
      obj4.children = intl3.format(guildIds(substr[12]).t["0fkj8J"], { count: guildIds.length });
      const items4 = [closure_7(guildIds(substr[13]).Text, obj4)];
      const obj6 = { style: tmp.statusRow, children: null };
      let str2 = "text-muted";
      if (direction === guildIds(substr[11]).ChangeDirection.RESTRICTING) {
        str2 = "text-feedback-positive";
      }
      const items5 = [
        closure_7(guildIds(substr[13]).Text, { variant: "text-sm/medium", color: str2, children: stringResult }),
      ];
      const obj7 = {
        variant: "text-sm/medium",
        color: "text-muted",
        lineClamp: 1,
        style: tmp.guildSummary,
        children: null,
      };
      const intl4 = tmp2(tmp3[12]).intl;
      const t = tmp2(tmp3[12]).t;
      obj7.children = intl4.format(tmp7 ? t["8ZLbvR"] : t["+NoTYm"], { guildName: str });
      items5[1] = closure_7(guildIds(substr[13]).Text, obj7);
      obj6.children = items5;
      items4[1] = closure_8(closure_5, obj6);
      obj3.children = items4;
      const items6 = [closure_8(closure_5, obj3), ,];
      const obj5 = { count: guildIds.length };
      const tmp10 = null != onPress ? closure_4 : closure_5;
      const tmp2Result = guildIds(substr[9]);
      items6[1] = closure_7(guildIds(substr[14]).GuildIconPile, {
        size: guildIds(substr[10]).GuildIconSizes.XSMALL,
        names: stateFromStoresArray,
        totalCount: memo.length,
        children: substr.map((guildId) => closure_1_7(closure_1_11, { guildId }, guildId)),
      });
      let tmp12Result = null != onPress;
      if (tmp12Result) {
        const obj9 = { style: tmp.chevron, children: null };
        const obj10 = { color: memo(tmp3[5]).colors.TEXT_SUBTLE, size: "xs" };
        obj9.children = closure_7(tmp2(tmp3[15]).ChevronLargeRightIcon, obj10);
        tmp12Result = closure_7(closure_5, obj9);
      }
      items6[2] = tmp12Result;
      obj2.children = items6;
      return closure_8(tmp10, obj2);
    };
ReactCompilerGating = fn(558);
let obj10 = { gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/activity_privacy/native/BaseUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseUpsellActionSheet(onConfirm) {
      const cResult = toastContent(576).c(27);
      ({ direction, affectedGuildIds, title, subtitle, confirmText, toastContent } = onConfirm);
      onConfirm = onConfirm.onConfirm;
      const onCardPress = onConfirm.onCardPress;
      const tmp4 = closure_10();
      if (cResult[0] === onConfirm) {
        if (cResult[1] === toastContent) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function _() {
            onConfirm(dependencyMap[16]).hideActionSheet();
          };
          cResult[3] = fn2;
          let tmp7 = fn2;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] === tmp4.title) {
          if (cResult[5] === title) {
            let tmp8 = cResult[6];
          }
          if (cResult[7] === tmp4.description) {
            if (cResult[8] === subtitle) {
              let tmp11 = cResult[9];
            }
            if (cResult[10] === affectedGuildIds) {
              if (cResult[11] === direction) {
                if (cResult[12] === onCardPress) {
                  let tmp14 = cResult[13];
                }
                if (cResult[14] === confirmText) {
                  if (cResult[15] === tmp5) {
                    let tmp18 = cResult[16];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                    let obj2 = { variant: "secondary", size: "md", text: null, onPress: null };
                    const intl = toastContent(1126).intl;
                    obj2.text = intl.string(toastContent(1126).t.X1rGEm);
                    obj2.onPress = tmp7;
                    const tmp23 = closure_7(toastContent(5375).Button, obj2);
                    cResult[17] = tmp23;
                    let tmp21 = tmp23;
                  } else {
                    tmp21 = cResult[17];
                  }
                  if (cResult[18] === tmp4.buttonsContainer) {
                    if (cResult[19] === tmp18) {
                      let tmp24 = cResult[20];
                    }
                    if (cResult[21] === tmp4.container) {
                      if (cResult[22] === tmp8) {
                        if (cResult[23] === tmp11) {
                          if (cResult[24] === tmp14) {
                            if (cResult[25] === tmp24) {
                              let tmp28 = cResult[26];
                            }
                            return tmp28;
                          }
                        }
                      }
                    }
                    let obj3 = { startExpanded: true, children: null };
                    let obj4 = { style: tmp4.container, children: null };
                    const items = [tmp8, tmp11, tmp14, tmp24];
                    obj4.children = items;
                    obj3.children = closure_8(closure_5, obj4);
                    const tmp32 = closure_7(toastContent(6829).BottomSheet, obj3);
                    cResult[21] = tmp4.container;
                    cResult[22] = tmp8;
                    cResult[23] = tmp11;
                    cResult[24] = tmp14;
                    cResult[25] = tmp24;
                    cResult[26] = tmp32;
                    tmp28 = tmp32;
                  }
                  let obj5 = { style: tmp4.buttonsContainer, children: null };
                  const items1 = [tmp18, tmp21];
                  obj5.children = items1;
                  const tmp27 = closure_8(closure_5, obj5);
                  cResult[18] = tmp4.buttonsContainer;
                  cResult[19] = tmp18;
                  cResult[20] = tmp27;
                  tmp24 = tmp27;
                }
                const obj6 = { variant: "primary", size: "md", text: confirmText, onPress: tmp5 };
                const tmp20 = closure_7(toastContent(5375).Button, obj6);
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
          const obj8 = {
            style: tmp4.description,
            variant: "text-md/medium",
            color: "text-default",
            children: subtitle,
          };
          const tmp13 = closure_7(toastContent(5086).Text, obj8);
          cResult[7] = tmp4.description;
          cResult[8] = subtitle;
          cResult[9] = tmp13;
          tmp11 = tmp13;
        }
        const obj9 = {
          style: tmp4.title,
          accessibilityRole: "header",
          variant: "heading-xl/bold",
          color: "text-strong",
          children: title,
        };
        const tmp10 = closure_7(toastContent(5086).Text, obj9);
        cResult[4] = tmp4.title;
        cResult[5] = title;
        cResult[6] = tmp10;
        tmp8 = tmp10;
      }
      const fn = function n() {
        onConfirm();
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const designSystemsNotificationComponents =
          DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("BaseUpsellActionSheet");
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
      let obj = toastContent(576);
    }
  : function BaseUpsellActionSheet(toastContent) {
      toastContent = toastContent.toastContent;
      const onConfirm = toastContent.onConfirm;
      ({ direction, affectedGuildIds, title, subtitle, confirmText, onCardPress } = toastContent);
      const tmp = closure_10();
      const items = [onConfirm, toastContent];
      const callback = noop.useCallback(() => {
        onConfirm();
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const designSystemsNotificationComponents =
          DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("BaseUpsellActionSheet");
        const obj3 = ToastActionCreatorsDefault;
        if (designSystemsNotificationComponents) {
          const obj4 = { text: toastContent, variant: "success" };
          obj3.openMana("ACTIVITY_PRIVACY_UPSELL_TOAST", obj4);
        } else {
          const obj5 = { key: "ACTIVITY_PRIVACY_UPSELL_TOAST", content: toastContent, icon: renderSuccessIcon };
          obj3.open(obj5);
        }
      }, items);
      const callback1 = noop.useCallback(() => {
        onConfirm(dependencyMap[16]).hideActionSheet();
      }, []);
      let obj = { startExpanded: true, children: null };
      let obj2 = { style: tmp.container, children: null };
      const items1 = [
        closure_7(toastContent(5086).Text, {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "heading-xl/bold",
          color: "text-strong",
          children: title,
        }),
        closure_7(toastContent(5086).Text, {
          style: tmp.description,
          variant: "text-md/medium",
          color: "text-default",
          children: subtitle,
        }),
        closure_7(closure_12, { guildIds: affectedGuildIds, direction, onPress: onCardPress }),
      ];
      let obj5 = { style: tmp.buttonsContainer, children: null };
      const items2 = [
        closure_7(toastContent(5375).Button, { variant: "primary", size: "md", text: confirmText, onPress: callback }),
      ];
      const obj6 = { variant: "secondary", size: "md", text: null, onPress: null };
      const intl = toastContent(1126).intl;
      obj6.text = intl.string(toastContent(1126).t.X1rGEm);
      obj6.onPress = callback1;
      items2[1] = closure_7(toastContent(5375).Button, obj6);
      obj5.children = items2;
      items1[3] = closure_8(closure_5, obj5);
      obj2.children = items1;
      obj.children = closure_8(closure_5, obj2);
      return closure_7(toastContent(6829).BottomSheet, obj);
    };
