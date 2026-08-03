// === Module 11991: AddFavoriteChannelModal ===

// Module 11991 (AddFavoriteChannelModal)
import UserRowModes from "UserRowModes";
import _slicedToArray from "_slicedToArray";
import messagesProxy from "messagesProxy";
import { View } from "SearchableDestinationListHeader";
import { MAX_FAVORITES_ADD_CHANNEL_COUNT as closure_7 } from "date";
import { UserRowModes } from "UserRowModes";
import jsxProd from "SearchableDestinationList";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
function AddFavoriteChannelModal(parentId) {
  parentId = parentId.parentId;
  const source = parentId.source;
  let notifyFavoriteAdded;
  let first;
  let callback;
  let height;
  const tmp = createCacheKey();
  let obj = parentId(notifyFavoriteAdded[9]);
  notifyFavoriteAdded = obj.useFavoriteAdded().notifyFavoriteAdded;
  const items = [source];
  const effect = height.useEffect(() => {
    const result = parentId(notifyFavoriteAdded[11]).trackFavoritesGuildAddModalOpened(source);
  }, items);
  const tmp4 = callback(height.useState([]), 2);
  first = tmp4[0];
  callback = tmp4[1];
  callback = height.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items1 = [notifyFavoriteAdded, parentId, first];
  const callback1 = height.useCallback(first(function*() {
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
            const callback = tmp2;
            let c1 = 0;
            let length;
            c3 = 1;
            c4 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = Promise.all(c3.map(outer1_0(outer1_2[12]).getOrResolveChannelIdFromDestinationId));
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
          length = arg1.filter(outer1_0(outer1_2[13]).isNotNullish);
          if (length.length > 0) {
            callback();
            obj = outer1_0(outer1_2[14]);
            if (length == null) {
              length = null;
            }
            obj.addFavoriteChannels(length, length, "modal");
            const tmp12 = length;
          }
          outer1_14();
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp24) {
        c4 = tmp;
        throw tmp24;
      }
    }
  }), items1);
  height = source(notifyFavoriteAdded[15])({ ignoreKeyboard: true }).height;
  const items2 = [height];
  obj = {
    style: height.useMemo(() => {
      const height = "100%";
      return { height };
    }, items2),
    children: null
  };
  obj = { title: null, onClose: null };
  const tmp2 = source(notifyFavoriteAdded[10])();
  const intl = parentId(notifyFavoriteAdded[18]).intl;
  obj[0] = intl.string(source(notifyFavoriteAdded[19]).Rp35U1);
  obj[1] = closeAddFavoriteChannelModal;
  const items3 = [callback2(source(notifyFavoriteAdded[17]), obj), ];
  let obj1 = { style: tmp.container, children: null };
  const items4 = [callback2(source(notifyFavoriteAdded[20]), { absolute: true }), callback2(source(notifyFavoriteAdded[21]), { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 }), ];
  const obj3 = { isVisible: first.length > 0, floatingBackgroundColor: tmp.container.backgroundColor, text: null, onPress: null };
  let obj2 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp2, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: first.length >= closure_7 };
  const tmp7 = source(notifyFavoriteAdded[17]);
  obj3[2] = parentId(notifyFavoriteAdded[23]).getFavoritesAddButtonLabel(first.length);
  obj3[3] = callback1;
  items4[2] = callback2(parentId(notifyFavoriteAdded[22]).ModalFloatingAction, obj3);
  obj1[1] = items4;
  items3[1] = callback3(View, obj1);
  obj[1] = items3;
  return callback3(View, obj);
}
function closeAddFavoriteChannelModal() {
  importDefault(4461).popWithKey(c12);
}
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { flex: 1, display: "flex", backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let c12 = "add-favorite-channel-modal";
let result = require("noop").fileFinishedImporting("modules/favorites/native/AddFavoriteChannelModal.tsx");

export const ADD_FAVORITE_CHANNEL_MODAL_KEY = "add-favorite-channel-modal";
export const openAddFavoriteChannelModal = function openAddFavoriteChannelModal(arg0) {
  let parentId;
  let source;
  ({ parentId, source } = arg0);
  importDefault(10051)(Promise.resolve({ default: AddFavoriteChannelModal }), { parentId, source }, c12);
};
export { closeAddFavoriteChannelModal };