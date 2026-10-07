// discord_app/modules/user_settings/content_and_social/native/BlockedUsersListV2.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import Blocked from "../../../../design/components/Illustration/native/redesign/generated/Blocked.tsx";
import BlockedUserRowV2Default from "BlockedUserRowV2.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  list: { flex: 1, paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 },
  sectionLabelStyle: null,
};
let obj3 = { flex: 1, paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.sectionLabelStyle = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userIds) => {
      const cResult = c.c(21);
      userIds = userIds.userIds;
      const tmp4 = closure_7();
      const analyticsLocations = useAnalyticsLocationsDefault(
        AnalyticsLocationDefault.BLOCKED_USERS,
      ).analyticsLocations;
      if (0 === userIds.length) {
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { Illustration: Blocked.Blocked, body: null };
          const intl3 = util.intl;
          obj2.body = intl3.string(util.t.nnsFif);
          const tmp34 = hasOwnProperty(native.EmptyState, obj2);
          cResult[0] = tmp34;
          let first = tmp34;
        } else {
          first = cResult[0];
        }
        return first;
      } else {
        ({ list, sectionLabelStyle } = tmp4);
        if (cResult[1] !== userIds.length) {
          const intl = util.intl;
          const obj3 = { numberOfBlockedUsers: userIds.length };
          const formatToPlainStringResult = intl.formatToPlainString(util.t["c+JVEB"], obj3);
          cResult[1] = userIds.length;
          cResult[2] = formatToPlainStringResult;
          let tmp6 = formatToPlainStringResult;
        } else {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp4.sectionLabelStyle) {
          if (cResult[4] === tmp6) {
            let tmp8 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = util.intl;
            const stringResult = intl2.string(util.t.PFOUKW);
            cResult[6] = stringResult;
            let tmp12 = stringResult;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] !== userIds) {
            const _Symbol2 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const fn = function v(userId) {
                return closure_1_5(BlockedUserRowV2Default, { userId }, userId);
              };
              cResult[9] = fn;
              let tmp15 = fn;
            } else {
              tmp15 = cResult[9];
            }
            const mapped = userIds.map(tmp15);
            cResult[7] = userIds;
            cResult[8] = mapped;
          } else {
            if (cResult[10] !== cResult[8]) {
              const obj4 = { hasIcons: true, children: tmp14 };
              const tmp20 = hasOwnProperty(TableRowGroup.TableRowGroup, obj4, tmp12);
              cResult[10] = tmp14;
              cResult[11] = tmp20;
              let tmp18 = tmp20;
            } else {
              tmp18 = cResult[11];
            }
            if (cResult[12] === tmp8) {
              if (cResult[13] === tmp18) {
                let tmp21 = cResult[14];
              }
              if (cResult[15] === tmp4.list) {
                if (cResult[16] === tmp21) {
                  let tmp25 = cResult[17];
                }
                if (cResult[18] === analyticsLocations) {
                  if (cResult[19] === tmp25) {
                    let tmp28 = cResult[20];
                  }
                  return tmp28;
                }
                const obj5 = { value: analyticsLocations, children: tmp25 };
                const tmp30 = hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj5);
                cResult[18] = analyticsLocations;
                cResult[19] = tmp25;
                cResult[20] = tmp30;
                tmp28 = tmp30;
              }
              const obj6 = { bottom: true, style: list, children: tmp21 };
              const tmp27 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj6);
              cResult[15] = tmp4.list;
              cResult[16] = tmp21;
              cResult[17] = tmp27;
              tmp25 = tmp27;
            }
            const obj7 = { children: null };
            const items = [tmp8, tmp18];
            obj7.children = items;
            const tmp24 = timestampProducer(ScrollView, obj7);
            cResult[12] = tmp8;
            cResult[13] = tmp18;
            cResult[14] = tmp24;
            tmp21 = tmp24;
          }
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
      userIds = userIds.userIds;
      const tmp = closure_7();
      useAnalyticsLocationsDefault;
      if (0 === userIds.length) {
        const obj = { Illustration: Blocked.Blocked, body: null };
        const intl = util.intl;
        obj.body = intl.string(util.t.nnsFif);
        let tmp7 = hasOwnProperty(native.EmptyState, obj);
      } else {
        const obj2 = { value: tmp4, children: null };
        const obj3 = { bottom: true, style: tmp.list, children: null };
        const obj4 = { children: null };
        const obj5 = {
          style: tmp.sectionLabelStyle,
          variant: "text-sm/semibold",
          color: "text-default",
          children: null,
        };
        const intl2 = util.intl;
        const obj6 = { numberOfBlockedUsers: userIds.length };
        obj5.children = intl2.formatToPlainString(util.t["c+JVEB"], obj6);
        const items = [hasOwnProperty(Text_Text.Text, obj5)];
        const obj7 = {
          hasIcons: true,
          children: userIds.map((userId) => closure_1_5(BlockedUserRowV2Default, { userId }, userId)),
        };
        const intl3 = util.intl;
        items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj7, intl3.string(util.t.PFOUKW));
        obj4.children = items;
        obj3.children = timestampProducer(ScrollView, obj4);
        obj2.children = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj3);
        tmp7 = hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj2);
      }
      return tmp7;
    };
ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUsersListV2.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        const fn = function l() {
          return blockedIDs.getBlockedIDs();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] !== stateFromStoresArray) {
        const obj2 = { userIds: stateFromStoresArray };
        const tmp11 = hasOwnProperty(closure_8, obj2);
        cResult[2] = stateFromStoresArray;
        cResult[3] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      const items = [RelationshipStore];
      return hasOwnProperty(closure_8, {
        userIds: initialize.useStateFromStoresArray(items, () => blockedIDs.getBlockedIDs()),
      });
    };
