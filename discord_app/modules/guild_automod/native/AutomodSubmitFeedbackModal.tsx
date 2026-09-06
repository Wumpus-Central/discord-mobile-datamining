// === Module 11866: AutomodSubmitFeedbackModal ===

// Module 11866 (AutomodSubmitFeedbackModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import _modDef6992 from "module_6992" /* 6992 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import AutomodFeedback from "AutomodFeedback" /* 7518 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function Navbar(onClose) {
  const tmp = closure_10();
  let obj = { top: true, style: tmp.header, children: null };
  obj = { style: tmp.closeButtonContainer, children: null };
  obj = { accessibilityLabel: null, onPress: null, source: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.onPress = onClose.onClose;
  obj.source = _modDef6992;
  obj.children = React5(HeaderActionButton.HeaderActionButton, obj);
  obj.children = React5(View, obj);
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj);
}
function SubmitFeedbackScreen(onSubmit) {
  ({ feedback: require, onChange: importDefault } = onSubmit);
  const tmp = closure_10();
  dependencyMap = tmp;
  let obj = AutomodFeedback;
  const feedbackOptions = obj.generateFeedbackOptions();
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["7bdzNo"]);
  const items = [closure_7(Text_Text.Text, obj), , , ];
  const obj1 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.string(util.t.Lbpk6m);
  items[1] = closure_7(Text_Text.Text, obj1);
  items[2] = closure_7(View, {
    style: tmp.formBody,
    children: feedbackOptions.map((children, index) => {
      value = children.value;
      closure_0 = value;
      let obj = {
        onPress() {
          return importDefault(value);
        },
        trailing: null,
        label: null
      };
      obj = { active: closure_0 === value, style: closure_2.radioIndicator };
      obj.trailing = closure_1_7(require("native").RadioIndicator, obj);
      obj = { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: children.name };
      obj.label = closure_1_7(require("Text/Text").Text, obj);
      children = [closure_1_7(require("Form").FormRow, obj), index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {})];
      return closure_1_8(React.Fragment, { children }, value);
    })
  });
  const obj3 = { style: null, children: null };
  const items1 = [tmp.submitButtonContainer, ];
  const obj2 = {
    style: tmp.formBody,
    children: feedbackOptions.map((children, index) => {
      value = children.value;
      closure_0 = value;
      let obj = {
        onPress() {
          return importDefault(value);
        },
        trailing: null,
        label: null
      };
      obj = { active: closure_0 === value, style: closure_2.radioIndicator };
      obj.trailing = closure_1_7(require("native").RadioIndicator, obj);
      obj = { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: children.name };
      obj.label = closure_1_7(require("Text/Text").Text, obj);
      children = [closure_1_7(require("Form").FormRow, obj), index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {})];
      return closure_1_8(React.Fragment, { children }, value);
    })
  };
  items1[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom + 16 };
  obj3.style = items1;
  const obj5 = { size: "md", text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t.Z6DZZ6);
  obj5.onPress = onSubmit.onSubmit;
  obj3.children = closure_7(components_Button_Button.Button, obj5);
  items[3] = closure_7(View, obj3);
  obj.children = items;
  return closure_8(View, obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK";
fn(4560);
let createStyles = { container: null, header: null, headerTitle: null, headerSubtitle: null, closeButtonContainer: null, formBody: null, formRow: null, radioIndicator: null, submitButtonContainer: null };
createStyles = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createStyles.container = createStyles;
createStyles.header = { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.headerTitle = { textAlign: "center" };
createStyles.headerSubtitle = { textAlign: "center", marginTop: 8 };
createStyles.closeButtonContainer = { marginVertical: 14 };
let obj1 = { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.formBody = { marginTop: 24, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.formRow = { paddingVertical: 2 };
createStyles.radioIndicator = { marginRight: 0 };
const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.submitButtonContainer = rect;
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

export default function AutomodSubmitFeedbackModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const automodDecision = onCloseModal.automodDecision;
  let first;
  _slicedToArray = undefined;
  const tmp = _slicedToArray(noop.useState(onCloseModal(first[11]).Feedback.BUG), 2);
  first = tmp[0];
  _slicedToArray = tmp[1];
  const items = [first, onCloseModal, automodDecision];
  const memo = noop.useMemo(() => {
    const onClose = onCloseModal;
    const feedback = first;
    function onChange(arg0) {
      onSubmit(arg0);
    }
    function onSubmit() {
      onCloseModal(first[17]);
      const obj = { feedback_type: onChange, message_id: feedback.messageId, content: feedback.messageContent, decision_id: feedback.decisionId };
      obj.trackWithMetadata(constants.GUILD_AUTOMOD_FEEDBACK, obj);
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