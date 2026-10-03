// === Module 9425: NsfwServerInviteWarningAlert ===

// Module 9425 (NsfwServerInviteWarningAlert)
import useAlertStore from "useAlertStore" /* 5709 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c5 = "nsfw-server-invite-warning";
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirm) => {
  const cResult = onConfirm(_confirm[3]).c(21);
  onConfirm = onConfirm.onConfirm;
  let obj = onConfirm(_confirm[3]);
  const dismissModalCallback = onConfirm(_confirm[4]).useDismissModalCallback();
  let obj2 = onConfirm(_confirm[4]);
  const gatedAgeGroup = onConfirm(_confirm[5]).useGatedAgeGroup();
  if (cResult[0] !== gatedAgeGroup) {
    const nsfwServerInviteWarningVariant = tmp(_confirm[5]).getNsfwServerInviteWarningVariant(gatedAgeGroup);
    cResult[0] = gatedAgeGroup;
    cResult[1] = nsfwServerInviteWarningVariant;
    let tmp6 = nsfwServerInviteWarningVariant;
    const tmpResult = tmp(_confirm[5]);
  } else {
    tmp6 = cResult[1];
  }
  ({ description, confirm: _confirm } = tmp6);
  const goBackIsPrimary = tmp6.goBackIsPrimary;
  if (cResult[2] === _confirm.joins) {
    if (cResult[3] === dismissModalCallback) {
      if (cResult[4] === onConfirm) {
        let tmp8 = cResult[5];
      }
      let str2 = "primary";
      if (goBackIsPrimary) {
        str2 = "secondary";
      }
      if (cResult[6] === _confirm.text) {
        if (cResult[7] === tmp8) {
          let str4 = "secondary";
          if (goBackIsPrimary) {
            str4 = "primary";
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(_confirm[9]).intl;
            const stringResult = intl.string(tmp(_confirm[9]).t["/g10LC"]);
            cResult[10] = stringResult;
            let tmp13 = stringResult;
          } else {
            tmp13 = cResult[10];
          }
          if (cResult[11] !== str4) {
            const obj4 = { variant: str4, text: tmp13 };
            const tmp17 = jsx(tmp(_confirm[8]).AlertActionButton, { variant: str4, text: tmp13 }, "go-back");
            cResult[11] = str4;
            cResult[12] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(_confirm[9]).intl;
            const stringResult1 = intl2.string(tmp(_confirm[9]).t.xi46lg);
            cResult[13] = stringResult1;
            let tmp18 = stringResult1;
          } else {
            tmp18 = cResult[13];
          }
          if (cResult[14] === tmp9) {
            if (cResult[15] === tmp15) {
              if (cResult[16] === goBackIsPrimary) {
                if (cResult[18] === description) {
                  if (cResult[19] === tmp20) {
                    let tmp23 = cResult[20];
                  }
                  return tmp23;
                }
                const obj5 = { title: tmp18, content: description, actions: cResult[17] };
                const tmp25 = jsx(tmp(_confirm[8]).AlertModal, { title: tmp18, content: description, actions: cResult[17] });
                cResult[18] = description;
                cResult[19] = cResult[17];
                cResult[20] = tmp25;
                tmp23 = tmp25;
              }
            }
          }
          const items = [, ];
          if (goBackIsPrimary) {
            items[0] = tmp15;
            items[1] = tmp9;
            let tmp21 = items;
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
                tmp7 = onConfirm;
                tmp8 = onConfirm();
              } else {
                tmp = closure_1;
                tmp2 = closure_1();
                tmp3 = closure_1;
                tmp4 = closure_2;
                obj = closure_1(closure_2[6]);
                obj1 = { entryPoint: null };
                tmp5 = closure_0;
                obj1.entryPoint = closure_0(closure_2[7]).AgeVerificationModalEntryPoint.NSFW_AGE_GATE;
                result = obj.showAgeVerificationGetStartedModal(obj1);
              }
              return;
            }
          }
          cResult[17] = tmp21;
        }
      }
      const obj6 = { variant: str2, text: _confirm.text, onPress: tmp8 };
      cResult[6] = _confirm.text;
      cResult[7] = tmp8;
      cResult[8] = str2;
      cResult[9] = jsx(tmp(_confirm[8]).AlertActionButton, { variant: str2, text: _confirm.text, onPress: tmp8 }, "confirm");
      class A {
        constructor() {
          if (confirm.joins) {
            tmp7 = onConfirm;
            tmp8 = onConfirm();
          } else {
            tmp = closure_1;
            tmp2 = closure_1();
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[6]);
            obj1 = { entryPoint: null };
            tmp5 = closure_0;
            obj1.entryPoint = closure_0(closure_2[7]).AgeVerificationModalEntryPoint.NSFW_AGE_GATE;
            result = obj.showAgeVerificationGetStartedModal(obj1);
          }
          return;
        }
      }
      const tmp11 = jsx(tmp(_confirm[8]).AlertActionButton, { variant: str2, text: _confirm.text, onPress: tmp8 }, "confirm");
    }
  }
  class A {
    constructor() {
      if (confirm.joins) {
        tmp7 = onConfirm;
        tmp8 = onConfirm();
      } else {
        tmp = closure_1;
        tmp2 = closure_1();
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = closure_1(closure_2[6]);
        obj1 = { entryPoint: null };
        tmp5 = closure_0;
        obj1.entryPoint = closure_0(closure_2[7]).AgeVerificationModalEntryPoint.NSFW_AGE_GATE;
        result = obj.showAgeVerificationGetStartedModal(obj1);
      }
      return;
    }
  }
  cResult[2] = _confirm.joins;
  cResult[3] = dismissModalCallback;
  cResult[4] = onConfirm;
  cResult[5] = A;
  tmp8 = A;
  const obj3 = onConfirm(_confirm[5]);
}) : ((onConfirm) => {
  onConfirm = onConfirm.onConfirm;
  let _confirm;
  const dismissModalCallback = onConfirm(_confirm[4]).useDismissModalCallback();
  let obj = onConfirm(_confirm[4]);
  let obj2 = onConfirm(_confirm[5]);
  const nsfwServerInviteWarningVariant = obj2.getNsfwServerInviteWarningVariant(onConfirm(_confirm[5]).useGatedAgeGroup());
  _confirm = nsfwServerInviteWarningVariant.confirm;
  const goBackIsPrimary = nsfwServerInviteWarningVariant.goBackIsPrimary;
  const items = [_confirm.joins, dismissModalCallback, onConfirm];
  const callback = noop.useCallback(() => {
    if (_confirm.joins) {
      onConfirm();
    } else {
      dismissModalCallback();
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_AGE_GATE };
      const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj2);
    }
  }, items);
  let str = "primary";
  if (goBackIsPrimary) {
    str = "secondary";
  }
  const tmp6Result = jsx(onConfirm(_confirm[8]).AlertActionButton, { variant: str, text: _confirm.text, onPress: callback }, "confirm");
  let str2 = "secondary";
  if (goBackIsPrimary) {
    str2 = "primary";
  }
  const obj5 = { variant: str2, text: null };
  const intl = tmp(tmp2[9]).intl;
  obj5.text = intl.string(onConfirm(_confirm[9]).t["/g10LC"]);
  const tmp6Result2 = jsx(onConfirm(_confirm[8]).AlertActionButton, { variant: str2, text: null }, "go-back");
  const obj6 = { title: null, content: null, actions: null };
  const intl2 = tmp(tmp2[9]).intl;
  obj6.title = intl2.string(onConfirm(_confirm[9]).t.xi46lg);
  obj6.content = nsfwServerInviteWarningVariant.description;
  const items1 = [, ];
  if (goBackIsPrimary) {
    items1[0] = tmp6Result2;
    items1[1] = tmp6Result;
    let tmp9 = items1;
  } else {
    items1[0] = tmp6Result;
    items1[1] = tmp6Result2;
    tmp9 = items1;
  }
  obj6.actions = tmp9;
  return jsx(onConfirm(_confirm[8]).AlertModal, { title: null, content: null, actions: null });
});
let closure_6 = tmp2;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwServerInviteWarningAlert.tsx");

export default tmp2;
export const NSFW_SERVER_INVITE_WARNING_ALERT_KEY = "nsfw-server-invite-warning";
export const showNsfwServerInviteWarningAlert = function showNsfwServerInviteWarningAlert(arg0) {
  ({ onConfirm, onDismiss } = arg0);
  useAlertStore.openAlert(c5, <closure_6 onConfirm={onConfirm} />, onDismiss);
};