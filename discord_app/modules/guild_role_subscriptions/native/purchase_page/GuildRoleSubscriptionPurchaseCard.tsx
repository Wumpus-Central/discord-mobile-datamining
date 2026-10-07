// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BottomSheetModal from "../../../../../_runtime/06119_BottomSheetModal.js";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildRoleSubscriptionCard from "../components/listing_elements/GuildRoleSubscriptionCard.tsx";
import Elements from "Elements.tsx";
import SubscribeButtonDefault from "SubscribeButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 },
  header: { padding: 16, paddingBottom: 24 },
  content: null,
  headerText: null,
  headerDot: null,
  seperator: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
obj2.content = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.headerText = { flexDirection: "row", alignItems: "center" };
let size = {
  width: 3,
  height: 3,
  borderRadius: 1.5,
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  marginHorizontal: 8,
};
obj2.headerDot = size;
let obj4 = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.seperator = {
  borderBottomWidth: 1,
  marginLeft: -16,
  marginRight: -16,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = {
  borderBottomWidth: 1,
  marginLeft: -16,
  marginRight: -16,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(46);
      ({ listingId, guildId } = arg0);
      const typeConsolidationTextTransform =
        useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("PurchaseCard");
      const tmp5 = closure_8();
      const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useDescription(listingId), 1)[0];
      const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(listingId), 1)[0];
      const formattedSubscriptionPlan = Elements.useFormattedSubscriptionPlan(listingId);
      if (cResult[0] !== first1) {
        const obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: first1 };
        const tmp12 = timestampProducer(Text_Text.Text, obj6);
        cResult[0] = first1;
        cResult[1] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== tmp5.headerDot) {
        const obj7 = { style: tmp5.headerDot };
        const tmp16 = timestampProducer(View, obj7);
        cResult[2] = tmp5.headerDot;
        cResult[3] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] !== formattedSubscriptionPlan) {
        const obj8 = {
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: formattedSubscriptionPlan,
        };
        const tmp19 = timestampProducer(Text_Text.Text, obj8);
        cResult[4] = formattedSubscriptionPlan;
        cResult[5] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[5];
      }
      if (cResult[6] === tmp5.headerText) {
        if (cResult[7] === tmp10) {
          if (cResult[8] === tmp13) {
            if (cResult[9] === tmp17) {
              let tmp20 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp25 = timestampProducer(native.Spacer, { size: 16 });
              cResult[11] = tmp25;
              let tmp23 = tmp25;
            } else {
              tmp23 = cResult[11];
            }
            if (cResult[12] !== first) {
              const obj9 = { variant: "text-sm/normal", color: "text-default", lineClamp: 2, children: first };
              const tmp28 = timestampProducer(Elements.TruncatedText, obj9);
              cResult[12] = first;
              cResult[13] = tmp28;
              let tmp26 = tmp28;
            } else {
              tmp26 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp31 = timestampProducer(native.Spacer, { size: 24 });
              cResult[14] = tmp31;
              let tmp29 = tmp31;
            } else {
              tmp29 = cResult[14];
            }
            if (cResult[15] !== listingId) {
              const obj10 = { listingId };
              const tmp34 = timestampProducer(SubscribeButtonDefault, obj10);
              cResult[15] = listingId;
              cResult[16] = tmp34;
              let tmp32 = tmp34;
            } else {
              tmp32 = cResult[16];
            }
            if (cResult[17] === tmp5.header) {
              if (cResult[18] === tmp20) {
                if (cResult[19] === tmp26) {
                  if (cResult[20] === tmp32) {
                    let tmp35 = cResult[21];
                  }
                  if (cResult[22] !== tmp5.seperator) {
                    const obj11 = { style: tmp5.seperator };
                    const tmp42 = timestampProducer(View, obj11);
                    cResult[22] = tmp5.seperator;
                    cResult[23] = tmp42;
                    let tmp39 = tmp42;
                  } else {
                    tmp39 = cResult[23];
                  }
                  const sum = 16 + useSafeAreaInsetsDefault().bottom;
                  if (cResult[24] !== sum) {
                    const obj12 = { paddingBottom: sum };
                    cResult[24] = sum;
                    cResult[25] = obj12;
                    let tmp44 = obj12;
                  } else {
                    tmp44 = cResult[25];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj13 = { textTransform: "uppercase" };
                    cResult[26] = obj13;
                    let tmp45 = obj13;
                  } else {
                    tmp45 = cResult[26];
                  }
                  if (cResult[27] !== typeConsolidationTextTransform) {
                    const items = [tmp45, typeConsolidationTextTransform];
                    cResult[27] = typeConsolidationTextTransform;
                    cResult[28] = items;
                    let tmp46 = items;
                  } else {
                    tmp46 = cResult[28];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = util.intl;
                    const stringResult = intl.string(util.t.UdEvUi);
                    cResult[29] = stringResult;
                    let tmp47 = stringResult;
                  } else {
                    tmp47 = cResult[29];
                  }
                  if (cResult[30] !== tmp46) {
                    const obj14 = { variant: "text-sm/bold", color: "text-default", style: tmp46, children: tmp47 };
                    const tmp51 = timestampProducer(Text_Text.Text, obj14);
                    cResult[30] = tmp46;
                    cResult[31] = tmp51;
                    let tmp49 = tmp51;
                  } else {
                    tmp49 = cResult[31];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp54 = timestampProducer(native.Spacer, { size: 24 });
                    cResult[32] = tmp54;
                    let tmp52 = tmp54;
                  } else {
                    tmp52 = cResult[32];
                  }
                  if (cResult[33] === guildId) {
                    if (cResult[34] === listingId) {
                      let tmp55 = cResult[35];
                    }
                    if (cResult[36] === tmp5.content) {
                      if (cResult[37] === tmp44) {
                        if (cResult[38] === tmp49) {
                          if (cResult[39] === tmp55) {
                            let tmp58 = cResult[40];
                          }
                          if (cResult[41] === tmp5.container) {
                            if (cResult[42] === tmp35) {
                              if (cResult[43] === tmp39) {
                                if (cResult[44] === tmp58) {
                                  let tmp61 = cResult[45];
                                }
                                return tmp61;
                              }
                            }
                          }
                          const obj15 = { scrollable: true, startExpanded: true, children: null };
                          const obj16 = { style: tmp5.container, children: null };
                          const items1 = [tmp35, tmp39, tmp58];
                          obj16.children = items1;
                          obj15.children = React5(View, obj16);
                          const tmp65 = timestampProducer(Sheet_BottomSheet.BottomSheet, obj15);
                          cResult[41] = tmp5.container;
                          cResult[42] = tmp35;
                          cResult[43] = tmp39;
                          cResult[44] = tmp58;
                          cResult[45] = tmp65;
                          tmp61 = tmp65;
                        }
                      }
                    }
                    const obj17 = {
                      scrollsToTop: false,
                      style: tmp5.content,
                      contentContainerStyle: tmp44,
                      children: null,
                    };
                    const items2 = [tmp49, tmp52, tmp55];
                    obj17.children = items2;
                    const tmp60 = React5(BottomSheetModal.BottomSheetScrollView, obj17);
                    cResult[36] = tmp5.content;
                    cResult[37] = tmp44;
                    cResult[38] = tmp49;
                    cResult[39] = tmp55;
                    cResult[40] = tmp60;
                    tmp58 = tmp60;
                  }
                  const obj18 = { listingId, guildId };
                  const tmp57 = timestampProducer(GuildRoleSubscriptionCard.Content, obj18);
                  cResult[33] = guildId;
                  cResult[34] = listingId;
                  cResult[35] = tmp57;
                  tmp55 = tmp57;
                }
              }
            }
            const obj19 = { style: tmp5.header, children: null };
            const items3 = [tmp20, tmp23, tmp26, tmp29, tmp32];
            obj19.children = items3;
            const tmp38 = React5(View, obj19);
            cResult[17] = tmp5.header;
            cResult[18] = tmp20;
            cResult[19] = tmp26;
            cResult[20] = tmp32;
            cResult[21] = tmp38;
            tmp35 = tmp38;
          }
        }
      }
      const obj20 = { style: tmp5.headerText, children: null };
      const items4 = [tmp10, tmp13, tmp17];
      obj20.children = items4;
      const tmp21 = React5(View, obj20);
      cResult[6] = tmp5.headerText;
      cResult[7] = tmp10;
      cResult[8] = tmp13;
      cResult[9] = tmp17;
      cResult[10] = tmp21;
      tmp20 = tmp21;
    }
  : (guildId) => {
      const listingId = guildId.listingId;
      const typeConsolidationTextTransform =
        useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("PurchaseCard");
      const tmp2 = closure_8();
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const formattedSubscriptionPlan = Elements.useFormattedSubscriptionPlan(listingId);
      const obj5 = { scrollable: true, startExpanded: true, children: null };
      const obj6 = { style: tmp2.container, children: null };
      const obj7 = { style: tmp2.header, children: null };
      const obj8 = { style: tmp2.headerText, children: null };
      const items = [
        timestampProducer(Text_Text.Text, {
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: _slicedToArray(obj3.useName(listingId), 1)[0],
        }),
        timestampProducer(View, { style: tmp2.headerDot }),
        timestampProducer(Text_Text.Text, {
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: formattedSubscriptionPlan,
        }),
      ];
      obj8.children = items;
      const items1 = [
        React5(View, obj8),
        timestampProducer(native.Spacer, { size: 16 }),
        timestampProducer(Elements.TruncatedText, {
          variant: "text-sm/normal",
          color: "text-default",
          lineClamp: 2,
          children: _slicedToArray(obj2.useDescription(listingId), 1)[0],
        }),
        timestampProducer(native.Spacer, { size: 24 }),
        timestampProducer(SubscribeButtonDefault, { listingId }),
      ];
      obj7.children = items1;
      const items2 = [React5(View, obj7), timestampProducer(View, { style: tmp2.seperator })];
      const obj11 = { scrollsToTop: false, style: tmp2.content, contentContainerStyle: null, children: null };
      const obj10 = { style: tmp2.seperator };
      const obj9 = { style: tmp2.headerDot };
      obj11.contentContainerStyle = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
      const obj13 = { variant: "text-sm/bold", color: "text-default", style: null, children: null };
      const items3 = [{ textTransform: "uppercase" }, typeConsolidationTextTransform];
      obj13.style = items3;
      const intl = util.intl;
      obj13.children = intl.string(util.t.UdEvUi);
      const items4 = [
        timestampProducer(Text_Text.Text, obj13),
        timestampProducer(native.Spacer, { size: 24 }),
        timestampProducer(GuildRoleSubscriptionCard.Content, { listingId, guildId: guildId.guildId }),
      ];
      obj11.children = items4;
      items2[2] = React5(BottomSheetModal.BottomSheetScrollView, obj11);
      obj6.children = items2;
      obj5.children = React5(View, obj6);
      return timestampProducer(Sheet_BottomSheet.BottomSheet, obj5);
    };
