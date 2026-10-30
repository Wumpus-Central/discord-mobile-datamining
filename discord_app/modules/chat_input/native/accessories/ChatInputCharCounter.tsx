// discord_app/modules/chat_input/native/accessories/ChatInputCharCounter.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import PremiumUpsellUtilsDefault from "../../../../utils/native/PremiumUpsellUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1072);
({ MAX_MESSAGE_LENGTH: metroRequire, UpsellTypes: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1386).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 } };
let closure_11 = createStyles.createStyles(obj);
class ChatCounter {
  constructor(arg0) {
    ({ style, analyticsLocations } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    tmp = closure_11();
    tmp2 = analyticsLocations;
    tmp3 = closure_2;
    obj = analyticsLocations(closure_2[8]);
    items = [];
    items[0] = closure_5;
    stateFromStores = obj.useStateFromStores(items, () =>
      stateFromStores(maxLength[9]).canUseIncreasedMessageLength(currentUser.getCurrentUser()),
    );
    closure_1 = stateFromStores;
    tmp5 = closure_1(closure_2[10])();
    closure_2 = tmp5;
    result = tmp5 / 10;
    closure_3 = result;
    tmp7 = -result;
    tmp8 = closure_3(closure_4.useState(tmp7 - 1), 2);
    first = tmp8[0];
    closure_4 = first;
    closure_5 = tmp8[1];
    tmp10 = closure_3(closure_4.useState(false), 2);
    [tmp11, closure_6] = tmp10;
    imperativeHandle = closure_4.useImperativeHandle(global.ref, () => ({
      onMessageLengthChanged(length) {
        currentUser(Math.max(-closure_1_3 - 1, length - maxLength));
        closure_1_6(length > c6);
      },
    }));
    items1 = [, , ,];
    items1[0] = analyticsLocations;
    items1[1] = stateFromStores;
    items1[2] = tmp5;
    items1[3] = first;
    callback = closure_4.useCallback(() => {
      if (stateFromStores) {
        if (first > 0) {
          const obj2 = { text: null };
          const intl = util.intl;
          obj2.text = intl.string(util.t.YSRIqa);
          ToastActionCreatorsDefault.open("premium-message-length-info-toast", obj2);
        } else {
          const obj3 = { text: null };
          const intl2 = util.intl;
          const obj5 = { maxLength };
          obj3.text = intl2.formatToPlainString(util.t.vcvHa0, obj5);
          ToastActionCreatorsDefault.open("premium-message-length-info-toast", obj3);
        }
      } else {
        const obj7 = { initialUpsellKey: constants.LONGER_MESSAGE, analyticsLocations, analyticsProperties: null };
        const obj8 = { type: PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL };
        obj7.analyticsProperties = obj8;
        const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj7);
      }
    }, items1);
    if (first > 0) {
      tmp19 = jsxs;
      obj1 = { onPress: null, style: null, children: null };
      obj1.onPress = callback;
      items2 = [,];
      items2[0] = tmp.container;
      items2[1] = style;
      obj1.style = items2;
      tmp20 = jsx;
      obj7 = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xxs/semibold", children: null };
      tmp21 = globalThis;
      _HermesInternal = HermesInternal;
      str = "-";
      obj7.children = "-" + first;
      items3 = [,];
      items3[0] = jsx(tmp2(tmp3[15]).Text, obj7);
      tmp20Result = null;
      if (!stateFromStores) {
        tmp20Result = tmp20(tmp2(tmp3[16]).NitroWheelIcon, { size: "xs", color: "icon-muted" });
      }
      items3[1] = tmp20Result;
      obj1.children = items3;
      tmp19Result = tmp19(tmp2(tmp3[14]).PressableOpacity, obj1);
    } else if (first >= tmp7) {
      tmp16 = jsxs;
      obj8 = { onPress: null, style: null, children: null };
      obj8.onPress = callback;
      items4 = [,];
      items4[0] = tmp.container;
      items4[1] = style;
      obj8.style = items4;
      tmp17 = jsx;
      obj9 = { color: "text-default", lineClamp: 1, variant: "text-xxs/semibold", children: null };
      obj9.children = -first;
      items5 = [,];
      items5[0] = jsx(tmp2(tmp3[15]).Text, obj9);
      tmp17Result = null;
      if (tmp11) {
        tmp17Result = tmp17(tmp2(tmp3[16]).NitroWheelIcon, { size: "xs", color: "icon-muted" });
      }
      items5[1] = tmp17Result;
      obj8.children = items5;
      tmp19Result = tmp16(tmp2(tmp3[14]).PressableOpacity, obj8);
    } else {
      tmp19Result = null;
      if (tmp11) {
        tmp15 = jsx;
        obj10 = { onPress: null, style: null, children: null };
        obj10.onPress = callback;
        items6 = [,];
        items6[0] = tmp.container;
        items6[1] = style;
        obj10.style = items6;
        obj10.children = jsx(tmp2(tmp3[16]).NitroWheelIcon, { size: "xs", color: "icon-muted" });
        tmp19Result = jsx(tmp2(tmp3[14]).PressableOpacity, obj10);
      }
    }
    return tmp19Result;
  }
}
ChatCounter.displayName = "ChatInputCharCounter";
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default noop.memo(ChatCounter);
