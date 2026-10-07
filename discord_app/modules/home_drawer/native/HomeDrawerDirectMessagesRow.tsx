// discord_app/modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HomeDrawerExperiment from "HomeDrawerExperiment.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import HomeDrawerShared from "HomeDrawerShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
const View = fn(17).View;
const StatusTypes = fn(1085).StatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { subtitle: { flexDirection: "row", alignItems: "center", gap: 4 }, onlineDot: null };
let size = {
  width: 8,
  height: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE,
};
obj2.onlineDot = size;
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(8);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore, PresenceStore];
        const fn = function x() {
          friendIDs = friendIDs.getFriendIDs();
          return friendIDs.filter((item) => status.getStatus(item) !== constants.OFFLINE).length;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === tmp4) {
          let tmp10 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
          const intl2 = util.intl;
          obj2.children = intl2.string(util.t.YUU0RF);
          const tmp17 = React5(Text_Text.Text, obj2);
          cResult[5] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] !== tmp10) {
          const obj3 = { title: tmp15, subtitle: tmp10 };
          const tmp20 = React5(HomeDrawerShared.HomeDrawerSharedItem, obj3);
          cResult[6] = tmp10;
          cResult[7] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[7];
        }
        return tmp18;
      }
      let tmp11 = null;
      if (stateFromStores > 0) {
        const obj4 = { style: tmp4.subtitle, children: null };
        const obj5 = { style: tmp4.onlineDot };
        const items1 = [React5(View, obj5)];
        const obj6 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
        const intl = util.intl;
        const obj7 = { numFriends: stateFromStores };
        obj6.children = intl.format(util.t.N5UIKr, obj7);
        items1[1] = React5(Text_Text.Text, obj6);
        obj4.children = items1;
        tmp11 = closure_1_8(View, obj4);
      }
      cResult[2] = stateFromStores;
      cResult[3] = tmp4;
      cResult[4] = tmp11;
      tmp10 = tmp11;
      const tmpResult = initialize;
    }
  : () => {
      const tmp = closure_9();
      const items = [RelationshipStore, PresenceStore];
      const stateFromStores = initialize.useStateFromStores(items, () => {
        friendIDs = friendIDs.getFriendIDs();
        return friendIDs.filter((item) => status.getStatus(item) !== constants.OFFLINE).length;
      });
      let tmp5 = null;
      if (stateFromStores > 0) {
        const obj2 = { style: tmp.subtitle, children: null };
        const obj3 = { style: tmp.onlineDot };
        const items1 = [React5(View, obj3)];
        const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
        const intl = util.intl;
        const obj5 = { numFriends: stateFromStores };
        obj4.children = intl.format(util.t.N5UIKr, obj5);
        items1[1] = React5(Text_Text.Text, obj4);
        obj2.children = items1;
        tmp5 = closure_1_8(View, obj2);
      }
      const obj6 = { title: null, subtitle: null };
      const obj7 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
      const intl2 = util.intl;
      obj7.children = intl2.string(util.t.YUU0RF);
      obj6.title = React5(Text_Text.Text, obj7);
      obj6.subtitle = tmp5;
      return React5(HomeDrawerShared.HomeDrawerSharedItem, obj6);
    };
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "dm-expanded-children" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
      let tmp6 = null;
      if (MobileHomeDrawerExperiment.useConfig(first).enableHome) {
        tmp6 = null;
        if (!tmp5) {
          const _Symbol = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp10 = React5(closure_10, {});
            cResult[1] = tmp10;
          }
        }
      }
      return tmp6;
    }
  : () => {
      const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
      let tmp2 = null;
      if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
        tmp2 = null;
        if (!tmp) {
          tmp2 = React5(closure_10, {});
        }
      }
      return tmp2;
    };
