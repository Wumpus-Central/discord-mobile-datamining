// discord_app/modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "set";
import { GuildScheduledEventUserResponses as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, buttonWrapper: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: require("Themes").space.PX_24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx");

export default function GuildEventRsvpPickerActionSheet(event) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  event = event.event;
  ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: _slicedToArray } = event);
  let first;
  let c5;
  let tmp = createCacheKey();
  const tmp4 = callback(first.useState(event(8946).ResponseOptions.SERIES), 2);
  first = tmp4[0];
  let obj = event(8946);
  const existingRsvp = obj.getExistingRsvp(event.id, null);
  let response;
  if (existingRsvp != null) {
    response = existingRsvp.response;
  }
  const tmp9 = response === constants.INTERESTED ? constants.UNINTERESTED : constants.INTERESTED;
  c5 = tmp9;
  if (tmp9 === constants.INTERESTED) {
    const intl2 = tmp2(1236).intl;
    let stringResult = intl2.string(tmp2(1236).t.WtORed);
  } else {
    const intl = tmp2(1236).intl;
    stringResult = intl.string(tmp2(1236).t["8MPCVr"]);
  }
  obj = { header: null, children: null };
  obj[0] = callback2(event(5396).BottomSheetTitleHeader, { title: stringResult });
  obj = { bottom: true, style: tmp.container, children: null };
  const obj1 = { defaultValue: first, onChange: tmp4[1], hasIcons: false, children: null };
  const responseOptions = event(8946).getResponseOptions();
  obj1[3] = responseOptions.map((value) => callback2(event(table[13]).TableRadioRow, { value: value.value, label: value.name }, value.value));
  const items = [callback2(event(7985).TableRadioGroup, obj1), ];
  const obj2 = { style: tmp.buttonWrapper, children: null };
  const obj3 = {
    onPress() {
      let tmp3 = null;
      if (first !== event(outer1_2[7]).ResponseOptions.SERIES) {
        tmp3 = closure_1;
      }
      event(outer1_2[15]).updateRsvp(event.id, tmp3, closure_2, c5);
      if (callback != null) {
        callback();
      }
      const tmp = event;
      const tmpResult = event(outer1_2[15]);
      outer1_1(outer1_2[16]).hideActionSheet();
    },
    text: null
  };
  const intl3 = tmp2(1236).intl;
  obj3[1] = intl3.string(event(1236).t.TyCVIq);
  obj2[1] = callback2(event(4714).Button, obj3);
  items[1] = callback2(c5, obj2);
  obj[2] = items;
  obj[1] = callback3(event(5328).SafeAreaPaddingView, obj);
  return callback2(event(5397).BottomSheet, obj);
};