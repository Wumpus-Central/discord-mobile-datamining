// === Module 16949: CustomTypingIndicatorProfileCoachmark ===

// Module 16949 (CustomTypingIndicatorProfileCoachmark)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import user from "user" /* 1385 */;
import _modDef3725 from "module_3725" /* 3725 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset" /* 11586 */;
import _modDef11588 from "module_11588" /* 11588 */;
import _modDef11589 from "module_11589" /* 11589 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { coachmarkImageContainer: { alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_10 }, typingText: { maxWidth: 100 } };
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_10 };
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [_modDef11588, _modDef11589, _modDef11588];
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
}) : (() => {
  const tmp = closure_8();
  const obj = { style: tmp.coachmarkImageContainer, children: null };
  const obj2 = { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null };
  const items = [_modDef11588, _modDef11589, _modDef11588];
  obj2.emojiSource = items;
  obj.children = jsx(CustomTypingIndicatorDynamicAssetDefault, { name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: null });
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((position) => {
  const cResult = markAsDismissed(576).c(14);
  ({ visible, markAsDismissed } = position);
  position = position.position;
  let str = "bottom";
  if (undefined !== position) {
    str = position;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = markAsDismissed(1126).intl;
    const stringResult = intl.string(_modDef3725.Eq5jIA);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = markAsDismissed(1126).intl;
    const stringResult1 = intl2.string(_modDef3725.lSBp2M);
    cResult[1] = stringResult1;
    let tmp7 = stringResult1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== markAsDismissed) {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    cResult[2] = markAsDismissed;
    cResult[3] = C;
  } else {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  let PX_12;
  if ("top" === str) {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    PX_12 = nativeDefault.space.PX_12;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const intl3 = markAsDismissed(1126).intl;
    const stringResult2 = intl3.string(_modDef3725["6NP6ic"]);
    cResult[4] = tmp14;
    cResult[5] = stringResult2;
    let tmp13 = stringResult2;
  } else {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    tmp13 = cResult[5];
  }
  if (cResult[6] !== markAsDismissed) {
    class T {
      constructor() {
        obj = closure_0(closure_2[11]);
        obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "profile_coachmark" } };
        openUserSettingsResult = obj.openUserSettings(obj1, () => { ... });
        return;
      }
    }
    cResult[6] = markAsDismissed;
    cResult[7] = T;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[11]);
        obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "profile_coachmark" } };
        openUserSettingsResult = obj.openUserSettings(obj1, () => { ... });
        return;
      }
    }
  }
  if (cResult[8] === C) {
    class T {
      constructor() {
        obj = closure_0(closure_2[11]);
        obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "profile_coachmark" } };
        openUserSettingsResult = obj.openUserSettings(obj1, () => { ... });
        return;
      }
    }
  }
  cResult[8] = C;
  cResult[9] = str;
  cResult[10] = PX_12;
  cResult[11] = T;
  cResult[12] = visible;
  cResult[13] = { title: first, description: tmp7, visible, position: str, offsetY: PX_12, onDismiss: C, renderImgComponent: tmp14, buttonLabel: tmp13, buttonVariant: "primary", onButtonPress: T };
  const obj = markAsDismissed(576);
  const obj2 = { title: first, description: tmp7, visible, position: str, offsetY: PX_12, onDismiss: C, renderImgComponent: tmp14, buttonLabel: tmp13, buttonVariant: "primary", onButtonPress: T };
}) : ((visible) => {
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
  const items = [markAsDismissed];
  const onDismiss = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [stringResult, stringResult1, visible, str, onDismiss, markAsDismissed];
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
    obj.buttonLabel = intl.string(_modDef3725["6NP6ic"]);
    obj.onButtonPress = function onButtonPress() {
      visible(str[11]).openUserSettings({ screen: callback.TYPING_INDICATOR, params: { source: "profile_coachmark" } }, () => {
        closure_1_1(constants.TAKE_ACTION);
      });
    };
    return obj;
  }, items1);
  const coachmark = visible(str[12]).useCoachmark(visible.targetRef, memo);
  return null;
});