// === Module 10978: FavoritesGuildAddChannelModal ===

// Module 10978 (FavoritesGuildAddChannelModal)
import nativeDefault from "native" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
let closure_7 = fn(1970).MAX_FAVORITES_ADD_CHANNEL_COUNT;
const UserRowModes = fn(10860).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.container = createStyles;
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx");

export default function FavoritesGuildAddChannelModal(parentId) {
  parentId = parentId.parentId;
  let first;
  let height;
  const tmp = closure_11();
  first(10980)(parentId.source);
  const tmp6 = _slicedToArray(noop.useState([]), 2);
  first = tmp6[0];
  dependencyMap = tmp6[1];
  const callback = noop.useCallback((arg0) => {
    closure_2(arg0);
  }, []);
  const items = [parentId, first];
  const callback1 = noop.useCallback(height(function*(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            dependencyMap = 0;
            closure_1 = tmp2;
            closure_129_0 = undefined;
            c3 = 1;
            c4 = 1;
            let obj1 = { value: Promise.all(first.map(parentId(10981).getOrResolveChannelIdFromDestinationId)), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_0 = value.filter(parentId(1369).isNotNullish);
          if (0 !== closure_129_0.length) {
            obj1 = parentId(10223);
            let obj3 = { channelIds: closure_129_0, parentId: null, source: "modal" };
            parentId = closure_130_0;
            if (closure_130_0 == null) {
              parentId = null;
            }
            obj3.parentId = parentId;
            obj1.addFavoriteChannels(obj3);
            obj3 = parentId(10976);
            const result = obj3.closeFavoritesGuildAddChannelModal();
          } else {
            obj = parentId(4258);
            const intl = parentId(1114).intl;
            obj.presentError(intl.string(parentId(1114).t.R0RpRX));
          }
          c4 = 3;
        }
      } catch (tmp31) {
        c4 = tmp;
        throw tmp31;
      }
    }
  }), items);
  height = first(1477)({ ignoreKeyboard: true }).height;
  const items1 = [height];
  let obj = {
    style: noop.useMemo(() => {
      height = "100%";
      return { height };
    }, items1),
    children: null
  };
  obj = { title: null, onClose: null };
  const tmp2 = first;
  const tmp4 = first(10979)();
  let intl = parentId(1114).intl;
  obj.title = intl.string(first(3225).Rp35U1);
  obj.onClose = parentId(10976).closeFavoritesGuildAddChannelModal;
  const items2 = [closure_9(first(10983), obj), ];
  obj = { style: tmp.container, children: null };
  const items3 = [closure_9(first(5125), { absolute: true }), , ];
  let obj1 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations: [], onSelectedDestinationChange: callback, channelFilter: tmp4, insetEnd: null, disableGradient: true, disableStickySections: true, disableSelection: null };
  let num = 0;
  const tmp12 = first(10983);
  if (first.length > 0) {
    num = tmp2(576).space.PX_80;
  }
  obj1.insetEnd = num;
  obj1.disableSelection = first.length >= closure_7;
  items3[1] = closure_9(first(10984), obj1);
  let obj2 = { isVisible: first.length > 0, floatingBackgroundColor: tmp.container.backgroundColor, text: null, onPress: null };
  const tmp14 = first(10984);
  obj2.text = parentId(10997).getFavoritesAddButtonLabel(first.length);
  obj2.onPress = callback1;
  items3[2] = closure_9(parentId(10995).ModalFloatingAction, obj2);
  obj.children = items3;
  items2[1] = closure_10(View, obj);
  obj.children = items2;
  return closure_10(View, obj);
};