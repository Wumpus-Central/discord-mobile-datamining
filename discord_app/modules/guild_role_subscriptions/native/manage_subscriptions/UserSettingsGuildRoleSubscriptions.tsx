// === Module 14728: UserSettingsGuildRoleSubscriptions ===

// Module 14728 (UserSettingsGuildRoleSubscriptions)
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4825 */;
import useRestorePurchasesDefault from "useRestorePurchases" /* 14729 */;
import useActiveGuildSubscriptionsDefault from "useActiveGuildSubscriptions" /* 14730 */;
import LoadingIndicatorDefault from "LoadingIndicator" /* 14734 */;
import ManageSubscriptionCardDefault from "ManageSubscriptionCard" /* 14735 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildRoleSubscriptionsSectionHeader() {
  const tmp = closure_8();
  const obj = { style: tmp.sectionHeader, children: null };
  const obj2 = { variant: "eyebrow", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["KzCF/6"]);
  const items = [hasOwnProperty(Text_Text.Text, obj2), ];
  const obj3 = { style: tmp.sectionSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t["Y+ucR7"]);
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items;
  return timestampProducer(React3, obj);
}
function renderSectionHeader(section) {
  let tmp = null;
  if (section.section.key === c7) {
    tmp = hasOwnProperty(GuildRoleSubscriptionsSectionHeader, {});
  }
  return tmp;
}
function ItemSeparator() {
  return hasOwnProperty(native.Spacer, { size: 8 });
}
get_ActivityIndicator = fn(17);
({ View: c3, SectionList: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "role-subscriptions";
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({ container: { flex: 1 }, list: { flex: 1 }, listContentContainer: { paddingHorizontal: 16 }, sectionHeader: { paddingVertical: 24 }, sectionSubtitle: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx");

export default function UserSettingsGuildRoleSubscriptions() {
  const tmp = closure_8();
  useRestorePurchasesDefault({ forceRestore: true });
  const tmp5 = useActiveGuildSubscriptionsDefault({ ensureFresh: true });
  if (obj.useFetchListingsForSubscriptions(tmp5).loading) {
    let tmp6Result = hasOwnProperty(LoadingIndicatorDefault, {});
  } else {
    const obj2 = { style: tmp.container, children: null };
    const obj4 = { contentContainerStyle: null, style: null, sections: null, stickySectionHeadersEnabled: false, keyExtractor: null, renderSectionHeader: null, renderItem: null, ItemSeparatorComponent: null };
    ({ listContentContainer: obj3.contentContainerStyle, list: obj3.style } = tmp);
    const obj7 = { key, data: tmp5 };
    const items = [obj7];
    obj4.sections = items;
    obj4.keyExtractor = function keyExtractor(id) {
      return id.id;
    };
    obj4.renderSectionHeader = renderSectionHeader;
    obj4.renderItem = function renderItem(subscription) {
      return closure_1_5(ManageSubscriptionCardDefault, { subscription: subscription.item });
    };
    obj4.ItemSeparatorComponent = ItemSeparator;
    obj2.children = hasOwnProperty(React4, obj4);
    tmp6Result = hasOwnProperty(React3, obj2);
  }
  return tmp6Result;
};