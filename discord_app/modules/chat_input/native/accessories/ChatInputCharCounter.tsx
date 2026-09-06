// discord_app/modules/chat_input/native/accessories/ChatInputCharCounter.tsx
import util from "../../../../intl/index.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const UpsellTypes = fn(1074).UpsellTypes;
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { alignItems: "center", paddingBottom: 6 } });
const forwardRefResult = noop.forwardRef((analyticsLocations, ref) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let obj = analyticsLocations(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    stateFromStores(_undefined[8]).canUseIncreasedMessageLength(currentUser.getCurrentUser()),
  );
  const tmp = closure_10();
  [tmp6, c2] = _slicedToArray(noop.useState(0), 2);
  const tmp7 = stateFromStores(9304)();
  _slicedToArray = tmp7;
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    onMessageLengthChanged(length) {
      _undefined(Math.max(0, length - maxLength));
    },
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp7];
  let tmp10 = null;
  if (tmp6 > 0) {
    obj = { onPress: tmp9, style: tmp.container, children: null };
    obj = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xs/medium", children: null };
    const _HermesInternal = HermesInternal;
    obj.children = "-" + tmp6;
    const items2 = [closure_8(tmp2(4556).Text, obj), closure_8(tmp2(8662).NitroWheelIcon, { size: "sm" })];
    obj.children = items2;
    tmp10 = closure_9(tmp2(5123).PressableOpacity, obj);
  }
  return tmp10;
});
forwardRefResult.displayName = "ChatInputCharCounter";
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default noop.memo(forwardRefResult);
