// === Module 11334: SavedMessageHelpers ===

// Module 11334 (SavedMessageHelpers)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11283 */;
import size from "module_2" /* 2 */;

let obj = function _addOrUpdateSavedMessage() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let displayToast = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0) => {
      let tmp;
      let upsertSavedMessageResult;
      if (1 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else {
          if (null == closure_130_4.getSavedMessage(tmp.channelId, tmp.messageId)) {
            const obj10 = closure_130_0(closure_130_2[3]);
            if (!obj10.hasForLaterAccess("addOrUpdateSavedMessage")) {
              const tmp35 = closure_130_1(closure_130_2[4]);
              const SAVED_MESSAGES = closure_130_0(closure_130_2[5]).EntitlementFeatureNames.SAVED_MESSAGES;
              let items = [closure_130_1(closure_130_2[6]).FOR_LATER_ROADBLOCK];
              tmp35(SAVED_MESSAGES, undefined, items);
            }
          }
          let obj4 = closure_130_0(closure_130_2[7]);
          c3 = 2;
          c4 = 1;
          const obj7 = {
            value: upsertSavedMessageResult.catch((error) => {
                  let closure_0;
                  let formatToPlainString;
                  let intl2;
                  let intl4;
                  let intl5;
                  let message;
                  let obj3;
                  let tmp10;
                  let tmp6Result;
                  let code;
                  if (error != null) {
                    const body = error.body;
                    if (body != null) {
                      code = body.code;
                    }
                  }
                  if (code === constants.TOO_MANY_SAVED_MESSAGES) {
                    closure_0 = tmp5;
                    obj = closure_0(content[3]);
                    if (obj.isForLaterLimitUpgradable("addOrUpdateSavedMessage")) {
                      const items = [];
                      const tmp8Result = closure_1(content[8]);
                      items[0] = closure_1(content[6]).FOR_LATER_ROADBLOCK;
                      tmp8Result(null != closure_1_1.dueAt, items);
                    } else {
                      const obj2 = {
                        title: intl2.string(closure_0(content[10]).t.mlbiZW),
                        body: formatToPlainString(tmp10, obj3),
                        confirmText: intl4.string(closure_0(content[10]).t.BddRzS),
                        cancelText: intl5.string(closure_0(content[10]).t.ZGbTcy),
                        onCancel() {
                              const showForLaterModal = closure_2_0(closure_2_2[11]).showForLaterModal;
                              closure_2_0(closure_2_2[11]);
                              const SavedMessageSortTypes = closure_2_0(closure_2_2[12]).SavedMessageSortTypes;
                              return showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
                            },
                        isDismissable: false
                      };
                      const show = closure_1(content[9]).show;
                      closure_1(content[9]);
                      intl2 = tmp6(content[10]).intl;
                      const intl3 = tmp6(content[10]).intl;
                      formatToPlainString = intl3.formatToPlainString;
                      const t = tmp6(content[10]).t;
                      obj3 = { max: tmp6Result.getForLaterLimit("addOrUpdateSavedMessage", null != closure_1_1.dueAt) };
                      tmp10 = null != closure_1_1.dueAt ? t.Anr1Dg : t["1zVbEG"];
                      tmp6Result = closure_0(content[3]);
                      intl4 = tmp6(content[10]).intl;
                      intl5 = tmp6(content[10]).intl;
                      show(obj2);
                    }
                    return null;
                  } else {
                    const obj4 = { key: "SAVED_MESSAGE_CREATE_ERROR", IconComponent: closure_0(content[14]).CircleErrorIcon, content: message };
                    const open = closure_1(content[13]).open;
                    closure_1(content[13]);
                    message = undefined;
                    if (error != null) {
                      const body2 = error.body;
                      if (body2 != null) {
                        message = body2.message;
                      }
                    }
                    if (message == null) {
                      const intl = tmp17(content[10]).intl;
                      message = intl.string(tmp17(content[10]).t.R0RpRX);
                    }
                    open(obj4);
                    return null;
                  }
                }),
            done: false
          };
          upsertSavedMessageResult = obj4.upsertSavedMessage(tmp);
          return obj7;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        return { value, done: true };
      } else if (null != value) {
        const tmp55 = displayToast;
        if (tmp55) {
          let stringResult;
          let BookmarkIcon;
          const tmp5 = tmp;
          if (null != tmp.dueAt) {
            let intl2 = closure_130_0(closure_130_2[10]).intl;
            stringResult = intl2.string(closure_130_0(closure_130_2[10]).t.i1IsOy);
          } else {
            const tmp6 = closure_2;
            let intl = closure_130_0(closure_130_2[10]).intl;
            stringResult = intl.string(closure_130_0(closure_130_2[10]).t.DQjes4);
          }
          const tmp17 = tmp;
          content = stringResult;
          if (null != tmp.dueAt) {
            BookmarkIcon = closure_130_0(closure_130_2[15]).ClockIcon;
          } else {
            BookmarkIcon = closure_130_0(closure_130_2[16]).BookmarkIcon;
          }
          obj = closure_130_1(closure_130_2[13]);
          const obj9 = { key: "SAVED_MESSAGE_CREATE_SUCCESS", IconComponent: BookmarkIcon, content };
          obj.open(obj9);
        }
      }
      await "IconComponent";
      closure_2 = tmp4;
      displayToast = displayToast.displayToast;
      tmp = Object.assign(displayToast, Object.assign({ displayToast: 0 }));
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _removeSavedMessage() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let content;
    let deleteSavedMessageResult;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_2;
        let ClockIcon;
        c4 = 2;
        if (0 === content) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            ({ displayToast: c0, isReminder: c1 } = closure_0);
            closure_2 = Object.assign(closure_0, Object.assign({ displayToast: 0, isReminder: 0 }));
            ClockIcon = undefined;
            content = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === content) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const obj4 = closure_130_0(closure_130_2[7]);
            content = 2;
            c4 = 1;
            const obj7 = {
              value: deleteSavedMessageResult.catch((error) => {
                        let message;
                        const tmp2 = closure_1_1(closure_1_2[13]);
                        const open = tmp2.open;
                        obj = { key: "SAVED_MESSAGE_REMOVE_ERROR", IconComponent: closure_1_0(closure_1_2[14]).CircleErrorIcon, content: message };
                        message = undefined;
                        if (error != null) {
                          const body = error.body;
                          if (body != null) {
                            message = body.message;
                          }
                        }
                        if (message == null) {
                          const intl = closure_1_0(closure_1_2[10]).intl;
                          message = intl.string(closure_1_0(closure_1_2[10]).t.R0RpRX);
                        }
                        open(obj);
                        return null;
                      }),
              done: false
            };
            deleteSavedMessageResult = obj4.deleteSavedMessage(closure_2);
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
            const tmp50 = c0;
            if (tmp50) {
              if (null == closure_2.dueAt) {
                let stringResult;
                const tmp7 = c1;
                if (!tmp7) {
                  let intl = closure_130_0(closure_130_2[10]).intl;
                  stringResult = intl.string(closure_130_0(closure_130_2[10]).t["5KOMiV"]);
                }
                content = stringResult;
                if (null == closure_2.dueAt) {
                  const tmp22 = c1;
                  if (!tmp22) {
                    ClockIcon = closure_130_0(closure_130_2[16]).BookmarkIcon;
                  }
                  obj = closure_130_1(closure_130_2[13]);
                  const obj9 = { key: "SAVED_MESSAGE_REMOVE_SUCCESS", IconComponent: ClockIcon, content };
                  const openResult = obj.open(obj9);
                }
                ClockIcon = closure_130_0(closure_130_2[15]).ClockIcon;
              }
              const intl2 = closure_130_0(closure_130_2[10]).intl;
              stringResult = intl2.string(closure_130_0(closure_130_2[10]).t.D0tS02);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp44) {
        c4 = 3;
        throw tmp44;
      }
    }
  });
  return obj(...arguments);
};
const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

export const addOrUpdateSavedMessage = function addOrUpdateSavedMessage() {
  return obj(...arguments);
};
export const removeSavedMessage = function removeSavedMessage() {
  return obj(...arguments);
};