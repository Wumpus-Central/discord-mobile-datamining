// discord_app/modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx
import UserRowModes from "UserRowModes";
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "openFavoritesGuildAddChannelModal";
import { MAX_FAVORITES_ADD_CHANNEL_COUNT as closure_7 } from "date";
import { UserRowModes } from "UserRowModes";
import jsxProd from "messagesProxy";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { flex: 1, display: "flex", backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("noop").fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx");

export default function FavoritesGuildAddChannelModal(parentId) {
  parentId = parentId.parentId;
  let first;
  let dependencyMap;
  let height;
  const tmp = createCacheKey();
  first(12138)(parentId.source);
  const tmp4 = callback(React.useState([]), 2);
  first = tmp4[0];
  dependencyMap = tmp4[1];
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
            let c2 = 0;
            let closure_1 = tmp2;
            let length;
            c3 = 1;
            c4 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = Promise.all(outer1_1.map(outer1_0(outer1_2[11]).getOrResolveChannelIdFromDestinationId));
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
          length = arg1.filter(outer1_0(outer1_2[12]).isNotNullish);
          if (0 !== length.length) {
            outer1_1(outer1_2[15])();
            obj1 = outer1_0(outer1_2[16]);
            let obj3 = { channelIds: null, parentId: null, source: "modal" };
            obj3[0] = length;
            length = outer1_0;
            if (outer1_0 == null) {
              length = null;
            }
            obj3[1] = length;
            obj1.addFavoriteChannels(obj3);
            obj3 = outer1_0(outer1_2[17]);
            const result = obj3.closeFavoritesGuildAddChannelModal();
          } else {
            obj = outer1_0(outer1_2[13]);
            const intl = outer1_0(outer1_2[14]).intl;
            obj.presentError(intl.string(outer1_0(outer1_2[14]).t.R0RpRX));
          }
          c4 = 3;
        }
      } catch (tmp34) {
        c4 = tmp;
        throw tmp34;
      }
    }
  }), items);
  height = first(1474)({ ignoreKeyboard: true }).height;
  const items1 = [height];
  let obj = {
    style: React.useMemo(() => {
      const height = "100%";
      return { height };
    }, items1),
    children: null
  };
  obj = { title: null, onClose: null };
  const tmp2 = first(12137)();
  let intl = parentId(1236).intl;
  obj[0] = intl.string(first(3030).Rp35U1);
  obj[1] = parentId(12135).closeFavoritesGuildAddChannelModal;
  const items2 = [callback2(first(10245), obj), ];
  obj = { style: tmp.container, children: null };
  const items3 = [callback2(first(4848), { absolute: true }), callback2(first(10246), { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 }), ];
  let obj2 = { isVisible: first.length > 0, floatingBackgroundColor: tmp.container.backgroundColor, text: null, onPress: null };
  let obj1 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 };
  const tmp7 = first(10245);
  obj2[2] = parentId(12139).getFavoritesAddButtonLabel(first.length);
  obj2[3] = callback1;
  items3[2] = callback2(parentId(10265).ModalFloatingAction, obj2);
  obj[1] = items3;
  items2[1] = callback3(View, obj);
  obj[1] = items2;
  return callback3(View, obj);
};