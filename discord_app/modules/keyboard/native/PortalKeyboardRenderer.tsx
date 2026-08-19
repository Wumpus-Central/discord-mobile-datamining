// === Module 15975: transitionGroupGetItemKey ===

// Module 15975 (transitionGroupGetItemKey)
import obj132 from "obj132" /* 500 */;
import KeyboardTypes from "KeyboardTypes" /* 1627 */;
import useKeyboardType from "useKeyboardType" /* 4239 */;
import wrapChildrenDefault from "wrapChildrenDefault" /* 4668 */;
import _modDef15976 from "module_15976" /* 15976 */;
import noop from "noop" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1496 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
function transitionGroupGetItemKey(id) {
  return id.id;
}
let closure_6 = [];
function transitionGroupRenderItem(arg0, arg1, arg2, arg3) {
  let isAndroidResult = arg2 === wrapChildrenDefault.TransitionStates.YEETED;
  if (isAndroidResult) {
    let tmpResult = useKeyboardType;
    const keyboardType = tmpResult.getKeyboardType();
    isAndroidResult = keyboardType === KeyboardTypes.KeyboardTypes.SYSTEM;
  }
  if (isAndroidResult) {
    tmpResult = obj132;
    isAndroidResult = tmpResult.isAndroid();
  }
  let tmp5 = null;
  if (!isAndroidResult) {
    const obj = { item: null, state: null, cleanUp: null };
    obj[0] = arg1;
    obj[1] = arg2;
    obj[2] = arg3;
    tmp5 = jsx(_modDef15976, { item: null, state: null, cleanUp: null }, arg0);
  }
  return tmp5;
}
let result = require("obj132").fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = function PortalKeyboardRenderer(portal) {
  let flag = portal.portal;
  if (flag === undefined) {
    flag = true;
  }
  dependencyMap = undefined;
  let obj = React;
  const id = React.useId();
  let items = [id];
  const layoutEffect = React.useLayoutEffect(() => id(4240).registerPortalKeyboardRenderer(id), items);
  const layoutEffect1 = React.useLayoutEffect(() => {
    closure_0 = callback(() => {
      const PortalKeyboardUIStore = callback(4240).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      callback(4239);
      if (tmp6) {
        const result = callback(4240).closePortalKeyboardIfUnhandled();
        const tmpResult = callback(4240);
      }
      tmp6 = null != field && tmp5 !== field.type;
    });
    return () => {
      callback();
      const result = callback(closure_1_2[8]).closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = React.useLayoutEffect(() => {
    function onNavigationStateChange() {
      const PortalKeyboardUIStore = rootNavigationRef(table[8]).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      let tmp4 = null != field;
      if (tmp4) {
        tmp4 = field.channelId !== rootNavigationRef(table[10]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
      }
      if (tmp4) {
        let tmpResult = rootNavigationRef(table[11]);
        tmp4 = tmpResult.getFocusedChannelId() !== field.channelId;
      }
      if (tmp4) {
        tmpResult = rootNavigationRef(table[4]);
        const keyboardType = tmpResult.getKeyboardType();
        if (keyboardType !== rootNavigationRef(table[5]).KeyboardTypes.SYSTEM) {
          const obj = { type: null };
          obj[0] = rootNavigationRef(table[5]).KeyboardTypes.SYSTEM;
          rootNavigationRef(table[12]).setKeyboardType(obj);
          const tmpResult1 = rootNavigationRef(table[12]);
        }
        const result = rootNavigationRef(table[8]).closePortalKeyboardIfUnhandled();
        const tmpResult2 = rootNavigationRef(table[8]);
      }
    }
    if (obj.isAndroid()) {
      const rootNavigationRef = tmp(4230).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", onNavigationStateChange);
        return () => {
          rootNavigationRef.removeListener("state", onNavigationStateChange);
        };
      }
      let tmpResult = tmp(4230);
    }
    obj = rootNavigationRef(500);
    tmp = rootNavigationRef;
  }, []);
  let PortalKeyboardUIStore = id(4240).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4240).PortalKeyboardUIStore;
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
    tmp3 = closure_1_6;
  }, items1);
  obj = { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem };
  const tmp11 = jsx(id(4668).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    obj = { children: null };
    obj[0] = tmp11;
    let tmp10Result = jsx(tmp5(4243).PortalKeyboard, { children: null });
  } else {
    obj1 = { value: true, children: null };
    obj1[1] = tmp11;
    tmp10Result = jsx(tmp5(9388).PortalKeyboardInModalContext.Provider, { value: true, children: null });
  }
  return tmp10Result;
};