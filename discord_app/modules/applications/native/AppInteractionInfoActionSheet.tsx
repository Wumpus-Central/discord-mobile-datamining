// discord_app/modules/applications/native/AppInteractionInfoActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import ArrowLargeLeftIcon from "../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import BottomSheetTitleHeader from "../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserRecord from "../../../records/UserRecord.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { body: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default function AppInteractionInfoActionSheet(message) {
  message = message.message;
  ({ guildId, onBack } = message);
  dependencyMap = undefined;
  noop = undefined;
  let stateFromStores;
  let id;
  const items = [onBack];
  const interactionMetadata = message.interactionMetadata;
  let tmp3;
  const memo = noop.useMemo(() => {
    const obj = { title: null, leading: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.brw6oR);
    let tmpResult = null != onBack;
    if (tmpResult) {
      const obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(util.t["13/7kX"]);
      obj2.onPress = tmp4;
      obj2.children = React5(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" });
      tmpResult = React5(Pressables.PressableOpacity, obj2);
    }
    obj.leading = tmpResult;
    return React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  }, items);
  if (interactionMetadata != null) {
    tmp3 =
      interactionMetadata.authorizing_integration_owners[
        message(undefined, 5646).ApplicationIntegrationType.USER_INSTALL
      ];
  }
  dependencyMap = tmp3;
  const interactionMetadata2 = message.interactionMetadata;
  let tmp6;
  if (interactionMetadata2 != null) {
    tmp6 =
      interactionMetadata2.authorizing_integration_owners[
        message(undefined, 5646).ApplicationIntegrationType.GUILD_INSTALL
      ];
  }
  noop = tmp6;
  const interactionMetadata3 = message.interactionMetadata;
  id = undefined;
  if (interactionMetadata3 != null) {
    id = interactionMetadata3.user.id;
  }
  let obj = noop;
  let tmp = closure_9();
  const items1 = [id];
  stateFromStores = message(504).useStateFromStores(items1, () => UserStore.getUser(closure_2));
  let obj2 = message(504);
  const items2 = [stateFromStores];
  const stateFromStores1 = message(504).useStateFromStores(items2, () => GuildStore.getGuild(closure_3));
  const obj3 = message(504);
  const items3 = [id];
  const stateFromStores2 = message(504).useStateFromStores(items3, () => UserStore.getUser(id));
  id = stateFromStores2;
  const items4 = [stateFromStores, tmp3];
  const effect = obj.useEffect(() => {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != closure_2;
    }
    if (tmp) {
      const user = UserActionCreators.getUser(closure_2);
    }
  }, items4);
  let tmp16 = stateFromStores2;
  if (null == stateFromStores2) {
    const interactionMetadata4 = message.interactionMetadata;
    let user;
    if (interactionMetadata4 != null) {
      user = interactionMetadata4.user;
    }
    const tmp172 = new id(user);
    id = tmp172;
    tmp16 = tmp172;
  }
  if (null != stateFromStores1) {
    const obj5 = { icon: null, label: null, subLabel: null };
    const obj6 = { guild: stateFromStores1, size: tmp10(6951).GuildIconSizes.SMALL_32 };
    obj5.icon = closure_7(onBack(6951), obj6);
    obj5.label = stateFromStores1.name;
    let intl2 = tmp10(1114).intl;
    const obj7 = { application: message.author.username };
    obj5.subLabel = intl2.formatToPlainString(tmp10(1114).t.ShLXXB, obj7);
    let tmp25 = closure_7(tmp10(6969).TableRow, obj5);
    const tmp28 = onBack(6951);
  } else {
    tmp25 = null;
    if (null != stateFromStores) {
      const obj8 = { icon: null, label: null, subLabel: null, onPress: null, arrow: true };
      const obj9 = { user: stateFromStores, size: tmp10(1188).AvatarSizes.REFRESH_MEDIUM_32, guildId };
      obj8.icon = closure_7(tmp10(1188).Avatar, obj9);
      obj8.label = stateFromStores.username;
      let intl = tmp10(1114).intl;
      const obj10 = { application: message.author.username };
      obj8.subLabel = intl.formatToPlainString(tmp10(1114).t.ShLXXB, obj10);
      obj8.onPress = function onPress() {
        return showUserProfileActionSheetDefault({ userId: stateFromStores.id, channelId: message.channel_id });
      };
      tmp25 = closure_7(tmp10(6969).TableRow, obj8);
    }
  }
  const obj11 = { header: memo, bodyStyles: tmp.body, children: null };
  const items5 = [tmp25];
  let tmp29Result = null;
  if (null != tmp16) {
    const obj12 = { icon: null, label: null, subLabel: null, onPress: null, arrow: true };
    const obj13 = { user: tmp16, size: tmp10(1188).AvatarSizes.REFRESH_MEDIUM_32, guildId };
    obj12.icon = closure_7(tmp10(1188).Avatar, obj13);
    obj12.label = tmp16.username;
    const intl3 = tmp10(1114).intl;
    obj12.subLabel = intl3.string(tmp10(1114).t["04gxNg"]);
    obj12.onPress = function onPress() {
      return showUserProfileActionSheetDefault({ userId: id.id, channelId: message.channel_id });
    };
    tmp29Result = closure_7(tmp10(6969).TableRow, obj12);
  }
  items5[1] = tmp29Result;
  obj11.children = closure_8(message(7054).TableRowGroup, { hasIcons: true, children: items5 });
  return closure_7(message(5267).BottomSheet, obj11);
}
