// discord_app/modules/favorites/native/FavoritesGuildSuggestedChannels.tsx
import closure_3 from "hairlineWidth";
import set from "set";
import { View } from "SearchableDestinationListRow";
import items from "items";
import { NOOP } from "ME";
import hairlineWidth from "hairlineWidth";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
({ useFavoritesGuildSuggestions: closure_6, useFavoritesGuildSuggestionsDismissal: error } = items);
({ CATEGORY_MARGIN_TOP: c9, getScaledCategoryRowHeight: c10 } = hairlineWidth);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
const PX_8 = require("Themes").space.PX_8;
let closure_14 = createCacheKey.createStyles({ rows: { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: PX_8 } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/favorites/native/FavoritesGuildSuggestedChannels.tsx");

export default function FavoritesGuildSuggestedChannels() {
  const tmp4 = canDismiss(dismiss[9])("FavoritesGuildSuggestedChannels");
  let obj = _require(dismiss[10]);
  const categoryStyles = obj.useCategoryStyles(tmp4);
  const arr = callback2();
  _require = arr;
  const tmp7 = callback3();
  canDismiss = tmp7.canDismiss;
  dismiss = tmp7.dismiss;
  let items = [canDismiss, dismiss];
  const memo = React.useMemo(() => {
    let tmp = null;
    if (canDismiss) {
      const obj = { label: null, perform: null, Icon: null };
      const intl = lib(dismiss[11]).intl;
      obj[0] = intl.string(canDismiss(dismiss[12]).F3dWTe);
      obj[1] = dismiss;
      obj[2] = lib(dismiss[13]).XSmallIcon;
      tmp = obj;
    }
    return tmp;
  }, items);
  const tmp9 = canDismiss(dismiss[14])();
  let callback = tmp9;
  const items1 = [tmp9];
  React = React.useMemo(() => ({ height: closure_3 }), items1);
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp5;
              let closure_1 = tmp2;
              let callback;
              let obj1 = callback(outer1_2[15]);
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.getOrResolveChannelIdFromDestinationId(callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback = arg1;
            if (null != callback) {
              const obj2 = { channelIds: null, categoryName: null, source: "suggestions" };
              const items = [callback];
              obj2[0] = items;
              const intl = callback(outer1_2[11]).intl;
              obj2[1] = intl.string(callback(outer1_2[11]).t.k8fFjp);
              const result = callback(outer1_2[16]).addFavoriteChannelsToCategory(obj2);
              const obj6 = callback(outer1_2[16]);
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  let closure_5 = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, []);
  let tmp10 = null;
  if (0 !== arr.length) {
    obj = { children: null };
    obj = { name: null, withMarginTop: true, styles: null, isRefreshEnabled: null, trailingAction: null };
    let intl = tmp5(tmp3[11]).intl;
    obj[0] = intl.string(canDismiss(tmp3[12]).oHWnLy);
    obj[2] = categoryStyles;
    obj[3] = tmp4;
    obj[4] = memo;
    const items2 = [tmp5(tmp3[10]).renderCategoryItem(obj), ];
    let obj1 = { style: null, children: null };
    obj1[0] = tmp.rows;
    obj1[1] = arr.map((result) => {
      const lib = result;
      let obj = { style: set, children: null };
      obj = { result, onPressDestination: closure_5, onLongPress: outer1_8, start: 0 === arg1, end: arg1 === lib.length - 1, trailing: null };
      obj = { variant: "secondary", size: "sm", grow: false, text: null, onPress: null };
      const intl = lib(dismiss[11]).intl;
      obj[3] = intl.string(lib(dismiss[11]).t.OYkgVk);
      obj[4] = function onPress() {
        return outer1_5(callback(dismiss[15]).getDestinationIdFromResult(callback));
      };
      obj[5] = outer1_11(lib(dismiss[18]).Button, obj);
      obj[1] = outer1_11(canDismiss(dismiss[17]), obj);
      return outer1_11(closure_5, obj, "" + result.type + "-" + result.record.id);
    });
    items2[1] = callback5(closure_5, obj1);
    obj[0] = items2;
    tmp10 = callback6(closure_5, obj);
    const tmp5Result = tmp5(tmp3[10]);
  }
  return tmp10;
};
export const getFavoritesSuggestionsNoticeHeight = function getFavoritesSuggestionsNoticeHeight(fontScale, arg1, arg2) {
  let num = 0;
  if (0 !== arg2) {
    num = closure_9 + callback4(fontScale) + arg2 * arg1 + PX_8;
  }
  return num;
};