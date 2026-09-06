// === Module 16850: IntegrationsSettingsEditWebhook ===

// Module 16850 (IntegrationsSettingsEditWebhook)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import useNavigation from "useNavigation" /* 1483 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import NavScrim from "NavScrim" /* 7040 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import PressableNavigatorModalIconDefault from "PressableNavigatorModalIcon" /* 7870 */;
import openChannelPickerDefault from "openChannelPicker" /* 11329 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 16843 */;
import IconLabelBlockDefault from "IconLabelBlock" /* 16851 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_3 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const Constants = fn(1074);
({ Endpoints: closure_7, NON_USER_BOT_DISCRIMINATOR: closure_8, Permissions: closure_9, WebhookTypes: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
let createStyles = { form: null, row: null, channelIcon: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.form = createStyles;
createStyles.row = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.channelIcon = { height: 16, width: 16, opacity: 0.6 };
let closure_14 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class EditWebhook extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { avatar: applyArgumentsResult.props.avatar, name: applyArgumentsResult.props.name, channel: applyArgumentsResult.props.channel, hasChanges: false, submitting: false, copied: false };
    applyArgumentsResult.handleSave = function handleSave() {
      let obj = navigation;
      if (navigation.state.hasChanges) {
        ({ state, props } = obj);
        navigation = props.navigation;
        obj = { name: state.name, channel_id: state.channel.id, avatar: state.avatar };
        ({ guildId, webhookId } = props);
        obj.setState({ submitting: true });
        const updateResult = WebhooksActionCreatorsDefault.update(guildId, webhookId, obj);
        WebhooksActionCreatorsDefault.update(guildId, webhookId, obj).then(() => {
          navigation.pop();
        }).catch((error) => {
          navigation.setState({ errors: error.body, submitting: false });
        });
        const nextPromise = WebhooksActionCreatorsDefault.update(guildId, webhookId, obj).then(() => {
          navigation.pop();
        });
      }
    };
    applyArgumentsResult.handleGuildIconUpload = function handleGuildIconUpload(avatar) {
      let obj = applyArgumentsResult;
      avatar = applyArgumentsResult.props.avatar;
      if (avatar !== avatar) {
        obj = { hasChanges: true, avatar };
        obj.setState(obj);
      } else {
        obj = { hasChanges: false, avatar };
        obj.setState(obj);
      }
    };
    applyArgumentsResult.handleNameChange = function handleNameChange(name) {
      let obj = applyArgumentsResult;
      name = applyArgumentsResult.props.name;
      if (name !== name) {
        obj = { hasChanges: true, name };
        obj.setState(obj);
      } else {
        obj = { hasChanges: false, name };
        obj.setState(obj);
      }
    };
    applyArgumentsResult.handleChannelChange = function handleChannelChange() {
      channel = channel.props.channel;
      openChannelPickerDefault({
        guildId: channel.props.guildId,
        channelType,
        filterFn(channel) {
          return closure_1_4.can(constants.MANAGE_WEBHOOKS, channel.channel);
        },
        selectedChannel: channel,
        onSelect(id) {
          if (id.id !== channel.id) {
            let obj = { hasChanges: true, channel: id };
            applyArgumentsResult.setState(obj);
          } else {
            obj = { hasChanges: false, channel: tmp };
            applyArgumentsResult.setState(obj);
          }
        }
      });
    };
    applyArgumentsResult.handleCopyUrl = function handleCopyUrl() {
      const token = applyArgumentsResult.props.token;
      if (null != token) {
        const aPIBaseURL = HTTPUtils.getAPIBaseURL(false);
        const _HermesInternal = HermesInternal;
        const combined = "" + aPIBaseURL + React5.WEBHOOK_INTEGRATION(tmp, token);
        ClipboardUtils.copy(combined, () => state.setState({ copied: true }));
      }
    };
    applyArgumentsResult.handleConfirmDeleteWebhook = function handleConfirmDeleteWebhook() {
      const props = applyArgumentsResult.props;
      const navigation = props.navigation;
      ({ guildId, webhookId } = props);
      const deleteResult = WebhooksActionCreatorsDefault.delete(guildId, webhookId);
      WebhooksActionCreatorsDefault.delete(guildId, webhookId).then(() => {
        navigation.pop();
      }).catch(() => {
        closure_1_1(4905);
        const obj = { title: null, body: null };
        const intl = navigation(1114).intl;
        obj.title = intl.string(navigation(1114).t.N5riYn);
        const intl2 = navigation(1114).intl;
        obj.body = intl2.string(navigation(1114).t["/4TwKf"]);
        obj.show(obj);
      });
    };
    applyArgumentsResult.handleDeleteWebhook = function handleDeleteWebhook() {
      const name = applyArgumentsResult.props.name;
      const obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl = util.intl;
      obj.title = intl.formatToPlainString(util.t.QVFjHh, { name });
      const intl2 = util.intl;
      obj.body = intl2.format(util.t["rIWe+5"], { name });
      const intl3 = util.intl;
      obj.cancelText = intl3.string(util.t.gm1Vej);
      const intl4 = util.intl;
      obj.confirmText = intl4.string(util.t.p89ACt);
      obj.onConfirm = applyArgumentsResult.handleConfirmDeleteWebhook;
      obj.confirmColor = common_AlertDefault.Colors.RED;
      obj.show(obj);
    };
    applyArgumentsResult.handleCancelChanges = function handleCancelChanges() {
      applyArgumentsResult.setState({ avatar: applyArgumentsResult.props.avatar, name: applyArgumentsResult.props.name, channel: applyArgumentsResult.props.channel, hasChanges: false, submitting: false, copied: false });
    };
    return applyArgumentsResult;
  }
}
const prototype = EditWebhook.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  let obj = navigation(1115);
  if (obj.isAndroid()) {
    const self = this;
    navigation = this.props.navigation;
    obj = {
      headerLeft() {
          return closure_2_11(PressableNavigatorModalIconDefault, { navigation, type: "back" });
        },
      headerBackVisible: false
    };
    navigation.setOptions(obj);
  }
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0, submitting) {
  const self = this;
  const navigation = this.props.navigation;
  ({ submitting, hasChanges } = this.state);
  if (submitting !== submitting.submitting) {
    if (submitting) {
      if (!submitting.submitting) {
        let obj = {
          headerRight() {
                  return closure_1_11(navigation(dependencyMap[12]).HeaderSubmittingIndicator, {});
                },
          headerLeft() {
                  return null;
                },
          headerBackVisible: false
        };
        navigation.setOptions(obj);
      }
    }
    if (hasChanges) {
      obj = {
        headerRight() {
              const obj = { onPress: self.handleSave, label: null };
              const intl = util.intl;
              obj.label = intl.string(util.t["R3BPH+"]);
              return closure_2_11(HeaderShared.HeaderTextButton, obj);
            },
        headerLeft() {
              const obj = { onPress: self.handleCancelChanges, label: null };
              const intl = util.intl;
              obj.label = intl.string(util.t["ETE/oC"]);
              return closure_2_11(HeaderShared.HeaderTextButton, obj);
            },
        headerBackVisible: false
      };
      navigation.setOptions(obj);
    } else {
      obj = {
        headerRight: "Array",
        headerLeft() {
              return closure_2_11(PressableNavigatorModalIconDefault, { navigation, type: "back" });
            },
        headerBackVisible: null
      };
      navigation.setOptions(obj);
    }
  }
};
prototype["render"] = function render() {
  const self = this;
  const tmp = closure_14(this.context);
  const props = this.props;
  const webhookId = props.webhookId;
  const token = props.token;
  const state = this.state;
  ({ name, channel, errors } = state);
  ({ avatar, copied } = state);
  const intl = webhookId(1114).intl;
  const string = intl.string;
  const t = webhookId(1114).t;
  if (copied) {
    let stringResult = string(t.t5VZ88);
  } else {
    stringResult = string(t.OpuAlK);
  }
  closure_11(webhookId(4556).Text, { variant: "text-sm/medium", color: "text-link", children: stringResult });
  let obj = { style: tmp.form, contentContainerStyle: null, children: null };
  const items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
  obj.contentContainerStyle = items;
  obj = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: tmp.row.padding }, children: null };
  let tmp2Result = null;
  if (props.webhookType !== constants.CHANNEL_FOLLOWER) {
    obj = { iconProps: null, label: null };
    const obj1 = {
      onUpload: self.handleGuildIconUpload,
      type: "avatar",
      icon: avatar,
      name,
      makeURL(avatar) {
          const obj = { id: webhookId, avatar, discriminator };
          return obj.getUserAvatarURL(obj);
        },
      disabled: false
    };
    obj.iconProps = obj1;
    const intl2 = tmp3(1114).intl;
    obj.label = intl2.string(tmp3(1114).t["7+5GQa"]);
    tmp2Result = closure_11(IconLabelBlockDefault, obj);
    const tmp8Result = IconLabelBlockDefault;
  }
  const items1 = [tmp2Result, , , , ];
  const obj2 = { label: null, value: null, onChange: null, errorMessage: null };
  const intl3 = tmp3(1114).intl;
  obj2.label = intl3.string(webhookId(1114).t.ukdxuo);
  obj2.value = name;
  obj2.onChange = self.handleNameChange;
  let first;
  if (undefined !== errors) {
    if (undefined !== errors.name) {
      first = errors.name[0];
    }
  }
  obj2.errorMessage = first;
  items1[1] = closure_11(webhookId(6606).TextInput, obj2);
  const obj3 = { title: null, hasIcons: true, children: null };
  const intl4 = tmp3(1114).intl;
  obj3.title = intl4.string(webhookId(1114).t.GK18KJ);
  const obj4 = { label: null, arrow: true, onPress: null, icon: null };
  let tmp3Result = tmp3(4713);
  obj4.label = tmp3Result.computeChannelName(channel, UserStore, RelationshipStore);
  obj4.onPress = self.handleChannelChange;
  const obj5 = { size: webhookId(1178).Icon.Sizes.CUSTOM, source: null, style: null };
  tmp3Result = tmp3(5028);
  obj5.source = tmp3Result.getChannelIcon(channel);
  obj5.style = tmp.channelIcon;
  obj4.icon = closure_11(webhookId(1178).Icon, obj5);
  obj3.children = closure_11(webhookId(5605).TableRow, obj4);
  items1[2] = closure_11(webhookId(5687).TableRowGroup, obj3);
  let tmp2Result1 = null;
  if (null != token) {
    const obj6 = { title: null, hasIcons: false, children: null };
    const intl5 = tmp3(1114).intl;
    obj6.title = intl5.string(tmp3(1114).t.SFdvF1);
    const obj7 = { label: null, onPress: null, trailing: null };
    const aPIBaseURL = tmp3(1272).getAPIBaseURL(false);
    const _HermesInternal = HermesInternal;
    obj7.label = "" + aPIBaseURL + closure_7.WEBHOOK_INTEGRATION(webhookId, token);
    obj7.onPress = self.handleCopyUrl;
    obj7.trailing = tmp2Result;
    obj6.children = closure_11(tmp3(5605).TableRow, obj7);
    tmp2Result1 = closure_11(tmp3(5687).TableRowGroup, obj6);
    const tmp3Result1 = tmp3(1272);
  }
  items1[3] = tmp2Result1;
  const obj8 = { hasIcons: false, children: null };
  const obj9 = { variant: "danger", onPress: self.handleDeleteWebhook, label: null };
  const intl6 = tmp3(1114).intl;
  obj9.label = intl6.string(webhookId(1114).t.oyYWHE);
  obj8.children = closure_11(webhookId(5605).TableRow, obj9);
  items1[4] = closure_11(webhookId(5687).TableRowGroup, obj8);
  obj.children = items1;
  obj.children = closure_12(webhookId(4973).Stack, obj);
  return closure_11(webhookId(8593).Form, obj);
};
EditWebhook.contextType = fn(4271).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx");

export default function ConnectedEditWebhook(arg0) {
  let obj = { children: null };
  obj = { navigation: obj.useNavigation() };
  const merged = Object.assign(arg0);
  const items = [closure_1_11(EditWebhook, obj), closure_1_11(NavScrim.NavScrim, {})];
  obj.children = items;
  return closure_1_12(map1, obj);
};