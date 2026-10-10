// === Module 17492: CustomTypingIndicatorProfileCoachmark ===

// Module 17492 (CustomTypingIndicatorProfileCoachmark)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import user from "user" /* 1398 */;
import _modDef3851 from "module_3851" /* 3851 */;
import openUserSettings from "openUserSettings" /* 7093 */;
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset" /* 11647 */;
import _modDef11648 from "module_11648" /* 11648 */;
import _modDef11649 from "module_11649" /* 11649 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { coachmarkImageContainer: { alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_10 }, typingText: { maxWidth: 100 } };
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_10 };
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function CoachmarkPreview() {
  const cResult = c.c(6);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [_modDef11648, _modDef11649, _modDef11648];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.typingText) {
    const obj2 = { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp4.typingText, emojiSource: first };
    const tmp11 = jsx(CustomTypingIndicatorDynamicAssetDefault, { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp4.typingText, emojiSource: first });
    cResult[1] = tmp4.typingText;
    cResult[2] = tmp11;
    let tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.coachmarkImageContainer) {
    if (cResult[4] === tmp7) {
      let tmp12 = cResult[5];
    }
    return tmp12;
  }
  const tmp13 = <View style={tmp4.coachmarkImageContainer}>{tmp7}</View>;
  cResult[3] = tmp4.coachmarkImageContainer;
  cResult[4] = tmp7;
  cResult[5] = tmp13;
  tmp12 = tmp13;
  const obj3 = { style: tmp4.coachmarkImageContainer, children: tmp7 };
}) : (function CoachmarkPreview() {
  const tmp = closure_8();
  const obj = { style: tmp.coachmarkImageContainer, children: null };
  const obj2 = { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null };
  const items = [_modDef11648, _modDef11649, _modDef11648];
  obj2.emojiSource = items;
  obj.children = jsx(CustomTypingIndicatorDynamicAssetDefault, { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null });
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorProfileCoachmark(position) {
  const cResult = markAsDismissed(576).c(15);
  ({ visible, markAsDismissed } = position);
  position = position.position;
  let str = "bottom";
  if (undefined !== position) {
    str = position;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = markAsDismissed(1126).intl;
    const stringResult = intl.string(analyticsLocations(3851).Eq5jIA);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = markAsDismissed(1126).intl;
    const stringResult1 = intl2.string(analyticsLocations(3851).lSBp2M);
    cResult[1] = stringResult1;
    let tmp7 = stringResult1;
  } else {
    tmp7 = cResult[1];
  }
  const obj = markAsDismissed(576);
  const tmp10 = analyticsLocations;
  analyticsLocations = analyticsLocations(6851)(analyticsLocations(6878).CUSTOM_TYPING_INDICATOR_PROFILE_COACHMARK).analyticsLocations;
  if (cResult[2] !== markAsDismissed) {
    class P {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    cResult[2] = markAsDismissed;
    cResult[3] = P;
  } else {
    class P {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if ("top" === str) {
    class P {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const intl3 = markAsDismissed(1126).intl;
    const stringResult2 = intl3.string(tmp10(3851)["6NP6ic"]);
    cResult[4] = tmp16;
    cResult[5] = stringResult2;
    let tmp15 = stringResult2;
  } else {
    class P {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    tmp15 = cResult[5];
  }
  if (cResult[6] === analyticsLocations) {
    class P {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    if (cResult[9] === P) {
      class P {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    let obj2 = { title: first, description: tmp7, visible, position: str, offsetY: tmp13, onDismiss: P, renderImgComponent: tmp16, buttonLabel: tmp15, buttonVariant: "primary", onButtonPress: tmp18 };
    cResult[9] = P;
    cResult[10] = str;
    cResult[11] = tmp13;
    cResult[12] = tmp18;
    cResult[13] = visible;
    cResult[14] = obj2;
  }
  const fn = function x() {
    const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { analyticsLocations } };
    openUserSettings.openUserSettings(obj2, () => {
      markAsDismissed(constants.TAKE_ACTION);
    });
  };
  cResult[6] = analyticsLocations;
  cResult[7] = markAsDismissed;
  cResult[8] = fn;
  const tmp11 = analyticsLocations(6851);
}) : (function CustomTypingIndicatorProfileCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  let str = visible.position;
  if (str === undefined) {
    str = "bottom";
  }
  let intl = visible(str[9]).intl;
  const stringResult = intl.string(markAsDismissed(str[10]).Eq5jIA);
  noop = stringResult;
  const intl2 = visible(str[9]).intl;
  const stringResult1 = intl2.string(markAsDismissed(str[10]).lSBp2M);
  const analyticsLocations = markAsDismissed(str[11])(markAsDismissed(str[12]).CUSTOM_TYPING_INDICATOR_PROFILE_COACHMARK).analyticsLocations;
  const items = [markAsDismissed];
  const onDismiss = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [stringResult, stringResult1, visible, str, onDismiss, markAsDismissed, analyticsLocations];
  const memo = noop.useMemo(() => {
    const obj = { title, description: stringResult1, visible, position: str, offsetY: null, onDismiss: null, renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null };
    let PX_12;
    if ("top" === str) {
      PX_12 = nativeDefault.space.PX_12;
    }
    obj.offsetY = PX_12;
    obj.onDismiss = onDismiss;
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_7(closure_1_9, {});
    };
    const intl = util.intl;
    obj.buttonLabel = intl.string(_modDef3851["6NP6ic"]);
    obj.onButtonPress = function onButtonPress() {
      const obj2 = { screen: analyticsLocations.TYPING_INDICATOR, params: { analyticsLocations } };
      visible(str[13]).openUserSettings(obj2, () => {
        closure_1_1(constants.TAKE_ACTION);
      });
    };
    return obj;
  }, items1);
  const tmp3 = markAsDismissed(str[11]);
  const coachmark = visible(str[14]).useCoachmark(visible.targetRef, memo);
  return null;
});