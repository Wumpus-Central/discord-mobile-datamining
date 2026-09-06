// === Module 16756: PortalKeyboardRenderer ===

// Module 16756 (PortalKeyboardRenderer)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import native from "native" /* 4271 */;
import useKeyboardType from "useKeyboardType" /* 4427 */;
import PortalKeyboardUIStore3 from "PortalKeyboardUIStore" /* 4428 */;
import PortalKeyboardRendererComponentDefault from "PortalKeyboardRendererComponent" /* 16757 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1479 */;

require = fn;
function transitionGroupGetItemKey(id) {
  return id.id;
}
const jsx = fn(21).jsx;
let closure_6 = [];
function transitionGroupRenderItem(key, item, state, cleanUp) {
  let isAndroidResult = state === native.TransitionStates.YEETED;
  if (isAndroidResult) {
    let tmpResult = useKeyboardType;
    const keyboardType = tmpResult.getKeyboardType();
    isAndroidResult = keyboardType === KeyboardTypes.KeyboardTypes.SYSTEM;
  }
  if (isAndroidResult) {
    tmpResult = PlatformUtils;
    isAndroidResult = tmpResult.isAndroid();
  }
  let tmp5 = null;
  if (!isAndroidResult) {
    const obj = { item, state, cleanUp };
    tmp5 = jsx(PortalKeyboardRendererComponentDefault, { item, state, cleanUp }, key);
  }
  return tmp5;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = function PortalKeyboardRenderer(portal) {
  let flag = portal.portal;
  if (flag === undefined) {
    flag = true;
  }
  dependencyMap = undefined;
  let obj = noop;
  const id = noop.useId();
  let items = [id];
  const layoutEffect = noop.useLayoutEffect(() => PortalKeyboardUIStore3.registerPortalKeyboardRenderer(id), items);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    closure_0 = closure_4(() => {
      const PortalKeyboardUIStore = closure_0(4428).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      closure_0(4427);
      if (tmp6) {
        const result = closure_0(4428).closePortalKeyboardIfUnhandled();
        const tmpResult = closure_0(4428);
      }
      tmp6 = null != field && tmp5 !== field.type;
    });
    return () => {
      closure_0();
      const result = id(4428).closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = noop.useLayoutEffect(() => {
    function onNavigationStateChange() {
      const PortalKeyboardUIStore = rootNavigationRef(dependencyMap[8]).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      let tmp4 = null != field;
      if (tmp4) {
        tmp4 = field.channelId !== rootNavigationRef(dependencyMap[10]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      }
      if (tmp4) {
        let tmpResult = rootNavigationRef(dependencyMap[11]);
        tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
      }
      if (tmp4) {
        tmpResult = rootNavigationRef(dependencyMap[4]);
        const keyboardType = tmpResult.getKeyboardType();
        if (keyboardType !== rootNavigationRef(dependencyMap[5]).KeyboardTypes.SYSTEM) {
          const obj = { type: rootNavigationRef(dependencyMap[5]).KeyboardTypes.SYSTEM };
          rootNavigationRef(dependencyMap[12]).setKeyboardType(obj);
          const tmpResult1 = rootNavigationRef(dependencyMap[12]);
        }
        const result = rootNavigationRef(dependencyMap[8]).closePortalKeyboardIfUnhandled();
        const tmpResult2 = rootNavigationRef(dependencyMap[8]);
      }
    }
    if (obj.isAndroid()) {
      const rootNavigationRef = tmp(dependencyMap[9]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", onNavigationStateChange);
        return () => {
          rootNavigationRef.removeListener("state", onNavigationStateChange);
        };
      }
      let tmpResult = tmp(dependencyMap[9]);
    }
    obj = rootNavigationRef(dependencyMap[6]);
    tmp = rootNavigationRef;
  }, []);
  let PortalKeyboardUIStore = id(4428).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4428).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  let tmp8 = 0 === field1.length;
  if (!tmp8) {
    tmp8 = field1[field1.length - 1] === id;
  }
  dependencyMap = tmp8;
  const items1 = [tmp8, field];
  const memo = obj.useMemo(() => {
    if (null != field) {
      if (closure_2) {
        const items = [tmp];
        let tmp3 = items;
      }
      return tmp3;
    }
    tmp3 = closure_6;
  }, items1);
  obj = { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem };
  const tmp11 = jsx(id(4271).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    obj = { children: tmp11 };
    let tmp10Result = jsx(tmp5(4431).PortalKeyboard, { children: tmp11 });
  } else {
    const obj1 = { value: true, children: tmp11 };
    tmp10Result = jsx(tmp5(10322).PortalKeyboardInModalContext.Provider, { value: true, children: tmp11 });
  }
  return tmp10Result;
};