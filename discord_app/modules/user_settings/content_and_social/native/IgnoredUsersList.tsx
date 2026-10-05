// discord_app/modules/user_settings/content_and_social/native/IgnoredUsersList.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import Blocked from "../../../../design/components/Illustration/native/redesign/generated/Blocked.tsx";
import IgnoredUserRowDefault from "IgnoredUserRow.tsx";
import react from "../../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;
let userIds;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, sectionLabelStyle: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userIds) => {
      let intl3;
      let items;
      let list;
      let sectionLabelStyle;
      let obj = react2;
      const cResult = obj.c(21);
      userIds = userIds.userIds;
      const tmp4 = closure_7();
      const tmp5 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp5(AnalyticsLocationDefault.IGNORED_USERS).analyticsLocations;
      if (0 === userIds.length) {
        let first;
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { Illustration: Blocked.Blocked, body: intl3.string(intl4.t.PYrWFW) };
          const EmptyState = native.EmptyState;
          intl3 = intl4.intl;
          const tmp33 = hasOwnProperty(EmptyState, obj2);
          cResult[0] = tmp33;
          first = tmp33;
        } else {
          first = cResult[0];
        }
        return first;
      } else {
        let tmp6;
        ({ list, sectionLabelStyle } = tmp4);
        if (cResult[1] !== userIds.length) {
          const intl = intl4.intl;
          const obj3 = { numberOfIgnoredUsers: userIds.length };
          const formatToPlainStringResult = intl.formatToPlainString(intl4.t.iNKUhU, obj3);
          cResult[1] = userIds.length;
          cResult[2] = formatToPlainStringResult;
          tmp6 = formatToPlainStringResult;
        } else {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp4.sectionLabelStyle) {
          let tmp8;
          let tmp12;
          let tmp14;
          let tmp17;
          if (cResult[4] === tmp6) {
            tmp8 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl4.intl;
            const stringResult = intl2.string(intl4.t["93ZDWE"]);
            cResult[6] = stringResult;
            tmp12 = stringResult;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] !== userIds) {
            let tmp15;
            const _Symbol2 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const fn = function p(userId) {
                const obj = { userId };
                return closure_1_5(IgnoredUserRowDefault, obj, userId);
              };
              cResult[9] = fn;
              tmp15 = fn;
            } else {
              tmp15 = cResult[9];
            }
            const mapped = userIds.map(tmp15);
            cResult[7] = userIds;
            cResult[8] = mapped;
            tmp14 = mapped;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[10] !== tmp14) {
            const obj4 = { hasIcons: true, children: tmp14 };
            const tmp19 = hasOwnProperty(TableRowGroup2.TableRowGroup, obj4, tmp12);
            cResult[10] = tmp14;
            cResult[11] = tmp19;
            tmp17 = tmp19;
          } else {
            tmp17 = cResult[11];
          }
          if (cResult[12] === tmp8) {
            let tmp20;
            if (cResult[13] === tmp17) {
              tmp20 = cResult[14];
            }
            if (cResult[15] === tmp4.list) {
              let tmp24;
              if (cResult[16] === tmp20) {
                tmp24 = cResult[17];
              }
              if (cResult[18] === analyticsLocations) {
                let tmp27;
                if (cResult[19] === tmp24) {
                  tmp27 = cResult[20];
                }
                return tmp27;
              }
              const obj5 = { value: analyticsLocations, children: tmp24 };
              const tmp29 = hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj5);
              cResult[18] = analyticsLocations;
              cResult[19] = tmp24;
              cResult[20] = tmp29;
              tmp27 = tmp29;
            }
            const obj6 = { bottom: true, style: list, children: tmp20 };
            const tmp26 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj6);
            cResult[15] = tmp4.list;
            cResult[16] = tmp20;
            cResult[17] = tmp26;
            tmp24 = tmp26;
          }
          const obj7 = { children: items };
          items = [tmp8, tmp17];
          const tmp23 = metroRequire(ScrollView, obj7);
          cResult[12] = tmp8;
          cResult[13] = tmp17;
          cResult[14] = tmp23;
          tmp20 = tmp23;
        }
        const obj8 = { style: sectionLabelStyle, variant: "text-sm/semibold", color: "text-default", children: tmp6 };
        const tmp10 = hasOwnProperty(Text_Text.Text, obj8);
        cResult[3] = tmp4.sectionLabelStyle;
        cResult[4] = tmp6;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
    }
  : (userIds) => {
      let SafeAreaPaddingView;
      let intl;
      let intl2;
      let items;
      let obj3;
      let obj4;
      let obj6;
      let tmp7;
      userIds = userIds.userIds;
      const tmp = closure_7();
      useAnalyticsLocationsDefault;
      if (0 === userIds.length) {
        let obj = { Illustration: Blocked.Blocked, body: intl.string(intl4.t.PYrWFW) };
        const EmptyState = native.EmptyState;
        intl = intl4.intl;
        tmp7 = hasOwnProperty(EmptyState, obj);
      } else {
        const obj2 = { value: tmp4, children: hasOwnProperty(SafeAreaPaddingView, obj3) };
        const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
        obj3 = { bottom: true, style: tmp.list, children: metroRequire(ScrollView, obj4) };
        obj4 = { children: items };
        SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
        const obj5 = {
          style: tmp.sectionLabelStyle,
          variant: "text-sm/semibold",
          color: "text-default",
          children: intl2.formatToPlainString(intl4.t.iNKUhU, obj6),
        };
        const Text = Text_Text.Text;
        intl2 = intl4.intl;
        obj6 = { numberOfIgnoredUsers: userIds.length };
        items = [hasOwnProperty(Text, obj5)];
        const obj7 = {
          hasIcons: true,
          children: userIds.map((userId) => {
            const obj = { userId };
            return closure_1_5(IgnoredUserRowDefault, obj, userId);
          }),
        };
        const TableRowGroup = TableRowGroup2.TableRowGroup;
        const intl3 = intl4.intl;
        items[1] = hasOwnProperty(TableRowGroup, obj7, intl3.string(intl4.t["93ZDWE"]));
        tmp7 = hasOwnProperty(AnalyticsLocationProvider, obj2);
      }
      return tmp7;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let ignoredIDs;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        const fn = function l() {
          return ignoredIDs.getIgnoredIDs();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] !== stateFromStoresArray) {
        const obj2 = { userIds: stateFromStoresArray };
        const tmp11 = hasOwnProperty(closure_8, obj2);
        cResult[2] = stateFromStoresArray;
        cResult[3] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      let ignoredIDs;
      const items = [RelationshipStore];
      const obj = get_initialized;
      const obj2 = { userIds: obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs()) };
      return hasOwnProperty(closure_8, obj2);
    };
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUsersList.tsx");

export default tmp5;
