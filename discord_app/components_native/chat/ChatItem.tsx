// discord_app/components_native/chat/ChatItem.tsx
import _slicedToArray from "_slicedToArray";
import LinearGradient from "LinearGradient";
import get_ActivityIndicator from "map";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { MessageTypes } from "ME";
import Changeset from "Changeset";
import jsxProd from "jsxProd";
import isFabric from "isFabric";
import isFabric from "isFabric";
import isFabric from "isFabric";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let metroImportAll;
let requireNativeComponent;
let unpackModuleId;
const require = arg1;
function DCDChatItem(message) {
  message = message.message;
  const merged = Object.assign(message, Object.create(null));
  if (message.type === MessageTypes.AUTO_MODERATION_ACTION) {
    let obj = {};
    const merged1 = Object.assign(merged);
    let tmp3Result = callback(_default3, obj);
  } else {
    const AUTOMOD_INCIDENT_ACTIONS = require(686) /* set */.MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
    if (AUTOMOD_INCIDENT_ACTIONS.has(message.type)) {
      obj = {};
      const merged2 = Object.assign(merged);
      tmp3Result = callback(_default, obj);
    } else if (importDefault(5927)(message)) {
      const obj1 = {};
      const merged3 = Object.assign(merged);
      tmp3Result = tmp3(_default2, obj1);
    } else {
      obj = {};
      const merged4 = Object.assign(merged);
      tmp3Result = tmp3(_default, obj);
    }
  }
  return tmp3Result;
}
({ requireNativeComponent, View: c5 } = get_ActivityIndicator);
({ RowType: metroImportAll, Changeset: c9 } = Changeset);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
if (isFabric.isFabric()) {
  let _default = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default = requireNativeComponent("DCDMessageView");
}
if (isFabric.isFabric()) {
  let _default2 = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default2 = requireNativeComponent("DCDSystemMessageView");
}
if (isFabric.isFabric()) {
  let _default3 = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default3 = requireNativeComponent("DCDAutoModerationSystemMessageView");
}
let closure_16 = createCacheKey.createStyles((marginLeft, marginTop) => {
  const offset = { marginTop: -marginTop, marginLeft: -marginLeft };
  return { container: { position: "relative", overflow: "hidden" }, offset, gradient: { position: "absolute", bottom: 0, height: 24, width: "100%" }, itemRow: { backgroundColor: "transparent" } };
});
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/chat/ChatItem.tsx");

export default function _default(rowGenerator) {
  let backgroundColor;
  let c6;
  let maxHeight;
  let modifyRow;
  let pointerEvents;
  let tmp4;
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
    backgroundColor = message(modifyRow[14]).colors.BACKGROUND_BASE_LOWER;
  }
  const gradientColors = rowGenerator.gradientColors;
  let roleStyle;
  let first;
  let closure_8;
  roleStyle = undefined;
  let rawRow;
  let token;
  let obj = messageSizeCacheRef;
  [tmp4, c6] = onLayout(messageSizeCacheRef.useState(0), 2);
  const tmp5 = onLayout(messageSizeCacheRef.useState(undefined), 2);
  first = tmp5[0];
  closure_8 = tmp5[1];
  roleStyle = roleStyle.roleStyle;
  let items = [first, roleStyle, message, modifyRow, rowGenerator];
  const memo = messageSizeCacheRef.useMemo(() => {
    let obj = { constrainedWidth: first };
    rowGenerator.setOptions(obj);
    obj = { roleStyle, rowType: lib.MESSAGE, changeType: roleStyle.NOOP, message, isFirst: true, canShowImages: true, canAddNewReactions: false };
    const generateResult = rowGenerator.generate(obj);
    if (null != modifyRow) {
      tmp3(generateResult);
    }
    obj = { rawRow: generateResult, row: null };
    let json = generateResult;
    if (obj4.isFabric()) {
      const _JSON = JSON;
      const obj1 = { index: 0 };
      const merged = Object.assign(generateResult);
      json = JSON.stringify(obj1);
    }
    obj[1] = json;
    return obj;
  }, items);
  rawRow = memo.rawRow;
  const items1 = [rawRow.contextType];
  const memo1 = messageSizeCacheRef.useMemo(() => {
    let num = 0;
    if (!obj.isAndroid()) {
      let num2 = 16;
      if (rawRow.contextType === rowGenerator(modifyRow[16]).MessageContextType.SEARCH) {
        num2 = 12;
      }
      num = num2;
    }
    return num;
  }, items1);
  const tmp9 = callback2(num, memo1);
  const items2 = [onLayout];
  const items3 = [messageSizeCacheRef, message.id];
  const callback = messageSizeCacheRef.useCallback((nativeEvent) => {
    lib(nativeEvent.nativeEvent.layout.width);
    if (onLayout != null) {
      onLayout(nativeEvent);
    }
  }, items2);
  let tmp14Result = null != maxHeight;
  const callback1 = messageSizeCacheRef.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    if (height > 0) {
      if (null != messageSizeCacheRef) {
        if (tmp.current[message.id] !== height) {
          tmp.current[tmp3.id] = height;
        }
      }
      _undefined(height);
    }
  }, items3);
  if (tmp14Result) {
    tmp14Result = tmp4 - memo1 >= maxHeight;
  }
  let tmp13;
  if (messageSizeCacheRef != null) {
    const current = messageSizeCacheRef.current;
    if (current != null) {
      tmp13 = current[message.id];
    }
  }
  if (tmp14Result) {
    tmp13 = maxHeight;
  }
  obj = { style: tmp9.offset, onLayout: callback1, children: rawRow(DCDChatItem, obj) };
  obj = { message, row: memo.row, style: tmp9.itemRow };
  const tmp14 = rawRow;
  const tmp15 = gradientColors;
  const tmp3 = onLayout(messageSizeCacheRef.useState(0), 2);
  const tmp16 = rawRow(gradientColors, obj);
  const tmp17 = modifyRow;
  token = rowGenerator(modifyRow[17]).useToken(backgroundColor);
  const items4 = [gradientColors, token];
  let obj1 = { style: items5, onLayout: callback, pointerEvents, children: null };
  items5 = [tmp9.container, rowGenerator.style, { height: tmp13 }];
  let tmp21 = null != first;
  const memo2 = obj.useMemo(() => {
    let tmp = gradientColors;
    if (gradientColors == null) {
      const obj = message(modifyRow[18])(token);
      const items = [message(modifyRow[18])(token).alpha(0).hex(), token];
      tmp = items;
      const alphaResult = message(modifyRow[18])(token).alpha(0);
    }
    return tmp;
  }, items4);
  if (tmp21) {
    tmp21 = tmp16;
  }
  const items6 = [tmp21, ];
  if (tmp14Result) {
    const obj2 = { colors: null, style: null };
    obj2[0] = memo2;
    const items7 = [tmp9.gradient, rowGenerator.gradientStyles];
    obj2[1] = items7;
    tmp14Result = tmp14(message(tmp17[19]), obj2);
  }
  items6[1] = tmp14Result;
  obj1[3] = items6;
  return token(tmp15, obj1);
};
export const DCDMessageView = _default;
export const DCDSystemMessageView = _default2;
export const DCDAutoModerationSystemMessageView = _default3;