// === Module 16841: IntegrationsSettingsWebhooksOverview ===

// Module 16841 (IntegrationsSettingsWebhooksOverview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import NavScrim from "NavScrim" /* 7040 */;
import Form from "Form" /* 8593 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 16843 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;
import WebhooksStore from "WebhooksStore" /* 16842 */;

require = fn;
function WebhookItem(avatar) {
  avatar = avatar.avatar;
  const channel = avatar.channel;
  const guildId = avatar.guildId;
  const name = avatar.name;
  const token = avatar.token;
  ({ user, webhookId } = avatar);
  const webhookType = avatar.webhookType;
  let obj = avatar(guildId[12]);
  const navigation = obj.useNavigation();
  const items = [webhookId, webhookType, avatar, channel, guildId, name, token, navigation];
  const items1 = [webhookId, avatar];
  const callback = token.useCallback(() => {
    navigation.push(constants2.EDIT_WEBHOOK, { webhookId, webhookType, avatar, name, channel, guildId, token });
  }, items);
  const memo = token.useMemo(() => {
    const obj = { id: webhookId, avatar, discriminator };
    return obj.makeSource(AvatarUtils.getUserAvatarURL(obj));
  }, items1);
  obj = { icon: closure_18(avatar(guildId[15]).Avatar, { source: memo }), arrow: true, label: name, subLabel: null, onPress: null };
  if (null != user) {
    const intl2 = tmp(tmp2[16]).intl;
    obj = { timestamp: channel(tmp2[17]).extractTimestamp(webhookId), user: null };
    const obj6 = channel(tmp2[17]);
    obj.user = channel(tmp2[18]).getUserTag(user);
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[16]).t["7EcUbr"], obj);
    const obj7 = channel(tmp2[18]);
  } else {
    const intl = tmp(tmp2[16]).intl;
    const obj1 = { timestamp: channel(tmp2[17]).extractTimestamp(webhookId) };
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[16]).t["7mv59O"], obj1);
    const obj4 = channel(tmp2[17]);
  }
  obj.subLabel = formatToPlainStringResult;
  obj.onPress = callback;
  return closure_18(avatar(guildId[14]).TableRow, obj);
}
function ConnectedWebhookItem(arg0) {
  ({ channelId: require, user: importDefault } = arg0);
  const merged = Object.assign(arg0, Object.assign({ channelId: 0, user: 0 }));
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return UserStore.getUser(id);
  });
  const items1 = [ChannelStore];
  obj = {};
  const stateFromStores1 = initialize.useStateFromStores(items1, () => ChannelStore.getChannel(require));
  const merged1 = Object.assign(merged);
  obj.user = stateFromStores;
  obj.channel = stateFromStores1;
  return closure_18(WebhookItem, obj);
}
function CreateWebhookButton(guild) {
  guild = guild.guild;
  let channel = guild.channel;
  let navigation;
  let obj = guild(navigation[12]);
  navigation = obj.useNavigation();
  let items = [GuildChannelStore, PermissionStore];
  const stateFromStores = guild(navigation[19]).useStateFromStores(items, () => {
    if (null != channel) {
      return channel;
    } else {
      const channels = GuildChannelStore.getChannels(guild.id);
      const items = [];
      HermesBuiltin.arraySpread(channels[React5], HermesBuiltin.arraySpread(channels[timestampProducer], 0));
      const found = items.find((channel) => closure_1_10.can(constants.MANAGE_WEBHOOKS, channel.channel));
      channel = undefined;
      if (found != null) {
        channel = found.channel;
      }
      return channel;
    }
  });
  const items1 = [stateFromStores, guild.id, navigation];
  const callback = noop.useCallback(stateFromStores(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = undefined;
            if (null != stateFromStores) {
              let obj1 = tmp2(tmp5[20]);
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.create(guild.id, stateFromStores.id);
              return obj1;
            } else {
              c4 = 3;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_0 = value;
          if (null != closure_129_0) {
            const obj2 = { webhookId: closure_129_0.id, webhookType: closure_129_0.type, avatar: null, name: null, channel: null, guildId: null, token: null };
            let avatar = closure_129_0.avatar;
            if (avatar == null) {
              avatar = undefined;
            }
            obj2.avatar = avatar;
            obj2.name = closure_129_0.name;
            obj2.channel = closure_130_3;
            obj2.guildId = closure_130_0.id;
            obj2.token = closure_129_0.token;
            closure_130_2.push(constants.EDIT_WEBHOOK, obj2);
          }
        }
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp18) {
        c4 = tmp;
        throw tmp18;
      }
    }
  }), items1);
  obj = { icon: null, label: null, disabled: null, onPress: null };
  obj = { IconComponent: guild(navigation[22]).WebhookPlusIcon };
  obj.icon = closure_18(guild(navigation[21]).RowButton.Icon, obj);
  const intl = guild(navigation[16]).intl;
  obj.label = intl.string(guild(navigation[16]).t["nrO/HH"]);
  obj.disabled = null == stateFromStores;
  obj.onPress = callback;
  return closure_18(guild(navigation[21]).RowButton, obj);
}
let GuildChannelStore = fn(2012);
({ GUILD_SELECTABLE_CHANNELS_KEY: metroRequire, GUILD_VOCAL_CHANNELS_KEY: closure_7 } = GuildChannelStore);
const Constants = fn(1074);
({ HelpdeskArticles: map1, ChannelSettingsSections: closure_14, NON_USER_BOT_DISCRIMINATOR: closure_15, Permissions: closure_16, WebhookTypes: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
fn(4560);
let createStyles = { form: null, content: null, hint: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.form = createStyles;
createStyles.content = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj1 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.hint = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_21 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class WebhooksOverview extends PureComponent {
}
const prototype = WebhooksOverview.prototype;
prototype["getHelpText"] = function getHelpText() {
  if (this.props.webhookType === constants3.CHANNEL_FOLLOWER) {
    const intl2 = util.intl;
    let obj = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.CHANNEL_FOLLOWING) };
    let formatResult = intl2.format(util.t["5u+aV1"], obj);
  } else {
    const intl = util.intl;
    obj = { articleURL: HelpdeskUtilsDefault.getArticleURL(constants.WEBHOOKS_INTRODUCTION) };
    formatResult = intl.format(util.t["3hX7G+"], obj);
  }
  return formatResult;
};
prototype["renderWebhooks"] = function renderWebhooks() {
  const self = this;
  ({ webhooks, webhookType } = this.props);
  let found = webhooks;
  if (null != webhookType) {
    found = webhooks.filter((type) => type.type === webhookType);
  }
  let dkHRkE = dependencyMap;
  const helpText = self.getHelpText();
  const items = [closure_18(webhookType(4556).Text, { variant: "text-sm/medium", color: "text-muted", children: helpText }), , ];
  let tmp4Result = webhookType === constants3.INCOMING;
  if (tmp4Result) {
    let obj = { guild: self.props.guild, channel: self.props.channel };
    tmp4Result = closure_18(CreateWebhookButton, obj);
  }
  items[1] = tmp4Result;
  if (0 === found.length) {
    obj = { Illustration: webhookType(16846).WebhookEmpty, title: null };
    if (webhookType === constants3.CHANNEL_FOLLOWER) {
      const intl2 = webhookType(1114).intl;
      dkHRkE = webhookType(1114).t.dkHRkE;
      let stringResult = intl2.string(dkHRkE);
    } else {
      const intl = webhookType(1114).intl;
      stringResult = intl.string(webhookType(1114).t["4JAVI+"]);
    }
    obj.title = stringResult;
    tmp4Result = closure_18(webhookType(1178).EmptyState, obj);
  } else {
    obj = {
      hasIcons: true,
      children: found.map((type) => {
          ({ id, avatar } = type);
          const obj = { webhookId: id, webhookType: type.type, avatar, name, user, channelId: channel_id, token, guildId: guild_id };
          ({ name, user, token, guild_id, channel_id } = type);
          return closure_1_18(ConnectedWebhookItem, obj, id);
        })
    };
    const obj1 = { children: null };
    items[2] = closure_18(webhookType(5687).TableRowGroup, obj);
    obj1.children = items;
    return closure_20(closure_19, obj1);
  }
};
prototype["render"] = function render() {
  const tmp = closure_21(this.context);
  let obj = { children: null };
  obj = { style: tmp.form, contentContainerStyle: this.props.contentContainerStyle, children: null };
  obj = { spacing: nativeDefault.space.PX_24, style: tmp.content, children: this.renderWebhooks() };
  obj.children = collapsedCategories(Stack_Stack.Stack, obj);
  const items = [collapsedCategories(Form.Form, obj), collapsedCategories(NavScrim.NavScrim, {})];
  obj.children = items;
  return closure_1_20(closure_1_19, obj);
};
WebhooksOverview.contextType = fn(4271).ThemeContext;
let closure_26 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx");

export default function ConnectedWebhooksOverview(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let stateFromStores;
  let id1;
  ({ contentContainerStyle, webhookType } = channelId);
  let obj = channelId(stateFromStores[19]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [GuildStore];
  const stateFromStores1 = channelId(stateFromStores[19]).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (guild_id == null) {
      guild_id = guildId;
    }
    return GuildStore.getGuild(guild_id);
  });
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id == null) {
    id = guildId;
  }
  id1 = undefined;
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  if (id1 == null) {
    id1 = channelId;
  }
  let obj2 = channelId(stateFromStores[19]);
  const items2 = [WebhooksStore];
  const items3 = [id, id1];
  const stateFromStoresArray = channelId(stateFromStores[19]).useStateFromStoresArray(items2, () => {
    if (null != id) {
      if (null != id1) {
        let webhooksForChannel = WebhooksStore.getWebhooksForChannel(id, tmp2);
      }
      return webhooksForChannel;
    }
    if (null != id) {
      webhooksForChannel = WebhooksStore.getWebhooksForGuild(id);
    } else {
      webhooksForChannel = closure_26;
    }
  });
  const effect = id1.useEffect(() => {
    if (null != id) {
      if (null != id1) {
        const forChannel = WebhooksActionCreatorsDefault.fetchForChannel(id, tmp2);
      }
    }
    if (null != id) {
      const forGuild = WebhooksActionCreatorsDefault.fetchForGuild(id);
    }
  }, items3);
  let tmp9 = null;
  if (null != stateFromStores1) {
    obj = { guild: stateFromStores1, channel: stateFromStores, webhooks: stateFromStoresArray, contentContainerStyle, webhookType };
    tmp9 = closure_18(WebhooksOverview, obj);
  }
  return tmp9;
};