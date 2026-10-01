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
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4845);
let obj2 = {
  loadingIndicator: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 },
  container: { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 },
  headerContainer: null,
  centerText: null,
  helpLink: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, flex: 1 };
obj2.headerContainer = {
  paddingVertical: nativeDefault.space.PX_16,
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
obj2.centerText = { textAlign: "center" };
let obj4 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.helpLink = { marginTop: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default function GetStartedScreen(modalSessionId) {
  modalSessionId = modalSessionId.modalSessionId;
  initiateAgeVerification = undefined;
  let stringResult2;
  const tmp = closure_12();
  let obj = modalSessionId(stringResult2[7]);
  const initiateAgeVerification1 = obj.useInitiateAgeVerification({
    onComplete: modalSessionId.onClose,
    entryPoint: modalSessionId(stringResult2[8]).AgeVerificationModalEntryPoint.RETRY_MODAL,
  });
  ({ loading, initiateAgeVerification } = initiateAgeVerification1);
  let intl = modalSessionId(stringResult2[9]).intl;
  let obj2 = {
    onComplete: modalSessionId.onClose,
    entryPoint: modalSessionId(stringResult2[8]).AgeVerificationModalEntryPoint.RETRY_MODAL,
  };
  const intl2 = modalSessionId(stringResult2[9]).intl;
  const stringResult = intl.string(modalSessionId(stringResult2[9]).t.JSdbBe);
  const intl3 = modalSessionId(stringResult2[9]).intl;
  stringResult2 = intl3.string(modalSessionId(stringResult2[9]).t.mFvt9M);
  let items = [initiateAgeVerification, modalSessionId, stringResult2];
  const memo = noop.useMemo(() => {
    let obj = { title: stringResult2, description: null, onPress: null };
    const intl = modalSessionId(stringResult2[9]).intl;
    obj.description = intl.string(modalSessionId(stringResult2[9]).t.ecdUKD);
    closure_0 = asyncGeneratorStep(async () => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const result = v3(8045).trackAgeVerificationModalClicked(
                c0,
                v3(8045).AgeVerificationModalVersion.RETRY,
                v3(8045).AgeVerificationModalCta.GET_STARTED,
              );
              v1 = 1;
              c0 = 1;
              const obj4 = { value: v1(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
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
    return items;
  }, items);
  if (loading) {
    let obj3 = { style: tmp.loadingIndicator, size: "small", color: null };
    let WHITE;
    if (tmp2Result.isAndroid()) {
      WHITE = initiateAgeVerification(tmp3[6]).unsafe_rawColors.WHITE;
    }
    obj3.color = WHITE;
    loading = closure_9(closure_5, obj3);
    tmp2Result = tmp2(tmp3[10]);
  }
  let obj4 = { children: null };
  const items1 = [loading];
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.headerContainer, children: null };
  const items2 = [
    closure_9(modalSessionId(stringResult2[11]).ShieldSpotIllustration, {}),
    closure_9(modalSessionId(stringResult2[12]).Text, {
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      style: tmp.centerText,
      children: stringResult,
    }),
  ];
  const obj7 = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: tmp.centerText,
    children: stringResult,
  };
  const stringResult1 = intl2.string(modalSessionId(stringResult2[9]).t.JNK1ue);
  items2[2] = closure_9(modalSessionId(stringResult2[12]).Text, {
    variant: "heading-md/medium",
    color: "text-strong",
    style: tmp.centerText,
    children: intl2.string(modalSessionId(stringResult2[9]).t.JNK1ue),
  });
  obj6.children = items2;
  const items3 = [closure_10(closure_7, obj6), ,];
  const obj8 = {
    variant: "heading-md/medium",
    color: "text-strong",
    style: tmp.centerText,
    children: intl2.string(modalSessionId(stringResult2[9]).t.JNK1ue),
  };
  items3[1] = closure_9(modalSessionId(stringResult2[13]).TableRowGroup, {
    hasIcons: false,
    children: memo.map((item, index) => {
      ({ title, description, onPress } = item);
      return closure_1_9(modalSessionId(stringResult2[14]).TableRow, { arrow: true, label, subLabel, onPress }, index);
    }),
  });
  const obj10 = { variant: "text-xs/medium", color: "text-muted", style: null, children: null };
  const items4 = [,];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  obj10.style = items4;
  const intl4 = tmp2(tmp3[9]).intl;
  obj10.children = intl4.format(modalSessionId(stringResult2[9]).t["L+FgkZ"], {
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
  items3[2] = closure_9(modalSessionId(stringResult2[12]).Text, obj10);
  obj5.children = items3;
  items1[1] = closure_10(closure_6, obj5);
  obj4.children = items1;
  return closure_10(closure_11, obj4);
}
