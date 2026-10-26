// discord_app/modules/saved_messages/SavedMessageHelpers.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_7 = async function _addOrUpdateSavedMessage(arg0) {
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
        return { value: "IconComponent", done: "+352" };
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
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: null };
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
            let obj4 = closure_130_0(closure_130_2[3]);
            c3 = 2;
            c4 = 1;
            const obj7 = {
              value: closure_130_0(closure_130_2[3])
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
                    const intl2 = closure_0(1128).intl;
                    obj3.title = intl2.string(closure_0(1128).t.mlbiZW);
                    const intl3 = closure_0(1128).intl;
                    const t = closure_0(1128).t;
                    const obj4 = { max: null != closure_1_1.dueAt ? closure_2_6 : closure_2_5 };
                    obj3.body = intl3.formatToPlainString(null != closure_1_1.dueAt ? t.Anr1Dg : t["1zVbEG"], obj4);
                    const intl4 = tmp9(1128).intl;
                    obj3.confirmText = intl4.string(closure_0(1128).t.BddRzS);
                    const intl5 = tmp9(1128).intl;
                    obj3.cancelText = intl5.string(closure_0(1128).t.ZGbTcy);
                    obj3.onCancel = function onCancel() {
                      const SavedMessageSortTypes = displayToast(10078).SavedMessageSortTypes;
                      return displayToast(13802).showForLaterModal(
                        closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK,
                      );
                    };
                    closure_1(5908).show(obj3);
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
                      const intl = closure_0(1128).intl;
                      message = intl.string(closure_0(1128).t.R0RpRX);
                    }
                    const obj = { text: message, variant: "critical" };
                    closure_1(5663).open("SAVED_MESSAGE_CREATE_ERROR", obj);
                    return null;
                  }
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
              const obj9 = { text: closure_129_2, icon: closure_129_3 };
              closure_130_1(closure_130_2[8]).open("SAVED_MESSAGE_CREATE_SUCCESS", obj9);
              let obj = closure_130_1(closure_130_2[8]);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: "+352" };
        }
      } catch (tmp41) {
        c4 = tmp;
        throw tmp41;
      }
    }
  })();
  iter.next();
  return iter;
};
let closure_8 = async function _removeSavedMessage(arg0) {
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
      return { value: "IconComponent", done: "+352" };
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
          return { value: "Reflect", done: null };
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
          const obj4 = closure_130_0(closure_130_2[3]);
          c3 = 2;
          c4 = 1;
          const obj7 = {
            value: closure_130_0(closure_130_2[3])
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
                closure_1_1(dependencyMap[8]).open("SAVED_MESSAGE_REMOVE_ERROR", {
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
                const obj9 = { text: closure_129_3, icon: closure_129_4 };
                closure_130_1(closure_130_2[8]).open("SAVED_MESSAGE_REMOVE_SUCCESS", obj9);
                const obj = closure_130_1(closure_130_2[8]);
              }
              ClockIcon = closure_130_0(closure_130_2[9]).ClockIcon;
            }
            const intl2 = closure_130_0(closure_130_2[5]).intl;
            stringResult = intl2.string(closure_130_0(closure_130_2[5]).t.D0tS02);
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: "+352" };
      }
    } catch (tmp45) {
      c4 = tmp;
      throw tmp45;
    }
  }
};
const AbortCodes = fn(1087).AbortCodes;
const SavedMessagesConstants = fn(13812);
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
