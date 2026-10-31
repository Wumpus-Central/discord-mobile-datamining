// discord_app/modules/saved_messages/SavedMessageHelpers.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import SavedMessagesStore from "SavedMessagesStore.tsx";

const require = fn;
let closure_8 = async function _addOrUpdateSavedMessage(arg0) {
  let displayToast = arg0;
  c3 = 0;
  c4 = 0;
  let iter = (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            dependencyMap = tmp5;
            closure_1 = tmp2;
            let displayToast2;
            closure_129_1 = undefined;
            displayToast2 = displayToast.displayToast;
            closure_129_1 = Object.assign(displayToast, Object.assign({ displayToast: 0 }));
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "flexDirection", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_129_2 = closure_130_4.isMessageReminder(closure_129_1.channelId, closure_129_1.messageId);
            const obj9 = closure_130_0(closure_130_2[4]);
            c3 = 2;
            c4 = 1;
            const obj6 = {
              value: closure_130_0(closure_130_2[4])
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
                    const intl2 = closure_0(1113).intl;
                    obj3.title = intl2.string(closure_0(1113).t.mlbiZW);
                    const intl3 = closure_0(1113).intl;
                    const t = closure_0(1113).t;
                    const obj4 = { max: null != closure_1_1.dueAt ? closure_2_7 : closure_2_6 };
                    obj3.body = intl3.formatToPlainString(null != closure_1_1.dueAt ? t.Anr1Dg : t["1zVbEG"], obj4);
                    const intl4 = tmp9(1113).intl;
                    obj3.confirmText = intl4.string(closure_0(1113).t.BddRzS);
                    const intl5 = tmp9(1113).intl;
                    obj3.cancelText = intl5.string(closure_0(1113).t.ZGbTcy);
                    obj3.onCancel = function onCancel() {
                      const SavedMessageSortTypes = displayToast(10192).SavedMessageSortTypes;
                      return displayToast(11150).showForLaterModal(
                        closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK,
                      );
                    };
                    closure_1(5958).show(obj3);
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
                      const intl = closure_0(1113).intl;
                      message = intl.string(closure_0(1113).t.R0RpRX);
                    }
                    const obj = { text: message, variant: "critical" };
                    closure_1(5712).open("SAVED_MESSAGE_CREATE_ERROR", obj);
                    return null;
                  }
                }),
              done: false,
            };
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          if (null == value) {
            c4 = 3;
          } else if (null != closure_129_1.dueAt) {
            let intl2 = closure_130_0(closure_130_2[6]).intl;
            let t = closure_130_0(closure_130_2[6]).t;
            if (closure_129_2) {
              let i1IsOy = t.lapk3f;
            } else {
              i1IsOy = t.i1IsOy;
            }
            intl2.string(i1IsOy);
          } else {
            let intl = closure_130_0(closure_130_2[6]).intl;
            closure_129_3 = intl.string(closure_130_0(closure_130_2[6]).t.DQjes4);
            if (!displayToast2) {
              const AccessibilityAnnouncer = closure_130_0(closure_130_2[12]).AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(closure_129_3, "polite");
            }
          }
          if (null != closure_129_1.dueAt) {
            let BookmarkIcon = closure_130_0(closure_130_2[10]).ClockIcon;
          } else {
            BookmarkIcon = closure_130_0(closure_130_2[11]).BookmarkIcon;
          }
          closure_129_4 = BookmarkIcon;
          const obj8 = { text: closure_129_3, icon: closure_129_4 };
          closure_130_1(closure_130_2[9]).open("SAVED_MESSAGE_CREATE_SUCCESS", obj8);
          let obj = closure_130_1(closure_130_2[9]);
        }
      } catch (tmp44) {
        c4 = tmp;
        throw tmp44;
      }
    }
  })();
  iter.next();
  return iter;
};
let closure_9 = async function _removeSavedMessage(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          dependencyMap = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ displayToast: closure_129_0, isReminder: closure_129_1 } = closure_0);
          closure_129_2 = Object.assign(closure_0, Object.assign({ displayToast: 0, isReminder: 0 }));
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flexDirection", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const obj4 = closure_130_0(closure_130_2[4]);
          c3 = 2;
          c4 = 1;
          const obj7 = {
            value: closure_130_0(closure_130_2[4])
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
                  const intl = closure_1_0(dependencyMap[6]).intl;
                  message = intl.string(closure_1_0(dependencyMap[6]).t.R0RpRX);
                }
                closure_1_1(dependencyMap[9]).open("SAVED_MESSAGE_REMOVE_ERROR", {
                  text: message,
                  variant: "critical",
                });
                return null;
              }),
            done: false,
          };
          return obj7;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        if (null == value) {
          c4 = 3;
        } else {
          if (null == closure_129_2.dueAt) {
            if (!closure_129_1) {
              let intl = closure_130_0(closure_130_2[6]).intl;
              let stringResult = intl.string(closure_130_0(closure_130_2[6]).t["5KOMiV"]);
            }
            closure_129_3 = stringResult;
            if (!closure_129_0) {
              const AccessibilityAnnouncer = closure_130_0(closure_130_2[12]).AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(closure_129_3, "polite");
            }
          }
          const intl2 = closure_130_0(closure_130_2[6]).intl;
          stringResult = intl2.string(closure_130_0(closure_130_2[6]).t.D0tS02);
        }
        if (null == closure_129_2.dueAt) {
          if (!closure_129_1) {
            let ClockIcon = closure_130_0(closure_130_2[11]).BookmarkIcon;
          }
          closure_129_4 = ClockIcon;
          const obj9 = { text: closure_129_3, icon: closure_129_4 };
          closure_130_1(closure_130_2[9]).open("SAVED_MESSAGE_REMOVE_SUCCESS", obj9);
          const obj = closure_130_1(closure_130_2[9]);
        }
        ClockIcon = closure_130_0(closure_130_2[10]).ClockIcon;
      }
    } catch (tmp50) {
      c4 = tmp;
      throw tmp50;
    }
  }
};
const AbortCodes = fn(1072).AbortCodes;
const SavedMessagesConstants = fn(11160);
({ SAVED_BOOKMARKS_MAX: metroRequire, SAVED_REMINDERS_MAX: closure_7 } = SavedMessagesConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

export function addOrUpdateSavedMessage() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function removeSavedMessage() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
