// === Module 15237: GuildRoleSubscriptionCard ===

// Module 15237 (GuildRoleSubscriptionCard)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import GuildRoleSubscriptionEmojiGalleryDefault from "GuildRoleSubscriptionEmojiGallery" /* 15239 */;
import GuildRoleSubscriptionBenefitRow from "GuildRoleSubscriptionBenefitRow" /* 15242 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx");

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
    children: null
  };
  obj = { children: null };
  obj1 = { children: null };
  const intl = guildId(1114).intl;
  obj1.children = intl.string(guildId(1114).t["DJ+bGu"]);
  const items = [closure_6(SectionTitle, obj1), closure_6(guildId(1178).Spacer, { size: 8 }), closure_6(guildId(15238).GuildRoleSubscriptionMemberPreview, { guildId, role })];
  obj.children = items;
  const items1 = [closure_8(closure_7, obj), , , ];
  let tmp4Result = null;
  if (first.size > 0) {
    obj2 = { children: null };
    obj3 = { children: null };
    const intl2 = guildId(1114).intl;
    const obj4 = { numEmojis: first.size };
    obj3.children = intl2.format(guildId(1114).t.oDeFmv, obj4);
    const items2 = [closure_6(SectionTitle, obj3), closure_6(guildId(1178).Spacer, { size: 14 }), ];
    const obj5 = { emojiIds: null, guildId: null };
    const items3 = [];
    HermesBuiltin.arraySpread(first, 0);
    obj5.emojiIds = items3;
    obj5.guildId = guildId;
    items2[2] = closure_6(GuildRoleSubscriptionEmojiGalleryDefault, obj5);
    obj2.children = items2;
    tmp4Result = closure_8(closure_7, obj2);
  }
  items1[1] = tmp4Result;
  tmp4Result = null;
  if (first1.length > 0) {
    const obj6 = { children: null };
    const obj7 = { children: null };
    const intl3 = guildId(1114).intl;
    const obj8 = { numChannels: length };
    obj7.children = intl3.format(guildId(1114).t.l40GUu, obj8);
    const items4 = [closure_6(SectionTitle, obj7), closure_6(guildId(1178).Spacer, { size: 14 }), ];
    const obj9 = { gap: 14, children: first1.map((benefit) => timestampProducer(GuildRoleSubscriptionBenefitRow.ChannelBenefitRow, { benefit, guildId }, benefit.ref_id)) };
    items4[2] = closure_6(guildId(10346).GappedList, obj9);
    obj6.children = items4;
    tmp4Result = closure_8(closure_7, obj6);
  }
  items1[2] = tmp4Result;
  let tmp4Result1 = null;
  if (first2.length > 0) {
    const obj10 = { children: null };
    const obj11 = { children: null };
    const intl4 = guildId(1114).intl;
    const obj12 = { numIntangibles: length2 };
    obj11.children = intl4.format(guildId(1114).t["4V/Mfi"], obj12);
    const items5 = [closure_6(SectionTitle, obj11), closure_6(guildId(1178).Spacer, { size: 14 }), ];
    const obj13 = { gap: 14, children: first2.map((benefit, index) => timestampProducer(GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow, { benefit, guildId }, index)) };
    items5[2] = closure_6(guildId(10346).GappedList, obj13);
    obj10.children = items5;
    tmp4Result1 = closure_8(closure_7, obj10);
  }
  items1[3] = tmp4Result1;
  obj.children = items1;
  return closure_8(guildId(10346).GappedList, obj);
};