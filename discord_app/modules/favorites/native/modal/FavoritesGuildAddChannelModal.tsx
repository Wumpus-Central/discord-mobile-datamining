// discord_app/modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
let closure_7 = fn(1970).MAX_FAVORITES_ADD_CHANNEL_COUNT;
const UserRowModes = fn(10989).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  container: { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
};
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx");

export default function FavoritesGuildAddChannelModal(parentId) {
  parentId = parentId.parentId;
  first = undefined;
  dependencyMap = undefined;
  let height;
  const tmp = closure_11();
  first(11113)(parentId.source);
  [first, dependencyMap] = noop.useState([]);
  const callback = noop.useCallback((arg0) => {
    closure_2(arg0);
  }, []);
  const items = [parentId, first];
  const callback1 = noop.useCallback(
    height(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj5 = { value, done: true };
              return obj5;
            } else {
              dependencyMap = 0;
              closure_1 = tmp2;
              closure_129_0 = undefined;
              c3 = 1;
              c4 = 1;
              const obj6 = {
                value: Promise.all(first.map(parentId(11114).getOrResolveChannelIdFromDestinationId)),
                done: false,
              };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_129_0 = value.filter(parentId(1369).isNotNullish);
            if (0 !== closure_129_0.length) {
              const obj8 = { channelIds: closure_129_0, parentId: null, source: "modal" };
              parentId = closure_130_0;
              if (closure_130_0 == null) {
                parentId = null;
              }
              obj8.parentId = parentId;
              parentId(10352).addFavoriteChannels(obj8);
              const obj2 = parentId(10352);
              const result = parentId(11109).closeFavoritesGuildAddChannelModal();
              const obj4 = parentId(11109);
            } else {
              const intl = parentId(1114).intl;
              parentId(4334).presentError(intl.string(parentId(1114).t.R0RpRX));
              const obj = parentId(4334);
            }
            c4 = 3;
          }
        } catch (tmp31) {
          c4 = tmp;
          throw tmp31;
        }
      }
    }),
    items,
  );
  height = first(1477)({ ignoreKeyboard: true }).height;
  const items1 = [height];
  let obj = {
    style: noop.useMemo(() => {
      height = "100%";
      return { height };
    }, items1),
    children: null,
  };
  let obj2 = { title: null, onClose: null };
  const tmp2 = first;
  const tmp4 = first(11112)();
  let intl = parentId(1114).intl;
  obj2.title = intl.string(first(3236).Rp35U1);
  obj2.onClose = parentId(11109).closeFavoritesGuildAddChannelModal;
  const items2 = [closure_9(first(11116), obj2)];
  let obj3 = { style: tmp.container, children: null };
  const items3 = [closure_9(first(5206), { absolute: true }), ,];
  let obj4 = {
    rowMode: UserRowModes.TOGGLE,
    initialSelectedDestinations: [],
    onSelectedDestinationChange: callback,
    channelFilter: tmp4,
    insetEnd: null,
    disableGradient: true,
    disableStickySections: true,
    disableSelection: null,
  };
  let num = 0;
  const tmp12 = first(11116);
  if (first.length > 0) {
    num = tmp2(576).space.PX_80;
  }
  obj4.insetEnd = num;
  obj4.disableSelection = first.length >= closure_7;
  items3[1] = closure_9(first(11117), obj4);
  let obj5 = {
    isVisible: first.length > 0,
    floatingBackgroundColor: tmp.container.backgroundColor,
    text: null,
    onPress: null,
  };
  const tmp14 = first(11117);
  obj5.text = parentId(11130).getFavoritesAddButtonLabel(first.length);
  obj5.onPress = callback1;
  items3[2] = closure_9(parentId(11128).ModalFloatingAction, obj5);
  obj3.children = items3;
  items2[1] = closure_10(View, obj3);
  obj.children = items2;
  return closure_10(View, obj);
}
