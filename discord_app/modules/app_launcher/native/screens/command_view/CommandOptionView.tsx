// discord_app/modules/app_launcher/native/screens/command_view/CommandOptionView.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4217 from "../../../../reanimated/ReanimatedRexport.tsx";
import AppLauncherCommandOptionDefault from "../../options/AppLauncherCommandOption.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import set from "../../../../../../_runtime/00002_set.js";

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let items = [require("PermissionOverwriteType").ApplicationCommandOptionType.STRING, require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER, require("PermissionOverwriteType").ApplicationCommandOptionType.ATTACHMENT, require("PermissionOverwriteType").ApplicationCommandOptionType.BOOLEAN, require("PermissionOverwriteType").ApplicationCommandOptionType.MENTIONABLE, require("PermissionOverwriteType").ApplicationCommandOptionType.USER, require("PermissionOverwriteType").ApplicationCommandOptionType.ROLE, require("PermissionOverwriteType").ApplicationCommandOptionType.CHANNEL, require("PermissionOverwriteType").ApplicationCommandOptionType.NUMBER];
let set = new Set(items);
createCacheKey = { optionDescription: { marginTop: 4 }, optionErrorContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 }, optionErrorIcon: null, labelText: null };
createCacheKey = { marginRight: 4, tintColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL, alignItems: "center" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginBottom: 8 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let items1 = [require("PermissionOverwriteType").ApplicationCommandOptionType.STRING, require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER, require("PermissionOverwriteType").ApplicationCommandOptionType.NUMBER];
const result = set.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandOptionView.tsx");

export default function CommandOptionView(option) {
  option = option.option;
  ({ editedOptions, onOptionViewLayout: importDefault, onPressOption: dependencyMap, onPressAttachmentOption: View, optionValidationResults, setFocusedOption: closure_4 } = option);
  ({ style, autoFocusType, onDismiss, onStartEditing, onEndEditing, onOptionValueChange, channel, command, optionValues, isPreSelectedOption } = option);
  const tmp = callback();
  let obj = option(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => lib.useReducedMotion);
  const ReduceMotion = option(4217).ReduceMotion;
  const tmp5 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  const optionEnteringAnimation = option(11731).useOptionEnteringAnimation();
  let fn = optionEnteringAnimation.registerAnimationCompleteCallback;
  if (set.has(option.type)) {
    if (option.required || isPreSelectedOption) {
      fn = (arg0) => arg0();
    }
    const FadeOut = tmp2(4217).FadeOut;
    const FadeInUp = tmp2(4217).FadeInUp;
    obj = { transform: null };
    items1 = [{ translateY: -10 }];
    obj[0] = items1;
    const reduceMotionResult = FadeOut.reduceMotion(tmp5);
    const withInitialValuesResult = FadeInUp.withInitialValues(obj);
    let hasItem = editedOptions.has(option.name);
    if (hasItem) {
      error = undefined;
      if (optionValidationResults[option.name] != null) {
        error = tmp12.error;
      }
      hasItem = null != error;
    }
    const hasItem1 = items1.includes(option.type);
    obj = { skipEntering: null, children: null };
    obj[0] = option.required || isPreSelectedOption;
    obj1 = { handleQueuedCallback: null, children: null };
    obj1[0] = fn;
    const obj2 = { collapsable: false, entering: null, exiting: null, layout: null, onLayout: null, children: null };
    obj2[1] = optionEnteringAnimation.EnteringAnimation;
    obj2[2] = tmp2(11731).ExitingAnimation;
    obj2[3] = tmp2(11731).LayoutAnimation;
    obj2[4] = function onLayout(arg0) {
      callback(arg0, option);
    };
    const obj3 = { collapsable: false, style: null, children: null };
    obj3[1] = style;
    let tmp17Result = hasItem1;
    if (hasItem1) {
      const obj4 = { style: null, variant: "text-sm/semibold", color: "text-subtle", children: null };
      obj4[0] = tmp.labelText;
      obj4[3] = option.displayName;
      tmp17Result = tmp17(tmp2(4474).Text, obj4);
    }
    const items2 = [tmp17Result, , , ];
    const obj5 = { option: null, onStartEditing: null, onEndEditing: null, onDismiss: null, onOptionValueChange: null, onFocus: null, onPress: null, onPressAttachmentOption: null, channel: null, autoFocusType: null, command: null, optionValues: null, hasError: null };
    obj5[0] = option;
    obj5[1] = onStartEditing;
    obj5[2] = onEndEditing;
    obj5[3] = onDismiss;
    obj5[4] = onOptionValueChange;
    obj5[5] = function onFocus() {
      return lib(option);
    };
    obj5[6] = function onPress() {
      return callback2(option);
    };
    obj5[7] = function onPressAttachmentOption() {
      return callback3(option);
    };
    obj5[8] = channel;
    obj5[9] = autoFocusType;
    obj5[10] = command;
    obj5[11] = optionValues;
    obj5[12] = hasItem;
    items2[1] = closure_5(AppLauncherCommandOptionDefault, obj5);
    const obj6 = { style: null, variant: "text-xs/medium", color: "text-muted", children: null };
    obj6[0] = tmp.optionDescription;
    obj6[3] = option.displayDescription;
    items2[2] = closure_5(tmp2(4474).Text, obj6);
    if (hasItem) {
      const obj7 = { collapsable: false, entering: null, exiting: null, style: null, children: null };
      obj7[1] = reduceMotionResult1;
      obj7[2] = reduceMotionResult;
      obj7[3] = tmp.optionErrorContainer;
      const obj8 = { style: null, source: null, size: null };
      obj8[0] = tmp.optionErrorIcon;
      obj8[1] = tmp18(10407);
      obj8[2] = tmp2(1297).IconSizes.REFRESH_SMALL_16;
      const items3 = [tmp17(tmp2(1297).Icon, obj8), ];
      const obj9 = { variant: "text-xs/medium", color: "text-feedback-critical", children: null };
      obj9[2] = optionValidationResults[option.name].error;
      items3[1] = tmp17(tmp2(4474).Text, obj9);
      obj7[4] = items3;
      hasItem = tmp19(tmp18(4217).View, obj7);
    }
    items2[3] = hasItem;
    obj3[2] = items2;
    obj2[5] = closure_6(View, obj3);
    obj1[1] = closure_5(_modDef4217.View, obj2);
    obj[1] = closure_5(tmp2(11732).AwaitAnimationContext, obj1);
    return closure_5(tmp2(4217).LayoutAnimationConfig, obj);
  } else {
    return null;
  }
  const tmp2Result = option(11731);
};