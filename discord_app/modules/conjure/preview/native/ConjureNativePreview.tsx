// discord_app/modules/conjure/preview/native/ConjureNativePreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import leaveFrame from "../../../frames/leaveFrame.tsx";
import ConjurePlatformUtils from "../../shared/ConjurePlatformUtils.native.tsx";
import conjurePreviewSurface2 from "../conjurePreviewSurface.tsx";
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
const util = intl(1126);
const UserProfileApplicationWidgetTypes = intl(7326);
require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const conjureDesignFeedbackStore = fn(11350);
({ exitConjureDesignFeedback: map1, useConjureDesignFeedback: closure_14 } = conjureDesignFeedbackStore);
const Constants = fn(1085);
({
  AnalyticsObjects: closure_16,
  AnalyticsObjectTypes: closure_17,
  AnalyticsSections: closure_18,
  AppStates: closure_19,
  ME: closure_20,
} = Constants);
const isLaunched = fn(10802).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
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
obj2.cardBody = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj4 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.cardCopy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.cardText = { textAlign: "center" };
let obj5 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.widget = { padding: nativeDefault.space.PX_16 };
obj2.dm = { flex: 1 };
let closure_24 = createStyles.createStyles(obj2);
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
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PreviewFrame(applicationId) {
      const cResult = applicationId(launch[16]).c(54);
      applicationId = applicationId.applicationId;
      const projectId = applicationId.projectId;
      ({ frameSurface, launch } = applicationId);
      const visible = applicationId.visible;
      const headerVisible = applicationId.headerVisible;
      let obj = applicationId(launch[16]);
      const conjureControlActive = applicationId(launch[21]).useConjureControlActive(projectId);
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
          class G {
            constructor() {
              obj = closure_0(closure_2[19]);
              return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
            }
          }
          cResult[6] = projectId;
          cResult[7] = G;
        } else {
          class G {
            constructor() {
              obj = closure_0(closure_2[19]);
              return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
            }
          }
        }
        const stateFromStores = tmp(launch[22]).useStateFromStores(tmp11, G);
        if (cResult[8] === frameSurface) {
          class G {
            constructor() {
              obj = closure_0(closure_2[19]);
              return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
            }
          }
          noop = tmp15;
          const tmp18 = projectId(launch[23])(applicationId, tmp15);
          closure_5 = tmp18;
          if (cResult[11] !== tmp18) {
            class G {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
            let tmp21 = null;
            if (null != tmp18) {
              class G {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
              tmp21 = null;
              if (isLaunched(tmp18)) {
                class G {
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
            class G {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
          }
          if (tmp20 != null) {
            class G {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
          }
          if (undefined == null) {
            class G {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
          }
          c6 = tmp23;
          if (cResult[13] === undefined) {
            class G {
              constructor() {
                obj = closure_0(closure_2[19]);
                return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
              }
            }
            const effect1 = obj3.useEffect(K, tmp25);
            if (launch != null) {
              class G {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
            }
            if (undefined == null) {
              class G {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
            }
            const _HermesInternal = HermesInternal;
            const combined = "" + frameSurface + ":" + tmp27;
            class K {
              constructor() {
                if (null != c6) {
                  tmp2 = closure_0;
                  tmp3 = closure_2;
                  obj = closure_0(closure_2[24]);
                  tmp4 = visible;
                  result = obj.setConjurePreviewFrameVisibility(tmp, visible);
                }
                return;
              }
            }
            FramesStore = tmp31;
            const tmp30 = visible(obj3.useState(null), 2);
            if (tmp32[0] !== combined) {
              class G {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
              tmp31(null);
            }
            closure_9 = tmp34;
            if (cResult[17] === applicationId) {
              class G {
                constructor() {
                  obj = closure_0(closure_2[19]);
                  return obj.getConjurePreviewGuildId(closure_15.getProject(projectId));
                }
              }
            }
            function ee() {
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
            cResult[23] = ee;
            cResult[24] = items1;
            tmp32 = visible(obj3.useState(combined), 2);
          }
          class K {
            constructor() {
              if (null != c6) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[24]);
                tmp4 = visible;
                result = obj.setConjurePreviewFrameVisibility(tmp, visible);
              }
              return;
            }
          }
          const items2 = [undefined, visible];
          cResult[13] = undefined;
          cResult[14] = visible;
          cResult[15] = K;
          cResult[16] = items2;
          tmp25 = items2;
        }
        const tmpResult3 = tmp(launch[22]);
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
      const tmpResult = applicationId(launch[21]);
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
      const conjureControlActive = applicationId(frameSurface[21]).useConjureControlActive(projectId);
      const items = [projectId, visible];
      const effect = visible.useEffect(() => () => top(projectId), items);
      const tmp5 = closure_24();
      let obj = applicationId(frameSurface[21]);
      const items1 = [left];
      const stateFromStores = applicationId(frameSurface[22]).useStateFromStores(items1, () =>
        conjurePreviewSurface2.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId)),
      );
      const items2 = [stateFromStores, frameSurface];
      const memo = visible.useMemo(
        () => conjurePreviewSurface2.getConjurePreviewSurface(stateFromStores, frameSurface),
        items2,
      );
      const tmp9 = projectId(frameSurface[23])(applicationId, memo);
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
      const insets = tmp8(tmp2[26])().insets;
      top = insets.top;
      bottom = insets.bottom;
      left = insets.left;
      right = insets.right;
      const items5 = [top, bottom, left, right, flag];
      const memo1 = obj2.useMemo(() => {
        const rect = { top, bottom, left, right };
        return getInlineFramePresentationDefault(rect, flag);
      }, items5);
      let tmp24 = visible;
      let obj3 = applicationId(frameSurface[22]);
      if (visible) {
        tmp24 = null != tmp10;
      }
      projectId(frameSurface[28])(tmp24);
      let applicationId1;
      const tmp8Result = projectId(frameSurface[28]);
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
        const tmp34 = memo;
        const tmp8Result5 = tmp8(tmp2[33]);
        obj6.level = tmp(tmp2[31]).FrameStackLevel.WithinAppContent;
        obj6.presentation = memo1;
        const items6 = [closure_22(tmp8(tmp2[30]), obj6)];
        let tmp33Result = null;
        if (visible) {
          tmp33Result = null;
          if (bottom(projectId).active) {
            tmp33Result = null;
            if (!conjureControlActive) {
              const obj7 = { projectId };
              tmp33Result = closure_22(tmp8(tmp2[32]), obj7);
            }
          }
        }
        items6[1] = tmp33Result;
        obj5.children = items6;
        obj4.children = closure_23(tmp8Result5, obj5);
        let tmp33Result2 = closure_22(tmp34, obj4);
        const tmp8Result6 = tmp8(tmp2[30]);
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
        tmp33Result2 = closure_22(closure_25, obj8);
      } else {
        const obj10 = { style: tmp5.centered, children: closure_22(flag, {}) };
        tmp33Result2 = closure_22(memo, obj10);
      }
      return tmp33Result2;
    };
let closure_26 = tmp6;
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
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
          obj3.title = intl2.string(_modDef3849["08U+YO"]);
          intl = util.intl;
          stringResult = intl.string(_modDef3849.pKBfrc);
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
        const intl = tmp2(1126).intl;
        obj2.title = intl.string(_modDef3849["08U+YO"]);
        const intl2 = tmp2(1126).intl;
        obj2.body = intl2.string(_modDef3849.pKBfrc);
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
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PreviewBot(previewApplicationId) {
      const cResult = id(576).c(43);
      closure_24();
      let obj = id(576);
      const application = id(6853).useApplication(previewApplicationId.previewApplicationId);
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
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function u() {
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
        };
        const items1 = [id];
        cResult[1] = id;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      let obj2 = id(6853);
      const stateFromStores = id(504).useStateFromStores(first, tmp9, tmp10);
      const tmp13 = _slicedToArray(noop.useState(null), 2);
      dependencyMap = tmp13[1];
      _slicedToArray = tmp14;
      const tmpResult = id(504);
      [tmp16, noop] = noop.useState(0);
      if (cResult[4] === id) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === tmp14) {
            let tmp17 = cResult[7];
          }
          if (cResult[8] === tmp16) {
            if (cResult[9] === id) {
              if (cResult[10] === stateFromStores) {
                if (cResult[11] === tmp14) {
                  let tmp18 = cResult[12];
                }
                const effect = noop.useEffect(tmp17, tmp18);
                let id1;
                if (stateFromStores != null) {
                  id1 = stateFromStores.id;
                }
                if (id1 == null) {
                  id1 = null;
                }
                if (cResult[13] !== id1) {
                  class H {
                    constructor() {
                      if (null != c5) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[40]);
                        tmp4 = ME;
                        preloadResult = obj.preload(ME, tmp);
                      }
                      return;
                    }
                  }
                  const items2 = [id1];
                  cResult[13] = id1;
                  cResult[14] = H;
                  cResult[15] = items2;
                  let tmp22 = items2;
                } else {
                  class H {
                    constructor() {
                      if (null != c5) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[40]);
                        tmp4 = ME;
                        preloadResult = obj.preload(ME, tmp);
                      }
                      return;
                    }
                  }
                  tmp22 = cResult[15];
                }
                const effect1 = noop.useEffect(H, tmp22);
                const _Symbol = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  class H {
                    constructor() {
                      if (null != c5) {
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
                  cResult[16] = items3;
                  const tmp24 = items3;
                } else {
                  class H {
                    constructor() {
                      if (null != c5) {
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
                if (cResult[17] !== id1) {
                  class H {
                    constructor() {
                      if (null != c5) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[40]);
                        tmp4 = ME;
                        preloadResult = obj.preload(ME, tmp);
                      }
                      return;
                    }
                  }
                  const items4 = [id1];
                  cResult[17] = id1;
                  cResult[18] = items4;
                  cResult[19] = tmp27;
                  let tmp26 = tmp27;
                  const tmp25 = items4;
                } else {
                  class H {
                    constructor() {
                      if (null != c5) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[40]);
                        tmp4 = ME;
                        preloadResult = obj.preload(ME, tmp);
                      }
                      return;
                    }
                  }
                  tmp26 = cResult[19];
                }
                const stateFromStores1 = tmp(504).useStateFromStores(tmp24, tmp26, tmp25);
                const _Symbol2 = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  class H {
                    constructor() {
                      if (null != c5) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[40]);
                        tmp4 = ME;
                        preloadResult = obj.preload(ME, tmp);
                      }
                      return;
                    }
                  }
                  const items5 = [AppStateStore];
                  class Q {
                    constructor() {
                      return closure_1_12.getState() === closure_1_19.ACTIVE;
                    }
                  }
                  cResult[20] = items5;
                  cResult[21] = Q;
                  let tmp30 = Q;
                  const tmp29 = items5;
                } else {
                  class H {
                    constructor() {
                      if (null != c5) {
                        tmp2 = closure_1;
                        tmp3 = closure_2;
                        obj = closure_1(closure_2[40]);
                        tmp4 = ME;
                        preloadResult = obj.preload(ME, tmp);
                      }
                      return;
                    }
                  }
                  tmp30 = cResult[21];
                }
                const tmpResult3 = tmp(504);
                const stateFromStores2 = tmp(504).useStateFromStores(tmp29, tmp30);
                if (cResult[22] === stateFromStores2) {
                  class H {
                    constructor() {
                      if (null != c5) {
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
                function te() {
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
                }
                const items6 = [stateFromStores, stateFromStores1, stateFromStores2];
                cResult[22] = stateFromStores2;
                cResult[23] = stateFromStores;
                cResult[24] = stateFromStores1;
                cResult[25] = te;
                cResult[26] = items6;
                const tmpResult4 = tmp(504);
              }
            }
          }
          const items7 = [, stateFromStores, tmp14, tmp16];
          cResult[8] = tmp16;
          cResult[9] = id;
          cResult[10] = stateFromStores;
          cResult[11] = tmp14;
          cResult[12] = items7;
          tmp18 = items7;
        }
      }
      class G {
        constructor() {
          if (null != c0) {
            tmp2 = closure_1;
            if (null == closure_1) {
              tmp3 = closure_3;
              if (!closure_3) {
                flag = false;
                c0 = false;
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj = closure_1(closure_2[40]);
                obj1 = { recipientIds: null, navigateToChannel: false };
                obj1.recipientIds = tmp;
                openPrivateChannelResult = obj.openPrivateChannel(obj1);
                catchPromise = openPrivateChannelResult.catch(() => {
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
          return;
        }
      }
      cResult[4] = id;
      cResult[5] = stateFromStores;
      cResult[6] = null != id && tmp13[0] === id;
      cResult[7] = G;
      tmp17 = G;
      const tmp12Result = _slicedToArray(noop.useState(0), 2);
    }
  : function PreviewBot(previewApplicationId) {
      let id;
      let stateFromStores;
      dependencyMap = undefined;
      _slicedToArray = undefined;
      noop = undefined;
      let id1;
      let stateFromStores1;
      let stateFromStores2;
      let tmp = closure_24();
      const application = id(6853).useApplication(previewApplicationId.previewApplicationId);
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
      let obj = id(6853);
      const items = [ChannelStore];
      const items1 = [id];
      stateFromStores = id(504).useStateFromStores(
        items,
        () => {
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
        },
        items1,
      );
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
              const obj = stateFromStores(7015);
              stateFromStores(7015)
                .openPrivateChannel(obj2)
                .catch(() => {
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
      stateFromStores1 = id(504).useStateFromStores(
        items4,
        () => {
          let hasUnreadResult = null != id1;
          if (hasUnreadResult) {
            hasUnreadResult = ReadStateStore.hasUnread(tmp);
          }
          return hasUnreadResult;
        },
        items5,
      );
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
          const obj2 = {
            section: constants3.CHANNEL,
            object: constants.ACK_INCOMING_MESSAGE,
            objectType: constants2.ACK_AUTOMATIC,
          };
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
        const intl = tmp2(1126).intl;
        obj2.title = intl.string(stateFromStores(3849)["VP/O8s"]);
        const intl2 = tmp2(1126).intl;
        obj2.body = intl2.string(stateFromStores(3849).Sl9ITD);
        let tmp19Result = null;
        if (tmp9) {
          const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
          const intl3 = tmp2(1126).intl;
          obj4.text = intl3.string(tmp2(1126).t["5911Lb"]);
          obj4.onPress = callback;
          tmp19Result = closure_22(tmp2(5379).Button, obj4);
        }
        obj2.children = tmp19Result;
        return closure_22(closure_25, obj2);
      }
      if (null == stateFromStores) {
        const obj5 = { style: tmp.centered, children: null };
        tmp = id1;
        obj5.children = closure_22(id1, {});
        closure_22(stateFromStores2, obj5);
      } else {
        const obj6 = { style: tmp.dm, children: null };
        const obj7 = {
          guildId,
          channelId: stateFromStores.id,
          chatInputRef: ref,
          screenIndex: "conjure-preview",
          alwaysRespectKeyboard: true,
          disableGradient: true,
        };
        const items8 = [closure_22(stateFromStores(10363), obj7, stateFromStores.id)];
        let tmp29Result = null;
        if (tmp2Result6.isAndroid()) {
          tmp29Result = closure_22(tmp2(11510).PortalKeyboardRenderer, { portal: true });
        }
        items8[1] = tmp29Result;
        obj6.children = items8;
        closure_23(stateFromStores2, obj6);
        tmp2Result6 = tmp2(1382);
      }
      ref = noop.useRef(null);
    };
ReactCompilerGating = fn(558);
let obj6 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativePreview(arg0) {
      const cResult = c.c(25);
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
          const stringResult = intl8.string(_modDef3849.FH2Udn);
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
          const stringResult1 = intl5.string(_modDef3849.xu1I8B);
          const intl6 = util.intl;
          const stringResult2 = intl6.string(_modDef3849["8qJtGr"]);
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
          const stringResult3 = intl7.string(_modDef3849["Nub/J6"]);
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
          let tmp20Result = closure_1_22(closure_26, obj6);
        } else {
          const obj7 = { title: null, body: null };
          const intl3 = util.intl;
          obj7.title = intl3.string(_modDef3849["7k4GyN"]);
          const intl4 = util.intl;
          obj7.body = intl4.string(_modDef3849.zdIy3R);
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
          tmp17 = closure_1_22(closure_27, obj10);
        }
        cResult[19] = availability;
        cResult[20] = widgetApplicationId;
        cResult[21] = tmp17;
        tmp16 = tmp17;
      } else if ("bot" === mode) {
        if (cResult[22] !== previewApplicationId) {
          const obj19 = { previewApplicationId };
          const tmp15 = closure_1_22(closure_28, obj19);
          cResult[22] = previewApplicationId;
          cResult[23] = tmp15;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[23];
        }
        return tmp12;
      } else if ("overlay" === mode) {
        return null;
      } else if (null === mode) {
        const _Symbol = Symbol;
        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
          const obj20 = { title: null, body: null };
          const intl = util.intl;
          obj20.title = intl.string(_modDef3849["7k4GyN"]);
          const intl2 = util.intl;
          obj20.body = intl2.string(_modDef3849.zdIy3R);
          const tmp11 = closure_1_22(closure_25, obj20);
          cResult[24] = tmp11;
          let tmp7 = tmp11;
        } else {
          tmp7 = cResult[24];
        }
        return tmp7;
      }
    }
  : function ConjureNativePreview(arg0) {
      ({ previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
      ({ projectId, availability, frameSurface, frameLaunchParams, frameHostAvailable } = arg0);
      let previewBotMissing;
      if (permissionsGate != null) {
        previewBotMissing = permissionsGate.previewBotMissing;
      }
      if (true === previewBotMissing) {
        const obj2 = { style: tmp.centered, children: null };
        const obj3 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
        const intl8 = util.intl;
        obj3.text = intl8.string(_modDef3849.FH2Udn);
        ({ onReviewPermissions: obj9.onPress, loading: obj9.loading } = permissionsGate);
        obj2.children = closure_1_22(components_Button_Button.Button, obj3);
        return closure_1_22(React5, obj2);
      } else if (null != permissionsGate) {
        const obj4 = { title: null, body: null, children: null };
        const intl5 = util.intl;
        obj4.title = intl5.string(_modDef3849.xu1I8B);
        const intl6 = util.intl;
        obj4.body = intl6.string(_modDef3849["8qJtGr"]);
        const obj5 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
        const intl7 = util.intl;
        obj5.text = intl7.string(_modDef3849["Nub/J6"]);
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
          let tmp13Result = closure_1_22(closure_26, obj6);
        } else {
          const obj8 = { title: null, body: null };
          const intl3 = util.intl;
          obj8.title = intl3.string(_modDef3849["7k4GyN"]);
          const intl4 = util.intl;
          obj8.body = intl4.string(_modDef3849.zdIy3R);
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
          tmp10 = closure_1_22(closure_27, obj17);
        }
        return tmp10;
      } else if ("bot" === mode) {
        const obj18 = { previewApplicationId };
        return closure_1_22(closure_28, obj18);
      } else if ("overlay" === mode) {
        return null;
      } else if (null === mode) {
        const obj = { title: null, body: null };
        const intl = util.intl;
        obj.title = intl.string(_modDef3849["7k4GyN"]);
        const intl2 = util.intl;
        obj.body = intl2.string(_modDef3849.zdIy3R);
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
export const PreviewFrame = tmp6;
