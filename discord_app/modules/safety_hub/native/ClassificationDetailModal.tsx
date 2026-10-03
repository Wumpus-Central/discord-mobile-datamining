// discord_app/modules/safety_hub/native/ClassificationDetailModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const constants = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
const createStyles = fn(4890);
let obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = safetyHubInitialized(576).c(11);
      ({ classificationId, source, shouldRedirectToAccountStanding } = arg0);
      const tmp5 = closure_7();
      let obj = safetyHubInitialized(576);
      safetyHubInitialized = safetyHubInitialized(11522).useSafetyHubInitialized();
      if (cResult[0] !== safetyHubInitialized) {
        const fn = function l() {
          if (!safetyHubInitialized) {
            const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
          }
        };
        const items = [safetyHubInitialized];
        cResult[0] = safetyHubInitialized;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp8 = items;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = noop.useEffect(tmp7, tmp8);
      const tmpResult = safetyHubInitialized(11522);
      const isFocused = safetyHubInitialized(1491).useIsFocused();
      if (cResult[3] === classificationId) {
        if (cResult[4] === tmp4) {
          if (cResult[5] === source) {
            if (cResult[6] === tmp5) {
              let tmp11 = cResult[7];
            }
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t["13/7kX"]);
              cResult[8] = stringResult;
              let tmp13 = stringResult;
            } else {
              tmp13 = cResult[8];
            }
            if (cResult[9] !== tmp11) {
              const obj2 = {
                screens: tmp11,
                initialRouteName: constants.CLASSIFICATION_DETAIL,
                headerBackTitle: tmp13,
              };
              const tmp18 = jsx(tmp(6496).Navigator, {
                screens: tmp11,
                initialRouteName: constants.CLASSIFICATION_DETAIL,
                headerBackTitle: tmp13,
              });
              cResult[9] = tmp11;
              cResult[10] = tmp18;
              let tmp15 = tmp18;
            } else {
              tmp15 = cResult[10];
            }
            return tmp15;
          }
        }
      }
      closure_129_0 = classificationId;
      closure_129_1 = tmp4;
      closure_129_2 = source;
      const obj3 = {};
      const obj4 = {
        headerStyle: tmp5.headerStyle,
        headerTitle() {
          return null;
        },
        headerLeft: null,
        render: null,
      };
      const tmpResult3 = safetyHubInitialized(1491);
      obj4.headerLeft = safetyHubInitialized(6010).getHeaderCloseButton(function closeModal() {
        return closure_1(5093).pop();
      });
      obj4.render = function render() {
        return jsx(source(11491), {
          classificationId,
          source,
          onClose() {
            closure_1(5093).pop();
            if (closure_1_1) {
              closure_0(11521).openAccountStanding();
              const obj = closure_0(11521);
            }
            const arr = closure_1(5093);
          },
          onError() {
            closure_1_1(5093).pop();
            const arr = closure_1_1(5093);
            classificationId(11521).openAccountStanding();
          },
        });
      };
      obj3[constants.CLASSIFICATION_DETAIL] = obj4;
      cResult[3] = classificationId;
      cResult[4] = undefined !== shouldRedirectToAccountStanding && shouldRedirectToAccountStanding;
      cResult[5] = source;
      cResult[6] = tmp5;
      cResult[7] = obj3;
      tmp11 = obj3;
      const tmpResult4 = safetyHubInitialized(6010);
    }
  : (classificationId) => {
      classificationId = classificationId.classificationId;
      const source = classificationId.source;
      let flag = classificationId.shouldRedirectToAccountStanding;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_7();
      dependencyMap = tmp;
      const safetyHubInitialized = classificationId(11522).useSafetyHubInitialized();
      const items = [safetyHubInitialized];
      const effect = safetyHubInitialized.useEffect(() => {
        if (!safetyHubInitialized) {
          const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
        }
      }, items);
      let obj = classificationId(11522);
      const isFocused = classificationId(1491).useIsFocused();
      const items1 = [classificationId, flag, tmp, source];
      const memo = safetyHubInitialized.useMemo(() => {
        closure_1 = flag;
        let obj = {};
        const obj2 = {
          headerStyle: headerStyle.headerStyle,
          headerTitle() {
            return null;
          },
          headerLeft: NavigatorHeader.getHeaderCloseButton(function closeModal() {
            return closure_1(5093).pop();
          }),
          render() {
            return jsx(source(11491), {
              classificationId,
              source,
              onClose() {
                closure_1(5093).pop();
                if (closure_1_1) {
                  closure_0(11521).openAccountStanding();
                  const obj = closure_0(11521);
                }
                const arr = closure_1(5093);
              },
              onError() {
                closure_1_1(5093).pop();
                const arr = closure_1_1(5093);
                classificationId(11521).openAccountStanding();
              },
            });
          },
        };
        obj[constants.CLASSIFICATION_DETAIL] = obj2;
        return obj;
      }, items1);
      const obj3 = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null };
      const intl = classificationId(1126).intl;
      obj3.headerBackTitle = intl.string(classificationId(1126).t["13/7kX"]);
      return jsx(classificationId(6496).Navigator, {
        screens: memo,
        initialRouteName: constants.CLASSIFICATION_DETAIL,
        headerBackTitle: null,
      });
    };
