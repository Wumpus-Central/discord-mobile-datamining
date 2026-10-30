// === Module 19911: GuildRoleSubscriptionEmojiEditorModal ===

// Module 19911 (GuildRoleSubscriptionEmojiEditorModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
import common_AlertDefault from "common/Alert" /* 6025 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 4964 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, SectionList: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%" }, emojiList: { flexGrow: 0 }, emojiListContent: null, emojiImage: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%" };
obj2.emojiListContent = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingVertical: nativeDefault.space.PX_24 };
obj2.emojiImage = { width: 24, height: 24 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx");

export default function GuildRoleSubscriptionEmojiEditorModal(guildId) {
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
  closure_11 = async function _handleSave(stateFromStores) {
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
  const tmp2 = subscriptionRoleId(onClose[8])(guildId);
  noop = tmp2;
  let items = [closure_8];
  const stateFromStores = guildId(onClose[9]).useStateFromStores(items, () => SubscriptionRoleStore.getSubscriptionRoles(guildId));
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
        return 0 === roles.filter((item) => {
          let tmp = item === subscriptionRoleId;
          if (tmp) {
            tmp = !set2.has(id.id);
          }
          let hasItem = !tmp;
          if (!tmp) {
            hasItem = set.has(item);
          }
          return hasItem;
        }).length;
      });
      const _Set = Set;
      const set1 = new Set(found.map((id) => id.id));
      return set1;
    }
  }, items1);
  let obj2 = { style: tmp.container, children: null };
  let obj3 = { title: null, onClose: null, onSave: null, listingId: null, canSave: true };
  let obj = guildId(onClose[9]);
  let intl = guildId(onClose[13]).intl;
  obj3.title = intl.string(guildId(onClose[13]).t.W4XhnR);
  obj3.onClose = onClose;
  obj3.onSave = function handleConfirmAndSave() {
    if (0 === set.size) {
      handleSave();
    } else {
      const obj2 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
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
  const items2 = [set(subscriptionRoleId(onClose[12]), obj3), ];
  const obj4 = {
    style: tmp.emojiList,
    contentContainerStyle: tmp.emojiListContent,
    renderItem(item) {
      item = item.item;
      const index = item.index;
      const hasItem = first.has(item.id);
      const hasItem1 = set.has(item.id);
      const obj = { start: 0 === index, end: index === closure_5.length - 1, icon: null, label: null, subLabel: null, checked: null, onPress: null };
      const obj2 = { style: emojiImage.emojiImage, source: null };
      const obj3 = { uri: null };
      const tmp6 = subscriptionRoleId(onClose[10]);
      obj3.uri = subscriptionRoleId(onClose[11]).getEmojiURL({ id: item.id, animated: item.animated, size: 48 });
      obj2.source = obj3;
      obj.icon = set(tmp6, obj2);
      obj.label = set(subscriptionRoleId(onClose[17]), { children: item.name });
      let tmp7;
      if (hasItem1) {
        const obj7 = { children: null };
        const obj8 = { variant: "text-sm/normal", color: "interactive-text-active", children: null };
        const intl = guildId(onClose[13]).intl;
        obj8.children = intl.string(guildId(onClose[13]).t["1GlN06"]);
        const items = [set(guildId(onClose[18]).Text, obj8), ];
        const obj9 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
        const intl2 = guildId(onClose[13]).intl;
        obj9.children = intl2.string(guildId(onClose[13]).t.J0XdJ4);
        items[1] = set(guildId(onClose[18]).Text, obj9);
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
      return set(guildId(onClose[16]).TableCheckboxRow, obj);
    },
    sections: null,
    keyboardShouldPersistTaps: "always"
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