// === Module 16333: WebhookItem ===

// Module 16333 (WebhookItem)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1995 */;
import Stack from "Stack" /* 4878 */;
import NavScrim from "NavScrim" /* 5891 */;
import Form from "Form" /* 8295 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1982 */;
import closure_8 from "comparator" /* 1982 */;
import closure_9 from "createGuildRecordFromRust" /* 1910 */;
import closure_10 from "getUncachedChannelPermissions" /* 4089 */;
import closure_11 from "mergeGuildAvatar" /* 1922 */;
import closure_12 from "handleWebhookCreateUpdate" /* 16334 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function WebhookItem(avatar) {
  avatar = avatar.avatar;
  const channel = avatar.channel;
  const guildId = avatar.guildId;
  const name = avatar.name;
  const token = avatar.token;
  ({ user, webhookId } = avatar);
  const webhookType = avatar.webhookType;
  let navigation;
  let obj = avatar(guildId[12]);
  navigation = obj.useNavigation();
  const items = [webhookId, webhookType, avatar, channel, guildId, name, token, navigation];
  const items1 = [webhookId, avatar];
  const callback = token.useCallback(() => {
    navigation.push(closure_1_14.EDIT_WEBHOOK, { webhookId, webhookType, avatar, name, channel, guildId, token });
  }, items);
  const memo = token.useMemo(() => {
    let obj = avatar(guildId[13]);
    obj = { id: webhookId, avatar, discriminator: closure_1_15 };
    return obj.makeSource(avatar(guildId[13]).getUserAvatarURL(obj));
  }, items1);
  obj = { icon: callback(avatar(guildId[15]).Avatar, { source: memo }), arrow: true, label: name, subLabel: null, onPress: null };
  if (null != user) {
    const intl2 = tmp(tmp2[16]).intl;
    obj = { timestamp: null, user: null };
    obj[0] = channel(tmp2[17]).extractTimestamp(webhookId);
    const obj6 = channel(tmp2[17]);
    obj[1] = channel(tmp2[18]).getUserTag(user);
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[16]).t["7EcUbr"], obj);
    const obj7 = channel(tmp2[18]);
  } else {
    const intl = tmp(tmp2[16]).intl;
    obj1 = { timestamp: null };
    obj1[0] = channel(tmp2[17]).extractTimestamp(webhookId);
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[16]).t["7mv59O"], obj1);
    const obj4 = channel(tmp2[17]);
  }
  obj[3] = formatToPlainStringResult;
  obj[4] = callback;
  return callback(avatar(guildId[14]).TableRow, obj);
}
function ConnectedWebhookItem(arg0) {
  ({ channelId: require, user: importDefault } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = initialize;
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (id != null) {
      id = id.id;
    }
    return closure_1_11.getUser(id);
  });
  const items1 = [closure_5];
  obj = {};
  const stateFromStores1 = initialize.useStateFromStores(items1, () => closure_1_5.getChannel(closure_0));
  const merged1 = Object.assign(merged);
  obj.user = stateFromStores;
  obj.channel = stateFromStores1;
  return callback(WebhookItem, obj);
}
function CreateWebhookButton(guild) {
  guild = guild.guild;
  let channel = guild.channel;
  let navigation;
  let stateFromStores;
  let obj = guild(navigation[12]);
  navigation = obj.useNavigation();
  let items = [closure_8, closure_10];
  stateFromStores = guild(navigation[19]).useStateFromStores(items, () => {
    if (null != channel) {
      return channel;
    } else {
      const channels = closure_1_8.getChannels(guild.id);
      const items = [];
      HermesBuiltin.arraySpread(channels[closure_1_7], HermesBuiltin.arraySpread(channels[closure_1_6], 0));
      const found = items.find((channel) => closure_10.can(constants.MANAGE_WEBHOOKS, channel.channel));
      channel = undefined;
      if (found != null) {
        channel = found.channel;
      }
      return channel;
    }
  });
  const items1 = [stateFromStores, guild.id, navigation];
  const callback = importAllResult.useCallback(stateFromStores(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === id) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let arr = tmp5;
            closure_1 = tmp2;
            let user;
            if (null != id) {
              obj1 = closure_1_1(closure_1_2[20]);
              id = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.create(closure_1_0.id, id.id);
              return obj1;
            } else {
              c4 = 3;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          user = arg1;
          if (null != user) {
            const obj2 = { webhookId: null, webhookType: null, avatar: null, name: null, channel: null, guildId: null, token: null };
            obj2[0] = user.id;
            obj2[1] = user.type;
            const avatar = user.avatar;
            user = avatar;
            if (avatar == null) {
              user = undefined;
            }
            obj2[2] = user;
            obj2[3] = user.name;
            obj2[4] = id;
            obj2[5] = user.id;
            obj2[6] = user.token;
            arr = arr.push(closure_1_14.EDIT_WEBHOOK, obj2);
          }
        }
        c4 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp18) {
        c4 = tmp;
        throw tmp18;
      }
    }
  }), items1);
  obj = { icon: null, label: null, disabled: null, onPress: null };
  obj = { IconComponent: guild(navigation[22]).WebhookPlusIcon };
  obj[0] = callback(guild(navigation[21]).RowButton.Icon, obj);
  const intl = guild(navigation[16]).intl;
  obj[1] = intl.string(guild(navigation[16]).t["nrO/HH"]);
  obj[2] = null == stateFromStores;
  obj[3] = callback;
  return callback(guild(navigation[21]).RowButton, obj);
}
let c4 = importAllResult;
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_6, GUILD_VOCAL_CHANNELS_KEY: error } = comparator);
({ HelpdeskArticles: map1, ChannelSettingsSections: closure_14, NON_USER_BOT_DISCRIMINATOR: closure_15, Permissions: closure_16, WebhookTypes: closure_17 } = ME);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
createCacheKey = { form: null, content: null, hint: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
let obj1 = { paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.modules.mobile.TABLE_ROW_PADDING };
createCacheKey[2] = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
let closure_21 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class WebhooksOverview extends PureComponent {
}
const prototype = WebhooksOverview.prototype;
prototype["getHelpText"] = function getHelpText() {
  if (this.props.webhookType === constants2.CHANNEL_FOLLOWER) {
    const intl2 = getSystemLocale.intl;
    let obj = { helpdeskArticle: null };
    obj[0] = combinedDefault.getArticleURL(constants.CHANNEL_FOLLOWING);
    let formatResult = intl2.format(getSystemLocale.t["5u+aV1"], obj);
    const obj4 = combinedDefault;
  } else {
    const intl = getSystemLocale.intl;
    obj = { articleURL: null };
    obj[0] = combinedDefault.getArticleURL(constants.WEBHOOKS_INTRODUCTION);
    formatResult = intl.format(getSystemLocale.t["3hX7G+"], obj);
    const obj2 = combinedDefault;
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
  const items = [callback(webhookType(4441).Text, { variant: "text-sm/medium", color: "text-muted", children: helpText }), , ];
  let tmp4Result = webhookType === constants2.INCOMING;
  if (tmp4Result) {
    let obj = { guild: null, channel: null };
    obj[0] = self.props.guild;
    obj[1] = self.props.channel;
    tmp4Result = tmp4(CreateWebhookButton, obj);
  }
  items[1] = tmp4Result;
  if (0 === found.length) {
    obj = { Illustration: null, title: null };
    obj[0] = tmp5(16338).WebhookEmpty;
    if (webhookType === constants2.CHANNEL_FOLLOWER) {
      const intl2 = tmp5(1236).intl;
      dkHRkE = tmp5(1236).t.dkHRkE;
      let stringResult = intl2.string(dkHRkE);
    } else {
      const intl = tmp5(1236).intl;
      stringResult = intl.string(tmp5(1236).t["4JAVI+"]);
    }
    obj[1] = stringResult;
    tmp4Result = tmp4(tmp5(1297).EmptyState, obj);
  } else {
    obj = { hasIcons: true, children: null };
    obj[1] = found.map((type) => {
      ({ id, avatar } = type);
      const obj = { webhookId: id, webhookType: type.type, avatar, name, user, channelId: channel_id, token, guildId: guild_id };
      ({ name, user, token, guild_id, channel_id } = type);
      return closure_18(closure_23, obj, id);
    });
    obj1 = { children: null };
    items[2] = tmp4(tmp5(5944).TableRowGroup, obj);
    obj1[0] = items;
    return closure_20(closure_19, obj1);
  }
};
prototype["render"] = function render() {
  const tmp = callback3(this.context);
  let obj = { children: null };
  obj = { style: tmp.form, contentContainerStyle: this.props.contentContainerStyle, children: null };
  obj = { spacing: ThemesDefault.space.PX_24, style: tmp.content, children: this.renderWebhooks() };
  obj[2] = callback(Stack.Stack, obj);
  const items = [callback(Form.Form, obj), callback(NavScrim.NavScrim, {})];
  obj[0] = items;
  return callback2(closure_19, obj);
};
WebhooksOverview.contextType = require("ManaContext").ThemeContext;
let closure_26 = [];
let obj2 = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx");

export default function ConnectedWebhooksOverview(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let stateFromStores;
  let id;
  let id1;
  ({ contentContainerStyle, webhookType } = channelId);
  let obj = channelId(stateFromStores[19]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getChannel(channelId));
  const items1 = [closure_9];
  const stateFromStores1 = channelId(stateFromStores[19]).useStateFromStores(items1, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (guild_id == null) {
      guild_id = guildId;
    }
    return closure_1_9.getGuild(guild_id);
  });
  id = undefined;
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
  const tmp = channelId;
  const tmp2 = stateFromStores;
  const items2 = [closure_12];
  const items3 = [id, id1];
  const stateFromStoresArray = channelId(stateFromStores[19]).useStateFromStoresArray(items2, () => {
    if (null != id) {
      if (null != id1) {
        let webhooksForChannel = closure_1_12.getWebhooksForChannel(tmp, tmp2);
      }
      return webhooksForChannel;
    }
    if (null != id) {
      webhooksForChannel = closure_1_12.getWebhooksForGuild(tmp);
    } else {
      webhooksForChannel = closure_1_26;
    }
  });
  const effect = id1.useEffect(() => {
    if (null != id) {
      if (null != id1) {
        const forChannel = guildId(stateFromStores[20]).fetchForChannel(tmp, tmp2);
        const obj2 = guildId(stateFromStores[20]);
      }
    }
    if (null != id) {
      const forGuild = guildId(stateFromStores[20]).fetchForGuild(tmp);
      const obj = guildId(stateFromStores[20]);
    }
  }, items3);
  let tmp9 = null;
  if (null != stateFromStores1) {
    obj = { guild: null, channel: null, webhooks: null, contentContainerStyle: null, webhookType: null };
    obj[0] = stateFromStores1;
    obj[1] = stateFromStores;
    obj[2] = stateFromStoresArray;
    obj[3] = contentContainerStyle;
    obj[4] = webhookType;
    tmp9 = callback(WebhooksOverview, obj);
  }
  return tmp9;
};