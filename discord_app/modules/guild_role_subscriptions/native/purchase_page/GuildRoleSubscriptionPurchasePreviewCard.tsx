// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01999_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import LayoutUtils from "../components/LayoutUtils.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import EmojiIconDefault from "../components/EmojiIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: {
    padding: 16,
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  },
  header: { flexDirection: "row" },
  image: null,
  separator: null,
  contentContainer: null,
  contentHeader: null,
  emojiGallery: null,
  emojiTruncatedContainer: null,
  showAllButton: null,
  showAllButtonUnderline: null,
};
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.xl };
obj2.image = size;
const size1 = {
  width: "100%",
  height: 1,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  marginVertical: 16,
};
obj2.separator = size1;
let obj3 = {
  padding: 16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj2.contentContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopRightRadius: nativeDefault.radii.sm,
  borderTopLeftRadius: nativeDefault.radii.sm,
  padding: 16,
};
obj2.contentHeader = { textTransform: "uppercase" };
obj2.emojiGallery = { flexDirection: "row" };
const size2 = {
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingTop: 1,
};
obj2.emojiTruncatedContainer = size2;
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopRightRadius: nativeDefault.radii.sm,
  borderTopLeftRadius: nativeDefault.radii.sm,
  padding: 16,
};
obj2.showAllButton = {
  paddingVertical: 16,
  paddingHorizontal: 20,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
};
const rect = {
  position: "absolute",
  left: 0,
  right: 0,
  height: 1,
  bottom: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.showAllButtonUnderline = rect;
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContentHeader(arg0) {
      const cResult = c.c(12);
      ({ count, title } = arg0);
      const tmp4 = closure_11();
      const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
        "PurchasePreviewCard",
        "text-xs/bold",
      );
      if (cResult[0] === typeConsolidationEyebrow.style) {
        if (cResult[1] === tmp4.contentHeader) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === count) {
          if (cResult[4] === typeConsolidationEyebrow.variant) {
            if (cResult[5] === tmp4.contentHeader) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] === typeConsolidationEyebrow.variant) {
              if (cResult[8] === tmp6) {
                if (cResult[9] === tmp7) {
                  if (cResult[10] === title) {
                    let tmp10 = cResult[11];
                  }
                  return tmp10;
                }
              }
            }
            const obj3 = {
              variant: typeConsolidationEyebrow.variant,
              color: "text-muted",
              style: tmp6,
              children: null,
            };
            const items = [tmp7, " ", title];
            obj3.children = items;
            const tmp12 = options(Text_Text.Text, obj3);
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
        const tmp9 = closure_1_8(Text_Text.Text, obj4);
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
  : function ContentHeader(arg0) {
      ({ count, title } = arg0);
      const tmp = closure_11();
      const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
        "PurchasePreviewCard",
        "text-xs/bold",
      );
      const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: null, children: null };
      const items = [tmp.contentHeader, typeConsolidationEyebrow.style];
      obj2.style = items;
      const items1 = [
        closure_1_8(Text_Text.Text, {
          variant: typeConsolidationEyebrow.variant,
          color: "text-default",
          style: tmp.contentHeader,
          children: count,
        }),
        " ",
        title,
      ];
      obj2.children = items1;
      return options(Text_Text.Text, obj2);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Separator() {
      const cResult = c.c(2);
      const tmp2 = closure_11();
      if (cResult[0] !== tmp2.separator) {
        const obj2 = { style: tmp2.separator };
        const tmp6 = closure_1_8(timestampProducer, obj2);
        cResult[0] = tmp2.separator;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function Separator() {
      return closure_1_8(timestampProducer, { style: closure_11().separator });
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmojiGallery(arg0) {
      let Text = guildId;
      const cResult = guildId(576).c(24);
      ({ emojiIds, maxEmojis, guildId } = arg0);
      const tmp2 = closure_11();
      if (cResult[0] === emojiIds) {
        if (cResult[1] === guildId) {
          if (cResult[2] === maxEmojis) {
            if (cResult[3] === tmp2.emojiGallery) {
              if (cResult[4] === tmp2.emojiTruncatedContainer) {
                if (cResult[16] === cResult[5]) {
                  if (cResult[17] === tmp5) {
                    if (cResult[18] === tmp6) {
                      let tmp14 = cResult[19];
                    }
                    if (cResult[20] === tmp4) {
                      if (cResult[21] === tmp7) {
                        if (cResult[22] === tmp14) {
                          let tmp17 = cResult[23];
                        }
                        return tmp17;
                      }
                    }
                    const obj2 = { style: tmp7, children: tmp14 };
                    const tmp19 = closure_8(tmp4, obj2);
                    cResult[20] = tmp4;
                    cResult[21] = tmp7;
                    cResult[22] = tmp14;
                    cResult[23] = tmp19;
                    tmp17 = tmp19;
                  }
                }
                const obj3 = { gap: cResult[7], children: cResult[8] };
                const tmp16 = closure_8(cResult[5], obj3);
                cResult[16] = cResult[5];
                cResult[17] = cResult[7];
                cResult[18] = cResult[8];
                cResult[19] = tmp16;
                tmp14 = tmp16;
              }
            }
          }
        }
      }
      const substr = emojiIds.slice(0, maxEmojis);
      let emojiTruncatedContainer = emojiIds.length - maxEmojis;
      const GappedList = Text(9493).GappedList;
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
      if (cResult[12] === emojiTruncatedContainer > 0) {
        class I {
          constructor(arg0) {
            obj = { size: 30, fontSize: 20, guildId, id: arg0 };
            return jsx(closure_1(closure_3[15]), obj, arg0);
          }
        }
      }
      let tmp12 = tmp11;
      if (emojiTruncatedContainer > 0) {
        class I {
          constructor(arg0) {
            obj = { size: 30, fontSize: 20, guildId, id: arg0 };
            return jsx(closure_1(closure_3[15]), obj, arg0);
          }
        }
        const obj4 = { style: tmp2.emojiTruncatedContainer, children: null };
        Text = Text(5086).Text;
        const obj5 = { variant: "text-sm/bold", color: "text-default", children: null };
        const items = ["+", emojiTruncatedContainer];
        obj5.children = items;
        obj4.children = closure_9(Text, obj5);
        tmp12 = closure_8(closure_6, obj4, "andMore");
      }
      cResult[12] = emojiTruncatedContainer > 0;
      cResult[13] = emojiTruncatedContainer;
      emojiTruncatedContainer = tmp2.emojiTruncatedContainer;
      cResult[14] = emojiTruncatedContainer;
      cResult[15] = tmp12;
      const obj = guildId(576);
    }
  : function EmojiGallery(arg0) {
      ({ emojiIds, maxEmojis, guildId: require } = arg0);
      const tmp = closure_11();
      const substr = emojiIds.slice(0, maxEmojis);
      const diff = emojiIds.length - maxEmojis;
      const obj = { style: tmp.emojiGallery, children: null };
      const items = [...substr.map((id) => closure_2_8(EmojiIconDefault, { size: 30, fontSize: 20, guildId, id }, id))];
      let tmp3Result = diff > 0;
      if (tmp3Result) {
        const obj2 = { style: tmp.emojiTruncatedContainer, children: null };
        const obj3 = { variant: "text-sm/bold", color: "text-default", children: null };
        const items1 = ["+", diff];
        obj3.children = items1;
        obj2.children = closure_9(Text_Text.Text, obj3);
        tmp3Result = closure_8(closure_6, obj2, "andMore");
      }
      items[tmp7] = tmp3Result;
      obj.children = closure_8(LayoutUtils.GappedList, { gap: 18, children: items });
      return closure_8(closure_6, obj);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BenefitShowCase(arg0) {
      const cResult = c.c(7);
      ({ title, description } = arg0);
      if (cResult[0] !== title) {
        let tmp5 = title;
        if (typeof title === "string") {
          const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
          tmp5 = closure_1_8(Text_Text.Text, obj2);
        }
        cResult[0] = title;
        cResult[1] = tmp5;
        let tmp4 = tmp5;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== description) {
        let tmp8 = null != description;
        if (tmp8) {
          const obj3 = { children: null };
          const items = [closure_1_8(native.Spacer, { size: 2 })];
          const obj4 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
          items[1] = closure_1_8(Text_Text.Text, obj4);
          obj3.children = items;
          tmp8 = options(collapsed, obj3);
        }
        cResult[2] = description;
        cResult[3] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp6) {
          let tmp12 = cResult[6];
        }
        return tmp12;
      }
      const obj5 = { children: null };
      const items1 = [tmp4, tmp6];
      obj5.children = items1;
      const tmp13 = options(timestampProducer, obj5);
      cResult[4] = tmp4;
      cResult[5] = tmp6;
      cResult[6] = tmp13;
      tmp12 = tmp13;
    }
  : function BenefitShowCase(arg0) {
      ({ title, description } = arg0);
      let tmp3 = title;
      if (typeof title === "string") {
        const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
        tmp3 = closure_1_8(Text_Text.Text, obj2);
      }
      const children = [tmp3];
      let tmpResult = null != description;
      if (tmpResult) {
        const obj = { children: null };
        const items1 = [closure_1_8(native.Spacer, { size: 2 })];
        const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
        items1[1] = closure_1_8(Text_Text.Text, obj3);
        obj.children = items1;
        tmpResult = options(collapsed, obj);
      }
      children[1] = tmpResult;
      return options(timestampProducer, { children });
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelBenefitShowCase(channelId) {
      const cResult = channelId(576).c(19);
      channelId = channelId.channelId;
      const description = channelId.description;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
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
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = channelId(576);
      const stateFromStores = channelId(504).useStateFromStores(first, tmp6, tmp7);
      const tmp9 = useChannelNameDefault(stateFromStores);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.bz1PZX);
        cResult[4] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[4];
      }
      if (null == stateFromStores) {
        if (cResult[16] === description) {
          if (cResult[17] === tmp10) {
            let tmp28 = cResult[18];
          }
          return tmp28;
        }
        const obj2 = { title: tmp10, description };
        const tmp31 = closure_8(closure_15, obj2);
        cResult[16] = description;
        cResult[17] = tmp10;
        cResult[18] = tmp31;
        tmp28 = tmp31;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { flexDirection: "row", alignItems: "center" };
          cResult[5] = obj3;
          let items2 = obj3;
        } else {
          items2 = cResult[5];
        }
        if (cResult[6] !== stateFromStores) {
          const channelIcon = tmp(8134).getChannelIcon(stateFromStores);
          cResult[6] = stateFromStores;
          cResult[7] = channelIcon;
          let tmp12 = channelIcon;
          const tmpResult2 = tmp(8134);
        } else {
          tmp12 = cResult[7];
        }
        if (cResult[8] !== tmp12) {
          const obj4 = { size: tmp(1200).Icon.Sizes.REFRESH_SMALL_16, source: tmp12 };
          const tmp16 = closure_8(tmp(1200).Icon, obj4);
          cResult[8] = tmp12;
          cResult[9] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp19 = closure_8(tmp(1200).Spacer, { size: 4 });
          cResult[10] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[10];
        }
        if (cResult[11] !== tmp9) {
          const obj5 = { variant: "text-md/semibold", color: "text-default", children: tmp9 };
          const tmp22 = closure_8(tmp(5086).Text, obj5);
          cResult[11] = tmp9;
          cResult[12] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[12];
        }
        if (cResult[13] === tmp14) {
        }
        const obj6 = { style: items2, children: null };
        items2 = [tmp14, tmp17, tmp20];
        obj6.children = items2;
        const tmp26 = closure_9(closure_6, obj6);
        cResult[13] = tmp14;
        cResult[14] = tmp20;
        cResult[15] = tmp26;
      }
      const tmpResult = channelId(504);
    }
  : function ChannelBenefitShowCase(description) {
      const channelId = description.channelId;
      const items = [ChannelStore];
      const items1 = [channelId];
      const stateFromStores = channelId(504).useStateFromStores(
        items,
        () => ChannelStore.getChannel(channelId),
        items1,
      );
      const obj = channelId(504);
      const intl = channelId(1126).intl;
      let title = intl.string(channelId(1126).t.bz1PZX);
      if (null != stateFromStores) {
        const obj2 = { style: { flexDirection: "row", alignItems: "center" }, children: null };
        const obj3 = { size: tmp(1200).Icon.Sizes.REFRESH_SMALL_16, source: tmp(8134).getChannelIcon(stateFromStores) };
        const items2 = [closure_8(tmp(1200).Icon, obj3), closure_8(tmp(1200).Spacer, { size: 4 })];
        const obj4 = { variant: "text-md/semibold", color: "text-default", children: tmp4 };
        items2[2] = closure_8(tmp(5086).Text, obj4);
        obj2.children = items2;
        title = closure_9(closure_6, obj2);
        const tmpResult = tmp(8134);
      }
      return closure_8(closure_15, { title, description: description.description });
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ShowAllButton(onPress) {
      const cResult = c.c(8);
      onPress = onPress.onPress;
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          variant: "text-sm/semibold",
          color: "interactive-text-hover",
          style: { marginTop: -1 },
          children: null,
        };
        const intl = util.intl;
        obj2.children = intl.string(util.t["hub6t/"]);
        const tmp8 = closure_1_8(Text_Text.Text, obj2);
        const tmp9 = closure_1_8(native.Spacer, { size: 3 });
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.showAllButtonUnderline) {
        const obj3 = { children: null };
        const items = [tmp5, tmp6];
        const obj4 = { style: tmp4.showAllButtonUnderline };
        items[2] = closure_1_8(timestampProducer, obj4);
        obj3.children = items;
        const tmp14 = options(timestampProducer, obj3);
        cResult[2] = tmp4.showAllButtonUnderline;
        cResult[3] = tmp14;
        let tmp10 = tmp14;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === onPress) {
        if (cResult[5] === tmp4.showAllButton) {
          if (cResult[6] === tmp10) {
            let tmp15 = cResult[7];
          }
          return tmp15;
        }
      }
      const tmp16 = closure_1_8(hasOwnProperty, {
        onPress,
        style: tmp4.showAllButton,
        activeOpacity: 0.5,
        children: tmp10,
      });
      cResult[4] = onPress;
      cResult[5] = tmp4.showAllButton;
      cResult[6] = tmp10;
      cResult[7] = tmp16;
      tmp15 = tmp16;
      const obj5 = { onPress, style: tmp4.showAllButton, activeOpacity: 0.5, children: tmp10 };
    }
  : function ShowAllButton(onPress) {
      const tmp = closure_11();
      const obj = { onPress: onPress.onPress, style: tmp.showAllButton, activeOpacity: 0.5, children: null };
      const obj2 = { children: null };
      const obj3 = {
        variant: "text-sm/semibold",
        color: "interactive-text-hover",
        style: { marginTop: -1 },
        children: null,
      };
      const intl = util.intl;
      obj3.children = intl.string(util.t["hub6t/"]);
      const items = [
        closure_1_8(Text_Text.Text, obj3),
        closure_1_8(native.Spacer, { size: 3 }),
        closure_1_8(timestampProducer, { style: tmp.showAllButtonUnderline }),
      ];
      obj2.children = items;
      obj.children = options(timestampProducer, obj2);
      return closure_1_8(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let obj5 = {
  paddingVertical: 16,
  paddingHorizontal: 20,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRoleSubscriptionPurchasePreviewCard(listingId) {
      const cResult = listingId(576).c(40);
      listingId = listingId.listingId;
      const guildId = listingId.guildId;
      const tmp4 = closure_11();
      let obj = listingId(576);
      let str = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(listingId), 1)[0];
      const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(listingId), 1)[0];
      const first1 = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(listingId, guildId),
        1,
      )[0];
      const first2 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
      const first3 = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId),
        1,
      )[0];
      const formattedSubscriptionPlan = listingId(16792).useFormattedSubscriptionPlan(listingId);
      const first4 = first2[0];
      const first5 = first3[0];
      const size = first1.size;
      if (cResult[0] === guildId) {
        if (cResult[1] === listingId) {
          let tmp11 = cResult[2];
        }
        if (str == null) {
          str = "";
        }
        if (cResult[3] !== str) {
          const obj8 = { uri: str };
          cResult[3] = str;
          cResult[4] = obj8;
          let tmp13 = obj8;
        } else {
          tmp13 = cResult[4];
        }
        if (cResult[5] === tmp4.image) {
          if (cResult[6] === tmp13) {
            let tmp14 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp21 = closure_8(tmp(1200).Spacer, { size: 16 });
            cResult[8] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[8];
          }
          if (cResult[9] !== first) {
            const obj9 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: first };
            const tmp24 = closure_8(tmp(5086).Text, obj9);
            cResult[9] = first;
            cResult[10] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp27 = closure_8(tmp(1200).Spacer, { size: 4 });
            cResult[11] = tmp27;
            let tmp25 = tmp27;
          } else {
            tmp25 = cResult[11];
          }
          if (cResult[12] !== formattedSubscriptionPlan) {
            const obj10 = { variant: "heading-md/medium", color: "text-default", children: formattedSubscriptionPlan };
            const tmp30 = closure_8(tmp(5086).Text, obj10);
            cResult[12] = formattedSubscriptionPlan;
            cResult[13] = tmp30;
            let tmp28 = tmp30;
          } else {
            tmp28 = cResult[13];
          }
          if (cResult[14] === tmp22) {
            if (cResult[15] === tmp28) {
              let tmp31 = cResult[16];
            }
            if (cResult[17] === tmp4.header) {
              if (cResult[18] === tmp14) {
                if (cResult[19] === tmp31) {
                  let tmp35 = cResult[20];
                }
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp41 = closure_8(tmp(1200).Spacer, { size: 16 });
                  cResult[21] = tmp41;
                  let tmp39 = tmp41;
                } else {
                  tmp39 = cResult[21];
                }
                if (cResult[22] !== listingId) {
                  const obj11 = { listingId };
                  const tmp45 = closure_8(guildId(16798), obj11);
                  cResult[22] = listingId;
                  cResult[23] = tmp45;
                  let tmp42 = tmp45;
                } else {
                  tmp42 = cResult[23];
                }
                if (cResult[24] === first1) {
                  if (cResult[25] === guildId) {
                    if (cResult[26] === tmp11) {
                      if (cResult[27] === tmp10) {
                        if (cResult[28] === length) {
                          if (cResult[29] === size) {
                            if (cResult[30] === length2) {
                              if (cResult[31] === first4) {
                                if (cResult[32] === first5) {
                                  if (cResult[33] === tmp4.contentContainer) {
                                    let tmp46 = cResult[34];
                                  }
                                  if (cResult[35] === tmp4.container) {
                                    if (cResult[36] === tmp35) {
                                      if (cResult[37] === tmp42) {
                                        if (cResult[38] === tmp46) {
                                          let tmp65 = cResult[39];
                                        }
                                        return tmp65;
                                      }
                                    }
                                  }
                                  const obj12 = { style: tmp4.container, children: null };
                                  const items = [tmp35, tmp39, tmp42, tmp46];
                                  obj12.children = items;
                                  const tmp68 = closure_9(closure_6, obj12);
                                  cResult[35] = tmp4.container;
                                  cResult[36] = tmp35;
                                  cResult[37] = tmp42;
                                  cResult[38] = tmp46;
                                  cResult[39] = tmp68;
                                  tmp65 = tmp68;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                let tmp48Result6 = tmp10;
                if (tmp10) {
                  const items1 = [closure_8(tmp(1200).Spacer, { size: 24 }), ,];
                  const obj13 = { style: tmp4.contentContainer, children: null };
                  const obj14 = {
                    renderGap() {
                      return closure_1_8(closure_1_13, {});
                    },
                    children: null,
                  };
                  let tmp48Result = null;
                  if (size > 0) {
                    const obj15 = { children: null };
                    const obj16 = { title: null, count: null };
                    const intl = tmp(1126).intl;
                    obj16.title = intl.string(tmp(1126).t.ebOU2b);
                    obj16.count = size;
                    const items2 = [closure_8(closure_12, obj16), closure_8(tmp(1200).Spacer, { size: 8 }), ,];
                    const obj17 = { emojiIds: null, guildId: null, maxEmojis: 5 };
                    const items3 = [];
                    HermesBuiltin.arraySpread(first1, 0);
                    obj17.emojiIds = items3;
                    obj17.guildId = guildId;
                    items2[2] = closure_8(closure_14, obj17);
                    items2[3] = closure_8(tmp(1200).Spacer, { size: 4 });
                    obj15.children = items2;
                    tmp48Result = closure_9(closure_6, obj15);
                  }
                  const items4 = [tmp48Result, ,];
                  let tmp48Result4 = null;
                  if (null != first4) {
                    const obj18 = { children: null };
                    const obj19 = { title: null, count: null };
                    const intl2 = tmp(1126).intl;
                    const obj20 = { numChannels: length };
                    obj19.title = intl2.formatToPlainString(tmp(1126).t.y7dUrm, obj20);
                    obj19.count = length;
                    const items5 = [closure_8(closure_12, obj19), closure_8(tmp(1200).Spacer, { size: 12 }), ,];
                    ({ ref_id: obj23.channelId, description: obj23.description } = first4);
                    items5[2] = closure_8(closure_16, { channelId: null, description: null });
                    items5[3] = closure_8(tmp(1200).Spacer, { size: 6 });
                    obj18.children = items5;
                    tmp48Result4 = closure_9(closure_6, obj18);
                    const obj21 = { channelId: null, description: null };
                  }
                  items4[1] = tmp48Result4;
                  let tmp48Result5 = null;
                  if (null != first5) {
                    const obj22 = { children: null };
                    const obj24 = { title: null, count: null };
                    const intl3 = tmp(1126).intl;
                    const obj25 = { numBenefits: length2 };
                    obj24.title = intl3.formatToPlainString(tmp(1126).t.MR7oOF, obj25);
                    obj24.count = length2;
                    const items6 = [closure_8(closure_12, obj24), closure_8(tmp(1200).Spacer, { size: 12 }), ,];
                    ({ name: obj27.title, description: obj27.description } = first5);
                    items6[2] = closure_8(closure_15, { title: null, description: null });
                    items6[3] = closure_8(tmp(1200).Spacer, { size: 6 });
                    obj22.children = items6;
                    tmp48Result5 = closure_9(closure_6, obj22);
                    const obj26 = { title: null, description: null };
                  }
                  const obj28 = { children: null };
                  items4[2] = tmp48Result5;
                  obj14.children = items4;
                  obj13.children = closure_9(tmp(9493).GappedList, obj14);
                  items1[1] = closure_8(closure_6, obj13);
                  const obj29 = { onPress: tmp11 };
                  items1[2] = closure_8(closure_17, obj29);
                  obj28.children = items1;
                  tmp48Result6 = closure_9(closure_10, obj28);
                }
                cResult[24] = first1;
                cResult[25] = guildId;
                cResult[26] = tmp11;
                cResult[27] = tmp10;
                cResult[28] = length;
                cResult[29] = size;
                cResult[30] = length2;
                cResult[31] = first4;
                cResult[32] = first5;
                cResult[33] = tmp4.contentContainer;
                cResult[34] = tmp48Result6;
                tmp46 = tmp48Result6;
              }
            }
            const obj30 = { style: tmp4.header, children: null };
            const items7 = [tmp14, tmp19, tmp31];
            obj30.children = items7;
            const tmp38 = closure_9(closure_6, obj30);
            cResult[17] = tmp4.header;
            cResult[18] = tmp14;
            cResult[19] = tmp31;
            cResult[20] = tmp38;
            tmp35 = tmp38;
          }
          const obj53 = { children: null };
          const items8 = [tmp22, tmp25, tmp28];
          obj53.children = items8;
          const tmp34 = closure_9(closure_6, obj53);
          cResult[14] = tmp22;
          cResult[15] = tmp28;
          cResult[16] = tmp34;
          tmp31 = tmp34;
        }
        const obj54 = { source: tmp13, style: tmp4.image };
        const tmp17 = closure_8(guildId(6164), obj54);
        cResult[5] = tmp4.image;
        cResult[6] = tmp13;
        cResult[7] = tmp17;
        tmp14 = tmp17;
      }
      function handleShowAllPerks() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.openLazy(asyncRequireImpl(16797, dependencyMap.paths), "PurchaseCard:" + listingId, { listingId, guildId });
      }
      cResult[0] = guildId;
      cResult[1] = listingId;
      cResult[2] = handleShowAllPerks;
      tmp11 = handleShowAllPerks;
      const obj7 = listingId(16792);
    }
  : function GuildRoleSubscriptionPurchasePreviewCard(listingId) {
      listingId = listingId.listingId;
      const guildId = listingId.guildId;
      const tmp = closure_11();
      let str = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(listingId), 1)[0];
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(listingId, guildId),
        1,
      )[0];
      const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
      const first2 = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId),
        1,
      )[0];
      const first3 = first1[0];
      const first4 = first2[0];
      const size = first.size;
      const obj7 = { style: tmp.container, children: null };
      const obj8 = { style: tmp.header, children: null };
      const formattedSubscriptionPlan = listingId(16792).useFormattedSubscriptionPlan(listingId);
      const obj6 = listingId(16792);
      const tmp11 = guildId;
      if (str == null) {
        str = "";
      }
      const items = [
        closure_8(guildId(6164), { source: { uri: str }, style: tmp.image }),
        closure_8(listingId(1200).Spacer, { size: 16 }),
      ];
      const obj10 = { children: null };
      const items1 = [
        closure_8(listingId(5086).Text, {
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: _slicedToArray(obj2.useName(listingId), 1)[0],
        }),
        closure_8(listingId(1200).Spacer, { size: 4 }),
        closure_8(listingId(5086).Text, {
          variant: "heading-md/medium",
          color: "text-default",
          children: formattedSubscriptionPlan,
        }),
      ];
      obj10.children = items1;
      items[2] = closure_9(closure_6, obj10);
      obj8.children = items;
      const items2 = [
        closure_9(closure_6, obj8),
        closure_8(listingId(1200).Spacer, { size: 16 }),
        closure_8(tmp11(16798), { listingId }),
      ];
      let tmp8Result6 = length > 0 || size > 0 || length2 > 0;
      if (tmp8Result6) {
        const items3 = [closure_8(tmp4(1200).Spacer, { size: 24 }), ,];
        const obj11 = { style: tmp.contentContainer, children: null };
        const obj12 = {
          renderGap() {
            return closure_1_8(closure_1_13, {});
          },
          children: null,
        };
        let tmp8Result = null;
        if (size > 0) {
          const obj13 = { children: null };
          const obj14 = { title: null, count: null };
          const intl = tmp4(1126).intl;
          obj14.title = intl.string(tmp4(1126).t.ebOU2b);
          obj14.count = size;
          const items4 = [closure_8(closure_12, obj14), closure_8(tmp4(1200).Spacer, { size: 8 }), ,];
          const obj15 = { emojiIds: null, guildId: null, maxEmojis: 5 };
          const items5 = [];
          HermesBuiltin.arraySpread(first, 0);
          obj15.emojiIds = items5;
          obj15.guildId = guildId;
          items4[2] = closure_8(closure_14, obj15);
          items4[3] = closure_8(tmp4(1200).Spacer, { size: 4 });
          obj13.children = items4;
          tmp8Result = closure_9(closure_6, obj13);
        }
        const items6 = [tmp8Result, ,];
        let tmp8Result4 = null;
        if (null != first3) {
          const obj16 = { children: null };
          const obj17 = { title: null, count: null };
          const intl2 = tmp4(1126).intl;
          const obj18 = { numChannels: length };
          obj17.title = intl2.formatToPlainString(tmp4(1126).t.y7dUrm, obj18);
          obj17.count = length;
          const items7 = [closure_8(closure_12, obj17), closure_8(tmp4(1200).Spacer, { size: 12 }), ,];
          ({ ref_id: obj19.channelId, description: obj19.description } = first3);
          items7[2] = closure_8(closure_16, { channelId: null, description: null });
          items7[3] = closure_8(tmp4(1200).Spacer, { size: 6 });
          obj16.children = items7;
          tmp8Result4 = closure_9(closure_6, obj16);
          const obj20 = { channelId: null, description: null };
        }
        items6[1] = tmp8Result4;
        let tmp8Result5 = null;
        if (null != first4) {
          const obj21 = { children: null };
          const obj22 = { title: null, count: null };
          const intl3 = tmp4(1126).intl;
          const obj24 = { numBenefits: length2 };
          obj22.title = intl3.formatToPlainString(tmp4(1126).t.MR7oOF, obj24);
          obj22.count = length2;
          const items8 = [closure_8(closure_12, obj22), closure_8(tmp4(1200).Spacer, { size: 12 }), ,];
          ({ name: obj23.title, description: obj23.description } = first4);
          items8[2] = closure_8(closure_15, { title: null, description: null });
          items8[3] = closure_8(tmp4(1200).Spacer, { size: 6 });
          obj21.children = items8;
          tmp8Result5 = closure_9(closure_6, obj21);
          const obj25 = { title: null, description: null };
        }
        const obj44 = { children: null };
        items6[2] = tmp8Result5;
        obj12.children = items6;
        obj11.children = closure_9(tmp4(9493).GappedList, obj12);
        items3[1] = closure_8(closure_6, obj11);
        const obj45 = {
          onPress: function handleShowAllPerks() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.openLazy(asyncRequireImpl(16797, dependencyMap.paths), "PurchaseCard:" + listingId, {
              listingId,
              guildId,
            });
          },
        };
        items3[2] = closure_8(closure_17, obj45);
        obj44.children = items3;
        tmp8Result6 = closure_9(closure_10, obj44);
      }
      items2[3] = tmp8Result6;
      obj7.children = items2;
      return closure_9(closure_6, obj7);
    };
