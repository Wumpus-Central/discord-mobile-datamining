// discord_app/components_native/chat/ChatItem.tsx
import set from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import isSystemMessageDefault from "../../modules/messages/isSystemMessage.tsx";
import __INTERNAL_VIEW_CONFIG from "../../../discord_common/js/packages/rtn-codegen/js/AutoModerationSystemMessageViewNativeComponent.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../modules/a11y/AccessibilityStore.tsx";
import { MessageTypes } from "../../Constants.tsx";
import Changeset from "../../modules/messages/native/renderer/RowGeneratorConstants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

require = arg1;
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
      tmp3Result = callback(tmp21(8706).default, obj);
    } else if (isSystemMessageDefault(message)) {
      obj1 = {};
      const merged3 = Object.assign(merged);
      tmp3Result = tmp3(tmp21(8707).default, obj1);
    } else {
      obj = {};
      const merged4 = Object.assign(merged);
      tmp3Result = tmp3(tmp21(8706).default, obj);
    }
  }
  return tmp3Result;
}
({ RowType: closure_8, Changeset: c9 } = Changeset);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const PX_4 = ThemesDefault.space.PX_4;
let closure_14 = createCacheKey.createStyles((marginLeft, marginTop, paddingTop) => {
  const container = { position: "relative", overflow: "hidden", paddingTop };
  const offset = { marginTop: -marginTop, marginLeft: -marginLeft };
  return { container, offset, gradient: { position: "absolute", bottom: 0, height: 24, width: "100%" }, itemRow: { backgroundColor: "transparent" } };
});
const result = require("set").fileFinishedImporting("components_native/chat/ChatItem.tsx");

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
  let roleStyle;
  let first;
  closure_8 = undefined;
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
  obj1 = rowGenerator(modifyRow[14]);
  let num2 = 0;
  if (!obj1.isAndroid()) {
    num2 = 0;
    if (rawRow.contextType !== tmp9(tmp10[15]).MessageContextType.SEARCH) {
      num2 = 0;
      if (null != rawRow.message) {
        num2 = 0;
        if ("avatarDecorationURL" in rawRow.message) {
          num2 = 0;
          if (null != rawRow.message.avatarDecorationURL) {
            num2 = PX_4;
          }
        }
      }
    }
  }
  const tmp12 = callback2(num, memo1, num2);
  const items2 = [onLayout];
  const items3 = [messageSizeCacheRef, message.id];
  const callback = obj.useCallback((nativeEvent) => {
    lib(nativeEvent.nativeEvent.layout.width);
    if (onLayout != null) {
      onLayout(nativeEvent);
    }
  }, items2);
  let tmp18Result = null != maxHeight;
  const callback1 = obj.useCallback((nativeEvent) => {
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
  if (tmp18Result) {
    tmp18Result = tmp4 - memo1 >= maxHeight;
  }
  let tmp16;
  if (messageSizeCacheRef != null) {
    const current = messageSizeCacheRef.current;
    if (current != null) {
      tmp16 = current[message.id];
    }
  }
  let sum = tmp16;
  if (tmp18Result) {
    sum = tmp16;
    if (null != maxHeight) {
      sum = maxHeight + num2;
    }
  }
  obj = { style: tmp12.offset, onLayout: callback1, children: rawRow(DCDChatItem, obj) };
  obj = { message, row: memo.row, style: tmp12.itemRow };
  const tmp18 = rawRow;
  const tmp19 = gradientColors;
  const tmp3 = onLayout(messageSizeCacheRef.useState(0), 2);
  const tmp20 = rawRow(gradientColors, obj);
  token = rowGenerator(modifyRow[16]).useToken(backgroundColor);
  const items4 = [gradientColors, token];
  obj1 = { style: items5, onLayout: callback, pointerEvents, children: null };
  items5 = [tmp12.container, rowGenerator.style, { height: sum }];
  let tmp24 = null != first;
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
  if (tmp24) {
    tmp24 = tmp20;
  }
  const items6 = [tmp24, ];
  if (tmp18Result) {
    const obj2 = { colors: null, style: null };
    obj2[0] = memo2;
    const items7 = [tmp12.gradient, rowGenerator.gradientStyles];
    obj2[1] = items7;
    tmp18Result = tmp18(message(tmp10[18]), obj2);
  }
  items6[1] = tmp18Result;
  obj1[3] = items6;
  return token(tmp19, obj1);
};
export const DCDMessageView = require("__INTERNAL_VIEW_CONFIG").default;
export const DCDSystemMessageView = require("__INTERNAL_VIEW_CONFIG").default;
export const DCDAutoModerationSystemMessageView = require("__INTERNAL_VIEW_CONFIG").default;