// === Module 11341: VisibleMessagesWindowHandler ===

// Module 11341 (VisibleMessagesWindowHandler)
import RowGeneratorConstants from "RowGeneratorConstants" /* 7933 */;
import size from "module_2" /* 2 */;

const RowType = RowGeneratorConstants.RowType;
const result = size.fileFinishedImporting("modules/messages/native/VisibleMessagesWindowHandler.tsx");

export default function VisibleMessagesWindowHandler() {
  let data = Object.create(new.target.prototype);
  data.data = null;
  data.callback = null;
  data.setCallback = function setCallback(callback) {
    obj.callback = callback;
    if (null != obj.data) {
      obj.callback(obj.data);
    }
  };
  data.clearCallback = function clearCallback() {
    obj.callback = null;
    obj.data = null;
  };
  data.handleScrollPosition = function handleScrollPosition(arg0) {
    ({ rows, firstVisibleMessageRowIndex, lastVisibleMessageRowIndex } = arg0);
    if (null != data.callback) {
      let tmp2 = null;
      if (null != firstVisibleMessageRowIndex) {
        let diff = firstVisibleMessageRowIndex;
        tmp2 = null;
        if (firstVisibleMessageRowIndex >= 0) {
          while (true) {
            let tmp3 = rows[diff];
            let id;
            if (null != tmp3) {
              if ("rowType" in tmp3) {
                if (tmp3.rowType === RowType.MESSAGE) {
                  id = tmp3.message.id;
                }
              } else if (tmp3.type === RowType.MESSAGE) {
                let message = tmp3.message;
                let id1;
                if (message != null) {
                  id1 = message.id;
                }
                id = id1;
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
            let id2;
            if (null != tmp11) {
              if ("rowType" in tmp11) {
                if (tmp11.rowType === RowType.MESSAGE) {
                  id2 = tmp11.message.id;
                }
              } else if (tmp11.type === RowType.MESSAGE) {
                let message2 = tmp11.message;
                let id3;
                if (message2 != null) {
                  id3 = message2.id;
                }
                id2 = id3;
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
              let id4;
              if (null != tmp21) {
                if ("rowType" in tmp21) {
                  if (tmp21.rowType === RowType.MESSAGE) {
                    id4 = tmp21.message.id;
                  }
                } else if (tmp21.type === RowType.MESSAGE) {
                  let message3 = tmp21.message;
                  let id5;
                  if (message3 != null) {
                    id5 = message3.id;
                  }
                  id4 = id5;
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
      data = { topVisibleMessage: tmp2, middleVisibleMessage: tmp18, bottomVisibleMessage: tmp9 };
      data.data = data;
      data.callback(data.data);
    }
  };
  return data;
}.prototype;