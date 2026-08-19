// === Module 14583: SectionTitle ===

// Module 14583 (SectionTitle)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import getRoleEmojisAll from "getRoleEmojis" /* 14573 */;
import EmojiGalleryDefault from "EmojiGallery" /* 14585 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
class SectionTitle {
  constructor(arg0) {
    tmp = closure_9();
    obj = { variant: "text-xs/bold", color: "text-default", style: tmp.sectionTitle, children: global.children };
    return jsx(require("Text").Text, obj);
  }
}
class Separator {
  constructor() {
    obj = { style: closure_9().separator };
    return jsx(View, obj);
  }
}
noopAll;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { width: "100%", height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: 24 };
createCacheKey[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx");

export { SectionTitle };
export { Separator };
export const Content = function Content(arg0) {
  ({ listingId, guildId } = arg0);
  let obj = getRoleEmojisAll;
  const first = callback(obj.useTierEmojiIds(listingId, guildId), 1)[0];
  obj1 = getRoleEmojisAll;
  const first1 = callback(obj1.useChannelBenefits(listingId), 1)[0];
  let obj2 = getRoleEmojisAll;
  const first2 = callback(obj2.useIntangibleBenefits(listingId), 1)[0];
  let obj3 = getRoleEmojisAll;
  const role = obj3.useRole(listingId, guildId);
  obj = { children: null };
  obj1 = { children: null };
  const intl = guildId(1236).intl;
  obj1[0] = intl.string(guildId(1236).t["DJ+bGu"]);
  const items = [callback2(SectionTitle, obj1), callback2(guildId(1297).Spacer, { size: 8 }), callback2(guildId(14584).GuildRoleSubscriptionMemberPreview, { guildId, role })];
  obj[0] = items;
  const items1 = [callback3(closure_7, obj), , , ];
  let tmp4Result = null;
  if (first.size > 0) {
    obj2 = { children: null };
    obj3 = { children: null };
    const intl2 = guildId(1236).intl;
    const obj4 = { numEmojis: null };
    obj4[0] = first.size;
    obj3[0] = intl2.format(guildId(1236).t.oDeFmv, obj4);
    const items2 = [callback2(SectionTitle, obj3), callback2(guildId(1297).Spacer, { size: 14 }), ];
    const obj5 = { emojiIds: null, guildId: null };
    const items3 = [];
    HermesBuiltin.arraySpread(first, 0);
    obj5[0] = items3;
    obj5[1] = guildId;
    items2[2] = callback2(EmojiGalleryDefault, obj5);
    obj2[0] = items2;
    tmp4Result = callback3(closure_7, obj2);
  }
  items1[1] = tmp4Result;
  tmp4Result = null;
  if (first1.length > 0) {
    const obj6 = { children: null };
    const obj7 = { children: null };
    const intl3 = guildId(1236).intl;
    const obj8 = { numChannels: null };
    obj8[0] = length;
    obj7[0] = intl3.format(guildId(1236).t.l40GUu, obj8);
    const items4 = [callback2(SectionTitle, obj7), callback2(guildId(1297).Spacer, { size: 14 }), ];
    const obj9 = { gap: 14, children: null };
    obj9[1] = first1.map((item, index) => closure_1_6(guildId(dependencyMap[13]).ChannelBenefitRow, { benefit: item, guildId }, item.ref_id));
    items4[2] = callback2(guildId(9422).GappedList, obj9);
    obj6[0] = items4;
    tmp4Result = callback3(closure_7, obj6);
  }
  items1[2] = tmp4Result;
  let tmp4Result1 = null;
  if (first2.length > 0) {
    const obj10 = { children: null };
    const obj11 = { children: null };
    const intl4 = guildId(1236).intl;
    const obj12 = { numIntangibles: null };
    obj12[0] = length2;
    obj11[0] = intl4.format(guildId(1236).t["4V/Mfi"], obj12);
    const items5 = [callback2(SectionTitle, obj11), callback2(guildId(1297).Spacer, { size: 14 }), ];
    const obj13 = { gap: 14, children: null };
    obj13[1] = first2.map((item, index) => closure_1_6(guildId(dependencyMap[13]).IntangibleBenefitRow, { benefit: item, guildId }, index));
    items5[2] = callback2(guildId(9422).GappedList, obj13);
    obj10[0] = items5;
    tmp4Result1 = callback3(closure_7, obj10);
  }
  items1[3] = tmp4Result1;
  obj[1] = items1;
  return callback3(guildId(9422).GappedList, obj);
};