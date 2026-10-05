// discord_app/components_native/chat/ChatItem.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../_runtime/metro/00683__.js";
import Constants from "../../Constants.tsx";
import MessageTypes2 from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import isSystemMessageDefault from "../../modules/messages/isSystemMessage.tsx";
import RowGeneratorTypes from "../../modules/messages/native/renderer/RowGeneratorTypes.tsx";
import AutoModerationSystemMessageViewNativeComponent from "../../../discord_common/js/packages/rtn-codegen/js/AutoModerationSystemMessageViewNativeComponent.tsx";
import MessageViewNativeComponent from "../../../discord_common/js/packages/rtn-codegen/js/MessageViewNativeComponent.tsx";
import SystemMessageViewNativeComponent from "../../../discord_common/js/packages/rtn-codegen/js/SystemMessageViewNativeComponent.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import react_mod from "../../../_runtime/00019_react.js";
import AccessibilityStore_mod from "../../modules/a11y/AccessibilityStore.tsx";
import RowGeneratorConstants from "../../modules/messages/native/renderer/RowGeneratorConstants.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c10;
let closure_12;
let map1;
let unpackModuleId;
let closure_3 = ["message"];
let react = react_mod;
const View = react_native.View;
let AccessibilityStore = AccessibilityStore_mod;
const MessageTypes = Constants.MessageTypes;
({ RowType: c10, Changeset: unpackModuleId } = RowGeneratorConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
const PX_4 = nativeDefault.space.PX_4;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let tmp10;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(11);
      if (cResult[0] !== message) {
        message = message.message;
        const tmp8 = _objectWithoutProperties(message, closure_3);
        cResult[0] = message;
        cResult[1] = message;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = message;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (tmp4.type === MessageTypes.AUTO_MODERATION_ACTION) {
        let tmp28;
        if (cResult[3] !== tmp5) {
          const obj2 = {};
          const _default4 = AutoModerationSystemMessageViewNativeComponent.default;
          const merged = Object.assign(tmp5);
          const tmp33 = closure_12(_default4, obj2);
          cResult[3] = tmp5;
          cResult[4] = tmp33;
          tmp28 = tmp33;
        } else {
          tmp28 = cResult[4];
        }
        tmp10 = tmp28;
      } else {
        const AUTOMOD_INCIDENT_ACTIONS = MessageTypes2.MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
        if (AUTOMOD_INCIDENT_ACTIONS.has(tmp4.type)) {
          let tmp22;
          if (cResult[5] !== tmp5) {
            const obj3 = {};
            const _default3 = MessageViewNativeComponent.default;
            const merged1 = Object.assign(tmp5);
            const tmp27 = closure_12(_default3, obj3);
            cResult[5] = tmp5;
            cResult[6] = tmp27;
            tmp22 = tmp27;
          } else {
            tmp22 = cResult[6];
          }
          tmp10 = tmp22;
        } else if (isSystemMessageDefault(tmp4)) {
          let tmp16;
          if (cResult[7] !== tmp5) {
            const obj4 = {};
            const _default2 = SystemMessageViewNativeComponent.default;
            const merged2 = Object.assign(tmp5);
            const tmp21 = closure_12(_default2, obj4);
            cResult[7] = tmp5;
            cResult[8] = tmp21;
            tmp16 = tmp21;
          } else {
            tmp16 = cResult[8];
          }
          tmp10 = tmp16;
        } else if (cResult[9] !== tmp5) {
          const obj5 = {};
          const _default = MessageViewNativeComponent.default;
          const merged3 = Object.assign(tmp5);
          const tmp15 = closure_12(_default, obj5);
          cResult[9] = tmp5;
          cResult[10] = tmp15;
          tmp10 = tmp15;
        } else {
          tmp10 = cResult[10];
        }
      }
      return tmp10;
    }
  : (message) => {
      let tmp3Result;
      message = message.message;
      const merged = Object.assign(message, Object.assign({ message: 0 }));
      if (message.type === MessageTypes.AUTO_MODERATION_ACTION) {
        const obj2 = {};
        const _default4 = AutoModerationSystemMessageViewNativeComponent.default;
        const merged1 = Object.assign(merged);
        tmp3Result = closure_12(_default4, obj2);
      } else {
        const AUTOMOD_INCIDENT_ACTIONS = MessageTypes2.MessageTypesSets.AUTOMOD_INCIDENT_ACTIONS;
        if (AUTOMOD_INCIDENT_ACTIONS.has(message.type)) {
          const obj3 = {};
          const _default3 = MessageViewNativeComponent.default;
          const merged2 = Object.assign(merged);
          tmp3Result = closure_12(_default3, obj3);
        } else if (isSystemMessageDefault(message)) {
          const obj4 = {};
          const _default2 = SystemMessageViewNativeComponent.default;
          const merged3 = Object.assign(merged);
          tmp3Result = closure_12(_default2, obj4);
        } else {
          const obj = {};
          const _default = MessageViewNativeComponent.default;
          const merged4 = Object.assign(merged);
          tmp3Result = closure_12(_default, obj);
        }
      }
      return tmp3Result;
    };
let closure_16 = createStyles.createStyles((marginLeft, marginTop, paddingTop) => {
  const obj = {
    container: obj2,
    offset: obj3,
    gradient: { position: "absolute", bottom: 0, height: 24, width: "100%" },
    itemRow: { backgroundColor: "transparent" },
  };
  return obj;
});
const result = size.fileFinishedImporting("components_native/chat/ChatItem.tsx");

export default function _default(rowGenerator) {
  let _undefined;
  let backgroundColor;
  let c6;
  let closure_8;
  let items5;
  let items6;
  let items7;
  let maxHeight;
  let modifyRow;
  let obj3;
  let pointerEvents;
  let tmp4;
  rowGenerator = rowGenerator.rowGenerator;
  const message = rowGenerator.message;
  let num = rowGenerator.horizontalOffset;
  const style = rowGenerator.style;
  if (num === undefined) {
    num = 8;
  }
  ({ maxHeight, modifyRow } = rowGenerator);
  const onLayout = rowGenerator.onLayout;
  const messageSizeCacheRef = rowGenerator.messageSizeCacheRef;
  ({ backgroundColor, pointerEvents } = rowGenerator);
  if (backgroundColor === undefined) {
    let tmp = message;
    backgroundColor = message(modifyRow[8]).colors.BACKGROUND_BASE_LOWER;
  }
  const gradientColors = rowGenerator.gradientColors;
  react = undefined;
  let token;
  let obj = react;
  const gradientStyles = rowGenerator.gradientStyles;
  const tmp3 = messageSizeCacheRef(react.useState(0), 2);
  [tmp4, c6] = tmp3;
  const tmp5 = messageSizeCacheRef(react.useState(undefined), 2);
  const constrainedWidth = tmp5[0];
  AccessibilityStore = tmp5[1];
  const roleStyle = AccessibilityStore.roleStyle;
  let items = [constrainedWidth, roleStyle, message, modifyRow, rowGenerator];
  const memo = react.useMemo(() => {
    let obj4;
    let stringify;
    const obj = { constrainedWidth };
    rowGenerator.setOptions(obj);
    const obj2 = {
      roleStyle,
      rowType: rawRow.MESSAGE,
      changeType: unpackModuleId.NOOP,
      message,
      isFirst: true,
      canShowImages: true,
      canAddNewReactions: false,
    };
    const generateResult = rowGenerator.generate(obj2);
    if (null != modifyRow) {
      tmp3(generateResult);
    }
    const obj3 = { rawRow: generateResult, row: stringify(obj4) };
    stringify = JSON.stringify;
    obj4 = { index: 0 };
    const merged = Object.assign(generateResult);
    return obj3;
  }, items);
  const rawRow = memo.rawRow;
  const items1 = [rawRow.contextType];
  const row = memo.row;
  const memo1 = react.useMemo(() => {
    let num = 0;
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      let num2 = 16;
      if (rawRow.contextType === RowGeneratorTypes.MessageContextType.SEARCH) {
        num2 = 12;
      }
      num = num2;
    }
    return num;
  }, items1);
  let num2 = 0;
  const tmp11 =
    rawRow.contextType !== rowGenerator(modifyRow[18]).MessageContextType.SEARCH &&
    null != rawRow.message &&
    "avatarDecorationURL" in rawRow.message &&
    null != rawRow.message.avatarDecorationURL;
  if (tmp11) {
    const tmp9Result = rowGenerator(modifyRow[17]);
    num2 = tmp9Result.isAndroid() ? PX_4 - 2 : PX_4;
  }
  const tmp15 = closure_16(num, memo1, num2);
  const items2 = [onLayout];
  const items3 = [messageSizeCacheRef, message.id];
  const callback = obj.useCallback((nativeEvent) => {
    closure_8(nativeEvent.nativeEvent.layout.width);
    if (onLayout != null) {
      onLayout(nativeEvent);
    }
  }, items2);
  let tmp21Result = null != maxHeight;
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
  if (tmp21Result) {
    tmp21Result = tmp4 - memo1 >= maxHeight;
  }
  let tmp19;
  if (messageSizeCacheRef != null) {
    const current = messageSizeCacheRef.current;
    if (current != null) {
      tmp19 = current[message.id];
    }
  }
  let sum = tmp19;
  if (tmp21Result) {
    sum = tmp19;
    if (null != maxHeight) {
      sum = maxHeight + num2;
    }
  }
  let obj2 = { style: tmp15.offset, onLayout: callback1, children: closure_12(closure_15, obj3) };
  obj3 = { message, row, style: tmp15.itemRow };
  const tmp23 = closure_12(constrainedWidth, obj2);
  const tmp9Result2 = rowGenerator(modifyRow[19]);
  token = tmp9Result2.useToken(backgroundColor);
  const items4 = [gradientColors, token];
  let obj4 = { style: items5, onLayout: callback, pointerEvents, children: items6 };
  items5 = [tmp15.container, style, { height: sum }];
  let tmp27 = null != constrainedWidth;
  const memo2 = obj.useMemo(() => {
    let tmp = gradientColors;
    if (gradientColors == null) {
      const items = [,];
      const obj = _modDef683(token);
      const alphaResult = obj.alpha(0);
      items[0] = alphaResult.hex();
      items[1] = token;
      tmp = items;
    }
    return tmp;
  }, items4);
  const tmp22 = constrainedWidth;
  if (tmp27) {
    tmp27 = tmp23;
  }
  items6 = [tmp27];
  if (tmp21Result) {
    const obj5 = { colors: memo2, style: items7 };
    items7 = [tmp15.gradient, gradientStyles];
    tmp21Result = closure_12(message(modifyRow[21]), obj5);
  }
  items6[1] = tmp21Result;
  return closure_13(tmp22, obj4);
}
export const DCDMessageView = MessageViewNativeComponent.default;
export const DCDSystemMessageView = SystemMessageViewNativeComponent.default;
export const DCDAutoModerationSystemMessageView = AutoModerationSystemMessageViewNativeComponent.default;
