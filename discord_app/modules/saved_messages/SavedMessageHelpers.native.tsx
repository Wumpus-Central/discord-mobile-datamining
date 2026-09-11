// === Module 11797: SavedMessageHelpers ===

// Module 11797 (SavedMessageHelpers)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11753 */;

const require = fn;
let closure_6 = async function _addOrUpdateSavedMessage(arg0) {
  let displayToast = arg0;
  c3 = 0;
  c4 = 0;
  let iter = (async (arg0) => {
    closure_1 = tmp2;
    const displayToast2 = displayToast.displayToast;
    closure_129_1 = Object.assign(displayToast, Object.assign({ displayToast: 0 }));
    await "PX_16";
    if (1 === tmp5) {
      if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      } else {
        if (null == closure_130_4.getSavedMessage(closure_129_1.channelId, closure_129_1.messageId)) {
          if (!obj10.hasForLaterAccess("addOrUpdateSavedMessage")) {
            let items = [closure_130_1(closure_130_2[6]).FOR_LATER_ROADBLOCK];
            closure_130_1(closure_130_2[4])(closure_130_0(closure_130_2[5]).EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
            c4 = 3;
            closure_130_1(closure_130_2[4]);
          }
          obj10 = closure_130_0(closure_130_2[3]);
        }
        closure_130_0(closure_130_2[7]);
        c3 = 2;
        c4 = 1;
        const obj3 = { value: null, done: false };
        obj3.value = obj3.upsertSavedMessage(closure_129_1).catch((error) => {
          let code;
          if (error != null) {
            const body = error.body;
            if (body != null) {
              code = body.code;
            }
          }
          if (code === constants.TOO_MANY_SAVED_MESSAGES) {
            closure_0 = tmp5;
            let obj = closure_0(7927);
            if (obj.isForLaterLimitUpgradable("addOrUpdateSavedMessage")) {
              let tmp8Result = closure_1(11799);
              const items = [closure_1(7255).FOR_LATER_ROADBLOCK];
              tmp8Result(tmp5, items);
            } else {
              tmp8Result = closure_1(4950);
              obj = { title: null, body: null, confirmText: null, cancelText: null, onCancel: null };
              const intl2 = tmp6(1114).intl;
              obj.title = intl2.string(tmp6(1114).t.mlbiZW);
              const intl3 = tmp6(1114).intl;
              const t = tmp6(1114).t;
              obj = { max: tmp6(7927).getForLaterLimit("addOrUpdateSavedMessage", tmp5) };
              obj.body = intl3.formatToPlainString(tmp5 ? t.Anr1Dg : t["1zVbEG"], obj);
              const intl4 = tmp6(1114).intl;
              obj.confirmText = intl4.string(tmp6(1114).t.BddRzS);
              const intl5 = tmp6(1114).intl;
              obj.cancelText = intl5.string(tmp6(1114).t.ZGbTcy);
              obj.onCancel = function onCancel() {
                const SavedMessageSortTypes = displayToast(7933).SavedMessageSortTypes;
                return displayToast(7932).showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
              };
              tmp8Result.show(obj);
              const tmp6Result = tmp6(7927);
              const tmp9 = tmp5 ? t.Anr1Dg : t["1zVbEG"];
            }
            return null;
          } else {
            const obj1 = { key: "SAVED_MESSAGE_CREATE_ERROR", IconComponent: closure_0(6681).CircleErrorIcon, content: null };
            let message;
            if (error != null) {
              const body2 = error.body;
              if (body2 != null) {
                message = body2.message;
              }
            }
            if (message == null) {
              const intl = tmp15(1114).intl;
              message = intl.string(tmp15(1114).t.R0RpRX);
            }
            obj1.content = message;
            closure_1(4305).open(obj1);
            return null;
          }
        });
        return obj3;
      }
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (null != value) {
        if (displayToast2) {
          if (null != closure_129_1.dueAt) {
            let intl2 = closure_130_0(closure_130_2[10]).intl;
            let stringResult = intl2.string(closure_130_0(closure_130_2[10]).t.i1IsOy);
          } else {
            let intl = closure_130_0(closure_130_2[10]).intl;
            stringResult = intl.string(closure_130_0(closure_130_2[10]).t.DQjes4);
          }
          closure_129_2 = stringResult;
          if (null != closure_129_1.dueAt) {
            let BookmarkIcon = closure_130_0(closure_130_2[15]).ClockIcon;
          } else {
            BookmarkIcon = closure_130_0(closure_130_2[16]).BookmarkIcon;
          }
          closure_129_3 = BookmarkIcon;
          closure_130_1(closure_130_2[13]).open({ key: "SAVED_MESSAGE_CREATE_SUCCESS", IconComponent: closure_129_3, content: closure_129_2 });
          closure_130_1(closure_130_2[13]);
        }
      }
    }
    return value;
  })();
  iter.next();
  return iter;
};
let closure_7 = async function _removeSavedMessage(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          let obj3 = closure_130_0(closure_130_2[7]);
          c3 = 2;
          c4 = 1;
          obj3 = { value: null, done: false };
          obj3.value = obj3.deleteSavedMessage(closure_129_2).catch((error) => {
            closure_1_1(4305);
            const obj = { key: "SAVED_MESSAGE_REMOVE_ERROR", IconComponent: closure_1_0(6681).CircleErrorIcon, content: null };
            let message;
            if (error != null) {
              const body = error.body;
              if (body != null) {
                message = body.message;
              }
            }
            if (message == null) {
              const intl = closure_1_0(1114).intl;
              message = intl.string(closure_1_0(1114).t.R0RpRX);
            }
            obj.content = message;
            obj.open(obj);
            return null;
          });
          return obj3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        if (null != value) {
          if (closure_129_0) {
            if (null == closure_129_2.dueAt) {
              if (!closure_129_1) {
                let intl = closure_130_0(closure_130_2[10]).intl;
                let stringResult = intl.string(closure_130_0(closure_130_2[10]).t["5KOMiV"]);
              }
              closure_129_3 = stringResult;
              if (null == closure_129_2.dueAt) {
                if (!closure_129_1) {
                  let ClockIcon = closure_130_0(closure_130_2[16]).BookmarkIcon;
                }
                closure_129_4 = ClockIcon;
                obj = closure_130_1(closure_130_2[13]);
                const obj5 = { key: "SAVED_MESSAGE_REMOVE_SUCCESS", IconComponent: closure_129_4, content: closure_129_3 };
                obj.open(obj5);
              }
              ClockIcon = closure_130_0(closure_130_2[15]).ClockIcon;
            }
            const intl2 = closure_130_0(closure_130_2[10]).intl;
            stringResult = intl2.string(closure_130_0(closure_130_2[10]).t.D0tS02);
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp45) {
      c4 = tmp;
      throw tmp45;
    }
  }
};
const AbortCodes = fn(1074).AbortCodes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

export const addOrUpdateSavedMessage = function addOrUpdateSavedMessage() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeSavedMessage = function removeSavedMessage() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};