// discord_app/modules/stage_channels/native/components/EndStageActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { EXPLICIT_END_STAGE_SHEET_KEY as closure_4 } from "MAX_STAGE_TOPIC_LENGTH";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: null, subtitle: null, cancelButton: null, confirmButton: null };
createCacheKey = { fontSize: 24, fontFamily: require("ME").Fonts.PRIMARY_BOLD, textAlign: "center", color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginTop: 8, textAlign: "center" };
createCacheKey[3] = { marginTop: 24, alignSelf: "stretch" };
createCacheKey[4] = { marginTop: 8, alignSelf: "stretch" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("MAX_STAGE_TOPIC_LENGTH").fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default function EndStageActionSheet(channel) {
  channel = channel.channel;
  const tmp = createCacheKey();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = channel(1236).intl;
  obj[2] = intl.string(channel(1236).t.pADdJu);
  const items = [callback(channel(1297).LegacyText, obj), , , ];
  const obj1 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = channel(1236).intl;
  obj1[3] = intl2.string(channel(1236).t.mT7jwN);
  items[1] = callback(channel(4281).Text, obj1);
  let obj2 = { style: tmp.cancelButton, children: null };
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl3 = channel(1236).intl;
  obj3[1] = intl3.string(channel(1236).t.xTwqz2);
  obj3[2] = function handleClose() {
    outer1_1(outer1_2[7]).hideActionSheet(outer1_4);
    const obj = outer1_1(outer1_2[7]);
    channel(outer1_2[8]).handleDisconnect(channel);
  };
  obj2[1] = callback(channel(4695).Button, obj3);
  items[2] = callback(View, obj2);
  const obj4 = { style: tmp.confirmButton, children: null };
  const obj5 = { variant: "destructive", text: null, onPress: null };
  const intl4 = channel(1236).intl;
  obj5[1] = intl4.string(channel(1236).t.wnWqGg);
  obj5[2] = function onPress() {
    channel(outer1_2[14]).endStage(channel);
    const obj = channel(outer1_2[14]);
    outer1_1(outer1_2[7]).hideActionSheet(outer1_4);
    const obj2 = outer1_1(outer1_2[7]);
    channel(outer1_2[8]).handleDisconnect(channel);
  };
  obj4[1] = callback(channel(4695).Button, obj5);
  items[3] = callback(View, obj4);
  obj[1] = items;
  obj[0] = callback2(View, obj);
  return callback(importDefault(7775), obj);
};