// discord_app/modules/favorites/native/FavoritesGuildSuggestedChannels.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3225 from "../intl/FavoritesGuild.messages.js";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import useScaledRowHeightDefault from "../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import SearchableDestinationListRowDefault from "../../share/native/SearchableDestinationListRow.tsx";
import handleFavoritesGuildAddSuggestedChannelDefault from "../onboarding/handleFavoritesGuildAddSuggestedChannel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const FavoritesGuildSuggestionsStore = fn(16202);
({ useFavoritesGuildSuggestions: hasOwnProperty, useFavoritesGuildSuggestionsDismissal: metroRequire } =
  FavoritesGuildSuggestionsStore);
const NOOP = fn(1074).NOOP;
let closure_8 = fn(10118).getScaledCategoryRowHeight;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const PX_4 = nativeDefault.space.PX_4;
fn(4560);
const createStyles = {
  container: { marginTop: PX_4 },
  rows: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: PX_8 },
};
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

export default function FavoritesGuildSuggestedChannels() {
  let tmp = closure_13();
  let obj = arr(16106);
  const categoryStyles = obj.useCategoryStyles();
  arr = closure_5();
  const tmp5 = closure_6();
  importDefault = tmp5;
  const items = [tmp5];
  const memo = noop.useMemo(() => {
    const obj = { label: null, perform: null, Icon: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3225.F3dWTe);
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
    obj = { style: tmp.container, children: null };
    obj = { name: null, withMarginTop: false, styles: null, trailingAction: null };
    let intl = tmp2(1114).intl;
    obj.name = intl.string(_modDef3225.oHWnLy);
    obj.styles = categoryStyles;
    obj.trailingAction = memo;
    const items2 = [tmp2(16106).renderCategoryItem(obj)];
    const obj1 = {
      style: tmp.rows,
      children: arr.map((item, index) => {
        closure_0 = item;
        let obj = { style, children: null };
        obj = {
          result: item,
          onPressDestination: handleFavoritesGuildAddSuggestedChannelDefault,
          onLongPress: NOOP,
          start: 0 === index,
          end: index === arr.length - 1,
          trailing: null,
        };
        obj = { variant: "secondary", size: "sm", grow: false, text: null, onPress: null };
        const intl = util.intl;
        obj.text = intl.string(util.t.OYkgVk);
        obj.onPress = function onPress() {
          const tmp = closure_1(16204);
          return tmp(arr(10981).getDestinationIdFromResult(closure_0));
        };
        obj.trailing = React7(components_Button_Button.Button, obj);
        obj.children = React7(SearchableDestinationListRowDefault, obj);
        return React7(View, obj, "" + item.type + "-" + item.record.id);
      }),
    };
    items2[1] = closure_9(View, obj1);
    obj.children = items2;
    tmp9 = closure_10(View, obj);
    const tmp2Result = tmp2(16106);
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
