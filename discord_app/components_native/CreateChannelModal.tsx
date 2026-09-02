// discord_app/components_native/CreateChannelModal.tsx
import ThemesDefault from "../../discord_common/js/packages/tokens/native.tsx";
import useInitialValueDefault from "../hooks/useInitialValue.tsx";
import closure_3 from "../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../_runtime/00017_get_ActivityIndicator.js";
import { isGuildVocalChannelType } from "../records/ChannelRecord.tsx";
import { isGuildOwner } from "../records/GuildRecord.tsx";
import closure_9 from "../stores/ChannelStore.tsx";
import closure_10 from "../stores/GuildStore.tsx";
import closure_11 from "../stores/PermissionStore.tsx";
import closure_12 from "../stores/RelationshipStore.tsx";
import closure_13 from "../stores/UserStore.tsx";
import ME from "../Constants.tsx";
import { RowType } from "../modules/channel_permissions/ChannelPermissionsConstants.tsx";
import jsxProd from "../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function ChannelTypeRow(selected) {
  selected = selected.selected;
  const channelType = selected.channelType;
  const onPress = selected.onPress;
  ({ isPrivate, isBeta } = selected);
  const tmp = callback3();
  let obj = selected(onPress[32]);
  const radioA11yNative = obj.useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (ChannelTypes.GUILD_TEXT === channelType) {
    obj = { label: null, description: null };
    const intl11 = tmp2(tmp3[29]).intl;
    obj[0] = intl11.string(tmp2(tmp3[29]).t.pnuRXC);
    const intl12 = tmp2(tmp3[29]).intl;
    obj[1] = intl12.string(tmp2(tmp3[29]).t.oG6WsM);
    let tmp6 = obj;
  } else if (tmp5.GUILD_VOICE === channelType) {
    obj = { label: null, description: null };
    const intl9 = tmp2(tmp3[29]).intl;
    obj[0] = intl9.string(tmp2(tmp3[29]).t.Sx55Oh);
    const intl10 = tmp2(tmp3[29]).intl;
    obj[1] = intl10.string(tmp2(tmp3[29]).t.pqfkoF);
    tmp6 = obj;
  } else if (tmp5.GUILD_FORUM === channelType) {
    obj1 = { label: null, description: null };
    const intl7 = tmp2(tmp3[29]).intl;
    obj1[0] = intl7.string(tmp2(tmp3[29]).t.eAVID5);
    const intl8 = tmp2(tmp3[29]).intl;
    obj1[1] = intl8.string(tmp2(tmp3[29]).t.iZ5pgg);
    tmp6 = obj1;
  } else if (tmp5.GUILD_ANNOUNCEMENT === channelType) {
    const obj2 = { label: null, description: null };
    const intl5 = tmp2(tmp3[29]).intl;
    obj2[0] = intl5.string(tmp2(tmp3[29]).t.qr9dEP);
    const intl6 = tmp2(tmp3[29]).intl;
    obj2[1] = intl6.string(tmp2(tmp3[29]).t.gBkfzu);
    tmp6 = obj2;
  } else if (tmp5.GUILD_STAGE_VOICE === channelType) {
    const obj3 = { label: null, description: null };
    const intl3 = tmp2(tmp3[29]).intl;
    obj3[0] = intl3.string(tmp2(tmp3[29]).t.pNWst0);
    const intl4 = tmp2(tmp3[29]).intl;
    obj3[1] = intl4.string(tmp2(tmp3[29]).t.VPAwgo);
    tmp6 = obj3;
  } else if (tmp5.GUILD_APP === channelType) {
    const obj4 = { label: null, description: null };
    const intl = tmp2(tmp3[29]).intl;
    obj4[0] = intl.string(tmp2(tmp3[29]).t["A+8d6M"]);
    const intl2 = tmp2(tmp3[29]).intl;
    obj4[1] = intl2.string(tmp2(tmp3[29]).t.LVQQ3Z);
    tmp6 = obj4;
  } else if (tmp5.GUILD_MEDIA === channelType) {
    const obj5 = { label: null, description: null };
    const intl13 = tmp2(tmp3[29]).intl;
    obj5[0] = intl13.string(tmp2(tmp3[29]).t["6x6fVg"]);
    const obj6 = { children: null };
    const obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl14 = tmp2(tmp3[29]).intl;
    obj7[2] = intl14.string(tmp2(tmp3[29]).t.JyCrwS);
    const items = [callback(tmp2(tmp3[30]).Text, obj7)];
    const obj8 = { variant: "text-xs/normal", children: null };
    const intl15 = tmp2(tmp3[29]).intl;
    obj9 = { hcArticleUrl: null };
    let obj14 = channelType(tmp3[31]);
    obj9[0] = obj14.getCreatorSupportArticleURL(constants3.MEDIA_CHANNEL);
    obj8[1] = intl15.format(tmp2(tmp3[29]).t["2Sapx1"], obj9);
    items[1] = callback(tmp2(tmp3[30]).Text, obj8);
    obj6[0] = items;
    obj5[1] = callback2(closure_21, obj6);
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
    icon: callback(closure_6, {
      style: tmp.flexRow,
      children: callback(isPrivate ? obj9 : obj1[channelType].IconComponent, {}),
    }),
    trailing: callback(selected(onPress[34]).FormRadio, { selected }),
    label: null,
    subLabel: null,
  };
  let tmp9 = label;
  if (true === isBeta) {
    const obj12 = { style: null, children: null };
    obj12[0] = tmp.horizontalContainer;
    const obj13 = { text: null };
    obj13[0] = label;
    const items1 = [tmp7(tmp2(tmp3[35]).FormLabel, obj13)];
    obj14 = { size: null };
    obj14[0] = tmp2(tmp3[36]).BetaSizes.SMALL;
    items1[1] = tmp7(tmp2(tmp3[36]).BetaTag, obj14);
    obj12[1] = items1;
    tmp9 = callback2(closure_6, obj12);
  }
  obj10[5] = tmp9;
  obj10[6] = tmp6.description;
  return callback(selected(onPress[33]).TableRow, obj10);
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
    obj = require("initialize");
    items = [];
    items[0] = closure_10;
    stateFromStores = obj.useStateFromStores(items, () => first1.getGuild(guildId));
    obj2 = require("initialize");
    items1 = [];
    items1[0] = closure_9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let channel = null;
      if (null != closure_1) {
        channel = channel.getChannel(tmp);
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
    tmp13 = require("../../_runtime/metro/00038__.js")(null != currentUser, "CreateChannel: user cannot be undefined");
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
      tmp17 = closure_14;
      channelType = closure_14.GUILD_TEXT;
    }
    tmp14Result = tmp14(obj3.useState(channelType), 2);
    first1 = tmp14Result[0];
    closure_10 = first1;
    closure_11 = tmp14Result[1];
    tmp4Result = require("createModeratorOverwrite");
    canCreateStageChannelByGuild = tmp4Result.useCanCreateStageChannelByGuild(guildId);
    tmp4Result1 = require("useGuildEligibleForMediaChannels");
    guildEligibleForMediaChannels = tmp4Result1.useGuildEligibleForMediaChannels(stateFromStores);
    tmp2Result = require("apexExperiment");
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
    tmp4Result2 = require("useNavigation");
    navigation = tmp4Result2.useNavigation();
    closure_13 = navigation;
    tmp14Result2 = tmp14(require("useCreateChannelSubmit")(onChannelCreated), 3);
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
      callback(createMode[46]).trackWithMetadata(lib.OPEN_MODAL, { type: "Create Channel" });
    }, []);
    items2 = [, , , , , , , , , , , , ,];
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
        headerLeft: categoryId(createMode[47]).getHeaderCloseButton(closure_1_1(createMode[48]).close),
        headerRight() {
          if (closure_14) {
            let tmpResult = tmp(closure_1_0(closure_1_2[47]).HeaderSubmittingIndicator, {});
          } else {
            let tmp5 = closure_16;
            if (!closure_16) {
              if (closure_10 !== closure_1_14.GUILD_STAGE_VOICE) {
                const intl = closure_1_0(closure_1_2[29]).intl;
                let stringResult = intl.string(closure_1_0(closure_1_2[29]).t.CumH4u);
              }
              let obj = { text: null, disabled: null, onPress: null };
              obj[0] = stringResult;
              let tmp18 = "" === closure_8;
              if (!tmp18) {
                if (tmp5) {
                  tmp5 = !closure_1_0(closure_1_2[50]).canCreatePrivateChannel(closure_10, closure_6, closure_7);
                  const obj2 = closure_1_0(closure_1_2[50]);
                }
                tmp18 = tmp5;
              }
              if (!tmp18) {
                let tmp26 = closure_10 === closure_1_14.GUILD_APP;
                if (tmp26) {
                  tmp26 = null == closure_12;
                }
                tmp18 = tmp26;
              }
              obj[1] = tmp18;
              obj[2] = function onPress() {
                if (null != closure_5) {
                  let obj = closure_1_1(closure_1_2[51]);
                  let items = obj.values(tmp.permissionOverwrites);
                } else {
                  items = [];
                }
                obj = {
                  overwrites: items,
                  bitrate: null,
                  userLimit: null,
                  createMode: null,
                  guildId: null,
                  name: null,
                  channelType: null,
                  categoryId: null,
                  applicationId: null,
                  onChannelCreated: null,
                };
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
                obj[8] = closure_12;
                obj[9] = closure_4;
                if (closure_16) {
                  obj = {
                    guildId: null,
                    channelType: null,
                    name: null,
                    categoryId: null,
                    applicationId: null,
                    onChannelCreated: null,
                  };
                  obj[0] = tmp6;
                  obj[1] = tmp8;
                  obj[2] = tmp7;
                  obj[3] = tmp9;
                  obj[4] = tmp10;
                  obj[5] = tmp11;
                  arr = arr.push(closure_1_29.ADD_MEMBERS, obj);
                } else if (tmp8 === closure_1_14.GUILD_STAGE_VOICE) {
                  arr = arr.push(closure_1_29.ADD_MODERATORS, obj);
                } else {
                  callback(obj);
                }
              };
              tmpResult = tmp(tmp4, obj);
            }
            const intl2 = closure_1_0(closure_1_2[29]).intl;
            stringResult = intl2.string(closure_1_0(closure_1_2[29]).t.PDTjLN);
          }
          return tmpResult;
        },
        headerTitle: null,
      };
      if (null != stateFromStores1) {
        const intl3 = tmp2(tmp3[29]).intl;
        let stringResult = intl3.string(tmp2(tmp3[29]).t.dEaPc4);
      } else {
        if (null !== tmp4) {
          if (first3.GUILD_TEXT !== tmp4) {
            if (tmp12.GUILD_VOICE !== tmp4) {
              if (tmp12.GUILD_STAGE_VOICE !== tmp4) {
                if (tmp12.GUILD_ANNOUNCEMENT !== tmp4) {
                  if (tmp12.GUILD_FORUM !== tmp4) {
                    if (tmp12.GUILD_MEDIA !== tmp4) {
                      if (tmp12.GUILD_APP !== tmp4) {
                        if (tmp12.GUILD_CATEGORY === tmp4) {
                          let intl = tmp2(tmp3[29]).intl;
                          stringResult = intl.string(tmp2(tmp3[29]).t["ISN+NM"]);
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
        }
        let intl2 = tmp2(tmp3[29]).intl;
        stringResult = intl2.string(tmp2(tmp3[29]).t["fUYU+j"]);
      }
      obj[2] = stringResult;
      navigation.setOptions(obj);
    }, items2);
    tmp34 = jsx;
    obj = { keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
    obj1 = {
      padding: require("Themes").space.PX_16,
      paddingBottom: require("Themes").space.PX_16 + require("useSafeAreaInsetsKeyboardAware")().insets.bottom,
    };
    tmp35 = closure_5;
    obj[1] = obj1;
    tmp36 = jsxs;
    obj2 = { spacing: require("Themes").space.PX_16, children: null };
    tmp37 = closure_14;
    if (first1 === closure_14.GUILD_CATEGORY) {
      intl2 = require("getSystemLocale").intl;
      stringResult = intl2.string(require("getSystemLocale").t.OCAkGP);
    } else {
      intl = require("getSystemLocale").intl;
      stringResult = intl.string(require("getSystemLocale").t.PVbHDl);
    }
    obj3 = {
      label: stringResult,
      errorMessage: null,
      description: null,
      autoFocus: true,
      enableAndroidSanitizedInputWorkaround: true,
      value: null,
      onChange: null,
      placeholder: null,
    };
    name = tmp28.name;
    first5 = undefined;
    if (name != null) {
      first5 = name[0];
    }
    obj3[1] = first5;
    if (first1 === tmp37.GUILD_FORUM) {
      intl4 = require("getSystemLocale").intl;
      stringResult1 = intl4.string(require("getSystemLocale").t.qBvLY4);
    } else if (null != stateFromStores1) {
      intl3 = require("getSystemLocale").intl;
      obj4 = { name: null };
      tmp4Result3 = require("computeChannelName");
      tmp41 = closure_12;
      flag = true;
      tmp42 = tmp4Result3;
      tmp43 = stateFromStores1;
      tmp44 = tmp11;
      obj4[0] = tmp4Result3.computeChannelName(stateFromStores1, tmp11, closure_12, true);
      stringResult1 = intl3.format(require("getSystemLocale").t.s2ZzZZ, obj4);
    }
    obj3[2] = stringResult1;
    obj3[5] = first;
    obj3[6] = function onChange(arg0) {
      if (first !== arg0) {
        channel(closure_1_1(createMode[52])(arg0, first1));
      }
    };
    if (first1 === tmp37.GUILD_CATEGORY) {
      intl7 = require("getSystemLocale").intl;
      stringResult2 = intl7.string(require("getSystemLocale").t.eTVbtx);
    } else if (first1 === tmp37.GUILD_FORUM) {
      intl6 = require("getSystemLocale").intl;
      stringResult2 = intl6.string(require("getSystemLocale").t["5z1Xat"]);
    } else {
      intl5 = require("getSystemLocale").intl;
      stringResult2 = intl5.string(require("getSystemLocale").t["bw/b8E"]);
    }
    obj3[7] = stringResult2;
    items3 = [, ,];
    items3[0] = tmp34(require("TextInput").TextInput, obj3);
    tmp36Result2 = null;
    if (null == stateFromStores1) {
      tmp47 = Fragment;
      tmp36Result = null;
      if (first1 !== tmp37.GUILD_CATEGORY) {
        handleTypeChange = function handleTypeChange(arg0) {
          callback2(arg0);
          channel(closure_1_1(createMode[52])(first, arg0));
        };
        obj5 = { title: null, hasIcons: true, children: null };
        intl12 = require("getSystemLocale").intl;
        obj5[0] = intl12.string(require("getSystemLocale").t["7ZcXG2"]);
        tmp63 = ChannelTypeRow;
        obj6 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj6[0] = tmp37.GUILD_TEXT;
        obj6[1] = first1 === tmp37.GUILD_TEXT;
        obj6[2] = first4;
        obj6[3] = handleTypeChange;
        items4 = [, , , , , ,];
        items4[0] = tmp34(ChannelTypeRow, obj6);
        obj7 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj7[0] = tmp37.GUILD_VOICE;
        obj7[1] = first1 === tmp37.GUILD_VOICE;
        obj7[2] = first4;
        obj7[3] = handleTypeChange;
        items4[1] = tmp34(ChannelTypeRow, obj7);
        obj8 = { channelType: null, selected: null, isPrivate: null, onPress: null };
        obj8[0] = tmp37.GUILD_FORUM;
        obj8[1] = first1 === tmp37.GUILD_FORUM;
        obj8[2] = first4;
        obj8[3] = handleTypeChange;
        items4[2] = tmp34(ChannelTypeRow, obj8);
        tmp34Result = null;
        if (guildEligibleForMediaChannels) {
          obj9 = { channelType: null, selected: null, isPrivate: null, isBeta: true, onPress: null };
          obj9[0] = tmp37.GUILD_MEDIA;
          obj9[1] = first1 === tmp37.GUILD_MEDIA;
          obj9[2] = first4;
          obj9[4] = handleTypeChange;
          tmp34Result = tmp34(tmp63, obj9);
        }
        items4[3] = tmp34Result;
        tmp34Result1 = null;
        if (hasItem) {
          tmp34Result1 = null;
          if (createMode !== require("useCreateChannelSubmit").CreateChannelMode.PREMIUM_CHANNEL) {
            obj10 = { channelType: null, selected: null, isPrivate: null, onPress: null };
            obj10[0] = tmp37.GUILD_ANNOUNCEMENT;
            obj10[1] = first1 === tmp37.GUILD_ANNOUNCEMENT;
            obj10[2] = first4;
            obj10[3] = handleTypeChange;
            tmp34Result1 = tmp34(tmp63, obj10);
          }
        }
        items4[4] = tmp34Result1;
        tmp34Result2 = null;
        if (canCreateStageChannelByGuild) {
          tmp34Result2 = null;
          if (!first4) {
            obj11 = { channelType: null, selected: null, isPrivate: null, onPress: null };
            obj11[0] = tmp37.GUILD_STAGE_VOICE;
            obj11[1] = first1 === tmp37.GUILD_STAGE_VOICE;
            obj11[2] = first4;
            obj11[3] = handleTypeChange;
            tmp34Result2 = tmp34(tmp63, obj11);
          }
        }
        items4[5] = tmp34Result2;
        tmp34Result3 = null;
        if (tmp2Result.useConfig({ guildId, location: "CreateChannel mobile" }).enabled) {
          obj12 = { channelType: null, selected: null, isPrivate: null, onPress: null };
          obj12[0] = tmp37.GUILD_APP;
          obj12[1] = first1 === tmp37.GUILD_APP;
          obj12[2] = first4;
          obj12[3] = handleTypeChange;
          tmp34Result3 = tmp34(tmp63, obj12);
        }
        items4[6] = tmp34Result3;
        obj5[2] = items4;
        tmp36Result = tmp36(require("TableRowGroupTitle").TableRowGroup, obj5);
      }
      items5 = [, , ,];
      items5[0] = tmp36Result;
      tmp34Result4 = null;
      if (first1 === tmp37.GUILD_APP) {
        obj13 = { guildId: null, channelId: null, selectedApplicationId: null, onChange: null };
        obj13[0] = guildId;
        obj13[1] = categoryId;
        obj13[2] = first2;
        obj13[3] = tmp14Result1[1];
        tmp34Result4 = tmp34(require("AppChannelApplicationSelector"), obj13);
      }
      items5[1] = tmp34Result4;
      obj14 = { guildId: null, channelType: null };
      obj14[0] = guildId;
      obj14[1] = first1;
      items5[2] = tmp34(require("CreateChannelTypeDescription"), obj14);
      tmp36Result1 = null;
      if (first1 !== tmp37.GUILD_STAGE_VOICE) {
        tmp36Result1 = null;
        if (createMode !== require("useCreateChannelSubmit").CreateChannelMode.PREMIUM_CHANNEL) {
          if (first1 === tmp37.GUILD_CATEGORY) {
            intl9 = require("getSystemLocale").intl;
            stringResult3 = intl9.string(require("getSystemLocale").t.RQUk61);
          } else {
            tmp55 = closure_7;
            tmp56 = closure_7(first1);
            intl8 = require("getSystemLocale").intl;
            string = intl8.string;
            t = require("getSystemLocale").t;
            if (tmp56) {
              stringResult3 = string(t.cLjvKg);
            } else {
              stringResult3 = string(t.hfbjIH);
            }
          }
          obj15 = { description: null, hasIcons: true, children: null };
          obj15[0] = stringResult3;
          if (first1 === tmp37.GUILD_CATEGORY) {
            intl11 = require("getSystemLocale").intl;
            stringResult4 = intl11.string(require("getSystemLocale").t.lEPAZ5);
          } else {
            intl10 = require("getSystemLocale").intl;
            stringResult4 = intl10.string(require("getSystemLocale").t.aUI70g);
          }
          obj16 = { label: null, icon: null, value: null, onValueChange: null };
          obj16[0] = stringResult4;
          obj16[1] = tmp34(require("LockIcon").LockIcon, {});
          obj16[2] = first4;
          obj16[3] = function onValueChange(arg0) {
            lib(arg0);
          };
          obj15[2] = tmp34(require("TableSwitchRow").TableSwitchRow, obj16);
          items6 = [,];
          items6[0] = tmp34(require("TableRowGroupTitle").TableRowGroup, obj15);
          tmp34Result5 = null;
          if (first4) {
            tmp4Result4 = require("getRoleRowData");
            tmp34Result5 = null;
            if (!tmp4Result4.canCreatePrivateChannel(first1, canResult, canResult1)) {
              tmp60 = closure_6;
              obj17 = { style: null, children: null };
              obj17[0] = tmp.errorMessage;
              obj18 = { messageType: null, children: null };
              obj18[0] = require("Button").HelpMessageTypes.ERROR;
              tmp4Result5 = require("getRoleRowData");
              obj18[1] = tmp4Result5.getPrivateChannelHintText(first1);
              obj17[1] = tmp34(require("Button").HelpMessage, obj18);
              tmp34Result5 = tmp34(closure_6, obj17);
            }
          }
          obj19 = { children: null };
          items6[1] = tmp34Result5;
          obj19[0] = items6;
          tmp36Result1 = tmp36(tmp47, obj19);
        }
      }
      obj20 = { children: null };
      items5[3] = tmp36Result1;
      obj20[0] = items5;
      tmp36Result2 = tmp36(tmp47, obj20);
    }
    items3[1] = tmp36Result2;
    tmp34Result6 = null;
    if (null != tmp28.message) {
      tmp62 = closure_6;
      obj21 = { style: null, children: null };
      obj21[0] = tmp.errorMessage;
      obj22 = { messageType: null, children: null };
      obj22[0] = require("Button").HelpMessageTypes.ERROR;
      obj22[1] = tmp28.message;
      obj21[1] = tmp34(require("Button").HelpMessage, obj22);
      tmp34Result6 = tmp34(closure_6, obj21);
    }
    items3[2] = tmp34Result6;
    obj2[1] = items3;
    obj[2] = tmp36(require("Stack").Stack, obj2);
    return tmp34(tmp35, obj);
  }
}
function AddMembers(guildId) {
  const _require = guildId;
  let tmp = callback3();
  importDefault = React.useRef(guildId);
  let obj = _require(navigation[44]);
  navigation = obj.useNavigation();
  guild = guild.getGuild(guildId.guildId);
  importDefault(navigation[39])(null != guild, "Guild must not be null");
  currentUser = currentUser.getCurrentUser();
  importDefault(navigation[39])(null != currentUser, "AddMembers: user cannot be undefined");
  const canResult = closure_11.can(constants2.ADMINISTRATOR, guild);
  React = canResult;
  const tmp10 = isGuildOwner(guild, currentUser);
  closure_5 = tmp10;
  const tmp11 = currentUser(React.useState({}), 2);
  const first = tmp11[0];
  const tmp13 = currentUser(importDefault(navigation[45])(guildId.onChannelCreated), 3);
  const first1 = tmp13[0];
  isGuildOwner = tmp16;
  const effect = React.useEffect(() => {
    closure_1.current = closure_0;
  });
  const items = [canResult, tmp10, navigation, tmp13[2], first, currentUser.id];
  const callback = React.useCallback(() => {
    const current = result.current;
    ({ guildId, channelType } = current);
    ({ name, categoryId, applicationId, onChannelCreated, flags } = current);
    let obj = guildId(navigation[60]);
    result = obj.permissionOverwritesForRoles(guildId, channelType, [], true);
    const values = Object.values(first);
    const item = values.forEach((row) => {
      row = row.row;
      let tmp = null != row.id;
      if (tmp) {
        tmp = "" !== row.id;
      }
      if (tmp) {
        if (row.rowType === closure_1_19.ROLE) {
          arr = arr.push(channelType(closure_1_2[60]).permissionOverwriteForRole(row.id, channelType));
          const obj2 = channelType(closure_1_2[60]);
        } else if (row.rowType === tmp2.MEMBER) {
          arr = arr.push(channelType(closure_1_2[60]).permissionOverwriteForUser(row.id, channelType));
          const obj = channelType(closure_1_2[60]);
        }
      }
    });
    let tmp4 = closure_4;
    if (!closure_4) {
      tmp4 = closure_5;
    }
    if (!tmp4) {
      result.push(guildId(navigation[60]).permissionOverwriteForUser(currentUser.id, channelType));
      const tmpResult = guildId(navigation[60]);
    }
    obj = { overwrites: result, guildId, channelType, name, categoryId, applicationId, flags };
    if (channelType === closure_1_14.GUILD_STAGE_VOICE) {
      obj = {};
      const merged = Object.assign(obj);
      obj.guildId = guildId;
      obj.onChannelCreated = onChannelCreated;
      navigation.push(closure_1_29.ADD_MODERATORS, obj);
    } else {
      callback(obj);
    }
  }, items);
  const items1 = [navigation, first, first1, callback];
  const layoutEffect = React.useLayoutEffect(() => {
    let PDTjLN = navigation;
    const intl = guildId(navigation[29]).intl;
    guildId = intl.string(guildId(navigation[29]).t["5Wxrcd"]);
    if (Object.keys(first).length <= 0) {
      const obj = { headerRight: null };
      obj[0] = first1
        ? () => callback(stringResult(table[47]).HeaderSubmittingIndicator, {})
        : () =>
            closure_2_20(stringResult(navigation[49]).HeaderActionButton, { text: stringResult, onPress: closure_1_9 });
      navigation.setOptions(obj);
    } else {
      if (ref.current.channelType === closure_1_14.GUILD_STAGE_VOICE) {
        const intl3 = tmp(PDTjLN[29]).intl;
        PDTjLN = tmp(PDTjLN[29]).t.PDTjLN;
        let stringResult = intl3.string(PDTjLN);
      } else {
        const intl2 = tmp(PDTjLN[29]).intl;
        stringResult = intl2.string(tmp(PDTjLN[29]).t.CumH4u);
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
      obj1[0] = tmp2(tmp3[36]).HelpMessageTypes.ERROR;
      obj1[1] = tmp15.message;
      obj[1] = callback(tmp2(tmp3[36]).HelpMessage, obj1);
      tmp22 = callback(tmp21, obj);
    }
  }
  const items2 = [
    tmp22,
    callback(_require(navigation[61]).AddMembersBody, {
      channel: null,
      guild,
      pendingAdditions: first,
      setPendingAdditions: tmp11[1],
    }),
  ];
  obj[1] = items2;
  return closure_22(first, obj);
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
const ChannelTypes = ME.ChannelTypes;
({ GuildFeatures: closure_15, Permissions: closure_16, AnalyticEvents: closure_17, HelpdeskArticles: closure_18 } = ME);
({ jsx: closure_20, Fragment: closure_21, jsxs: closure_22 } = jsxProd);
createCacheKey = { addMembersContainer: null, errorMessage: null, flexRow: null, horizontalContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 0 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { flex: 1, flexDirection: "row" };
let closure_23 = createCacheKey.createStyles(createCacheKey);
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
let obj7 = { IconComponent: require("ImageIcon").ImageIcon };
obj1[ChannelTypes.GUILD_APP] = { IconComponent: require("AppsIcon").AppsIcon };
let obj9 = {};
let obj8 = { IconComponent: require("AppsIcon").AppsIcon };
obj9[ChannelTypes.GUILD_TEXT] = { IconComponent: require("TextLockIcon").TextLockIcon };
let obj10 = { IconComponent: require("TextLockIcon").TextLockIcon };
obj9[ChannelTypes.GUILD_FORUM] = { IconComponent: require("ForumLockIcon").ForumLockIcon };
let obj11 = { IconComponent: require("ForumLockIcon").ForumLockIcon };
obj9[ChannelTypes.GUILD_VOICE] = { IconComponent: require("VoiceLockIcon").VoiceLockIcon };
let obj12 = { IconComponent: require("VoiceLockIcon").VoiceLockIcon };
obj9[ChannelTypes.GUILD_STAGE_VOICE] = { IconComponent: require("StageLockIcon").StageLockIcon };
let obj13 = { IconComponent: require("StageLockIcon").StageLockIcon };
obj9[ChannelTypes.GUILD_ANNOUNCEMENT] = { IconComponent: require("AnnouncementsLockIcon").AnnouncementsLockIcon };
let obj14 = { IconComponent: require("AnnouncementsLockIcon").AnnouncementsLockIcon };
obj9[ChannelTypes.GUILD_MEDIA] = { IconComponent: require("ImageLockIcon").ImageLockIcon };
let obj15 = { IconComponent: require("ImageLockIcon").ImageLockIcon };
obj9[ChannelTypes.GUILD_APP] = { IconComponent: require("AppsLockIcon").AppsLockIcon };
let closure_29 = { CREATE_CHANNEL: "CREATE_CHANNEL", ADD_MEMBERS: "ADD_MEMBERS", ADD_MODERATORS: "ADD_MODERATORS" };
let obj16 = { IconComponent: require("AppsLockIcon").AppsLockIcon };
let result = require("set").fileFinishedImporting("components_native/CreateChannelModal.tsx");

export default function CreateChannelModal(arg0) {
  const _require = arg0;
  ({ screens, initialStack } = useInitialValueDefault(() => {
    let obj = { name: closure_1_29.CREATE_CHANNEL, params: null };
    obj = {};
    let merged = Object.assign(callback);
    obj[1] = obj;
    const items = [obj];
    obj = { screens: null, initialStack: null };
    obj1 = {};
    const obj2 = {
      impressionName: callback(closure_1_2[62]).ImpressionNames.CHANNEL_ADD_INFO,
      impressionProperties: { impression_group: callback(closure_1_2[62]).ImpressionGroups.CHANNEL_ADD_FLOW },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(closure_27, {});
      },
    };
    obj1[closure_1_29.CREATE_CHANNEL] = obj2;
    const obj4 = { headerTitle: null, impressionName: null, impressionProperties: null, render: null };
    const intl = callback(closure_1_2[29]).intl;
    obj4[0] = intl.string(callback(closure_1_2[29]).t.dMJ3Y6);
    obj4[1] = callback(closure_1_2[62]).ImpressionNames.CHANNEL_ADD_MEMBERS;
    const obj3 = { impression_group: callback(closure_1_2[62]).ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4[2] = { impression_group: callback(closure_1_2[62]).ImpressionGroups.CHANNEL_ADD_FLOW };
    obj4[3] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(closure_28, {});
    };
    obj1[closure_1_29.ADD_MEMBERS] = obj4;
    const obj6 = { headerTitle: null, render: null };
    const intl2 = callback(closure_1_2[29]).intl;
    obj6[0] = intl2.string(callback(closure_1_2[29]).t.n3bcy8);
    obj6[1] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(table[63]), {});
    };
    obj1[closure_1_29.ADD_MODERATORS] = obj6;
    obj[0] = obj1;
    obj[1] = items;
    return obj;
  }));
  return callback(require("../design/components/Navigator/native/Navigator.native.tsx").Navigator, {
    screens,
    initialRouteStack,
  });
}
export { CreateChannel };
