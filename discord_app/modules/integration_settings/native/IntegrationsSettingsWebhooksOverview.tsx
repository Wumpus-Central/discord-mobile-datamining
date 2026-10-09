// === Module 17475: IntegrationsSettingsWebhooksOverview ===

// Module 17475 (IntegrationsSettingsWebhooksOverview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import Stack_Stack from "Stack/Stack" /* 5374 */;
import NavScrim from "NavScrim" /* 6726 */;
import Form from "Form" /* 8563 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 17477 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4707 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import UserStore from "UserStore" /* 1390 */;
import WebhooksStore from "WebhooksStore" /* 17476 */;

require = fn;
let closure_3 = ["channelId", "user"];
let GuildChannelStore = fn(4707);
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_8, GUILD_VOCAL_CHANNELS_KEY: closure_9 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const Constants = fn(1085);
({ HelpdeskArticles: closure_15, ChannelSettingsSections: closure_16, NON_USER_BOT_DISCRIMINATOR: closure_17, Permissions: closure_18, WebhookTypes: closure_19 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { form: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, content: null, hint: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.content = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let obj4 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.hint = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_23 = createStyles.createLegacyClassComponentStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function WebhookItem(avatar) {
  const cResult = avatar(guildId[14]).c(22);
  avatar = avatar.avatar;
  const channel = avatar.channel;
  guildId = avatar.guildId;
  const name = avatar.name;
  const token = avatar.token;
  ({ user, webhookId } = avatar);
  const webhookType = avatar.webhookType;
  const obj = avatar(guildId[14]);
  const navigation = avatar(guildId[15]).useNavigation();
  if (cResult[0] === avatar) {
    if (cResult[1] === channel) {
      if (cResult[2] === guildId) {
        if (cResult[3] === name) {
          if (cResult[4] === navigation) {
            if (cResult[5] === token) {
              if (cResult[6] === webhookId) {
                if (cResult[7] === webhookType) {
                  let tmp5 = cResult[8];
                }
                if (cResult[9] === avatar) {
                  if (cResult[10] === webhookId) {
                    let tmp6 = cResult[11];
                  }
                  if (cResult[12] !== tmp6) {
                    const obj3 = { source: tmp6 };
                    const tmp11 = closure_20(tmp(tmp2[17]).Avatar, obj3);
                    cResult[12] = tmp6;
                    cResult[13] = tmp11;
                    let tmp9 = tmp11;
                  } else {
                    tmp9 = cResult[13];
                  }
                  if (cResult[14] === user) {
                    if (cResult[15] === webhookId) {
                      if (cResult[17] === tmp5) {
                        if (cResult[18] === name) {
                          if (cResult[19] === tmp9) {
                            if (cResult[20] === tmp12) {
                              let tmp18 = cResult[21];
                            }
                            return tmp18;
                          }
                        }
                      }
                      const obj4 = { icon: tmp9, arrow: true, label: name, subLabel: cResult[16], onPress: tmp5 };
                      const tmp20 = closure_20(tmp(tmp2[21]).TableRow, obj4);
                      cResult[17] = tmp5;
                      cResult[18] = name;
                      cResult[19] = tmp9;
                      cResult[20] = cResult[16];
                      cResult[21] = tmp20;
                      tmp18 = tmp20;
                    }
                  }
                  if (null != user) {
                    const intl2 = tmp(tmp2[18]).intl;
                    const obj5 = { timestamp: channel(tmp2[19]).extractTimestamp(webhookId), user: null };
                    const obj10 = channel(tmp2[19]);
                    obj5.user = channel(tmp2[20]).getUserTag(user);
                    let formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[18]).t["7EcUbr"], obj5);
                    const obj11 = channel(tmp2[20]);
                  } else {
                    const intl = tmp(tmp2[18]).intl;
                    const obj6 = { timestamp: channel(tmp2[19]).extractTimestamp(webhookId) };
                    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[18]).t["7mv59O"], obj6);
                    const obj8 = channel(tmp2[19]);
                  }
                  cResult[14] = user;
                  cResult[15] = webhookId;
                  cResult[16] = formatToPlainStringResult;
                }
                const tmpResult = tmp(tmp2[16]);
                const obj7 = { id: webhookId, avatar, discriminator };
                const source = tmpResult.makeSource(tmp(tmp2[16]).getUserAvatarURL(obj7));
                cResult[9] = avatar;
                cResult[10] = webhookId;
                cResult[11] = source;
                tmp6 = source;
                const tmpResult2 = tmp(tmp2[16]);
              }
            }
          }
        }
      }
    }
  }
  const fn = function n() {
    navigation.push(constants2.EDIT_WEBHOOK, { webhookId, webhookType, avatar, name, channel, guildId, token });
  };
  cResult[0] = avatar;
  cResult[1] = channel;
  cResult[2] = guildId;
  cResult[3] = name;
  cResult[4] = navigation;
  cResult[5] = token;
  cResult[6] = webhookId;
  cResult[7] = webhookType;
  cResult[8] = fn;
  tmp5 = fn;
  const obj2 = avatar(guildId[15]);
}) : (function WebhookItem(avatar) {
  avatar = avatar.avatar;
  const channel = avatar.channel;
  const guildId = avatar.guildId;
  const name = avatar.name;
  const token = avatar.token;
  ({ user, webhookId } = avatar);
  const webhookType = avatar.webhookType;
  const navigation = avatar(guildId[15]).useNavigation();
  const items = [webhookId, webhookType, avatar, channel, guildId, name, token, navigation];
  const items1 = [webhookId, avatar];
  const callback = webhookType.useCallback(() => {
    navigation.push(constants2.EDIT_WEBHOOK, { webhookId, webhookType, avatar, name, channel, guildId, token });
  }, items);
  const memo = webhookType.useMemo(() => {
    const obj = AvatarUtils;
    return obj.makeSource(AvatarUtils.getUserAvatarURL({ id: webhookId, avatar, discriminator }));
  }, items1);
  const obj2 = { icon: closure_20(avatar(guildId[17]).Avatar, { source: memo }), arrow: true, label: name, subLabel: null, onPress: null };
  if (null != user) {
    const intl2 = tmp(tmp2[18]).intl;
    const obj3 = { timestamp: channel(tmp2[19]).extractTimestamp(webhookId), user: null };
    const obj6 = channel(tmp2[19]);
    obj3.user = channel(tmp2[20]).getUserTag(user);
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[18]).t["7EcUbr"], obj3);
    const obj7 = channel(tmp2[20]);
  } else {
    const intl = tmp(tmp2[18]).intl;
    const obj5 = { timestamp: channel(tmp2[19]).extractTimestamp(webhookId) };
    formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[18]).t["7mv59O"], obj5);
    const obj4 = channel(tmp2[19]);
  }
  obj2.subLabel = formatToPlainStringResult;
  obj2.onPress = callback;
  return closure_20(avatar(guildId[21]).TableRow, obj2);
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedWebhookItem(channelId) {
  const cResult = require("c").c(14);
  if (cResult[0] !== channelId) {
    channelId = channelId.channelId;
    _require = channelId;
    const user = channelId.user;
    let id = user;
    const tmp9 = _objectWithoutProperties(channelId, closure_3);
    cResult[0] = channelId;
    cResult[1] = channelId;
    cResult[2] = tmp9;
    cResult[3] = user;
    let tmp5 = tmp9;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    id = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[4] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  id = undefined;
  if (tmp6 != null) {
    id = tmp6.id;
  }
  if (cResult[5] !== id) {
    let id1;
    if (tmp6 != null) {
      id1 = tmp6.id;
    }
    const fn = function b() {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return UserStore.getUser(id);
    };
    cResult[5] = id1;
    cResult[6] = fn;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[6];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp10, tmp13);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[7] = items1;
    let tmp16 = items1;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] !== tmp4) {
    class S {
      constructor() {
        return closure_7.getChannel(closure_0);
      }
    }
    cResult[8] = tmp4;
    cResult[9] = S;
  } else {
    class S {
      constructor() {
        return closure_7.getChannel(closure_0);
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp16, S);
  if (cResult[10] === stateFromStores1) {
    class S {
      constructor() {
        return closure_7.getChannel(closure_0);
      }
    }
  }
  const obj2 = {};
  const merged = Object.assign(tmp5);
  obj2.user = stateFromStores;
  obj2.channel = stateFromStores1;
  const tmpResult2 = require("initialize");
  cResult[10] = stateFromStores1;
  cResult[11] = tmp5;
  cResult[12] = stateFromStores;
  cResult[13] = closure_20(closure_24, obj2);
  const tmp21 = closure_20(closure_24, obj2);
}) : (function ConnectedWebhookItem(arg0) {
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
  const stateFromStores1 = initialize.useStateFromStores(items1, () => ChannelStore.getChannel(_require));
  const merged1 = Object.assign(merged);
  obj3.user = stateFromStores;
  obj3.channel = stateFromStores1;
  return closure_20(closure_24, obj3);
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function CreateWebhookButton(guild) {
  const cResult = require("c").c(13);
  guild = guild.guild;
  _require = guild;
  let channel = guild.channel;
  let obj = require("c");
  navigation = require("useNavigation").useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel) {
    if (cResult[2] === guild.id) {
      let tmp8 = cResult[3];
    }
    const stateFromStores = tmp(tmp2[22]).useStateFromStores(first, tmp8);
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === guild.id) {
        if (cResult[6] === navigation) {
          let tmp10 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { IconComponent: tmp(tmp2[25]).WebhookPlusIcon };
          const tmp15 = closure_20(tmp(tmp2[24]).RowButton.Icon, obj3);
          const intl = tmp(tmp2[18]).intl;
          const stringResult = intl.string(tmp(tmp2[18]).t["nrO/HH"]);
          cResult[8] = tmp15;
          cResult[9] = stringResult;
          let tmp13 = stringResult;
          let tmp12 = tmp15;
        } else {
          tmp12 = cResult[8];
          tmp13 = cResult[9];
        }
        if (cResult[10] === tmp10) {
          if (cResult[11] === tmp18) {
            let tmp19 = cResult[12];
          }
          return tmp19;
        }
        let obj4 = { icon: tmp12, label: tmp13, disabled: null == stateFromStores, onPress: tmp10 };
        const tmp21 = closure_20(tmp(tmp2[24]).RowButton, obj4);
        cResult[10] = tmp10;
        cResult[11] = null == stateFromStores;
        cResult[12] = tmp21;
        tmp19 = tmp21;
      }
    }
    _require = asyncGeneratorStep(async () => {
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
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === channel) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp5;
              closure_129_0 = undefined;
              if (null != channel) {
                channel = 1;
                c4 = 1;
                const obj5 = { value: channel(navigation[23]).create(avatar.id, channel.id), done: false };
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
              const obj6 = { webhookId: closure_129_0.id, webhookType: closure_129_0.type, avatar: null, name: null, channel: null, guildId: null, token: null };
              avatar = closure_129_0.avatar;
              if (avatar == null) {
                avatar = undefined;
              }
              obj6.avatar = avatar;
              obj6.name = closure_129_0.name;
              obj6.channel = channel;
              obj6.guildId = avatar.id;
              obj6.token = closure_129_0.token;
              tmp2.push(constants.EDIT_WEBHOOK, obj6);
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
    });
    function t3() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[4] = stateFromStores;
    cResult[5] = guild.id;
    cResult[6] = navigation;
    cResult[7] = t3;
    tmp10 = t3;
    const tmpResult = tmp(tmp2[22]);
  }
  const fn = function l() {
    if (null != channel) {
      return channel;
    } else {
      const channels = GuildChannelStore.getChannels(id.id);
      const items = [];
      HermesBuiltin.arraySpread(channels[options], HermesBuiltin.arraySpread(channels[closure_2_8], 0));
      const found = items.find((channel) => closure_1_12.can(constants.MANAGE_WEBHOOKS, channel.channel));
      channel = undefined;
      if (found != null) {
        channel = found.channel;
      }
      return channel;
    }
  };
  cResult[1] = channel;
  cResult[2] = guild.id;
  cResult[3] = fn;
  tmp8 = fn;
  const obj2 = require("useNavigation");
}) : (function CreateWebhookButton(guild) {
  guild = guild.guild;
  let channel = guild.channel;
  let navigation;
  navigation = guild(navigation[15]).useNavigation();
  let obj = guild(navigation[15]);
  let items = [GuildChannelStore, PermissionStore];
  const stateFromStores = guild(navigation[22]).useStateFromStores(items, () => {
    if (null != channel) {
      return channel;
    } else {
      const channels = GuildChannelStore.getChannels(guild.id);
      const items = [];
      HermesBuiltin.arraySpread(channels[options], HermesBuiltin.arraySpread(channels[closure_2_8], 0));
      const found = items.find((channel) => closure_1_12.can(constants.MANAGE_WEBHOOKS, channel.channel));
      channel = undefined;
      if (found != null) {
        channel = found.channel;
      }
      return channel;
    }
  });
  const items1 = [stateFromStores, guild.id, navigation];
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
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
        return { value: "IconComponent", done: null };
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
              const obj5 = { value: tmp2(tmp5[23]).create(guild.id, stateFromStores.id), done: false };
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
            const obj6 = { webhookId: closure_129_0.id, webhookType: closure_129_0.type, avatar: null, name: null, channel: null, guildId: null, token: null };
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
  }), items1);
  let obj3 = { icon: null, label: null, disabled: null, onPress: null };
  const obj2 = guild(navigation[22]);
  obj3.icon = closure_20(guild(navigation[24]).RowButton.Icon, { IconComponent: guild(navigation[25]).WebhookPlusIcon });
  const intl = guild(navigation[18]).intl;
  obj3.label = intl.string(guild(navigation[18]).t["nrO/HH"]);
  obj3.disabled = null == stateFromStores;
  obj3.onPress = callback;
  return closure_20(guild(navigation[24]).RowButton, obj3);
});
const PureComponent = noop.PureComponent;
class WebhooksOverview extends PureComponent {
}
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
  const items = [closure_20(webhookType(5087).Text, { variant: "text-sm/medium", color: "text-muted", children: helpText }), , ];
  let tmp4Result = webhookType === constants3.INCOMING;
  if (tmp4Result) {
    let obj = { guild: self.props.guild, channel: self.props.channel };
    tmp4Result = closure_20(closure_26, obj);
  }
  items[1] = tmp4Result;
  if (0 === found.length) {
    const obj2 = { Illustration: webhookType(17480).WebhookEmpty, title: null };
    if (webhookType === constants3.CHANNEL_FOLLOWER) {
      const intl2 = webhookType(1126).intl;
      dkHRkE = webhookType(1126).t.dkHRkE;
      let stringResult = intl2.string(dkHRkE);
    } else {
      const intl = webhookType(1126).intl;
      stringResult = intl.string(webhookType(1126).t["4JAVI+"]);
    }
    obj2.title = stringResult;
    closure_20(webhookType(1200).EmptyState, obj2);
  } else {
    const obj3 = {
      hasIcons: true,
      children: found.map((type) => {
          ({ id, avatar } = type);
          const obj = { webhookId: id, webhookType: type.type, avatar, name, user, channelId: channel_id, token, guildId: guild_id };
          ({ name, user, token, guild_id, channel_id } = type);
          return closure_1_20(closure_1_25, obj, id);
        })
    };
    const obj4 = { children: null };
    items[2] = closure_20(webhookType(6269).TableRowGroup, obj3);
    obj4.children = items;
    return closure_22(closure_21, obj4);
  }
};
prototype["render"] = function render() {
  const tmp = closure_23(this.context);
  const obj = { children: null };
  const obj2 = { style: tmp.form, contentContainerStyle: this.props.contentContainerStyle, children: constants2(Stack_Stack.Stack, { spacing: nativeDefault.space.PX_24, style: tmp.content, children: this.renderWebhooks() }) };
  const items = [constants2(Form.Form, obj2), constants2(NavScrim.NavScrim, {})];
  obj.children = items;
  return closure_1_22(guild, obj);
};
WebhooksOverview.contextType = fn(4788).ThemeContext;
let closure_28 = [];
ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectedWebhooksOverview(channelId) {
  const cResult = channelId(stateFromStores[14]).c(21);
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  ({ contentContainerStyle, webhookType } = channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = channelId(stateFromStores[14]);
  stateFromStores = channelId(stateFromStores[22]).useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[4] === guild_id) {
    if (cResult[5] === guildId) {
      let tmp11 = cResult[6];
    }
    const stateFromStores1 = tmp(tmp2[22]).useStateFromStores(tmp8, tmp11);
    let id;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    if (id == null) {
      id = guildId;
    }
    let id1;
    if (stateFromStores != null) {
      id1 = stateFromStores.id;
    }
    if (id1 == null) {
      id1 = channelId;
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [WebhooksStore];
      cResult[7] = items2;
      let tmp16 = items2;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] === id1) {
      if (cResult[9] === id) {
        let tmp18 = cResult[10];
      }
      const stateFromStoresArray = tmp(tmp2[22]).useStateFromStoresArray(tmp16, tmp18);
      if (cResult[11] === id1) {
        if (cResult[12] === id) {
          let tmp20 = cResult[13];
          let tmp21 = cResult[14];
        }
        const effect = noop.useEffect(tmp20, tmp21);
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === contentContainerStyle) {
            if (cResult[17] === stateFromStores1) {
              if (cResult[18] === webhookType) {
                if (cResult[19] === stateFromStoresArray) {
                  let tmp24 = cResult[20];
                }
                return tmp24;
              }
            }
          }
        }
        let tmp25 = null;
        if (null != stateFromStores1) {
          let obj2 = { guild: stateFromStores1, channel: stateFromStores, webhooks: stateFromStoresArray, contentContainerStyle, webhookType };
          tmp25 = closure_20(WebhooksOverview, obj2);
        }
        cResult[15] = stateFromStores;
        cResult[16] = contentContainerStyle;
        cResult[17] = stateFromStores1;
        cResult[18] = webhookType;
        cResult[19] = stateFromStoresArray;
        cResult[20] = tmp25;
        tmp24 = tmp25;
      }
      const fn3 = function w() {
        if (null != id) {
          if (null != id1) {
            const forChannel = WebhooksActionCreatorsDefault.fetchForChannel(id, tmp2);
          }
        }
        if (null != id) {
          const forGuild = WebhooksActionCreatorsDefault.fetchForGuild(id);
        }
      };
      const items3 = [id, id1];
      cResult[11] = id1;
      cResult[12] = id;
      cResult[13] = fn3;
      cResult[14] = items3;
      tmp21 = items3;
      tmp20 = fn3;
      const tmpResult4 = tmp(tmp2[22]);
    }
    const fn2 = function f() {
      if (null != id) {
        if (null != id1) {
          let webhooksForChannel = WebhooksStore.getWebhooksForChannel(id, tmp2);
        }
        return webhooksForChannel;
      }
      if (null != id) {
        webhooksForChannel = WebhooksStore.getWebhooksForGuild(id);
      } else {
        webhooksForChannel = closure_28;
      }
    };
    cResult[8] = id1;
    cResult[9] = id;
    cResult[10] = fn2;
    tmp18 = fn2;
    const tmpResult3 = tmp(tmp2[22]);
  }
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  class I {
    constructor() {
      guild_id = undefined;
      tmp = closure_11;
      if (closure_2 != null) {
        guild_id = closure_2.guild_id;
      }
      if (guild_id == null) {
        guild_id = guildId;
      }
      return closure_11.getGuild(guild_id);
    }
  }
  cResult[4] = guild_id1;
  cResult[5] = guildId;
  cResult[6] = I;
  tmp11 = I;
  const tmpResult = channelId(stateFromStores[22]);
}) : (function ConnectedWebhooksOverview(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let stateFromStores;
  let id1;
  ({ contentContainerStyle, webhookType } = channelId);
  const items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[22]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores[22]);
  const tmp = channelId;
  const tmp2 = stateFromStores;
  const items1 = [GuildStore];
  const stateFromStores1 = channelId(stateFromStores[22]).useStateFromStores(items1, () => {
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
  let obj2 = channelId(stateFromStores[22]);
  const items2 = [WebhooksStore];
  const items3 = [id, id1];
  const stateFromStoresArray = tmp(tmp2[22]).useStateFromStoresArray(items2, () => {
    if (null != id) {
      if (null != id1) {
        let webhooksForChannel = WebhooksStore.getWebhooksForChannel(id, tmp2);
      }
      return webhooksForChannel;
    }
    if (null != id) {
      webhooksForChannel = WebhooksStore.getWebhooksForGuild(id);
    } else {
      webhooksForChannel = closure_28;
    }
  });
  const effect = noop.useEffect(() => {
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
    const obj3 = { guild: stateFromStores1, channel: stateFromStores, webhooks: stateFromStoresArray, contentContainerStyle, webhookType };
    tmp9 = closure_20(WebhooksOverview, obj3);
  }
  return tmp9;
});