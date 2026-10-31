// === Module 17213: GuildRoleSubscriptionCard ===

// Module 17213 (GuildRoleSubscriptionCard)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7148 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import GuildRoleSubscriptionEmojiGalleryDefault from "GuildRoleSubscriptionEmojiGallery" /* 17216 */;
import GuildRoleSubscriptionBenefitRow from "GuildRoleSubscriptionBenefitRow" /* 17219 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class SectionTitle {
  constructor(arg0) {
    tmp = closure_9();
    obj = closure_0(closure_3[6]);
    typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("GuildRoleSubscriptionCard", "text-xs/bold");
    obj1 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: global.children };
    items = [, ];
    items[0] = tmp.sectionTitle;
    items[1] = typeConsolidationEyebrow.style;
    obj1.style = items;
    return jsx(closure_0(closure_3[7]).Text, obj1);
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
const createStyles = fn(5014);
let obj2 = { sectionTitle: { textTransform: "uppercase" }, section: { gap: 14 }, separator: null };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: nativeDefault.space.PX_24 };
obj2.separator = size;
const React7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx");

export { SectionTitle };
export { Separator };
export function Content(arg0) {
  ({ listingId, guildId } = arg0);
  const tmp = closure_9();
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(listingId, guildId), 1)[0];
  const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
  const first2 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId), 1)[0];
  const role = GuildRoleSubscriptionListingEditStateUtilsAll.useRole(listingId, guildId);
  const obj5 = { separator: closure_6(Separator, {}), children: null };
  const obj6 = { children: null };
  const obj7 = { children: null };
  const intl = guildId(1113).intl;
  obj7.children = intl.string(guildId(1113).t["DJ+bGu"]);
  const items = [closure_6(SectionTitle, obj7), closure_6(guildId(1187).Spacer, { size: 8 }), closure_6(guildId(17215).GuildRoleSubscriptionMemberPreview, { guildId, role })];
  obj6.children = items;
  const items1 = [closure_8(closure_7, obj6), , , ];
  let tmp5Result = null;
  if (first.size > 0) {
    const obj8 = { style: tmp.section, children: null };
    const obj9 = { children: null };
    const intl2 = guildId(1113).intl;
    const obj10 = { numEmojis: first.size };
    obj9.children = intl2.format(guildId(1113).t.oDeFmv, obj10);
    const items2 = [closure_6(SectionTitle, obj9), ];
    const obj11 = { emojiIds: null, guildId: null };
    const items3 = [];
    HermesBuiltin.arraySpread(first, 0);
    obj11.emojiIds = items3;
    obj11.guildId = guildId;
    items2[1] = closure_6(GuildRoleSubscriptionEmojiGalleryDefault, obj11);
    obj8.children = items2;
    tmp5Result = closure_8(View, obj8);
  }
  items1[1] = tmp5Result;
  let tmp5Result3 = null;
  if (first1.length > 0) {
    const obj12 = { style: tmp.section, children: null };
    const obj13 = { children: null };
    const intl3 = guildId(1113).intl;
    const obj14 = { numChannels: length };
    obj13.children = intl3.format(guildId(1113).t.l40GUu, obj14);
    const items4 = [closure_6(SectionTitle, obj13), first1.map((benefit) => timestampProducer(GuildRoleSubscriptionBenefitRow.ChannelBenefitRow, { benefit, guildId }, benefit.ref_id))];
    obj12.children = items4;
    tmp5Result3 = closure_8(View, obj12);
  }
  items1[2] = tmp5Result3;
  let tmp5Result4 = null;
  if (first2.length > 0) {
    const obj15 = { style: tmp.section, children: null };
    const obj16 = { children: null };
    const intl4 = guildId(1113).intl;
    const obj17 = { numIntangibles: length2 };
    obj16.children = intl4.format(guildId(1113).t["4V/Mfi"], obj17);
    const items5 = [closure_6(SectionTitle, obj16), first2.map((benefit, index) => timestampProducer(GuildRoleSubscriptionBenefitRow.IntangibleBenefitRow, { benefit, guildId }, index))];
    obj15.children = items5;
    tmp5Result4 = closure_8(View, obj15);
  }
  items1[3] = tmp5Result4;
  obj5.children = items1;
  return closure_8(guildId(17214).SeparatedList, obj5);
}