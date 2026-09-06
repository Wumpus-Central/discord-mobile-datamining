// === Module 12336: GuildDirectoryPlaceholderRow ===

// Module 12336 (GuildDirectoryPlaceholderRow)
import nativeDefault from "native" /* 576 */;
import getChatPlaceholderRowWidthDefault from "getChatPlaceholderRowWidth" /* 12337 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let obj = { row: { flexDirection: "row", padding: 16 }, rowInner: { flex: 1 }, placeholderAvatar: null, placeholderText: null, placeholderBody: null };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden", marginRight: 16, backgroundColor: fn(5441).DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj.placeholderAvatar = size;
obj = { height: 15, borderRadius: 5, backgroundColor: fn(5441).DARK_PRIMARY_500_LIGHT_PRIMARY_230 };
obj.placeholderText = obj;
obj.placeholderBody = { width: "100%", marginTop: 10 };
let closure_5 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryPlaceholderRow.tsx");

export default noop.memo(() => {
  const tmp = closure_5();
  closure_0 = tmp;
  const sum = Math.floor(2 * Math.random()) + 2;
  closure_1 = Math.floor(10 * Math.random());
  let obj = { style: tmp.row, children: null };
  obj = { style: tmp.placeholderAvatar };
  const sum1 = Math.floor(50 * Math.random()) + 10;
  let items = [closure_3(View, obj), ];
  obj = { style: tmp.rowInner, children: null };
  const obj1 = { style: null };
  const items1 = [tmp.placeholderText, { width: "" + sum1 + "%" }];
  obj1.style = items1;
  const items2 = [closure_3(View, obj1), ];
  const array = new Array(sum);
  const obj2 = { width: "" + sum1 + "%" };
  items2[1] = array.fill(undefined).map((item, index) => {
    let obj = { style: null };
    const items = [, , ];
    ({ placeholderText: arr[0], placeholderBody: arr[1] } = closure_0);
    obj = { width: "" + getChatPlaceholderRowWidthDefault(closure_1 + index) + "%" };
    items[2] = obj;
    obj.style = items;
    return React3(View, obj, index);
  });
  obj.children = items2;
  items[1] = closure_4(View, obj);
  obj.children = items;
  return closure_4(View, obj);
});