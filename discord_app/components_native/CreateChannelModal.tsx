// === Module 9017: CreateChannelModal ===

// Module 9017 (CreateChannelModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5077 */;
import useInitialValueDefault from "useInitialValue" /* 5607 */;
import Text_Text from "Text/Text" /* 5619 */;
import ChannelUtils from "ChannelUtils" /* 6041 */;
import TableRow from "TableRow" /* 6969 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import FormRadio from "FormRadio" /* 7056 */;
import HeaderActionButton from "HeaderActionButton" /* 7552 */;
import Form from "Form" /* 8169 */;
import CreateChannelModalActionCreatorsDefault from "CreateChannelModalActionCreators" /* 9025 */;
import sanitizeChannelNameDefault from "sanitizeChannelName" /* 9026 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;

const require = globalThis.__r;

require = fn;
function ChannelTypeRow(selected) {
  selected = selected.selected;
  const channelType = selected.channelType;
  const onPress = selected.onPress;
  ({ isPrivate, isBeta } = selected);
  const tmp = closure_23();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (ChannelTypes.GUILD_TEXT === channelType) {
    const obj2 = { label: null, description: null };
    const intl11 = util.intl;
    obj2.label = intl11.string(util.t.pnuRXC);
    const intl12 = util.intl;
    obj2.description = intl12.string(util.t.oG6WsM);
    let tmp6 = obj2;
  } else if (ChannelTypes.GUILD_VOICE === channelType) {
    const obj3 = { label: null, description: null };
    const intl9 = util.intl;
    obj3.label = intl9.string(util.t.Sx55Oh);
    const intl10 = util.intl;
    obj3.description = intl10.string(util.t.pqfkoF);
    tmp6 = obj3;
  } else if (ChannelTypes.GUILD_FORUM === channelType) {
    obj4 = { label: null, description: null };
    const intl7 = util.intl;
    obj4.label = intl7.string(util.t.eAVID5);
    const intl8 = util.intl;
    obj4.description = intl8.string(util.t.iZ5pgg);
    tmp6 = obj4;
  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === channelType) {
    const obj5 = { label: null, description: null };
    const intl5 = util.intl;
    obj5.label = intl5.string(util.t.qr9dEP);
    const intl6 = util.intl;
    obj5.description = intl6.string(util.t.gBkfzu);
    tmp6 = obj5;
  } else if (ChannelTypes.GUILD_STAGE_VOICE === channelType) {
    const obj6 = { label: null, description: null };
    const intl3 = util.intl;
    obj6.label = intl3.string(util.t.pNWst0);
    const intl4 = util.intl;
    obj6.description = intl4.string(util.t.VPAwgo);
    tmp6 = obj6;
  } else if (ChannelTypes.GUILD_APP === channelType) {
    const obj7 = { label: null, description: null };
    const intl = util.intl;
    obj7.label = intl.string(util.t["A+8d6M"]);
    const intl2 = util.intl;
    obj7.description = intl2.string(util.t.LVQQ3Z);
    tmp6 = obj7;
  } else if (ChannelTypes.GUILD_MEDIA === channelType) {
    const obj8 = { label: null, description: null };
    const intl13 = util.intl;
    obj8.label = intl13.string(util.t["6x6fVg"]);
    const obj9 = { children: null };
    const obj10 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl14 = util.intl;
    obj10.children = intl14.string(util.t.JyCrwS);
    const items = [dependencyMap(Text_Text.Text, obj10), ];
    const obj11 = { variant: "text-xs/normal", children: null };
    const intl15 = util.intl;
    obj12 = { hcArticleUrl: HelpdeskUtilsDefault.getCreatorSupportArticleURL(constants3.MEDIA_CHANNEL) };
    obj11.children = intl15.format(util.t["2Sapx1"], obj12);
    items[1] = dependencyMap(Text_Text.Text, obj11);
    obj9.children = items;
    obj8.description = __initData2(__initData, obj9);
    tmp6 = obj8;
  }
  const label = tmp6.label;
  const obj13 = {
    onPress() {
      if (!selected) {
        onPress(channelType);
      }
    },
    accessibilityRole,
    accessibilityState,
    icon: null,
    trailing: null,
    label: null,
    subLabel: null
  };
  obj13.icon = dependencyMap(timestampProducer, { style: tmp.flexRow, children: dependencyMap(isPrivate ? obj12 : obj4[channelType].IconComponent, {}) });
  obj13.trailing = dependencyMap(FormRadio.FormRadio, { selected });
  let tmp9 = label;
  if (true === isBeta) {
    const obj16 = { style: tmp.horizontalContainer, children: null };
    const obj17 = { text: label };
    const items1 = [dependencyMap(Form.FormLabel, obj17), ];
    const obj18 = { size: native.BetaSizes.SMALL };
    items1[1] = dependencyMap(native.BetaTag, obj18);
    obj16.children = items1;
    tmp9 = __initData2(timestampProducer, obj16);
  }
  obj13.label = tmp9;
  obj13.subLabel = tmp6.description;
  return dependencyMap(TableRow.TableRow, obj13);
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
    privateChannelHintText = null;
    if (first4) {
      tmp4Result3 = tmp4(tmp3[46]);
      privateChannelHintText = null;
      if (!tmp4Result3.canCreatePrivateChannel(first1, canResult, canResult1)) {
        tmp4Result4 = tmp4(tmp3[46]);
        privateChannelHintText = tmp4Result4.getPrivateChannelHintText(first1);
      }
    }
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
            let tmpResult = closure_2_20(categoryId(createMode[48]).HeaderSubmittingIndicator, {});
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
                  tmp5 = !categoryId(createMode[46]).canCreatePrivateChannel(first1, closure_1_6, canResult1);
                  let obj2 = categoryId(createMode[46]);
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
                  let items = closure_2_1(dependencyMap[51]).values(closure_1_5.permissionOverwrites);
                  const obj = closure_2_1(dependencyMap[51]);
                } else {
                  items = [];
                }
                const obj2 = { overwrites: items, bitrate: null, userLimit: null, createMode: null, guildId: null, name: null, channelType: null, categoryId: null, applicationId: null, onChannelCreated: null };
                let bitrate;
                if (closure_1_5 != null) {
                  bitrate = closure_1_5.bitrate;
                }
                obj2.bitrate = bitrate;
                let userLimit;
                if (closure_1_5 != null) {
                  userLimit = closure_1_5.userLimit;
                }
                obj2.userLimit = userLimit;
                obj2.createMode = createMode;
                obj2.guildId = guildId;
                obj2.name = name;
                obj2.channelType = channelType;
                obj2.categoryId = categoryId;
                obj2.applicationId = applicationId;
                obj2.onChannelCreated = onChannelCreated;
                if (closure_1_16) {
                  const obj3 = { guildId: tmp6, channelType, name: tmp7, categoryId: tmp9, applicationId: tmp10, onChannelCreated: tmp11 };
                  closure_1_13.push(constants2.ADD_MEMBERS, obj3);
                } else if (channelType === constants.GUILD_STAGE_VOICE) {
                  closure_1_13.push(constants2.ADD_MODERATORS, obj2);
                } else {
                  closure_1_15(obj2);
                }
              };
              tmpResult = closure_2_20(tmp4, obj);
            }
            const intl2 = categoryId(createMode[29]).intl;
            stringResult = intl2.string(categoryId(createMode[29]).t.PDTjLN);
          }
          return tmpResult;
        },
        headerTitle: null
      };
      if (null != stateFromStores1) {
        const intl3 = util.intl;
        let stringResult = intl3.string(util.t.dEaPc4);
      } else {
        if (null !== first1) {
          if (ChannelTypes.GUILD_TEXT !== first1) {
            if (ChannelTypes.GUILD_VOICE !== first1) {
              if (ChannelTypes.GUILD_STAGE_VOICE !== first1) {
                if (ChannelTypes.GUILD_ANNOUNCEMENT !== first1) {
                  if (ChannelTypes.GUILD_FORUM !== first1) {
                    if (ChannelTypes.GUILD_MEDIA !== first1) {
                      if (ChannelTypes.GUILD_APP !== first1) {
                        if (ChannelTypes.GUILD_CATEGORY === first1) {
                          let intl = util.intl;
                          stringResult = intl.string(util.t["ISN+NM"]);
                        } else {
                          const _Error = Error;
                          const _HermesInternal = HermesInternal;
                          const error = new Error("Unsupported channelType: " + first1);
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
        let intl2 = util.intl;
        stringResult = intl2.string(util.t["fUYU+j"]);
      }
      obj.headerTitle = stringResult;
      navigation.setOptions(obj);
    }, items2);
    tmp35 = jsx;
    obj1 = { keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
    obj34 = { padding: tmp2(tmp3[14]).space.PX_16, paddingBottom: tmp2(tmp3[14]).space.PX_16 + cloneChannelId(createMode[37])().insets.bottom };
    tmp36 = closure_5;
    obj1.contentContainerStyle = obj34;
    tmp37 = jsxs;
    obj35 = { spacing: tmp2(tmp3[14]).space.PX_16, children: null };
    tmp38 = closure_14;
    if (first1 === closure_14.GUILD_CATEGORY) {
      intl2 = tmp4(tmp3[29]).intl;
      stringResult = intl2.string(tmp4(tmp3[29]).t.OCAkGP);
    } else {
      intl = tmp4(tmp3[29]).intl;
      stringResult = intl.string(tmp4(tmp3[29]).t.PVbHDl);
    }
    obj36 = { label: stringResult, errorMessage: null, description: null, autoFocus: true, enableAndroidSanitizedInputWorkaround: true, value: null, onChange: null, placeholder: null };
    name = tmp28.name;
    first5 = undefined;
    if (name != null) {
      first5 = name[0];
    }
    obj36.errorMessage = first5;
    if (first1 === tmp38.GUILD_FORUM) {
      intl4 = tmp4(tmp3[29]).intl;
      stringResult1 = intl4.string(tmp4(tmp3[29]).t.qBvLY4);
    } else if (null != stateFromStores1) {
      intl3 = tmp4(tmp3[29]).intl;
      obj37 = { name: null };
      tmp4Result5 = tmp4(tmp3[40]);
      tmp42 = closure_12;
      flag = true;
      tmp43 = tmp4Result5;
      tmp44 = stateFromStores1;
      tmp45 = tmp11;
      obj37.name = tmp4Result5.computeChannelName(stateFromStores1, tmp11, closure_12, true);
      stringResult1 = intl3.format(tmp4(tmp3[29]).t.s2ZzZZ, obj37);
    }
    obj36.description = stringResult1;
    obj36.value = first;
    obj36.onChange = function handleNameChange(arg0) {
      if (first !== arg0) {
        closure_9(sanitizeChannelNameDefault(arg0, first1));
      }
    };
    if (first1 === tmp38.GUILD_CATEGORY) {
      intl7 = tmp4(tmp3[29]).intl;
      stringResult2 = intl7.string(tmp4(tmp3[29]).t.eTVbtx);
    } else if (first1 === tmp38.GUILD_FORUM) {
      intl6 = tmp4(tmp3[29]).intl;
      stringResult2 = intl6.string(tmp4(tmp3[29]).t["5z1Xat"]);
    } else {
      intl5 = tmp4(tmp3[29]).intl;
      stringResult2 = intl5.string(tmp4(tmp3[29]).t["bw/b8E"]);
    }
    obj36.placeholder = stringResult2;
    items3 = [, , ];
    items3[0] = tmp35(tmp4(tmp3[54]).TextInput, obj36);
    tmp37Result2 = null;
    if (null == stateFromStores1) {
      tmp48 = Fragment;
      tmp37Result = null;
      if (first1 !== tmp38.GUILD_CATEGORY) {
        handleTypeChange = function handleTypeChange(arg0) {
          closure_11(arg0);
          closure_9(sanitizeChannelNameDefault(first, arg0));
        };
        obj38 = { title: null, hasIcons: true, children: null };
        intl12 = tmp4(tmp3[29]).intl;
        obj38.title = intl12.string(tmp4(tmp3[29]).t["7ZcXG2"]);
        tmp64 = ChannelTypeRow;
        obj39 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj39.channelType = tmp38.GUILD_TEXT;
        obj39.selected = first1 === tmp38.GUILD_TEXT;
        obj39.isPrivate = first4;
        obj39.onPress = handleTypeChange;
        items4 = [, , , , , , ];
        items4[0] = tmp35(ChannelTypeRow, obj39);
        obj40 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj40.channelType = tmp38.GUILD_VOICE;
        obj40.selected = first1 === tmp38.GUILD_VOICE;
        obj40.isPrivate = first4;
        obj40.onPress = handleTypeChange;
        items4[1] = tmp35(ChannelTypeRow, obj40);
        obj41 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj41.channelType = tmp38.GUILD_FORUM;
        obj41.selected = first1 === tmp38.GUILD_FORUM;
        obj41.isPrivate = first4;
        obj41.onPress = handleTypeChange;
        items4[2] = tmp35(ChannelTypeRow, obj41);
        tmp35Result = null;
        if (guildEligibleForMediaChannels) {
          obj42 = { channelType: null, selected: null, isPrivate: null, isBeta: true, onPress: null };
          obj42.channelType = tmp38.GUILD_MEDIA;
          obj42.selected = first1 === tmp38.GUILD_MEDIA;
          obj42.isPrivate = first4;
          obj42.onPress = handleTypeChange;
          tmp35Result = tmp35(tmp64, obj42);
        }
        items4[3] = tmp35Result;
        tmp35Result1 = null;
        if (hasItem) {
          tmp35Result1 = null;
          if (createMode !== tmp4(tmp3[45]).CreateChannelMode.PREMIUM_CHANNEL) {
            obj43 = { channelType: null, selected: null, isPrivate: null, onPress: null };
            obj43.channelType = tmp38.GUILD_ANNOUNCEMENT;
            obj43.selected = first1 === tmp38.GUILD_ANNOUNCEMENT;
            obj43.isPrivate = first4;
            obj43.onPress = handleTypeChange;
            tmp35Result1 = tmp35(tmp64, obj43);
          }
        }
        items4[4] = tmp35Result1;
        tmp35Result2 = null;
        if (canCreateStageChannelByGuild) {
          tmp35Result2 = null;
          if (!first4) {
            obj44 = { channelType: null, selected: null, isPrivate: null, onPress: null };
            obj44.channelType = tmp38.GUILD_STAGE_VOICE;
            obj44.selected = first1 === tmp38.GUILD_STAGE_VOICE;
            obj44.isPrivate = first4;
            obj44.onPress = handleTypeChange;
            tmp35Result2 = tmp35(tmp64, obj44);
          }
        }
        items4[5] = tmp35Result2;
        tmp35Result3 = null;
        if (tmp2Result.useConfig({ guildId, location: "CreateChannel mobile" }).enabled) {
          obj45 = { channelType: null, selected: null, isPrivate: null, onPress: null };
          obj45.channelType = tmp38.GUILD_APP;
          obj45.selected = first1 === tmp38.GUILD_APP;
          obj45.isPrivate = first4;
          obj45.onPress = handleTypeChange;
          tmp35Result3 = tmp35(tmp64, obj45);
        }
        items4[6] = tmp35Result3;
        obj38.children = items4;
        tmp37Result = tmp37(tmp4(tmp3[55]).TableRowGroup, obj38);
      }
      items5 = [, , , ];
      items5[0] = tmp37Result;
      tmp35Result4 = null;
      if (first1 === tmp38.GUILD_APP) {
        obj46 = { guildId: null, channelId: null, selectedApplicationId: null, onChange: null };
        obj46.guildId = guildId;
        obj46.channelId = categoryId;
        obj46.selectedApplicationId = first2;
        obj46.onChange = tmp14Result1[1];
        tmp35Result4 = tmp35(tmp2(tmp3[56]), obj46);
      }
      items5[1] = tmp35Result4;
      obj47 = { guildId: null, channelType: null };
      obj47.guildId = guildId;
      obj47.channelType = first1;
      items5[2] = tmp35(tmp2(tmp3[57]), obj47);
      tmp37Result1 = null;
      if (first1 !== tmp38.GUILD_STAGE_VOICE) {
        tmp37Result1 = null;
        if (createMode !== tmp4(tmp3[45]).CreateChannelMode.PREMIUM_CHANNEL) {
          if (first1 === tmp38.GUILD_CATEGORY) {
            intl9 = tmp4(tmp3[29]).intl;
            stringResult3 = intl9.string(tmp4(tmp3[29]).t.RQUk61);
          } else {
            tmp56 = closure_7;
            tmp57 = closure_7(first1);
            intl8 = tmp4(tmp3[29]).intl;
            string = intl8.string;
            t = tmp4(tmp3[29]).t;
            if (tmp57) {
              stringResult3 = string(t.cLjvKg);
            } else {
              stringResult3 = string(t.hfbjIH);
            }
          }
          obj48 = { description: null, hasIcons: true, children: null };
          obj48.description = stringResult3;
          if (first1 === tmp38.GUILD_CATEGORY) {
            intl11 = tmp4(tmp3[29]).intl;
            stringResult4 = intl11.string(tmp4(tmp3[29]).t.lEPAZ5);
          } else {
            intl10 = tmp4(tmp3[29]).intl;
            stringResult4 = intl10.string(tmp4(tmp3[29]).t.aUI70g);
          }
          obj49 = { label: null, icon: null, value: null, onValueChange: null };
          obj49.label = stringResult4;
          obj49.icon = tmp35(tmp4(tmp3[59]).LockIcon, {});
          obj49.value = first4;
          obj49.onValueChange = function handlePrivacyChange(arg0) {
            closure_17(arg0);
          };
          obj48.children = tmp35(tmp4(tmp3[58]).TableSwitchRow, obj49);
          items6 = [, ];
          items6[0] = tmp35(tmp4(tmp3[55]).TableRowGroup, obj48);
          tmp35Result5 = null;
          if (null != privateChannelHintText) {
            tmp61 = closure_6;
            obj50 = { style: null, children: null };
            obj50.style = tmp.errorMessage;
            obj51 = { type: "critical", message: null, role: "status" };
            obj51.message = privateChannelHintText;
            obj50.children = tmp35(tmp4(tmp3[60]).InlineNotice, obj51);
            tmp35Result5 = tmp35(closure_6, obj50);
          }
          obj52 = { children: null };
          items6[1] = tmp35Result5;
          obj52.children = items6;
          tmp37Result1 = tmp37(tmp48, obj52);
        }
      }
      obj53 = { children: null };
      items5[3] = tmp37Result1;
      obj53.children = items5;
      tmp37Result2 = tmp37(tmp48, obj53);
    }
    items3[1] = tmp37Result2;
    tmp35Result6 = null;
    if (null != tmp28.message) {
      tmp63 = closure_6;
      obj54 = { style: null, children: null };
      obj54.style = tmp.errorMessage;
      obj55 = { type: "critical", message: null, role: "alert" };
      obj55.message = tmp28.message;
      obj54.children = tmp35(tmp4(tmp3[60]).InlineNotice, obj55);
      tmp35Result6 = tmp35(closure_6, obj54);
    }
    items3[2] = tmp35Result6;
    obj35.children = items3;
    obj1.children = tmp37(tmp4(tmp3[53]).Stack, obj35);
    return tmp35(tmp36, obj1);
  }
}
function AddMembers(guildId) {
  _require = guildId;
  let tmp = closure_23();
  importDefault = noop.useRef(guildId);
  navigation = require("useNavigation").useNavigation();
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
    current = ref.current;
    ({ guildId, channelType } = current);
    ({ name, categoryId, applicationId, onChannelCreated, flags } = current);
    const result = ChannelUtils.permissionOverwritesForRoles(guildId, channelType, [], true);
    const values = Object.values(first);
    const item = values.forEach((row) => {
      row = row.row;
      let tmp = null != row.id;
      if (tmp) {
        tmp = "" !== row.id;
      }
      if (tmp) {
        if (row.rowType === constants2.ROLE) {
          result.push(channelType(navigation[61]).permissionOverwriteForRole(row.id, channelType));
          const obj2 = channelType(navigation[61]);
        } else if (row.rowType === tmp2.MEMBER) {
          result.push(channelType(navigation[61]).permissionOverwriteForUser(row.id, channelType));
          const obj = channelType(navigation[61]);
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
    let obj2 = { overwrites: result, guildId, channelType, name, categoryId, applicationId, flags };
    if (channelType === ChannelTypes.GUILD_STAGE_VOICE) {
      const obj3 = {};
      const merged = Object.assign(obj2);
      obj3.guildId = guildId;
      obj3.onChannelCreated = onChannelCreated;
      navigation.push(constants3.ADD_MODERATORS, obj3);
    } else {
      closure_8(obj2);
    }
    ref = result;
  }, items);
  const items1 = [navigation, pendingAdditions, first1, onPress];
  const layoutEffect = noop.useLayoutEffect(() => {
    let PDTjLN = navigation;
    const intl = current(navigation[29]).intl;
    current = intl.string(current(navigation[29]).t["5Wxrcd"]);
    if (Object.keys(first).length <= 0) {
      const obj = { headerRight: first1 ? (() => closure_1_20(stringResult(navigation[48]).HeaderSubmittingIndicator, {})) : (() => dependencyMap(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress })) };
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
  let obj2 = { style: tmp.addMembersContainer, children: null };
  let tmp22 = null;
  if (null != tmp13[1].message) {
    tmp22 = null;
    if ("" !== tmp15.message) {
      let obj3 = { style: tmp.errorMessage, children: null };
      obj4 = { type: "critical", message: tmp15.message, role: "alert" };
      obj3.children = closure_20(tmp2(tmp3[60]).InlineNotice, obj4);
      tmp22 = closure_20(tmp21, obj3);
    }
  }
  const items2 = [tmp22, closure_20(require("AddMembersActionSheet").AddMembersBody, { channel: null, guild, pendingAdditions, setPendingAdditions: tmp11[1] })];
  obj2.children = items2;
  return closure_22(pendingAdditions, obj2);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const isGuildVocalChannelType = fn(4862).isGuildVocalChannelType;
let isGuildOwner = fn(4876).isGuildOwner;
const Constants = fn(1072);
const ChannelTypes = Constants.ChannelTypes;
({ GuildFeatures: closure_15, Permissions: closure_16, AnalyticEvents: closure_17, HelpdeskArticles: closure_18 } = Constants);
const RowType = fn(7939).RowType;
const jsxProd = fn(21);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { addMembersContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, errorMessage: { marginBottom: 0 }, flexRow: { flexDirection: "row", alignItems: "center" }, horizontalContainer: { flex: 1, flexDirection: "row" } };
const __initData3 = createStyles.createStyles(obj2);
let obj4 = {};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj4[ChannelTypes.GUILD_TEXT] = { IconComponent: fn(8644).TextIcon };
let obj5 = { IconComponent: fn(8644).TextIcon };
obj4[ChannelTypes.GUILD_FORUM] = { IconComponent: fn(8652).ForumIcon };
let obj6 = { IconComponent: fn(8652).ForumIcon };
obj4[ChannelTypes.GUILD_VOICE] = { IconComponent: fn(8665).VoiceNormalIcon };
let obj7 = { IconComponent: fn(8665).VoiceNormalIcon };
obj4[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: fn(8661).StageIcon };
let obj8 = { IconComponent: fn(8661).StageIcon };
obj4[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: fn(8658).AnnouncementsIcon };
let obj9 = { IconComponent: fn(8658).AnnouncementsIcon };
obj4[ChannelTypes.GUILD_MEDIA] = { IconComponent: fn(8651).ImageIcon };
let obj10 = { IconComponent: fn(8651).ImageIcon };
obj4[ChannelTypes.GUILD_APP] = { IconComponent: fn(8670).AppsIcon };
let obj12 = {};
let obj11 = { IconComponent: fn(8670).AppsIcon };
obj12[ChannelTypes.GUILD_TEXT] = { IconComponent: fn(8642).TextLockIcon };
let obj13 = { IconComponent: fn(8642).TextLockIcon };
obj12[ChannelTypes.GUILD_FORUM] = { IconComponent: fn(8650).ForumLockIcon };
let obj14 = { IconComponent: fn(8650).ForumLockIcon };
obj12[ChannelTypes.GUILD_VOICE] = { IconComponent: fn(8662).VoiceLockIcon };
let obj15 = { IconComponent: fn(8662).VoiceLockIcon };
obj12[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: fn(8660).StageLockIcon };
let obj16 = { IconComponent: fn(8660).StageLockIcon };
obj12[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: fn(8657).AnnouncementsLockIcon };
let obj17 = { IconComponent: fn(8657).AnnouncementsLockIcon };
obj12[ChannelTypes.GUILD_MEDIA] = { IconComponent: fn(8649).ImageLockIcon };
let obj18 = { IconComponent: fn(8649).ImageLockIcon };
obj12[ChannelTypes.GUILD_APP] = { IconComponent: fn(8669).AppsLockIcon };
let closure_29 = { CREATE_CHANNEL: "CREATE_CHANNEL", ADD_MEMBERS: "ADD_MEMBERS", ADD_MODERATORS: "ADD_MODERATORS" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/CreateChannelModal.tsx");

export default function CreateChannelModal(arg0) {
  _require = arg0;
  ({ screens, initialStack } = useInitialValueDefault(() => {
    const obj = { name: constants.CREATE_CHANNEL, params: null };
    let merged = Object.assign(closure_0);
    obj.params = {};
    const items = [obj];
    const obj3 = { screens: null, initialStack: null };
    obj4 = {};
    const obj5 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_INFO,
      impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_20(closure_1_27, {});
      }
    };
    obj4[constants.CREATE_CHANNEL] = obj5;
    const obj7 = { headerTitle: null, impressionName: null, impressionProperties: null, render: null };
    const intl = util.intl;
    obj7.headerTitle = intl.string(util.t.dMJ3Y6);
    obj7.impressionName = discord_common_AnalyticsUtils.ImpressionNames.CHANNEL_ADD_MEMBERS;
    const obj2 = {};
    const obj6 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW };
    obj7.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.CHANNEL_ADD_FLOW };
    obj7.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_20(closure_1_28, {});
    };
    obj4[constants.ADD_MEMBERS] = obj7;
    const obj9 = { headerTitle: null, render: null };
    const intl2 = util.intl;
    obj9.headerTitle = intl2.string(util.t.n3bcy8);
    obj9.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_20(closure_1_1(closure_1_2[64]), {});
    };
    obj4[constants.ADD_MODERATORS] = obj9;
    obj3.screens = obj4;
    obj3.initialStack = items;
    return obj3;
  }));
  return closure_20(require("Navigator").Navigator, { screens, initialRouteStack });
};
export { CreateChannel };