// === Module 12018: AutomodSubmitFeedbackModal ===

// Module 12018 (AutomodSubmitFeedbackModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import Text_Text from "Text/Text" /* 4636 */;
import components_Button_Button from "components/Button/Button" /* 5062 */;
import _modDef7106 from "module_7106" /* 7106 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7237 */;
import HeaderActionButton from "HeaderActionButton" /* 7491 */;
import AutomodFeedback from "AutomodFeedback" /* 7632 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Navbar(onClose) {
  const tmp = closure_10();
  const rect = { top: true, left: true, right: true, style: tmp.header, children: null };
  const obj = { style: tmp.closeButtonContainer, children: null };
  const obj2 = { accessibilityLabel: null, onPress: null, source: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj2.onPress = onClose.onClose;
  obj2.source = _modDef7106;
  obj.children = React5(HeaderActionButton.HeaderActionButton, obj2);
  rect.children = React5(View, obj);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
}
function SubmitFeedbackScreen(onSubmit) {
  ({ feedback: require, onChange: importDefault } = onSubmit);
  const tmp = closure_10();
  dependencyMap = tmp;
  const feedbackOptions = AutomodFeedback.generateFeedbackOptions();
  const tmp2 = useSafeAreaInsetsDefault();
  ({ left, right } = tmp2);
  const obj2 = { style: null, children: null };
  const items = [tmp.container, { paddingLeft: 16 + left, paddingRight: 16 + right }];
  obj2.style = items;
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["7bdzNo"]);
  const items1 = [closure_7(Text_Text.Text, obj4), , , ];
  const obj5 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.Lbpk6m);
  items1[1] = closure_7(Text_Text.Text, obj5);
  const obj3 = { paddingLeft: 16 + left, paddingRight: 16 + right };
  items1[2] = closure_7(View, {
    style: tmp.formBody,
    children: feedbackOptions.map((children, index) => {
      value = children.value;
      closure_0 = value;
      const obj = {
        onPress() {
          return importDefault(value);
        },
        trailing: closure_1_7(require("native").RadioIndicator, { active: closure_0 === value, style: closure_2.radioIndicator }),
        label: closure_1_7(require("Text/Text").Text, { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: children.name })
      };
      children = [closure_1_7(require("Form").FormRow, obj), index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {})];
      return closure_1_8(React.Fragment, { children }, value);
    })
  });
  const obj7 = { style: null, children: null };
  const items2 = [tmp.submitButtonContainer, { paddingBottom: tmp2.bottom + 16, paddingLeft: 16 + left, paddingRight: 16 + right }];
  obj7.style = items2;
  const obj8 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj8.text = intl3.string(util.t.Z6DZZ6);
  obj8.onPress = onSubmit.onSubmit;
  obj7.children = closure_7(components_Button_Button.Button, obj8);
  items1[3] = closure_7(View, obj7);
  obj2.children = items1;
  return closure_8(View, obj2);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK";
const createStyles = fn(4640);
let obj2 = { container: { flex: 1, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 }, header: null, headerTitle: null, headerSubtitle: null, closeButtonContainer: null, formBody: null, formRow: null, radioIndicator: null, submitButtonContainer: null };
let obj3 = { flex: 1, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
obj2.header = { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.headerTitle = { textAlign: "center" };
obj2.headerSubtitle = { textAlign: "center", marginTop: 8 };
obj2.closeButtonContainer = { marginVertical: 14 };
let obj4 = { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.formBody = { marginTop: 24, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.formRow = { paddingVertical: 2 };
obj2.radioIndicator = { marginRight: 0 };
let rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.submitButtonContainer = rect;
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

export default function AutomodSubmitFeedbackModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const automodDecision = onCloseModal.automodDecision;
  first = undefined;
  _slicedToArray = undefined;
  [first, _slicedToArray] = noop.useState(onCloseModal(first[11]).Feedback.BUG);
  const items = [first, onCloseModal, automodDecision];
  const memo = noop.useMemo(() => {
    const onClose = onCloseModal;
    const feedback = first;
    function onChange(arg0) {
      onSubmit(arg0);
    }
    function onSubmit() {
      onCloseModal(first[17]).trackWithMetadata(constants.GUILD_AUTOMOD_FEEDBACK, { feedback_type: onChange, message_id: feedback.messageId, content: feedback.messageContent, decision_id: feedback.decisionId });
      const obj = onCloseModal(first[17]);
      const obj2 = { feedback_type: onChange, message_id: feedback.messageId, content: feedback.messageContent, decision_id: feedback.decisionId };
      ({ messageId, channel } = feedback);
      onCloseModal(first[18]).executeAlertAction(messageId, channel, onCloseModal(first[19]).AutomodAlertActionType.SUBMIT_FEEDBACK);
      const obj3 = onCloseModal(first[18]);
      onCloseModal(first[20]).presentFeedbackSent();
      onClose();
    }
    return {
      [closure_2_9]: {
        ignoreKeyboard: true,
        title: "",
        customNavbar() {
          return closure_2_7(Navbar, { onClose });
        },
        headerLeft() {
          return null;
        },
        render() {
          return closure_2_7(SubmitFeedbackScreen, { feedback, onChange, onSubmit });
        }
      }
    };
  }, items);
  return closure_7(onCloseModal(first[21]).Navigator, { screens: memo, initialRouteName: SUBMIT_FEEDBACK, headerStatusBarHeight: automodDecision(first[12])().top });
};