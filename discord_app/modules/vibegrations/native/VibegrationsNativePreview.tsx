// === Module 16890: VibegrationsNativePreview ===

// Module 16890 (VibegrationsNativePreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3676 from "module_3676" /* 3676 */;
import Text_Text from "Text/Text" /* 4718 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4735 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import Card from "Card" /* 5777 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7306 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7829 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 9161 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9745 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9816 */;
import useFrameBySurfaceDefault from "useFrameBySurface" /* 16891 */;
import useVibegrationsDisallowSwipeExitDefault from "useVibegrationsDisallowSwipeExit" /* 16892 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9748 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import ReadStateStore from "ReadStateStore" /* 4737 */;
import AppStateStore from "AppStateStore" /* 1896 */;

require = fn;
function StatusCard(arg0) {
  ({ title, body, children } = arg0);
  const tmp = closure_24();
  const obj = { style: tmp.centered, children: null };
  const obj2 = { variant: "primary", style: tmp.card, children: null };
  const obj3 = { style: tmp.cardBody, children: null };
  const obj4 = { style: tmp.cardCopy, children: null };
  const items = [__initData2(Text_Text.Text, { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title }), __initData2(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body })];
  obj4.children = items;
  const items1 = [__initData3(React5, obj4), children];
  obj3.children = items1;
  obj2.children = __initData3(React5, obj3);
  obj.children = __initData2(Card.Card, obj2);
  return __initData2(React5, obj);
}
class PreviewFrame {
  constructor(arg0) {
    applicationId = global.applicationId;
    visible = global.visible;
    closure_1 = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    tmp = applicationId;
    tmp2 = closure_2;
    obj = applicationId(closure_2[16]);
    vibegrationsControlActive = obj.useVibegrationsControlActive(global.projectId);
    tmp4 = closure_24();
    tmp5 = makeFrameId(applicationId, MAIN_SURFACE);
    closure_1 = tmp5;
    tmp6 = closure_1;
    tmp7 = closure_1(closure_2[17])(applicationId, MAIN_SURFACE);
    closure_2 = tmp7;
    tmp8 = null;
    if (null != tmp7) {
      tmp9 = isLaunched;
      tmp8 = null;
      if (isLaunched(tmp7)) {
        tmp8 = tmp7;
      }
    }
    tmp10 = closure_3(closure_4.useState(false), 2);
    first = tmp10[0];
    closure_3 = first;
    closure_4 = tmp10[1];
    items = [, , , ];
    items[0] = applicationId;
    items[1] = first;
    items[2] = tmp7;
    items[3] = tmp5;
    effect = closure_4.useEffect(() => {
      if (!first) {
        if (null == closure_2) {
          const mainFrame = FramesStore.getMainFrame();
          if (null != mainFrame) {
            FramesNativeManagerDefault.leaveFrame(mainFrame.id);
          }
          const obj3 = { applicationId, surface };
          FramesActionCreatorsDefault.launchFrame(obj3).catch(() => closure_1_4(true));
          const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj3);
          FramesActionCreatorsDefault.demoteMainFrame(closure_1);
        }
      }
    }, items);
    tmp14 = visible;
    tmp6Result = tmp6(tmp2[19]);
    if (visible) {
      tmp14 = null != tmp8;
    }
    tmp13Result = tmp6Result(tmp14);
    if (null != tmp8) {
      tmp21 = View;
      obj1 = { style: null, children: null };
      obj1.style = tmp4.frame;
      tmp22 = jsx;
      tmp20 = jsxs;
      obj9 = { frameId: null, layoutMode: null };
      obj9.frameId = tmp8.id;
      tmp23 = FrameLayoutModes;
      obj9.layoutMode = FrameLayoutModes.FOCUSED;
      items1 = [, ];
      items1[0] = jsx(tmp(tmp2[20]).InlineFrameView, obj9);
      tmp22Result = null;
      if (visible) {
        tmp22Result = null;
        if (vibegrationsControlActive) {
          obj10 = { style: null, pointerEvents: "box-only", accessibilityLiveRegion: "polite", children: null };
          obj10.style = tmp4.controlOverlay;
          obj11 = { variant: "text-sm/medium", color: "text-default", style: null, children: null };
          obj11.style = tmp4.controlText;
          intl4 = tmp(tmp2[21]).intl;
          obj11.children = intl4.string(tmp6(tmp2[22]).dIE9zO);
          obj10.children = tmp22(tmp(tmp2[14]).Text, obj11);
          tmp22Result = tmp22(tmp21, obj10);
        }
      }
      items1[1] = tmp22Result;
      obj1.children = items1;
      tmp20Result = tmp20(tmp21, obj1);
    } else {
      tmp25 = jsx;
      if (first) {
        tmp19 = StatusCard;
        obj12 = { title: null, body: null, children: null };
        intl = tmp(tmp2[21]).intl;
        obj12.title = intl.string(tmp6(tmp2[22]).MeLWCr);
        intl2 = tmp(tmp2[21]).intl;
        obj12.body = intl2.string(tmp6(tmp2[22])["1RCbQT"]);
        obj13 = { variant: "primary", size: "sm", text: null, onPress: null };
        intl3 = tmp(tmp2[21]).intl;
        obj13.text = intl3.string(tmp6(tmp2[22])["42EdIV"]);
        obj13.onPress = function onPress() {
          return closure_4(false);
        };
        obj12.children = tmp25(tmp(tmp2[23]).Button, obj13);
        tmp20Result = tmp25(StatusCard, obj12);
      } else {
        tmp16 = View;
        obj14 = { style: null, children: null };
        obj14.style = tmp4.centered;
        tmp17 = ActivityIndicator;
        obj14.children = tmp25(ActivityIndicator, {});
        tmp20Result = tmp25(View, obj14);
      }
    }
    return tmp20Result;
  }
}
function PreviewWidget(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = closure_24();
  const items = [AuthenticationStore];
  [][0] = applicationId;
  const stateFromStores = applicationId(504).useStateFromStores(items, () => id.getId());
  if (applicationId.revoked) {
    const obj2 = { title: null, body: null };
    const intl = tmp2(1115).intl;
    obj2.title = intl.string(_modDef3676.SGHO9K);
    const intl2 = tmp2(1115).intl;
    obj2.body = intl2.string(_modDef3676["pV/rS2"]);
    let tmp6Result = closure_22(StatusCard, obj2);
  } else {
    const obj3 = { contentContainerStyle: tmp.widget, children: null };
    const obj4 = { userId: stateFromStores, widget: tmp5 };
    obj3.children = closure_22(UserProfileApplicationWidgetCardDefault, obj4);
    tmp6Result = closure_22(closure_6, obj3);
  }
  return tmp6Result;
}
function PreviewBot(previewApplicationId) {
  let id;
  let stateFromStores;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let id1;
  let stateFromStores1;
  let stateFromStores2;
  let tmp = closure_24();
  const application = id(7359).useApplication(previewApplicationId.previewApplicationId);
  const data = application.data;
  id = undefined;
  if (data != null) {
    const bot = data.bot;
    if (bot != null) {
      id = bot.id;
    }
  }
  if (id == null) {
    id = null;
  }
  let obj = id(7359);
  const items = [ChannelStore];
  const items1 = [id];
  stateFromStores = id(504).useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      const dMFromUserId = ChannelStore.getDMFromUserId(tmp);
      let channel = null;
      if (null != dMFromUserId) {
        channel = ChannelStore.getChannel(dMFromUserId);
      }
      return channel;
    }
  }, items1);
  const tmp8 = _slicedToArray(noop.useState(null), 2);
  dependencyMap = tmp8[1];
  _slicedToArray = tmp9;
  const tmp7Result = _slicedToArray(noop.useState(0), 2);
  noop = tmp7Result[1];
  const items2 = [id, stateFromStores, null != id && tmp8[0] === id, tmp7Result[0]];
  const effect = obj3.useEffect(() => {
    if (null != c0) {
      if (null == stateFromStores) {
        if (!closure_3) {
          c0 = false;
          const obj2 = { recipientIds: tmp, navigateToChannel: false };
          const obj = stateFromStores(4735);
          stateFromStores(4735).openPrivateChannel(obj2).catch(() => {
            if (!c0) {
              closure_2(id);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
  }, items2);
  id1 = undefined;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  if (id1 == null) {
    id1 = null;
  }
  const items3 = [id1];
  const effect1 = obj3.useEffect(() => {
    if (null != id1) {
      ChannelActionCreatorsDefault.preload(guildId, tmp);
    }
  }, items3);
  const tmp2Result = id(504);
  const items4 = [ReadStateStore];
  const items5 = [id1];
  stateFromStores1 = id(504).useStateFromStores(items4, () => {
    let hasUnreadResult = null != id1;
    if (hasUnreadResult) {
      hasUnreadResult = ReadStateStore.hasUnread(tmp);
    }
    return hasUnreadResult;
  }, items5);
  const tmp2Result4 = id(504);
  const items6 = [AppStateStore];
  stateFromStores2 = id(504).useStateFromStores(items6, () => state.getState() === constants.ACTIVE);
  const items7 = [stateFromStores, stateFromStores1, stateFromStores2];
  const effect2 = obj3.useEffect(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = stateFromStores1;
    }
    if (tmp2) {
      tmp2 = stateFromStores2;
    }
    if (tmp2) {
      const obj2 = { section: constants3.CHANNEL, object: constants.ACK_INCOMING_MESSAGE, objectType: constants2.ACK_AUTOMATIC };
      ReadStateActionCreators.ackChannel(stateFromStores, obj2);
    }
  }, items7);
  const callback = obj3.useCallback(() => {
    dependencyMap(null);
    closure_4((arg0) => arg0 + 1);
  }, []);
  const tmp2Result5 = id(504);
  if (!application.isLoading) {
    let obj2 = { title: null, body: null, children: null };
    const intl = tmp2(1115).intl;
    obj2.title = intl.string(stateFromStores(3676).bl4eBc);
    const intl2 = tmp2(1115).intl;
    obj2.body = intl2.string(stateFromStores(3676)["4iyrze"]);
    let tmp19Result = null;
    if (tmp9) {
      const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp2(1115).intl;
      obj4.text = intl3.string(tmp2(1115).t["5911Lb"]);
      obj4.onPress = callback;
      tmp19Result = closure_22(tmp2(5144).Button, obj4);
    }
    obj2.children = tmp19Result;
    return closure_22(StatusCard, obj2);
  }
  if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: null };
    tmp = id1;
    obj5.children = closure_22(id1, {});
    closure_22(stateFromStores2, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: null };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: ref, screenIndex: "vibegrations-preview", alwaysRespectKeyboard: true, disableGradient: true };
    const items8 = [closure_22(stateFromStores(11592), obj7, stateFromStores.id), ];
    let tmp29Result = null;
    if (tmp2Result6.isAndroid()) {
      tmp29Result = closure_22(tmp2(16899).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp29Result;
    obj6.children = items8;
    closure_23(stateFromStores2, obj6);
    tmp2Result6 = tmp2(1364);
  }
  ref = noop.useRef(null);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticsObjects: map1, AnalyticsObjectTypes: closure_14, AnalyticsSections: closure_15, AppStates: closure_16, ME: closure_17 } = Constants);
const FramesConstants = fn(9749);
({ FrameLayoutModes: closure_18, isLaunched: closure_19, MAIN_SURFACE: closure_20, makeFrameId: closure_21 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { frame: { flex: 1 }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, card: { alignSelf: "stretch" }, cardBody: null, cardCopy: null, cardText: null, widget: null, controlOverlay: null, controlText: null, dm: null };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
obj2.cardBody = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj4 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.cardCopy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.cardText = { textAlign: "center" };
let obj5 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.widget = { padding: nativeDefault.space.PX_16 };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "flex-end", padding: nativeDefault.space.PX_16 };
obj2.controlOverlay = rect;
let obj6 = { padding: nativeDefault.space.PX_16 };
obj2.controlText = { textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8 };
obj2.dm = { flex: 1 };
const __initData4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativePreview.tsx");

export default function VibegrationsNativePreview(arg0) {
  ({ previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
  if (null != permissionsGate) {
    const obj2 = { title: null, body: null, children: null };
    const intl5 = util.intl;
    obj2.title = intl5.string(_modDef3676.DYwf2n);
    const intl6 = util.intl;
    obj2.body = intl6.string(_modDef3676.WWj3pN);
    const obj3 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
    const intl7 = util.intl;
    obj3.text = intl7.string(_modDef3676["CRfE/E"]);
    ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
    obj2.children = __initData2(components_Button_Button.Button, obj3);
    return __initData2(StatusCard, obj2);
  } else if ("frame" === mode) {
    if (tmp3) {
      const obj4 = { applicationId: previewApplicationId, projectId: tmp, visible: true };
      let tmp14Result = __initData2(PreviewFrame, obj4);
    } else {
      const obj5 = { title: null, body: null };
      const intl3 = util.intl;
      obj5.title = intl3.string(_modDef3676.FHOJiH);
      const intl4 = util.intl;
      obj5.body = intl4.string(_modDef3676["1yLQoV"]);
      tmp14Result = __initData2(StatusCard, obj5);
    }
    return tmp14Result;
  } else if ("widget" === mode) {
    let tmp11 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === tmp2.profileState };
      tmp11 = __initData2(PreviewWidget, obj6);
    }
    return tmp11;
  } else if ("bot" === mode) {
    const obj13 = { previewApplicationId };
    return __initData2(PreviewBot, obj13);
  } else if (null === mode) {
    const obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3676.FHOJiH);
    const intl2 = util.intl;
    obj.body = intl2.string(_modDef3676["1yLQoV"]);
    return __initData2(StatusCard, obj);
  }
};
export const leaveVibegrationsPreviewFrame = function leaveVibegrationsPreviewFrame(previewAppId) {
  const frameBySurface = FramesStore.getFrameBySurface(previewAppId, surface);
  if (null != frameBySurface) {
    FramesNativeManagerDefault.leaveFrame(frameBySurface.id);
  }
};
export { PreviewFrame };