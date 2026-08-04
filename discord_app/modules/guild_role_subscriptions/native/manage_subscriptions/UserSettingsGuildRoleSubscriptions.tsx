// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
function GuildRoleSubscriptionsSectionHeader() {
  const tmp = callback3();
  let obj = { style: tmp.sectionHeader, children: null };
  obj = { variant: "eyebrow", color: "text-default", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["KzCF/6"]);
  const items = [callback(require(4189) /* Text */.Text, obj), ];
  obj = { style: tmp.sectionSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl2.string(require(1236) /* getSystemLocale */.t["Y+ucR7"]);
  items[1] = callback(require(4189) /* Text */.Text, obj);
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
  return callback(require(1297) /* Button */.Spacer, { size: 8 });
}
({ View: c3, SectionList: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let c7 = "role-subscriptions";
let closure_8 = createCacheKey.createStyles({ container: { flex: 1 }, list: { flex: 1 }, listContentContainer: { paddingHorizontal: 16 }, sectionHeader: { paddingVertical: 24 }, sectionSubtitle: { marginTop: 4 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx");

export default function UserSettingsGuildRoleSubscriptions() {
  const tmp = callback3();
  importDefault(14246)({ forceRestore: true });
  const tmp5 = importDefault(14247)({ ensureFresh: true });
  let obj = require(14248) /* useFetchListingsForGuild */;
  if (obj.useFetchListingsForSubscriptions(tmp5).loading) {
    let tmp6Result = tmp6(importDefault(14251), {});
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { contentContainerStyle: null, style: null, sections: null, stickySectionHeadersEnabled: false, keyExtractor: null, renderSectionHeader: null, renderItem: null, ItemSeparatorComponent: null };
    ({ listContentContainer: obj3[0], list: obj3[1] } = tmp);
    const obj1 = { key: null, data: null };
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