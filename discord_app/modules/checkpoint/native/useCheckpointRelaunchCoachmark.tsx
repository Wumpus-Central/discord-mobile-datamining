// discord_app/modules/checkpoint/native/useCheckpointRelaunchCoachmark.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const ContentDismissActionType = fn(4889).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointRelaunchCoachmark.tsx");

export const useIsCheckpointRelaunchCoachmarkEligible = fn(18160).useIsCheckpointRelaunchCoachmarkEligible;
export function useCheckpointRelaunchCoachmarkProps(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  items = [markAsDismissed, visibleContent];
  return noop.useMemo(() => {
    let obj = {
      title: null,
      description: null,
      position: "top",
      visible: null,
      onDismiss: null,
      buttonLabel: null,
      buttonVariant: "primary",
      onButtonPress: null,
    };
    const intl = visibleContent(1112).intl;
    obj.title = intl.string(markAsDismissed(3495).gY1STb);
    const intl2 = visibleContent(1112).intl;
    obj.description = intl2.string(markAsDismissed(3495)["Vlu+rH"]);
    obj.visible = closure_0 === visibleContent(4876).DismissibleContent.BUILD_A_BEAR_RELAUNCH_COACHMARK;
    obj.onDismiss = function onDismiss() {
      return markAsDismissed(constants.USER_DISMISS);
    };
    const intl3 = visibleContent(1112).intl;
    obj.buttonLabel = intl3.string(markAsDismissed(3495).e3fPDg);
    closure_0 = asyncGeneratorStep(async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              v1 = 1;
              c2 = 1;
              const obj5 = {
                value: tmp4(12633).openCheckpoint(tmp4(18160).CHECKPOINT_RELAUNCH_COACHMARK_SOURCE),
                done: false,
              };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              v1(constants.TAKE_ACTION);
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c2 = tmp;
          throw tmp11;
        }
      }
    });
    obj.onButtonPress = function onButtonPress() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    return obj;
  }, items);
}
