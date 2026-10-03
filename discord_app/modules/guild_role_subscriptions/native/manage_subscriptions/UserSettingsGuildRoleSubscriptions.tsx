// discord_app/modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useRestorePurchasesDefault from "../../../billing/native/subscription/useRestorePurchases.tsx";
import useActiveGuildSubscriptionsDefault from "../../useActiveGuildSubscriptions.tsx";
import GuildRoleSubscriptionsHooks from "../../GuildRoleSubscriptionsHooks.tsx";
import LoadingIndicatorDefault from "../components/LoadingIndicator.tsx";
import ManageSubscriptionCardDefault from "ManageSubscriptionCard.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function renderSectionHeader(section) {
  let tmp = null;
  if (section.section.key === c7) {
    tmp = hasOwnProperty(closure_9, {});
  }
  return tmp;
}
get_ActivityIndicator = fn(17);
({ View: c3, SectionList: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "role-subscriptions";
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({
  container: { flex: 1 },
  list: { flex: 1 },
  listContentContainer: { paddingHorizontal: 16 },
  sectionHeader: { paddingVertical: 24 },
  sectionSubtitle: { marginTop: 4 },
});
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(7);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "eyebrow", color: "text-default", children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["KzCF/6"]);
        const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t["Y+ucR7"]);
        cResult[1] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.sectionSubtitle) {
        const obj3 = { style: tmp4.sectionSubtitle, variant: "text-sm/medium", color: "text-default", children: tmp8 };
        const tmp12 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[2] = tmp4.sectionSubtitle;
        cResult[3] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === tmp4.sectionHeader) {
        if (cResult[5] === tmp10) {
          let tmp13 = cResult[6];
        }
        return tmp13;
      }
      const obj4 = { style: tmp4.sectionHeader, children: null };
      const items = [first, tmp10];
      obj4.children = items;
      const tmp14 = timestampProducer(React3, obj4);
      cResult[4] = tmp4.sectionHeader;
      cResult[5] = tmp10;
      cResult[6] = tmp14;
      tmp13 = tmp14;
    }
  : () => {
      const tmp = closure_8();
      const obj = { style: tmp.sectionHeader, children: null };
      const obj2 = { variant: "eyebrow", color: "text-default", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t["KzCF/6"]);
      const items = [hasOwnProperty(Text_Text.Text, obj2)];
      const obj3 = { style: tmp.sectionSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj3.children = intl2.string(util.t["Y+ucR7"]);
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      obj.children = items;
      return timestampProducer(React3, obj);
    };
ReactCompilerGating = fn(558);
const ItemSeparatorComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = hasOwnProperty(native.Spacer, { size: 8 });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => hasOwnProperty(native.Spacer, { size: 8 });
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptions.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(14);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { forceRestore: true };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      useRestorePurchasesDefault(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { ensureFresh: true };
        cResult[1] = obj3;
        let tmp8 = obj3;
      } else {
        tmp8 = cResult[1];
      }
      const tmp9 = useActiveGuildSubscriptionsDefault(tmp8);
      if (tmpResult.useFetchListingsForSubscriptions(tmp9).loading) {
        const _Symbol3 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp22 = hasOwnProperty(LoadingIndicatorDefault, {});
          cResult[2] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[2];
        }
        return tmp20;
      } else {
        if (cResult[3] !== tmp9) {
          const obj4 = { key, data: tmp9 };
          const items = [obj4];
          cResult[3] = tmp9;
          cResult[4] = items;
          let tmp10 = items;
        } else {
          tmp10 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function h(id) {
            return id.id;
          };
          cResult[5] = fn;
          let tmp12 = fn;
        } else {
          tmp12 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor(arg0) {
              return closure_1_5(closure_1_1(closure_1_2[13]), { subscription: arg0.item });
            }
          }
          cResult[6] = C;
        } else {
          class C {
            constructor(arg0) {
              return closure_1_5(closure_1_1(closure_1_2[13]), { subscription: arg0.item });
            }
          }
        }
        if (cResult[7] === tmp10) {
          class C {
            constructor(arg0) {
              return closure_1_5(closure_1_1(closure_1_2[13]), { subscription: arg0.item });
            }
          }
        }
        const obj5 = {
          contentContainerStyle: null,
          style: null,
          sections: null,
          stickySectionHeadersEnabled: false,
          keyExtractor: null,
          renderSectionHeader: null,
          renderItem: null,
          ItemSeparatorComponent: null,
        };
        ({ listContentContainer: obj6.contentContainerStyle, list: obj6.style } = tmp4);
        obj5.sections = tmp10;
        obj5.keyExtractor = tmp12;
        obj5.renderSectionHeader = renderSectionHeader;
        obj5.renderItem = C;
        obj5.ItemSeparatorComponent = ItemSeparatorComponent;
        const tmp19 = hasOwnProperty(React4, obj5);
        cResult[7] = tmp10;
        cResult[8] = tmp4.list;
        cResult[9] = tmp4.listContentContainer;
        cResult[10] = tmp19;
      }
      tmpResult = GuildRoleSubscriptionsHooks;
    }
  : () => {
      const tmp = closure_8();
      useRestorePurchasesDefault({ forceRestore: true });
      const tmp5 = useActiveGuildSubscriptionsDefault({ ensureFresh: true });
      if (obj.useFetchListingsForSubscriptions(tmp5).loading) {
        let tmp6Result = hasOwnProperty(LoadingIndicatorDefault, {});
      } else {
        const obj2 = { style: tmp.container, children: null };
        const obj4 = {
          contentContainerStyle: null,
          style: null,
          sections: null,
          stickySectionHeadersEnabled: false,
          keyExtractor: null,
          renderSectionHeader: null,
          renderItem: null,
          ItemSeparatorComponent: null,
        };
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
        obj4.ItemSeparatorComponent = ItemSeparatorComponent;
        obj2.children = hasOwnProperty(React4, obj4);
        tmp6Result = hasOwnProperty(React3, obj2);
      }
      return tmp6Result;
    };
