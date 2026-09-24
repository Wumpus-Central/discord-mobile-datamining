// === Module 17912: InteractionIframeModal ===

// Module 17912 (InteractionIframeModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import closeIFrameModalDefault from "closeIFrameModal" /* 17913 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const BotTagTypes = fn(1349).BotTagTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 }, header: { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" }, headerCenterContainer: { flexDirection: "column", alignItems: "center" }, headerTitleContainer: { flexDirection: "row", marginBottom: 2 }, closeButton: { marginEnd: 8 }, spacerView: { marginStart: 8, width: 32 }, botTag: { marginStart: 4 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default function InteractionIframeModal(children) {
  const tmp = closure_9();
  const application = children.application;
  const id = application.id;
  const iframeModalState = id(onPress[7]).useIframeModalState(children);
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
    const obj3 = {
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
      webViewKey: "flex",
      ignoreSilentHardwareSwitch: "breast_feeding_tone3"
    };
    ({ channel_id: obj2.channelId, guild_id: obj2.guildId } = queryParams);
    obj3.activityUrl = iframeModalState.iframeUrl;
    obj3.activitySessionId = queryParams.instance_id;
    obj3.queryParams = queryParams;
    obj3.onLoadError = function onLoadError() {
      const obj2 = { key: "interaction_iframe_modal", content: null };
      const intl = util.intl;
      obj2.content = intl.string(util.t.HehpFW);
      ToastActionCreatorsDefault.open(obj2);
      callback();
    };
    const tmp6Result = tmp6(tmp3[14]);
    obj3.allowPopups = tmp2(tmp3[15]).allowPopups(application);
    tmp11 = closure_7(tmp6Result, obj3);
    const tmp2Result = tmp2(tmp3[15]);
  }
  const obj4 = { style: null, children: null };
  const items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj4.style = items2;
  const obj5 = { style: tmp.header, children: null };
  const obj6 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  let intl = tmp2(tmp3[13]).intl;
  obj6.accessibilityLabel = intl.string(id(onPress[13]).t.cpT0Cq);
  obj6.onPress = onPress;
  obj6.style = tmp.closeButton;
  obj6.children = closure_7(id(onPress[17]).XLargeIcon, {});
  const items3 = [closure_7(id(onPress[16]).PressableOpacity, obj6), , ];
  const obj7 = { style: tmp.headerCenterContainer, children: null };
  const obj8 = { style: tmp.headerTitleContainer, children: null };
  const items4 = [closure_7(id(onPress[18]).Text, { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  const obj10 = { type: BotTagTypes.BOT, verified: null, style: null };
  const bot = application.bot;
  let verified;
  const obj = id(onPress[7]);
  const obj9 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  if (bot != null) {
    verified = bot.verified;
  }
  obj10.verified = verified;
  obj10.style = tmp.botTag;
  items4[1] = closure_7(require("BotTag"), obj10);
  obj8.children = items4;
  const items5 = [closure_8(View, obj8), closure_7(id(onPress[18]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: children.title })];
  obj7.children = items5;
  items3[1] = closure_8(View, obj7);
  items3[2] = closure_7(View, { style: tmp.spacerView });
  obj5.children = items3;
  const items6 = [closure_8(View, obj5), tmp11];
  obj4.children = items6;
  return closure_8(View, obj4);
};