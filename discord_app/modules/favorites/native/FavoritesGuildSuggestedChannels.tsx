// discord_app/modules/favorites/native/FavoritesGuildSuggestedChannels.tsx
import noop from "noop";
import { View } from "getChannelIdFromDestinationId";
import items from "items";
import { NOOP } from "ME";
import { getScaledCategoryRowHeight as closure_8 } from "hairlineWidth";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useScaledRowHeight } from "../../main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { messagesProxy } from "../intl/FavoritesGuild.messages.js";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
({ useFavoritesGuildSuggestions: c5, useFavoritesGuildSuggestionsDismissal: closure_6 } = items);
({ jsx: c9, jsxs: c10 } = jsxProd);
const PX_8 = require("Themes").space.PX_8;
const PX_4 = require("Themes").space.PX_4;
let closure_13 = createCacheKey.createStyles({ container: { marginTop: PX_4 }, rows: { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: PX_8 } });
const result = require("items").fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

export default function FavoritesGuildSuggestedChannels() {
  let tmp = callback6();
  const tmp4 = useIsMobileVisualRefreshExperimentEnabled("FavoritesGuildSuggestedChannels");
  let obj = arr(15369);
  const categoryStyles = obj.useCategoryStyles(tmp4);
  arr = callback();
  const tmp7 = callback2();
  importDefault = tmp7;
  const items = [tmp7];
  const memo = React.useMemo(() => {
    const obj = { label: null, perform: null, Icon: null };
    const intl = arr(tmp9[10]).intl;
    obj[0] = intl.string(tmp7(tmp9[11]).F3dWTe);
    obj[1] = tmp7;
    obj[2] = arr(tmp9[12]).XSmallIcon;
    return obj;
  }, items);
  const tmp9 = useScaledRowHeight();
  const dependencyMap = tmp9;
  const items1 = [tmp9];
  React = React.useMemo(() => ({ height: closure_2 }), items1);
  let tmp10 = null;
  if (0 !== arr.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { name: null, withMarginTop: false, styles: null, isRefreshEnabled: null, trailingAction: null };
    let intl = tmp5(1236).intl;
    obj[0] = intl.string(messagesProxy.oHWnLy);
    obj[2] = categoryStyles;
    obj[3] = tmp4;
    obj[4] = memo;
    const items2 = [tmp5(15369).renderCategoryItem(obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.rows;
    obj1[1] = arr.map((result) => {
      let obj = { style: noop, children: null };
      obj = { result, onPressDestination: null, onLongPress: null, start: null, end: null, trailing: null };
      obj[1] = tmp7(tmp9[15]);
      obj[2] = outer1_7;
      obj[3] = 0 === arg1;
      obj[4] = arg1 === result.length - 1;
      obj = { variant: "secondary", size: "sm", grow: false, text: null, onPress: null };
      const intl = arr(tmp9[10]).intl;
      obj[3] = intl.string(result(tmp9[10]).t.OYkgVk);
      obj[4] = function onPress() {
        const tmp = outer1_1(outer1_2[15]);
        return tmp(callback(outer1_2[17]).getDestinationIdFromResult(callback));
      };
      obj[5] = outer1_9(result(tmp9[16]).Button, obj);
      obj[1] = outer1_9(tmp7(tmp9[14]), obj);
      return outer1_9(outer1_4, obj, "" + result.type + "-" + result.record.id);
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