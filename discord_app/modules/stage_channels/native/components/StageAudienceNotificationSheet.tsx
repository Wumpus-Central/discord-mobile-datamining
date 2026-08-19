// === Module 8080: handleDismiss ===

// Module 8080 (handleDismiss)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import preloadDefault from "preload" /* 5449 */;
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet" /* 8081 */;
import registerAssetDefault from "registerAsset" /* 8082 */;
import registerAssetDefault2 from "registerAsset" /* 8117 */;
import registerAssetDefault3 from "registerAsset" /* 8118 */;
import registerAssetDefault4 from "registerAsset" /* 8119 */;
import registerAssetDefault5 from "registerAsset" /* 8120 */;
import { View } from "get ActivityIndicator" /* 17 */;
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import { STAGE_AUDIENCE_NOTICE_SHEET_KEY as closure_5 } from "MAX_STAGE_TOPIC_LENGTH" /* 4978 */;
import { GuildScheduledEventPrivacyLevel as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function handleDismiss() {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(closure_5);
}
function BulletIcon(source) {
  const tmp = callback2();
  const obj = { source: source.source, size: Button.Icon.Sizes.MEDIUM, style: tmp.headerBulletIconComponent };
  obj[1] = callback(Button.Icon, obj);
  return callback(View, obj);
}
noopAll;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const createCacheKey = { alignItems: "center", justifyContent: "center", height: 40, width: 40, borderRadius: 20, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[6] = { flexDirection: "column", alignItems: "flex-start" };
createCacheKey[7] = { lineHeight: 20 };
createCacheKey[8] = { marginTop: 0 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx");

export default function StageAudienceNotificationSheet(channelId) {
  channelId = channelId.channelId;
  const tmp = callback2();
  let obj = channelId(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getStageInstanceByChannel(channelId));
  let privacy_level;
  if (stateFromStores != null) {
    privacy_level = stateFromStores.privacy_level;
  }
  obj = { style: tmp.header, children: null };
  obj1 = { source: null, style: null };
  const tmp8 = ScrollHandlingActionSheetDefault;
  obj1[0] = registerAssetDefault;
  obj1[1] = tmp.headerImage;
  const items1 = [callback(preloadDefault, obj1), , ];
  const obj2 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1236).intl;
  obj2[4] = intl.string(channelId(1236).t.UVuXCs);
  items1[1] = callback(channelId(4734).Text, obj2);
  const obj3 = { style: tmp.headerBulletList, children: null };
  const obj4 = { leading: null, label: null };
  obj4[0] = callback(BulletIcon, { source: registerAssetDefault2 });
  const obj6 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp2(1236).intl;
  obj6[3] = intl2.string(channelId(1236).t.sBDfo6);
  obj4[1] = callback(channelId(4734).Text, obj6);
  const items2 = [callback(channelId(8083).FormRow, obj4), , , ];
  const obj7 = { leading: null, label: null };
  obj7[0] = callback(BulletIcon, { source: registerAssetDefault3 });
  const obj9 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl3 = tmp2(1236).intl;
  obj9[3] = intl3.string(channelId(1236).t.x58YtH);
  obj7[1] = callback(channelId(4734).Text, obj9);
  items2[1] = callback(channelId(8083).FormRow, obj7);
  const obj10 = { leading: null, label: null };
  obj10[0] = callback(BulletIcon, { source: registerAssetDefault4 });
  const obj12 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl4 = tmp2(1236).intl;
  obj12[3] = intl4.string(channelId(1236).t.XtVqla);
  obj10[1] = callback(channelId(4734).Text, obj12);
  items2[2] = callback(channelId(8083).FormRow, obj10);
  let tmp6Result = null;
  if (privacy_level === constants.PUBLIC) {
    const obj13 = { leading: null, label: null };
    const obj14 = { source: null };
    obj14[0] = registerAssetDefault5;
    obj13[0] = callback(BulletIcon, obj14);
    const obj15 = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj15[0] = tmp.headerBullet;
    const intl6 = tmp2(1236).intl;
    obj15[3] = intl6.string(tmp2(1236).t.nDsbJg);
    obj13[1] = callback(tmp2(4734).Text, obj15);
    tmp6Result = callback(tmp2(8083).FormRow, obj13);
  }
  const obj16 = { children: null };
  items2[3] = tmp6Result;
  obj3[1] = items2;
  items1[2] = callback(View, obj3);
  obj[1] = items1;
  const items3 = [callback(View, obj), ];
  const obj17 = { style: tmp.startButton, children: null };
  const obj18 = { text: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj18[0] = intl5.string(channelId(1236).t.obLqZ8);
  obj18[1] = handleDismiss;
  obj17[1] = callback(channelId(4745).Button, obj18);
  items3[1] = callback(View, obj17);
  obj[1] = items3;
  obj16[0] = callback(View, obj);
  return callback(tmp8, obj16);
};