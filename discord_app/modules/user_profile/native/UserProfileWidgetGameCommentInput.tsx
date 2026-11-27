// === Module 14596: UserProfileWidgetGameCommentInput ===

// Module 14596 (UserProfileWidgetGameCommentInput)
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6382 */;
import WidgetUtils from "WidgetUtils" /* 14577 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
let closure_6 = fn(6137).TrackUserProfileEditActions;
let jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCommentInput.tsx");

export default function UserProfileWidgetGameCommentInput(arg0) {
  ({ widgetType: require, gameId: importDefault, comment } = arg0);
  value = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let ref;
  jsx = undefined;
  c8 = undefined;
  let str = comment;
  if (comment == null) {
    str = "";
  }
  [value] = noop.useState(str);
  _slicedToArray = tmp3;
  const tmp4 = _slicedToArray(noop.useState(comment), 2);
  noop = tmp5;
  obj.useRef(null);
  ref = obj.useRef(null);
  const context = obj.useContext(require("UserProfileEditFormKeyboardAvoidingContext"));
  ({ focusedInputRef: c7, onInputFocus: c8 } = context);
  if (comment !== tmp4[0]) {
    tmp5(comment);
    if (comment == null) {
      comment = "";
    }
    tmp3(comment);
  }
  const effect = obj.useEffect(() => () => {
    const current = ref.current;
    let tmp = null != current;
    if (tmp) {
      ({ currentValue, initialValue } = current);
      const trimmed = currentValue.trim();
      tmp = trimmed !== initialValue.trim();
    }
    if (tmp) {
      const obj3 = { userId: ref.getId(), action: ref.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
      ({ widgetType: obj2.widgetEdited, gameId: obj2.gameId } = current);
      const result = require("UserProfileAnalyticsUtils").trackUserProfileEditAction(obj3);
      const obj = require("UserProfileAnalyticsUtils");
    }
  }, []);
  let obj2 = {
    ref,
    value,
    onChange: function handleChange(currentValue) {
      const trimmed = currentValue.trim();
      let tmp2;
      if ("" !== trimmed) {
        tmp2 = trimmed;
      }
      closure_3(currentValue);
      closure_4(tmp2);
      if (null != ref.current) {
        ref.current.currentValue = currentValue;
      }
      const result = WidgetUtils.updatePendingGameComment(closure_1_0, gameId, tmp2);
    },
    onFocus: function handleFocus() {
      c7.current = ref.current;
      _undefined();
      closure_5.current = { widgetType: widgetEdited, gameId, initialValue: currentValue, currentValue };
      const obj = { widgetType: widgetEdited, gameId, initialValue: currentValue, currentValue };
      const obj2 = UserProfileAnalyticsUtils;
      const result = obj2.trackUserProfileEditAction({ userId: AuthenticationStore.getId(), action: constants.PRESS_ADD_COMMENTARY, widgetEdited });
    },
    onBlur: function handleBlur() {
      const current = ref.current;
      let tmp2 = null != current;
      if (tmp2) {
        ({ currentValue, initialValue } = current);
        const trimmed = currentValue.trim();
        tmp2 = trimmed !== initialValue.trim();
      }
      if (tmp2) {
        const obj3 = { userId: AuthenticationStore.getId(), action: constants.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
        ({ widgetType: obj2.widgetEdited, gameId: obj2.gameId } = current);
        const result = UserProfileAnalyticsUtils.trackUserProfileEditAction(obj3);
      }
      ref.current = null;
    },
    placeholder: null,
    accessibilityLabel: null,
    maxLength: null
  };
  const intl = require("util").intl;
  obj2.placeholder = intl.string(require("util").t.xKSfBT);
  const intl2 = require("util").intl;
  obj2.accessibilityLabel = intl2.string(require("util").t.JxKXeT);
  obj2.maxLength = require("GameWidgetLimits").USER_WIDGET_GAME_COMMENT_MAX_LENGTH;
  return jsx(require("TextArea").TextArea, {
    ref,
    value,
    onChange: function handleChange(currentValue) {
      const trimmed = currentValue.trim();
      let tmp2;
      if ("" !== trimmed) {
        tmp2 = trimmed;
      }
      closure_3(currentValue);
      closure_4(tmp2);
      if (null != ref.current) {
        ref.current.currentValue = currentValue;
      }
      const result = WidgetUtils.updatePendingGameComment(closure_1_0, gameId, tmp2);
    },
    onFocus: function handleFocus() {
      c7.current = ref.current;
      _undefined();
      closure_5.current = { widgetType: widgetEdited, gameId, initialValue: currentValue, currentValue };
      const obj = { widgetType: widgetEdited, gameId, initialValue: currentValue, currentValue };
      const obj2 = UserProfileAnalyticsUtils;
      const result = obj2.trackUserProfileEditAction({ userId: AuthenticationStore.getId(), action: constants.PRESS_ADD_COMMENTARY, widgetEdited });
    },
    onBlur: function handleBlur() {
      const current = ref.current;
      let tmp2 = null != current;
      if (tmp2) {
        ({ currentValue, initialValue } = current);
        const trimmed = currentValue.trim();
        tmp2 = trimmed !== initialValue.trim();
      }
      if (tmp2) {
        const obj3 = { userId: AuthenticationStore.getId(), action: constants.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
        ({ widgetType: obj2.widgetEdited, gameId: obj2.gameId } = current);
        const result = UserProfileAnalyticsUtils.trackUserProfileEditAction(obj3);
      }
      ref.current = null;
    },
    placeholder: null,
    accessibilityLabel: null,
    maxLength: null
  });
};