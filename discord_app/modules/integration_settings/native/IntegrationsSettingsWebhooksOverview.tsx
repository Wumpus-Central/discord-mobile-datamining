// discord_app/modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import NavScrim from "../../../design/components/Navigator/native/NavScrim.android.tsx";
import Form2 from "../../../design/void/Form/native/index.tsx";
import WebhooksActionCreatorsDefault from "../../../actions/WebhooksActionCreators.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore_mod from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import WebhooksStore from "../../../stores/WebhooksStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c3, c4, channelId, guild, importDefault, navigation;

let c9;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let closure_3 = ["channelId", "user"];
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: metroImportAll, GUILD_VOCAL_CHANNELS_KEY: c9 } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({
  HelpdeskArticles: closure_15,
  ChannelSettingsSections: closure_16,
  NON_USER_BOT_DISCRIMINATOR: closure_17,
  Permissions: closure_18,
  WebhookTypes: closure_19,
} = Constants);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = Fragment);
let obj = { form: obj2, content: obj3, hint: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_23 = createLegacyClassComponentStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (avatar) => {
      let guildId;
      let obj10;
      let obj7;
      let obj9;
      let user;
      let webhookId;
      let obj = avatar(guildId[14]);
      const cResult = obj.c(22);
      avatar = avatar.avatar;
      const channel = avatar.channel;
      guildId = avatar.guildId;
      const name = avatar.name;
      const token = avatar.token;
      ({ user, webhookId } = avatar);
      const webhookType = avatar.webhookType;
      const obj2 = avatar(guildId[15]);
      navigation = obj2.useNavigation();
      if (cResult[0] === avatar) {
        if (cResult[1] === channel) {
          if (cResult[2] === guildId) {
            if (cResult[3] === name) {
              if (cResult[4] === navigation) {
                if (cResult[5] === token) {
                  if (cResult[6] === webhookId) {
                    let tmp5;
                    if (cResult[7] === webhookType) {
                      tmp5 = cResult[8];
                    }
                    if (cResult[9] === avatar) {
                      let tmp6;
                      let tmp10;
                      let formatToPlainString2Result;
                      if (cResult[10] === webhookId) {
                        tmp6 = cResult[11];
                      }
                      if (cResult[12] !== tmp6) {
                        const obj3 = { source: tmp6 };
                        const tmp12 = closure_20(avatar(guildId[17]).Avatar, obj3);
                        cResult[12] = tmp6;
                        cResult[13] = tmp12;
                        tmp10 = tmp12;
                      } else {
                        tmp10 = cResult[13];
                      }
                      if (cResult[14] === user) {
                        let tmp13;
                        if (cResult[15] === webhookId) {
                          tmp13 = cResult[16];
                        }
                        if (cResult[17] === tmp5) {
                          if (cResult[18] === name) {
                            if (cResult[19] === tmp10) {
                              let tmp20;
                              if (cResult[20] === tmp13) {
                                tmp20 = cResult[21];
                              }
                              return tmp20;
                            }
                          }
                        }
                        const obj4 = { icon: tmp10, arrow: true, label: name, subLabel: tmp13, onPress: tmp5 };
                        const tmp22 = closure_20(avatar(guildId[21]).TableRow, obj4);
                        cResult[17] = tmp5;
                        cResult[18] = name;
                        cResult[19] = tmp10;
                        cResult[20] = tmp13;
                        cResult[21] = tmp22;
                        tmp20 = tmp22;
                      }
                      if (null != user) {
                        const intl2 = tmp(tmp2[18]).intl;
                        const formatToPlainString2 = intl2.formatToPlainString;
                        const obj5 = { timestamp: obj9.extractTimestamp(webhookId), user: obj10.getUserTag(user) };
                        const v7EcUbr = tmp(tmp2[18]).t["7EcUbr"];
                        obj9 = channel(guildId[19]);
                        obj10 = channel(guildId[20]);
                        formatToPlainString2Result = formatToPlainString2(v7EcUbr, obj5);
                      } else {
                        const intl = tmp(tmp2[18]).intl;
                        const formatToPlainString = intl.formatToPlainString;
                        const obj6 = { timestamp: obj7.extractTimestamp(webhookId) };
                        const v7mv59O = tmp(tmp2[18]).t["7mv59O"];
                        obj7 = channel(guildId[19]);
                        formatToPlainString2Result = formatToPlainString(v7mv59O, obj6);
                      }
                      cResult[14] = user;
                      cResult[15] = webhookId;
                      cResult[16] = formatToPlainString2Result;
                      tmp13 = formatToPlainString2Result;
                    }
                    const makeSource = avatar(guildId[16]).makeSource;
                    avatar(guildId[16]);
                    const obj8 = { id: webhookId, avatar, discriminator };
                    const tmpResult2 = avatar(guildId[16]);
                    const source = makeSource(tmpResult2.getUserAvatarURL(obj8));
                    cResult[9] = avatar;
                    cResult[10] = webhookId;
                    cResult[11] = source;
                    tmp6 = source;
                  }
                }
              }
            }
          }
        }
      }
      const fn = function n() {
        const obj = { webhookId, webhookType, avatar, name, channel, guildId, token };
        navigation.push(constants.EDIT_WEBHOOK, obj);
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
    }
  : (avatar) => {
      let formatToPlainString2Result;
      let obj4;
      let obj6;
      let obj7;
      let user;
      let webhookId;
      avatar = avatar.avatar;
      const channel = avatar.channel;
      const guildId = avatar.guildId;
      const name = avatar.name;
      const token = avatar.token;
      ({ user, webhookId } = avatar);
      const webhookType = avatar.webhookType;
      const tmp = avatar;
      let obj = avatar(guildId[15]);
      navigation = obj.useNavigation();
      const items = [webhookId, webhookType, avatar, channel, guildId, name, token, navigation];
      const items1 = [webhookId, avatar];
      const callback = webhookType.useCallback(() => {
        const obj = { webhookId, webhookType, avatar, name, channel, guildId, token };
        navigation.push(constants.EDIT_WEBHOOK, obj);
      }, items);
      const memo = webhookType.useMemo(() => {
        const makeSource = AvatarUtils.makeSource;
        AvatarUtils;
        const obj = AvatarUtils;
        const obj2 = { id: webhookId, avatar, discriminator };
        return makeSource(obj.getUserAvatarURL(obj2));
      }, items1);
      let obj2 = {
        icon: closure_20(avatar(guildId[17]).Avatar, { source: memo }),
        arrow: true,
        label: name,
        subLabel: formatToPlainString2Result,
        onPress: callback,
      };
      const TableRow = avatar(guildId[21]).TableRow;
      if (null != user) {
        const intl2 = tmp(tmp2[18]).intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        const obj3 = { timestamp: obj6.extractTimestamp(webhookId), user: obj7.getUserTag(user) };
        const v7EcUbr = tmp(tmp2[18]).t["7EcUbr"];
        obj6 = channel(guildId[19]);
        obj7 = channel(guildId[20]);
        formatToPlainString2Result = formatToPlainString2(v7EcUbr, obj3);
      } else {
        const intl = tmp(tmp2[18]).intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj5 = { timestamp: obj4.extractTimestamp(webhookId) };
        const v7mv59O = tmp(tmp2[18]).t["7mv59O"];
        obj4 = channel(guildId[19]);
        formatToPlainString2Result = formatToPlainString(v7mv59O, obj5);
      }
      return closure_20(TableRow, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let closure_0;
      let id;
      let tmp10;
      let tmp14;
      let tmp17;
      let tmp19;
      let tmp5;
      const obj = require("react");
      const cResult = obj.c(14);
      if (cResult[0] !== channelId) {
        channelId = channelId.channelId;
        _require = channelId;
        const user = channelId.user;
        id = user;
        const tmp9 = _objectWithoutProperties(channelId, closure_3);
        cResult[0] = channelId;
        cResult[1] = channelId;
        cResult[2] = tmp9;
        cResult[3] = user;
        tmp5 = tmp9;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        id = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[4] = items;
        tmp10 = items;
      } else {
        tmp10 = cResult[4];
      }
      id = undefined;
      const tmp12 = cResult[5];
      if (tmp6 != null) {
        id = tmp6.id;
      }
      if (tmp12 !== id) {
        let id1;
        if (tmp6 != null) {
          id1 = tmp6.id;
        }
        const fn = function p() {
          id = undefined;
          const getUser = UserStore.getUser;
          if (id != null) {
            id = id.id;
          }
          return getUser(id);
        };
        cResult[5] = id1;
        cResult[6] = fn;
        tmp14 = fn;
      } else {
        tmp14 = cResult[6];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp14);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[7] = items1;
        tmp17 = items1;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] !== tmp4) {
        const fn2 = function k() {
          return ChannelStore.getChannel(closure_0);
        };
        cResult[8] = tmp4;
        cResult[9] = fn2;
        tmp19 = fn2;
      } else {
        tmp19 = cResult[9];
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp17, tmp19);
      if (cResult[10] === stateFromStores1) {
        if (cResult[11] === tmp5) {
          let tmp21;
          if (cResult[12] === stateFromStores) {
            tmp21 = cResult[13];
          }
          return tmp21;
        }
      }
      const obj2 = { user: stateFromStores, channel: stateFromStores1 };
      const merged = Object.assign(tmp5);
      const tmp23 = closure_20(closure_24, obj2);
      cResult[10] = stateFromStores1;
      cResult[11] = tmp5;
      cResult[12] = stateFromStores;
      cResult[13] = tmp23;
      tmp21 = tmp23;
    }
  : (arg0) => {
      let id;
      let require;
      let stateFromStores1;
      ({ channelId: require, user: importDefault } = arg0);
      const merged = Object.assign(arg0, Object.assign({ channelId: 0, user: 0 }));
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => {
        importDefault = undefined;
        const getUser = UserStore.getUser;
        if (importDefault != null) {
          importDefault = importDefault.id;
        }
        return getUser(importDefault);
      });
      const items1 = [ChannelStore];
      const obj3 = { user: stateFromStores, channel: stateFromStores1 };
      const obj2 = get_initialized;
      stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(_require));
      const merged1 = Object.assign(merged);
      return closure_20(closure_24, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let first;
      const tmp = guild;
      let obj = guild(navigation[14]);
      const cResult = obj.c(13);
      guild = guild.guild;
      let channel = guild.channel;
      let obj2 = guild(navigation[15]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildChannelStore, PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channel) {
        let tmp8;
        if (cResult[2] === guild.id) {
          tmp8 = cResult[3];
        }
        const tmpResult = tmp(navigation[22]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
        if (cResult[4] === stateFromStores) {
          if (cResult[5] === guild.id) {
            let tmp10;
            let tmp13;
            let tmp12;
            if (cResult[6] === navigation) {
              tmp10 = cResult[7];
            }
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              let obj3 = { IconComponent: tmp(navigation[25]).WebhookPlusIcon };
              const Icon = tmp(tmp2[24]).RowButton.Icon;
              const tmp15 = closure_20(Icon, obj3);
              const intl = tmp(tmp2[18]).intl;
              const stringResult = intl.string(tmp(navigation[18]).t["nrO/HH"]);
              cResult[8] = tmp15;
              cResult[9] = stringResult;
              tmp13 = stringResult;
              tmp12 = tmp15;
            } else {
              tmp12 = cResult[8];
              tmp13 = cResult[9];
            }
            const tmp17 = null;
            if (cResult[10] === tmp10) {
              let tmp19;
              if ((cResult[11] === null) == stateFromStores) {
                tmp19 = cResult[12];
              }
              return tmp19;
            }
            let obj4 = { icon: tmp12, label: tmp13, disabled: tmp18, onPress: tmp10 };
            const tmp21 = closure_20(tmp(tmp2[24]).RowButton, obj4);
            cResult[10] = tmp10;
            cResult[11] = null == stateFromStores;
            cResult[12] = tmp21;
            tmp19 = tmp21;
          }
        }
        let closure_0 = _asyncToGenerator(async () => {
          let obj2;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              let avatar;
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
                  navigation = tmp;
                  let closure_1 = tmp4;
                  avatar = undefined;
                  if (null != channel) {
                    channel = 1;
                    c4 = 1;
                    const obj5 = { value: obj2.create(avatar.id, channel.id), done: false };
                    obj2 = channel(navigation[23]);
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                avatar = value;
                if (null != avatar) {
                  const obj6 = {
                    webhookId: avatar.id,
                    webhookType: avatar.type,
                    avatar,
                    name: avatar.name,
                    channel,
                    guildId: avatar.id,
                    token: avatar.token,
                  };
                  avatar = avatar.avatar;
                  const push = navigation.push;
                  const EDIT_WEBHOOK = constants.EDIT_WEBHOOK;
                  if (avatar == null) {
                    avatar = undefined;
                  }
                  push(EDIT_WEBHOOK, obj6);
                }
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp17) {
              c4 = 3;
              throw tmp17;
            }
          }
        });
        const fn2 = function () {
          return closure_0(...arguments);
        };
        cResult[4] = stateFromStores;
        cResult[5] = guild.id;
        cResult[6] = navigation;
        cResult[7] = fn2;
        tmp10 = fn2;
      }
      const fn = function l() {
        if (null != channel) {
          return channel;
        } else {
          const channels = GuildChannelStore.getChannels(guild.id);
          const items = [];
          HermesBuiltin.arraySpread(
            items,
            channels[React4],
            HermesBuiltin.arraySpread(items, channels[metroImportAll], 0),
          );
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
    }
  : (guild) => {
      let Icon;
      let intl;
      let obj4;
      guild = guild.guild;
      let channel = guild.channel;
      navigation = undefined;
      let obj = guild(navigation[15]);
      navigation = obj.useNavigation();
      let obj2 = guild(navigation[22]);
      let items = [GuildChannelStore, PermissionStore];
      const stateFromStores = obj2.useStateFromStores(items, () => {
        if (null != channel) {
          return channel;
        } else {
          const channels = GuildChannelStore.getChannels(guild.id);
          const items = [];
          HermesBuiltin.arraySpread(
            items,
            channels[React4],
            HermesBuiltin.arraySpread(items, channels[metroImportAll], 0),
          );
          const found = items.find((channel) => closure_1_12.can(constants.MANAGE_WEBHOOKS, channel.channel));
          channel = undefined;
          if (found != null) {
            channel = found.channel;
          }
          return channel;
        }
      });
      const items1 = [stateFromStores, guild.id, navigation];
      const callback = react.useCallback(
        _asyncToGenerator(async () => {
          let closure_1;
          let closure_2;
          let obj2;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              let avatar;
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
                  navigation = tmp4;
                  avatar = undefined;
                  if (null != stateFromStores) {
                    c3 = 1;
                    c4 = 1;
                    const obj5 = { value: obj2.create(guild.id, stateFromStores.id), done: false };
                    obj2 = tmp(navigation[23]);
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                avatar = value;
                if (null != avatar) {
                  const obj6 = {
                    webhookId: avatar.id,
                    webhookType: avatar.type,
                    avatar,
                    name: avatar.name,
                    channel: closure_130_3,
                    guildId: closure_130_0.id,
                    token: avatar.token,
                  };
                  avatar = avatar.avatar;
                  const push = closure_130_2.push;
                  const EDIT_WEBHOOK = constants.EDIT_WEBHOOK;
                  if (avatar == null) {
                    avatar = undefined;
                  }
                  push(EDIT_WEBHOOK, obj6);
                }
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp17) {
              c4 = 3;
              throw tmp17;
            }
          }
        }),
        items1,
      );
      let obj3 = {
        icon: closure_20(Icon, obj4),
        label: intl.string(guild(navigation[18]).t["nrO/HH"]),
        disabled: null == stateFromStores,
        onPress: callback,
      };
      const RowButton = guild(navigation[24]).RowButton;
      obj4 = { IconComponent: guild(navigation[25]).WebhookPlusIcon };
      Icon = guild(navigation[24]).RowButton.Icon;
      intl = guild(navigation[18]).intl;
      return closure_20(RowButton, obj3);
    };
const PureComponent = react.PureComponent;
class WebhooksOverview extends PureComponent {
  getHelpText() {
    let format2Result;
    let obj2;
    let obj4;
    if (this.props.webhookType === constants3.CHANNEL_FOLLOWER) {
      const intl2 = intl3.intl;
      const format2 = intl2.format;
      const obj3 = { helpdeskArticle: obj4.getArticleURL(constants.CHANNEL_FOLLOWING) };
      const prop = intl3.t["5u+aV1"];
      obj4 = HelpdeskUtilsDefault;
      format2Result = format2(prop, obj3);
    } else {
      const intl = intl3.intl;
      const format = intl.format;
      const obj = { articleURL: obj2.getArticleURL(constants.WEBHOOKS_INTRODUCTION) };
      const prop1 = intl3.t["3hX7G+"];
      obj2 = HelpdeskUtilsDefault;
      format2Result = format(prop1, obj);
    }
    return format2Result;
  }
  renderWebhooks() {
    let stringResult;
    let tmp4Result2;
    let webhookType;
    let webhooks;
    const self = this;
    ({ webhooks, webhookType } = this.props);
    let found = webhooks;
    if (null != webhookType) {
      found = webhooks.filter((type) => type.type === webhookType);
    }
    const helpText = self.getHelpText();
    const children = [
      closure_20(webhookType(4886).Text, { variant: "text-sm/medium", color: "text-muted", children: helpText }),
      ,
    ];
    let tmp4Result = webhookType === constants3.INCOMING;
    if (tmp4Result) {
      let obj = { guild: self.props.guild, channel: self.props.channel };
      tmp4Result = closure_20(closure_26, obj);
    }
    children[1] = tmp4Result;
    if (0 === found.length) {
      const obj2 = { Illustration: webhookType(17025).WebhookEmpty, title: stringResult };
      const EmptyState = webhookType(1188).EmptyState;
      if (webhookType === constants3.CHANNEL_FOLLOWER) {
        const intl2 = webhookType(1126).intl;
        stringResult = intl2.string(webhookType(1126).t.dkHRkE);
      } else {
        const intl = webhookType(1126).intl;
        stringResult = intl.string(webhookType(1126).t["4JAVI+"]);
      }
      tmp4Result2 = closure_20(EmptyState, obj2);
    } else {
      const obj3 = {
        hasIcons: true,
        children: found.map((type) => {
          let avatar;
          let channel_id;
          let guild_id;
          let id;
          let name;
          let token;
          let user;
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
          return closure_1_20(closure_1_25, obj, id);
        }),
      };
      const TableRowGroup = webhookType(6074).TableRowGroup;
      tmp4Result2 = closure_20(TableRowGroup, obj3);
    }
    children[2] = tmp4Result2;
    return closure_22(closure_21, { children });
  }
  render() {
    let Stack;
    let items;
    let obj3;
    const tmp = closure_23(this.context);
    const obj = { children: items };
    const obj2 = {
      style: tmp.form,
      contentContainerStyle: this.props.contentContainerStyle,
      children: closure_20(Stack, obj3),
    };
    const Form = Form2.Form;
    obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.content, children: this.renderWebhooks() };
    Stack = Stack_Stack.Stack;
    items = [closure_20(Form, obj2), closure_20(NavScrim.NavScrim, {})];
    return afk(closure_21, obj);
  }
}
const prototype = WebhooksOverview.prototype;
WebhooksOverview.contextType = native.ThemeContext;
let closure_28 = [];
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let contentContainerStyle;
      let first;
      let stateFromStores;
      let tmp6;
      let tmp8;
      let webhookType;
      const tmp2 = stateFromStores;
      let obj = channelId(stateFromStores[14]);
      const cResult = obj.c(21);
      channelId = channelId.channelId;
      const guildId = channelId.guildId;
      ({ contentContainerStyle, webhookType } = channelId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function o() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channelId(tmp2[22]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[3] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      let guild_id;
      const tmp10 = cResult[4];
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (tmp10 === guild_id) {
        let tmp12;
        let tmp17;
        if (cResult[5] === guildId) {
          tmp12 = cResult[6];
        }
        const tmpResult3 = channelId(tmp2[22]);
        const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp12);
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
          tmp17 = items2;
        } else {
          tmp17 = cResult[7];
        }
        if (cResult[8] === id1) {
          let tmp19;
          if (cResult[9] === id) {
            tmp19 = cResult[10];
          }
          const tmpResult4 = channelId(tmp2[22]);
          const stateFromStoresArray = tmpResult4.useStateFromStoresArray(tmp17, tmp19);
          if (cResult[11] === id1) {
            let tmp21;
            let tmp22;
            if (cResult[12] === id) {
              tmp21 = cResult[13];
              tmp22 = cResult[14];
            }
            const effect = react.useEffect(tmp21, tmp22);
            if (cResult[15] === stateFromStores) {
              if (cResult[16] === contentContainerStyle) {
                if (cResult[17] === stateFromStores1) {
                  if (cResult[18] === webhookType) {
                    let tmp25;
                    if (cResult[19] === stateFromStoresArray) {
                      tmp25 = cResult[20];
                    }
                    return tmp25;
                  }
                }
              }
            }
            let tmp26 = null;
            if (null != stateFromStores1) {
              let obj2 = {
                guild: stateFromStores1,
                channel: stateFromStores,
                webhooks: stateFromStoresArray,
                contentContainerStyle,
                webhookType,
              };
              tmp26 = closure_20(WebhooksOverview, obj2);
            }
            cResult[15] = stateFromStores;
            cResult[16] = contentContainerStyle;
            cResult[17] = stateFromStores1;
            cResult[18] = webhookType;
            cResult[19] = stateFromStoresArray;
            cResult[20] = tmp26;
            tmp25 = tmp26;
          }
          const fn4 = function w() {
            if (null != id) {
              if (null != id1) {
                const obj2 = WebhooksActionCreatorsDefault;
                const forChannel = obj2.fetchForChannel(id, tmp2);
              }
            }
            if (null != id) {
              const obj = WebhooksActionCreatorsDefault;
              const forGuild = obj.fetchForGuild(id);
            }
          };
          const items3 = [id, id1];
          cResult[11] = id1;
          cResult[12] = id;
          cResult[13] = fn4;
          cResult[14] = items3;
          tmp22 = items3;
          tmp21 = fn4;
        }
        const fn3 = function y() {
          let webhooksForChannel;
          if (null != id) {
            if (null != id1) {
              webhooksForChannel = WebhooksStore.getWebhooksForChannel(id, tmp2);
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
        cResult[10] = fn3;
        tmp19 = fn3;
      }
      let guild_id1;
      if (stateFromStores != null) {
        guild_id1 = stateFromStores.guild_id;
      }
      const fn2 = function _() {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        if (guild_id == null) {
          guild_id = guildId;
        }
        return getGuild(guild_id);
      };
      cResult[4] = guild_id1;
      cResult[5] = guildId;
      cResult[6] = fn2;
      tmp12 = fn2;
    }
  : (channelId) => {
      let contentContainerStyle;
      let webhookType;
      channelId = channelId.channelId;
      const guildId = channelId.guildId;
      let stateFromStores;
      let id1;
      ({ contentContainerStyle, webhookType } = channelId);
      const tmp2 = stateFromStores;
      let obj = channelId(stateFromStores[22]);
      const items = [ChannelStore];
      stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      let obj2 = channelId(stateFromStores[22]);
      const items1 = [GuildStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        if (guild_id == null) {
          guild_id = guildId;
        }
        return getGuild(guild_id);
      });
      let id;
      const tmp = channelId;
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
      const items2 = [WebhooksStore];
      const items3 = [id, id1];
      const tmpResult = tmp(tmp2[22]);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(items2, () => {
        let webhooksForChannel;
        if (null != id) {
          if (null != id1) {
            webhooksForChannel = WebhooksStore.getWebhooksForChannel(id, tmp2);
          }
          return webhooksForChannel;
        }
        if (null != id) {
          webhooksForChannel = WebhooksStore.getWebhooksForGuild(id);
        } else {
          webhooksForChannel = closure_28;
        }
      });
      const effect = react.useEffect(() => {
        if (null != id) {
          if (null != id1) {
            const obj2 = WebhooksActionCreatorsDefault;
            const forChannel = obj2.fetchForChannel(id, tmp2);
          }
        }
        if (null != id) {
          const obj = WebhooksActionCreatorsDefault;
          const forGuild = obj.fetchForGuild(id);
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
        tmp9 = closure_20(WebhooksOverview, obj3);
      }
      return tmp9;
    };
const result = size.fileFinishedImporting(
  "modules/integration_settings/native/IntegrationsSettingsWebhooksOverview.tsx",
);

export default tmp7;
