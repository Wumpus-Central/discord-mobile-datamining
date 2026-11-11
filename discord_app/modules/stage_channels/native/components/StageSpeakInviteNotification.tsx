// discord_app/modules/stage_channels/native/components/StageSpeakInviteNotification.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import StageChannelActionCreatorExtras from "../../StageChannelActionCreatorExtras.native.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import speakOnStageDefault from "../speakOnStage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_5 = fn(10963).NOTIFICATION_PREVIEW_LINE_CLAMP;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let obj = { iconContainer: null, actions: null };
let size = {
  width: 40,
  height: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
obj.iconContainer = size;
obj.actions = { width: "auto", alignSelf: "center", marginStart: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
let obj3 = { width: "auto", alignSelf: "center", marginStart: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSpeakInviteNotification.tsx");

export default noop.memo(function StageSpeakInviteNotification(notification) {
  notification = notification.notification;
  dependencyMap = undefined;
  noop = undefined;
  let isVoicePanelOpen;
  let handleDismissNotification;
  let ref;
  let callback;
  const channel = notification.channel;
  guild = notification.guild;
  const tmp = closure_8();
  let stringResult = guild(5891)(channel);
  if (stringResult == null) {
    const intl = channel(1113).intl;
    stringResult = intl.string(channel(1113).t["/YzI63"]);
  }
  dependencyMap = stringResult;
  const tmp6 = guild(11889)();
  noop = tmp6;
  isVoicePanelOpen = channel(11890).useIsVoicePanelOpen(channel.id);
  let obj = channel(11890);
  handleDismissNotification = channel(11014).useInAppNotificationContext().handleDismissNotification;
  ref = noop.useRef(false);
  items = [handleDismissNotification];
  callback = noop.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      handleDismissNotification(arg0);
    }
  }, items);
  const items1 = [tmp6, callback];
  const effect = noop.useEffect(() => {
    if (!closure_3) {
      callback("invite_resolved");
    }
  }, items1);
  const items2 = [isVoicePanelOpen, callback];
  const effect1 = noop.useEffect(() => {
    if (isVoicePanelOpen) {
      callback("call_opened");
    }
  }, items2);
  const items3 = [stringResult, guild];
  const memo = noop.useMemo(() => {
    const obj = { type: "simple", text, secondaryText: null };
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj.secondaryText = name;
    return obj;
  }, items3);
  const obj3 = { icon: null, header: null, rightAccessory: null, children: null, onPress: null, notification: null };
  const obj4 = { style: tmp.iconContainer, children: null };
  const obj2 = channel(11014);
  obj4.children = ref(channel(11892).HandRequestSpeakIcon, { size: "md", color: guild(575).colors.WHITE });
  obj3.icon = ref(isVoicePanelOpen, obj4);
  obj3.header = memo;
  const obj6 = { direction: "horizontal", spacing: guild(575).space.PX_8, style: tmp.actions, children: null };
  const obj7 = {
    size: "sm",
    variant: "secondary",
    icon: ref(channel(7483).XSmallIcon, {}),
    accessibilityLabel: null,
    onPress: null,
  };
  const intl2 = channel(1113).intl;
  obj7.accessibilityLabel = intl2.string(channel(1113).t["1YDv7a"]);
  obj7.onPress = function onPress() {
    const result = StageChannelActionCreators.audienceAckRequestToSpeak(channel, true);
    callback("declined");
  };
  const items4 = [ref(channel(7922).IconButton, obj7)];
  const obj8 = {
    size: "sm",
    variant: "primary",
    icon: ref(channel(7831).CheckmarkSmallIcon, { color: "white" }),
    accessibilityLabel: null,
    onPress: null,
  };
  const intl3 = channel(1113).intl;
  obj8.accessibilityLabel = intl3.string(channel(1113).t.MpO0px);
  obj8.onPress = function onPress() {
    speakOnStageDefault(channel);
    callback("accepted");
  };
  items4[1] = ref(channel(7922).IconButton, obj8);
  obj6.children = items4;
  obj3.rightAccessory = callback(channel(6274).Stack, obj6);
  const obj9 = {
    variant: "heading-sm/medium",
    color: "text-subtle",
    lineClamp: handleDismissNotification,
    children: null,
  };
  const intl4 = channel(1113).intl;
  obj9.children = intl4.string(channel(1113).t.Ul1RJQ);
  obj3.children = ref(channel(5866).Text, obj9);
  obj3.onPress = function onPress() {
    StageChannelActionCreatorExtras.openStageChannel(channel);
    callback("notification_clicked");
  };
  obj3.notification = notification;
  return ref(channel(11024).NotificationPressable, obj3);
});
