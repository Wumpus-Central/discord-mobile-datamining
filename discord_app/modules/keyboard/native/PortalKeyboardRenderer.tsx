// discord_app/modules/keyboard/native/PortalKeyboardRenderer.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import KeyboardTypes from "KeyboardTypes.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useKeyboardType from "useKeyboardType.tsx";
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore.native.tsx";
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore.tsx";

require = fn;
function transitionGroupGetItemKey(id) {
  return id.id;
}
const jsx = fn(21).jsx;
let closure_6 = [];
function transitionGroupRenderItem(key, item, state, cleanUp) {
  let isAndroidResult = state === native.TransitionStates.YEETED;
  if (isAndroidResult) {
    const keyboardType = useKeyboardType.getKeyboardType();
    isAndroidResult = keyboardType === KeyboardTypes.KeyboardTypes.SYSTEM;
    const tmpResult = useKeyboardType;
  }
  if (isAndroidResult) {
    isAndroidResult = PlatformUtils.isAndroid();
    const tmpResult2 = PlatformUtils;
  }
  let tmp5 = null;
  if (!isAndroidResult) {
    const obj = { item, state, cleanUp };
    tmp5 = jsx(PortalKeyboardRendererComponentDefault, { item, state, cleanUp }, key);
  }
  return tmp5;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = ReactCompilerGating.isReactCompilerEnabled()
  ? function PortalKeyboardRenderer(portal) {
      let PortalKeyboard = id;
      let tmp = dependencyMap;
      const cResult = id(576).c(16);
      portal = portal.portal;
      id = noop.useId();
      if (cResult[0] !== id) {
        const fn = function s() {
          return PortalKeyboardUIStore3.registerPortalKeyboardRenderer(id);
        };
        const items = [id];
        cResult[0] = id;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp6 = items;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function b() {
          closure_0 = closure_4(function onKeyboardStoreChange() {
            const PortalKeyboardUIStore = closure_0(4948).PortalKeyboardUIStore;
            const field = PortalKeyboardUIStore.getField("keyboard");
            closure_0(4947);
            if (tmp6) {
              const result = closure_0(4948).closePortalKeyboardIfUnhandled();
              const tmpResult = closure_0(4948);
            }
            tmp6 = null != field && tmp5 !== field.type;
          });
          return () => {
            closure_0();
            const result = id(4948).closePortalKeyboardIfUnhandled();
          };
        };
        const items1 = [];
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp9 = items1;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const layoutEffect1 = noop.useLayoutEffect(tmp8, tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function c() {
          if (obj.isAndroid()) {
            const rootNavigationRef = tmp(4937).getRootNavigationRef();
            if (null != rootNavigationRef) {
              function onNavigationStateChange() {
                const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[10]).PortalKeyboardUIStore;
                const field = PortalKeyboardUIStore.getField("keyboard");
                let tmp4 = null != field;
                if (tmp4) {
                  tmp4 = field.channelId !== rootNavigationRef(dependencyMap[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                }
                if (tmp4) {
                  tmp4 = rootNavigationRef(dependencyMap[13]).getFocusedChannelId() !== field.channelId;
                  const tmpResult = rootNavigationRef(dependencyMap[13]);
                }
                if (tmp4) {
                  const keyboardType = rootNavigationRef(dependencyMap[4]).getKeyboardType();
                  if (keyboardType !== rootNavigationRef(dependencyMap[5]).KeyboardTypes.SYSTEM) {
                    const obj = { type: rootNavigationRef(dependencyMap[5]).KeyboardTypes.SYSTEM };
                    rootNavigationRef(dependencyMap[14]).setKeyboardType(obj);
                    const tmpResult5 = rootNavigationRef(dependencyMap[14]);
                  }
                  const tmpResult4 = rootNavigationRef(dependencyMap[4]);
                  const result = rootNavigationRef(dependencyMap[10]).closePortalKeyboardIfUnhandled();
                  const tmpResult6 = rootNavigationRef(dependencyMap[10]);
                }
              }
              rootNavigationRef.addListener("state", onNavigationStateChange);
              return () => {
                rootNavigationRef.removeListener("state", onNavigationStateChange);
              };
            }
            let tmpResult = tmp(4937);
          }
          obj = rootNavigationRef(1381);
          tmp = rootNavigationRef;
        };
        const items2 = [];
        cResult[5] = fn3;
        cResult[6] = items2;
        let tmp12 = items2;
        let tmp11 = fn3;
      } else {
        tmp11 = cResult[5];
        tmp12 = cResult[6];
      }
      const layoutEffect2 = noop.useLayoutEffect(tmp11, tmp12);
      let PortalKeyboardUIStore = PortalKeyboard(4948).PortalKeyboardUIStore;
      let field = PortalKeyboardUIStore.useField("keyboard");
      const PortalKeyboardUIStore2 = PortalKeyboard(4948).PortalKeyboardUIStore;
      const field1 = PortalKeyboardUIStore2.useField("renderers");
      let tmp15 = 0 === field1.length;
      if (!tmp15) {
        tmp15 = field1[field1.length - 1] === id;
      }
      if (cResult[7] === tmp15) {
        if (cResult[8] === field) {
          if (cResult[10] !== cResult[9]) {
            const obj3 = { items: tmp16, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem };
            const tmp23 = jsx(PortalKeyboard(4787).TransitionGroup, {
              items: tmp16,
              getItemKey: transitionGroupGetItemKey,
              renderItem: transitionGroupRenderItem,
            });
            cResult[10] = tmp16;
            cResult[11] = tmp23;
            let tmp19 = tmp23;
          } else {
            tmp19 = cResult[11];
          }
          if (tmp3) {
            if (cResult[12] !== tmp19) {
              PortalKeyboard = PortalKeyboard(4951).PortalKeyboard;
              const obj4 = { children: tmp19 };
              tmp = <PortalKeyboard>{tmp19}</PortalKeyboard>;
              cResult[12] = tmp19;
              cResult[13] = tmp;
            }
          } else {
            if (cResult[14] !== tmp19) {
              const obj5 = { value: true, children: tmp19 };
              const tmp26 = jsx(PortalKeyboard(9461).PortalKeyboardInModalContext.Provider, {
                value: true,
                children: tmp19,
              });
              cResult[14] = tmp19;
              cResult[15] = tmp26;
              let tmp24 = tmp26;
            } else {
              tmp24 = cResult[15];
            }
            return tmp24;
          }
        }
      }
      if (null == field) {
        let tmp17 = closure_6;
        cResult[7] = tmp15;
        cResult[8] = field;
        cResult[9] = tmp17;
      }
      const items3 = [field];
      tmp17 = items3;
      let obj = id(576);
      tmp3 = undefined === portal || portal;
    }
  : function PortalKeyboardRenderer(portal) {
      let flag = portal.portal;
      if (flag === undefined) {
        flag = true;
      }
      dependencyMap = undefined;
      const id = noop.useId();
      let items = [id];
      const layoutEffect = noop.useLayoutEffect(() => PortalKeyboardUIStore3.registerPortalKeyboardRenderer(id), items);
      const layoutEffect1 = noop.useLayoutEffect(() => {
        closure_0 = closure_4(function onKeyboardStoreChange() {
          const PortalKeyboardUIStore = closure_0(4948).PortalKeyboardUIStore;
          field = PortalKeyboardUIStore.getField("keyboard");
          closure_0(4947);
          if (tmp6) {
            const result = closure_0(4948).closePortalKeyboardIfUnhandled();
            const tmpResult = closure_0(4948);
          }
          tmp6 = null != field && tmp5 !== field.type;
        });
        return () => {
          closure_0();
          const result = id(4948).closePortalKeyboardIfUnhandled();
        };
      }, []);
      const layoutEffect2 = noop.useLayoutEffect(() => {
        function onNavigationStateChange() {
          const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[10]).PortalKeyboardUIStore;
          field = PortalKeyboardUIStore.getField("keyboard");
          let tmp4 = null != field;
          if (tmp4) {
            tmp4 = field.channelId !== rootNavigationRef(dependencyMap[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
          }
          if (tmp4) {
            tmp4 = rootNavigationRef(dependencyMap[13]).getFocusedChannelId() !== field.channelId;
            const tmpResult = rootNavigationRef(dependencyMap[13]);
          }
          if (tmp4) {
            const keyboardType = rootNavigationRef(dependencyMap[4]).getKeyboardType();
            if (keyboardType !== rootNavigationRef(dependencyMap[5]).KeyboardTypes.SYSTEM) {
              const obj = { type: rootNavigationRef(dependencyMap[5]).KeyboardTypes.SYSTEM };
              rootNavigationRef(dependencyMap[14]).setKeyboardType(obj);
              const tmpResult5 = rootNavigationRef(dependencyMap[14]);
            }
            const tmpResult4 = rootNavigationRef(dependencyMap[4]);
            const result = rootNavigationRef(dependencyMap[10]).closePortalKeyboardIfUnhandled();
            const tmpResult6 = rootNavigationRef(dependencyMap[10]);
          }
        }
        if (obj.isAndroid()) {
          const rootNavigationRef = tmp(dependencyMap[11]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
          let tmpResult = tmp(dependencyMap[11]);
        }
        obj = rootNavigationRef(dependencyMap[6]);
        tmp = rootNavigationRef;
      }, []);
      let PortalKeyboardUIStore = id(4948).PortalKeyboardUIStore;
      let field = PortalKeyboardUIStore.useField("keyboard");
      const PortalKeyboardUIStore2 = id(4948).PortalKeyboardUIStore;
      const field1 = PortalKeyboardUIStore2.useField("renderers");
      let tmp8 = 0 === field1.length;
      if (!tmp8) {
        tmp8 = field1[field1.length - 1] === id;
      }
      dependencyMap = tmp8;
      const items1 = [tmp8, field];
      const memo = noop.useMemo(() => {
        if (null != field) {
          if (closure_2) {
            const items = [tmp];
            let tmp3 = items;
          }
          return tmp3;
        }
        tmp3 = closure_6;
      }, items1);
      const tmp11 = jsx(id(4787).TransitionGroup, {
        items: memo,
        getItemKey: transitionGroupGetItemKey,
        renderItem: transitionGroupRenderItem,
      });
      if (flag) {
        const obj3 = { children: tmp11 };
        let tmp10Result = jsx(tmp5(4951).PortalKeyboard, { children: tmp11 });
      } else {
        const obj4 = { value: true, children: tmp11 };
        tmp10Result = jsx(tmp5(9461).PortalKeyboardInModalContext.Provider, { value: true, children: tmp11 });
      }
      return tmp10Result;
    };
