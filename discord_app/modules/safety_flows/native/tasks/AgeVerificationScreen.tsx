// discord_app/modules/safety_flows/native/tasks/AgeVerificationScreen.tsx
import Server from "../../../../flow/Server.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import types from "../../types.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const Pressable = fn(17).Pressable;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ helpLink: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/AgeVerificationScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = first(stateFromStores[7]).c(26);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const v4Result = tmp(tmp2[8]).v4();
        cResult[0] = v4Result;
        first = v4Result;
        const tmpResult = tmp(tmp2[8]);
      } else {
        first = cResult[0];
      }
      const tmp6 = closure_8();
      let obj = first(stateFromStores[7]);
      const onTaskComplete = first(stateFromStores[9]).useOnTaskComplete();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        class S {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        cResult[1] = items;
        cResult[2] = S;
        let tmp9 = S;
        let tmp8 = items;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      const tmpResult3 = first(stateFromStores[9]);
      stateFromStores = first(stateFromStores[10]).useStateFromStores(tmp8, tmp9);
      if (cResult[3] !== onTaskComplete) {
        const obj2 = {
          onClose() {
            return onTaskComplete({ type: types.TaskInputType.Empty });
          },
        };
        class S {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        cResult[4] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[4];
      }
      const tmpResult4 = first(stateFromStores[10]);
      ({ loading, ageVerificationMethods } = onTaskComplete(stateFromStores[12])(tmp12));
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.ageVerificationStatus;
      }
      if (cResult[5] === prop) {
        if (cResult[6] === onTaskComplete) {
          let tmp16 = cResult[7];
        }
        if (cResult[8] === stateFromStores) {
          if (cResult[9] === onTaskComplete) {
            let tmp17 = cResult[10];
          }
          const effect = noop.useEffect(tmp16, tmp17);
          class S {
            constructor() {
              return closure_1_5.getCurrentUser();
            }
          }
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
            const items1 = [first];
            class S {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            cResult[11] = I;
            cResult[12] = items1;
            let tmp20 = items1;
          } else {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
            tmp20 = cResult[12];
          }
          const effect1 = noop.useEffect(I, tmp20);
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
            const tmp25 = jsx(tmp(tmp2[15]).ShieldSpotIllustration, {});
            class S {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            const tmp26Result = tmp26(tmp13(tmp2[17])["dSkE/A"]);
            const intl = tmp(tmp2[16]).intl;
            const obj3 = {
              handleOnHelpUrlHook() {
                const obj = onTaskComplete(stateFromStores[19]);
                obj.openUrl(onTaskComplete(stateFromStores[20]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              },
            };
            const formatResult = intl.format(tmp13(tmp2[18]).RpMIT0, obj3);
            cResult[13] = formatResult;
            cResult[14] = tmp25;
            cResult[15] = tmp26Result;
            let tmp24 = tmp26Result;
            let tmp23 = tmp25;
            const tmp22 = formatResult;
          } else {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
            tmp23 = cResult[14];
            tmp24 = cResult[15];
          }
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
            cResult[16] = tmp30;
            class S {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
          } else {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
            const stringResult = obj8.string(tmp(tmp2[16]).t["2jxGer"]);
            class S {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            cResult[17] = stringResult;
            const tmp31 = stringResult;
          } else {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
          }
          if (cResult[18] !== tmp6.helpLink) {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
            const obj4 = { children: null };
            class S {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            tmp35[1] = tmp29;
            const obj5 = { variant: "text-sm/medium", color: "text-link", style: tmp6.helpLink, children: tmp31 };
            tmp35[2] = jsx(tmp(tmp2[23]).Text, {
              variant: "text-sm/medium",
              color: "text-link",
              style: tmp6.helpLink,
              children: tmp31,
            });
            obj4.children = <Pressable {...tmp35} />;
            const tmp36 = jsx(tmp(tmp2[22]).ModalDisclaimer, { children: null });
            cResult[18] = tmp6.helpLink;
            cResult[19] = tmp36;
          } else {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
          }
          if (cResult[20] !== ageVerificationMethods) {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
            const obj7 = { ageVerificationMethods, modalSessionId: null };
            class S {
              constructor() {
                return closure_1_5.getCurrentUser();
              }
            }
            const tmp38 = jsx(tmp(tmp2[24]).AgeVerificationMethodsContainer, {
              ageVerificationMethods,
              modalSessionId: null,
            });
            cResult[20] = ageVerificationMethods;
            cResult[21] = tmp38;
          } else {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
          }
          if (cResult[22] === loading) {
            class I {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.trackAgeVerificationModalViewed(
                  closure_0,
                  closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
                  closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
                );
                return;
              }
            }
          }
          const obj9 = {
            ImageComponent: tmp23,
            title: tmp24,
            subtitle: tmp22,
            footer: tmp33,
            submitting: loading,
            children: tmp37,
          };
          const tmp41 = jsx(tmp13(tmp2[25]), {
            ImageComponent: tmp23,
            title: tmp24,
            subtitle: tmp22,
            footer: tmp33,
            submitting: loading,
            children: tmp37,
          });
          cResult[22] = loading;
          cResult[23] = tmp33;
          cResult[24] = tmp37;
          class V {
            constructor() {
              prop = undefined;
              if (closure_2 != null) {
                prop = closure_2.ageVerificationStatus;
              }
              tmp2 = closure_0;
              tmp3 = closure_2;
              if (prop !== closure_0(closure_2[13]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
                tmp4 = closure_1;
                obj = { type: null };
                obj.type = tmp2(tmp3[11]).TaskInputType.Empty;
                tmp5 = closure_1(obj);
              }
              return;
            }
          }
          cResult[25] = tmp41;
        }
        const items2 = [,];
        class S {
          constructor() {
            return closure_1_5.getCurrentUser();
          }
        }
        items2[1] = stateFromStores;
        cResult[8] = stateFromStores;
        cResult[9] = onTaskComplete;
        cResult[10] = items2;
        tmp17 = items2;
      }
      if (stateFromStores != null) {
        class I {
          constructor() {
            obj = closure_0(closure_2[14]);
            result = obj.trackAgeVerificationModalViewed(
              closure_0,
              closure_0(closure_2[14]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
              closure_0(closure_2[14]).AgeVerificationModalEntryPoint.SAFETY_FLOWS,
            );
            return;
          }
        }
      }
      class V {
        constructor() {
          prop = undefined;
          if (closure_2 != null) {
            prop = closure_2.ageVerificationStatus;
          }
          tmp2 = closure_0;
          tmp3 = closure_2;
          if (prop !== closure_0(closure_2[13]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
            tmp4 = closure_1;
            obj = { type: null };
            obj.type = tmp2(tmp3[11]).TaskInputType.Empty;
            tmp5 = closure_1(obj);
          }
          return;
        }
      }
      cResult[5] = undefined;
      cResult[6] = onTaskComplete;
      cResult[7] = V;
      tmp16 = V;
      const tmp14 = onTaskComplete(stateFromStores[12])(tmp12);
    }
  : () => {
      const memo = noop.useMemo(() => memo(stateFromStores[8]).v4(), []);
      const tmp2 = closure_8();
      const onTaskComplete = memo(stateFromStores[9]).useOnTaskComplete();
      let obj = memo(stateFromStores[9]);
      const items = [UserStore];
      stateFromStores = memo(stateFromStores[10]).useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj2 = memo(stateFromStores[10]);
      const obj3 = {
        onClose() {
          return onTaskComplete({ type: types.TaskInputType.Empty });
        },
      };
      const items1 = [onTaskComplete, stateFromStores];
      ({ loading, ageVerificationMethods } = onTaskComplete(stateFromStores[12])({
        onClose() {
          return onTaskComplete({ type: types.TaskInputType.Empty });
        },
      }));
      const effect = noop.useEffect(() => {
        let prop;
        if (stateFromStores != null) {
          prop = stateFromStores.ageVerificationStatus;
        }
        if (prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
          const obj = { type: types.TaskInputType.Empty };
          onTaskComplete(obj);
        }
      }, items1);
      const items2 = [memo];
      const effect1 = noop.useEffect(() => {
        const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed(
          memo,
          AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
          AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS,
        );
      }, items2);
      const obj4 = {
        ImageComponent: null,
        title: null,
        subtitle: null,
        footer: null,
        submitting: null,
        children: null,
      };
      const tmp5 = onTaskComplete(stateFromStores[12])({
        onClose() {
          return onTaskComplete({ type: types.TaskInputType.Empty });
        },
      });
      obj4.ImageComponent = jsx(memo(stateFromStores[15]).ShieldSpotIllustration, {});
      const intl = memo(stateFromStores[16]).intl;
      obj4.title = intl.string(onTaskComplete(stateFromStores[17])["dSkE/A"]);
      const intl2 = memo(stateFromStores[16]).intl;
      obj4.subtitle = intl2.format(onTaskComplete(stateFromStores[18]).RpMIT0, {
        handleOnHelpUrlHook() {
          const obj = onTaskComplete(stateFromStores[19]);
          obj.openUrl(onTaskComplete(stateFromStores[20]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
        },
      });
      const obj6 = { children: null };
      const obj7 = {
        accessibilityRole: "button",
        onPress() {
          onTaskComplete(stateFromStores[21]).logout("age_verification_screen");
        },
        children: null,
      };
      const obj8 = { variant: "text-sm/medium", color: "text-link", style: tmp2.helpLink, children: null };
      const intl3 = memo(stateFromStores[16]).intl;
      obj8.children = intl3.string(memo(stateFromStores[16]).t["2jxGer"]);
      obj7.children = jsx(memo(stateFromStores[23]).Text, {
        variant: "text-sm/medium",
        color: "text-link",
        style: tmp2.helpLink,
        children: null,
      });
      obj6.children = (
        <Pressable
          accessibilityRole="button"
          onPress={function onPress() {
            onTaskComplete(stateFromStores[21]).logout("age_verification_screen");
          }}
        >
          {null}
        </Pressable>
      );
      obj4.footer = jsx(memo(stateFromStores[22]).ModalDisclaimer, { children: null });
      obj4.submitting = loading;
      obj4.children = jsx(memo(stateFromStores[24]).AgeVerificationMethodsContainer, {
        ageVerificationMethods,
        modalSessionId: memo,
      });
      return jsx(onTaskComplete(stateFromStores[25]), {
        ImageComponent: null,
        title: null,
        subtitle: null,
        footer: null,
        submitting: null,
        children: null,
      });
    };
