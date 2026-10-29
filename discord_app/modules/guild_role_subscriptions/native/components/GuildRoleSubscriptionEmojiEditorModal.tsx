// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import SubscriptionRoleStore from "../../SubscriptionRoleStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, SectionList: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
  },
  emojiList: { flexGrow: 0 },
  emojiListContent: null,
  emojiImage: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
};
obj2.emojiListContent = {
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  paddingVertical: nativeDefault.space.PX_24,
};
obj2.emojiImage = { width: 24, height: 24 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  paddingVertical: nativeDefault.space.PX_24,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRoleSubscriptionEmojiEditorModal(guildId) {
      const cResult = require("c").c(48);
      guildId = guildId.guildId;
      _require = guildId;
      const subscriptionRoleId = guildId.subscriptionRoleId;
      ({ listingId, onClose } = guildId);
      const onSave = guildId.onSave;
      let obj = require("c");
      let tmp = _require;
      _slicedToArray = closure_12();
      const tmp4 = closure_12();
      noop = subscriptionRoleId(onClose[10])(guildId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [SubscriptionRoleStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        class S {
          constructor() {
            return closure_8.getSubscriptionRoles(closure_0);
          }
        }
        cResult[1] = guildId;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return closure_8.getSubscriptionRoles(closure_0);
          }
        }
      }
      const tmp5 = subscriptionRoleId(onClose[10])(guildId);
      const stateFromStores = tmp(onClose[11]).useStateFromStores(first, S);
      [first1, SubscriptionRoleStore] = noop.useState(guildId.initialTierEmojiIds);
      if (null != subscriptionRoleId) {
        class S {
          constructor() {
            return closure_8.getSubscriptionRoles(closure_0);
          }
        }
        if (cResult[9] === stateFromStores) {
          class S {
            constructor() {
              return closure_8.getSubscriptionRoles(closure_0);
            }
          }
        }
        class P {
          constructor(arg0) {
            closure_0 = guildId;
            roles = guildId.roles;
            return (
              0 ===
              roles.filter((item) => {
                let tmp = item === subscriptionRoleId;
                if (tmp) {
                  tmp = !first1.has(id.id);
                }
                let hasItem = !tmp;
                if (!tmp) {
                  hasItem = stateFromStores.has(item);
                }
                return hasItem;
              }).length
            );
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = subscriptionRoleId;
        cResult[11] = first1;
        cResult[12] = P;
      } else {
        class S {
          constructor() {
            return closure_8.getSubscriptionRoles(closure_0);
          }
        }
        class P {
          constructor(arg0) {
            closure_0 = guildId;
            roles = guildId.roles;
            return (
              0 ===
              roles.filter((item) => {
                let tmp = item === subscriptionRoleId;
                if (tmp) {
                  tmp = !first1.has(id.id);
                }
                let hasItem = !tmp;
                if (!tmp) {
                  hasItem = stateFromStores.has(item);
                }
                return hasItem;
              }).length
            );
          }
        }
        if (cResult[14] === onClose) {
          class S {
            constructor() {
              return closure_8.getSubscriptionRoles(closure_0);
            }
          }
        }
        _require = onSave(function* () {
          closure_0 = tmp3;
          let v0 = 1;
          yield v0(first1);
          if (1 === tmp7) {
            v0 = 0;
            c4 = 3;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            tmp14();
            v0 = 0;
          }
          v0 = 0;
          return value;
        });
        function handleSave() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[14] = onClose;
        cResult[15] = onSave;
        cResult[16] = first1;
        cResult[17] = handleSave;
      }
      const tmpResult = tmp(onClose[11]);
    }
  : function GuildRoleSubscriptionEmojiEditorModal(guildId) {
      guildId = guildId.guildId;
      const subscriptionRoleId = guildId.subscriptionRoleId;
      const onClose = guildId.onClose;
      const onSave = guildId.onSave;
      first = undefined;
      closure_8 = undefined;
      function handleSave() {
        const self = this;
        const apply = closure_11.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      closure_11 = async function _handleSave2(stateFromStores) {
        closure_0 = tmp3;
        await onSave(first);
        if (1 === tmp7) {
          c3 = 0;
          c4 = 3;
        } else if (stateFromStores === 1) {
          c4 = 3;
          throw value;
        } else if (stateFromStores !== 2) {
          closure_128_2();
          c3 = 0;
        }
        return value;
      };
      ({ initialTierEmojiIds, listingId } = guildId);
      let tmp = closure_12();
      _slicedToArray = tmp;
      const tmp2 = subscriptionRoleId(onClose[10])(guildId);
      noop = tmp2;
      let items = [closure_8];
      const stateFromStores = guildId(onClose[11]).useStateFromStores(items, () =>
        SubscriptionRoleStore.getSubscriptionRoles(guildId),
      );
      [first, closure_8] = noop.useState(initialTierEmojiIds);
      const items1 = [stateFromStores, tmp2, subscriptionRoleId, first];
      let set = noop.useMemo(() => {
        if (null == subscriptionRoleId) {
          const _Set2 = Set;
          set = new Set();
          return set;
        } else {
          const found = closure_5.filter((roles) => {
            const id = roles;
            roles = roles.roles;
            return (
              0 ===
              roles.filter((item) => {
                let tmp = item === subscriptionRoleId;
                if (tmp) {
                  tmp = !set2.has(id.id);
                }
                let hasItem = !tmp;
                if (!tmp) {
                  hasItem = set.has(item);
                }
                return hasItem;
              }).length
            );
          });
          const _Set = Set;
          const set1 = new Set(found.map((id) => id.id));
          return set1;
        }
      }, items1);
      let obj2 = { style: tmp.container, children: null };
      let obj3 = { title: null, onClose: null, onSave: null, listingId: null, canSave: true };
      let obj = guildId(onClose[11]);
      let intl = guildId(onClose[13]).intl;
      obj3.title = intl.string(guildId(onClose[13]).t.W4XhnR);
      obj3.onClose = onClose;
      obj3.onSave = function handleConfirmAndSave() {
        if (0 === set.size) {
          handleSave();
        } else {
          const obj2 = {
            title: null,
            body: null,
            cancelText: null,
            confirmText: null,
            onConfirm: null,
            confirmColor: null,
          };
          const intl = util.intl;
          obj2.title = intl.string(util.t["30V0t5"]);
          const intl2 = util.intl;
          const obj3 = { numberOfEmojiSlatedForDeletion: tmp.size };
          obj2.body = intl2.formatToPlainString(util.t["o6j/wN"], obj3);
          const intl3 = util.intl;
          obj2.cancelText = intl3.string(util.t["ETE/oC"]);
          const intl4 = util.intl;
          obj2.confirmText = intl4.string(util.t["cY+Oob"]);
          obj2.onConfirm = handleSave;
          obj2.confirmColor = common_AlertDefault.Colors.RED;
          AlertActionCreatorsDefault.show(obj2);
        }
      };
      obj3.listingId = listingId;
      const items2 = [set(subscriptionRoleId(onClose[20]), obj3)];
      const obj4 = {
        style: tmp.emojiList,
        contentContainerStyle: tmp.emojiListContent,
        renderItem(item) {
          item = item.item;
          const index = item.index;
          const hasItem = first.has(item.id);
          const hasItem1 = set.has(item.id);
          const obj = {
            start: 0 === index,
            end: index === closure_5.length - 1,
            icon: null,
            label: null,
            subLabel: null,
            checked: null,
            onPress: null,
          };
          const obj2 = { style: emojiImage.emojiImage, source: null };
          const obj3 = { uri: null };
          const tmp6 = subscriptionRoleId(onClose[15]);
          obj3.uri = subscriptionRoleId(onClose[16]).getEmojiURL({ id: item.id, animated: item.animated, size: 48 });
          obj2.source = obj3;
          obj.icon = set(tmp6, obj2);
          obj.label = set(subscriptionRoleId(onClose[18]), { children: item.name });
          let tmp7;
          if (hasItem1) {
            const obj7 = { children: null };
            const obj8 = { variant: "text-sm/normal", color: "interactive-text-active", children: null };
            const intl = guildId(onClose[13]).intl;
            obj8.children = intl.string(guildId(onClose[13]).t["1GlN06"]);
            const items = [set(guildId(onClose[19]).Text, obj8)];
            const obj9 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
            const intl2 = guildId(onClose[13]).intl;
            obj9.children = intl2.string(guildId(onClose[13]).t.J0XdJ4);
            items[1] = set(guildId(onClose[19]).Text, obj9);
            obj7.children = items;
            tmp7 = closure_11(handleSave, obj7);
          }
          obj.subLabel = tmp7;
          obj.checked = hasItem;
          obj.onPress = function onPress() {
            const id = item.id;
            set = new Set(first);
            if (set.has(id)) {
              set.delete(id);
            } else {
              set.add(id);
            }
            closure_8(set);
          };
          return set(guildId(onClose[17]).TableCheckboxRow, obj);
        },
        sections: null,
        keyboardShouldPersistTaps: "always",
      };
      const obj5 = { title: null, data: null };
      let intl2 = guildId(onClose[13]).intl;
      obj5.title = intl2.string(guildId(onClose[13]).t["9Oq93m"]);
      obj5.data = tmp2;
      const items3 = [obj5];
      obj4.sections = items3;
      items2[1] = set(first, obj4);
      obj2.children = items2;
      return closure_11(stateFromStores, obj2);
    };
