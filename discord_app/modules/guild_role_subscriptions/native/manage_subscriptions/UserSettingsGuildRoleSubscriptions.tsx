// === Module 14555: GuildRoleSubscriptionsSectionHeader ===

// Module 14555 (GuildRoleSubscriptionsSectionHeader)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import useRestorePurchasesDefault from "useRestorePurchases" /* 14556 */;
import useActiveGuildSubscriptionsDefault from "useActiveGuildSubscriptions" /* 14557 */;
import useFetchListingsForGuild from "useFetchListingsForGuild" /* 14558 */;
import LoadingIndicatorDefault from "LoadingIndicator" /* 14561 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function GuildRoleSubscriptionsSectionHeader() {
  const tmp = callback3();
  let obj = { style: tmp.sectionHeader, children: null };
  obj = { variant: "eyebrow", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["KzCF/6"]);
  const items = [callback(Text.Text, obj), ];
  obj = { style: tmp.sectionSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t["Y+ucR7"]);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(closure_3, obj);
}
function renderSectionHeader(section) {
  let tmp = null;
  if (section.section.key === c7) {
    tmp = callback(GuildRoleSubscriptionsSectionHeader, {});
  }
  return tmp;
}
function ItemSeparator() {
  return callback(Button.Spacer, { size: 8 });
}
noopAll;
({ View: c3, SectionList: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let c7 = "role-subscriptions";
let closure_8 = createCacheKey.createStyles({ container: { flex: 1 }, list: { flex: 1 }, listContentContainer: { paddingHorizontal: 16 }, sectionHeader: { paddingVertical: 24 }, sectionSubtitle: { marginTop: 4 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx");

export default function UserSettingsGuildRoleSubscriptions() {
  const tmp = callback3();
  useRestorePurchasesDefault({ forceRestore: true });
  const tmp5 = useActiveGuildSubscriptionsDefault({ ensureFresh: true });
  let obj = useFetchListingsForGuild;
  if (obj.useFetchListingsForSubscriptions(tmp5).loading) {
    let tmp6Result = tmp6(LoadingIndicatorDefault, {});
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { contentContainerStyle: null, style: null, sections: null, stickySectionHeadersEnabled: false, keyExtractor: null, renderSectionHeader: null, renderItem: null, ItemSeparatorComponent: null };
    ({ listContentContainer: obj3[0], list: obj3[1] } = tmp);
    obj1 = { key: null, data: null };
    obj1[0] = c7;
    obj1[1] = tmp5;
    const items = [obj1];
    obj[2] = items;
    obj[4] = function keyExtractor(id) {
      return id.id;
    };
    obj[5] = renderSectionHeader;
    obj[6] = function renderItem(subscription) {
      return callback2(callback(table[11]), { subscription: subscription.item });
    };
    obj[7] = ItemSeparator;
    obj[1] = tmp6(closure_4, obj);
    tmp6Result = tmp6(closure_3, obj);
  }
  return tmp6Result;
};