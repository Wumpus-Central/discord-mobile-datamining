// === Module 12136: ChatInputCharCounter ===

// Module 12136 (ChatInputCharCounter)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4557 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8805 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Constants = fn(1074);
({ MAX_MESSAGE_LENGTH: metroRequire, UpsellTypes: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4845);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 } };
let closure_11 = createStyles.createStyles(obj);
const forwardRefResult = noop.forwardRef((arg0, arg1) => {
  ({ style, analyticsLocations } = arg0);
  first = undefined;
  currentUser = undefined;
  c6 = undefined;
  const tmp = closure_11();
  const items = [currentUser];
  const stateFromStores = analyticsLocations(504).useStateFromStores(items, () => stateFromStores(maxLength[9]).canUseIncreasedMessageLength(currentUser.getCurrentUser()));
  const tmp5 = stateFromStores(8796)();
  dependencyMap = tmp5;
  let result = tmp5 / 10;
  _slicedToArray = result;
  [first, currentUser] = first.useState(-result - 1);
  let obj = analyticsLocations(504);
  [tmp11, c6] = first.useState(false);
  const imperativeHandle = first.useImperativeHandle(arg1, () => ({
    onMessageLengthChanged(length) {
      currentUser(Math.max(-closure_1_3 - 1, length - maxLength));
      closure_1_6(length > c6);
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp5, first];
  const callback = first.useCallback(() => {
    if (stateFromStores) {
      if (first > 0) {
        const obj2 = { content: null, key: "premium-message-length-info-toast" };
        const intl = util.intl;
        obj2.content = intl.string(util.t.YSRIqa);
        ToastActionCreatorsDefault.open(obj2);
      } else {
        const obj3 = { content: null, key: "premium-message-length-info-toast" };
        const intl2 = util.intl;
        const obj5 = { maxLength };
        obj3.content = intl2.formatToPlainString(util.t.vcvHa0, obj5);
        ToastActionCreatorsDefault.open(obj3);
      }
    } else {
      const obj7 = { initialUpsellKey: constants.LONGER_MESSAGE, analyticsLocations, analyticsProperties: null };
      const obj8 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
      obj7.analyticsProperties = obj8;
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj7);
    }
  }, items1);
  if (first > 0) {
    let obj2 = { onPress: callback, style: null, children: null };
    const items2 = [tmp.container, style];
    obj2.style = items2;
    let obj3 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xxs/semibold", children: null };
    const _HermesInternal = HermesInternal;
    obj3.children = "-" + first;
    const items3 = [closure_9(analyticsLocations(4841).Text, obj3), ];
    let tmp20Result = null;
    if (!stateFromStores) {
      tmp20Result = closure_9(analyticsLocations(8309).NitroWheelIcon, { size: "xs", color: "icon-muted" });
    }
    items3[1] = tmp20Result;
    obj2.children = items3;
    let tmp16Result = closure_10(analyticsLocations(5621).PressableOpacity, obj2);
  } else if (first >= tmp7) {
    let obj4 = { onPress: callback, style: null, children: null };
    const items4 = [tmp.container, style];
    obj4.style = items4;
    let obj5 = { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: -first };
    const items5 = [closure_9(analyticsLocations(4841).Text, obj5), ];
    let tmp17Result = null;
    if (tmp11) {
      tmp17Result = closure_9(analyticsLocations(8309).NitroWheelIcon, { size: "xs", color: "icon-muted" });
    }
    items5[1] = tmp17Result;
    obj4.children = items5;
    tmp16Result = closure_10(analyticsLocations(5621).PressableOpacity, obj4);
  } else {
    tmp16Result = null;
    if (tmp11) {
      let obj6 = { onPress: callback, style: null, children: null };
      const items6 = [tmp.container, style];
      obj6.style = items6;
      obj6.children = closure_9(analyticsLocations(8309).NitroWheelIcon, { size: "xs", color: "icon-muted" });
      tmp16Result = closure_9(analyticsLocations(5621).PressableOpacity, obj6);
    }
  }
  return tmp16Result;
});
forwardRefResult.displayName = "ChatInputCharCounter";
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default noop.memo(forwardRefResult);