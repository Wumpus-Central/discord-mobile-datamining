// discord_app/modules/parent_tools/native/FamilyCenterActivityRow.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import native from "../../../design/void/native.tsx";
import _modDef2521 from "../FamilyCenter.messages.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import GuildBadgeDefault from "../../guild/native/GuildBadge.tsx";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import FamilyCenterActivityPurchaseRowDefault from "FamilyCenterActivityPurchaseRow.tsx";
import FamilyCenterActivityGiftRowUtils from "../FamilyCenterActivityGiftRowUtils.tsx";
import FamilyCenterActivityGiftRowDefault from "FamilyCenterActivityGiftRow.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj5;
let obj6;
let size;
const View = react_native.View;
const ACTION_TO_TEXT = FamilyCenterConstants.ACTION_TO_TEXT;
const GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  avatar: obj3,
  avatarContainer: { marginRight: 12, alignItems: "flex-start" },
  textContainer: { display: "flex", flexDirection: "column", flexShrink: 1 },
  text: { display: "flex", flexDirection: "row", flexShrink: 1 },
};
obj2 = {
  display: "flex",
  flexDirection: "row",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
createStyles = createStyles.createStyles;
obj3 = {
  borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let closure_10 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function (action) {
        let first;
        let items1;
        let items2;
        let text;
        let textContainer;
        let tmp10;
        const obj = action(576);
        const cResult = obj.c(27);
        action = action.action;
        const tmp4 = closure_10();
        const value = ACTION_TO_TEXT.get(action.display_type);
        _modDef38(null != value, "No text for action type");
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== action.entity_id) {
          const fn = function c() {
            return UserStore.getUser(action.entity_id);
          };
          cResult[1] = action.entity_id;
          cResult[2] = fn;
          tmp10 = fn;
        } else {
          tmp10 = cResult[2];
        }
        const tmpResult = action(573);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
        if (null == stateFromStores) {
          return null;
        } else {
          const tmp6Result = SnowflakeUtilsDefault;
          const extractTimestampResult = tmp6Result.extractTimestamp(action.event_id);
          if (cResult[3] === stateFromStores) {
            let tmp12;
            if (cResult[4] === tmp4.avatar) {
              tmp12 = cResult[5];
            }
            if (cResult[6] === tmp12) {
              let tmp15;
              let tmp18;
              if (cResult[7] === tmp4.avatarContainer) {
                tmp15 = cResult[8];
              }
              ({ textContainer, text } = tmp4);
              if (cResult[9] !== stateFromStores) {
                const tmp6Result2 = UserUtilsDefault;
                const name = tmp6Result2.getName(stateFromStores);
                cResult[9] = stateFromStores;
                cResult[10] = name;
                tmp18 = name;
              } else {
                tmp18 = cResult[10];
              }
              if (cResult[11] === tmp18) {
                let tmp20;
                if (cResult[12] === tmp4.text) {
                  tmp20 = cResult[13];
                }
                const Text = tmp(4892).Text;
                const _Date = Date;
                const self = this;
                const self2 = this;
                const formatUserActivityTimestamp = action(8331).formatUserActivityTimestamp;
                action(8331);
                const date = new Date(extractTimestampResult);
                const result = formatUserActivityTimestamp(date.getTime(), value.timestampFormatter);
                if (cResult[14] === Text) {
                  let tmp27;
                  if (cResult[15] === result) {
                    tmp27 = cResult[16];
                  }
                  if (cResult[17] === View) {
                    if (cResult[18] === tmp27) {
                      if (cResult[19] === tmp20) {
                        let tmp30;
                        if (cResult[20] === tmp4.textContainer) {
                          tmp30 = cResult[21];
                        }
                        if (cResult[22] === View) {
                          if (cResult[23] === tmp30) {
                            if (cResult[24] === tmp15) {
                              let tmp33;
                              if (cResult[25] === tmp4.container) {
                                tmp33 = cResult[26];
                              }
                              return tmp33;
                            }
                          }
                        }
                        const obj2 = { style: tmp38, children: items1 };
                        items1 = [tmp15, tmp30];
                        const tmp35 = closure_9(View, obj2);
                        cResult[22] = View;
                        cResult[23] = tmp30;
                        cResult[24] = tmp15;
                        cResult[25] = tmp4.container;
                        cResult[26] = tmp35;
                        tmp33 = tmp35;
                      }
                    }
                  }
                  const obj3 = { style: textContainer, children: items2 };
                  items2 = [tmp20, tmp27];
                  const tmp32 = closure_9(View, obj3);
                  cResult[17] = View;
                  cResult[18] = tmp27;
                  cResult[19] = tmp20;
                  cResult[20] = tmp4.textContainer;
                  cResult[21] = tmp32;
                  tmp30 = tmp32;
                }
                const obj4 = { variant: "text-xs/medium", color: "channels-default", children: result };
                const tmp29 = closure_8(Text, obj4);
                cResult[14] = Text;
                cResult[15] = result;
                cResult[16] = tmp29;
                tmp27 = tmp29;
              }
              const obj5 = {
                style: text,
                variant: "text-md/semibold",
                color: "interactive-text-active",
                ellipsizeMode: "tail",
                lineClamp: 1,
                children: tmp18,
              };
              const tmp22 = closure_8(action(4892).Text, obj5);
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
          const tmp14 = closure_8(action(1188).Avatar, obj7);
          cResult[3] = stateFromStores;
          cResult[4] = tmp4.avatar;
          cResult[5] = tmp14;
          tmp12 = tmp14;
        }
      }
    : function (action) {
        let date;
        let formatUserActivityTimestamp;
        let items1;
        let items2;
        let obj4;
        let tmp3Result2;
        action = action.action;
        const tmp = closure_10();
        const value = ACTION_TO_TEXT.get(action.display_type);
        _modDef38(null != value, "No text for action type");
        const items = [UserStore];
        const obj = action(573);
        const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(action.entity_id));
        if (null == stateFromStores) {
          return null;
        } else {
          const tmp3Result = SnowflakeUtilsDefault;
          const extractTimestampResult = tmp3Result.extractTimestamp(action.event_id);
          const obj2 = { style: tmp.container, children: items1 };
          const obj3 = { style: tmp.avatarContainer, children: closure_8(action(1188).Avatar, obj4) };
          obj4 = {
            avatarStyle: tmp.avatar,
            user: stateFromStores,
            guildId: "IconComponent",
            disablePlaceholder: null,
            avatarDecoration: stateFromStores.avatarDecoration,
          };
          items1 = [closure_8(View, obj3)];
          const obj5 = { style: tmp.textContainer, children: items2 };
          const obj6 = {
            style: tmp.text,
            variant: "text-md/semibold",
            color: "interactive-text-active",
            ellipsizeMode: "tail",
            lineClamp: 1,
            children: tmp3Result2.getName(stateFromStores),
          };
          const Text = tmp6(4892).Text;
          tmp3Result2 = UserUtilsDefault;
          items2 = [closure_8(Text, obj6)];
          const obj7 = {
            variant: "text-xs/medium",
            color: "channels-default",
            children: formatUserActivityTimestamp(date.getTime(), value.timestampFormatter),
          };
          const Text2 = tmp6(4892).Text;
          const _Date = Date;
          const self = this;
          const self2 = this;
          formatUserActivityTimestamp = action(8331).formatUserActivityTimestamp;
          action(8331);
          date = new Date(extractTimestampResult);
          items2[1] = closure_8(Text2, obj7);
          items1[1] = closure_9(View, obj5);
          return closure_9(View, obj2);
        }
      },
);
const unpackModuleId = memoResult;
memoResult.displayName = "FamilyCenterActivityRowUser";
createStyles = createStyles_mod;
let obj4 = {
  container: obj5,
  avatar: size,
  avatarText: obj6,
  text: { display: "flex", flexDirection: "column", flexShrink: 1 },
  headerContainer: { display: "flex", flexDirection: "row" },
  badge: { marginRight: 4 },
  header: { paddingRight: 16 },
  headerAndIconContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
};
obj5 = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
const createStyles2 = createStyles.createStyles;
size = {
  borderRadius: nativeDefault.radii.md,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  height: 40,
  width: 40,
  margin: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  marginRight: 12,
};
obj6 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_12 = createStyles2(obj4);
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (action) => {
        let first;
        let intl;
        let items1;
        let items2;
        let items3;
        let obj4;
        let tmp7;
        const obj = action(576);
        const cResult = obj.c(33);
        action = action.action;
        const tmp4 = closure_12();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [FamilyCenterStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== action.entity_id) {
          const fn = function u() {
            return FamilyCenterStore.getGuild(action.entity_id);
          };
          cResult[1] = action.entity_id;
          cResult[2] = fn;
          tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const tmpResult = action(573);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
        const value = ACTION_TO_TEXT.get(action.display_type);
        _modDef38(null != value, "No text for action type");
        if (undefined === stateFromStores) {
          return null;
        } else {
          let tmp12;
          if (cResult[3] !== stateFromStores.features) {
            const features = stateFromStores.features;
            let hasItem = features.has(GuildFeatures.VERIFIED);
            if (!hasItem) {
              const features2 = stateFromStores.features;
              hasItem = features2.has(GuildFeatures.PARTNERED);
            }
            cResult[3] = stateFromStores.features;
            cResult[4] = hasItem;
            tmp12 = hasItem;
          } else {
            tmp12 = cResult[4];
          }
          const name = stateFromStores.name;
          if (cResult[5] === stateFromStores) {
            if (cResult[6] === tmp4.avatar) {
              let tmp15;
              if (cResult[7] === tmp4.avatarText) {
                tmp15 = cResult[8];
              }
              if (cResult[9] === stateFromStores) {
                if (cResult[10] === tmp4.badge) {
                  let tmp19;
                  if (cResult[11] === tmp12) {
                    tmp19 = cResult[12];
                  }
                  if (cResult[13] === tmp4.header) {
                    let tmp23;
                    if (cResult[14] === name) {
                      tmp23 = cResult[15];
                    }
                    if (cResult[16] === tmp4.headerAndIconContainer) {
                      if (cResult[17] === tmp19) {
                        let tmp26;
                        if (cResult[18] === tmp23) {
                          tmp26 = cResult[19];
                        }
                        if (cResult[20] === tmp4.headerContainer) {
                          let tmp30;
                          let tmp34;
                          if (cResult[21] === tmp26) {
                            tmp30 = cResult[22];
                          }
                          if (cResult[23] !== stateFromStores.approximateMemberCount) {
                            let tmp35 = null;
                            if (undefined !== stateFromStores.approximateMemberCount) {
                              const obj2 = {
                                variant: "text-xs/medium",
                                color: "channels-default",
                                children: intl.format(_modDef2521["5JmNgg"], obj4),
                              };
                              const Text = tmp(4892).Text;
                              intl = tmp(1126).intl;
                              obj4 = { members: stateFromStores.approximateMemberCount };
                              tmp35 = closure_8(Text, obj2);
                            }
                            cResult[23] = stateFromStores.approximateMemberCount;
                            cResult[24] = tmp35;
                            tmp34 = tmp35;
                          } else {
                            tmp34 = cResult[24];
                          }
                          if (cResult[25] === tmp4.text) {
                            if (cResult[26] === tmp30) {
                              let tmp37;
                              if (cResult[27] === tmp34) {
                                tmp37 = cResult[28];
                              }
                              if (cResult[29] === tmp4.container) {
                                if (cResult[30] === tmp37) {
                                  let tmp41;
                                  if (cResult[31] === tmp15) {
                                    tmp41 = cResult[32];
                                  }
                                  return tmp41;
                                }
                              }
                              const obj5 = { style: tmp4.container, children: items1 };
                              items1 = [tmp15, tmp37];
                              const tmp44 = closure_9(View, obj5);
                              cResult[29] = tmp4.container;
                              cResult[30] = tmp37;
                              cResult[31] = tmp15;
                              cResult[32] = tmp44;
                              tmp41 = tmp44;
                            }
                          }
                          const obj6 = { style: tmp4.text, children: items2 };
                          items2 = [tmp30, tmp34];
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
                    const obj8 = { style: tmp4.headerAndIconContainer, children: items3 };
                    items3 = [tmp19, tmp23];
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
                  const tmp25 = closure_8(action(4892).Text, obj9);
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
                const tmp10Result = GuildBadgeDefault;
                tmp20 = closure_8(tmp10Result, obj10);
              }
              cResult[9] = stateFromStores;
              cResult[10] = tmp4.badge;
              cResult[11] = tmp12;
              cResult[12] = tmp20;
              tmp19 = tmp20;
            }
          }
          ({ avatar: obj3.style, avatarText: obj3.textStyle } = tmp4);
          const obj11 = {
            style: null,
            textStyle: null,
            guild: stateFromStores,
            size: action(5978).GuildIconSizes.NORMAL,
            animate: true,
          };
          const tmp10Result2 = GuildIconDefault;
          const tmp18 = closure_8(tmp10Result2, obj11);
          cResult[5] = stateFromStores;
          cResult[6] = tmp4.avatar;
          cResult[7] = tmp4.avatarText;
          cResult[8] = tmp18;
          tmp15 = tmp18;
        }
      }
    : (action) => {
        let intl;
        let items1;
        let items2;
        let items3;
        let obj19;
        let obj7;
        action = action.action;
        const tmp = closure_12();
        const items = [FamilyCenterStore];
        const obj = action(573);
        const stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getGuild(action.entity_id));
        const value = ACTION_TO_TEXT.get(action.display_type);
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
          const name = stateFromStores.name;
          const obj2 = { style: tmp.container, children: items1 };
          ({ avatar: obj3.style, avatarText: obj3.textStyle } = tmp);
          const obj4 = {
            style: null,
            textStyle: null,
            guild: stateFromStores,
            size: action(5978).GuildIconSizes.NORMAL,
            animate: true,
          };
          const tmp6Result = GuildIconDefault;
          items1 = [closure_8(tmp6Result, obj4)];
          const obj5 = { style: tmp.text, children: items3 };
          const obj6 = { style: tmp.headerContainer, children: closure_9(View, obj7) };
          let tmp11Result = null;
          obj7 = { style: tmp.headerAndIconContainer, children: items2 };
          if (hasItem) {
            const obj8 = {
              style: tmp.badge,
              guild: stateFromStores,
              size: GuildBadgeDefault.Sizes.SMALL,
              disableColor: true,
            };
            const tmp6Result2 = GuildBadgeDefault;
            tmp11Result = closure_8(tmp6Result2, obj8);
          }
          items2 = [tmp11Result];
          const obj9 = {
            style: tmp.header,
            variant: "text-md/semibold",
            color: "interactive-text-active",
            ellipsizeMode: "tail",
            lineClamp: 1,
            children: name,
          };
          items2[1] = closure_8(action(4892).Text, obj9);
          items3 = [closure_8(View, obj6)];
          let tmp11Result2 = null;
          if (undefined !== stateFromStores.approximateMemberCount) {
            const obj10 = {
              variant: "text-xs/medium",
              color: "channels-default",
              children: intl.format(_modDef2521["5JmNgg"], obj19),
            };
            const Text = tmp2(4892).Text;
            intl = tmp2(1126).intl;
            obj19 = { members: stateFromStores.approximateMemberCount };
            tmp11Result2 = closure_8(Text, obj10);
          }
          items3[1] = tmp11Result2;
          items1[1] = closure_9(View, obj5);
          return closure_9(View, obj2);
        }
      },
);
const map1 = memo2Result;
memo2Result.displayName = "FamilyCenterActivityRowGuild";
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (action) => {
      let claimed;
      let claimedAt;
      let gifterUserId;
      let offeredAt;
      let price;
      let skuId;
      let subscriptionPlanId;
      const obj = react2;
      const cResult = obj.c(20);
      action = action.action;
      const obj2 = FamilyCenterUtils;
      if (!obj2.isUserAction(action)) {
        const tmpResult = FamilyCenterUtils;
        if (!tmpResult.isGuildAction(action)) {
          const tmpResult7 = FamilyCenterUtils;
          if (!tmpResult7.isPurchase(action)) {
            const tmpResult8 = FamilyCenterUtils;
            if (!tmpResult8.isGift(action)) {
              return null;
            }
          }
        }
      }
      const tmpResult9 = FamilyCenterUtils;
      if (tmpResult9.isPurchase(action)) {
        let tmp25;
        if (cResult[0] !== action.entity_id) {
          const purchaseInfo = FamilyCenterStore.getPurchaseInfo(action.entity_id);
          cResult[0] = action.entity_id;
          cResult[1] = purchaseInfo;
          tmp25 = purchaseInfo;
        } else {
          tmp25 = cResult[1];
        }
        let tmp28 = null;
        if (null != tmp25) {
          if (cResult[2] === tmp25.currency) {
            if (cResult[3] === tmp25.sku_id) {
              if (cResult[4] === tmp25.subscription_plan_id) {
                let tmp29;
                if (cResult[5] === tmp25.total) {
                  tmp29 = cResult[6];
                }
                tmp28 = tmp29;
              }
            }
          }
          const obj3 = { skuId: null, subscriptionPlanId: null, total: null, currency: null };
          ({
            sku_id: obj14.skuId,
            subscription_plan_id: obj14.subscriptionPlanId,
            total: obj14.total,
            currency: obj14.currency,
          } = tmp25);
          const tmp32 = metroImportAll(FamilyCenterActivityPurchaseRowDefault, obj3);
          cResult[2] = tmp25.currency;
          cResult[3] = tmp25.sku_id;
          cResult[4] = tmp25.subscription_plan_id;
          cResult[5] = tmp25.total;
          cResult[6] = tmp32;
          tmp29 = tmp32;
        }
        return tmp28;
      } else {
        const tmpResult10 = FamilyCenterUtils;
        if (tmpResult10.isGift(action)) {
          let tmp13;
          let tmp12;
          if (cResult[7] !== action.entity_id) {
            const _Symbol = Symbol;
            const forResult = Symbol.for("react.early_return_sentinel");
            const giftInfo = FamilyCenterStore.getGiftInfo(action.entity_id);
            let tmp18 = null;
            let giftRowDisplayInfo;
            if (null != giftInfo) {
              const tmpResult11 = FamilyCenterActivityGiftRowUtils;
              giftRowDisplayInfo = tmpResult11.getGiftRowDisplayInfo(giftInfo);
              tmp18 = forResult;
            }
            cResult[7] = action.entity_id;
            cResult[8] = giftRowDisplayInfo;
            cResult[9] = tmp18;
            tmp13 = tmp18;
            tmp12 = giftRowDisplayInfo;
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
                        let tmp21;
                        if (cResult[16] === subscriptionPlanId) {
                          tmp21 = cResult[17];
                        }
                        return tmp21;
                      }
                    }
                  }
                }
              }
            }
            const obj4 = { skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt };
            const tmp24 = metroImportAll(FamilyCenterActivityGiftRowDefault, obj4);
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
        } else {
          let tmp5;
          if (cResult[18] !== action) {
            let tmp6Result;
            const tmpResult12 = FamilyCenterUtils;
            if (tmpResult12.isUserAction(action)) {
              const obj5 = { action };
              tmp6Result = metroImportAll(unpackModuleId, obj5);
            } else {
              const obj6 = { action };
              tmp6Result = metroImportAll(map1, obj6);
            }
            const obj7 = { children: tmp6Result };
            const tmp6Result2 = metroImportAll(View, obj7);
            cResult[18] = action;
            cResult[19] = tmp6Result2;
            tmp5 = tmp6Result2;
          } else {
            tmp5 = cResult[19];
          }
          return tmp5;
        }
      }
    }
  : (action) => {
      let claimed;
      let claimedAt;
      let gifterUserId;
      let offeredAt;
      let price;
      let skuId;
      let subscriptionPlanId;
      action = action.action;
      const obj = FamilyCenterUtils;
      if (!obj.isUserAction(action)) {
        const tmpResult = FamilyCenterUtils;
        if (!tmpResult.isGuildAction(action)) {
          const tmpResult7 = FamilyCenterUtils;
          if (!tmpResult7.isPurchase(action)) {
            const tmpResult8 = FamilyCenterUtils;
            if (!tmpResult8.isGift(action)) {
              return null;
            }
          }
        }
      }
      const tmpResult9 = FamilyCenterUtils;
      if (tmpResult9.isPurchase(action)) {
        const purchaseInfo = FamilyCenterStore.getPurchaseInfo(action.entity_id);
        let tmp14 = null;
        if (null != purchaseInfo) {
          const obj2 = { skuId: null, subscriptionPlanId: null, total: null, currency: null };
          ({
            sku_id: obj11.skuId,
            subscription_plan_id: obj11.subscriptionPlanId,
            total: obj11.total,
            currency: obj11.currency,
          } = purchaseInfo);
          tmp14 = metroImportAll(FamilyCenterActivityPurchaseRowDefault, obj2);
        }
        return tmp14;
      } else {
        const tmpResult10 = FamilyCenterUtils;
        if (tmpResult10.isGift(action)) {
          const giftInfo = FamilyCenterStore.getGiftInfo(action.entity_id);
          if (null == giftInfo) {
            return null;
          } else {
            const tmpResult11 = FamilyCenterActivityGiftRowUtils;
            const giftRowDisplayInfo = tmpResult11.getGiftRowDisplayInfo(giftInfo);
            ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = giftRowDisplayInfo);
            const obj3 = { skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt };
            return metroImportAll(FamilyCenterActivityGiftRowDefault, obj3);
          }
        } else {
          let tmp4Result;
          const tmpResult12 = FamilyCenterUtils;
          if (tmpResult12.isUserAction(action)) {
            const obj4 = { action };
            tmp4Result = metroImportAll(unpackModuleId, obj4);
          } else {
            const obj5 = { action };
            tmp4Result = metroImportAll(map1, obj5);
          }
          const obj6 = { children: tmp4Result };
          return metroImportAll(View, obj6);
        }
      }
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityRow.tsx");

export default tmp8;
