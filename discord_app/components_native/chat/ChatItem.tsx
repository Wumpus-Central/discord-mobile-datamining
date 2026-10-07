// === Module 8336: ChatItem ===

// Module 8336 (ChatItem)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import isSystemMessageDefault from "isSystemMessage" /* 6783 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 7820 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const MessageTypes2 = _default(1101);
const AutoModerationSystemMessageViewNativeComponent = _default(8337);
const MessageViewNativeComponent = _default(8338);
const SystemMessageViewNativeComponent = _default(8339);
require = fn;
let closure_3 = ["message"];
const View = fn(17).View;
const MessageTypes = fn(1085).MessageTypes;
const RowGeneratorConstants = fn(7603);
({ RowType: c10, Changeset: closure_11 } = RowGeneratorConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
const ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let _default = require;
  let tmp = dependencyMap;
  const cResult = c.c(11);
  if (cResult[0] !== message) {
    message = message.message;
    const tmp7 = _objectWithoutProperties(message, closure_3);
    cResult[0] = message;
    cResult[1] = message;
    cResult[2] = tmp7;
    let tmp4 = tmp7;
    let tmp3 = message;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  if (tmp3.type === MessageTypes.AUTO_MODERATION_ACTION) {
    if (cResult[3] !== tmp4) {
      _default = AutoModerationSystemMessageViewNativeComponent.default;
      const obj2 = {};
      const merged = Object.assign(tmp4);
      tmp = __initData(_default, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp;
    }
  } else {
    const AUTOMOD_INCIDENT_ACTIONS = MessageTypes2.MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
    if (AUTOMOD_INCIDENT_ACTIONS.has(tmp3.type)) {
      if (cResult[5] !== tmp4) {
        const obj3 = {};
        const merged1 = Object.assign(tmp4);
        const tmp27 = __initData(MessageViewNativeComponent.default, obj3);
        cResult[5] = tmp4;
        cResult[6] = tmp27;
      }
    } else if (isSystemMessageDefault(tmp3)) {
      if (cResult[7] !== tmp4) {
        const obj4 = {};
        const merged2 = Object.assign(tmp4);
        const tmp20 = __initData(SystemMessageViewNativeComponent.default, obj4);
        cResult[7] = tmp4;
        cResult[8] = tmp20;
      }
    } else {
      if (cResult[9] !== tmp4) {
        const obj5 = {};
        const merged3 = Object.assign(tmp4);
        const tmp14 = __initData(MessageViewNativeComponent.default, obj5);
        cResult[9] = tmp4;
        cResult[10] = tmp14;
        let tmp9 = tmp14;
      } else {
        tmp9 = cResult[10];
      }
      return tmp9;
    }
  }
}) : ((message) => {
  message = message.message;
  const merged = Object.assign(message, Object.assign({ message: 0 }));
  if (message.type === MessageTypes.AUTO_MODERATION_ACTION) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    let tmp3Result = __initData(AutoModerationSystemMessageViewNativeComponent.default, obj2);
  } else {
    const AUTOMOD_INCIDENT_ACTIONS = MessageTypes2.MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
    if (AUTOMOD_INCIDENT_ACTIONS.has(message.type)) {
      const obj3 = {};
      const merged2 = Object.assign(merged);
      tmp3Result = __initData(MessageViewNativeComponent.default, obj3);
    } else if (isSystemMessageDefault(message)) {
      const obj4 = {};
      const merged3 = Object.assign(merged);
      tmp3Result = __initData(SystemMessageViewNativeComponent.default, obj4);
    } else {
      const obj = {};
      const merged4 = Object.assign(merged);
      tmp3Result = __initData(MessageViewNativeComponent.default, obj);
    }
  }
  return tmp3Result;
});
const createStyles = fn(4896);
let closure_16 = createStyles.createStyles((marginLeft, marginTop, paddingTop) => {
  const obj = { container: { position: "relative", overflow: "hidden", paddingTop }, offset: { marginTop: -marginTop, marginLeft: -marginLeft }, gradient: { position: "absolute", bottom: 0, height: 24, width: "100%" }, itemRow: { backgroundColor: "transparent" } };
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
    backgroundColor = message(modifyRow[8]).colors.BACKGROUND_BASE_LOWER;
  }
  const gradientColors = rowGenerator.gradientColors;
  noop = undefined;
  let token;
  [tmp4, c6] = messageSizeCacheRef(noop.useState(0), 2);
  const tmp5 = messageSizeCacheRef(noop.useState(undefined), 2);
  const constrainedWidth = tmp5[0];
  AccessibilityStore = tmp5[1];
  const roleStyle = AccessibilityStore.roleStyle;
  let items = [constrainedWidth, roleStyle, message, modifyRow, rowGenerator];
  const memo = noop.useMemo(() => {
    rowGenerator.setOptions({ constrainedWidth });
    const generateResult = rowGenerator.generate({ roleStyle, rowType: constants.MESSAGE, changeType: constants2.NOOP, message, isFirst: true, canShowImages: true, canAddNewReactions: false });
    if (null != modifyRow) {
      tmp3(generateResult);
    }
    const obj3 = { rawRow: generateResult, row: null };
    const merged = Object.assign(generateResult);
    obj3.row = JSON.stringify({ index: 0 });
    return obj3;
  }, items);
  const rawRow = memo.rawRow;
  const items1 = [rawRow.contextType];
  const memo1 = noop.useMemo(() => {
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
  let tmp11 = rawRow.contextType !== rowGenerator(modifyRow[18]).MessageContextType.SEARCH;
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
    const tmp17 = closure_16(num, memo1, 0);
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
    const obj2 = { style: tmp17.offset, onLayout: callback1, children: null };
    let obj3 = { message, row: memo.row, style: tmp17.itemRow };
    obj2.children = closure_12(closure_15, obj3);
    const tmp25 = constrainedWidth;
    const tmp27 = closure_12(constrainedWidth, obj2);
    token = tmp9(modifyRow[19]).useToken(backgroundColor);
    const items4 = [gradientColors, token];
    const obj4 = { style: null, onLayout: null, pointerEvents: null, children: null };
    const items5 = [tmp17.container, rowGenerator.style, ];
    const obj5 = { height: tmp23 };
    items5[2] = obj5;
    obj4.style = items5;
    obj4.onLayout = callback;
    obj4.pointerEvents = pointerEvents;
    let tmp31 = null != constrainedWidth;
    const memo2 = obj.useMemo(() => {
      let tmp = gradientColors;
      if (gradientColors == null) {
        const obj = _modDef683(token);
        const items = [_modDef683(token).alpha(0).hex(), token];
        tmp = items;
        const alphaResult = _modDef683(token).alpha(0);
      }
      return tmp;
    }, items4);
    if (tmp31) {
      tmp31 = tmp27;
    }
    const items6 = [tmp31, ];
    if (tmp24Result) {
      const obj6 = { colors: memo2, style: null };
      const items7 = [tmp17.gradient, rowGenerator.gradientStyles];
      obj6.style = items7;
      tmp24Result = closure_12(message(modifyRow[21]), obj6);
    }
    items6[1] = tmp24Result;
    obj4.children = items6;
    return closure_13(tmp25, obj4);
  } else {
    tmp9(modifyRow[17]).isAndroid() ? PX_4 - 2 : PX_4;
    const tmp9Result2 = tmp9(modifyRow[17]);
  }
  const tmp3 = messageSizeCacheRef(noop.useState(0), 2);
};
export const DCDMessageView = fn(8338).default;
export const DCDSystemMessageView = fn(8339).default;
export const DCDAutoModerationSystemMessageView = fn(8337).default;