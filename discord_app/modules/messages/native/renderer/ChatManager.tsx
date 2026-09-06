// discord_app/modules/messages/native/renderer/ChatManager.tsx
import _modDef1332 from "../../../../../_runtime/metro/01332__.js";
import getEmbeddedActivityKeyDefault from "../getEmbeddedActivityKey.tsx";
import RowGeneratorConstants from "RowGeneratorConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ Changeset: c2, RowType: c3 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/ChatManager.tsx");
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
prototype["determineChangeTypeForUploadProgress"] = function determineChangeTypeForUploadProgress(compressionProgress) {
  let self = this;
  if (null != this.uploadProgressIds[compressionProgress.id]) {
    const items = tmp.items;
    let length;
    if (items != null) {
      length = items.length;
    }
    const items1 = compressionProgress.items;
    let length1;
    if (items1 != null) {
      length1 = items1.length;
    }
    if (length === length1) {
      if (tmp.compressionProgress === compressionProgress.compressionProgress) {
        if (tmp.progress === compressionProgress.progress) {
          if (tmp.currentSize === compressionProgress.currentSize) {
            let UPDATE = constants.NOOP;
          }
        }
      }
    }
    self = compressionProgress.id;
    self.uploadProgressIds[self] = compressionProgress;
    UPDATE = constants.UPDATE;
  } else {
    self.uploadProgressIds[compressionProgress.id] = compressionProgress;
    return constants.INSERT;
  }
};
prototype["determineChangeTypeForEmbeddedActivity"] = function determineChangeTypeForEmbeddedActivity(arg0) {
  const tmp = getEmbeddedActivityKeyDefault(arg0);
  this.embeddedActivities[tmp] = arg0;
  if (null != this.embeddedActivities[tmp]) {
    let INSERT = constants.UPDATE;
  } else {
    INSERT = constants.INSERT;
  }
  return INSERT;
};
prototype["determineChangeType"] = function determineChangeType(forceRender) {
  ({ message, updateMessageIds } = forceRender);
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
            INSERT = _modDef1332(tmp, message) ? constants.NOOP : constants.UPDATE;
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
        if (num3 !== self.rows.length) {
          if (num !== self._rows.length) {
            let tmp12 = self._rows[num];
            let tmp13 = self.rows[num3];
            let changeType = tmp13.changeType;
            if (constants.NOOP !== changeType) {
              if (constants.UPDATE !== changeType) {
                let INSERT = constants.INSERT;
                tmp13.index = num3 + num2;
                let arr = items.push(tmp13);
                let sum = num3 + 1;
                let sum1 = num;
                let sum3 = num2;
              }
            }
            if (tmp13.type === tmp12.type) {
              if (tmp13.type !== constants2.SEPARATOR) {
                if (tmp13.type !== constants2.LOADING) {
                  if (tmp13.changeType !== constants.NOOP) {
                    tmp13.index = num3 + num2;
                    arr = items.push(tmp13);
                    sum1 = num + 1;
                    sum = num3 + 1;
                    sum3 = num2;
                  } else {
                    if (tmp13.type !== constants2.SEPARATOR) {
                      if (tmp13.type !== constants2.LOADING) {
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
                    tmp13.changeType = constants.UPDATE;
                    tmp13.index = num3 + num2;
                    let arr1 = items.push(tmp13);
                    sum1 = num + 1;
                    sum = num3 + 1;
                    sum3 = num2;
                  }
                }
              }
            }
            let obj = { changeType: constants.REMOVE, index: null };
            let sum2 = num3 + num2;
            obj.index = sum2;
            let arr2 = items.push(obj);
            if (0 < sum2) {
              let tmp22 = items[sum2 - 1];
              let maybeRemove = tmp22.changeType !== constants.NOOP;
              if (!maybeRemove) {
                maybeRemove = tmp22.type !== constants2.MESSAGE;
              }
              if (!maybeRemove) {
                maybeRemove = self.maybeRemove;
              }
              if (!maybeRemove) {
                tmp22.changeType = constants.UPDATE;
              }
            }
            sum1 = num + 1;
            sum3 = num2 + 1;
            sum = num3;
          } else {
            let tmp9 = self.rows[num3];
            tmp9.changeType = constants.INSERT;
            tmp9.index = num3 + num2;
            let arr3 = items.push(tmp9);
            sum = num3 + 1;
            sum1 = num;
            sum3 = num2;
          }
        } else {
          obj = { changeType: constants.REMOVE, index: num3 + num2 };
          let arr4 = items.push(obj);
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
  },
};
