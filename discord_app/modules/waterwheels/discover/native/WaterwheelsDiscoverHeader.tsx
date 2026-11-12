// discord_app/modules/waterwheels/discover/native/WaterwheelsDiscoverHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2553 from "../../WaterwheelsUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CompassIcon from "../../../../design/components/Icon/native/redesign/generated/CompassIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  header: {
    height: nativeDefault.space.PX_64,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_4,
    borderBottomWidth: 1,
    borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  title: null,
};
const obj3 = {
  height: nativeDefault.space.PX_64,
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_4,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverHeader.tsx");

export default function WaterwheelsDiscoverHeader() {
  const tmp = closure_6();
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.title, children: null };
  items = [React4(CompassIcon.CompassIcon, { size: "refresh_sm", color: nativeDefault.colors.ICON_STRONG })];
  const obj4 = { variant: "heading-md/semibold", color: "text-strong", children: null };
  const intl = util.intl;
  obj4.children = intl.string(_modDef2553.v010oN);
  items[1] = React4(Text_Text.Heading, obj4);
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  return React4(View, obj);
}
