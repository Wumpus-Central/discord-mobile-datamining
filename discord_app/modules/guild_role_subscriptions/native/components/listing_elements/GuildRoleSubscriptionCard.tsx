// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useTypeConsolidationTextTransform from "../../../../design/useTypeConsolidationTextTransform.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildRoleSubscriptionEmojiGalleryDefault from "GuildRoleSubscriptionEmojiGallery.tsx";
import GuildRoleSubscriptionBenefitRow from "GuildRoleSubscriptionBenefitRow.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { sectionTitle: { textTransform: "uppercase" }, separator: null };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
obj2.separator = size;
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SectionTitle(children) {
      const cResult = c.c(7);
      children = children.children;
      const tmp4 = closure_9();
      const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
        "GuildRoleSubscriptionCard",
        "text-xs/bold",
      );
      if (cResult[0] === typeConsolidationEyebrow.style) {
        if (cResult[1] === tmp4.sectionTitle) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === typeConsolidationEyebrow.variant) {
            if (cResult[5] === tmp6) {
              let tmp7 = cResult[6];
            }
            return tmp7;
          }
        }
        const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: tmp6, children };
        const tmp9 = timestampProducer(Text_Text.Text, obj3);
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
  : function SectionTitle(children) {
      const tmp = closure_9();
      const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
        "GuildRoleSubscriptionCard",
        "text-xs/bold",
      );
      const obj2 = {
        variant: typeConsolidationEyebrow.variant,
        color: "text-default",
        style: null,
        children: children.children,
      };
      const items = [tmp.sectionTitle, typeConsolidationEyebrow.style];
      obj2.style = items;
      return timestampProducer(Text_Text.Text, obj2);
    };
let closure_10 = tmp4;
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Separator() {
      const cResult = c.c(2);
      const tmp2 = closure_9();
      if (cResult[0] !== tmp2.separator) {
        const obj2 = { style: tmp2.separator };
        const tmp6 = timestampProducer(View, obj2);
        cResult[0] = tmp2.separator;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function Separator() {
      return timestampProducer(View, { style: closure_9().separator });
    };
let closure_11 = tmp5;
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx",
);

export const SectionTitle = tmp4;
export const Separator = tmp5;
export const Content = ReactCompilerGating.isReactCompilerEnabled()
  ? function Content(arg0) {
      const cResult = guildId(576).c(23);
      ({ listingId, guildId } = arg0);
      const obj = guildId(576);
      const first = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(listingId, guildId),
        1,
      )[0];
      const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
      const first2 = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId),
        1,
      )[0];
      const role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(listingId, guildId);
      const size = first.size;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          return closure_1_6(closure_1_11, {});
        };
        cResult[0] = fn;
        let first3 = fn;
      } else {
        first3 = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { children: null };
        const intl = guildId(1126).intl;
        obj6.children = intl.string(guildId(1126).t["DJ+bGu"]);
        const tmp11 = closure_6(closure_10, obj6);
        const tmp12 = closure_6(guildId(1200).Spacer, { size: 8 });
        cResult[1] = tmp11;
        cResult[2] = tmp12;
        let tmp8 = tmp12;
        let tmp7 = tmp11;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      if (cResult[3] === guildId) {
        if (cResult[4] === role) {
          let tmp13 = cResult[5];
        }
        if (cResult[6] === first) {
          if (cResult[7] === guildId) {
            if (cResult[8] === size) {
              let tmp15 = cResult[9];
            }
            if (cResult[10] === first1) {
              if (cResult[11] === guildId) {
                if (cResult[12] === length) {
                  let tmp26 = cResult[13];
                }
                if (cResult[14] === guildId) {
                  if (cResult[15] === first2) {
                    if (cResult[16] === length2) {
                      let tmp32 = cResult[17];
                    }
                    if (cResult[18] === tmp13) {
                      if (cResult[19] === tmp15) {
                        if (cResult[20] === tmp26) {
                          if (cResult[21] === tmp32) {
                            let tmp38 = cResult[22];
                          }
                          return tmp38;
                        }
                      }
                    }
                    const obj7 = { renderGap: first3, children: null };
                    const items = [tmp13, tmp15, tmp26, tmp32];
                    obj7.children = items;
                    const tmp40 = closure_8(guildId(9531).GappedList, obj7);
                    cResult[18] = tmp13;
                    cResult[19] = tmp15;
                    cResult[20] = tmp26;
                    cResult[21] = tmp32;
                    cResult[22] = tmp40;
                    tmp38 = tmp40;
                  }
                }
                let tmp33 = null;
                if (length2 > 0) {
                  const obj8 = { children: null };
                  const obj9 = { children: null };
                  const intl4 = guildId(1126).intl;
                  const obj10 = { numIntangibles: length2 };
                  obj9.children = intl4.format(guildId(1126).t["4V/Mfi"], obj10);
                  const items1 = [closure_6(closure_10, obj9), closure_6(guildId(1200).Spacer, { size: 14 })];
                  const obj11 = {
                    gap: 14,
                    children: first2.map((benefit, index) =>
                      timestampProducer(
                        GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow,
                        { benefit, guildId },
                        index,
                      ),
                    ),
                  };
                  items1[2] = closure_6(guildId(9531).GappedList, obj11);
                  obj8.children = items1;
                  tmp33 = closure_8(closure_7, obj8);
                }
                cResult[14] = guildId;
                cResult[15] = first2;
                cResult[16] = length2;
                cResult[17] = tmp33;
                tmp32 = tmp33;
              }
            }
            let tmp27 = null;
            if (length > 0) {
              const obj12 = { children: null };
              const obj13 = { children: null };
              const intl3 = guildId(1126).intl;
              const obj14 = { numChannels: length };
              obj13.children = intl3.format(guildId(1126).t.l40GUu, obj14);
              const items2 = [closure_6(closure_10, obj13), closure_6(guildId(1200).Spacer, { size: 14 })];
              const obj15 = {
                gap: 14,
                children: first1.map((benefit) =>
                  timestampProducer(
                    GuildRoleSubscriptionBenefitRow.ChannelBenefitRow,
                    { benefit, guildId },
                    benefit.ref_id,
                  ),
                ),
              };
              items2[2] = closure_6(guildId(9531).GappedList, obj15);
              obj12.children = items2;
              tmp27 = closure_8(closure_7, obj12);
            }
            cResult[10] = first1;
            cResult[11] = guildId;
            cResult[12] = length;
            cResult[13] = tmp27;
            tmp26 = tmp27;
          }
        }
        let tmp16 = null;
        if (size > 0) {
          const obj16 = { children: null };
          const obj17 = { children: null };
          const intl2 = guildId(1126).intl;
          const obj18 = { numEmojis: first.size };
          obj17.children = intl2.format(guildId(1126).t.oDeFmv, obj18);
          const items3 = [closure_6(closure_10, obj17), closure_6(guildId(1200).Spacer, { size: 14 })];
          const obj19 = { emojiIds: null, guildId: null };
          const items4 = [];
          HermesBuiltin.arraySpread(first, 0);
          obj19.emojiIds = items4;
          obj19.guildId = guildId;
          items3[2] = closure_6(GuildRoleSubscriptionEmojiGalleryDefault, obj19);
          obj16.children = items3;
          tmp16 = closure_8(closure_7, obj16);
        }
        cResult[6] = first;
        cResult[7] = guildId;
        cResult[8] = size;
        cResult[9] = tmp16;
        tmp15 = tmp16;
      }
      const obj20 = { children: null };
      const items5 = [tmp7, tmp8, closure_6(guildId(15446).GuildRoleSubscriptionMemberPreview, { guildId, role })];
      obj20.children = items5;
      const tmp14 = closure_8(closure_7, obj20);
      cResult[3] = guildId;
      cResult[4] = role;
      cResult[5] = tmp14;
      tmp13 = tmp14;
    }
  : function Content(arg0) {
      ({ listingId, guildId } = arg0);
      const first = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(listingId, guildId),
        1,
      )[0];
      const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
      const first2 = _slicedToArray(
        GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId),
        1,
      )[0];
      const role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(listingId, guildId);
      const obj5 = {
        renderGap() {
          return closure_1_6(closure_1_11, {});
        },
        children: null,
      };
      const obj6 = { children: null };
      const obj7 = { children: null };
      const intl = guildId(1126).intl;
      obj7.children = intl.string(guildId(1126).t["DJ+bGu"]);
      const items = [
        closure_6(closure_10, obj7),
        closure_6(guildId(1200).Spacer, { size: 8 }),
        closure_6(guildId(15446).GuildRoleSubscriptionMemberPreview, { guildId, role }),
      ];
      obj6.children = items;
      const items1 = [closure_8(closure_7, obj6), , ,];
      let tmp4Result = null;
      if (first.size > 0) {
        const obj8 = { children: null };
        const obj9 = { children: null };
        const intl2 = guildId(1126).intl;
        const obj10 = { numEmojis: first.size };
        obj9.children = intl2.format(guildId(1126).t.oDeFmv, obj10);
        const items2 = [closure_6(closure_10, obj9), closure_6(guildId(1200).Spacer, { size: 14 })];
        const obj11 = { emojiIds: null, guildId: null };
        const items3 = [];
        HermesBuiltin.arraySpread(first, 0);
        obj11.emojiIds = items3;
        obj11.guildId = guildId;
        items2[2] = closure_6(GuildRoleSubscriptionEmojiGalleryDefault, obj11);
        obj8.children = items2;
        tmp4Result = closure_8(closure_7, obj8);
      }
      items1[1] = tmp4Result;
      let tmp4Result3 = null;
      if (first1.length > 0) {
        const obj12 = { children: null };
        const obj13 = { children: null };
        const intl3 = guildId(1126).intl;
        const obj14 = { numChannels: length };
        obj13.children = intl3.format(guildId(1126).t.l40GUu, obj14);
        const items4 = [closure_6(closure_10, obj13), closure_6(guildId(1200).Spacer, { size: 14 })];
        const obj15 = {
          gap: 14,
          children: first1.map((benefit) =>
            timestampProducer(GuildRoleSubscriptionBenefitRow.ChannelBenefitRow, { benefit, guildId }, benefit.ref_id),
          ),
        };
        items4[2] = closure_6(guildId(9531).GappedList, obj15);
        obj12.children = items4;
        tmp4Result3 = closure_8(closure_7, obj12);
      }
      items1[2] = tmp4Result3;
      let tmp4Result4 = null;
      if (first2.length > 0) {
        const obj16 = { children: null };
        const obj17 = { children: null };
        const intl4 = guildId(1126).intl;
        const obj18 = { numIntangibles: length2 };
        obj17.children = intl4.format(guildId(1126).t["4V/Mfi"], obj18);
        const items5 = [closure_6(closure_10, obj17), closure_6(guildId(1200).Spacer, { size: 14 })];
        const obj19 = {
          gap: 14,
          children: first2.map((benefit, index) =>
            timestampProducer(GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow, { benefit, guildId }, index),
          ),
        };
        items5[2] = closure_6(guildId(9531).GappedList, obj19);
        obj16.children = items5;
        tmp4Result4 = closure_8(closure_7, obj16);
      }
      items1[3] = tmp4Result4;
      obj5.children = items1;
      return closure_8(guildId(9531).GappedList, obj5);
    };
