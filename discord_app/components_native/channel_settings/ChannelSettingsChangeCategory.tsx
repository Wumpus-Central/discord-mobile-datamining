// === Module 16069: shouldComponentUpdate ===

// Module 16069 (shouldComponentUpdate)
import _modDef38 from "module_38" /* 38 */;
import ThemesDefault from "Themes" /* 712 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 853 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import setIndex from "setIndex" /* 5278 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { Permissions } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult from "noop" /* 19 */;

require = fn;
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: ThemesDefault.space.PX_16 };
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
    mapped = _categories.map((item, index) => item.channel);
    obj[1] = mapped.filter((item, index) => {
      let canResult = "null" === item.id;
      if (canResult) {
        canResult = closure_1_9.can(Permissions.MANAGE_CHANNELS, closure_0);
      }
      if (!canResult) {
        let canResult1 = closure_1_9.can(Permissions.MANAGE_CHANNELS, item);
        if (canResult1) {
          canResult1 = closure_1_9.can(Permissions.VIEW_CHANNEL, item);
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
      return channel(channel[17]).batchChannelUpdate(tmp, closure_7).then((result) => arr.pop());
    }
  }
  const props = this.props;
  const navigation = props.navigation;
  let obj = obj1;
  const channel = obj1.getChannel(id);
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
    const found = arr.find((item, index) => item.channel.id === channel.id);
    if (null == found) {
      let _Error = Error;
      const error1 = new Error("ChannelSettingsChangeCategory.handleSetCategory: Could not find original channel.");
      throw error1;
    } else {
      obj = {};
      const _categories = categories._categories;
      const item = _categories.forEach((item, index) => {
        const items = [];
        obj[item.channel.id] = items;
        return items;
      });
      const item1 = arr.forEach((item, index) => {
        let tmp = item.channel.id !== channel.id;
        if (tmp) {
          const _String = String;
          obj[String(undefined, item.channel.parent_id)];
          let arr;
          if (arr != null) {
            arr = arr.push(item);
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
        const found1 = result.find((item, index) => {
          let flag = item.id === channel.id;
          if (flag) {
            item.parent_id = closure_0;
            closure_6 = item;
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
              channel(channel[18]);
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
                  closure_1_1(closure_1_3[17]).batchChannelUpdate(tmp, closure_7).then((result) => arr.pop());
                  const batchChannelUpdateResult = closure_1_1(closure_1_3[17]).batchChannelUpdate(tmp, closure_7);
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
          channel(channel[17]).batchChannelUpdate(tmp24, closure_7).then((result) => arr.pop());
          let batchChannelUpdateResult = channel(channel[17]).batchChannelUpdate(tmp24, closure_7);
        }
      });
    }
    tmp6 = channel;
  }
};
prototype["renderCategory"] = function renderCategory(label) {
  const self = this;
  const _require = label;
  return callback3(_require(6291).TableRow, {
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
  const self = this;
  const category = this.state.category;
  const first = callback(this.state.categories, 1)[0];
  const tmp2 = callback4(this.context);
  let obj = { style: tmp2.stackPadding, spacing: self(712).space.PX_24, children: null };
  const intl = first(1236).intl;
  if (null != category) {
    let name = category.name;
  } else {
    const intl2 = tmp4(1236).intl;
    name = intl2.string(tmp4(1236).t.GSfOoo);
  }
  obj = { variant: "text-md/medium", color: "text-muted", children: intl.formatToPlainString(first(1236).t.OqccVl, { categoryName: name }) };
  const items = [callback(first(4734).Text, obj), , ];
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
        obj1[1] = callback(tmp4(6291).TableRow, obj2, first.id);
        tmp3Result = callback(tmp4(6286).TableRowGroup, obj1);
      }
    }
  }
  items[1] = tmp3Result;
  items[2] = self.renderCategories();
  obj[2] = items;
  obj[1] = callback2(first(4733).Stack, obj);
  return callback(first(8083).Form, obj);
};
ChannelSettingsChangeCategory.contextType = require("ManaContext").ThemeContext;
let result = require("obj132").fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeCategory.tsx");

export default function ConnectedChannelSettingsChangeCategory(channelId) {
  channelId = channelId.channelId;
  const items = [closure_6];
  const channel = channelId(589).useStateFromStores(items, () => closure_1_6.getChannel(channelId));
  const obj = channelId(589);
  const navigation = channelId(1500).useNavigation();
  _modDef38(null != channel, "ConnectedChannelSettingsChangeCategory: channel cannot be undefined");
  return callback3(ChannelSettingsChangeCategory, { channel, navigation });
};