// === Module 11978: GuildDirectoryPlaceholderRow ===

// Module 11978 (GuildDirectoryPlaceholderRow)
import nativeDefault from "native" /* 587 */;
import getChatPlaceholderRowWidthDefault from "getChatPlaceholderRowWidth" /* 11979 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj = { row: { flexDirection: "row", padding: 16 }, rowInner: { flex: 1 }, placeholderAvatar: null, placeholderText: null, placeholderBody: null };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden", marginRight: 16, backgroundColor: fn(5627).DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj.placeholderAvatar = size;
obj.placeholderText = { height: 15, borderRadius: 5, backgroundColor: fn(5627).DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj.placeholderBody = { width: "100%", marginTop: 10 };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { height: 15, borderRadius: 5, backgroundColor: fn(5627).DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(16);
  const tmp2 = closure_6();
  _require = tmp2;
  const sum = Math.floor(2 * Math.random()) + 2;
  closure_1 = Math.floor(10 * Math.random());
  const sum1 = Math.floor(50 * Math.random()) + 10;
  if (cResult[0] !== tmp2.placeholderAvatar) {
    const obj2 = { style: tmp2.placeholderAvatar };
    const tmp8 = closure_4(View, obj2);
    cResult[0] = tmp2.placeholderAvatar;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { width: null };
    const _HermesInternal = HermesInternal;
    obj3.width = "" + sum1 + "%";
    cResult[2] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp2.placeholderText) {
    const obj4 = { style: null };
    let items = [tmp2.placeholderText, tmp9];
    obj4.style = items;
    const tmp13 = closure_4(View, obj4);
    cResult[3] = tmp2.placeholderText;
    cResult[4] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === tmp2.placeholderBody) {
    if (cResult[6] === tmp2.placeholderText) {
      let tmp14 = cResult[7];
    }
    if (cResult[8] === tmp2.rowInner) {
      if (cResult[9] === tmp10) {
        if (cResult[10] === tmp14) {
          let tmp16 = cResult[11];
        }
        if (cResult[12] === tmp2.row) {
          if (cResult[13] === tmp5) {
            if (cResult[14] === tmp16) {
              let tmp20 = cResult[15];
            }
            return tmp20;
          }
        }
        const obj5 = { style: tmp2.row, children: null };
        const items1 = [tmp5, tmp16];
        obj5.children = items1;
        const tmp23 = closure_5(View, obj5);
        cResult[12] = tmp2.row;
        cResult[13] = tmp5;
        cResult[14] = tmp16;
        cResult[15] = tmp23;
        tmp20 = tmp23;
      }
    }
    const obj6 = { style: tmp2.rowInner, children: null };
    const items2 = [tmp10, tmp14];
    obj6.children = items2;
    const tmp19 = closure_5(View, obj6);
    cResult[8] = tmp2.rowInner;
    cResult[9] = tmp10;
    cResult[10] = tmp14;
    cResult[11] = tmp19;
    tmp16 = tmp19;
  }
  const array = new Array(sum);
  let obj = require("c");
  const mapped = array.fill(undefined).map((item, index) => {
    const obj = { style: null };
    const items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = closure_0);
    items[2] = { width: "" + getChatPlaceholderRowWidthDefault(closure_1 + index) + "%" };
    obj.style = items;
    return React4(View, obj, index);
  });
  cResult[5] = tmp2.placeholderBody;
  cResult[6] = tmp2.placeholderText;
  cResult[7] = mapped;
  tmp14 = mapped;
  const fillResult = array.fill(undefined);
}) : (() => {
  const tmp = closure_6();
  closure_0 = tmp;
  const sum = Math.floor(2 * Math.random()) + 2;
  closure_1 = Math.floor(10 * Math.random());
  let obj = { style: tmp.row, children: null };
  const sum1 = Math.floor(50 * Math.random()) + 10;
  let items = [closure_4(View, { style: tmp.placeholderAvatar }), ];
  const obj3 = { style: tmp.rowInner, children: null };
  const obj4 = { style: null };
  const items1 = [tmp.placeholderText, { width: "" + sum1 + "%" }];
  obj4.style = items1;
  const items2 = [closure_4(View, obj4), ];
  const array = new Array(sum);
  const obj2 = { style: tmp.placeholderAvatar };
  const obj5 = { width: "" + sum1 + "%" };
  items2[1] = array.fill(undefined).map((item, index) => {
    const obj = { style: null };
    const items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = closure_0);
    items[2] = { width: "" + getChatPlaceholderRowWidthDefault(closure_1 + index) + "%" };
    obj.style = items;
    return React4(View, obj, index);
  });
  obj3.children = items2;
  items[1] = closure_5(View, obj3);
  obj.children = items;
  return closure_5(View, obj);
}));