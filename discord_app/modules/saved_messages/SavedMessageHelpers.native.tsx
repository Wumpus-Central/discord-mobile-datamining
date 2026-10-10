// discord_app/modules/saved_messages/SavedMessageHelpers.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_7 = async function _addOrUpdateSavedMessage(arg0) {
  let displayToast = arg0;
  c3 = 0;
  c4 = 0;
  let iter = (async (arg0) => {
    closure_130_0(closure_130_2[3]);
    await closure_130_0(closure_130_2[3])
      .upsertSavedMessage(closure_129_1)
      .catch((error) => {
        let code;
        if (error != null) {
          const body = error.body;
          if (body != null) {
            code = body.code;
          }
        }
        if (code === constants.TOO_MANY_SAVED_MESSAGES) {
          closure_0 = tmp6;
          const obj3 = {
            title: null,
            body: null,
            confirmText: null,
            cancelText: null,
            onCancel: null,
            isDismissable: false,
          };
          const intl2 = closure_0(1126).intl;
          obj3.title = intl2.string(closure_0(1126).t.mlbiZW);
          const intl3 = closure_0(1126).intl;
          const t = closure_0(1126).t;
          const obj4 = { max: null != closure_1_1.dueAt ? closure_2_6 : closure_2_5 };
          obj3.body = intl3.formatToPlainString(null != closure_1_1.dueAt ? t.Anr1Dg : t["1zVbEG"], obj4);
          const intl4 = tmp9(1126).intl;
          obj3.confirmText = intl4.string(closure_0(1126).t.BddRzS);
          const intl5 = tmp9(1126).intl;
          obj3.cancelText = intl5.string(closure_0(1126).t.ZGbTcy);
          obj3.onCancel = function onCancel() {
            const SavedMessageSortTypes = displayToast(9681).SavedMessageSortTypes;
            return displayToast(12643).showForLaterModal(
              closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK,
            );
          };
          closure_1(5299).show(obj3);
          return null;
        } else {
          let message;
          if (error != null) {
            const body2 = error.body;
            if (body2 != null) {
              message = body2.message;
            }
          }
          if (message == null) {
            const intl = closure_0(1126).intl;
            message = intl.string(closure_0(1126).t.R0RpRX);
          }
          const obj = { text: message, variant: "critical" };
          closure_1(4809).open("SAVED_MESSAGE_CREATE_ERROR", obj);
          return null;
        }
      });
    if (null != value) {
      if (displayToast2) {
        if (null != closure_129_1.dueAt) {
          let intl2 = closure_130_0(closure_130_2[5]).intl;
          let stringResult = intl2.string(closure_130_0(closure_130_2[5]).t.i1IsOy);
        } else {
          let intl = closure_130_0(closure_130_2[5]).intl;
          stringResult = intl.string(closure_130_0(closure_130_2[5]).t.DQjes4);
        }
        closure_129_2 = stringResult;
        if (null != closure_129_1.dueAt) {
          let BookmarkIcon = closure_130_0(closure_130_2[9]).ClockIcon;
        } else {
          BookmarkIcon = closure_130_0(closure_130_2[10]).BookmarkIcon;
        }
        closure_129_3 = BookmarkIcon;
        closure_130_1(closure_130_2[8]).open("SAVED_MESSAGE_CREATE_SUCCESS", {
          text: closure_129_2,
          icon: closure_129_3,
        });
        closure_130_1(closure_130_2[8]);
      }
    }
    await "IconComponent";
    closure_1 = tmp2;
    displayToast2 = displayToast.displayToast;
    closure_129_1 = Object.assign(displayToast, Object.assign({ displayToast: 0 }));
    return "Set";
  })();
  iter.next();
  return iter;
};
let closure_8 = async function _removeSavedMessage() {
  closure_130_0(closure_130_2[3]);
  await closure_130_0(closure_130_2[3])
    .deleteSavedMessage(closure_129_2)
    .catch((error) => {
      let message;
      if (error != null) {
        const body = error.body;
        if (body != null) {
          message = body.message;
        }
      }
      if (message == null) {
        const intl = closure_1_0(dependencyMap[5]).intl;
        message = intl.string(closure_1_0(dependencyMap[5]).t.R0RpRX);
      }
      closure_1_1(dependencyMap[8]).open("SAVED_MESSAGE_REMOVE_ERROR", { text: message, variant: "critical" });
      return null;
    });
  if (null != value) {
    if (closure_129_0) {
      if (null == closure_129_2.dueAt) {
        if (!closure_129_1) {
          let intl = closure_130_0(closure_130_2[5]).intl;
          let stringResult = intl.string(closure_130_0(closure_130_2[5]).t["5KOMiV"]);
        }
        closure_129_3 = stringResult;
        if (null == closure_129_2.dueAt) {
          if (!closure_129_1) {
            let ClockIcon = closure_130_0(closure_130_2[10]).BookmarkIcon;
          }
          closure_129_4 = ClockIcon;
          closure_130_1(closure_130_2[8]).open("SAVED_MESSAGE_REMOVE_SUCCESS", {
            text: closure_129_3,
            icon: closure_129_4,
          });
          closure_130_1(closure_130_2[8]);
        }
        ClockIcon = closure_130_0(closure_130_2[9]).ClockIcon;
      }
      const intl2 = closure_130_0(closure_130_2[5]).intl;
      stringResult = intl2.string(closure_130_0(closure_130_2[5]).t.D0tS02);
    }
  }
  await "IconComponent";
  closure_1 = tmp2;
  ({ displayToast: closure_129_0, isReminder: closure_129_1 } = closure_0);
  closure_129_2 = Object.assign(closure_0, Object.assign({ displayToast: 0, isReminder: 0 }));
  return "Set";
};
const AbortCodes = fn(1085).AbortCodes;
const SavedMessagesConstants = fn(12653);
({ SAVED_BOOKMARKS_MAX: hasOwnProperty, SAVED_REMINDERS_MAX: metroRequire } = SavedMessagesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

export const addOrUpdateSavedMessage = function addOrUpdateSavedMessage() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeSavedMessage = function removeSavedMessage() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
