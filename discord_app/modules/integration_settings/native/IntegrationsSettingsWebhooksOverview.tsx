// discord_app/modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import NavScrim from "../../../design/components/Navigator/native/NavScrim.android.tsx";
import Form from "../../../design/void/Form/native/index.tsx";
import WebhooksActionCreatorsDefault from "../../../actions/WebhooksActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore_mod from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import WebhooksStore from "../../../stores/WebhooksStore.tsx";

require = fn;
function WebhookItem(avatar) {
  avatar = avatar.avatar;
  const channel = avatar.channel;
  const guildId = avatar.guildId;
  const name = avatar.name;
  const token = avatar.token;
  ({ user, webhookId } = avatar);
  const webhookType = avatar.webhookType;
  const navigation = avatar(guildId[12]).useNavigation();
  const items = [webhookId, webhookType, avatar, channel, guildId, name, token, navigation];
  const items1 = [webhookId, avatar];
  const callback = token.useCallback(() => {
    navigation.push(constants2.EDIT_WEBHOOK, { webhookId, webhookType, avatar, name, channel, guildId, token });
  }, items);
  const memo = token.useMemo(() => {
    const obj = AvatarUtils;
    return obj.makeSource(AvatarUtils.getUserAvatarURL({ id: webhookId, avatar, discriminator }));
  }, items1);
  const obj2 = {
    icon: closure_18(avatar(guildId[15]).Avatar, { source: memo }),
    arrow: true,
    label: name,
    subLabel: null,
    onPress: null,
  };
  if (null != user) {
    const intl2 = tmp(tmp2[16]).intl;
    const obj3 = { timestamp: channel(tmp2[17]).extractTimestamp(webhookId), user: null };
    const obj6 = channel(tmp2[17]);
    obj3.user = channel(tmp2[18]).getUserTag(user);
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[16]).t["7EcUbr"], obj3);
    const obj7 = channel(tmp2[18]);
  } else {
    const intl = tmp(tmp2[16]).intl;
    const obj5 = { timestamp: channel(tmp2[17]).extractTimestamp(webhookId) };
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[16]).t["7mv59O"], obj5);
    const obj4 = channel(tmp2[17]);
  }
  obj2.subLabel = formatToPlainStringResult;
  obj2.onPress = callback;
  return closure_18(avatar(guildId[14]).TableRow, obj2);
}
function ConnectedWebhookItem(arg0) {
  ({ channelId: require, user: importDefault } = arg0);
  const merged = Object.assign(arg0, Object.assign({ channelId: 0, user: 0 }));
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return UserStore.getUser(id);
  });
  const items1 = [ChannelStore];
  const obj3 = {};
  const stateFromStores1 = initialize.useStateFromStores(items1, () => ChannelStore.getChannel(require));
  const merged1 = Object.assign(merged);
  obj3.user = stateFromStores;
  obj3.channel = stateFromStores1;
  return closure_18(WebhookItem, obj3);
}
function CreateWebhookButton(guild) {
  guild = guild.guild;
  let channel = guild.channel;
  let navigation;
  navigation = guild(navigation[12]).useNavigation();
  let obj = guild(navigation[12]);
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
  const callback = noop.useCallback(
    stateFromStores(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_129_0 = undefined;
              if (null != stateFromStores) {
                c3 = 1;
                c4 = 1;
                const obj5 = { value: tmp2(tmp5[20]).create(guild.id, stateFromStores.id), done: false };
                return obj5;
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
              const obj6 = {
                webhookId: closure_129_0.id,
                webhookType: closure_129_0.type,
                avatar: null,
                name: null,
                channel: null,
                guildId: null,
                token: null,
              };
              let avatar = closure_129_0.avatar;
              if (avatar == null) {
                avatar = undefined;
              }
              obj6.avatar = avatar;
              obj6.name = closure_129_0.name;
              obj6.channel = closure_130_3;
              obj6.guildId = closure_130_0.id;
              obj6.token = closure_129_0.token;
              closure_130_2.push(constants.EDIT_WEBHOOK, obj6);
            }
          }
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp18) {
          c4 = tmp;
          throw tmp18;
        }
      }
    }),
    items1,
  );
  let obj3 = { icon: null, label: null, disabled: null, onPress: null };
  const obj2 = guild(navigation[19]);
  obj3.icon = closure_18(guild(navigation[21]).RowButton.Icon, {
    IconComponent: guild(navigation[22]).WebhookPlusIcon,
  });
  const intl = guild(navigation[16]).intl;
  obj3.label = intl.string(guild(navigation[16]).t["nrO/HH"]);
  obj3.disabled = null == stateFromStores;
  obj3.onPress = callback;
  return closure_18(guild(navigation[21]).RowButton, obj3);
}
let GuildChannelStore = fn(2013);
({ GUILD_SELECTABLE_CHANNELS_KEY: metroRequire, GUILD_VOCAL_CHANNELS_KEY: closure_7 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const Constants = fn(1074);
({
  HelpdeskArticles: map1,
  ChannelSettingsSections: closure_14,
  NON_USER_BOT_DISCRIMINATOR: closure_15,
  Permissions: closure_16,
  WebhookTypes: closure_17,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { form: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, content: null, hint: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.content = {
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
let obj4 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.hint = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_21 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class WebhooksOverview extends PureComponent {}
const prototype = WebhooksOverview.prototype;
prototype["getHelpText"] = function getHelpText() {
  if (this.props.webhookType === constants3.CHANNEL_FOLLOWER) {
    const intl2 = util.intl;
    const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants.CHANNEL_FOLLOWING) };
    let formatResult = intl2.format(util.t["5u+aV1"], obj3);
  } else {
    const intl = util.intl;
    const obj = { articleURL: HelpdeskUtilsDefault.getArticleURL(constants.WEBHOOKS_INTRODUCTION) };
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
  const items = [
    closure_18(webhookType(4718).Text, { variant: "text-sm/medium", color: "text-muted", children: helpText }),
    ,
  ];
  let tmp4Result = webhookType === constants3.INCOMING;
  if (tmp4Result) {
    let obj = { guild: self.props.guild, channel: self.props.channel };
    tmp4Result = closure_18(CreateWebhookButton, obj);
  }
  items[1] = tmp4Result;
  if (0 === found.length) {
    const obj2 = { Illustration: webhookType(17226).WebhookEmpty, title: null };
    if (webhookType === constants3.CHANNEL_FOLLOWER) {
      const intl2 = webhookType(1115).intl;
      dkHRkE = webhookType(1115).t.dkHRkE;
      let stringResult = intl2.string(dkHRkE);
    } else {
      const intl = webhookType(1115).intl;
      stringResult = intl.string(webhookType(1115).t["4JAVI+"]);
    }
    obj2.title = stringResult;
    closure_18(webhookType(1177).EmptyState, obj2);
  } else {
    const obj3 = {
      hasIcons: true,
      children: found.map((type) => {
        ({ id, avatar } = type);
        const obj = {
          webhookId: id,
          webhookType: type.type,
          avatar,
          name,
          user,
          channelId: channel_id,
          token,
          guildId: guild_id,
        };
        ({ name, user, token, guild_id, channel_id } = type);
        return closure_1_18(ConnectedWebhookItem, obj, id);
      }),
    };
    const obj4 = { children: null };
    items[2] = closure_18(webhookType(5857).TableRowGroup, obj3);
    obj4.children = items;
    return closure_20(closure_19, obj4);
  }
};
prototype["render"] = function render() {
  const tmp = closure_21(this.context);
  const obj = { children: null };
  const obj2 = {
    style: tmp.form,
    contentContainerStyle: this.props.contentContainerStyle,
    children: collapsedCategories(Stack_Stack.Stack, {
      spacing: nativeDefault.space.PX_24,
      style: tmp.content,
      children: this.renderWebhooks(),
    }),
  };
  const items = [collapsedCategories(Form.Form, obj2), collapsedCategories(NavScrim.NavScrim, {})];
  obj.children = items;
  return closure_1_20(closure_1_19, obj);
};
WebhooksOverview.contextType = fn(4432).ThemeContext;
let closure_26 = [];
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx",
);

export default function ConnectedWebhooksOverview(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let stateFromStores;
  let id1;
  ({ contentContainerStyle, webhookType } = channelId);
  const items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[19]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores[19]);
  const tmp = channelId;
  const tmp2 = stateFromStores;
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
  const stateFromStoresArray = tmp(tmp2[19]).useStateFromStoresArray(items2, () => {
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
    const obj3 = {
      guild: stateFromStores1,
      channel: stateFromStores,
      webhooks: stateFromStoresArray,
      contentContainerStyle,
      webhookType,
    };
    tmp9 = closure_18(WebhooksOverview, obj3);
  }
  return tmp9;
}
