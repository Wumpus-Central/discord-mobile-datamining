// discord_app/modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet.tsx";
import _modDef8718 from "../../../../../_runtime/metro/08718__.js";
import _modDef8740 from "../../../../../_runtime/metro/08740__.js";
import _modDef8741 from "../../../../../_runtime/metro/08741__.js";
import _modDef8742 from "../../../../../_runtime/metro/08742__.js";
import _modDef8743 from "../../../../../_runtime/metro/08743__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import StageInstanceStore from "../../StageInstanceStore.tsx";

require = fn;
function handleDismiss() {
  ActionSheetActionCreatorsDefault.hideActionSheet(closure_5);
}
function BulletIcon(source) {
  const tmp = closure_9();
  const obj = {
    style: tmp.headerBulletIconContainer,
    children: React5(native.Icon, {
      source: source.source,
      size: native.Icon.Sizes.MEDIUM,
      style: tmp.headerBulletIconComponent,
    }),
  };
  return React5(View, obj);
}
const View = fn(17).View;
let closure_5 = fn(5499).STAGE_AUDIENCE_NOTICE_SHEET_KEY;
const constants = fn(1964).GuildScheduledEventPrivacyLevel;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
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
obj2.headerBulletIconContainer = size;
obj2.headerBulletIconComponent = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.headerBulletList = { flexDirection: "column", alignItems: "flex-start" };
obj2.headerBullet = { lineHeight: 20 };
obj2.startButton = { marginTop: 0 };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/stage_channels/native/components/StageAudienceNotificationSheet.tsx",
);

export default function StageAudienceNotificationSheet(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_9();
  const items = [StageInstanceStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () =>
    StageInstanceStore.getStageInstanceByChannel(channelId),
  );
  let privacy_level;
  if (stateFromStores != null) {
    privacy_level = stateFromStores.privacy_level;
  }
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.header, children: null };
  const obj = channelId(504);
  const obj4 = { source: null, style: null };
  const tmp8 = ScrollHandlingActionSheetDefault;
  obj4.source = _modDef8718;
  obj4.style = tmp.headerImage;
  const items1 = [closure_7(FastImageDefault, obj4), ,];
  const obj5 = {
    style: tmp.headerTitle,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp2(1115).intl;
  obj5.children = intl.string(channelId(1115).t.UVuXCs);
  items1[1] = closure_7(channelId(4635).Text, obj5);
  const obj6 = { style: tmp.headerBulletList, children: null };
  const obj7 = { leading: null, label: null };
  obj7.leading = closure_7(BulletIcon, { source: _modDef8740 });
  const obj9 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = tmp2(1115).intl;
  obj9.children = intl2.string(channelId(1115).t.sBDfo6);
  obj7.label = closure_7(channelId(4635).Text, obj9);
  const items2 = [closure_7(channelId(8719).FormRow, obj7), , ,];
  const obj10 = { leading: null, label: null };
  const obj8 = { source: _modDef8740 };
  obj10.leading = closure_7(BulletIcon, { source: _modDef8741 });
  const obj12 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl3 = tmp2(1115).intl;
  obj12.children = intl3.string(channelId(1115).t.x58YtH);
  obj10.label = closure_7(channelId(4635).Text, obj12);
  items2[1] = closure_7(channelId(8719).FormRow, obj10);
  const obj13 = { leading: null, label: null };
  const obj11 = { source: _modDef8741 };
  obj13.leading = closure_7(BulletIcon, { source: _modDef8742 });
  const obj15 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
  const intl4 = tmp2(1115).intl;
  obj15.children = intl4.string(channelId(1115).t.XtVqla);
  obj13.label = closure_7(channelId(4635).Text, obj15);
  items2[2] = closure_7(channelId(8719).FormRow, obj13);
  let tmp6Result = null;
  if (privacy_level === constants.PUBLIC) {
    const obj16 = { leading: null, label: null };
    const obj17 = { source: _modDef8743 };
    obj16.leading = closure_7(BulletIcon, obj17);
    const obj18 = { style: tmp.headerBullet, variant: "text-md/medium", color: "text-default", children: null };
    const intl6 = tmp2(1115).intl;
    obj18.children = intl6.string(tmp2(1115).t.nDsbJg);
    obj16.label = closure_7(tmp2(4635).Text, obj18);
    tmp6Result = closure_7(tmp2(8719).FormRow, obj16);
  }
  const obj19 = { children: null };
  items2[3] = tmp6Result;
  obj6.children = items2;
  items1[2] = closure_8(View, obj6);
  obj3.children = items1;
  const items3 = [closure_8(View, obj3)];
  const obj20 = { style: tmp.startButton, children: null };
  const obj21 = { text: null, onPress: null };
  const intl5 = tmp2(1115).intl;
  obj21.text = intl5.string(channelId(1115).t.obLqZ8);
  obj21.onPress = handleDismiss;
  obj20.children = closure_7(channelId(5059).Button, obj21);
  items3[1] = closure_7(View, obj20);
  obj2.children = items3;
  obj19.children = closure_8(View, obj2);
  return closure_7(tmp8, obj19);
}
