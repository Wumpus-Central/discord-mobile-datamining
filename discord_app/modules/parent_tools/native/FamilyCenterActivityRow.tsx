// discord_app/modules/parent_tools/native/FamilyCenterActivityRow.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef2565 from "../FamilyCenter.messages.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import GuildBadgeDefault from "../../guild/native/GuildBadge.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import FamilyCenterActivityPurchaseRowDefault from "FamilyCenterActivityPurchaseRow.tsx";
import FamilyCenterActivityGiftRowUtils from "../FamilyCenterActivityGiftRowUtils.tsx";
import FamilyCenterActivityGiftRowDefault from "FamilyCenterActivityGiftRow.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const View = fn(17).View;
const ACTION_TO_TEXT = fn(7248).ACTION_TO_TEXT;
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(5090);
let obj = {
  container: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  avatar: null,
  avatarContainer: null,
  textContainer: null,
  text: null,
};
let obj3 = {
  display: "flex",
  flexDirection: "row",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
obj.avatar = {
  borderRadius: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj.avatarContainer = { marginRight: 12, alignItems: "flex-start" };
obj.textContainer = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj.text = { display: "flex", flexDirection: "row", flexShrink: 1 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (action) => {
        const cResult = action(576).c(27);
        action = action.action;
        const tmp4 = closure_10();
        value = ACTION_TO_TEXT.get(action.display_type);
        _modDef38(null != value, "No text for action type");
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== action.entity_id) {
          const fn = function c() {
            return UserStore.getUser(action.entity_id);
          };
          cResult[1] = action.entity_id;
          cResult[2] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[2];
        }
        const obj = action(576);
        const stateFromStores = action(573).useStateFromStores(first, tmp10);
        if (null == stateFromStores) {
          return null;
        } else {
          const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(action.event_id);
          if (cResult[3] === stateFromStores) {
            if (cResult[4] === tmp4.avatar) {
              let tmp12 = cResult[5];
            }
            if (cResult[6] === tmp12) {
              if (cResult[7] === tmp4.avatarContainer) {
                let tmp15 = cResult[8];
              }
              ({ textContainer, text } = tmp4);
              if (cResult[9] !== stateFromStores) {
                const name = UserUtilsDefault.getName(stateFromStores);
                cResult[9] = stateFromStores;
                cResult[10] = name;
                let tmp18 = name;
                const tmp6Result2 = UserUtilsDefault;
              } else {
                tmp18 = cResult[10];
              }
              if (cResult[11] === tmp18) {
                if (cResult[12] === tmp4.text) {
                  let tmp20 = cResult[13];
                }
                const Text = tmp(5086).Text;
                const _Date = Date;
                const date = new Date(extractTimestampResult);
                const result = tmp(7714).formatUserActivityTimestamp(date.getTime(), value.timestampFormatter);
                if (cResult[14] === Text) {
                  if (cResult[15] === result) {
                    let tmp28 = cResult[16];
                  }
                  if (cResult[17] === View) {
                    if (cResult[18] === tmp28) {
                      if (cResult[19] === tmp20) {
                        if (cResult[20] === tmp4.textContainer) {
                          let tmp31 = cResult[21];
                        }
                        if (cResult[22] === View) {
                          if (cResult[23] === tmp31) {
                            if (cResult[24] === tmp15) {
                              if (cResult[25] === tmp4.container) {
                                let tmp34 = cResult[26];
                              }
                              return tmp34;
                            }
                          }
                        }
                        const obj2 = { style: tmp39, children: null };
                        const items1 = [tmp15, tmp31];
                        obj2.children = items1;
                        const tmp36 = closure_9(View, obj2);
                        cResult[22] = View;
                        cResult[23] = tmp31;
                        cResult[24] = tmp15;
                        cResult[25] = tmp4.container;
                        cResult[26] = tmp36;
                        tmp34 = tmp36;
                      }
                    }
                  }
                  const obj3 = { style: textContainer, children: null };
                  const items2 = [tmp20, tmp28];
                  obj3.children = items2;
                  const tmp33 = closure_9(View, obj3);
                  cResult[17] = View;
                  cResult[18] = tmp28;
                  cResult[19] = tmp20;
                  cResult[20] = tmp4.textContainer;
                  cResult[21] = tmp33;
                  tmp31 = tmp33;
                }
                const obj4 = { variant: "text-xs/medium", color: "channels-default", children: result };
                const tmp30 = closure_8(Text, obj4);
                cResult[14] = Text;
                cResult[15] = result;
                cResult[16] = tmp30;
                tmp28 = tmp30;
                const tmpResult2 = tmp(7714);
              }
              const obj5 = {
                style: text,
                variant: "text-md/semibold",
                color: "interactive-text-active",
                ellipsizeMode: "tail",
                lineClamp: 1,
                children: tmp18,
              };
              const tmp22 = closure_8(tmp(5086).Text, obj5);
              cResult[11] = tmp18;
              cResult[12] = tmp4.text;
              cResult[13] = tmp22;
              tmp20 = tmp22;
            }
            const obj6 = { style: tmp4.avatarContainer, children: tmp12 };
            const tmp17 = closure_8(View, obj6);
            cResult[6] = tmp12;
            cResult[7] = tmp4.avatarContainer;
            cResult[8] = tmp17;
            tmp15 = tmp17;
          }
          const obj7 = {
            avatarStyle: tmp4.avatar,
            user: stateFromStores,
            guildId: "IconComponent",
            disablePlaceholder: null,
            avatarDecoration: stateFromStores.avatarDecoration,
          };
          const tmp14 = closure_8(tmp(1200).Avatar, obj7);
          cResult[3] = stateFromStores;
          cResult[4] = tmp4.avatar;
          cResult[5] = tmp14;
          tmp12 = tmp14;
          const tmp6Result = SnowflakeUtilsDefault;
        }
        const tmpResult = action(573);
      }
    : (action) => {
        action = action.action;
        const tmp = closure_10();
        value = ACTION_TO_TEXT.get(action.display_type);
        _modDef38(null != value, "No text for action type");
        const items = [UserStore];
        const stateFromStores = action(573).useStateFromStores(items, () => UserStore.getUser(action.entity_id));
        if (null == stateFromStores) {
          return null;
        } else {
          const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(action.event_id);
          const obj2 = { style: tmp.container, children: null };
          const obj3 = { style: tmp.avatarContainer, children: null };
          const obj4 = {
            avatarStyle: tmp.avatar,
            user: stateFromStores,
            guildId: "IconComponent",
            disablePlaceholder: null,
            avatarDecoration: stateFromStores.avatarDecoration,
          };
          obj3.children = closure_8(tmp6(1200).Avatar, obj4);
          const items1 = [closure_8(View, obj3)];
          const obj5 = { style: tmp.textContainer, children: null };
          const obj6 = {
            style: tmp.text,
            variant: "text-md/semibold",
            color: "interactive-text-active",
            ellipsizeMode: "tail",
            lineClamp: 1,
            children: null,
          };
          const tmp3Result = SnowflakeUtilsDefault;
          obj6.children = UserUtilsDefault.getName(stateFromStores);
          const items2 = [closure_8(tmp6(5086).Text, obj6)];
          const obj7 = { variant: "text-xs/medium", color: "channels-default", children: null };
          const tmp3Result2 = UserUtilsDefault;
          const _Date = Date;
          const date = new Date(extractTimestampResult);
          obj7.children = tmp6(7714).formatUserActivityTimestamp(date.getTime(), value.timestampFormatter);
          items2[1] = closure_8(tmp6(5086).Text, obj7);
          obj5.children = items2;
          items1[1] = closure_9(View, obj5);
          obj2.children = items1;
          return closure_9(View, obj2);
        }
        const obj = action(573);
      },
);
memoResult.displayName = "FamilyCenterActivityRowUser";
createStyles = fn(5090);
let obj5 = {
  container: null,
  avatar: null,
  avatarText: null,
  text: null,
  headerContainer: null,
  badge: null,
  header: null,
  headerAndIconContainer: null,
};
let obj4 = {
  borderRadius: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj5.container = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
let size = {
  borderRadius: nativeDefault.radii.md,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  height: 40,
  width: 40,
  margin: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  marginRight: 12,
};
obj5.avatar = size;
let obj8 = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
obj5.avatarText = { color: nativeDefault.colors.TEXT_DEFAULT };
obj5.text = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj5.headerContainer = { display: "flex", flexDirection: "row" };
obj5.badge = { marginRight: 4 };
obj5.header = { paddingRight: 16 };
obj5.headerAndIconContainer = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_12 = createStyles.createStyles(obj5);
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (action) => {
        const cResult = action(576).c(33);
        action = action.action;
        const tmp4 = closure_12();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [FamilyCenterStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== action.entity_id) {
          const fn = function u() {
            return FamilyCenterStore.getGuild(action.entity_id);
          };
          cResult[1] = action.entity_id;
          cResult[2] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const obj = action(576);
        const stateFromStores = action(573).useStateFromStores(first, tmp7);
        value = ACTION_TO_TEXT.get(action.display_type);
        _modDef38(null != value, "No text for action type");
        if (undefined === stateFromStores) {
          return null;
        } else {
          if (cResult[3] !== stateFromStores.features) {
            const features = stateFromStores.features;
            let hasItem = features.has(GuildFeatures.VERIFIED);
            if (!hasItem) {
              const features2 = stateFromStores.features;
              hasItem = features2.has(GuildFeatures.PARTNERED);
            }
            cResult[3] = stateFromStores.features;
            cResult[4] = hasItem;
            let tmp12 = hasItem;
          } else {
            tmp12 = cResult[4];
          }
          const name = stateFromStores.name;
          if (cResult[5] === stateFromStores) {
            if (cResult[6] === tmp4.avatar) {
              if (cResult[7] === tmp4.avatarText) {
                let tmp15 = cResult[8];
              }
              if (cResult[9] === stateFromStores) {
                if (cResult[10] === tmp4.badge) {
                  if (cResult[11] === tmp12) {
                    let tmp19 = cResult[12];
                  }
                  if (cResult[13] === tmp4.header) {
                    if (cResult[14] === name) {
                      let tmp23 = cResult[15];
                    }
                    if (cResult[16] === tmp4.headerAndIconContainer) {
                      if (cResult[17] === tmp19) {
                        if (cResult[18] === tmp23) {
                          let tmp26 = cResult[19];
                        }
                        if (cResult[20] === tmp4.headerContainer) {
                          if (cResult[21] === tmp26) {
                            let tmp30 = cResult[22];
                          }
                          if (cResult[23] !== stateFromStores.approximateMemberCount) {
                            let tmp35 = null;
                            if (undefined !== stateFromStores.approximateMemberCount) {
                              const obj2 = { variant: "text-xs/medium", color: "channels-default", children: null };
                              const intl = tmp(1126).intl;
                              const obj4 = { members: stateFromStores.approximateMemberCount };
                              obj2.children = intl.format(_modDef2565["5JmNgg"], obj4);
                              tmp35 = closure_8(tmp(5086).Text, obj2);
                            }
                            cResult[23] = stateFromStores.approximateMemberCount;
                            cResult[24] = tmp35;
                            let tmp34 = tmp35;
                          } else {
                            tmp34 = cResult[24];
                          }
                          if (cResult[25] === tmp4.text) {
                            if (cResult[26] === tmp30) {
                              if (cResult[27] === tmp34) {
                                let tmp37 = cResult[28];
                              }
                              if (cResult[29] === tmp4.container) {
                                if (cResult[30] === tmp37) {
                                  if (cResult[31] === tmp15) {
                                    let tmp41 = cResult[32];
                                  }
                                  return tmp41;
                                }
                              }
                              const obj5 = { style: tmp4.container, children: null };
                              const items1 = [tmp15, tmp37];
                              obj5.children = items1;
                              const tmp44 = closure_9(View, obj5);
                              cResult[29] = tmp4.container;
                              cResult[30] = tmp37;
                              cResult[31] = tmp15;
                              cResult[32] = tmp44;
                              tmp41 = tmp44;
                            }
                          }
                          const obj6 = { style: tmp4.text, children: null };
                          const items2 = [tmp30, tmp34];
                          obj6.children = items2;
                          const tmp40 = closure_9(View, obj6);
                          cResult[25] = tmp4.text;
                          cResult[26] = tmp30;
                          cResult[27] = tmp34;
                          cResult[28] = tmp40;
                          tmp37 = tmp40;
                        }
                        const obj7 = { style: tmp4.headerContainer, children: tmp26 };
                        const tmp33 = closure_8(View, obj7);
                        cResult[20] = tmp4.headerContainer;
                        cResult[21] = tmp26;
                        cResult[22] = tmp33;
                        tmp30 = tmp33;
                      }
                    }
                    const obj8 = { style: tmp4.headerAndIconContainer, children: null };
                    const items3 = [tmp19, tmp23];
                    obj8.children = items3;
                    const tmp29 = closure_9(View, obj8);
                    cResult[16] = tmp4.headerAndIconContainer;
                    cResult[17] = tmp19;
                    cResult[18] = tmp23;
                    cResult[19] = tmp29;
                    tmp26 = tmp29;
                  }
                  const obj9 = {
                    style: tmp4.header,
                    variant: "text-md/semibold",
                    color: "interactive-text-active",
                    ellipsizeMode: "tail",
                    lineClamp: 1,
                    children: name,
                  };
                  const tmp25 = closure_8(tmp(5086).Text, obj9);
                  cResult[13] = tmp4.header;
                  cResult[14] = name;
                  cResult[15] = tmp25;
                  tmp23 = tmp25;
                }
              }
              let tmp20 = null;
              if (tmp12) {
                const obj10 = {
                  style: tmp4.badge,
                  guild: stateFromStores,
                  size: GuildBadgeDefault.Sizes.SMALL,
                  disableColor: true,
                };
                tmp20 = closure_8(GuildBadgeDefault, obj10);
                const tmp10Result = GuildBadgeDefault;
              }
              cResult[9] = stateFromStores;
              cResult[10] = tmp4.badge;
              cResult[11] = tmp12;
              cResult[12] = tmp20;
              tmp19 = tmp20;
            }
          }
          const obj11 = { style: null, textStyle: null, guild: null, size: null, animate: true };
          ({ avatar: obj3.style, avatarText: obj3.textStyle } = tmp4);
          obj11.guild = stateFromStores;
          obj11.size = tmp(6161).GuildIconSizes.NORMAL;
          const tmp18 = closure_8(GuildIconDefault, obj11);
          cResult[5] = stateFromStores;
          cResult[6] = tmp4.avatar;
          cResult[7] = tmp4.avatarText;
          cResult[8] = tmp18;
          tmp15 = tmp18;
          const tmp10Result2 = GuildIconDefault;
        }
        const tmpResult = action(573);
      }
    : (action) => {
        action = action.action;
        const tmp = closure_12();
        const items = [FamilyCenterStore];
        const stateFromStores = action(573).useStateFromStores(items, () =>
          FamilyCenterStore.getGuild(action.entity_id),
        );
        value = ACTION_TO_TEXT.get(action.display_type);
        _modDef38(null != value, "No text for action type");
        if (undefined === stateFromStores) {
          return null;
        } else {
          const features2 = stateFromStores.features;
          let hasItem = features2.has(GuildFeatures.VERIFIED);
          if (!hasItem) {
            const features = stateFromStores.features;
            hasItem = features.has(GuildFeatures.PARTNERED);
          }
          const obj2 = { style: tmp.container, children: null };
          const obj4 = { style: null, textStyle: null, guild: null, size: null, animate: true };
          ({ avatar: obj3.style, avatarText: obj3.textStyle } = tmp);
          obj4.guild = stateFromStores;
          obj4.size = tmp2(6161).GuildIconSizes.NORMAL;
          const items1 = [closure_8(GuildIconDefault, obj4)];
          const obj5 = { style: tmp.text, children: null };
          const obj6 = { style: tmp.headerContainer, children: null };
          const obj7 = { style: tmp.headerAndIconContainer, children: null };
          let tmp11Result = null;
          if (hasItem) {
            const obj8 = {
              style: tmp.badge,
              guild: stateFromStores,
              size: GuildBadgeDefault.Sizes.SMALL,
              disableColor: true,
            };
            tmp11Result = closure_8(GuildBadgeDefault, obj8);
            const tmp6Result2 = GuildBadgeDefault;
          }
          const items2 = [tmp11Result];
          const obj9 = {
            style: tmp.header,
            variant: "text-md/semibold",
            color: "interactive-text-active",
            ellipsizeMode: "tail",
            lineClamp: 1,
            children: stateFromStores.name,
          };
          items2[1] = closure_8(tmp2(5086).Text, obj9);
          obj7.children = items2;
          obj6.children = closure_9(View, obj7);
          const items3 = [closure_8(View, obj6)];
          let tmp11Result2 = null;
          if (undefined !== stateFromStores.approximateMemberCount) {
            const obj10 = { variant: "text-xs/medium", color: "channels-default", children: null };
            const intl = tmp2(1126).intl;
            const obj19 = { members: stateFromStores.approximateMemberCount };
            obj10.children = intl.format(_modDef2565["5JmNgg"], obj19);
            tmp11Result2 = closure_8(tmp2(5086).Text, obj10);
          }
          items3[1] = tmp11Result2;
          obj5.children = items3;
          items1[1] = closure_9(View, obj5);
          obj2.children = items1;
          return closure_9(View, obj2);
        }
        const obj = action(573);
      },
);
memoResult1.displayName = "FamilyCenterActivityRowGuild";
ReactCompilerGating = fn(558);
let obj9 = { color: nativeDefault.colors.TEXT_DEFAULT };
size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterActivityRow(action) {
      let tmp2 = dependencyMap;
      const cResult = c.c(20);
      action = action.action;
      if (!obj2.isUserAction(action)) {
        if (!tmpResult.isGuildAction(action)) {
          if (!tmpResult7.isPurchase(action)) {
            if (!tmpResult8.isGift(action)) {
              return null;
            }
            tmpResult8 = FamilyCenterUtils;
          }
          tmpResult7 = FamilyCenterUtils;
        }
        tmpResult = FamilyCenterUtils;
      }
      obj2 = FamilyCenterUtils;
      if (tmpResult9.isPurchase(action)) {
        if (cResult[0] !== action.entity_id) {
          const purchaseInfo = FamilyCenterStore.getPurchaseInfo(action.entity_id);
          cResult[0] = action.entity_id;
          cResult[1] = purchaseInfo;
          total = purchaseInfo;
        } else {
          total = cResult[1];
        }
        if (null == total) {
          return null;
        } else {
          if (cResult[2] === total.currency) {
            if (cResult[3] === total.sku_id) {
              if (cResult[4] === total.subscription_plan_id) {
              }
            }
          }
          ({
            sku_id: obj14.skuId,
            subscription_plan_id: obj14.subscriptionPlanId,
            total: obj14.total,
            currency: obj14.currency,
          } = total);
          tmp2 = closure_1_8(FamilyCenterActivityPurchaseRowDefault, {
            skuId: null,
            subscriptionPlanId: null,
            total: null,
            currency: null,
          });
          cResult[2] = total.currency;
          cResult[3] = total.sku_id;
          ({ subscription_plan_id: tmp3[4], total } = total);
          cResult[5] = total;
          cResult[6] = tmp2;
          const obj3 = { skuId: null, subscriptionPlanId: null, total: null, currency: null };
        }
      } else {
        if (tmpResult10.isGift(action)) {
          if (cResult[7] !== action.entity_id) {
            const _Symbol = Symbol;
            const giftInfo = FamilyCenterStore.getGiftInfo(action.entity_id);
            let tmp18 = null;
            let giftRowDisplayInfo;
            if (null != giftInfo) {
              giftRowDisplayInfo = FamilyCenterActivityGiftRowUtils.getGiftRowDisplayInfo(giftInfo);
              tmp18 = forResult;
              const tmpResult11 = FamilyCenterActivityGiftRowUtils;
            }
            cResult[7] = action.entity_id;
            cResult[8] = giftRowDisplayInfo;
            cResult[9] = tmp18;
            let tmp13 = tmp18;
            let tmp12 = giftRowDisplayInfo;
            forResult = Symbol.for("react.early_return_sentinel");
          } else {
            tmp12 = cResult[8];
            tmp13 = cResult[9];
          }
          const _Symbol2 = Symbol;
          if (tmp13 !== Symbol.for("react.early_return_sentinel")) {
            return tmp13;
          } else {
            ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = tmp12);
            if (cResult[10] === claimed) {
              if (cResult[11] === claimedAt) {
                if (cResult[12] === gifterUserId) {
                  if (cResult[13] === offeredAt) {
                    if (cResult[14] === price) {
                      if (cResult[15] === skuId) {
                        if (cResult[16] === subscriptionPlanId) {
                          let tmp21 = cResult[17];
                        }
                        return tmp21;
                      }
                    }
                  }
                }
              }
            }
            const obj4 = { skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt };
            const tmp24 = closure_1_8(FamilyCenterActivityGiftRowDefault, obj4);
            cResult[10] = claimed;
            cResult[11] = claimedAt;
            cResult[12] = gifterUserId;
            cResult[13] = offeredAt;
            cResult[14] = price;
            cResult[15] = skuId;
            cResult[16] = subscriptionPlanId;
            cResult[17] = tmp24;
            tmp21 = tmp24;
          }
        } else if (cResult[18] !== action) {
          if (tmpResult12.isUserAction(action)) {
            const obj5 = { action };
            let tmp5Result = closure_1_8(memoResult, obj5);
          } else {
            const obj6 = { action };
            tmp5Result = closure_1_8(memoResult1, obj6);
          }
          const obj7 = { children: tmp5Result };
          const tmp5Result2 = closure_1_8(View, obj7);
          cResult[18] = action;
          cResult[19] = tmp5Result2;
          tmpResult12 = FamilyCenterUtils;
        } else {
          return cResult[19];
        }
        tmpResult10 = FamilyCenterUtils;
      }
      tmpResult9 = FamilyCenterUtils;
    }
  : function FamilyCenterActivityRow(action) {
      action = action.action;
      if (!obj.isUserAction(action)) {
        if (!tmpResult.isGuildAction(action)) {
          if (!tmpResult7.isPurchase(action)) {
            if (!tmpResult8.isGift(action)) {
              return null;
            }
            tmpResult8 = FamilyCenterUtils;
          }
          tmpResult7 = FamilyCenterUtils;
        }
        tmpResult = FamilyCenterUtils;
      }
      obj = FamilyCenterUtils;
      if (tmpResult9.isPurchase(action)) {
        const purchaseInfo = FamilyCenterStore.getPurchaseInfo(action.entity_id);
        let tmp14 = null;
        if (null != purchaseInfo) {
          ({
            sku_id: obj11.skuId,
            subscription_plan_id: obj11.subscriptionPlanId,
            total: obj11.total,
            currency: obj11.currency,
          } = purchaseInfo);
          tmp14 = closure_1_8(FamilyCenterActivityPurchaseRowDefault, {
            skuId: null,
            subscriptionPlanId: null,
            total: null,
            currency: null,
          });
          const obj2 = { skuId: null, subscriptionPlanId: null, total: null, currency: null };
        }
        return tmp14;
      } else {
        if (tmpResult10.isGift(action)) {
          const giftInfo = FamilyCenterStore.getGiftInfo(action.entity_id);
          if (null == giftInfo) {
            return null;
          } else {
            const giftRowDisplayInfo = FamilyCenterActivityGiftRowUtils.getGiftRowDisplayInfo(giftInfo);
            ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = giftRowDisplayInfo);
            const obj3 = { skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt };
            return closure_1_8(FamilyCenterActivityGiftRowDefault, obj3);
          }
        } else {
          if (tmpResult12.isUserAction(action)) {
            const obj4 = { action };
            let tmp4Result = closure_1_8(memoResult, obj4);
          } else {
            const obj5 = { action };
            tmp4Result = closure_1_8(memoResult1, obj5);
          }
          const obj6 = { children: tmp4Result };
          return closure_1_8(View, obj6);
        }
        tmpResult10 = FamilyCenterUtils;
      }
      tmpResult9 = FamilyCenterUtils;
    };
