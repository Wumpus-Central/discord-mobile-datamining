// discord_app/modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
let closure_7 = fn(2077).MAX_FAVORITES_ADD_CHANNEL_COUNT;
const UserRowModes = fn(10187).UserRowModes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
};
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesGuildAddChannelModal(parentId) {
      const cResult = require("c").c(31);
      parentId = parentId.parentId;
      _require = parentId;
      let obj = require("c");
      const tmp6 = first1(12645)();
      first1(12646)(parentId.source);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      [first1, dependencyMap] = noop.useState(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(arg0) {
            tmp = closure_2(parentId);
            return;
          }
        }
        cResult[1] = A;
      } else {
        class A {
          constructor(arg0) {
            tmp = closure_2(parentId);
            return;
          }
        }
      }
      if (cResult[2] === parentId) {
        class A {
          constructor(arg0) {
            tmp = closure_2(parentId);
            return;
          }
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
          cResult[5] = tmp13;
        } else {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
        }
        const height = tmp5(1497)(tmp13).height;
        if (cResult[6] !== height) {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
          if (obj2.isAndroid()) {
            class A {
              constructor(arg0) {
                tmp = closure_2(parentId);
                return;
              }
            }
          }
          cResult[6] = height;
          cResult[7] = "100%";
        } else {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
        }
        if (cResult[8] !== tmp14) {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
          tmp16[0] = tmp14;
          cResult[8] = tmp14;
          cResult[9] = tmp16;
        } else {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
          let obj3 = { title: null, onClose: null };
          let intl = tmp(1126).intl;
          obj3.title = intl.string(tmp5(3439).Rp35U1);
          obj3.onClose = tmp(12643).closeFavoritesGuildAddChannelModal;
          const tmp19 = closure_9(tmp5(11520), obj3);
          cResult[10] = tmp19;
          const tmp5Result = tmp5(11520);
        } else {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
        }
        const _Symbol3 = Symbol;
        const container = tmp4.container;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
          const tmp21 = closure_9(tmp5(10196), { absolute: true });
          cResult[11] = tmp21;
        } else {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
          cResult[12] = tmp23;
        } else {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
        }
        if (length > 0) {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
        }
        if (cResult[13] === tmp6) {
          class A {
            constructor(arg0) {
              tmp = closure_2(parentId);
              return;
            }
          }
        }
        let obj4 = {
          rowMode: UserRowModes.TOGGLE,
          initialSelectedDestinations: tmp23,
          onSelectedDestinationChange: A,
          channelFilter: tmp6,
          insetEnd: 0,
          disableGradient: true,
          disableStickySections: true,
          disableSelection: tmp10,
        };
        const tmp27 = closure_9(tmp5(11521), obj4);
        cResult[13] = tmp6;
        cResult[14] = tmp10;
        cResult[15] = 0;
        cResult[16] = tmp27;
      }
      _require = asyncGeneratorStep(async () => {
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
            return { value: "IconComponent", done: null };
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
                c2 = 0;
                closure_129_0 = undefined;
                c3 = 1;
                c4 = 1;
                const obj6 = {
                  value: Promise.all(tmp2.map(parentId(11510).getOrResolveChannelIdFromDestinationId)),
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
              closure_129_0 = value.filter(parentId(1388).isNotNullish);
              if (0 !== closure_129_0.length) {
                const obj8 = { channelIds: closure_129_0, parentId: null, source: "modal" };
                if (parentId == null) {
                  parentId = null;
                }
                obj8.parentId = parentId;
                parentId(10278).addFavoriteChannels(obj8);
                const obj2 = parentId(10278);
                const result = parentId(12643).closeFavoritesGuildAddChannelModal();
                const obj4 = parentId(12643);
              } else {
                const intl = parentId(1126).intl;
                parentId(4767).presentError(intl.string(parentId(1126).t.R0RpRX));
                const obj = parentId(4767);
              }
              c4 = 3;
            }
          } catch (tmp31) {
            c4 = tmp;
            throw tmp31;
          }
        }
      });
      function t3() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[2] = parentId;
      cResult[3] = first1;
      cResult[4] = t3;
      tmp4 = closure_11();
    }
  : function FavoritesGuildAddChannelModal(parentId) {
      parentId = parentId.parentId;
      first = undefined;
      dependencyMap = undefined;
      let height;
      const tmp = closure_11();
      first(12646)(parentId.source);
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
              return { value: "IconComponent", done: null };
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
                    value: Promise.all(first.map(parentId(11510).getOrResolveChannelIdFromDestinationId)),
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
                closure_129_0 = value.filter(parentId(1388).isNotNullish);
                if (0 !== closure_129_0.length) {
                  const obj8 = { channelIds: closure_129_0, parentId: null, source: "modal" };
                  parentId = closure_130_0;
                  if (closure_130_0 == null) {
                    parentId = null;
                  }
                  obj8.parentId = parentId;
                  parentId(10278).addFavoriteChannels(obj8);
                  const obj2 = parentId(10278);
                  const result = parentId(12643).closeFavoritesGuildAddChannelModal();
                  const obj4 = parentId(12643);
                } else {
                  const intl = parentId(1126).intl;
                  parentId(4767).presentError(intl.string(parentId(1126).t.R0RpRX));
                  const obj = parentId(4767);
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
      height = first(1497)({ ignoreKeyboard: true }).height;
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
      const tmp4 = first(12645)();
      let intl = parentId(1126).intl;
      obj2.title = intl.string(first(3439).Rp35U1);
      obj2.onClose = parentId(12643).closeFavoritesGuildAddChannelModal;
      const items2 = [closure_9(first(11520), obj2)];
      let obj3 = { style: tmp.container, children: null };
      const items3 = [closure_9(first(10196), { absolute: true }), ,];
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
      const tmp12 = first(11520);
      if (first.length > 0) {
        num = tmp2(587).space.PX_80;
      }
      obj4.insetEnd = num;
      obj4.disableSelection = first.length >= closure_7;
      items3[1] = closure_9(first(11521), obj4);
      let obj5 = {
        isVisible: first.length > 0,
        floatingBackgroundColor: tmp.container.backgroundColor,
        text: null,
        onPress: null,
      };
      const tmp14 = first(11521);
      obj5.text = parentId(12647).getFavoritesAddButtonLabel(first.length);
      obj5.onPress = callback1;
      items3[2] = closure_9(parentId(11545).ModalFloatingAction, obj5);
      obj3.children = items3;
      items2[1] = closure_10(View, obj3);
      obj.children = items2;
      return closure_10(View, obj);
    };
