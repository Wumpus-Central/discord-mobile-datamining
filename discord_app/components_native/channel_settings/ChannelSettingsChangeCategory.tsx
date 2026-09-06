// discord_app/components_native/channel_settings/ChannelSettingsChangeCategory.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import useChannelName from "../../modules/channel/useChannelName.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import Stack_Stack from "../../design/components/Stack/native/Stack.native.tsx";
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import TableRow from "../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import Form from "../../design/void/Form/native/index.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import _toArray from "../../../_runtime/00718__toArray.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildCategoryStore from "../../stores/GuildCategoryStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = { screenContainer: null, stackPadding: null };
createStyles = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingTop: nativeDefault.space.PX_16,
};
createStyles.screenContainer = createStyles;
createStyles.stackPadding = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_15 = createStyles.createLegacyClassComponentStyles(createStyles);
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
  const navigation = props.navigation;
  let obj = ChannelStore;
  const channel = ChannelStore.getChannel(id);
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
    let arr = channel(channel[14])(
      categories._categories,
      categories,
      (channel) => channel.channel.type === channel.type,
    );
    const found = arr.find((channel) => channel.channel.id === channel.id);
    if (null == found) {
      let _Error = Error;
      const error1 = new Error("ChannelSettingsChangeCategory.handleSetCategory: Could not find original channel.");
      throw error1;
    } else {
      obj = {};
      const _categories = categories._categories;
      const item = _categories.forEach((channel) => {
        const items = [];
        obj[channel.channel.id] = items;
        return items;
      });
      const item1 = arr.forEach((channel) => {
        let tmp = channel.channel.id !== channel.id;
        if (tmp) {
          const _String = String;
          let arr;
          if (arr != null) {
            arr = arr.push(channel);
          }
          tmp = arr;
        }
        return tmp;
      });
      let _String = String;
      arr = obj[String(undefined, tmp3)].push(found);
      const arr3 = obj[String(undefined, tmp3)];
      const tmp28 = tmp6(tmp7[14])(categories._categories, obj);
      obj = {
        oldOrdering: arr,
        newOrdering: tmp28,
        idGetter(channel) {
          return channel.channel.id;
        },
        existingPositionGetter(channel) {
          return channel.channel.position;
        },
      };
      const result = require("DragAndDropUtils").calculatePositionDeltas(obj);
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
        const obj1 = { id: channel.id, parent_id: tmp3 };
        ChannelStore = obj1;
        arr = result.push(ChannelStore);
      }
      const appChannelBotUserId = self.props.appChannelBotUserId;
      let obj6 = require("DragAndDropUtils");
      closure_8 = navigation(tmp7[16]).areChannelsLocked(channel, channel, appChannelBotUserId);
      const obj3 = navigation(tmp7[16]);
      closure_9 = navigation(tmp7[16]).areChannelsLocked(
        channel,
        obj.getChannel(channel.parent_id),
        appChannelBotUserId,
      );
      self.setState({ submitting: true }, () => {
        if (null != channel) {
          if (closure_9) {
            if (!closure_8) {
              obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
              const intl = util.intl;
              obj.title = intl.string(util.t.YWMtRe);
              const intl2 = util.intl;
              obj = { channelName: null, categoryName: null };
              const obj4 = useChannelName;
              obj.channelName = obj4.computeChannelName(channel, UserStore, RelationshipStore, true);
              obj.categoryName = useChannelName.computeChannelName(tmp, UserStore, RelationshipStore);
              obj.body = intl2.format(util.t["iKW+jY"], obj);
              const intl3 = util.intl;
              obj.confirmText = intl3.string(util.t.eW8Gy4);
              const intl4 = util.intl;
              obj.cancelText = intl4.string(util.t.s4uM3b);
              obj.onConfirm = function onConfirm() {
                id.lock_permissions = true;
                if (null == guildId) {
                  const _Error = Error;
                  const error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
                  throw error;
                } else {
                  obj = channel(channel[17]);
                  channel(channel[17])
                    .batchChannelUpdate(tmp, closure_1_7)
                    .then(() => closure_1_2.pop());
                }
              };
              obj.onCancel = saveUpdates;
              obj.show(obj);
            }
          }
        }
        if (null == guildId) {
          let _Error = Error;
          let error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
          throw error;
        } else {
          GuildActionCreatorsDefault.batchChannelUpdate(tmp24, result).then(() => closure_1_2.pop());
          const batchChannelUpdateResult = GuildActionCreatorsDefault.batchChannelUpdate(tmp24, result);
        }
      });
    }
    tmp6 = channel;
  }
};
prototype["renderCategory"] = function renderCategory(label) {
  const self = this;
  return map1(
    TableRow.TableRow,
    {
      label: label.name,
      onPress() {
        return self.handleSetCategory(label.id);
      },
    },
    label.id,
  );
};
prototype["renderCategories"] = function renderCategories() {
  const self = this;
  let arr = _toArray(this.state.categories);
  const substr = arr.slice(0);
  const category = this.state.category;
  if (null != category) {
    substr.splice(substr.indexOf(category), 1);
  }
  let tmp2 = null != substr[0];
  if (tmp2) {
    tmp2 = "null" === substr[0].id;
  }
  if (tmp2) {
    arr = substr.shift();
  }
  const mapped = substr.map(self.renderCategory, self);
  let tmp4 = null;
  if (mapped.length > 0) {
    const obj = { hasIcons: false, children: mapped };
    tmp4 = map1(TableRowGroup.TableRowGroup, obj);
  }
  return tmp4;
};
prototype["render"] = function render() {
  const self = this;
  const category = this.state.category;
  const first = _slicedToArray(this.state.categories, 1)[0];
  const tmp2 = closure_15(this.context);
  let obj = { style: tmp2.screenContainer, children: null };
  obj = { style: tmp2.stackPadding, spacing: nativeDefault.space.PX_24, children: null };
  const intl = util.intl;
  if (null != category) {
    let name = category.name;
  } else {
    const intl2 = tmp4(1114).intl;
    name = intl2.string(tmp4(1114).t.GSfOoo);
  }
  obj = {
    variant: "text-md/medium",
    color: "text-muted",
    children: intl.formatToPlainString(util.t.OqccVl, { categoryName: name }),
  };
  const items = [map1(Text_Text.Text, obj), ,];
  let tmp3Result = null;
  if (null != first) {
    tmp3Result = null;
    if ("null" === first.id) {
      tmp3Result = null;
      if (null != category) {
        const obj1 = { hasIcons: false, children: null };
        const obj2 = {
          label: first.name,
          onPress() {
            return self.handleSetCategory(first.id);
          },
        };
        obj1.children = tmp3(tmp4(5605).TableRow, obj2, first.id);
        tmp3Result = tmp3(tmp4(5687).TableRowGroup, obj1);
      }
    }
  }
  items[1] = tmp3Result;
  items[2] = self.renderCategories();
  obj.children = items;
  obj.children = closure_1_14(Stack_Stack.Stack, obj);
  return map1(Form.Form, obj);
};
ChannelSettingsChangeCategory.contextType = fn(4271).ThemeContext;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeCategory.tsx");

export default function ConnectedChannelSettingsChangeCategory(channelId) {
  channelId = channelId.channelId;
  const items = [ChannelStore];
  const channel = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const obj = channelId(504);
  const navigation = channelId(1483).useNavigation();
  const obj2 = channelId(1483);
  const appChannelBotUserId = channelId(11610).useAppChannelBotUserId(channel);
  _modDef38(null != channel, "ConnectedChannelSettingsChangeCategory: channel cannot be undefined");
  return closure_13(ChannelSettingsChangeCategory, { channel, navigation, appChannelBotUserId });
}
