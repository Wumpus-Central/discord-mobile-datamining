// === Module 12115: UserProfileWidgetGameCommentInput ===

// Module 12115 (UserProfileWidgetGameCommentInput)
import util from "util" /* 1113 */;
import GameWidgetLimits from "GameWidgetLimits" /* 7356 */;
import TextArea from "TextArea" /* 7859 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8546 */;
import WidgetUtils from "WidgetUtils" /* 12090 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(8479).TrackUserProfileEditActions;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCommentInput.tsx");

export default function UserProfileWidgetGameCommentInput(arg0) {
  ({ widgetType: require, gameId: dependencyMap, comment } = arg0);
  value = undefined;
  noop = undefined;
  closure_4 = undefined;
  closure_5 = undefined;
  let str = comment;
  if (comment == null) {
    str = "";
  }
  let tmp = value(noop.useState(str), 2);
  value = tmp[0];
  noop = tmp3;
  const tmp4 = value(noop.useState(comment), 2);
  closure_4 = tmp5;
  closure_5 = obj.useRef(null);
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
      const obj3 = { userId: id.getId(), action: ref.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
      ({ widgetType: obj2.widgetEdited, gameId: obj2.gameId } = current);
      const result = require("UserProfileAnalyticsUtils").trackUserProfileEditAction(obj3);
      const obj = require("UserProfileAnalyticsUtils");
    }
  }, []);
  let obj2 = {
    value,
    onChange: function handleChange(currentValue) {
      const trimmed = currentValue.trim();
      let tmp2;
      if ("" !== trimmed) {
        tmp2 = trimmed;
      }
      closure_3(currentValue);
      closure_4(tmp2);
      if (null != closure_5.current) {
        closure_5.current.currentValue = currentValue;
      }
      const result = WidgetUtils.updatePendingGameComment(closure_1_0, gameId, tmp2);
    },
    onFocus: function handleFocus() {
      closure_5.current = { widgetType: widgetEdited, gameId, initialValue: currentValue, currentValue };
      const obj = { widgetType: widgetEdited, gameId, initialValue: currentValue, currentValue };
      const obj2 = UserProfileAnalyticsUtils;
      const result = obj2.trackUserProfileEditAction({ userId: AuthenticationStore.getId(), action: closure_5.PRESS_ADD_COMMENTARY, widgetEdited });
    },
    onBlur: function handleBlur() {
      const current = closure_5.current;
      let tmp2 = null != current;
      if (tmp2) {
        ({ currentValue, initialValue } = current);
        const trimmed = currentValue.trim();
        tmp2 = trimmed !== initialValue.trim();
      }
      if (tmp2) {
        const obj3 = { userId: AuthenticationStore.getId(), action: closure_5.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
        ({ widgetType: obj2.widgetEdited, gameId: obj2.gameId } = current);
        const result = UserProfileAnalyticsUtils.trackUserProfileEditAction(obj3);
      }
      closure_5.current = null;
    },
    placeholder: null,
    accessibilityLabel: null,
    maxLength: null
  };
  const intl = util.intl;
  obj2.placeholder = intl.string(util.t.xKSfBT);
  const intl2 = util.intl;
  obj2.accessibilityLabel = intl2.string(util.t.JxKXeT);
  obj2.maxLength = GameWidgetLimits.USER_WIDGET_GAME_COMMENT_MAX_LENGTH;
  return jsx(TextArea.TextArea, {
    value,
    onChange: function handleChange(currentValue) {
      const trimmed = currentValue.trim();
      let tmp2;
      if ("" !== trimmed) {
        tmp2 = trimmed;
      }
      closure_3(currentValue);
      closure_4(tmp2);
      if (null != closure_5.current) {
        closure_5.current.currentValue = currentValue;
      }
      const result = WidgetUtils.updatePendingGameComment(closure_1_0, gameId, tmp2);
    },
    onFocus: function handleFocus() {
      closure_5.current = { widgetType: widgetEdited, gameId, initialValue: currentValue, currentValue };
      const obj = { widgetType: widgetEdited, gameId, initialValue: currentValue, currentValue };
      const obj2 = UserProfileAnalyticsUtils;
      const result = obj2.trackUserProfileEditAction({ userId: AuthenticationStore.getId(), action: closure_5.PRESS_ADD_COMMENTARY, widgetEdited });
    },
    onBlur: function handleBlur() {
      const current = closure_5.current;
      let tmp2 = null != current;
      if (tmp2) {
        ({ currentValue, initialValue } = current);
        const trimmed = currentValue.trim();
        tmp2 = trimmed !== initialValue.trim();
      }
      if (tmp2) {
        const obj3 = { userId: AuthenticationStore.getId(), action: closure_5.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
        ({ widgetType: obj2.widgetEdited, gameId: obj2.gameId } = current);
        const result = UserProfileAnalyticsUtils.trackUserProfileEditAction(obj3);
      }
      closure_5.current = null;
    },
    placeholder: null,
    accessibilityLabel: null,
    maxLength: null
  });
};