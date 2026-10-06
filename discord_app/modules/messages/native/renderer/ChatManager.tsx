// === Module 11167: ChatManager ===

// Module 11167 (ChatManager)
import _modDef1342 from "module_1342" /* 1342 */;
import getEmbeddedActivityKeyDefault from "getEmbeddedActivityKey" /* 11168 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7603 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Changeset: c2, RowType: c3 } = RowGeneratorConstants);
let obj = {
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
const result = size.fileFinishedImporting("modules/messages/native/renderer/ChatManager.tsx");
class ChatManager {
  constructor() {
    const obj = Object.create(new.target.prototype);
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
  getPreviousMessages() {
    return this._messages;
  }
  getPreviousRows() {
    return this._rows;
  }
  getBlocked(blocked) {
    const self = this;
    if (null != this._messages) {
      const _Array = Array;
      if (!Array.isArray(self._messages)) {
        let tmp4 = null != tmp3;
        if (tmp4) {
          tmp4 = !(self._messages._map[blocked.id].blocked || !blocked.blocked);
        }
        return tmp4;
      }
    }
    return false;
  }
  getIgnored(ignored) {
    const self = this;
    if (null != this._messages) {
      const _Array = Array;
      if (!Array.isArray(self._messages)) {
        let tmp4 = null != tmp3;
        if (tmp4) {
          tmp4 = !(self._messages._map[ignored.id].ignored || !ignored.ignored);
        }
        return tmp4;
      }
    }
    return false;
  }
  clear() {
    this._messages = null;
    this._rows = [];
    this.embeddedActivities = {};
  }
  finishUpdate(_messages, _rows) {
    this._messages = _messages;
    this._rows = _rows;
  }
  getLastRow() {
    const self = this;
    let tmp = null;
    if (null != this.rows) {
      tmp = null;
      if (self.rows.length > 0) {
        tmp = self.rows[self.rows.length - 1];
      }
    }
    return tmp;
  }
  setup(messages) {
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
  }
  determineChangeTypeForUploadProgress(compressionProgress) {
    let INSERT;
    const self = this;
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
        if (this.uploadProgressIds[compressionProgress.id].compressionProgress === compressionProgress.compressionProgress) {
          if (this.uploadProgressIds[compressionProgress.id].progress === compressionProgress.progress) {
            let UPDATE;
            if (this.uploadProgressIds[compressionProgress.id].currentSize === compressionProgress.currentSize) {
              UPDATE = constants.NOOP;
            }
            INSERT = UPDATE;
          }
        }
      }
      self.uploadProgressIds[compressionProgress.id] = compressionProgress;
      UPDATE = constants.UPDATE;
    } else {
      self.uploadProgressIds[compressionProgress.id] = compressionProgress;
      INSERT = constants.INSERT;
    }
    return INSERT;
  }
  determineChangeTypeForEmbeddedActivity(arg0) {
    let INSERT;
    const tmp = getEmbeddedActivityKeyDefault(arg0);
    this.embeddedActivities[tmp] = arg0;
    if (null != this.embeddedActivities[tmp]) {
      INSERT = constants.UPDATE;
    } else {
      INSERT = constants.INSERT;
    }
    return INSERT;
  }
  determineChangeType(forceRender) {
    let message;
    let updateMessageIds;
    ({ message, updateMessageIds } = forceRender);
    forceRender = forceRender.forceRender;
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
        let INSERT;
        let tmp = tmp13;
        if (null == self._messages._map[message.id]) {
          tmp = tmp13;
          if (null != message.nonce) {
            if (null != self._messages._map[message.nonce]) {
              INSERT = constants.UPDATE;
            }
            return INSERT;
          }
        }
        if (null != tmp) {
          if (!forceRender) {
            let hasItem;
            if (updateMessageIds != null) {
              hasItem = updateMessageIds.has(message.id);
            }
            if (!hasItem) {
              INSERT = _modDef1342(tmp, message) ? constants.NOOP : constants.UPDATE;
            }
          }
          INSERT = constants.UPDATE;
        }
        INSERT = constants.INSERT;
      }
    }
  }
  createRow(rowGenerator) {
    this.rowIndex = +this.rowIndex + 1;
    rowGenerator.index = +this.rowIndex;
    const rows = this.rows;
    rows.push(rowGenerator);
    return rowGenerator;
  }
  createChangeset() {
    let rows;
    let sum2;
    const self = this;
    if (null == this._messages) {
      rows = self.rows;
    } else {
      const items = [];
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      if (0 < self._rows.length) {
        while (true) {
          let sum;
          let sum1;
          let sum3;
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
                  sum = num3 + 1;
                  sum1 = num;
                  sum3 = num2;
                }
              }
              if (tmp13.type === tmp12.type) {
                if (tmp13.type !== constants2.SEPARATOR) {
                  if (tmp13.type !== constants2.LOADING) {
                    if (tmp13.changeType !== constants.NOOP) {
                      tmp13.index = num3 + num2;
                      let arr7 = items.push(tmp13);
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
                      let arr8 = items.push(tmp13);
                      sum1 = num + 1;
                      sum = num3 + 1;
                      sum3 = num2;
                    }
                  }
                }
              }
              let obj2 = { changeType: constants.REMOVE, index: sum2 };
              sum2 = num3 + num2;
              let arr9 = items.push(obj2);
              if (0 < sum2) {
                let tmp22 = items[sum2 - 1];
                let maybeRemove = tmp22.changeType !== constants.NOOP || tmp22.type !== constants2.MESSAGE || self.maybeRemove;
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
              let arr10 = items.push(tmp9);
              sum = num3 + 1;
              sum1 = num;
              sum3 = num2;
            }
          } else {
            let obj = { changeType: constants.REMOVE, index: num3 + num2 };
            let arr11 = items.push(obj);
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
  }
}
const prototype = ChatManager.prototype;

export default ChatManager;
export const MockChatManager = obj;