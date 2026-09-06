// discord_app/modules/age_assurance/native/AgeVerificationRetryScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const SafetyHubLinks = fn(8419).SafetyHubLinks;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let createStyles = {
  loadingIndicator: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 },
  container: null,
  headerContainer: null,
  centerText: null,
  helpLink: null,
};
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 };
createStyles.container = createStyles;
createStyles.headerContainer = {
  paddingVertical: nativeDefault.space.PX_16,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
createStyles.centerText = { textAlign: "center" };
let obj1 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_8 };
createStyles.helpLink = { marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default function GetStartedScreen(modalSessionId) {
  modalSessionId = modalSessionId.modalSessionId;
  let isManualAgeVerificationHidden;
  const tmp = closure_13();
  modalSessionId(isManualAgeVerificationHidden[8]);
  let obj = {
    onComplete: modalSessionId.onClose,
    entryPoint: modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalEntryPoint.RETRY_MODAL,
  };
  initiateAgeVerification = obj.useInitiateAgeVerification(obj);
  ({ loading, initiateAgeVerification } = initiateAgeVerification);
  let obj2 = modalSessionId(isManualAgeVerificationHidden[10]);
  isManualAgeVerificationHidden = obj2.useIsManualAgeVerificationHidden("age_verification_retry_modal");
  let intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  let intl2 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  const stringResult = intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JSdbBe);
  let intl3 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
  const stringResult2 = intl3.string(modalSessionId(isManualAgeVerificationHidden[11]).t.mFvt9M);
  let items = [initiateAgeVerification, modalSessionId, isManualAgeVerificationHidden, stringResult2];
  const memo = noop.useMemo(() => {
    let obj = { title: stringResult2, description: null, onPress: null };
    const intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
    obj.description = intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.ecdUKD);
    closure_0 = stringResult2(function* () {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const result = v3(8413).trackAgeVerificationModalClicked(
                c0,
                v3(8413).AgeVerificationModalVersion.RETRY,
                v3(8413).AgeVerificationModalCta.GET_STARTED,
              );
              v1 = 1;
              c0 = 1;
              const obj1 = { value: v1(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          c0 = tmp;
          throw tmp5;
        }
      }
    });
    obj.onPress = function () {
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
      const intl2 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
      obj.title = intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t["LZO+Hd"]);
      const intl3 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
      obj.description = intl3.string(modalSessionId(isManualAgeVerificationHidden[11]).t["ty+iWP"]);
      obj.onPress = function onPress() {
        initiateAgeVerification(isManualAgeVerificationHidden[12]).openUrl(constants.APPEALS_LINK);
        const obj = initiateAgeVerification(isManualAgeVerificationHidden[12]);
        const result = modalSessionId(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked(
          closure_0,
          modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY,
          modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST,
        );
      };
      items.push(obj);
    }
    return items;
  }, items);
  if (loading) {
    obj = { style: tmp.loadingIndicator, size: "small", color: null };
    let WHITE;
    if (tmp2Result.isAndroid()) {
      WHITE = initiateAgeVerification(tmp3[7]).unsafe_rawColors.WHITE;
    }
    obj.color = WHITE;
    loading = closure_10(closure_5, obj);
    tmp2Result = tmp2(tmp3[13]);
  }
  let obj1 = { children: null };
  const items1 = [loading];
  obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.headerContainer, children: null };
  const items2 = [
    closure_10(modalSessionId(isManualAgeVerificationHidden[14]).ShieldSpotIllustration, {}),
    closure_10(modalSessionId(isManualAgeVerificationHidden[15]).Text, {
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      style: tmp.centerText,
      children: stringResult,
    }),
  ];
  const obj4 = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: tmp.centerText,
    children: stringResult,
  };
  const stringResult1 = intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue);
  items2[2] = closure_10(modalSessionId(isManualAgeVerificationHidden[15]).Text, {
    variant: "heading-md/medium",
    color: "text-strong",
    style: tmp.centerText,
    children: intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue),
  });
  obj3.children = items2;
  const items3 = [closure_11(closure_7, obj3), ,];
  const obj5 = {
    variant: "heading-md/medium",
    color: "text-strong",
    style: tmp.centerText,
    children: intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue),
  };
  items3[1] = closure_10(modalSessionId(isManualAgeVerificationHidden[16]).TableRowGroup, {
    hasIcons: false,
    children: memo.map((item, index) => {
      ({ title, description, onPress } = item);
      return closure_1_10(
        modalSessionId(isManualAgeVerificationHidden[17]).TableRow,
        { arrow: true, label, subLabel, onPress },
        index,
      );
    }),
  });
  const obj7 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
  const items4 = [,];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  obj7.style = items4;
  const intl4 = tmp2(tmp3[11]).intl;
  obj7.children = intl4.format(modalSessionId(isManualAgeVerificationHidden[11]).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
        modalSessionId,
        AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.RETRY,
        AgeVerificationAnalyticsUtils.AgeVerificationModalCta.LEARN_MORE,
      );
    },
  });
  items3[2] = closure_10(modalSessionId(isManualAgeVerificationHidden[15]).Text, obj7);
  obj2.children = items3;
  items1[1] = closure_11(closure_6, obj2);
  obj1.children = items1;
  return closure_11(closure_12, obj1);
}
