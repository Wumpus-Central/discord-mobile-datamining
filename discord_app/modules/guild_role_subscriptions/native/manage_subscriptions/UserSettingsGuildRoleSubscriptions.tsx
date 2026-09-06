// === Module 15209: UserSettingsGuildRoleSubscriptions ===

// Module 15209 (UserSettingsGuildRoleSubscriptions)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import useRestorePurchasesDefault from "useRestorePurchases" /* 15210 */;
import useActiveGuildSubscriptionsDefault from "useActiveGuildSubscriptions" /* 15211 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15212 */;
import LoadingIndicatorDefault from "LoadingIndicator" /* 15215 */;
import ManageSubscriptionCardDefault from "ManageSubscriptionCard" /* 15216 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildRoleSubscriptionsSectionHeader() {
  const tmp = closure_8();
  let obj = { style: tmp.sectionHeader, children: null };
  obj = { variant: "eyebrow", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["KzCF/6"]);
  const items = [hasOwnProperty(Text_Text.Text, obj), ];
  obj = { style: tmp.sectionSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t["Y+ucR7"]);
  items[1] = hasOwnProperty(Text_Text.Text, obj);
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
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { flex: 1 }, list: { flex: 1 }, listContentContainer: { paddingHorizontal: 16 }, sectionHeader: { paddingVertical: 24 }, sectionSubtitle: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx");

export default function UserSettingsGuildRoleSubscriptions() {
  const tmp = closure_8();
  useRestorePurchasesDefault({ forceRestore: true });
  const tmp5 = useActiveGuildSubscriptionsDefault({ ensureFresh: true });
  let obj = GuildRoleSubscriptionsHooks;
  if (obj.useFetchListingsForSubscriptions(tmp5).loading) {
    let tmp6Result = hasOwnProperty(LoadingIndicatorDefault, {});
  } else {
    obj = { style: tmp.container, children: null };
    obj = { contentContainerStyle: null, style: null, sections: null, stickySectionHeadersEnabled: false, keyExtractor: null, renderSectionHeader: null, renderItem: null, ItemSeparatorComponent: null };
    ({ listContentContainer: obj3.contentContainerStyle, list: obj3.style } = tmp);
    const obj1 = { key, data: tmp5 };
    const items = [obj1];
    obj.sections = items;
    obj.keyExtractor = function keyExtractor(id) {
      return id.id;
    };
    obj.renderSectionHeader = renderSectionHeader;
    obj.renderItem = function renderItem(subscription) {
      return closure_1_5(ManageSubscriptionCardDefault, { subscription: subscription.item });
    };
    obj.ItemSeparatorComponent = ItemSeparator;
    obj.children = hasOwnProperty(React4, obj);
    tmp6Result = hasOwnProperty(React3, obj);
  }
  return tmp6Result;
};