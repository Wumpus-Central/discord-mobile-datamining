// === Module 15675: transitionGroupGetItemKey ===

// Module 15675 (transitionGroupGetItemKey)
import noop from "noop";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { jsx } from "jsxProd";

const require = arg1;
function transitionGroupGetItemKey(id) {
  return id.id;
}
let closure_6 = [];
function transitionGroupRenderItem(arg0, arg1, arg2, arg3) {
  let isAndroidResult = arg2 === require(4600) /* wrapChildrenDefault */.TransitionStates.YEETED;
  if (isAndroidResult) {
    let tmpResult = tmp(4121);
    const keyboardType = tmpResult.getKeyboardType();
    isAndroidResult = keyboardType === tmp(1579).KeyboardTypes.SYSTEM;
  }
  if (isAndroidResult) {
    tmpResult = tmp(500);
    isAndroidResult = tmpResult.isAndroid();
  }
  let tmp5 = null;
  if (!isAndroidResult) {
    const obj = { item: null, state: null, cleanUp: null };
    obj[0] = arg1;
    obj[1] = arg2;
    obj[2] = arg3;
    tmp5 = jsx(importDefault(15676), { item: null, state: null, cleanUp: null }, arg0);
  }
  return tmp5;
}
let result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = function PortalKeyboardRenderer(portal) {
  let flag = portal.portal;
  if (flag === undefined) {
    flag = true;
  }
  let id;
  let field;
  let dependencyMap;
  let obj = React;
  id = React.useId();
  let items = [id];
  const layoutEffect = React.useLayoutEffect(() => id(_undefined[8]).registerPortalKeyboardRenderer(id), items);
  const layoutEffect1 = React.useLayoutEffect(() => {
    let closure_0 = callback(() => {
      const PortalKeyboardUIStore = callback(4122).PortalKeyboardUIStore;
      const field = PortalKeyboardUIStore.getField("keyboard");
      callback(4121);
      if (tmp6) {
        const result = callback(4122).closePortalKeyboardIfUnhandled();
        const tmpResult = callback(4122);
      }
    });
    return () => {
      callback();
      const result = callback(outer1_2[8]).closePortalKeyboardIfUnhandled();
    };
  }, []);
  const layoutEffect2 = React.useLayoutEffect(() => {
    function onNavigationStateChange() {
      const PortalKeyboardUIStore = rootNavigationRef(table[8]).PortalKeyboardUIStore;
      const field = PortalKeyboardUIStore.getField("keyboard");
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
          const obj = { type: null };
          obj[0] = tmp(tmp2[5]).KeyboardTypes.SYSTEM;
          tmp(tmp2[12]).setKeyboardType(obj);
          const tmpResult1 = tmp(tmp2[12]);
        }
        const result = tmp(tmp2[8]).closePortalKeyboardIfUnhandled();
        const tmpResult2 = tmp(tmp2[8]);
      }
    }
    if (obj.isAndroid()) {
      rootNavigationRef = rootNavigationRef(_undefined[9]).getRootNavigationRef();
      if (null != rootNavigationRef) {
        rootNavigationRef.addListener("state", onNavigationStateChange);
        return () => {
          rootNavigationRef.removeListener("state", onNavigationStateChange);
        };
      }
      let tmpResult = rootNavigationRef(_undefined[9]);
    }
  }, []);
  let PortalKeyboardUIStore = id(4122).PortalKeyboardUIStore;
  field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4122).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("renderers");
  let tmp8 = 0 === field1.length;
  if (!tmp8) {
    tmp8 = field1[field1.length - 1] === id;
  }
  dependencyMap = tmp8;
  const items1 = [tmp8, field];
  const memo = obj.useMemo(() => {
    if (null != field) {
      if (c2) {
        const items = [tmp];
        let tmp3 = items;
      }
      return tmp3;
    }
    tmp3 = outer1_6;
  }, items1);
  obj = { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem };
  const tmp11 = jsx(id(4600).TransitionGroup, { items: memo, getItemKey: transitionGroupGetItemKey, renderItem: transitionGroupRenderItem });
  if (flag) {
    obj = { children: null };
    obj[0] = tmp11;
    let tmp10Result = tmp10(tmp5(4125).PortalKeyboard, obj);
  } else {
    const obj1 = { value: true, children: null };
    obj1[1] = tmp11;
    tmp10Result = tmp10(tmp5(9556).PortalKeyboardInModalContext.Provider, obj1);
  }
  return tmp10Result;
};