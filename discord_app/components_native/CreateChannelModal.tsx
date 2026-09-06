// === Module 9732: CreateChannelModal ===

// Module 9732 (CreateChannelModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import ChannelUtils from "ChannelUtils" /* 4705 */;
import useInitialValueDefault from "useInitialValue" /* 5598 */;
import TableRow from "TableRow" /* 5605 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import FormRadio from "FormRadio" /* 5689 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9737 */;
import sanitizeChannelNameDefault from "sanitizeChannelName" /* 9741 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function ChannelTypeRow(selected) {
  selected = selected.selected;
  const channelType = selected.channelType;
  const onPress = selected.onPress;
  ({ isPrivate, isBeta } = selected);
  const tmp = closure_23();
  let obj = useA11yRolesNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (ChannelTypes.GUILD_TEXT === channelType) {
    obj = { label: null, description: null };
    const intl11 = tmp2(1114).intl;
    obj.label = intl11.string(tmp2(1114).t.pnuRXC);
    const intl12 = tmp2(1114).intl;
    obj.description = intl12.string(tmp2(1114).t.oG6WsM);
    let tmp6 = obj;
  } else if (tmp5.GUILD_VOICE === channelType) {
    obj = { label: null, description: null };
    const intl9 = tmp2(1114).intl;
    obj.label = intl9.string(tmp2(1114).t.Sx55Oh);
    const intl10 = tmp2(1114).intl;
    obj.description = intl10.string(tmp2(1114).t.pqfkoF);
    tmp6 = obj;
  } else if (tmp5.GUILD_FORUM === channelType) {
    obj1 = { label: null, description: null };
    const intl7 = tmp2(1114).intl;
    obj1.label = intl7.string(tmp2(1114).t.eAVID5);
    const intl8 = tmp2(1114).intl;
    obj1.description = intl8.string(tmp2(1114).t.iZ5pgg);
    tmp6 = obj1;
  } else if (tmp5.GUILD_ANNOUNCEMENT === channelType) {
    const obj2 = { label: null, description: null };
    const intl5 = tmp2(1114).intl;
    obj2.label = intl5.string(tmp2(1114).t.qr9dEP);
    const intl6 = tmp2(1114).intl;
    obj2.description = intl6.string(tmp2(1114).t.gBkfzu);
    tmp6 = obj2;
  } else if (tmp5.GUILD_STAGE_VOICE === channelType) {
    const obj3 = { label: null, description: null };
    const intl3 = tmp2(1114).intl;
    obj3.label = intl3.string(tmp2(1114).t.pNWst0);
    const intl4 = tmp2(1114).intl;
    obj3.description = intl4.string(tmp2(1114).t.VPAwgo);
    tmp6 = obj3;
  } else if (tmp5.GUILD_APP === channelType) {
    const obj4 = { label: null, description: null };
    const intl = tmp2(1114).intl;
    obj4.label = intl.string(tmp2(1114).t["A+8d6M"]);
    const intl2 = tmp2(1114).intl;
    obj4.description = intl2.string(tmp2(1114).t.LVQQ3Z);
    tmp6 = obj4;
  } else if (tmp5.GUILD_MEDIA === channelType) {
    const obj5 = { label: null, description: null };
    const intl13 = tmp2(1114).intl;
    obj5.label = intl13.string(tmp2(1114).t["6x6fVg"]);
    const obj6 = { children: null };
    const obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl14 = tmp2(1114).intl;
    obj7.children = intl14.string(tmp2(1114).t.JyCrwS);
    const items = [closure_1_20(tmp2(4556).Text, obj7), ];
    const obj8 = { variant: "text-xs/normal", children: null };
    const intl15 = tmp2(1114).intl;
    obj9 = { hcArticleUrl: null };
    let obj14 = HelpdeskUtilsDefault;
    obj9.hcArticleUrl = obj14.getCreatorSupportArticleURL(constants3.MEDIA_CHANNEL);
    obj8.children = intl15.format(tmp2(1114).t["2Sapx1"], obj9);
    items[1] = closure_1_20(tmp2(4556).Text, obj8);
    obj6.children = items;
    obj5.description = __initData2(__initData, obj6);
    tmp6 = obj5;
  }
  const label = tmp6.label;
  const obj10 = {
    onPress() {
      if (!selected) {
        onPress(channelType);
      }
    },
    accessibilityRole,
    accessibilityState,
    icon: closure_1_20(timestampProducer, { style: tmp.flexRow, children: closure_1_20(isPrivate ? obj9 : obj1[channelType].IconComponent, {}) }),
    trailing: closure_1_20(FormRadio.FormRadio, { selected }),
    label: null,
    subLabel: null
  };
  let tmp9 = label;
  if (true === isBeta) {
    const obj12 = { style: tmp.horizontalContainer, children: null };
    const obj13 = { text: label };
    const items1 = [tmp7(tmp2(8593).FormLabel, obj13), ];
    obj14 = { size: tmp2(1178).BetaSizes.SMALL };
    items1[1] = tmp7(tmp2(1178).BetaTag, obj14);
    obj12.children = items1;
    tmp9 = __initData2(timestampProducer, obj12);
  }
  obj10.label = tmp9;
  obj10.subLabel = tmp6.description;
  return closure_1_20(TableRow.TableRow, obj10);
}
class CreateChannel {
  constructor(arg0) {
    categoryId = global.categoryId;
    ({ channelType, cloneChannelId, createMode } = global);
    guildId = global.guildId;
    onChannelCreated = global.onChannelCreated;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    tmp = closure_23();
    tmp2 = cloneChannelId;
    tmp3 = createMode;
    tmp4 = categoryId;
    obj = categoryId(createMode[38]);
    items = [];
    items[0] = closure_10;
    stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
    obj2 = categoryId(createMode[38]);
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let channel = null;
      if (null != importDefault) {
        channel = ChannelStore.getChannel(tmp);
      }
      return channel;
    });
    closure_5 = stateFromStores1;
    hasItem = null != stateFromStores;
    if (hasItem) {
      features = stateFromStores.features;
      tmp8 = closure_15;
      hasItem = features.has(closure_15.COMMUNITY);
    }
    canResult = closure_11.can(closure_16.VIEW_CHANNEL, stateFromStores);
    closure_6 = canResult;
    canResult1 = closure_11.can(closure_16.CONNECT, stateFromStores);
    closure_7 = canResult1;
    tmp11 = closure_13;
    currentUser = closure_13.getCurrentUser();
    tmp13 = tmp2(tmp3[39])(null != currentUser, "CreateChannel: user cannot be undefined");
    str = tmp2(tmp3[40])(stateFromStores1);
    obj3 = onChannelCreated;
    if (str == null) {
      str = "";
    }
    tmp14 = guildId;
    tmp15 = guildId(onChannelCreated.useState(str), 2);
    first = tmp15[0];
    closure_8 = first;
    closure_9 = tmp15[1];
    if (null == channelType) {
      tmp17 = closure_14;
      channelType = closure_14.GUILD_TEXT;
    }
    tmp14Result = tmp14(obj3.useState(channelType), 2);
    first1 = tmp14Result[0];
    closure_10 = first1;
    closure_11 = tmp14Result[1];
    tmp4Result = tmp4(tmp3[41]);
    canCreateStageChannelByGuild = tmp4Result.useCanCreateStageChannelByGuild(guildId);
    tmp4Result1 = tmp4(tmp3[42]);
    guildEligibleForMediaChannels = tmp4Result1.useGuildEligibleForMediaChannels(stateFromStores);
    tmp2Result = tmp2(tmp3[43]);
    application_id = undefined;
    if (stateFromStores1 != null) {
      application_id = stateFromStores1.application_id;
    }
    if (application_id == null) {
      application_id = null;
    }
    tmp14Result1 = tmp14(obj3.useState(application_id), 2);
    first2 = tmp14Result1[0];
    closure_12 = first2;
    tmp4Result2 = tmp4(tmp3[44]);
    navigation = tmp4Result2.useNavigation();
    closure_13 = navigation;
    tmp14Result2 = tmp14(tmp2(tmp3[45])(onChannelCreated), 3);
    first3 = tmp14Result2[0];
    closure_14 = first3;
    tmp28 = tmp14Result2[1];
    tmp29 = tmp14Result2[2];
    closure_15 = tmp29;
    tmp14Result3 = tmp14(obj3.useState(false), 2);
    first4 = tmp14Result3[0];
    closure_16 = first4;
    closure_17 = tmp14Result3[1];
    effect = obj3.useEffect(() => {
      require("AppAnalyticsUtils").trackWithMetadata(closure_17.OPEN_MODAL, { type: "Create Channel" });
    }, []);
    items2 = [, , , , , , , , , , , , , ];
    items2[0] = navigation;
    items2[1] = first1;
    items2[2] = stateFromStores1;
    items2[3] = canResult;
    items2[4] = canResult1;
    items2[5] = first4;
    items2[6] = first;
    items2[7] = first3;
    items2[8] = guildId;
    items2[9] = tmp29;
    items2[10] = categoryId;
    items2[11] = createMode;
    items2[12] = onChannelCreated;
    items2[13] = first2;
    effect1 = obj3.useEffect(() => {
      let obj = {
        headerLeft: NavigatorHeader.getHeaderCloseButton(CreateChannelModalActionCreatorsDefault.close),
        headerRight() {
          if (constants) {
            let tmpResult = tmp(categoryId(createMode[47]).HeaderSubmittingIndicator, {});
          } else {
            let tmp5 = first4;
            if (!first4) {
              if (first1 !== first3.GUILD_STAGE_VOICE) {
                const intl = categoryId(createMode[29]).intl;
                let stringResult = intl.string(categoryId(createMode[29]).t.CumH4u);
              }
              let obj = { text: stringResult, disabled: null, onPress: null };
              let tmp18 = "" === closure_1_8;
              if (!tmp18) {
                if (tmp5) {
                  tmp5 = !categoryId(createMode[50]).canCreatePrivateChannel(first1, closure_1_6, canResult1);
                  const obj2 = categoryId(createMode[50]);
                }
                tmp18 = tmp5;
              }
              if (!tmp18) {
                let tmp26 = first1 === first3.GUILD_APP;
                if (tmp26) {
                  tmp26 = null == first2;
                }
                tmp18 = tmp26;
              }
              obj.disabled = tmp18;
              obj.onPress = function onPress() {
                if (null != closure_1_5) {
                  let obj = closure_2_1(closure_2_2[51]);
                  let items = obj.values(tmp.permissionOverwrites);
                } else {
                  items = [];
                }
                obj = { overwrites: items, bitrate: null, userLimit: null, createMode: null, guildId: null, name: null, channelType: null, categoryId: null, applicationId: null, onChannelCreated: null };
                let bitrate;
                if (closure_1_5 != null) {
                  bitrate = tmp.bitrate;
                }
                obj.bitrate = bitrate;
                let userLimit;
                if (closure_1_5 != null) {
                  userLimit = tmp.userLimit;
                }
                obj.userLimit = userLimit;
                obj.createMode = createMode;
                obj.guildId = guildId;
                obj.name = name;
                obj.channelType = channelType;
                obj.categoryId = categoryId;
                obj.applicationId = applicationId;
                obj.onChannelCreated = onChannelCreated;
                if (closure_1_16) {
                  obj = { guildId: tmp6, channelType: tmp8, name: tmp7, categoryId: tmp9, applicationId: tmp10, onChannelCreated: tmp11 };
                  closure_1_13.push(constants2.ADD_MEMBERS, obj);
                } else if (tmp8 === constants.GUILD_STAGE_VOICE) {
                  closure_1_13.push(constants2.ADD_MODERATORS, obj);
                } else {
                  closure_1_15(obj);
                }
              };
              tmpResult = tmp(tmp4, obj);
            }
            const intl2 = categoryId(createMode[29]).intl;
            stringResult = intl2.string(categoryId(createMode[29]).t.PDTjLN);
          }
          return tmpResult;
        },
        headerTitle: null
      };
      if (null != stateFromStores1) {
        const intl3 = tmp2(1114).intl;
        let stringResult = intl3.string(tmp2(1114).t.dEaPc4);
      } else {
        if (null !== tmp4) {
          if (ChannelTypes.GUILD_TEXT !== tmp4) {
            if (tmp12.GUILD_VOICE !== tmp4) {
              if (tmp12.GUILD_STAGE_VOICE !== tmp4) {
                if (tmp12.GUILD_ANNOUNCEMENT !== tmp4) {
                  if (tmp12.GUILD_FORUM !== tmp4) {
                    if (tmp12.GUILD_MEDIA !== tmp4) {
                      if (tmp12.GUILD_APP !== tmp4) {
                        if (tmp12.GUILD_CATEGORY === tmp4) {
                          let intl = tmp2(1114).intl;
                          stringResult = intl.string(tmp2(1114).t["ISN+NM"]);
                        } else {
                          const _Error = Error;
                          const _HermesInternal = HermesInternal;
                          const error = new Error("Unsupported channelType: " + tmp4);
                          throw error;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let intl2 = tmp2(1114).intl;
        stringResult = intl2.string(tmp2(1114).t["fUYU+j"]);
      }
      obj.headerTitle = stringResult;
      navigation.setOptions(obj);
    }, items2);
    tmp34 = jsx;
    obj = { keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
    obj1 = { padding: tmp2(tmp3[14]).space.PX_16, paddingBottom: tmp2(tmp3[14]).space.PX_16 + cloneChannelId(createMode[37])().insets.bottom };
    tmp35 = closure_5;
    obj.contentContainerStyle = obj1;
    tmp36 = jsxs;
    obj2 = { spacing: tmp2(tmp3[14]).space.PX_16, children: null };
    tmp37 = closure_14;
    if (first1 === closure_14.GUILD_CATEGORY) {
      intl2 = tmp4(tmp3[29]).intl;
      stringResult = intl2.string(tmp4(tmp3[29]).t.OCAkGP);
    } else {
      intl = tmp4(tmp3[29]).intl;
      stringResult = intl.string(tmp4(tmp3[29]).t.PVbHDl);
    }
    obj3 = { label: stringResult, errorMessage: null, description: null, autoFocus: true, enableAndroidSanitizedInputWorkaround: true, value: null, onChange: null, placeholder: null };
    name = tmp28.name;
    first5 = undefined;
    if (name != null) {
      first5 = name[0];
    }
    obj3.errorMessage = first5;
    if (first1 === tmp37.GUILD_FORUM) {
      intl4 = tmp4(tmp3[29]).intl;
      stringResult1 = intl4.string(tmp4(tmp3[29]).t.qBvLY4);
    } else if (null != stateFromStores1) {
      intl3 = tmp4(tmp3[29]).intl;
      obj4 = { name: null };
      tmp4Result3 = tmp4(tmp3[40]);
      tmp41 = closure_12;
      flag = true;
      tmp42 = tmp4Result3;
      tmp43 = stateFromStores1;
      tmp44 = tmp11;
      obj4.name = tmp4Result3.computeChannelName(stateFromStores1, tmp11, closure_12, true);
      stringResult1 = intl3.format(tmp4(tmp3[29]).t.s2ZzZZ, obj4);
    }
    obj3.description = stringResult1;
    obj3.value = first;
    obj3.onChange = function onChange(arg0) {
      if (first !== arg0) {
        closure_9(sanitizeChannelNameDefault(arg0, first1));
      }
    };
    if (first1 === tmp37.GUILD_CATEGORY) {
      intl7 = tmp4(tmp3[29]).intl;
      stringResult2 = intl7.string(tmp4(tmp3[29]).t.eTVbtx);
    } else if (first1 === tmp37.GUILD_FORUM) {
      intl6 = tmp4(tmp3[29]).intl;
      stringResult2 = intl6.string(tmp4(tmp3[29]).t["5z1Xat"]);
    } else {
      intl5 = tmp4(tmp3[29]).intl;
      stringResult2 = intl5.string(tmp4(tmp3[29]).t["bw/b8E"]);
    }
    obj3.placeholder = stringResult2;
    items3 = [, , ];
    items3[0] = tmp34(tmp4(tmp3[54]).TextInput, obj3);
    tmp36Result2 = null;
    if (null == stateFromStores1) {
      tmp47 = Fragment;
      tmp36Result = null;
      if (first1 !== tmp37.GUILD_CATEGORY) {
        handleTypeChange = function handleTypeChange(arg0) {
          closure_11(arg0);
          closure_9(sanitizeChannelNameDefault(first, arg0));
        };
        obj5 = { title: null, hasIcons: true, children: null };
        intl12 = tmp4(tmp3[29]).intl;
        obj5.title = intl12.string(tmp4(tmp3[29]).t["7ZcXG2"]);
        tmp63 = ChannelTypeRow;
        obj6 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj6.channelType = tmp37.GUILD_TEXT;
        obj6.selected = first1 === tmp37.GUILD_TEXT;
        obj6.isPrivate = first4;
        obj6.onPress = handleTypeChange;
        items4 = [, , , , , , ];
        items4[0] = tmp34(ChannelTypeRow, obj6);
        obj7 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj7.channelType = tmp37.GUILD_VOICE;
        obj7.selected = first1 === tmp37.GUILD_VOICE;
        obj7.isPrivate = first4;
        obj7.onPress = handleTypeChange;
        items4[1] = tmp34(ChannelTypeRow, obj7);
        obj8 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj8.channelType = tmp37.GUILD_FORUM;
        obj8.selected = first1 === tmp37.GUILD_FORUM;
        obj8.isPrivate = first4;
        obj8.onPress = handleTypeChange;
        items4[2] = tmp34(ChannelTypeRow, obj8);
        tmp34Result = null;
        if (guildEligibleForMediaChannels) {
          obj9 = { channelType: null, selected: null, isPrivate: null, isBeta: true, onPress: null };
          obj9.channelType = tmp37.GUILD_MEDIA;
          obj9.selected = first1 === tmp37.GUILD_MEDIA;
          obj9.isPrivate = first4;
          obj9.onPress = handleTypeChange;
          tmp34Result = tmp34(tmp63, obj9);
        }
        items4[3] = tmp34Result;
        tmp34Result1 = null;
        if (hasItem) {
          tmp34Result1 = null;
          if (createMode !== tmp4(tmp3[45]).CreateChannelMode.PREMIUM_CHANNEL) {
            obj10 = { channelType: null, selected: null, isPrivate: null, onPress: null };
            obj10.channelType = tmp37.GUILD_ANNOUNCEMENT;
            obj10.selected = first1 === tmp37.GUILD_ANNOUNCEMENT;
            obj10.isPrivate = first4;
            obj10.onPress = handleTypeChange;
            tmp34Result1 = tmp34(tmp63, obj10);
          }
        }
        items4[4] = tmp34Result1;
        tmp34Result2 = null;
        if (canCreateStageChannelByGuild) {
          tmp34Result2 = null;
          if (!first4) {
            obj11 = { channelType: null, selected: null, isPrivate: null, onPress: null };
            obj11.channelType = tmp37.GUILD_STAGE_VOICE;
            obj11.selected = first1 === tmp37.GUILD_STAGE_VOICE;
            obj11.isPrivate = first4;
            obj11.onPress = handleTypeChange;
            tmp34Result2 = tmp34(tmp63, obj11);
          }
        }
        items4[5] = tmp34Result2;
        tmp34Result3 = null;
        if (tmp2Result.useConfig({ guildId, location: "CreateChannel mobile" }).enabled) {
          obj12 = { channelType: null, selected: null, isPrivate: null, onPress: null };
          obj12.channelType = tmp37.GUILD_APP;
          obj12.selected = first1 === tmp37.GUILD_APP;
          obj12.isPrivate = first4;
          obj12.onPress = handleTypeChange;
          tmp34Result3 = tmp34(tmp63, obj12);
        }
        items4[6] = tmp34Result3;
        obj5.children = items4;
        tmp36Result = tmp36(tmp4(tmp3[55]).TableRowGroup, obj5);
      }
      items5 = [, , , ];
      items5[0] = tmp36Result;
      tmp34Result4 = null;
      if (first1 === tmp37.GUILD_APP) {
        obj13 = { guildId: null, channelId: null, selectedApplicationId: null, onChange: null };
        obj13.guildId = guildId;
        obj13.channelId = categoryId;
        obj13.selectedApplicationId = first2;
        obj13.onChange = tmp14Result1[1];
        tmp34Result4 = tmp34(tmp2(tmp3[56]), obj13);
      }
      items5[1] = tmp34Result4;
      obj14 = { guildId: null, channelType: null };
      obj14.guildId = guildId;
      obj14.channelType = first1;
      items5[2] = tmp34(tmp2(tmp3[57]), obj14);
      tmp36Result1 = null;
      if (first1 !== tmp37.GUILD_STAGE_VOICE) {
        tmp36Result1 = null;
        if (createMode !== tmp4(tmp3[45]).CreateChannelMode.PREMIUM_CHANNEL) {
          if (first1 === tmp37.GUILD_CATEGORY) {
            intl9 = tmp4(tmp3[29]).intl;
            stringResult3 = intl9.string(tmp4(tmp3[29]).t.RQUk61);
          } else {
            tmp55 = closure_7;
            tmp56 = closure_7(first1);
            intl8 = tmp4(tmp3[29]).intl;
            string = intl8.string;
            t = tmp4(tmp3[29]).t;
            if (tmp56) {
              stringResult3 = string(t.cLjvKg);
            } else {
              stringResult3 = string(t.hfbjIH);
            }
          }
          obj15 = { description: null, hasIcons: true, children: null };
          obj15.description = stringResult3;
          if (first1 === tmp37.GUILD_CATEGORY) {
            intl11 = tmp4(tmp3[29]).intl;
            stringResult4 = intl11.string(tmp4(tmp3[29]).t.lEPAZ5);
          } else {
            intl10 = tmp4(tmp3[29]).intl;
            stringResult4 = intl10.string(tmp4(tmp3[29]).t.aUI70g);
          }
          obj16 = { label: null, icon: null, value: null, onValueChange: null };
          obj16.label = stringResult4;
          obj16.icon = tmp34(tmp4(tmp3[59]).LockIcon, {});
          obj16.value = first4;
          obj16.onValueChange = function onValueChange(arg0) {
            closure_17(arg0);
          };
          obj15.children = tmp34(tmp4(tmp3[58]).TableSwitchRow, obj16);
          items6 = [, ];
          items6[0] = tmp34(tmp4(tmp3[55]).TableRowGroup, obj15);
          tmp34Result5 = null;
          if (first4) {
            tmp4Result4 = tmp4(tmp3[50]);
            tmp34Result5 = null;
            if (!tmp4Result4.canCreatePrivateChannel(first1, canResult, canResult1)) {
              tmp60 = closure_6;
              obj17 = { style: null, children: null };
              obj17.style = tmp.errorMessage;
              obj18 = { messageType: null, children: null };
              obj18.messageType = tmp4(tmp3[36]).HelpMessageTypes.ERROR;
              tmp4Result5 = tmp4(tmp3[50]);
              obj18.children = tmp4Result5.getPrivateChannelHintText(first1);
              obj17.children = tmp34(tmp4(tmp3[36]).HelpMessage, obj18);
              tmp34Result5 = tmp34(closure_6, obj17);
            }
          }
          obj19 = { children: null };
          items6[1] = tmp34Result5;
          obj19.children = items6;
          tmp36Result1 = tmp36(tmp47, obj19);
        }
      }
      obj20 = { children: null };
      items5[3] = tmp36Result1;
      obj20.children = items5;
      tmp36Result2 = tmp36(tmp47, obj20);
    }
    items3[1] = tmp36Result2;
    tmp34Result6 = null;
    if (null != tmp28.message) {
      tmp62 = closure_6;
      obj21 = { style: null, children: null };
      obj21.style = tmp.errorMessage;
      obj22 = { messageType: null, children: null };
      obj22.messageType = tmp4(tmp3[36]).HelpMessageTypes.ERROR;
      obj22.children = tmp28.message;
      obj21.children = tmp34(tmp4(tmp3[36]).HelpMessage, obj22);
      tmp34Result6 = tmp34(closure_6, obj21);
    }
    items3[2] = tmp34Result6;
    obj2.children = items3;
    obj.children = tmp36(tmp4(tmp3[53]).Stack, obj2);
    return tmp34(tmp35, obj);
  }
}
function AddMembers(guildId) {
  _require = guildId;
  let tmp = closure_23();
  importDefault = noop.useRef(guildId);
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const guild = GuildStore.getGuild(guildId.guildId);
  require("module_38")(null != guild, "Guild must not be null");
  const currentUser = UserStore.getCurrentUser();
  require("module_38")(null != currentUser, "AddMembers: user cannot be undefined");
  const canResult = PermissionStore.can(constants2.ADMINISTRATOR, guild);
  noop = canResult;
  const tmp10 = isGuildOwner(guild, currentUser);
  closure_5 = tmp10;
  const tmp11 = currentUser(noop.useState({}), 2);
  const pendingAdditions = tmp11[0];
  const tmp13 = currentUser(require("useCreateChannelSubmit")(guildId.onChannelCreated), 3);
  const first1 = tmp13[0];
  isGuildOwner = tmp16;
  const effect = noop.useEffect(() => {
    closure_1.current = current;
  });
  const items = [canResult, tmp10, navigation, tmp13[2], pendingAdditions, currentUser.id];
  const onPress = noop.useCallback(() => {
    current = result.current;
    ({ guildId, channelType } = current);
    ({ name, categoryId, applicationId, onChannelCreated, flags } = current);
    let obj = ChannelUtils;
    result = obj.permissionOverwritesForRoles(guildId, channelType, [], true);
    const values = Object.values(first);
    const item = values.forEach((row) => {
      row = row.row;
      let tmp = null != row.id;
      if (tmp) {
        tmp = "" !== row.id;
      }
      if (tmp) {
        if (row.rowType === constants2.ROLE) {
          result.push(channelType(navigation[60]).permissionOverwriteForRole(row.id, channelType));
          const obj2 = channelType(navigation[60]);
        } else if (row.rowType === tmp2.MEMBER) {
          result.push(channelType(navigation[60]).permissionOverwriteForUser(row.id, channelType));
          const obj = channelType(navigation[60]);
        }
      }
    });
    let tmp4 = canResult;
    if (!canResult) {
      tmp4 = closure_5;
    }
    if (!tmp4) {
      result.push(ChannelUtils.permissionOverwriteForUser(currentUser.id, channelType));
      const tmpResult = ChannelUtils;
    }
    obj = { overwrites: result, guildId, channelType, name, categoryId, applicationId, flags };
    if (channelType === ChannelTypes.GUILD_STAGE_VOICE) {
      obj = {};
      const merged = Object.assign(obj);
      obj.guildId = guildId;
      obj.onChannelCreated = onChannelCreated;
      navigation.push(constants3.ADD_MODERATORS, obj);
    } else {
      closure_8(obj);
    }
  }, items);
  const items1 = [navigation, pendingAdditions, first1, onPress];
  const layoutEffect = noop.useLayoutEffect(() => {
    let PDTjLN = navigation;
    const intl = current(navigation[29]).intl;
    current = intl.string(current(navigation[29]).t["5Wxrcd"]);
    if (Object.keys(first).length <= 0) {
      const obj = { headerRight: first1 ? (() => closure_1_20(stringResult(navigation[47]).HeaderSubmittingIndicator, {})) : (() => closure_3_20(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress })) };
      navigation.setOptions(obj);
    } else {
      if (ref.current.channelType === constants.GUILD_STAGE_VOICE) {
        const intl3 = tmp(PDTjLN[29]).intl;
        PDTjLN = tmp(PDTjLN[29]).t.PDTjLN;
        let stringResult = intl3.string(PDTjLN);
      } else {
        const intl2 = tmp(PDTjLN[29]).intl;
        stringResult = intl2.string(tmp(PDTjLN[29]).t.CumH4u);
      }
      current = stringResult;
    }
  }, items1);
  obj = { style: tmp.addMembersContainer, children: null };
  let tmp22 = null;
  if (null != tmp13[1].message) {
    tmp22 = null;
    if ("" !== tmp15.message) {
      obj = { style: tmp.errorMessage, children: null };
      obj1 = { messageType: tmp2(tmp3[36]).HelpMessageTypes.ERROR, children: tmp15.message };
      obj.children = closure_20(tmp2(tmp3[36]).HelpMessage, obj1);
      tmp22 = closure_20(tmp21, obj);
    }
  }
  const items2 = [tmp22, closure_20(require("AddMembersActionSheet").AddMembersBody, { channel: null, guild, pendingAdditions, setPendingAdditions: tmp11[1] })];
  obj.children = items2;
  return closure_22(pendingAdditions, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const isGuildVocalChannelType = fn(1961).isGuildVocalChannelType;
let isGuildOwner = fn(1975).isGuildOwner;
const Constants = fn(1074);
const ChannelTypes = Constants.ChannelTypes;
({ GuildFeatures: closure_15, Permissions: closure_16, AnalyticEvents: closure_17, HelpdeskArticles: closure_18 } = Constants);
const RowType = fn(8401).RowType;
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
fn(4560);
let createStyles = { addMembersContainer: null, errorMessage: null, flexRow: null, horizontalContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.addMembersContainer = createStyles;
createStyles.errorMessage = { marginBottom: 0 };
createStyles.flexRow = { flexDirection: "row", alignItems: "center" };
createStyles.horizontalContainer = { flex: 1, flexDirection: "row" };
const __initData3 = createStyles.createStyles(createStyles);
let obj1 = {};
obj1[ChannelTypes.GUILD_TEXT] = { IconComponent: fn(5080).TextIcon };
let obj2 = { IconComponent: fn(5080).TextIcon };
obj1[ChannelTypes.GUILD_FORUM] = { IconComponent: fn(5088).ForumIcon };
let obj3 = { IconComponent: fn(5088).ForumIcon };
obj1[ChannelTypes.GUILD_VOICE] = { IconComponent: fn(5101).VoiceNormalIcon };
let obj4 = { IconComponent: fn(5101).VoiceNormalIcon };
obj1[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: fn(5097).StageIcon };
let obj5 = { IconComponent: fn(5097).StageIcon };
obj1[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: fn(5094).AnnouncementsIcon };
let obj6 = { IconComponent: fn(5094).AnnouncementsIcon };
obj1[ChannelTypes.GUILD_MEDIA] = { IconComponent: fn(5087).ImageIcon };
let obj7 = { IconComponent: fn(5087).ImageIcon };
obj1[ChannelTypes.GUILD_APP] = { IconComponent: fn(5106).AppsIcon };
let obj9 = {};
let obj8 = { IconComponent: fn(5106).AppsIcon };
obj9[ChannelTypes.GUILD_TEXT] = { IconComponent: fn(5078).TextLockIcon };
let obj10 = { IconComponent: fn(5078).TextLockIcon };
obj9[ChannelTypes.GUILD_FORUM] = { IconComponent: fn(5086).ForumLockIcon };
let obj11 = { IconComponent: fn(5086).ForumLockIcon };
obj9[ChannelTypes.GUILD_VOICE] = { IconComponent: fn(5098).VoiceLockIcon };
let obj12 = { IconComponent: fn(5098).VoiceLockIcon };
obj9[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: fn(5096).StageLockIcon };
let obj13 = { IconComponent: fn(5096).StageLockIcon };
obj9[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: fn(5093).AnnouncementsLockIcon };
let obj14 = { IconComponent: fn(5093).AnnouncementsLockIcon };
obj9[ChannelTypes.GUILD_MEDIA] = { IconComponent: fn(5085).ImageLockIcon };
let obj15 = { IconComponent: fn(5085).ImageLockIcon };
obj9[ChannelTypes.GUILD_APP] = { IconComponent: fn(5105).AppsLockIcon };
let closure_29 = { CREATE_CHANNEL: "CREATE_CHANNEL", ADD_MEMBERS: "ADD_MEMBERS", ADD_MODERATORS: "ADD_MODERATORS" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/CreateChannelModal.tsx");

export default function CreateChannelModal(arg0) {
  _require = arg0;
  ({ screens, initialStack } = useInitialValueDefault(() => {
    let obj = { name: constants.CREATE_CHANNEL, params: null };
    obj = {};
    let merged = Object.assign(closure_0);
    obj.params = obj;
    const items = [obj];
    obj = { screens: null, initialStack: null };
    obj1 = {};
    const obj2 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_INFO,
      impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_20(closure_1_27, {});
      }
    };
    obj1[constants.CREATE_CHANNEL] = obj2;
    const obj4 = { headerTitle: null, impressionName: null, impressionProperties: null, render: null };
    const intl = util.intl;
    obj4.headerTitle = intl.string(util.t.dMJ3Y6);
    obj4.impressionName = discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_MEMBERS;
    const obj3 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_20(closure_1_28, {});
    };
    obj1[constants.ADD_MEMBERS] = obj4;
    const obj6 = { headerTitle: null, render: null };
    const intl2 = util.intl;
    obj6.headerTitle = intl2.string(util.t.n3bcy8);
    obj6.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_20(closure_1_1(closure_1_2[63]), {});
    };
    obj1[constants.ADD_MODERATORS] = obj6;
    obj.screens = obj1;
    obj.initialStack = items;
    return obj;
  }));
  return closure_20(require("Navigator").Navigator, { screens, initialRouteStack });
};
export { CreateChannel };