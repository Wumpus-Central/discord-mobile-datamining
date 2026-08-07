// discord_app/modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx
import "registerAsset";
import { View } from "registerAsset";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import { STAGE_AUDIENCE_NOTICE_SHEET_KEY as closure_5 } from "MAX_STAGE_TOPIC_LENGTH";
import { GuildScheduledEventPrivacyLevel as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/07906_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/07941_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/07942_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/07943_registerAsset.js";
import { preload } from "../../../../components_native/common/FastImage.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import { ScrollHandlingActionSheet } from "ScrollHandlingActionSheet.tsx";

let error;
let metroImportAll;
const require = arg1;
function handleDismiss() {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet(closure_5);
}
function BulletIcon(source) {
  const tmp = createCacheKey();
  let obj = { style: tmp.headerBulletIconContainer, children: null };
  obj = { source: source.source, size: null, style: null };
  obj[1] = Button.Icon.Sizes.MEDIUM;
  obj[2] = tmp.headerBulletIconComponent;
  obj[1] = callback(Button.Icon, obj);
  return callback(View, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: { padding: 16 }, header: { alignItems: "center", paddingVertical: 16 }, headerImage: {}, headerTitle: { marginTop: 16, marginBottom: 8 }, headerBulletIconContainer: null, headerBulletIconComponent: null, headerBulletList: null, headerBullet: null, startButton: null };
createCacheKey = { alignItems: "center", justifyContent: "center", height: 40, width: 40, borderRadius: 20, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[6] = { flexDirection: "column", alignItems: "flex-start" };
createCacheKey[7] = { lineHeight: 20 };
createCacheKey[8] = { marginTop: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("handleStageInstanceCreateOrUpdate").fileFinishedImporting("modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx");

export default function StageAudienceNotificationSheet(channelId) {
  channelId = channelId.channelId;
  const tmp = createCacheKey();
  let obj = channelId(589);
  const items = [handleStageInstanceCreateOrUpdate];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getStageInstanceByChannel(channelId));
  let privacy_level;
  if (stateFromStores != null) {
    privacy_level = stateFromStores.privacy_level;
  }
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const obj1 = { source: null, style: null };
  const tmp7 = importDefault;
  const tmp8 = ScrollHandlingActionSheet;
  obj1[0] = registerAsset;
  obj1[1] = tmp.headerImage;
  const items1 = [callback(preload, obj1), , ];
  const obj2 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1236).intl;
  obj2[4] = intl.string(channelId(1236).t.UVuXCs);
  items1[1] = callback(channelId(4298).Text, obj2);
  const obj3 = { style: tmp.headerBulletList, children: null };
  const obj4 = { leading: null, label: null };
  const obj5 = { source: null };
  obj5[0] = registerAsset;
  obj4[0] = callback(BulletIcon, obj5);
  const obj6 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp2(1236).intl;
  obj6[3] = intl2.string(channelId(1236).t.sBDfo6);
  obj4[1] = callback(channelId(4298).Text, obj6);
  const items2 = [callback(channelId(7907).FormRow, obj4), , , ];
  const obj7 = { leading: null, label: null };
  const obj8 = { source: null };
  obj8[0] = registerAsset;
  obj7[0] = callback(BulletIcon, obj8);
  const obj9 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl3 = tmp2(1236).intl;
  obj9[3] = intl3.string(channelId(1236).t.x58YtH);
  obj7[1] = callback(channelId(4298).Text, obj9);
  items2[1] = callback(channelId(7907).FormRow, obj7);
  const obj10 = { leading: null, label: null };
  const obj11 = { source: null };
  obj11[0] = registerAsset;
  obj10[0] = callback(BulletIcon, obj11);
  const obj12 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl4 = tmp2(1236).intl;
  obj12[3] = intl4.string(channelId(1236).t.XtVqla);
  obj10[1] = callback(channelId(4298).Text, obj12);
  items2[2] = callback(channelId(7907).FormRow, obj10);
  let tmp6Result = null;
  if (privacy_level === constants.PUBLIC) {
    const obj13 = { leading: null, label: null };
    const obj14 = { source: null };
    obj14[0] = tmp7(7944);
    obj13[0] = tmp6(BulletIcon, obj14);
    const obj15 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj15[0] = tmp.headerBullet;
    const intl6 = tmp2(1236).intl;
    obj15[3] = intl6.string(tmp2(1236).t.nDsbJg);
    obj13[1] = tmp6(tmp2(4298).Text, obj15);
    tmp6Result = tmp6(tmp2(7907).FormRow, obj13);
  }
  const obj16 = { children: null };
  items2[3] = tmp6Result;
  obj3[1] = items2;
  items1[2] = closure_8(View, obj3);
  obj[1] = items1;
  const items3 = [closure_8(View, obj), ];
  const obj17 = { style: tmp.startButton, children: null };
  const obj18 = { text: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj18[0] = intl5.string(channelId(1236).t.obLqZ8);
  obj18[1] = handleDismiss;
  obj17[1] = callback(channelId(4712).Button, obj18);
  items3[1] = callback(View, obj17);
  obj[1] = items3;
  obj16[0] = closure_8(View, obj);
  return callback(tmp8, obj16);
};