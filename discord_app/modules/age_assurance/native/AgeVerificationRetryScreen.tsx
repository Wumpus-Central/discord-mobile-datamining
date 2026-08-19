// discord_app/modules/age_assurance/native/AgeVerificationRetryScreen.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../Constants.tsx";
import { SafetyHubLinks } from "../../safety_hub/SafetyHubConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ ActivityIndicator: c5, ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, flex: 1 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingVertical: ThemesDefault.space.PX_16, alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_8 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/age_assurance/native/AgeVerificationRetryScreen.tsx");

export default function GetStartedScreen(modalSessionId) {
  modalSessionId = modalSessionId.modalSessionId;
  let isManualAgeVerificationHidden;
  const tmp = callback2();
  modalSessionId(isManualAgeVerificationHidden[8]);
  let obj = { onComplete: modalSessionId.onClose, entryPoint: modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalEntryPoint.RETRY_MODAL };
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
  const memo = React.useMemo(() => {
    let obj = { title: stringResult2, description: null, onPress: null };
    const intl = modalSessionId(isManualAgeVerificationHidden[11]).intl;
    obj[1] = intl.string(modalSessionId(isManualAgeVerificationHidden[11]).t.ecdUKD);
    closure_0 = stringResult2(function*() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const result = v0(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked(c0, v0(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, v0(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.GET_STARTED);
              v02 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
      const intl2 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
      obj[0] = intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t["LZO+Hd"]);
      const intl3 = modalSessionId(isManualAgeVerificationHidden[11]).intl;
      obj[1] = intl3.string(modalSessionId(isManualAgeVerificationHidden[11]).t["ty+iWP"]);
      obj[2] = function onPress() {
        initiateAgeVerification(isManualAgeVerificationHidden[12]).openUrl(closure_1_9.APPEALS_LINK);
        const obj = initiateAgeVerification(isManualAgeVerificationHidden[12]);
        const result = callback(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked(callback, callback(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, callback(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.MANUAL_REVIEW_REQUEST);
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
    tmp2Result = tmp2(tmp3[13]);
  }
  obj1 = { children: null };
  const items1 = [loading, ];
  obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.headerContainer, children: null };
  const items2 = [callback(modalSessionId(isManualAgeVerificationHidden[14]).ShieldSpotIllustration, {}), callback(modalSessionId(isManualAgeVerificationHidden[15]).Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: stringResult }), ];
  const stringResult1 = intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue);
  items2[2] = callback(modalSessionId(isManualAgeVerificationHidden[15]).Text, { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue) });
  obj3[1] = items2;
  const items3 = [callback(closure_7, obj3), , ];
  const obj5 = { variant: "heading-md/medium", color: "text-strong", style: tmp.centerText, children: intl2.string(modalSessionId(isManualAgeVerificationHidden[11]).t.JNK1ue) };
  items3[1] = callback(modalSessionId(isManualAgeVerificationHidden[16]).TableRowGroup, {
    hasIcons: false,
    children: memo.map((item, index) => {
      ({ title, description, onPress } = item);
      return callback(modalSessionId(isManualAgeVerificationHidden[17]).TableRow, { arrow: true, label, subLabel, onPress }, index);
    })
  });
  const obj7 = { variant: "text-xs/medium", color: "text-muted", style: items4, children: null };
  items4 = [, ];
  ({ centerText: arr6[0], helpLink: arr6[1] } = tmp);
  const intl4 = tmp2(tmp3[11]).intl;
  obj7[3] = intl4.format(modalSessionId(isManualAgeVerificationHidden[11]).t["L+FgkZ"], {
    handleOnHelpUrlHook() {
      const obj = initiateAgeVerification(isManualAgeVerificationHidden[12]);
      obj.openUrl(initiateAgeVerification(isManualAgeVerificationHidden[18]).getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
      const obj2 = initiateAgeVerification(isManualAgeVerificationHidden[18]);
      const result = modalSessionId(isManualAgeVerificationHidden[9]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalVersion.RETRY, modalSessionId(isManualAgeVerificationHidden[9]).AgeVerificationModalCta.LEARN_MORE);
    }
  });
  items3[2] = callback(modalSessionId(isManualAgeVerificationHidden[15]).Text, obj7);
  obj2[1] = items3;
  items1[1] = callback(closure_6, obj2);
  obj1[0] = items1;
  return callback(closure_12, obj1);
};