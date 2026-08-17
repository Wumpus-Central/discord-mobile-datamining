// discord_app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx
import _modDef38 from "module_38" /* 38 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import t from "t" /* 4486 */;
import _executeCommandDefault from "_executeCommand" /* 10255 */;
import registerAssetDefault from "registerAsset" /* 11346 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleInit" /* 7526 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importDefaultResult from "apply" /* 12 */;

require = arg1;
function Item(arg0) {
  ({ item, index: require, choices: importDefault, onChoiceSelect: dependencyMap } = arg0);
  closure_3 = undefined;
  let React;
  function ListItem(arg0) {
    ({ label, onPress } = arg0);
    return closure_1_9(closure_1_0(closure_1_2[18]).TableRow, { label, onPress, start: 0 === closure_0, end: closure_0 === length.length - 1 });
  }
  let tmp4 = item.type === AutoCompleteResultTypes.CHOICE;
  if (!tmp4) {
    tmp4 = item.type === tmp3.CHOICE_LOADING;
  }
  if (!tmp4) {
    tmp4 = item.type === tmp3.LABEL;
  }
  _modDef38(tmp4, "Invalid autocomplete result type");
  closure_3 = callback2();
  React = React.useMemo(() => 100 * Math.random() + 50, []);
  const tmp2 = _modDef38;
  const match = t.match(item);
  let obj = { type: tmp3.CHOICE };
  const str = t;
  obj = { type: tmp3.LABEL };
  const withResult = match.with(obj, (children) => {
    closure_0 = children;
    obj = {
      label: closure_1_9(closure_1_0(closure_1_2[20]).Text, obj),
      onPress() {
        if (closure_1_2 != null) {
          tmp(choice.choice);
        }
        closure_2_1(closure_2_2[13]).hideActionSheet();
      }
    };
    obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName };
    return closure_1_9(ListItem, obj);
  });
  obj1 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
  const withResult1 = match.with(obj, (children) => {
    closure_0 = children;
    obj = {
      label: closure_1_9(closure_1_0(closure_1_2[20]).Text, obj),
      onPress() {
        if (closure_1_2 != null) {
          tmp(choice.choice);
        }
        closure_2_1(closure_2_2[13]).hideActionSheet();
      }
    };
    obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName };
    return closure_1_9(ListItem, obj);
  }).with(obj, (label) => {
    closure_0 = label;
    const items = ["\"", label.label, "\""];
    return closure_1_9(ListItem, {
      label: closure_1_10(closure_1_0(closure_1_2[20]).Text, { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: items }),
      onPress() {
        if (closure_1_2 != null) {
          const obj = { name: null, value: null, displayName: null };
          ({ label: obj[0], label: obj[1], label: obj[2] } = closure_0);
          tmp(obj);
        }
        closure_2_1(closure_2_2[13]).hideActionSheet();
      }
    });
  });
  return match.with(obj, (children) => {
    closure_0 = children;
    obj = {
      label: closure_1_9(closure_1_0(closure_1_2[20]).Text, obj),
      onPress() {
        if (closure_1_2 != null) {
          tmp(choice.choice);
        }
        closure_2_1(closure_2_2[13]).hideActionSheet();
      }
    };
    obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: children.choice.displayName };
    return closure_1_9(ListItem, obj);
  }).with(obj, (label) => {
    closure_0 = label;
    const items = ["\"", label.label, "\""];
    return closure_1_9(ListItem, {
      label: closure_1_10(closure_1_0(closure_1_2[20]).Text, { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: items }),
      onPress() {
        if (closure_1_2 != null) {
          const obj = { name: null, value: null, displayName: null };
          ({ label: obj[0], label: obj[1], label: obj[2] } = closure_0);
          tmp(obj);
        }
        closure_2_1(closure_2_2[13]).hideActionSheet();
      }
    });
  }).with({ type: AutoCompleteResultTypes.CHOICE_LOADING }, () => {
    let obj = { label: null };
    obj = { style: closure_3.commandChoiceLoadingContainer, children: closure_1_9(ListItem, { style: items }) };
    items = [closure_3.commandChoiceLoadingItem, ];
    obj = { width: closure_4 };
    items[1] = obj;
    obj[0] = closure_1_9(ListItem, obj);
    return closure_1_9(ListItem, obj);
  }).exhaustive();
}
function AutocompleteFailedEmptyState() {
  const obj = { style: callback2().emptyState, lightSource: registerAssetDefault, darkSource: registerAssetDefault, title: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.rTAbPn);
  return callback(Button.EmptyState, obj);
}
require("ME").AutoCompleteResultTypes;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = importDefaultResult.debounce(_executeCommandDefault, require("TRUE_OPTION_NAME").AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, { leading: true, trailing: true });
let obj = { commandChoiceLoadingContainer: { flex: 1, justifyContent: "center" }, commandChoiceLoadingItem: null, emptyState: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: ThemesDefault.radii.lg, alignSelf: "flex-start" };
obj[1] = obj;
obj[2] = { backgroundColor: "transparent" };
let closure_12 = createCacheKey.createStyles(obj);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx");

export default function AppLauncherAutocompleteActionSheet(onDismiss) {
  const option = onDismiss.option;
  ({ initChoice, onChoiceSelect } = onDismiss);
  const channel = onDismiss.channel;
  const activeCommand = onDismiss.activeCommand;
  const optionValues = onDismiss.optionValues;
  let first;
  let ref;
  let autocompleteResults;
  let lastErrored;
  let memo;
  let obj = optionValues;
  let str;
  if (initChoice != null) {
    str = initChoice.name;
  }
  if (str == null) {
    str = "";
  }
  const tmp = activeCommand(optionValues.useState(str), 2);
  first = tmp[0];
  ref = obj.useRef(null);
  obj1 = option(channel[12]);
  let items = [ref];
  let items1 = [channel.id, option.name, first];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ autocompleteResults: ref.getAutocompleteChoices(channel.id, option.name, first), lastErrored: ref.getLastErrored(channel.id) }), items1);
  autocompleteResults = stateFromStoresObject.autocompleteResults;
  lastErrored = stateFromStoresObject.lastErrored;
  let items2 = [first, autocompleteResults, lastErrored];
  memo = obj.useMemo(() => {
    const items = [];
    if ("" !== first) {
      let obj = { type: null, label: null };
      obj[0] = lastErrored.LABEL;
      obj[1] = tmp;
      items.push(obj);
    }
    if (null == autocompleteResults) {
      if (!lastErrored) {
        const push = items.push;
        const _Array = Array;
        const array = new Array(4);
        obj = { type: null };
        obj[0] = lastErrored.CHOICE_LOADING;
        const items1 = [];
        HermesBuiltin.arraySpread(array.fill(obj), 0);
        HermesBuiltin.apply(items1, items);
      }
      return items;
    }
    if (null != autocompleteResults) {
      const push2 = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(arr2.map((choice) => ({ type: constants.CHOICE, choice })), 0);
      HermesBuiltin.apply(items2, items);
    }
  }, items2);
  let tmp12Result = 0 === memo.length && !lastErrored;
  const items3 = [channel, option.name, activeCommand, optionValues, first];
  const effect = obj.useEffect(() => {
    let obj = { command: activeCommand, optionValues, context: null };
    obj = { channel, guild: autocompleteResults.getGuild(channel.guild_id), autocomplete: obj };
    obj = { name: option.name, query: first };
    obj[2] = obj;
    closure_1_11(obj);
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items3);
  const items4 = [onChoiceSelect, memo];
  const items5 = [onChoiceSelect, first];
  const callback = obj.useCallback((item) => memo(closure_1_13, { item: item.item, index: item.index, onChoiceSelect, choices: memo }), items4);
  const callback1 = obj.useCallback(() => {
    if ("" !== first) {
      if (onChoiceSelect != null) {
        const obj = { name: null, value: null, displayName: null };
        obj[0] = tmp;
        obj[1] = tmp;
        obj[2] = tmp;
        tmp2(obj);
      }
      onChoiceSelect(channel[13]).hideActionSheet();
      const obj2 = onChoiceSelect(channel[13]);
    }
  }, items5);
  obj = { option, onDismiss: onDismiss.onDismissAutocompleteSheet, children: null };
  obj = { placeholder: null, onChange: null, autoFocus: true, returnKeyType: "done", onSubmitEditing: null };
  const intl = tmp4(tmp5[16]).intl;
  obj[0] = intl.string(option(channel[16]).t.Wuie9L);
  obj[1] = tmp[1];
  obj[4] = callback1;
  const items6 = [memo(option(channel[15]).AppLauncherListSearchBar, obj), , , ];
  if (tmp12Result) {
    tmp12Result = tmp12(tmp4(tmp5[15]).AppLauncherListEmptyState, {});
  }
  items6[1] = tmp12Result;
  obj1 = {
    ref,
    keyExtractor(type) {
      let str = "placeholder";
      if (type.type === lastErrored.CHOICE) {
        str = type.choice.name;
      }
      return "" + str + "_" + arg1;
    },
    data: memo,
    renderItem: callback,
    scrollEnabled: true
  };
  items6[2] = memo(option(channel[15]).AppLauncherList, obj1);
  if (lastErrored) {
    lastErrored = tmp12(AutocompleteFailedEmptyState, {});
  }
  items6[3] = lastErrored;
  obj[2] = items6;
  return closure_10(option(channel[14]).AppLauncherCommandOptionActionSheet, obj);
};