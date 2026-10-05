// === Module 17029: IntegrationsSettingsEditWebhook ===

// Module 17029 (IntegrationsSettingsEditWebhook)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import useNavigation from "useNavigation" /* 1490 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import native from "native" /* 4589 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import AlertDefault from "Alert" /* 5783 */;
import NavScrim from "NavScrim" /* 6536 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import PressableNavigatorModalIconDefault from "PressableNavigatorModalIcon" /* 7505 */;
import openChannelPickerDefault from "openChannelPicker" /* 12102 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 17022 */;
import IconLabelBlockDefault from "IconLabelBlock" /* 17030 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
let closure_3 = GuildChannelStore.GUILD_SELECTABLE_CHANNELS_KEY;
({ Endpoints: metroImportDefault, NON_USER_BOT_DISCRIMINATOR: metroImportAll, Permissions: c9, WebhookTypes: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let obj = { form: obj2, row: obj3, channelIcon: { height: 16, width: 16, opacity: 0.6 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const authStore2 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class EditWebhook extends PureComponent {
  constructor() {
    let channelType;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.state = { avatar: applyArgumentsResult.props.avatar, name: applyArgumentsResult.props.name, channel: applyArgumentsResult.props.channel, hasChanges: false, submitting: false, copied: false };
    applyArgumentsResult.handleSave = function handleSave() {
      let guildId;
      let props;
      let state;
      let webhookId;
      let obj = navigation;
      if (navigation.state.hasChanges) {
        ({ state, props } = obj);
        navigation = props.navigation;
        const obj2 = { name: state.name, channel_id: state.channel.id, avatar: state.avatar };
        ({ guildId, webhookId } = props);
        obj.setState({ submitting: true });
        const obj3 = WebhooksActionCreatorsDefault;
        const updateResult = obj3.update(guildId, webhookId, obj2);
        const nextPromise = updateResult.then(() => {
          navigation.pop();
        });
        nextPromise.catch((error) => {
          const obj = { errors: error.body, submitting: false };
          navigation.setState(obj);
        });
      }
    };
    applyArgumentsResult.handleGuildIconUpload = function handleGuildIconUpload(avatar) {
      avatar = require.props.avatar;
      if (avatar !== avatar) {
        const obj2 = { hasChanges: true, avatar };
        require.setState(obj2);
      } else {
        const obj3 = { hasChanges: false, avatar };
        require.setState(obj3);
      }
    };
    applyArgumentsResult.handleNameChange = function handleNameChange(name) {
      name = require.props.name;
      if (name !== name) {
        const obj2 = { hasChanges: true, name };
        require.setState(obj2);
      } else {
        const obj3 = { hasChanges: false, name };
        require.setState(obj3);
      }
    };
    applyArgumentsResult.handleChannelChange = function handleChannelChange() {
      let channel;
      channel = channel.props.channel;
      let obj = {
        guildId: channel.props.guildId,
        channelType,
        filterFn(channel) {
          return closure_1_4.can(constants.MANAGE_WEBHOOKS, channel.channel);
        },
        selectedChannel: channel,
        onSelect(id) {
          if (id.id !== channel.id) {
            const obj2 = { hasChanges: true, channel: id };
            require.setState(obj2);
          } else {
            const obj = { hasChanges: false, channel: tmp };
            require.setState(obj);
          }
        }
      };
      const tmp = openChannelPickerDefault(obj);
    };
    applyArgumentsResult.handleCopyUrl = function handleCopyUrl() {
      let state;
      const token = require.props.token;
      if (null != token) {
        const obj = HTTPUtils;
        const aPIBaseURL = obj.getAPIBaseURL(false);
        const _HermesInternal = HermesInternal;
        const combined = "" + aPIBaseURL + metroImportDefault.WEBHOOK_INTEGRATION(tmp, token);
        const obj2 = ClipboardUtils;
        obj2.copy(combined, () => state.setState({ copied: true }));
      }
    };
    applyArgumentsResult.handleConfirmDeleteWebhook = function handleConfirmDeleteWebhook() {
      let guildId;
      let webhookId;
      const props = require.props;
      navigation = props.navigation;
      ({ guildId, webhookId } = props);
      let obj = WebhooksActionCreatorsDefault;
      const deleteResult = obj.delete(guildId, webhookId);
      const nextPromise = deleteResult.then(() => {
        navigation.pop();
      });
      nextPromise.catch(() => {
        let intl;
        let intl2;
        const obj = { title: intl.string(closure_1_0(closure_1_2[14]).t.N5riYn), body: intl2.string(closure_1_0(closure_1_2[14]).t["/4TwKf"]) };
        const show = closure_1_1(closure_1_2[19]).show;
        closure_1_1(closure_1_2[19]);
        intl = closure_1_0(closure_1_2[14]).intl;
        intl2 = closure_1_0(closure_1_2[14]).intl;
        show(obj);
      });
    };
    applyArgumentsResult.handleDeleteWebhook = function handleDeleteWebhook() {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      const name = require.props.name;
      const obj = { title: intl.formatToPlainString(intl7.t.QVFjHh, { name }), body: intl2.format(intl7.t["rIWe+5"], { name }), cancelText: intl3.string(intl7.t.gm1Vej), confirmText: intl4.string(intl7.t.p89ACt), onConfirm: require.handleConfirmDeleteWebhook, confirmColor: AlertDefault.Colors.RED };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl7.intl;
      intl2 = intl7.intl;
      intl3 = intl7.intl;
      intl4 = intl7.intl;
      show(obj);
    };
    applyArgumentsResult.handleCancelChanges = function handleCancelChanges() {
      const obj = { avatar: require.props.avatar, name: require.props.name, channel: require.props.channel, hasChanges: false, submitting: false, copied: false };
      require.setState(obj);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    let obj = navigation(1369);
    if (obj.isAndroid()) {
      const self = this;
      navigation = this.props.navigation;
      const obj2 = {
        headerLeft() {
            const obj = { navigation, type: "back" };
            return unpackModuleId(PressableNavigatorModalIconDefault, obj);
          },
        headerBackVisible: false
      };
      navigation.setOptions(obj2);
    }
  }
  componentDidUpdate(arg0, submitting) {
    let hasChanges;
    const self = this;
    navigation = this.props.navigation;
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
        const obj2 = {
          headerRight() {
                let intl;
                const obj = { onPress: self.handleSave, label: intl.string(intl7.t["R3BPH+"]) };
                const HeaderTextButton = HeaderShared.HeaderTextButton;
                intl = intl7.intl;
                return unpackModuleId(HeaderTextButton, obj);
              },
          headerLeft() {
                let intl;
                const obj = { onPress: self.handleCancelChanges, label: intl.string(intl7.t["ETE/oC"]) };
                const HeaderTextButton = HeaderShared.HeaderTextButton;
                intl = intl7.intl;
                return unpackModuleId(HeaderTextButton, obj);
              },
          headerBackVisible: false
        };
        navigation.setOptions(obj2);
      } else {
        const obj3 = {
          headerRight: "Array",
          headerLeft() {
                const obj = { navigation, type: "back" };
                return unpackModuleId(PressableNavigatorModalIconDefault, obj);
              },
          headerBackVisible: null
        };
        navigation.setOptions(obj3);
      }
    }
  }
  render() {
    let Icon;
    let Stack;
    let TableRow;
    let TableRow2;
    let TableRow3;
    let aPIBaseURL;
    let avatar;
    let channel;
    let copied;
    let errors;
    let first;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let items;
    let items1;
    let name;
    let obj10;
    let obj12;
    let obj2;
    let obj4;
    let obj7;
    let obj8;
    let stringResult;
    let tmp3Result;
    let tmp3Result3;
    const self = this;
    const tmp = closure_14(this.context);
    const props = this.props;
    const webhookId = props.webhookId;
    const token = props.token;
    const state = this.state;
    ({ name, channel, errors } = state);
    const webhookType = props.webhookType;
    ({ avatar, copied } = state);
    const Text = webhookId(4886).Text;
    const intl = webhookId(1126).intl;
    const string = intl.string;
    const t = webhookId(1126).t;
    if (copied) {
      stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    let obj = { style: tmp.form, contentContainerStyle: items, children: closure_12(Stack, obj2) };
    items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
    const tmp2Result = closure_11(Text, { variant: "text-sm/medium", color: "text-link", children: stringResult });
    const Form = tmp3(8895).Form;
    obj2 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: tmp.row.padding }, children: items1 };
    Stack = tmp3(5593).Stack;
    let tmp2Result3 = null;
    if (webhookType !== constants.CHANNEL_FOLLOWER) {
      const obj3 = { iconProps: obj4, label: intl2.string(webhookId(1126).t["7+5GQa"]) };
      obj4 = {
        onUpload: self.handleGuildIconUpload,
        type: "avatar",
        icon: avatar,
        name,
        makeURL(avatar) {
            const obj = AvatarUtils;
            const obj2 = { id: webhookId, avatar, discriminator: metroImportAll };
            return obj.getUserAvatarURL(obj2);
          },
        disabled: false
      };
      const tmp8Result = IconLabelBlockDefault;
      intl2 = tmp3(1126).intl;
      tmp2Result3 = closure_11(tmp8Result, obj3);
    }
    items1 = [tmp2Result3, , , , ];
    const obj5 = { label: intl3.string(webhookId(1126).t.ukdxuo), value: name, onChange: self.handleNameChange, errorMessage: first };
    const TextInput = tmp3(6098).TextInput;
    intl3 = tmp3(1126).intl;
    first = undefined;
    if (undefined !== errors) {
      if (undefined !== errors.name) {
        first = errors.name[0];
      }
    }
    items1[1] = closure_11(TextInput, obj5);
    const obj6 = { title: intl4.string(webhookId(1126).t.GK18KJ), hasIcons: true, children: closure_11(TableRow, obj7) };
    const TableRowGroup = tmp3(6074).TableRowGroup;
    intl4 = tmp3(1126).intl;
    obj7 = { label: tmp3Result.computeChannelName(channel, UserStore, RelationshipStore), arrow: true, onPress: self.handleChannelChange, icon: closure_11(Icon, obj8) };
    TableRow = tmp3(5993).TableRow;
    tmp3Result = webhookId(5043);
    obj8 = { size: webhookId(1188).Icon.Sizes.CUSTOM, source: tmp3Result3.getChannelIcon(channel), style: tmp.channelIcon };
    Icon = tmp3(1188).Icon;
    tmp3Result3 = webhookId(5812);
    items1[2] = closure_11(TableRowGroup, obj6);
    let tmp2Result4 = null;
    if (null != token) {
      const obj9 = { title: intl5.string(webhookId(1126).t.SFdvF1), hasIcons: false, children: closure_11(TableRow2, obj10) };
      const TableRowGroup2 = tmp3(6074).TableRowGroup;
      intl5 = tmp3(1126).intl;
      obj10 = { label: "" + aPIBaseURL + closure_7.WEBHOOK_INTEGRATION(webhookId, token), onPress: self.handleCopyUrl, trailing: tmp2Result };
      TableRow2 = tmp3(5993).TableRow;
      const tmp3Result4 = webhookId(1282);
      aPIBaseURL = tmp3Result4.getAPIBaseURL(false);
      const _HermesInternal = HermesInternal;
      tmp2Result4 = closure_11(TableRowGroup2, obj9);
    }
    items1[3] = tmp2Result4;
    const obj11 = { hasIcons: false, children: closure_11(TableRow3, obj12) };
    const TableRowGroup3 = tmp3(6074).TableRowGroup;
    obj12 = { variant: "danger", onPress: self.handleDeleteWebhook, label: intl6.string(webhookId(1126).t.oyYWHE) };
    TableRow3 = tmp3(5993).TableRow;
    intl6 = tmp3(1126).intl;
    items1[4] = closure_11(TableRowGroup3, obj11);
    return closure_11(Form, obj);
  }
}
const prototype = EditWebhook.prototype;
EditWebhook.contextType = native.ThemeContext;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  const obj = react2;
  const cResult = obj.c(6);
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  if (cResult[0] === navigation) {
    let tmp5;
    let tmp9;
    let tmp12;
    if (cResult[1] === arg0) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = unpackModuleId(NavScrim.NavScrim, {});
      cResult[3] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] !== tmp5) {
      const obj3 = { children: items };
      items = [tmp5, tmp9];
      const tmp15 = closure_12(map1, obj3);
      cResult[4] = tmp5;
      cResult[5] = tmp15;
      tmp12 = tmp15;
    } else {
      tmp12 = cResult[5];
    }
    return tmp12;
  }
  const obj4 = { navigation };
  const merged = Object.assign(arg0);
  const tmp7 = unpackModuleId(EditWebhook, obj4);
  cResult[0] = navigation;
  cResult[1] = arg0;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : ((arg0) => {
  let items;
  const obj2 = { children: items };
  const obj = useNavigation;
  const obj3 = { navigation: obj.useNavigation() };
  const merged = Object.assign(arg0);
  items = [unpackModuleId(EditWebhook, obj3), unpackModuleId(NavScrim.NavScrim, {})];
  return closure_12(map1, obj2);
});
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx");

export default tmp6;