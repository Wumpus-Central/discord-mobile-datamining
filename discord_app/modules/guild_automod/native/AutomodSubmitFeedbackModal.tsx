// === Module 11372: Navbar ===

// Module 11372 (Navbar)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import Text from "Text" /* 4442 */;
import Button from "Button" /* 4893 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5518 */;
import HeaderActionButton from "HeaderActionButton" /* 6202 */;
import Feedback from "Feedback" /* 7210 */;
import registerAssetDefault from "registerAsset" /* 7711 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function Navbar(onClose) {
  const tmp = callback4();
  let obj = { top: true, style: tmp.header, children: null };
  obj = { style: tmp.closeButtonContainer, children: null };
  obj = { accessibilityLabel: null, onPress: null, source: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[1] = onClose.onClose;
  obj[2] = registerAssetDefault;
  obj[1] = callback2(HeaderActionButton.HeaderActionButton, obj);
  obj[2] = callback2(View, obj);
  return callback2(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
function SubmitFeedbackScreen(onSubmit) {
  ({ feedback: require, onChange: importDefault } = onSubmit);
  dependencyMap = undefined;
  let feedbackOptions;
  const tmp = callback4();
  dependencyMap = tmp;
  let obj = Feedback;
  feedbackOptions = obj.generateFeedbackOptions();
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["7bdzNo"]);
  const items = [callback2(Text.Text, obj), , , ];
  obj1 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t.Lbpk6m);
  items[1] = callback2(Text.Text, obj1);
  items[2] = callback2(View, {
    style: tmp.formBody,
    children: feedbackOptions.map((children) => {
      const value = children.value;
      closure_0 = value;
      let obj = {
        onPress() {
          return closure_1_1(closure_0);
        },
        trailing: null,
        label: null
      };
      obj = { active: closure_0 === value, style: closure_2.radioIndicator };
      obj[1] = closure_1_7(closure_1_0(closure_2[15]).RadioIndicator, obj);
      obj = { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: children.name };
      obj[2] = closure_1_7(closure_1_0(closure_2[13]).Text, obj);
      children = [closure_1_7(closure_1_0(closure_2[14]).FormRow, obj), arg1 < feedbackOptions.length - 1 && closure_1_7(closure_1_0(closure_2[14]).FormDivider, {})];
      return closure_1_8(closure_1_4.Fragment, { children }, value);
    })
  });
  const obj3 = { style: items1, children: null };
  items1 = [tmp.submitButtonContainer, ];
  const obj2 = {
    style: tmp.formBody,
    children: feedbackOptions.map((children) => {
      const value = children.value;
      closure_0 = value;
      let obj = {
        onPress() {
          return closure_1_1(closure_0);
        },
        trailing: null,
        label: null
      };
      obj = { active: closure_0 === value, style: closure_2.radioIndicator };
      obj[1] = closure_1_7(closure_1_0(closure_2[15]).RadioIndicator, obj);
      obj = { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: children.name };
      obj[2] = closure_1_7(closure_1_0(closure_2[13]).Text, obj);
      children = [closure_1_7(closure_1_0(closure_2[14]).FormRow, obj), arg1 < feedbackOptions.length - 1 && closure_1_7(closure_1_0(closure_2[14]).FormDivider, {})];
      return closure_1_8(closure_1_4.Fragment, { children }, value);
    })
  };
  items1[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  const obj5 = { size: "md", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj5[1] = intl3.string(getSystemLocale.t.Z6DZZ6);
  obj5[2] = onSubmit.onSubmit;
  obj3[1] = callback2(Button.Button, obj5);
  items[3] = callback2(View, obj3);
  obj[1] = items;
  return callback3(View, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK";
createCacheKey = { container: null, header: null, headerTitle: null, headerSubtitle: null, closeButtonContainer: null, formBody: null, formRow: null, radioIndicator: null, submitButtonContainer: null };
createCacheKey = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { textAlign: "center", marginTop: 8 };
createCacheKey[4] = { marginVertical: 14 };
let obj1 = { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[5] = { marginTop: 24, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[6] = { paddingVertical: 2 };
createCacheKey[7] = { marginRight: 0 };
let obj2 = { marginTop: 24, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[8] = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj3 = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const result = require("set").fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

export default function AutomodSubmitFeedbackModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const automodDecision = onCloseModal.automodDecision;
  let first;
  let callback;
  const tmp = callback(React.useState(onCloseModal(first[11]).Feedback.BUG), 2);
  first = tmp[0];
  callback = tmp[1];
  const items = [first, onCloseModal, automodDecision];
  const memo = React.useMemo(() => {
    closure_1 = onChange;
    onChange = function onChange(arg0) {
      onSubmit(arg0);
    };
    function onSubmit() {
      let obj = callback(onChange[17]);
      obj = { feedback_type: onChange, message_id: closure_1.messageId, content: closure_1.messageContent, decision_id: closure_1.decisionId };
      obj.trackWithMetadata(closure_1_6.GUILD_AUTOMOD_FEEDBACK, obj);
      ({ messageId, channel } = closure_1);
      callback(onChange[18]).executeAlertAction(messageId, channel, callback(onChange[19]).AutomodAlertActionType.SUBMIT_FEEDBACK);
      const obj3 = callback(onChange[18]);
      callback(onChange[20]).presentFeedbackSent();
      callback();
    }
    return {
      [closure_1_9]: {
        ignoreKeyboard: true,
        title: "",
        customNavbar() {
          return closure_1_7(closure_1_11, { onClose: closure_0 });
        },
        headerLeft() {
          return null;
        },
        render() {
          return closure_1_7(closure_1_12, { feedback: closure_1, onChange, onSubmit });
        }
      }
    };
  }, items);
  return callback2(onCloseModal(first[21]).Navigator, { screens: memo, initialRouteName: SUBMIT_FEEDBACK, headerStatusBarHeight: automodDecision(first[12])().top });
};