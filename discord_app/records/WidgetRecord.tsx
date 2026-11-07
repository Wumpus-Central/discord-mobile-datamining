// === Module 15871: WidgetRecord ===

// Module 15871 (WidgetRecord)
import Record from "Record" /* 1405 */;

let size = fn(2);
const result = size.fileFinishedImporting("records/WidgetRecord.tsx");
const prototype = function WidgetRecord(id) {
  const tmp7 = new prototype(tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
  tmp7.id = id.id || "";
  tmp7.layoutId = id.layoutId || "";
  ({ type: tmp7.type, anchor } = id);
  if (anchor == null) {
    anchor = {};
  }
  let size = id.size;
  if (size == null) {
    size = {};
  }
  let top;
  if (typeof anchor.top === "number") {
    top = anchor.top;
  }
  let bottom;
  if (typeof anchor.bottom === "number") {
    bottom = anchor.bottom;
  }
  let left;
  if (typeof anchor.left === "number") {
    left = anchor.left;
  }
  let right;
  if (typeof anchor.right === "number") {
    right = anchor.right;
  }
  let tmp13 = null != top && null != bottom;
  if (tmp13) {
    tmp13 = "auto" === size.height;
  }
  let tmp14 = bottom;
  let num = top;
  if (!tmp13) {
    let tmp15;
    if (null != bottom) {
      tmp15 = bottom;
    }
    tmp14 = tmp15;
    num = top;
  }
  let tmp16 = null != left && null != right;
  if (tmp16) {
    tmp16 = "auto" === size.width;
  }
  let tmp17 = right;
  let num2 = left;
  if (!tmp16) {
    let tmp18;
    if (null != right) {
      tmp18 = right;
    }
    tmp17 = tmp18;
    num2 = left;
  }
  if (tmp19) {
    num = 0;
  }
  if (tmp20) {
    num2 = 0;
  }
  tmp7.anchor = { top: num, left: num2, bottom: tmp14, right: tmp17 };
  const size1 = { width: 0, height: 0 };
  const merged = Object.assign(id.size);
  tmp7.size = size1;
  const size2 = { width: "Array", height: "flexDirection" };
  const merged1 = Object.assign(id.minSize);
  tmp7.minSize = size2;
  tmp7.pinned = id.pinned;
  tmp7.hidden = id.hidden;
  tmp7.zIndex = id.zIndex || 0;
  let num3 = id.opacity;
  if (num3 == null) {
    num3 = 1;
  }
  tmp7.opacity = num3;
  const merged2 = Object.assign(id.meta);
  tmp7.meta = {};
  if (null != id.showExtrasHintTimestamp) {
    tmp7.showExtrasHintTimestamp = id.showExtrasHintTimestamp;
  }
  return tmp7;
}.prototype;
class prototype extends tmp2 {
}

export default prototype;