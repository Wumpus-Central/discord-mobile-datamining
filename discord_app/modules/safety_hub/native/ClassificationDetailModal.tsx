// discord_app/modules/safety_hub/native/ClassificationDetailModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { UserSettingsSections } from "../../../Constants.tsx";
import { AccountSettingsTabs } from "../../user_settings/account/native/SettingsAccountConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let closure_8 = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
createCacheKey = { headerStyle: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
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
  let obj = classificationId(11483);
  safetyHubInitialized = obj.useSafetyHubInitialized();
  const items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = flag(headerStyle[11]).getSafetyHubData();
      const obj = flag(headerStyle[11]);
    }
  }, items);
  const isFocused = classificationId(1500).useIsFocused();
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
      headerLeft: classificationId(headerStyle[7]).getHeaderCloseButton(function closeModal() {
        return callback(table[6]).pop();
      }),
      render() {
        return closure_1_7(callback(closure_1_3[8]), {
          classificationId: closure_0,
          source: closure_2,
          onClose() {
            let arr = closure_1_1(closure_1_3[6]);
            arr = arr.pop();
            if (closure_1) {
              let obj = closure_1_0(closure_1_3[9]);
              obj = { screen: null, params: null };
              obj[0] = closure_1_5.ACCOUNT;
              obj = { initialTab: null };
              obj[0] = closure_1_6.STANDING;
              obj[1] = obj;
              obj.openUserSettings(obj);
            }
          },
          onError() {
            let arr = callback2(4723);
            arr = arr.pop();
            let obj = callback(6245);
            obj = { screen: constants.ACCOUNT, params: obj };
            obj = { initialTab: constants2.STANDING };
            obj.openUserSettings(obj);
          },
        });
      },
    };
    obj[closure_1_8.CLASSIFICATION_DETAIL] = obj;
    return obj;
  }, items1);
  obj = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null };
  const intl = classificationId(1236).intl;
  obj[2] = intl.string(classificationId(1236).t["13/7kX"]);
  return jsx(classificationId(6008).Navigator, {
    screens: memo,
    initialRouteName: constants.CLASSIFICATION_DETAIL,
    headerBackTitle: null,
  });
}
