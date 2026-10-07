// discord_app/modules/main_tabs_v2/native/you_bar/YouBarUser.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(14915);
({
  YOU_BAR_SPRING_CONFIG: metroRequire,
  YOU_BAR_LARGE_AVATAR_NAME_MARGIN: closure_7,
  YOU_BAR_SMALL_AVATAR_NAME_MARGIN: closure_8,
} = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  youButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
  },
  userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 },
  placeholder: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.round,
  height: 16,
  width: 80,
};
obj.placeholder = size;
let closure_11 = createStyles.createStyles(obj);
const __initData = {
  code: "function YouBarUserTsx1(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}",
};
const __initData2 = {
  code: "function YouBarUserTsx2(){const{nameMargin}=this.__closure;return{marginLeft:nameMargin.get()};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarUser.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = require("c").c(40);
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
        let obj = require("c");
        const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
        _require = tmp9;
        const tmpResult = require("initialize");
        const sharedValue = require("ReanimatedRexport").useSharedValue(isQuestRendered ? closure_8 : closure_7);
        if (cResult[2] === !isQuestRendered) {
          if (cResult[3] === sharedValue) {
            let tmp11 = cResult[4];
            let tmp12 = cResult[5];
          }
          const effect = noop.useEffect(tmp11, tmp12);
          const fn2 = function w() {
            return { marginLeft: sharedValue.get() };
          };
          const obj2 = { nameMargin: sharedValue };
          fn2.__closure = obj2;
          fn2.__workletHash = 12063452832866;
          fn2.__initData = __initData;
          const animatedStyle = tmp(4618).useAnimatedStyle(fn2);
          const tmpResult4 = tmp(4618);
          const name = sharedValue(4728).useName(stateFromStores);
          if (null != stateFromStores) {
            if (null != name) {
              if (cResult[23] === tmp9) {
                if (cResult[24] === onAvatarPress) {
                  let tmp20 = cResult[25];
                }
                const _Symbol = Symbol;
                if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { flexShrink: 1 };
                  cResult[26] = obj3;
                  let tmp23 = obj3;
                } else {
                  tmp23 = cResult[26];
                }
                if (cResult[27] === animatedStyle) {
                  if (cResult[28] === tmp4.userText) {
                    let tmp24 = cResult[29];
                  }
                  if (cResult[30] === stateFromStores.id) {
                    if (cResult[31] === name) {
                      let tmp25 = cResult[32];
                    }
                    if (cResult[33] === tmp24) {
                      if (cResult[34] === tmp25) {
                        let tmp28 = cResult[35];
                      }
                      if (cResult[36] === tmp4.youButton) {
                        if (cResult[37] === tmp20) {
                          if (cResult[38] === tmp28) {
                            let tmp31 = cResult[39];
                          }
                          return tmp31;
                        }
                      }
                      const obj4 = { style: tmp4.youButton, children: null };
                      const items1 = [tmp20, tmp28];
                      obj4.children = items1;
                      const tmp34 = closure_10(View, obj4);
                      cResult[36] = tmp4.youButton;
                      cResult[37] = tmp20;
                      cResult[38] = tmp28;
                      cResult[39] = tmp34;
                      tmp31 = tmp34;
                    }
                    const obj5 = { style: tmp24, children: tmp25 };
                    const tmp30 = closure_9(tmp17(4618).View, obj5);
                    cResult[33] = tmp24;
                    cResult[34] = tmp25;
                    cResult[35] = tmp30;
                    tmp28 = tmp30;
                  }
                  const obj7 = { userId: stateFromStores.id, username: name };
                  const tmp27 = closure_9(tmp17(16370), obj7);
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
              const obj8 = { isLargeAvatar: tmp9, onPress: onAvatarPress };
              const tmp22 = closure_9(tmp17(16369), obj8);
              cResult[23] = tmp9;
              cResult[24] = onAvatarPress;
              cResult[25] = tmp22;
              tmp20 = tmp22;
            }
          }
          if (cResult[6] !== tmp4.youButton) {
            const items3 = [tmp4.youButton];
            cResult[6] = tmp4.youButton;
            cResult[7] = items3;
            let tmp35 = items3;
          } else {
            tmp35 = cResult[7];
          }
          if (cResult[8] !== tmp9) {
            const obj9 = { isLarge: tmp9 };
            const tmp38 = closure_9(tmp17(16368), obj9);
            cResult[8] = tmp9;
            cResult[9] = tmp38;
            let tmp36 = tmp38;
          } else {
            tmp36 = cResult[9];
          }
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { flexShrink: 1 };
            cResult[10] = obj10;
            let tmp39 = obj10;
          } else {
            tmp39 = cResult[10];
          }
          if (cResult[11] === animatedStyle) {
            if (cResult[12] === tmp4.userText) {
              let tmp40 = cResult[13];
            }
            if (cResult[14] !== tmp4.placeholder) {
              const obj11 = { style: tmp4.placeholder };
              const tmp45 = closure_9(View, obj11);
              cResult[14] = tmp4.placeholder;
              cResult[15] = tmp45;
              let tmp42 = tmp45;
            } else {
              tmp42 = cResult[15];
            }
            if (cResult[16] === tmp40) {
              if (cResult[17] === tmp42) {
                let tmp46 = cResult[18];
              }
              if (cResult[19] === tmp46) {
                if (cResult[20] === tmp35) {
                }
              }
              const obj12 = { style: tmp35, children: null };
              const items4 = [tmp36, tmp46];
              obj12.children = items4;
              const tmp52 = closure_10(View, obj12);
              cResult[19] = tmp46;
              cResult[20] = tmp35;
              cResult[21] = tmp36;
              cResult[22] = tmp52;
            }
            const obj13 = { style: tmp40, children: tmp42 };
            const tmp48 = closure_9(tmp17(4618).View, obj13);
            cResult[16] = tmp40;
            cResult[17] = tmp42;
            cResult[18] = tmp48;
            tmp46 = tmp48;
          }
          class T {
            constructor() {
              tmp = closure_1;
              obj = closure_0(closure_2[11]);
              result = closure_1.set(obj.withSpring(closure_0 ? closure_7 : closure_8, YOU_BAR_SPRING_CONFIG));
              return;
            }
          }
          tmp41[0] = tmp4.userText;
          tmp41[1] = animatedStyle;
          tmp41[2] = tmp39;
          cResult[11] = animatedStyle;
          cResult[12] = tmp4.userText;
          cResult[13] = tmp41;
          tmp40 = tmp41;
          const obj6 = sharedValue(4728);
        }
        class T {
          constructor() {
            tmp = closure_1;
            obj = closure_0(closure_2[11]);
            result = closure_1.set(obj.withSpring(closure_0 ? closure_7 : closure_8, YOU_BAR_SPRING_CONFIG));
            return;
          }
        }
        const items5 = [!isQuestRendered, sharedValue];
        cResult[2] = !isQuestRendered;
        cResult[3] = sharedValue;
        cResult[4] = T;
        cResult[5] = items5;
        tmp12 = items5;
        tmp11 = T;
        const tmpResult3 = require("ReanimatedRexport");
      }
    : (isQuestRendered) => {
        isQuestRendered = isQuestRendered.isQuestRendered;
        _require = undefined;
        const tmp = closure_11();
        const items = [UserStore];
        const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
        _require = tmp5;
        let obj = require("initialize");
        const tmp2 = _require;
        const sharedValue = require("ReanimatedRexport").useSharedValue(isQuestRendered ? closure_8 : closure_7);
        const items1 = [!isQuestRendered, sharedValue];
        const effect = noop.useEffect(() => {
          const result = sharedValue.set(spring.withSpring(closure_0 ? React5 : closure_2_8, timestampProducer));
        }, items1);
        const obj2 = require("ReanimatedRexport");
        class M {
          constructor() {
            obj = { marginLeft: closure_1.get() };
            return obj;
          }
        }
        M.__closure = { nameMargin: sharedValue };
        M.__workletHash = 5882881762081;
        M.__initData = __initData2;
        const animatedStyle = tmp2(4618).useAnimatedStyle(M);
        const tmp2Result = tmp2(4618);
        const name = sharedValue(4728).useName(stateFromStores);
        if (null != stateFromStores) {
          if (null != name) {
            let obj3 = { style: tmp.youButton, children: null };
            const obj5 = { isLargeAvatar: tmp5, onPress: isQuestRendered.onAvatarPress };
            const items2 = [closure_9(tmp9(16369), obj5)];
            const obj6 = { style: null, children: null };
            const items3 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
            obj6.style = items3;
            const obj7 = { userId: stateFromStores.id, username: name };
            obj6.children = closure_9(tmp9(16370), obj7);
            items2[1] = closure_9(tmp9(4618).View, obj6);
            obj3.children = items2;
          }
          return tmp11(View, obj3);
        }
        const obj8 = { style: null, children: null };
        const items4 = [tmp.youButton];
        obj8.style = items4;
        const items5 = [closure_9(sharedValue(16368), { isLarge: !isQuestRendered })];
        const obj9 = { style: null, children: closure_9(View, { style: tmp.placeholder }) };
        const items6 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
        obj9.style = items6;
        items5[1] = closure_9(sharedValue(4618).View, obj9);
        obj8.children = items5;
        obj3 = obj8;
        const obj10 = { style: tmp.placeholder };
        const obj4 = sharedValue(4728);
      },
);
