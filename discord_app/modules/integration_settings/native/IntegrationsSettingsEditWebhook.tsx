// discord_app/modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import NavScrim from "../../../design/components/Navigator/native/NavScrim.android.tsx";
import renderLabelDefault from "../../../components_native/common/IconLabelBlock.tsx";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_3 } from "../../../stores/GuildChannelStore.tsx";
import closure_4 from "../../../stores/PermissionStore.tsx";
import closure_5 from "../../../stores/RelationshipStore.tsx";
import closure_6 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

require = arg1;
({ Endpoints: error, NON_USER_BOT_DISCRIMINATOR: closure_8, Permissions: c9, WebhookTypes: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
createCacheKey = { form: null, row: null, channelIcon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
createCacheKey[2] = { height: 16, width: 16, opacity: 0.6 };
let closure_14 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
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
        obj = { name: null, channel_id: null, avatar: null };
        obj[0] = state.name;
        obj[1] = state.channel.id;
        obj[2] = state.avatar;
        ({ guildId, webhookId } = props);
        obj.setState({ submitting: true });
        const obj3 = closure_1_1(closure_1_2[15]);
        const updateResult = closure_1_1(closure_1_2[15]).update(guildId, webhookId, obj);
        closure_1_1(closure_1_2[15]).update(guildId, webhookId, obj).then(() => {
          navigation.pop();
        }).catch((body) => {
          navigation.setState({ errors: body.body, submitting: false });
        });
        const nextPromise = closure_1_1(closure_1_2[15]).update(guildId, webhookId, obj).then(() => {
          navigation.pop();
        });
      }
    };
    applyArgumentsResult.handleGuildIconUpload = function handleGuildIconUpload(arg0) {
      let obj = applyArgumentsResult;
      const avatar = applyArgumentsResult.props.avatar;
      if (arg0 !== avatar) {
        obj = { hasChanges: true, avatar: null };
        obj[1] = arg0;
        obj.setState(obj);
      } else {
        obj = { hasChanges: false, avatar: null };
        obj[1] = avatar;
        obj.setState(obj);
      }
    };
    applyArgumentsResult.handleNameChange = function handleNameChange(arg0) {
      let obj = applyArgumentsResult;
      const name = applyArgumentsResult.props.name;
      if (arg0 !== name) {
        obj = { hasChanges: true, name: null };
        obj[1] = arg0;
        obj.setState(obj);
      } else {
        obj = { hasChanges: false, name: null };
        obj[1] = name;
        obj.setState(obj);
      }
    };
    applyArgumentsResult.handleChannelChange = function handleChannelChange() {
      channel = channel.props.channel;
      closure_1_1(closure_1_2[16])({
        guildId: channel.props.guildId,
        channelType: closure_1_3,
        filterFn(channel) {
          return closure_4.can(constants.MANAGE_WEBHOOKS, channel.channel);
        },
        selectedChannel: channel,
        onSelect(id) {
          if (id.id !== channel.id) {
            let obj = { hasChanges: true, channel: null };
            obj[1] = id;
            channel.setState(obj);
          } else {
            obj = { hasChanges: false, channel: null };
            obj[1] = tmp;
            channel.setState(obj);
          }
        }
      });
    };
    applyArgumentsResult.handleCopyUrl = function handleCopyUrl() {
      const token = applyArgumentsResult.props.token;
      if (null != token) {
        const aPIBaseURL = applyArgumentsResult(closure_1_2[17]).getAPIBaseURL(false);
        const _HermesInternal = HermesInternal;
        const combined = "" + aPIBaseURL + closure_1_7.WEBHOOK_INTEGRATION(tmp, token);
        const obj = applyArgumentsResult(closure_1_2[17]);
        applyArgumentsResult(closure_1_2[18]).copy(combined, () => state.setState({ copied: true }));
        const obj2 = applyArgumentsResult(closure_1_2[18]);
      }
    };
    applyArgumentsResult.handleConfirmDeleteWebhook = function handleConfirmDeleteWebhook() {
      const props = navigation.props;
      navigation = props.navigation;
      ({ guildId, webhookId } = props);
      let obj = closure_1_1(closure_1_2[15]);
      const deleteResult = closure_1_1(closure_1_2[15]).delete(guildId, webhookId);
      closure_1_1(closure_1_2[15]).delete(guildId, webhookId).then(() => {
        navigation.pop();
      }).catch(() => {
        let obj = callback(4858);
        obj = { title: null, body: null };
        const intl = navigation(1236).intl;
        obj[0] = intl.string(navigation(1236).t.N5riYn);
        const intl2 = navigation(1236).intl;
        obj[1] = intl2.string(navigation(1236).t["/4TwKf"]);
        obj.show(obj);
      });
    };
    applyArgumentsResult.handleDeleteWebhook = function handleDeleteWebhook() {
      const name = applyArgumentsResult.props.name;
      let obj = closure_1_1(closure_1_2[19]);
      obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl = applyArgumentsResult(closure_1_2[14]).intl;
      obj[0] = intl.formatToPlainString(applyArgumentsResult(closure_1_2[14]).t.QVFjHh, { name });
      const intl2 = applyArgumentsResult(closure_1_2[14]).intl;
      obj[1] = intl2.format(applyArgumentsResult(closure_1_2[14]).t["rIWe+5"], { name });
      const intl3 = applyArgumentsResult(closure_1_2[14]).intl;
      obj[2] = intl3.string(applyArgumentsResult(closure_1_2[14]).t.gm1Vej);
      const intl4 = applyArgumentsResult(closure_1_2[14]).intl;
      obj[3] = intl4.string(applyArgumentsResult(closure_1_2[14]).t.p89ACt);
      obj[4] = applyArgumentsResult.handleConfirmDeleteWebhook;
      obj[5] = closure_1_1(closure_1_2[20]).Colors.RED;
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
  let obj = navigation(500);
  if (obj.isAndroid()) {
    const self = this;
    navigation = this.props.navigation;
    obj = { headerLeft: null, headerBackVisible: false };
    obj[0] = function headerLeft() {
      return closure_1_11(closure_1_1(closure_1_2[11]), { navigation, type: "back" });
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
        let obj = { headerRight: null, headerLeft: null, headerBackVisible: false };
        obj[0] = function headerRight() {
          return callback(navigation(table[12]).HeaderSubmittingIndicator, {});
        };
        obj[1] = function headerLeft() {
          return null;
        };
        navigation.setOptions(obj);
      }
    }
    if (hasChanges) {
      obj = { headerRight: null, headerLeft: null, headerBackVisible: false };
      obj[0] = function headerRight() {
        const obj = { onPress: self.handleSave, label: null };
        const intl = navigation(closure_1_2[14]).intl;
        obj[1] = intl.string(navigation(closure_1_2[14]).t["R3BPH+"]);
        return closure_1_11(navigation(closure_1_2[13]).HeaderTextButton, obj);
      };
      obj[1] = function headerLeft() {
        const obj = { onPress: self.handleCancelChanges, label: null };
        const intl = navigation(closure_1_2[14]).intl;
        obj[1] = intl.string(navigation(closure_1_2[14]).t["ETE/oC"]);
        return closure_1_11(navigation(closure_1_2[13]).HeaderTextButton, obj);
      };
      navigation.setOptions(obj);
    } else {
      obj = { headerRight: "Array", headerLeft: false, headerBackVisible: null };
      obj[1] = function headerLeft() {
        return closure_1_11(self(closure_1_2[11]), { navigation, type: "back" });
      };
      navigation.setOptions(obj);
    }
  }
};
prototype["render"] = function render() {
  const self = this;
  const tmp = callback3(this.context);
  const props = this.props;
  const webhookId = props.webhookId;
  const token = props.token;
  const state = this.state;
  ({ name, channel, errors } = state);
  ({ avatar, copied } = state);
  const intl = webhookId(1236).intl;
  const string = intl.string;
  const t = webhookId(1236).t;
  if (copied) {
    let stringResult = string(t.t5VZ88);
  } else {
    stringResult = string(t.OpuAlK);
  }
  let tmp2Result = tmp2(webhookId(4474).Text, { variant: "text-sm/medium", color: "text-link", children: stringResult });
  let obj = { style: tmp.form, contentContainerStyle: items, children: null };
  items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
  obj = { spacing: ThemesDefault.space.PX_24, style: { paddingHorizontal: tmp.row.padding }, children: null };
  tmp2Result = null;
  if (props.webhookType !== constants.CHANNEL_FOLLOWER) {
    obj = { iconProps: null, label: null };
    obj1 = { onUpload: null, type: "avatar", icon: null, name: null, makeURL: null, disabled: false };
    obj1[0] = self.handleGuildIconUpload;
    obj1[2] = avatar;
    obj1[3] = name;
    obj1[4] = function makeURL(avatar) {
      let obj = webhookId(closure_1_2[25]);
      obj = { id: webhookId, avatar, discriminator: closure_1_8 };
      return obj.getUserAvatarURL(obj);
    };
    obj[0] = obj1;
    const intl2 = tmp3(1236).intl;
    obj[1] = intl2.string(tmp3(1236).t["7+5GQa"]);
    tmp2Result = tmp2(renderLabelDefault, obj);
    const tmp8Result = renderLabelDefault;
  }
  const items1 = [tmp2Result, , , , ];
  const obj2 = { label: null, value: null, onChange: null, errorMessage: null };
  const intl3 = tmp3(1236).intl;
  obj2[0] = intl3.string(webhookId(1236).t.ukdxuo);
  obj2[1] = name;
  obj2[2] = self.handleNameChange;
  let first;
  if (undefined !== errors) {
    if (undefined !== errors.name) {
      first = errors.name[0];
    }
  }
  obj2[3] = first;
  items1[1] = closure_11(webhookId(7705).TextInput, obj2);
  const obj3 = { title: null, hasIcons: true, children: null };
  const intl4 = tmp3(1236).intl;
  obj3[0] = intl4.string(webhookId(1236).t.GK18KJ);
  const obj4 = { label: null, arrow: true, onPress: null, icon: null };
  let tmp3Result = tmp3(4674);
  obj4[0] = tmp3Result.computeChannelName(channel, closure_6, closure_5);
  obj4[2] = self.handleChannelChange;
  const obj5 = { size: webhookId(1297).Icon.Sizes.CUSTOM, source: null, style: null };
  tmp3Result = tmp3(4981);
  obj5[1] = tmp3Result.getChannelIcon(channel);
  obj5[2] = tmp.channelIcon;
  obj4[3] = closure_11(webhookId(1297).Icon, obj5);
  obj3[2] = closure_11(webhookId(5599).TableRow, obj4);
  items1[2] = closure_11(webhookId(5992).TableRowGroup, obj3);
  let tmp2Result1 = null;
  if (null != token) {
    const obj6 = { title: null, hasIcons: false, children: null };
    const intl5 = tmp3(1236).intl;
    obj6[0] = intl5.string(tmp3(1236).t.SFdvF1);
    const obj7 = { label: null, onPress: null, trailing: null };
    const aPIBaseURL = tmp3(530).getAPIBaseURL(false);
    const _HermesInternal = HermesInternal;
    obj7[0] = "" + aPIBaseURL + closure_7.WEBHOOK_INTEGRATION(webhookId, token);
    obj7[1] = self.handleCopyUrl;
    obj7[2] = tmp2Result;
    obj6[2] = tmp2(tmp3(5599).TableRow, obj7);
    tmp2Result1 = tmp2(tmp3(5992).TableRowGroup, obj6);
    const tmp3Result1 = tmp3(530);
  }
  items1[3] = tmp2Result1;
  const obj8 = { hasIcons: false, children: null };
  const obj9 = { variant: "danger", onPress: self.handleDeleteWebhook, label: null };
  const intl6 = tmp3(1236).intl;
  obj9[2] = intl6.string(webhookId(1236).t.oyYWHE);
  obj8[1] = closure_11(webhookId(5599).TableRow, obj9);
  items1[4] = closure_11(webhookId(5992).TableRowGroup, obj8);
  obj[2] = items1;
  obj[2] = closure_12(webhookId(4926).Stack, obj);
  return closure_11(webhookId(8363).Form, obj);
};
EditWebhook.contextType = require("ManaContext").ThemeContext;
let obj1 = { padding: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
const result = require("set").fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx");

export default function ConnectedEditWebhook(arg0) {
  let obj = useNavigation;
  obj = { children: null };
  obj = { navigation: obj.useNavigation() };
  const merged = Object.assign(arg0);
  const items = [callback(EditWebhook, obj), callback(NavScrim.NavScrim, {})];
  obj[0] = items;
  return callback2(closure_13, obj);
};