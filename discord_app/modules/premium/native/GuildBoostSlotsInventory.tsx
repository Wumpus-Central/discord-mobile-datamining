// discord_app/modules/premium/native/GuildBoostSlotsInventory.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import actions_BillingActionCreatorsAll from "../../billing/actions/BillingActionCreators.tsx";
import BoostingActionCreators from "../../../actions/native/BoostingActionCreators.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import useCountdownDefault from "../../../hooks/useCountdown.tsx";
import actions_BoostingActionCreators from "../../../actions/BoostingActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/13326_AssetRegistry.js";
import SubscriptionPlaceholderPattern from "../../../design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildBoostSlotStore from "../../../stores/billing/GuildBoostSlotStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const GuildIconDefault = GuildIcon;
let guildId, unusedSlots;

let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const Fonts = Constants.Fonts;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let c14 = "0";
let createStyles = createStyles_mod;
let obj = {
  inventory: { marginBottom: 32 },
  header: { marginHorizontal: 16, marginBottom: 16 },
  boostedGuild: obj2,
  subscriptionBody: obj3,
  subscriptionImageView: size,
  subscriptionImage: { position: "absolute", width: "100%", height: "100%" },
  subscriptionImageFallback: { opacity: 0.4 },
  subscriptionImageOverlay: size1,
  guildInfo: { flexDirection: "row", padding: 16 },
  guildInfoIcon: { marginRight: 8 },
  guildInfoName: obj4,
  guildInfoRowBottom: { flexDirection: "row", alignItems: "center" },
  guildInfoRowIcon: { height: 12, width: 8, marginLeft: 2, marginRight: 8 },
  guildInfoSubscriptionCount: { lineHeight: 16 },
  subscriptionSlot: obj5,
  subscriptionSlotInner: { alignItems: "center", flexDirection: "row", paddingRight: 16, paddingVertical: 12 },
  subscriptionSlotBorder: obj6,
  subscriptionSlotInfo: { flexShrink: 1, flexGrow: 1 },
  subscriptionSlotInfoTitle: { lineHeight: 24 },
  subscriptionSlotInfoCooldown: { lineHeight: 16 },
  unusedSlots: { marginBottom: 32 },
};
obj2 = { borderRadius: nativeDefault.radii.xs, marginBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  width: "100%",
  height: 112,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
};
size1 = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundColor: nativeDefault.colors.BLACK,
  opacity: 0.4,
};
obj4 = { marginBottom: 4 };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 20));
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
obj6 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (cooldownEndsAt) {
      let days;
      let hours;
      let minutes;
      let obj2;
      const obj = react2;
      const cResult = obj.c(9);
      cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
      const tmp4 = closure_15();
      if (cResult[0] !== cooldownEndsAt) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(cooldownEndsAt);
        cResult[0] = cooldownEndsAt;
        cResult[1] = date;
        obj2 = date;
      } else {
        obj2 = cResult[1];
      }
      ({ days, hours, minutes } = useCountdownDefault(obj2, 15000));
      useCountdownDefault(obj2, 15000);
      const valueOfResult = obj2.valueOf();
      if (valueOfResult <= Date.now()) {
        return null;
      } else {
        if (cResult[2] === days) {
          if (cResult[3] === hours) {
            let tmp11;
            if (cResult[4] === minutes) {
              tmp11 = cResult[5];
            }
            if (cResult[6] === tmp4.subscriptionSlotInfoCooldown) {
              let tmp13;
              if (cResult[7] === tmp11) {
                tmp13 = cResult[8];
              }
              return tmp13;
            }
            const obj3 = { style: tmp17, variant: "text-xs/medium", color: "text-muted", children: tmp11 };
            const tmp15 = unpackModuleId(Text_Text.Text, obj3);
            cResult[6] = tmp4.subscriptionSlotInfoCooldown;
            cResult[7] = tmp11;
            cResult[8] = tmp15;
            tmp13 = tmp15;
          }
        }
        const intl = intl3.intl;
        const time = { days, hours, minutes };
        const formatResult = intl.format(intl3.t.NffSH8, time);
        cResult[2] = days;
        cResult[3] = hours;
        cResult[4] = minutes;
        cResult[5] = formatResult;
        tmp11 = formatResult;
      }
    }
  : (cooldownEndsAt) => {
      let days;
      let hours;
      let intl;
      let minutes;
      let time;
      cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
      const items = [cooldownEndsAt];
      const tmp = closure_15();
      const memo = react.useMemo(() => {
        const date = new Date(cooldownEndsAt);
        return date;
      }, items);
      ({ days, hours, minutes } = useCountdownDefault(memo, 15000));
      useCountdownDefault(memo, 15000);
      let tmp5 = null;
      const valueOfResult = memo.valueOf();
      if (valueOfResult > Date.now()) {
        const obj = {
          style: tmp.subscriptionSlotInfoCooldown,
          variant: "text-xs/medium",
          color: "text-muted",
          children: intl.format(intl3.t.NffSH8, time),
        };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        time = { days, hours, minutes };
        tmp5 = unpackModuleId(Text, obj);
      }
      return tmp5;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let action;
      let isLast;
      let items;
      let items1;
      let items2;
      let subtitle;
      let title;
      const obj = react2;
      const cResult = obj.c(18);
      ({ title, subtitle, action, isLast } = arg0);
      const tmp4 = closure_15();
      if (cResult[0] === tmp4.subscriptionSlotInfoTitle) {
        let tmp5;
        if (cResult[1] === title) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.subscriptionSlotInfo) {
          if (cResult[4] === subtitle) {
            let tmp7;
            if (cResult[5] === tmp5) {
              tmp7 = cResult[6];
            }
            if (cResult[7] === action) {
              if (cResult[8] === tmp4.subscriptionSlotInner) {
                let tmp11;
                if (cResult[9] === tmp7) {
                  tmp11 = cResult[10];
                }
                if (cResult[11] === isLast) {
                  let tmp15;
                  if (cResult[12] === tmp4.subscriptionSlotBorder) {
                    tmp15 = cResult[13];
                  }
                  if (cResult[14] === tmp4.subscriptionSlot) {
                    if (cResult[15] === tmp11) {
                      let tmp19;
                      if (cResult[16] === tmp15) {
                        tmp19 = cResult[17];
                      }
                      return tmp19;
                    }
                  }
                  const obj2 = { style: tmp4.subscriptionSlot, children: items };
                  items = [tmp11, tmp15];
                  const tmp22 = closure_12(hasOwnProperty, obj2);
                  cResult[14] = tmp4.subscriptionSlot;
                  cResult[15] = tmp11;
                  cResult[16] = tmp15;
                  cResult[17] = tmp22;
                  tmp19 = tmp22;
                }
                let tmp16 = null;
                if (!isLast) {
                  const obj3 = { style: tmp4.subscriptionSlotBorder };
                  tmp16 = unpackModuleId(hasOwnProperty, obj3);
                }
                cResult[11] = isLast;
                cResult[12] = tmp4.subscriptionSlotBorder;
                cResult[13] = tmp16;
                tmp15 = tmp16;
              }
            }
            const obj4 = { style: tmp4.subscriptionSlotInner, children: items1 };
            items1 = [tmp7, action];
            const tmp14 = closure_12(hasOwnProperty, obj4);
            cResult[7] = action;
            cResult[8] = tmp4.subscriptionSlotInner;
            cResult[9] = tmp7;
            cResult[10] = tmp14;
            tmp11 = tmp14;
          }
        }
        const obj5 = { style: tmp4.subscriptionSlotInfo, children: items2 };
        items2 = [tmp5, subtitle];
        const tmp10 = closure_12(hasOwnProperty, obj5);
        cResult[3] = tmp4.subscriptionSlotInfo;
        cResult[4] = subtitle;
        cResult[5] = tmp5;
        cResult[6] = tmp10;
        tmp7 = tmp10;
      }
      const obj6 = {
        style: tmp4.subscriptionSlotInfoTitle,
        lineClamp: 1,
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: title,
      };
      const tmp6 = unpackModuleId(Text_Text.Text, obj6);
      cResult[0] = tmp4.subscriptionSlotInfoTitle;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let action;
      let isLast;
      let items;
      let items1;
      let items2;
      let subtitle;
      let title;
      ({ title, subtitle, action, isLast } = arg0);
      const tmp = closure_15();
      const obj3 = { style: tmp.subscriptionSlotInfo, children: items };
      items = [,];
      const obj = { style: tmp.subscriptionSlot, children: items2 };
      const obj2 = { style: tmp.subscriptionSlotInner, children: items1 };
      const obj4 = {
        style: tmp.subscriptionSlotInfoTitle,
        lineClamp: 1,
        variant: "text-md/semibold",
        color: "interactive-text-active",
        children: title,
      };
      items[0] = unpackModuleId(Text_Text.Text, obj4);
      items[1] = subtitle;
      items1 = [closure_12(hasOwnProperty, obj3), action];
      items2 = [closure_12(hasOwnProperty, obj2)];
      let tmp4Result = null;
      if (!isLast) {
        const obj5 = { style: tmp.subscriptionSlotBorder };
        tmp4Result = unpackModuleId(hasOwnProperty, obj5);
      }
      items2[1] = tmp4Result;
      return closure_12(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (guildBoostSlot) {
      let Text;
      let date;
      let intl2;
      let obj6;
      let obj = guildBoostSlot(576);
      const cResult = obj.c(13);
      guildBoostSlot = guildBoostSlot.guildBoostSlot;
      const isLast = guildBoostSlot.isLast;
      if (null == guildBoostSlot.guild) {
        return null;
      } else {
        let tmp6;
        let tmp5;
        let tmp16;
        let tmp20;
        let id = null;
        if (null != guildBoostSlot.premiumGuildSubscription) {
          id = guildBoostSlot.premiumGuildSubscription.id;
        }
        if (cResult[0] !== id) {
          let extractTimestampResult = null;
          if (null != id) {
            let obj2 = SnowflakeUtilsDefault;
            extractTimestampResult = obj2.extractTimestamp(id);
          }
          let formatToPlainStringResult = null;
          if (null != extractTimestampResult) {
            const intl = tmp(1126).intl;
            const formatToPlainString = intl.formatToPlainString;
            const _Date = Date;
            const self = this;
            const self2 = this;
            const obj3 = { date };
            const prop = tmp(1126).t["ePe+Xh"];
            date = new Date(extractTimestampResult);
            formatToPlainStringResult = formatToPlainString(prop, obj3);
          }
          cResult[0] = id;
          cResult[1] = closure_17;
          cResult[2] = formatToPlainStringResult;
          tmp6 = formatToPlainStringResult;
          tmp5 = closure_17;
        } else {
          tmp5 = cResult[1];
          tmp6 = cResult[2];
        }
        if (cResult[3] !== guildBoostSlot.cooldownEndsAt) {
          let tmp17 = null;
          if (null != guildBoostSlot.cooldownEndsAt) {
            const obj4 = { cooldownEndsAt: guildBoostSlot.cooldownEndsAt };
            tmp17 = closure_11(closure_16, obj4);
          }
          cResult[3] = guildBoostSlot.cooldownEndsAt;
          cResult[4] = tmp17;
          tmp16 = tmp17;
        } else {
          tmp16 = cResult[4];
        }
        if (cResult[5] !== guildBoostSlot) {
          let tmp21 = null;
          if (!guildBoostSlot.isOnCooldown()) {
            const obj5 = {
              accessibilityRole: "button",
              onPress() {
                let items;
                const obj2 = { guildBoostSlots: items };
                items = [guildBoostSlot];
                const obj = BoostingActionCreators;
                return obj.openTransferModal(obj2);
              },
              children: closure_11(Text, obj6),
            };
            const PressableOpacity = tmp(5916).PressableOpacity;
            obj6 = {
              variant: "text-md/medium",
              color: "control-brand-foreground",
              children: intl2.string(guildBoostSlot(1126).t.jqqLb6),
            };
            Text = tmp(4892).Text;
            intl2 = tmp(1126).intl;
            tmp21 = closure_11(PressableOpacity, obj5);
          }
          cResult[5] = guildBoostSlot;
          cResult[6] = tmp21;
          tmp20 = tmp21;
        } else {
          tmp20 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === isLast) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp16) {
                let tmp23;
                if (cResult[11] === tmp20) {
                  tmp23 = cResult[12];
                }
                return tmp23;
              }
            }
          }
        }
        const obj7 = { title: tmp6, subtitle: tmp16, action: tmp20, isLast };
        const tmp25 = closure_11(tmp5, obj7);
        cResult[7] = tmp5;
        cResult[8] = isLast;
        cResult[9] = tmp6;
        cResult[10] = tmp16;
        cResult[11] = tmp20;
        cResult[12] = tmp25;
        tmp23 = tmp25;
      }
    }
  : function (guildBoostSlot) {
      let Text;
      let date;
      let intl2;
      let obj6;
      let tmp6Result;
      let tmp6Result2;
      guildBoostSlot = guildBoostSlot.guildBoostSlot;
      if (null == guildBoostSlot.guild) {
        return null;
      } else {
        let id = null;
        if (null != guildBoostSlot.premiumGuildSubscription) {
          id = guildBoostSlot.premiumGuildSubscription.id;
        }
        let extractTimestampResult = null;
        if (null != id) {
          let obj = SnowflakeUtilsDefault;
          extractTimestampResult = obj.extractTimestamp(id);
        }
        let formatToPlainStringResult = null;
        if (null != extractTimestampResult) {
          const intl = guildBoostSlot(1126).intl;
          const formatToPlainString = intl.formatToPlainString;
          let obj2 = { date };
          const _Date = Date;
          const self = this;
          const self2 = this;
          const prop = guildBoostSlot(1126).t["ePe+Xh"];
          date = new Date(extractTimestampResult);
          formatToPlainStringResult = formatToPlainString(prop, obj2);
        }
        const obj3 = { title: formatToPlainStringResult, subtitle: tmp6Result, action: tmp6Result2, isLast: tmp };
        tmp6Result = null;
        if (null != guildBoostSlot.cooldownEndsAt) {
          const obj4 = { cooldownEndsAt: guildBoostSlot.cooldownEndsAt };
          tmp6Result = closure_11(closure_16, obj4);
        }
        tmp6Result2 = null;
        if (!guildBoostSlot.isOnCooldown()) {
          const obj5 = {
            accessibilityRole: "button",
            onPress() {
              let items;
              const obj2 = { guildBoostSlots: items };
              items = [guildBoostSlot];
              const obj = BoostingActionCreators;
              return obj.openTransferModal(obj2);
            },
            children: closure_11(Text, obj6),
          };
          const PressableOpacity = guildBoostSlot(5916).PressableOpacity;
          obj6 = {
            variant: "text-md/medium",
            color: "control-brand-foreground",
            children: intl2.string(guildBoostSlot(1126).t.jqqLb6),
          };
          Text = guildBoostSlot(4892).Text;
          intl2 = guildBoostSlot(1126).intl;
          tmp6Result2 = closure_11(PressableOpacity, obj5);
        }
        return closure_11(closure_17, obj3);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (unusedSlots) => {
      let PressableOpacity;
      let Text;
      let found;
      let intl;
      let intl2;
      let items;
      let obj4;
      let obj5;
      let obj6;
      let tmp9;
      let tmp = found;
      let obj = found(576);
      const cResult = obj.c(13);
      const unusedSlots1 = unusedSlots.unusedSlots;
      const tmp4 = closure_15();
      if (cResult[0] === tmp4.unusedSlots) {
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        if (cResult[1] === unusedSlots1) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
          tmp8 = cResult[5];
        }
        if (cResult[8] === tmp5) {
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp7) {
              let tmp15;
              if (cResult[11] === tmp8) {
                tmp15 = cResult[12];
              }
              return tmp15;
            }
          }
        }
        let obj2 = { style: tmp6, children: items };
        items = [tmp7, tmp8];
        const tmp17 = closure_12(tmp5, obj2);
        cResult[8] = tmp5;
        cResult[9] = tmp6;
        cResult[10] = tmp7;
        cResult[11] = tmp8;
        cResult[12] = tmp17;
        tmp15 = tmp17;
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function h(cooldownEndsAt) {
          cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
          let tmp = null != cooldownEndsAt;
          if (tmp) {
            const _Date = Date;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const date = new Date(cooldownEndsAt);
            const valueOfResult = date.valueOf();
            tmp = valueOfResult > Date.now();
          }
          return tmp;
        };
        cResult[6] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[6];
      }
      found = unusedSlots1.filter(tmp9);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(cooldownEndsAt) {
            cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
            let tmp = null == cooldownEndsAt;
            if (!tmp) {
              const _Date = Date;
              const self = this;
              const self2 = this;
              const _Date2 = Date;
              const date = new Date(cooldownEndsAt);
              const valueOfResult = date.valueOf();
              tmp = valueOfResult <= Date.now();
            }
            return tmp;
          }
        }
        cResult[7] = I;
      } else {
        class I {
          constructor(cooldownEndsAt) {
            cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
            let tmp = null == cooldownEndsAt;
            if (!tmp) {
              const _Date = Date;
              const self = this;
              const self2 = this;
              const _Date2 = Date;
              const date = new Date(cooldownEndsAt);
              const valueOfResult = date.valueOf();
              tmp = valueOfResult <= Date.now();
            }
            return tmp;
          }
        }
      }
      const found1 = unusedSlots1.filter(I);
      unusedSlots = tmp4.unusedSlots;
      let tmp12 = null;
      if (found1.length > 0) {
        class I {
          constructor(cooldownEndsAt) {
            cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
            let tmp = null == cooldownEndsAt;
            if (!tmp) {
              const _Date = Date;
              const self = this;
              const self2 = this;
              const _Date2 = Date;
              const date = new Date(cooldownEndsAt);
              const valueOfResult = date.valueOf();
              tmp = valueOfResult <= Date.now();
            }
            return tmp;
          }
        }
        const obj3 = {
          title: intl.formatToPlainString(tmp(1126).t.ewI23O, obj4),
          action: closure_11(PressableOpacity, obj5),
          isLast: 0 === found.length,
        };
        intl = tmp(1126).intl;
        obj4 = { numSubscriptions: found1.length };
        obj5 = {
          accessibilityRole: "button",
          onPress() {
            const obj = found(dependencyMap[18]);
            return obj.openApplyBoostModal();
          },
          children: closure_11(Text, obj6),
        };
        PressableOpacity = tmp(5916).PressableOpacity;
        obj6 = { variant: "text-md/medium", color: "text-link", children: intl2.string(tmp(1126).t["7KyPor"]) };
        Text = tmp(4892).Text;
        intl2 = tmp(1126).intl;
        tmp12 = closure_11(closure_17, obj3);
      }
      const mapped = found.map((cooldownEndsAt, index) => {
        let intl;
        let tmpResult;
        const obj = {
          title: intl.formatToPlainString(intl3.t.gDsyB9, { numSubscriptions: 1 }),
          subtitle: tmpResult,
          isLast: index === found.length - 1,
        };
        intl = intl3.intl;
        tmpResult = null;
        if (null != cooldownEndsAt.cooldownEndsAt) {
          const obj2 = { cooldownEndsAt: cooldownEndsAt.cooldownEndsAt };
          tmpResult = unpackModuleId(closure_16, obj2);
        }
        return unpackModuleId(closure_17, obj, cooldownEndsAt.id);
      });
      cResult[0] = tmp4.unusedSlots;
      cResult[1] = unusedSlots1;
      cResult[2] = closure_5;
      cResult[3] = unusedSlots;
      cResult[4] = tmp12;
      cResult[5] = mapped;
      tmp7 = tmp12;
      tmp8 = mapped;
      tmp6 = unusedSlots;
      tmp5 = closure_5;
    }
  : (unusedSlots) => {
      let PressableOpacity;
      let Text;
      let intl;
      let intl2;
      let items;
      let obj3;
      let obj4;
      let obj5;
      unusedSlots = unusedSlots.unusedSlots;
      let tmp = closure_15();
      const found = unusedSlots.filter(function (cooldownEndsAt) {
        cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
        let tmp = null != cooldownEndsAt;
        if (tmp) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const _Date2 = Date;
          const date = new Date(cooldownEndsAt);
          const valueOfResult = date.valueOf();
          tmp = valueOfResult > Date.now();
        }
        return tmp;
      });
      const found1 = unusedSlots.filter(function (cooldownEndsAt) {
        cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
        let tmp = null == cooldownEndsAt;
        if (!tmp) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const _Date2 = Date;
          const date = new Date(cooldownEndsAt);
          const valueOfResult = date.valueOf();
          tmp = valueOfResult <= Date.now();
        }
        return tmp;
      });
      let obj = { style: tmp.unusedSlots, children: items };
      let tmp4 = null;
      if (found1.length > 0) {
        let obj2 = {
          title: intl.formatToPlainString(found(1126).t.ewI23O, obj3),
          action: closure_11(PressableOpacity, obj4),
          isLast: 0 === found.length,
        };
        intl = found(1126).intl;
        obj3 = { numSubscriptions: found1.length };
        obj4 = {
          accessibilityRole: "button",
          onPress() {
            const obj = found(dependencyMap[18]);
            return obj.openApplyBoostModal();
          },
          children: closure_11(Text, obj5),
        };
        PressableOpacity = found(5916).PressableOpacity;
        obj5 = { variant: "text-md/medium", color: "text-link", children: intl2.string(found(1126).t["7KyPor"]) };
        Text = found(4892).Text;
        intl2 = found(1126).intl;
        tmp4 = closure_11(closure_17, obj2);
      }
      items = [
        tmp4,
        found.map((cooldownEndsAt, index) => {
          let intl;
          let tmpResult;
          const obj = {
            title: intl.formatToPlainString(intl3.t.gDsyB9, { numSubscriptions: 1 }),
            subtitle: tmpResult,
            isLast: index === found.length - 1,
          };
          intl = intl3.intl;
          tmpResult = null;
          if (null != cooldownEndsAt.cooldownEndsAt) {
            const obj2 = { cooldownEndsAt: cooldownEndsAt.cooldownEndsAt };
            tmpResult = unpackModuleId(closure_16, obj2);
          }
          return unpackModuleId(closure_17, obj, cooldownEndsAt.id);
        }),
      ];
      return closure_12(closure_5, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guild;
      let items;
      let items1;
      let items2;
      let numGuildBoostSlots;
      const obj = react2;
      const cResult = obj.c(26);
      ({ guild, numGuildBoostSlots } = arg0);
      const tmp4 = closure_15();
      if (null == guild) {
        return null;
      } else {
        let tmp5;
        const guildInfo = tmp4.guildInfo;
        if (cResult[0] !== guild) {
          const obj2 = { guild, size: GuildIcon.GuildIconSizes.NORMAL, selected: false };
          const tmp8 = GuildIconDefault;
          const tmp9 = unpackModuleId(tmp8, obj2);
          cResult[0] = guild;
          cResult[1] = tmp9;
          tmp5 = tmp9;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp4.guildInfoIcon) {
          let tmp10;
          if (cResult[3] === tmp5) {
            tmp10 = cResult[4];
          }
          if (cResult[5] === guild.name) {
            let tmp14;
            let tmp17;
            let tmp22;
            if (cResult[6] === tmp4.guildInfoName) {
              tmp14 = cResult[7];
            }
            const guildInfoRowBottom = tmp4.guildInfoRowBottom;
            if (cResult[8] !== tmp4.guildInfoRowIcon) {
              const obj3 = { source: AssetRegistryDefault, style: tmp4.guildInfoRowIcon };
              const tmp21 = unpackModuleId(metroRequire, obj3);
              cResult[8] = tmp4.guildInfoRowIcon;
              cResult[9] = tmp21;
              tmp17 = tmp21;
            } else {
              tmp17 = cResult[9];
            }
            const guildInfoSubscriptionCount = tmp4.guildInfoSubscriptionCount;
            if (cResult[10] !== numGuildBoostSlots) {
              const intl = intl3.intl;
              const obj4 = { numSubscriptions: numGuildBoostSlots };
              const formatResult = intl.format(intl3.t.bexfNy, obj4);
              cResult[10] = numGuildBoostSlots;
              cResult[11] = formatResult;
              tmp22 = formatResult;
            } else {
              tmp22 = cResult[11];
            }
            if (cResult[12] === tmp4.guildInfoSubscriptionCount) {
              let tmp24;
              if (cResult[13] === tmp22) {
                tmp24 = cResult[14];
              }
              if (cResult[15] === tmp4.guildInfoRowBottom) {
                if (cResult[16] === tmp17) {
                  let tmp27;
                  if (cResult[17] === tmp24) {
                    tmp27 = cResult[18];
                  }
                  if (cResult[19] === tmp27) {
                    let tmp31;
                    if (cResult[20] === tmp14) {
                      tmp31 = cResult[21];
                    }
                    if (cResult[22] === tmp4.guildInfo) {
                      if (cResult[23] === tmp31) {
                        let tmp35;
                        if (cResult[24] === tmp10) {
                          tmp35 = cResult[25];
                        }
                        return tmp35;
                      }
                    }
                    const obj5 = { style: guildInfo, children: items };
                    items = [tmp10, tmp31];
                    const tmp38 = closure_12(hasOwnProperty, obj5);
                    cResult[22] = tmp4.guildInfo;
                    cResult[23] = tmp31;
                    cResult[24] = tmp10;
                    cResult[25] = tmp38;
                    tmp35 = tmp38;
                  }
                  const obj6 = { children: items1 };
                  items1 = [tmp14, tmp27];
                  const tmp34 = closure_12(hasOwnProperty, obj6);
                  cResult[19] = tmp27;
                  cResult[20] = tmp14;
                  cResult[21] = tmp34;
                  tmp31 = tmp34;
                }
              }
              const obj7 = { style: guildInfoRowBottom, children: items2 };
              items2 = [tmp17, tmp24];
              const tmp30 = closure_12(hasOwnProperty, obj7);
              cResult[15] = tmp4.guildInfoRowBottom;
              cResult[16] = tmp17;
              cResult[17] = tmp24;
              cResult[18] = tmp30;
              tmp27 = tmp30;
            }
            const obj8 = {
              style: guildInfoSubscriptionCount,
              variant: "text-xs/semibold",
              color: "interactive-text-active",
              children: tmp22,
            };
            const tmp26 = unpackModuleId(Text_Text.Text, obj8);
            cResult[12] = tmp4.guildInfoSubscriptionCount;
            cResult[13] = tmp22;
            cResult[14] = tmp26;
            tmp24 = tmp26;
          }
          const obj9 = {
            style: tmp4.guildInfoName,
            variant: "heading-lg/extrabold",
            color: "interactive-text-active",
            children: guild.name,
          };
          const tmp16 = unpackModuleId(Text_Text.Text, obj9);
          cResult[5] = guild.name;
          cResult[6] = tmp4.guildInfoName;
          cResult[7] = tmp16;
          tmp14 = tmp16;
        }
        const obj10 = { style: tmp4.guildInfoIcon, children: tmp5 };
        const tmp13 = unpackModuleId(hasOwnProperty, obj10);
        cResult[2] = tmp4.guildInfoIcon;
        cResult[3] = tmp5;
        cResult[4] = tmp13;
        tmp10 = tmp13;
      }
    }
  : (guild) => {
      let intl;
      let items;
      let items1;
      let items2;
      let obj3;
      let obj9;
      let tmp8;
      guild = guild.guild;
      const numGuildBoostSlots = guild.numGuildBoostSlots;
      const tmp = closure_15();
      let tmp2 = null;
      if (null != guild) {
        const obj = { style: tmp.guildInfo, children: items };
        const obj2 = { style: tmp.guildInfoIcon, children: unpackModuleId(tmp8, obj3) };
        obj3 = { guild, size: GuildIcon.GuildIconSizes.NORMAL, selected: false };
        tmp8 = GuildIconDefault;
        items = [unpackModuleId(hasOwnProperty, obj2)];
        const obj4 = { children: items1 };
        const obj5 = {
          style: tmp.guildInfoName,
          variant: "heading-lg/extrabold",
          color: "interactive-text-active",
          children: guild.name,
        };
        items1 = [unpackModuleId(Text_Text.Text, obj5)];
        const obj6 = { style: tmp.guildInfoRowBottom, children: items2 };
        const obj7 = { source: AssetRegistryDefault, style: tmp.guildInfoRowIcon };
        items2 = [unpackModuleId(metroRequire, obj7)];
        const obj8 = {
          style: tmp.guildInfoSubscriptionCount,
          variant: "text-xs/semibold",
          color: "interactive-text-active",
          children: intl.format(intl3.t.bexfNy, obj9),
        };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        obj9 = { numSubscriptions: numGuildBoostSlots };
        items2[1] = unpackModuleId(Text, obj8);
        items1[1] = closure_12(hasOwnProperty, obj6);
        items[1] = closure_12(hasOwnProperty, obj4);
        tmp2 = closure_12(hasOwnProperty, obj);
      }
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let items2;
      let items3;
      let items4;
      let theme;
      let tmp10;
      let tmp13;
      let tmp7;
      let tmp9;
      let obj = guildId(576);
      const cResult = obj.c(43);
      guildId = guildId.guildId;
      const guildBoostSlots = guildId.guildBoostSlots;
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function u() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = guildId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ThemeStore];
        const fn2 = function v() {
          return theme.theme;
        };
        cResult[3] = items1;
        cResult[4] = fn2;
        tmp10 = fn2;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const tmpResult3 = guildId(504);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
      if (cResult[5] !== stateFromStores) {
        let guildBannerSource = null;
        if (null != stateFromStores) {
          guildBannerSource = null;
          if (null != stateFromStores.banner) {
            const obj4 = guildBoostSlots(1402);
            guildBannerSource = obj4.getGuildBannerSource(stateFromStores);
          }
        }
        cResult[5] = stateFromStores;
        cResult[6] = guildBannerSource;
        tmp13 = guildBannerSource;
      } else {
        tmp13 = cResult[6];
      }
      const tmpResult4 = guildId(13327);
      let subscriptionPlaceholderPatternSource = tmpResult4.useSubscriptionPlaceholderPatternSource();
      if (null != tmp13) {
        subscriptionPlaceholderPatternSource = tmp13;
      }
      let prop = null;
      const boostedGuild = tmp4.boostedGuild;
      if (null == tmp13) {
        prop = tmp4.subscriptionImageFallback;
      }
      if (cResult[7] === tmp4.subscriptionImage) {
        let tmp19;
        if (cResult[8] === prop) {
          tmp19 = cResult[9];
        }
        if (cResult[10] === subscriptionPlaceholderPatternSource) {
          let tmp20;
          if (cResult[11] === tmp19) {
            tmp20 = cResult[12];
          }
          if (cResult[13] === tmp13) {
            let tmp23;
            if (cResult[14] === tmp4.subscriptionImageOverlay) {
              tmp23 = cResult[15];
            }
            if (cResult[16] === stateFromStores) {
              let tmp25;
              if (cResult[17] === stateFromStores1) {
                tmp25 = cResult[18];
              }
              if (cResult[19] === tmp4.subscriptionImageView) {
                if (cResult[20] === tmp23) {
                  if (cResult[21] === tmp25) {
                    let tmp28;
                    if (cResult[22] === tmp20) {
                      tmp28 = cResult[23];
                    }
                    if (cResult[24] === stateFromStores) {
                      let tmp31;
                      if (cResult[25] === guildBoostSlots.length) {
                        tmp31 = cResult[26];
                      }
                      if (cResult[27] === tmp4.subscriptionBody) {
                        if (cResult[28] === tmp28) {
                          let tmp34;
                          let tmp37;
                          if (cResult[29] === tmp31) {
                            tmp34 = cResult[30];
                          }
                          if (cResult[31] === stateFromStores) {
                            let tmp40;
                            if (cResult[32] === guildBoostSlots) {
                              tmp37 = cResult[33];
                            }
                            if (cResult[37] !== tmp37) {
                              const obj2 = { children: null };
                              class L {
                                constructor(guildBoostSlot, arg1) {
                                  const obj = {
                                    guild: stateFromStores,
                                    guildBoostSlot,
                                    isLast: arg1 === guildBoostSlots.length - 1,
                                  };
                                  return unpackModuleId(closure_18, obj, guildBoostSlot.id);
                                }
                              }
                              const tmp43 = closure_11(closure_5, obj2);
                              cResult[37] = tmp37;
                              cResult[38] = tmp43;
                              tmp40 = tmp43;
                            } else {
                              tmp40 = cResult[38];
                            }
                            if (cResult[39] === tmp4.boostedGuild) {
                              if (cResult[40] === tmp34) {
                                let tmp44;
                                if (cResult[41] === tmp40) {
                                  tmp44 = cResult[42];
                                }
                                return tmp44;
                              }
                            }
                            class L {
                              constructor(guildBoostSlot, arg1) {
                                const obj = {
                                  guild: stateFromStores,
                                  guildBoostSlot,
                                  isLast: arg1 === guildBoostSlots.length - 1,
                                };
                                return unpackModuleId(closure_18, obj, guildBoostSlot.id);
                              }
                            }
                            const obj3 = { style: boostedGuild, children: items2 };
                            items2 = [tmp34, tmp40];
                            const tmp46 = closure_12(closure_5, obj3);
                            cResult[39] = tmp4.boostedGuild;
                            cResult[40] = tmp34;
                            cResult[41] = tmp40;
                            cResult[42] = tmp46;
                            tmp44 = tmp46;
                          }
                          if (cResult[34] === stateFromStores) {
                            let tmp38;
                            if (cResult[35] === guildBoostSlots.length) {
                              tmp38 = cResult[36];
                            }
                            const mapped = guildBoostSlots.map(tmp38);
                            class L {
                              constructor(guildBoostSlot, arg1) {
                                const obj = {
                                  guild: stateFromStores,
                                  guildBoostSlot,
                                  isLast: arg1 === guildBoostSlots.length - 1,
                                };
                                return unpackModuleId(closure_18, obj, guildBoostSlot.id);
                              }
                            }
                            cResult[32] = guildBoostSlots;
                            cResult[33] = mapped;
                            tmp37 = mapped;
                          }
                          class L {
                            constructor(guildBoostSlot, arg1) {
                              const obj = {
                                guild: stateFromStores,
                                guildBoostSlot,
                                isLast: arg1 === guildBoostSlots.length - 1,
                              };
                              return unpackModuleId(closure_18, obj, guildBoostSlot.id);
                            }
                          }
                          cResult[34] = stateFromStores;
                          cResult[35] = guildBoostSlots.length;
                          cResult[36] = L;
                          tmp38 = L;
                        }
                      }
                      const obj5 = { style: tmp4.subscriptionBody, children: items3 };
                      items3 = [tmp28, tmp31];
                      const tmp36 = closure_12(closure_5, obj5);
                      cResult[27] = tmp4.subscriptionBody;
                      cResult[28] = tmp28;
                      cResult[29] = tmp31;
                      cResult[30] = tmp36;
                      tmp34 = tmp36;
                    }
                    const obj6 = { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length };
                    const tmp33 = closure_11(closure_20, obj6);
                    cResult[24] = stateFromStores;
                    cResult[25] = guildBoostSlots.length;
                    cResult[26] = tmp33;
                    tmp31 = tmp33;
                  }
                }
              }
              const obj7 = { style: tmp4.subscriptionImageView, children: items4 };
              items4 = [tmp20, tmp23, tmp25];
              const tmp30 = closure_12(closure_5, obj7);
              cResult[19] = tmp4.subscriptionImageView;
              cResult[20] = tmp23;
              cResult[21] = tmp25;
              cResult[22] = tmp20;
              cResult[23] = tmp30;
              tmp28 = tmp30;
            }
            const obj8 = { guild: stateFromStores, theme: stateFromStores1 };
            const tmp27 = closure_11(guildBoostSlots(13331), obj8);
            cResult[16] = stateFromStores;
            cResult[17] = stateFromStores1;
            cResult[18] = tmp27;
            tmp25 = tmp27;
          }
          cResult[13] = tmp13;
          cResult[14] = tmp4.subscriptionImageOverlay;
          cResult[15] = null;
          tmp23 = tmp24;
        }
        const obj9 = { source: subscriptionPlaceholderPatternSource, style: tmp19 };
        const tmp22 = closure_11(closure_6, obj9);
        cResult[10] = subscriptionPlaceholderPatternSource;
        cResult[11] = tmp19;
        cResult[12] = tmp22;
        tmp20 = tmp22;
      }
      const items5 = [tmp4.subscriptionImage, prop];
      cResult[7] = tmp4.subscriptionImage;
      cResult[8] = prop;
      cResult[9] = items5;
      tmp19 = items5;
    }
  : (arg0) => {
      let guildBoostSlots;
      let items2;
      let items3;
      let items4;
      let items5;
      let theme;
      ({ guildId: require, guildBoostSlots } = arg0);
      const tmp = closure_15();
      let obj = get_initialized;
      const items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
      const items1 = [ThemeStore];
      let guildBannerSource = null;
      const obj2 = get_initialized;
      const stateFromStores1 = obj2.useStateFromStores(items1, () => theme.theme);
      if (null != stateFromStores) {
        guildBannerSource = null;
        if (null != stateFromStores.banner) {
          const obj3 = guildBoostSlots(1402);
          guildBannerSource = obj3.getGuildBannerSource(stateFromStores);
        }
      }
      const tmp2Result = SubscriptionPlaceholderPattern;
      let subscriptionPlaceholderPatternSource = tmp2Result.useSubscriptionPlaceholderPatternSource();
      if (null != guildBannerSource) {
        subscriptionPlaceholderPatternSource = guildBannerSource;
      }
      const obj7 = { source: subscriptionPlaceholderPatternSource, style: items2 };
      items2 = [tmp.subscriptionImage];
      let prop = null;
      const obj4 = { style: tmp.boostedGuild, children: items5 };
      const obj5 = { style: tmp.subscriptionBody, children: items4 };
      const obj6 = { style: tmp.subscriptionImageView, children: items3 };
      if (null == guildBannerSource) {
        prop = tmp.subscriptionImageFallback;
      }
      items2[1] = prop;
      items3 = [closure_11(closure_6, obj7), ,];
      let tmp11Result = null;
      if (null != guildBannerSource) {
        const obj8 = { style: tmp.subscriptionImageOverlay };
        tmp11Result = closure_11(closure_5, obj8);
      }
      items3[1] = tmp11Result;
      items3[2] = closure_11(guildBoostSlots(13331), { guild: stateFromStores, theme: stateFromStores1 });
      items4 = [closure_12(closure_5, obj6)];
      const obj9 = { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length };
      items4[1] = closure_11(closure_20, obj9);
      items5 = [closure_12(closure_5, obj5)];
      const obj10 = {
        children: guildBoostSlots.map((guildBoostSlot, index) => {
          const obj = { guild: stateFromStores, guildBoostSlot, isLast: index === guildBoostSlots.length - 1 };
          return unpackModuleId(closure_18, obj, guildBoostSlot.id);
        }),
      };
      items5[1] = closure_11(closure_5, obj10);
      return closure_12(closure_5, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let boostSlots;
      let intl;
      let items3;
      let premiumTypeSubscription;
      let tmp12;
      let tmp13;
      let tmp5;
      let tmp6;
      let tmp8;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(21);
      const tmp4 = closure_15();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const obj = actions_BillingActionCreatorsAll;
          const subscriptions = obj.fetchSubscriptions();
          const obj2 = actions_BoostingActionCreators;
          const guildBoostSlots = obj2.fetchGuildBoostSlots();
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp5 = fn;
        tmp6 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SubscriptionStore];
        const fn2 = function s() {
          return premiumTypeSubscription.getPremiumTypeSubscription();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildBoostSlotStore];
        const fn3 = function w() {
          return boostSlots.boostSlots;
        };
        cResult[4] = items2;
        cResult[5] = fn3;
        tmp13 = fn3;
        tmp12 = items2;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const tmpResult2 = get_initialized;
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp12, tmp13);
      if (cResult[6] !== stateFromStores1) {
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor(premiumGuildSubscription) {
              premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
              return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
            }
          }
          cResult[8] = R;
        } else {
          class R {
            constructor(premiumGuildSubscription) {
              premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
              return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
            }
          }
        }
        const obj4 = _modDef12(stateFromStores1);
        const iter = obj4.groupBy(R);
        cResult[6] = stateFromStores1;
        cResult[7] = iter.value();
        const valueResult = iter.value();
      } else {
        class R {
          constructor(premiumGuildSubscription) {
            premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
            return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
          }
        }
      }
      require = tmp16;
      if (cResult[9] !== tmp16) {
        class R {
          constructor(premiumGuildSubscription) {
            premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
            return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
          }
        }
        const keys = Object.keys(tmp16);
        const found = keys.filter((item) => item !== closure_1_14);
        cResult[9] = tmp16;
        cResult[10] = found;
      } else {
        class R {
          constructor(premiumGuildSubscription) {
            premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
            return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
          }
        }
      }
      if (0 !== arr4.length) {
        class R {
          constructor(premiumGuildSubscription) {
            premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
            return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
          }
        }
        if (null != stateFromStores) {
          class R {
            constructor(premiumGuildSubscription) {
              premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
              return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
            }
          }
          if (cResult[13] === tmp16) {
            class R {
              constructor(premiumGuildSubscription) {
                premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
                return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
              }
            }
          }
          let tmp24 = null;
          if (arr4.length > 0) {
            class R {
              constructor(premiumGuildSubscription) {
                premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
                return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
              }
            }
            let obj2 = { children: items3 };
            const obj3 = {
              style: tmp4.header,
              variant: "eyebrow",
              color: "text-default",
              children: intl.string(intl3.t.gB9oQ7),
            };
            const Text = tmp(4892).Text;
            intl = tmp(1126).intl;
            items3 = [
              closure_11(Text, obj3),
              arr4.map((guildId) => {
                const obj = { guildId, guildBoostSlots: require[guildId] };
                return unpackModuleId(closure_21, obj, guildId);
              }),
            ];
            tmp24 = closure_12(closure_13, obj2);
          }
          cResult[13] = tmp16;
          cResult[14] = arr4;
          cResult[15] = tmp4.header;
          cResult[16] = tmp24;
        }
      } else {
        class R {
          constructor(premiumGuildSubscription) {
            premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
            return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
          }
        }
      }
      return tmp22;
    }
  : () => {
      let boostSlots;
      let intl;
      let items2;
      let items3;
      let premiumTypeSubscription;
      let tmp10Result2;
      const tmp = closure_15();
      const effect = react.useEffect(() => {
        const obj = actions_BillingActionCreatorsAll;
        const subscriptions = obj.fetchSubscriptions();
        const obj2 = actions_BoostingActionCreators;
        const guildBoostSlots = obj2.fetchGuildBoostSlots();
      }, []);
      let obj = get_initialized;
      const items = [SubscriptionStore];
      const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
      let obj2 = get_initialized;
      const items1 = [GuildBoostSlotStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => boostSlots.boostSlots);
      const obj3 = _modDef12(stateFromStores1);
      const iter = obj3.groupBy((premiumGuildSubscription) => {
        premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
        return null != premiumGuildSubscription ? premiumGuildSubscription.guildId : closure_1_14;
      });
      const valueResult = iter.value();
      require = valueResult;
      const keys = Object.keys(valueResult);
      const found = keys.filter((item) => item !== closure_1_14);
      if (0 !== found.length) {
        tmp10Result2 = null;
        if (null != stateFromStores) {
          let tmp12 = null;
          const obj4 = { style: tmp.inventory, children: items2 };
          if (null != valueResult[c14]) {
            tmp12 = null;
            if (valueResult[c14].length > 0) {
              const obj5 = { unusedSlots: valueResult[c14] };
              tmp12 = closure_11(closure_19, obj5);
            }
          }
          items2 = [tmp12];
          let tmp10Result = null;
          if (found.length > 0) {
            const obj6 = { children: items3 };
            const obj7 = {
              style: tmp.header,
              variant: "eyebrow",
              color: "text-default",
              children: intl.string(intl3.t.gB9oQ7),
            };
            const Text = tmp3(4892).Text;
            intl = tmp3(1126).intl;
            items3 = [
              closure_11(Text, obj7),
              found.map((guildId) => {
                const obj = { guildId, guildBoostSlots: require[guildId] };
                return unpackModuleId(closure_21, obj, guildId);
              }),
            ];
            tmp10Result = closure_12(closure_13, obj6);
          }
          items2[1] = tmp10Result;
          tmp10Result2 = closure_12(closure_5, obj4);
        }
      } else {
        tmp10Result2 = null;
      }
      return tmp10Result2;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/GuildBoostSlotsInventory.tsx");

export default tmp7;
