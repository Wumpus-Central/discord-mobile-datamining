// === Module 13023: EndStageActionSheet ===

// Module 13023 (EndStageActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet" /* 8758 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { EXPLICIT_END_STAGE_SHEET_KEY as closure_4 } from "MAX_STAGE_TOPIC_LENGTH" /* 5367 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: null, subtitle: null, cancelButton: null, confirmButton: null };
createCacheKey = { fontSize: 24, fontFamily: require("ME").Fonts.PRIMARY_BOLD, textAlign: "center", color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginTop: 8, textAlign: "center" };
createCacheKey[3] = { marginTop: 24, alignSelf: "stretch" };
createCacheKey[4] = { marginTop: 8, alignSelf: "stretch" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default function EndStageActionSheet(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = channel(1233).intl;
  obj[2] = intl.string(channel(1233).t.pADdJu);
  const items = [callback(channel(1296).LegacyText, obj), , , ];
  obj1 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = channel(1233).intl;
  obj1[3] = intl2.string(channel(1233).t.mT7jwN);
  items[1] = callback(channel(4474).Text, obj1);
  let obj2 = { style: tmp.cancelButton, children: null };
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl3 = channel(1233).intl;
  obj3[1] = intl3.string(channel(1233).t.xTwqz2);
  obj3[2] = function handleClose() {
    closure_1_1(closure_1_2[7]).hideActionSheet(closure_1_4);
    const obj = closure_1_1(closure_1_2[7]);
    channel(closure_1_2[8]).handleDisconnect(channel);
  };
  obj2[1] = callback(channel(4929).Button, obj3);
  items[2] = callback(View, obj2);
  const obj4 = { style: tmp.confirmButton, children: null };
  const obj5 = { variant: "destructive", text: null, onPress: null };
  const intl4 = channel(1233).intl;
  obj5[1] = intl4.string(channel(1233).t.wnWqGg);
  obj5[2] = function onPress() {
    channel(closure_1_2[14]).endStage(channel);
    const obj = channel(closure_1_2[14]);
    closure_1_1(closure_1_2[7]).hideActionSheet(closure_1_4);
    const obj2 = closure_1_1(closure_1_2[7]);
    channel(closure_1_2[8]).handleDisconnect(channel);
  };
  obj4[1] = callback(channel(4929).Button, obj5);
  items[3] = callback(View, obj4);
  obj[1] = items;
  obj[0] = callback2(View, obj);
  return callback(ScrollHandlingActionSheetDefault, obj);
};