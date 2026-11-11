// === Module 13398: CommandOptionView ===

// Module 13398 (CommandOptionView)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import AppLauncherCommandOptionDefault from "AppLauncherCommandOption" /* 13401 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let items = [fn(2116).ApplicationCommandOptionType.STRING, fn(2116).ApplicationCommandOptionType.INTEGER, fn(2116).ApplicationCommandOptionType.ATTACHMENT, fn(2116).ApplicationCommandOptionType.BOOLEAN, fn(2116).ApplicationCommandOptionType.MENTIONABLE, fn(2116).ApplicationCommandOptionType.USER, fn(2116).ApplicationCommandOptionType.ROLE, fn(2116).ApplicationCommandOptionType.CHANNEL, fn(2116).ApplicationCommandOptionType.NUMBER];
const set = new Set(items);
const createStyles = fn(5243);
let obj2 = { optionDescription: { marginTop: 4 }, optionErrorContainer: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4, marginTop: 4 }, labelText: { marginBottom: 8 } };
let closure_8 = createStyles.createStyles(obj2);
let items1 = [fn(2116).ApplicationCommandOptionType.STRING, fn(2116).ApplicationCommandOptionType.INTEGER, fn(2116).ApplicationCommandOptionType.NUMBER];
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default function CommandOptionView(option) {
  option = option.option;
  ({ editedOptions, onOptionViewLayout: importDefault, onPressOption: dependencyMap, onPressAttachmentOption: View, optionValidationResults, setFocusedOption: AccessibilityStore } = option);
  ({ style, autoFocusType, onDismiss, onStartEditing, onEndEditing, onOptionValueChange, channel, command, optionValues, isPreSelectedOption } = option);
  const tmp = closure_8();
  items = [AccessibilityStore];
  const stateFromStores = option(504).useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const ReduceMotion = option(1652).ReduceMotion;
  const tmp5 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const obj = option(504);
  const optionEnteringAnimation = option(13399).useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (fn) => fn();
    }
    const FadeOut = tmp2(1652).FadeOut;
    const FadeInUp = tmp2(1652).FadeInUp;
    const obj2 = { transform: null };
    items1 = [{ translateY: -10 }];
    obj2.transform = items1;
    const reduceMotionResult = FadeOut.reduceMotion(tmp5);
    const withInitialValuesResult = FadeInUp.withInitialValues(obj2);
    let hasItem = editedOptions.has(option.name);
    if (hasItem) {
      let error;
      if (optionValidationResults[option.name] != null) {
        error = tmp12.error;
      }
      hasItem = null != error;
    }
    let hasItem1 = items1.includes(option.type);
    if (hasItem1) {
      hasItem1 = null == option.choices;
    }
    const obj3 = { skipEntering: option.required || isPreSelectedOption, children: null };
    const obj4 = { handleQueuedCallback: fn, children: null };
    const obj5 = {
      collapsable: false,
      entering: optionEnteringAnimation.EnteringAnimation,
      exiting: tmp2(13399).ExitingAnimation,
      layout: tmp2(13399).LayoutAnimation,
      onLayout(arg0) {
          importDefault(arg0, option);
        },
      children: null
    };
    const obj6 = { collapsable: false, style, children: null };
    if (hasItem1) {
      const obj7 = { style: tmp.labelText, variant: "body-sm/semibold", color: "text-subtle", children: option.displayName };
      hasItem1 = closure_5(tmp2(5866).Text, obj7);
    }
    const items2 = [hasItem1, , , ];
    const obj8 = {
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
      hasError: hasItem
    };
    items2[1] = closure_5(AppLauncherCommandOptionDefault, obj8);
    const obj9 = { style: tmp.optionDescription, variant: "body-xs/medium", color: "text-muted", children: option.displayDescription };
    items2[2] = closure_5(tmp2(5866).Text, obj9);
    if (hasItem) {
      const obj10 = { collapsable: false, entering: reduceMotionResult1, exiting: reduceMotionResult, style: tmp.optionErrorContainer, children: null };
      const items3 = [closure_5(tmp2(7557).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), ];
      const obj11 = { variant: "body-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
      items3[1] = closure_5(tmp2(5866).Text, obj11);
      obj10.children = items3;
      hasItem = closure_6(_modDef1652.View, obj10);
    }
    items2[3] = hasItem;
    obj6.children = items2;
    obj5.children = closure_6(View, obj6);
    obj4.children = closure_5(_modDef1652.View, obj5);
    obj3.children = closure_5(tmp2(13400).AwaitAnimationContext, obj4);
    return closure_5(tmp2(1652).LayoutAnimationConfig, obj3);
  } else {
    return null;
  }
  const tmp2Result = option(13399);
};