// === Module 16628: ConjureNativePreview ===

// Module 16628 (ConjureNativePreview)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3753 from "module_3753" /* 3753 */;
import Text_Text from "Text/Text" /* 4892 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Card from "Card" /* 6002 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6612 */;
import UserProfileApplicationWidgetCardDefault from "UserProfileApplicationWidgetCard" /* 8626 */;
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 8999 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9011 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9019 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9000 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReadStateStore from "ReadStateStore" /* 4911 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;

const initialize = intl(504);
const util = intl(1126);
const UserProfileApplicationWidgetTypes = intl(7128);
require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const conjureDesignFeedbackStore = fn(16583);
({ exitConjureDesignFeedback: map1, useConjureDesignFeedback: closure_14 } = conjureDesignFeedbackStore);
const Constants = fn(1085);
({ AnalyticsObjects: closure_16, AnalyticsObjectTypes: closure_17, AnalyticsSections: closure_18, AppStates: closure_19, ME: closure_20 } = Constants);
const FramesConstants = fn(8738);
({ FrameLayoutModes: closure_21, isLaunched: closure_22 } = FramesConstants);
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { frame: { flex: 1 }, centered: { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 }, card: { alignSelf: "stretch" }, cardBody: null, cardCopy: null, cardText: null, widget: null, dm: null };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
obj2.cardBody = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj4 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.cardCopy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.cardText = { textAlign: "center" };
let obj5 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.widget = { padding: nativeDefault.space.PX_16 };
obj2.dm = { flex: 1 };
let closure_25 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
  ({ title, body, children } = arg0);
  const tmp4 = closure_25();
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
                const tmp24 = closure_1_23(React5, obj2);
                cResult[17] = tmp4.centered;
                cResult[18] = tmp18;
                cResult[19] = tmp24;
                tmp21 = tmp24;
              }
              const obj3 = { variant: "primary", style: tmp4.card, children: tmp14 };
              const tmp20 = closure_1_23(Card.Card, obj3);
              cResult[14] = tmp4.card;
              cResult[15] = tmp14;
              cResult[16] = tmp20;
              tmp18 = tmp20;
            }
          }
          const obj4 = { style: tmp4.cardBody, children: null };
          const items = [tmp10, children];
          obj4.children = items;
          const tmp17 = closure_1_24(React5, obj4);
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
      const tmp13 = closure_1_24(React5, obj5);
      cResult[6] = tmp4.cardCopy;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.cardText, children: body };
    const tmp9 = closure_1_23(Text_Text.Text, obj6);
    cResult[3] = body;
    cResult[4] = tmp4.cardText;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = closure_1_23(Text_Text.Text, { variant: "heading-md/semibold", color: "text-default", style: tmp4.cardText, children: title });
  cResult[0] = tmp4.cardText;
  cResult[1] = title;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj7 = { variant: "heading-md/semibold", color: "text-default", style: tmp4.cardText, children: title };
}) : ((arg0) => {
  ({ title, body, children } = arg0);
  const tmp = closure_25();
  const obj = { style: tmp.centered, children: null };
  const obj2 = { variant: "primary", style: tmp.card, children: null };
  const obj3 = { style: tmp.cardBody, children: null };
  const obj4 = { style: tmp.cardCopy, children: null };
  const items = [closure_1_23(Text_Text.Text, { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title }), closure_1_23(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body })];
  obj4.children = items;
  const items1 = [closure_1_24(React5, obj4), children];
  obj3.children = items1;
  obj2.children = closure_1_24(React5, obj3);
  obj.children = closure_1_23(Card.Card, obj2);
  return closure_1_23(React5, obj);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  const cResult = applicationId(576).c(42);
  applicationId = applicationId.applicationId;
  const projectId = applicationId.projectId;
  ({ visible, onOpenPublishedApp } = applicationId);
  let tmp4 = null;
  if (undefined !== onOpenPublishedApp) {
    tmp4 = onOpenPublishedApp;
  }
  let obj = applicationId(576);
  const conjureControlActive = applicationId(9006).useConjureControlActive(projectId);
  const active = closure_14(projectId).active;
  if (cResult[0] !== projectId) {
    const fn = function c() {
      return () => closure_2_13(projectId);
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === projectId) {
    if (cResult[3] === visible) {
      let tmp7 = cResult[4];
    }
    const effect = first.useEffect(tmp6, tmp7);
    let frame = closure_25();
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ConjureProjectStore];
      cResult[5] = items;
      let tmp11 = items;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== projectId) {
      const fn2 = function x() {
        return conjurePreviewSurface2.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
      };
      cResult[6] = projectId;
      cResult[7] = fn2;
      let tmp13 = fn2;
    } else {
      tmp13 = cResult[7];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp11, tmp13);
    if (cResult[8] !== stateFromStores) {
      const conjurePreviewSurface = tmp(8999).getConjurePreviewSurface(stateFromStores);
      cResult[8] = stateFromStores;
      cResult[9] = conjurePreviewSurface;
      let tmp15 = conjurePreviewSurface;
      const tmpResult4 = tmp(8999);
    } else {
      tmp15 = cResult[9];
    }
    dependencyMap = tmp15;
    const tmp18 = projectId(16629)(applicationId, tmp15);
    _slicedToArray = tmp18;
    if (cResult[10] !== tmp18) {
      let tmp21 = null;
      if (null != tmp18) {
        tmp21 = null;
        if (closure_22(tmp18)) {
          tmp21 = tmp18;
        }
      }
      cResult[10] = tmp18;
      cResult[11] = tmp21;
      let tmp20 = tmp21;
    } else {
      tmp20 = cResult[11];
    }
    [first, closure_5] = first.useState(false);
    if (cResult[12] === applicationId) {
      if (cResult[13] === first) {
        if (cResult[14] === tmp18) {
          if (cResult[15] === tmp15) {
            let tmp26 = cResult[16];
            let tmp27 = cResult[17];
          }
          const effect1 = obj3.useEffect(tmp26, tmp27);
          let tmp30 = visible;
          if (visible) {
            tmp30 = null != tmp20;
          }
          tmp17(16630)(tmp30);
          let applicationId1;
          const tmp17Result = tmp17(16630);
          if (tmp20 != null) {
            applicationId1 = tmp20.applicationId;
          }
          if (applicationId1 == null) {
            applicationId1 = null;
          }
          tmp17(16631)(applicationId1);
          if (null != tmp20) {
            const _Symbol5 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { layoutMode: constants4.FOCUSED };
              cResult[18] = obj2;
              let tmp51 = obj2;
            } else {
              tmp51 = cResult[18];
            }
            if (cResult[19] !== tmp20.id) {
              const obj4 = { frameId: tmp20.id, level: tmp(16636).FrameStackLevel.WithinAppContent, presentation: tmp51 };
              const tmp56 = closure_23(tmp17(16632), obj4);
              cResult[19] = tmp20.id;
              cResult[20] = tmp56;
              let tmp53 = tmp56;
              const tmp17Result4 = tmp17(16632);
            } else {
              tmp53 = cResult[20];
            }
            if (cResult[21] === conjureControlActive) {
              if (cResult[22] === projectId) {
                if (cResult[23] === active) {
                  if (cResult[24] === visible) {
                    let tmp57 = cResult[25];
                  }
                  if (cResult[26] === conjureControlActive) {
                    if (cResult[27] === tmp4) {
                      if (cResult[28] === projectId) {
                        if (cResult[29] === tmp53) {
                          if (cResult[30] === tmp57) {
                            if (cResult[31] === visible) {
                              let tmp60 = cResult[32];
                            }
                            if (cResult[33] === frame.frame) {
                            }
                            const obj5 = { style: frame.frame, children: tmp60 };
                            const tmp66 = closure_23(closure_7, obj5);
                            frame = frame.frame;
                            cResult[33] = frame;
                            cResult[34] = tmp60;
                            cResult[35] = tmp66;
                          }
                        }
                      }
                    }
                  }
                  const obj6 = { projectId, active: conjureControlActive, visible, onOpenPublishedApp: tmp4, children: null };
                  const items1 = [tmp53, tmp57];
                  obj6.children = items1;
                  const tmp62 = closure_24(tmp17(16639), obj6);
                  cResult[26] = conjureControlActive;
                  cResult[27] = tmp4;
                  cResult[28] = projectId;
                  cResult[29] = tmp53;
                  cResult[30] = tmp57;
                  cResult[31] = visible;
                  cResult[32] = tmp62;
                  tmp60 = tmp62;
                }
              }
            }
            let tmp58 = null;
            if (visible) {
              tmp58 = null;
              if (active) {
                tmp58 = null;
                if (!conjureControlActive) {
                  const obj7 = { projectId };
                  tmp58 = closure_23(tmp17(16637), obj7);
                }
              }
            }
            cResult[21] = conjureControlActive;
            cResult[22] = projectId;
            cResult[23] = active;
            cResult[24] = visible;
            cResult[25] = tmp58;
            tmp57 = tmp58;
          } else if (first) {
            const _Symbol3 = Symbol;
            if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp17(3753).lTPbnG);
              const intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(tmp17(3753).e6GiAZ);
              cResult[36] = stringResult;
              cResult[37] = stringResult1;
              let tmp43 = stringResult1;
              let Button = stringResult;
            } else {
              Button = cResult[36];
              tmp43 = cResult[37];
            }
            const _Symbol4 = Symbol;
            if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
              const obj8 = { title: Button, body: tmp43, children: null };
              Button = tmp(5601).Button;
              const obj9 = { variant: "primary", size: "sm", text: null, onPress: null };
              const intl3 = tmp(1126).intl;
              obj9.text = intl3.string(tmp17(3753)["WFJ/vb"]);
              obj9.onPress = function onPress() {
                return closure_5(false);
              };
              tmp43 = closure_23(Button, obj9);
              obj8.children = tmp43;
              const tmp49 = closure_23(closure_26, obj8);
              cResult[38] = tmp49;
            }
          } else {
            const _Symbol2 = Symbol;
            if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp38 = closure_23(closure_5, {});
              cResult[39] = tmp38;
              let tmp35 = tmp38;
            } else {
              tmp35 = cResult[39];
            }
            if (cResult[40] !== frame.centered) {
              const obj10 = { style: frame.centered, children: tmp35 };
              const tmp42 = closure_23(closure_7, obj10);
              cResult[40] = frame.centered;
              cResult[41] = tmp42;
              let tmp39 = tmp42;
            } else {
              tmp39 = cResult[41];
            }
            return tmp39;
          }
          const tmp17Result3 = tmp17(16631);
        }
      }
    }
    class U {
      constructor() {
        if (!closure_4) {
          tmp = closure_3;
          tmp2 = null;
          if (null == closure_3) {
            tmp11 = closure_8;
            mainFrame = closure_8.getMainFrame();
            if (null != mainFrame) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[20]);
              leaveFrameResult = obj.leaveFrame(mainFrame.id);
            }
            tmp6 = closure_1;
            tmp7 = closure_2;
            obj2 = closure_1(closure_2[24]);
            obj1 = { applicationId: null, surface: null };
            tmp8 = applicationId;
            obj1.applicationId = applicationId;
            tmp9 = closure_2;
            obj1.surface = closure_2;
            launchFrameResult = obj2.launchFrame(obj1);
            catchPromise = launchFrameResult.catch(() => closure_1_5(true));
          }
        }
        return;
      }
    }
    const items2 = [applicationId, first, tmp18, tmp15];
    cResult[12] = applicationId;
    cResult[13] = first;
    cResult[14] = tmp18;
    cResult[15] = tmp15;
    cResult[16] = U;
    cResult[17] = items2;
    tmp27 = items2;
    tmp26 = U;
    const tmpResult3 = tmp(504);
  }
  const items3 = [projectId, visible];
  cResult[2] = projectId;
  cResult[4] = items3;
  tmp7 = items3;
  const tmpResult = applicationId(9006);
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  const projectId = applicationId.projectId;
  ({ visible, onOpenPublishedApp } = applicationId);
  if (onOpenPublishedApp === undefined) {
    onOpenPublishedApp = null;
  }
  let stateFromStores;
  noop = undefined;
  let first;
  closure_6 = undefined;
  const conjureControlActive = applicationId(stateFromStores[21]).useConjureControlActive(projectId);
  const items = [projectId, visible];
  const effect = noop.useEffect(() => () => closure_2_13(projectId), items);
  const tmp5 = closure_25();
  let obj = applicationId(stateFromStores[21]);
  const items1 = [ConjureProjectStore];
  stateFromStores = applicationId(stateFromStores[22]).useStateFromStores(items1, () => conjurePreviewSurface2.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId)));
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => conjurePreviewSurface2.getConjurePreviewSurface(stateFromStores), items2);
  const tmp9 = projectId(stateFromStores[23])(applicationId, memo);
  noop = tmp9;
  let tmp10 = null;
  if (null != tmp9) {
    tmp10 = null;
    if (closure_22(tmp9)) {
      tmp10 = tmp9;
    }
  }
  const tmp12 = memo(noop.useState(false), 2);
  first = tmp12[0];
  closure_6 = tmp12[1];
  const items3 = [applicationId, first, tmp9, memo];
  const effect1 = obj2.useEffect(() => {
    if (!first) {
      if (null == closure_4) {
        const mainFrame = FramesStore.getMainFrame();
        if (null != mainFrame) {
          FramesNativeManagerDefault.leaveFrame(mainFrame.id);
        }
        const obj3 = { applicationId, surface: memo };
        FramesActionCreatorsDefault.launchFrame(obj3).catch(() => closure_1_6(true));
        const launchFrameResult = FramesActionCreatorsDefault.launchFrame(obj3);
      }
    }
  }, items3);
  let tmp16 = visible;
  let obj3 = applicationId(stateFromStores[22]);
  if (visible) {
    tmp16 = null != tmp10;
  }
  projectId(stateFromStores[25])(tmp16);
  let applicationId1;
  const tmp8Result = projectId(stateFromStores[25]);
  if (tmp10 != null) {
    applicationId1 = tmp10.applicationId;
  }
  if (applicationId1 == null) {
    applicationId1 = null;
  }
  projectId(stateFromStores[26])(applicationId1);
  if (null != tmp10) {
    const obj4 = { style: tmp5.frame, children: null };
    const obj5 = { projectId, active: conjureControlActive, visible, onOpenPublishedApp, children: null };
    const obj6 = { frameId: tmp10.id, level: null, presentation: null };
    const tmp8Result5 = tmp8(tmp2[30]);
    obj6.level = tmp(tmp2[28]).FrameStackLevel.WithinAppContent;
    const obj7 = { layoutMode: constants4.FOCUSED };
    obj6.presentation = obj7;
    const items4 = [closure_23(tmp8(tmp2[27]), obj6), ];
    let tmp25Result = null;
    if (visible) {
      tmp25Result = null;
      if (closure_14(projectId).active) {
        tmp25Result = null;
        if (!conjureControlActive) {
          const obj8 = { projectId };
          tmp25Result = closure_23(tmp8(tmp2[29]), obj8);
        }
      }
    }
    items4[1] = tmp25Result;
    obj5.children = items4;
    obj4.children = closure_24(tmp8Result5, obj5);
    let tmp25Result2 = closure_23(closure_7, obj4);
    const tmp8Result6 = tmp8(tmp2[27]);
  } else if (first) {
    const obj9 = { title: null, body: null, children: null };
    const intl = tmp(tmp2[31]).intl;
    obj9.title = intl.string(tmp8(tmp2[32]).lTPbnG);
    const intl2 = tmp(tmp2[31]).intl;
    obj9.body = intl2.string(tmp8(tmp2[32]).e6GiAZ);
    const obj10 = { variant: "primary", size: "sm", text: null, onPress: null };
    const intl3 = tmp(tmp2[31]).intl;
    obj10.text = intl3.string(tmp8(tmp2[32])["WFJ/vb"]);
    obj10.onPress = function onPress() {
      return closure_6(false);
    };
    obj9.children = closure_23(tmp(tmp2[33]).Button, obj10);
    tmp25Result2 = closure_23(closure_26, obj9);
  } else {
    const obj11 = { style: tmp5.centered, children: closure_23(first, {}) };
    tmp25Result2 = closure_23(closure_7, obj11);
  }
  return tmp25Result2;
});
let closure_27 = tmp7;
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let intl = require;
  let stringResult = dependencyMap;
  const cResult = c.c(11);
  applicationId = applicationId.applicationId;
  const tmp3 = closure_25();
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
      obj3.title = intl2.string(_modDef3753["08U+YO"]);
      intl = util.intl;
      stringResult = intl.string(_modDef3753.pKBfrc);
      obj3.body = stringResult;
      const tmp26 = closure_1_23(closure_26, obj3);
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
      const tmp21 = closure_1_23(timestampProducer, obj4);
      cResult[8] = tmp3.widget;
      cResult[9] = tmp14;
      cResult[10] = tmp21;
      tmp18 = tmp21;
    }
    const obj5 = { userId: stateFromStores, widget: tmp8 };
    const tmp17 = closure_1_23(UserProfileApplicationWidgetCardDefault, obj5);
    cResult[5] = stateFromStores;
    cResult[6] = tmp8;
    cResult[7] = tmp17;
    tmp14 = tmp17;
  }
  const intlResult = initialize;
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  const tmp = closure_25();
  const items = [AuthenticationStore];
  [][0] = applicationId;
  const stateFromStores = applicationId(504).useStateFromStores(items, () => id.getId());
  if (applicationId.revoked) {
    const obj2 = { title: null, body: null };
    const intl = tmp2(1126).intl;
    obj2.title = intl.string(_modDef3753["08U+YO"]);
    const intl2 = tmp2(1126).intl;
    obj2.body = intl2.string(_modDef3753.pKBfrc);
    let tmp6Result = closure_23(closure_26, obj2);
  } else {
    const obj3 = { contentContainerStyle: tmp.widget, children: null };
    const obj4 = { userId: stateFromStores, widget: tmp5 };
    obj3.children = closure_23(UserProfileApplicationWidgetCardDefault, obj4);
    tmp6Result = closure_23(closure_6, obj3);
  }
  return tmp6Result;
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((previewApplicationId) => {
  const cResult = id(576).c(43);
  closure_25();
  let obj = id(576);
  const application = id(6665).useApplication(previewApplicationId.previewApplicationId);
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
  let obj2 = id(6665);
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
              class W {
                constructor() {
                  if (null != c5) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[37]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
              const items2 = [id1];
              cResult[13] = id1;
              cResult[14] = W;
              cResult[15] = items2;
              let tmp22 = items2;
            } else {
              class W {
                constructor() {
                  if (null != c5) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[37]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
              tmp22 = cResult[15];
            }
            const effect1 = noop.useEffect(W, tmp22);
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class W {
                constructor() {
                  if (null != c5) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[37]);
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
              class W {
                constructor() {
                  if (null != c5) {
                    tmp2 = closure_1;
                    tmp3 = closure_2;
                    obj = closure_1(closure_2[37]);
                    tmp4 = ME;
                    preloadResult = obj.preload(ME, tmp);
                  }
                  return;
                }
              }
            }
            if (cResult[17] !== id1) {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              const items4 = [id1];
              cResult[17] = id1;
              cResult[18] = items4;
              cResult[19] = Y;
              let tmp26 = Y;
              const tmp25 = items4;
            } else {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              tmp26 = cResult[19];
            }
            const stateFromStores1 = tmp(504).useStateFromStores(tmp24, tmp26, tmp25);
            const _Symbol2 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              const items5 = [AppStateStore];
              const fn2 = function $() {
                return state.getState() === constants.ACTIVE;
              };
              cResult[20] = items5;
              cResult[21] = fn2;
              let tmp29 = fn2;
              const tmp28 = items5;
            } else {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
                }
              }
              tmp29 = cResult[21];
            }
            const tmpResult3 = tmp(504);
            const stateFromStores2 = tmp(504).useStateFromStores(tmp28, tmp29);
            if (cResult[22] === stateFromStores2) {
              class Y {
                constructor() {
                  hasUnreadResult = null != c5;
                  if (hasUnreadResult) {
                    tmp3 = closure_11;
                    hasUnreadResult = closure_11.hasUnread(tmp);
                  }
                  return hasUnreadResult;
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
                const obj2 = { section: constants3.CHANNEL, object: constants.ACK_INCOMING_MESSAGE, objectType: constants2.ACK_AUTOMATIC };
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
      const items7 = [id, stateFromStores, tmp14, tmp16];
      cResult[8] = tmp16;
      cResult[9] = id;
      cResult[10] = stateFromStores;
      cResult[11] = tmp14;
      cResult[12] = items7;
      tmp18 = items7;
    }
  }
  class E {
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
            obj = closure_1(closure_2[37]);
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
  cResult[7] = E;
  tmp17 = E;
  const tmp12Result = _slicedToArray(noop.useState(0), 2);
}) : ((previewApplicationId) => {
  let id;
  let stateFromStores;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let id1;
  let stateFromStores1;
  let stateFromStores2;
  let tmp = closure_25();
  const application = id(6665).useApplication(previewApplicationId.previewApplicationId);
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
  let obj = id(6665);
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
          const obj = stateFromStores(4909);
          stateFromStores(4909).openPrivateChannel(obj2).catch(() => {
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
    const intl = tmp2(1126).intl;
    obj2.title = intl.string(stateFromStores(3753)["VP/O8s"]);
    const intl2 = tmp2(1126).intl;
    obj2.body = intl2.string(stateFromStores(3753).Sl9ITD);
    let tmp19Result = null;
    if (tmp9) {
      const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = tmp2(1126).intl;
      obj4.text = intl3.string(tmp2(1126).t["5911Lb"]);
      obj4.onPress = callback;
      tmp19Result = closure_23(tmp2(5601).Button, obj4);
    }
    obj2.children = tmp19Result;
    return closure_23(closure_26, obj2);
  }
  if (null == stateFromStores) {
    const obj5 = { style: tmp.centered, children: null };
    tmp = id1;
    obj5.children = closure_23(id1, {});
    closure_23(stateFromStores2, obj5);
  } else {
    const obj6 = { style: tmp.dm, children: null };
    const obj7 = { guildId, channelId: stateFromStores.id, chatInputRef: ref, screenIndex: "conjure-preview", alwaysRespectKeyboard: true, disableGradient: true };
    const items8 = [closure_23(stateFromStores(9773), obj7, stateFromStores.id), ];
    let tmp29Result = null;
    if (tmp2Result6.isAndroid()) {
      tmp29Result = closure_23(tmp2(16643).PortalKeyboardRenderer, { portal: true });
    }
    items8[1] = tmp29Result;
    obj6.children = items8;
    closure_24(stateFromStores2, obj6);
    tmp2Result6 = tmp2(1369);
  }
  ref = noop.useRef(null);
});
ReactCompilerGating = fn(558);
let obj6 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(16);
  ({ projectId, previewApplicationId, mode, availability, widgetApplicationId, frameHostAvailable, permissionsGate } = arg0);
  if (null != permissionsGate) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = util.intl;
      const stringResult = intl5.string(_modDef3753.xu1I8B);
      const intl6 = util.intl;
      const stringResult1 = intl6.string(_modDef3753["8qJtGr"]);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp25 = stringResult;
      tmp26 = stringResult1;
    } else {
      [tmp25, tmp26] = cResult;
    }
    const _Symbol3 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl7 = util.intl;
      const stringResult2 = intl7.string(_modDef3753["Nub/J6"]);
      cResult[2] = stringResult2;
      let tmp30 = stringResult2;
    } else {
      tmp30 = cResult[2];
    }
    if (cResult[3] === permissionsGate.loading) {
      if (cResult[4] === permissionsGate.onReviewPermissions) {
        let tmp33 = cResult[5];
      }
      return tmp33;
    }
    const obj2 = { title: tmp25, body: tmp26, children: null };
    const obj3 = { variant: "primary", size: "sm", text: tmp30, onPress: null, loading: null };
    ({ onReviewPermissions: obj8.onPress, loading: obj8.loading } = permissionsGate);
    obj2.children = closure_1_23(components_Button_Button.Button, obj3);
    const tmp36 = closure_1_23(closure_26, obj2);
    cResult[3] = permissionsGate.loading;
    cResult[4] = permissionsGate.onReviewPermissions;
    cResult[5] = tmp36;
    tmp33 = tmp36;
  } else if ("frame" === mode) {
    if (cResult[6] === frameHostAvailable) {
      if (cResult[7] === previewApplicationId) {
        if (cResult[8] === projectId) {
          return cResult[9];
        }
      }
    }
    if (frameHostAvailable) {
      const obj4 = { applicationId: previewApplicationId, projectId, visible: true };
      let tmp18Result = closure_1_23(closure_27, obj4);
    } else {
      const obj5 = { title: null, body: null };
      const intl3 = util.intl;
      obj5.title = intl3.string(_modDef3753["7k4GyN"]);
      const intl4 = util.intl;
      obj5.body = intl4.string(_modDef3753.zdIy3R);
      tmp18Result = closure_1_23(closure_26, obj5);
    }
    cResult[6] = frameHostAvailable;
    cResult[7] = previewApplicationId;
    cResult[8] = projectId;
    cResult[9] = tmp18Result;
  } else if ("widget" === mode) {
    if (cResult[10] === availability) {
      if (cResult[11] === widgetApplicationId) {
        let tmp14 = cResult[12];
      }
      return tmp14;
    }
    let tmp15 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === availability.profileState };
      tmp15 = closure_1_23(closure_28, obj6);
    }
    cResult[10] = availability;
    cResult[11] = widgetApplicationId;
    cResult[12] = tmp15;
    tmp14 = tmp15;
  } else if ("bot" === mode) {
    if (cResult[13] !== previewApplicationId) {
      const obj7 = { previewApplicationId };
      const tmp13 = closure_1_23(closure_29, obj7);
      cResult[13] = previewApplicationId;
      cResult[14] = tmp13;
      let tmp10 = tmp13;
    } else {
      tmp10 = cResult[14];
    }
    return tmp10;
  } else if (null === mode) {
    const _Symbol = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj15 = { title: null, body: null };
      const intl = util.intl;
      obj15.title = intl.string(_modDef3753["7k4GyN"]);
      const intl2 = util.intl;
      obj15.body = intl2.string(_modDef3753.zdIy3R);
      const tmp9 = closure_1_23(closure_26, obj15);
      cResult[15] = tmp9;
      let tmp5 = tmp9;
    } else {
      tmp5 = cResult[15];
    }
    return tmp5;
  }
}) : ((arg0) => {
  ({ previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
  if (null != permissionsGate) {
    const obj2 = { title: null, body: null, children: null };
    const intl5 = util.intl;
    obj2.title = intl5.string(_modDef3753.xu1I8B);
    const intl6 = util.intl;
    obj2.body = intl6.string(_modDef3753["8qJtGr"]);
    const obj3 = { variant: "primary", size: "sm", text: null, onPress: null, loading: null };
    const intl7 = util.intl;
    obj3.text = intl7.string(_modDef3753["Nub/J6"]);
    ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
    obj2.children = closure_1_23(components_Button_Button.Button, obj3);
    return closure_1_23(closure_26, obj2);
  } else if ("frame" === mode) {
    if (tmp3) {
      const obj4 = { applicationId: previewApplicationId, projectId: tmp, visible: true };
      let tmp14Result = closure_1_23(closure_27, obj4);
    } else {
      const obj5 = { title: null, body: null };
      const intl3 = util.intl;
      obj5.title = intl3.string(_modDef3753["7k4GyN"]);
      const intl4 = util.intl;
      obj5.body = intl4.string(_modDef3753.zdIy3R);
      tmp14Result = closure_1_23(closure_26, obj5);
    }
    return tmp14Result;
  } else if ("widget" === mode) {
    let tmp11 = null;
    if (null != widgetApplicationId) {
      const obj6 = { applicationId: widgetApplicationId, revoked: "unavailable-authorization-revoked" === tmp2.profileState };
      tmp11 = closure_1_23(closure_28, obj6);
    }
    return tmp11;
  } else if ("bot" === mode) {
    const obj13 = { previewApplicationId };
    return closure_1_23(closure_29, obj13);
  } else if (null === mode) {
    const obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3753["7k4GyN"]);
    const intl2 = util.intl;
    obj.body = intl2.string(_modDef3753.zdIy3R);
    return closure_1_23(closure_26, obj);
  }
});
export const leaveConjurePreviewFrame = function leaveConjurePreviewFrame(previewAppId) {
  const frameBySurface = FramesStore.getFrameBySurface(previewAppId, conjurePreviewSurface2.CONJURE_PREVIEW_SURFACE);
  if (null != frameBySurface) {
    FramesNativeManagerDefault.leaveFrame(frameBySurface.id);
  }
};
export const PreviewFrame = tmp7;