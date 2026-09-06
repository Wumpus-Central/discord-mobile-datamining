// discord_app/modules/interaction_components/native/InteractionIframeModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import closeIFrameModalDefault from "../closeIFrameModal.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const BotTagTypes = fn(1350).BotTagTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  wrapper: null,
  header: null,
  headerCenterContainer: null,
  headerTitleContainer: null,
  closeButton: null,
  spacerView: null,
  botTag: null,
};
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
createStyles.wrapper = createStyles;
createStyles.header = { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" };
createStyles.headerCenterContainer = { flexDirection: "column", alignItems: "center" };
createStyles.headerTitleContainer = { flexDirection: "row", marginBottom: 2 };
createStyles.closeButton = { marginEnd: 8 };
createStyles.spacerView = { marginStart: 8, width: 32 };
createStyles.botTag = { marginStart: 4 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default function InteractionIframeModal(children) {
  const tmp = closure_9();
  const application = children.application;
  const id = application.id;
  let obj = id(onPress[7]);
  const iframeModalState = obj.useIframeModalState(children);
  const queryParams = iframeModalState.queryParams;
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp5[1];
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = noop.useLayoutEffect(() => {
    id(callback[9]).lockOrientation("PORTRAIT");
    return () => {
      const result = id(onPress[9]).restoreDefaultOrientation();
    };
  }, []);
  const items = [id];
  onPress = noop.useCallback(() => {
    closeIFrameModalDefault(id, undefined);
  }, items);
  const items1 = [onPress];
  const callback1 = noop.useCallback(() => {
    callback();
    return true;
  }, items1);
  require("useBackPressHandler")(callback1);
  let tmp11 = null;
  if (!tmp5[0]) {
    obj = {
      onActivityCrash() {
        closure_1(true);
        const timerId = setTimeout(() => closure_1_1(false), 0);
      },
      applicationId: application.id,
      channelId: null,
      guildId: null,
      activityUrl: null,
      activitySessionId: null,
      queryParams: null,
      onLoadError: null,
      allowPopups: null,
      referrerPolicy: "origin",
      isPipOrGridMode: false,
      webViewKey: "PX_16",
      ignoreSilentHardwareSwitch: "barn",
    };
    ({ channel_id: obj2.channelId, guild_id: obj2.guildId } = queryParams);
    obj.activityUrl = iframeModalState.iframeUrl;
    obj.activitySessionId = queryParams.instance_id;
    obj.queryParams = queryParams;
    obj.onLoadError = function onLoadError() {
      const obj = { key: "interaction_iframe_modal", content: null };
      const intl = util.intl;
      obj.content = intl.string(util.t.HehpFW);
      obj.open(obj);
      callback();
    };
    let tmp6Result = tmp6(tmp3[14]);
    obj.allowPopups = tmp2(tmp3[15]).allowPopups(application);
    tmp11 = closure_7(tmp6Result, obj);
    const tmp2Result = tmp2(tmp3[15]);
  }
  obj = { style: null, children: null };
  const items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj.style = items2;
  const obj1 = { style: tmp.header, children: null };
  const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  let intl = tmp2(tmp3[13]).intl;
  obj2.accessibilityLabel = intl.string(id(onPress[13]).t.cpT0Cq);
  obj2.onPress = onPress;
  obj2.style = tmp.closeButton;
  obj2.children = closure_7(id(onPress[17]).XLargeIcon, {});
  const items3 = [closure_7(id(onPress[16]).PressableOpacity, obj2), ,];
  const obj3 = { style: tmp.headerCenterContainer, children: null };
  const obj4 = { style: tmp.headerTitleContainer, children: null };
  const items4 = [
    closure_7(id(onPress[18]).Text, {
      variant: "heading-sm/bold",
      color: "mobile-text-heading-primary",
      children: application.name,
    }),
  ];
  const obj6 = { type: BotTagTypes.BOT, verified: null, style: null };
  const bot = application.bot;
  let verified;
  tmp6Result = tmp6(tmp3[19]);
  if (bot != null) {
    verified = bot.verified;
  }
  obj6.verified = verified;
  obj6.style = tmp.botTag;
  items4[1] = closure_7(tmp6Result, obj6);
  obj4.children = items4;
  const items5 = [
    closure_8(View, obj4),
    closure_7(id(onPress[18]).Text, {
      variant: "text-xs/medium",
      color: "interactive-text-default",
      children: children.title,
    }),
  ];
  obj3.children = items5;
  items3[1] = closure_8(View, obj3);
  items3[2] = closure_7(View, { style: tmp.spacerView });
  obj1.children = items3;
  const items6 = [closure_8(View, obj1), tmp11];
  obj.children = items6;
  return closure_8(View, obj);
}
