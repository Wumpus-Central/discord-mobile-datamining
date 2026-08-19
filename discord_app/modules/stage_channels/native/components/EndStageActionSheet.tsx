// discord_app/modules/stage_channels/native/components/EndStageActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { EXPLICIT_END_STAGE_SHEET_KEY as closure_4 } from "../../StageChannelsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { fontSize: 24, fontFamily: require("ME").Fonts.PRIMARY_BOLD, textAlign: "center", color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginTop: 8, textAlign: "center" };
createCacheKey[3] = { marginTop: 24, alignSelf: "stretch" };
createCacheKey[4] = { marginTop: 8, alignSelf: "stretch" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default function EndStageActionSheet(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = { style: tmp.title, accessibilityRole: "header", children: null };
  const intl = channel(1236).intl;
  obj[2] = intl.string(channel(1236).t.pADdJu);
  const items = [callback(channel(1297).LegacyText, obj), , , ];
  obj1 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = channel(1236).intl;
  obj1[3] = intl2.string(channel(1236).t.mT7jwN);
  items[1] = callback(channel(4734).Text, obj1);
  let obj2 = { style: tmp.cancelButton, children: null };
  const obj3 = { variant: "secondary", text: null, onPress: null };
  const intl3 = channel(1236).intl;
  obj3[1] = intl3.string(channel(1236).t.xTwqz2);
  obj3[2] = function handleClose() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(closure_1_4);
    channel(dependencyMap[8]).handleDisconnect(channel);
  };
  obj2[1] = callback(channel(4745).Button, obj3);
  items[2] = callback(View, obj2);
  const obj4 = { style: tmp.confirmButton, children: null };
  const obj5 = { variant: "destructive", text: null, onPress: null };
  const intl4 = channel(1236).intl;
  obj5[1] = intl4.string(channel(1236).t.wnWqGg);
  obj5[2] = function onPress() {
    channel(dependencyMap[14]).endStage(channel);
    const obj = channel(dependencyMap[14]);
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(closure_1_4);
    channel(dependencyMap[8]).handleDisconnect(channel);
  };
  obj4[1] = callback(channel(4745).Button, obj5);
  items[3] = callback(View, obj4);
  obj[1] = items;
  obj[0] = callback2(View, obj);
  return callback(ScrollHandlingActionSheetDefault, obj);
};