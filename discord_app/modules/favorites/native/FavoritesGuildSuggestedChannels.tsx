// === Module 15463: PX_8 ===

// Module 15463 (PX_8)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import messagesProxyDefault from "messagesProxy" /* 3079 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 8633 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import items from "items" /* 15464 */;
import { NOOP } from "ME" /* 676 */;
import { getScaledCategoryRowHeight as closure_8 } from "hairlineWidth" /* 10055 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
({ useFavoritesGuildSuggestions: c5, useFavoritesGuildSuggestionsDismissal: closure_6 } = items);
({ jsx: c9, jsxs: c10 } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
const PX_4 = ThemesDefault.space.PX_4;
let closure_13 = createCacheKey.createStyles({ container: { marginTop: PX_4 }, rows: { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: PX_8 } });
const result = require("obj132").fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

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
    obj1[1] = arr.map((item, index) => {
      { result: item, onPressDestination: callback(15466), onLongPress: NOOP, start: 0 === index, end: index === item.length - 1, trailing: null };
      const obj = { variant: "secondary", size: "sm", grow: false, text: null, onPress: null };
      const intl = arr(1236).intl;
      obj[3] = intl.string(item(1236).t.OYkgVk);
      obj[4] = function onPress() {
        const tmp = closure_1_1(closure_1_2[15]);
        return tmp(item(closure_1_2[17]).getDestinationIdFromResult(item));
      };
      obj[5] = closure_1_9(item(4745).Button, obj);
      obj[1] = closure_1_9(callback(15465), obj);
      return closure_1_9(View, obj, "" + item.type + "-" + item.record.id);
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