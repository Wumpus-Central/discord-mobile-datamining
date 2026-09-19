// discord_app/modules/user_profile/native/UserProfileGameFriendActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
function GameFriendApplicationRow(application) {
  application = application.application;
  const userId = application.userId;
  const userDisplayName = application.userDisplayName;
  const tmp = closure_12();
  const items = [, , ,];
  ({ id: arr[0], name: arr[1] } = application);
  items[2] = userDisplayName;
  items[3] = userId;
  const callback = noop.useCallback(() => {
    const result = UserProfileAlertUtils.confirmRemoveGameFriend({
      userDisplayName,
      userId,
      applicationId: application.id,
      gameName: application.name,
    });
  }, items);
  const obj = {
    trailing: closure_10(application(userDisplayName[11]).XSmallIcon, {
      size: "md",
      color: "redesign-button-tertiary-text",
    }),
    label: null,
    onPress: null,
  };
  const obj2 = { style: tmp.applicationNameWrapper, children: null };
  const obj3 = { style: tmp.gameIcon, resizeMode: "contain", source: null, disableColor: true };
  let str = application.getIconURL(32);
  if (str == null) {
    str = "";
  }
  obj3.source = { uri: str };
  const items1 = [
    closure_10(application(userDisplayName[12]).Icon, obj3, application.id),
    closure_10(application(userDisplayName[13]).Text, {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: application.name,
    }),
  ];
  obj2.children = items1;
  obj.label = closure_11(closure_7, obj2);
  obj.onPress = callback;
  return closure_10(application(userDisplayName[10]).ActionSheetRow, obj, application.id);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  applicationNameWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 12 },
  gameIcon: null,
};
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.gameIcon = size;
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendActionSheet.tsx");

export default function UserProfileGameFriendActionSheet(user) {
  user = user.user;
  let memo;
  _slicedToArray = undefined;
  noop = undefined;
  ({ guildId, channelId } = user);
  const gameFriendsForUser = user(memo[14]).useGameFriendsForUser(user.id);
  const items = [gameFriendsForUser];
  memo = noop.useMemo(() => gameFriendsForUser.map((applicationId) => applicationId.applicationId), items);
  let obj = user(memo[14]);
  const arr2 = gameFriendsForUser(memo[15])(memo);
  asyncGeneratorStep = gameFriendsForUser(memo[16]).useName(guildId, channelId, user);
  let first = _slicedToArray(
    noop.useState(() => {
      if (!RelationshipStore.isFriend(user.id)) {
        if (!RelationshipStore.isBlockedOrIgnored(user.id)) {
          const relationshipType = RelationshipStore.getRelationshipType(user.id);
          return (
            relationshipType !== RelationshipTypes.PENDING_OUTGOING &&
            relationshipType !== RelationshipTypes.PENDING_INCOMING
          );
        }
      }
      return false;
    }),
    1,
  )[0];
  let obj2 = gameFriendsForUser(memo[16]);
  [tmp7, c4] = noop.useState(false);
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  noop = tmp8[1];
  const items1 = [user.id];
  const items2 = [memo];
  const callback = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (v32 === 2) {
        v32 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v32 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 === 2) {
              v32 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              v32(true);
              closure_5(true);
              c3 = 2;
              const obj5 = { userId: user.id, context: { location: "User Profile Action Sheet" } };
              v3 = 3;
              v32 = 1;
              const obj6 = { value: v3(tmp34[17]).addRelationship(obj5), done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_128_5(false);
            throw tmp34;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_4(false);
              c3 = 0;
              closure_128_5(false);
              v32 = 3;
            } else if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 !== 2) {
              const result = tmp4(tmp34[18]).presentAddedFriendToast();
              c3 = 1;
              const obj = tmp4(tmp34[18]);
            }
            c3 = 0;
            closure_128_5(false);
            v32 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } catch (tmp34) {
          if (tmp5 === c3) {
            v32 = tmp3;
            throw tmp34;
          } else if (tmp2 === tmp36) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }),
    items1,
  );
  const effect = noop.useEffect(() => {
    if (0 === memo.length) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items2);
  const obj3 = { header: null, children: null };
  let obj4 = { title: null };
  const intl = user(memo[22]).intl;
  obj4.title = intl.string(user(memo[22]).t["Uv/eTx"]);
  obj3.header = closure_10(user(memo[21]).BottomSheetTitleHeader, obj4);
  let obj5 = { title: null, hasIcons: false, children: null };
  const intl2 = user(memo[22]).intl;
  obj5.title = intl2.string(user(memo[22]).t.YpCiMt);
  obj5.children = arr2.map((application) => {
    let tmp = null != application;
    if (tmp) {
      const obj = { application, userDisplayName, userId: user.id };
      tmp = closure_2_10(GameFriendApplicationRow, obj, application.id);
    }
    return tmp;
  });
  const items3 = [closure_10(user(memo[10]).ActionSheetRow.Group, obj5)];
  if (first) {
    let obj6 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp(tmp2[22]).intl;
    obj6.title = intl3.string(tmp(tmp2[22]).t.GbsGCp);
    let obj7 = { label: null, subLabel: null, onPress: null, disabled: null, trailing: null };
    const intl4 = tmp(tmp2[22]).intl;
    obj7.label = intl4.string(tmp(tmp2[22]).t.LAcY7m);
    const intl5 = tmp(tmp2[22]).intl;
    obj7.subLabel = intl5.string(tmp(tmp2[22]).t.YTvOUx);
    obj7.onPress = callback;
    obj7.disabled = tmp7;
    let tmp12Result = null;
    if (tmp8[0]) {
      tmp12Result = closure_10(closure_6, {});
    }
    obj7.trailing = tmp12Result;
    obj6.children = closure_10(tmp(tmp2[10]).ActionSheetRow, obj7);
    first = closure_10(tmp(tmp2[10]).ActionSheetRow.Group, obj6);
  }
  items3[1] = first;
  obj3.children = items3;
  return closure_11(user(memo[20]).ActionSheet, obj3);
}
