// discord_app/modules/main_tabs_v2/native/you_bar/YouBarUser.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import YouBarConstants from "YouBarConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let View = react_native.View;
({
  YOU_BAR_SPRING_CONFIG: metroRequire,
  YOU_BAR_LARGE_AVATAR_NAME_MARGIN: metroImportDefault,
  YOU_BAR_SMALL_AVATAR_NAME_MARGIN: metroImportAll,
} = YouBarConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  youButton: obj2,
  userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 },
  placeholder: size,
};
obj2 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS };
createStyles = createStyles.createStyles;
size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.round,
  height: 16,
  width: 80,
};
let closure_11 = createStyles(obj);
const __initData = {
  code: "function YouBarUserTsx1(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}",
};
const __initData2 = {
  code: "function YouBarUserTsx2(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let closure_0;
        let currentUser;
        let isQuestRendered;
        let items1;
        let items4;
        let onAvatarPress;
        let tmp5;
        let tmp6;
        let obj = require("react");
        const cResult = obj.c(40);
        ({ isQuestRendered, onAvatarPress } = arg0);
        const tmp4 = closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function x() {
            return currentUser.getCurrentUser();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = require("get initialized");
        const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
        _require = tmp9;
        const tmpResult3 = require("ReanimatedRexport");
        const sharedValue = tmpResult3.useSharedValue(isQuestRendered ? closure_8 : closure_7);
        if (cResult[2] === !isQuestRendered) {
          let tmp11;
          let tmp12;
          let tmp35;
          let tmp36;
          let tmp39;
          let tmp31;
          if (cResult[3] === sharedValue) {
            tmp11 = cResult[4];
            tmp12 = cResult[5];
          }
          const effect = react.useEffect(tmp11, tmp12);
          const fn2 = function w() {
            const obj = { marginLeft: sharedValue.get() };
            return obj;
          };
          const obj2 = { nameMargin: sharedValue };
          fn2.__closure = obj2;
          fn2.__workletHash = 12063452832866;
          fn2.__initData = __initData;
          const tmpResult4 = require("ReanimatedRexport");
          const animatedStyle = tmpResult4.useAnimatedStyle(fn2);
          const obj6 = sharedValue(4722);
          const name = obj6.useName(stateFromStores);
          if (null != stateFromStores) {
            if (null != name) {
              if (cResult[23] === !isQuestRendered) {
                let tmp20;
                let tmp23;
                if (cResult[24] === onAvatarPress) {
                  tmp20 = cResult[25];
                }
                const _Symbol = Symbol;
                if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { flexShrink: 1 };
                  cResult[26] = obj3;
                  tmp23 = obj3;
                } else {
                  tmp23 = cResult[26];
                }
                if (cResult[27] === animatedStyle) {
                  let tmp24;
                  if (cResult[28] === tmp4.userText) {
                    tmp24 = cResult[29];
                  }
                  if (cResult[30] === stateFromStores.id) {
                    let tmp25;
                    if (cResult[31] === name) {
                      tmp25 = cResult[32];
                    }
                    if (cResult[33] === tmp24) {
                      let tmp28;
                      if (cResult[34] === tmp25) {
                        tmp28 = cResult[35];
                      }
                      if (cResult[36] === tmp4.youButton) {
                        if (cResult[37] === tmp20) {
                          if (cResult[38] === tmp28) {
                            tmp31 = cResult[39];
                          }
                        }
                      }
                      const obj4 = { style: tmp4.youButton, children: items1 };
                      items1 = [tmp20, tmp28];
                      const tmp34 = closure_10(View, obj4);
                      cResult[36] = tmp4.youButton;
                      cResult[37] = tmp20;
                      cResult[38] = tmp28;
                      cResult[39] = tmp34;
                      tmp31 = tmp34;
                    }
                    const obj5 = { style: tmp24, children: tmp25 };
                    const tmp30 = closure_9(sharedValue(4612).View, obj5);
                    cResult[33] = tmp24;
                    cResult[34] = tmp25;
                    cResult[35] = tmp30;
                    tmp28 = tmp30;
                  }
                  const obj7 = { userId: stateFromStores.id, username: name };
                  const tmp27 = closure_9(sharedValue(16330), obj7);
                  cResult[30] = stateFromStores.id;
                  cResult[31] = name;
                  cResult[32] = tmp27;
                  tmp25 = tmp27;
                }
                const items2 = [tmp4.userText, animatedStyle, tmp23];
                cResult[27] = animatedStyle;
                cResult[28] = tmp4.userText;
                cResult[29] = items2;
                tmp24 = items2;
              }
              const obj8 = { isLargeAvatar: !isQuestRendered, onPress: onAvatarPress };
              const tmp22 = closure_9(sharedValue(16329), obj8);
              cResult[23] = !isQuestRendered;
              cResult[24] = onAvatarPress;
              cResult[25] = tmp22;
              tmp20 = tmp22;
            }
            return tmp31;
          }
          if (cResult[6] !== tmp4.youButton) {
            const items3 = [tmp4.youButton];
            cResult[6] = tmp4.youButton;
            cResult[7] = items3;
            tmp35 = items3;
          } else {
            tmp35 = cResult[7];
          }
          if (cResult[8] !== !isQuestRendered) {
            const obj9 = { isLarge: !isQuestRendered };
            const tmp38 = closure_9(sharedValue(16328), obj9);
            cResult[8] = !isQuestRendered;
            cResult[9] = tmp38;
            tmp36 = tmp38;
          } else {
            tmp36 = cResult[9];
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { flexShrink: 1 };
            cResult[10] = obj10;
            tmp39 = obj10;
          } else {
            tmp39 = cResult[10];
          }
          if (cResult[11] === animatedStyle) {
            let tmp40;
            let tmp42;
            if (cResult[12] === tmp4.userText) {
              tmp40 = cResult[13];
            }
            if (cResult[14] !== tmp4.placeholder) {
              const obj11 = { style: tmp4.placeholder };
              const tmp45 = closure_9(View, obj11);
              cResult[14] = tmp4.placeholder;
              cResult[15] = tmp45;
              tmp42 = tmp45;
            } else {
              tmp42 = cResult[15];
            }
            if (cResult[16] === tmp40) {
              let tmp46;
              if (cResult[17] === tmp42) {
                tmp46 = cResult[18];
              }
              if (cResult[19] === tmp46) {
                if (cResult[20] === tmp35) {
                  let tmp49;
                  if (cResult[21] === tmp36) {
                    tmp49 = cResult[22];
                  }
                  tmp31 = tmp49;
                }
              }
              const obj12 = { style: tmp35, children: items4 };
              items4 = [tmp36, tmp46];
              const tmp52 = closure_10(View, obj12);
              cResult[19] = tmp46;
              cResult[20] = tmp35;
              cResult[21] = tmp36;
              cResult[22] = tmp52;
              tmp49 = tmp52;
            }
            const obj13 = { style: tmp40, children: tmp42 };
            const tmp48 = closure_9(sharedValue(4612).View, obj13);
            cResult[16] = tmp40;
            cResult[17] = tmp42;
            cResult[18] = tmp48;
            tmp46 = tmp48;
          }
          class T {
            constructor() {
              set = sharedValue.set;
              const obj = spring;
              const result = set(obj.withSpring(closure_0 ? metroImportDefault : metroImportAll, metroRequire));
            }
          }
          tmp41[0] = tmp4.userText;
          tmp41[1] = animatedStyle;
          tmp41[2] = tmp39;
          cResult[11] = animatedStyle;
          cResult[12] = tmp4.userText;
          cResult[13] = tmp41;
          tmp40 = tmp41;
        }
        class T {
          constructor() {
            set = sharedValue.set;
            const obj = spring;
            const result = set(obj.withSpring(closure_0 ? metroImportDefault : metroImportAll, metroRequire));
          }
        }
        const items5 = [!isQuestRendered, sharedValue];
        cResult[2] = !isQuestRendered;
        cResult[3] = sharedValue;
        cResult[4] = T;
        cResult[5] = items5;
        tmp12 = items5;
        tmp11 = T;
      }
    : (isQuestRendered) => {
        let closure_0;
        let currentUser;
        let items2;
        let items3;
        let items4;
        let items5;
        let items6;
        let obj10;
        let obj7;
        isQuestRendered = isQuestRendered.isQuestRendered;
        _require = undefined;
        const onAvatarPress = isQuestRendered.onAvatarPress;
        const tmp = closure_11();
        let obj = require("get initialized");
        const items = [UserStore];
        const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
        const tmp2 = _require;
        _require = tmp5;
        const obj2 = require("ReanimatedRexport");
        const sharedValue = obj2.useSharedValue(isQuestRendered ? closure_8 : closure_7);
        const items1 = [!isQuestRendered, sharedValue];
        const effect = react.useEffect(() => {
          set = sharedValue.set;
          const obj = spring;
          const result = set(obj.withSpring(closure_0 ? metroImportDefault : metroImportAll, metroRequire));
        }, items1);
        const tmp2Result = tmp2(4612);
        class M {
          constructor() {
            const obj = { marginLeft: sharedValue.get() };
            return obj;
          }
        }
        M.__closure = { nameMargin: sharedValue };
        M.__workletHash = 5882881762081;
        M.__initData = __initData2;
        const animatedStyle = tmp2Result.useAnimatedStyle(M);
        const obj4 = sharedValue(4722);
        const name = obj4.useName(stateFromStores);
        if (null != stateFromStores) {
          let obj3;
          if (null != name) {
            obj3 = { style: tmp.youButton, children: items2 };
            const obj5 = { isLargeAvatar: !isQuestRendered, onPress: onAvatarPress };
            items2 = [closure_9(sharedValue(16329), obj5)];
            const obj6 = { style: items3, children: closure_9(sharedValue(16330), obj7) };
            items3 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
            const View2 = tmp9(4612).View;
            obj7 = { userId: stateFromStores.id, username: name };
            items2[1] = closure_9(View2, obj6);
          }
          return tmp11(View, obj3);
        }
        const obj8 = { style: items4, children: items5 };
        items4 = [tmp.youButton];
        items5 = [closure_9(sharedValue(16328), { isLarge: !isQuestRendered })];
        const obj9 = { style: items6, children: closure_9(View, obj10) };
        items6 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
        obj10 = { style: tmp.placeholder };
        View = tmp9(4612).View;
        items5[1] = closure_9(View, obj9);
        obj3 = obj8;
      },
);
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default memoResult;
