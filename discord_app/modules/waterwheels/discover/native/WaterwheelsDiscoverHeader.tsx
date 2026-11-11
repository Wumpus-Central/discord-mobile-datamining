// discord_app/modules/waterwheels/discover/native/WaterwheelsDiscoverHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2553 from "../../WaterwheelsUntranslated.messages.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import CompassIcon from "../../../../design/components/Icon/native/redesign/generated/CompassIcon.tsx";
import MenuIcon from "../../../../design/components/Icon/native/redesign/generated/MenuIcon.tsx";
import useHomeDrawerGesture from "../../../home_drawer/native/useHomeDrawerGesture.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function openHomeDrawer() {
  NavigationRouteUtils.setHomeDrawerState(true);
  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
  const intl = util.intl;
  AccessibilityAnnouncer.announce(intl.string(util.t.hfxfVb));
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  header: {
    height: nativeDefault.space.PX_64,
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_4,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    borderBottomWidth: 1,
    borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  title: null,
};
let obj3 = {
  height: nativeDefault.space.PX_64,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.title = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverHeader.tsx");

export default function WaterwheelsDiscoverHeader() {
  const tmp = closure_6();
  const obj2 = { style: tmp.header, children: null };
  let tmp6 = null;
  if (obj.useIsHomeDrawerEnabled()) {
    const obj3 = {
      variant: "tertiary",
      size: "sm",
      icon: React4(MenuIcon.MenuIcon, { size: "xs" }),
      accessibilityLabel: null,
      onPress: null,
    };
    const intl = util.intl;
    obj3.accessibilityLabel = intl.string(util.t["Rgk/2h"]);
    obj3.onPress = openHomeDrawer;
    tmp6 = React4(IconButton.IconButton, obj3);
  }
  items = [tmp6];
  const obj4 = { style: tmp.title, children: null };
  obj = useHomeDrawerGesture;
  const items1 = [React4(CompassIcon.CompassIcon, { size: "refresh_sm", color: nativeDefault.colors.ICON_STRONG })];
  const obj6 = { variant: "heading-md/semibold", color: "text-strong", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(_modDef2553.v010oN);
  items1[1] = React4(Text_Text.Heading, obj6);
  obj4.children = items1;
  items[1] = hasOwnProperty(View, obj4);
  obj2.children = items;
  return hasOwnProperty(View, obj2);
}
