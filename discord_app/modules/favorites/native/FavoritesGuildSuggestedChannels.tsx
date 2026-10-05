// discord_app/modules/favorites/native/FavoritesGuildSuggestedChannels.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3367 from "../intl/FavoritesGuild.messages.js";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import useScaledRowHeightDefault from "../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import SearchableDestinationListRowDefault from "../../share/native/SearchableDestinationListRow.tsx";
import handleFavoritesGuildAddSuggestedChannelDefault from "../onboarding/handleFavoritesGuildAddSuggestedChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const FavoritesGuildSuggestionsStore = fn(16127);
({ useFavoritesGuildSuggestions: hasOwnProperty, useFavoritesGuildSuggestionsDismissal: metroRequire } =
  FavoritesGuildSuggestionsStore);
const NOOP = fn(1085).NOOP;
let closure_8 = fn(11697).getScaledCategoryRowHeight;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles({
  container: { marginTop: PX_4 },
  rows: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: PX_8 },
});
const ReactCompilerGating = fn(558);
let obj2 = {
  container: { marginTop: PX_4 },
  rows: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: PX_8 },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = arr(576).c(21);
      const tmp4 = closure_13();
      let obj = arr(576);
      const categoryStyles = arr(16032).useCategoryStyles();
      arr = closure_5();
      const tmp6 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3367.F3dWTe);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp6) {
        let obj3 = { label: first, perform: tmp6, Icon: tmp(6017).XSmallIcon };
        cResult[1] = tmp6;
        cResult[2] = obj3;
        let tmp10 = obj3;
      } else {
        tmp10 = cResult[2];
      }
      const tmp12 = useScaledRowHeightDefault();
      if (cResult[3] !== tmp12) {
        const obj4 = { height: tmp12 };
        cResult[3] = tmp12;
        cResult[4] = obj4;
        let tmp13 = obj4;
      } else {
        tmp13 = cResult[4];
      }
      importDefault = tmp13;
      if (0 === arr.length) {
        return null;
      } else {
        if (cResult[5] === categoryStyles) {
          if (cResult[6] === tmp10) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] === tmp13) {
            if (cResult[9] === arr) {
              if (cResult[14] === tmp4.rows) {
                if (cResult[15] === tmp17) {
                  let tmp21 = cResult[16];
                }
                if (cResult[17] === tmp4.container) {
                  if (cResult[18] === tmp14) {
                    if (cResult[19] === tmp21) {
                      let tmp25 = cResult[20];
                    }
                    return tmp25;
                  }
                }
                const obj5 = { style: tmp30, children: null };
                const items = [tmp14, tmp21];
                obj5.children = items;
                const tmp28 = closure_10(View, obj5);
                cResult[17] = tmp4.container;
                cResult[18] = tmp14;
                cResult[19] = tmp21;
                cResult[20] = tmp28;
                tmp25 = tmp28;
              }
              const obj6 = { style: tmp16, children: cResult[10] };
              const tmp24 = closure_9(View, obj6);
              cResult[14] = tmp4.rows;
              cResult[15] = cResult[10];
              cResult[16] = tmp24;
              tmp21 = tmp24;
            }
          }
          if (cResult[11] === tmp13) {
            if (cResult[12] === arr.length) {
              let tmp18 = cResult[13];
            }
            const mapped = arr.map(tmp18);
            cResult[8] = tmp13;
            cResult[9] = arr;
            cResult[10] = mapped;
          }
          const fn = function x(result, arg1) {
            closure_0 = result;
            const obj = { style, children: null };
            const obj2 = {
              result,
              onPressDestination: handleFavoritesGuildAddSuggestedChannelDefault,
              onLongPress: NOOP,
              start: 0 === arg1,
              end: arg1 === arr.length - 1,
              trailing: null,
            };
            const obj3 = { variant: "secondary", size: "sm", grow: false, text: null, onPress: null };
            const intl = util.intl;
            obj3.text = intl.string(util.t.OYkgVk);
            obj3.onPress = function onPress() {
              const tmp = closure_1(16129);
              return tmp(arr(10711).getDestinationIdFromResult(closure_0));
            };
            obj2.trailing = options(components_Button_Button.Button, obj3);
            obj.children = options(SearchableDestinationListRowDefault, obj2);
            return options(View, obj, "" + result.type + "-" + result.record.id);
          };
          cResult[11] = tmp13;
          cResult[12] = arr.length;
          cResult[13] = fn;
          tmp18 = fn;
        }
        const obj7 = { name: null, withMarginTop: false, styles: null, trailingAction: null };
        const intl2 = tmp(1126).intl;
        obj7.name = intl2.string(_modDef3367.oHWnLy);
        obj7.styles = categoryStyles;
        obj7.trailingAction = tmp10;
        const renderCategoryItemResult = tmp(16032).renderCategoryItem(obj7);
        cResult[5] = categoryStyles;
        cResult[6] = tmp10;
        cResult[7] = renderCategoryItemResult;
        tmp14 = renderCategoryItemResult;
        const tmpResult = tmp(16032);
      }
      let obj2 = arr(16032);
    }
  : () => {
      let tmp = closure_13();
      const categoryStyles = arr(16032).useCategoryStyles();
      arr = closure_5();
      const tmp5 = closure_6();
      importDefault = tmp5;
      const items = [tmp5];
      const memo = noop.useMemo(() => {
        const obj = { label: null, perform: null, Icon: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3367.F3dWTe);
        obj.perform = perform;
        obj.Icon = XSmallIcon.XSmallIcon;
        return obj;
      }, items);
      const tmp8 = useScaledRowHeightDefault();
      dependencyMap = tmp8;
      const items1 = [tmp8];
      noop = noop.useMemo(() => ({ height }), items1);
      let tmp9 = null;
      if (0 !== arr.length) {
        let obj2 = { style: tmp.container, children: null };
        let obj3 = { name: null, withMarginTop: false, styles: null, trailingAction: null };
        let intl = tmp2(1126).intl;
        obj3.name = intl.string(_modDef3367.oHWnLy);
        obj3.styles = categoryStyles;
        obj3.trailingAction = memo;
        const items2 = [tmp2(16032).renderCategoryItem(obj3)];
        const obj4 = {
          style: tmp.rows,
          children: arr.map((item, index) => {
            closure_0 = item;
            const obj = { style, children: null };
            const obj2 = {
              result: item,
              onPressDestination: handleFavoritesGuildAddSuggestedChannelDefault,
              onLongPress: NOOP,
              start: 0 === index,
              end: index === arr.length - 1,
              trailing: null,
            };
            const obj3 = { variant: "secondary", size: "sm", grow: false, text: null, onPress: null };
            const intl = util.intl;
            obj3.text = intl.string(util.t.OYkgVk);
            obj3.onPress = function onPress() {
              const tmp = closure_1(16129);
              return tmp(arr(10711).getDestinationIdFromResult(closure_0));
            };
            obj2.trailing = options(components_Button_Button.Button, obj3);
            obj.children = options(SearchableDestinationListRowDefault, obj2);
            return options(View, obj, "" + item.type + "-" + item.record.id);
          }),
        };
        items2[1] = closure_9(View, obj4);
        obj2.children = items2;
        tmp9 = closure_10(View, obj2);
        const tmp2Result = tmp2(16032);
      }
      return tmp9;
    };
export const getFavoritesSuggestionsNoticeHeight = function getFavoritesSuggestionsNoticeHeight(fontScale, arg1, arg2) {
  let num = 0;
  if (0 !== arg2) {
    num = PX_4 + closure_8(fontScale) + arg2 * arg1 + PX_8;
  }
  return num;
};
