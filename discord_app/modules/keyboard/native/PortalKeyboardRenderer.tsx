// === Module 16605: PortalKeyboardRenderer ===

// Module 16605 (PortalKeyboardRenderer)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import native from "native" /* 4589 */;
import useKeyboardType from "useKeyboardType" /* 4747 */;
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore" /* 4748 */;
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent" /* 16606 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1486 */;

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

export const PortalKeyboardRenderer = ReactCompilerGating.isReactCompilerEnabled() ? ((portal) => {
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
      closure_0 = closure_4(() => {
        const PortalKeyboardUIStore = closure_0(4748).PortalKeyboardUIStore;
        const field = PortalKeyboardUIStore.getField("keyboard");
        closure_0(4747);
        if (tmp6) {
          const result = closure_0(4748).closePortalKeyboardIfUnhandled();
          const tmpResult = closure_0(4748);
        }
        tmp6 = null != field && tmp5 !== field.type;
      });
      return () => {
        closure_0();
        const result = id(4748).closePortalKeyboardIfUnhandled();
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
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
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
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
    const items2 = [];
    cResult[5] = K;
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
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
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
    tmp12 = cResult[6];
  }
  const layoutEffect2 = noop.useLayoutEffect(K, tmp12);
  let PortalKeyboardUIStore = tmp(4748).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = tmp(4748).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  let tmp15 = 0 === field1.length;
  if (!tmp15) {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
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
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
    tmp15 = field1[field1.length - 1] === id;
  }
  if (cResult[7] === tmp15) {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
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
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
  }
  if (null == field) {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
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
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
    cResult[7] = tmp15;
    cResult[8] = field;
    cResult[9] = tmp16;
  } else {
    class K {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[6]);
        if (obj.isAndroid()) {
          tmpResult = tmp(tmp2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          closure_0 = rootNavigationRef;
          tmp3 = null;
          if (null != rootNavigationRef) {
            onNavigationStateChange = function onNavigationStateChange() {
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
            };
            str = "state";
            addListenerResult = rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
        return;
      }
    }
  }
  const items3 = [field];
  let obj = id(576);
}) : ((portal) => {
  let flag = portal.portal;
  if (flag === undefined) {
    flag = true;
  }
  dependencyMap = undefined;
  const id = noop.useId();
  let items = [id];
  const layoutEffect = noop.useLayoutEffect(() => PortalKeyboardUIStore3.registerPortalKeyboardRenderer(id), items);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    closure_0 = closure_4(() => {
      const PortalKeyboardUIStore = closure_0(4748).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      closure_0(4747);
      if (tmp6) {
        const result = closure_0(4748).closePortalKeyboardIfUnhandled();
        const tmpResult = closure_0(4748);
      }
      tmp6 = null != field && tmp5 !== field.type;
    });
    return () => {
      closure_0();
      const result = id(4748).closePortalKeyboardIfUnhandled();
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
  let PortalKeyboardUIStore = id(4748).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4748).PortalKeyboardUIStore;
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
  const tmp11 = jsx(id(4589).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    const obj3 = { children: tmp11 };
    let tmp10Result = jsx(tmp5(4751).PortalKeyboard, { children: tmp11 });
  } else {
    const obj4 = { value: true, children: tmp11 };
    tmp10Result = jsx(tmp5(9926).PortalKeyboardInModalContext.Provider, { value: true, children: tmp11 });
  }
  return tmp10Result;
});