// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BottomSheetModal from "../../../../../_runtime/06112_BottomSheetModal.js";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildRoleSubscriptionCard from "../components/listing_elements/GuildRoleSubscriptionCard.tsx";
import Elements from "Elements.tsx";
import SubscribeButtonDefault from "SubscribeButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  header: { padding: 16, paddingBottom: 24 },
  content: obj3,
  headerText: { flexDirection: "row", alignItems: "center" },
  headerDot: size,
  seperator: obj4,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = {
  width: 3,
  height: 3,
  borderRadius: 1.5,
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  marginHorizontal: 8,
};
obj4 = {
  borderBottomWidth: 1,
  marginLeft: -16,
  marginRight: -16,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
};
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildId;
      let items1;
      let items2;
      let items3;
      let items4;
      let listingId;
      let obj16;
      let tmp10;
      let tmp13;
      let tmp17;
      const obj = react2;
      const cResult = obj.c(46);
      ({ listingId, guildId } = arg0);
      const obj2 = useTypeConsolidationTextTransform;
      const typeConsolidationTextTransform = obj2.useTypeConsolidationTextTransform("PurchaseCard");
      const tmp5 = closure_8();
      const bottom = useSafeAreaInsetsDefault().bottom;
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj3.useDescription(listingId), 1)[0];
      const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first1 = _slicedToArray(obj4.useName(listingId), 1)[0];
      const obj5 = Elements;
      const formattedSubscriptionPlan = obj5.useFormattedSubscriptionPlan(listingId);
      const container = tmp5.container;
      if (cResult[0] !== first1) {
        const obj6 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: first1 };
        const tmp12 = metroRequire(Text_Text.Text, obj6);
        cResult[0] = first1;
        cResult[1] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== tmp5.headerDot) {
        const obj7 = { style: tmp5.headerDot };
        const tmp16 = metroRequire(View, obj7);
        cResult[2] = tmp5.headerDot;
        cResult[3] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] !== formattedSubscriptionPlan) {
        const obj8 = {
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: formattedSubscriptionPlan,
        };
        const tmp19 = metroRequire(Text_Text.Text, obj8);
        cResult[4] = formattedSubscriptionPlan;
        cResult[5] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[5];
      }
      if (cResult[6] === tmp5.headerText) {
        if (cResult[7] === tmp10) {
          if (cResult[8] === tmp13) {
            let tmp20;
            let tmp23;
            let tmp26;
            let tmp29;
            let tmp32;
            if (cResult[9] === tmp17) {
              tmp20 = cResult[10];
            }
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp25 = metroRequire(native.Spacer, { size: 16 });
              cResult[11] = tmp25;
              tmp23 = tmp25;
            } else {
              tmp23 = cResult[11];
            }
            if (cResult[12] !== first) {
              const obj9 = { variant: "text-sm/normal", color: "text-default", lineClamp: 2, children: first };
              const tmp28 = metroRequire(Elements.TruncatedText, obj9);
              cResult[12] = first;
              cResult[13] = tmp28;
              tmp26 = tmp28;
            } else {
              tmp26 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp31 = metroRequire(native.Spacer, { size: 24 });
              cResult[14] = tmp31;
              tmp29 = tmp31;
            } else {
              tmp29 = cResult[14];
            }
            if (cResult[15] !== listingId) {
              const obj10 = { listingId };
              const tmp34 = metroRequire(SubscribeButtonDefault, obj10);
              cResult[15] = listingId;
              cResult[16] = tmp34;
              tmp32 = tmp34;
            } else {
              tmp32 = cResult[16];
            }
            if (cResult[17] === tmp5.header) {
              if (cResult[18] === tmp20) {
                if (cResult[19] === tmp26) {
                  let tmp35;
                  let tmp39;
                  let tmp44;
                  let tmp45;
                  let tmp46;
                  let tmp47;
                  let tmp49;
                  let tmp52;
                  if (cResult[20] === tmp32) {
                    tmp35 = cResult[21];
                  }
                  if (cResult[22] !== tmp5.seperator) {
                    const obj11 = { style: tmp5.seperator };
                    const tmp42 = metroRequire(View, obj11);
                    cResult[22] = tmp5.seperator;
                    cResult[23] = tmp42;
                    tmp39 = tmp42;
                  } else {
                    tmp39 = cResult[23];
                  }
                  const sum = 16 + bottom;
                  const content = tmp5.content;
                  if (cResult[24] !== sum) {
                    const obj12 = { paddingBottom: sum };
                    cResult[24] = sum;
                    cResult[25] = obj12;
                    tmp44 = obj12;
                  } else {
                    tmp44 = cResult[25];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj13 = { textTransform: "uppercase" };
                    cResult[26] = obj13;
                    tmp45 = obj13;
                  } else {
                    tmp45 = cResult[26];
                  }
                  if (cResult[27] !== typeConsolidationTextTransform) {
                    const items = [tmp45, typeConsolidationTextTransform];
                    cResult[27] = typeConsolidationTextTransform;
                    cResult[28] = items;
                    tmp46 = items;
                  } else {
                    tmp46 = cResult[28];
                  }
                  const _Symbol4 = Symbol;
                  if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = intl2.intl;
                    const stringResult = intl.string(intl2.t.UdEvUi);
                    cResult[29] = stringResult;
                    tmp47 = stringResult;
                  } else {
                    tmp47 = cResult[29];
                  }
                  if (cResult[30] !== tmp46) {
                    const obj14 = { variant: "text-sm/bold", color: "text-default", style: tmp46, children: tmp47 };
                    const tmp51 = metroRequire(Text_Text.Text, obj14);
                    cResult[30] = tmp46;
                    cResult[31] = tmp51;
                    tmp49 = tmp51;
                  } else {
                    tmp49 = cResult[31];
                  }
                  const _Symbol5 = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp54 = metroRequire(native.Spacer, { size: 24 });
                    cResult[32] = tmp54;
                    tmp52 = tmp54;
                  } else {
                    tmp52 = cResult[32];
                  }
                  if (cResult[33] === guildId) {
                    let tmp55;
                    if (cResult[34] === listingId) {
                      tmp55 = cResult[35];
                    }
                    if (cResult[36] === tmp5.content) {
                      if (cResult[37] === tmp44) {
                        if (cResult[38] === tmp49) {
                          let tmp58;
                          if (cResult[39] === tmp55) {
                            tmp58 = cResult[40];
                          }
                          if (cResult[41] === tmp5.container) {
                            if (cResult[42] === tmp35) {
                              if (cResult[43] === tmp39) {
                                let tmp61;
                                if (cResult[44] === tmp58) {
                                  tmp61 = cResult[45];
                                }
                                return tmp61;
                              }
                            }
                          }
                          const obj15 = {
                            scrollable: true,
                            startExpanded: true,
                            children: metroImportDefault(View, obj16),
                          };
                          obj16 = { style: container, children: items1 };
                          items1 = [tmp35, tmp39, tmp58];
                          BottomSheet = Sheet_BottomSheet.BottomSheet;
                          const tmp65 = metroRequire(BottomSheet, obj15);
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
                      style: content,
                      contentContainerStyle: tmp44,
                      children: items2,
                    };
                    items2 = [tmp49, tmp52, tmp55];
                    const tmp60 = metroImportDefault(BottomSheetModal.BottomSheetScrollView, obj17);
                    cResult[36] = tmp5.content;
                    cResult[37] = tmp44;
                    cResult[38] = tmp49;
                    cResult[39] = tmp55;
                    cResult[40] = tmp60;
                    tmp58 = tmp60;
                  }
                  const obj18 = { listingId, guildId };
                  const tmp57 = metroRequire(GuildRoleSubscriptionCard.Content, obj18);
                  cResult[33] = guildId;
                  cResult[34] = listingId;
                  cResult[35] = tmp57;
                  tmp55 = tmp57;
                }
              }
            }
            const obj19 = { style: tmp5.header, children: items3 };
            items3 = [tmp20, tmp23, tmp26, tmp29, tmp32];
            const tmp38 = metroImportDefault(View, obj19);
            cResult[17] = tmp5.header;
            cResult[18] = tmp20;
            cResult[19] = tmp26;
            cResult[20] = tmp32;
            cResult[21] = tmp38;
            tmp35 = tmp38;
          }
        }
      }
      const obj20 = { style: tmp5.headerText, children: items4 };
      items4 = [tmp10, tmp13, tmp17];
      const tmp21 = metroImportDefault(View, obj20);
      cResult[6] = tmp5.headerText;
      cResult[7] = tmp10;
      cResult[8] = tmp13;
      cResult[9] = tmp17;
      cResult[10] = tmp21;
      tmp20 = tmp21;
    }
  : (listingId) => {
      let intl;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj12;
      let obj6;
      listingId = listingId.listingId;
      const guildId = listingId.guildId;
      const obj = useTypeConsolidationTextTransform;
      const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("PurchaseCard");
      const tmp2 = closure_8();
      const bottom = useSafeAreaInsetsDefault().bottom;
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj2.useDescription(listingId), 1)[0];
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first1 = _slicedToArray(obj3.useName(listingId), 1)[0];
      const obj4 = Elements;
      const formattedSubscriptionPlan = obj4.useFormattedSubscriptionPlan(listingId);
      const obj5 = { scrollable: true, startExpanded: true, children: metroImportDefault(View, obj6) };
      obj6 = { style: tmp2.container, children: items2 };
      const obj7 = { style: tmp2.header, children: items1 };
      const obj8 = { style: tmp2.headerText, children: items };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      items = [
        metroRequire(Text_Text.Text, {
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: first1,
        }),
        ,
      ];
      const obj9 = { style: tmp2.headerDot };
      items[1] = metroRequire(View, obj9);
      items[2] = metroRequire(Text_Text.Text, {
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: formattedSubscriptionPlan,
      });
      items1 = [
        metroImportDefault(View, obj8),
        metroRequire(native.Spacer, { size: 16 }),
        metroRequire(Elements.TruncatedText, {
          variant: "text-sm/normal",
          color: "text-default",
          lineClamp: 2,
          children: first,
        }),
        metroRequire(native.Spacer, { size: 24 }),
        metroRequire(SubscribeButtonDefault, { listingId }),
      ];
      items2 = [metroImportDefault(View, obj7), ,];
      const obj10 = { style: tmp2.seperator };
      items2[1] = metroRequire(View, obj10);
      const obj11 = { scrollsToTop: false, style: tmp2.content, contentContainerStyle: obj12, children: items4 };
      obj12 = { paddingBottom: 16 + bottom };
      const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
      const obj13 = {
        variant: "text-sm/bold",
        color: "text-default",
        style: items3,
        children: intl.string(intl2.t.UdEvUi),
      };
      items3 = [{ textTransform: "uppercase" }, typeConsolidationTextTransform];
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items4 = [
        metroRequire(Text, obj13),
        metroRequire(native.Spacer, { size: 24 }),
        metroRequire(GuildRoleSubscriptionCard.Content, { listingId, guildId }),
      ];
      items2[2] = metroImportDefault(BottomSheetScrollView, obj11);
      return metroRequire(BottomSheet, obj5);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx",
);

export default tmp5;
