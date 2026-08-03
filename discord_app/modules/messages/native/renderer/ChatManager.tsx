// === Module 9490: getPreviousMessages ===

// Module 9490 (getPreviousMessages)
import Changeset from "Changeset";

let c3;
let obj1;
({ Changeset: obj1, RowType: c3 } = Changeset);
const result = require("isUndefinedOrNull").fileFinishedImporting("modules/messages/native/renderer/ChatManager.tsx");
class ChatManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj._messages = null;
    obj._rows = [];
    obj.messages = null;
    obj.rows = [];
    obj.rowIndex = 0;
    obj.maybeRemove = false;
    obj.uploadProgressIds = {};
    obj.embeddedActivities = {};
    return obj;
  }
}
const prototype = ChatManager.prototype;
prototype["getPreviousMessages"] = function getPreviousMessages() {
  return this._messages;
};
prototype["getPreviousRows"] = function getPreviousRows() {
  return this._rows;
};
prototype["getBlocked"] = function getBlocked(blocked) {
  const self = this;
  if (null != this._messages) {
    const _Array = Array;
    if (!Array.isArray(self._messages)) {
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = !(tmp3.blocked || !blocked.blocked);
        const tmp5 = tmp3.blocked || !blocked.blocked;
      }
      return tmp4;
    }
  }
  return false;
};
prototype["getIgnored"] = function getIgnored(ignored) {
  const self = this;
  if (null != this._messages) {
    const _Array = Array;
    if (!Array.isArray(self._messages)) {
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = !(tmp3.ignored || !ignored.ignored);
        const tmp5 = tmp3.ignored || !ignored.ignored;
      }
      return tmp4;
    }
  }
  return false;
};
prototype["clear"] = function clear() {
  this._messages = null;
  this._rows = [];
  this.embeddedActivities = {};
};
prototype["finishUpdate"] = function finishUpdate(_messages, _rows) {
  this._messages = _messages;
  this._rows = _rows;
};
prototype["getLastRow"] = function getLastRow() {
  const self = this;
  let tmp = null;
  if (null != this.rows) {
    tmp = null;
    if (self.rows.length > 0) {
      tmp = self.rows[self.rows.length - 1];
    }
  }
  return tmp;
};
prototype["setup"] = function setup(messages) {
  const self = this;
  this.messages = messages;
  this.rows = [];
  this.rowIndex = 0;
  const _messages = this._messages;
  let length;
  if (_messages != null) {
    length = _messages.length;
  }
  self.maybeRemove = length === self.messages.length;
};
prototype["determineChangeTypeForUploadProgress"] = function determineChangeTypeForUploadProgress(items) {
  let self = this;
  if (null != this.uploadProgressIds[items.id]) {
    items = tmp.items;
    let length;
    if (items != null) {
      length = items.length;
    }
    const items1 = items.items;
    let length1;
    if (items1 != null) {
      length1 = items1.length;
    }
    if (length === length1) {
      if (tmp.compressionProgress === items.compressionProgress) {
        if (tmp.progress === items.progress) {
          if (tmp.currentSize === items.currentSize) {
            let UPDATE = constants.NOOP;
          }
        }
      }
    }
    self = items.id;
    self.uploadProgressIds[self] = items;
    UPDATE = constants.UPDATE;
  } else {
    self.uploadProgressIds[items.id] = items;
    return constants.INSERT;
  }
};
prototype["determineChangeTypeForEmbeddedActivity"] = function determineChangeTypeForEmbeddedActivity(arg0) {
  const tmp = importDefault(9491)(arg0);
  this.embeddedActivities[tmp] = arg0;
  if (null != this.embeddedActivities[tmp]) {
    let INSERT = constants.UPDATE;
  } else {
    INSERT = constants.INSERT;
  }
  return INSERT;
};
prototype["determineChangeType"] = function determineChangeType(forceRender) {
  let message;
  let updateMessageIds;
  ({ message, updateMessageIds } = forceRender);
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const self = this;
  if (null == this._messages) {
    return constants.NOOP;
  } else {
    const _Array = Array;
    if (Array.isArray(self._messages)) {
      return constants.NOOP;
    } else if (null == self._messages._map) {
      return constants.NOOP;
    } else {
      let tmp = tmp13;
      if (null == self._messages._map[message.id]) {
        tmp = tmp13;
        if (null != message.nonce) {
          if (null != self._messages._map[message.nonce]) {
            let INSERT = constants.UPDATE;
          }
          return INSERT;
        }
      }
      if (null != tmp) {
        if (!forceRender.forceRender) {
          let hasItem;
          if (updateMessageIds != null) {
            hasItem = updateMessageIds.has(message.id);
          }
          if (!hasItem) {
            INSERT = importDefault(659)(tmp, message) ? tmp5.NOOP : tmp5.UPDATE;
          }
        }
        INSERT = constants.UPDATE;
      }
      INSERT = constants.INSERT;
    }
  }
};
prototype["createRow"] = function createRow(rowGenerator) {
  this.rowIndex = +this.rowIndex + 1;
  rowGenerator.index = +this.rowIndex;
  const rows = this.rows;
  rows.push(rowGenerator);
  return rowGenerator;
};
prototype["createChangeset"] = function createChangeset() {
  const self = this;
  if (null == this._messages) {
    let rows = self.rows;
  } else {
    const items = [];
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < self._rows.length) {
      while (true) {
        let tmp = num;
        let tmp2 = num2;
        let tmp3 = num3;
        if (num3 !== self.rows.length) {
          if (num !== self._rows.length) {
            let tmp12 = self._rows[num];
            let tmp13 = self.rows[num3];
            let changeType = tmp13.changeType;
            let tmp14 = constants;
            if (constants.NOOP !== changeType) {
              if (tmp14.UPDATE !== changeType) {
                let INSERT = tmp14.INSERT;
                tmp13.index = num3 + num2;
                let arr = items.push(tmp13);
                let num6 = 1;
                let sum = num3 + 1;
                let sum1 = num;
                let sum3 = num2;
              }
            }
            if (tmp13.type === tmp12.type) {
              let tmp24 = constants2;
              if (tmp13.type !== constants2.SEPARATOR) {
                if (tmp13.type !== tmp24.LOADING) {
                  if (tmp13.changeType !== tmp14.NOOP) {
                    tmp13.index = num3 + num2;
                    arr = items.push(tmp13);
                    let num7 = 1;
                    sum1 = num + 1;
                    sum = num3 + 1;
                    sum3 = num2;
                  } else {
                    if (tmp13.type !== tmp24.SEPARATOR) {
                      if (tmp13.type !== tmp24.LOADING) {
                        let message = tmp13.message;
                        let isFirst;
                        if (message != null) {
                          isFirst = message.isFirst;
                        }
                        let message2 = tmp12.message;
                        let isFirst1;
                        if (message2 != null) {
                          isFirst1 = message2.isFirst;
                        }
                      }
                    }
                    tmp13.changeType = tmp14.UPDATE;
                    tmp13.index = num3 + num2;
                    let arr1 = items.push(tmp13);
                    let num8 = 1;
                    sum1 = num + 1;
                    sum = num3 + 1;
                    sum3 = num2;
                  }
                }
              }
            }
            let obj = { changeType: null, index: null };
            obj[0] = tmp14.REMOVE;
            let sum2 = num3 + num2;
            obj[1] = sum2;
            let arr2 = items.push(obj);
            if (0 < sum2) {
              let num9 = 1;
              let tmp22 = items[sum2 - 1];
              let maybeRemove = tmp22.changeType !== tmp14.NOOP;
              if (!maybeRemove) {
                let tmp23 = constants2;
                maybeRemove = tmp22.type !== constants2.MESSAGE;
              }
              if (!maybeRemove) {
                maybeRemove = self.maybeRemove;
              }
              if (!maybeRemove) {
                tmp22.changeType = tmp14.UPDATE;
              }
            }
            let num10 = 1;
            sum1 = num + 1;
            sum3 = num2 + 1;
            sum = num3;
          } else {
            let tmp9 = self.rows[num3];
            let tmp10 = constants;
            tmp9.changeType = constants.INSERT;
            tmp9.index = num3 + num2;
            let arr3 = items.push(tmp9);
            let num5 = 1;
            sum = num3 + 1;
            sum1 = num;
            sum3 = num2;
          }
        } else {
          obj = { changeType: null, index: null };
          let tmp4 = constants;
          obj[0] = constants.REMOVE;
          obj[1] = num3 + num2;
          let arr4 = items.push(obj);
          let num4 = 1;
          sum3 = num2 + 1;
          sum1 = num + 1;
          sum = num3;
        }
        num = sum1;
        num2 = sum3;
        num3 = sum;
        if (sum1 < self._rows.length) {
          continue;
        } else {
          num = sum1;
          num2 = sum3;
          num3 = sum;
          if (sum >= self.rows.length) {
            break;
          }
        }
        continue;
      }
    } else {
      num = 0;
      num2 = 0;
      num3 = 0;
    }
    rows = items.filter((changeType) => changeType.changeType !== constants.NOOP);
  }
  ({ messages: self._messages, rows: self._rows } = self);
  return rows;
};

export default ChatManager;
export const MockChatManager = {
  determineChangeType() {
    return constants.NOOP;
  },
  determineChangeTypeForUploadProgress() {
    return constants.NOOP;
  },
  determineChangeTypeForEmbeddedActivity() {
    return constants.NOOP;
  },
  getBlocked() {
    return false;
  },
  getIgnored() {
    return false;
  }
};