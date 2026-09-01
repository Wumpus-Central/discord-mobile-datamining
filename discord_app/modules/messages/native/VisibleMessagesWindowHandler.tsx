// === Module 10978: Changeset ===

// Module 10978 (Changeset)
import set from "set" /* 2 */;
import Changeset from "Changeset" /* 7842 */;

const RowType = Changeset.RowType;
const result = set.fileFinishedImporting("modules/messages/native/VisibleMessagesWindowHandler.tsx");

export default function VisibleMessagesWindowHandler() {
  let obj = Object.create(new.target.prototype);
  obj.data = null;
  obj.callback = null;
  obj.setCallback = function setCallback(callback) {
    obj.callback = callback;
    if (null != obj.data) {
      obj.callback(obj.data);
    }
  };
  obj.clearCallback = function clearCallback() {
    obj.callback = null;
    obj.data = null;
  };
  obj.handleScrollPosition = function handleScrollPosition(arg0) {
    ({ rows, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex } = arg0);
    if (null != obj.callback) {
      let tmp2 = null;
      if (null != firstVisibleMessageRowIndex) {
        let diff = firstVisibleMessageRowIndex;
        tmp2 = null;
        if (firstVisibleMessageRowIndex >= 0) {
          while (true) {
            let tmp3 = rows[diff];
            let tmp4 = diff;
            let id;
            if (null != tmp3) {
              if ("rowType" in tmp3) {
                let tmp8 = obj;
                if (tmp3.rowType === obj.MESSAGE) {
                  id = tmp3.message.id;
                }
              } else {
                let tmp6 = obj;
                if (tmp3.type === obj.MESSAGE) {
                  let message = tmp3.message;
                  let id1;
                  if (message != null) {
                    id1 = message.id;
                  }
                  id = id1;
                }
              }
            }
            tmp2 = id;
            if (null != id) {
              break;
            } else {
              diff = diff - 1;
              tmp2 = null;
              if (diff < 0) {
                break;
              }
            }
          }
        }
      }
      let tmp9 = null;
      if (null != lastVisibleMessageRowIndex) {
        let tmp10 = lastVisibleMessageRowIndex;
        tmp9 = null;
        if (lastVisibleMessageRowIndex < rows.length) {
          while (true) {
            let tmp11 = rows[tmp10];
            let tmp12 = tmp10;
            let id2;
            if (null != tmp11) {
              if ("rowType" in tmp11) {
                let tmp16 = obj;
                if (tmp11.rowType === obj.MESSAGE) {
                  id2 = tmp11.message.id;
                }
              } else {
                let tmp14 = obj;
                if (tmp11.type === obj.MESSAGE) {
                  let message2 = tmp11.message;
                  let id3;
                  if (message2 != null) {
                    id3 = message2.id;
                  }
                  id2 = id3;
                }
              }
            }
            tmp9 = id2;
            if (null != id2) {
              break;
            } else {
              let sum = tmp10 + 1;
              tmp10 = sum;
              tmp9 = null;
              if (sum >= rows.length) {
                break;
              }
            }
          }
        }
      }
      let tmp18 = null;
      if (null != firstVisibleMessageRowIndex) {
        tmp18 = null;
        if (null != lastVisibleMessageRowIndex) {
          const _Math = Math;
          let sum1 = firstVisibleMessageRowIndex + Math.floor((lastVisibleMessageRowIndex - firstVisibleMessageRowIndex) / 2);
          tmp18 = null;
          if (sum1 < rows.length) {
            while (true) {
              let tmp21 = rows[sum1];
              let tmp22 = sum1;
              let id4;
              if (null != tmp21) {
                if ("rowType" in tmp21) {
                  let tmp26 = obj;
                  if (tmp21.rowType === obj.MESSAGE) {
                    id4 = tmp21.message.id;
                  }
                } else {
                  let tmp24 = obj;
                  if (tmp21.type === obj.MESSAGE) {
                    let message3 = tmp21.message;
                    let id5;
                    if (message3 != null) {
                      id5 = message3.id;
                    }
                    id4 = id5;
                  }
                }
              }
              tmp18 = id4;
              if (null != id4) {
                break;
              } else {
                let sum2 = sum1 + 1;
                sum1 = sum2;
                tmp18 = null;
                if (sum2 >= rows.length) {
                  break;
                }
              }
            }
          }
        }
      }
      obj = { topVisibleMessage: null, middleVisibleMessage: null, bottomVisibleMessage: null };
      obj[0] = tmp2;
      obj[1] = tmp18;
      obj[2] = tmp9;
      obj.data = obj;
      obj.callback(obj.data);
    }
  };
  return obj;
}.prototype;