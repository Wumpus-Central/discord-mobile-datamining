// discord_app/modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildScheduledEventModalActionCreators from "../../GuildScheduledEventModalActionCreators.tsx";
import GuildEventRsvpUtils from "../../../utils/GuildEventRsvpUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const constants = fn(1963).GuildScheduledEventUserResponses;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, buttonWrapper: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.buttonWrapper = { marginTop: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx",
);

export default function GuildEventRsvpPickerActionSheet(event) {
  event = event.event;
  ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: _slicedToArray } = event);
  let defaultValue;
  closure_5 = undefined;
  const tmp = closure_9();
  const tmp4 = _slicedToArray(defaultValue.useState(event(9706).ResponseOptions.SERIES), 2);
  defaultValue = tmp4[0];
  let obj = event(9706);
  const existingRsvp = obj.getExistingRsvp(event.id, null);
  let response;
  if (existingRsvp != null) {
    response = existingRsvp.response;
  }
  const tmp9 = response === constants.INTERESTED ? constants.UNINTERESTED : constants.INTERESTED;
  closure_5 = tmp9;
  if (tmp9 === constants.INTERESTED) {
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t.WtORed);
  } else {
    const intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t["8MPCVr"]);
  }
  obj = { header: closure_7(tmp2(7149).BottomSheetTitleHeader, { title: stringResult }), children: null };
  obj = { bottom: true, style: tmp.container, children: null };
  const obj1 = { defaultValue, onChange: tmp4[1], hasIcons: false, children: null };
  const responseOptions = event(9706).getResponseOptions();
  obj1.children = responseOptions.map((value) =>
    closure_1_7(event(dependencyMap[13]).TableRadioRow, { value: value.value, label: value.name }, value.value),
  );
  const items = [closure_7(event(5685).TableRadioGroup, obj1)];
  let obj2 = { style: tmp.buttonWrapper, children: null };
  const obj3 = {
    onPress() {
      let tmp3 = null;
      if (first !== GuildEventRsvpUtils.ResponseOptions.SERIES) {
        tmp3 = closure_1_1;
      }
      GuildScheduledEventModalActionCreators.updateRsvp(event.id, tmp3, dependencyMap, closure_5);
      if (_slicedToArray != null) {
        _slicedToArray();
      }
      const tmpResult = GuildScheduledEventModalActionCreators;
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    text: null,
  };
  const intl3 = tmp2(1114).intl;
  obj3.text = intl3.string(event(1114).t.TyCVIq);
  obj2.children = closure_7(event(4975).Button, obj3);
  items[1] = closure_7(closure_5, obj2);
  obj.children = items;
  obj.children = closure_8(event(7123).SafeAreaPaddingView, obj);
  return closure_7(event(7150).BottomSheet, obj);
}
