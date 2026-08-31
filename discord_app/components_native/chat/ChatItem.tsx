// === Module 8742: DCDChatItem ===

// Module 8742 (DCDChatItem)
import set from "set" /* 686 */;
import ThemesDefault from "Themes" /* 712 */;
import isSystemMessageDefault from "isSystemMessage" /* 6085 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 8743 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import { MessageTypes } from "ME" /* 676 */;
import Changeset from "Changeset" /* 7810 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

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
      tmp3Result = callback(tmp21(8744).default, obj);
    } else if (isSystemMessageDefault(message)) {
      obj1 = {};
      const merged3 = Object.assign(merged);
      tmp3Result = tmp3(tmp21(8745).default, obj1);
    } else {
      obj = {};
      const merged4 = Object.assign(merged);
      tmp3Result = tmp3(tmp21(8744).default, obj);
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
    const tmp17 = callback2(num, memo1, 0);
    const items2 = [onLayout];
    const items3 = [messageSizeCacheRef, message.id];
    const callback = obj.useCallback((nativeEvent) => {
      lib(nativeEvent.nativeEvent.layout.width);
      if (onLayout != null) {
        onLayout(nativeEvent);
      }
    }, items2);
    let tmp24Result = null != maxHeight;
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
    obj = { style: null, onLayout: null, children: null };
    obj[0] = tmp17.offset;
    obj[1] = callback1;
    obj = { message: null, row: null, style: null };
    obj[0] = message;
    obj[1] = memo.row;
    obj[2] = tmp17.itemRow;
    obj[2] = rawRow(DCDChatItem, obj);
    let tmp9Result = tmp9(tmp10[16]);
    token = tmp9Result.useToken(backgroundColor);
    const items4 = [gradientColors, token];
    obj1 = { style: null, onLayout: null, pointerEvents: null, children: null };
    const items5 = [tmp17.container, rowGenerator.style, ];
    const obj2 = { height: null };
    obj2[0] = tmp23;
    items5[2] = obj2;
    obj1[0] = items5;
    obj1[1] = callback;
    obj1[2] = pointerEvents;
    let tmp31 = null != first;
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
    if (tmp31) {
      tmp31 = tmp27;
    }
    const items6 = [tmp31, ];
    if (tmp24Result) {
      const obj3 = { colors: null, style: null };
      obj3[0] = memo2;
      const items7 = [tmp17.gradient, rowGenerator.gradientStyles];
      obj3[1] = items7;
      tmp24Result = rawRow(message(tmp10[18]), obj3);
    }
    items6[1] = tmp24Result;
    obj1[3] = items6;
    return token(gradientColors, obj1);
  } else {
    tmp9Result = tmp9(tmp10[14]);
    tmp9Result.isAndroid() ? PX_4 - 2 : PX_4;
  }
};
export const DCDMessageView = require("__INTERNAL_VIEW_CONFIG").default;
export const DCDSystemMessageView = require("__INTERNAL_VIEW_CONFIG").default;
export const DCDAutoModerationSystemMessageView = require("__INTERNAL_VIEW_CONFIG").default;