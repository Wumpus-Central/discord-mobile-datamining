// === Module 17222: AgeVerificationScreen ===

// Module 17222 (AgeVerificationScreen)
import closure_3 from "noop" /* 19 */;
import { Pressable } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
let closure_8 = createCacheKey.createStyles({ helpLink: { textAlign: "center" } });
let result = require("set").fileFinishedImporting("modules/safety_flows/native/tasks/AgeVerificationScreen.tsx");

export default function AgeVerificationScreen() {
  const memo = React.useMemo(() => memo(stateFromStores[6]).v4(), []);
  let obj = memo(stateFromStores[7]);
  const onTaskComplete = obj.useOnTaskComplete();
  obj1 = memo(stateFromStores[8]);
  const items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj = {
    onClose() {
      return onTaskComplete({ type: memo(stateFromStores[10]).TaskInputType.Empty });
    }
  };
  const tmp2 = callback();
  const items1 = [onTaskComplete, stateFromStores];
  ({ loading, ageVerificationMethods } = onTaskComplete(stateFromStores[9])(obj));
  const effect = React.useEffect(() => {
    let prop;
    if (stateFromStores != null) {
      prop = stateFromStores.ageVerificationStatus;
    }
    if (prop !== memo(stateFromStores[11]).AgeVerificationStatusUkAndAusOnly.UNVERIFIED) {
      const obj = { type: null };
      obj[0] = memo(stateFromStores[10]).TaskInputType.Empty;
      onTaskComplete(obj);
    }
  }, items1);
  const items2 = [memo];
  const effect1 = React.useEffect(() => {
    const result = memo(stateFromStores[12]).trackAgeVerificationModalViewed(memo, memo(stateFromStores[12]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, memo(stateFromStores[12]).AgeVerificationModalEntryPoint.SAFETY_FLOWS);
  }, items2);
  obj = { ImageComponent: null, title: null, subtitle: null, footer: null, submitting: null, children: null };
  const tmp5 = onTaskComplete(stateFromStores[9])(obj);
  obj[0] = jsx(memo(stateFromStores[14]).ShieldSpotIllustration, {});
  const intl = memo(stateFromStores[15]).intl;
  obj[1] = intl.string(onTaskComplete(stateFromStores[16])["dSkE/A"]);
  const intl2 = memo(stateFromStores[15]).intl;
  obj1 = {
    handleOnHelpUrlHook() {
      const obj = onTaskComplete(stateFromStores[18]);
      obj.openUrl(onTaskComplete(stateFromStores[19]).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
    }
  };
  obj[2] = intl2.format(onTaskComplete(stateFromStores[17]).RpMIT0, obj1);
  const obj2 = { children: null };
  const obj3 = {
    accessibilityRole: "button",
    onPress() {
      onTaskComplete(stateFromStores[21]).logout("age_verification_screen");
    },
    children: null
  };
  const obj4 = { variant: "text-sm/medium", color: "text-link", style: tmp2.helpLink, children: null };
  const intl3 = memo(stateFromStores[15]).intl;
  obj4[3] = intl3.string(memo(stateFromStores[15]).t["2jxGer"]);
  obj3[2] = jsx(memo(stateFromStores[22]).Text, { variant: "text-sm/medium", color: "text-link", style: tmp2.helpLink, children: null });
  obj2[0] = <Pressable accessibilityRole="button" onPress={function onPress() {
    onTaskComplete(stateFromStores[21]).logout("age_verification_screen");
  }}>{null}</Pressable>;
  obj[3] = jsx(memo(stateFromStores[20]).ModalDisclaimer, { children: null });
  obj[4] = loading;
  obj[5] = jsx(memo(stateFromStores[23]).AgeVerificationMethodsContainer, { ageVerificationMethods, modalSessionId: memo });
  return jsx(onTaskComplete(stateFromStores[13]), { ImageComponent: null, title: null, subtitle: null, footer: null, submitting: null, children: null });
};