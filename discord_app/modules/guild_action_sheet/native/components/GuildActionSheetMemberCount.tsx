// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let obj = {
  wrapper: { flexDirection: "row", alignItems: "center" },
  dot: null,
  dotContainer: null,
  onlineDot: null,
  offlineDot: null,
  refreshText: null,
};
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm };
obj.dot = size;
obj.dotContainer = { alignItems: "center", justifyContent: "center", marginRight: 4 };
obj.onlineDot = { backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
let obj3 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj.offlineDot = { backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
const PlatformUtils = fn(1365);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj.refreshText = { textAlignVertical: "center", lineHeight: num };
let closure_5 = createStyles.createStyles(obj);
let obj4 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx",
);

export default noop.memo(function MemberCount(arg0) {
  ({ type, count, color, dotContainerWidth, textVariant } = arg0);
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
    const obj = { count };
    const tmp12 = closure_5();
    const obj2 = { style: tmp12.wrapper, children: null };
    const items = [tmp12.dotContainer];
    let tmp16 = null != dotContainerWidth;
    if (tmp16) {
      const obj3 = { width: dotContainerWidth };
      tmp16 = obj3;
    }
    const obj4 = { style: null, children: null };
    items[1] = tmp16;
    obj4.style = items;
    const items1 = [tmp12.dot];
    const obj5 = { style: null };
    items1[1] = "online" === type ? tmp12.onlineDot : tmp12.offlineDot;
    obj5.style = items1;
    obj4.children = React3(View, obj5);
    const items2 = [React3(View, obj4)];
    if (textVariant == null) {
      textVariant = "text-sm/normal";
    }
    const obj6 = { variant: textVariant, color: null, lineClamp: 1, style: null, children: null };
    if (color == null) {
      color = "text-default";
    }
    obj6.color = color;
    obj6.style = tmp12.refreshText;
    obj6.children = intl.format(etqpUG, obj);
    items2[1] = React3(Text_Text.Text, obj6);
    obj2.children = items2;
    return React4(View, obj2);
  }
});
