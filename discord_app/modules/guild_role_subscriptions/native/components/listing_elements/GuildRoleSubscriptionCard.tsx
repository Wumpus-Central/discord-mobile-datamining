// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
class SectionTitle {
  constructor(arg0) {
    tmp = jsxs();
    obj = { variant: "text-xs/bold", color: "text-default", style: tmp.sectionTitle, children: global.children };
    return jsx(require("Text").Text, obj);
  }
}
class Separator {
  constructor() {
    obj = { style: jsxs().separator };
    return jsx(View, obj);
  }
}
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { sectionTitle: { textTransform: "uppercase" }, separator: null };
createCacheKey = { width: "100%", height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginVertical: 24 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionCard.tsx");

export { SectionTitle };
export { Separator };
export const Content = function Content(arg0) {
  let guildId;
  let listingId;
  ({ listingId, guildId } = arg0);
  let obj = importAll(14363);
  const first = callback(obj.useTierEmojiIds(listingId, guildId), 1)[0];
  let obj1 = importAll(14363);
  const first1 = callback(obj1.useChannelBenefits(listingId), 1)[0];
  let obj2 = importAll(14363);
  const first2 = callback(obj2.useIntangibleBenefits(listingId), 1)[0];
  let obj3 = importAll(14363);
  const role = obj3.useRole(listingId, guildId);
  obj = {
    renderGap() {
      return callback(closure_11, {});
    },
    children: null
  };
  obj = { children: null };
  obj1 = { children: null };
  const intl = guildId(1236).intl;
  obj1[0] = intl.string(guildId(1236).t["DJ+bGu"]);
  const items = [callback2(SectionTitle, obj1), callback2(guildId(1297).Spacer, { size: 8 }), callback2(guildId(14374).GuildRoleSubscriptionMemberPreview, { guildId, role })];
  obj[0] = items;
  const items1 = [callback3(closure_7, obj), , , ];
  let tmp4Result = null;
  if (first.size > 0) {
    obj2 = { children: null };
    obj3 = { children: null };
    const intl2 = tmp5(1236).intl;
    const obj4 = { numEmojis: null };
    obj4[0] = first.size;
    obj3[0] = intl2.format(tmp5(1236).t.oDeFmv, obj4);
    const items2 = [tmp7(tmp8, obj3), tmp7(tmp5(1297).Spacer, { size: 14 }), ];
    const obj5 = { emojiIds: null, guildId: null };
    const items3 = [];
    HermesBuiltin.arraySpread(first, 0);
    obj5[0] = items3;
    obj5[1] = guildId;
    items2[2] = tmp7(importDefault(14375), obj5);
    obj2[0] = items2;
    tmp4Result = tmp4(tmp6, obj2);
    const tmp11 = importDefault(14375);
  }
  items1[1] = tmp4Result;
  tmp4Result = null;
  if (first1.length > 0) {
    const obj6 = { children: null };
    const obj7 = { children: null };
    const intl3 = tmp5(1236).intl;
    const obj8 = { numChannels: null };
    obj8[0] = length;
    obj7[0] = intl3.format(tmp5(1236).t.l40GUu, obj8);
    const items4 = [tmp7(tmp8, obj7), tmp7(tmp5(1297).Spacer, { size: 14 }), ];
    const obj9 = { gap: 14, children: null };
    obj9[1] = first1.map((benefit) => outer1_6(guildId(outer1_3[13]).ChannelBenefitRow, { benefit, guildId }, benefit.ref_id));
    items4[2] = tmp7(tmp5(8676).GappedList, obj9);
    obj6[0] = items4;
    tmp4Result = tmp4(tmp6, obj6);
  }
  items1[2] = tmp4Result;
  let tmp4Result1 = null;
  if (first2.length > 0) {
    const obj10 = { children: null };
    const obj11 = { children: null };
    const intl4 = tmp5(1236).intl;
    const obj12 = { numIntangibles: null };
    obj12[0] = length2;
    obj11[0] = intl4.format(tmp5(1236).t["4V/Mfi"], obj12);
    const items5 = [tmp7(tmp8, obj11), tmp7(tmp5(1297).Spacer, { size: 14 }), ];
    const obj13 = { gap: 14, children: null };
    obj13[1] = first2.map((benefit) => outer1_6(guildId(outer1_3[13]).IntangibleBenefitRow, { benefit, guildId }, arg1));
    items5[2] = tmp7(tmp5(8676).GappedList, obj13);
    obj10[0] = items5;
    tmp4Result1 = tmp4(tmp6, obj10);
  }
  items1[3] = tmp4Result1;
  obj[1] = items1;
  return callback3(guildId(8676).GappedList, obj);
};