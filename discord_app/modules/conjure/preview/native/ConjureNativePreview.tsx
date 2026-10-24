// discord_app/modules/conjure/preview/native/ConjureNativePreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import conjurePreviewSurface2 from "../conjurePreviewSurface.tsx";
import ConjurePlatformUtils from "../../shared/ConjurePlatformUtils.native.tsx";
import leaveFrame from "../../../frames/leaveFrame.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import useEdgeOnlySwipeExitDefault from "../../../main_tabs_v2/native/panels/useEdgeOnlySwipeExit.tsx";
import getInlineFramePresentationDefault from "../../../frames/native/getInlineFramePresentation.tsx";
import UserProfileApplicationWidgetCardDefault from "../../../user_profile/native/UserProfileApplicationWidgetCard.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../../frames/FramesStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

const initialize = intl(504);
const util = intl(1128);
const UserProfileApplicationWidgetTypes = intl(7708);
require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const conjureDesignFeedbackStore = fn(11858);
({ exitConjureDesignFeedback: map1, useConjureDesignFeedback: closure_14 } = conjureDesignFeedbackStore);
const Constants = fn(1087);
({
  AnalyticsObjects: closure_16,
  AnalyticsObjectTypes: closure_17,
  AnalyticsSections: closure_18,
  AppStates: closure_19,
  ME: closure_20,
} = Constants);
const isLaunched = fn(6776).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(4971);
let obj = {
  frame: { flex: 1 },
  centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 },
  card: { alignSelf: "stretch" },
  cardBody: null,
  cardCopy: null,
  cardText: null,
  widget: null,
  dm: null,
};
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
obj.cardBody = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj4 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj.cardCopy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.cardText = { textAlign: "center" };
let obj5 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.widget = { padding: nativeDefault.space.PX_16 };
obj.dm = { flex: 1 };
let closure_24 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StatusCard(arg0) {
      const cResult = c.c(20);
      ({ title, body, children } = arg0);
      const tmp4 = closure_24();
      if (cResult[0] === tmp4.cardText) {
        if (cResult[1] === title) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === body) {
          if (cResult[4] === tmp4.cardText) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === tmp4.cardCopy) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === tmp7) {
                let tmp10 = cResult[9];
              }
              if (cResult[10] === children) {
                if (cResult[11] === tmp4.cardBody) {
                  if (cResult[12] === tmp10) {
                    let tmp14 = cResult[13];
                  }
                  if (cResult[14] === tmp4.card) {
                    if (cResult[15] === tmp14) {
                      let tmp18 = cResult[16];
                    }
                    if (cResult[17] === tmp4.centered) {
                      if (cResult[18] === tmp18) {
                        let tmp21 = cResult[19];
                      }
                      return tmp21;
                    }
                    const obj2 = { style: tmp4.centered, children: tmp18 };
                    const tmp24 = closure_1_22(React5, obj2);
                    cResult[17] = tmp4.centered;
                    cResult[18] = tmp18;
                    cResult[19] = tmp24;
                    tmp21 = tmp24;
                  }
                  const obj3 = { variant: "primary", style: tmp4.card, children: tmp14 };
                  const tmp20 = closure_1_22(Card.Card, obj3);
                  cResult[14] = tmp4.card;
                  cResult[15] = tmp14;
                  cResult[16] = tmp20;
                  tmp18 = tmp20;
                }
              }
              const obj4 = { style: tmp4.cardBody, children: null };
              const items = [tmp10, children];
              obj4.children = items;
              const tmp17 = closure_1_23(React5, obj4);
              cResult[10] = children;
              cResult[11] = tmp4.cardBody;
              cResult[12] = tmp10;
              cResult[13] = tmp17;
              tmp14 = tmp17;
            }
          }
          const obj5 = { style: tmp4.cardCopy, children: null };
          const items1 = [tmp5, tmp7];
          obj5.children = items1;
          const tmp13 = closure_1_23(React5, obj5);
          cResult[6] = tmp4.cardCopy;
          cResult[7] = tmp5;
          cResult[8] = tmp7;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
        let tmp8 = null;
        if (null != body) {
          const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.cardText, children: body };
          tmp8 = closure_1_22(Text_Text.Text, obj6);
        }
        cResult[3] = body;
        cResult[4] = tmp4.cardText;
        cResult[5] = tmp8;
        tmp7 = tmp8;
      }
      const tmp6 = closure_1_22(Text_Text.Text, {
        variant: "heading-md/semibold",
        color: "text-default",
        style: tmp4.cardText,
        children: title,
      });
      cResult[0] = tmp4.cardText;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj7 = { variant: "heading-md/semibold", color: "text-default", style: tmp4.cardText, children: title };
    }
  : function StatusCard(body) {
      body = body.body;
      ({ title, children } = body);
      const tmp = closure_24();
      const obj = { style: tmp.centered, children: null };
      const obj2 = { variant: "primary", style: tmp.card, children: null };
      const obj3 = { style: tmp.cardBody, children: null };
      const obj4 = { style: tmp.cardCopy, children: null };
      const items = [
        closure_1_22(Text_Text.Text, {
          variant: "heading-md/semibold",
          color: "text-default",
          style: tmp.cardText,
          children: title,
        }),
      ];
      let tmp2Result = null;
      if (null != body) {
        const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
        tmp2Result = closure_1_22(Text_Text.Text, obj6);
      }
      items[1] = tmp2Result;
      obj4.children = items;
      const items1 = [closure_1_23(React5, obj4), children];
      obj3.children = items1;
      obj2.children = closure_1_23(React5, obj3);
      obj.children = closure_1_22(Card.Card, obj2);
      return closure_1_22(React5, obj);
    };
let context = noop.createContext(false);
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function HoldSwipeExit() {
  useEdgeOnlySwipeExitDefault(true);
  return null;
}
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PreviewFrame(applicationId) {
      const cResult = applicationId(launch[16]).c(58);
      applicationId = applicationId.applicationId;
      const projectId = applicationId.projectId;
      ({ frameSurface, launch } = applicationId);
      const visible = applicationId.visible;
      const headerVisible = applicationId.headerVisible;
      let obj = applicationId(launch[16]);
      const conjureControlActive = applicationId(launch[22]).useConjureControlActive(projectId);
      const active = closure_14(projectId).active;
      if (cResult[0] !== projectId) {
        const fn = function c() {
          return () => closure_2_13(projectId);
        };
        cResult[0] = projectId;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === projectId) {
        if (cResult[3] === visible) {
          let tmp6 = cResult[4];
        }
        const effect = noop.useEffect(tmp5, tmp6);
        closure_24();
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ConjureProjectStore];
          cResult[5] = items;
          let tmp11 = items;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] !== projectId) {
          class N {
            constructor() {
              obj = closure_0(closure_2[19]);
              return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
            }
          }
          cResult[6] = projectId;
          cResult[7] = N;
        } else {
          class N {
            constructor() {
              obj = closure_0(closure_2[19]);
              return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
            }
          }
        }
        const stateFromStores = tmp(launch[23]).useStateFromStores(tmp11, N);
        if (cResult[8] === frameSurface) {
          class N {
            constructor() {
              obj = closure_0(closure_2[19]);
              return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
            }
          }
          noop = tmp15;
          const tmp18 = projectId(launch[24])(applicationId, tmp15);
          closure_5 = tmp18;
          if (cResult[11] !== tmp18) {
            class N {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
            let tmp21 = null;
            if (null != tmp18) {
              class N {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
              tmp21 = null;
              if (isLaunched(tmp18)) {
                class N {
                  constructor() {
                    obj = closure_0(closure_2[19]);
                    return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                  }
                }
              }
            }
            cResult[11] = tmp18;
            cResult[12] = tmp21;
            const tmp20 = tmp21;
          } else {
            class N {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
          }
          if (tmp20 != null) {
            class N {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
          }
          if (undefined == null) {
            class N {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
          }
          c6 = tmp23;
          if (cResult[13] === undefined) {
            class N {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
            const effect1 = obj3.useEffect(U, tmp25);
            if (launch != null) {
              class N {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
            }
            if (undefined == null) {
              class N {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
            }
            const _HermesInternal = HermesInternal;
            const combined = "" + frameSurface + ":" + tmp27;
            class U {
              constructor() {
                if (null != c6) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[25]);
                  tmp4 = visible;
                  result = obj.setConjurePreviewFrameVisibility(tmp, visible);
                }
                return;
              }
            }
            FramesStore = tmp31;
            const tmp30 = visible(obj3.useState(null), 2);
            if (tmp32[0] !== combined) {
              class N {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
              tmp31(null);
            }
            closure_9 = tmp34;
            if (cResult[17] === applicationId) {
              class N {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
            }
            function re() {
              if (!closure_9) {
                if (null == closure_5) {
                  const mainFrame = FramesStore.getMainFrame();
                  if (null != mainFrame) {
                    leaveFrame.leaveFrame(mainFrame.id);
                  }
                  const obj3 = { applicationId, surface, launch };
                  FramesActionCreatorsDefault.launchFrame(obj3).catch(() => closure_1_8(combined));
                  const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj3);
                }
              }
            }
            const items1 = [applicationId, tmp30[0] === combined, tmp18, launch, combined, tmp15];
            cResult[17] = applicationId;
            cResult[18] = tmp30[0] === combined;
            cResult[19] = tmp18;
            cResult[20] = launch;
            cResult[21] = combined;
            cResult[22] = tmp15;
            cResult[23] = re;
            cResult[24] = items1;
            tmp32 = visible(obj3.useState(combined), 2);
          }
          class U {
            constructor() {
              if (null != c6) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[25]);
                tmp4 = visible;
                result = obj.setConjurePreviewFrameVisibility(tmp, visible);
              }
              return;
            }
          }
          const items2 = [undefined, visible];
          cResult[13] = undefined;
          cResult[14] = visible;
          cResult[15] = U;
          cResult[16] = items2;
          tmp25 = items2;
        }
        const tmpResult3 = tmp(launch[23]);
        const conjurePreviewSurface = tmp(launch[19]).getConjurePreviewSurface(stateFromStores, frameSurface);
        cResult[8] = frameSurface;
        cResult[9] = stateFromStores;
        cResult[10] = conjurePreviewSurface;
        const tmpResult4 = tmp(launch[19]);
      }
      const items3 = [projectId, visible];
      cResult[2] = projectId;
      cResult[3] = visible;
      cResult[4] = items3;
      tmp6 = items3;
      const tmpResult = applicationId(launch[22]);
    }
  : function PreviewFrame(applicationId) {
      applicationId = applicationId.applicationId;
      const projectId = applicationId.projectId;
      const frameSurface = applicationId.frameSurface;
      const launch = applicationId.launch;
      const visible = applicationId.visible;
      let flag = applicationId.headerVisible;
      if (flag === undefined) {
        flag = true;
      }
      let iframeId;
      let combined;
      closure_11 = undefined;
      closure_12 = undefined;
      let top;
      let bottom;
      let left;
      let right;
      const conjureControlActive = applicationId(frameSurface[22]).useConjureControlActive(projectId);
      const items = [projectId, visible];
      const effect = visible.useEffect(() => () => top(projectId), items);
      const tmp5 = closure_24();
      let obj = applicationId(frameSurface[22]);
      const items1 = [left];
      const stateFromStores = applicationId(frameSurface[23]).useStateFromStores(items1, () =>
        conjurePreviewSurface2.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId)),
      );
      const items2 = [stateFromStores, frameSurface];
      const memo = visible.useMemo(
        () => conjurePreviewSurface2.getConjurePreviewSurface(stateFromStores, frameSurface),
        items2,
      );
      const tmp9 = projectId(frameSurface[24])(applicationId, memo);
      closure_8 = tmp9;
      let tmp10 = null;
      if (null != tmp9) {
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
      const items3 = [iframeId, visible];
      const effect1 = obj2.useEffect(() => {
        if (null != iframeId) {
          const result = ConjurePlatformUtils.setConjurePreviewFrameVisibility(tmp, visible);
        }
      }, items3);
      let str;
      if (launch != null) {
        str = launch.customId;
      }
      if (str == null) {
        str = "";
      }
      combined = "" + frameSurface + ":" + str;
      const tmp15 = launch(visible.useState(null), 2);
      closure_11 = tmp16;
      const tmp17 = launch(visible.useState(combined), 2);
      if (tmp17[0] !== combined) {
        tmp17[1](combined);
        tmp16(null);
      }
      closure_12 = tmp20;
      const items4 = [applicationId, tmp15[0] === combined, tmp9, launch, combined, memo];
      const effect2 = obj2.useEffect(() => {
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
      const insets = tmp8(tmp2[27])().insets;
      top = insets.top;
      bottom = insets.bottom;
      left = insets.left;
      right = insets.right;
      const items5 = [top, bottom, left, right, flag];
      const memo1 = obj2.useMemo(() => {
        const rect = { top, bottom, left, right };
        return getInlineFramePresentationDefault(rect, flag);
      }, items5);
      context = obj2.useContext(context);
      let applicationId1;
      let obj3 = applicationId(frameSurface[23]);
      if (tmp10 != null) {
        applicationId1 = tmp10.applicationId;
      }
      if (applicationId1 == null) {
        applicationId1 = null;
      }
      projectId(frameSurface[29])(applicationId1);
      if (null != tmp10) {
        const obj4 = { style: tmp5.frame, children: null };
        const obj5 = { projectId, active: conjureControlActive, visible, children: null };
        const obj6 = { frameId: tmp10.id, level: null, presentation: null };
        const tmp32 = memo;
        const tmp8Result3 = tmp8(tmp2[33]);
        obj6.level = tmp(tmp2[31]).FrameStackLevel.WithinAppContent;
        obj6.presentation = memo1;
        const items6 = [closure_22(tmp8(tmp2[30]), obj6)];
        let tmp34Result = null;
        if (visible) {
          tmp34Result = null;
          if (bottom(projectId).active) {
            tmp34Result = null;
            if (!conjureControlActive) {
              const obj7 = { projectId };
              tmp34Result = closure_22(tmp8(tmp2[32]), obj7);
            }
          }
        }
        items6[1] = tmp34Result;
        obj5.children = items6;
        const items7 = [closure_23(tmp8Result3, obj5)];
        let tmp34Result2 = null;
        if (visible) {
          tmp34Result2 = null;
          if (context) {
            tmp34Result2 = closure_22(HoldSwipeExit, {});
          }
        }
        items7[1] = tmp34Result2;
        obj4.children = items7;
        let tmp39Result = closure_23(tmp32, obj4);
        const tmp8Result4 = tmp8(tmp2[30]);
      } else if (tmp20) {
        const obj8 = { title: null, body: null, children: null };
        const intl = tmp(tmp2[34]).intl;
        obj8.title = intl.string(tmp8(tmp2[35]).lTPbnG);
        const intl2 = tmp(tmp2[34]).intl;
        obj8.body = intl2.string(tmp8(tmp2[35]).e6GiAZ);
        const obj9 = { variant: "primary", size: "sm", text: null, onPress: null };
        const intl3 = tmp(tmp2[34]).intl;
        obj9.text = intl3.string(tmp8(tmp2[35])["WFJ/vb"]);
        obj9.onPress = function onPress() {
          return closure_11(null);
        };
        obj8.children = closure_22(tmp(tmp2[36]).Button, obj9);
        tmp39Result = closure_22(closure_25, obj8);
      } else {
        const obj10 = { style: tmp5.centered, children: closure_22(flag, {}) };
        tmp39Result = closure_22(memo, obj10);
      }
      return tmp39Result;
    };
let closure_28 = tmp8;
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PreviewWidget(applicationId) {
      let intl = require;
      let stringResult = dependencyMap;
      const cResult = c.c(11);
      applicationId = applicationId.applicationId;
      const tmp3 = closure_24();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function l() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== applicationId) {
        const obj2 = { applicationId };
        const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj2);
        cResult[2] = applicationId;
        cResult[3] = applicationWidget;
        let tmp8 = applicationWidget;
      } else {
        tmp8 = cResult[3];
      }
      if (applicationId.revoked) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { title: null, body: null };
          const intl2 = util.intl;
          obj3.title = intl2.string(_modDef3830["08U+YO"]);
          intl = util.intl;
          stringResult = intl.string(_modDef3830.pKBfrc);
          obj3.body = stringResult;
          const tmp26 = closure_1_22(closure_25, obj3);
          cResult[4] = tmp26;
        }
      } else {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === tmp8) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] === tmp3.widget) {
            if (cResult[9] === tmp14) {
              let tmp18 = cResult[10];
            }
            return tmp18;
          }
          const obj4 = { contentContainerStyle: tmp3.widget, children: tmp14 };
          const tmp21 = closure_1_22(timestampProducer, obj4);
          cResult[8] = tmp3.widget;
          cResult[9] = tmp14;
          cResult[10] = tmp21;
          tmp18 = tmp21;
        }
        const obj5 = { userId: stateFromStores, widget: tmp8 };
        const tmp17 = closure_1_22(UserProfileApplicationWidgetCardDefault, obj5);
        cResult[5] = stateFromStores;
        cResult[6] = tmp8;
        cResult[7] = tmp17;
        tmp14 = tmp17;
      }
      const intlResult = initialize;
    }
  : function PreviewWidget(applicationId) {
      applicationId = applicationId.applicationId;
      const tmp = closure_24();
      const items = [AuthenticationStore];
      [][0] = applicationId;
      const stateFromStores = applicationId(504).useStateFromStores(items, () => id.getId());
      if (applicationId.revoked) {
        const obj2 = { title: null, body: null };
        const intl = tmp2(1128).intl;
        obj2.title = intl.string(_modDef3830["08U+YO"]);
        const intl2 = tmp2(1128).intl;
        obj2.body = intl2.string(_modDef3830.pKBfrc);
        let tmp6Result = closure_22(closure_25, obj2);
      } else {
        const obj3 = { contentContainerStyle: tmp.widget, children: null };
        const obj4 = { userId: stateFromStores, widget: tmp5 };
        obj3.children = closure_22(UserProfileApplicationWidgetCardDefault, obj4);
        tmp6Result = closure_22(closure_6, obj3);
      }
      return tmp6Result;
    };
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PreviewBot(projectId) {
      const cResult = projectId(576).c(37);
      projectId = projectId.projectId;
      const previewApplicationId = projectId.previewApplicationId;
      closure_24();
      let obj = projectId(576);
      const tmp5 = channelId;
      [tmp7, dependencyMap] = channelId(stateFromStores.useState(null), 2);
      let previewApplicationId1;
      if (tmp7 != null) {
        previewApplicationId1 = tmp7.previewApplicationId;
      }
      channelId = null;
      if (previewApplicationId1 === previewApplicationId) {
        channelId = tmp7.channelId;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function u() {
          let channel = null;
          if (null != channelId) {
            channel = ChannelStore.getChannel(tmp);
          }
          return channel;
        };
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp13 = items1;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[2];
        tmp13 = cResult[3];
      }
      const tmp6 = channelId(stateFromStores.useState(null), 2);
      stateFromStores = projectId(504).useStateFromStores(first, tmp12, tmp13);
      const tmp5Result = tmp5(stateFromStores.useState(null), 2);
      closure_5 = tmp5Result[1];
      closure_6 = tmp16;
      if (cResult[4] === stateFromStores) {
        if (cResult[5] === tmp16) {
          if (cResult[6] === previewApplicationId) {
            if (cResult[7] === projectId) {
              let tmp17 = cResult[8];
              let tmp18 = cResult[9];
            }
            const effect = obj2.useEffect(tmp17, tmp18);
            let id;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            if (id == null) {
              id = null;
            }
            if (cResult[10] !== id) {
              class W {
                constructor() {
                  if (null != c7) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[40]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
              const items2 = [id];
              cResult[10] = id;
              cResult[11] = W;
              cResult[12] = items2;
              let tmp22 = items2;
            } else {
              class W {
                constructor() {
                  if (null != c7) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[40]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
              tmp22 = cResult[12];
            }
            const effect1 = obj2.useEffect(W, tmp22);
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              class W {
                constructor() {
                  if (null != c7) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[40]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
              const items3 = [ReadStateStore];
              cResult[13] = items3;
              const tmp24 = items3;
            } else {
              class W {
                constructor() {
                  if (null != c7) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[40]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
            }
            if (cResult[14] !== id) {
              class X {
                constructor() {
                  hasUnreadResult = null != c7;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              const items4 = [id];
              cResult[14] = id;
              cResult[15] = items4;
              cResult[16] = X;
              let tmp26 = X;
              const tmp25 = items4;
            } else {
              class X {
                constructor() {
                  hasUnreadResult = null != c7;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              tmp26 = cResult[16];
            }
            const stateFromStores1 = tmp(504).useStateFromStores(tmp24, tmp26, tmp25);
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor() {
                  hasUnreadResult = null != c7;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              const items5 = [AppStateStore];
              class Y {
                constructor() {
                  return closure_1_12.getState() === closure_1_19.ACTIVE;
                }
              }
              cResult[17] = items5;
              cResult[18] = Y;
              let tmp29 = Y;
              const tmp28 = items5;
            } else {
              class X {
                constructor() {
                  hasUnreadResult = null != c7;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              tmp29 = cResult[18];
            }
            const tmpResult3 = tmp(504);
            const stateFromStores2 = tmp(504).useStateFromStores(tmp28, tmp29);
            if (cResult[19] === stateFromStores2) {
              class X {
                constructor() {
                  hasUnreadResult = null != c7;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
            }
            class Q {
              constructor() {
                tmp2 = null != closure_4;
                tmp = closure_4;
                if (tmp2) {
                  tmp2 = closure_8;
                }
                if (tmp2) {
                  tmp2 = closure_9;
                }
                if (tmp2) {
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj = closure_0(closure_2[41]);
                  obj1 = { section: null, object: null, objectType: null };
                  tmp5 = AnalyticsSections;
                  obj1.section = AnalyticsSections.CHANNEL;
                  tmp6 = AnalyticsObjects;
                  obj1.object = AnalyticsObjects.ACK_INCOMING_MESSAGE;
                  tmp7 = AnalyticsObjectTypes;
                  obj1.objectType = AnalyticsObjectTypes.ACK_AUTOMATIC;
                  ackChannelResult = obj.ackChannel(tmp, obj1);
                }
                return;
              }
            }
            const items6 = [stateFromStores, stateFromStores1, stateFromStores2];
            cResult[19] = stateFromStores2;
            cResult[20] = stateFromStores;
            cResult[21] = stateFromStores1;
            cResult[22] = Q;
            cResult[23] = items6;
            const tmpResult4 = tmp(504);
          }
        }
      }
      class N {
        constructor() {
          if (null == closure_4) {
            tmp = closure_6;
            if (!closure_6) {
              flag = false;
              c0 = false;
              tmp2 = projectId;
              tmp3 = closure_2;
              obj = projectId(closure_2[39]);
              tmp4 = c0;
              conjurePreviewDm = obj.loadConjurePreviewDm(c0);
              nextPromise = conjurePreviewDm.then(
                (channelId) => {
                  if (!c0) {
                    const obj = { previewApplicationId, channelId };
                    dependencyMap(obj);
                  }
                },
                () => {
                  if (!c0) {
                    closure_5(previewApplicationId);
                  }
                },
              );
              return () => {
                c0 = true;
              };
            }
          }
          return;
        }
      }
      const items7 = [projectId, previewApplicationId, stateFromStores, tmp5Result[0] === previewApplicationId];
      cResult[4] = stateFromStores;
      cResult[5] = tmp5Result[0] === previewApplicationId;
      cResult[6] = previewApplicationId;
      cResult[7] = projectId;
      cResult[8] = N;
      cResult[9] = items7;
      tmp18 = items7;
      tmp17 = N;
      const tmpResult = projectId(504);
    }
  : function PreviewBot(projectId) {
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
      stateFromStores = projectId(504).useStateFromStores(
        items,
        () => {
          let channel = null;
          if (null != channelId) {
            channel = ChannelStore.getChannel(tmp);
          }
          return channel;
        },
        items1,
      );
      const tmp2Result = tmp2(stateFromStores.useState(null), 2);
      closure_5 = tmp2Result[1];
      closure_6 = tmp11;
      const items2 = [projectId, previewApplicationId, stateFromStores, tmp2Result[0] === previewApplicationId];
      const effect = obj.useEffect(() => {
        if (null == stateFromStores) {
          if (!closure_6) {
            c0 = false;
            const conjurePreviewDm = projectId(_undefined[39]).loadConjurePreviewDm(c0);
            conjurePreviewDm.then(
              (channelId) => {
                if (!c0) {
                  const obj = { previewApplicationId, channelId };
                  c2(obj);
                }
              },
              () => {
                if (!c0) {
                  closure_5(previewApplicationId);
                }
              },
            );
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
      stateFromStores1 = projectId(504).useStateFromStores(
        items4,
        () => {
          let hasUnreadResult = null != id;
          if (hasUnreadResult) {
            hasUnreadResult = ReadStateStore.hasUnread(tmp);
          }
          return hasUnreadResult;
        },
        items5,
      );
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
          const obj2 = {
            section: constants3.CHANNEL,
            object: constants.ACK_INCOMING_MESSAGE,
            objectType: constants2.ACK_AUTOMATIC,
          };
          ReadStateActionCreators.ackChannel(stateFromStores, obj2);
        }
      }, items7);
      const callback = obj.useCallback(() => closure_5(null), []);
      if (tmp2Result[0] === previewApplicationId) {
        const obj3 = { title: null, body: null, children: null };
        const intl = tmp7(1128).intl;
        obj3.title = intl.string(previewApplicationId(3830)["VP/O8s"]);
        const intl2 = tmp7(1128).intl;
        obj3.body = intl2.string(previewApplicationId(3830).Sl9ITD);
        const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl3 = tmp7(1128).intl;
        obj4.text = intl3.string(tmp7(1128).t["5911Lb"]);
        obj4.onPress = callback;
        obj3.children = closure_22(tmp7(5244).Button, obj4);
        let tmp28Result = closure_22(closure_25, obj3);
      } else if (null == stateFromStores) {
        const obj5 = { style: tmp.centered, children: closure_22(closure_5, {}) };
        tmp28Result = closure_22(id, obj5);
      } else {
        const obj6 = { style: tmp.dm, children: null };
        const obj7 = {
          guildId,
          channelId: stateFromStores.id,
          chatInputRef: tmp19,
          screenIndex: "conjure-preview",
          alwaysRespectKeyboard: true,
          disableGradient: true,
        };
        const items8 = [closure_22(previewApplicationId(10888), obj7, stateFromStores.id)];
        let tmp30Result = null;
        if (tmp7Result4.isAndroid()) {
          tmp30Result = closure_22(tmp7(12010).PortalKeyboardRenderer, { portal: true });
        }
        items8[1] = tmp30Result;
        obj6.children = items8;
        tmp28Result = closure_23(id, obj6);
        tmp7Result4 = tmp7(1384);
      }
      return tmp28Result;
    };
ReactCompilerGating = fn(558);
let obj6 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativePreview(arg0) {
      const cResult = c.c(26);
      ({
        projectId,
        previewApplicationId,
        mode,
        availability,
        frameSurface,
        frameLaunchParams,
        widgetApplicationId,
        frameHostAvailable,
        permissionsGate,
      } = arg0);
      const tmp4 = closure_24();
      let previewBotMissing;
      if (permissionsGate != null) {
        previewBotMissing = permissionsGate.previewBotMissing;
      }
      if (true === previewBotMissing) {
        const _Symbol4 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl8 = util.intl;
          const stringResult = intl8.string(_modDef3830.FH2Udn);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === permissionsGate.loading) {
          if (cResult[2] === permissionsGate.onReviewPermissions) {
            let tmp43 = cResult[3];
          }
          if (cResult[4] === tmp4.centered) {
            if (cResult[5] === tmp43) {
              let tmp46 = cResult[6];
            }
            return tmp46;
          }
          const obj2 = { style: tmp4.centered, children: tmp43 };
          const tmp49 = closure_1_22(React5, obj2);
          cResult[4] = tmp4.centered;
          cResult[5] = tmp43;
          cResult[6] = tmp49;
          tmp46 = tmp49;
        }
        const obj3 = { variant: "primary", size: "sm", text: first, onPress: null, loading: null };
        ({ onReviewPermissions: obj9.onPress, loading: obj9.loading } = permissionsGate);
        const tmp45 = closure_1_22(components_Button_Button.Button, obj3);
        cResult[1] = permissionsGate.loading;
        cResult[2] = permissionsGate.onReviewPermissions;
        cResult[3] = tmp45;
        tmp43 = tmp45;
      } else if (null != permissionsGate) {
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = util.intl;
          const stringResult1 = intl5.string(_modDef3830.xu1I8B);
          const intl6 = util.intl;
          const stringResult2 = intl6.string(_modDef3830["8qJtGr"]);
          cResult[7] = stringResult1;
          cResult[8] = stringResult2;
          let tmp28 = stringResult2;
          let tmp27 = stringResult1;
        } else {
          tmp27 = cResult[7];
          tmp28 = cResult[8];
        }
        const _Symbol3 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl7 = util.intl;
          const stringResult3 = intl7.string(_modDef3830["Nub/J6"]);
          cResult[9] = stringResult3;
          let tmp32 = stringResult3;
        } else {
          tmp32 = cResult[9];
        }
        if (cResult[10] === permissionsGate.loading) {
          if (cResult[11] === permissionsGate.onReviewPermissions) {
            let tmp35 = cResult[12];
          }
          return tmp35;
        }
        const obj4 = { title: tmp27, body: tmp28, children: null };
        const obj5 = { variant: "primary", size: "sm", text: tmp32, onPress: null, loading: null };
        ({ onReviewPermissions: obj8.onPress, loading: obj8.loading } = permissionsGate);
        obj4.children = closure_1_22(components_Button_Button.Button, obj5);
        const tmp38 = closure_1_22(closure_25, obj4);
        cResult[10] = permissionsGate.loading;
        cResult[11] = permissionsGate.onReviewPermissions;
        cResult[12] = tmp38;
        tmp35 = tmp38;
      } else if ("frame" === mode) {
        if (cResult[13] === frameHostAvailable) {
          if (cResult[14] === frameLaunchParams) {
            if (cResult[15] === frameSurface) {
              if (cResult[16] === previewApplicationId) {
                if (cResult[17] === projectId) {
                  return cResult[18];
                }
              }
            }
          }
        }
        if (frameHostAvailable) {
          const obj6 = {
            applicationId: previewApplicationId,
            projectId,
            frameSurface,
            launch: frameLaunchParams,
            visible: true,
          };
          let tmp20Result = closure_1_22(closure_28, obj6);
        } else {
          const obj7 = { title: null, body: null };
          const intl3 = util.intl;
          obj7.title = intl3.string(_modDef3830["7k4GyN"]);
          const intl4 = util.intl;
          obj7.body = intl4.string(_modDef3830.zdIy3R);
          tmp20Result = closure_1_22(closure_25, obj7);
        }
        cResult[13] = frameHostAvailable;
        cResult[14] = frameLaunchParams;
        cResult[15] = frameSurface;
        cResult[16] = previewApplicationId;
        cResult[17] = projectId;
        cResult[18] = tmp20Result;
      } else if ("widget" === mode) {
        if (cResult[19] === availability) {
          if (cResult[20] === widgetApplicationId) {
            let tmp16 = cResult[21];
          }
          return tmp16;
        }
        let tmp17 = null;
        if (null != widgetApplicationId) {
          const obj10 = {
            applicationId: widgetApplicationId,
            revoked: "unavailable-authorization-revoked" === availability.profileState,
          };
          tmp17 = closure_1_22(closure_29, obj10);
        }
        cResult[19] = availability;
        cResult[20] = widgetApplicationId;
        cResult[21] = tmp17;
        tmp16 = tmp17;
      } else if ("bot" === mode) {
        if (cResult[22] === previewApplicationId) {
          if (cResult[23] === projectId) {
            let tmp12 = cResult[24];
          }
          return tmp12;
        }
        const obj19 = { projectId, previewApplicationId };
        const tmp15 = closure_1_22(closure_30, obj19);
        cResult[22] = previewApplicationId;
        cResult[23] = projectId;
        cResult[24] = tmp15;
        tmp12 = tmp15;
      } else if ("overlay" === mode) {
        return null;
      } else if (null === mode) {
        const _Symbol = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          const obj20 = { title: null, body: null };
          const intl = util.intl;
          obj20.title = intl.string(_modDef3830["7k4GyN"]);
          const intl2 = util.intl;
          obj20.body = intl2.string(_modDef3830.zdIy3R);
          const tmp11 = closure_1_22(closure_25, obj20);
          cResult[25] = tmp11;
          let tmp7 = tmp11;
        } else {
          tmp7 = cResult[25];
        }
        return tmp7;
      }
    }
  : function ConjureNativePreview(arg0) {
      ({ projectId, previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
      ({ availability, frameSurface, frameLaunchParams, frameHostAvailable } = arg0);
      let previewBotMissing;
      if (permissionsGate != null) {
        previewBotMissing = permissionsGate.previewBotMissing;
      }
      if (true === previewBotMissing) {
        const obj2 = { style: tmp.centered, children: null };
        const obj3 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
        const intl8 = util.intl;
        obj3.text = intl8.string(_modDef3830.FH2Udn);
        ({ onReviewPermissions: obj9.onPress, loading: obj9.loading } = permissionsGate);
        obj2.children = closure_1_22(components_Button_Button.Button, obj3);
        return closure_1_22(React5, obj2);
      } else if (null != permissionsGate) {
        const obj4 = { title: null, body: null, children: null };
        const intl5 = util.intl;
        obj4.title = intl5.string(_modDef3830.xu1I8B);
        const intl6 = util.intl;
        obj4.body = intl6.string(_modDef3830["8qJtGr"]);
        const obj5 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
        const intl7 = util.intl;
        obj5.text = intl7.string(_modDef3830["Nub/J6"]);
        ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
        obj4.children = closure_1_22(components_Button_Button.Button, obj5);
        return closure_1_22(closure_25, obj4);
      } else if ("frame" === mode) {
        if (frameHostAvailable) {
          const obj6 = {
            applicationId: previewApplicationId,
            projectId,
            frameSurface,
            launch: frameLaunchParams,
            visible: true,
          };
          let tmp13Result = closure_1_22(closure_28, obj6);
        } else {
          const obj8 = { title: null, body: null };
          const intl3 = util.intl;
          obj8.title = intl3.string(_modDef3830["7k4GyN"]);
          const intl4 = util.intl;
          obj8.body = intl4.string(_modDef3830.zdIy3R);
          tmp13Result = closure_1_22(closure_25, obj8);
        }
        return tmp13Result;
      } else if ("widget" === mode) {
        let tmp10 = null;
        if (null != widgetApplicationId) {
          const obj17 = {
            applicationId: widgetApplicationId,
            revoked: "unavailable-authorization-revoked" === availability.profileState,
          };
          tmp10 = closure_1_22(closure_29, obj17);
        }
        return tmp10;
      } else if ("bot" === mode) {
        const obj18 = { projectId, previewApplicationId };
        return closure_1_22(closure_30, obj18);
      } else if ("overlay" === mode) {
        return null;
      } else if (null === mode) {
        const obj = { title: null, body: null };
        const intl = util.intl;
        obj.title = intl.string(_modDef3830["7k4GyN"]);
        const intl2 = util.intl;
        obj.body = intl2.string(_modDef3830.zdIy3R);
        return closure_1_22(closure_25, obj);
      }
      tmp = closure_24();
    };
export const leaveConjurePreviewFrame = function leaveConjurePreviewFrame(previewAppId) {
  const conjureBuilderPreviewFrames = conjurePreviewSurface2.getConjureBuilderPreviewFrames(previewAppId);
  for (const item10011 of conjureBuilderPreviewFrames) {
    let obj2 = leaveFrame;
    let leaveFrameResult = obj2.leaveFrame(item10011.id);
    continue;
  }
};
export const ConjureBuilderInlineContext = context;
export const PreviewFrame = tmp8;
