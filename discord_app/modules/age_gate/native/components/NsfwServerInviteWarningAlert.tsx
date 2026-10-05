// discord_app/modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let tmp, tmp3, tmp4, tmp5, tmp9;

const jsx = Fragment.jsx;
let c5 = "nsfw-server-invite-warning";
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onConfirm) => {
      let _confirm;
      let description;
      let tmp6;
      let obj = onConfirm(_confirm[3]);
      const cResult = obj.c(21);
      onConfirm = onConfirm.onConfirm;
      const obj2 = onConfirm(_confirm[4]);
      const dismissModalCallback = obj2.useDismissModalCallback();
      const obj3 = onConfirm(_confirm[5]);
      const gatedAgeGroup = obj3.useGatedAgeGroup();
      if (cResult[0] !== gatedAgeGroup) {
        const tmpResult = onConfirm(_confirm[5]);
        const nsfwServerInviteWarningVariant = tmpResult.getNsfwServerInviteWarningVariant(gatedAgeGroup);
        cResult[0] = gatedAgeGroup;
        cResult[1] = nsfwServerInviteWarningVariant;
        tmp6 = nsfwServerInviteWarningVariant;
      } else {
        tmp6 = cResult[1];
      }
      ({ description, confirm: _confirm } = tmp6);
      const goBackIsPrimary = tmp6.goBackIsPrimary;
      if (cResult[2] === _confirm.joins) {
        if (cResult[3] === dismissModalCallback) {
          let tmp8;
          if (cResult[4] === onConfirm) {
            tmp8 = cResult[5];
          }
          let str2 = "primary";
          if (goBackIsPrimary) {
            str2 = "secondary";
          }
          if (cResult[6] === _confirm.text) {
            if (cResult[7] === tmp8) {
              let tmp13;
              let tmp15;
              let tmp18;
              let tmp21;
              let str4 = "secondary";
              if (goBackIsPrimary) {
                str4 = "primary";
              }
              const _Symbol = Symbol;
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(_confirm[9]).intl;
                const stringResult = intl.string(onConfirm(_confirm[9]).t["/g10LC"]);
                cResult[10] = stringResult;
                tmp13 = stringResult;
              } else {
                tmp13 = cResult[10];
              }
              if (cResult[11] !== str4) {
                const tmp17 = jsx(onConfirm(_confirm[8]).AlertActionButton, { variant: str4, text: tmp13 }, "go-back");
                cResult[11] = str4;
                cResult[12] = tmp17;
                tmp15 = tmp17;
              } else {
                tmp15 = cResult[12];
              }
              const _Symbol2 = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(_confirm[9]).intl;
                const stringResult1 = intl2.string(onConfirm(_confirm[9]).t.xi46lg);
                cResult[13] = stringResult1;
                tmp18 = stringResult1;
              } else {
                tmp18 = cResult[13];
              }
              if (cResult[14] === tmp9) {
                if (cResult[15] === tmp15) {
                  let tmp20;
                  if (cResult[16] === goBackIsPrimary) {
                    tmp20 = cResult[17];
                  }
                  if (cResult[18] === description) {
                    let tmp22;
                    if (cResult[19] === tmp20) {
                      tmp22 = cResult[20];
                    }
                    return tmp22;
                  }
                  const tmp24 = jsx(onConfirm(_confirm[8]).AlertModal, {
                    title: tmp18,
                    content: description,
                    actions: tmp20,
                  });
                  cResult[18] = description;
                  cResult[19] = tmp20;
                  cResult[20] = tmp24;
                  tmp22 = tmp24;
                }
              }
              const items = [,];
              if (goBackIsPrimary) {
                items[0] = tmp15;
                items[1] = tmp9;
                tmp21 = items;
              } else {
                items[0] = tmp9;
                items[1] = tmp15;
                tmp21 = items;
              }
              cResult[14] = tmp9;
              cResult[15] = tmp15;
              class A {
                constructor() {
                  if (confirm.joins) {
                    tmp8 = onConfirm;
                    tmp9 = onConfirm();
                  } else {
                    tmp = closure_1;
                    tmp2 = closure_1();
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    tmp5 = closure_1(closure_2[6]);
                    obj = { entryPoint: null };
                    tmp6 = closure_0;
                    showAgeVerificationGetStartedModal = tmp5.showAgeVerificationGetStartedModal;
                    obj.entryPoint = closure_0(closure_2[7]).AgeVerificationModalEntryPoint.NSFW_AGE_GATE;
                    result = showAgeVerificationGetStartedModal(obj);
                  }
                  return;
                }
              }
              cResult[17] = tmp21;
              tmp20 = tmp21;
            }
          }
          cResult[6] = _confirm.text;
          cResult[7] = tmp8;
          cResult[8] = str2;
          cResult[9] = jsx(
            onConfirm(_confirm[8]).AlertActionButton,
            { variant: str2, text: _confirm.text, onPress: tmp8 },
            "confirm",
          );
          jsx(
            onConfirm(_confirm[8]).AlertActionButton,
            { variant: str2, text: _confirm.text, onPress: tmp8 },
            "confirm",
          );
          class A {
            constructor() {
              if (confirm.joins) {
                tmp8 = onConfirm;
                tmp9 = onConfirm();
              } else {
                tmp = closure_1;
                tmp2 = closure_1();
                tmp3 = closure_1;
                tmp4 = closure_2;
                tmp5 = closure_1(closure_2[6]);
                obj = { entryPoint: null };
                tmp6 = closure_0;
                showAgeVerificationGetStartedModal = tmp5.showAgeVerificationGetStartedModal;
                obj.entryPoint = closure_0(closure_2[7]).AgeVerificationModalEntryPoint.NSFW_AGE_GATE;
                result = showAgeVerificationGetStartedModal(obj);
              }
              return;
            }
          }
        }
      }
      class A {
        constructor() {
          if (confirm.joins) {
            tmp8 = onConfirm;
            tmp9 = onConfirm();
          } else {
            tmp = closure_1;
            tmp2 = closure_1();
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp5 = closure_1(closure_2[6]);
            obj = { entryPoint: null };
            tmp6 = closure_0;
            showAgeVerificationGetStartedModal = tmp5.showAgeVerificationGetStartedModal;
            obj.entryPoint = closure_0(closure_2[7]).AgeVerificationModalEntryPoint.NSFW_AGE_GATE;
            result = showAgeVerificationGetStartedModal(obj);
          }
          return;
        }
      }
      cResult[2] = _confirm.joins;
      cResult[3] = dismissModalCallback;
      cResult[4] = onConfirm;
      cResult[5] = A;
      tmp8 = A;
    }
  : (onConfirm) => {
      let tmp10;
      onConfirm = onConfirm.onConfirm;
      let _confirm;
      let obj = onConfirm(_confirm[4]);
      const dismissModalCallback = obj.useDismissModalCallback();
      const getNsfwServerInviteWarningVariant = onConfirm(_confirm[5]).getNsfwServerInviteWarningVariant;
      onConfirm(_confirm[5]);
      const obj2 = onConfirm(_confirm[5]);
      const nsfwServerInviteWarningVariant = getNsfwServerInviteWarningVariant(obj2.useGatedAgeGroup());
      _confirm = nsfwServerInviteWarningVariant.confirm;
      const goBackIsPrimary = nsfwServerInviteWarningVariant.goBackIsPrimary;
      const items = [_confirm.joins, dismissModalCallback, onConfirm];
      const description = nsfwServerInviteWarningVariant.description;
      const callback = react.useCallback(() => {
        if (_confirm.joins) {
          onConfirm();
        } else {
          dismissModalCallback();
          const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
          const showAgeVerificationGetStartedModal =
            AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
          AgeVerificationActionCreatorsDefault;
          const result = showAgeVerificationGetStartedModal(obj);
        }
      }, items);
      let str = "primary";
      const AlertActionButton = onConfirm(_confirm[8]).AlertActionButton;
      if (goBackIsPrimary) {
        str = "secondary";
      }
      const tmp7Result = <AlertActionButton key="confirm" variant={str} text={_confirm.text} onPress={callback} />;
      let str2 = "secondary";
      const AlertActionButton2 = tmp(tmp2[8]).AlertActionButton;
      if (goBackIsPrimary) {
        str2 = "primary";
      }
      const intl = tmp(tmp2[9]).intl;
      const tmp7Result2 = (
        <AlertActionButton2 key="go-back" variant={str2} text={intl.string(onConfirm(_confirm[9]).t["/g10LC"])} />
      );
      const AlertModal = tmp(tmp2[8]).AlertModal;
      const intl2 = tmp(tmp2[9]).intl;
      const items1 = [,];
      if (goBackIsPrimary) {
        items1[0] = tmp7Result2;
        items1[1] = tmp7Result;
        tmp10 = items1;
      } else {
        items1[0] = tmp7Result;
        items1[1] = tmp7Result2;
        tmp10 = items1;
      }
      return <AlertModal title={intl2.string(onConfirm(_confirm[9]).t.xi46lg)} content={description} actions={tmp10} />;
    };
let closure_6 = tmp2;
let result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx");

export default tmp2;
export const NSFW_SERVER_INVITE_WARNING_ALERT_KEY = "nsfw-server-invite-warning";
export const showNsfwServerInviteWarningAlert = function showNsfwServerInviteWarningAlert(arg0) {
  let onConfirm;
  let onDismiss;
  ({ onConfirm, onDismiss } = arg0);
  const obj = useAlertStore;
  obj.openAlert(c5, <closure_6 onConfirm={onConfirm} />, onDismiss);
};
