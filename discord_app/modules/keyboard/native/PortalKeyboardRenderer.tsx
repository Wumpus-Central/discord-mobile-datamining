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
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardRenderer.tsx");

export const PortalKeyboardRenderer = function PortalKeyboardRenderer(portal) {
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
      const PortalKeyboardUIStore = closure_0(4509).PortalKeyboardUIStore;
      field = PortalKeyboardUIStore.getField("keyboard");
      closure_0(4508);
      if (tmp6) {
        const result = closure_0(4509).closePortalKeyboardIfUnhandled();
        const tmpResult = closure_0(4509);
      }
      tmp6 = null != field && tmp5 !== field.type;
    });
    return () => {
      closure_0();
      const result = id(4509).closePortalKeyboardIfUnhandled();
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
        tmp4 = rootNavigationRef(dependencyMap[11]).getFocusedChannelId() !== field.channelId;
        const tmpResult = rootNavigationRef(dependencyMap[11]);
      }
      if (tmp4) {
        const keyboardType = rootNavigationRef(dependencyMap[4]).getKeyboardType();
        if (keyboardType !== rootNavigationRef(dependencyMap[5]).KeyboardTypes.SYSTEM) {
          const obj = { type: rootNavigationRef(dependencyMap[5]).KeyboardTypes.SYSTEM };
          rootNavigationRef(dependencyMap[12]).setKeyboardType(obj);
          const tmpResult5 = rootNavigationRef(dependencyMap[12]);
        }
        const tmpResult4 = rootNavigationRef(dependencyMap[4]);
        const result = rootNavigationRef(dependencyMap[8]).closePortalKeyboardIfUnhandled();
        const tmpResult6 = rootNavigationRef(dependencyMap[8]);
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
  let PortalKeyboardUIStore = id(4509).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = id(4509).PortalKeyboardUIStore;
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
  const tmp11 = jsx(id(4350).TransitionGroup, {
    items: memo,
    getItemKey: transitionGroupGetItemKey,
    renderItem: transitionGroupRenderItem,
  });
  if (flag) {
    const obj3 = { children: tmp11 };
    let tmp10Result = jsx(tmp5(4512).PortalKeyboard, { children: tmp11 });
  } else {
    const obj4 = { value: true, children: tmp11 };
    tmp10Result = jsx(tmp5(10470).PortalKeyboardInModalContext.Provider, { value: true, children: tmp11 });
  }
  return tmp10Result;
};
