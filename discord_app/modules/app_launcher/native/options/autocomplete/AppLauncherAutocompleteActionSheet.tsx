// discord_app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx
import _modDef38 from "../../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import _mod4745 from "module_4745" /* 4745 */;
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import executeCommandDefault from "../../../../application_commands/executeCommand.tsx";
import _modDef12168 from "../../../../../../_runtime/metro/12168__.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ApplicationCommandAutocompleteStore from "../../../../application_commands/ApplicationCommandAutocompleteStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import apply from "../../../../../../_runtime/metro/00012__.js";

require = fn;
function Item(arg0) {
  ({ item, index: require, choices: importDefault, onChoiceSelect: dependencyMap } = arg0);
  closure_3 = undefined;
  noop = undefined;
  function ListItem(arg0) {
    ({ label, onPress } = arg0);
    return React7(TableRow.TableRow, {
      label,
      onPress,
      start: 0 === closure_1_0,
      end: closure_1_0 === length.length - 1,
    });
  }
  let tmp4 = item.type === AutoCompleteResultTypes.CHOICE;
  if (!tmp4) {
    tmp4 = item.type === tmp3.CHOICE_LOADING;
  }
  if (!tmp4) {
    tmp4 = item.type === tmp3.LABEL;
  }
  _modDef38(tmp4, "Invalid autocomplete result type");
  closure_3 = closure_12();
  noop = noop.useMemo(() => 100 * Math.random() + 50, []);
  const match = _mod4745.match(item);
  let obj = { type: tmp3.CHOICE };
  obj = { type: tmp3.LABEL };
  const withResult = match.with(obj, (children) => {
    const choice = children;
    let obj = {
      label: null,
      onPress() {
        if (dependencyMap != null) {
          tmp(choice.choice);
        }
        ActionSheetActionCreatorsDefault.hideActionSheet();
      },
    };
    obj = {
      lineClamp: 1,
      variant: "text-md/normal",
      color: "mobile-text-heading-primary",
      children: children.choice.displayName,
    };
    obj.label = closure_1_9(Text_Text.Text, obj);
    return closure_1_9(ListItem, obj);
  });
  const obj1 = { type: AutoCompleteResultTypes.CHOICE_LOADING };
  const withResult1 = match
    .with(obj, (children) => {
      const choice = children;
      let obj = {
        label: null,
        onPress() {
          if (dependencyMap != null) {
            tmp(choice.choice);
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      };
      obj = {
        lineClamp: 1,
        variant: "text-md/normal",
        color: "mobile-text-heading-primary",
        children: children.choice.displayName,
      };
      obj.label = closure_1_9(Text_Text.Text, obj);
      return closure_1_9(ListItem, obj);
    })
    .with(obj, (label) => {
      closure_0 = label;
      let obj = {
        label: null,
        onPress() {
          if (dependencyMap != null) {
            const obj = { name: null, value: null, displayName: null };
            ({ label: obj.name, label: obj.value, label: obj.displayName } = closure_0);
            tmp(obj);
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      };
      obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
      const items = ['"', label.label, '"'];
      obj.children = items;
      obj.label = closure_1_10(Text_Text.Text, obj);
      return closure_1_9(ListItem, obj);
    });
  return match
    .with(obj, (children) => {
      const choice = children;
      let obj = {
        label: null,
        onPress() {
          if (dependencyMap != null) {
            tmp(choice.choice);
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      };
      obj = {
        lineClamp: 1,
        variant: "text-md/normal",
        color: "mobile-text-heading-primary",
        children: children.choice.displayName,
      };
      obj.label = closure_1_9(Text_Text.Text, obj);
      return closure_1_9(ListItem, obj);
    })
    .with(obj, (label) => {
      closure_0 = label;
      let obj = {
        label: null,
        onPress() {
          if (dependencyMap != null) {
            const obj = { name: null, value: null, displayName: null };
            ({ label: obj.name, label: obj.value, label: obj.displayName } = closure_0);
            tmp(obj);
          }
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      };
      obj = { lineClamp: 1, variant: "text-md/normal", color: "mobile-text-heading-primary", children: null };
      const items = ['"', label.label, '"'];
      obj.children = items;
      obj.label = closure_1_10(Text_Text.Text, obj);
      return closure_1_9(ListItem, obj);
    })
    .with({ type: AutoCompleteResultTypes.CHOICE_LOADING }, () => {
      let obj = { label: null };
      obj = { style: closure_3.commandChoiceLoadingContainer, children: null };
      obj = { style: null };
      const items = [closure_3.commandChoiceLoadingItem, { width }];
      obj.style = items;
      obj.children = React7(View, obj);
      obj.label = React7(View, obj);
      return React7(ListItem, obj);
    })
    .exhaustive();
}
function AutocompleteFailedEmptyState() {
  const obj = { style: closure_12().emptyState, lightSource: _modDef12168, darkSource: _modDef12168, title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.rTAbPn);
  return React7(native.EmptyState, obj);
}
const View = fn(17).View;
fn(1074).AutoCompleteResultTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const executeCommand = apply.debounce(executeCommandDefault, fn(4999).AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, {
  leading: true,
  trailing: true,
});
const createStyles = fn(4560);
let obj = {
  commandChoiceLoadingContainer: { flex: 1, justifyContent: "center" },
  commandChoiceLoadingItem: null,
  emptyState: null,
};
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: 16,
  borderRadius: nativeDefault.radii.lg,
  alignSelf: "flex-start",
};
obj.commandChoiceLoadingItem = obj;
obj.emptyState = { backgroundColor: "transparent" };
let closure_12 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx",
);

export default function AppLauncherAutocompleteActionSheet(onDismiss) {
  const option = onDismiss.option;
  ({ initChoice, onChoiceSelect } = onDismiss);
  const channel = onDismiss.channel;
  const activeCommand = onDismiss.activeCommand;
  const optionValues = onDismiss.optionValues;
  let query;
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
  query = tmp[0];
  ref = obj.useRef(null);
  let obj1 = option(channel[12]);
  let items = [ref];
  let items1 = [channel.id, option.name, query];
  const stateFromStoresObject = obj1.useStateFromStoresObject(
    items,
    () => ({
      autocompleteResults: ApplicationCommandAutocompleteStore.getAutocompleteChoices(channel.id, option.name, first),
      lastErrored: ApplicationCommandAutocompleteStore.getLastErrored(channel.id),
    }),
    items1,
  );
  autocompleteResults = stateFromStoresObject.autocompleteResults;
  lastErrored = stateFromStoresObject.lastErrored;
  let items2 = [query, autocompleteResults, lastErrored];
  memo = obj.useMemo(() => {
    const items = [];
    if ("" !== first) {
      let obj = { type: AutoCompleteResultTypes.LABEL, label: tmp };
      items.push(obj);
    }
    if (null == autocompleteResults) {
      if (!lastErrored) {
        const push = items.push;
        const _Array = Array;
        const array = new Array(4);
        obj = { type: AutoCompleteResultTypes.CHOICE_LOADING };
        const items1 = [];
        HermesBuiltin.arraySpread(array.fill(obj), 0);
        HermesBuiltin.apply(items1, items);
      }
      return items;
    }
    if (null != autocompleteResults) {
      const push2 = items.push;
      const items2 = [];
      HermesBuiltin.arraySpread(
        arr2.map((choice) => ({ type: constants.CHOICE, choice })),
        0,
      );
      HermesBuiltin.apply(items2, items);
    }
  }, items2);
  let tmp12Result = 0 === memo.length && !lastErrored;
  const items3 = [channel, option.name, activeCommand, optionValues, query];
  const effect = obj.useEffect(() => {
    let obj = { command: activeCommand, optionValues, context: null };
    obj = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: null };
    obj = { name: option.name, query };
    obj.autocomplete = obj;
    obj.context = obj;
    executeCommand(obj);
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items3);
  const items4 = [onChoiceSelect, memo];
  const items5 = [onChoiceSelect, query];
  const callback = obj.useCallback(
    (item) => React7(Item, { item: item.item, index: item.index, onChoiceSelect, choices: memo }),
    items4,
  );
  const callback1 = obj.useCallback(() => {
    if ("" !== first) {
      if (onChoiceSelect != null) {
        const obj = { name: tmp, value: tmp, displayName: tmp };
        tmp2(obj);
      }
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items5);
  obj = { option, onDismiss: onDismiss.onDismissAutocompleteSheet, children: null };
  obj = { placeholder: null, onChange: null, autoFocus: true, returnKeyType: "done", onSubmitEditing: null };
  const intl = tmp4(tmp5[16]).intl;
  obj.placeholder = intl.string(option(channel[16]).t.Wuie9L);
  obj.onChange = tmp[1];
  obj.onSubmitEditing = callback1;
  const items6 = [memo(option(channel[15]).AppLauncherListSearchBar, obj), , ,];
  if (tmp12Result) {
    tmp12Result = tmp12(tmp4(tmp5[15]).AppLauncherListEmptyState, {});
  }
  items6[1] = tmp12Result;
  obj1 = {
    ref,
    keyExtractor(type, arg1) {
      let str = "placeholder";
      if (type.type === lastErrored.CHOICE) {
        str = type.choice.name;
      }
      return "" + str + "_" + arg1;
    },
    data: memo,
    renderItem: callback,
    scrollEnabled: true,
  };
  items6[2] = memo(option(channel[15]).AppLauncherList, obj1);
  if (lastErrored) {
    lastErrored = tmp12(AutocompleteFailedEmptyState, {});
  }
  items6[3] = lastErrored;
  obj.children = items6;
  return closure_10(option(channel[14]).AppLauncherCommandOptionActionSheet, obj);
}
