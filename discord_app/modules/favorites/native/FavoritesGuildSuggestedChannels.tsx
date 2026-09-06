// discord_app/modules/favorites/native/FavoritesGuildSuggestedChannels.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../intl/FavoritesGuild.messages.js";
import useScaledRowHeightDefault from "../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import items from "../FavoritesGuildSuggestionsStore.tsx";
import { NOOP } from "../../../Constants.tsx";
import { getScaledCategoryRowHeight as closure_8 } from "../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ useFavoritesGuildSuggestions: c5, useFavoritesGuildSuggestionsDismissal: closure_6 } = items);
({ jsx: c9, jsxs: c10 } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
const PX_4 = ThemesDefault.space.PX_4;
let closure_13 = createCacheKey.createStyles({
  container: { marginTop: PX_4 },
  rows: { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: PX_8 },
});
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

export default function FavoritesGuildSuggestedChannels() {
  let tmp = callback6();
  let obj = arr(16106);
  const categoryStyles = obj.useCategoryStyles();
  arr = callback();
  const tmp5 = callback2();
  importDefault = tmp5;
  const items = [tmp5];
  const memo = React.useMemo(() => {
    const obj = { label: null, perform: null, Icon: null };
    const intl = arr(1114).intl;
    obj[0] = intl.string(callback(3225).F3dWTe);
    obj[1] = callback;
    obj[2] = arr(5680).XSmallIcon;
    return obj;
  }, items);
  const tmp8 = useScaledRowHeightDefault();
  dependencyMap = tmp8;
  const items1 = [tmp8];
  React = React.useMemo(() => ({ height: closure_2 }), items1);
  let tmp9 = null;
  if (0 !== arr.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { name: null, withMarginTop: false, styles: null, trailingAction: null };
    let intl = tmp2(1114).intl;
    obj[0] = intl.string(messagesProxyDefault.oHWnLy);
    obj[2] = categoryStyles;
    obj[3] = memo;
    const items2 = [tmp2(16106).renderCategoryItem(obj)];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.rows;
    obj1[1] = arr.map((result) => {
      let obj = { style: closure_3, children: null };
      obj = {
        result,
        onPressDestination: callback(16204),
        onLongPress: closure_1_7,
        start: 0 === arg1,
        end: arg1 === result.length - 1,
        trailing: null,
      };
      obj = { variant: "secondary", size: "sm", grow: false, text: null, onPress: null };
      const intl = arr(1114).intl;
      obj[3] = intl.string(result(1114).t.OYkgVk);
      obj[4] = function onPress() {
        const tmp = closure_1_1(closure_1_2[14]);
        return tmp(callback(closure_1_2[16]).getDestinationIdFromResult(callback));
      };
      obj[5] = closure_1_9(result(4975).Button, obj);
      obj[1] = closure_1_9(callback(16203), obj);
      return closure_1_9(closure_1_4, obj, "" + result.type + "-" + result.record.id);
    });
    items2[1] = callback4(View, obj1);
    obj[1] = items2;
    tmp9 = callback5(View, obj);
    const tmp2Result = tmp2(16106);
  }
  return tmp9;
}
export const getFavoritesSuggestionsNoticeHeight = function getFavoritesSuggestionsNoticeHeight(fontScale, arg1, arg2) {
  let num = 0;
  if (0 !== arg2) {
    num = PX_4 + callback3(fontScale) + arg2 * arg1 + PX_8;
  }
  return num;
};
