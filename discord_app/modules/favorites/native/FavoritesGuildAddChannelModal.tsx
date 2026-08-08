// discord_app/modules/favorites/native/FavoritesGuildAddChannelModal.tsx
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
let result = require("noop").fileFinishedImporting("modules/favorites/native/FavoritesGuildAddChannelModal.tsx");

export default function FavoritesGuildAddChannelModal(parentId) {
  parentId = parentId.parentId;
  const source = parentId.source;
  let first;
  let callback;
  let height;
  const tmp = createCacheKey();
  const items = [source];
  const effect = React.useEffect(() => {
    const result = parentId(first[10]).trackFavoritesGuildAddModalOpened(source);
  }, items);
  const tmp4 = height(React.useState([]), 2);
  first = tmp4[0];
  callback = tmp4[1];
  callback = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items1 = [parentId, first];
  const callback1 = React.useCallback(callback(function*() {
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
            obj1[0] = Promise.all(outer1_2.map(outer1_0(outer1_2[11]).getOrResolveChannelIdFromDestinationId));
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          length = arg1.filter(outer1_0(outer1_2[12]).isNotNullish);
          if (0 !== length.length) {
            outer1_1(outer1_2[15])();
            obj1 = outer1_0(outer1_2[16]);
            length = outer1_0;
            if (outer1_0 == null) {
              length = null;
            }
            obj1.addFavoriteChannels(length, length, "modal");
            obj2 = outer1_0(outer1_2[17]);
            const result = obj2.closeFavoritesGuildAddChannelModal();
            const tmp21 = length;
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
  }), items1);
  height = source(first[18])({ ignoreKeyboard: true }).height;
  const items2 = [height];
  let obj = {
    style: React.useMemo(() => {
      const height = "100%";
      return { height };
    }, items2),
    children: null
  };
  obj = { title: null, onClose: null };
  const tmp2 = source(first[9])();
  let intl = parentId(first[14]).intl;
  obj[0] = intl.string(source(first[21]).Rp35U1);
  obj[1] = parentId(first[17]).closeFavoritesGuildAddChannelModal;
  const items3 = [callback2(source(first[20]), obj), ];
  obj = { style: tmp.container, children: null };
  const items4 = [callback2(source(first[22]), { absolute: true }), callback2(source(first[23]), { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 }), ];
  let obj2 = { isVisible: first.length > 0, floatingBackgroundColor: tmp.container.backgroundColor, text: null, onPress: null };
  let obj1 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 };
  const tmp7 = source(first[20]);
  obj2[2] = parentId(first[25]).getFavoritesAddButtonLabel(first.length);
  obj2[3] = callback1;
  items4[2] = callback2(parentId(first[24]).ModalFloatingAction, obj2);
  obj[1] = items4;
  items3[1] = callback3(View, obj);
  obj[1] = items3;
  return callback3(View, obj);
};