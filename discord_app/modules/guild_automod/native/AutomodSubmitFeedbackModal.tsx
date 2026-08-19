// discord_app/modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import Feedback from "../AutomodFeedback.tsx";
import HeaderActionButton from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import SafeAreaPaddingView from "../../../components_native/common/SafeAreaView.tsx";
import registerAssetDefault from "../../../../_runtime/08143_registerAsset.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function Navbar(onClose) {
  const tmp = callback4();
  const obj = { accessibilityLabel: null, onPress: null, source: null };
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
  const tmp = callback4();
  dependencyMap = tmp;
  let obj = Feedback;
  const feedbackOptions = obj.generateFeedbackOptions();
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
    children: feedbackOptions.map((item, index) => {
      const value = item.value;
      closure_0 = value;
      let obj = { active: closure_0 === value, style: closure_2.radioIndicator };
      obj[1] = closure_1_7(require(closure_2[15]).RadioIndicator, obj);
      obj = { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: item.name };
      obj[2] = closure_1_7(require(closure_2[13]).Text, obj);
      const children = [closure_1_7(require(closure_2[14]).FormRow, obj), index < feedbackOptions.length - 1 && closure_1_7(require(closure_2[14]).FormDivider, {})];
      return closure_1_8(closure_1_4.Fragment, { children }, value);
    })
  });
  const obj3 = { style: items1, children: null };
  items1 = [tmp.submitButtonContainer, ];
  const obj2 = {
    style: tmp.formBody,
    children: feedbackOptions.map((item, index) => {
      const value = item.value;
      closure_0 = value;
      let obj = { active: closure_0 === value, style: closure_2.radioIndicator };
      obj[1] = closure_1_7(require(closure_2[15]).RadioIndicator, obj);
      obj = { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: item.name };
      obj[2] = closure_1_7(require(closure_2[13]).Text, obj);
      const children = [closure_1_7(require(closure_2[14]).FormRow, obj), index < feedbackOptions.length - 1 && closure_1_7(require(closure_2[14]).FormDivider, {})];
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
const createCacheKey = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { textAlign: "center", marginTop: 8 };
createCacheKey[4] = { marginVertical: 14 };
createCacheKey[5] = { marginTop: 24, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[6] = { paddingVertical: 2 };
createCacheKey[7] = { marginRight: 0 };
createCacheKey[8] = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

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
      callback(onChange[17]);
      const obj = { feedback_type: onChange, message_id: closure_1.messageId, content: closure_1.messageContent, decision_id: closure_1.decisionId };
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