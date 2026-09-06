// discord_app/modules/safety_hub/native/ClassificationDetailModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import SafetyHubActionCreatorsAll from "../SafetyHubActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const constants = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
fn(4560);
let createStyles = { headerStyle: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.headerStyle = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
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
  let obj = classificationId(11910);
  const safetyHubInitialized = obj.useSafetyHubInitialized();
  const items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    }
  }, items);
  const isFocused = classificationId(1484).useIsFocused();
  const items1 = [classificationId, flag, tmp, source];
  const memo = safetyHubInitialized.useMemo(() => {
    closure_1 = flag;
    let obj = {};
    obj = {
      headerStyle: headerStyle.headerStyle,
      headerTitle() {
        return null;
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(function closeModal() {
        return closure_1(4763).pop();
      }),
      render() {
        return jsx(source(11879), {
          classificationId,
          source,
          onClose() {
            let arr = closure_1(4763);
            arr = arr.pop();
            if (closure_1_1) {
              closure_0(11909).openAccountStanding();
              const obj = closure_0(11909);
            }
          },
          onError() {
            let arr = closure_1_1(4763);
            arr = arr.pop();
            classificationId(11909).openAccountStanding();
          },
        });
      },
    };
    obj[constants.CLASSIFICATION_DETAIL] = obj;
    return obj;
  }, items1);
  obj = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null };
  const intl = classificationId(1114).intl;
  obj.headerBackTitle = intl.string(classificationId(1114).t["13/7kX"]);
  return jsx(classificationId(7000).Navigator, {
    screens: memo,
    initialRouteName: constants.CLASSIFICATION_DETAIL,
    headerBackTitle: null,
  });
}
