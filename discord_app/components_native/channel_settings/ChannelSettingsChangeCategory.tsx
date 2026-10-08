// === Module 17339: ChannelSettingsChangeCategory ===

// Module 17339 (ChannelSettingsChangeCategory)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5086 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5297 */;
import Stack_Stack from "Stack/Stack" /* 5373 */;
import useChannelName from "useChannelName" /* 5417 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6102 */;
import TableRow from "TableRow" /* 6184 */;
import TableRowGroup from "TableRowGroup" /* 6267 */;
import Form from "Form" /* 8555 */;
import _slicedToArray from "module_32" /* 32 */;
import _toArray from "_toArray" /* 729 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6790 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 }, stackPadding: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
obj2.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_15 = createStyles.createLegacyClassComponentStyles(obj2);
const Component = noop.Component;
class ChannelSettingsChangeCategory extends Component {
  constructor(arg0) {
    tmp3 = new ChannelSettingsChangeCategory(global, tmp2, tmp);
    channel = global.channel;
    closure_0 = closure_8.getGuild(channel.getGuildId());
    channel2 = global.channel;
    obj = { category: null, categories: null, submitting: false };
    categories = closure_7.getCategories(channel2.getGuildId());
    obj.category = closure_6.getChannel(global.channel.parent_id);
    _categories = categories._categories;
    mapped = _categories.map((channel) => channel.channel);
    obj.categories = mapped.filter((id) => {
      let canResult = "null" === id.id;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_CHANNELS, closure_0);
      }
      if (!canResult) {
        let canResult1 = PermissionStore.can(Permissions.MANAGE_CHANNELS, id);
        if (canResult1) {
          canResult1 = PermissionStore.can(Permissions.VIEW_CHANNEL, id);
        }
        canResult = canResult1;
      }
      return canResult;
    });
    tmp3.state = obj;
    return tmp3;
  }
}
const prototype = ChannelSettingsChangeCategory.prototype;
prototype["shouldComponentUpdate"] = function shouldComponentUpdate() {
  return !this.state.submitting;
};
prototype["handleSetCategory"] = function handleSetCategory(id) {
  const self = this;
  _require = id;
  function saveUpdates() {
    if (null == guildId) {
      const _Error = Error;
      const error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
      throw error;
    } else {
      return GuildActionCreatorsDefault.batchChannelUpdate(tmp, result).then(() => closure_1_2.pop());
    }
  }
  const props = this.props;
  const channel = props.channel;
  const navigation = props.navigation;
  const channel1 = ChannelStore.getChannel(id);
  const guildId = channel.getGuildId();
  if (null == guildId) {
    const _Error2 = Error;
    let error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
    throw error;
  } else {
    let tmp3 = null;
    if ("null" !== id) {
      tmp3 = id;
    }
    _require = tmp3;
    const categories = GuildCategoryStore.getCategories(channel.getGuildId());
    let arr = channel(channel1[14])(categories._categories, categories, (channel) => channel.channel.type === channel.type);
    const found = arr.find((channel) => channel.channel.id === channel.id);
    if (null == found) {
      let _Error = Error;
      const error1 = new Error("ChannelSettingsChangeCategory.handleSetCategory: Could not find original channel.");
      throw error1;
    } else {
      let obj2 = {};
      const _categories = categories._categories;
      const item = _categories.forEach((channel) => {
        const items = [];
        obj2[channel.channel.id] = items;
        return items;
      });
      const item1 = arr.forEach((channel) => {
        let tmp = channel.channel.id !== channel.id;
        if (tmp) {
          const _String = String;
          const arr = obj2[String(undefined, channel.channel.parent_id)];
          let arr2;
          if (arr != null) {
            arr2 = arr.push(channel);
          }
          tmp = arr2;
        }
        return tmp;
      });
      let _String = String;
      obj2[String(undefined, tmp3)].push(found);
      const arr3 = obj2[String(undefined, tmp3)];
      const tmp28 = tmp6(tmp7[14])(categories._categories, obj2);
      let obj5 = {
        oldOrdering: arr,
        newOrdering: tmp28,
        idGetter(channel) {
              return channel.channel.id;
            },
        existingPositionGetter(channel) {
              return channel.channel.position;
            }
      };
      const result = require("DragAndDropUtils").calculatePositionDeltas(obj5);
      GuildCategoryStore = result;
      if (result.length > 0) {
        const found1 = result.find((id) => {
          let flag = id.id === channel.id;
          if (flag) {
            id.parent_id = parent_id;
            closure_6 = id;
            flag = true;
          }
          return flag;
        });
      } else {
        const obj7 = { id: channel.id, parent_id: tmp3 };
        ChannelStore = obj7;
        result.push(ChannelStore);
      }
      const appChannelBotUserId = self.props.appChannelBotUserId;
      let obj6 = require("DragAndDropUtils");
      closure_8 = navigation(tmp7[16]).areChannelsLocked(channel, channel1, appChannelBotUserId);
      let obj3 = navigation(tmp7[16]);
      closure_9 = navigation(tmp7[16]).areChannelsLocked(channel, obj.getChannel(channel.parent_id), appChannelBotUserId);
      self.setState({ submitting: true }, () => {
        if (null != channel1) {
          if (closure_9) {
            if (!closure_8) {
              obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, isDismissable: false };
              const intl = util.intl;
              obj2.title = intl.string(util.t.YWMtRe);
              const intl2 = util.intl;
              const obj3 = { channelName: null, categoryName: null };
              const obj4 = useChannelName;
              obj3.channelName = obj4.computeChannelName(channel, UserStore, RelationshipStore, true);
              let obj = AlertActionCreatorsDefault;
              obj3.categoryName = useChannelName.computeChannelName(tmp, UserStore, RelationshipStore);
              obj2.body = intl2.format(util.t["iKW+jY"], obj3);
              const intl3 = util.intl;
              obj2.confirmText = intl3.string(util.t.eW8Gy4);
              const intl4 = util.intl;
              obj2.cancelText = intl4.string(util.t.s4uM3b);
              obj2.onConfirm = function onConfirm() {
                id.lock_permissions = true;
                if (null == guildId) {
                  const _Error = Error;
                  const error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
                  throw error;
                } else {
                  const obj = channel(channel1[17]);
                  channel(channel1[17]).batchChannelUpdate(tmp, closure_1_7).then(() => closure_1_2.pop());
                  const batchChannelUpdateResult = channel(channel1[17]).batchChannelUpdate(tmp, closure_1_7);
                }
              };
              obj2.onCancel = saveUpdates;
              obj.show(obj2);
            }
          }
        }
        if (null == guildId) {
          let _Error = Error;
          let error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
          throw error;
        } else {
          GuildActionCreatorsDefault.batchChannelUpdate(tmp24, result).then(() => closure_1_2.pop());
          let batchChannelUpdateResult = GuildActionCreatorsDefault.batchChannelUpdate(tmp24, result);
        }
      });
    }
    tmp6 = channel;
  }
  obj = ChannelStore;
};
prototype["renderCategory"] = function renderCategory(label) {
  const self = this;
  return __initData2(TableRow.TableRow, {
    label: label.name,
    onPress() {
      return self.handleSetCategory(label.id);
    }
  }, label.id);
};
prototype["renderCategories"] = function renderCategories() {
  const self = this;
  const substr = _toArray(this.state.categories).slice(0);
  const category = this.state.category;
  if (null != category) {
    substr.splice(substr.indexOf(category), 1);
  }
  let tmp2 = null != substr[0];
  if (tmp2) {
    tmp2 = "null" === substr[0].id;
  }
  if (tmp2) {
    substr.shift();
  }
  const mapped = substr.map(self.renderCategory, self);
  let tmp4 = null;
  if (mapped.length > 0) {
    const obj = { hasIcons: false, children: mapped };
    tmp4 = __initData2(TableRowGroup.TableRowGroup, obj);
  }
  return tmp4;
};
prototype["render"] = function render() {
  const self = this;
  const category = this.state.category;
  const first = _slicedToArray(this.state.categories, 1)[0];
  const tmp2 = closure_15(this.context);
  const obj = { style: tmp2.screenContainer, children: null };
  const obj2 = { style: tmp2.stackPadding, spacing: nativeDefault.space.PX_24, children: null };
  const intl = util.intl;
  if (null != category) {
    let name = category.name;
  } else {
    const intl2 = util.intl;
    name = intl2.string(util.t.GSfOoo);
  }
  const items = [__initData2(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", children: intl.formatToPlainString(util.t.OqccVl, { categoryName: name }) }), , ];
  let tmp3Result = null;
  if (null != first) {
    tmp3Result = null;
    if ("null" === first.id) {
      tmp3Result = null;
      if (null != category) {
        const obj4 = { hasIcons: false, children: null };
        const obj5 = {
          label: first.name,
          onPress() {
                  return self.handleSetCategory(first.id);
                }
        };
        obj4.children = __initData2(TableRow.TableRow, obj5, first.id);
        tmp3Result = __initData2(TableRowGroup.TableRowGroup, obj4);
      }
    }
  }
  items[1] = tmp3Result;
  items[2] = self.renderCategories();
  obj2.children = items;
  obj.children = state(Stack_Stack.Stack, obj2);
  return __initData2(Form.Form, obj);
};
ChannelSettingsChangeCategory.contextType = fn(4787).ThemeContext;
const ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeCategory.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedChannelSettingsChangeCategory(channelId) {
  const cResult = channelId(576).c(7);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function l() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6);
  const tmpResult = channelId(504);
  const navigation = channelId(1502).useNavigation();
  const tmpResult3 = channelId(1502);
  const appChannelBotUserId = channelId(11360).useAppChannelBotUserId(stateFromStores);
  _modDef38(null != stateFromStores, "ConnectedChannelSettingsChangeCategory: channel cannot be undefined");
  if (cResult[3] === appChannelBotUserId) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === navigation) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const tmp12 = closure_13(ChannelSettingsChangeCategory, { channel: stateFromStores, navigation, appChannelBotUserId });
  cResult[3] = appChannelBotUserId;
  cResult[4] = stateFromStores;
  cResult[5] = navigation;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const tmpResult4 = channelId(11360);
}) : (function ConnectedChannelSettingsChangeCategory(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const channel = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = channelId(504);
  const navigation = channelId(1502).useNavigation();
  const obj2 = channelId(1502);
  const appChannelBotUserId = channelId(11360).useAppChannelBotUserId(channel);
  _modDef38(null != channel, "ConnectedChannelSettingsChangeCategory: channel cannot be undefined");
  return closure_13(ChannelSettingsChangeCategory, { channel, navigation, appChannelBotUserId });
});