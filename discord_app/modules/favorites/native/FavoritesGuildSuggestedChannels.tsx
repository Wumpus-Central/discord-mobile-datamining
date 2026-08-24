// discord_app/modules/favorites/native/FavoritesGuildSuggestedChannels.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
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
let closure_13 = createCacheKey.createStyles({ container: { marginTop: PX_4 }, rows: { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: PX_8 } });
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

export default function FavoritesGuildSuggestedChannels() {
  let tmp = callback6();
  const tmp4 = useIsMobileVisualRefreshExperimentEnabledDefault("FavoritesGuildSuggestedChannels");
  let obj = arr(15369);
  const categoryStyles = obj.useCategoryStyles(tmp4);
  arr = callback();
  const tmp7 = callback2();
  importDefault = tmp7;
  const items = [tmp7];
  const memo = React.useMemo(() => {
    const obj = { label: null, perform: null, Icon: null };
    const intl = arr(1236).intl;
    obj[0] = intl.string(callback(3079).F3dWTe);
    obj[1] = callback;
    obj[2] = arr(6368).XSmallIcon;
    return obj;
  }, items);
  const tmp9 = useScaledRowHeightDefault();
  dependencyMap = tmp9;
  const items1 = [tmp9];
  React = React.useMemo(() => ({ height: closure_2 }), items1);
  let tmp10 = null;
  if (0 !== arr.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { name: null, withMarginTop: false, styles: null, isRefreshEnabled: null, trailingAction: null };
    let intl = tmp5(1236).intl;
    obj[0] = intl.string(messagesProxyDefault.oHWnLy);
    obj[2] = categoryStyles;
    obj[3] = tmp4;
    obj[4] = memo;
    const items2 = [tmp5(15369).renderCategoryItem(obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.rows;
    obj1[1] = arr.map((result) => {
      let obj = { style: closure_3, children: null };
      obj = { result, onPressDestination: callback(15466), onLongPress: closure_1_7, start: 0 === arg1, end: arg1 === result.length - 1, trailing: null };
      obj = { variant: "secondary", size: "sm", grow: false, text: null, onPress: null };
      const intl = arr(1236).intl;
      obj[3] = intl.string(result(1236).t.OYkgVk);
      obj[4] = function onPress() {
        const tmp = closure_1_1(closure_1_2[15]);
        return tmp(callback(closure_1_2[17]).getDestinationIdFromResult(callback));
      };
      obj[5] = closure_1_9(result(4745).Button, obj);
      obj[1] = closure_1_9(callback(15465), obj);
      return closure_1_9(closure_1_4, obj, "" + result.type + "-" + result.record.id);
    });
    items2[1] = callback4(View, obj1);
    obj[1] = items2;
    tmp10 = callback5(View, obj);
    const tmp5Result = tmp5(15369);
  }
  return tmp10;
};
export const getFavoritesSuggestionsNoticeHeight = function getFavoritesSuggestionsNoticeHeight(fontScale, arg1, arg2) {
  let num = 0;
  if (0 !== arg2) {
    num = PX_4 + callback3(fontScale) + arg2 * arg1 + PX_8;
  }
  return num;
};