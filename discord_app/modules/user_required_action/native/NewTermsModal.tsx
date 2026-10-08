// discord_app/modules/user_required_action/native/NewTermsModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import showSimpleActionSheet from "../../action_sheet/native/showSimpleActionSheet.tsx";
import TouchableHitBoxDefault from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import _modDef8646 from "../../../../_runtime/metro/08646__.js";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserRequiredActionStore from "../../../stores/UserRequiredActionStore.tsx";

const require = globalThis.__r;

require = fn;
function handleTouch() {
  React5.dismiss();
}
function handleMoreActions() {
  const obj2 = { key: "NewTermsModalMore", options: null, hasIcons: false };
  const obj3 = { label: null, isDestructive: true, onPress: null };
  const intl = util.intl;
  obj3.label = intl.string(util.t["2jxGer"]);
  obj3.onPress = function onPress() {
    return AuthenticationActionCreatorsDefault.logout("new_terms_modal");
  };
  const items = [obj3];
  obj2.options = items;
  const result = showSimpleActionSheet.showSimpleActionSheet(obj2);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, Keyboard: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const Constants = fn(1085);
({ MarketingURLs: c10, UserRequiredActions: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  contentContainer: {
    paddingHorizontal: nativeDefault.space.PX_16,
    flexGrow: 1,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  scrollView: { flex: 1 },
  container: null,
  description: null,
  agreementDescription: null,
  navbarRight: null,
  stickyFooter: null,
};
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  flexGrow: 1,
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.description = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
let obj5 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
obj2.agreementDescription = { marginTop: nativeDefault.space.PX_24 };
let obj6 = { marginTop: nativeDefault.space.PX_24 };
obj2.navbarRight = { position: "absolute", right: 0, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj7 = { position: "absolute", right: 0, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.stickyFooter = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_24,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  marginTop: nativeDefault.space.PX_24,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_required_action/native/NewTermsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NewTermsModal() {
      const cResult = require("c").c(48);
      const tmp4 = closure_14();
      let obj = require("c");
      ({ bottom, top } = useSafeAreaInsetsDefault());
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const action = UserRequiredActionStore.getAction();
        cResult[0] = action;
        let first = action;
      } else {
        first = cResult[0];
      }
      _require = first;
      const tmp6 = useSafeAreaInsetsDefault();
      [tmp11, importDefault] = noop.useState(false);
      const tmp10 = _slicedToArray(noop.useState(false), 2);
      require("useNavigatorBackPressHandler").useNavigatorBackPressHandler(
        require("useBackPressHandler").BackPressHandler.minimize,
      );
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        _require = asyncGeneratorStep(async () => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_128_0 = undefined;
                  tmp5(true);
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: tmp2(dependencyMap[17]).acceptAgreements(), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = value;
                tmp5(closure_128_0);
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              c3 = tmp;
              throw tmp15;
            }
          }
        });
        function t1() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[1] = t1;
        let tmp13 = t1;
      } else {
        tmp13 = cResult[1];
      }
      dependencyMap = tmp13;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        function handleAdvance() {
          if (closure_0 === constants2.AGREEMENTS) {
            dependencyMap();
          }
        }
        cResult[2] = handleAdvance;
        let tmp15 = handleAdvance;
      } else {
        tmp15 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          type: tmp(1272).ImpressionTypes.VIEW,
          name: tmp(1272).ImpressionNames.USER_AGREEMENTS,
          properties: null,
        };
        let obj3 = { required_action: first };
        obj2.properties = obj3;
        let obj4 = {};
        const items = [];
        cResult[3] = obj2;
        cResult[4] = obj4;
        cResult[5] = items;
        let tmp18 = items;
        let tmp17 = obj4;
        let tmp16 = obj2;
      } else {
        tmp16 = cResult[3];
        tmp17 = cResult[4];
        tmp18 = cResult[5];
      }
      useTrackImpressionDefault(tmp16, tmp17, tmp18);
      if (null == first) {
        return null;
      } else {
        if (cResult[6] === bottom) {
          if (cResult[7] === top) {
            let tmp20 = cResult[8];
          }
          if (cResult[9] === tmp4.container) {
            if (cResult[10] === tmp20) {
              let tmp21 = cResult[11];
            }
            const _Symbol = Symbol;
            ({ scrollView, contentContainer } = tmp4);
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              let obj5 = { maxFontSizeMultiplier: 2, variant: "heading-xxl/bold", children: null };
              const intl = tmp(1126).intl;
              obj5.children = intl.string(tmp(1126).t["7glvXu"]);
              const tmp24 = closure_12(tmp(5086).Text, obj5);
              cResult[12] = tmp24;
              let tmp22 = tmp24;
            } else {
              tmp22 = cResult[12];
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const obj6 = { url: constants.TERMS_SUMMARY };
              const formatResult = intl2.format(tmp(1126).t.CN0Hvb, obj6);
              cResult[13] = formatResult;
              let tmp25 = formatResult;
            } else {
              tmp25 = cResult[13];
            }
            if (cResult[14] !== tmp4.description) {
              const obj7 = { variant: "text-md/normal", style: tmp4.description, children: tmp25 };
              const tmp30 = closure_12(tmp(5086).Text, obj7);
              cResult[14] = tmp4.description;
              cResult[15] = tmp30;
              let tmp28 = tmp30;
            } else {
              tmp28 = cResult[15];
            }
            const _Symbol3 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const obj8 = { variant: "text-md/normal", children: null };
              const intl3 = tmp(1126).intl;
              const obj9 = { url: constants.TERMS };
              obj8.children = intl3.format(tmp(1126).t.iw0hFi, obj9);
              const tmp34 = closure_12(tmp(5086).Text, obj8);
              cResult[16] = tmp34;
              let tmp31 = tmp34;
            } else {
              tmp31 = cResult[16];
            }
            const _Symbol4 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const obj10 = { variant: "text-md/normal", children: null };
              const intl4 = tmp(1126).intl;
              const obj11 = { url: constants.PAID_TERMS };
              obj10.children = intl4.format(tmp(1126).t["36klnD"], obj11);
              const tmp38 = closure_12(tmp(5086).Text, obj10);
              cResult[17] = tmp38;
              let tmp35 = tmp38;
            } else {
              tmp35 = cResult[17];
            }
            const _Symbol5 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const obj12 = { variant: "text-md/normal", children: null };
              const intl5 = tmp(1126).intl;
              const obj13 = { url: constants.PRIVACY };
              obj12.children = intl5.format(tmp(1126).t.TquFBF, obj13);
              const tmp42 = closure_12(tmp(5086).Text, obj12);
              cResult[18] = tmp42;
              let tmp39 = tmp42;
            } else {
              tmp39 = cResult[18];
            }
            const _Symbol6 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const obj14 = { variant: "text-md/normal", children: null };
              const intl6 = tmp(1126).intl;
              const obj15 = { url: constants.GUIDELINES };
              obj14.children = intl6.format(tmp(1126).t.ia96Tb, obj15);
              const tmp46 = closure_12(tmp(5086).Text, obj14);
              cResult[19] = tmp46;
              let tmp43 = tmp46;
            } else {
              tmp43 = cResult[19];
            }
            const _Symbol7 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              const intl7 = tmp(1126).intl;
              const stringResult = intl7.string(tmp(1126).t["+USXQE"]);
              cResult[20] = stringResult;
              let tmp47 = stringResult;
            } else {
              tmp47 = cResult[20];
            }
            if (cResult[21] !== tmp4.agreementDescription) {
              const obj16 = { variant: "text-md/normal", style: tmp4.agreementDescription, children: tmp47 };
              const tmp51 = closure_12(tmp(5086).Text, obj16);
              cResult[21] = tmp4.agreementDescription;
              cResult[22] = tmp51;
              let tmp49 = tmp51;
            } else {
              tmp49 = cResult[22];
            }
            if (cResult[23] === tmp4.contentContainer) {
              if (cResult[24] === tmp4.scrollView) {
                if (cResult[25] === tmp28) {
                  if (cResult[26] === tmp49) {
                    let tmp52 = cResult[27];
                  }
                  const _Symbol8 = Symbol;
                  if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl8 = tmp(1126).intl;
                    const stringResult1 = intl8.string(tmp(1126).t["+TBKL1"]);
                    cResult[28] = stringResult1;
                    let tmp57 = stringResult1;
                  } else {
                    tmp57 = cResult[28];
                  }
                  if (cResult[29] !== tmp11) {
                    const obj17 = { loading: tmp11, onPress: tmp15, text: tmp57 };
                    const tmp61 = closure_12(tmp(5375).Button, obj17);
                    cResult[29] = tmp11;
                    cResult[30] = tmp61;
                    let tmp59 = tmp61;
                  } else {
                    tmp59 = cResult[30];
                  }
                  if (cResult[31] === tmp4.stickyFooter) {
                    if (cResult[32] === tmp59) {
                      let tmp62 = cResult[33];
                    }
                    if (cResult[34] !== top) {
                      const obj18 = { top };
                      cResult[34] = top;
                      cResult[35] = obj18;
                      let tmp66 = obj18;
                    } else {
                      tmp66 = cResult[35];
                    }
                    if (cResult[36] === tmp4.navbarRight) {
                      if (cResult[37] === tmp66) {
                        let tmp67 = cResult[38];
                      }
                      const _Symbol9 = Symbol;
                      if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl9 = tmp(1126).intl;
                        const stringResult2 = intl9.string(tmp(1126).t["UKOtz+"]);
                        cResult[39] = stringResult2;
                        let tmp68 = stringResult2;
                      } else {
                        tmp68 = cResult[39];
                      }
                      if (cResult[40] === tmp4.navbarRight.tintColor) {
                        if (cResult[41] === tmp67) {
                          let tmp70 = cResult[42];
                        }
                        if (cResult[43] === tmp52) {
                          if (cResult[44] === tmp62) {
                            if (cResult[45] === tmp70) {
                              if (cResult[46] === tmp21) {
                                let tmp75 = cResult[47];
                              }
                              return tmp75;
                            }
                          }
                        }
                        const obj19 = { style: tmp21, children: null };
                        const items1 = [tmp52, tmp62, tmp70];
                        obj19.children = items1;
                        const tmp78 = closure_13(closure_6, obj19);
                        cResult[43] = tmp52;
                        cResult[44] = tmp62;
                        cResult[45] = tmp70;
                        cResult[46] = tmp21;
                        cResult[47] = tmp78;
                        tmp75 = tmp78;
                      }
                      const obj20 = {
                        style: tmp67,
                        source: _modDef8646,
                        color: tmp4.navbarRight.tintColor,
                        onPress: handleMoreActions,
                        accessibilityRole: "button",
                        accessibilityLabel: tmp68,
                      };
                      const tmp74 = closure_12(TouchableHitBoxDefault, obj20);
                      cResult[40] = tmp4.navbarRight.tintColor;
                      cResult[41] = tmp67;
                      cResult[42] = tmp74;
                      tmp70 = tmp74;
                      const tmp5Result = TouchableHitBoxDefault;
                    }
                    const items2 = [tmp4.navbarRight, tmp66];
                    cResult[36] = tmp4.navbarRight;
                    cResult[37] = tmp66;
                    cResult[38] = items2;
                    tmp67 = items2;
                  }
                  const obj21 = { style: tmp4.stickyFooter, children: tmp59 };
                  const tmp65 = closure_12(closure_6, obj21);
                  cResult[31] = tmp4.stickyFooter;
                  cResult[32] = tmp59;
                  cResult[33] = tmp65;
                  tmp62 = tmp65;
                }
              }
            }
            const obj22 = {
              style: scrollView,
              contentContainerStyle: contentContainer,
              onTouchStart: handleTouch,
              children: null,
            };
            const items3 = [tmp22, tmp28, tmp31, tmp35, tmp39, tmp43, tmp49];
            obj22.children = items3;
            const tmp56 = closure_13(closure_8, obj22);
            cResult[23] = tmp4.contentContainer;
            cResult[24] = tmp4.scrollView;
            cResult[25] = tmp28;
            cResult[26] = tmp49;
            cResult[27] = tmp56;
            tmp52 = tmp56;
          }
          const items4 = [tmp4.container, tmp20];
          cResult[9] = tmp4.container;
          cResult[10] = tmp20;
          cResult[11] = items4;
          tmp21 = items4;
        }
        const obj23 = { paddingTop: top, paddingBottom: bottom };
        cResult[6] = bottom;
        cResult[7] = top;
        cResult[8] = obj23;
        tmp20 = obj23;
      }
      const tmpResult = require("useNavigatorBackPressHandler");
    }
  : function NewTermsModal() {
      const tmp = closure_14();
      const rect = useSafeAreaInsetsDefault();
      const top = rect.top;
      const memo = noop.useMemo(() => action.getAction(), []);
      const tmp5 = _slicedToArray(noop.useState(false), 2);
      importDefault = tmp5[1];
      memo(6209).useNavigatorBackPressHandler(memo(5370).BackPressHandler.minimize);
      dependencyMap = noop.useCallback(
        asyncGeneratorStep(async () => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === dependencyMap) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_128_0 = undefined;
                  tmp5(true);
                  dependencyMap = 1;
                  c3 = 1;
                  const obj5 = { value: tmp2(dependencyMap[17]).acceptAgreements(), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = value;
                closure_129_1(closure_128_0);
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              c3 = tmp;
              throw tmp15;
            }
          }
        }),
        [],
      );
      const obj2 = { type: null, name: null, properties: null };
      let obj = memo(6209);
      obj2.type = memo(1272).ImpressionTypes.VIEW;
      obj2.name = memo(1272).ImpressionNames.USER_AGREEMENTS;
      obj2.properties = { required_action: memo };
      useTrackImpressionDefault(obj2, {}, []);
      let tmp10 = null;
      if (null != memo) {
        let obj3 = { style: null, children: null };
        const items = [tmp.container];
        let obj4 = { paddingTop: top, paddingBottom: rect.bottom };
        items[1] = obj4;
        obj3.style = items;
        const obj6 = { style: null, contentContainerStyle: null, onTouchStart: null, children: null };
        ({ scrollView: obj5.style, contentContainer: obj5.contentContainerStyle } = tmp);
        obj6.onTouchStart = handleTouch;
        const obj7 = { maxFontSizeMultiplier: 2, variant: "heading-xxl/bold", children: null };
        const intl = tmp6(1126).intl;
        obj7.children = intl.string(tmp6(1126).t["7glvXu"]);
        const items1 = [closure_12(tmp6(5086).Text, obj7), , , , , ,];
        const obj8 = { variant: "text-md/normal", style: tmp.description, children: null };
        const intl2 = tmp6(1126).intl;
        const obj9 = { url: constants.TERMS_SUMMARY };
        obj8.children = intl2.format(tmp6(1126).t.CN0Hvb, obj9);
        items1[1] = closure_12(tmp6(5086).Text, obj8);
        const obj10 = { variant: "text-md/normal", children: null };
        const intl3 = tmp6(1126).intl;
        const obj11 = { url: constants.TERMS };
        obj10.children = intl3.format(tmp6(1126).t.iw0hFi, obj11);
        items1[2] = closure_12(tmp6(5086).Text, obj10);
        const obj12 = { variant: "text-md/normal", children: null };
        const intl4 = tmp6(1126).intl;
        const obj13 = { url: constants.PAID_TERMS };
        obj12.children = intl4.format(tmp6(1126).t["36klnD"], obj13);
        items1[3] = closure_12(tmp6(5086).Text, obj12);
        const obj14 = { variant: "text-md/normal", children: null };
        const intl5 = tmp6(1126).intl;
        const obj15 = { url: constants.PRIVACY };
        obj14.children = intl5.format(tmp6(1126).t.TquFBF, obj15);
        items1[4] = closure_12(tmp6(5086).Text, obj14);
        const obj16 = { variant: "text-md/normal", children: null };
        const intl6 = tmp6(1126).intl;
        const obj17 = { url: constants.GUIDELINES };
        obj16.children = intl6.format(tmp6(1126).t.ia96Tb, obj17);
        items1[5] = closure_12(tmp6(5086).Text, obj16);
        const obj18 = { variant: "text-md/normal", style: tmp.agreementDescription, children: null };
        const intl7 = tmp6(1126).intl;
        obj18.children = intl7.string(tmp6(1126).t["+USXQE"]);
        items1[6] = closure_12(tmp6(5086).Text, obj18);
        obj6.children = items1;
        const items2 = [closure_13(closure_8, obj6), ,];
        const obj19 = { style: tmp.stickyFooter, children: null };
        const obj20 = {
          loading: tmp5[0],
          onPress: function handleAdvance() {
            if (memo === constants2.AGREEMENTS) {
              dependencyMap();
            }
          },
          text: null,
        };
        const intl8 = tmp6(1126).intl;
        obj20.text = intl8.string(tmp6(1126).t["+TBKL1"]);
        obj19.children = closure_12(tmp6(5375).Button, obj20);
        items2[1] = closure_12(closure_6, obj19);
        const obj21 = {
          style: null,
          source: null,
          color: null,
          onPress: null,
          accessibilityRole: "button",
          accessibilityLabel: null,
        };
        const items3 = [tmp.navbarRight];
        const obj41 = { top };
        items3[1] = obj41;
        obj21.style = items3;
        obj21.source = tmp2(8646);
        obj21.color = tmp.navbarRight.tintColor;
        obj21.onPress = handleMoreActions;
        const intl9 = tmp6(1126).intl;
        obj21.accessibilityLabel = intl9.string(tmp6(1126).t["UKOtz+"]);
        items2[2] = closure_12(tmp2(7013), obj21);
        obj3.children = items2;
        tmp10 = closure_13(closure_6, obj3);
        const tmp2Result = tmp2(7013);
      }
      return tmp10;
    };
