// discord_app/modules/notifications/settings/native/NotificationSettingsChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import NotificationSettingsUtils from "../../../../utils/NotificationSettingsUtils.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import notficationSettingsChannelFlagUtils from "../utils/notficationSettingsChannelFlagUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { screenContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationSettingsChannel(channel) {
      _require = channel;
      const cResult = require("c").c(39);
      let obj = require("c");
      const channelPresetInheritance = require("notficationSettingsChannelFlagUtils").useChannelPresetInheritance(
        channel.channel,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.h850Ss);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      const tmp7 = first(5418)(channel.channel);
      dependencyMap = tmp7;
      let obj2 = require("notficationSettingsChannelFlagUtils");
      const navigation = require("useNavigation").useNavigation();
      const tmp9 = closure_8();
      if (cResult[1] === navigation) {
        if (cResult[2] === channel.inGuildContext) {
          if (cResult[3] === tmp7) {
            let tmp10 = cResult[4];
          }
          const layoutEffect = navigation.useLayoutEffect(tmp10);
          if (cResult[5] === channel.channel.guild_id) {
            if (cResult[6] === channel.channel.id) {
              let tmp13 = cResult[7];
            }
            if (cResult[8] === channel.channel.guild_id) {
              if (cResult[9] === channel.channel.id) {
                let tmp14 = cResult[10];
              }
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const items = [UserGuildSettingsStore];
                cResult[11] = items;
                class M {
                  constructor() {
                    obj = {
                      config: closure_5.getChannelMuteConfig(closure_0.channel.guild_id, closure_0.channel.id),
                      muted: closure_5.isChannelMuted(closure_0.channel.guild_id, closure_0.channel.id),
                    };
                    return obj;
                  }
                }
              } else {
                const tmp15 = cResult[11];
              }
              if (cResult[12] === channel.channel.guild_id) {
                if (cResult[13] === channel.channel.id) {
                  let tmp17 = cResult[14];
                }
                const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp15, tmp17);
                if (cResult[15] === stateFromStoresObject.config) {
                  if (cResult[16] === stateFromStoresObject.muted) {
                    if (cResult[17] === tmp14) {
                      let tmp19 = cResult[18];
                    }
                    if (cResult[19] !== channel.channel) {
                      let obj3 = { channel: channel.channel };
                      const tmp22 = closure_6(tmp(12550).NotificationSettingsChannelPresets, obj3);
                      class M {
                        constructor() {
                          obj = {
                            config: closure_5.getChannelMuteConfig(closure_0.channel.guild_id, closure_0.channel.id),
                            muted: closure_5.isChannelMuted(closure_0.channel.guild_id, closure_0.channel.id),
                          };
                          return obj;
                        }
                      }
                      cResult[20] = tmp22;
                      let tmp20 = tmp22;
                    } else {
                      tmp20 = cResult[20];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj4 = { marginTop: 24 };
                      cResult[21] = obj4;
                    }
                    class M {
                      constructor() {
                        obj = {
                          config: closure_5.getChannelMuteConfig(closure_0.channel.guild_id, closure_0.channel.id),
                          muted: closure_5.isChannelMuted(closure_0.channel.guild_id, closure_0.channel.id),
                        };
                        return obj;
                      }
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                      const obj5 = { marginTop: 24 };
                      cResult[24] = obj5;
                      let tmp25 = obj5;
                    } else {
                      tmp25 = cResult[24];
                    }
                    if (cResult[25] !== channel.channel) {
                      const obj6 = { style: tmp25, channel: channel.channel };
                      const tmp29 = closure_6(tmp(12561).NotificationSettingsChannelMessageUnread, obj6);
                      class M {
                        constructor() {
                          obj = {
                            config: closure_5.getChannelMuteConfig(closure_0.channel.guild_id, closure_0.channel.id),
                            muted: closure_5.isChannelMuted(closure_0.channel.guild_id, closure_0.channel.id),
                          };
                          return obj;
                        }
                      }
                      let isForumLikeChannelResult = obj9.isForumLikeChannel();
                      if (isForumLikeChannelResult) {
                        const obj7 = { style: { marginTop: 24 }, channel: channel.channel };
                        isForumLikeChannelResult = closure_6(tmp(12566).NotificationSettingsChannelPost, obj7);
                      }
                      cResult[25] = channel.channel;
                      cResult[26] = tmp29;
                      cResult[27] = isForumLikeChannelResult;
                      let tmp27 = isForumLikeChannelResult;
                      let tmp26 = tmp29;
                    } else {
                      tmp26 = cResult[26];
                      tmp27 = cResult[27];
                    }
                    if (cResult[28] === channelPresetInheritance.inherited) {
                      if (cResult[29] === tmp13) {
                        let tmp31 = cResult[30];
                      }
                      if (cResult[31] === tmp9.screenContainer) {
                        if (cResult[32] === tmp26) {
                          if (cResult[33] === tmp27) {
                            if (cResult[34] === tmp31) {
                              if (cResult[35] === tmp19) {
                                if (cResult[36] === tmp20) {
                                  if (cResult[37] === tmp24) {
                                    let tmp35 = cResult[38];
                                  }
                                  return tmp35;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj8 = { style: tmp9.screenContainer, children: null };
                      class M {
                        constructor() {
                          obj = {
                            config: closure_5.getChannelMuteConfig(closure_0.channel.guild_id, closure_0.channel.id),
                            muted: closure_5.isChannelMuted(closure_0.channel.guild_id, closure_0.channel.id),
                          };
                          return obj;
                        }
                      }
                      tmp37[0] = tmp19;
                      tmp37[1] = tmp20;
                      tmp37[2] = tmp24;
                      tmp37[3] = tmp26;
                      tmp37[4] = tmp27;
                      tmp37[5] = tmp31;
                      obj8.children = tmp37;
                      const tmp38 = closure_7(tmp(8563).Form, obj8);
                      cResult[31] = tmp9.screenContainer;
                      cResult[32] = tmp26;
                      cResult[33] = tmp27;
                      cResult[34] = tmp31;
                      cResult[35] = tmp19;
                      class S {
                        constructor() {
                          obj = closure_3;
                          obj1 = {
                            title: "" + closure_1 + " (" + closure_2 + ")",
                            headerTitle() {
                              return closure_2_6(closure_0(subtitle[12]).NavigatorHeader, { title, subtitle });
                            },
                          };
                          setOptionsResult = closure_3.setOptions(obj1);
                          if (closure_0.inGuildContext) {
                            obj5 = { headerLeft: null };
                            tmp2 = closure_0;
                            tmp3 = closure_2;
                            obj4 = closure_0(closure_2[12]);
                            obj5.headerLeft = obj4.getHeaderBackButton(() => navigation.popToTop());
                            setOptionsResult1 = obj.setOptions(obj5);
                          }
                          return;
                        }
                      }
                      cResult[37] = tmp24;
                      cResult[38] = tmp38;
                      tmp35 = tmp38;
                    }
                    const inherited = channelPresetInheritance.inherited;
                    let tmp32 = !inherited;
                    if (!inherited) {
                      const obj10 = { style: { marginTop: 24 }, children: null };
                      const obj11 = { variant: "secondary", onPress: null, text: null };
                      class M {
                        constructor() {
                          obj = {
                            config: closure_5.getChannelMuteConfig(closure_0.channel.guild_id, closure_0.channel.id),
                            muted: closure_5.isChannelMuted(closure_0.channel.guild_id, closure_0.channel.id),
                          };
                          return obj;
                        }
                      }
                      const intl2 = tmp(1126).intl;
                      obj11.text = intl2.string(tmp(1126).t["3PBFN6"]);
                      obj10.children = closure_6(tmp(5376).Button, obj11);
                      tmp32 = closure_6(View, obj10);
                    }
                    cResult[28] = channelPresetInheritance.inherited;
                    cResult[29] = tmp13;
                    cResult[30] = tmp32;
                    tmp31 = tmp32;
                  }
                }
                const muted = stateFromStoresObject.muted;
                class M {
                  constructor() {
                    obj = {
                      config: closure_5.getChannelMuteConfig(closure_0.channel.guild_id, closure_0.channel.id),
                      muted: closure_5.isChannelMuted(closure_0.channel.guild_id, closure_0.channel.id),
                    };
                    return obj;
                  }
                }
                cResult[15] = stateFromStoresObject.config;
                cResult[16] = stateFromStoresObject.muted;
                cResult[17] = tmp14;
                cResult[18] = muted;
                tmp19 = muted;
                const tmpResult2 = tmp(504);
              }
              class M {
                constructor() {
                  obj = {
                    config: closure_5.getChannelMuteConfig(closure_0.channel.guild_id, closure_0.channel.id),
                    muted: closure_5.isChannelMuted(closure_0.channel.guild_id, closure_0.channel.id),
                  };
                  return obj;
                }
              }
              cResult[12] = channel.channel.guild_id;
              cResult[13] = channel.channel.id;
              cResult[14] = M;
              tmp17 = M;
            }
            const fn2 = function v() {
              const obj = NotificationSettingsModalActionCreatorsDefault;
              const result = obj.updateChannelOverrideSettings({
                guildId: channel.channel.guild_id,
                channelId: channel.channel.id,
                settings: { muted: false },
                label: NotificationSettingsUtils.NotificationLabels.Unmuted,
              });
            };
            cResult[8] = channel.channel.guild_id;
            cResult[9] = channel.channel.id;
            cResult[10] = fn2;
            tmp14 = fn2;
          }
          const fn = function _() {
            return notficationSettingsChannelFlagUtils.updateChannelToGuildDefault(
              channel.channel.guild_id,
              channel.channel.id,
            );
          };
          cResult[5] = channel.channel.guild_id;
          cResult[6] = channel.channel.id;
          cResult[7] = fn;
          tmp13 = fn;
        }
      }
      class S {
        constructor() {
          obj = closure_3;
          obj1 = {
            title: "" + closure_1 + " (" + closure_2 + ")",
            headerTitle() {
              return closure_2_6(closure_0(subtitle[12]).NavigatorHeader, { title, subtitle });
            },
          };
          setOptionsResult = closure_3.setOptions(obj1);
          if (closure_0.inGuildContext) {
            obj5 = { headerLeft: null };
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj4 = closure_0(closure_2[12]);
            obj5.headerLeft = obj4.getHeaderBackButton(() => navigation.popToTop());
            setOptionsResult1 = obj.setOptions(obj5);
          }
          return;
        }
      }
      cResult[1] = navigation;
      cResult[2] = channel.inGuildContext;
      cResult[3] = tmp7;
      cResult[4] = S;
      tmp10 = S;
      const tmpResult = require("useNavigation");
    }
  : function NotificationSettingsChannel(channel) {
      _require = channel;
      const channelPresetInheritance = require("notficationSettingsChannelFlagUtils").useChannelPresetInheritance(
        channel.channel,
      );
      const intl = require("util").intl;
      importDefault = intl.string(require("util").t.h850Ss);
      dependencyMap = useChannelNameDefault(channel.channel);
      let obj = require("notficationSettingsChannelFlagUtils");
      noop = require("useNavigation").useNavigation();
      let obj2 = require("useNavigation");
      const layoutEffect = noop.useLayoutEffect(() => {
        options.setOptions({
          title: "" + title + " (" + subtitle + ")",
          headerTitle() {
            return closure_2_6(closure_0(subtitle[12]).NavigatorHeader, { title, subtitle });
          },
        });
        if (channel.inGuildContext) {
          const obj3 = { headerLeft: NavigatorHeader.getHeaderBackButton(() => options.popToTop()) };
          options.setOptions(obj3);
        }
        const obj2 = {
          title: "" + title + " (" + subtitle + ")",
          headerTitle() {
            return closure_2_6(closure_0(subtitle[12]).NavigatorHeader, { title, subtitle });
          },
        };
      });
      const items = [channel.channel];
      const items1 = [channel.channel];
      const callback = noop.useCallback(
        () =>
          notficationSettingsChannelFlagUtils.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id),
        items,
      );
      const callback1 = noop.useCallback(() => {
        const obj = NotificationSettingsModalActionCreatorsDefault;
        const result = obj.updateChannelOverrideSettings({
          guildId: channel.channel.guild_id,
          channelId: channel.channel.id,
          settings: { muted: false },
          label: NotificationSettingsUtils.NotificationLabels.Unmuted,
        });
      }, items1);
      const tmp4 = closure_8();
      const items2 = [UserGuildSettingsStore];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => ({
        config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id),
        muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id),
      }));
      let obj4 = { style: tmp4.screenContainer, children: null };
      let muted = stateFromStoresObject.muted;
      if (muted) {
        const obj5 = { style: { marginBottom: 16 }, title: null, subtitle: null, onPressUnmute: null };
        const intl2 = tmp(1126).intl;
        obj5.title = intl2.string(tmp(1126).t["6MCxAy"]);
        obj5.subtitle = tmp(12549).getMuteBannerSubtitleFromConfig(stateFromStoresObject.config);
        obj5.onPressUnmute = callback1;
        muted = closure_6(tmp(12549).NotificationSettingsMuteBanner, obj5);
        const tmpResult = tmp(12549);
      }
      const items3 = [
        muted,
        closure_6(require("NotificationSettingsPresets").NotificationSettingsChannelPresets, {
          channel: channel.channel,
        }),
        closure_6(require("NotificationSettingsMessageNotification").NotificationSettingsChannelMessageNotification, {
          style: { marginTop: 24 },
          channel: channel.channel,
        }),
        closure_6(require("NotificationSettingsMessageUnread").NotificationSettingsChannelMessageUnread, {
          style: { marginTop: 24 },
          channel: channel.channel,
        }),
        ,
      ];
      channel = channel.channel;
      let isForumLikeChannelResult = channel.isForumLikeChannel();
      if (isForumLikeChannelResult) {
        const obj9 = { style: { marginTop: 24 }, channel: channel.channel };
        isForumLikeChannelResult = closure_6(tmp(12566).NotificationSettingsChannelPost, obj9);
      }
      items3[4] = isForumLikeChannelResult;
      const inherited = channelPresetInheritance.inherited;
      let tmp11Result = !inherited;
      if (!inherited) {
        const obj10 = { style: { marginTop: 24 }, children: null };
        const obj11 = { variant: "secondary", onPress: callback, text: null };
        const intl3 = tmp(1126).intl;
        obj11.text = intl3.string(tmp(1126).t["3PBFN6"]);
        obj10.children = closure_6(tmp(5376).Button, obj11);
        tmp11Result = closure_6(View, obj10);
      }
      items3[5] = tmp11Result;
      obj4.children = items3;
      return closure_7(require("Form").Form, obj4);
    };
