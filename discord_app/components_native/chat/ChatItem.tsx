// discord_app/components_native/chat/ChatItem.tsx
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "n";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { MessageTypes } from "ME";
import Changeset from "Changeset";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { __INTERNAL_VIEW_CONFIG } from "../../../discord_common/js/packages/rtn-codegen/js/AutoModerationSystemMessageViewNativeComponent.tsx";
import { set } from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import { isSystemMessage } from "../../modules/messages/isSystemMessage.tsx";

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function DCDChatItem(message) {
  message = message.message;
  const merged = Object.assign(message, Object.create(null));
  if (message.type === MessageTypes.AUTO_MODERATION_ACTION) {
    let obj = {};
    const merged1 = Object.assign(merged);
    let tmp3Result = callback(__INTERNAL_VIEW_CONFIG.default, obj);
  } else {
    const AUTOMOD_INCIDENT_ACTIONS = set.MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
    if (AUTOMOD_INCIDENT_ACTIONS.has(message.type)) {
      obj = {};
      const merged2 = Object.assign(merged);
      tmp3Result = callback(tmp21(10068).default, obj);
    } else if (isSystemMessage(message)) {
      const obj1 = {};
      const merged3 = Object.assign(merged);
      tmp3Result = tmp3(tmp21(10069).default, obj1);
    } else {
      obj = {};
      const merged4 = Object.assign(merged);
      tmp3Result = tmp3(tmp21(10068).default, obj);
    }
  }
  return tmp3Result;
}
({ RowType: metroImportAll, Changeset: c9 } = Changeset);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_13 = createCacheKey.createStyles((marginLeft, marginTop) => {
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
    backgroundColor = message(modifyRow[13]).colors.BACKGROUND_BASE_LOWER;
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
    const merged = Object.assign(generateResult);
    obj[1] = JSON.stringify({ index: 0 });
    return obj;
  }, items);
  rawRow = memo.rawRow;
  const items1 = [rawRow.contextType];
  const memo1 = messageSizeCacheRef.useMemo(() => {
    let num = 0;
    if (!obj.isAndroid()) {
      let num2 = 16;
      if (rawRow.contextType === rowGenerator(modifyRow[15]).MessageContextType.SEARCH) {
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
  token = rowGenerator(modifyRow[16]).useToken(backgroundColor);
  const items4 = [gradientColors, token];
  const obj1 = { style: items5, onLayout: callback, pointerEvents, children: null };
  items5 = [tmp9.container, rowGenerator.style, { height: tmp13 }];
  let tmp21 = null != first;
  const memo2 = obj.useMemo(() => {
    let tmp = gradientColors;
    if (gradientColors == null) {
      const obj = message(modifyRow[17])(token);
      const items = [message(modifyRow[17])(token).alpha(0).hex(), token];
      tmp = items;
      const alphaResult = message(modifyRow[17])(token).alpha(0);
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
    tmp14Result = tmp14(message(tmp17[18]), obj2);
  }
  items6[1] = tmp14Result;
  obj1[3] = items6;
  return token(tmp15, obj1);
};
export const DCDMessageView = require("__INTERNAL_VIEW_CONFIG").default;
export const DCDSystemMessageView = require("__INTERNAL_VIEW_CONFIG").default;
export const DCDAutoModerationSystemMessageView = require("__INTERNAL_VIEW_CONFIG").default;