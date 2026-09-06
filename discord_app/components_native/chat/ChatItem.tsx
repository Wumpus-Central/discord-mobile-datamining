// === Module 8652: ChatItem ===

// Module 8652 (ChatItem)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import MessageTypes2 from "MessageTypes" /* 1089 */;
import isSystemMessageDefault from "isSystemMessage" /* 7270 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8126 */;
import AutoModerationSystemMessageViewNativeComponent from "AutoModerationSystemMessageViewNativeComponent" /* 8653 */;
import MessageViewNativeComponent from "MessageViewNativeComponent" /* 8654 */;
import SystemMessageViewNativeComponent from "SystemMessageViewNativeComponent" /* 8655 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
function DCDChatItem(message) {
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0 }));
  if (message.type === MessageTypes.AUTO_MODERATION_ACTION) {
    let obj = {};
    const merged1 = Object.assign(merged);
    let tmp3Result = closure_1_10(AutoModerationSystemMessageViewNativeComponent.default, obj);
  } else {
    const AUTOMOD_INCIDENT_ACTIONS = MessageTypes2.MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
    if (AUTOMOD_INCIDENT_ACTIONS.has(message.type)) {
      obj = {};
      const merged2 = Object.assign(merged);
      tmp3Result = closure_1_10(MessageViewNativeComponent.default, obj);
    } else if (isSystemMessageDefault(message)) {
      const obj1 = {};
      const merged3 = Object.assign(merged);
      tmp3Result = closure_1_10(SystemMessageViewNativeComponent.default, obj1);
    } else {
      obj = {};
      const merged4 = Object.assign(merged);
      tmp3Result = closure_1_10(MessageViewNativeComponent.default, obj);
    }
  }
  return tmp3Result;
}
const View = fn(17).View;
const MessageTypes = fn(1074).MessageTypes;
const RowGeneratorConstants = fn(7933);
({ RowType: closure_8, Changeset: closure_9 } = RowGeneratorConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles((marginLeft, marginTop, paddingTop) => {
  let obj = { container: null, offset: null, gradient: { position: "absolute", bottom: 0, height: 24, width: "100%" }, itemRow: { backgroundColor: "transparent" } };
  obj = { position: "relative", overflow: "hidden", paddingTop };
  obj.container = obj;
  obj = { marginTop: -marginTop, marginLeft: -marginLeft };
  obj.offset = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("components_native/chat/ChatItem.tsx");

export default function _default(rowGenerator) {
  rowGenerator = rowGenerator.rowGenerator;
  const message = rowGenerator.message;
  let num = rowGenerator.horizontalOffset;
  if (num === undefined) {
    num = 8;
  }
  ({ maxHeight, modifyRow } = rowGenerator);
  const onLayout = rowGenerator.onLayout;
  const messageSizeCacheRef = rowGenerator.messageSizeCacheRef;
  ({ backgroundColor, pointerEvents } = rowGenerator);
  if (backgroundColor === undefined) {
    backgroundColor = message(modifyRow[7]).colors.BACKGROUND_BASE_LOWER;
  }
  const gradientColors = rowGenerator.gradientColors;
  AccessibilityStore = undefined;
  let token;
  let obj = messageSizeCacheRef;
  [tmp4, c6] = onLayout(messageSizeCacheRef.useState(0), 2);
  const tmp5 = onLayout(messageSizeCacheRef.useState(undefined), 2);
  const constrainedWidth = tmp5[0];
  closure_8 = tmp5[1];
  const roleStyle = AccessibilityStore.roleStyle;
  let items = [constrainedWidth, roleStyle, message, modifyRow, rowGenerator];
  const memo = messageSizeCacheRef.useMemo(() => {
    let obj = { constrainedWidth };
    rowGenerator.setOptions(obj);
    obj = { roleStyle, rowType: constants.MESSAGE, changeType: constants2.NOOP, message, isFirst: true, canShowImages: true, canAddNewReactions: false };
    const generateResult = rowGenerator.generate(obj);
    if (null != modifyRow) {
      tmp3(generateResult);
    }
    obj = { rawRow: generateResult, row: null };
    const merged = Object.assign(generateResult);
    obj.row = JSON.stringify({ index: 0 });
    return obj;
  }, items);
  const rawRow = memo.rawRow;
  const items1 = [rawRow.contextType];
  const memo1 = messageSizeCacheRef.useMemo(() => {
    let num = 0;
    if (!obj.isAndroid()) {
      let num2 = 16;
      if (rawRow.contextType === RowGeneratorTypes.MessageContextType.SEARCH) {
        num2 = 12;
      }
      num = num2;
    }
    return num;
  }, items1);
  let tmp11 = rawRow.contextType !== rowGenerator(modifyRow[15]).MessageContextType.SEARCH;
  if (tmp11) {
    tmp11 = null != rawRow.message;
  }
  if (tmp11) {
    tmp11 = "avatarDecorationURL" in rawRow.message;
  }
  if (tmp11) {
    tmp11 = null != rawRow.message.avatarDecorationURL;
  }
  if (!tmp11) {
    const tmp17 = closure_14(num, memo1, 0);
    const items2 = [onLayout];
    const items3 = [messageSizeCacheRef, message.id];
    const callback = obj.useCallback((nativeEvent) => {
      closure_8(nativeEvent.nativeEvent.layout.width);
      if (onLayout != null) {
        onLayout(nativeEvent);
      }
    }, items2);
    let tmp24Result = null != maxHeight;
    const callback1 = obj.useCallback((nativeEvent) => {
      const height = nativeEvent.nativeEvent.layout.height;
      if (height > 0) {
        if (null != messageSizeCacheRef) {
          if (messageSizeCacheRef.current[message.id] !== height) {
            messageSizeCacheRef.current[tmp3.id] = height;
          }
        }
        _undefined(height);
      }
    }, items3);
    if (tmp24Result) {
      tmp24Result = tmp4 - memo1 >= maxHeight;
    }
    let tmp22;
    if (messageSizeCacheRef != null) {
      const current = messageSizeCacheRef.current;
      if (current != null) {
        tmp22 = current[message.id];
      }
    }
    let tmp23 = tmp22;
    if (tmp24Result) {
      tmp23 = tmp22;
      if (null != maxHeight) {
        tmp23 = maxHeight;
      }
    }
    obj = { style: tmp17.offset, onLayout: callback1, children: null };
    obj = { message, row: memo.row, style: tmp17.itemRow };
    obj.children = rawRow(DCDChatItem, obj);
    let tmp9Result = tmp9(modifyRow[16]);
    token = tmp9Result.useToken(backgroundColor);
    const items4 = [gradientColors, token];
    const obj1 = { style: null, onLayout: null, pointerEvents: null, children: null };
    const items5 = [tmp17.container, rowGenerator.style, ];
    const obj2 = { height: tmp23 };
    items5[2] = obj2;
    obj1.style = items5;
    obj1.onLayout = callback;
    obj1.pointerEvents = pointerEvents;
    let tmp31 = null != constrainedWidth;
    const memo2 = obj.useMemo(() => {
      let tmp = gradientColors;
      if (gradientColors == null) {
        const obj = _modDef672(token);
        const items = [_modDef672(token).alpha(0).hex(), token];
        tmp = items;
        const alphaResult = _modDef672(token).alpha(0);
      }
      return tmp;
    }, items4);
    if (tmp31) {
      tmp31 = tmp27;
    }
    const items6 = [tmp31, ];
    if (tmp24Result) {
      const obj3 = { colors: memo2, style: null };
      const items7 = [tmp17.gradient, rowGenerator.gradientStyles];
      obj3.style = items7;
      tmp24Result = rawRow(message(modifyRow[18]), obj3);
    }
    items6[1] = tmp24Result;
    obj1.children = items6;
    return token(gradientColors, obj1);
  } else {
    tmp9Result = tmp9(modifyRow[14]);
    tmp9Result.isAndroid() ? PX_4 - 2 : PX_4;
  }
  const tmp3 = onLayout(messageSizeCacheRef.useState(0), 2);
};
export const DCDMessageView = fn(8654).default;
export const DCDSystemMessageView = fn(8655).default;
export const DCDAutoModerationSystemMessageView = fn(8653).default;