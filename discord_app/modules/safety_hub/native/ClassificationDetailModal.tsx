// === Module 11878: ClassificationDetailModal ===

// Module 11878 (ClassificationDetailModal)
import ThemesDefault from "Themes" /* 576 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let closure_6 = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
createCacheKey = { headerStyle: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default function ClassificationDetailModal(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  let flag = classificationId.shouldRedirectToAccountStanding;
  if (flag === undefined) {
    flag = false;
  }
  dependencyMap = undefined;
  let safetyHubInitialized;
  const tmp = callback();
  dependencyMap = tmp;
  let obj = classificationId(11910);
  safetyHubInitialized = obj.useSafetyHubInitialized();
  const items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = flag(headerStyle[9]).getSafetyHubData();
      const obj = flag(headerStyle[9]);
    }
  }, items);
  const isFocused = classificationId(1484).useIsFocused();
  const items1 = [classificationId, flag, tmp, source];
  const memo = safetyHubInitialized.useMemo(() => {
    closure_1 = closure_2;
    closure_2 = closure_1;
    let obj = {};
    obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: classificationId(headerStyle[5]).getHeaderCloseButton(function closeModal() {
        return callback(table[4]).pop();
      }),
      render() {
        return closure_1_5(callback(closure_1_3[6]), {
          classificationId: closure_0,
          source: closure_2,
          onClose() {
            let arr = closure_1_1(closure_1_3[4]);
            arr = arr.pop();
            if (closure_1) {
              closure_1_0(closure_1_3[7]).openAccountStanding();
              const obj = closure_1_0(closure_1_3[7]);
            }
          },
          onError() {
            let arr = callback2(4763);
            arr = arr.pop();
            callback(11909).openAccountStanding();
          }
        });
      }
    };
    obj[closure_1_6.CLASSIFICATION_DETAIL] = obj;
    return obj;
  }, items1);
  obj = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null };
  const intl = classificationId(1114).intl;
  obj[2] = intl.string(classificationId(1114).t["13/7kX"]);
  return jsx(classificationId(7000).Navigator, { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null });
};