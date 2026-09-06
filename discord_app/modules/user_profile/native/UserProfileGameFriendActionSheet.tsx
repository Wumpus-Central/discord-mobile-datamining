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
    const obj = { userDisplayName, userId, applicationId: application.id, gameName: application.name };
    const result = obj.confirmRemoveGameFriend(obj);
  }, items);
  let obj = {
    trailing: closure_10(application(userDisplayName[11]).XSmallIcon, {
      size: "md",
      color: "redesign-button-tertiary-text",
    }),
    label: null,
    onPress: null,
  };
  obj = { style: tmp.applicationNameWrapper, children: null };
  obj = { style: tmp.gameIcon, resizeMode: "contain", source: null, disableColor: true };
  let str = application.getIconURL(32);
  if (str == null) {
    str = "";
  }
  obj.source = { uri: str };
  const items1 = [
    closure_10(application(userDisplayName[12]).Icon, obj, application.id),
    closure_10(application(userDisplayName[13]).Text, {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: application.name,
    }),
  ];
  obj.children = items1;
  obj.label = closure_11(closure_7, obj);
  obj.onPress = callback;
  return closure_10(application(userDisplayName[10]).ActionSheetRow, obj, application.id);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
const createStyles = {
  applicationNameWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 12 },
  gameIcon: null,
};
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
createStyles.gameIcon = size;
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendActionSheet.tsx");

export default function UserProfileGameFriendActionSheet(user) {
  user = user.user;
  let memo;
  _slicedToArray = undefined;
  noop = undefined;
  ({ guildId, channelId } = user);
  let obj = user(memo[14]);
  const gameFriendsForUser = obj.useGameFriendsForUser(user.id);
  const items = [gameFriendsForUser];
  memo = noop.useMemo(() => gameFriendsForUser.map((applicationId) => applicationId.applicationId), items);
  let obj1 = gameFriendsForUser(memo[16]);
  asyncGeneratorStep = obj1.useName(guildId, channelId, user);
  let first = _slicedToArray(
    noop.useState(() => {
      if (!RelationshipStore.isFriend(user.id)) {
        if (!obj.isBlockedOrIgnored(tmp.id)) {
          const relationshipType = obj.getRelationshipType(tmp.id);
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
  const arr2 = gameFriendsForUser(memo[15])(memo);
  [tmp7, c4] = _slicedToArray(noop.useState(false), 2);
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  noop = tmp8[1];
  const items1 = [user.id];
  const items2 = [memo];
  const callback = noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (v32 === 2) {
        v32 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              v32(true);
              closure_5(true);
              c3 = 2;
              let obj2 = v3(tmp34[17]);
              const obj1 = { userId: user.id, context: { location: "User Profile Action Sheet" } };
              v3 = 3;
              v32 = 1;
              obj2 = { value: null, done: false };
              obj2.value = obj2.addRelationship(obj1);
              return obj2;
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
              obj = tmp4(tmp34[18]);
              const result = obj.presentAddedFriendToast();
              c3 = 1;
            }
            c3 = 0;
            closure_128_5(false);
            v32 = 3;
            const obj3 = { value, done: true };
            return obj3;
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
  obj = { header: null, children: null };
  obj = { title: null };
  const intl = user(memo[22]).intl;
  obj.title = intl.string(user(memo[22]).t["Uv/eTx"]);
  obj.header = closure_10(user(memo[21]).BottomSheetTitleHeader, obj);
  obj1 = { title: null, hasIcons: false, children: null };
  const intl2 = user(memo[22]).intl;
  obj1.title = intl2.string(user(memo[22]).t.YpCiMt);
  obj1.children = arr2.map((application) => {
    let tmp = null != application;
    if (tmp) {
      const obj = { application, userDisplayName, userId: user.id };
      tmp = closure_2_10(GameFriendApplicationRow, obj, application.id);
    }
    return tmp;
  });
  const items3 = [closure_10(user(memo[10]).ActionSheetRow.Group, obj1)];
  if (first) {
    let obj2 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp(tmp2[22]).intl;
    obj2.title = intl3.string(tmp(tmp2[22]).t.GbsGCp);
    let obj3 = { label: null, subLabel: null, onPress: null, disabled: null, trailing: null };
    const intl4 = tmp(tmp2[22]).intl;
    obj3.label = intl4.string(tmp(tmp2[22]).t.LAcY7m);
    const intl5 = tmp(tmp2[22]).intl;
    obj3.subLabel = intl5.string(tmp(tmp2[22]).t.YTvOUx);
    obj3.onPress = callback;
    obj3.disabled = tmp7;
    let tmp12Result = null;
    if (tmp8[0]) {
      tmp12Result = tmp12(closure_6, {});
    }
    obj3.trailing = tmp12Result;
    obj2.children = tmp12(tmp(tmp2[10]).ActionSheetRow, obj3);
    first = tmp12(tmp(tmp2[10]).ActionSheetRow.Group, obj2);
  }
  items3[1] = first;
  obj.children = items3;
  return closure_11(user(memo[20]).ActionSheet, obj);
}
