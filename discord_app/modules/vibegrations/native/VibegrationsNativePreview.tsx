// === Module 16964: VibegrationsNativePreview ===

// Module 16964 (VibegrationsNativePreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3678 from "module_3678" /* 3678 */;
import Text_Text from "Text/Text" /* 4752 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4769 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import Card from "Card" /* 5824 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7355 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7869 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 9201 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9562 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9571 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9313 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import ReadStateStore from "ReadStateStore" /* 4771 */;
import AppStateStore from "AppStateStore" /* 1979 */;

require = fn;
function StatusCard(arg0) {
  ({ title, body, children } = arg0);
  const tmp = closure_26();
  const obj = { style: tmp.centered, children: null };
  const obj2 = { variant: "primary", style: tmp.card, children: null };
  const obj3 = { style: tmp.cardBody, children: null };
  const obj4 = { style: tmp.cardCopy, children: null };
  const items = [__initData4(Text_Text.Text, { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title }), __initData4(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body })];
  obj4.children = items;
  const items1 = [closure_1_25(React5, obj4), children];
  obj3.children = items1;
  obj2.children = closure_1_25(React5, obj3);
  obj.children = __initData4(Card.Card, obj2);
  return __initData4(React5, obj);
}
class PreviewFrame {
  constructor(arg0) {
    applicationId = global.applicationId;
    projectId = global.projectId;
    visible = global.visible;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    tmp = applicationId;
    tmp2 = closure_2;
    obj = applicationId(closure_2[17]);
    vibegrationsControlActive = obj.useVibegrationsControlActive(projectId);
    obj2 = closure_4;
    items = [, ];
    items[0] = projectId;
    items[1] = visible;
    effect = closure_4.useEffect(() => () => closure_2_13(projectId), items);
    tmp5 = closure_26();
    tmp6 = makeFrameId(applicationId, MAIN_SURFACE);
    closure_2 = tmp6;
    tmp7 = projectId;
    tmp8 = projectId(closure_2[18])(applicationId, MAIN_SURFACE);
    closure_3 = tmp8;
    tmp9 = null;
    if (null != tmp8) {
      tmp10 = isLaunched;
      tmp9 = null;
      if (isLaunched(tmp8)) {
        tmp9 = tmp8;
      }
    }
    tmp11 = closure_3(obj2.useState(false), 2);
    first = tmp11[0];
    closure_4 = first;
    closure_5 = tmp11[1];
    items1 = [, , , ];
    items1[0] = applicationId;
    items1[1] = first;
    items1[2] = tmp8;
    items1[3] = tmp6;
    effect1 = obj2.useEffect(() => {
      if (!first) {
        if (null == closure_3) {
          const mainFrame = FramesStore.getMainFrame();
          if (null != mainFrame) {
            FramesNativeManagerDefault.leaveFrame(mainFrame.id);
          }
          const obj3 = { applicationId, surface };
          FramesActionCreatorsDefault.launchFrame(obj3).catch(() => closure_1_5(true));
          const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj3);
          FramesActionCreatorsDefault.demoteMainFrame(closure_2);
        }
      }
    }, items1);
    tmp15 = visible;
    tmp7Result = tmp7(tmp2[20]);
    if (visible) {
      tmp15 = null != tmp9;
    }
    tmp14Result = tmp7Result(tmp15);
    if (null != tmp9) {
      tmp22 = View;
      obj1 = { style: null, children: null };
      obj1.style = tmp5.frame;
      tmp23 = jsx;
      tmp21 = jsxs;
      obj11 = { frameId: null, layoutMode: null };
      obj11.frameId = tmp9.id;
      tmp24 = FrameLayoutModes;
      obj11.layoutMode = FrameLayoutModes.FOCUSED;
      items2 = [, , ];
      items2[0] = jsx(tmp(tmp2[21]).InlineFrameView, obj11);
      tmp23Result = null;
      if (visible) {
        tmp23Result = null;
        if (closure_14(projectId).active) {
          tmp23Result = null;
          if (!vibegrationsControlActive) {
            obj12 = { projectId: null };
            obj12.projectId = projectId;
            tmp23Result = tmp23(tmp7(tmp2[22]), obj12);
          }
        }
      }
      items2[1] = tmp23Result;
      tmp23Result1 = null;
      if (visible) {
        tmp23Result1 = null;
        if (vibegrationsControlActive) {
          obj13 = { style: null, pointerEvents: "box-only", accessibilityLiveRegion: "polite", children: null };
          obj13.style = tmp5.controlOverlay;
          obj14 = { variant: "text-sm/medium", color: "text-default", style: null, children: null };
          obj14.style = tmp5.controlText;
          intl4 = tmp(tmp2[23]).intl;
          obj14.children = intl4.string(tmp7(tmp2[24]).dIE9zO);
          obj13.children = tmp23(tmp(tmp2[15]).Text, obj14);
          tmp23Result1 = tmp23(tmp22, obj13);
        }
      }
      items2[2] = tmp23Result1;
      obj1.children = items2;
      tmp21Result = tmp21(tmp22, obj1);
    } else {
      tmp27 = jsx;
      if (first) {
        tmp20 = StatusCard;
        obj15 = { title: null, body: null, children: null };
        intl = tmp(tmp2[23]).intl;
        obj15.title = intl.string(tmp7(tmp2[24]).MeLWCr);
        intl2 = tmp(tmp2[23]).intl;
        obj15.body = intl2.string(tmp7(tmp2[24])["1RCbQT"]);
        obj16 = { variant: "primary", size: "sm", text: null, onPress: null };
        intl3 = tmp(tmp2[23]).intl;
        obj16.text = intl3.string(tmp7(tmp2[24])["42EdIV"]);
        obj16.onPress = function onPress() {
          return closure_5(false);
        };
        obj15.children = tmp27(tmp(tmp2[25]).Button, obj16);
        tmp21Result = tmp27(StatusCard, obj15);
      } else {
        tmp17 = View;
        obj17 = { style: null, children: null };
        obj17.style = tmp5.centered;
        tmp18 = closure_5;
        obj17.children = tmp27(closure_5, {});
        tmp21Result = tmp27(View, obj17);
      }
    }
    return tmp21Result;
  }
}
function PreviewWidget(applicationId) {
  applicationId = applicationId.applicationId;
  const tmp = closure_26();
  const items = [AuthenticationStore];
  [][0] = applicationId;
  const stateFromStores = applicationId(504).useStateFromStores(items, () => id.getId());
  if (applicationId.revoked) {
    const obj2 = { title: null, body: null };
    const intl = tmp2(1115).intl;
    obj2.title = intl.string(_modDef3678.SGHO9K);
    const intl2 = tmp2(1115).intl;
    obj2.body = intl2.string(_modDef3678["pV/rS2"]);
    let tmp6Result = closure_24(StatusCard, obj2);
  } else {
    const obj3 = { contentContainerStyle: tmp.widget, children: null };
    const obj4 = { userId: stateFromStores, widget: tmp5 };
    obj3.children = closure_24(UserProfileApplicationWidgetCardDefault, obj4);
    tmp6Result = closure_24(closure_6, obj3);
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
  let tmp = closure_26();
  const application = id(7408).useApplication(previewApplicationId.previewApplicationId);
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
  let obj = id(7408);
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
          const obj = stateFromStores(4769);
          stateFromStores(4769).openPrivateChannel(obj2).catch(() => {
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
    obj2.title = intl.string(stateFromStores(3678).bl4eBc);
    const intl2 = tmp2(1115).intl;
    obj2.body = intl2.string(stateFromStores(3678)["4iyrze"]);
    let tmp19Result = null;
    if (tmp9) {
      const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp2(1115).intl;
      obj4.text = intl3.string(tmp2(1115).t["5911Lb"]);
      obj4.onPress = callback;
      tmp19Result = closure_24(tmp2(5186).Button, obj4);
    }
    obj2.children = tmp19Result;
    return closure_24(StatusCard, obj2);
  }
  if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: null };
    tmp = id1;
    obj5.children = closure_24(id1, {});
    closure_24(stateFromStores2, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: null };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: ref, screenIndex: "vibegrations-preview", alwaysRespectKeyboard: true, disableGradient: true };
    const items8 = [closure_24(stateFromStores(11603), obj7, stateFromStores.id), ];
    let tmp29Result = null;
    if (tmp2Result6.isAndroid()) {
      tmp29Result = closure_24(tmp2(16976).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp29Result;
    obj6.children = items8;
    closure_25(stateFromStores2, obj6);
    tmp2Result6 = tmp2(1364);
  }
  ref = noop.useRef(null);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const vibegrationsDesignFeedbackStore = fn(16935);
({ exitVibegrationsDesignFeedback: map1, useVibegrationsDesignFeedback: closure_14 } = vibegrationsDesignFeedbackStore);
const Constants = fn(1074);
({ AnalyticsObjects: closure_15, AnalyticsObjectTypes: closure_16, AnalyticsSections: closure_17, AppStates: closure_18, ME: closure_19 } = Constants);
const FramesConstants = fn(9314);
({ FrameLayoutModes: closure_20, isLaunched: closure_21, MAIN_SURFACE: closure_22, makeFrameId: closure_23 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_24, jsxs: closure_25 } = jsxProd);
const createStyles = fn(4756);
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
let dependencyMap = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativePreview.tsx");

export default function VibegrationsNativePreview(arg0) {
  ({ previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
  if (null != permissionsGate) {
    const obj2 = { title: null, body: null, children: null };
    const intl5 = util.intl;
    obj2.title = intl5.string(_modDef3678.DYwf2n);
    const intl6 = util.intl;
    obj2.body = intl6.string(_modDef3678.WWj3pN);
    const obj3 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
    const intl7 = util.intl;
    obj3.text = intl7.string(_modDef3678["CRfE/E"]);
    ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
    obj2.children = __initData4(components_Button_Button.Button, obj3);
    return __initData4(StatusCard, obj2);
  } else if ("frame" === mode) {
    if (tmp3) {
      const obj4 = { applicationId: previewApplicationId, projectId: tmp, visible: true };
      let tmp14Result = __initData4(PreviewFrame, obj4);
    } else {
      const obj5 = { title: null, body: null };
      const intl3 = util.intl;
      obj5.title = intl3.string(_modDef3678.FHOJiH);
      const intl4 = util.intl;
      obj5.body = intl4.string(_modDef3678["1yLQoV"]);
      tmp14Result = __initData4(StatusCard, obj5);
    }
    return tmp14Result;
  } else if ("widget" === mode) {
    let tmp11 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === tmp2.profileState };
      tmp11 = __initData4(PreviewWidget, obj6);
    }
    return tmp11;
  } else if ("bot" === mode) {
    const obj13 = { previewApplicationId };
    return __initData4(PreviewBot, obj13);
  } else if (null === mode) {
    const obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3678.FHOJiH);
    const intl2 = util.intl;
    obj.body = intl2.string(_modDef3678["1yLQoV"]);
    return __initData4(StatusCard, obj);
  }
};
export const leaveVibegrationsPreviewFrame = function leaveVibegrationsPreviewFrame(previewAppId) {
  const frameBySurface = FramesStore.getFrameBySurface(previewAppId, surface);
  if (null != frameBySurface) {
    FramesNativeManagerDefault.leaveFrame(frameBySurface.id);
  }
};
export { PreviewFrame };