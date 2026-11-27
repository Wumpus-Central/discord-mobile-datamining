// === Module 16074: useConfigureProfileEditorScreen ===

// Module 16074 (useConfigureProfileEditorScreen)
import util from "util" /* 1112 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/useConfigureProfileEditorScreen.tsx");

export default function useConfigureProfileEditorScreen(showTitleAndBackButton) {
  showTitleAndBackButton = showTitleAndBackButton.showTitleAndBackButton;
  const isSubmitting = showTitleAndBackButton.isSubmitting;
  const saveButtonDisabled = showTitleAndBackButton.saveButtonDisabled;
  const onSave = showTitleAndBackButton.onSave;
  const backgroundColor = showTitleAndBackButton.backgroundColor;
  const nativeStackNavigation = showTitleAndBackButton(saveButtonDisabled[2]).useNativeStackNavigation();
  items = [backgroundColor, nativeStackNavigation, showTitleAndBackButton, isSubmitting, saveButtonDisabled, onSave];
  const layoutEffect = onSave.useLayoutEffect(() => {
    let obj = { contentStyle: { backgroundColor }, headerStyle: { backgroundColor }, headerShadowVisible: false };
    if (showTitleAndBackButton) {
      let intl = util.intl;
      obj.title = intl.string(util.t.s5vZlQ);
      obj.headerLeft = () => backgroundColor(isSubmitting(saveButtonDisabled[4]), { navigation, hideBadge: true });
    }
    obj.headerRight = isSubmitting ? (() => backgroundColor(showTitleAndBackButton(disabled[5]).HeaderSubmittingIndicator, {})) : (() => {
      const obj = { text: null, onPress: null, disabled: null };
      const intl = showTitleAndBackButton(saveButtonDisabled[3]).intl;
      obj.text = intl.string(showTitleAndBackButton(saveButtonDisabled[3]).t["R3BPH+"]);
      obj.onPress = onPress;
      obj.disabled = disabled;
      return backgroundColor(showTitleAndBackButton(saveButtonDisabled[6]).HeaderActionButton, obj);
    });
    nativeStackNavigation.setOptions(obj);
    const obj2 = { backgroundColor };
  }, items);
};