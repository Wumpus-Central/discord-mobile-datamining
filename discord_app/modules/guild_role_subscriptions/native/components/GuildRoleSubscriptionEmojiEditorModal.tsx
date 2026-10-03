// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import EmojiAliasDefault from "EmojiAlias.tsx";
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
const createStyles = fn(4890);
let obj2 = {
  container: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
  },
  emojiList: null,
  row: null,
  emojiImage: null,
  emojiAlias: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
};
obj2.emojiList = {
  flexGrow: 0,
  marginVertical: 24,
  marginHorizontal: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.row = { alignItems: "flex-start", paddingTop: 16, paddingBottom: 14 };
obj2.emojiImage = { width: 24, height: 24, marginBottom: 2 };
obj2.emojiAlias = { marginBottom: 2 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  flexGrow: 0,
  marginVertical: 24,
  marginHorizontal: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = require("c").c(49);
      guildId = guildId.guildId;
      _require = guildId;
      const subscriptionRoleId = guildId.subscriptionRoleId;
      ({ listingId, onClose } = guildId);
      const onSave = guildId.onSave;
      let obj = require("c");
      let tmp = _require;
      _slicedToArray = closure_12();
      subscriptionRoleId(onClose[10])(guildId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SubscriptionRoleStore];
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
      const tmp4 = closure_12();
      const stateFromStores = tmp(onClose[11]).useStateFromStores(first, S);
      [first1, closure_7] = stateFromStores.useState(guildId.initialTierEmojiIds);
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
        class D {
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
        cResult[12] = D;
      } else {
        class S {
          constructor() {
            return closure_8.getSubscriptionRoles(closure_0);
          }
        }
        class D {
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
        SubscriptionRoleStore = tmp13;
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
      let tmpResult = tmp(onClose[11]);
    }
  : (guildId) => {
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
      let tmp2 = subscriptionRoleId(onClose[10])(guildId);
      noop = tmp2;
      const items = [closure_8];
      const stateFromStores = guildId(onClose[11]).useStateFromStores(items, () =>
        SubscriptionRoleStore.getSubscriptionRoles(guildId),
      );
      [first, closure_8] = noop.useState(initialTierEmojiIds);
      let items1 = [stateFromStores, tmp2, subscriptionRoleId, first];
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
      obj3.onSave = function onSave() {
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
      let obj4 = {
        style: tmp.emojiList,
        renderItem(item) {
          item = item.item;
          const hasItem = first.has(item.id);
          closure_1 = set.has(item.id);
          const obj = { style: emojiAlias.row, leading: null, label: null, onPress: null, trailing: null };
          let obj2 = { style: emojiAlias.emojiImage, source: null };
          let obj3 = { uri: null };
          const tmp2 = subscriptionRoleId(onClose[15]);
          obj3.uri = subscriptionRoleId(onClose[16]).getEmojiURL({ id: item.id, animated: item.animated, size: 48 });
          obj2.source = obj3;
          obj.leading = set(tmp2, obj2);
          obj.label = function label() {
            const children = [options(EmojiAliasDefault, { name: item.name, style: emojiAlias.emojiAlias })];
            let tmpResult = closure_1;
            if (closure_1) {
              const obj2 = { children: null };
              const obj3 = { variant: "text-sm/normal", color: "interactive-text-active", children: null };
              const intl = util.intl;
              obj3.children = intl.string(util.t["1GlN06"]);
              const items1 = [options(Text_Text.Text, obj3)];
              const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
              const intl2 = util.intl;
              obj4.children = intl2.string(util.t.J0XdJ4);
              items1[1] = options(Text_Text.Text, obj4);
              obj2.children = items1;
              tmpResult = closure_3_11(v65535, obj2);
            }
            children[1] = tmpResult;
            return closure_3_11(v65535, { children });
          };
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
          obj.trailing = set(guildId(onClose[17]).FormRow.Checkbox, { selected: hasItem });
          return set(guildId(onClose[17]).FormRow, obj);
        },
        sections: null,
        ItemSeparatorComponent: null,
        keyboardShouldPersistTaps: "always",
      };
      const obj5 = { title: null, data: null };
      let intl2 = guildId(onClose[13]).intl;
      obj5.title = intl2.string(guildId(onClose[13]).t["9Oq93m"]);
      obj5.data = tmp2;
      const items3 = [obj5];
      obj4.sections = items3;
      obj4.ItemSeparatorComponent = function ItemSeparatorComponent() {
        return set(guildId(onClose[17]).FormDivider, { iconPush: true });
      };
      items2[1] = set(first, obj4);
      obj2.children = items2;
      return closure_11(stateFromStores, obj2);
    };
