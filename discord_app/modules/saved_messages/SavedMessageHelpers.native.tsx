// discord_app/modules/saved_messages/SavedMessageHelpers.native.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "SavedMessagesStore.tsx";
import { AbortCodes } from "../../Constants.tsx";

const require = arg1;
function _addOrUpdateSavedMessage() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              dependencyMap = tmp5;
              let lib = tmp2;
              let displayToast;
              lib = undefined;
              displayToast = displayToast.displayToast;
              lib = Object.assign(displayToast, Object.create(null));
              dependencyMap = undefined;
              BookmarkIcon = undefined;
              BookmarkIcon = 1;
              savedMessage = 1;
              return { value: "ct", done: true };
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
                  if (!obj10.hasForLaterAccess("addOrUpdateSavedMessage")) {
                    let items = [lib(7159).FOR_LATER_ROADBLOCK];
                    lib(8479)(displayToast(8482).EntitlementFeatureNames.SAVED_MESSAGES, undefined, items);
                    savedMessage = 3;
                    const tmp36 = lib(8479);
                  }
                  obj10 = displayToast(8484);
                }
                let obj3 = displayToast(10874);
                BookmarkIcon = 2;
                savedMessage = 1;
                obj3 = { value: null, done: false };
                obj3[0] = obj3.upsertSavedMessage(lib).catch((body) => {
                  let code;
                  if (body != null) {
                    body = body.body;
                    if (body != null) {
                      code = body.code;
                    }
                  }
                  if (code === closure_1_5.TOO_MANY_SAVED_MESSAGES) {
                    closure_0 = tmp5;
                    let obj = displayToast(_undefined[3]);
                    if (obj.isForLaterLimitUpgradable("addOrUpdateSavedMessage")) {
                      let tmp8Result = tmp8(tmp7[8]);
                      const items = [tmp8(tmp7[6]).FOR_LATER_ROADBLOCK];
                      tmp8Result(tmp5, items);
                    } else {
                      tmp8Result = tmp8(tmp7[9]);
                      obj = { title: null, body: null, confirmText: null, cancelText: null, onCancel: null };
                      const intl2 = tmp6(tmp7[10]).intl;
                      obj[0] = intl2.string(tmp6(tmp7[10]).t.mlbiZW);
                      const intl3 = tmp6(tmp7[10]).intl;
                      const t = tmp6(tmp7[10]).t;
                      obj = { max: null };
                      obj[0] = tmp6(tmp7[3]).getForLaterLimit("addOrUpdateSavedMessage", tmp5);
                      obj[1] = intl3.formatToPlainString(tmp5 ? t.Anr1Dg : t["1zVbEG"], obj);
                      const intl4 = tmp6(tmp7[10]).intl;
                      obj[2] = intl4.string(tmp6(tmp7[10]).t.BddRzS);
                      const intl5 = tmp6(tmp7[10]).intl;
                      obj[3] = intl5.string(tmp6(tmp7[10]).t.ZGbTcy);
                      obj[4] = function onCancel() {
                        const SavedMessageSortTypes = callback(closure_1_2[12]).SavedMessageSortTypes;
                        return callback(closure_1_2[11]).showForLaterModal(callback ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
                      };
                      tmp8Result.show(obj);
                      const tmp6Result = tmp6(tmp7[3]);
                      const tmp9 = tmp5 ? t.Anr1Dg : t["1zVbEG"];
                    }
                    return null;
                  } else {
                    obj1 = { key: "SAVED_MESSAGE_CREATE_ERROR", IconComponent: null, content: null };
                    obj1[1] = displayToast(_undefined[14]).CircleErrorIcon;
                    let message;
                    if (body != null) {
                      const body2 = body.body;
                      if (body2 != null) {
                        message = body2.message;
                      }
                    }
                    if (message == null) {
                      const intl = tmp15(tmp14[10]).intl;
                      message = intl.string(tmp15(tmp14[10]).t.R0RpRX);
                    }
                    obj1[2] = message;
                    lib(_undefined[13]).open(obj1);
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
                    BookmarkIcon = displayToast(4338).ClockIcon;
                  } else {
                    BookmarkIcon = displayToast(10876).BookmarkIcon;
                  }
                  obj = lib(4094);
                  const obj4 = { key: "SAVED_MESSAGE_CREATE_SUCCESS", IconComponent: null, content: null };
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
        } catch (tmp50) {
          savedMessage = tmp;
          throw tmp50;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_6 = tmp;
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
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_2 = tmp5;
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
              return { value: "ct", done: true };
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
              let obj3 = callback(closure_2[7]);
              c3 = 2;
              c4 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = obj3.deleteSavedMessage(closure_2).catch((body) => {
                let obj = _undefined2(4094);
                obj = { key: "SAVED_MESSAGE_REMOVE_ERROR", IconComponent: _undefined(8074).CircleErrorIcon, content: null };
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
                    let intl = callback(closure_2[10]).intl;
                    let stringResult = intl.string(callback(closure_2[10]).t["5KOMiV"]);
                  }
                  c3 = stringResult;
                  if (null == closure_2.dueAt) {
                    if (!callback2) {
                      let ClockIcon = callback(closure_2[16]).BookmarkIcon;
                    }
                    c4 = ClockIcon;
                    obj = callback2(closure_2[13]);
                    const obj5 = { key: "SAVED_MESSAGE_REMOVE_SUCCESS", IconComponent: null, content: null };
                    obj5[1] = c4;
                    obj5[2] = c3;
                    obj.open(obj5);
                  }
                  ClockIcon = callback(closure_2[15]).ClockIcon;
                }
                const intl2 = callback(closure_2[10]).intl;
                stringResult = intl2.string(callback(closure_2[10]).t.D0tS02);
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

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