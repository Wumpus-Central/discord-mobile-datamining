// discord_app/modules/app_launcher/native/screens/command_view/CommandOptionView.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import _modDef10415 from "../../../../../../_runtime/metro/10415__.js";
import AppLauncherCommandOptionDefault from "../../options/AppLauncherCommandOption.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = [
  fn(1894).ApplicationCommandOptionType.STRING,
  fn(1894).ApplicationCommandOptionType.INTEGER,
  fn(1894).ApplicationCommandOptionType.ATTACHMENT,
  fn(1894).ApplicationCommandOptionType.BOOLEAN,
  fn(1894).ApplicationCommandOptionType.MENTIONABLE,
  fn(1894).ApplicationCommandOptionType.USER,
  fn(1894).ApplicationCommandOptionType.ROLE,
  fn(1894).ApplicationCommandOptionType.CHANNEL,
  fn(1894).ApplicationCommandOptionType.NUMBER,
];
const set = new Set(items);
fn(4560);
let createStyles = {
  optionDescription: { marginTop: 4 },
  optionErrorContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  optionErrorIcon: null,
  labelText: null,
};
createStyles = { marginRight: 4, tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, alignItems: "center" };
createStyles.optionErrorIcon = createStyles;
createStyles.labelText = { marginBottom: 8 };
let closure_8 = createStyles.createStyles(createStyles);
let items1 = [
  fn(1894).ApplicationCommandOptionType.STRING,
  fn(1894).ApplicationCommandOptionType.INTEGER,
  fn(1894).ApplicationCommandOptionType.NUMBER,
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default function CommandOptionView(option) {
  option = option.option;
  ({
    editedOptions,
    onOptionViewLayout: importDefault,
    onPressOption: dependencyMap,
    onPressAttachmentOption: View,
    optionValidationResults,
    setFocusedOption: AccessibilityStore,
  } = option);
  ({
    style,
    autoFocusType,
    onDismiss,
    onStartEditing,
    onEndEditing,
    onOptionValueChange,
    channel,
    command,
    optionValues,
    isPreSelectedOption,
  } = option);
  const tmp = closure_8();
  let obj = option(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const ReduceMotion = option(4296).ReduceMotion;
  const tmp5 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const optionEnteringAnimation = option(12161).useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (fn) => fn();
    }
    const FadeOut = tmp2(4296).FadeOut;
    const FadeInUp = tmp2(4296).FadeInUp;
    obj = { transform: null };
    items1 = [{ translateY: -10 }];
    obj.transform = items1;
    const reduceMotionResult = FadeOut.reduceMotion(tmp5);
    const withInitialValuesResult = FadeInUp.withInitialValues(obj);
    let hasItem = editedOptions.has(option.name);
    if (hasItem) {
      let error;
      if (optionValidationResults[option.name] != null) {
        error = tmp12.error;
      }
      hasItem = null != error;
    }
    const hasItem1 = items1.includes(option.type);
    obj = { skipEntering: option.required || isPreSelectedOption, children: null };
    const obj1 = { handleQueuedCallback: fn, children: null };
    const obj2 = {
      collapsable: false,
      entering: optionEnteringAnimation.EnteringAnimation,
      exiting: tmp2(12161).ExitingAnimation,
      layout: tmp2(12161).LayoutAnimation,
      onLayout(arg0) {
        importDefault(arg0, option);
      },
      children: null,
    };
    const obj3 = { collapsable: false, style, children: null };
    let tmp17Result = hasItem1;
    if (hasItem1) {
      const obj4 = {
        style: tmp.labelText,
        variant: "text-sm/semibold",
        color: "text-subtle",
        children: option.displayName,
      };
      tmp17Result = closure_5(tmp2(4556).Text, obj4);
    }
    const items2 = [tmp17Result, , ,];
    const obj5 = {
      option,
      onStartEditing,
      onEndEditing,
      onDismiss,
      onOptionValueChange,
      onFocus() {
        return AccessibilityStore(option);
      },
      onPress() {
        return dependencyMap(option);
      },
      onPressAttachmentOption() {
        return View(option);
      },
      channel,
      autoFocusType,
      command,
      optionValues,
      hasError: hasItem,
    };
    items2[1] = closure_5(AppLauncherCommandOptionDefault, obj5);
    const obj6 = {
      style: tmp.optionDescription,
      variant: "text-xs/medium",
      color: "text-muted",
      children: option.displayDescription,
    };
    items2[2] = closure_5(tmp2(4556).Text, obj6);
    if (hasItem) {
      const obj7 = {
        collapsable: false,
        entering: reduceMotionResult1,
        exiting: reduceMotionResult,
        style: tmp.optionErrorContainer,
        children: null,
      };
      const obj8 = { style: tmp.optionErrorIcon, source: _modDef10415, size: tmp2(1178).IconSizes.REFRESH_SMALL_16 };
      const items3 = [closure_5(tmp2(1178).Icon, obj8)];
      const obj9 = {
        variant: "text-xs/medium",
        color: "text-feedback-critical",
        children: optionValidationResults[option.name].error,
      };
      items3[1] = closure_5(tmp2(4556).Text, obj9);
      obj7.children = items3;
      hasItem = closure_6(ReanimatedRexportDefault.View, obj7);
    }
    items2[3] = hasItem;
    obj3.children = items2;
    obj2.children = closure_6(View, obj3);
    obj1.children = closure_5(ReanimatedRexportDefault.View, obj2);
    obj.children = closure_5(tmp2(12162).AwaitAnimationContext, obj1);
    return closure_5(tmp2(4296).LayoutAnimationConfig, obj);
  } else {
    return null;
  }
  const tmp2Result = option(12161);
}
