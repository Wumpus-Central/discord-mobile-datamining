// === Module 10090: _addOrUpdateSavedMessage ===

// Module 10090 (_addOrUpdateSavedMessage)
import EntitlementFeatureNames from "EntitlementFeatureNames";
import getTimeSafe from "getTimeSafe";
import { AbortCodes } from "ME";

const require = arg1;
function _addOrUpdateSavedMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      if (savedMessage === 2) {
        savedMessage = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          savedMessage = 2;
          if (0 === BookmarkIcon) {
            if (arg0 === 1) {
              savedMessage = 3;
              throw arg1;
            } else if (arg0 === 2) {
              savedMessage = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp5;
              let lib = tmp2;
              let displayToast;
              lib = undefined;
              displayToast = displayToast.displayToast;
              lib = Object.assign(displayToast, Object.create(null));
              dependencyMap = undefined;
              BookmarkIcon = undefined;
              BookmarkIcon = 1;
              savedMessage = 1;
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                savedMessage = 3;
                throw arg1;
              } else if (arg0 === 2) {
                savedMessage = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                if (null == savedMessage.getSavedMessage(lib.channelId, lib.messageId)) {
                  let obj3 = displayToast(9714);
                  if (!obj3.hasForLaterAccess("addOrUpdateSavedMessage")) {
                    lib(8169)(displayToast(8171).EntitlementFeatureNames.SAVED_MESSAGES);
                    savedMessage = 3;
                    const tmp39 = lib(8169);
                  }
                }
                let obj4 = displayToast(10091);
                BookmarkIcon = 2;
                savedMessage = 1;
                obj3 = { value: null, done: false };
                obj3[0] = obj4.upsertSavedMessage(lib).catch((body) => {
                  let code;
                  if (body != null) {
                    body = body.body;
                    if (body != null) {
                      code = body.code;
                    }
                  }
                  if (code === outer1_5.TOO_MANY_SAVED_MESSAGES) {
                    const displayToast = tmp5;
                    let obj = lib(_undefined[7]);
                    obj = { title: null, body: null, confirmText: null, cancelText: null, onCancel: null };
                    const intl2 = displayToast(_undefined[8]).intl;
                    obj[0] = intl2.string(displayToast(_undefined[8]).t.mlbiZW);
                    const intl3 = displayToast(_undefined[8]).intl;
                    const t = displayToast(_undefined[8]).t;
                    obj = { max: null };
                    obj[0] = displayToast(_undefined[3]).getForLaterLimit("addOrUpdateSavedMessage", null != lib.dueAt);
                    obj[1] = intl3.formatToPlainString(null != lib.dueAt ? t.Anr1Dg : t["1zVbEG"], obj);
                    const intl4 = tmp8(tmp7[8]).intl;
                    obj[2] = intl4.string(displayToast(_undefined[8]).t.BddRzS);
                    const intl5 = tmp8(tmp7[8]).intl;
                    obj[3] = intl5.string(displayToast(_undefined[8]).t.ZGbTcy);
                    obj[4] = function onCancel() {
                      const SavedMessageSortTypes = tmp5(outer1_2[10]).SavedMessageSortTypes;
                      return tmp5(outer1_2[9]).showForLaterModal(tmp5 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
                    };
                    obj.show(obj);
                    return null;
                  } else {
                    const obj1 = { key: "SAVED_MESSAGE_CREATE_ERROR", IconComponent: null, content: null };
                    obj1[1] = displayToast(_undefined[12]).CircleErrorIcon;
                    let message;
                    if (body != null) {
                      const body2 = body.body;
                      if (body2 != null) {
                        message = body2.message;
                      }
                    }
                    if (message == null) {
                      const intl = tmp13(tmp12[8]).intl;
                      message = intl.string(tmp13(tmp12[8]).t.R0RpRX);
                    }
                    obj1[2] = message;
                    lib(_undefined[11]).open(obj1);
                    return null;
                  }
                });
                return obj3;
              }
            } else if (arg0 === 1) {
              savedMessage = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (null != arg1) {
                if (displayToast) {
                  if (null != lib.dueAt) {
                    let intl2 = displayToast(1236).intl;
                    let stringResult = intl2.string(displayToast(1236).t.i1IsOy);
                  } else {
                    let intl = displayToast(1236).intl;
                    stringResult = intl.string(displayToast(1236).t.DQjes4);
                  }
                  dependencyMap = stringResult;
                  if (null != lib.dueAt) {
                    BookmarkIcon = displayToast(4219).ClockIcon;
                  } else {
                    BookmarkIcon = displayToast(10111).BookmarkIcon;
                  }
                  obj = lib(3956);
                  obj4 = { key: "SAVED_MESSAGE_CREATE_SUCCESS", IconComponent: null, content: null };
                  obj4[1] = BookmarkIcon;
                  obj4[2] = dependencyMap;
                  obj.open(obj4);
                }
              }
            }
            savedMessage = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
        } catch (tmp51) {
          savedMessage = tmp;
          throw tmp51;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _addOrUpdateSavedMessage = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeSavedMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              closure_2 = undefined;
              ({ displayToast: c0, isReminder: c1 } = callback);
              closure_2 = Object.assign(callback, Object.create(null));
              c3 = undefined;
              c4 = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              let obj3 = callback(closure_2[6]);
              c3 = 2;
              c4 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj3.deleteSavedMessage(closure_2).catch((body) => {
                let obj = _undefined2(3956);
                obj = { key: "SAVED_MESSAGE_REMOVE_ERROR", IconComponent: _undefined(7704).CircleErrorIcon, content: null };
                let message;
                if (body != null) {
                  body = body.body;
                  if (body != null) {
                    message = body.message;
                  }
                }
                if (message == null) {
                  const intl = tmp2(1236).intl;
                  message = intl.string(tmp2(1236).t.R0RpRX);
                }
                obj[2] = message;
                obj.open(obj);
                return null;
              });
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            if (null != arg1) {
              if (callback) {
                if (null == closure_2.dueAt) {
                  if (!callback2) {
                    let intl = callback(closure_2[8]).intl;
                    let stringResult = intl.string(callback(closure_2[8]).t["5KOMiV"]);
                  }
                  c3 = stringResult;
                  if (null == closure_2.dueAt) {
                    if (!callback2) {
                      let ClockIcon = callback(closure_2[14]).BookmarkIcon;
                    }
                    c4 = ClockIcon;
                    obj = callback2(closure_2[11]);
                    const obj5 = { key: "SAVED_MESSAGE_REMOVE_SUCCESS", IconComponent: null, content: null };
                    obj5[1] = c4;
                    obj5[2] = c3;
                    obj.open(obj5);
                  }
                  ClockIcon = callback(closure_2[13]).ClockIcon;
                }
                const intl2 = callback(closure_2[8]).intl;
                stringResult = intl2.string(callback(closure_2[8]).t.D0tS02);
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
    })();
    iter.next();
    return iter;
  });
  const _removeSavedMessage = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("ME").fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

export const addOrUpdateSavedMessage = function addOrUpdateSavedMessage(arg0) {
  const self = this;
  const apply = _addOrUpdateSavedMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeSavedMessage = function removeSavedMessage(saveData) {
  const self = this;
  const apply = _removeSavedMessage.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};