// discord_app/modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet.tsx";
import _modDef8592 from "../../../../../_runtime/metro/08592__.js";
import _modDef8614 from "../../../../../_runtime/metro/08614__.js";
import _modDef8615 from "../../../../../_runtime/metro/08615__.js";
import _modDef8616 from "../../../../../_runtime/metro/08616__.js";
import _modDef8617 from "../../../../../_runtime/metro/08617__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import StageInstanceStore from "../../StageInstanceStore.tsx";

require = fn;
function handleDismiss() {
  ActionSheetActionCreatorsDefault.hideActionSheet(closure_5);
}
function BulletIcon(source) {
  const tmp = closure_9();
  let obj = { style: tmp.headerBulletIconContainer, children: null };
  obj = { source: source.source, size: native.Icon.Sizes.MEDIUM, style: tmp.headerBulletIconComponent };
  obj.children = React5(native.Icon, obj);
  return React5(View, obj);
}
const View = fn(17).View;
let closure_5 = fn(5414).STAGE_AUDIENCE_NOTICE_SHEET_KEY;
const constants = fn(1963).GuildScheduledEventPrivacyLevel;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  container: { padding: 16 },
  header: { alignItems: "center", paddingVertical: 16 },
  headerImage: {},
  headerTitle: { marginTop: 16, marginBottom: 8 },
  headerBulletIconContainer: null,
  headerBulletIconComponent: null,
  headerBulletList: null,
  headerBullet: null,
  startButton: null,
};
let size = {
  alignItems: "center",
  justifyContent: "center",
  height: 40,
  width: 40,
  borderRadius: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
createStyles.headerBulletIconContainer = size;
createStyles = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.headerBulletIconComponent = createStyles;
createStyles.headerBulletList = { flexDirection: "column", alignItems: "flex-start" };
createStyles.headerBullet = { lineHeight: 20 };
createStyles.startButton = { marginTop: 0 };
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx",
);

export default function StageAudienceNotificationSheet(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_9();
  let obj = channelId(504);
  const items = [StageInstanceStore];
  const stateFromStores = obj.useStateFromStores(items, () => StageInstanceStore.getStageInstanceByChannel(channelId));
  let privacy_level;
  if (stateFromStores != null) {
    privacy_level = stateFromStores.privacy_level;
  }
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const obj1 = { source: null, style: null };
  const tmp8 = ScrollHandlingActionSheetDefault;
  obj1.source = _modDef8592;
  obj1.style = tmp.headerImage;
  const items1 = [closure_7(FastImageDefault, obj1), ,];
  const obj2 = {
    style: tmp.headerTitle,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp2(1114).intl;
  obj2.children = intl.string(channelId(1114).t.UVuXCs);
  items1[1] = closure_7(channelId(4556).Text, obj2);
  const obj3 = { style: tmp.headerBulletList, children: null };
  const obj4 = { leading: null, label: null };
  obj4.leading = closure_7(BulletIcon, { source: _modDef8614 });
  const obj6 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp2(1114).intl;
  obj6.children = intl2.string(channelId(1114).t.sBDfo6);
  obj4.label = closure_7(channelId(4556).Text, obj6);
  const items2 = [closure_7(channelId(8593).FormRow, obj4), , ,];
  const obj7 = { leading: null, label: null };
  const obj5 = { source: _modDef8614 };
  obj7.leading = closure_7(BulletIcon, { source: _modDef8615 });
  const obj9 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl3 = tmp2(1114).intl;
  obj9.children = intl3.string(channelId(1114).t.x58YtH);
  obj7.label = closure_7(channelId(4556).Text, obj9);
  items2[1] = closure_7(channelId(8593).FormRow, obj7);
  const obj10 = { leading: null, label: null };
  const obj8 = { source: _modDef8615 };
  obj10.leading = closure_7(BulletIcon, { source: _modDef8616 });
  const obj12 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl4 = tmp2(1114).intl;
  obj12.children = intl4.string(channelId(1114).t.XtVqla);
  obj10.label = closure_7(channelId(4556).Text, obj12);
  items2[2] = closure_7(channelId(8593).FormRow, obj10);
  let tmp6Result = null;
  if (privacy_level === constants.PUBLIC) {
    const obj13 = { leading: null, label: null };
    const obj14 = { source: _modDef8617 };
    obj13.leading = closure_7(BulletIcon, obj14);
    const obj15 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
    const intl6 = tmp2(1114).intl;
    obj15.children = intl6.string(tmp2(1114).t.nDsbJg);
    obj13.label = closure_7(tmp2(4556).Text, obj15);
    tmp6Result = closure_7(tmp2(8593).FormRow, obj13);
  }
  const obj16 = { children: null };
  items2[3] = tmp6Result;
  obj3.children = items2;
  items1[2] = closure_8(View, obj3);
  obj.children = items1;
  const items3 = [closure_8(View, obj)];
  const obj17 = { style: tmp.startButton, children: null };
  const obj18 = { text: null, onPress: null };
  const intl5 = tmp2(1114).intl;
  obj18.text = intl5.string(channelId(1114).t.obLqZ8);
  obj18.onPress = handleDismiss;
  obj17.children = closure_7(channelId(4975).Button, obj18);
  items3[1] = closure_7(View, obj17);
  obj.children = items3;
  obj16.children = closure_8(View, obj);
  return closure_7(tmp8, obj16);
}
