// discord_app/modules/conjure/projects/native/openConjureUnpublishUserAppAlert.tsx
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureUnpublishUserAppAlert(project) {
      const cResult = require("c").c(23);
      project = project.project;
      _require = project;
      const obj = require("c");
      [tmp5, importDefault] = noop.useState(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === project.application_id) {
        if (cResult[2] === project.name) {
          let tmp8 = cResult[3];
          let tmp9 = cResult[4];
        }
        stateFromStores = tmp(tmp2[7]).useStateFromStores(first, tmp8, tmp9);
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === project.id) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] !== stateFromStores) {
            let intl = tmp(tmp2[9]).intl;
            let obj2 = { app: stateFromStores };
            const formatToPlainStringResult = intl.formatToPlainString(
              require("../../intl/ConjureUntranslated.messages.js").m8KWic,
              obj2,
            );
            cResult[8] = stateFromStores;
            cResult[9] = formatToPlainStringResult;
            let tmp13 = formatToPlainStringResult;
          } else {
            tmp13 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            let intl2 = tmp(tmp2[9]).intl;
            const stringResult = intl2.string(require("../../intl/ConjureUntranslated.messages.js").wve4kB);
            cResult[10] = stringResult;
            let tmp16 = stringResult;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] !== tmp5) {
            let tmp20;
            if (null != tmp5) {
              let obj3 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp5 };
              tmp20 = closure_7(tmp(tmp2[12]).Text, obj3);
            }
            cResult[11] = tmp5;
            cResult[12] = tmp20;
            let tmp19 = tmp20;
          } else {
            tmp19 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[9]).intl;
            const stringResult1 = intl3.string(require("../../intl/ConjureUntranslated.messages.js").GqcQyH);
            cResult[13] = stringResult1;
            let tmp22 = stringResult1;
          } else {
            tmp22 = cResult[13];
          }
          if (cResult[14] !== tmp11) {
            let obj4 = { variant: "destructive", text: tmp22, onPress: tmp11 };
            const tmp27 = closure_7(tmp(tmp2[13]).AlertActionButton, obj4);
            cResult[14] = tmp11;
            cResult[15] = tmp27;
            let tmp25 = tmp27;
          } else {
            tmp25 = cResult[15];
          }
          const _Symbol3 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { variant: "secondary", text: null };
            const intl4 = tmp(tmp2[9]).intl;
            obj5.text = intl4.string(tmp(tmp2[9]).t["ETE/oC"]);
            const tmp30 = closure_7(tmp(tmp2[13]).AlertActionButton, obj5);
            cResult[16] = tmp30;
            let tmp28 = tmp30;
          } else {
            tmp28 = cResult[16];
          }
          if (cResult[17] !== tmp25) {
            let obj6 = { children: null };
            const items1 = [tmp25, tmp28];
            obj6.children = items1;
            const tmp34 = closure_9(closure_8, obj6);
            cResult[17] = tmp25;
            cResult[18] = tmp34;
            let tmp31 = tmp34;
          } else {
            tmp31 = cResult[18];
          }
          if (cResult[19] === tmp31) {
            if (cResult[20] === tmp13) {
              if (cResult[21] === tmp19) {
                let tmp35 = cResult[22];
              }
              return tmp35;
            }
          }
          let obj7 = { title: tmp13, content: tmp16, extraContent: tmp19, actions: tmp31 };
          const tmp37 = closure_7(tmp(tmp2[13]).AlertModal, obj7);
          class A {
            constructor() {
              tmp = closure_0;
              application = closure_6.getApplication(closure_0.application_id);
              name = undefined;
              if (application != null) {
                name = application.name;
              }
              if (name == null) {
                name = tmp.name;
              }
              return name;
            }
          }
          cResult[19] = tmp31;
          cResult[20] = tmp13;
          cResult[21] = tmp19;
          cResult[22] = tmp37;
          tmp35 = tmp37;
        }
        _require = asyncGeneratorStep(async () => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === app) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_128_0 = undefined;
                  tmp2(null);
                  app = 1;
                  c3 = 1;
                  const obj4 = { value: tmp5(stateFromStores[8]).unpublishUserApp(tmp5.id), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else if (value) {
                const obj7 = { text: null, variant: "success" };
                const intl2 = tmp5(stateFromStores[9]).intl;
                const obj8 = { app };
                obj7.text = intl2.formatToPlainString(
                  require("../../intl/ConjureUntranslated.messages.js").b8LN7N,
                  obj8,
                );
                require("ToastActionCreators").open("CONJURE_USER_APP_UNPUBLISHED", obj7);
                c3 = 3;
                return { value: "IconComponent", done: null };
              } else {
                const intl = tmp5(stateFromStores[9]).intl;
                closure_128_0 = intl.string(require("../../intl/ConjureUntranslated.messages.js")["rE/0SD"]);
                tmp2(closure_128_0);
                const _Error = Error;
                const error = new Error(closure_128_0);
                throw error;
              }
            } catch (tmp36) {
              c3 = tmp;
              throw tmp36;
            }
          }
        });
        function submit() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[5] = stateFromStores;
        cResult[6] = project.id;
        cResult[7] = submit;
        tmp11 = submit;
        const tmpResult = tmp(tmp2[7]);
      }
      class A {
        constructor() {
          tmp = closure_0;
          application = closure_6.getApplication(closure_0.application_id);
          name = undefined;
          if (application != null) {
            name = application.name;
          }
          if (name == null) {
            name = tmp.name;
          }
          return name;
        }
      }
      const items2 = [,];
      ({ application_id: arr2[0], name: arr2[1] } = project);
      ({ application_id: tmp3[1], name: tmp3[2] } = project);
      cResult[3] = A;
      cResult[4] = items2;
      tmp9 = items2;
      tmp8 = A;
      const tmp4 = _slicedToArray(noop.useState(null), 2);
    }
  : function ConjureUnpublishUserAppAlert(project) {
      project = project.project;
      importDefault = undefined;
      let stateFromStores;
      closure_3 = async function _submit2() {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
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
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_0 = undefined;
                importDefault(null);
                dependencyMap = 1;
                c3 = 1;
                const obj4 = { value: tmp2(11071).unpublishUserApp(id.id), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (value) {
              const obj7 = { text: null, variant: "success" };
              const intl2 = tmp2(1128).intl;
              const obj8 = { app: closure_129_2 };
              obj7.text = intl2.formatToPlainString(tmp5(3820).b8LN7N, obj8);
              tmp5(5625).open("CONJURE_USER_APP_UNPUBLISHED", obj7);
              c3 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const intl = tmp2(1128).intl;
              closure_128_0 = intl.string(tmp5(3820)["rE/0SD"]);
              closure_129_1(closure_128_0);
              const _Error = Error;
              const error = new Error(closure_128_0);
              throw error;
            }
          } catch (tmp36) {
            c3 = tmp;
            throw tmp36;
          }
        }
      };
      [tmp2, c1] = noop.useState(null);
      const tmp = _slicedToArray(noop.useState(null), 2);
      const items = [ApplicationStore];
      const items1 = [,];
      ({ application_id: arr2[0], name: arr2[1] } = project);
      stateFromStores = project(stateFromStores[7]).useStateFromStores(
        items,
        () => {
          const application = ApplicationStore.getApplication(project.application_id);
          let name;
          if (application != null) {
            name = application.name;
          }
          if (name == null) {
            name = project.name;
          }
          return name;
        },
        items1,
      );
      let obj2 = { title: null, content: null, extraContent: null, actions: null };
      let intl = project(stateFromStores[9]).intl;
      obj2.title = intl.formatToPlainString(require("../../intl/ConjureUntranslated.messages.js").m8KWic, {
        app: stateFromStores,
      });
      let intl2 = project(stateFromStores[9]).intl;
      obj2.content = intl2.string(require("../../intl/ConjureUntranslated.messages.js").wve4kB);
      let tmp6Result;
      if (null != tmp2) {
        let obj3 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp2 };
        tmp6Result = closure_7(tmp3(tmp4[12]).Text, obj3);
      }
      obj2.extraContent = tmp6Result;
      let obj4 = { children: null };
      const obj5 = { variant: "destructive", text: null, onPress: null };
      const intl3 = tmp3(tmp4[9]).intl;
      obj5.text = intl3.string(require("../../intl/ConjureUntranslated.messages.js").GqcQyH);
      obj5.onPress = function submit() {
        const self = this;
        const apply = closure_3.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      const items2 = [closure_7(project(stateFromStores[13]).AlertActionButton, obj5)];
      let obj6 = { variant: "secondary", text: null };
      const intl4 = tmp3(tmp4[9]).intl;
      obj6.text = intl4.string(project(stateFromStores[9]).t["ETE/oC"]);
      items2[1] = closure_7(project(stateFromStores[13]).AlertActionButton, obj6);
      obj4.children = items2;
      obj2.actions = closure_9(closure_8, obj4);
      return closure_7(project(stateFromStores[13]).AlertModal, obj2);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureUnpublishUserAppAlert.tsx");

export default function openConjureUnpublishUserAppAlert(project) {
  useAlertStore.openAlert("ConjureUnpublishUserApp", React5(closure_10, { project }));
}
