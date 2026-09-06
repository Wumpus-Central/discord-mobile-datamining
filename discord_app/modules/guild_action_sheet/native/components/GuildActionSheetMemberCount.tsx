// === Module 13271: GuildActionSheetMemberCount ===

// Module 13271 (GuildActionSheetMemberCount)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let obj = { wrapper: { flexDirection: "row", alignItems: "center" }, dot: null, dotContainer: null, onlineDot: null, offlineDot: null, refreshText: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm };
obj.dot = size;
obj.dotContainer = { alignItems: "center", justifyContent: "center", marginRight: 4 };
obj = { backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj.onlineDot = obj;
const createStyles = { backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
obj.offlineDot = createStyles;
const PlatformUtils = fn(1116);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj.refreshText = { textAlignVertical: "center", lineHeight: num };
let closure_5 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx");

export default noop.memo(function MemberCount(arg0) {
  ({ type, count, color, dotContainerWidth } = arg0);
  if (null == count) {
    const intl2 = util.intl;
    if ("online" === type) {
      let v3DzP7x = util.t["3DzP7x"];
    } else {
      v3DzP7x = util.t["5SWsJX"];
    }
    intl2.string(v3DzP7x);
  } else {
    const intl = util.intl;
    if ("online" === type) {
      let etqpUG = util.t.PIikks;
    } else {
      etqpUG = util.t.etqpUG;
    }
    let obj = { count };
    const tmp12 = closure_5();
    obj = { style: tmp12.wrapper, children: null };
    const items = [tmp12.dotContainer, ];
    let tmp16 = null != dotContainerWidth;
    if (tmp16) {
      obj = { width: dotContainerWidth };
      tmp16 = obj;
    }
    const obj1 = { style: null, children: null };
    items[1] = tmp16;
    obj1.style = items;
    const items1 = [tmp12.dot, ];
    const obj2 = { style: null };
    items1[1] = "online" === type ? tmp12.onlineDot : tmp12.offlineDot;
    obj2.style = items1;
    obj1.children = React3(View, obj2);
    const items2 = [React3(View, obj1), ];
    if (color == null) {
      color = "text-default";
    }
    const obj3 = { variant: "text-sm/normal", color, lineClamp: 1, style: tmp12.refreshText, children: intl.format(etqpUG, obj) };
    items2[1] = React3(Text_Text.Text, obj3);
    obj.children = items2;
    return React4(View, obj);
  }
});