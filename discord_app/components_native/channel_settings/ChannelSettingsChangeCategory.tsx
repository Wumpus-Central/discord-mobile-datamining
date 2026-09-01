// discord_app/components_native/channel_settings/ChannelSettingsChangeCategory.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import TableRowGroupTitle from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import closure_4 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../_runtime/00853__toArray.js";
import closure_6 from "../../stores/ChannelStore.tsx";
import closure_7 from "../../stores/GuildCategoryStore.tsx";
import closure_8 from "../../stores/GuildStore.tsx";
import closure_9 from "../../stores/PermissionStore.tsx";
import closure_10 from "../../stores/RelationshipStore.tsx";
import closure_11 from "../../stores/UserStore.tsx";
import { Permissions } from "../../Constants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../_runtime/00019_noop.js";

require = arg1;
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { screenContainer: null, stackPadding: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_15 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const Component = importAllResult.Component;
class ChannelSettingsChangeCategory extends Component {
  constructor(arg0) {
    tmp3 = new ChannelSettingsChangeCategory(global, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    channel = global.channel;
    closure_0 = closure_8.getGuild(channel.getGuildId());
    channel2 = global.channel;
    obj = { category: null, categories: null, submitting: false };
    categories = closure_7.getCategories(channel2.getGuildId());
    obj[0] = closure_6.getChannel(global.channel.parent_id);
    _categories = categories._categories;
    mapped = _categories.map((channel) => channel.channel);
    obj[1] = mapped.filter((id) => {
      let canResult = "null" === id.id;
      if (canResult) {
        canResult = closure_1_9.can(closure_1_12.MANAGE_CHANNELS, closure_0);
      }
      if (!canResult) {
        let canResult1 = closure_1_9.can(closure_1_12.MANAGE_CHANNELS, id);
        if (canResult1) {
          canResult1 = closure_1_9.can(closure_1_12.VIEW_CHANNEL, id);
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
  let _require = id;
  function saveUpdates() {
    if (null == guildId) {
      const _Error = Error;
      error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
      throw error;
    } else {
      obj = channel(channel[17]);
      return channel(channel[17]).batchChannelUpdate(tmp, closure_7).then(() => arr.pop());
    }
  }
  const props = this.props;
  let channel = props.channel;
  const navigation = props.navigation;
  let obj = obj1;
  channel = obj1.getChannel(id);
  const guildId = channel.getGuildId();
  if (null == guildId) {
    const _Error2 = Error;
    error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
    throw error;
  } else {
    let tmp3 = null;
    if ("null" !== id) {
      tmp3 = id;
    }
    _require = tmp3;
    const categories = store.getCategories(channel.getGuildId());
    let arr = channel(channel[14])(categories._categories, categories, (channel) => channel.channel.type === channel.type);
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
          let arr = obj[String(undefined, channel.channel.parent_id)];
          arr = undefined;
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
      obj = { oldOrdering: null, newOrdering: null, idGetter: null, existingPositionGetter: null };
      obj[0] = arr;
      obj[1] = tmp28;
      obj[2] = function idGetter(channel) {
        return channel.channel.id;
      };
      obj[3] = function existingPositionGetter(channel) {
        return channel.channel.position;
      };
      const result = _require(tmp7[15]).calculatePositionDeltas(obj);
      store = result;
      if (result.length > 0) {
        const found1 = result.find((id) => {
          let flag = id.id === channel.id;
          if (flag) {
            id.parent_id = closure_0;
            closure_6 = id;
            flag = true;
          }
          return flag;
        });
      } else {
        obj1 = { id: null, parent_id: null };
        obj1[0] = channel.id;
        obj1[1] = tmp3;
        arr = result.push(obj1);
      }
      let obj6 = _require(tmp7[15]);
      closure_8 = navigation(tmp7[16]).areChannelsLocked(channel, channel);
      const obj3 = navigation(tmp7[16]);
      closure_9 = navigation(tmp7[16]).areChannelsLocked(channel, obj.getChannel(channel.parent_id));
      self.setState({ submitting: true }, () => {
        if (null != channel) {
          if (closure_9) {
            if (!closure_8) {
              obj = channel(channel[18]);
              obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null };
              const intl = id(channel[19]).intl;
              obj[0] = intl.string(id(channel[19]).t.YWMtRe);
              const intl2 = id(channel[19]).intl;
              obj = { channelName: null, categoryName: null };
              const obj4 = id(channel[20]);
              obj[0] = obj4.computeChannelName(channel, closure_1_11, saveUpdates, true);
              obj[1] = id(channel[20]).computeChannelName(tmp, closure_1_11, saveUpdates);
              obj[1] = intl2.format(id(channel[19]).t["iKW+jY"], obj);
              const intl3 = id(channel[19]).intl;
              obj[2] = intl3.string(id(channel[19]).t.eW8Gy4);
              const intl4 = id(channel[19]).intl;
              obj[3] = intl4.string(id(channel[19]).t.s4uM3b);
              obj[4] = function onConfirm() {
                closure_6.lock_permissions = true;
                if (null == closure_4) {
                  const _Error = Error;
                  error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
                  throw error;
                } else {
                  obj = closure_1_1(closure_1_3[17]);
                  closure_1_1(closure_1_3[17]).batchChannelUpdate(tmp, closure_7).then(() => arr.pop());
                }
              };
              obj[5] = saveUpdates;
              obj.show(obj);
              const obj5 = id(channel[20]);
            }
          }
        }
        if (null == guildId) {
          let _Error = Error;
          error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
          throw error;
        } else {
          const obj6 = channel(channel[17]);
          channel(channel[17]).batchChannelUpdate(tmp24, closure_7).then(() => arr.pop());
          const batchChannelUpdateResult = channel(channel[17]).batchChannelUpdate(tmp24, closure_7);
        }
      });
    }
    tmp6 = channel;
  }
};
prototype["renderCategory"] = function renderCategory(label) {
  const self = this;
  const _require = label;
  return callback3(require("../../design/components/TableRow/native/TableRow.native.tsx").TableRow, {
    label: label.name,
    onPress() {
      return self.handleSetCategory(label.id);
    }
  }, label.id);
};
prototype["renderCategories"] = function renderCategories() {
  const self = this;
  let arr = callback2(this.state.categories);
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
    const obj = { hasIcons: false, children: null };
    obj[1] = mapped;
    tmp4 = callback3(TableRowGroupTitle.TableRowGroup, obj);
  }
  return tmp4;
};
prototype["render"] = function render() {
  let self = this;
  self = this;
  const category = this.state.category;
  const first = callback(this.state.categories, 1)[0];
  const tmp2 = callback4(this.context);
  let obj = { style: tmp2.screenContainer, children: null };
  obj = { style: tmp2.stackPadding, spacing: self(712).space.PX_24, children: null };
  const intl = first(1236).intl;
  if (null != category) {
    let name = category.name;
  } else {
    const intl2 = tmp4(1236).intl;
    name = intl2.string(tmp4(1236).t.GSfOoo);
  }
  obj = { variant: "text-md/medium", color: "text-muted", children: intl.formatToPlainString(first(1236).t.OqccVl, { categoryName: name }) };
  const items = [closure_13(first(4474).Text, obj), , ];
  let tmp3Result = null;
  if (null != first) {
    tmp3Result = null;
    if ("null" === first.id) {
      tmp3Result = null;
      if (null != category) {
        obj1 = { hasIcons: false, children: null };
        const obj2 = { label: null, onPress: null };
        obj2[0] = first.name;
        obj2[1] = function onPress() {
          return self.handleSetCategory(first.id);
        };
        obj1[1] = tmp3(tmp4(5599).TableRow, obj2, first.id);
        tmp3Result = tmp3(tmp4(5992).TableRowGroup, obj1);
      }
    }
  }
  items[1] = tmp3Result;
  items[2] = self.renderCategories();
  obj[2] = items;
  obj[1] = closure_14(first(4926).Stack, obj);
  return closure_13(first(8363).Form, obj);
};
ChannelSettingsChangeCategory.contextType = require("ManaContext").ThemeContext;
let obj1 = { paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
let result = require("set").fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeCategory.tsx");

export default function ConnectedChannelSettingsChangeCategory(channelId) {
  channelId = channelId.channelId;
  const items = [closure_6];
  const channel = channelId(589).useStateFromStores(items, () => closure_1_6.getChannel(channelId));
  const obj = channelId(589);
  const navigation = channelId(1499).useNavigation();
  _modDef38(null != channel, "ConnectedChannelSettingsChangeCategory: channel cannot be undefined");
  return callback3(ChannelSettingsChangeCategory, { channel, navigation });
};