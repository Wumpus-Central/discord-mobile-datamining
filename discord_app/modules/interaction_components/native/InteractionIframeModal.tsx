// === Module 17236: InteractionIframeModal ===

// Module 17236 (InteractionIframeModal)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { BotTagTypes } from "ApplicationTypes" /* 4507 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { wrapper: null, header: null, headerCenterContainer: null, headerTitleContainer: null, closeButton: null, spacerView: null, botTag: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", padding: 16, justifyContent: "space-between", alignItems: "center" };
createCacheKey[2] = { flexDirection: "column", alignItems: "center" };
createCacheKey[3] = { flexDirection: "row", marginBottom: 2 };
createCacheKey[4] = { marginEnd: 8 };
createCacheKey[5] = { marginStart: 8, width: 32 };
createCacheKey[6] = { marginStart: 4 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/interaction_components/native/InteractionIframeModal.tsx");

export default function InteractionIframeModal(children) {
  const tmp = callback3();
  const application = children.application;
  const id = application.id;
  let obj = id(callback[7]);
  const iframeModalState = obj.useIframeModalState(children);
  const queryParams = iframeModalState.queryParams;
  const tmp5 = callback(React.useState(false), 2);
  importDefault = tmp5[1];
  const insets = importDefault(callback[8])({ includeKeyboardHeight: true }).insets;
  const layoutEffect = React.useLayoutEffect(() => {
    id(callback[9]).lockOrientation("PORTRAIT");
    return () => {
      const result = callback(table[9]).restoreDefaultOrientation();
    };
  }, []);
  const items = [id];
  callback = React.useCallback(() => {
    callback(callback[10])(id, undefined);
  }, items);
  const items1 = [callback];
  const callback1 = React.useCallback(() => {
    callback();
    return true;
  }, items1);
  importDefault(callback[11])(callback1);
  let tmp11 = null;
  if (!tmp5[0]) {
    obj = { onActivityCrash: null, applicationId: null, channelId: null, guildId: null, activityUrl: null, activitySessionId: null, queryParams: null, onLoadError: null, allowPopups: null, referrerPolicy: "origin", isPipOrGridMode: false, webViewKey: "PX_16", ignoreSilentHardwareSwitch: "kj\u00F8nnsn\u00F8ytral" };
    obj[0] = function onActivityCrash() {
      callback(true);
      const timerId = setTimeout(() => callback(false), 0);
    };
    obj[1] = application.id;
    ({ channel_id: obj2[2], guild_id: obj2[3] } = queryParams);
    obj[4] = iframeModalState.iframeUrl;
    obj[5] = queryParams.instance_id;
    obj[6] = queryParams;
    obj[7] = function onLoadError() {
      let obj = callback(callback[12]);
      obj = { key: "interaction_iframe_modal", content: null };
      const intl = id(callback[13]).intl;
      obj[1] = intl.string(id(callback[13]).t.HehpFW);
      obj.open(obj);
      callback();
    };
    let tmp6Result = tmp6(tmp3[14]);
    obj[8] = tmp2(tmp3[15]).allowPopups(application);
    tmp11 = callback2(tmp6Result, obj);
    const tmp2Result = tmp2(tmp3[15]);
  }
  obj = { style: items2, children: null };
  items2 = [tmp.wrapper, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj1 = { style: tmp.header, children: null };
  const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  let intl = tmp2(tmp3[13]).intl;
  obj2[1] = intl.string(id(callback[13]).t.cpT0Cq);
  obj2[2] = callback;
  obj2[3] = tmp.closeButton;
  obj2[4] = callback2(id(callback[17]).XLargeIcon, {});
  const items3 = [callback2(id(callback[16]).PressableOpacity, obj2), , ];
  const obj3 = { style: tmp.headerCenterContainer, children: null };
  const obj4 = { style: tmp.headerTitleContainer, children: null };
  const items4 = [callback2(id(callback[18]).Text, { variant: "heading-sm/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  const obj6 = { type: BotTagTypes.BOT, verified: null, style: null };
  const bot = application.bot;
  let verified;
  tmp6Result = tmp6(tmp3[19]);
  if (bot != null) {
    verified = bot.verified;
  }
  obj6[1] = verified;
  obj6[2] = tmp.botTag;
  items4[1] = callback2(tmp6Result, obj6);
  obj4[1] = items4;
  const items5 = [closure_8(View, obj4), callback2(id(callback[18]).Text, { variant: "text-xs/medium", color: "interactive-text-default", children: children.title })];
  obj3[1] = items5;
  items3[1] = closure_8(View, obj3);
  items3[2] = callback2(View, { style: tmp.spacerView });
  obj1[1] = items3;
  const items6 = [closure_8(View, obj1), tmp11];
  obj[1] = items6;
  return closure_8(View, obj);
};