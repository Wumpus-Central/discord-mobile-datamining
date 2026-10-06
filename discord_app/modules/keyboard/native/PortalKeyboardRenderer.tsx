// discord_app/modules/keyboard/native/PortalKeyboardRenderer.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import KeyboardTypes from "KeyboardTypes.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useKeyboardType from "useKeyboardType.tsx";
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore.native.tsx";
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent.tsx";
import react from "../../../../_runtime/00019_react.js";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, portal;

function transitionGroupGetItemKey(id) {
  return id.id;
}
const jsx = Fragment.jsx;
let items = [];
function transitionGroupRenderItem(key, item, state, cleanUp) {
  let isAndroidResult = state === native.TransitionStates.YEETED;
  if (isAndroidResult) {
    const tmpResult = useKeyboardType;
    const keyboardType = tmpResult.getKeyboardType();
    isAndroidResult = keyboardType === KeyboardTypes.KeyboardTypes.SYSTEM;
  }
  if (isAndroidResult) {
    const tmpResult2 = PlatformUtils;
    isAndroidResult = tmpResult2.isAndroid();
  }
  let tmp5 = null;
  if (!isAndroidResult) {
    tmp5 = jsx(PortalKeyboardRendererComponentDefault, { item, state, cleanUp }, key);
  }
  return tmp5;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (portal) => {
      let id;
      let tmp10;
      let tmp13;
      let tmp6;
      let tmp7;
      let tmp9;
      let tmp = id;
      let obj = id(576);
      const cResult = obj.c(16);
      portal = portal.portal;
      let tmp4 = undefined === portal || portal;
      id = react.useId();
      if (cResult[0] !== id) {
        const fn = function s() {
          const obj = PortalKeyboardUIStore3;
          return obj.registerPortalKeyboardRenderer(id);
        };
        items = [id];
        cResult[0] = id;
        cResult[1] = fn;
        cResult[2] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function b() {
          let closure_0 = closure_4(() => {
            const PortalKeyboardUIStore = closure_0(closure_1_2[10]).PortalKeyboardUIStore;
            const field = PortalKeyboardUIStore.getField("keyboard");
            closure_0(closure_1_2[4]);
            const tmp6 = null != field && tmp5 !== field.type;
            if (tmp6) {
              const tmpResult = closure_0(closure_1_2[10]);
              const result = tmpResult.closePortalKeyboardIfUnhandled();
            }
          });
          return () => {
            closure_0();
            const obj = id(dependencyMap[10]);
            const result = obj.closePortalKeyboardIfUnhandled();
          };
        };
        const items1 = [];
        cResult[3] = fn2;
        cResult[4] = items1;
        tmp10 = items1;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const layoutEffect1 = react.useLayoutEffect(tmp9, tmp10);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class K {
          constructor() {
            let rootNavigationRef;
            let obj = rootNavigationRef(closure_2[6]);
            const tmp = rootNavigationRef;
            if (obj.isAndroid()) {
              let tmpResult = tmp(closure_2[11]);
              rootNavigationRef = tmpResult.getRootNavigationRef();
              if (null != rootNavigationRef) {
                function onNavigationStateChange() {
                  const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
                  const field = PortalKeyboardUIStore.getField("keyboard");
                  let tmp4 =
                    null != field &&
                    field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                  if (tmp4) {
                    const tmpResult = rootNavigationRef(closure_1_2[13]);
                    tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
                  }
                  if (tmp4) {
                    const tmpResult4 = rootNavigationRef(closure_1_2[4]);
                    const keyboardType = tmpResult4.getKeyboardType();
                    if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                      const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                      const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                      rootNavigationRef(closure_1_2[14]);
                      setKeyboardType(obj);
                    }
                    const tmpResult6 = rootNavigationRef(closure_1_2[10]);
                    const result = tmpResult6.closePortalKeyboardIfUnhandled();
                  }
                }
                rootNavigationRef.addListener("state", onNavigationStateChange);
                return () => {
                  rootNavigationRef.removeListener("state", onNavigationStateChange);
                };
              }
            }
          }
        }
        const items2 = [];
        cResult[5] = K;
        cResult[6] = items2;
        tmp13 = items2;
      } else {
        class K {
          constructor() {
            let rootNavigationRef;
            let obj = rootNavigationRef(closure_2[6]);
            const tmp = rootNavigationRef;
            if (obj.isAndroid()) {
              let tmpResult = tmp(closure_2[11]);
              rootNavigationRef = tmpResult.getRootNavigationRef();
              if (null != rootNavigationRef) {
                function onNavigationStateChange() {
                  const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
                  const field = PortalKeyboardUIStore.getField("keyboard");
                  let tmp4 =
                    null != field &&
                    field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                  if (tmp4) {
                    const tmpResult = rootNavigationRef(closure_1_2[13]);
                    tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
                  }
                  if (tmp4) {
                    const tmpResult4 = rootNavigationRef(closure_1_2[4]);
                    const keyboardType = tmpResult4.getKeyboardType();
                    if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                      const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                      const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                      rootNavigationRef(closure_1_2[14]);
                      setKeyboardType(obj);
                    }
                    const tmpResult6 = rootNavigationRef(closure_1_2[10]);
                    const result = tmpResult6.closePortalKeyboardIfUnhandled();
                  }
                }
                rootNavigationRef.addListener("state", onNavigationStateChange);
                return () => {
                  rootNavigationRef.removeListener("state", onNavigationStateChange);
                };
              }
            }
          }
        }
        tmp13 = cResult[6];
      }
      const layoutEffect2 = react.useLayoutEffect(K, tmp13);
      let PortalKeyboardUIStore = tmp(4754).PortalKeyboardUIStore;
      let field = PortalKeyboardUIStore.useField("keyboard");
      const PortalKeyboardUIStore2 = tmp(4754).PortalKeyboardUIStore;
      const field1 = PortalKeyboardUIStore2.useField("renderers");
      let tmp16 = 0 === field1.length;
      if (!tmp16) {
        class K {
          constructor() {
            let rootNavigationRef;
            let obj = rootNavigationRef(closure_2[6]);
            const tmp = rootNavigationRef;
            if (obj.isAndroid()) {
              let tmpResult = tmp(closure_2[11]);
              rootNavigationRef = tmpResult.getRootNavigationRef();
              if (null != rootNavigationRef) {
                function onNavigationStateChange() {
                  const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
                  const field = PortalKeyboardUIStore.getField("keyboard");
                  let tmp4 =
                    null != field &&
                    field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                  if (tmp4) {
                    const tmpResult = rootNavigationRef(closure_1_2[13]);
                    tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
                  }
                  if (tmp4) {
                    const tmpResult4 = rootNavigationRef(closure_1_2[4]);
                    const keyboardType = tmpResult4.getKeyboardType();
                    if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                      const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                      const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                      rootNavigationRef(closure_1_2[14]);
                      setKeyboardType(obj);
                    }
                    const tmpResult6 = rootNavigationRef(closure_1_2[10]);
                    const result = tmpResult6.closePortalKeyboardIfUnhandled();
                  }
                }
                rootNavigationRef.addListener("state", onNavigationStateChange);
                return () => {
                  rootNavigationRef.removeListener("state", onNavigationStateChange);
                };
              }
            }
          }
        }
        tmp16 = field1[field1.length - 1] === id;
      }
      if (cResult[7] === tmp16) {
        class K {
          constructor() {
            let rootNavigationRef;
            let obj = rootNavigationRef(closure_2[6]);
            const tmp = rootNavigationRef;
            if (obj.isAndroid()) {
              let tmpResult = tmp(closure_2[11]);
              rootNavigationRef = tmpResult.getRootNavigationRef();
              if (null != rootNavigationRef) {
                function onNavigationStateChange() {
                  const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
                  const field = PortalKeyboardUIStore.getField("keyboard");
                  let tmp4 =
                    null != field &&
                    field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                  if (tmp4) {
                    const tmpResult = rootNavigationRef(closure_1_2[13]);
                    tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
                  }
                  if (tmp4) {
                    const tmpResult4 = rootNavigationRef(closure_1_2[4]);
                    const keyboardType = tmpResult4.getKeyboardType();
                    if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                      const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                      const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                      rootNavigationRef(closure_1_2[14]);
                      setKeyboardType(obj);
                    }
                    const tmpResult6 = rootNavigationRef(closure_1_2[10]);
                    const result = tmpResult6.closePortalKeyboardIfUnhandled();
                  }
                }
                rootNavigationRef.addListener("state", onNavigationStateChange);
                return () => {
                  rootNavigationRef.removeListener("state", onNavigationStateChange);
                };
              }
            }
          }
        }
        if (cResult[10] !== items) {
          class K {
            constructor() {
              let rootNavigationRef;
              let obj = rootNavigationRef(closure_2[6]);
              const tmp = rootNavigationRef;
              if (obj.isAndroid()) {
                let tmpResult = tmp(closure_2[11]);
                rootNavigationRef = tmpResult.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  function onNavigationStateChange() {
                    const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
                    const field = PortalKeyboardUIStore.getField("keyboard");
                    let tmp4 =
                      null != field &&
                      field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if (tmp4) {
                      const tmpResult = rootNavigationRef(closure_1_2[13]);
                      tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
                    }
                    if (tmp4) {
                      const tmpResult4 = rootNavigationRef(closure_1_2[4]);
                      const keyboardType = tmpResult4.getKeyboardType();
                      if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                        const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                        const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                        rootNavigationRef(closure_1_2[14]);
                        setKeyboardType(obj);
                      }
                      const tmpResult6 = rootNavigationRef(closure_1_2[10]);
                      const result = tmpResult6.closePortalKeyboardIfUnhandled();
                    }
                  }
                  rootNavigationRef.addListener("state", onNavigationStateChange);
                  return () => {
                    rootNavigationRef.removeListener("state", onNavigationStateChange);
                  };
                }
              }
            }
          }
          cResult[10] = items;
          cResult[11] = jsx(tmp(4595).TransitionGroup, {
            items,
            getItemKey: transitionGroupGetItemKey,
            renderItem: transitionGroupRenderItem,
          });
          const tmp22 = jsx(tmp(4595).TransitionGroup, {
            items,
            getItemKey: transitionGroupGetItemKey,
            renderItem: transitionGroupRenderItem,
          });
        } else {
          class K {
            constructor() {
              let rootNavigationRef;
              let obj = rootNavigationRef(closure_2[6]);
              const tmp = rootNavigationRef;
              if (obj.isAndroid()) {
                let tmpResult = tmp(closure_2[11]);
                rootNavigationRef = tmpResult.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  function onNavigationStateChange() {
                    const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
                    const field = PortalKeyboardUIStore.getField("keyboard");
                    let tmp4 =
                      null != field &&
                      field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if (tmp4) {
                      const tmpResult = rootNavigationRef(closure_1_2[13]);
                      tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
                    }
                    if (tmp4) {
                      const tmpResult4 = rootNavigationRef(closure_1_2[4]);
                      const keyboardType = tmpResult4.getKeyboardType();
                      if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                        const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                        const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                        rootNavigationRef(closure_1_2[14]);
                        setKeyboardType(obj);
                      }
                      const tmpResult6 = rootNavigationRef(closure_1_2[10]);
                      const result = tmpResult6.closePortalKeyboardIfUnhandled();
                    }
                  }
                  rootNavigationRef.addListener("state", onNavigationStateChange);
                  return () => {
                    rootNavigationRef.removeListener("state", onNavigationStateChange);
                  };
                }
              }
            }
          }
        }
        if (tmp4) {
          class K {
            constructor() {
              let rootNavigationRef;
              let obj = rootNavigationRef(closure_2[6]);
              const tmp = rootNavigationRef;
              if (obj.isAndroid()) {
                let tmpResult = tmp(closure_2[11]);
                rootNavigationRef = tmpResult.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  function onNavigationStateChange() {
                    const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
                    const field = PortalKeyboardUIStore.getField("keyboard");
                    let tmp4 =
                      null != field &&
                      field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if (tmp4) {
                      const tmpResult = rootNavigationRef(closure_1_2[13]);
                      tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
                    }
                    if (tmp4) {
                      const tmpResult4 = rootNavigationRef(closure_1_2[4]);
                      const keyboardType = tmpResult4.getKeyboardType();
                      if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                        const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                        const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                        rootNavigationRef(closure_1_2[14]);
                        setKeyboardType(obj);
                      }
                      const tmpResult6 = rootNavigationRef(closure_1_2[10]);
                      const result = tmpResult6.closePortalKeyboardIfUnhandled();
                    }
                  }
                  rootNavigationRef.addListener("state", onNavigationStateChange);
                  return () => {
                    rootNavigationRef.removeListener("state", onNavigationStateChange);
                  };
                }
              }
            }
          }
        } else {
          class K {
            constructor() {
              let rootNavigationRef;
              let obj = rootNavigationRef(closure_2[6]);
              const tmp = rootNavigationRef;
              if (obj.isAndroid()) {
                let tmpResult = tmp(closure_2[11]);
                rootNavigationRef = tmpResult.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  function onNavigationStateChange() {
                    const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
                    const field = PortalKeyboardUIStore.getField("keyboard");
                    let tmp4 =
                      null != field &&
                      field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                    if (tmp4) {
                      const tmpResult = rootNavigationRef(closure_1_2[13]);
                      tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
                    }
                    if (tmp4) {
                      const tmpResult4 = rootNavigationRef(closure_1_2[4]);
                      const keyboardType = tmpResult4.getKeyboardType();
                      if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                        const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                        const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                        rootNavigationRef(closure_1_2[14]);
                        setKeyboardType(obj);
                      }
                      const tmpResult6 = rootNavigationRef(closure_1_2[10]);
                      const result = tmpResult6.closePortalKeyboardIfUnhandled();
                    }
                  }
                  rootNavigationRef.addListener("state", onNavigationStateChange);
                  return () => {
                    rootNavigationRef.removeListener("state", onNavigationStateChange);
                  };
                }
              }
            }
          }
        }
        return tmp24;
      }
      if (null != field) {
        class K {
          constructor() {
            let rootNavigationRef;
            let obj = rootNavigationRef(closure_2[6]);
            const tmp = rootNavigationRef;
            if (obj.isAndroid()) {
              let tmpResult = tmp(closure_2[11]);
              rootNavigationRef = tmpResult.getRootNavigationRef();
              if (null != rootNavigationRef) {
                function onNavigationStateChange() {
                  const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
                  const field = PortalKeyboardUIStore.getField("keyboard");
                  let tmp4 =
                    null != field &&
                    field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                  if (tmp4) {
                    const tmpResult = rootNavigationRef(closure_1_2[13]);
                    tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
                  }
                  if (tmp4) {
                    const tmpResult4 = rootNavigationRef(closure_1_2[4]);
                    const keyboardType = tmpResult4.getKeyboardType();
                    if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
                      const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
                      const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
                      rootNavigationRef(closure_1_2[14]);
                      setKeyboardType(obj);
                    }
                    const tmpResult6 = rootNavigationRef(closure_1_2[10]);
                    const result = tmpResult6.closePortalKeyboardIfUnhandled();
                  }
                }
                rootNavigationRef.addListener("state", onNavigationStateChange);
                return () => {
                  rootNavigationRef.removeListener("state", onNavigationStateChange);
                };
              }
            }
          }
        }
        cResult[7] = tmp16;
        cResult[8] = field;
        cResult[9] = items;
      }
    }
  : (portal) => {
      let closure_2;
      let tmp10Result;
      let flag = portal.portal;
      if (flag === undefined) {
        flag = true;
      }
      dependencyMap = undefined;
      const id = react.useId();
      items = [id];
      const layoutEffect = react.useLayoutEffect(() => {
        const obj = PortalKeyboardUIStore3;
        return obj.registerPortalKeyboardRenderer(id);
      }, items);
      const layoutEffect1 = react.useLayoutEffect(() => {
        let closure_0 = closure_4(() => {
          const PortalKeyboardUIStore = closure_0(closure_1_2[10]).PortalKeyboardUIStore;
          field = PortalKeyboardUIStore.getField("keyboard");
          closure_0(closure_1_2[4]);
          const tmp6 = null != field && tmp5 !== field.type;
          if (tmp6) {
            const tmpResult = closure_0(closure_1_2[10]);
            const result = tmpResult.closePortalKeyboardIfUnhandled();
          }
        });
        return () => {
          closure_0();
          const obj = id(closure_2[10]);
          const result = obj.closePortalKeyboardIfUnhandled();
        };
      }, []);
      const layoutEffect2 = react.useLayoutEffect(() => {
        let rootNavigationRef;
        function onNavigationStateChange() {
          const PortalKeyboardUIStore = rootNavigationRef(closure_1_2[10]).PortalKeyboardUIStore;
          field = PortalKeyboardUIStore.getField("keyboard");
          let tmp4 =
            null != field && field.channelId !== rootNavigationRef(closure_1_2[12]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
          if (tmp4) {
            const tmpResult = rootNavigationRef(closure_1_2[13]);
            tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
          }
          if (tmp4) {
            const tmpResult4 = rootNavigationRef(closure_1_2[4]);
            const keyboardType = tmpResult4.getKeyboardType();
            if (keyboardType !== rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM) {
              const obj = { type: rootNavigationRef(closure_1_2[5]).KeyboardTypes.SYSTEM };
              const setKeyboardType = rootNavigationRef(closure_1_2[14]).setKeyboardType;
              rootNavigationRef(closure_1_2[14]);
              setKeyboardType(obj);
            }
            const tmpResult6 = rootNavigationRef(closure_1_2[10]);
            const result = tmpResult6.closePortalKeyboardIfUnhandled();
          }
        }
        let obj = rootNavigationRef(closure_2[6]);
        const tmp = rootNavigationRef;
        if (obj.isAndroid()) {
          let tmpResult = tmp(closure_2[11]);
          rootNavigationRef = tmpResult.getRootNavigationRef();
          if (null != rootNavigationRef) {
            rootNavigationRef.addListener("state", onNavigationStateChange);
            return () => {
              rootNavigationRef.removeListener("state", onNavigationStateChange);
            };
          }
        }
      }, []);
      const tmp5 = id;
      let tmp6 = dependencyMap;
      let PortalKeyboardUIStore = id(4754).PortalKeyboardUIStore;
      let field = PortalKeyboardUIStore.useField("keyboard");
      const PortalKeyboardUIStore2 = id(4754).PortalKeyboardUIStore;
      const field1 = PortalKeyboardUIStore2.useField("renderers");
      const tmp8 = 0 === field1.length || field1[field1.length - 1] === id;
      dependencyMap = tmp8;
      const items1 = [tmp8, field];
      const memo = react.useMemo(() => {
        if (null != field) {
          let tmp3;
          if (closure_2) {
            items = [tmp];
            tmp3 = items;
          }
          return tmp3;
        }
        tmp3 = closure_6;
      }, items1);
      const tmp11 = jsx(tmp5(4595).TransitionGroup, {
        items: memo,
        getItemKey: transitionGroupGetItemKey,
        renderItem: transitionGroupRenderItem,
      });
      if (flag) {
        tmp10Result = jsx(tmp5(4757).PortalKeyboard, { children: tmp11 });
      } else {
        tmp10Result = jsx(tmp5(9939).PortalKeyboardInModalContext.Provider, { value: true, children: tmp11 });
      }
      return tmp10Result;
    };
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = tmp2;
