// discord_app/modules/user_profile/native/UserProfileGameFriendActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const RelationshipTypes = fn(1085).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  applicationNameWrapper: { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 12 },
  gameIcon: null,
};
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.gameIcon = size;
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (application) => {
      const cResult = application(userDisplayName[10]).c(24);
      application = application.application;
      const userId = application.userId;
      userDisplayName = application.userDisplayName;
      const tmp4 = closure_12();
      if (cResult[0] === application.id) {
        if (cResult[1] === application.name) {
          if (cResult[2] === userDisplayName) {
            if (cResult[3] === userId) {
              let tmp5 = cResult[4];
            }
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp9 = closure_10(tmp(tmp2[12]).XSmallIcon, { size: "md", color: "redesign-button-tertiary-text" });
              cResult[5] = tmp9;
              let tmp7 = tmp9;
            } else {
              tmp7 = cResult[5];
            }
            if (cResult[6] !== application) {
              let str2 = application.getIconURL(32);
              if (str2 == null) {
                str2 = "";
              }
              cResult[6] = application;
              cResult[7] = str2;
              let tmp10 = str2;
            } else {
              tmp10 = cResult[7];
            }
            if (cResult[8] !== tmp10) {
              const obj2 = { uri: tmp10 };
              cResult[8] = tmp10;
              cResult[9] = obj2;
              let tmp12 = obj2;
            } else {
              tmp12 = cResult[9];
            }
            if (cResult[10] === application.id) {
              if (cResult[11] === tmp4.gameIcon) {
                if (cResult[12] === tmp12) {
                  let tmp13 = cResult[13];
                }
                if (cResult[14] !== application.name) {
                  const obj3 = {
                    variant: "text-md/semibold",
                    color: "mobile-text-heading-primary",
                    children: application.name,
                  };
                  const tmp18 = closure_10(tmp(tmp2[14]).Text, obj3);
                  cResult[14] = application.name;
                  cResult[15] = tmp18;
                  let tmp16 = tmp18;
                } else {
                  tmp16 = cResult[15];
                }
                if (cResult[16] === tmp4.applicationNameWrapper) {
                  if (cResult[17] === tmp13) {
                    if (cResult[18] === tmp16) {
                      let tmp19 = cResult[19];
                    }
                    if (cResult[20] === application.id) {
                      if (cResult[21] === tmp5) {
                        if (cResult[22] === tmp19) {
                          let tmp23 = cResult[23];
                        }
                        return tmp23;
                      }
                    }
                    const obj4 = { trailing: tmp7, label: tmp19, onPress: tmp5 };
                    const tmp25 = closure_10(tmp(tmp2[15]).ActionSheetRow, obj4, application.id);
                    cResult[20] = application.id;
                    cResult[21] = tmp5;
                    cResult[22] = tmp19;
                    cResult[23] = tmp25;
                    tmp23 = tmp25;
                  }
                }
                const obj5 = { style: tmp4.applicationNameWrapper, children: null };
                const items = [tmp13, tmp16];
                obj5.children = items;
                const tmp22 = closure_11(closure_7, obj5);
                cResult[16] = tmp4.applicationNameWrapper;
                cResult[17] = tmp13;
                cResult[18] = tmp16;
                cResult[19] = tmp22;
                tmp19 = tmp22;
              }
            }
            const obj6 = { style: tmp4.gameIcon, resizeMode: "contain", source: tmp12, disableColor: true };
            const tmp15 = closure_10(tmp(tmp2[13]).Icon, obj6, application.id);
            cResult[10] = application.id;
            cResult[11] = tmp4.gameIcon;
            cResult[12] = tmp12;
            cResult[13] = tmp15;
            tmp13 = tmp15;
          }
        }
      }
      const fn = function n() {
        const result = UserProfileAlertUtils.confirmRemoveGameFriend({
          userDisplayName,
          userId,
          applicationId: application.id,
          gameName: application.name,
        });
      };
      cResult[0] = application.id;
      cResult[1] = application.name;
      cResult[2] = userDisplayName;
      cResult[3] = userId;
      cResult[4] = fn;
      tmp5 = fn;
      const obj = application(userDisplayName[10]);
    }
  : (application) => {
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
        trailing: closure_10(application(userDisplayName[12]).XSmallIcon, {
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
        closure_10(application(userDisplayName[13]).Icon, obj3, application.id),
        closure_10(application(userDisplayName[14]).Text, {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: application.name,
        }),
      ];
      obj2.children = items1;
      obj.label = closure_11(closure_7, obj2);
      obj.onPress = callback;
      return closure_10(application(userDisplayName[15]).ActionSheetRow, obj, application.id);
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileGameFriendActionSheet.tsx");

export default function UserProfileGameFriendActionSheet(user) {
  user = user.user;
  let memo;
  _slicedToArray = undefined;
  noop = undefined;
  ({ guildId, channelId } = user);
  const gameFriendsForUser = user(memo[16]).useGameFriendsForUser(user.id);
  const items = [gameFriendsForUser];
  memo = noop.useMemo(() => gameFriendsForUser.map((applicationId) => applicationId.applicationId), items);
  let obj = user(memo[16]);
  const arr2 = gameFriendsForUser(memo[17])(memo);
  asyncGeneratorStep = gameFriendsForUser(memo[18]).useName(guildId, channelId, user);
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
  let obj2 = gameFriendsForUser(memo[18]);
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
          return { value: "IconComponent", done: null };
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
              const obj6 = { value: v3(tmp34[19]).addRelationship(obj5), done: false };
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
              const result = tmp4(tmp34[20]).presentAddedFriendToast();
              c3 = 1;
              const obj = tmp4(tmp34[20]);
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
  const intl = user(memo[24]).intl;
  obj4.title = intl.string(user(memo[24]).t["Uv/eTx"]);
  obj3.header = closure_10(user(memo[23]).BottomSheetTitleHeader, obj4);
  let obj5 = { title: null, hasIcons: false, children: null };
  const intl2 = user(memo[24]).intl;
  obj5.title = intl2.string(user(memo[24]).t.YpCiMt);
  obj5.children = arr2.map((application) => {
    let tmp = null != application;
    if (tmp) {
      const obj = { application, userDisplayName, userId: user.id };
      tmp = v65535(closure_13, obj, application.id);
    }
    return tmp;
  });
  const items3 = [closure_10(user(memo[15]).ActionSheetRow.Group, obj5)];
  if (first) {
    let obj6 = { title: null, hasIcons: false, children: null };
    const intl3 = tmp(tmp2[24]).intl;
    obj6.title = intl3.string(tmp(tmp2[24]).t.GbsGCp);
    let obj7 = { label: null, subLabel: null, onPress: null, disabled: null, trailing: null };
    const intl4 = tmp(tmp2[24]).intl;
    obj7.label = intl4.string(tmp(tmp2[24]).t.LAcY7m);
    const intl5 = tmp(tmp2[24]).intl;
    obj7.subLabel = intl5.string(tmp(tmp2[24]).t.YTvOUx);
    obj7.onPress = callback;
    obj7.disabled = tmp7;
    let tmp12Result = null;
    if (tmp8[0]) {
      tmp12Result = closure_10(closure_6, {});
    }
    obj7.trailing = tmp12Result;
    obj6.children = closure_10(tmp(tmp2[15]).ActionSheetRow, obj7);
    first = closure_10(tmp(tmp2[15]).ActionSheetRow.Group, obj6);
  }
  items3[1] = first;
  obj3.children = items3;
  return closure_11(user(memo[22]).ActionSheet, obj3);
}
