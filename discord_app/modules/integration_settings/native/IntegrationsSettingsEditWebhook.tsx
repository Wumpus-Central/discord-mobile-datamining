// discord_app/modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import common_AlertDefault from "../../../components_native/common/Alert.tsx";
import NavScrim from "../../../design/components/Navigator/native/NavScrim.android.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import PressableNavigatorModalIconDefault from "../../main_tabs_v2/native/shared_components/navigator/PressableNavigatorModalIcon.tsx";
import openChannelPickerDefault from "../../channel/native/openChannelPicker.tsx";
import WebhooksActionCreatorsDefault from "../../../actions/WebhooksActionCreators.tsx";
import IconLabelBlockDefault from "../../../components_native/common/IconLabelBlock.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
let closure_3 = fn(2012).GUILD_SELECTABLE_CHANNELS_KEY;
const Constants = fn(1074);
({
  Endpoints: closure_7,
  NON_USER_BOT_DISCRIMINATOR: closure_8,
  Permissions: closure_9,
  WebhookTypes: c10,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { form: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, row: null, channelIcon: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.row = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.channelIcon = { height: 16, width: 16, opacity: 0.6 };
let closure_14 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class EditWebhook extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = {
      avatar: applyArgumentsResult.props.avatar,
      name: applyArgumentsResult.props.name,
      channel: applyArgumentsResult.props.channel,
      hasChanges: false,
      submitting: false,
      copied: false,
    };
    applyArgumentsResult.handleSave = function handleSave() {
      if (navigation.state.hasChanges) {
        ({ state, props } = obj);
        navigation = props.navigation;
        const obj2 = { name: state.name, channel_id: state.channel.id, avatar: state.avatar };
        ({ guildId, webhookId } = props);
        obj.setState({ submitting: true });
        const updateResult = WebhooksActionCreatorsDefault.update(guildId, webhookId, obj2);
        WebhooksActionCreatorsDefault.update(guildId, webhookId, obj2)
          .then(() => {
            navigation.pop();
          })
          .catch((error) => {
            navigation.setState({ errors: error.body, submitting: false });
          });
        const nextPromise = WebhooksActionCreatorsDefault.update(guildId, webhookId, obj2).then(() => {
          navigation.pop();
        });
      }
    };
    applyArgumentsResult.handleGuildIconUpload = function handleGuildIconUpload(avatar) {
      avatar = applyArgumentsResult.props.avatar;
      if (avatar !== avatar) {
        const obj2 = { hasChanges: true, avatar };
        applyArgumentsResult.setState(obj2);
      } else {
        const obj3 = { hasChanges: false, avatar };
        applyArgumentsResult.setState(obj3);
      }
    };
    applyArgumentsResult.handleNameChange = function handleNameChange(name) {
      name = applyArgumentsResult.props.name;
      if (name !== name) {
        const obj2 = { hasChanges: true, name };
        applyArgumentsResult.setState(obj2);
      } else {
        const obj3 = { hasChanges: false, name };
        applyArgumentsResult.setState(obj3);
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
            const obj2 = { hasChanges: true, channel: id };
            applyArgumentsResult.setState(obj2);
          } else {
            const obj = { hasChanges: false, channel: tmp };
            applyArgumentsResult.setState(obj);
          }
        },
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
      WebhooksActionCreatorsDefault.delete(guildId, webhookId)
        .then(() => {
          navigation.pop();
        })
        .catch(() => {
          const obj2 = { title: null, body: null };
          const intl = navigation(1114).intl;
          obj2.title = intl.string(navigation(1114).t.N5riYn);
          const intl2 = navigation(1114).intl;
          obj2.body = intl2.string(navigation(1114).t["/4TwKf"]);
          closure_1_1(4981).show(obj2);
        });
    };
    applyArgumentsResult.handleDeleteWebhook = function handleDeleteWebhook() {
      const name = applyArgumentsResult.props.name;
      const obj2 = {
        title: null,
        body: null,
        cancelText: null,
        confirmText: null,
        onConfirm: null,
        confirmColor: null,
      };
      const intl = util.intl;
      obj2.title = intl.formatToPlainString(util.t.QVFjHh, { name });
      const intl2 = util.intl;
      obj2.body = intl2.format(util.t["rIWe+5"], { name });
      const intl3 = util.intl;
      obj2.cancelText = intl3.string(util.t.gm1Vej);
      const intl4 = util.intl;
      obj2.confirmText = intl4.string(util.t.p89ACt);
      obj2.onConfirm = applyArgumentsResult.handleConfirmDeleteWebhook;
      obj2.confirmColor = common_AlertDefault.Colors.RED;
      actions_AlertActionCreatorsDefault.show(obj2);
    };
    applyArgumentsResult.handleCancelChanges = function handleCancelChanges() {
      applyArgumentsResult.setState({
        avatar: applyArgumentsResult.props.avatar,
        name: applyArgumentsResult.props.name,
        channel: applyArgumentsResult.props.channel,
        hasChanges: false,
        submitting: false,
        copied: false,
      });
    };
    return applyArgumentsResult;
  }
}
const prototype = EditWebhook.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  if (obj.isAndroid()) {
    const self = this;
    const navigation = this.props.navigation;
    const obj2 = {
      headerLeft() {
        return closure_2_11(PressableNavigatorModalIconDefault, { navigation, type: "back" });
      },
      headerBackVisible: false,
    };
    navigation.setOptions(obj2);
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
          headerBackVisible: false,
        };
        navigation.setOptions(obj);
      }
    }
    if (hasChanges) {
      const obj2 = {
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
        headerBackVisible: false,
      };
      navigation.setOptions(obj2);
    } else {
      const obj3 = {
        headerRight: "Array",
        headerLeft() {
          return closure_2_11(PressableNavigatorModalIconDefault, { navigation, type: "back" });
        },
        headerBackVisible: null,
      };
      navigation.setOptions(obj3);
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
  const obj = { style: tmp.form, contentContainerStyle: null, children: null };
  const items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
  obj.contentContainerStyle = items;
  const obj2 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: tmp.row.padding }, children: null };
  let tmp2Result3 = null;
  if (props.webhookType !== constants.CHANNEL_FOLLOWER) {
    const obj3 = { iconProps: null, label: null };
    const obj4 = {
      onUpload: self.handleGuildIconUpload,
      type: "avatar",
      icon: avatar,
      name,
      makeURL(avatar) {
        return AvatarUtils.getUserAvatarURL({ id: webhookId, avatar, discriminator });
      },
      disabled: false,
    };
    obj3.iconProps = obj4;
    const intl2 = tmp3(1114).intl;
    obj3.label = intl2.string(tmp3(1114).t["7+5GQa"]);
    tmp2Result3 = closure_11(IconLabelBlockDefault, obj3);
    const tmp8Result = IconLabelBlockDefault;
  }
  const items1 = [tmp2Result3, , , ,];
  const obj5 = { label: null, value: null, onChange: null, errorMessage: null };
  const intl3 = tmp3(1114).intl;
  obj5.label = intl3.string(webhookId(1114).t.ukdxuo);
  obj5.value = name;
  obj5.onChange = self.handleNameChange;
  let first;
  if (undefined !== errors) {
    if (undefined !== errors.name) {
      first = errors.name[0];
    }
  }
  obj5.errorMessage = first;
  items1[1] = closure_11(webhookId(6707).TextInput, obj5);
  const obj6 = { title: null, hasIcons: true, children: null };
  const intl4 = tmp3(1114).intl;
  obj6.title = intl4.string(webhookId(1114).t.GK18KJ);
  const obj7 = { label: null, arrow: true, onPress: null, icon: null };
  const tmp2Result = closure_11(webhookId(4632).Text, {
    variant: "text-sm/medium",
    color: "text-link",
    children: stringResult,
  });
  obj7.label = webhookId(4789).computeChannelName(channel, UserStore, RelationshipStore);
  obj7.onPress = self.handleChannelChange;
  const obj8 = { size: webhookId(1176).Icon.Sizes.CUSTOM, source: null, style: null };
  const tmp3Result = webhookId(4789);
  obj8.source = webhookId(5109).getChannelIcon(channel);
  obj8.style = tmp.channelIcon;
  obj7.icon = closure_11(webhookId(1176).Icon, obj8);
  obj6.children = closure_11(webhookId(5686).TableRow, obj7);
  items1[2] = closure_11(webhookId(5768).TableRowGroup, obj6);
  let tmp2Result4 = null;
  if (null != token) {
    const obj9 = { title: null, hasIcons: false, children: null };
    const intl5 = tmp3(1114).intl;
    obj9.title = intl5.string(tmp3(1114).t.SFdvF1);
    const obj10 = { label: null, onPress: null, trailing: null };
    const aPIBaseURL = tmp3(1270).getAPIBaseURL(false);
    const _HermesInternal = HermesInternal;
    obj10.label = "" + aPIBaseURL + closure_7.WEBHOOK_INTEGRATION(webhookId, token);
    obj10.onPress = self.handleCopyUrl;
    obj10.trailing = tmp2Result;
    obj9.children = closure_11(tmp3(5686).TableRow, obj10);
    tmp2Result4 = closure_11(tmp3(5768).TableRowGroup, obj9);
    const tmp3Result4 = tmp3(1270);
  }
  items1[3] = tmp2Result4;
  const obj11 = { hasIcons: false, children: null };
  const obj12 = { variant: "danger", onPress: self.handleDeleteWebhook, label: null };
  const intl6 = tmp3(1114).intl;
  obj12.label = intl6.string(webhookId(1114).t.oyYWHE);
  obj11.children = closure_11(webhookId(5686).TableRow, obj12);
  items1[4] = closure_11(webhookId(5768).TableRowGroup, obj11);
  obj2.children = items1;
  obj.children = closure_12(webhookId(5054).Stack, obj2);
  return closure_11(webhookId(8716).Form, obj);
};
EditWebhook.contextType = fn(4347).ThemeContext;
const size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx");

export default function ConnectedEditWebhook(arg0) {
  const obj2 = { children: null };
  const merged = Object.assign(arg0);
  const items = [
    closure_1_11(EditWebhook, { navigation: useNavigation.useNavigation() }),
    closure_1_11(NavScrim.NavScrim, {}),
  ];
  obj2.children = items;
  return closure_1_12(map1, obj2);
}
