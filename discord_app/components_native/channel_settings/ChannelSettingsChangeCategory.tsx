// discord_app/components_native/channel_settings/ChannelSettingsChangeCategory.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../Constants.tsx";
import intl5 from "../../intl/index.native.tsx";
import native from "../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import useChannelName from "../../modules/channel/useChannelName.tsx";
import Stack_Stack from "../../design/components/Stack/native/Stack.native.tsx";
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import TableRow from "../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import Form2 from "../../design/void/Form/native/index.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _toArray from "../../../_runtime/00729__toArray.js";
import react from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildCategoryStore_mod from "../../stores/GuildCategoryStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, channelId, navigation;

let closure_14;
let map1;
let obj2;
let obj3;
let GuildCategoryStore = GuildCategoryStore_mod;
const Permissions = Constants.Permissions;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { screenContainer: obj2, stackPadding: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingTop: nativeDefault.space.PX_16 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_15 = createLegacyClassComponentStyles(obj);
const Component = react.Component;
class ChannelSettingsChangeCategory extends Component {
  constructor(channel) {
    let closure_0;
    let mapped;
    const tmp3 = new ChannelSettingsChangeCategory(channel, tmp2, tmp);
    channel = channel.channel;
    const guild = GuildStore.getGuild(channel.getGuildId());
    const channel2 = channel.channel;
    const obj = {
      category: ChannelStore.getChannel(channel.channel.parent_id),
      categories: mapped.filter((id) => {
        let canResult = "null" === id.id && PermissionStore.can(Permissions.MANAGE_CHANNELS, closure_0);
        if (!canResult) {
          canResult =
            PermissionStore.can(Permissions.MANAGE_CHANNELS, id) && PermissionStore.can(Permissions.VIEW_CHANNEL, id);
          const canResult1 =
            PermissionStore.can(Permissions.MANAGE_CHANNELS, id) && PermissionStore.can(Permissions.VIEW_CHANNEL, id);
        }
        return canResult;
      }),
      submitting: false,
    };
    const categories = GuildCategoryStore.getCategories(channel2.getGuildId());
    const _categories = categories._categories;
    mapped = _categories.map((channel) => channel.channel);
    tmp3.state = obj;
    return tmp3;
  }
  shouldComponentUpdate() {
    return !this.state.submitting;
  }
  handleSetCategory(id) {
    let obj7;
    let parent_id;
    const f148095 = () => closure_1_2.pop();
    let self = this;
    _require = id;
    function saveUpdates() {
      if (null == guildId) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
        throw error;
      } else {
        const obj = GuildActionCreatorsDefault;
        const batchChannelUpdateResult = obj.batchChannelUpdate(tmp, GuildCategoryStore);
        return batchChannelUpdateResult.then(f148095);
      }
    }
    const props = this.props;
    const channel = props.channel;
    navigation = props.navigation;
    let obj = obj7;
    const channel1 = obj7.getChannel(id);
    const guildId = channel.getGuildId();
    if (null == guildId) {
      const _Error2 = Error;
      const self4 = this;
      const self5 = this;
      let error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
      throw error;
    } else {
      let tmp3 = null;
      if ("null" !== id) {
        tmp3 = id;
      }
      _require = tmp3;
      const categories = GuildCategoryStore.getCategories(channel.getGuildId());
      let arr = channel(channel1[14])(
        categories._categories,
        categories,
        (channel) => channel.channel.type === channel.type,
      );
      const found = arr.find((channel) => channel.channel.id === channel.id);
      const tmp6 = channel;
      if (null == found) {
        let _Error = Error;
        let self2 = this;
        const str = "ChannelSettingsChangeCategory.handleSetCategory: Could not find original channel.";
        const self3 = this;
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
        const arr3 = obj2[String(undefined, tmp3)];
        let arr2 = arr3.push(found);
        let obj5 = {
          oldOrdering: arr,
          newOrdering: tmp6(channel1[14])(categories._categories, obj2),
          idGetter(channel) {
            return channel.channel.id;
          },
          existingPositionGetter(channel) {
            return channel.channel.position;
          },
        };
        const tmp24 = tmp6(channel1[14])(categories._categories, obj2);
        const obj6 = require("DragAndDropUtils");
        const result = obj6.calculatePositionDeltas(obj5);
        GuildCategoryStore = result;
        if (result.length > 0) {
          const found1 = result.find((id) => {
            let flag = id.id === channel.id;
            if (flag) {
              id.parent_id = parent_id;
              flag = true;
            }
            return flag;
          });
        } else {
          obj7 = { id: channel.id, parent_id: tmp3 };
          result.push(obj7);
        }
        const appChannelBotUserId = self.props.appChannelBotUserId;
        let obj3 = navigation(tmp7[16]);
        let closure_8 = obj3.areChannelsLocked(channel, channel1, appChannelBotUserId);
        let obj4 = navigation(tmp7[16]);
        let closure_9 = obj4.areChannelsLocked(channel, obj.getChannel(channel.parent_id), appChannelBotUserId);
        self.setState({ submitting: true }, function () {
          let format;
          let intl;
          let intl3;
          let intl4;
          let obj3;
          let obj4;
          let prop;
          if (null != channel1) {
            if (closure_9) {
              if (!closure_8) {
                let obj = {
                  title: intl.string(intl5.t.YWMtRe),
                  body: format(prop, obj2),
                  confirmText: intl3.string(intl5.t.eW8Gy4),
                  cancelText: intl4.string(intl5.t.s4uM3b),
                  onConfirm() {
                    obj7.lock_permissions = true;
                    if (null == guildId) {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
                      throw error;
                    } else {
                      const obj = channel(channel1[17]);
                      const batchChannelUpdateResult = obj.batchChannelUpdate(tmp, closure_1_7);
                      batchChannelUpdateResult.then(f148095);
                    }
                  },
                  onCancel: saveUpdates,
                  isDismissable: false,
                };
                const show = AlertActionCreatorsDefault.show;
                AlertActionCreatorsDefault;
                intl = intl5.intl;
                const intl2 = intl5.intl;
                format = intl2.format;
                obj2 = {
                  channelName: obj3.computeChannelName(channel, UserStore, RelationshipStore, true),
                  categoryName: obj4.computeChannelName(tmp, UserStore, RelationshipStore),
                };
                prop = intl5.t["iKW+jY"];
                obj3 = useChannelName;
                obj4 = useChannelName;
                intl3 = intl5.intl;
                intl4 = intl5.intl;
                show(obj);
              }
            }
          }
          if (null == guildId) {
            let _Error = Error;
            let self = this;
            let self2 = this;
            let error = new Error("ChannelSettingsChangeCategory.handleSetCategory: Invalid guild_id");
            throw error;
          } else {
            const obj5 = GuildActionCreatorsDefault;
            let batchChannelUpdateResult = obj5.batchChannelUpdate(tmp26, GuildCategoryStore);
            batchChannelUpdateResult.then(f148095);
          }
        });
      }
    }
  }
  renderCategory(label) {
    const self = this;
    let closure_0 = label;
    const obj = {
      label: label.name,
      onPress() {
        return self.handleSetCategory(id.id);
      },
    };
    return map1(TableRow.TableRow, obj, label.id);
  }
  renderCategories() {
    const self = this;
    const arr = _toArray(this.state.categories);
    const substr = arr.slice(0);
    const category = this.state.category;
    if (null != category) {
      substr.splice(substr.indexOf(category), 1);
    }
    const tmp2 = null != substr[0] && "null" === substr[0].id;
    if (tmp2) {
      substr.shift();
    }
    const mapped = substr.map(self.renderCategory, self);
    let tmp4 = null;
    if (mapped.length > 0) {
      const obj = { hasIcons: false, children: mapped };
      tmp4 = map1(TableRowGroup2.TableRowGroup, obj);
    }
    return tmp4;
  }
  render() {
    let Stack;
    let items;
    let name;
    let obj2;
    let obj5;
    const self = this;
    const category = this.state.category;
    const first = _slicedToArray(this.state.categories, 1)[0];
    const tmp2 = closure_15(this.context);
    const obj = { style: tmp2.screenContainer, children: authStore2(Stack, obj2) };
    const Form = Form2.Form;
    obj2 = { style: tmp2.stackPadding, spacing: nativeDefault.space.PX_24, children: items };
    Stack = Stack_Stack.Stack;
    const Text = Text_Text.Text;
    const intl = intl5.intl;
    const formatToPlainString = intl.formatToPlainString;
    const OqccVl = intl5.t.OqccVl;
    if (null != category) {
      name = category.name;
    } else {
      const intl2 = intl5.intl;
      name = intl2.string(intl5.t.GSfOoo);
    }
    items = [, ,];
    const obj3 = {
      variant: "text-md/medium",
      color: "text-muted",
      children: formatToPlainString(OqccVl, { categoryName: name }),
    };
    items[0] = map1(Text, obj3);
    let tmp3Result = null;
    if (null != first) {
      tmp3Result = null;
      if ("null" === first.id) {
        tmp3Result = null;
        if (null != category) {
          const obj4 = { hasIcons: false, children: map1(TableRow.TableRow, obj5, first.id) };
          const TableRowGroup = TableRowGroup2.TableRowGroup;
          obj5 = {
            label: first.name,
            onPress() {
              return self.handleSetCategory(first.id);
            },
          };
          tmp3Result = map1(TableRowGroup, obj4);
        }
      }
    }
    items[1] = tmp3Result;
    items[2] = self.renderCategories();
    return map1(Form, obj);
  }
}
const prototype = ChannelSettingsChangeCategory.prototype;
ChannelSettingsChangeCategory.contextType = native.ThemeContext;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      const obj = channelId(576);
      const cResult = obj.c(7);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function l() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmpResult3 = channelId(1490);
      navigation = tmpResult3.useNavigation();
      const tmpResult4 = channelId(11245);
      const appChannelBotUserId = tmpResult4.useAppChannelBotUserId(stateFromStores);
      _modDef38(null != stateFromStores, "ConnectedChannelSettingsChangeCategory: channel cannot be undefined");
      if (cResult[3] === appChannelBotUserId) {
        if (cResult[4] === stateFromStores) {
          let tmp11;
          if (cResult[5] === navigation) {
            tmp11 = cResult[6];
          }
          return tmp11;
        }
      }
      const tmp12 = closure_13(ChannelSettingsChangeCategory, {
        channel: stateFromStores,
        navigation,
        appChannelBotUserId,
      });
      cResult[3] = appChannelBotUserId;
      cResult[4] = stateFromStores;
      cResult[5] = navigation;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const items = [ChannelStore];
      const obj = channelId(504);
      const channel = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      const obj2 = channelId(1490);
      navigation = obj2.useNavigation();
      const obj3 = channelId(11245);
      const appChannelBotUserId = obj3.useAppChannelBotUserId(channel);
      _modDef38(null != channel, "ConnectedChannelSettingsChangeCategory: channel cannot be undefined");
      return closure_13(ChannelSettingsChangeCategory, { channel, navigation, appChannelBotUserId });
    };
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsChangeCategory.tsx");

export default tmp5;
