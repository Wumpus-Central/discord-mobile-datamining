// === Module 16756: PortalKeyboardRenderer ===

// Module 16756 (PortalKeyboardRenderer)
import native from "native" /* 4271 */;
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
function transitionGroupRenderItem(arg0, item, state, cleanUp) {
  let isAndroidResult = state === native.TransitionStates.YEETED;
  if (isAndroidResult) {
    let tmpResult = tmp(4427);
    const keyboardType = tmpResult.getKeyboardType();
    isAndroidResult = keyboardType === tmp(1609).KeyboardTypes.SYSTEM;
  }
  if (isAndroidResult) {
    tmpResult = tmp(1115);
    isAndroidResult = tmpResult.isAndroid();
  }
  let tmp5 = null;
  if (!isAndroidResult) {
    const obj = { item, state, cleanUp };
    tmp5 = jsx(PortalKeyboardRendererComponentDefault, { item, state, cleanUp }, arg0);
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
        tmp4 = field.channelId !== tmp(tmp2[10]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      }
      if (tmp4) {
        let tmpResult = tmp(tmp2[11]);
        tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
      }
      if (tmp4) {
        tmpResult = tmp(tmp2[4]);
        const keyboardType = tmpResult.getKeyboardType();
        if (keyboardType !== tmp(tmp2[5]).KeyboardTypes.SYSTEM) {
          const obj = { type: tmp(tmp2[5]).KeyboardTypes.SYSTEM };
          tmp(tmp2[12]).setKeyboardType(obj);
          const tmpResult1 = tmp(tmp2[12]);
        }
        const result = tmp(tmp2[8]).closePortalKeyboardIfUnhandled();
        const tmpResult2 = tmp(tmp2[8]);
      }
    }
    if (obj.isAndroid()) {
      rootNavigationRef = rootNavigationRef(dependencyMap[9]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", onNavigationStateChange);
        return () => {
          rootNavigationRef.removeListener("state", onNavigationStateChange);
        };
      }
      let tmpResult = rootNavigationRef(dependencyMap[9]);
    }
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
    let tmp10Result = tmp10(tmp5(4431).PortalKeyboard, obj);
  } else {
    const obj1 = { value: true, children: tmp11 };
    tmp10Result = tmp10(tmp5(10322).PortalKeyboardInModalContext.Provider, obj1);
  }
  return tmp10Result;
};