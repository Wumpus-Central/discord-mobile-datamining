import { registerAsset } from "../../../../_runtime/07837_registerAsset.js";
import { SafeAreaPaddingView } from "../../../components_native/common/SafeAreaView.tsx";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { HeaderActionButton } from "../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { Feedback } from "../AutomodFeedback.tsx";
// discord_app/modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx
import _slicedToArray from "_slicedToArray";
import AutomodAlertActionType from "AutomodAlertActionType";
import { View } from "collectGuildAnalyticsMetadata";
import { AnalyticEvents } from "ME";
import jsxProd from "NavigationStack";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
function Navbar(onClose) {
  const tmp = createCacheKey();
  let obj = { top: true, style: tmp.header, children: null };
  obj = { style: tmp.closeButtonContainer, children: null };
  obj = { accessibilityLabel: null, onPress: null, source: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.cpT0Cq);
  obj[1] = onClose.onClose;
  obj[2] = registerAsset;
  obj[1] = callback2(HeaderActionButton /* HeaderActionButton */.HeaderActionButton, obj);
  obj[2] = callback2(View, obj);
  return callback2(SafeAreaPaddingView /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
}
function SubmitFeedbackScreen(onSubmit) {
  let importDefault;
  let require;
  ({ feedback: require, onChange: importDefault } = onSubmit);
  let dependencyMap;
  let feedbackOptions;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = Feedback /* Feedback */;
  feedbackOptions = obj.generateFeedbackOptions();
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t["7bdzNo"]);
  const items = [callback2(Text /* Text */.Text, obj), , , ];
  const obj1 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj1[3] = intl2.string(getSystemLocale /* getSystemLocale */.t.Lbpk6m);
  items[1] = callback2(Text /* Text */.Text, obj1);
  items[2] = callback2(View, {
    style: tmp.formBody,
    children: feedbackOptions.map((children) => {
      const value = children.value;
      let closure_0 = value;
      let obj = {
        onPress() {
          return outer1_1(closure_0);
        },
        trailing: null,
        label: null
      };
      obj = { active: closure_0 === value, style: _undefined.radioIndicator };
      obj[1] = outer1_7(outer1_0(_undefined[15]).RadioIndicator, obj);
      obj = { style: _undefined.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: children.name };
      obj[2] = outer1_7(outer1_0(_undefined[13]).Text, obj);
      children = [outer1_7(outer1_0(_undefined[14]).FormRow, obj), arg1 < feedbackOptions.length - 1 && outer1_7(outer1_0(_undefined[14]).FormDivider, {})];
      return outer1_8(outer1_4.Fragment, { children }, value);
    })
  });
  const obj3 = { style: items1, children: null };
  items1 = [tmp.submitButtonContainer, ];
  const obj2 = {
    style: tmp.formBody,
    children: feedbackOptions.map((children) => {
      const value = children.value;
      let closure_0 = value;
      let obj = {
        onPress() {
          return outer1_1(closure_0);
        },
        trailing: null,
        label: null
      };
      obj = { active: closure_0 === value, style: _undefined.radioIndicator };
      obj[1] = outer1_7(outer1_0(_undefined[15]).RadioIndicator, obj);
      obj = { style: _undefined.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: children.name };
      obj[2] = outer1_7(outer1_0(_undefined[13]).Text, obj);
      children = [outer1_7(outer1_0(_undefined[14]).FormRow, obj), arg1 < feedbackOptions.length - 1 && outer1_7(outer1_0(_undefined[14]).FormDivider, {})];
      return outer1_8(outer1_4.Fragment, { children }, value);
    })
  };
  items1[1] = { paddingBottom: useSafeAreaInsets().bottom + 16 };
  const obj5 = { size: "md", text: null, onPress: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj5[1] = intl3.string(getSystemLocale /* getSystemLocale */.t.Z6DZZ6);
  obj5[2] = onSubmit.onSubmit;
  obj3[1] = callback2(Button /* Button */.Button, obj5);
  items[3] = callback2(View, obj3);
  obj[1] = items;
  return callback3(View, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK";
createCacheKey = { container: null, header: null, headerTitle: null, headerSubtitle: null, closeButtonContainer: null, formBody: null, formRow: null, radioIndicator: null, submitButtonContainer: null };
createCacheKey = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "flex-end", paddingVertical: 8, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { textAlign: "center", marginTop: 8 };
createCacheKey[4] = { marginVertical: 14 };
let obj1 = { flexDirection: "row", justifyContent: "flex-end", paddingVertical: 8, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[5] = { marginTop: 24, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[6] = { paddingVertical: 2 };
createCacheKey[7] = { marginRight: 0 };
let obj2 = { marginTop: 24, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[8] = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

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
    let closure_1 = onChange;
    onChange = function onChange(arg0) {
      onSubmit(arg0);
    };
    function onSubmit() {
      let channel;
      let messageId;
      let obj = callback(onChange[17]);
      obj = { feedback_type: onChange, message_id: closure_1.messageId, content: closure_1.messageContent, decision_id: closure_1.decisionId };
      obj.trackWithMetadata(outer1_6.GUILD_AUTOMOD_FEEDBACK, obj);
      ({ messageId, channel } = closure_1);
      callback(onChange[18]).executeAlertAction(messageId, channel, callback(onChange[19]).AutomodAlertActionType.SUBMIT_FEEDBACK);
      const obj3 = callback(onChange[18]);
      callback(onChange[20]).presentFeedbackSent();
      callback();
    }
    return {
      [outer1_9]: {
        ignoreKeyboard: true,
        title: "",
        customNavbar() {
          return outer1_7(outer1_11, { onClose: closure_0 });
        },
        headerLeft() {
          return null;
        },
        render() {
          return outer1_7(outer1_12, { feedback: closure_1, onChange, onSubmit });
        }
      }
    };
  }, items);
  return callback2(onCloseModal(first[21]).Navigator, { screens: memo, initialRouteName: SUBMIT_FEEDBACK, headerStatusBarHeight: automodDecision(first[12])().top });
};