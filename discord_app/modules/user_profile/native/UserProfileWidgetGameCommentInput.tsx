// discord_app/modules/user_profile/native/UserProfileWidgetGameCommentInput.tsx
import util from "../../../intl/index.native.tsx";
import TextArea from "../../../design/components/TextInput/native/TextArea.native.tsx";
import GameWidgetLimits from "../../../../discord_common/js/shared/shared-constants/GameWidgetLimits.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_5 = fn(8825).TrackUserProfileEditActions;
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
  const effect = obj.useEffect(
    () => () => {
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
    },
    [],
  );
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
      const result = obj2.trackUserProfileEditAction({
        userId: AuthenticationStore.getId(),
        action: closure_5.PRESS_ADD_COMMENTARY,
        widgetEdited,
      });
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
        const obj3 = {
          userId: AuthenticationStore.getId(),
          action: closure_5.COMMENTARY_EDITED,
          widgetEdited: null,
          gameId: null,
        };
        ({ widgetType: obj2.widgetEdited, gameId: obj2.gameId } = current);
        const result = UserProfileAnalyticsUtils.trackUserProfileEditAction(obj3);
      }
      closure_5.current = null;
    },
    placeholder: null,
    accessibilityLabel: null,
    maxLength: null,
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
      const result = obj2.trackUserProfileEditAction({
        userId: AuthenticationStore.getId(),
        action: closure_5.PRESS_ADD_COMMENTARY,
        widgetEdited,
      });
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
        const obj3 = {
          userId: AuthenticationStore.getId(),
          action: closure_5.COMMENTARY_EDITED,
          widgetEdited: null,
          gameId: null,
        };
        ({ widgetType: obj2.widgetEdited, gameId: obj2.gameId } = current);
        const result = UserProfileAnalyticsUtils.trackUserProfileEditAction(obj3);
      }
      closure_5.current = null;
    },
    placeholder: null,
    accessibilityLabel: null,
    maxLength: null,
  });
}
