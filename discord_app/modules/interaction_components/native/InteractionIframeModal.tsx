// discord_app/modules/interaction_components/native/InteractionIframeModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import makeIframeIdDefault from "../../embedded_apps/utils/makeIframeId.tsx";
import closeIFrameModalDefault from "../closeIFrameModal.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const BotTagTypes = fn(1360).BotTagTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  wrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 },
  header: { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" },
  headerCenterContainer: { flexDirection: "column", alignItems: "center" },
  headerTitleContainer: { flexDirection: "row", marginBottom: 2 },
  closeButton: { marginEnd: 8 },
  spacerView: { marginStart: 8, width: 32 },
  botTag: { marginStart: 4 },
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default function InteractionIframeModal(application) {
  const tmp = closure_9();
  application = application.application;
  const id2 = application.id;
  ({ title, id } = application);
  const iframeModalState = id2(onDisallowedNavigation[7]).useIframeModalState(application);
  const queryParams = iframeModalState.queryParams;
  const obj = id2(onDisallowedNavigation[7]);
  [tmp7, importDefault] = noop.useState(require("makeIframeId"));
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const layoutEffect = noop.useLayoutEffect(() => {
    id2(callback[10]).lockOrientation("PORTRAIT");
    return () => {
      const result = id2(callback[10]).restoreDefaultOrientation();
    };
  }, []);
  const items = [id2];
  onDisallowedNavigation = noop.useCallback(() => {
    closeIFrameModalDefault(id2, undefined);
  }, items);
  const items1 = [onDisallowedNavigation];
  const callback1 = noop.useCallback(() => {
    callback();
    return true;
  }, items1);
  require("useBackPressHandler")(callback1);
  let obj2 = { style: null, children: null };
  const items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj2.style = items2;
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  let intl = id2(onDisallowedNavigation[14]).intl;
  obj4.accessibilityLabel = intl.string(id2(onDisallowedNavigation[14]).t.cpT0Cq);
  obj4.onPress = onDisallowedNavigation;
  obj4.style = tmp.closeButton;
  obj4.children = closure_7(id2(onDisallowedNavigation[15]).XLargeIcon, {});
  const items3 = [closure_7(id2(onDisallowedNavigation[13]).PressableOpacity, obj4), ,];
  const obj5 = { style: tmp.headerCenterContainer, children: null };
  const obj6 = { style: tmp.headerTitleContainer, children: null };
  const items4 = [
    closure_7(id2(onDisallowedNavigation[16]).Text, {
      variant: "heading-sm/bold",
      color: "mobile-text-heading-primary",
      children: application.name,
    }),
  ];
  const obj8 = { type: BotTagTypes.BOT, verified: null, style: null };
  const bot = application.bot;
  let verified;
  const obj7 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name };
  const tmp6 = _slicedToArray(noop.useState(require("makeIframeId")), 2);
  if (bot != null) {
    verified = bot.verified;
  }
  obj8.verified = verified;
  obj8.style = tmp.botTag;
  items4[1] = closure_7(require("BotTag"), obj8);
  obj6.children = items4;
  const items5 = [
    closure_8(View, obj6),
    closure_7(id2(onDisallowedNavigation[16]).Text, {
      variant: "text-xs/medium",
      color: "interactive-text-default",
      children: title,
    }),
  ];
  obj5.children = items5;
  items3[1] = closure_8(View, obj5);
  items3[2] = closure_7(View, { style: tmp.spacerView });
  obj3.children = items3;
  const items6 = [closure_8(View, obj3)];
  const obj10 = {
    iframeId: tmp7,
    onDisallowedNavigation,
    onActivityCrash() {
      closure_1_1(makeIframeIdDefault());
    },
    applicationId: application.id,
    channelId: queryParams.channel_id,
    guildId: queryParams.guild_id,
    contextSource: null,
    activityUrl: null,
    activitySessionId: null,
    queryParams: null,
    onLoadError: null,
    allowPopups: null,
    referrerPolicy: "origin",
    isPipOrGridMode: false,
    ignoreSilentHardwareSwitch: false,
  };
  const obj11 = { type: null, interactionId: null };
  const obj9 = { style: tmp.spacerView };
  const tmp15 = require("BotTag");
  obj11.type = id2(onDisallowedNavigation[19]).EmbeddedContextSourceType.INTERACTION;
  obj11.interactionId = id;
  obj10.contextSource = obj11;
  obj10.activityUrl = iframeModalState.iframeUrl;
  obj10.activitySessionId = queryParams.instance_id;
  obj10.queryParams = queryParams;
  obj10.onLoadError = function onLoadError() {
    const obj2 = { text: null };
    const intl = util.intl;
    obj2.text = intl.string(util.t.HehpFW);
    ToastActionCreatorsDefault.open("interaction_iframe_modal", obj2);
    callback();
  };
  const tmp5Result = require("ComponentOwnedWebView");
  obj10.allowPopups = id2(onDisallowedNavigation[21]).allowPopups(application);
  items6[1] = closure_7(tmp5Result, obj10, tmp7);
  obj2.children = items6;
  return closure_8(View, obj2);
}
