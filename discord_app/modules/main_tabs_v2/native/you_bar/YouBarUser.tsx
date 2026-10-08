// discord_app/modules/main_tabs_v2/native/you_bar/YouBarUser.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(15177);
({
  YOU_BAR_SPRING_CONFIG: metroRequire,
  YOU_BAR_LARGE_AVATAR_NAME_MARGIN: closure_7,
  YOU_BAR_SMALL_AVATAR_NAME_MARGIN: closure_8,
} = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
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
    ? function YouBarUser(arg0) {
        const cResult = require("c").c(38);
        ({ isQuestRendered, onAvatarPress } = arg0);
        let youButton = closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function x() {
            return currentUser.getCurrentUser();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        let obj = require("c");
        const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
        _require = tmp8;
        const tmpResult = require("initialize");
        const sharedValue = require("ReanimatedRexport").useSharedValue(isQuestRendered ? closure_8 : closure_7);
        if (cResult[2] === !isQuestRendered) {
          if (cResult[3] === sharedValue) {
            let tmp10 = cResult[4];
            let tmp11 = cResult[5];
          }
          const effect = noop.useEffect(tmp10, tmp11);
          const fn2 = function w() {
            return { marginLeft: sharedValue.get() };
          };
          const obj2 = { nameMargin: sharedValue };
          fn2.__closure = obj2;
          fn2.__workletHash = 12063452832866;
          fn2.__initData = __initData;
          const animatedStyle = tmp(4810).useAnimatedStyle(fn2);
          const tmpResult4 = tmp(4810);
          const name = sharedValue(4922).useName(stateFromStores);
          if (null != stateFromStores) {
            if (null != name) {
              if (cResult[21] === tmp8) {
                if (cResult[22] === onAvatarPress) {
                  let tmp19 = cResult[23];
                }
                const _Symbol = Symbol;
                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj3 = { flexShrink: 1 };
                  cResult[24] = obj3;
                  let tmp22 = obj3;
                } else {
                  tmp22 = cResult[24];
                }
                if (cResult[25] === animatedStyle) {
                  if (cResult[26] === youButton.userText) {
                    let tmp23 = cResult[27];
                  }
                  if (cResult[28] === stateFromStores.id) {
                    if (cResult[29] === name) {
                      let tmp24 = cResult[30];
                    }
                    if (cResult[31] === tmp23) {
                      if (cResult[32] === tmp24) {
                        let tmp27 = cResult[33];
                      }
                      if (cResult[34] === youButton.youButton) {
                        if (cResult[35] === tmp19) {
                          if (cResult[36] === tmp27) {
                            let tmp30 = cResult[37];
                          }
                          return tmp30;
                        }
                      }
                      const obj4 = { style: youButton.youButton, children: null };
                      const items1 = [tmp19, tmp27];
                      obj4.children = items1;
                      const tmp33 = closure_10(View, obj4);
                      cResult[34] = youButton.youButton;
                      cResult[35] = tmp19;
                      cResult[36] = tmp27;
                      cResult[37] = tmp33;
                      tmp30 = tmp33;
                    }
                    const obj5 = { style: tmp23, children: tmp24 };
                    const tmp29 = closure_9(tmp16(4810).View, obj5);
                    cResult[31] = tmp23;
                    cResult[32] = tmp24;
                    cResult[33] = tmp29;
                    tmp27 = tmp29;
                  }
                  const obj7 = { userId: stateFromStores.id, username: name };
                  const tmp26 = closure_9(tmp16(16630), obj7);
                  cResult[28] = stateFromStores.id;
                  cResult[29] = name;
                  cResult[30] = tmp26;
                  tmp24 = tmp26;
                }
                const items2 = [youButton.userText, animatedStyle, tmp22];
                cResult[25] = animatedStyle;
                cResult[26] = youButton.userText;
                cResult[27] = items2;
                tmp23 = items2;
              }
              const obj8 = { isLargeAvatar: tmp8, onPress: onAvatarPress };
              const tmp21 = closure_9(tmp16(16629), obj8);
              cResult[21] = tmp8;
              cResult[22] = onAvatarPress;
              cResult[23] = tmp21;
              tmp19 = tmp21;
            }
          }
          if (cResult[6] !== tmp8) {
            const obj9 = { isLarge: tmp8 };
            const tmp36 = closure_9(tmp16(16628), obj9);
            cResult[6] = tmp8;
            cResult[7] = tmp36;
            let tmp34 = tmp36;
          } else {
            tmp34 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { flexShrink: 1 };
            cResult[8] = obj10;
            let tmp37 = obj10;
          } else {
            tmp37 = cResult[8];
          }
          if (cResult[9] === animatedStyle) {
            if (cResult[10] === youButton.userText) {
              let tmp38 = cResult[11];
            }
            if (cResult[12] !== youButton.placeholder) {
              const obj11 = { style: youButton.placeholder };
              const tmp42 = closure_9(View, obj11);
              cResult[12] = youButton.placeholder;
              cResult[13] = tmp42;
              let tmp39 = tmp42;
            } else {
              tmp39 = cResult[13];
            }
            if (cResult[14] === tmp38) {
              if (cResult[15] === tmp39) {
                let tmp43 = cResult[16];
              }
              if (cResult[17] === youButton.youButton) {
                if (cResult[18] === tmp34) {
                }
              }
              const obj12 = { style: youButton.youButton, children: null };
              const items3 = [tmp34, tmp43];
              obj12.children = items3;
              const tmp49 = closure_10(View, obj12);
              youButton = youButton.youButton;
              cResult[17] = youButton;
              cResult[18] = tmp34;
              cResult[19] = tmp43;
              cResult[20] = tmp49;
            }
            const obj13 = { style: tmp38, children: tmp39 };
            const tmp45 = closure_9(tmp16(4810).View, obj13);
            cResult[14] = tmp38;
            cResult[15] = tmp39;
            cResult[16] = tmp45;
            tmp43 = tmp45;
          }
          const items4 = [, ,];
          class T {
            constructor() {
              tmp = closure_1;
              obj = closure_0(closure_2[11]);
              result = closure_1.set(obj.withSpring(closure_0 ? closure_7 : closure_8, YOU_BAR_SPRING_CONFIG));
              return;
            }
          }
          items4[1] = animatedStyle;
          items4[2] = tmp37;
          cResult[9] = animatedStyle;
          cResult[10] = youButton.userText;
          cResult[11] = items4;
          tmp38 = items4;
          const obj6 = sharedValue(4922);
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
        tmp11 = items5;
        tmp10 = T;
        const tmpResult3 = require("ReanimatedRexport");
      }
    : function YouBarUser(isQuestRendered) {
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
        const animatedStyle = tmp2(4810).useAnimatedStyle(M);
        const tmp2Result = tmp2(4810);
        const name = sharedValue(4922).useName(stateFromStores);
        if (null != stateFromStores) {
          if (null != name) {
            let obj3 = { style: tmp.youButton, children: null };
            const obj5 = { isLargeAvatar: tmp5, onPress: isQuestRendered.onAvatarPress };
            const items2 = [closure_9(tmp9(16629), obj5)];
            const obj6 = { style: null, children: null };
            const items3 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
            obj6.style = items3;
            const obj7 = { userId: stateFromStores.id, username: name };
            obj6.children = closure_9(tmp9(16630), obj7);
            items2[1] = closure_9(tmp9(4810).View, obj6);
            obj3.children = items2;
          }
          return tmp11(View, obj3);
        }
        const obj8 = { style: tmp.youButton, children: null };
        const items4 = [closure_9(sharedValue(16628), { isLarge: !isQuestRendered })];
        const obj9 = { style: null, children: closure_9(View, { style: tmp.placeholder }) };
        const items5 = [tmp.userText, animatedStyle, { flexShrink: 1 }];
        obj9.style = items5;
        items4[1] = closure_9(sharedValue(4810).View, obj9);
        obj8.children = items4;
        obj3 = obj8;
        const obj10 = { style: tmp.placeholder };
        const obj4 = sharedValue(4922);
      },
);
