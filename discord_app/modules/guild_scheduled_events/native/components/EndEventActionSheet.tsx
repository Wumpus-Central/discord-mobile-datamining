// === Module 12410: EndEventActionSheet ===

// Module 12410 (EndEventActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EXPLICIT_END_EVENT_SHEET_KEY as closure_4 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: null, subtitle: null, cancelButtonContainer: null, confirmButtonContainer: null };
createCacheKey = { fontSize: 24, fontFamily: require("ME").Fonts.PRIMARY_BOLD, textAlign: "center", color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginTop: 8, textAlign: "center" };
createCacheKey[3] = { marginTop: 24, alignSelf: "stretch" };
createCacheKey[4] = { marginTop: 8, alignSelf: "stretch" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/EndEventActionSheet.tsx");

export default function EndEventActionSheet(channel) {
  channel = channel.channel;
  let activeEvent;
  const tmp = callback3();
  let obj = channel(8891);
  activeEvent = obj.useActiveEvent(channel.id);
  if (null == activeEvent) {
    return null;
  } else {
    function handleClose() {
      activeEvent(closure_1_2[8]).hideActionSheet(closure_1_4);
      const obj = activeEvent(closure_1_2[8]);
      channel(closure_1_2[9]).handleDisconnect(channel);
    }
    obj = { children: null };
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, accessibilityRole: "header", children: null };
    obj1[0] = tmp.title;
    const intl = tmp2(1236).intl;
    obj1[2] = intl.string(tmp2(1236).t["4Ao8LC"]);
    const items = [callback(tmp2(1297).LegacyText, obj1), , , ];
    let obj2 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj2[0] = tmp.subtitle;
    const intl2 = tmp2(1236).intl;
    obj2[3] = intl2.string(tmp2(1236).t["0I0B8f"]);
    items[1] = callback(tmp2(4734).Text, obj2);
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.cancelButtonContainer;
    const obj4 = { text: null, grow: true, onPress: null };
    const intl3 = tmp2(1236).intl;
    obj4[0] = intl3.string(tmp2(1236).t.P60OAX);
    obj4[2] = handleClose;
    obj3[1] = callback(tmp2(4745).Button, obj4);
    items[2] = callback(View, obj3);
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.confirmButtonContainer;
    const obj6 = { text: null, variant: "destructive", grow: true, onPress: null };
    const intl4 = tmp2(1236).intl;
    obj6[0] = intl4.string(tmp2(1236).t.mjB9pd);
    obj6[3] = function onPress() {
      if (null != activeEvent) {
        activeEvent(closure_1_2[15]).endEvent(tmp.id, tmp.guild_id);
        const obj = activeEvent(closure_1_2[15]);
        activeEvent(closure_1_2[8]).hideActionSheet(closure_1_4);
        const obj2 = activeEvent(closure_1_2[8]);
        channel(closure_1_2[9]).handleDisconnect(channel);
        const obj3 = channel(closure_1_2[9]);
      }
    };
    obj5[1] = callback(tmp2(4745).Button, obj6);
    items[3] = callback(View, obj5);
    obj[1] = items;
    obj[0] = callback2(View, obj);
    return callback(activeEvent(8081), obj);
  }
};