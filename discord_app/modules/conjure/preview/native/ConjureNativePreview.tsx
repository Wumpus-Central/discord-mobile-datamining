// discord_app/modules/conjure/preview/native/ConjureNativePreview.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl8 from "../../../../intl/index.native.tsx";
import _modDef3753 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import UserProfileApplicationWidgetTypes from "../../../user_profile/UserProfileApplicationWidgetTypes.tsx";
import UserProfileApplicationWidgetCardDefault from "../../../user_profile/native/UserProfileApplicationWidgetCard.tsx";
import conjurePreviewSurface2 from "../conjurePreviewSurface.tsx";
import FramesNativeManagerDefault from "../../../frames/native/FramesNativeManager.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import FramesStore from "../../../frames/FramesStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import conjureDesignFeedbackStore from "../../design_feedback/conjureDesignFeedbackStore.tsx";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import Constants from "../../../../Constants.tsx";
import FramesConstants from "../../../frames/FramesConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c0, catchPromise, dependencyMap, flag, obj1, tmp3;

let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ exitConjureDesignFeedback: map1, useConjureDesignFeedback: closure_14 } = conjureDesignFeedbackStore);
({
  AnalyticsObjects: closure_16,
  AnalyticsObjectTypes: closure_17,
  AnalyticsSections: closure_18,
  AppStates: closure_19,
  ME: closure_20,
} = Constants);
({ FrameLayoutModes: closure_21, isLaunched: closure_22 } = FramesConstants);
({ jsx: closure_23, jsxs: closure_24 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  frame: { flex: 1 },
  centered: obj2,
  card: { alignSelf: "stretch" },
  cardBody: obj3,
  cardCopy: obj4,
  cardText: { textAlign: "center" },
  widget: obj5,
  dm: { flex: 1 },
};
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_12 };
obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5 = { padding: nativeDefault.space.PX_16 };
let closure_25 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let body;
      let children;
      let items;
      let items1;
      let title;
      const obj = react2;
      const cResult = obj.c(20);
      ({ title, body, children } = arg0);
      const tmp4 = closure_25();
      if (cResult[0] === tmp4.cardText) {
        let tmp5;
        if (cResult[1] === title) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === body) {
          let tmp7;
          if (cResult[4] === tmp4.cardText) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === tmp4.cardCopy) {
            if (cResult[7] === tmp5) {
              let tmp10;
              if (cResult[8] === tmp7) {
                tmp10 = cResult[9];
              }
              if (cResult[10] === children) {
                if (cResult[11] === tmp4.cardBody) {
                  let tmp14;
                  if (cResult[12] === tmp10) {
                    tmp14 = cResult[13];
                  }
                  if (cResult[14] === tmp4.card) {
                    let tmp18;
                    if (cResult[15] === tmp14) {
                      tmp18 = cResult[16];
                    }
                    if (cResult[17] === tmp4.centered) {
                      let tmp21;
                      if (cResult[18] === tmp18) {
                        tmp21 = cResult[19];
                      }
                      return tmp21;
                    }
                    const obj2 = { style: tmp4.centered, children: tmp18 };
                    const tmp24 = closure_23(metroImportDefault, obj2);
                    cResult[17] = tmp4.centered;
                    cResult[18] = tmp18;
                    cResult[19] = tmp24;
                    tmp21 = tmp24;
                  }
                  const obj3 = { variant: "primary", style: tmp4.card, children: tmp14 };
                  const tmp20 = closure_23(Card_Card.Card, obj3);
                  cResult[14] = tmp4.card;
                  cResult[15] = tmp14;
                  cResult[16] = tmp20;
                  tmp18 = tmp20;
                }
              }
              const obj4 = { style: tmp4.cardBody, children: items };
              items = [tmp10, children];
              const tmp17 = closure_24(metroImportDefault, obj4);
              cResult[10] = children;
              cResult[11] = tmp4.cardBody;
              cResult[12] = tmp10;
              cResult[13] = tmp17;
              tmp14 = tmp17;
            }
          }
          const obj5 = { style: tmp4.cardCopy, children: items1 };
          items1 = [tmp5, tmp7];
          const tmp13 = closure_24(metroImportDefault, obj5);
          cResult[6] = tmp4.cardCopy;
          cResult[7] = tmp5;
          cResult[8] = tmp7;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
        const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.cardText, children: body };
        const tmp9 = closure_23(Text_Text.Text, obj6);
        cResult[3] = body;
        cResult[4] = tmp4.cardText;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const obj7 = { variant: "heading-md/semibold", color: "text-default", style: tmp4.cardText, children: title };
      const tmp6 = closure_23(Text_Text.Text, obj7);
      cResult[0] = tmp4.cardText;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let Card;
      let body;
      let children;
      let items;
      let items1;
      let obj2;
      let obj3;
      let title;
      ({ title, body, children } = arg0);
      const tmp = closure_25();
      const obj = { style: tmp.centered, children: closure_23(Card, obj2) };
      obj2 = { variant: "primary", style: tmp.card, children: closure_24(metroImportDefault, obj3) };
      obj3 = { style: tmp.cardBody, children: items1 };
      const obj4 = { style: tmp.cardCopy, children: items };
      Card = Card_Card.Card;
      items = [,];
      const obj5 = { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title };
      items[0] = closure_23(Text_Text.Text, obj5);
      const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
      items[1] = closure_23(Text_Text.Text, obj6);
      items1 = [closure_24(metroImportDefault, obj4), children];
      return closure_23(metroImportDefault, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (applicationId) => {
      let Button;
      let closure_3;
      let closure_5;
      let first;
      let intl3;
      let items1;
      let obj9;
      let onOpenPublishedApp;
      let surface;
      let tmp6;
      let visible;
      let obj = applicationId(576);
      const cResult = obj.c(42);
      applicationId = applicationId.applicationId;
      const projectId = applicationId.projectId;
      ({ visible, onOpenPublishedApp } = applicationId);
      let tmp4 = null;
      if (undefined !== onOpenPublishedApp) {
        tmp4 = onOpenPublishedApp;
      }
      const tmpResult = applicationId(9006);
      const conjureControlActive = tmpResult.useConjureControlActive(projectId);
      const active = closure_14(projectId).active;
      if (cResult[0] !== projectId) {
        const fn = function c() {
          return () => closure_2_13(projectId);
        };
        cResult[0] = projectId;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === projectId) {
        let tmp7;
        let tmp12;
        let tmp14;
        let tmp16;
        let tmp21;
        if (cResult[3] === visible) {
          tmp7 = cResult[4];
        }
        let obj3 = first;
        const effect = first.useEffect(tmp6, tmp7);
        const tmp10 = closure_25();
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ConjureProjectStore];
          cResult[5] = items;
          tmp12 = items;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] !== projectId) {
          const fn2 = function x() {
            const obj = conjurePreviewSurface2;
            return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
          };
          cResult[6] = projectId;
          cResult[7] = fn2;
          tmp14 = fn2;
        } else {
          tmp14 = cResult[7];
        }
        const tmpResult3 = applicationId(504);
        const stateFromStores = tmpResult3.useStateFromStores(tmp12, tmp14);
        if (cResult[8] !== stateFromStores) {
          const tmpResult4 = applicationId(8999);
          const conjurePreviewSurface = tmpResult4.getConjurePreviewSurface(stateFromStores);
          cResult[8] = stateFromStores;
          cResult[9] = conjurePreviewSurface;
          tmp16 = conjurePreviewSurface;
        } else {
          tmp16 = cResult[9];
        }
        dependencyMap = tmp16;
        const tmp19 = projectId(16629)(applicationId, tmp16);
        _slicedToArray = tmp19;
        if (cResult[10] !== tmp19) {
          let tmp22 = null;
          if (null != tmp19) {
            tmp22 = null;
            if (closure_22(tmp19)) {
              tmp22 = tmp19;
            }
          }
          cResult[10] = tmp19;
          cResult[11] = tmp22;
          tmp21 = tmp22;
        } else {
          tmp21 = cResult[11];
        }
        [first, closure_5] = obj3.useState(false);
        if (cResult[12] === applicationId) {
          if (cResult[13] === first) {
            if (cResult[14] === tmp19) {
              let tmp27;
              let tmp28;
              let tmp40;
              if (cResult[15] === tmp16) {
                tmp27 = cResult[16];
                tmp28 = cResult[17];
              }
              const effect1 = obj3.useEffect(tmp27, tmp28);
              let tmp31 = visible;
              const tmp18Result = projectId(16630);
              if (visible) {
                tmp31 = null != tmp21;
              }
              tmp18Result(tmp31);
              let applicationId1;
              const tmp18Result3 = projectId(16631);
              if (tmp21 != null) {
                applicationId1 = tmp21.applicationId;
              }
              if (applicationId1 == null) {
                applicationId1 = null;
              }
              tmp18Result3(applicationId1);
              if (null != tmp21) {
                let tmp52;
                let tmp54;
                const _Symbol5 = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj2 = { layoutMode: constants4.FOCUSED };
                  cResult[18] = obj2;
                  tmp52 = obj2;
                } else {
                  tmp52 = cResult[18];
                }
                if (cResult[19] !== tmp21.id) {
                  const obj4 = {
                    frameId: tmp21.id,
                    level: applicationId(16636).FrameStackLevel.WithinAppContent,
                    presentation: tmp52,
                  };
                  const tmp18Result4 = projectId(16632);
                  const tmp57 = closure_23(tmp18Result4, obj4);
                  cResult[19] = tmp21.id;
                  cResult[20] = tmp57;
                  tmp54 = tmp57;
                } else {
                  tmp54 = cResult[20];
                }
                if (cResult[21] === conjureControlActive) {
                  if (cResult[22] === projectId) {
                    if (cResult[23] === active) {
                      let tmp58;
                      if (cResult[24] === visible) {
                        tmp58 = cResult[25];
                      }
                      if (cResult[26] === conjureControlActive) {
                        if (cResult[27] === tmp4) {
                          if (cResult[28] === projectId) {
                            if (cResult[29] === tmp54) {
                              if (cResult[30] === tmp58) {
                                let tmp61;
                                if (cResult[31] === visible) {
                                  tmp61 = cResult[32];
                                }
                                if (cResult[33] === tmp10.frame) {
                                  let tmp64;
                                  if (cResult[34] === tmp61) {
                                    tmp64 = cResult[35];
                                  }
                                  tmp40 = tmp64;
                                }
                                const obj5 = { style: tmp10.frame, children: tmp61 };
                                const tmp67 = closure_23(closure_7, obj5);
                                cResult[33] = tmp10.frame;
                                cResult[34] = tmp61;
                                cResult[35] = tmp67;
                                tmp64 = tmp67;
                              }
                            }
                          }
                        }
                      }
                      const obj6 = {
                        projectId,
                        active: conjureControlActive,
                        visible,
                        onOpenPublishedApp: tmp4,
                        children: items1,
                      };
                      items1 = [tmp54, tmp58];
                      const tmp63 = closure_24(projectId(16639), obj6);
                      cResult[26] = conjureControlActive;
                      cResult[27] = tmp4;
                      cResult[28] = projectId;
                      cResult[29] = tmp54;
                      cResult[30] = tmp58;
                      cResult[31] = visible;
                      cResult[32] = tmp63;
                      tmp61 = tmp63;
                    }
                  }
                }
                let tmp59 = null;
                if (visible) {
                  tmp59 = null;
                  if (active) {
                    tmp59 = null;
                    if (!conjureControlActive) {
                      const obj7 = { projectId };
                      tmp59 = closure_23(tmp18(16637), obj7);
                    }
                  }
                }
                cResult[21] = conjureControlActive;
                cResult[22] = projectId;
                cResult[23] = active;
                cResult[24] = visible;
                cResult[25] = tmp59;
                tmp58 = tmp59;
              } else if (first) {
                let tmp45;
                let tmp44;
                let tmp48;
                const _Symbol3 = Symbol;
                if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(1126).intl;
                  const stringResult = intl.string(projectId(3753).lTPbnG);
                  const intl2 = tmp(1126).intl;
                  const stringResult1 = intl2.string(projectId(3753).e6GiAZ);
                  cResult[36] = stringResult;
                  cResult[37] = stringResult1;
                  tmp45 = stringResult1;
                  tmp44 = stringResult;
                } else {
                  tmp44 = cResult[36];
                  tmp45 = cResult[37];
                }
                const _Symbol4 = Symbol;
                if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj8 = { title: tmp44, body: tmp45, children: closure_23(Button, obj9) };
                  obj9 = {
                    variant: "primary",
                    size: "sm",
                    text: intl3.string(projectId(3753)["WFJ/vb"]),
                    onPress() {
                      return closure_5(false);
                    },
                  };
                  Button = tmp(5601).Button;
                  intl3 = tmp(1126).intl;
                  const tmp51 = closure_23(closure_26, obj8);
                  cResult[38] = tmp51;
                  tmp48 = tmp51;
                } else {
                  tmp48 = cResult[38];
                }
                tmp40 = tmp48;
              } else {
                let tmp36;
                const _Symbol2 = Symbol;
                if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp39 = closure_23(closure_5, {});
                  cResult[39] = tmp39;
                  tmp36 = tmp39;
                } else {
                  tmp36 = cResult[39];
                }
                if (cResult[40] !== tmp10.centered) {
                  const obj10 = { style: tmp10.centered, children: tmp36 };
                  const tmp43 = closure_23(closure_7, obj10);
                  cResult[40] = tmp10.centered;
                  cResult[41] = tmp43;
                  tmp40 = tmp43;
                } else {
                  tmp40 = cResult[41];
                }
              }
              return tmp40;
            }
          }
        }
        class U {
          constructor() {
            if (!first) {
              if (null == closure_3) {
                const mainFrame = FramesStore.getMainFrame();
                if (null != mainFrame) {
                  const obj = FramesNativeManagerDefault;
                  obj.leaveFrame(mainFrame.id);
                }
                const obj3 = { applicationId, surface };
                const obj2 = FramesActionCreatorsDefault;
                const launchFrameResult = obj2.launchFrame(obj3);
                launchFrameResult.catch(() => closure_1_5(true));
              }
            }
          }
        }
        const items2 = [applicationId, first, tmp19, tmp16];
        cResult[12] = applicationId;
        cResult[13] = first;
        cResult[14] = tmp19;
        cResult[15] = tmp16;
        cResult[16] = U;
        cResult[17] = items2;
        tmp28 = items2;
        tmp27 = U;
      }
      const items3 = [projectId, visible];
      cResult[2] = projectId;
      cResult[4] = items3;
      tmp7 = items3;
    }
  : (applicationId) => {
      let Button;
      let closure_4;
      let intl;
      let intl2;
      let intl3;
      let items4;
      let obj10;
      let obj5;
      let obj7;
      let onOpenPublishedApp;
      let tmp25Result2;
      let tmp8Result5;
      let visible;
      applicationId = applicationId.applicationId;
      const projectId = applicationId.projectId;
      ({ visible, onOpenPublishedApp } = applicationId);
      if (onOpenPublishedApp === undefined) {
        onOpenPublishedApp = null;
      }
      let stateFromStores;
      react = undefined;
      let first;
      let closure_6;
      let obj = applicationId(stateFromStores[21]);
      const conjureControlActive = obj.useConjureControlActive(projectId);
      let obj2 = react;
      const items = [projectId, visible];
      const active = closure_14(projectId).active;
      const effect = react.useEffect(() => () => closure_2_13(projectId), items);
      const tmp5 = closure_25();
      let obj3 = applicationId(stateFromStores[22]);
      const items1 = [ConjureProjectStore];
      stateFromStores = obj3.useStateFromStores(items1, () => {
        const obj = conjurePreviewSurface2;
        return obj.getConjurePreviewGuildId(ConjureProjectStore.getProject(projectId));
      });
      const items2 = [stateFromStores];
      const memo = react.useMemo(() => {
        const obj = conjurePreviewSurface2;
        return obj.getConjurePreviewSurface(stateFromStores);
      }, items2);
      const tmp9 = projectId(stateFromStores[23])(applicationId, memo);
      react = tmp9;
      let tmp10 = null;
      if (null != tmp9) {
        tmp10 = null;
        if (closure_22(tmp9)) {
          tmp10 = tmp9;
        }
      }
      const tmp12 = memo(obj2.useState(false), 2);
      first = tmp12[0];
      closure_6 = tmp12[1];
      const items3 = [applicationId, first, tmp9, memo];
      const effect1 = obj2.useEffect(() => {
        if (!first) {
          if (null == closure_4) {
            const mainFrame = FramesStore.getMainFrame();
            if (null != mainFrame) {
              const obj = FramesNativeManagerDefault;
              obj.leaveFrame(mainFrame.id);
            }
            const obj3 = { applicationId, surface: memo };
            const obj2 = FramesActionCreatorsDefault;
            const launchFrameResult = obj2.launchFrame(obj3);
            launchFrameResult.catch(() => closure_1_6(true));
          }
        }
      }, items3);
      let tmp16 = visible;
      const tmp8Result = projectId(stateFromStores[25]);
      if (visible) {
        tmp16 = null != tmp10;
      }
      tmp8Result(tmp16);
      let applicationId1;
      const tmp8Result4 = projectId(stateFromStores[26]);
      if (tmp10 != null) {
        applicationId1 = tmp10.applicationId;
      }
      if (applicationId1 == null) {
        applicationId1 = null;
      }
      tmp8Result4(applicationId1);
      if (null != tmp10) {
        const obj4 = { style: tmp5.frame, children: closure_24(tmp8Result5, obj5) };
        obj5 = { projectId, active: conjureControlActive, visible, onOpenPublishedApp, children: items4 };
        const obj6 = {
          frameId: tmp10.id,
          level: applicationId(stateFromStores[28]).FrameStackLevel.WithinAppContent,
          presentation: obj7,
        };
        tmp8Result5 = projectId(stateFromStores[30]);
        obj7 = { layoutMode: constants4.FOCUSED };
        const tmp8Result6 = projectId(stateFromStores[27]);
        items4 = [closure_23(tmp8Result6, obj6)];
        let tmp25Result = null;
        if (visible) {
          tmp25Result = null;
          if (active) {
            tmp25Result = null;
            if (!conjureControlActive) {
              const obj8 = { projectId };
              tmp25Result = closure_23(tmp8(tmp2[29]), obj8);
            }
          }
        }
        items4[1] = tmp25Result;
        tmp25Result2 = closure_23(closure_7, obj4);
      } else if (first) {
        const obj9 = {
          title: intl.string(projectId(stateFromStores[32]).lTPbnG),
          body: intl2.string(projectId(stateFromStores[32]).e6GiAZ),
          children: closure_23(Button, obj10),
        };
        intl = tmp(tmp2[31]).intl;
        intl2 = tmp(tmp2[31]).intl;
        obj10 = {
          variant: "primary",
          size: "sm",
          text: intl3.string(projectId(stateFromStores[32])["WFJ/vb"]),
          onPress() {
            return closure_6(false);
          },
        };
        Button = tmp(tmp2[33]).Button;
        intl3 = tmp(tmp2[31]).intl;
        tmp25Result2 = closure_23(closure_26, obj9);
      } else {
        const obj11 = { style: tmp5.centered, children: closure_23(first, {}) };
        tmp25Result2 = closure_23(closure_7, obj11);
      }
      return tmp25Result2;
    };
let closure_27 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (applicationId) {
      let id;
      let intl;
      let intl2;
      let tmp17;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(11);
      applicationId = applicationId.applicationId;
      const revoked = applicationId.revoked;
      const tmp4 = closure_25();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function l() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== applicationId) {
        const self = this;
        const self2 = this;
        const obj2 = { applicationId };
        const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj2);
        cResult[2] = applicationId;
        cResult[3] = applicationWidget;
        tmp9 = applicationWidget;
      } else {
        tmp9 = cResult[3];
      }
      if (revoked) {
        let tmp21;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { title: intl.string(_modDef3753["08U+YO"]), body: intl2.string(_modDef3753.pKBfrc) };
          intl = intl8.intl;
          intl2 = intl8.intl;
          const tmp25 = closure_23(closure_26, obj3);
          cResult[4] = tmp25;
          tmp21 = tmp25;
        } else {
          tmp21 = cResult[4];
        }
        tmp17 = tmp21;
      } else {
        if (cResult[5] === stateFromStores) {
          let tmp13;
          if (cResult[6] === tmp9) {
            tmp13 = cResult[7];
          }
          if (cResult[8] === tmp4.widget) {
            if (cResult[9] === tmp13) {
              tmp17 = cResult[10];
            }
          }
          const obj4 = { contentContainerStyle: tmp4.widget, children: tmp13 };
          const tmp20 = closure_23(metroRequire, obj4);
          cResult[8] = tmp4.widget;
          cResult[9] = tmp13;
          cResult[10] = tmp20;
          tmp17 = tmp20;
        }
        const obj5 = { userId: stateFromStores, widget: tmp9 };
        const tmp16 = closure_23(UserProfileApplicationWidgetCardDefault, obj5);
        cResult[5] = stateFromStores;
        cResult[6] = tmp9;
        cResult[7] = tmp16;
        tmp13 = tmp16;
      }
      return tmp17;
    }
  : (applicationId) => {
      let id;
      let intl;
      let intl2;
      let obj4;
      let tmp6Result;
      applicationId = applicationId.applicationId;
      const revoked = applicationId.revoked;
      const tmp = closure_25();
      let obj = applicationId(504);
      const items = [AuthenticationStore];
      [][0] = applicationId;
      const stateFromStores = obj.useStateFromStores(items, () => id.getId());
      if (revoked) {
        const obj2 = { title: intl.string(_modDef3753["08U+YO"]), body: intl2.string(_modDef3753.pKBfrc) };
        intl = tmp2(1126).intl;
        intl2 = tmp2(1126).intl;
        tmp6Result = closure_23(closure_26, obj2);
      } else {
        const obj3 = {
          contentContainerStyle: tmp.widget,
          children: closure_23(UserProfileApplicationWidgetCardDefault, obj4),
        };
        obj4 = { userId: stateFromStores, widget: tmp5 };
        tmp6Result = closure_23(closure_6, obj3);
      }
      return tmp6Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (previewApplicationId) => {
      let closure_2;
      let closure_3;
      let first;
      let id;
      let state;
      let tmp10;
      let tmp16;
      let tmp9;
      const tmp = id;
      let tmp2 = dependencyMap;
      let obj = id(576);
      const cResult = obj.c(43);
      previewApplicationId = previewApplicationId.previewApplicationId;
      closure_25();
      let obj2 = id(6665);
      const application = obj2.useApplication(previewApplicationId);
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
        first = items;
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
        tmp10 = items1;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
      const tmp13 = _slicedToArray(react.useState(null), 2);
      dependencyMap = tmp13[1];
      const tmp12 = _slicedToArray;
      _slicedToArray = tmp14;
      const tmp12Result = tmp12(react.useState(0), 2);
      [tmp16, react] = tmp12Result;
      if (cResult[4] === id) {
        if (cResult[5] === stateFromStores) {
          let tmp17;
          if (cResult[6] === (null != id && tmp13[0] === id)) {
            tmp17 = cResult[7];
          }
          if (cResult[8] === tmp16) {
            if (cResult[9] === id) {
              if (cResult[10] === stateFromStores) {
                let tmp18;
                let tmp22;
                let tmp24;
                let tmp26;
                let tmp25;
                let tmp29;
                let tmp28;
                if (cResult[11] === (null != id && tmp13[0] === id)) {
                  tmp18 = cResult[12];
                }
                const effect = react.useEffect(tmp17, tmp18);
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
                      if (null != id1) {
                        const obj = ChannelActionCreatorsDefault;
                        obj.preload(closure_20, tmp);
                      }
                    }
                  }
                  const items2 = [id1];
                  cResult[13] = id1;
                  cResult[14] = W;
                  cResult[15] = items2;
                  tmp22 = items2;
                } else {
                  class W {
                    constructor() {
                      if (null != id1) {
                        const obj = ChannelActionCreatorsDefault;
                        obj.preload(closure_20, tmp);
                      }
                    }
                  }
                  tmp22 = cResult[15];
                }
                const effect1 = react.useEffect(W, tmp22);
                const _Symbol = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  class W {
                    constructor() {
                      if (null != id1) {
                        const obj = ChannelActionCreatorsDefault;
                        obj.preload(closure_20, tmp);
                      }
                    }
                  }
                  const items3 = [ReadStateStore];
                  cResult[16] = items3;
                  tmp24 = items3;
                } else {
                  class W {
                    constructor() {
                      if (null != id1) {
                        const obj = ChannelActionCreatorsDefault;
                        obj.preload(closure_20, tmp);
                      }
                    }
                  }
                }
                if (cResult[17] !== id1) {
                  class Y {
                    constructor() {
                      const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                      return hasUnreadResult;
                    }
                  }
                  const items4 = [id1];
                  cResult[17] = id1;
                  cResult[18] = items4;
                  cResult[19] = Y;
                  tmp26 = Y;
                  tmp25 = items4;
                } else {
                  class Y {
                    constructor() {
                      const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                      return hasUnreadResult;
                    }
                  }
                  tmp26 = cResult[19];
                }
                const tmpResult3 = tmp(504);
                const stateFromStores1 = tmpResult3.useStateFromStores(tmp24, tmp26, tmp25);
                const _Symbol2 = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor() {
                      const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                      return hasUnreadResult;
                    }
                  }
                  const items5 = [AppStateStore];
                  const fn2 = function $() {
                    return state.getState() === constants.ACTIVE;
                  };
                  cResult[20] = items5;
                  cResult[21] = fn2;
                  tmp29 = fn2;
                  tmp28 = items5;
                } else {
                  class Y {
                    constructor() {
                      const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                      return hasUnreadResult;
                    }
                  }
                  tmp29 = cResult[21];
                }
                const tmpResult4 = tmp(504);
                const stateFromStores2 = tmpResult4.useStateFromStores(tmp28, tmp29);
                if (cResult[22] === stateFromStores2) {
                  class Y {
                    constructor() {
                      const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
                      return hasUnreadResult;
                    }
                  }
                }
                function te() {
                  const tmp2 = null != stateFromStores && stateFromStores1 && stateFromStores2;
                  if (tmp2) {
                    const obj2 = {
                      section: constants3.CHANNEL,
                      object: constants.ACK_INCOMING_MESSAGE,
                      objectType: constants2.ACK_AUTOMATIC,
                    };
                    const obj = ReadStateActionCreators;
                    obj.ackChannel(stateFromStores, obj2);
                  }
                }
                const items6 = [stateFromStores, stateFromStores1, stateFromStores2];
                cResult[22] = stateFromStores2;
                cResult[23] = stateFromStores;
                cResult[24] = stateFromStores1;
                cResult[25] = te;
                cResult[26] = items6;
              }
            }
          }
          const items7 = [id, stateFromStores, null != id && tmp13[0] === id, tmp16];
          cResult[8] = tmp16;
          cResult[9] = id;
          cResult[10] = stateFromStores;
          cResult[11] = null != id && tmp13[0] === id;
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
              if (!tmp3) {
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
    }
  : (previewApplicationId) => {
      let closure_2;
      let closure_3;
      let closure_4;
      let intl;
      let intl2;
      let intl3;
      let items8;
      let state;
      let tmp19Result;
      let tmp19Result2;
      let tmp29Result;
      let id;
      let stateFromStores;
      dependencyMap = undefined;
      _slicedToArray = undefined;
      react = undefined;
      let id1;
      let stateFromStores1;
      let stateFromStores2;
      previewApplicationId = previewApplicationId.previewApplicationId;
      const tmp = closure_25();
      let tmp2 = id;
      let obj = id(6665);
      const application = obj.useApplication(previewApplicationId);
      const data = application.data;
      id = undefined;
      const isLoading = application.isLoading;
      if (data != null) {
        const bot = data.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (id == null) {
        id = null;
      }
      const items = [ChannelStore];
      const items1 = [id];
      const tmp2Result = tmp2(504);
      stateFromStores = tmp2Result.useStateFromStores(
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
      const tmp8 = _slicedToArray(react.useState(null), 2);
      dependencyMap = tmp8[1];
      const tmp7 = _slicedToArray;
      _slicedToArray = tmp9;
      const tmp7Result = tmp7(react.useState(0), 2);
      react = tmp7Result[1];
      const items2 = [id, stateFromStores, null != id && tmp8[0] === id, tmp7Result[0]];
      const effect = obj3.useEffect(() => {
        if (null != c0) {
          if (null == stateFromStores) {
            if (!closure_3) {
              c0 = false;
              const obj2 = { recipientIds: tmp, navigateToChannel: false };
              const obj = stateFromStores(closure_2[37]);
              const openPrivateChannelResult = obj.openPrivateChannel(obj2);
              openPrivateChannelResult.catch(() => {
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
          const obj = ChannelActionCreatorsDefault;
          obj.preload(closure_20, tmp);
        }
      }, items3);
      const items4 = [ReadStateStore];
      const items5 = [id1];
      const tmp2Result4 = tmp2(504);
      stateFromStores1 = tmp2Result4.useStateFromStores(
        items4,
        () => {
          const hasUnreadResult = null != id1 && ReadStateStore.hasUnread(tmp);
          return hasUnreadResult;
        },
        items5,
      );
      const items6 = [AppStateStore];
      const tmp2Result5 = tmp2(504);
      stateFromStores2 = tmp2Result5.useStateFromStores(items6, () => state.getState() === constants.ACTIVE);
      const items7 = [stateFromStores, stateFromStores1, stateFromStores2];
      const effect2 = obj3.useEffect(() => {
        const tmp2 = null != stateFromStores && stateFromStores1 && stateFromStores2;
        if (tmp2) {
          const obj2 = {
            section: constants3.CHANNEL,
            object: constants.ACK_INCOMING_MESSAGE,
            objectType: constants2.ACK_AUTOMATIC,
          };
          const obj = ReadStateActionCreators;
          obj.ackChannel(stateFromStores, obj2);
        }
      }, items7);
      const callback = obj3.useCallback(() => {
        closure_2(null);
        closure_4((arg0) => arg0 + 1);
      }, []);
      const ref = react.useRef(null);
      if (!isLoading) {
        if (null != id) {
          return tmp19Result2;
        }
        let obj2 = {
          title: intl.string(stateFromStores(3753)["VP/O8s"]),
          body: intl2.string(stateFromStores(3753).Sl9ITD),
          children: tmp19Result,
        };
        intl = tmp2(1126).intl;
        intl2 = tmp2(1126).intl;
        tmp19Result = null;
        if (null != id && tmp8[0] === id) {
          const obj4 = {
            variant: "secondary",
            size: "sm",
            text: intl3.string(tmp2(1126).t["5911Lb"]),
            onPress: callback,
          };
          const Button = tmp2(5601).Button;
          intl3 = tmp2(1126).intl;
          tmp19Result = closure_23(Button, obj4);
        }
        tmp19Result2 = closure_23(closure_26, obj2);
      }
      if (null == stateFromStores) {
        const obj5 = { style: tmp.centered, children: closure_23(id1, {}) };
        tmp29Result = closure_23(stateFromStores2, obj5);
      } else {
        const obj6 = { style: tmp.dm, children: items8 };
        const obj7 = {
          guildId,
          channelId: stateFromStores.id,
          chatInputRef: ref,
          screenIndex: "conjure-preview",
          alwaysRespectKeyboard: true,
          disableGradient: true,
        };
        items8 = [closure_23(stateFromStores(9773), obj7, stateFromStores.id)];
        let tmp31Result = null;
        const tmp2Result6 = tmp2(1369);
        const tmp30 = stateFromStores2;
        if (tmp2Result6.isAndroid()) {
          tmp31Result = closure_23(tmp2(16643).PortalKeyboardRenderer, { portal: true });
        }
        items8[1] = tmp31Result;
        tmp29Result = closure_24(tmp30, obj6);
      }
      tmp19Result2 = tmp29Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let availability;
      let frameHostAvailable;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let mode;
      let obj3;
      let permissionsGate;
      let previewApplicationId;
      let projectId;
      let tmp25;
      let tmp26;
      let widgetApplicationId;
      const obj = react2;
      const cResult = obj.c(16);
      ({
        projectId,
        previewApplicationId,
        mode,
        availability,
        widgetApplicationId,
        frameHostAvailable,
        permissionsGate,
      } = arg0);
      if (null != permissionsGate) {
        let tmp30;
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = intl8.intl;
          const stringResult = intl5.string(_modDef3753.xu1I8B);
          const intl6 = intl8.intl;
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
          const intl7 = intl8.intl;
          const stringResult2 = intl7.string(_modDef3753["Nub/J6"]);
          cResult[2] = stringResult2;
          tmp30 = stringResult2;
        } else {
          tmp30 = cResult[2];
        }
        if (cResult[3] === permissionsGate.loading) {
          let tmp33;
          if (cResult[4] === permissionsGate.onReviewPermissions) {
            tmp33 = cResult[5];
          }
          return tmp33;
        }
        const obj2 = { title: tmp25, body: tmp26, children: closure_23(components_Button_Button.Button, obj3) };
        obj3 = { variant: "primary", size: "sm", text: tmp30, onPress: null, loading: null };
        ({ onReviewPermissions: obj8.onPress, loading: obj8.loading } = permissionsGate);
        const tmp36 = closure_23(closure_26, obj2);
        cResult[3] = permissionsGate.loading;
        cResult[4] = permissionsGate.onReviewPermissions;
        cResult[5] = tmp36;
        tmp33 = tmp36;
      } else if ("frame" === mode) {
        let tmp19Result;
        if (cResult[6] === frameHostAvailable) {
          if (cResult[7] === previewApplicationId) {
            let tmp18;
            if (cResult[8] === projectId) {
              tmp18 = cResult[9];
            }
            return tmp18;
          }
        }
        if (frameHostAvailable) {
          const obj4 = { applicationId: previewApplicationId, projectId, visible: true };
          tmp19Result = closure_23(closure_27, obj4);
        } else {
          const obj5 = { title: intl3.string(_modDef3753["7k4GyN"]), body: intl4.string(_modDef3753.zdIy3R) };
          intl3 = intl8.intl;
          intl4 = intl8.intl;
          tmp19Result = closure_23(closure_26, obj5);
        }
        cResult[6] = frameHostAvailable;
        cResult[7] = previewApplicationId;
        cResult[8] = projectId;
        cResult[9] = tmp19Result;
        tmp18 = tmp19Result;
      } else if ("widget" === mode) {
        if (cResult[10] === availability) {
          let tmp14;
          if (cResult[11] === widgetApplicationId) {
            tmp14 = cResult[12];
          }
          return tmp14;
        }
        let tmp15 = null;
        if (null != widgetApplicationId) {
          const obj6 = {
            applicationId: widgetApplicationId,
            revoked: "unavailable-authorization-revoked" === availability.profileState,
          };
          tmp15 = closure_23(closure_28, obj6);
        }
        cResult[10] = availability;
        cResult[11] = widgetApplicationId;
        cResult[12] = tmp15;
        tmp14 = tmp15;
      } else if ("bot" === mode) {
        let tmp10;
        if (cResult[13] !== previewApplicationId) {
          const obj7 = { previewApplicationId };
          const tmp13 = closure_23(closure_29, obj7);
          cResult[13] = previewApplicationId;
          cResult[14] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[14];
        }
        return tmp10;
      } else if (null === mode) {
        let tmp5;
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const obj15 = { title: intl.string(_modDef3753["7k4GyN"]), body: intl2.string(_modDef3753.zdIy3R) };
          intl = intl8.intl;
          intl2 = intl8.intl;
          const tmp9 = closure_23(closure_26, obj15);
          cResult[15] = tmp9;
          tmp5 = tmp9;
        } else {
          tmp5 = cResult[15];
        }
        return tmp5;
      }
    }
  : (arg0) => {
      let Button;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let mode;
      let obj3;
      let permissionsGate;
      let previewApplicationId;
      let widgetApplicationId;
      ({ previewApplicationId, mode, widgetApplicationId, permissionsGate } = arg0);
      if (null != permissionsGate) {
        const obj2 = {
          title: intl5.string(_modDef3753.xu1I8B),
          body: intl6.string(_modDef3753["8qJtGr"]),
          children: closure_23(Button, obj3),
        };
        intl5 = intl8.intl;
        intl6 = intl8.intl;
        obj3 = {
          variant: "primary",
          size: "sm",
          text: intl7.string(_modDef3753["Nub/J6"]),
          onPress: null,
          loading: null,
        };
        Button = components_Button_Button.Button;
        intl7 = intl8.intl;
        ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
        return closure_23(closure_26, obj2);
      } else if ("frame" === mode) {
        let tmp14Result;
        if (tmp3) {
          const obj4 = { applicationId: previewApplicationId, projectId: tmp, visible: true };
          tmp14Result = closure_23(closure_27, obj4);
        } else {
          const obj5 = { title: intl3.string(_modDef3753["7k4GyN"]), body: intl4.string(_modDef3753.zdIy3R) };
          intl3 = intl8.intl;
          intl4 = intl8.intl;
          tmp14Result = closure_23(closure_26, obj5);
        }
        return tmp14Result;
      } else if ("widget" === mode) {
        let tmp11 = null;
        if (null != widgetApplicationId) {
          const obj6 = {
            applicationId: widgetApplicationId,
            revoked: "unavailable-authorization-revoked" === tmp2.profileState,
          };
          tmp11 = closure_23(closure_28, obj6);
        }
        return tmp11;
      } else if ("bot" === mode) {
        const obj13 = { previewApplicationId };
        return closure_23(closure_29, obj13);
      } else if (null === mode) {
        const obj = { title: intl.string(_modDef3753["7k4GyN"]), body: intl2.string(_modDef3753.zdIy3R) };
        intl = intl8.intl;
        intl2 = intl8.intl;
        return closure_23(closure_26, obj);
      }
    };
const result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default tmp9;
export const leaveConjurePreviewFrame = function leaveConjurePreviewFrame(previewAppId) {
  const frameBySurface = FramesStore.getFrameBySurface(previewAppId, conjurePreviewSurface2.CONJURE_PREVIEW_SURFACE);
  if (null != frameBySurface) {
    const obj = FramesNativeManagerDefault;
    obj.leaveFrame(frameBySurface.id);
  }
};
export const PreviewFrame = tmp8;
