// discord_app/modules/safety_hub/native/ClassificationDetailModal.tsx
import noop from "noop";
import { UserSettingsSections } from "ME";
import { AccountSettingsTabs } from "AccountSettingsTabs";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_8 = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
createCacheKey = { headerStyle: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("AccountSettingsTabs").fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default function ClassificationDetailModal(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  let flag = classificationId.shouldRedirectToAccountStanding;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  let safetyHubInitialized;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = classificationId(11095);
  safetyHubInitialized = obj.useSafetyHubInitialized();
  const items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = flag(_undefined[11]).getSafetyHubData();
      const obj = flag(_undefined[11]);
    }
  }, items);
  const isFocused = classificationId(1501).useIsFocused();
  const items1 = [classificationId, flag, tmp, source];
  const memo = safetyHubInitialized.useMemo(() => {
    let closure_1 = closure_2;
    closure_2 = closure_1;
    let obj = {};
    obj = {
      headerStyle: _undefined.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: null,
      render: null
    };
    obj[2] = classificationId(_undefined[7]).getHeaderCloseButton(function closeModal() {
      return callback(table[6]).pop();
    });
    obj[3] = function render() {
      return outer1_7(callback(outer1_3[8]), {
        classificationId: closure_0,
        source: closure_2,
        onClose() {
          let arr = outer1_1(outer1_3[6]);
          arr = arr.pop();
          if (closure_1) {
            let obj = outer1_0(outer1_3[9]);
            obj = { screen: null, params: null };
            obj[0] = outer1_5.ACCOUNT;
            obj = { initialTab: null };
            obj[0] = outer1_6.STANDING;
            obj[1] = obj;
            obj.openUserSettings(obj);
          }
        },
        onError() {
          let arr = callback2(5260);
          arr = arr.pop();
          let obj = callback(7360);
          obj = { screen: constants.ACCOUNT, params: obj };
          obj = { initialTab: constants2.STANDING };
          obj.openUserSettings(obj);
        }
      });
    };
    obj[outer1_8.CLASSIFICATION_DETAIL] = obj;
    return obj;
  }, items1);
  obj = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null };
  const intl = classificationId(1236).intl;
  obj[2] = intl.string(classificationId(1236).t["13/7kX"]);
  return jsx(classificationId(6312).Navigator, { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null });
};