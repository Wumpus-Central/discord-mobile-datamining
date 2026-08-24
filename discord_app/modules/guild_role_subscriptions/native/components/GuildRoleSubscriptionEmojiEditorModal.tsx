// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../SubscriptionRoleStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: closure_6, SectionList: error } = get_ActivityIndicator);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, emojiList: null, row: null, emojiImage: null, emojiAlias: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexGrow: 0, marginVertical: 24, marginHorizontal: 16, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[2] = { alignItems: "flex-start", paddingTop: 16, paddingBottom: 14 };
createCacheKey[3] = { width: 24, height: 24, marginBottom: 2 };
createCacheKey[4] = { marginBottom: 2 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexGrow: 0, marginVertical: 24, marginHorizontal: 16, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx");

export default function GuildRoleSubscriptionEmojiEditorModal(guildId) {
  guildId = guildId.guildId;
  const subscriptionRoleId = guildId.subscriptionRoleId;
  const onClose = guildId.onClose;
  const onSave = guildId.onSave;
  let callback;
  let React;
  let stateFromStores;
  let first;
  closure_8 = undefined;
  let callback2;
  function handleSave() {
    const self = this;
    const apply = _handleSave.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _handleSave(stateFromStores, arg1) {
    const self = this;
    const tmp = onSave(function*() {
      closure_0 = tmp3;
      let v0 = 1;
      yield v0(closure_1_7);
      if (1 === tmp7) {
        v0 = 0;
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        callback();
        v0 = 0;
      }
      v0 = 0;
      return arg1;
    });
    closure_11 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  ({ initialTierEmojiIds, listingId } = guildId);
  let tmp = callback3();
  callback = tmp;
  let tmp2 = subscriptionRoleId(onClose[8])(guildId);
  React = tmp2;
  let obj = guildId(onClose[9]);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => subscriptionRoles.getSubscriptionRoles(guildId));
  const tmp4 = callback(React.useState(initialTierEmojiIds), 2);
  first = tmp4[0];
  closure_8 = tmp4[1];
  let items1 = [stateFromStores, tmp2, subscriptionRoleId, first];
  callback2 = React.useMemo(() => {
    if (null == subscriptionRoleId) {
      const _Set2 = Set;
      const set = new Set();
      return set;
    } else {
      const found = closure_5.filter((roles) => {
        closure_0 = roles;
        roles = roles.roles;
        return 0 === roles.filter((arg0) => {
          let tmp = arg0 === closure_1_1;
          if (tmp) {
            tmp = !closure_1_7.has(id.id);
          }
          let hasItem = !tmp;
          if (!tmp) {
            hasItem = closure_1_6.has(arg0);
          }
          return hasItem;
        }).length;
      });
      const _Set = Set;
      const set1 = new Set(found.map((id) => id.id));
      return set1;
    }
  }, items1);
  obj = { style: tmp.container, children: null };
  obj = { title: null, onClose: null, onSave: null, listingId: null, canSave: true };
  let intl = guildId(onClose[13]).intl;
  obj[0] = intl.string(guildId(onClose[13]).t.W4XhnR);
  obj[1] = onClose;
  obj[2] = function onSave() {
    if (0 === set.size) {
      handleSave();
    } else {
      let obj = subscriptionRoleId(onClose[14]);
      obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl = guildId(onClose[13]).intl;
      obj[0] = intl.string(guildId(onClose[13]).t["30V0t5"]);
      const intl2 = guildId(onClose[13]).intl;
      obj = { numberOfEmojiSlatedForDeletion: null };
      obj[0] = tmp.size;
      obj[1] = intl2.formatToPlainString(guildId(onClose[13]).t["o6j/wN"], obj);
      const intl3 = guildId(onClose[13]).intl;
      obj[2] = intl3.string(guildId(onClose[13]).t["ETE/oC"]);
      const intl4 = guildId(onClose[13]).intl;
      obj[3] = intl4.string(guildId(onClose[13]).t["cY+Oob"]);
      obj[4] = handleSave;
      obj[5] = subscriptionRoleId(onClose[15]).Colors.RED;
      obj.show(obj);
    }
  };
  obj[3] = listingId;
  const items2 = [callback2(subscriptionRoleId(onClose[12]), obj), ];
  obj1 = {
    style: tmp.emojiList,
    renderItem(item) {
      item = item.item;
      closure_1 = undefined;
      const hasItem = first.has(item.id);
      closure_1 = set.has(item.id);
      let obj = { style: closure_4.row, leading: null, label: null, onPress: null, trailing: null };
      obj = { style: closure_4.emojiImage, source: null };
      obj = { uri: null };
      const tmp2 = subscriptionRoleId(onClose[10]);
      obj[0] = subscriptionRoleId(onClose[11]).getEmojiURL({ id: item.id, animated: item.animated, size: 48 });
      obj[1] = obj;
      obj[1] = set(tmp2, obj);
      obj[2] = function label() {
        let obj = { name: item.name, style: closure_1_4.emojiAlias };
        const children = [callback(subscriptionRoleId(onClose[17]), obj), ];
        let tmpResult = closure_1;
        if (closure_1) {
          obj = { children: null };
          obj = { variant: "text-sm/normal", color: "interactive-text-active", children: null };
          const intl = guildId(tmp4[13]).intl;
          obj[2] = intl.string(guildId(tmp4[13]).t["1GlN06"]);
          const items1 = [tmp3(guildId(tmp4[18]).Text, obj), ];
          obj1 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
          const intl2 = guildId(tmp4[13]).intl;
          obj1[2] = intl2.string(guildId(tmp4[13]).t.J0XdJ4);
          items1[1] = tmp3(guildId(tmp4[18]).Text, obj1);
          obj[0] = items1;
          tmpResult = tmp(tmp2, obj);
        }
        children[1] = tmpResult;
        return _handleSave(handleSave, { children });
      };
      obj[3] = function onPress() {
        const id = item.id;
        const set = new Set(closure_1_7);
        if (set.has(id)) {
          set.delete(id);
        } else {
          set.add(id);
        }
        closure_1_8(set);
      };
      obj[4] = set(guildId(onClose[16]).FormRow.Checkbox, { selected: hasItem });
      return set(guildId(onClose[16]).FormRow, obj);
    },
    sections: null,
    ItemSeparatorComponent: null,
    keyboardShouldPersistTaps: "always"
  };
  const obj2 = { title: null, data: null };
  let intl2 = guildId(onClose[13]).intl;
  obj2[0] = intl2.string(guildId(onClose[13]).t["9Oq93m"]);
  obj2[1] = tmp2;
  const items3 = [obj2];
  obj1[2] = items3;
  obj1[3] = function ItemSeparatorComponent() {
    return set(guildId(onClose[16]).FormDivider, { iconPush: true });
  };
  items2[1] = callback2(first, obj1);
  obj[1] = items2;
  return _handleSave(stateFromStores, obj);
};