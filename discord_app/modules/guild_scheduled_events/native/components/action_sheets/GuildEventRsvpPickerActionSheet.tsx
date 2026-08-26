// === Module 9279: GuildEventRsvpPickerActionSheet ===

// Module 9279 (GuildEventRsvpPickerActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { GuildScheduledEventUserResponses as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, buttonWrapper: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginTop: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx");

export default function GuildEventRsvpPickerActionSheet(event) {
  event = event.event;
  ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: closure_3 } = event);
  let first;
  closure_5 = undefined;
  let tmp = callback4();
  const tmp4 = callback(first.useState(event(9161).ResponseOptions.SERIES), 2);
  first = tmp4[0];
  let obj = event(9161);
  const existingRsvp = obj.getExistingRsvp(event.id, null);
  let response;
  if (existingRsvp != null) {
    response = existingRsvp.response;
  }
  const tmp9 = response === constants.INTERESTED ? constants.UNINTERESTED : constants.INTERESTED;
  closure_5 = tmp9;
  if (tmp9 === constants.INTERESTED) {
    const intl2 = tmp2(1236).intl;
    let stringResult = intl2.string(tmp2(1236).t.WtORed);
  } else {
    const intl = tmp2(1236).intl;
    stringResult = intl.string(tmp2(1236).t["8MPCVr"]);
  }
  obj = { header: callback2(tmp2(5568).BottomSheetTitleHeader, { title: stringResult }), children: null };
  obj = { bottom: true, style: tmp.container, children: null };
  obj1 = { defaultValue: first, onChange: tmp4[1], hasIcons: false, children: null };
  const responseOptions = event(9161).getResponseOptions();
  obj1[3] = responseOptions.map((value) => callback2(event(table[13]).TableRadioRow, { value: value.value, label: value.name }, value.value));
  const items = [callback2(event(8203).TableRadioGroup, obj1), ];
  const obj2 = { style: tmp.buttonWrapper, children: null };
  const obj3 = {
    onPress() {
      let tmp3 = null;
      if (first !== event(closure_1_2[7]).ResponseOptions.SERIES) {
        tmp3 = closure_1;
      }
      event(closure_1_2[15]).updateRsvp(event.id, tmp3, closure_2, closure_5);
      if (callback != null) {
        callback();
      }
      const tmp = event;
      const tmpResult = event(closure_1_2[15]);
      closure_1_1(closure_1_2[16]).hideActionSheet();
    },
    text: null
  };
  const intl3 = tmp2(1236).intl;
  obj3[1] = intl3.string(event(1236).t.TyCVIq);
  obj2[1] = callback2(event(4879).Button, obj3);
  items[1] = callback2(closure_5, obj2);
  obj[2] = items;
  obj[1] = callback3(event(5500).SafeAreaPaddingView, obj);
  return callback2(event(5569).BottomSheet, obj);
};