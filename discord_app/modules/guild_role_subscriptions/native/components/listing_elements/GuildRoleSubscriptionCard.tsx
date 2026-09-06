// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildRoleSubscriptionEmojiGalleryDefault from "GuildRoleSubscriptionEmojiGallery.tsx";
import GuildRoleSubscriptionBenefitRow from "GuildRoleSubscriptionBenefitRow.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
class SectionTitle {
  constructor(arg0) {
    tmp = closure_9();
    obj = { variant: "text-xs/bold", color: "text-default", style: tmp.sectionTitle, children: global.children };
    return jsx(closure_0(closure_3[6]).Text, obj);
  }
}
class Separator {
  constructor() {
    obj = { style: closure_9().separator };
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
const createStyles = { sectionTitle: { textTransform: "uppercase" }, separator: null };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
createStyles.separator = size;
const React7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx",
);

export { SectionTitle };
export { Separator };
export const Content = function Content(arg0) {
  ({ listingId, guildId } = arg0);
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useTierEmojiIds(listingId, guildId), 1)[0];
  let obj1 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj1.useChannelBenefits(listingId), 1)[0];
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj2.useIntangibleBenefits(listingId), 1)[0];
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const role = obj3.useRole(listingId, guildId);
  obj = {
    renderGap() {
      return closure_1_6(Separator, {});
    },
    children: null,
  };
  obj = { children: null };
  obj1 = { children: null };
  const intl = guildId(1114).intl;
  obj1.children = intl.string(guildId(1114).t["DJ+bGu"]);
  const items = [
    closure_6(SectionTitle, obj1),
    closure_6(guildId(1178).Spacer, { size: 8 }),
    closure_6(guildId(15238).GuildRoleSubscriptionMemberPreview, { guildId, role }),
  ];
  obj.children = items;
  const items1 = [closure_8(closure_7, obj), , ,];
  let tmp4Result = null;
  if (first.size > 0) {
    obj2 = { children: null };
    obj3 = { children: null };
    const intl2 = tmp5(1114).intl;
    const obj4 = { numEmojis: first.size };
    obj3.children = intl2.format(tmp5(1114).t.oDeFmv, obj4);
    const items2 = [tmp7(tmp8, obj3), tmp7(tmp5(1178).Spacer, { size: 14 })];
    const obj5 = { emojiIds: null, guildId: null };
    const items3 = [];
    HermesBuiltin.arraySpread(first, 0);
    obj5.emojiIds = items3;
    obj5.guildId = guildId;
    items2[2] = tmp7(GuildRoleSubscriptionEmojiGalleryDefault, obj5);
    obj2.children = items2;
    tmp4Result = tmp4(tmp6, obj2);
  }
  items1[1] = tmp4Result;
  tmp4Result = null;
  if (first1.length > 0) {
    const obj6 = { children: null };
    const obj7 = { children: null };
    const intl3 = tmp5(1114).intl;
    const obj8 = { numChannels: length };
    obj7.children = intl3.format(tmp5(1114).t.l40GUu, obj8);
    const items4 = [tmp7(tmp8, obj7), tmp7(tmp5(1178).Spacer, { size: 14 })];
    const obj9 = {
      gap: 14,
      children: first1.map((benefit) =>
        timestampProducer(GuildRoleSubscriptionBenefitRow.ChannelBenefitRow, { benefit, guildId }, benefit.ref_id),
      ),
    };
    items4[2] = tmp7(tmp5(10346).GappedList, obj9);
    obj6.children = items4;
    tmp4Result = tmp4(tmp6, obj6);
  }
  items1[2] = tmp4Result;
  let tmp4Result1 = null;
  if (first2.length > 0) {
    const obj10 = { children: null };
    const obj11 = { children: null };
    const intl4 = tmp5(1114).intl;
    const obj12 = { numIntangibles: length2 };
    obj11.children = intl4.format(tmp5(1114).t["4V/Mfi"], obj12);
    const items5 = [tmp7(tmp8, obj11), tmp7(tmp5(1178).Spacer, { size: 14 })];
    const obj13 = {
      gap: 14,
      children: first2.map((benefit, index) =>
        timestampProducer(GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow, { benefit, guildId }, index),
      ),
    };
    items5[2] = tmp7(tmp5(10346).GappedList, obj13);
    obj10.children = items5;
    tmp4Result1 = tmp4(tmp6, obj10);
  }
  items1[3] = tmp4Result1;
  obj.children = items1;
  return closure_8(guildId(10346).GappedList, obj);
};
