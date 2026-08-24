// === Module 12009: FavoritesGuildAddChannelModal ===

// Module 12009 (FavoritesGuildAddChannelModal)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MAX_FAVORITES_ADD_CHANNEL_COUNT as closure_7 } from "date" /* 1429 */;
import { UserRowModes } from "UserRowModes" /* 9118 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { flex: 1, display: "flex", backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx");

export default function FavoritesGuildAddChannelModal(parentId) {
  parentId = parentId.parentId;
  let first;
  dependencyMap = undefined;
  let height;
  const tmp = callback3();
  first(12011)(parentId.source);
  const tmp6 = callback(React.useState([]), 2);
  first = tmp6[0];
  dependencyMap = tmp6[1];
  callback = React.useCallback((arg0) => {
    dependencyMap(arg0);
  }, []);
  const items = [parentId, first];
  const callback1 = React.useCallback(height(function*() {
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
            c2 = 0;
            closure_1 = tmp2;
            let length;
            c3 = 1;
            c4 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = Promise.all(closure_1_1.map(closure_1_0(closure_1_2[11]).getOrResolveChannelIdFromDestinationId));
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          length = arg1.filter(closure_1_0(closure_1_2[12]).isNotNullish);
          if (0 !== length.length) {
            obj1 = closure_1_0(closure_1_2[15]);
            let obj3 = { channelIds: null, parentId: null, source: "modal" };
            obj3[0] = length;
            length = closure_1_0;
            if (closure_1_0 == null) {
              length = null;
            }
            obj3[1] = length;
            obj1.addFavoriteChannels(obj3);
            obj3 = closure_1_0(closure_1_2[16]);
            const result = obj3.closeFavoritesGuildAddChannelModal();
          } else {
            obj = closure_1_0(closure_1_2[13]);
            const intl = closure_1_0(closure_1_2[14]).intl;
            obj.presentError(intl.string(closure_1_0(closure_1_2[14]).t.R0RpRX));
          }
          c4 = 3;
        }
      } catch (tmp31) {
        c4 = tmp;
        throw tmp31;
      }
    }
  }), items);
  height = first(1494)({ ignoreKeyboard: true }).height;
  const items1 = [height];
  let obj = {
    style: React.useMemo(() => {
      height = "100%";
      return { height };
    }, items1),
    children: null
  };
  obj = { title: null, onClose: null };
  const tmp2 = first;
  const tmp4 = first(12010)();
  let intl = parentId(1236).intl;
  obj[0] = intl.string(first(3082).Rp35U1);
  obj[1] = parentId(12008).closeFavoritesGuildAddChannelModal;
  const items2 = [callback2(first(9127), obj), ];
  obj = { style: tmp.container, children: null };
  const items3 = [callback2(first(9128), { absolute: true }), , ];
  obj1 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp4, insetEnd: null, disableGradient: true, disableStickySections: true, disableSelection: null };
  let num = 0;
  const tmp12 = first(9127);
  if (first.length > 0) {
    num = tmp2(712).space.PX_80;
  }
  obj1[4] = num;
  obj1[7] = first.length >= closure_7;
  items3[1] = callback2(first(9129), obj1);
  let obj2 = { isVisible: first.length > 0, floatingBackgroundColor: tmp.container.backgroundColor, text: null, onPress: null };
  const tmp14 = first(9129);
  obj2[2] = parentId(12014).getFavoritesAddButtonLabel(first.length);
  obj2[3] = callback1;
  items3[2] = callback2(parentId(12012).ModalFloatingAction, obj2);
  obj[1] = items3;
  items2[1] = closure_10(View, obj);
  obj[1] = items2;
  return closure_10(View, obj);
};