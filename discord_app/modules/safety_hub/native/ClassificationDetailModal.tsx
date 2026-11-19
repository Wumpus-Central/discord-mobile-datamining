// discord_app/modules/safety_hub/native/ClassificationDetailModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const constants = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
const createStyles = fn(4792);
let obj2 = { headerStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/ClassificationDetailModal.tsx");

export default function ClassificationDetailModal(classificationId) {
  classificationId = classificationId.classificationId;
  const source = classificationId.source;
  let flag = classificationId.shouldRedirectToAccountStanding;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  dependencyMap = tmp;
  const safetyHubInitialized = classificationId(12361).useSafetyHubInitialized();
  items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    }
  }, items);
  let obj = classificationId(12361);
  const isFocused = classificationId(1503).useIsFocused();
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
        return closure_1(6308).pop();
      }),
      render() {
        return jsx(source(12325), {
          classificationId,
          source,
          onClose() {
            closure_1(6308).pop();
            if (closure_1_1) {
              closure_0(12360).openAccountStanding();
              const obj = closure_0(12360);
            }
            const arr = closure_1(6308);
          },
          onError() {
            closure_1_1(6308).pop();
            const arr = closure_1_1(6308);
            classificationId(12360).openAccountStanding();
          },
        });
      },
    };
    obj[constants.CLASSIFICATION_DETAIL] = obj2;
    return obj;
  }, items1);
  const obj3 = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null };
  const intl = classificationId(1113).intl;
  obj3.headerBackTitle = intl.string(classificationId(1113).t["13/7kX"]);
  return jsx(classificationId(6973).Navigator, {
    screens: memo,
    initialRouteName: constants.CLASSIFICATION_DETAIL,
    headerBackTitle: null,
  });
}
