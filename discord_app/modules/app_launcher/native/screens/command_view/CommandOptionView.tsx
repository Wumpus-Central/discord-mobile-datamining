// === Module 11798: CommandOptionView ===

// Module 11798 (CommandOptionView)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Server from "Server" /* 1985 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import AssetRegistryDefault from "AssetRegistry" /* 10156 */;
import AppLauncherCommandOptionDefault from "AppLauncherCommandOption" /* 11800 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onPressAttachmentOption;

let hasOwnProperty;
let metroRequire;
let obj2;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let items = [Server.ApplicationCommandOptionType.STRING, Server.ApplicationCommandOptionType.INTEGER, Server.ApplicationCommandOptionType.ATTACHMENT, Server.ApplicationCommandOptionType.BOOLEAN, Server.ApplicationCommandOptionType.MENTIONABLE, Server.ApplicationCommandOptionType.USER, Server.ApplicationCommandOptionType.ROLE, Server.ApplicationCommandOptionType.CHANNEL, Server.ApplicationCommandOptionType.NUMBER];
const set = new Set(items);
let obj = { optionDescription: { marginTop: 4 }, optionErrorContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 }, optionErrorIcon: obj2, labelText: { marginBottom: 8 } };
obj2 = { marginRight: 4, tintColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, alignItems: "center" };
let closure_8 = createStyles.createStyles(obj);
let items1 = [Server.ApplicationCommandOptionType.STRING, Server.ApplicationCommandOptionType.INTEGER, Server.ApplicationCommandOptionType.NUMBER];
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPressAttachmentOption) => {
  let EnteringAnimation;
  let autoFocusType;
  let channel;
  let command;
  let editedOptions;
  let onDismiss;
  let onEndEditing;
  let onOptionValueChange;
  let onOptionViewLayout;
  let onPressOption;
  let onStartEditing;
  let option;
  let optionValidationResults;
  let optionValues;
  let registerAnimationCompleteCallback;
  let setFocusedOption;
  let style;
  let tmp5;
  let tmp6;
  const obj = option(onPressOption[8]);
  const cResult = obj.c(72);
  ({ style, option } = onPressAttachmentOption);
  ({ autoFocusType, onDismiss, editedOptions, onOptionViewLayout } = onPressAttachmentOption);
  ({ onStartEditing, onEndEditing, onOptionValueChange, onPressOption } = onPressAttachmentOption);
  onPressAttachmentOption = onPressAttachmentOption.onPressAttachmentOption;
  ({ channel, optionValidationResults, setFocusedOption } = onPressAttachmentOption);
  ({ command, optionValues } = onPressAttachmentOption);
  const isPreSelectedOption = onPressAttachmentOption.isPreSelectedOption;
  closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [setFocusedOption];
    class E {
      constructor() {
        return setFocusedOption.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = option(onPressOption[9]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, E);
  const ReduceMotion = option(onPressOption[10]).ReduceMotion;
  const tmp9 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const tmpResult2 = option(onPressOption[11]);
  const optionEnteringAnimation = tmpResult2.useOptionEnteringAnimation();
  ({ EnteringAnimation, registerAnimationCompleteCallback } = optionEnteringAnimation);
  if (set.has(option.type)) {
    if (cResult[2] === registerAnimationCompleteCallback) {
      if (cResult[5] !== tmp9) {
        const FadeOut = option(onPressOption[10]).FadeOut;
        const reduceMotionResult = FadeOut.reduceMotion(tmp9);
        class E {
          constructor() {
            return setFocusedOption.useReducedMotion;
          }
        }
        cResult[6] = reduceMotionResult;
      }
      if (cResult[7] !== tmp9) {
        const FadeInUp = option(onPressOption[10]).FadeInUp;
        const obj2 = { transform: items1 };
        items1 = [];
        class E {
          constructor() {
            return setFocusedOption.useReducedMotion;
          }
        }
        const withInitialValuesResult = FadeInUp.withInitialValues(obj2);
        cResult[7] = tmp9;
        cResult[8] = withInitialValuesResult.reduceMotion(tmp9);
        const reduceMotionResult1 = withInitialValuesResult.reduceMotion(tmp9);
      }
      class E {
        constructor() {
          return setFocusedOption.useReducedMotion;
        }
      }
      let hasItem = editedOptions.has(option.name);
      if (hasItem) {
        class E {
          constructor() {
            return setFocusedOption.useReducedMotion;
          }
        }
        hasItem = null != tmp23;
      }
      cResult[9] = editedOptions;
      cResult[10] = option.name;
      cResult[11] = optionValidationResults;
      cResult[12] = hasItem;
    }
    class E {
      constructor() {
        return setFocusedOption.useReducedMotion;
      }
    }
    cResult[2] = registerAnimationCompleteCallback;
    cResult[3] = option.required || isPreSelectedOption;
    cResult[4] = registerAnimationCompleteCallback;
  } else {
    return null;
  }
}) : ((option) => {
  let AwaitAnimationContext;
  let autoFocusType;
  let channel;
  let command;
  let editedOptions;
  let isPreSelectedOption;
  let items2;
  let items3;
  let obj4;
  let obj5;
  let obj6;
  let onDismiss;
  let onEndEditing;
  let onOptionValueChange;
  let onStartEditing;
  let optionValidationResults;
  let optionValues;
  let style;
  let tmp20;
  option = option.option;
  ({ editedOptions, onOptionViewLayout: importDefault, onPressOption: dependencyMap, onPressAttachmentOption: View, optionValidationResults, setFocusedOption: AccessibilityStore } = option);
  ({ style, autoFocusType, onDismiss, onStartEditing, onEndEditing, onOptionValueChange, channel, command, optionValues, isPreSelectedOption } = option);
  const tmp = closure_8();
  const items = [AccessibilityStore];
  const obj = option(504);
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.useReducedMotion);
  const ReduceMotion = option(4618).ReduceMotion;
  const tmp5 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const tmp2Result = option(11799);
  const optionEnteringAnimation = tmp2Result.useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  const EnteringAnimation = optionEnteringAnimation.EnteringAnimation;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (fn) => fn();
    }
    const FadeOut = tmp2(4618).FadeOut;
    const reduceMotionResult = FadeOut.reduceMotion(tmp5);
    const FadeInUp = tmp2(4618).FadeInUp;
    const obj2 = { transform: items1 };
    items1 = [{ translateY: -10 }];
    const withInitialValuesResult = FadeInUp.withInitialValues(obj2);
    const reduceMotionResult1 = withInitialValuesResult.reduceMotion(tmp5);
    let hasItem = editedOptions.has(option.name);
    if (hasItem) {
      let error;
      if (optionValidationResults[option.name] != null) {
        error = tmp12.error;
      }
      hasItem = null != error;
    }
    const hasItem1 = items1.includes(option.type);
    const obj3 = { skipEntering: option.required || isPreSelectedOption, children: closure_5(AwaitAnimationContext, obj4) };
    const LayoutAnimationConfig = tmp2(4618).LayoutAnimationConfig;
    obj4 = { handleQueuedCallback: fn, children: closure_5(View, obj5) };
    AwaitAnimationContext = tmp2(11807).AwaitAnimationContext;
    obj5 = {
      collapsable: false,
      entering: EnteringAnimation,
      exiting: option(11799).ExitingAnimation,
      layout: option(11799).LayoutAnimation,
      onLayout(arg0) {
          importDefault(arg0, option);
        },
      children: closure_6(tmp20, obj6)
    };
    View = ReanimatedRexportDefault.View;
    let tmp17Result = hasItem1;
    obj6 = { collapsable: false, style, children: items2 };
    tmp20 = View;
    if (hasItem1) {
      const obj7 = { style: tmp.labelText, variant: "text-sm/semibold", color: "text-subtle", children: option.displayName };
      tmp17Result = closure_5(tmp2(4892).Text, obj7);
    }
    items2 = [tmp17Result, , , ];
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
    const obj9 = { style: tmp.optionDescription, variant: "text-xs/medium", color: "text-muted", children: option.displayDescription };
    items2[2] = closure_5(option(4892).Text, obj9);
    if (hasItem) {
      const obj10 = { collapsable: false, entering: reduceMotionResult1, exiting: reduceMotionResult, style: tmp.optionErrorContainer, children: items3 };
      const View2 = ReanimatedRexportDefault.View;
      const obj11 = { style: tmp.optionErrorIcon, source: AssetRegistryDefault, size: option(1188).IconSizes.REFRESH_SMALL_16 };
      const Icon = tmp2(1188).Icon;
      items3 = [closure_5(Icon, obj11), ];
      const obj12 = { variant: "text-xs/medium", color: "text-feedback-critical", children: optionValidationResults[option.name].error };
      items3[1] = closure_5(option(4892).Text, obj12);
      hasItem = closure_6(View2, obj10);
    }
    items2[3] = hasItem;
    return closure_5(LayoutAnimationConfig, obj3);
  } else {
    return null;
  }
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default tmp5;