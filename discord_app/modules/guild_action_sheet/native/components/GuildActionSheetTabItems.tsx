// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import BoostingActionCreatorsAll from "../../../../actions/native/BoostingActionCreators.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../../../actions/NotificationSettingsModalActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import utils_InstantInviteUtils from "../../../../utils/native/InstantInviteUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";

require = fn;
const Constants = fn(1085);
({
  AnalyticEvents: closure_8,
  AnalyticsObjects: closure_9,
  AnalyticsSections: c10,
  InstantInviteSources: closure_11,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildActionSheetTabItems(guild) {
      const cResult = guild(576).c(32);
      guild = guild.guild;
      let obj = guild(576);
      const canAccessSettings = guild(14111).useGuildActionSheetPermissions(guild).canAccessSettings;
      const total = stateFromStores(8011)(guild.id).total;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        class S {
          constructor() {
            return closure_6.getChannels(guild.id);
          }
        }
        cResult[1] = guild.id;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return closure_6.getChannels(guild.id);
          }
        }
      }
      let obj2 = guild(14111);
      stateFromStores = guild(504).useStateFromStores(first, S);
      if (cResult[3] === stateFromStores) {
        class S {
          constructor() {
            return closure_6.getChannels(guild.id);
          }
        }
        if (cResult[6] === stateFromStores) {
          class S {
            constructor() {
              return closure_6.getChannels(guild.id);
            }
          }
          importAll = G;
          class G {
            constructor() {
              tmp = guild;
              channelId = closure_7.getChannelId(guild.id);
              tmp3 = closure_0;
              tmp4 = closure_3;
              obj = closure_0(closure_3[11]);
              tmp5 = closure_1;
              channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
              if (null == channel) {
                tmp7 = closure_6;
                channel = closure_6.getDefaultChannel(tmp.id);
              }
              if (null != channel) {
                tmp3Result = tmp3(tmp4[12]);
                tmp8 = InstantInviteSources;
                tmp9 = tmp3Result;
                tmp10 = tmp;
                tmp11 = tmp5;
                result = tmp3Result.handleOpenInviteActionsheet(
                  tmp,
                  channel.id,
                  tmp5,
                  InstantInviteSources.SERVER_PROFILE,
                );
              }
              return;
            }
          }
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor() {
                return closure_6.getChannels(guild.id);
              }
            }
            class G {
              constructor() {
                tmp = guild;
                channelId = closure_7.getChannelId(guild.id);
                tmp3 = closure_0;
                tmp4 = closure_3;
                obj = closure_0(closure_3[11]);
                tmp5 = closure_1;
                channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                if (null == channel) {
                  tmp7 = closure_6;
                  channel = closure_6.getDefaultChannel(tmp.id);
                }
                if (null != channel) {
                  tmp3Result = tmp3(tmp4[12]);
                  tmp8 = InstantInviteSources;
                  tmp9 = tmp3Result;
                  tmp10 = tmp;
                  tmp11 = tmp5;
                  result = tmp3Result.handleOpenInviteActionsheet(
                    tmp,
                    channel.id,
                    tmp5,
                    InstantInviteSources.SERVER_PROFILE,
                  );
                }
                return;
              }
            }
          } else {
            class S {
              constructor() {
                return closure_6.getChannels(guild.id);
              }
            }
          }
          if (cResult[10] !== total) {
            class S {
              constructor() {
                return closure_6.getChannels(guild.id);
              }
            }
            if (total > 0) {
              class S {
                constructor() {
                  return closure_6.getChannels(guild.id);
                }
              }
              class G {
                constructor() {
                  tmp = guild;
                  channelId = closure_7.getChannelId(guild.id);
                  tmp3 = closure_0;
                  tmp4 = closure_3;
                  obj = closure_0(closure_3[11]);
                  tmp5 = closure_1;
                  channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                  if (null == channel) {
                    tmp7 = closure_6;
                    channel = closure_6.getDefaultChannel(tmp.id);
                  }
                  if (null != channel) {
                    tmp3Result = tmp3(tmp4[12]);
                    tmp8 = InstantInviteSources;
                    tmp9 = tmp3Result;
                    tmp10 = tmp;
                    tmp11 = tmp5;
                    result = tmp3Result.handleOpenInviteActionsheet(
                      tmp,
                      channel.id,
                      tmp5,
                      InstantInviteSources.SERVER_PROFILE,
                    );
                  }
                  return;
                }
              }
              tmp17[0] = total;
              const formatToPlainStringResult = obj5.formatToPlainString(tmp(1126).t["pob/cL"], tmp17);
            } else {
              class S {
                constructor() {
                  return closure_6.getChannels(guild.id);
                }
              }
              const string = tmp15.string;
              class G {
                constructor() {
                  tmp = guild;
                  channelId = closure_7.getChannelId(guild.id);
                  tmp3 = closure_0;
                  tmp4 = closure_3;
                  obj = closure_0(closure_3[11]);
                  tmp5 = closure_1;
                  channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                  if (null == channel) {
                    tmp7 = closure_6;
                    channel = closure_6.getDefaultChannel(tmp.id);
                  }
                  if (null != channel) {
                    tmp3Result = tmp3(tmp4[12]);
                    tmp8 = InstantInviteSources;
                    tmp9 = tmp3Result;
                    tmp10 = tmp;
                    tmp11 = tmp5;
                    result = tmp3Result.handleOpenInviteActionsheet(
                      tmp,
                      channel.id,
                      tmp5,
                      InstantInviteSources.SERVER_PROFILE,
                    );
                  }
                  return;
                }
              }
            }
            class G {
              constructor() {
                tmp = guild;
                channelId = closure_7.getChannelId(guild.id);
                tmp3 = closure_0;
                tmp4 = closure_3;
                obj = closure_0(closure_3[11]);
                tmp5 = closure_1;
                channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                if (null == channel) {
                  tmp7 = closure_6;
                  channel = closure_6.getDefaultChannel(tmp.id);
                }
                if (null != channel) {
                  tmp3Result = tmp3(tmp4[12]);
                  tmp8 = InstantInviteSources;
                  tmp9 = tmp3Result;
                  tmp10 = tmp;
                  tmp11 = tmp5;
                  result = tmp3Result.handleOpenInviteActionsheet(
                    tmp,
                    channel.id,
                    tmp5,
                    InstantInviteSources.SERVER_PROFILE,
                  );
                }
                return;
              }
            }
            cResult[10] = total;
            cResult[11] = formatToPlainStringResult;
          } else {
            class S {
              constructor() {
                return closure_6.getChannels(guild.id);
              }
            }
            const _Symbol = Symbol;
            class G {
              constructor() {
                tmp = guild;
                channelId = closure_7.getChannelId(guild.id);
                tmp3 = closure_0;
                tmp4 = closure_3;
                obj = closure_0(closure_3[11]);
                tmp5 = closure_1;
                channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                if (null == channel) {
                  tmp7 = closure_6;
                  channel = closure_6.getDefaultChannel(tmp.id);
                }
                if (null != channel) {
                  tmp3Result = tmp3(tmp4[12]);
                  tmp8 = InstantInviteSources;
                  tmp9 = tmp3Result;
                  tmp10 = tmp;
                  tmp11 = tmp5;
                  result = tmp3Result.handleOpenInviteActionsheet(
                    tmp,
                    channel.id,
                    tmp5,
                    InstantInviteSources.SERVER_PROFILE,
                  );
                }
                return;
              }
            }
            if (tmp19 === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor() {
                  return closure_6.getChannels(guild.id);
                }
              }
              let obj3 = { color: null };
              class G {
                constructor() {
                  tmp = guild;
                  channelId = closure_7.getChannelId(guild.id);
                  tmp3 = closure_0;
                  tmp4 = closure_3;
                  obj = closure_0(closure_3[11]);
                  tmp5 = closure_1;
                  channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                  if (null == channel) {
                    tmp7 = closure_6;
                    channel = closure_6.getDefaultChannel(tmp.id);
                  }
                  if (null != channel) {
                    tmp3Result = tmp3(tmp4[12]);
                    tmp8 = InstantInviteSources;
                    tmp9 = tmp3Result;
                    tmp10 = tmp;
                    tmp11 = tmp5;
                    result = tmp3Result.handleOpenInviteActionsheet(
                      tmp,
                      channel.id,
                      tmp5,
                      InstantInviteSources.SERVER_PROFILE,
                    );
                  }
                  return;
                }
              }
              obj3.color = tmp4(587).unsafe_rawColors.GUILD_BOOSTING_PINK;
              const tmp22 = closure_12(tmp21, obj3);
              cResult[12] = tmp22;
              const tmp20 = tmp22;
            } else {
              class S {
                constructor() {
                  return closure_6.getChannels(guild.id);
                }
              }
            }
            if (cResult[13] !== guild.id) {
              class R {
                constructor() {
                  obj = closure_1(closure_3[16]);
                  obj1 = { location: null };
                  obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                  obj1.location = obj6;
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                  obj4 = closure_1(closure_3[17]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  obj5 = closure_2(closure_3[18]);
                  openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                  return;
                }
              }
              class G {
                constructor() {
                  tmp = guild;
                  channelId = closure_7.getChannelId(guild.id);
                  tmp3 = closure_0;
                  tmp4 = closure_3;
                  obj = closure_0(closure_3[11]);
                  tmp5 = closure_1;
                  channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                  if (null == channel) {
                    tmp7 = closure_6;
                    channel = closure_6.getDefaultChannel(tmp.id);
                  }
                  if (null != channel) {
                    tmp3Result = tmp3(tmp4[12]);
                    tmp8 = InstantInviteSources;
                    tmp9 = tmp3Result;
                    tmp10 = tmp;
                    tmp11 = tmp5;
                    result = tmp3Result.handleOpenInviteActionsheet(
                      tmp,
                      channel.id,
                      tmp5,
                      InstantInviteSources.SERVER_PROFILE,
                    );
                  }
                  return;
                }
              }
              cResult[14] = R;
            } else {
              class R {
                constructor() {
                  obj = closure_1(closure_3[16]);
                  obj1 = { location: null };
                  obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                  obj1.location = obj6;
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                  obj4 = closure_1(closure_3[17]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  obj5 = closure_2(closure_3[18]);
                  openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                  return;
                }
              }
            }
            if (cResult[15] === tmp14) {
              class R {
                constructor() {
                  obj = closure_1(closure_3[16]);
                  obj1 = { location: null };
                  obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                  obj1.location = obj6;
                  trackWithMetadataResult = obj.trackWithMetadata(AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, obj1);
                  obj4 = closure_1(closure_3[17]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  obj5 = closure_2(closure_3[18]);
                  openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                  return;
                }
              }
              if (cResult[18] === tmp9) {
                class R {
                  constructor() {
                    obj = closure_1(closure_3[16]);
                    obj1 = { location: null };
                    obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                    obj1.location = obj6;
                    trackWithMetadataResult = obj.trackWithMetadata(
                      AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
                      obj1,
                    );
                    obj4 = closure_1(closure_3[17]);
                    hideActionSheetResult = obj4.hideActionSheet();
                    obj5 = closure_2(closure_3[18]);
                    openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                    return;
                  }
                }
                const _Symbol2 = Symbol;
                class G {
                  constructor() {
                    tmp = guild;
                    channelId = closure_7.getChannelId(guild.id);
                    tmp3 = closure_0;
                    tmp4 = closure_3;
                    obj = closure_0(closure_3[11]);
                    tmp5 = closure_1;
                    channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                    if (null == channel) {
                      tmp7 = closure_6;
                      channel = closure_6.getDefaultChannel(tmp.id);
                    }
                    if (null != channel) {
                      tmp3Result = tmp3(tmp4[12]);
                      tmp8 = InstantInviteSources;
                      tmp9 = tmp3Result;
                      tmp10 = tmp;
                      tmp11 = tmp5;
                      result = tmp3Result.handleOpenInviteActionsheet(
                        tmp,
                        channel.id,
                        tmp5,
                        InstantInviteSources.SERVER_PROFILE,
                      );
                    }
                    return;
                  }
                }
                if (tmp30 === Symbol.for("react.memo_cache_sentinel")) {
                  class R {
                    constructor() {
                      obj = closure_1(closure_3[16]);
                      obj1 = { location: null };
                      obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                      obj1.location = obj6;
                      trackWithMetadataResult = obj.trackWithMetadata(
                        AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
                        obj1,
                      );
                      obj4 = closure_1(closure_3[17]);
                      hideActionSheetResult = obj4.hideActionSheet();
                      obj5 = closure_2(closure_3[18]);
                      openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                      return;
                    }
                  }
                  const string2 = tmp32.string;
                  class G {
                    constructor() {
                      tmp = guild;
                      channelId = closure_7.getChannelId(guild.id);
                      tmp3 = closure_0;
                      tmp4 = closure_3;
                      obj = closure_0(closure_3[11]);
                      tmp5 = closure_1;
                      channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                      if (null == channel) {
                        tmp7 = closure_6;
                        channel = closure_6.getDefaultChannel(tmp.id);
                      }
                      if (null != channel) {
                        tmp3Result = tmp3(tmp4[12]);
                        tmp8 = InstantInviteSources;
                        tmp9 = tmp3Result;
                        tmp10 = tmp;
                        tmp11 = tmp5;
                        result = tmp3Result.handleOpenInviteActionsheet(
                          tmp,
                          channel.id,
                          tmp5,
                          InstantInviteSources.SERVER_PROFILE,
                        );
                      }
                      return;
                    }
                  }
                  cResult[21] = tmp33;
                } else {
                  class R {
                    constructor() {
                      obj = closure_1(closure_3[16]);
                      obj1 = { location: null };
                      obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                      obj1.location = obj6;
                      trackWithMetadataResult = obj.trackWithMetadata(
                        AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
                        obj1,
                      );
                      obj4 = closure_1(closure_3[17]);
                      hideActionSheetResult = obj4.hideActionSheet();
                      obj5 = closure_2(closure_3[18]);
                      openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                      return;
                    }
                  }
                }
                if (cResult[22] !== guild.id) {
                  class R {
                    constructor() {
                      obj = closure_1(closure_3[16]);
                      obj1 = { location: null };
                      obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                      obj1.location = obj6;
                      trackWithMetadataResult = obj.trackWithMetadata(
                        AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
                        obj1,
                      );
                      obj4 = closure_1(closure_3[17]);
                      hideActionSheetResult = obj4.hideActionSheet();
                      obj5 = closure_2(closure_3[18]);
                      openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                      return;
                    }
                  }
                  let obj4 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
                  class G {
                    constructor() {
                      tmp = guild;
                      channelId = closure_7.getChannelId(guild.id);
                      tmp3 = closure_0;
                      tmp4 = closure_3;
                      obj = closure_0(closure_3[11]);
                      tmp5 = closure_1;
                      channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                      if (null == channel) {
                        tmp7 = closure_6;
                        channel = closure_6.getDefaultChannel(tmp.id);
                      }
                      if (null != channel) {
                        tmp3Result = tmp3(tmp4[12]);
                        tmp8 = InstantInviteSources;
                        tmp9 = tmp3Result;
                        tmp10 = tmp;
                        tmp11 = tmp5;
                        result = tmp3Result.handleOpenInviteActionsheet(
                          tmp,
                          channel.id,
                          tmp5,
                          InstantInviteSources.SERVER_PROFILE,
                        );
                      }
                      return;
                    }
                  }
                  obj4.icon = tmp4(7875);
                  obj4.onPress = function onPress() {
                    ActionSheetActionCreatorsDefault.hideActionSheet();
                    NotificationSettingsModalActionCreatorsDefault.open(guild.id);
                  };
                  const tmp35 = closure_12(tmp(8114).IconButton, obj4);
                  cResult[22] = guild.id;
                  cResult[23] = tmp35;
                } else {
                  class R {
                    constructor() {
                      obj = closure_1(closure_3[16]);
                      obj1 = { location: null };
                      obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                      obj1.location = obj6;
                      trackWithMetadataResult = obj.trackWithMetadata(
                        AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
                        obj1,
                      );
                      obj4 = closure_1(closure_3[17]);
                      hideActionSheetResult = obj4.hideActionSheet();
                      obj5 = closure_2(closure_3[18]);
                      openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                      return;
                    }
                  }
                }
                if (cResult[24] === canAccessSettings) {
                  class R {
                    constructor() {
                      obj = closure_1(closure_3[16]);
                      obj1 = { location: null };
                      obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                      obj1.location = obj6;
                      trackWithMetadataResult = obj.trackWithMetadata(
                        AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
                        obj1,
                      );
                      obj4 = closure_1(closure_3[17]);
                      hideActionSheetResult = obj4.hideActionSheet();
                      obj5 = closure_2(closure_3[18]);
                      openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                      return;
                    }
                  }
                  if (cResult[27] === tmp27) {
                    class R {
                      constructor() {
                        obj = closure_1(closure_3[16]);
                        obj1 = { location: null };
                        obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                        obj1.location = obj6;
                        trackWithMetadataResult = obj.trackWithMetadata(
                          AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
                          obj1,
                        );
                        obj4 = closure_1(closure_3[17]);
                        hideActionSheetResult = obj4.hideActionSheet();
                        obj5 = closure_2(closure_3[18]);
                        openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                        return;
                      }
                    }
                  }
                  class G {
                    constructor() {
                      tmp = guild;
                      channelId = closure_7.getChannelId(guild.id);
                      tmp3 = closure_0;
                      tmp4 = closure_3;
                      obj = closure_0(closure_3[11]);
                      tmp5 = closure_1;
                      channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                      if (null == channel) {
                        tmp7 = closure_6;
                        channel = closure_6.getDefaultChannel(tmp.id);
                      }
                      if (null != channel) {
                        tmp3Result = tmp3(tmp4[12]);
                        tmp8 = InstantInviteSources;
                        tmp9 = tmp3Result;
                        tmp10 = tmp;
                        tmp11 = tmp5;
                        result = tmp3Result.handleOpenInviteActionsheet(
                          tmp,
                          channel.id,
                          tmp5,
                          InstantInviteSources.SERVER_PROFILE,
                        );
                      }
                      return;
                    }
                  }
                  const obj6 = { direction: "horizontal", style: tmp13, children: null };
                  const items1 = [tmp24, tmp27, tmp34, tmp36];
                  obj6.children = items1;
                  const tmp40 = closure_13(tmp(5965).ButtonGroup, obj6);
                  cResult[27] = tmp27;
                  cResult[28] = tmp34;
                  cResult[29] = tmp36;
                  cResult[30] = tmp24;
                  cResult[31] = tmp40;
                }
                let tmp37 = canAccessSettings;
                if (canAccessSettings) {
                  class R {
                    constructor() {
                      obj = closure_1(closure_3[16]);
                      obj1 = { location: null };
                      obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                      obj1.location = obj6;
                      trackWithMetadataResult = obj.trackWithMetadata(
                        AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
                        obj1,
                      );
                      obj4 = closure_1(closure_3[17]);
                      hideActionSheetResult = obj4.hideActionSheet();
                      obj5 = closure_2(closure_3[18]);
                      openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                      return;
                    }
                  }
                  const obj7 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
                  class G {
                    constructor() {
                      tmp = guild;
                      channelId = closure_7.getChannelId(guild.id);
                      tmp3 = closure_0;
                      tmp4 = closure_3;
                      obj = closure_0(closure_3[11]);
                      tmp5 = closure_1;
                      channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                      if (null == channel) {
                        tmp7 = closure_6;
                        channel = closure_6.getDefaultChannel(tmp.id);
                      }
                      if (null != channel) {
                        tmp3Result = tmp3(tmp4[12]);
                        tmp8 = InstantInviteSources;
                        tmp9 = tmp3Result;
                        tmp10 = tmp;
                        tmp11 = tmp5;
                        result = tmp3Result.handleOpenInviteActionsheet(
                          tmp,
                          channel.id,
                          tmp5,
                          InstantInviteSources.SERVER_PROFILE,
                        );
                      }
                      return;
                    }
                  }
                  const intl2 = tmp(1126).intl;
                  obj7.label = intl2.string(tmp(1126).t["3D5yo/"]);
                  obj7.icon = tmp4(7086);
                  obj7.onPress = function onPress() {
                    ActionSheetActionCreatorsDefault.hideActionSheet();
                    GuildSettingsActionCreatorsDefault.open(guild.id);
                  };
                  tmp37 = closure_12(tmp38, obj7);
                }
                cResult[24] = canAccessSettings;
                cResult[25] = guild.id;
                cResult[26] = tmp37;
              }
              class G {
                constructor() {
                  tmp = guild;
                  channelId = closure_7.getChannelId(guild.id);
                  tmp3 = closure_0;
                  tmp4 = closure_3;
                  obj = closure_0(closure_3[11]);
                  tmp5 = closure_1;
                  channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                  if (null == channel) {
                    tmp7 = closure_6;
                    channel = closure_6.getDefaultChannel(tmp.id);
                  }
                  if (null != channel) {
                    tmp3Result = tmp3(tmp4[12]);
                    tmp8 = InstantInviteSources;
                    tmp9 = tmp3Result;
                    tmp10 = tmp;
                    tmp11 = tmp5;
                    result = tmp3Result.handleOpenInviteActionsheet(
                      tmp,
                      channel.id,
                      tmp5,
                      InstantInviteSources.SERVER_PROFILE,
                    );
                  }
                  return;
                }
              }
              if (tmp9) {
                class R {
                  constructor() {
                    obj = closure_1(closure_3[16]);
                    obj1 = { location: null };
                    obj6 = { section: AnalyticsSections.GUILD_POPOUT, object: AnalyticsObjects.BOOST_GEM_ICON };
                    obj1.location = obj6;
                    trackWithMetadataResult = obj.trackWithMetadata(
                      AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED,
                      obj1,
                    );
                    obj4 = closure_1(closure_3[17]);
                    hideActionSheetResult = obj4.hideActionSheet();
                    obj5 = closure_2(closure_3[18]);
                    openApplyBoostModalResult = obj5.openApplyBoostModal(guild.id);
                    return;
                  }
                }
                const obj8 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
                class G {
                  constructor() {
                    tmp = guild;
                    channelId = closure_7.getChannelId(guild.id);
                    tmp3 = closure_0;
                    tmp4 = closure_3;
                    obj = closure_0(closure_3[11]);
                    tmp5 = closure_1;
                    channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
                    if (null == channel) {
                      tmp7 = closure_6;
                      channel = closure_6.getDefaultChannel(tmp.id);
                    }
                    if (null != channel) {
                      tmp3Result = tmp3(tmp4[12]);
                      tmp8 = InstantInviteSources;
                      tmp9 = tmp3Result;
                      tmp10 = tmp;
                      tmp11 = tmp5;
                      result = tmp3Result.handleOpenInviteActionsheet(
                        tmp,
                        channel.id,
                        tmp5,
                        InstantInviteSources.SERVER_PROFILE,
                      );
                    }
                    return;
                  }
                }
                const intl = tmp(1126).intl;
                obj8.label = intl.string(tmp(1126).t.VINpSK);
                obj8.icon = tmp4(10298);
                obj8.onPress = function onPress() {
                  ActionSheetActionCreatorsDefault.hideActionSheet();
                  tmp11();
                };
                const tmp28 = closure_12(tmp29, obj8);
              }
              cResult[18] = tmp9;
              cResult[19] = G;
              cResult[20] = tmp28;
            }
            const obj9 = { variant: "secondary", label: tmp14, icon: tmp20, grow: true, onPress: R };
            const tmp26 = closure_12(tmp(8114).IconButton, obj9);
            cResult[15] = tmp14;
            cResult[16] = R;
            cResult[17] = tmp26;
          }
        }
        class G {
          constructor() {
            tmp = guild;
            channelId = closure_7.getChannelId(guild.id);
            tmp3 = closure_0;
            tmp4 = closure_3;
            obj = closure_0(closure_3[11]);
            tmp5 = closure_1;
            channel = closure_5.getChannel(obj.getInviteChannelId(channelId, closure_1));
            if (null == channel) {
              tmp7 = closure_6;
              channel = closure_6.getDefaultChannel(tmp.id);
            }
            if (null != channel) {
              tmp3Result = tmp3(tmp4[12]);
              tmp8 = InstantInviteSources;
              tmp9 = tmp3Result;
              tmp10 = tmp;
              tmp11 = tmp5;
              result = tmp3Result.handleOpenInviteActionsheet(
                tmp,
                channel.id,
                tmp5,
                InstantInviteSources.SERVER_PROFILE,
              );
            }
            return;
          }
        }
        cResult[6] = stateFromStores;
        cResult[7] = guild;
        cResult[8] = G;
      }
      const tmpResult = guild(504);
      const shouldRenderInviteResult = guild(8670).shouldRenderInvite(stateFromStores, guild);
      cResult[3] = stateFromStores;
      cResult[4] = guild;
      cResult[5] = shouldRenderInviteResult;
      const tmpResult2 = guild(8670);
    }
  : function GuildActionSheetTabItems(guild) {
      guild = guild.guild;
      let stateFromStores;
      let canAccessSettings = guild(14111).useGuildActionSheetPermissions(guild).canAccessSettings;
      const total = stateFromStores(8011)(guild.id).total;
      let obj = guild(14111);
      const items = [GuildChannelStore];
      stateFromStores = guild(504).useStateFromStores(items, () => GuildChannelStore.getChannels(guild.id));
      let obj2 = guild(504);
      let shouldRenderInviteResult = guild(8670).shouldRenderInvite(stateFromStores, guild);
      const items1 = [stateFromStores, guild];
      closure_2 = noop.useCallback(() => {
        const channelId = SelectedChannelStore.getChannelId(guild.id);
        let channel = ChannelStore.getChannel(utils_InstantInviteUtils.getInviteChannelId(channelId, stateFromStores));
        if (null == channel) {
          channel = GuildChannelStore.getDefaultChannel(guild.id);
        }
        if (null != channel) {
          const tmp3Result = instant_invite_InstantInviteUtils;
          const result = tmp3Result.handleOpenInviteActionsheet(
            guild,
            channel.id,
            stateFromStores,
            constants4.SERVER_PROFILE,
          );
        }
      }, items1);
      let obj4 = { direction: "horizontal", style: { flexWrap: "wrap" }, children: null };
      if (total > 0) {
        const intl2 = tmp(1126).intl;
        const obj5 = { subscriptions: total };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t["pob/cL"], obj5);
      } else {
        const intl = tmp(1126).intl;
        formatToPlainStringResult = intl.string(tmp(1126).t.Uj0md3);
      }
      const obj6 = { variant: "secondary", label: formatToPlainStringResult, icon: null, grow: true, onPress: null };
      let obj3 = guild(8670);
      obj6.icon = closure_12(guild(5027).BoostGemIcon, {
        color: stateFromStores(587).unsafe_rawColors.GUILD_BOOSTING_PINK,
      });
      obj6.onPress = function onPress() {
        const obj2 = { location: { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON } };
        AppAnalyticsUtilsDefault.trackWithMetadata(constants.PREMIUM_GUILD_PROMOTION_OPENED, obj2);
        const obj3 = { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON };
        ActionSheetActionCreatorsDefault.hideActionSheet();
        BoostingActionCreatorsAll.openApplyBoostModal(guild.id);
      };
      const items2 = [closure_12(guild(8114).IconButton, obj6), , ,];
      if (shouldRenderInviteResult) {
        const obj8 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
        const intl3 = tmp(1126).intl;
        obj8.label = intl3.string(tmp(1126).t.VINpSK);
        obj8.icon = tmp3(10298);
        obj8.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          closure_2();
        };
        shouldRenderInviteResult = closure_12(tmp(8114).IconButton, obj8);
      }
      items2[1] = shouldRenderInviteResult;
      const obj9 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
      const intl4 = tmp(1126).intl;
      obj9.label = intl4.string(guild(1126).t.HcoRu0);
      obj9.icon = stateFromStores(7875);
      obj9.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        NotificationSettingsModalActionCreatorsDefault.open(guild.id);
      };
      items2[2] = closure_12(guild(8114).IconButton, obj9);
      if (canAccessSettings) {
        const obj10 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
        const intl5 = tmp(1126).intl;
        obj10.label = intl5.string(tmp(1126).t["3D5yo/"]);
        obj10.icon = tmp3(7086);
        obj10.onPress = function onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          GuildSettingsActionCreatorsDefault.open(guild.id);
        };
        canAccessSettings = closure_12(tmp(8114).IconButton, obj10);
      }
      items2[3] = canAccessSettings;
      obj4.children = items2;
      return closure_13(guild(5965).ButtonGroup, obj4);
    };
