// discord_app/modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import FavoritesConstants from "../../FavoritesConstants.tsx";
import UserRowConstants from "../../../main_tabs_v2/native/shared_components/user_list/UserRowConstants.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3, c4, dependencyMap, parentId;

let c10;
let c9;
let obj2;
const View = react_native.View;
let closure_7 = FavoritesConstants.MAX_FAVORITES_ADD_CHANNEL_COUNT;
const UserRowModes = UserRowConstants.UserRowModes;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_11 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (parentId) => {
      let closure_2;
      let first;
      let first1;
      let intl;
      let obj2;
      const tmp = parentId;
      let obj = parentId(576);
      const cResult = obj.c(31);
      parentId = parentId.parentId;
      const source = parentId.source;
      const tmp4 = closure_11();
      const tmp6 = first1(10709)();
      first1(10710)(source);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      [first1, dependencyMap] = react.useState(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor(arg0) {
            closure_2(arg0);
          }
        }
        cResult[1] = A;
      } else {
        class A {
          constructor(arg0) {
            closure_2(arg0);
          }
        }
      }
      if (cResult[2] === parentId) {
        class A {
          constructor(arg0) {
            closure_2(arg0);
          }
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
          cResult[5] = tmp13;
        } else {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
        }
        const height = tmp5(1484)(tmp13).height;
        if (cResult[6] !== height) {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
          if (obj2.isAndroid()) {
            class A {
              constructor(arg0) {
                closure_2(arg0);
              }
            }
          }
          cResult[6] = height;
          cResult[7] = "100%";
        } else {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
        }
        if (cResult[8] !== tmp14) {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
          tmp16[0] = tmp14;
          cResult[8] = tmp14;
          cResult[9] = tmp16;
        } else {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
          let obj3 = { title: intl.string(tmp5(3367).Rp35U1), onClose: tmp(10706).closeFavoritesGuildAddChannelModal };
          const tmp5Result = first1(10713);
          intl = tmp(1126).intl;
          cResult[10] = closure_9(tmp5Result, obj3);
          const tmp19 = closure_9(tmp5Result, obj3);
        } else {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
        }
        const _Symbol3 = Symbol;
        const container = tmp4.container;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
          const tmp21 = closure_9(first1(5911), { absolute: true });
          cResult[11] = tmp21;
        } else {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
          cResult[12] = tmp23;
        } else {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
        }
        if (first1.length > 0) {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
        }
        if (cResult[13] === tmp6) {
          class A {
            constructor(arg0) {
              closure_2(arg0);
            }
          }
        }
        let obj4 = {
          rowMode: UserRowModes.TOGGLE,
          initialSelectedDestinations: tmp23,
          onSelectedDestinationChange: A,
          channelFilter: tmp6,
          insetEnd: num12,
          disableGradient: true,
          disableStickySections: true,
          disableSelection: first1.length >= closure_7,
        };
        cResult[13] = tmp6;
        cResult[14] = first1.length >= closure_7;
        cResult[15] = 0;
        cResult[16] = closure_9(first1(10714), obj4);
        const tmp27 = closure_9(first1(10714), obj4);
      }
      let closure_0 = _asyncToGenerator(async () => {
        let closure_1;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            let _null;
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let c2 = 0;
                _null = undefined;
                c3 = 1;
                c4 = 1;
                const obj5 = {
                  value: Promise.all(tmp.map(_null(closure_2_2[13]).getOrResolveChannelIdFromDestinationId)),
                  done: false,
                };
                return obj5;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              _null = value.filter(_null(closure_2_2[14]).isNotNullish);
              if (0 !== _null.length) {
                const obj = { channelIds: _null, parentId: _null, source: "modal" };
                const addFavoriteChannels = _null(closure_2_2[17]).addFavoriteChannels;
                const tmp18 = _null(closure_2_2[17]);
                if (_null == null) {
                  _null = null;
                }
                addFavoriteChannels(obj);
                const obj2 = _null(closure_2_2[18]);
                const result = obj2.closeFavoritesGuildAddChannelModal();
              } else {
                const presentError = _null(closure_2_2[15]).presentError;
                const tmp8 = _null(closure_2_2[15]);
                const intl = _null(closure_2_2[16]).intl;
                presentError(intl.string(_null(closure_2_2[16]).t.R0RpRX));
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp32) {
            c4 = 3;
            throw tmp32;
          }
        }
      });
      const fn = function () {
        return closure_0(...arguments);
      };
      cResult[2] = parentId;
      cResult[3] = first1;
      cResult[4] = fn;
    }
  : (parentId) => {
      let closure_2;
      let intl;
      let items2;
      let items3;
      let num;
      let tmp13Result;
      parentId = parentId.parentId;
      let first;
      dependencyMap = undefined;
      let height;
      const source = parentId.source;
      const tmp = closure_11();
      const tmp3 = dependencyMap;
      const tmp4 = first(10709)();
      first(10710)(source);
      const tmp6 = _slicedToArray(react.useState([]), 2);
      const tmp2 = first;
      first = tmp6[0];
      dependencyMap = tmp6[1];
      const callback = react.useCallback((arg0) => {
        closure_2(arg0);
      }, []);
      const items = [parentId, first];
      const callback1 = react.useCallback(
        height(function* () {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              let c2;
              let _null;
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  c2 = 0;
                  let closure_1 = tmp;
                  _null = undefined;
                  c3 = 1;
                  c4 = 1;
                  const obj5 = {
                    value: Promise.all(first.map(_null(c2[13]).getOrResolveChannelIdFromDestinationId)),
                    done: false,
                  };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                _null = value.filter(_null(c2[14]).isNotNullish);
                if (0 !== _null.length) {
                  const obj = { channelIds: _null, parentId: _null, source: "modal" };
                  const tmp18 = _null(c2[17]);
                  _null = closure_130_0;
                  const addFavoriteChannels = tmp18.addFavoriteChannels;
                  if (closure_130_0 == null) {
                    _null = null;
                  }
                  addFavoriteChannels(obj);
                  const obj2 = _null(c2[18]);
                  const result = obj2.closeFavoritesGuildAddChannelModal();
                } else {
                  const presentError = _null(c2[15]).presentError;
                  const tmp8 = _null(c2[15]);
                  const intl = _null(c2[16]).intl;
                  presentError(intl.string(_null(c2[16]).t.R0RpRX));
                }
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp32) {
              c4 = 3;
              throw tmp32;
            }
          }
        }),
        items,
      );
      height = first(1484)({ ignoreKeyboard: true }).height;
      const items1 = [height];
      let obj = {
        style: react.useMemo(() => {
          height = "100%";
          PlatformUtils;
          return { height };
        }, items1),
        children: items2,
      };
      let obj2 = {
        title: intl.string(first(3367).Rp35U1),
        onClose: parentId(10706).closeFavoritesGuildAddChannelModal,
      };
      const tmp12 = first(10713);
      intl = parentId(1126).intl;
      items2 = [closure_9(tmp12, obj2)];
      let obj3 = { style: tmp.container, children: items3 };
      items3 = [closure_9(first(5911), { absolute: true }), ,];
      let obj4 = {
        rowMode: UserRowModes.TOGGLE,
        initialSelectedDestinations: [],
        onSelectedDestinationChange: callback,
        channelFilter: tmp4,
        insetEnd: num,
        disableGradient: true,
        disableStickySections: true,
        disableSelection: first.length >= closure_7,
      };
      num = 0;
      const tmp14 = first(10714);
      if (first.length > 0) {
        num = tmp2(587).space.PX_80;
      }
      items3[1] = closure_9(tmp14, obj4);
      let obj5 = {
        isVisible: length > 0,
        floatingBackgroundColor: tmp.container.backgroundColor,
        text: tmp13Result.getFavoritesAddButtonLabel(first.length),
        onPress: callback1,
      };
      const ModalFloatingAction = tmp13(10728).ModalFloatingAction;
      tmp13Result = parentId(10727);
      items3[2] = closure_9(ModalFloatingAction, obj5);
      items2[1] = closure_10(View, obj3);
      return closure_10(View, obj);
    };
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildAddChannelModal.tsx");

export default tmp3;
