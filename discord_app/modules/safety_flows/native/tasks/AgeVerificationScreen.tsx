// === Module 18151: AgeVerificationScreen ===

// Module 18151 (AgeVerificationScreen)
import Server from "Server" /* 1895 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8562 */;
import types from "types" /* 18138 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const Pressable = fn(17).Pressable;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_8 = createStyles.createStyles({ helpLink: { textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/native/tasks/AgeVerificationScreen.tsx");

export default function AgeVerificationScreen() {
  const memo = noop.useMemo(() => memo(stateFromStores[6]).v4(), []);
  const tmp2 = closure_8();
  const onTaskComplete = memo(stateFromStores[7]).useOnTaskComplete();
  let obj = memo(stateFromStores[7]);
  const items = [UserStore];
  stateFromStores = memo(stateFromStores[8]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = memo(stateFromStores[8]);
  const obj3 = {
    onClose() {
      return onTaskComplete({ type: types.TaskInputType.Empty });
    }
  };
  const items1 = [onTaskComplete, stateFromStores];
  ({ loading, ageVerificationMethods } = onTaskComplete(stateFromStores[9])({
    onClose() {
      return onTaskComplete({ type: types.TaskInputType.Empty });
    }
  }));
  const effect = noop.useEffect(() => {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    if (prop !== Server.AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { type: types.TaskInputType.Empty };
      onTaskComplete(obj);
    }
  }, items1);
  const items2 = [memo];
  const effect1 = noop.useEffect(() => {
    const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalViewed(memo, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.SAFETY_FLOWS);
  }, items2);
  const obj4 = { ImageComponent: null, title: null, subtitle: null, footer: null, submitting: null, children: null };
  const tmp5 = onTaskComplete(stateFromStores[9])({
    onClose() {
      return onTaskComplete({ type: types.TaskInputType.Empty });
    }
  });
  obj4.ImageComponent = jsx(memo(stateFromStores[14]).ShieldSpotIllustration, {});
  const intl = memo(stateFromStores[15]).intl;
  obj4.title = intl.string(onTaskComplete(stateFromStores[16])["dSkE/A"]);
  const intl2 = memo(stateFromStores[15]).intl;
  obj4.subtitle = intl2.format(onTaskComplete(stateFromStores[17]).RpMIT0, {
    handleOnHelpUrlHook() {
      const obj = onTaskComplete(stateFromStores[18]);
      obj.openUrl(onTaskComplete(stateFromStores[19]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  });
  const obj6 = { children: null };
  const obj7 = {
    accessibilityRole: "button",
    onPress() {
      onTaskComplete(stateFromStores[21]).logout("age_verification_screen");
    },
    children: null
  };
  const obj8 = { variant: "text-sm/medium", color: "text-link", style: tmp2.helpLink, children: null };
  const intl3 = memo(stateFromStores[15]).intl;
  obj8.children = intl3.string(memo(stateFromStores[15]).t["2jxGer"]);
  obj7.children = jsx(memo(stateFromStores[22]).Text, { variant: "text-sm/medium", color: "text-link", style: tmp2.helpLink, children: null });
  obj6.children = <Pressable accessibilityRole="button" onPress={function onPress() {
    onTaskComplete(stateFromStores[21]).logout("age_verification_screen");
  }}>{null}</Pressable>;
  obj4.footer = jsx(memo(stateFromStores[20]).ModalDisclaimer, { children: null });
  obj4.submitting = loading;
  obj4.children = jsx(memo(stateFromStores[23]).AgeVerificationMethodsContainer, { ageVerificationMethods, modalSessionId: memo });
  return jsx(onTaskComplete(stateFromStores[13]), { ImageComponent: null, title: null, subtitle: null, footer: null, submitting: null, children: null });
};