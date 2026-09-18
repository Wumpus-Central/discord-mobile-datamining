// === Module 12122: ClassificationDetailModal ===

// Module 12122 (ClassificationDetailModal)
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5794 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 12125 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const constants = { CLASSIFICATION_DETAIL: "CLASSIFICATION_DETAIL" };
const createStyles = fn(4722);
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
  const safetyHubInitialized = classificationId(12154).useSafetyHubInitialized();
  const items = [safetyHubInitialized];
  const effect = safetyHubInitialized.useEffect(() => {
    if (!safetyHubInitialized) {
      const safetyHubData = SafetyHubActionCreatorsAll.getSafetyHubData();
    }
  }, items);
  let obj = classificationId(12154);
  const isFocused = classificationId(1485).useIsFocused();
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
        return closure_1(4925).pop();
      }),
      render() {
        return jsx(source(12123), {
          classificationId,
          source,
          onClose() {
            closure_1(4925).pop();
            if (closure_1_1) {
              closure_0(12153).openAccountStanding();
              const obj = closure_0(12153);
            }
            const arr = closure_1(4925);
          },
          onError() {
            closure_1_1(4925).pop();
            const arr = closure_1_1(4925);
            classificationId(12153).openAccountStanding();
          }
        });
      }
    };
    obj[constants.CLASSIFICATION_DETAIL] = obj2;
    return obj;
  }, items1);
  const obj3 = { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null };
  const intl = classificationId(1115).intl;
  obj3.headerBackTitle = intl.string(classificationId(1115).t["13/7kX"]);
  return jsx(classificationId(7196).Navigator, { screens: memo, initialRouteName: constants.CLASSIFICATION_DETAIL, headerBackTitle: null });
};