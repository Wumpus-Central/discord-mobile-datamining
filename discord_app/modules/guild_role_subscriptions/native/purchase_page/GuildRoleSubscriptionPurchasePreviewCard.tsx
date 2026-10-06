// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import LayoutUtils from "../components/LayoutUtils.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import EmojiIconDefault from "../components/EmojiIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let channelId, listingId, onPress;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let size;
let size1;
let size2;
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  header: { flexDirection: "row" },
  image: size,
  separator: size1,
  contentContainer: obj3,
  contentHeader: { textTransform: "uppercase" },
  emojiGallery: { flexDirection: "row" },
  emojiTruncatedContainer: size2,
  showAllButton: obj4,
  showAllButtonUnderline: rect,
};
obj2 = {
  padding: 16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
createStyles = createStyles.createStyles;
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.xl };
size1 = {
  width: "100%",
  height: 1,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  marginVertical: 16,
};
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopRightRadius: nativeDefault.radii.sm,
  borderTopLeftRadius: nativeDefault.radii.sm,
  padding: 16,
};
size2 = {
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingTop: 1,
};
obj4 = {
  paddingVertical: 16,
  paddingHorizontal: 20,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
};
rect = {
  position: "absolute",
  left: 0,
  right: 0,
  height: 1,
  bottom: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let count;
      let items;
      let title;
      const obj = react2;
      const cResult = obj.c(12);
      ({ count, title } = arg0);
      const tmp4 = closure_11();
      const obj2 = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("PurchasePreviewCard", "text-xs/bold");
      if (cResult[0] === typeConsolidationEyebrow.style) {
        let tmp6;
        if (cResult[1] === tmp4.contentHeader) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === count) {
          if (cResult[4] === typeConsolidationEyebrow.variant) {
            let tmp7;
            if (cResult[5] === tmp4.contentHeader) {
              tmp7 = cResult[6];
            }
            if (cResult[7] === typeConsolidationEyebrow.variant) {
              if (cResult[8] === tmp6) {
                if (cResult[9] === tmp7) {
                  let tmp10;
                  if (cResult[10] === title) {
                    tmp10 = cResult[11];
                  }
                  return tmp10;
                }
              }
            }
            const obj3 = {
              variant: typeConsolidationEyebrow.variant,
              color: "text-muted",
              style: tmp6,
              children: items,
            };
            items = [tmp7, " ", title];
            const tmp12 = React4(Text_Text.Text, obj3);
            cResult[7] = typeConsolidationEyebrow.variant;
            cResult[8] = tmp6;
            cResult[9] = tmp7;
            cResult[10] = title;
            cResult[11] = tmp12;
            tmp10 = tmp12;
          }
        }
        const obj4 = {
          variant: typeConsolidationEyebrow.variant,
          color: "text-default",
          style: tmp4.contentHeader,
          children: count,
        };
        const tmp9 = metroImportAll(Text_Text.Text, obj4);
        cResult[3] = count;
        cResult[4] = typeConsolidationEyebrow.variant;
        cResult[5] = tmp4.contentHeader;
        cResult[6] = tmp9;
        tmp7 = tmp9;
      }
      const items1 = [tmp4.contentHeader, typeConsolidationEyebrow.style];
      cResult[0] = typeConsolidationEyebrow.style;
      cResult[1] = tmp4.contentHeader;
      cResult[2] = items1;
      tmp6 = items1;
    }
  : (arg0) => {
      let count;
      let items;
      let items1;
      let title;
      ({ count, title } = arg0);
      const tmp = closure_11();
      const obj = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("PurchasePreviewCard", "text-xs/bold");
      const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: items, children: items1 };
      items = [tmp.contentHeader, typeConsolidationEyebrow.style];
      const Text = Text_Text.Text;
      items1 = [, ,];
      const obj3 = {
        variant: typeConsolidationEyebrow.variant,
        color: "text-default",
        style: tmp.contentHeader,
        children: count,
      };
      items1[0] = metroImportAll(Text_Text.Text, obj3);
      items1[1] = " ";
      items1[2] = title;
      return React4(Text, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_11();
      if (cResult[0] !== tmp2.separator) {
        const obj2 = { style: tmp2.separator };
        const tmp6 = metroImportAll(metroRequire, obj2);
        cResult[0] = tmp2.separator;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_11().separator };
      return metroImportAll(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let emojiIds;
      let guildId;
      let items;
      let maxEmojis;
      let obj5;
      let obj = guildId(576);
      const cResult = obj.c(24);
      ({ emojiIds, maxEmojis, guildId } = arg0);
      const tmp4 = closure_11();
      if (cResult[0] === emojiIds) {
        if (cResult[1] === guildId) {
          if (cResult[2] === maxEmojis) {
            if (cResult[3] === tmp4.emojiGallery) {
              if (cResult[16] === tmp5) {
                if (cResult[17] === tmp7) {
                  let tmp17;
                  if (cResult[18] === tmp8) {
                    tmp17 = cResult[19];
                  }
                  if (cResult[20] === tmp6) {
                    if (cResult[21] === tmp9) {
                      let tmp20;
                      if (cResult[22] === tmp17) {
                        tmp20 = cResult[23];
                      }
                      return tmp20;
                    }
                  }
                  const obj2 = { style: tmp9, children: tmp17 };
                  const tmp22 = closure_8(tmp6, obj2);
                  cResult[20] = tmp6;
                  cResult[21] = tmp9;
                  cResult[22] = tmp17;
                  cResult[23] = tmp22;
                  tmp20 = tmp22;
                }
              }
              const obj3 = { gap: tmp7, children: tmp8 };
              const tmp19 = closure_8(tmp5, obj3);
              cResult[16] = tmp5;
              cResult[17] = tmp7;
              cResult[18] = tmp8;
              cResult[19] = tmp19;
              tmp17 = tmp19;
            }
          }
        }
      }
      const substr = emojiIds.slice(0, maxEmojis);
      const diff = emojiIds.length - maxEmojis;
      const GappedList = guildId(9966).GappedList;
      if (cResult[10] !== guildId) {
        class I {
          constructor(arg0) {
            obj = { size: 30, fontSize: 20, guildId, id: arg0 };
            return jsx(closure_1(closure_3[15]), obj, arg0);
          }
        }
        cResult[10] = guildId;
        cResult[11] = I;
      } else {
        class I {
          constructor(arg0) {
            obj = { size: 30, fontSize: 20, guildId, id: arg0 };
            return jsx(closure_1(closure_3[15]), obj, arg0);
          }
        }
      }
      if (cResult[12] === diff > 0) {
        class I {
          constructor(arg0) {
            obj = { size: 30, fontSize: 20, guildId, id: arg0 };
            return jsx(closure_1(closure_3[15]), obj, arg0);
          }
        }
      }
      let tmp15 = tmp14;
      if (tmp15) {
        class I {
          constructor(arg0) {
            obj = { size: 30, fontSize: 20, guildId, id: arg0 };
            return jsx(closure_1(closure_3[15]), obj, arg0);
          }
        }
        const obj4 = { style: tmp4.emojiTruncatedContainer, children: closure_9(guildId(4892).Text, obj5) };
        obj5 = { variant: "text-sm/bold", color: "text-default", children: items };
        items = ["+", diff];
        tmp15 = closure_8(closure_6, obj4, "andMore");
      }
      cResult[12] = diff > 0;
      cResult[13] = diff;
      cResult[14] = tmp4.emojiTruncatedContainer;
      cResult[15] = tmp15;
    }
  : (arg0) => {
      let GappedList;
      let emojiIds;
      let guildId;
      let items;
      let items1;
      let maxEmojis;
      let obj3;
      ({ emojiIds, maxEmojis, guildId: require } = arg0);
      const tmp = closure_11();
      const substr = emojiIds.slice(0, maxEmojis);
      const diff = emojiIds.length - maxEmojis;
      let obj = { style: tmp.emojiGallery, children: closure_8(GappedList, { gap: 18, children: items }) };
      GappedList = LayoutUtils.GappedList;
      items = [
        ...substr.map((id) => {
          const obj = { size: 30, fontSize: 20, guildId: require, id };
          return metroImportAll(EmojiIconDefault, obj, id);
        }),
      ];
      let tmp3Result = diff > 0;
      if (tmp3Result) {
        const obj2 = { style: tmp.emojiTruncatedContainer, children: closure_9(Text_Text.Text, obj3) };
        obj3 = { variant: "text-sm/bold", color: "text-default", children: items1 };
        items1 = ["+", diff];
        tmp3Result = closure_8(closure_6, obj2, "andMore");
      }
      items[tmp7] = tmp3Result;
      return closure_8(closure_6, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let description;
      let items;
      let items1;
      let title;
      let tmp4;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(7);
      ({ title, description } = arg0);
      if (cResult[0] !== title) {
        let tmp5 = title;
        if (typeof title === "string") {
          const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
          tmp5 = metroImportAll(Text_Text.Text, obj2);
        }
        cResult[0] = title;
        cResult[1] = tmp5;
        tmp4 = tmp5;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== description) {
        let tmp8 = null != description;
        if (tmp8) {
          const obj3 = { children: items };
          items = [metroImportAll(native.Spacer, { size: 2 })];
          const obj4 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
          items[1] = metroImportAll(Text_Text.Text, obj4);
          tmp8 = React4(authStore, obj3);
        }
        cResult[2] = description;
        cResult[3] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        let tmp12;
        if (cResult[5] === tmp6) {
          tmp12 = cResult[6];
        }
        return tmp12;
      }
      const obj5 = { children: items1 };
      items1 = [tmp4, tmp6];
      const tmp13 = React4(metroRequire, obj5);
      cResult[4] = tmp4;
      cResult[5] = tmp6;
      cResult[6] = tmp13;
      tmp12 = tmp13;
    }
  : (arg0) => {
      let description;
      let items1;
      let title;
      ({ title, description } = arg0);
      let tmp3 = title;
      if (typeof title === "string") {
        const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
        tmp3 = metroImportAll(Text_Text.Text, obj2);
      }
      const children = [tmp3];
      let tmpResult = null != description;
      if (tmpResult) {
        const obj = { children: items1 };
        items1 = [metroImportAll(native.Spacer, { size: 2 })];
        const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
        items1[1] = metroImportAll(Text_Text.Text, obj3);
        tmpResult = React4(authStore, obj);
      }
      children[1] = tmpResult;
      return React4(metroRequire, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let items2;
      let tmp10;
      let tmp6;
      let tmp7;
      const obj = channelId(576);
      const cResult = obj.c(19);
      channelId = channelId.channelId;
      const description = channelId.description;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function l() {
          return ChannelStore.getChannel(channelId);
        };
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = channelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      const tmp9 = useChannelNameDefault(stateFromStores);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(channelId(1126).t.bz1PZX);
        cResult[4] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[4];
      }
      if (null != stateFromStores) {
        let tmp12;
        let tmp13;
        let tmp15;
        let tmp18;
        let tmp21;
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { flexDirection: "row", alignItems: "center" };
          cResult[5] = obj2;
          tmp12 = obj2;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== stateFromStores) {
          const tmpResult2 = channelId(5819);
          const channelIcon = tmpResult2.getChannelIcon(stateFromStores);
          cResult[6] = stateFromStores;
          cResult[7] = channelIcon;
          tmp13 = channelIcon;
        } else {
          tmp13 = cResult[7];
        }
        if (cResult[8] !== tmp13) {
          const obj3 = { size: channelId(1188).Icon.Sizes.REFRESH_SMALL_16, source: tmp13 };
          const Icon = tmp(1188).Icon;
          const tmp17 = closure_8(Icon, obj3);
          cResult[8] = tmp13;
          cResult[9] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp20 = closure_8(channelId(1188).Spacer, { size: 4 });
          cResult[10] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] !== tmp9) {
          const obj4 = { variant: "text-md/semibold", color: "text-default", children: tmp9 };
          const tmp23 = closure_8(channelId(4892).Text, obj4);
          cResult[11] = tmp9;
          cResult[12] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[12];
        }
        if (cResult[13] === tmp15) {
          let tmp24;
          if (cResult[14] === tmp21) {
            tmp24 = cResult[15];
          }
          tmp10 = tmp24;
        }
        const obj5 = { style: tmp12, children: items2 };
        items2 = [tmp15, tmp18, tmp21];
        const tmp27 = closure_9(closure_6, obj5);
        cResult[13] = tmp15;
        cResult[14] = tmp21;
        cResult[15] = tmp27;
        tmp24 = tmp27;
      }
      if (cResult[16] === description) {
        let tmp28;
        if (cResult[17] === tmp10) {
          tmp28 = cResult[18];
        }
        return tmp28;
      }
      const tmp29 = closure_8(closure_15, { title: tmp10, description });
      cResult[16] = description;
      cResult[17] = tmp10;
      cResult[18] = tmp29;
      tmp28 = tmp29;
    }
  : (channelId) => {
      let items2;
      let tmpResult;
      channelId = channelId.channelId;
      const description = channelId.description;
      const items = [ChannelStore];
      const items1 = [channelId];
      const obj = channelId(504);
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
      const tmp4 = useChannelNameDefault(stateFromStores);
      const intl = channelId(1126).intl;
      let title = intl.string(channelId(1126).t.bz1PZX);
      if (null != stateFromStores) {
        const obj2 = { style: { flexDirection: "row", alignItems: "center" }, children: items2 };
        const obj3 = {
          size: channelId(1188).Icon.Sizes.REFRESH_SMALL_16,
          source: tmpResult.getChannelIcon(stateFromStores),
        };
        const Icon = tmp(1188).Icon;
        tmpResult = channelId(5819);
        items2 = [closure_8(Icon, obj3), closure_8(channelId(1188).Spacer, { size: 4 })];
        const obj4 = { variant: "text-md/semibold", color: "text-default", children: tmp4 };
        items2[2] = closure_8(channelId(4892).Text, obj4);
        title = closure_9(closure_6, obj2);
      }
      return closure_8(closure_15, { title, description });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let intl;
      let items;
      let tmp10;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(8);
      onPress = onPress.onPress;
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          variant: "text-sm/semibold",
          color: "interactive-text-hover",
          style: { marginTop: -1 },
          children: intl.string(intl4.t["hub6t/"]),
        };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        const tmp8 = metroImportAll(Text, obj2);
        const tmp9 = metroImportAll(native.Spacer, { size: 3 });
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.showAllButtonUnderline) {
        const obj3 = { children: items };
        items = [tmp5, tmp6];
        const obj4 = { style: tmp4.showAllButtonUnderline };
        items[2] = metroImportAll(metroRequire, obj4);
        const tmp14 = React4(metroRequire, obj3);
        cResult[2] = tmp4.showAllButtonUnderline;
        cResult[3] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === onPress) {
        if (cResult[5] === tmp4.showAllButton) {
          let tmp15;
          if (cResult[6] === tmp10) {
            tmp15 = cResult[7];
          }
          return tmp15;
        }
      }
      const obj5 = { onPress, style: tmp4.showAllButton, activeOpacity: 0.5, children: tmp10 };
      const tmp16 = metroImportAll(hasOwnProperty, obj5);
      cResult[4] = onPress;
      cResult[5] = tmp4.showAllButton;
      cResult[6] = tmp10;
      cResult[7] = tmp16;
      tmp15 = tmp16;
    }
  : (onPress) => {
      let intl;
      let items;
      let obj2;
      onPress = onPress.onPress;
      const tmp = closure_11();
      const obj = { onPress, style: tmp.showAllButton, activeOpacity: 0.5, children: React4(metroRequire, obj2) };
      obj2 = { children: items };
      const obj3 = {
        variant: "text-sm/semibold",
        color: "interactive-text-hover",
        style: { marginTop: -1 },
        children: intl.string(intl4.t["hub6t/"]),
      };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items = [metroImportAll(Text, obj3), metroImportAll(native.Spacer, { size: 3 })];
      const obj4 = { style: tmp.showAllButtonUnderline };
      items[2] = metroImportAll(metroRequire, obj4);
      return metroImportAll(hasOwnProperty, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (listingId) => {
      let GappedList;
      let intl;
      let intl2;
      let intl3;
      let items;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj14;
      let obj20;
      let obj25;
      let tmp2 = listingId;
      let obj = listingId(576);
      const cResult = obj.c(40);
      listingId = listingId.listingId;
      const guildId = listingId.guildId;
      const tmp5 = closure_11();
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      let str = _slicedToArray(obj2.useImage(listingId), 1)[0];
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj3.useName(listingId), 1)[0];
      const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first1 = _slicedToArray(obj4.useTierEmojiIds(listingId, guildId), 1)[0];
      const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first2 = _slicedToArray(obj5.useChannelBenefits(listingId), 1)[0];
      const obj6 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first3 = _slicedToArray(obj6.useIntangibleBenefits(listingId), 1)[0];
      const obj7 = listingId(16537);
      const formattedSubscriptionPlan = obj7.useFormattedSubscriptionPlan(listingId);
      const first4 = first2[0];
      const first5 = first3[0];
      size = first1.size;
      if (cResult[0] === guildId) {
        let tmp12;
        let tmp14;
        if (cResult[1] === listingId) {
          tmp12 = cResult[2];
        }
        if (str == null) {
          str = "";
        }
        if (cResult[3] !== str) {
          const obj8 = { uri: str };
          cResult[3] = str;
          cResult[4] = obj8;
          tmp14 = obj8;
        } else {
          tmp14 = cResult[4];
        }
        if (cResult[5] === tmp5.image) {
          let tmp15;
          let tmp20;
          let tmp23;
          let tmp26;
          let tmp29;
          if (cResult[6] === tmp14) {
            tmp15 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp22 = closure_8(tmp2(1188).Spacer, { size: 16 });
            cResult[8] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[8];
          }
          if (cResult[9] !== first) {
            const obj9 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: first };
            const tmp25 = closure_8(tmp2(4892).Text, obj9);
            cResult[9] = first;
            cResult[10] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp28 = closure_8(tmp2(1188).Spacer, { size: 4 });
            cResult[11] = tmp28;
            tmp26 = tmp28;
          } else {
            tmp26 = cResult[11];
          }
          if (cResult[12] !== formattedSubscriptionPlan) {
            const obj10 = { variant: "heading-md/medium", color: "text-default", children: formattedSubscriptionPlan };
            const tmp31 = closure_8(tmp2(4892).Text, obj10);
            cResult[12] = formattedSubscriptionPlan;
            cResult[13] = tmp31;
            tmp29 = tmp31;
          } else {
            tmp29 = cResult[13];
          }
          if (cResult[14] === tmp23) {
            let tmp32;
            if (cResult[15] === tmp29) {
              tmp32 = cResult[16];
            }
            if (cResult[17] === tmp5.header) {
              if (cResult[18] === tmp15) {
                let tmp36;
                let tmp40;
                let tmp43;
                if (cResult[19] === tmp32) {
                  tmp36 = cResult[20];
                }
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp42 = closure_8(tmp2(1188).Spacer, { size: 16 });
                  cResult[21] = tmp42;
                  tmp40 = tmp42;
                } else {
                  tmp40 = cResult[21];
                }
                if (cResult[22] !== listingId) {
                  const obj11 = { listingId };
                  const tmp46 = closure_8(guildId(16543), obj11);
                  cResult[22] = listingId;
                  cResult[23] = tmp46;
                  tmp43 = tmp46;
                } else {
                  tmp43 = cResult[23];
                }
                if (cResult[24] === first1) {
                  if (cResult[25] === guildId) {
                    if (cResult[26] === tmp12) {
                      if (cResult[27] === (first2.length > 0 || size > 0 || first3.length > 0)) {
                        if (cResult[28] === first2.length) {
                          if (cResult[29] === size) {
                            if (cResult[30] === first3.length) {
                              if (cResult[31] === first4) {
                                if (cResult[32] === first5) {
                                  let tmp47;
                                  if (cResult[33] === tmp5.contentContainer) {
                                    tmp47 = cResult[34];
                                  }
                                  if (cResult[35] === tmp5.container) {
                                    if (cResult[36] === tmp36) {
                                      if (cResult[37] === tmp43) {
                                        let tmp66;
                                        if (cResult[38] === tmp47) {
                                          tmp66 = cResult[39];
                                        }
                                        return tmp66;
                                      }
                                    }
                                  }
                                  const obj12 = { style: tmp5.container, children: items };
                                  items = [tmp36, tmp40, tmp43, tmp47];
                                  const tmp69 = closure_9(closure_6, obj12);
                                  cResult[35] = tmp5.container;
                                  cResult[36] = tmp36;
                                  cResult[37] = tmp43;
                                  cResult[38] = tmp47;
                                  cResult[39] = tmp69;
                                  tmp66 = tmp69;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                let tmp49Result6 = tmp11;
                if (tmp49Result6) {
                  const items1 = [closure_8(tmp2(1188).Spacer, { size: 24 }), ,];
                  const obj13 = { style: tmp5.contentContainer, children: closure_9(GappedList, obj14) };
                  let tmp49Result = null;
                  obj14 = {
                    renderGap() {
                      return closure_1_8(closure_1_13, {});
                    },
                    children: items4,
                  };
                  GappedList = tmp2(9966).GappedList;
                  if (size > 0) {
                    const obj15 = { children: items2 };
                    const obj16 = { title: intl.string(tmp2(1126).t.ebOU2b), count: size };
                    intl = tmp2(1126).intl;
                    items2 = [closure_8(closure_12, obj16), closure_8(tmp2(1188).Spacer, { size: 8 }), ,];
                    const obj17 = { emojiIds: items3, guildId, maxEmojis: 5 };
                    items3 = [];
                    HermesBuiltin.arraySpread(items3, first1, 0);
                    items2[2] = closure_8(closure_14, obj17);
                    items2[3] = closure_8(tmp2(1188).Spacer, { size: 4 });
                    tmp49Result = closure_9(closure_6, obj15);
                  }
                  items4 = [tmp49Result, ,];
                  let tmp49Result4 = null;
                  if (null != first4) {
                    const obj18 = { children: items5 };
                    const obj19 = {
                      title: intl2.formatToPlainString(tmp2(1126).t.y7dUrm, obj20),
                      count: first2.length,
                    };
                    intl2 = tmp2(1126).intl;
                    obj20 = { numChannels: first2.length };
                    items5 = [closure_8(closure_12, obj19), closure_8(tmp2(1188).Spacer, { size: 12 }), ,];
                    const obj21 = { channelId: null, description: null };
                    ({ ref_id: obj23.channelId, description: obj23.description } = first4);
                    items5[2] = closure_8(closure_16, obj21);
                    items5[3] = closure_8(tmp2(1188).Spacer, { size: 6 });
                    tmp49Result4 = closure_9(closure_6, obj18);
                  }
                  items4[1] = tmp49Result4;
                  let tmp49Result5 = null;
                  if (null != first5) {
                    const obj22 = { children: items6 };
                    const obj24 = {
                      title: intl3.formatToPlainString(tmp2(1126).t.MR7oOF, obj25),
                      count: first3.length,
                    };
                    intl3 = tmp2(1126).intl;
                    obj25 = { numBenefits: first3.length };
                    items6 = [closure_8(closure_12, obj24), closure_8(tmp2(1188).Spacer, { size: 12 }), ,];
                    const obj26 = { title: null, description: null };
                    ({ name: obj27.title, description: obj27.description } = first5);
                    items6[2] = closure_8(closure_15, obj26);
                    items6[3] = closure_8(tmp2(1188).Spacer, { size: 6 });
                    tmp49Result5 = closure_9(closure_6, obj22);
                  }
                  const obj28 = { children: items1 };
                  items4[2] = tmp49Result5;
                  items1[1] = closure_8(closure_6, obj13);
                  const obj29 = { onPress: tmp12 };
                  items1[2] = closure_8(closure_17, obj29);
                  tmp49Result6 = closure_9(closure_10, obj28);
                }
                cResult[24] = first1;
                cResult[25] = guildId;
                cResult[26] = tmp12;
                cResult[27] = first2.length > 0 || size > 0 || first3.length > 0;
                cResult[28] = first2.length;
                cResult[29] = size;
                cResult[30] = first3.length;
                cResult[31] = first4;
                cResult[32] = first5;
                cResult[33] = tmp5.contentContainer;
                cResult[34] = tmp49Result6;
                tmp47 = tmp49Result6;
              }
            }
            const obj30 = { style: tmp5.header, children: items7 };
            items7 = [tmp15, tmp20, tmp32];
            const tmp39 = closure_9(closure_6, obj30);
            cResult[17] = tmp5.header;
            cResult[18] = tmp15;
            cResult[19] = tmp32;
            cResult[20] = tmp39;
            tmp36 = tmp39;
          }
          const obj53 = { children: items8 };
          items8 = [tmp23, tmp26, tmp29];
          const tmp35 = closure_9(closure_6, obj53);
          cResult[14] = tmp23;
          cResult[15] = tmp29;
          cResult[16] = tmp35;
          tmp32 = tmp35;
        }
        const obj54 = { source: tmp14, style: tmp5.image };
        const tmp18 = closure_8(guildId(5981), obj54);
        cResult[5] = tmp5.image;
        cResult[6] = tmp14;
        cResult[7] = tmp18;
        tmp15 = tmp18;
      }
      const fn = function l() {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        ActionSheetActionCreatorsDefault;
        const obj = { listingId, guildId };
        const tmp2 = asyncRequire(16542, dependencyMap.paths);
        openLazy(tmp2, "PurchaseCard:" + listingId, obj);
      };
      cResult[0] = guildId;
      cResult[1] = listingId;
      cResult[2] = fn;
      tmp12 = fn;
    }
  : (listingId) => {
      let GappedList;
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let items2;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj12;
      let obj18;
      let obj24;
      listingId = listingId.listingId;
      const guildId = listingId.guildId;
      let tmp2 = closure_11();
      let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
      let str = _slicedToArray(obj.useImage(listingId), 1)[0];
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj2.useName(listingId), 1)[0];
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first1 = _slicedToArray(obj3.useTierEmojiIds(listingId, guildId), 1)[0];
      const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first2 = _slicedToArray(obj4.useChannelBenefits(listingId), 1)[0];
      const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first3 = _slicedToArray(obj5.useIntangibleBenefits(listingId), 1)[0];
      const first4 = first2[0];
      const first5 = first3[0];
      size = first1.size;
      const obj7 = { style: tmp2.container, children: items2 };
      const obj8 = { style: tmp2.header, children: items };
      const obj6 = listingId(16537);
      const formattedSubscriptionPlan = obj6.useFormattedSubscriptionPlan(listingId);
      const tmp13 = guildId;
      const tmp14 = guildId(5981);
      if (str == null) {
        str = "";
      }
      items = [, ,];
      const obj9 = { source: { uri: str }, style: tmp2.image };
      items[0] = closure_8(tmp14, obj9);
      items[1] = closure_8(listingId(1188).Spacer, { size: 16 });
      const obj10 = { children: items1 };
      items1 = [
        closure_8(listingId(4892).Text, {
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: first,
        }),
        closure_8(listingId(1188).Spacer, { size: 4 }),
        closure_8(listingId(4892).Text, {
          variant: "heading-md/medium",
          color: "text-default",
          children: formattedSubscriptionPlan,
        }),
      ];
      items[2] = closure_9(closure_6, obj10);
      items2 = [
        closure_9(closure_6, obj8),
        closure_8(listingId(1188).Spacer, { size: 16 }),
        closure_8(tmp13(16543), { listingId }),
      ];
      let tmp10Result6 = length > 0 || size > 0 || length2 > 0;
      if (tmp10Result6) {
        const items3 = [closure_8(listingId(1188).Spacer, { size: 24 }), ,];
        const obj11 = { style: tmp2.contentContainer, children: closure_9(GappedList, obj12) };
        let tmp10Result = null;
        obj12 = {
          renderGap() {
            return closure_1_8(closure_1_13, {});
          },
          children: items6,
        };
        GappedList = tmp6(9966).GappedList;
        if (size > 0) {
          const obj13 = { children: items4 };
          const obj14 = { title: intl.string(listingId(1126).t.ebOU2b), count: size };
          intl = tmp6(1126).intl;
          items4 = [closure_8(closure_12, obj14), closure_8(listingId(1188).Spacer, { size: 8 }), ,];
          const obj15 = { emojiIds: items5, guildId, maxEmojis: 5 };
          items5 = [];
          HermesBuiltin.arraySpread(items5, first1, 0);
          items4[2] = closure_8(closure_14, obj15);
          items4[3] = closure_8(listingId(1188).Spacer, { size: 4 });
          tmp10Result = closure_9(closure_6, obj13);
        }
        items6 = [tmp10Result, ,];
        let tmp10Result4 = null;
        if (null != first4) {
          const obj16 = { children: items7 };
          const obj17 = { title: intl2.formatToPlainString(listingId(1126).t.y7dUrm, obj18), count: first2.length };
          intl2 = tmp6(1126).intl;
          obj18 = { numChannels: first2.length };
          items7 = [closure_8(closure_12, obj17), closure_8(listingId(1188).Spacer, { size: 12 }), ,];
          const obj20 = { channelId: null, description: null };
          ({ ref_id: obj19.channelId, description: obj19.description } = first4);
          items7[2] = closure_8(closure_16, obj20);
          items7[3] = closure_8(listingId(1188).Spacer, { size: 6 });
          tmp10Result4 = closure_9(closure_6, obj16);
        }
        items6[1] = tmp10Result4;
        let tmp10Result5 = null;
        if (null != first5) {
          const obj21 = { children: items8 };
          const obj22 = { title: intl3.formatToPlainString(listingId(1126).t.MR7oOF, obj24), count: first3.length };
          intl3 = tmp6(1126).intl;
          obj24 = { numBenefits: first3.length };
          items8 = [closure_8(closure_12, obj22), closure_8(listingId(1188).Spacer, { size: 12 }), ,];
          const obj25 = { title: null, description: null };
          ({ name: obj23.title, description: obj23.description } = first5);
          items8[2] = closure_8(closure_15, obj25);
          items8[3] = closure_8(listingId(1188).Spacer, { size: 6 });
          tmp10Result5 = closure_9(closure_6, obj21);
        }
        const obj44 = { children: items3 };
        items6[2] = tmp10Result5;
        items3[1] = closure_8(closure_6, obj11);
        const obj45 = {
          onPress() {
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            ActionSheetActionCreatorsDefault;
            const obj = { listingId, guildId };
            const tmp2 = asyncRequire(16542, dependencyMap.paths);
            openLazy(tmp2, "PurchaseCard:" + listingId, obj);
          },
        };
        items3[2] = closure_8(closure_17, obj45);
        tmp10Result6 = closure_9(closure_10, obj44);
      }
      items2[3] = tmp10Result6;
      return closure_9(closure_6, obj7);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx",
);

export default tmp6;
