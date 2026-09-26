// discord_app/modules/favorites/native/FavoritesGuildSuggestedChannels.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3361 from "../intl/FavoritesGuild.messages.js";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import useScaledRowHeightDefault from "../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import SearchableDestinationListRowDefault from "../../share/native/SearchableDestinationListRow.tsx";
import handleFavoritesGuildAddSuggestedChannelDefault from "../onboarding/handleFavoritesGuildAddSuggestedChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const FavoritesGuildSuggestionsStore = fn(15836);
({ useFavoritesGuildSuggestions: hasOwnProperty, useFavoritesGuildSuggestionsDismissal: metroRequire } =
  FavoritesGuildSuggestionsStore);
const NOOP = fn(1074).NOOP;
let closure_8 = fn(9577).getScaledCategoryRowHeight;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(4836);
let closure_13 = createStyles.createStyles({
  container: { marginTop: PX_4 },
  rows: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: PX_8 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

export default function FavoritesGuildSuggestedChannels() {
  let tmp = closure_13();
  const categoryStyles = arr(15740).useCategoryStyles();
  arr = closure_5();
  const tmp5 = closure_6();
  importDefault = tmp5;
  const items = [tmp5];
  const memo = noop.useMemo(() => {
    const obj = { label: null, perform: null, Icon: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3361.F3dWTe);
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
    let intl = tmp2(1115).intl;
    obj3.name = intl.string(_modDef3361.oHWnLy);
    obj3.styles = categoryStyles;
    obj3.trailingAction = memo;
    const items2 = [tmp2(15740).renderCategoryItem(obj3)];
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
          const tmp = closure_1(15838);
          return tmp(arr(10444).getDestinationIdFromResult(closure_0));
        };
        obj2.trailing = React7(components_Button_Button.Button, obj3);
        obj.children = React7(SearchableDestinationListRowDefault, obj2);
        return React7(View, obj, "" + item.type + "-" + item.record.id);
      }),
    };
    items2[1] = closure_9(View, obj4);
    obj2.children = items2;
    tmp9 = closure_10(View, obj2);
    const tmp2Result = tmp2(15740);
  }
  return tmp9;
}
export const getFavoritesSuggestionsNoticeHeight = function getFavoritesSuggestionsNoticeHeight(fontScale, arg1, arg2) {
  let num = 0;
  if (0 !== arg2) {
    num = PX_4 + closure_8(fontScale) + arg2 * arg1 + PX_8;
  }
  return num;
};
