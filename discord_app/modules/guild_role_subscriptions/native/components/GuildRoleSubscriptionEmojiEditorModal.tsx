// === Module 17759: GuildRoleSubscriptionEmojiEditorModal ===

// Module 17759 (GuildRoleSubscriptionEmojiEditorModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import EmojiAliasDefault from "EmojiAlias" /* 17746 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5460 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, SectionList: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { container: null, emojiList: null, row: null, emojiImage: null, emojiAlias: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "100%" };
createStyles.container = createStyles;
createStyles.emojiList = { flexGrow: 0, marginVertical: 24, marginHorizontal: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.row = { alignItems: "flex-start", paddingTop: 16, paddingBottom: 14 };
createStyles.emojiImage = { width: 24, height: 24, marginBottom: 2 };
createStyles.emojiAlias = { marginBottom: 2 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx");

export default function GuildRoleSubscriptionEmojiEditorModal(guildId) {
  guildId = guildId.guildId;
  const subscriptionRoleId = guildId.subscriptionRoleId;
  const onClose = guildId.onClose;
  const onSave = guildId.onSave;
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
  let tmp2 = subscriptionRoleId(onClose[8])(guildId);
  noop = tmp2;
  let obj = guildId(onClose[9]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionRoleStore.getSubscriptionRoles(guildId));
  const tmp4 = _slicedToArray(noop.useState(initialTierEmojiIds), 2);
  const first = tmp4[0];
  closure_8 = tmp4[1];
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
  obj = { style: tmp.container, children: null };
  obj = { title: null, onClose: null, onSave: null, listingId: null, canSave: true };
  let intl = guildId(onClose[13]).intl;
  obj.title = intl.string(guildId(onClose[13]).t.W4XhnR);
  obj.onClose = onClose;
  obj.onSave = function onSave() {
    if (0 === set.size) {
      handleSave();
    } else {
      let obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["30V0t5"]);
      const intl2 = util.intl;
      obj = { numberOfEmojiSlatedForDeletion: tmp.size };
      obj.body = intl2.formatToPlainString(util.t["o6j/wN"], obj);
      const intl3 = util.intl;
      obj.cancelText = intl3.string(util.t["ETE/oC"]);
      const intl4 = util.intl;
      obj.confirmText = intl4.string(util.t["cY+Oob"]);
      obj.onConfirm = handleSave;
      obj.confirmColor = common_AlertDefault.Colors.RED;
      obj.show(obj);
    }
  };
  obj.listingId = listingId;
  const items2 = [set(subscriptionRoleId(onClose[12]), obj), ];
  let obj1 = {
    style: tmp.emojiList,
    renderItem(item) {
      item = item.item;
      const hasItem = first.has(item.id);
      closure_1 = set.has(item.id);
      let obj = { style: emojiAlias.row, leading: null, label: null, onPress: null, trailing: null };
      obj = { style: emojiAlias.emojiImage, source: null };
      obj = { uri: null };
      const tmp2 = subscriptionRoleId(onClose[10]);
      obj.uri = subscriptionRoleId(onClose[11]).getEmojiURL({ id: item.id, animated: item.animated, size: 48 });
      obj.source = obj;
      obj.leading = set(tmp2, obj);
      obj.label = function label() {
        let obj = { name: item.name, style: emojiAlias.emojiAlias };
        const children = [React7(EmojiAliasDefault, obj), ];
        let tmpResult = closure_1;
        if (closure_1) {
          obj = { children: null };
          obj = { variant: "text-sm/normal", color: "interactive-text-active", children: null };
          const intl = util.intl;
          obj.children = intl.string(util.t["1GlN06"]);
          const items1 = [React7(Text_Text.Text, obj), ];
          const obj1 = { variant: "text-sm/normal", color: "text-feedback-critical", children: null };
          const intl2 = util.intl;
          obj1.children = intl2.string(util.t.J0XdJ4);
          items1[1] = React7(Text_Text.Text, obj1);
          obj.children = items1;
          tmpResult = closure_3_11(closure_3_10, obj);
        }
        children[1] = tmpResult;
        return closure_3_11(closure_3_10, { children });
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
      obj.trailing = set(guildId(onClose[16]).FormRow.Checkbox, { selected: hasItem });
      return set(guildId(onClose[16]).FormRow, obj);
    },
    sections: null,
    ItemSeparatorComponent: null,
    keyboardShouldPersistTaps: "always"
  };
  const obj2 = { title: null, data: null };
  let intl2 = guildId(onClose[13]).intl;
  obj2.title = intl2.string(guildId(onClose[13]).t["9Oq93m"]);
  obj2.data = tmp2;
  const items3 = [obj2];
  obj1.sections = items3;
  obj1.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return set(guildId(onClose[16]).FormDivider, { iconPush: true });
  };
  items2[1] = set(first, obj1);
  obj.children = items2;
  return closure_11(stateFromStores, obj);
};