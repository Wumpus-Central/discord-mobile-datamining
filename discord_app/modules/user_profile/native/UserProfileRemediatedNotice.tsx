// discord_app/modules/user_profile/native/UserProfileRemediatedNotice.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let user;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2 };
obj2 = {
  padding: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
  flexDirection: "row",
  alignItems: "center",
};
let closure_9 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let first;
      let intl;
      let intl2;
      let isBlocked;
      let isIgnored;
      let items1;
      let items2;
      let tmp11;
      let tmp8;
      let obj = user(576);
      const cResult = obj.c(16);
      user = user.user;
      const style = user.style;
      const tmp4 = closure_9();
      const tmp5 = UserProfileSharedStylesDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== user.id) {
        const fn = function p() {
          const obj = {
            isPendingIncoming: RelationshipStore.getRelationshipType(user.id) === RelationshipTypes.PENDING_INCOMING,
            isBlocked: RelationshipStore.isBlocked(user.id),
            isIgnored: RelationshipStore.isIgnored(user.id),
          };
          return obj;
        };
        cResult[1] = user.id;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = user(573);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
      ({ isBlocked, isIgnored } = stateFromStoresObject);
      if (isBlocked) {
        if (cResult[3] === tmp5.card) {
          if (cResult[4] === style) {
            let tmp12;
            let tmp13;
            if (cResult[5] === tmp4.container) {
              tmp12 = cResult[6];
            }
            if (cResult[7] !== isBlocked) {
              let tmp14 = isBlocked;
              if (tmp14) {
                const obj2 = {
                  variant: "text-sm/semibold",
                  color: "text-default",
                  lineClamp: 1,
                  children: intl.string(user(1126).t["oC/fU6"]),
                };
                const Text = tmp(4886).Text;
                intl = tmp(1126).intl;
                tmp14 = closure_6(Text, obj2);
              }
              cResult[7] = isBlocked;
              cResult[8] = tmp14;
              tmp13 = tmp14;
            } else {
              tmp13 = cResult[8];
            }
            if (cResult[9] === isIgnored) {
              let tmp16;
              if (cResult[10] === user.id) {
                tmp16 = cResult[11];
              }
              if (cResult[12] === tmp12) {
                if (cResult[13] === tmp13) {
                  let tmp21;
                  if (cResult[14] === tmp16) {
                    tmp21 = cResult[15];
                  }
                  tmp11 = tmp21;
                }
              }
              const obj3 = { style: tmp12, children: items1 };
              items1 = [tmp13, tmp16];
              const tmp24 = closure_8(View, obj3);
              cResult[12] = tmp12;
              cResult[13] = tmp13;
              cResult[14] = tmp16;
              cResult[15] = tmp24;
              tmp21 = tmp24;
            }
            let tmp17 = isIgnored;
            if (tmp17) {
              const obj4 = { children: items2 };
              const obj5 = {
                variant: "text-sm/semibold",
                color: "text-default",
                lineClamp: 1,
                children: intl2.string(user(1126).t.HXz5An),
              };
              const Text2 = tmp(4886).Text;
              intl2 = tmp(1126).intl;
              items2 = [
                closure_6(Text2, obj5),
                closure_6(user(4886).Text, {
                  variant: "text-sm/semibold",
                  color: "text-default",
                  accessibilityElementsHidden: true,
                  importantForAccessibility: "no",
                  children: "\u2022",
                }),
              ];
              const intl3 = tmp(1126).intl;
              const obj6 = {
                unignoreHook(children) {
                  let id;
                  let obj = {
                    role: "button",
                    variant: "heading-sm/medium",
                    color: "text-link",
                    onPress() {
                      const obj = RelationshipActionCreatorsDefault;
                      return obj.unignoreUser(id.id, "UserProfileRemediatedNotice");
                    },
                    children,
                  };
                  return metroRequire(Text_Text.Text, obj);
                },
              };
              items2[2] = intl3.format(user(1126).t.PrtAqy, obj6);
              tmp17 = closure_8(closure_7, obj4);
            }
            cResult[9] = isIgnored;
            cResult[10] = user.id;
            cResult[11] = tmp17;
            tmp16 = tmp17;
          }
        }
        const items3 = [tmp4.container, tmp5.card, style];
        cResult[3] = tmp5.card;
        cResult[4] = style;
        cResult[5] = tmp4.container;
        cResult[6] = items3;
        tmp12 = items3;
      } else {
        tmp11 = null;
        if (isIgnored) {
          tmp11 = null;
        }
      }
      return tmp11;
    }
  : (user) => {
      let intl;
      let intl2;
      let isBlocked;
      let isIgnored;
      let items1;
      let items2;
      let items3;
      let tmp8Result;
      user = user.user;
      const style = user.style;
      const tmp = closure_9();
      const tmp3 = UserProfileSharedStylesDefault();
      let obj = user(573);
      const items = [RelationshipStore];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = {
          isPendingIncoming: RelationshipStore.getRelationshipType(user.id) === RelationshipTypes.PENDING_INCOMING,
          isBlocked: RelationshipStore.isBlocked(user.id),
          isIgnored: RelationshipStore.isIgnored(user.id),
        };
        return obj;
      });
      ({ isBlocked, isIgnored } = stateFromStoresObject);
      if (isBlocked) {
        const obj2 = { style: items1, children: items2 };
        items1 = [tmp.container, tmp3.card, style];
        if (isBlocked) {
          const obj3 = {
            variant: "text-sm/semibold",
            color: "text-default",
            lineClamp: 1,
            children: intl.string(user(1126).t["oC/fU6"]),
          };
          const Text = tmp4(4886).Text;
          intl = tmp4(1126).intl;
          isBlocked = closure_6(Text, obj3);
        }
        items2 = [isBlocked];
        if (isIgnored) {
          const obj4 = { children: items3 };
          const obj5 = {
            variant: "text-sm/semibold",
            color: "text-default",
            lineClamp: 1,
            children: intl2.string(user(1126).t.HXz5An),
          };
          const Text2 = tmp4(4886).Text;
          intl2 = tmp4(1126).intl;
          items3 = [
            closure_6(Text2, obj5),
            closure_6(user(4886).Text, {
              variant: "text-sm/semibold",
              color: "text-default",
              accessibilityElementsHidden: true,
              importantForAccessibility: "no",
              children: "\u2022",
            }),
          ];
          const intl3 = tmp4(1126).intl;
          const obj6 = {
            unignoreHook(children) {
              let id;
              let obj = {
                role: "button",
                variant: "heading-sm/medium",
                color: "text-link",
                onPress() {
                  const obj = RelationshipActionCreatorsDefault;
                  return obj.unignoreUser(id.id, "UserProfileRemediatedNotice");
                },
                children,
              };
              return metroRequire(Text_Text.Text, obj);
            },
          };
          items3[2] = intl3.format(user(1126).t.PrtAqy, obj6);
          isIgnored = closure_8(closure_7, obj4);
        }
        items2[1] = isIgnored;
        tmp8Result = closure_8(View, obj2);
      } else {
        tmp8Result = null;
        if (isIgnored) {
          tmp8Result = null;
        }
      }
      return tmp8Result;
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRemediatedNotice.tsx");

export default tmp4;
