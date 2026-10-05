// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useTypeConsolidationTextTransform from "../../../../design/useTypeConsolidationTextTransform.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildRoleSubscriptionEmojiGalleryDefault from "GuildRoleSubscriptionEmojiGallery.tsx";
import GuildRoleSubscriptionBenefitRow from "GuildRoleSubscriptionBenefitRow.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let children;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
const View = react_native.View;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { sectionTitle: { textTransform: "uppercase" }, separator: size };
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(7);
      children = children.children;
      const tmp4 = closure_9();
      const obj2 = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("GuildRoleSubscriptionCard", "text-xs/bold");
      if (cResult[0] === typeConsolidationEyebrow.style) {
        let tmp6;
        if (cResult[1] === tmp4.sectionTitle) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === typeConsolidationEyebrow.variant) {
            let tmp7;
            if (cResult[5] === tmp6) {
              tmp7 = cResult[6];
            }
            return tmp7;
          }
        }
        const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: tmp6, children };
        const tmp9 = metroRequire(Text_Text.Text, obj3);
        cResult[3] = children;
        cResult[4] = typeConsolidationEyebrow.variant;
        cResult[5] = tmp6;
        cResult[6] = tmp9;
        tmp7 = tmp9;
      }
      const items = [tmp4.sectionTitle, typeConsolidationEyebrow.style];
      cResult[0] = typeConsolidationEyebrow.style;
      cResult[1] = tmp4.sectionTitle;
      cResult[2] = items;
      tmp6 = items;
    }
  : (children) => {
      let items;
      children = children.children;
      const tmp = closure_9();
      const obj = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("GuildRoleSubscriptionCard", "text-xs/bold");
      const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: items, children };
      items = [tmp.sectionTitle, typeConsolidationEyebrow.style];
      return metroRequire(Text_Text.Text, obj2);
    };
let closure_10 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_9();
      if (cResult[0] !== tmp2.separator) {
        const obj2 = { style: tmp2.separator };
        const tmp6 = metroRequire(View, obj2);
        cResult[0] = tmp2.separator;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_9().separator };
      return metroRequire(View, obj);
    };
let closure_11 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first3;
      let guildId;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let listingId;
      let obj10;
      let obj14;
      let obj18;
      let tmp8;
      let tmp9;
      let obj = guildId(576);
      const cResult = obj.c(23);
      ({ listingId, guildId } = arg0);
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj2.useTierEmojiIds(listingId, guildId), 1)[0];
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first1 = _slicedToArray(obj3.useChannelBenefits(listingId), 1)[0];
      const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first2 = _slicedToArray(obj4.useIntangibleBenefits(listingId), 1)[0];
      const obj5 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const role = obj5.useRole(listingId, guildId);
      size = first.size;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          return closure_1_6(closure_1_11, {});
        };
        cResult[0] = fn;
        first3 = fn;
      } else {
        first3 = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { children: intl.string(guildId(1126).t["DJ+bGu"]) };
        intl = guildId(1126).intl;
        const tmp12 = closure_6(closure_10, obj6);
        const tmp13 = closure_6(guildId(1188).Spacer, { size: 8 });
        cResult[1] = tmp12;
        cResult[2] = tmp13;
        tmp9 = tmp13;
        tmp8 = tmp12;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      if (cResult[3] === guildId) {
        let tmp14;
        if (cResult[4] === role) {
          tmp14 = cResult[5];
        }
        if (cResult[6] === first) {
          if (cResult[7] === guildId) {
            let tmp16;
            if (cResult[8] === size) {
              tmp16 = cResult[9];
            }
            if (cResult[10] === first1) {
              if (cResult[11] === guildId) {
                let tmp27;
                if (cResult[12] === first1.length) {
                  tmp27 = cResult[13];
                }
                if (cResult[14] === guildId) {
                  if (cResult[15] === first2) {
                    let tmp33;
                    if (cResult[16] === first2.length) {
                      tmp33 = cResult[17];
                    }
                    if (cResult[18] === tmp14) {
                      if (cResult[19] === tmp16) {
                        if (cResult[20] === tmp27) {
                          let tmp39;
                          if (cResult[21] === tmp33) {
                            tmp39 = cResult[22];
                          }
                          return tmp39;
                        }
                      }
                    }
                    const obj7 = { renderGap: first3, children: items };
                    items = [tmp14, tmp16, tmp27, tmp33];
                    const tmp41 = closure_8(guildId(9953).GappedList, obj7);
                    cResult[18] = tmp14;
                    cResult[19] = tmp16;
                    cResult[20] = tmp27;
                    cResult[21] = tmp33;
                    cResult[22] = tmp41;
                    tmp39 = tmp41;
                  }
                }
                let tmp34 = null;
                if (first2.length > 0) {
                  const obj8 = { children: items1 };
                  const obj9 = { children: intl4.format(guildId(1126).t["4V/Mfi"], obj10) };
                  intl4 = guildId(1126).intl;
                  obj10 = { numIntangibles: first2.length };
                  items1 = [closure_6(closure_10, obj9), closure_6(guildId(1188).Spacer, { size: 14 })];
                  const obj11 = {
                    gap: 14,
                    children: first2.map((benefit, index) => {
                      const obj = { benefit, guildId };
                      return metroRequire(GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow, obj, index);
                    }),
                  };
                  const GappedList2 = guildId(9953).GappedList;
                  items1[2] = closure_6(GappedList2, obj11);
                  tmp34 = closure_8(closure_7, obj8);
                }
                cResult[14] = guildId;
                cResult[15] = first2;
                cResult[16] = first2.length;
                cResult[17] = tmp34;
                tmp33 = tmp34;
              }
            }
            let tmp28 = null;
            if (first1.length > 0) {
              const obj12 = { children: items2 };
              const obj13 = { children: intl3.format(guildId(1126).t.l40GUu, obj14) };
              intl3 = guildId(1126).intl;
              obj14 = { numChannels: first1.length };
              items2 = [closure_6(closure_10, obj13), closure_6(guildId(1188).Spacer, { size: 14 })];
              const obj15 = {
                gap: 14,
                children: first1.map((benefit) => {
                  const obj = { benefit, guildId };
                  return metroRequire(GuildRoleSubscriptionBenefitRow.ChannelBenefitRow, obj, benefit.ref_id);
                }),
              };
              const GappedList = guildId(9953).GappedList;
              items2[2] = closure_6(GappedList, obj15);
              tmp28 = closure_8(closure_7, obj12);
            }
            cResult[10] = first1;
            cResult[11] = guildId;
            cResult[12] = first1.length;
            cResult[13] = tmp28;
            tmp27 = tmp28;
          }
        }
        let tmp17 = null;
        if (size > 0) {
          const obj16 = { children: items3 };
          const obj17 = { children: intl2.format(guildId(1126).t.oDeFmv, obj18) };
          intl2 = guildId(1126).intl;
          obj18 = { numEmojis: first.size };
          items3 = [closure_6(closure_10, obj17), closure_6(guildId(1188).Spacer, { size: 14 })];
          const obj19 = { emojiIds: items4, guildId };
          items4 = [];
          const tmp23 = GuildRoleSubscriptionEmojiGalleryDefault;
          HermesBuiltin.arraySpread(items4, first, 0);
          items3[2] = closure_6(tmp23, obj19);
          tmp17 = closure_8(closure_7, obj16);
        }
        cResult[6] = first;
        cResult[7] = guildId;
        cResult[8] = size;
        cResult[9] = tmp17;
        tmp16 = tmp17;
      }
      const obj20 = { children: items5 };
      items5 = [tmp8, tmp9, closure_6(guildId(15056).GuildRoleSubscriptionMemberPreview, { guildId, role })];
      const tmp15 = closure_8(closure_7, obj20);
      cResult[3] = guildId;
      cResult[4] = role;
      cResult[5] = tmp15;
      tmp14 = tmp15;
    }
  : (arg0) => {
      let guildId;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let listingId;
      let obj10;
      let obj14;
      let obj18;
      ({ listingId, guildId } = arg0);
      let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(obj.useTierEmojiIds(listingId, guildId), 1)[0];
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first1 = _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0];
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first2 = _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0];
      const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const role = obj4.useRole(listingId, guildId);
      size = first.size;
      const obj5 = {
        renderGap() {
          return closure_1_6(closure_1_11, {});
        },
        children: items1,
      };
      const obj6 = { children: items };
      const obj7 = { children: intl.string(guildId(1126).t["DJ+bGu"]) };
      const GappedList = guildId(9953).GappedList;
      intl = guildId(1126).intl;
      items = [
        closure_6(closure_10, obj7),
        closure_6(guildId(1188).Spacer, { size: 8 }),
        closure_6(guildId(15056).GuildRoleSubscriptionMemberPreview, { guildId, role }),
      ];
      items1 = [closure_8(closure_7, obj6), , ,];
      let tmp5Result = null;
      if (size > 0) {
        const obj8 = { children: items2 };
        const obj9 = { children: intl2.format(guildId(1126).t.oDeFmv, obj10) };
        intl2 = guildId(1126).intl;
        obj10 = { numEmojis: first.size };
        items2 = [closure_6(closure_10, obj9), closure_6(guildId(1188).Spacer, { size: 14 })];
        const obj11 = { emojiIds: items3, guildId };
        items3 = [];
        const tmp12 = GuildRoleSubscriptionEmojiGalleryDefault;
        HermesBuiltin.arraySpread(items3, first, 0);
        items2[2] = closure_6(tmp12, obj11);
        tmp5Result = closure_8(closure_7, obj8);
      }
      items1[1] = tmp5Result;
      let tmp5Result3 = null;
      if (first1.length > 0) {
        const obj12 = { children: items4 };
        const obj13 = { children: intl3.format(guildId(1126).t.l40GUu, obj14) };
        intl3 = guildId(1126).intl;
        obj14 = { numChannels: first1.length };
        items4 = [closure_6(closure_10, obj13), closure_6(guildId(1188).Spacer, { size: 14 })];
        const obj15 = {
          gap: 14,
          children: first1.map((benefit) => {
            const obj = { benefit, guildId };
            return metroRequire(GuildRoleSubscriptionBenefitRow.ChannelBenefitRow, obj, benefit.ref_id);
          }),
        };
        const GappedList2 = guildId(9953).GappedList;
        items4[2] = closure_6(GappedList2, obj15);
        tmp5Result3 = closure_8(closure_7, obj12);
      }
      items1[2] = tmp5Result3;
      let tmp5Result4 = null;
      if (first2.length > 0) {
        const obj16 = { children: items5 };
        const obj17 = { children: intl4.format(guildId(1126).t["4V/Mfi"], obj18) };
        intl4 = guildId(1126).intl;
        obj18 = { numIntangibles: first2.length };
        items5 = [closure_6(closure_10, obj17), closure_6(guildId(1188).Spacer, { size: 14 })];
        const obj19 = {
          gap: 14,
          children: first2.map((benefit, index) => {
            const obj = { benefit, guildId };
            return metroRequire(GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow, obj, index);
          }),
        };
        const GappedList3 = guildId(9953).GappedList;
        items5[2] = closure_6(GappedList3, obj19);
        tmp5Result4 = closure_8(closure_7, obj16);
      }
      items1[3] = tmp5Result4;
      return closure_8(GappedList, obj5);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx",
);

export const SectionTitle = tmp4;
export const Separator = tmp5;
export const Content = tmp6;
