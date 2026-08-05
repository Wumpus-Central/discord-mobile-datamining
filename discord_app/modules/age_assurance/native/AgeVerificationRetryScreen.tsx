// discord_app/modules/age_assurance/native/AgeVerificationRetryScreen.tsx
import closure_3 from "jsxProd";
import set from "set";
import get_ActivityIndicator from "TableRowInner";
import { HelpdeskArticles } from "ME";
import { SafetyHubLinks } from "SafetyHubView";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
({ ActivityIndicator: c5, ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
createCacheKey = { loadingIndicator: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }, container: null, headerContainer: null, centerText: null, helpLink: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, flex: 1 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingVertical: require("Themes").space.PX_16, alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[3] = { textAlign: "center" };
let obj1 = { paddingVertical: require("Themes").space.PX_16, alignItems: "center", gap: require("Themes").space.PX_8 };
createCacheKey[4] = { marginTop: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginTop: require("Themes").space.PX_8 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default function GetStartedScreen(modalSessionId) {
  let initiateAgeVerification;
  let loading;
  modalSessionId = modalSessionId.modalSessionId;
  initiateAgeVerification = undefined;
  let isManualAgeVerificationHidden;
  let stringResult2;
  const tmp = createCacheKey();
  let obj = modalSessionId(isManualAgeVerificationHidden[8]);
  obj = { onComplete: modalSessionId.onClose, entryPoint: modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalEntryPoint.RETRY_MODAL };
  initiateAgeVerification = obj.useInitiateAgeVerification(obj);
  ({ loading, initiateAgeVerification } = initiateAgeVerification);
  let obj2 = modalSessionId(isManualAgeVerificationHidden[10]);
  isManualAgeVerificationHidden = obj2.useIsManualAgeVerificationHidden("age_verification_retry_modal");
  let intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  let intl2 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  const stringResult = intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JSdbBe);
  let intl3 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  stringResult2 = intl3.string(modalSessionId(isManualAgeVerificationHidden[11]).t.mFvt9M);
  let items = [initiateAgeVerification, modalSessionId, isManualAgeVerificationHidden, stringResult2];
  const memo = React.useMemo(() => {
    let obj = { title: stringResult2, description: null, onPress: null };
    const intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
    obj[1] = intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.ecdUKD);
    let closure_0 = stringResult2(function*() {
      if (c0 === 2) {
        c0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v02) {
            if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const result = v0(outer2_2[9]).trackAgeVerificationModalClicked(c0, v0(outer2_2[9]).AgeVerificationModalVersion.RETRY, v0(outer2_2[9]).AgeVerificationModalCta.GET_STARTED);
              v02 = 1;
              c0 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = v02();
              return obj1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c0 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp5) {
          c0 = tmp;
          throw tmp5;
        }
      }
    });
    obj[2] = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    const items = [obj];
    if (!isManualAgeVerificationHidden) {
      obj = { title: null, description: null, onPress: null };
      const intl2 = tmp(tmp2[11]).intl;
      obj[0] = intl2.string(tmp(tmp2[11]).t["LZO+Hd"]);
      const intl3 = tmp(tmp2[11]).intl;
      obj[1] = intl3.string(tmp(tmp2[11]).t["ty+iWP"]);
      obj[2] = function onPress() {
        outer1_1(outer1_2[12]).openUrl(outer1_9.APPEALS_LINK);
        const obj = outer1_1(outer1_2[12]);
        const result = callback(outer1_2[9]).trackAgeVerificationModalClicked(callback, callback(outer1_2[9]).AgeVerificationModalVersion.RETRY, callback(outer1_2[9]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
      };
      items.push(obj);
    }
    return items;
  }, items);
  if (loading) {
    obj = { style: null, size: "small", color: null };
    obj[0] = tmp.loadingIndicator;
    let WHITE;
    if (tmp2Result.isAndroid()) {
      WHITE = initiateAgeVerification(tmp3[7]).unsafe_rawColors.WHITE;
    }
    obj[2] = WHITE;
    loading = callback(closure_5, obj);
    const tmp11 = callback;
    const tmp12 = closure_5;
    tmp2Result = tmp2(tmp3[13]);
  }
  let obj1 = { children: null };
  const items1 = [loading, ];
  obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.headerContainer, children: null };
  const items2 = [callback(modalSessionId(isManualAgeVerificationHidden[14]).ShieldSpotIllustration, {}), callback(modalSessionId(isManualAgeVerificationHidden[15]).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult }), ];
  const obj4 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult };
  const stringResult1 = intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue);
  const tmp10 = closure_12;
  items2[2] = callback(modalSessionId(isManualAgeVerificationHidden[15]).Text, { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue) });
  obj3[1] = items2;
  const items3 = [closure_11(closure_7, obj3), , ];
  const obj6 = { hasIcons: false, children: null };
  obj6[1] = memo.map((arg0, arg1) => {
    let description;
    let onPress;
    let title;
    ({ title, description, onPress } = arg0);
    return callback(modalSessionId(isManualAgeVerificationHidden[17]).TableRow, { arrow: true, label, subLabel, onPress }, arg1);
  });
  items3[1] = callback(modalSessionId(isManualAgeVerificationHidden[16]).TableRowGroup, obj6);
  const obj7 = { variant: "text-xs/medium", color: "text-muted", style: items4, children: null };
  items4 = [, ];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  const intl4 = tmp2(tmp3[11]).intl;
  obj7[3] = intl4.format(modalSessionId(isManualAgeVerificationHidden[11]).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = initiateAgeVerification(isManualAgeVerificationHidden[12]);
      obj.openUrl(initiateAgeVerification(isManualAgeVerificationHidden[18]).getArticleURL(outer1_8.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = initiateAgeVerification(isManualAgeVerificationHidden[18]);
      const result = modalSessionId(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.LEARN_MORE);
    }
  });
  items3[2] = callback(modalSessionId(isManualAgeVerificationHidden[15]).Text, obj7);
  obj2[1] = items3;
  items1[1] = closure_11(closure_6, obj2);
  obj1[0] = items1;
  return closure_11(tmp10, obj1);
};