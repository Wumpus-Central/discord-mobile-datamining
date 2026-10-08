// discord_app/modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import FavoritesActionCreators from "../../FavoritesActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import FavoriteStore from "../../FavoriteStore.tsx";

require = fn;
let ScrollView = fn(17).ScrollView;
let maxLength = fn(2077).MAX_FAVORITE_CATEGORY_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesGuildCategorySettings(categoryId) {
      const cResult = categoryId(navigation[9]).c(50);
      categoryId = categoryId.categoryId;
      const onGoBack = categoryId.onGoBack;
      closure_10();
      let obj = categoryId(navigation[9]);
      navigation = categoryId(navigation[10]).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FavoriteStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== categoryId) {
        class C {
          constructor() {
            str = closure_6.getNickname(categoryId);
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
        cResult[1] = categoryId;
        cResult[2] = C;
      } else {
        class C {
          constructor() {
            str = closure_6.getNickname(categoryId);
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
      }
      let obj2 = categoryId(navigation[10]);
      const stateFromStores = categoryId(navigation[11]).useStateFromStores(first, C);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            str = closure_6.getNickname(categoryId);
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
        const items1 = [FavoriteStore];
        cResult[3] = items1;
        const tmp10 = items1;
      } else {
        class C {
          constructor() {
            str = closure_6.getNickname(categoryId);
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
      }
      if (cResult[4] !== categoryId) {
        class C {
          constructor() {
            str = closure_6.getNickname(categoryId);
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
        cResult[4] = categoryId;
        cResult[5] = tmp12;
      } else {
        class C {
          constructor() {
            str = closure_6.getNickname(categoryId);
            if (str == null) {
              str = "";
            }
            return str;
          }
        }
      }
      const tmpResult = categoryId(navigation[11]);
      const stateFromStores1 = categoryId(navigation[11]).useStateFromStores(tmp10, tmp12);
      const obj5 = stateFromStores1;
      const tmpResult3 = categoryId(navigation[11]);
      [tmp15, tmp16] = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
      ScrollView = tmp16;
      if (cResult[6] !== stateFromStores) {
        class E {
          constructor() {
            tmp = closure_5(closure_3);
            return;
          }
        }
        const items2 = [stateFromStores];
        cResult[6] = stateFromStores;
        cResult[7] = E;
        cResult[8] = items2;
        let tmp18 = items2;
      } else {
        class E {
          constructor() {
            tmp = closure_5(closure_3);
            return;
          }
        }
        tmp18 = cResult[8];
      }
      const effect = obj5.useEffect(E, tmp18);
      if (cResult[9] !== tmp15) {
        class E {
          constructor() {
            tmp = closure_5(closure_3);
            return;
          }
        }
        cResult[9] = tmp15;
        cResult[10] = tmp21;
      } else {
        class E {
          constructor() {
            tmp = closure_5(closure_3);
            return;
          }
        }
      }
      FavoriteStore = tmp21;
      if (cResult[11] === tmp15) {
        class E {
          constructor() {
            tmp = closure_5(closure_3);
            return;
          }
        }
      }
      const tmp14 = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
      const tmpResult4 = categoryId(navigation[12]);
      cResult[11] = tmp15;
      cResult[12] = stateFromStores;
      cResult[13] = tmp21;
      cResult[14] = categoryId(navigation[12]).isFavoritesGuildCategoryNameValid(tmp15) && tmp21 !== stateFromStores;
      const tmp22 = categoryId(navigation[12]).isFavoritesGuildCategoryNameValid(tmp15) && tmp21 !== stateFromStores;
    }
  : function FavoritesGuildCategorySettings(categoryId) {
      categoryId = categoryId.categoryId;
      const onGoBack = categoryId.onGoBack;
      let navigation;
      let trimmed;
      let callback1;
      const tmp = callback1();
      navigation = categoryId(navigation[10]).useNavigation();
      let obj = categoryId(navigation[10]);
      const items = [trimmed];
      const stateFromStores = categoryId(navigation[11]).useStateFromStores(items, () => {
        let str = FavoriteStore.getNickname(categoryId);
        if (str == null) {
          str = "";
        }
        return str;
      });
      let obj2 = categoryId(navigation[11]);
      const items1 = [trimmed];
      const stateFromStores1 = categoryId(navigation[11]).useStateFromStores(
        items1,
        () => null != FavoriteStore.getCategoryRecord(categoryId),
      );
      const obj3 = categoryId(navigation[11]);
      [str, tmp8] = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
      c5 = tmp8;
      const items2 = [stateFromStores];
      const effect = stateFromStores1.useEffect(() => {
        _undefined(stateFromStores);
      }, items2);
      trimmed = str.trim();
      const tmp7 = stateFromStores(stateFromStores1.useState(stateFromStores), 2);
      const tmp11 = categoryId(navigation[12]).isFavoritesGuildCategoryNameValid(str) && trimmed !== stateFromStores;
      maxLength = tmp11;
      const ref = obj4.useRef(false);
      const items3 = [onGoBack];
      const callback = obj4.useCallback(() => {
        if (!ref.current) {
          tmp.current = true;
          onGoBack();
        }
      }, items3);
      const items4 = [tmp11, categoryId, callback, trimmed];
      callback1 = obj4.useCallback(() => {
        if (closure_7) {
          const result = FavoritesActionCreators.setFavoriteChannelNickname(categoryId, trimmed);
          callback();
        }
      }, items4);
      const items5 = [callback, stateFromStores1];
      const effect1 = obj4.useEffect(() => {
        if (!stateFromStores1) {
          callback();
        }
      }, items5);
      const items6 = [tmp11, callback1, navigation];
      const effect2 = obj4.useEffect(() => {
        navigation.setOptions({
          headerRight(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            const intl = categoryId(navigation[15]).intl;
            obj.label = intl.string(categoryId(navigation[15]).t["R3BPH+"]);
            obj.onPress = onPress;
            obj.disabled = !closure_1_7;
            return closure_8(categoryId(navigation[14]).HeaderTextButton, obj);
          },
        });
      }, items6);
      const items7 = [categoryId, callback, stateFromStores];
      const obj6 = {
        style: tmp.container,
        contentContainerStyle: tmp.content,
        keyboardShouldPersistTaps: "handled",
        children: null,
      };
      const callback2 = obj4.useCallback(() => {
        const obj2 = {
          title: null,
          body: null,
          confirmText: null,
          confirmColor: null,
          cancelText: null,
          onConfirm: null,
        };
        const intl = util.intl;
        obj2.title = intl.string(util.t["4VpUw8"]);
        const intl2 = util.intl;
        obj2.body = intl2.format(util.t.GuhMa5, { channelName: stateFromStores });
        const intl3 = util.intl;
        obj2.confirmText = intl3.string(util.t.xOscRh);
        obj2.confirmColor = native.ButtonColors.RED;
        const intl4 = util.intl;
        obj2.cancelText = intl4.string(util.t["ETE/oC"]);
        obj2.onConfirm = function onConfirm() {
          const result = categoryId(navigation[13]).removeFavoriteCategory(closure_1_0);
          callback();
        };
        AlertActionCreatorsDefault.show(obj2);
      }, items7);
      const obj7 = { spacing: onGoBack(navigation[7]).space.PX_24, children: null };
      const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, clearable: true };
      let intl = tmp2(tmp3[15]).intl;
      obj8.label = intl.string(categoryId(navigation[15]).t.OCAkGP);
      let intl2 = tmp2(tmp3[15]).intl;
      obj8.placeholder = intl2.string(categoryId(navigation[15]).t.eTVbtx);
      obj8.value = str;
      obj8.onChange = tmp8;
      obj8.maxLength = maxLength;
      const items8 = [ref(categoryId(navigation[18]).TextInput, obj8)];
      const obj9 = { hasIcons: true, children: null };
      const obj10 = {
        variant: "danger",
        icon: ref(categoryId(navigation[19]).TrashIcon, { color: "text-feedback-critical" }),
        label: null,
        onPress: null,
      };
      let intl3 = tmp2(tmp3[15]).intl;
      obj10.label = intl3.string(categoryId(navigation[15]).t.ifbXnL);
      obj10.onPress = callback2;
      obj9.children = ref(categoryId(navigation[21]).TableRow, obj10);
      items8[1] = ref(categoryId(navigation[20]).TableRowGroup, obj9);
      obj7.children = items8;
      obj6.children = callback(categoryId(navigation[22]).Stack, obj7);
      return ref(c5, obj6);
    };
ReactCompilerGating = fn(558);
const obj4 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCategorySettingsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesGuildCategorySettingsModal(categoryId) {
      const cResult = categoryId(576).c(4);
      categoryId = categoryId.categoryId;
      onGoBack = onGoBack(9586)().onGoBack;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["/uELTj"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === categoryId) {
        if (cResult[2] === onGoBack) {
          let tmp7 = cResult[3];
        }
        return tmp7;
      }
      const tmp8 = closure_8(onGoBack(9587), {
        screenKey: "favoritesGuildCategorySettings",
        title: first,
        render() {
          return closure_2_8(closure_11, { categoryId, onGoBack });
        },
      });
      cResult[1] = categoryId;
      cResult[2] = onGoBack;
      cResult[3] = tmp8;
      tmp7 = tmp8;
      const obj = categoryId(576);
      const obj2 = {
        screenKey: "favoritesGuildCategorySettings",
        title: first,
        render() {
          return closure_2_8(closure_11, { categoryId, onGoBack });
        },
      };
    }
  : function FavoritesGuildCategorySettingsModal(categoryId) {
      categoryId = categoryId.categoryId;
      let onGoBack;
      onGoBack = onGoBack(9586)().onGoBack;
      const obj = { screenKey: "favoritesGuildCategorySettings", title: null, render: null };
      const intl = categoryId(1126).intl;
      obj.title = intl.string(categoryId(1126).t["/uELTj"]);
      obj.render = function render() {
        return closure_2_8(closure_11, { categoryId, onGoBack });
      };
      return closure_8(onGoBack(9587), obj);
    };
