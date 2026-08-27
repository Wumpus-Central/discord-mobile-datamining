// === Module 9623: ChannelTypeRow ===

// Module 9623 (ChannelTypeRow)
import ThemesDefault from "Themes" /* 712 */;
import useInitialValueDefault from "useInitialValue" /* 5893 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import { isGuildOwner } from "GuildNSFWContentLevel" /* 1434 */;
import closure_10 from "ensureGuildLoaded" /* 1391 */;
import closure_11 from "createGuildRecordFromRust" /* 1910 */;
import closure_12 from "getUncachedChannelPermissions" /* 4089 */;
import closure_13 from "markAllUserIdListsStale" /* 4098 */;
import closure_14 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { RowType } from "RowType" /* 8603 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
function ChannelTypeRow(selected) {
  selected = selected.selected;
  const channelType = selected.channelType;
  const onPress = selected.onPress;
  ({ isPrivate, isBeta } = selected);
  const tmp = callback3();
  let obj = selected(onPress[29]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (ChannelTypes.GUILD_TEXT === channelType) {
    obj = { label: null, description: null };
    const intl9 = tmp2(tmp3[26]).intl;
    obj[0] = intl9.string(tmp2(tmp3[26]).t.pnuRXC);
    const intl10 = tmp2(tmp3[26]).intl;
    obj[1] = intl10.string(tmp2(tmp3[26]).t.oG6WsM);
    let tmp6 = obj;
  } else if (tmp5.GUILD_VOICE === channelType) {
    obj = { label: null, description: null };
    const intl7 = tmp2(tmp3[26]).intl;
    obj[0] = intl7.string(tmp2(tmp3[26]).t.Sx55Oh);
    const intl8 = tmp2(tmp3[26]).intl;
    obj[1] = intl8.string(tmp2(tmp3[26]).t.pqfkoF);
    tmp6 = obj;
  } else if (tmp5.GUILD_FORUM === channelType) {
    obj1 = { label: null, description: null };
    const intl5 = tmp2(tmp3[26]).intl;
    obj1[0] = intl5.string(tmp2(tmp3[26]).t.eAVID5);
    const intl6 = tmp2(tmp3[26]).intl;
    obj1[1] = intl6.string(tmp2(tmp3[26]).t.iZ5pgg);
    tmp6 = obj1;
  } else if (tmp5.GUILD_ANNOUNCEMENT === channelType) {
    const obj2 = { label: null, description: null };
    const intl3 = tmp2(tmp3[26]).intl;
    obj2[0] = intl3.string(tmp2(tmp3[26]).t.qr9dEP);
    const intl4 = tmp2(tmp3[26]).intl;
    obj2[1] = intl4.string(tmp2(tmp3[26]).t.gBkfzu);
    tmp6 = obj2;
  } else if (tmp5.GUILD_STAGE_VOICE === channelType) {
    const obj3 = { label: null, description: null };
    const intl = tmp2(tmp3[26]).intl;
    obj3[0] = intl.string(tmp2(tmp3[26]).t.pNWst0);
    const intl2 = tmp2(tmp3[26]).intl;
    obj3[1] = intl2.string(tmp2(tmp3[26]).t.VPAwgo);
    tmp6 = obj3;
  } else if (tmp5.GUILD_MEDIA === channelType) {
    const obj4 = { label: null, description: null };
    const intl11 = tmp2(tmp3[26]).intl;
    obj4[0] = intl11.string(tmp2(tmp3[26]).t["6x6fVg"]);
    const obj5 = { children: null };
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl12 = tmp2(tmp3[26]).intl;
    obj6[2] = intl12.string(tmp2(tmp3[26]).t.JyCrwS);
    const items = [callback(tmp2(tmp3[27]).Text, obj6), ];
    const obj7 = { variant: "text-xs/normal", children: null };
    const intl13 = tmp2(tmp3[26]).intl;
    obj8 = { hcArticleUrl: null };
    let obj13 = channelType(tmp3[28]);
    obj8[0] = obj13.getCreatorSupportArticleURL(constants3.MEDIA_CHANNEL);
    obj7[1] = intl13.format(tmp2(tmp3[26]).t["2Sapx1"], obj8);
    items[1] = callback(tmp2(tmp3[27]).Text, obj7);
    obj5[0] = items;
    obj4[1] = callback2(closure_22, obj5);
    tmp6 = obj4;
  }
  const label = tmp6.label;
  const obj9 = {
    onPress() {
      if (!selected) {
        onPress(channelType);
      }
    },
    accessibilityRole,
    accessibilityState,
    icon: callback(closure_6, { style: tmp.flexRow, children: callback(isPrivate ? obj8 : obj1[channelType].IconComponent, {}) }),
    trailing: callback(selected(onPress[31]).FormRadio, { selected }),
    label: null,
    subLabel: null
  };
  let tmp9 = label;
  if (true === isBeta) {
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.horizontalContainer;
    const obj12 = { text: null };
    obj12[0] = label;
    const items1 = [tmp7(tmp2(tmp3[32]).FormLabel, obj12), ];
    obj13 = { size: null };
    obj13[0] = tmp2(tmp3[33]).BetaSizes.SMALL;
    items1[1] = tmp7(tmp2(tmp3[33]).BetaTag, obj13);
    obj11[1] = items1;
    tmp9 = callback2(closure_6, obj11);
  }
  obj9[5] = tmp9;
  obj9[6] = tmp6.description;
  return callback(selected(onPress[30]).TableRow, obj9);
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
    tmp = closure_24();
    tmp2 = cloneChannelId;
    tmp3 = createMode;
    tmp4 = categoryId;
    obj = require("initialize");
    items = [];
    items[0] = closure_11;
    stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
    obj2 = require("initialize");
    items1 = [];
    items1[0] = closure_10;
    stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let channel = null;
      if (null != closure_1) {
        channel = first1.getChannel(tmp);
      }
      return channel;
    });
    closure_5 = stateFromStores1;
    hasItem = null != stateFromStores;
    if (hasItem) {
      features = stateFromStores.features;
      tmp8 = closure_16;
      hasItem = features.has(closure_16.COMMUNITY);
    }
    canResult = closure_12.can(Permissions.VIEW_CHANNEL, stateFromStores);
    closure_6 = canResult;
    canResult1 = closure_12.can(Permissions.CONNECT, stateFromStores);
    closure_7 = canResult1;
    tmp11 = closure_14;
    currentUser = closure_14.getCurrentUser();
    tmp13 = require("module_38")(null != currentUser, "CreateChannel: user cannot be undefined");
    str = require("computeChannelName")(stateFromStores1);
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
      tmp17 = closure_15;
      channelType = closure_15.GUILD_TEXT;
    }
    tmp14Result = tmp14(obj3.useState(channelType), 2);
    first1 = tmp14Result[0];
    closure_10 = first1;
    closure_11 = tmp14Result[1];
    tmp4Result = require("createModeratorOverwrite");
    canCreateStageChannelByGuild = tmp4Result.useCanCreateStageChannelByGuild(guildId);
    tmp4Result1 = require("useGuildEligibleForMediaChannels");
    guildEligibleForMediaChannels = tmp4Result1.useGuildEligibleForMediaChannels(stateFromStores);
    tmp4Result2 = require("useNavigation");
    navigation = tmp4Result2.useNavigation();
    closure_12 = navigation;
    tmp14Result1 = tmp14(require("useCreateChannelSubmit")(onChannelCreated), 3);
    first2 = tmp14Result1[0];
    closure_13 = first2;
    tmp25 = tmp14Result1[1];
    tmp26 = tmp14Result1[2];
    closure_14 = tmp26;
    tmp14Result2 = tmp14(obj3.useState(false), 2);
    first3 = tmp14Result2[0];
    closure_15 = first3;
    closure_16 = tmp14Result2[1];
    effect = obj3.useEffect(() => {
      callback(createMode[42]).trackWithMetadata(constants.OPEN_MODAL, { type: "Create Channel" });
    }, []);
    items2 = [, , , , , , , , , , , , ];
    items2[0] = navigation;
    items2[1] = first1;
    items2[2] = stateFromStores1;
    items2[3] = canResult;
    items2[4] = canResult1;
    items2[5] = first3;
    items2[6] = first;
    items2[7] = first2;
    items2[8] = guildId;
    items2[9] = tmp26;
    items2[10] = categoryId;
    items2[11] = createMode;
    items2[12] = onChannelCreated;
    effect1 = obj3.useEffect(() => {
      let obj = {
        headerLeft: categoryId(createMode[43]).getHeaderCloseButton(closure_1_1(createMode[44]).close),
        headerRight() {
          if (closure_13) {
            let tmpResult = tmp(closure_1_0(closure_1_2[43]).HeaderSubmittingIndicator, {});
          } else {
            let tmp5 = closure_15;
            if (!closure_15) {
              if (closure_10 !== closure_1_15.GUILD_STAGE_VOICE) {
                const intl = closure_1_0(closure_1_2[26]).intl;
                let stringResult = intl.string(closure_1_0(closure_1_2[26]).t.CumH4u);
              }
              let obj = { text: null, disabled: null, onPress: null };
              obj[0] = stringResult;
              let tmp18 = "" === closure_8;
              if (!tmp18) {
                if (tmp5) {
                  tmp5 = !closure_1_0(closure_1_2[46]).canCreatePrivateChannel(closure_10, closure_6, closure_7);
                  const obj2 = closure_1_0(closure_1_2[46]);
                }
                tmp18 = tmp5;
              }
              obj[1] = tmp18;
              obj[2] = function onPress() {
                if (null != closure_5) {
                  let obj = closure_1_1(closure_1_2[47]);
                  let items = obj.values(tmp.permissionOverwrites);
                } else {
                  items = [];
                }
                obj = { overwrites: items, bitrate: null, userLimit: null, createMode: null, guildId: null, name: null, channelType: null, categoryId: null, onChannelCreated: null };
                let bitrate;
                if (closure_5 != null) {
                  bitrate = tmp.bitrate;
                }
                obj[1] = bitrate;
                let userLimit;
                if (closure_5 != null) {
                  userLimit = tmp.userLimit;
                }
                obj[2] = userLimit;
                obj[3] = closure_2;
                obj[4] = closure_3;
                obj[5] = closure_8;
                obj[6] = closure_10;
                obj[7] = closure_0;
                obj[8] = closure_4;
                if (closure_15) {
                  obj = { guildId: null, channelType: null, name: null, categoryId: null, onChannelCreated: null };
                  obj[0] = tmp6;
                  obj[1] = tmp8;
                  obj[2] = tmp7;
                  obj[3] = tmp9;
                  obj[4] = tmp10;
                  arr = arr.push(closure_1_30.ADD_MEMBERS, obj);
                } else if (tmp8 === closure_1_15.GUILD_STAGE_VOICE) {
                  arr = arr.push(closure_1_30.ADD_MODERATORS, obj);
                } else {
                  callback(obj);
                }
              };
              tmpResult = tmp(tmp4, obj);
            }
            const intl2 = closure_1_0(closure_1_2[26]).intl;
            stringResult = intl2.string(closure_1_0(closure_1_2[26]).t.PDTjLN);
          }
          return tmpResult;
        },
        headerTitle: null
      };
      if (null != stateFromStores1) {
        const intl3 = tmp2(tmp3[26]).intl;
        let stringResult = intl3.string(tmp2(tmp3[26]).t.dEaPc4);
      } else {
        if (null !== tmp4) {
          if (first3.GUILD_TEXT !== tmp4) {
            if (tmp12.GUILD_VOICE !== tmp4) {
              if (tmp12.GUILD_STAGE_VOICE !== tmp4) {
                if (tmp12.GUILD_ANNOUNCEMENT !== tmp4) {
                  if (tmp12.GUILD_FORUM !== tmp4) {
                    if (tmp12.GUILD_MEDIA !== tmp4) {
                      if (tmp12.GUILD_CATEGORY === tmp4) {
                        let intl = tmp2(tmp3[26]).intl;
                        stringResult = intl.string(tmp2(tmp3[26]).t["ISN+NM"]);
                      } else {
                        const _Error = Error;
                        const _HermesInternal = HermesInternal;
                        error = new Error("Unsupported channelType: " + tmp4);
                        throw error;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        let intl2 = tmp2(tmp3[26]).intl;
        stringResult = intl2.string(tmp2(tmp3[26]).t["fUYU+j"]);
      }
      obj[2] = stringResult;
      navigation.setOptions(obj);
    }, items2);
    tmp31 = jsx;
    obj = { keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
    obj1 = { padding: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16 + require("useSafeAreaInsetsKeyboardAware")().insets.bottom };
    tmp32 = closure_5;
    obj[1] = obj1;
    tmp33 = jsxs;
    obj2 = { spacing: require("Themes").space.PX_16, children: null };
    tmp34 = closure_15;
    if (first1 === closure_15.GUILD_CATEGORY) {
      intl2 = require("getSystemLocale").intl;
      stringResult = intl2.string(require("getSystemLocale").t.OCAkGP);
    } else {
      intl = require("getSystemLocale").intl;
      stringResult = intl.string(require("getSystemLocale").t.PVbHDl);
    }
    obj3 = { label: stringResult, errorMessage: null, description: null, children: null };
    name = tmp25.name;
    first4 = undefined;
    if (name != null) {
      first4 = name[0];
    }
    obj3[1] = first4;
    if (first1 === tmp34.GUILD_FORUM) {
      intl4 = require("getSystemLocale").intl;
      stringResult1 = intl4.string(require("getSystemLocale").t.qBvLY4);
    } else if (null != stateFromStores1) {
      intl3 = require("getSystemLocale").intl;
      obj4 = { name: null };
      tmp4Result3 = require("computeChannelName");
      tmp38 = closure_13;
      flag = true;
      tmp39 = tmp4Result3;
      tmp40 = stateFromStores1;
      tmp41 = tmp11;
      obj4[0] = tmp4Result3.computeChannelName(stateFromStores1, tmp11, closure_13, true);
      stringResult1 = intl3.format(require("getSystemLocale").t.s2ZzZZ, obj4);
    }
    obj3[2] = stringResult1;
    obj5 = {
      autoFocus: true,
      enableAndroidSanitizedInputWorkaround: true,
      value: first,
      onChange(arg0) {
            if (first !== arg0) {
              let result = arg0;
              if (canResult1.has(first1)) {
                result = categoryId(createMode[48]).sanitizeGuildTextChannelName(arg0);
                const obj = categoryId(createMode[48]);
              }
              closure_9(result);
              const tmp2 = closure_9;
            }
          },
      placeholder: null
    };
    if (first1 === tmp34.GUILD_CATEGORY) {
      intl7 = require("getSystemLocale").intl;
      stringResult2 = intl7.string(require("getSystemLocale").t.eTVbtx);
    } else if (first1 === tmp34.GUILD_FORUM) {
      intl6 = require("getSystemLocale").intl;
      stringResult2 = intl6.string(require("getSystemLocale").t["5z1Xat"]);
    } else {
      intl5 = require("getSystemLocale").intl;
      stringResult2 = intl5.string(require("getSystemLocale").t["bw/b8E"]);
    }
    obj5[4] = stringResult2;
    obj3[3] = tmp31(require("TextField").TextField, obj5);
    items3 = [, , ];
    items3[0] = tmp31(require("Input").Input, obj3);
    tmp33Result2 = null;
    if (null == stateFromStores1) {
      tmp44 = Fragment;
      tmp33Result = null;
      if (first1 !== tmp34.GUILD_CATEGORY) {
        handleTypeChange = function handleTypeChange(arg0) {
          guild(arg0);
          let result = first;
          if (canResult1.has(arg0)) {
            result = categoryId(createMode[48]).sanitizeGuildTextChannelName(first);
            const obj = categoryId(createMode[48]);
          }
          closure_9(result);
        };
        obj6 = { title: null, hasIcons: true, children: null };
        intl12 = require("getSystemLocale").intl;
        obj6[0] = intl12.string(require("getSystemLocale").t["7ZcXG2"]);
        tmp58 = ChannelTypeRow;
        obj7 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj7[0] = tmp34.GUILD_TEXT;
        obj7[1] = first1 === tmp34.GUILD_TEXT;
        obj7[2] = first3;
        obj7[3] = handleTypeChange;
        items4 = [, , , , , ];
        items4[0] = tmp31(ChannelTypeRow, obj7);
        obj8 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj8[0] = tmp34.GUILD_VOICE;
        obj8[1] = first1 === tmp34.GUILD_VOICE;
        obj8[2] = first3;
        obj8[3] = handleTypeChange;
        items4[1] = tmp31(ChannelTypeRow, obj8);
        obj9 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj9[0] = tmp34.GUILD_FORUM;
        obj9[1] = first1 === tmp34.GUILD_FORUM;
        obj9[2] = first3;
        obj9[3] = handleTypeChange;
        items4[2] = tmp31(ChannelTypeRow, obj9);
        tmp31Result = null;
        if (guildEligibleForMediaChannels) {
          obj10 = { channelType: null, selected: null, isPrivate: null, isBeta: true, onPress: null };
          obj10[0] = tmp34.GUILD_MEDIA;
          obj10[1] = first1 === tmp34.GUILD_MEDIA;
          obj10[2] = first3;
          obj10[4] = handleTypeChange;
          tmp31Result = tmp31(tmp58, obj10);
        }
        items4[3] = tmp31Result;
        tmp31Result1 = null;
        if (hasItem) {
          tmp31Result1 = null;
          if (createMode !== require("useCreateChannelSubmit").CreateChannelMode.PREMIUM_CHANNEL) {
            obj11 = { channelType: null, selected: null, isPrivate: null, onPress: null };
            obj11[0] = tmp34.GUILD_ANNOUNCEMENT;
            obj11[1] = first1 === tmp34.GUILD_ANNOUNCEMENT;
            obj11[2] = first3;
            obj11[3] = handleTypeChange;
            tmp31Result1 = tmp31(tmp58, obj11);
          }
        }
        items4[4] = tmp31Result1;
        tmp31Result2 = null;
        if (canCreateStageChannelByGuild) {
          tmp31Result2 = null;
          if (!first3) {
            obj12 = { channelType: null, selected: null, isPrivate: null, onPress: null };
            obj12[0] = tmp34.GUILD_STAGE_VOICE;
            obj12[1] = first1 === tmp34.GUILD_STAGE_VOICE;
            obj12[2] = first3;
            obj12[3] = handleTypeChange;
            tmp31Result2 = tmp31(tmp58, obj12);
          }
        }
        items4[5] = tmp31Result2;
        obj6[2] = items4;
        tmp33Result = tmp33(require("TableRowGroupTitle").TableRowGroup, obj6);
      }
      items5 = [, , ];
      items5[0] = tmp33Result;
      obj13 = { guildId: null, channelType: null };
      obj13[0] = guildId;
      obj13[1] = first1;
      items5[1] = tmp31(require("CreateChannelTypeDescription"), obj13);
      tmp33Result1 = null;
      if (first1 !== tmp34.GUILD_STAGE_VOICE) {
        tmp33Result1 = null;
        if (createMode !== require("useCreateChannelSubmit").CreateChannelMode.PREMIUM_CHANNEL) {
          if (first1 === tmp34.GUILD_CATEGORY) {
            intl9 = require("getSystemLocale").intl;
            stringResult3 = intl9.string(require("getSystemLocale").t.RQUk61);
          } else {
            tmp50 = closure_8;
            tmp51 = closure_8(first1);
            intl8 = require("getSystemLocale").intl;
            string = intl8.string;
            t = require("getSystemLocale").t;
            if (tmp51) {
              stringResult3 = string(t.cLjvKg);
            } else {
              stringResult3 = string(t.hfbjIH);
            }
          }
          obj14 = { description: null, hasIcons: true, children: null };
          obj14[0] = stringResult3;
          if (first1 === tmp34.GUILD_CATEGORY) {
            intl11 = require("getSystemLocale").intl;
            stringResult4 = intl11.string(require("getSystemLocale").t.lEPAZ5);
          } else {
            intl10 = require("getSystemLocale").intl;
            stringResult4 = intl10.string(require("getSystemLocale").t.aUI70g);
          }
          obj15 = { label: null, icon: null, value: null, onValueChange: null };
          obj15[0] = stringResult4;
          obj15[1] = tmp31(require("LockIcon").LockIcon, {});
          obj15[2] = first3;
          obj15[3] = function onValueChange(arg0) {
            callback2(arg0);
          };
          obj14[2] = tmp31(require("TableSwitchRow").TableSwitchRow, obj15);
          items6 = [, ];
          items6[0] = tmp31(require("TableRowGroupTitle").TableRowGroup, obj14);
          tmp31Result3 = null;
          if (first3) {
            tmp4Result4 = require("getRoleRowData");
            tmp31Result3 = null;
            if (!tmp4Result4.canCreatePrivateChannel(first1, canResult, canResult1)) {
              tmp55 = closure_6;
              obj16 = { style: null, children: null };
              obj16[0] = tmp.errorMessage;
              obj17 = { messageType: null, children: null };
              obj17[0] = require("Button").HelpMessageTypes.ERROR;
              tmp4Result5 = require("getRoleRowData");
              obj17[1] = tmp4Result5.getPrivateChannelHintText(first1);
              obj16[1] = tmp31(require("Button").HelpMessage, obj17);
              tmp31Result3 = tmp31(closure_6, obj16);
            }
          }
          obj18 = { children: null };
          items6[1] = tmp31Result3;
          obj18[0] = items6;
          tmp33Result1 = tmp33(tmp44, obj18);
        }
      }
      obj19 = { children: null };
      items5[2] = tmp33Result1;
      obj19[0] = items5;
      tmp33Result2 = tmp33(tmp44, obj19);
    }
    items3[1] = tmp33Result2;
    tmp31Result4 = null;
    if (null != tmp25.message) {
      tmp57 = closure_6;
      obj20 = { style: null, children: null };
      obj20[0] = tmp.errorMessage;
      obj21 = { messageType: null, children: null };
      obj21[0] = require("Button").HelpMessageTypes.ERROR;
      obj21[1] = tmp25.message;
      obj20[1] = tmp31(require("Button").HelpMessage, obj21);
      tmp31Result4 = tmp31(closure_6, obj20);
    }
    items3[2] = tmp31Result4;
    obj2[1] = items3;
    obj[2] = tmp33(require("Stack").Stack, obj2);
    return tmp31(tmp32, obj);
  }
}
function AddMembers(guildId) {
  const _require = guildId;
  let tmp = callback3();
  importDefault = React.useRef(guildId);
  let obj = _require(navigation[40]);
  navigation = obj.useNavigation();
  guild = guild.getGuild(guildId.guildId);
  importDefault(navigation[36])(null != guild, "Guild must not be null");
  const currentUser = authStore.getCurrentUser();
  importDefault(navigation[36])(null != currentUser, "AddMembers: user cannot be undefined");
  const canResult = closure_12.can(constants2.ADMINISTRATOR, guild);
  React = canResult;
  const tmp10 = callback(guild, currentUser);
  closure_5 = tmp10;
  const tmp11 = currentUser(React.useState({}), 2);
  const first = tmp11[0];
  const tmp13 = currentUser(importDefault(navigation[41])(guildId.onChannelCreated), 3);
  const first1 = tmp13[0];
  closure_8 = tmp16;
  const effect = React.useEffect(() => {
    closure_1.current = closure_0;
  });
  const items = [canResult, tmp10, navigation, tmp13[2], first, currentUser.id];
  callback = React.useCallback(() => {
    const current = result.current;
    ({ guildId, channelType } = current);
    ({ name, categoryId, onChannelCreated, flags } = current);
    let obj = guildId(navigation[48]);
    result = obj.permissionOverwritesForRoles(guildId, channelType, [], true);
    const values = Object.values(first);
    const item = values.forEach((row) => {
      row = row.row;
      let tmp = null != row.id;
      if (tmp) {
        tmp = "" !== row.id;
      }
      if (tmp) {
        if (row.rowType === closure_1_20.ROLE) {
          arr = arr.push(channelType(closure_1_2[48]).permissionOverwriteForRole(row.id, channelType));
          const obj2 = channelType(closure_1_2[48]);
        } else if (row.rowType === tmp2.MEMBER) {
          arr = arr.push(channelType(closure_1_2[48]).permissionOverwriteForUser(row.id, channelType));
          const obj = channelType(closure_1_2[48]);
        }
      }
    });
    let tmp4 = closure_4;
    if (!closure_4) {
      tmp4 = closure_5;
    }
    if (!tmp4) {
      result.push(guildId(navigation[48]).permissionOverwriteForUser(currentUser.id, channelType));
      const tmpResult = guildId(navigation[48]);
    }
    obj = { overwrites: result, guildId, channelType, name, categoryId, flags };
    if (channelType === closure_1_15.GUILD_STAGE_VOICE) {
      obj = {};
      const merged = Object.assign(obj);
      obj.guildId = guildId;
      obj.onChannelCreated = onChannelCreated;
      navigation.push(closure_1_30.ADD_MODERATORS, obj);
    } else {
      callback(obj);
    }
  }, items);
  const items1 = [navigation, first, first1, callback];
  const layoutEffect = React.useLayoutEffect(() => {
    let PDTjLN = navigation;
    const intl = guildId(navigation[26]).intl;
    guildId = intl.string(guildId(navigation[26]).t["5Wxrcd"]);
    if (Object.keys(first).length <= 0) {
      const obj = { headerRight: null };
      obj[0] = first1 ? (() => callback(stringResult(table[43]).HeaderSubmittingIndicator, {})) : (() => closure_2_21(stringResult(navigation[45]).HeaderActionButton, { text: stringResult, onPress: closure_1_9 }));
      navigation.setOptions(obj);
    } else {
      if (ref.current.channelType === closure_1_15.GUILD_STAGE_VOICE) {
        const intl3 = tmp(PDTjLN[26]).intl;
        PDTjLN = tmp(PDTjLN[26]).t.PDTjLN;
        let stringResult = intl3.string(PDTjLN);
      } else {
        const intl2 = tmp(PDTjLN[26]).intl;
        stringResult = intl2.string(tmp(PDTjLN[26]).t.CumH4u);
      }
      guildId = stringResult;
    }
  }, items1);
  obj = { style: tmp.addMembersContainer, children: null };
  let tmp22 = null;
  if (null != tmp13[1].message) {
    tmp22 = null;
    if ("" !== tmp15.message) {
      obj = { style: null, children: null };
      obj[0] = tmp.errorMessage;
      obj1 = { messageType: null, children: null };
      obj1[0] = tmp2(tmp3[33]).HelpMessageTypes.ERROR;
      obj1[1] = tmp15.message;
      obj[1] = callback(tmp2(tmp3[33]).HelpMessage, obj1);
      tmp22 = callback(tmp21, obj);
    }
  }
  const items2 = [tmp22, callback(_require(navigation[56]).AddMembersBody, { channel: null, guild, pendingAdditions: first, setPendingAdditions: tmp11[1] })];
  obj[1] = items2;
  return closure_23(first, obj);
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES: error, isGuildVocalChannelType: closure_8 } = createChannelRecord);
const ChannelTypes = ME.ChannelTypes;
({ GuildFeatures: closure_16, Permissions: closure_17, AnalyticEvents: closure_18, HelpdeskArticles: closure_19 } = ME);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
createCacheKey = { addMembersContainer: null, errorMessage: null, flexRow: null, horizontalContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 0 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { flex: 1, flexDirection: "row" };
let closure_24 = createCacheKey.createStyles(createCacheKey);
let obj1 = {};
obj1[ChannelTypes.GUILD_TEXT] = { IconComponent: require("TextIcon").TextIcon };
let obj2 = { IconComponent: require("TextIcon").TextIcon };
obj1[ChannelTypes.GUILD_FORUM] = { IconComponent: require("ForumIcon").ForumIcon };
let obj3 = { IconComponent: require("ForumIcon").ForumIcon };
obj1[ChannelTypes.GUILD_VOICE] = { IconComponent: require("VoiceNormalIcon").VoiceNormalIcon };
let obj4 = { IconComponent: require("VoiceNormalIcon").VoiceNormalIcon };
obj1[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: require("StageIcon").StageIcon };
let obj5 = { IconComponent: require("StageIcon").StageIcon };
obj1[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: require("AnnouncementsIcon").AnnouncementsIcon };
let obj6 = { IconComponent: require("AnnouncementsIcon").AnnouncementsIcon };
obj1[ChannelTypes.GUILD_MEDIA] = { IconComponent: require("ImageIcon").ImageIcon };
let obj8 = {};
let obj7 = { IconComponent: require("ImageIcon").ImageIcon };
obj8[ChannelTypes.GUILD_TEXT] = { IconComponent: require("TextLockIcon").TextLockIcon };
let obj9 = { IconComponent: require("TextLockIcon").TextLockIcon };
obj8[ChannelTypes.GUILD_FORUM] = { IconComponent: require("ForumLockIcon").ForumLockIcon };
let obj10 = { IconComponent: require("ForumLockIcon").ForumLockIcon };
obj8[ChannelTypes.GUILD_VOICE] = { IconComponent: require("VoiceLockIcon").VoiceLockIcon };
let obj11 = { IconComponent: require("VoiceLockIcon").VoiceLockIcon };
obj8[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: require("StageLockIcon").StageLockIcon };
let obj12 = { IconComponent: require("StageLockIcon").StageLockIcon };
obj8[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: require("AnnouncementsLockIcon").AnnouncementsLockIcon };
let obj13 = { IconComponent: require("AnnouncementsLockIcon").AnnouncementsLockIcon };
obj8[ChannelTypes.GUILD_MEDIA] = { IconComponent: require("ImageIcon").ImageIcon };
let closure_30 = { CREATE_CHANNEL: "CREATE_CHANNEL", ADD_MEMBERS: "ADD_MEMBERS", ADD_MODERATORS: "ADD_MODERATORS" };
let obj14 = { IconComponent: require("ImageIcon").ImageIcon };
let result = require("set").fileFinishedImporting("components_native/CreateChannelModal.tsx");

export default function CreateChannelModal(arg0) {
  const _require = arg0;
  ({ screens, initialStack } = useInitialValueDefault(() => {
    let obj = { name: closure_1_30.CREATE_CHANNEL, params: null };
    obj = {};
    let merged = Object.assign(callback);
    obj[1] = obj;
    const items = [obj];
    obj = { screens: null, initialStack: null };
    obj1 = {};
    const obj2 = {
      impressionName: callback(closure_1_2[57]).ImpressionNames.CHANNEL_ADD_INFO,
      impressionProperties: { impression_group: callback(closure_1_2[57]).ImpressionGroups.CHANNEL_ADD_FLOW },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(closure_28, {});
      }
    };
    obj1[closure_1_30.CREATE_CHANNEL] = obj2;
    const obj4 = { headerTitle: null, impressionName: null, impressionProperties: null, render: null };
    const intl = callback(closure_1_2[26]).intl;
    obj4[0] = intl.string(callback(closure_1_2[26]).t.dMJ3Y6);
    obj4[1] = callback(closure_1_2[57]).ImpressionNames.CHANNEL_ADD_MEMBERS;
    const obj3 = { impression_group: callback(closure_1_2[57]).ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4[2] = { impression_group: callback(closure_1_2[57]).ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4[3] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(closure_29, {});
    };
    obj1[closure_1_30.ADD_MEMBERS] = obj4;
    const obj6 = { headerTitle: null, render: null };
    const intl2 = callback(closure_1_2[26]).intl;
    obj6[0] = intl2.string(callback(closure_1_2[26]).t.n3bcy8);
    obj6[1] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(table[58]), {});
    };
    obj1[closure_1_30.ADD_MODERATORS] = obj6;
    obj[0] = obj1;
    obj[1] = items;
    return obj;
  }));
  return callback(_require(5960).Navigator, { screens, initialRouteStack });
};
export { CreateChannel };