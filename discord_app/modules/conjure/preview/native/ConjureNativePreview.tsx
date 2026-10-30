// === Module 12052: ConjureNativePreview ===

// Module 12052 (ConjureNativePreview)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import Card from "Card" /* 6971 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7273 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7770 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10863 */;
import ConjurePlatformUtils from "ConjurePlatformUtils" /* 10877 */;
import leaveFrame from "leaveFrame" /* 10902 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10903 */;
import useEdgeOnlySwipeExitDefault from "useEdgeOnlySwipeExit" /* 12055 */;
import getInlineFramePresentationDefault from "getInlineFramePresentation" /* 12058 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 12076 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6840 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import AppStateStore from "AppStateStore" /* 1994 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

require = fn;
function StatusCard(body) {
  body = body.body;
  ({ title, children } = body);
  const tmp = closure_24();
  const obj = { style: tmp.centered, children: null };
  const obj2 = { variant: "primary", style: tmp.card, children: null };
  const obj3 = { style: tmp.cardBody, children: null };
  const obj4 = { style: tmp.cardCopy, children: null };
  const items = [__initData2(Text_Text.Text, { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title }), ];
  let tmp2Result = null;
  if (null != body) {
    const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
    tmp2Result = __initData2(Text_Text.Text, obj6);
  }
  items[1] = tmp2Result;
  obj4.children = items;
  const items1 = [__initData3(React5, obj4), children];
  obj3.children = items1;
  obj2.children = __initData3(React5, obj3);
  obj.children = __initData2(Card.Card, obj2);
  return __initData2(React5, obj);
}
function HoldSwipeExit() {
  useEdgeOnlySwipeExitDefault(true);
  return null;
}
class PreviewFrame {
  constructor(arg0) {
    applicationId = global.applicationId;
    projectId = global.projectId;
    frameSurface = global.frameSurface;
    launch = global.launch;
    visible = global.visible;
    flag = global.headerVisible;
    if (flag === undefined) {
      flag = true;
    }
    c5 = flag;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    c9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    top = undefined;
    bottom = undefined;
    left = undefined;
    right = undefined;
    tmp = applicationId;
    tmp2 = frameSurface;
    obj = applicationId(frameSurface[20]);
    conjureControlActive = obj.useConjureControlActive(projectId);
    obj2 = visible;
    items = [, ];
    items[0] = projectId;
    items[1] = visible;
    effect = visible.useEffect(() => () => top(projectId), items);
    tmp5 = closure_24();
    obj3 = applicationId(frameSurface[21]);
    items1 = [];
    items1[0] = left;
    stateFromStores = obj3.useStateFromStores(items1, () => conjurePreviewSurface.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId)));
    closure_6 = stateFromStores;
    items2 = [, ];
    items2[0] = stateFromStores;
    items2[1] = frameSurface;
    memo = visible.useMemo(() => conjurePreviewSurface.getConjurePreviewSurface(stateFromStores, frameSurface), items2);
    closure_7 = memo;
    tmp8 = projectId;
    tmp9 = projectId(frameSurface[22])(applicationId, memo);
    closure_8 = tmp9;
    tmp10 = null;
    if (null != tmp9) {
      tmp11 = isLaunched;
      tmp10 = null;
      if (isLaunched(tmp9)) {
        tmp10 = tmp9;
      }
    }
    iframeId = undefined;
    if (tmp10 != null) {
      iframeId = tmp10.data.iframeId;
    }
    if (iframeId == null) {
      iframeId = null;
    }
    c9 = iframeId;
    items3 = [, ];
    items3[0] = iframeId;
    items3[1] = visible;
    effect1 = obj2.useEffect(() => {
      if (null != iframeId) {
        const result = ConjurePlatformUtils.setConjurePreviewFrameVisibility(tmp, visible);
      }
    }, items3);
    str = undefined;
    if (launch != null) {
      str = launch.customId;
    }
    if (str == null) {
      str = "";
    }
    combined = "" + frameSurface + ":" + str;
    closure_10 = combined;
    tmp15 = launch(obj2.useState(null), 2);
    tmp16 = tmp15[1];
    closure_11 = tmp16;
    tmp17 = launch(obj2.useState(combined), 2);
    if (tmp17[0] !== combined) {
      tmp18 = tmp17[1](combined);
      tmp16Result = tmp16(null);
    }
    tmp20 = tmp15[0] === combined;
    closure_12 = tmp20;
    items4 = [, , , , , ];
    items4[0] = applicationId;
    items4[1] = tmp20;
    items4[2] = tmp9;
    items4[3] = launch;
    items4[4] = combined;
    items4[5] = memo;
    effect2 = obj2.useEffect(() => {
      if (!closure_12) {
        if (null == closure_8) {
          const mainFrame = FramesStore.getMainFrame();
          if (null != mainFrame) {
            leaveFrame.leaveFrame(mainFrame.id);
          }
          const obj3 = { applicationId, surface: memo, launch };
          FramesActionCreatorsDefault.launchFrame(obj3).catch(() => closure_1_11(combined));
          const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj3);
        }
      }
    }, items4);
    insets = tmp8(tmp2[25])().insets;
    top = insets.top;
    bottom = insets.bottom;
    left = insets.left;
    right = insets.right;
    items5 = [, , , , ];
    items5[0] = top;
    items5[1] = bottom;
    items5[2] = left;
    items5[3] = right;
    items5[4] = flag;
    memo1 = obj2.useMemo(() => {
      const rect = { top, bottom, left, right };
      return getInlineFramePresentationDefault(rect, flag);
    }, items5);
    context = obj2.useContext(closure_26);
    applicationId1 = undefined;
    tmp8Result = tmp8(tmp2[27]);
    if (tmp10 != null) {
      applicationId1 = tmp10.applicationId;
    }
    if (applicationId1 == null) {
      applicationId1 = null;
    }
    tmp24Result = tmp8Result(applicationId1);
    if (null != tmp10) {
      tmp31 = jsxs;
      obj1 = { style: null, children: null };
      obj1.style = tmp5.frame;
      tmp32 = closure_7;
      obj12 = { projectId: null, active: null, visible: null, children: null };
      obj12.projectId = projectId;
      obj12.active = conjureControlActive;
      obj12.visible = visible;
      tmp34 = jsx;
      tmp8Result1 = tmp8(tmp2[28]);
      obj13 = { frameId: null, level: null, presentation: null, spinnerWhileLoading: null };
      obj13.frameId = tmp10.id;
      tmp8Result2 = tmp8(tmp2[29]);
      obj13.level = tmp(tmp2[30]).FrameStackLevel.WithinAppContent;
      obj13.presentation = memo1;
      tmpResult = tmp(tmp2[17]);
      obj13.spinnerWhileLoading = tmpResult.isConjurePreviewSurface(tmp10.surface);
      items6 = [, ];
      items6[0] = jsx(tmp8Result2, obj13);
      tmp34Result = null;
      if (visible) {
        tmp34Result = null;
        if (bottom(projectId).active) {
          tmp34Result = null;
          if (!conjureControlActive) {
            obj14 = { projectId: null };
            obj14.projectId = projectId;
            tmp34Result = tmp34(tmp8(tmp2[31]), obj14);
          }
        }
      }
      items6[1] = tmp34Result;
      obj12.children = items6;
      items7 = [, ];
      items7[0] = tmp31(tmp8Result1, obj12);
      tmp34Result1 = null;
      if (visible) {
        tmp34Result1 = null;
        if (context) {
          tmp38 = HoldSwipeExit;
          tmp34Result1 = tmp34(HoldSwipeExit, {});
        }
      }
      items7[1] = tmp34Result1;
      obj1.children = items7;
      tmp31Result = tmp31(tmp32, obj1);
    } else {
      tmp39 = jsx;
      if (tmp20) {
        tmp30 = StatusCard;
        obj15 = { title: null, body: null, children: null };
        intl = tmp(tmp2[32]).intl;
        obj15.title = intl.string(tmp8(tmp2[33]).lTPbnG);
        intl2 = tmp(tmp2[32]).intl;
        obj15.body = intl2.string(tmp8(tmp2[33]).e6GiAZ);
        obj16 = { variant: "primary", size: "sm", text: null, onPress: null };
        intl3 = tmp(tmp2[32]).intl;
        obj16.text = intl3.string(tmp8(tmp2[33])["WFJ/vb"]);
        obj16.onPress = function onPress() {
          return closure_11(null);
        };
        obj15.children = tmp39(tmp(tmp2[34]).Button, obj16);
        tmp31Result = tmp39(StatusCard, obj15);
      } else {
        tmp27 = closure_7;
        obj17 = { style: null, children: null };
        obj17.style = tmp5.centered;
        tmp28 = c5;
        obj17.children = tmp39(c5, {});
        tmp31Result = tmp39(closure_7, obj17);
      }
    }
    return tmp31Result;
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
    const intl = tmp2(1114).intl;
    obj2.title = intl.string(_modDef3865["08U+YO"]);
    const intl2 = tmp2(1114).intl;
    obj2.body = intl2.string(_modDef3865.pKBfrc);
    let tmp6Result = closure_22(StatusCard, obj2);
  } else {
    const obj3 = { contentContainerStyle: tmp.widget, children: null };
    const obj4 = { userId: stateFromStores, widget: tmp5 };
    obj3.children = closure_22(UserProfileApplicationWidgetCardDefault, obj4);
    tmp6Result = closure_22(closure_6, obj3);
  }
  return tmp6Result;
}
function PreviewBot(projectId) {
  projectId = projectId.projectId;
  const previewApplicationId = projectId.previewApplicationId;
  dependencyMap = undefined;
  let channelId;
  let stateFromStores;
  closure_5 = undefined;
  closure_6 = undefined;
  let id;
  let stateFromStores1;
  let stateFromStores2;
  const tmp = closure_24();
  [tmp4, c2] = channelId(stateFromStores.useState(null), 2);
  let previewApplicationId1;
  if (tmp4 != null) {
    previewApplicationId1 = tmp4.previewApplicationId;
  }
  channelId = null;
  if (previewApplicationId1 === previewApplicationId) {
    channelId = tmp4.channelId;
  }
  let tmp2 = channelId;
  const tmp3 = channelId(stateFromStores.useState(null), 2);
  const items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = projectId(504).useStateFromStores(items, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items1);
  const tmp2Result = tmp2(stateFromStores.useState(null), 2);
  closure_5 = tmp2Result[1];
  closure_6 = tmp11;
  const items2 = [projectId, previewApplicationId, stateFromStores, tmp2Result[0] === previewApplicationId];
  const effect = obj.useEffect(() => {
    if (null == stateFromStores) {
      if (!closure_6) {
        c0 = false;
        const conjurePreviewDm = projectId(_undefined[37]).loadConjurePreviewDm(c0);
        conjurePreviewDm.then((channelId) => {
          if (!c0) {
            const obj = { previewApplicationId, channelId };
            c2(obj);
          }
        }, () => {
          if (!c0) {
            closure_5(previewApplicationId);
          }
        });
        return () => {
          c0 = true;
        };
      }
    }
  }, items2);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (id == null) {
    id = null;
  }
  const items3 = [id];
  const effect1 = obj.useEffect(() => {
    if (null != id) {
      ChannelActionCreatorsDefault.preload(guildId, tmp);
    }
  }, items3);
  let obj2 = projectId(504);
  const items4 = [ReadStateStore];
  const items5 = [id];
  stateFromStores1 = projectId(504).useStateFromStores(items4, () => {
    let hasUnreadResult = null != id;
    if (hasUnreadResult) {
      hasUnreadResult = ReadStateStore.hasUnread(tmp);
    }
    return hasUnreadResult;
  }, items5);
  const tmp7Result = projectId(504);
  const items6 = [AppStateStore];
  stateFromStores2 = projectId(504).useStateFromStores(items6, () => state.getState() === constants.ACTIVE);
  const items7 = [stateFromStores, stateFromStores1, stateFromStores2];
  const effect2 = obj.useEffect(() => {
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
  const callback = obj.useCallback(() => closure_5(null), []);
  if (tmp2Result[0] === previewApplicationId) {
    const obj3 = { title: null, body: null, children: null };
    const intl = tmp7(1114).intl;
    obj3.title = intl.string(previewApplicationId(3865)["VP/O8s"]);
    const intl2 = tmp7(1114).intl;
    obj3.body = intl2.string(previewApplicationId(3865).Sl9ITD);
    const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl3 = tmp7(1114).intl;
    obj4.text = intl3.string(tmp7(1114).t["5911Lb"]);
    obj4.onPress = callback;
    obj3.children = closure_22(tmp7(5629).Button, obj4);
    let tmp28Result = closure_22(StatusCard, obj3);
  } else if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: closure_22(closure_5, {}) };
    tmp28Result = closure_22(id, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: null };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: tmp19, screenIndex: "conjure-preview", alwaysRespectKeyboard: true, disableGradient: true };
    const items8 = [closure_22(previewApplicationId(11195), obj7, stateFromStores.id), ];
    let tmp30Result = null;
    if (tmp7Result4.isAndroid()) {
      tmp30Result = closure_22(tmp7(12183).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp30Result;
    obj6.children = items8;
    tmp28Result = closure_23(id, obj6);
    tmp7Result4 = tmp7(1376);
  }
  return tmp28Result;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const conjureDesignFeedbackStore = fn(12053);
({ exitConjureDesignFeedback: map1, useConjureDesignFeedback: closure_14 } = conjureDesignFeedbackStore);
const Constants = fn(1072);
({ AnalyticsObjects: closure_16, AnalyticsObjectTypes: closure_17, AnalyticsSections: closure_18, AppStates: closure_19, ME: closure_20 } = Constants);
const isLaunched = fn(6841).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(5009);
let obj = { frame: { flex: 1 }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, card: { alignSelf: "stretch" }, cardBody: null, cardCopy: null, cardText: null, widget: null, dm: null };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
obj.cardBody = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj4 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.cardCopy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.cardText = { textAlign: "center" };
let obj5 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.widget = { padding: nativeDefault.space.PX_16 };
obj.dm = { flex: 1 };
const dependencyMap2 = createStyles.createStyles(obj);
let context = noop.createContext(false);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default function ConjureNativePreview(arg0) {
  ({ projectId, previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
  let previewBotMissing;
  ({ availability, frameSurface, frameLaunchParams, frameHostAvailable } = arg0);
  if (permissionsGate != null) {
    previewBotMissing = permissionsGate.previewBotMissing;
  }
  if (true === previewBotMissing) {
    const obj2 = { title: null, body: null, children: null };
    const intl8 = util.intl;
    obj2.title = intl8.string(_modDef3865.FExK4w);
    const intl9 = util.intl;
    obj2.body = intl9.string(_modDef3865.e8XOnl);
    const obj3 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
    const intl10 = util.intl;
    obj3.text = intl10.string(_modDef3865.YVFKfP);
    ({ onReviewPermissions: obj9.onPress, loading: obj9.loading } = permissionsGate);
    obj2.children = __initData2(components_Button_Button.Button, obj3);
    return __initData2(StatusCard, obj2);
  } else if (null != permissionsGate) {
    const obj4 = { title: null, body: null, children: null };
    const intl5 = util.intl;
    obj4.title = intl5.string(_modDef3865.FExK4w);
    const intl6 = util.intl;
    obj4.body = intl6.string(_modDef3865["2pDCXO"]);
    const obj5 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
    const intl7 = util.intl;
    obj5.text = intl7.string(_modDef3865["Nub/J6"]);
    ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
    obj4.children = __initData2(components_Button_Button.Button, obj5);
    return __initData2(StatusCard, obj4);
  } else if ("frame" === mode) {
    if (frameHostAvailable) {
      const obj6 = { applicationId: previewApplicationId, projectId, frameSurface, launch: frameLaunchParams, visible: true };
      let tmp12Result = __initData2(PreviewFrame, obj6);
    } else {
      const obj8 = { title: null, body: null };
      const intl3 = util.intl;
      obj8.title = intl3.string(_modDef3865["7k4GyN"]);
      const intl4 = util.intl;
      obj8.body = intl4.string(_modDef3865.zdIy3R);
      tmp12Result = __initData2(StatusCard, obj8);
    }
    return tmp12Result;
  } else if ("widget" === mode) {
    let tmp9 = null;
    if (null != widgetApplicationId) {
      const obj17 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === availability.profileState };
      tmp9 = __initData2(PreviewWidget, obj17);
    }
    return tmp9;
  } else if ("bot" === mode) {
    const obj18 = { projectId, previewApplicationId };
    return __initData2(PreviewBot, obj18);
  } else if ("overlay" === mode) {
    return null;
  } else if (null === mode) {
    const obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3865["7k4GyN"]);
    const intl2 = util.intl;
    obj.body = intl2.string(_modDef3865.zdIy3R);
    return __initData2(StatusCard, obj);
  }
};
export function leaveConjurePreviewFrame(previewAppId) {
  const conjureBuilderPreviewFrames = conjurePreviewSurface.getConjureBuilderPreviewFrames(previewAppId);
  for (const item10011 of conjureBuilderPreviewFrames) {
    let obj2 = leaveFrame;
    let leaveFrameResult = obj2.leaveFrame(item10011.id);
    continue;
  }
}
export const ConjureBuilderInlineContext = context;
export { PreviewFrame };