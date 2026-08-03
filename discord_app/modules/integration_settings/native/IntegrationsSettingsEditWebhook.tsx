import { GUILD_SELECTABLE_CHANNELS_KEY as closure_3 } from "comparator";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import jsxProd from "Text";
import createCacheKey from "createCacheKey";
import importAllResult from "module_4595";

let c10;
let c9;
let closure_12;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
let require = arg1;
({ Endpoints: error, NON_USER_BOT_DISCRIMINATOR: metroImportAll, Permissions: c9, WebhookTypes: c10 } = ME);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
createCacheKey = { form: null, row: null, channelIcon: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[2] = { height: 16, width: 16, opacity: 0.6 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class EditWebhook extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
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
        obj = { name: null, channel_id: null, avatar: null };
        obj[0] = state.name;
        obj[1] = state.channel.id;
        obj[2] = state.avatar;
        ({ guildId, webhookId } = props);
        obj.setState({ submitting: true });
        const obj3 = outer1_1(outer1_2[15]);
        const updateResult = outer1_1(outer1_2[15]).update(guildId, webhookId, obj);
        outer1_1(outer1_2[15]).update(guildId, webhookId, obj).then(() => {
          navigation.pop();
        }).catch((body) => {
          navigation.setState({ errors: body.body, submitting: false });
        });
        const nextPromise = outer1_1(outer1_2[15]).update(guildId, webhookId, obj).then(() => {
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
      outer1_1(outer1_2[16])({
        guildId: channel.props.guildId,
        channelType: outer1_3,
        filterFn(channel) {
          return getUncachedChannelPermissions.can(constants.MANAGE_WEBHOOKS, channel.channel);
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
        const aPIBaseURL = applyArgumentsResult(outer1_2[17]).getAPIBaseURL(false);
        const _HermesInternal = HermesInternal;
        const combined = "" + aPIBaseURL + outer1_7.WEBHOOK_INTEGRATION(tmp, token);
        const obj = applyArgumentsResult(outer1_2[17]);
        applyArgumentsResult(outer1_2[18]).copy(combined, () => state.setState({ copied: true }));
        const obj2 = applyArgumentsResult(outer1_2[18]);
      }
    };
    applyArgumentsResult.handleConfirmDeleteWebhook = function handleConfirmDeleteWebhook() {
      let guildId;
      let webhookId;
      const props = navigation.props;
      navigation = props.navigation;
      ({ guildId, webhookId } = props);
      let obj = outer1_1(outer1_2[15]);
      const deleteResult = outer1_1(outer1_2[15]).delete(guildId, webhookId);
      outer1_1(outer1_2[15]).delete(guildId, webhookId).then(() => {
        navigation.pop();
      }).catch(() => {
        let obj = callback(4595);
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
      let obj = outer1_1(outer1_2[19]);
      obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, confirmColor: null };
      const intl = applyArgumentsResult(outer1_2[14]).intl;
      obj[0] = intl.formatToPlainString(applyArgumentsResult(outer1_2[14]).t.QVFjHh, { name });
      const intl2 = applyArgumentsResult(outer1_2[14]).intl;
      obj[1] = intl2.format(applyArgumentsResult(outer1_2[14]).t["rIWe+5"], { name });
      const intl3 = applyArgumentsResult(outer1_2[14]).intl;
      obj[2] = intl3.string(applyArgumentsResult(outer1_2[14]).t.gm1Vej);
      const intl4 = applyArgumentsResult(outer1_2[14]).intl;
      obj[3] = intl4.string(applyArgumentsResult(outer1_2[14]).t.p89ACt);
      obj[4] = applyArgumentsResult.handleConfirmDeleteWebhook;
      obj[5] = outer1_1(outer1_2[20]).Colors.RED;
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
      return outer1_11(outer1_1(outer1_2[11]), { navigation, type: "back" });
    };
    navigation.setOptions(obj);
  }
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0, submitting) {
  let hasChanges;
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
        const intl = navigation(outer1_2[14]).intl;
        obj[1] = intl.string(navigation(outer1_2[14]).t["R3BPH+"]);
        return outer1_11(navigation(outer1_2[13]).HeaderTextButton, obj);
      };
      obj[1] = function headerLeft() {
        const obj = { onPress: self.handleCancelChanges, label: null };
        const intl = navigation(outer1_2[14]).intl;
        obj[1] = intl.string(navigation(outer1_2[14]).t["ETE/oC"]);
        return outer1_11(navigation(outer1_2[13]).HeaderTextButton, obj);
      };
      navigation.setOptions(obj);
    } else {
      obj = { headerRight: "Array", headerLeft: false, headerBackVisible: null };
      obj[1] = function headerLeft() {
        return outer1_11(self(outer1_2[11]), { navigation, type: "back" });
      };
      navigation.setOptions(obj);
    }
  }
};
prototype["render"] = function render() {
  let avatar;
  let channel;
  let copied;
  let errors;
  let name;
  const self = this;
  const tmp = createCacheKey(this.context);
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
  let tmp2Result = tmp2(webhookId(4251).Text, { variant: "text-sm/medium", color: "text-link", children: stringResult });
  let obj = { style: tmp.form, contentContainerStyle: items, children: null };
  items = [{ paddingTop: 16 }, self.props.contentContainerStyle];
  obj = { spacing: null, style: null, children: null };
  obj[0] = importDefault(712).space.PX_24;
  obj[1] = { paddingHorizontal: tmp.row.padding };
  tmp2Result = null;
  if (props.webhookType !== constants.CHANNEL_FOLLOWER) {
    obj = { iconProps: null, label: null };
    const obj1 = { onUpload: null, type: "avatar", icon: null, name: null, makeURL: null, disabled: false };
    obj1[0] = self.handleGuildIconUpload;
    obj1[2] = avatar;
    obj1[3] = name;
    obj1[4] = function makeURL(avatar) {
      let obj = webhookId(outer1_2[25]);
      obj = { id: webhookId, avatar, discriminator: outer1_8 };
      return obj.getUserAvatarURL(obj);
    };
    obj[0] = obj1;
    const intl2 = tmp3(1236).intl;
    obj[1] = intl2.string(tmp3(1236).t["7+5GQa"]);
    tmp2Result = tmp2(importDefault(15765), obj);
    const tmp8Result = importDefault(15765);
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
  items1[1] = closure_11(webhookId(7701).TextInput, obj2);
  const obj3 = { title: null, hasIcons: true, children: null };
  const intl4 = tmp3(1236).intl;
  obj3[0] = intl4.string(webhookId(1236).t.GK18KJ);
  const obj4 = { label: null, arrow: true, onPress: null, icon: null };
  let tmp3Result = tmp3(4446);
  obj4[0] = tmp3Result.computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
  obj4[2] = self.handleChannelChange;
  const obj5 = { size: null, source: null, style: null };
  obj5[0] = webhookId(1297).Icon.Sizes.CUSTOM;
  tmp3Result = tmp3(4716);
  obj5[1] = tmp3Result.getChannelIcon(channel);
  obj5[2] = tmp.channelIcon;
  obj4[3] = closure_11(webhookId(1297).Icon, obj5);
  obj3[2] = closure_11(webhookId(5286).TableRow, obj4);
  items1[2] = closure_11(webhookId(5620).TableRowGroup, obj3);
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
    obj6[2] = tmp2(tmp3(5286).TableRow, obj7);
    tmp2Result1 = tmp2(tmp3(5620).TableRowGroup, obj6);
    const tmp3Result1 = tmp3(530);
  }
  items1[3] = tmp2Result1;
  const obj8 = { hasIcons: false, children: null };
  const obj9 = { variant: "danger", onPress: self.handleDeleteWebhook, label: null };
  const intl6 = tmp3(1236).intl;
  obj9[2] = intl6.string(webhookId(1236).t.oyYWHE);
  obj8[1] = closure_11(webhookId(5286).TableRow, obj9);
  items1[4] = closure_11(webhookId(5620).TableRowGroup, obj8);
  obj[2] = items1;
  obj[2] = closure_12(webhookId(4664).Stack, obj);
  return closure_11(webhookId(7765).Form, obj);
};
EditWebhook.contextType = require("ManaContext").ThemeContext;
let obj1 = { padding: require("Themes").modules.mobile.TABLE_ROW_PADDING };
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsEditWebhook.tsx");

export default function ConnectedEditWebhook(arg0) {
  let obj = require(1480) /* useNavigation */;
  obj = { children: null };
  obj = { navigation: obj.useNavigation() };
  const merged = Object.assign(arg0);
  const items = [callback(EditWebhook, obj), callback(require(5567) /* NavScrim */.NavScrim, {})];
  obj[0] = items;
  return callback2(closure_13, obj);
};