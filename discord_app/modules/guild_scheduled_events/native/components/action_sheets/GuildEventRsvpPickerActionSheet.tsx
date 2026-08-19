// === Module 8917: GuildEventRsvpPickerActionSheet ===

// Module 8917 (GuildEventRsvpPickerActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { GuildScheduledEventUserResponses as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_24 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/action_sheets/GuildEventRsvpPickerActionSheet.tsx");

export default function GuildEventRsvpPickerActionSheet(event) {
  event = event.event;
  ({ recurrenceId: importDefault, guildId: dependencyMap, onRsvp: closure_3 } = event);
  let first;
  closure_5 = undefined;
  const tmp = callback4();
  const tmp4 = callback(first.useState(event(8789).ResponseOptions.SERIES), 2);
  first = tmp4[0];
  let obj = event(8789);
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
  { header: callback2(tmp2(6949).BottomSheetTitleHeader, { title: stringResult }), children: null };
  obj = { bottom: true, style: tmp.container, children: null };
  obj1 = { defaultValue: first, onChange: tmp4[1], hasIcons: false, children: null };
  const responseOptions = event(8789).getResponseOptions();
  obj1[3] = responseOptions.map((item, index) => callback2(event(table[13]).TableRadioRow, { value: item.value, label: item.name }, item.value));
  const items = [callback2(event(8101).TableRadioGroup, obj1), ];
  let obj2 = { style: tmp.buttonWrapper, children: null };
  const obj3 = {
    onPress() {
      let tmp3 = null;
      if (first !== event(dependencyMap[7]).ResponseOptions.SERIES) {
        tmp3 = closure_1;
      }
      event(dependencyMap[15]).updateRsvp(event.id, tmp3, closure_2, closure_5);
      if (callback != null) {
        callback();
      }
      const tmpResult = event(dependencyMap[15]);
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    },
    text: null
  };
  const intl3 = tmp2(1236).intl;
  obj3[1] = intl3.string(event(1236).t.TyCVIq);
  obj2[1] = callback2(event(4745).Button, obj3);
  items[1] = callback2(closure_5, obj2);
  obj[2] = items;
  obj[1] = callback3(event(6803).SafeAreaPaddingView, obj);
  return callback2(event(6950).BottomSheet, obj);
};