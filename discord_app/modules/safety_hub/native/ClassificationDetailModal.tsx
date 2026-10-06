// discord_app/modules/safety_hub/native/ClassificationDetailModal.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

let obj2;
function headerTitle() {
  return null;
}
const jsx = Fragment.jsx;
const constants = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
let obj = { headerStyle: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let classificationId;
      let safetyHubInitialized;
      let shouldRedirectToAccountStanding;
      let source;
      let tmp7;
      let tmp8;
      let tmpResult4;
      let obj = safetyHubInitialized(576);
      const cResult = obj.c(11);
      ({ classificationId, source, shouldRedirectToAccountStanding } = arg0);
      const tmp5 = closure_7();
      const tmpResult = safetyHubInitialized(11535);
      safetyHubInitialized = tmpResult.useSafetyHubInitialized();
      if (cResult[0] !== safetyHubInitialized) {
        const fn = function l() {
          if (!safetyHubInitialized) {
            const obj = SafetyHubActionCreatorsAll;
            const safetyHubData = obj.getSafetyHubData();
          }
        };
        const items = [safetyHubInitialized];
        cResult[0] = safetyHubInitialized;
        cResult[1] = fn;
        cResult[2] = items;
        tmp8 = items;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = react.useEffect(tmp7, tmp8);
      const tmpResult3 = safetyHubInitialized(1491);
      const isFocused = tmpResult3.useIsFocused();
      if (cResult[3] === classificationId) {
        if (cResult[4] === (undefined !== shouldRedirectToAccountStanding && shouldRedirectToAccountStanding)) {
          if (cResult[5] === source) {
            let tmp11;
            let tmp13;
            let tmp15;
            if (cResult[6] === tmp5) {
              tmp11 = cResult[7];
            }
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(safetyHubInitialized(1126).t["13/7kX"]);
              cResult[8] = stringResult;
              tmp13 = stringResult;
            } else {
              tmp13 = cResult[8];
            }
            if (cResult[9] !== tmp11) {
              const tmp18 = jsx(safetyHubInitialized(6503).Navigator, {
                screens: tmp11,
                initialRouteName: constants.CLASSIFICATION_DETAIL,
                headerBackTitle: tmp13,
              });
              cResult[9] = tmp11;
              cResult[10] = tmp18;
              tmp15 = tmp18;
            } else {
              tmp15 = cResult[10];
            }
            return tmp15;
          }
        }
      }
      let closure_1 = tmp4;
      const obj3 = {};
      const CLASSIFICATION_DETAIL = constants.CLASSIFICATION_DETAIL;
      const obj4 = {
        headerStyle: tmp5.headerStyle,
        headerTitle,
        headerLeft: tmpResult4.getHeaderCloseButton(function closeModal() {
          const arr = flag(headerStyle[4]);
          return arr.pop();
        }),
        render() {
          let obj = {
            classificationId,
            source,
            onClose() {
              const arr = closure_1(closure_2_3[4]);
              arr.pop();
              if (closure_1_1) {
                const obj = classificationId(closure_2_3[7]);
                obj.openAccountStanding();
              }
            },
            onError() {
              const arr = closure_1_1(closure_1_3[4]);
              arr.pop();
              const obj = classificationId(closure_1_3[7]);
              obj.openAccountStanding();
            },
          };
          return closure_2_5(flag(headerStyle[6]), obj);
        },
      };
      obj3[CLASSIFICATION_DETAIL] = obj4;
      cResult[3] = classificationId;
      cResult[4] = undefined !== shouldRedirectToAccountStanding && shouldRedirectToAccountStanding;
      cResult[5] = source;
      cResult[6] = tmp5;
      cResult[7] = obj3;
      tmp11 = obj3;
      tmpResult4 = safetyHubInitialized(6017);
    }
  : (classificationId) => {
      let headerStyle;
      classificationId = classificationId.classificationId;
      const source = classificationId.source;
      let flag = classificationId.shouldRedirectToAccountStanding;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_7();
      dependencyMap = tmp;
      let obj = classificationId(11535);
      const safetyHubInitialized = obj.useSafetyHubInitialized();
      const items = [safetyHubInitialized];
      const effect = safetyHubInitialized.useEffect(() => {
        if (!safetyHubInitialized) {
          const obj = SafetyHubActionCreatorsAll;
          const safetyHubData = obj.getSafetyHubData();
        }
      }, items);
      let obj2 = classificationId(1491);
      const isFocused = obj2.useIsFocused();
      const items1 = [classificationId, flag, tmp, source];
      const memo = safetyHubInitialized.useMemo(() => {
        let obj3;
        let closure_0 = classificationId;
        let closure_1 = flag;
        let closure_2 = source;
        let obj = {};
        const CLASSIFICATION_DETAIL = constants.CLASSIFICATION_DETAIL;
        const obj2 = {
          headerStyle: headerStyle.headerStyle,
          headerTitle,
          headerLeft: obj3.getHeaderCloseButton(function closeModal() {
            const arr = flag(headerStyle[4]);
            return arr.pop();
          }),
          render() {
            let obj = {
              classificationId,
              source,
              onClose() {
                const arr = closure_1(closure_2_3[4]);
                arr.pop();
                if (closure_1_1) {
                  const obj = classificationId(closure_2_3[7]);
                  obj.openAccountStanding();
                }
              },
              onError() {
                const arr = closure_1_1(closure_1_3[4]);
                arr.pop();
                const obj = classificationId(closure_1_3[7]);
                obj.openAccountStanding();
              },
            };
            return closure_2_5(flag(headerStyle[6]), obj);
          },
        };
        obj[CLASSIFICATION_DETAIL] = obj2;
        obj3 = NavigatorHeader;
        return obj;
      }, items1);
      const Navigator = classificationId(6503).Navigator;
      const intl = classificationId(1126).intl;
      return (
        <Navigator
          screens={memo}
          initialRouteName={constants.CLASSIFICATION_DETAIL}
          headerBackTitle={intl.string(classificationId(1126).t["13/7kX"])}
        />
      );
    };
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default tmp2;
