// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  headerContainer: {
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  headerButtonContainer: { flexDirection: "row", alignSelf: "center", minWidth: 60 },
  headerButtonStart: { alignItems: "flex-start" },
  headerButtonEnd: { alignItems: "flex-end" },
  titleContainer: { flex: 1 },
};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx",
);

export default function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = closure_8();
  const obj2 = { top: true, style: tmp.headerContainer, children: null };
  const obj3 = { style: null, accessibilityRole: "button", onPress: onClose, children: null };
  const items = [,];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  obj3.style = items;
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj4 = { variant: "text-md/medium", color: "interactive-text-active", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["ETE/oC"]);
  obj3.children = timestampProducer(Text_Text.Text, obj4);
  const items1 = [timestampProducer(TouchableHitBoxDefault, obj3), ,];
  items1[1] = timestampProducer(View, {
    style: tmp.titleContainer,
    children: timestampProducer(NavigatorHeader.NavigatorHeader, {
      title,
      subtitle: _slicedToArray(obj.useName(listingId), 1)[0],
    }),
  });
  const obj6 = { style: null, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: null };
  const items2 = [,];
  ({ headerButtonContainer: arr3[0], headerButtonEnd: arr3[1] } = tmp);
  obj6.style = items2;
  const obj5 = {
    style: tmp.titleContainer,
    children: timestampProducer(NavigatorHeader.NavigatorHeader, {
      title,
      subtitle: _slicedToArray(obj.useName(listingId), 1)[0],
    }),
  };
  let str = "text-muted";
  if (canSave) {
    str = "interactive-text-active";
  }
  const obj7 = { variant: "text-md/medium", color: str, children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t["R3BPH+"]);
  obj6.children = timestampProducer(Text_Text.Text, obj7);
  items1[2] = timestampProducer(TouchableHitBoxDefault, obj6);
  obj2.children = items1;
  return React5(common_SafeAreaView.SafeAreaPaddingView, obj2);
}
