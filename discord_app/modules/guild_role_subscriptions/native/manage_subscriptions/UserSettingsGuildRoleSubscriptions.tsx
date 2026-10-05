// === Module 15027: UserSettingsGuildRoleSubscriptions ===

// Module 15027 (UserSettingsGuildRoleSubscriptions)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import useRestorePurchasesDefault from "useRestorePurchases" /* 15028 */;
import useActiveGuildSubscriptionsDefault from "useActiveGuildSubscriptions" /* 15029 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 15030 */;
import LoadingIndicatorDefault from "LoadingIndicator" /* 15033 */;
import ManageSubscriptionCardDefault from "ManageSubscriptionCard" /* 15034 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
function renderSectionHeader(section) {
  let tmp = null;
  if (section.section.key === c7) {
    tmp = hasOwnProperty(closure_9, {});
  }
  return tmp;
}
({ View: c3, SectionList: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "role-subscriptions";
let closure_8 = createStyles.createStyles({ container: { flex: 1 }, list: { flex: 1 }, listContentContainer: { paddingHorizontal: 16 }, sectionHeader: { paddingVertical: 24 }, sectionSubtitle: { marginTop: 4 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let items;
  let tmp10;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_8();
  const sectionHeader = tmp4.sectionHeader;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "eyebrow", color: "text-default", children: intl.string(intl3.t["KzCF/6"]) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    const tmp7 = hasOwnProperty(Text, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  const sectionSubtitle = tmp4.sectionSubtitle;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl3.intl;
    const stringResult = intl2.string(intl3.t["Y+ucR7"]);
    cResult[1] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.sectionSubtitle) {
    const obj3 = { style: sectionSubtitle, variant: "text-sm/medium", color: "text-default", children: tmp8 };
    const tmp12 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = tmp4.sectionSubtitle;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.sectionHeader) {
    let tmp13;
    if (cResult[5] === tmp10) {
      tmp13 = cResult[6];
    }
    return tmp13;
  }
  const obj4 = { style: sectionHeader, children: items };
  items = [first, tmp10];
  const tmp14 = metroRequire(_false, obj4);
  cResult[4] = tmp4.sectionHeader;
  cResult[5] = tmp10;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (() => {
  let intl;
  let intl2;
  let items;
  const tmp = closure_8();
  const obj = { style: tmp.sectionHeader, children: items };
  const obj2 = { variant: "eyebrow", color: "text-default", children: intl.string(intl3.t["KzCF/6"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [hasOwnProperty(Text, obj2), ];
  const obj3 = { style: tmp.sectionSubtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl3.t["Y+ucR7"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = hasOwnProperty(Text2, obj3);
  return metroRequire(_false, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = hasOwnProperty(native.Spacer, { size: 8 });
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => hasOwnProperty(native.Spacer, { size: 8 }));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(14);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { forceRestore: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  useRestorePurchasesDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { ensureFresh: true };
    cResult[1] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[1];
  }
  const tmp9 = useActiveGuildSubscriptionsDefault(tmp8);
  const tmpResult = GuildRoleSubscriptionsHooks;
  if (tmpResult.useFetchListingsForSubscriptions(tmp9).loading) {
    let tmp20;
    const _Symbol3 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp22 = hasOwnProperty(LoadingIndicatorDefault, {});
      cResult[2] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[2];
    }
    return tmp20;
  } else {
    let tmp10;
    let tmp12;
    if (cResult[3] !== tmp9) {
      const items = [{ key, data: tmp9 }];
      const obj4 = { key, data: tmp9 };
      cResult[3] = tmp9;
      cResult[4] = items;
      tmp10 = items;
    } else {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function h(id) {
        return id.id;
      };
      cResult[5] = fn;
      tmp12 = fn;
    } else {
      tmp12 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(subscription) {
          return closure_1_5(ManageSubscriptionCardDefault, { subscription: subscription.item });
        }
      }
      cResult[6] = C;
    } else {
      class C {
        constructor(subscription) {
          return closure_1_5(ManageSubscriptionCardDefault, { subscription: subscription.item });
        }
      }
    }
    if (cResult[7] === tmp10) {
      class C {
        constructor(subscription) {
          return closure_1_5(ManageSubscriptionCardDefault, { subscription: subscription.item });
        }
      }
    }
    const obj5 = { contentContainerStyle: null, style: null, sections: tmp10, stickySectionHeadersEnabled: false, keyExtractor: tmp12, renderSectionHeader, renderItem: C, ItemSeparatorComponent };
    ({ listContentContainer: obj6.contentContainerStyle, list: obj6.style } = tmp4);
    cResult[7] = tmp10;
    cResult[8] = tmp4.list;
    cResult[9] = tmp4.listContentContainer;
    cResult[10] = hasOwnProperty(React3, obj5);
    const tmp19 = hasOwnProperty(React3, obj5);
  }
}) : (() => {
  let items;
  let obj4;
  let tmp6Result;
  const tmp = closure_8();
  useRestorePurchasesDefault({ forceRestore: true });
  const tmp5 = useActiveGuildSubscriptionsDefault({ ensureFresh: true });
  const obj = GuildRoleSubscriptionsHooks;
  if (obj.useFetchListingsForSubscriptions(tmp5).loading) {
    tmp6Result = hasOwnProperty(LoadingIndicatorDefault, {});
  } else {
    const obj2 = { style: tmp.container, children: hasOwnProperty(React3, obj4) };
    obj4 = {
      contentContainerStyle: null,
      style: null,
      sections: items,
      stickySectionHeadersEnabled: false,
      keyExtractor(id) {
          return id.id;
        },
      renderSectionHeader,
      renderItem(subscription) {
          return closure_1_5(ManageSubscriptionCardDefault, { subscription: subscription.item });
        },
      ItemSeparatorComponent
    };
    ({ listContentContainer: obj3.contentContainerStyle, list: obj3.style } = tmp);
    items = [{ key, data: tmp5 }];
    const obj7 = { key, data: tmp5 };
    tmp6Result = hasOwnProperty(_false, obj2);
  }
  return tmp6Result;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx");

export default tmp5;