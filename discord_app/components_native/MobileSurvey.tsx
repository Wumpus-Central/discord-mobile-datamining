// discord_app/components_native/MobileSurvey.tsx
import Fragment from "../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../Constants.tsx";
import native from "../design/void/native.tsx";
import LinkingDefault from "../lib/native/Linking.tsx";
import AssetRegistryDefault from "../../_runtime/08756_AssetRegistry.js";
import SurveyActionCreators from "../actions/SurveyActionCreators.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../_runtime/00019_react.js";
import SurveyStore from "../stores/SurveyStore.tsx";
import createStyles from "../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c0, c1;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ confirmIcon: { marginLeft: 4 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let _prompt;
      let confirmIcon;
      let cta;
      let currentSurvey;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp9;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(19);
      const tmp4 = closure_8();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SurveyStore];
        const fn = function y() {
          return currentSurvey.getCurrentSurvey();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const fn2 = function v() {
          function setSurveySeen() {
            return closure_0(...arguments);
          }
          if (null != stateFromStores) {
            let obj = stateFromStores(dependencyMap[9]);
            let obj2 = { type: "survey", promotion_id: tmp.id };
            obj.track(constants.OPEN_MODAL, obj2);
            let closure_0 = _asyncToGenerator(async () => {
              let obj2;
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
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
                  c0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else if (null != c1) {
                      c1 = 1;
                      c0 = 1;
                      const obj5 = { value: obj2.surveySeen(tmp4.key), done: false };
                      obj2 = v3(dependencyMap[10]);
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c0 = 3;
                  return { value: "IconComponent", done: null };
                } catch (tmp8) {
                  c0 = 3;
                  throw tmp8;
                }
              }
            });
            setSurveySeen();
          }
        };
        const items1 = [stateFromStores];
        cResult[2] = stateFromStores;
        cResult[3] = fn2;
        cResult[4] = items1;
        tmp10 = items1;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const effect = react.useEffect(tmp9, tmp10);
      if (null != stateFromStores) {
        let tmp12;
        const _Symbol = Symbol;
        ({ prompt: _prompt, cta } = stateFromStores);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.f3Pet9);
          cResult[5] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === stateFromStores.key) {
          let tmp14;
          if (cResult[7] === stateFromStores.url) {
            tmp14 = cResult[8];
          }
          if (cResult[9] !== stateFromStores.key) {
            class C {
              constructor() {
                const obj = SurveyActionCreators;
                return obj.surveyHide(stateFromStores.key, true);
              }
            }
            cResult[9] = stateFromStores.key;
            cResult[10] = C;
          } else {
            class C {
              constructor() {
                const obj = SurveyActionCreators;
                return obj.surveyHide(stateFromStores.key, true);
              }
            }
          }
          if (cResult[11] !== tmp4.confirmIcon) {
            class L {
              constructor() {
                const Icon = native.Icon;
                return (
                  <Icon
                    style={confirmIcon.confirmIcon}
                    color={nativeDefault.unsafe_rawColors.WHITE}
                    size={native.Icon.Sizes.SMALL}
                    source={AssetRegistryDefault}
                  />
                );
              }
            }
            cResult[11] = tmp4.confirmIcon;
            cResult[12] = L;
          } else {
            class L {
              constructor() {
                const Icon = native.Icon;
                return (
                  <Icon
                    style={confirmIcon.confirmIcon}
                    color={nativeDefault.unsafe_rawColors.WHITE}
                    size={native.Icon.Sizes.SMALL}
                    source={AssetRegistryDefault}
                  />
                );
              }
            }
          }
          if (cResult[13] === stateFromStores.cta) {
            class L {
              constructor() {
                const Icon = native.Icon;
                return (
                  <Icon
                    style={confirmIcon.confirmIcon}
                    color={nativeDefault.unsafe_rawColors.WHITE}
                    size={native.Icon.Sizes.SMALL}
                    source={AssetRegistryDefault}
                  />
                );
              }
            }
          }
          cResult[13] = stateFromStores.cta;
          cResult[14] = stateFromStores.prompt;
          cResult[15] = tmp14;
          cResult[16] = C;
          cResult[17] = L;
          cResult[18] = jsx(stateFromStores(5783), {
            body: _prompt,
            confirmText: cta,
            cancelText: tmp12,
            onConfirm: tmp14,
            onCancel: C,
            renderConfirmRightIcon: L,
          });
          const tmp20 = jsx(stateFromStores(5783), {
            body: _prompt,
            confirmText: cta,
            cancelText: tmp12,
            onConfirm: tmp14,
            onCancel: C,
            renderConfirmRightIcon: L,
          });
        }
        const fn3 = function k() {
          const obj = LinkingDefault;
          obj.openURL(stateFromStores.url);
          const obj2 = SurveyActionCreators;
          obj2.surveyHide(stateFromStores.key, false);
        };
        cResult[6] = stateFromStores.key;
        cResult[7] = stateFromStores.url;
        cResult[8] = fn3;
        tmp14 = fn3;
      } else {
        class L {
          constructor() {
            const Icon = native.Icon;
            return (
              <Icon
                style={confirmIcon.confirmIcon}
                color={nativeDefault.unsafe_rawColors.WHITE}
                size={native.Icon.Sizes.SMALL}
                source={AssetRegistryDefault}
              />
            );
          }
        }
      }
    }
  : () => {
      let confirmIcon;
      let currentSurvey;
      _require = closure_8();
      const tmp = _require;
      let obj = require("get initialized");
      const items = [SurveyStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentSurvey.getCurrentSurvey());
      const items1 = [stateFromStores];
      const effect = react.useEffect(() => {
        function setSurveySeen() {
          return obj(...arguments);
        }
        if (null != stateFromStores) {
          let obj = function _setSurveySeen2() {
            obj = _asyncToGenerator(async () => {
              let obj2;
              if (c0 === 2) {
                c0 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
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
                  c0 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c0 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c0 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else if (null != c1) {
                      c1 = 1;
                      c0 = 1;
                      const obj5 = { value: obj2.surveySeen(tmp4.key), done: false };
                      obj2 = closure_2_0(closure_2_2[10]);
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    obj = { value, done: true };
                    return obj;
                  }
                  c0 = 3;
                  return { value: "IconComponent", done: null };
                } catch (tmp8) {
                  c0 = 3;
                  throw tmp8;
                }
              }
            });
            return obj(...arguments);
          };
          obj = stateFromStores(dependencyMap[9]);
          let obj2 = { type: "survey", promotion_id: tmp.id };
          obj.track(constants.OPEN_MODAL, obj2);
          setSurveySeen();
        }
      }, items1);
      let tmp5 = null;
      if (null != stateFromStores) {
        ({ prompt: obj2.body, cta: obj2.confirmText } = stateFromStores);
        const tmp8 = stateFromStores(5783);
        const intl = tmp(1126).intl;
        tmp5 = (
          <tmp8
            body={null}
            confirmText={null}
            cancelText={intl.string(tmp(1126).t.f3Pet9)}
            onConfirm={function onConfirm() {
              const obj = LinkingDefault;
              obj.openURL(stateFromStores.url);
              const obj2 = SurveyActionCreators;
              obj2.surveyHide(stateFromStores.key, false);
            }}
            onCancel={function onCancel() {
              const obj = SurveyActionCreators;
              return obj.surveyHide(stateFromStores.key, true);
            }}
            renderConfirmRightIcon={function renderConfirmRightIcon() {
              const Icon = native.Icon;
              return (
                <Icon
                  style={confirmIcon.confirmIcon}
                  color={nativeDefault.unsafe_rawColors.WHITE}
                  size={native.Icon.Sizes.SMALL}
                  source={AssetRegistryDefault}
                />
              );
            }}
          />
        );
      }
      return tmp5;
    };
const result = size.fileFinishedImporting("components_native/MobileSurvey.tsx");

export default tmp2;
