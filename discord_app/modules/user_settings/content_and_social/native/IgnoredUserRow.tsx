// discord_app/modules/user_settings/content_and_social/native/IgnoredUserRow.tsx
import RelationshipActionCreatorsDefault from "../../../../actions/RelationshipActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
function IgnoredUserRow(userRecord) {
  userRecord = userRecord.userRecord;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7410)().analyticsLocations;
  const intl = userRecord(1113).intl;
  let username = userRecord.globalName;
  if (username == null) {
    username = userRecord.username;
  }
  function handleOpenProfile() {
    showUserProfileActionSheetDefault({ userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations });
  }
  const formatToPlainStringResult = intl.formatToPlainString(userRecord(1113).t.e3qAIz, { name: username });
  let obj = {
    accessible: false,
    icon: jsx(userRecord(1187).Avatar, {
      source: userRecord.getAvatarSource(undefined),
      size: userRecord(1187).AvatarSizes.REFRESH_MEDIUM_32,
    }),
    label: null,
    onPress: handleOpenProfile,
    trailing: null,
  };
  const obj3 = {
    userRecord,
    accessibilityActions: null,
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("activate" === actionName) {
        const obj2 = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      } else if ("unignore" === actionName) {
        RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
      }
    },
  };
  items = [{ name: "activate" }, { name: "unignore", label: formatToPlainStringResult }];
  obj3.accessibilityActions = items;
  obj.label = jsx(userRecord(16966).RestrictedUserRowLabel, {
    userRecord,
    accessibilityActions: null,
    onAccessibilityAction: function handleAccessibilityAction(nativeEvent) {
      const actionName = nativeEvent.nativeEvent.actionName;
      if ("activate" === actionName) {
        const obj2 = { userId: userRecord.id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      } else if ("unignore" === actionName) {
        RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
      }
    },
  });
  const obj4 = { size: "sm", variant: "secondary", text: null, accessibilityLabel: null, onPress: null };
  const intl2 = tmp2(1113).intl;
  obj4.text = intl2.string(userRecord(1113).t["3GZE6a"]);
  obj4.accessibilityLabel = formatToPlainStringResult;
  obj4.onPress = function onPress() {
    RelationshipActionCreatorsDefault.unignoreUser(userRecord.id, "ignored-users-list-mobile");
  };
  obj.trailing = jsx(userRecord(5788).Button, {
    size: "sm",
    variant: "secondary",
    text: null,
    accessibilityLabel: null,
    onPress: null,
  });
  return jsx(userRecord(7063).TableRow, {
    accessible: false,
    icon: jsx(userRecord(1187).Avatar, {
      source: userRecord.getAvatarSource(undefined),
      size: userRecord(1187).AvatarSizes.REFRESH_MEDIUM_32,
    }),
    label: null,
    onPress: handleOpenProfile,
    trailing: null,
  });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUserRow.tsx");

export default function ConnectedIgnoredUserRow(userId) {
  userId = userId.userId;
  items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [stateFromStores, userId];
  const effect = noop.useEffect(() => {
    closure_0 = async function _loadUser() {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c2 = 1;
              c1 = 2;
              c0 = 1;
              const obj5 = { value: userId(dependencyMap[13]).getUser(c0), done: false };
              return obj5;
            }
          } else if (1 === tmp6) {
            c2 = 0;
            c0 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c2 = 0;
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          if (tmp3 === c2) {
            c0 = tmp2;
            throw tmp10;
          } else {
            c1 = tmp;
          }
        }
      }
    };
    if (null == stateFromStores) {
      (function loadUser() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items1);
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj2 = { userRecord: stateFromStores };
    tmp3 = <IgnoredUserRow userRecord={stateFromStores} />;
  }
  return tmp3;
}
