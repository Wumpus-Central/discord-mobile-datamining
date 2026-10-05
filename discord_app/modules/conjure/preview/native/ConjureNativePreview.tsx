// discord_app/modules/conjure/preview/native/ConjureNativePreview.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl8 from "../../../../intl/index.native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import UserProfileApplicationWidgetTypes from "../../../user_profile/UserProfileApplicationWidgetTypes.tsx";
import UserProfileApplicationWidgetCardDefault from "../../../user_profile/native/UserProfileApplicationWidgetCard.tsx";
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
import Constants from "../../../../Constants.tsx";
import FramesConstants from "../../../frames/FramesConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c0, catchPromise, dependencyMap, flag, obj1, tmp3;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
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
  AnalyticsObjects: closure_15,
  AnalyticsObjectTypes: closure_16,
  AnalyticsSections: closure_17,
  AppStates: closure_18,
  ME: closure_19,
} = Constants);
({
  FrameLayoutModes: closure_20,
  isLaunched: closure_21,
  MAIN_SURFACE: closure_22,
  makeFrameId: closure_23,
} = FramesConstants);
({ jsx: closure_24, jsxs: closure_25 } = Fragment);
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
let closure_26 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let body;
      let children;
      let items;
      let items1;
      let title;
      const obj = react2;
      const cResult = obj.c(20);
      ({ title, body, children } = arg0);
      const tmp4 = closure_26();
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
                    const tmp24 = closure_24(metroImportDefault, obj2);
                    cResult[17] = tmp4.centered;
                    cResult[18] = tmp18;
                    cResult[19] = tmp24;
                    tmp21 = tmp24;
                  }
                  const obj3 = { variant: "primary", style: tmp4.card, children: tmp14 };
                  const tmp20 = closure_24(Card_Card.Card, obj3);
                  cResult[14] = tmp4.card;
                  cResult[15] = tmp14;
                  cResult[16] = tmp20;
                  tmp18 = tmp20;
                }
              }
              const obj4 = { style: tmp4.cardBody, children: items };
              items = [tmp10, children];
              const tmp17 = closure_25(metroImportDefault, obj4);
              cResult[10] = children;
              cResult[11] = tmp4.cardBody;
              cResult[12] = tmp10;
              cResult[13] = tmp17;
              tmp14 = tmp17;
            }
          }
          const obj5 = { style: tmp4.cardCopy, children: items1 };
          items1 = [tmp5, tmp7];
          const tmp13 = closure_25(metroImportDefault, obj5);
          cResult[6] = tmp4.cardCopy;
          cResult[7] = tmp5;
          cResult[8] = tmp7;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
        const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp4.cardText, children: body };
        const tmp9 = closure_24(Text_Text.Text, obj6);
        cResult[3] = body;
        cResult[4] = tmp4.cardText;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const obj7 = { variant: "heading-md/semibold", color: "text-default", style: tmp4.cardText, children: title };
      const tmp6 = closure_24(Text_Text.Text, obj7);
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
      const tmp = closure_26();
      const obj = { style: tmp.centered, children: closure_24(Card, obj2) };
      obj2 = { variant: "primary", style: tmp.card, children: closure_25(metroImportDefault, obj3) };
      obj3 = { style: tmp.cardBody, children: items1 };
      const obj4 = { style: tmp.cardCopy, children: items };
      Card = Card_Card.Card;
      items = [,];
      const obj5 = { variant: "heading-md/semibold", color: "text-default", style: tmp.cardText, children: title };
      items[0] = closure_24(Text_Text.Text, obj5);
      const obj6 = { variant: "text-sm/normal", color: "text-muted", style: tmp.cardText, children: body };
      items[1] = closure_24(Text_Text.Text, obj6);
      items1 = [closure_25(metroImportDefault, obj4), children];
      return closure_24(metroImportDefault, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (applicationId) => {
      let Button;
      let closure_2;
      let closure_3;
      let closure_5;
      let first;
      let intl3;
      let items;
      let obj9;
      let onOpenPublishedApp;
      let tmp6;
      let visible;
      let obj = applicationId(576);
      const cResult = obj.c(39);
      applicationId = applicationId.applicationId;
      const projectId = applicationId.projectId;
      ({ visible, onOpenPublishedApp } = applicationId);
      let tmp4 = null;
      if (undefined !== onOpenPublishedApp) {
        tmp4 = onOpenPublishedApp;
      }
      const tmpResult = applicationId(8973);
      const conjureControlActive = tmpResult.useConjureControlActive(projectId);
      const active = closure_14(projectId).active;
      if (cResult[0] !== projectId) {
        const fn = function o() {
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
        let tmp11;
        let tmp18;
        if (cResult[3] === visible) {
          tmp7 = cResult[4];
        }
        let obj3 = first;
        const effect = first.useEffect(tmp6, tmp7);
        const tmp10 = closure_26();
        if (cResult[5] !== applicationId) {
          const tmp14 = closure_23(applicationId, surface);
          cResult[5] = applicationId;
          cResult[6] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[6];
        }
        dependencyMap = tmp11;
        const tmp17 = projectId(16591)(applicationId, surface);
        _slicedToArray = tmp17;
        if (cResult[7] !== tmp17) {
          let tmp19 = null;
          if (null != tmp17) {
            tmp19 = null;
            if (closure_21(tmp17)) {
              tmp19 = tmp17;
            }
          }
          cResult[7] = tmp17;
          cResult[8] = tmp19;
          tmp18 = tmp19;
        } else {
          tmp18 = cResult[8];
        }
        [first, closure_5] = obj3.useState(false);
        if (cResult[9] === applicationId) {
          if (cResult[10] === first) {
            if (cResult[11] === tmp17) {
              let tmp24;
              let tmp25;
              let tmp38;
              if (cResult[12] === tmp11) {
                tmp24 = cResult[13];
                tmp25 = cResult[14];
              }
              const effect1 = obj3.useEffect(tmp24, tmp25);
              let tmp28 = visible;
              const tmp15Result = projectId(16592);
              if (visible) {
                tmp28 = null != tmp18;
              }
              tmp15Result(tmp28);
              let applicationId1;
              const tmp15Result3 = projectId(16593);
              if (tmp18 != null) {
                applicationId1 = tmp18.applicationId;
              }
              if (applicationId1 == null) {
                applicationId1 = null;
              }
              tmp15Result3(applicationId1);
              if (null != tmp18) {
                let tmp52;
                let tmp54;
                const _Symbol4 = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  let obj2 = { layoutMode: constants4.FOCUSED };
                  cResult[15] = obj2;
                  tmp52 = obj2;
                } else {
                  tmp52 = cResult[15];
                }
                if (cResult[16] !== tmp18.id) {
                  let obj4 = {
                    frameId: tmp18.id,
                    level: applicationId(16598).FrameStackLevel.WithinAppContent,
                    presentation: tmp52,
                  };
                  const tmp15Result4 = projectId(16594);
                  const tmp57 = closure_24(tmp15Result4, obj4);
                  cResult[16] = tmp18.id;
                  cResult[17] = tmp57;
                  tmp54 = tmp57;
                } else {
                  tmp54 = cResult[17];
                }
                if (cResult[18] === conjureControlActive) {
                  if (cResult[19] === projectId) {
                    if (cResult[20] === active) {
                      let tmp58;
                      if (cResult[21] === visible) {
                        tmp58 = cResult[22];
                      }
                      if (cResult[23] === conjureControlActive) {
                        if (cResult[24] === tmp4) {
                          if (cResult[25] === projectId) {
                            if (cResult[26] === tmp58) {
                              if (cResult[27] === tmp54) {
                                let tmp61;
                                if (cResult[28] === visible) {
                                  tmp61 = cResult[29];
                                }
                                if (cResult[30] === tmp10.frame) {
                                  let tmp64;
                                  if (cResult[31] === tmp61) {
                                    tmp64 = cResult[32];
                                  }
                                  tmp38 = tmp64;
                                }
                                const obj5 = { style: tmp10.frame, children: tmp61 };
                                const tmp67 = closure_24(closure_7, obj5);
                                cResult[30] = tmp10.frame;
                                cResult[31] = tmp61;
                                cResult[32] = tmp67;
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
                        children: items,
                      };
                      items = [tmp54, tmp58];
                      const tmp63 = closure_25(projectId(16601), obj6);
                      cResult[23] = conjureControlActive;
                      cResult[24] = tmp4;
                      cResult[25] = projectId;
                      class N {
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
                              const obj4 = FramesActionCreatorsDefault;
                              obj4.demoteMainFrame(closure_2);
                            }
                          }
                        }
                      }
                      cResult[27] = tmp54;
                      cResult[28] = visible;
                      cResult[29] = tmp63;
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
                      tmp59 = closure_24(tmp15(16599), obj7);
                    }
                  }
                }
                cResult[18] = conjureControlActive;
                cResult[19] = projectId;
                cResult[20] = active;
                cResult[21] = visible;
                cResult[22] = tmp59;
                tmp58 = tmp59;
              } else if (first) {
                let tmp44;
                let tmp43;
                let tmp47;
                const _Symbol2 = Symbol;
                if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(1126).intl;
                  const stringResult = intl.string(projectId(3723).lTPbnG);
                  const intl2 = tmp(1126).intl;
                  const stringResult1 = intl2.string(projectId(3723).e6GiAZ);
                  cResult[33] = stringResult;
                  cResult[34] = stringResult1;
                  tmp44 = stringResult1;
                  tmp43 = stringResult;
                } else {
                  tmp43 = cResult[33];
                  tmp44 = cResult[34];
                }
                const _Symbol3 = Symbol;
                if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj8 = { title: tmp43, body: tmp44, children: closure_24(Button, obj9) };
                  obj9 = {
                    variant: "primary",
                    size: "sm",
                    text: intl3.string(projectId(3723)["WFJ/vb"]),
                    onPress() {
                      return closure_5(false);
                    },
                  };
                  Button = tmp(5594).Button;
                  intl3 = tmp(1126).intl;
                  const tmp50 = closure_24(closure_27, obj8);
                  cResult[35] = tmp50;
                  tmp47 = tmp50;
                } else {
                  tmp47 = cResult[35];
                }
                tmp38 = tmp47;
              } else {
                let tmp34;
                const _Symbol = Symbol;
                if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp37 = closure_24(closure_5, {});
                  cResult[36] = tmp37;
                  tmp34 = tmp37;
                } else {
                  tmp34 = cResult[36];
                }
                if (cResult[37] !== tmp10.centered) {
                  const obj10 = { style: tmp10.centered, children: tmp34 };
                  const tmp41 = closure_24(closure_7, obj10);
                  cResult[37] = tmp10.centered;
                  cResult[38] = tmp41;
                  tmp38 = tmp41;
                } else {
                  tmp38 = cResult[38];
                }
              }
              return tmp38;
            }
          }
        }
        class N {
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
                const obj4 = FramesActionCreatorsDefault;
                obj4.demoteMainFrame(closure_2);
              }
            }
          }
        }
        const items1 = [applicationId, first, tmp17, tmp11];
        cResult[9] = applicationId;
        cResult[10] = first;
        cResult[11] = tmp17;
        cResult[12] = tmp11;
        cResult[13] = N;
        cResult[14] = items1;
        tmp25 = items1;
        tmp24 = N;
      }
      const items2 = [projectId, visible];
      cResult[2] = projectId;
      cResult[3] = visible;
      cResult[4] = items2;
      tmp7 = items2;
    }
  : (applicationId) => {
      let Button;
      let closure_2;
      let closure_3;
      let closure_5;
      let first;
      let intl;
      let intl2;
      let intl3;
      let items2;
      let obj4;
      let obj6;
      let obj9;
      let onOpenPublishedApp;
      let tmp24Result2;
      let tmp7Result5;
      let visible;
      applicationId = applicationId.applicationId;
      const projectId = applicationId.projectId;
      ({ visible, onOpenPublishedApp } = applicationId);
      if (onOpenPublishedApp === undefined) {
        onOpenPublishedApp = null;
      }
      first = undefined;
      closure_5 = undefined;
      let obj = applicationId(8973);
      const conjureControlActive = obj.useConjureControlActive(projectId);
      let obj2 = first;
      const items = [projectId, visible];
      const active = closure_14(projectId).active;
      const effect = first.useEffect(() => () => closure_2_13(projectId), items);
      const tmp5 = closure_26();
      const tmp6 = closure_23(applicationId, surface);
      dependencyMap = tmp6;
      const tmp8 = projectId(16591)(applicationId, surface);
      _slicedToArray = tmp8;
      let tmp9 = null;
      if (null != tmp8) {
        tmp9 = null;
        if (closure_21(tmp8)) {
          tmp9 = tmp8;
        }
      }
      [first, closure_5] = obj2.useState(false);
      const items1 = [applicationId, first, tmp8, tmp6];
      const effect1 = obj2.useEffect(() => {
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
            const obj4 = FramesActionCreatorsDefault;
            obj4.demoteMainFrame(closure_2);
          }
        }
      }, items1);
      let tmp15 = visible;
      const tmp7Result = projectId(16592);
      if (visible) {
        tmp15 = null != tmp9;
      }
      tmp7Result(tmp15);
      let applicationId1;
      const tmp7Result4 = projectId(16593);
      if (tmp9 != null) {
        applicationId1 = tmp9.applicationId;
      }
      if (applicationId1 == null) {
        applicationId1 = null;
      }
      tmp7Result4(applicationId1);
      if (null != tmp9) {
        let obj3 = { style: tmp5.frame, children: closure_25(tmp7Result5, obj4) };
        obj4 = { projectId, active: conjureControlActive, visible, onOpenPublishedApp, children: items2 };
        const obj5 = {
          frameId: tmp9.id,
          level: applicationId(16598).FrameStackLevel.WithinAppContent,
          presentation: obj6,
        };
        tmp7Result5 = projectId(16601);
        obj6 = { layoutMode: constants4.FOCUSED };
        const tmp7Result6 = projectId(16594);
        items2 = [closure_24(tmp7Result6, obj5)];
        let tmp24Result = null;
        if (visible) {
          tmp24Result = null;
          if (active) {
            tmp24Result = null;
            if (!conjureControlActive) {
              const obj7 = { projectId };
              tmp24Result = closure_24(tmp7(16599), obj7);
            }
          }
        }
        items2[1] = tmp24Result;
        tmp24Result2 = closure_24(closure_7, obj3);
      } else if (first) {
        const obj8 = {
          title: intl.string(projectId(3723).lTPbnG),
          body: intl2.string(projectId(3723).e6GiAZ),
          children: closure_24(Button, obj9),
        };
        intl = tmp(1126).intl;
        intl2 = tmp(1126).intl;
        obj9 = {
          variant: "primary",
          size: "sm",
          text: intl3.string(projectId(3723)["WFJ/vb"]),
          onPress() {
            return closure_5(false);
          },
        };
        Button = tmp(5594).Button;
        intl3 = tmp(1126).intl;
        tmp24Result2 = closure_24(closure_27, obj8);
      } else {
        const obj10 = { style: tmp5.centered, children: closure_24(closure_5, {}) };
        tmp24Result2 = closure_24(closure_7, obj10);
      }
      return tmp24Result2;
    };
let closure_28 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
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
      const tmp4 = closure_26();
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
          const obj3 = { title: intl.string(_modDef3723["08U+YO"]), body: intl2.string(_modDef3723.pKBfrc) };
          intl = intl8.intl;
          intl2 = intl8.intl;
          const tmp25 = closure_24(closure_27, obj3);
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
          const tmp20 = closure_24(metroRequire, obj4);
          cResult[8] = tmp4.widget;
          cResult[9] = tmp13;
          cResult[10] = tmp20;
          tmp17 = tmp20;
        }
        const obj5 = { userId: stateFromStores, widget: tmp9 };
        const tmp16 = closure_24(UserProfileApplicationWidgetCardDefault, obj5);
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
      const tmp = closure_26();
      let obj = applicationId(504);
      const items = [AuthenticationStore];
      [][0] = applicationId;
      const stateFromStores = obj.useStateFromStores(items, () => id.getId());
      if (revoked) {
        const obj2 = { title: intl.string(_modDef3723["08U+YO"]), body: intl2.string(_modDef3723.pKBfrc) };
        intl = tmp2(1126).intl;
        intl2 = tmp2(1126).intl;
        tmp6Result = closure_24(closure_27, obj2);
      } else {
        const obj3 = {
          contentContainerStyle: tmp.widget,
          children: closure_24(UserProfileApplicationWidgetCardDefault, obj4),
        };
        obj4 = { userId: stateFromStores, widget: tmp5 };
        tmp6Result = closure_24(closure_6, obj3);
      }
      return tmp6Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
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
      closure_26();
      let obj2 = id(6658);
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
                        obj.preload(closure_19, tmp);
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
                        obj.preload(closure_19, tmp);
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
                        obj.preload(closure_19, tmp);
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
                        obj.preload(closure_19, tmp);
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
      class T {
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
                obj = closure_1(closure_2[35]);
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
      cResult[7] = T;
      tmp17 = T;
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
      const tmp = closure_26();
      let tmp2 = id;
      let obj = id(6658);
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
              const obj = stateFromStores(closure_2[35]);
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
          obj.preload(closure_19, tmp);
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
          title: intl.string(stateFromStores(3723)["VP/O8s"]),
          body: intl2.string(stateFromStores(3723).Sl9ITD),
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
          const Button = tmp2(5594).Button;
          intl3 = tmp2(1126).intl;
          tmp19Result = closure_24(Button, obj4);
        }
        tmp19Result2 = closure_24(closure_27, obj2);
      }
      if (null == stateFromStores) {
        const obj5 = { style: tmp.centered, children: closure_24(id1, {}) };
        tmp29Result = closure_24(stateFromStores2, obj5);
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
        items8 = [closure_24(stateFromStores(9760), obj7, stateFromStores.id)];
        let tmp31Result = null;
        const tmp2Result6 = tmp2(1369);
        const tmp30 = stateFromStores2;
        if (tmp2Result6.isAndroid()) {
          tmp31Result = closure_24(tmp2(16605).PortalKeyboardRenderer, { portal: true });
        }
        items8[1] = tmp31Result;
        tmp29Result = closure_25(tmp30, obj6);
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
          const stringResult = intl5.string(_modDef3723.xu1I8B);
          const intl6 = intl8.intl;
          const stringResult1 = intl6.string(_modDef3723["8qJtGr"]);
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
          const stringResult2 = intl7.string(_modDef3723["Nub/J6"]);
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
        const obj2 = { title: tmp25, body: tmp26, children: closure_24(components_Button_Button.Button, obj3) };
        obj3 = { variant: "primary", size: "sm", text: tmp30, onPress: null, loading: null };
        ({ onReviewPermissions: obj8.onPress, loading: obj8.loading } = permissionsGate);
        const tmp36 = closure_24(closure_27, obj2);
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
          tmp19Result = closure_24(closure_28, obj4);
        } else {
          const obj5 = { title: intl3.string(_modDef3723["7k4GyN"]), body: intl4.string(_modDef3723.zdIy3R) };
          intl3 = intl8.intl;
          intl4 = intl8.intl;
          tmp19Result = closure_24(closure_27, obj5);
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
          tmp15 = closure_24(closure_29, obj6);
        }
        cResult[10] = availability;
        cResult[11] = widgetApplicationId;
        cResult[12] = tmp15;
        tmp14 = tmp15;
      } else if ("bot" === mode) {
        let tmp10;
        if (cResult[13] !== previewApplicationId) {
          const obj7 = { previewApplicationId };
          const tmp13 = closure_24(closure_30, obj7);
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
          const obj15 = { title: intl.string(_modDef3723["7k4GyN"]), body: intl2.string(_modDef3723.zdIy3R) };
          intl = intl8.intl;
          intl2 = intl8.intl;
          const tmp9 = closure_24(closure_27, obj15);
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
          title: intl5.string(_modDef3723.xu1I8B),
          body: intl6.string(_modDef3723["8qJtGr"]),
          children: closure_24(Button, obj3),
        };
        intl5 = intl8.intl;
        intl6 = intl8.intl;
        obj3 = {
          variant: "primary",
          size: "sm",
          text: intl7.string(_modDef3723["Nub/J6"]),
          onPress: null,
          loading: null,
        };
        Button = components_Button_Button.Button;
        intl7 = intl8.intl;
        ({ onReviewPermissions: obj7.onPress, loading: obj7.loading } = permissionsGate);
        return closure_24(closure_27, obj2);
      } else if ("frame" === mode) {
        let tmp14Result;
        if (tmp3) {
          const obj4 = { applicationId: previewApplicationId, projectId: tmp, visible: true };
          tmp14Result = closure_24(closure_28, obj4);
        } else {
          const obj5 = { title: intl3.string(_modDef3723["7k4GyN"]), body: intl4.string(_modDef3723.zdIy3R) };
          intl3 = intl8.intl;
          intl4 = intl8.intl;
          tmp14Result = closure_24(closure_27, obj5);
        }
        return tmp14Result;
      } else if ("widget" === mode) {
        let tmp11 = null;
        if (null != widgetApplicationId) {
          const obj6 = {
            applicationId: widgetApplicationId,
            revoked: "unavailable-authorization-revoked" === tmp2.profileState,
          };
          tmp11 = closure_24(closure_29, obj6);
        }
        return tmp11;
      } else if ("bot" === mode) {
        const obj13 = { previewApplicationId };
        return closure_24(closure_30, obj13);
      } else if (null === mode) {
        const obj = { title: intl.string(_modDef3723["7k4GyN"]), body: intl2.string(_modDef3723.zdIy3R) };
        intl = intl8.intl;
        intl2 = intl8.intl;
        return closure_24(closure_27, obj);
      }
    };
const result = size.fileFinishedImporting("modules/conjure/preview/native/ConjureNativePreview.tsx");

export default tmp9;
export const leaveConjurePreviewFrame = function leaveConjurePreviewFrame(previewAppId) {
  const frameBySurface = FramesStore.getFrameBySurface(previewAppId, closure_22);
  if (null != frameBySurface) {
    const obj = FramesNativeManagerDefault;
    obj.leaveFrame(frameBySurface.id);
  }
};
export const PreviewFrame = tmp8;
